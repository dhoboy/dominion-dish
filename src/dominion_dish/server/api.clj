(ns dominion-dish.server.api
(:require [cheshire.core :refer :all] ; parses json
          [environ.core :refer [env]]
          [clojure.string :as str]
          [clj-http.client :as http-client]
          [simple-time.core :as stime]
          [clojure.core.async :as async :refer [>! >!! <! <!! go go-loop chan sliding-buffer alt! timeout]]))

(def ENV (env :ENV "local")) ; local or prod

(def app-keys 
  (if (= ENV "local")
    (parse-string (slurp "./keys.json") true)
    nil))

(def blog-id (env :blog-id (:blog-id app-keys)))
(def api-key (env :api-key (:api-key app-keys)))

;; add any new post-types to this json file and re-load this api and its ready to go
(def post-types
  (into #{}
    (:post-types
      (parse-string
        (slurp "./post-types.json")
        true))))

;; caching posts here to save on google api calls and for speed
;; e.g. { :latest [] :football [] :boys-basketball [] :girls-basketball [] }
(def posts
  (atom
    (reduce
      (fn [acc val] (assoc acc (keyword val) []))
      {}
      post-types)))

;; map of next page tokens per type of post, non-nil if more posts exist
;; e.g. { :latest nil :football nil :boys-basketball nil :girls-basketball nil }
(def next-page-token
  (atom
    (reduce
      (fn [acc val] (assoc acc (keyword val) nil))
      {}
      post-types)))

;; util for providing list pagination
(defn paginate-list
  "Given a sequence :item-list, returns that list paginated.
   Takes :page and :per params to create response pages."
  [{:keys [item-list page per] :or {page 1 per 10}}]
  (let [page (if (string? page) (Integer/parseInt page) page)
        per (if (string? per) (Integer/parseInt per) per)]
    {:pagination {:page page :per per}
     :items (take per (drop (* (- page 1) per) item-list))}))
  
;; util for manipulating dates with stime
(defn build-datetime
  "Given a datestring like '2021-08-25T02:14:00-07:00',
  returns (stime/datestring ...), ignoring the -07:00 style offset.
  Not using (stime/parse ...) here b/c these blogger v3 dates
  are not in the correct format for that fn and this feels more robust"
  [date-str]
  (let [day-time-parts (str/split date-str #"T") ; ["2021-08-25" "02:14:00-07:00"]
        day-parts (str/split (first day-time-parts) #"-") ; ["2021" "08" "25"]
        time-parts (str/split ; ["02" "14" "00"]
                    (first
                     (str/split
                      (last day-time-parts) 
                      #"-"))
                    #":")]
    (stime/datetime
      (Integer/parseInt (first day-parts))    ; year
      (Integer/parseInt (second day-parts))   ; month
      (Integer/parseInt (last day-parts))     ; day
      (Integer/parseInt (first time-parts))   ; hours
      (Integer/parseInt (second time-parts))  ; minutes
      (Integer/parseInt (last time-parts))))) ; seconds
    
;; util for sorting dates in descending order
(defn desc-date-sort
  [date1 date2]
  (> (stime/datetime->epoch (build-datetime date1))
     (stime/datetime->epoch (build-datetime date2))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Interact with blogger v3 api
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(defn- build-url
  "builds url for post list or for specific post calls"
  [{:keys [post-id post-type] :or {post-type "latest"}}] ; "latest" post-type gets all posts
   (str
    "https://www.googleapis.com/blogger/v3/blogs/" 
    blog-id
    "/posts" 
    (when post-id (str "/" post-id))
    "?key=" 
    api-key
    "&orderBy=published"
    "&status=live"
    (when (not= post-type "latest") (str "&labels=" post-type)) ; filter on post-type
    (when (and 
           (nil? post-id)
           (some? ((keyword post-type) @next-page-token)))
      (str "&pageToken=" ((keyword post-type) @next-page-token)))))

(defn- handle-timeout
  "Handles timeouts for calls by putting an error message on the passed in channel"
  [{:keys [channel ms url]}]
  ;; add to a log file later, but need to manage periodically clearing those out
  (println
    (str
      (stime/format (stime/now) :date-time)
      " - Call to '" url "' timed out in " ms " ms"))
  (go
    (>!
     channel
     {:error (str "The call timed out in " ms " ms")})))

(defn- handle-error
  "Handles errors for calls by putting an error message on the passed in channel"
  [{:keys [channel message url full-response]}]
  ;; add to a log file later, but need to manage periodically clearing those out
  (println
    (str
      (stime/format (stime/now) :date-time)
      " - Call to '" url "' errored with '" full-response "'"))
  (go 
    (>!
     channel
     {:error message})))

;; used by get-post-by-id callers to block for results
;; always only interested in the latest thing on this channel
;; sliding buffer just incase something was still on here before re-using.
(def post-by-id-chan (chan (sliding-buffer 1)))

(defn- get-post-by-id
  "Gets a specific post given a post-id"
  [post-id]
  (let [call (chan)
        url (build-url {:post-id post-id})]
    (go
      (>!
       call
       (try
         (http-client/get url)
         (catch Exception e (str "Exception: " (.getMessage e))))))
    (go
      (alt!
        (timeout 5000) (handle-timeout {:channel post-by-id-chan :ms 5000 :url url})
        call ([{:keys [status body] :as resp}]
              (if (= status 200)
                (let [parsed-body (parse-string body true)
                      post-type-key (or
                                     (keyword
                                      (first (:labels parsed-body)))
                                     :latest)]
                  (swap!
                   posts
                   update-in [post-type-key]
                   (fn [current-state]  ; calls for arbitrary posts aren't sorted
                     (->> [parsed-body] ; sort by date here to keep list in order
                          (concat current-state)
                          (distinct)
                          (sort-by :published #(desc-date-sort %1 %2))
                          (into []))))
                  (go
                    (>!
                     post-by-id-chan
                     (paginate-list {:item-list [parsed-body] :page 1 :per 1}))))
                (handle-error 
                 {:channel post-by-id-chan 
                  :message (str "Error getting post: " post-id)
                  :url url
                  :full-response resp})))))))
       
;; used by get-post-list callers to block for results
;; always only interested in the latest thing on this channel
;; sliding buffer just incase something was still on here before re-using.
(def post-list-chan (chan (sliding-buffer 1)))

(defn- get-post-list
  "Steps through blogger post list calls using returned 
   nextPageToken to get either requested number of posts
   or all posts that exist for post-type.
   Puts result into @posts under post-type key for future use 
   and also puts onto post-list-chan so callers can block 
   to consume this response right away.
   Pass an optional 'page' and 'per' to apply pagination before
   putting onto post-list-chan"
  [{:keys [num page per post-type]}]
  (let [call (chan)
        url (build-url {:post-type post-type})
        post-type-key (keyword post-type)]
    ;; (println "calling this url: " url)
    (go
      (>!
       call
       (try
         (http-client/get url)
         (catch Exception e (str "Exception: " (.getMessage e))))))
    (go
      (alt!
        (timeout 5000) (handle-timeout {:channel post-list-chan :ms 5000 :url url})
        call ([{:keys [status body] :as resp}] 
              (if (= status 200)
                (let [parsed-body (parse-string body true)
                      nextPageToken (:nextPageToken parsed-body)
                      items (:items parsed-body)]
                  ;; (println "next page token: " nextPageToken)
                  ;; (println "num: " num)
                  (swap!
                    next-page-token
                    assoc
                    post-type-key
                    nextPageToken)
                  (when items
                    (swap!
                     posts
                     update-in [post-type-key]
                     (fn [current-state]
                       (->> items
                            (concat current-state)
                            (distinct)
                            (into [])))))
                  ;; (println "(count @posts): " (count @posts))
                  ;; (println "(< (count @posts) num)" (< (count @posts) num))
                  ;; (println "call again? " (and nextPageToken (< (count @posts) num)))
                  (if (and nextPageToken (< (count (post-type-key @posts)) num))
                    (get-post-list ; more posts to get
                      {:post-type post-type
                       :num (- num (count (post-type-key @posts)))
                       :page page
                       :per per})
                    (go ; finished getting, put result on channel
                      (>!
                       post-list-chan
                       (if (and page per)
                         (paginate-list {:item-list (post-type-key @posts) :page page :per per})
                         (post-type-key @posts))))))
                (handle-error 
                  {:channel post-list-chan 
                   :message (str "Error getting " post-type " post list")
                   :url url
                   :full-response resp})))))))

;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Serving the handler
;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn get-posts
  "Returns all posts by post-type sorted by most recent"
  [{:keys [page per post-type] :or {page 1 per 10 post-type "latest"}}]
  (let [post-type-key (keyword post-type)
        num-posts (count (post-type-key @posts))
        requested-posts (* page per)]
    ;; if you dont have enough posts, go get more, else return from what you've got
    (if (< num-posts requested-posts)
      (do 
        ;; (println "Getting more, will get what you need from the channel")
        (get-post-list
         {:post-type post-type
          :num requested-posts
          :page page
          :per per})
        (<!! post-list-chan)) ; block for paginated response from this channel
      (do
        ;; (println "already got it covered, getting it from the atom")
        (paginate-list {:item-list (post-type-key @posts) :page page :per per})))))

(defn get-post
  "Returns post via passed in post-id if it exists"
  [{:keys [post-id]}]
  (let [all-posts (distinct (apply concat (vals @posts)))
        found-post (first (filter #(= post-id (:id %)) all-posts))]
    ;; check the atom first, then make a call for this post if it is not found
    (if found-post
      (paginate-list {:item-list [found-post] :page 1 :per 1})
      (do
        (get-post-by-id post-id)
        (<!! post-by-id-chan))))) ; block for paginated response from this channel
