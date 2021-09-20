(ns dominion-dish.frontend.routes
  (:require
   [clojure.string :as str]
   [bidi.bidi :as bidi]
   [pushy.core :as pushy]
   [re-frame.core :as re-frame]
   [dominion-dish.frontend.components.post :as post]
   [dominion-dish.frontend.events :as events]
   [dominion-dish.frontend.subs :as subs]))

;; re-frame calls pages "panels"
(defmulti panels identity)

(defmethod panels :post-detail []
  (let [post-id @(re-frame/subscribe [::subs/post-id])
        post @(re-frame/subscribe [::subs/post-by-id post-id])]
    (post/post-detail post)))

(defmethod panels :post-list []
  (let [post-type @(re-frame/subscribe [::subs/post-type])
        posts @(re-frame/subscribe [::subs/posts-by-type post-type])]
     (post/post-list
      {:post-type post-type
       :posts posts})))

(defmethod panels :default []
  (let [posts @(re-frame/subscribe [::subs/posts-by-type "latest"])]
    (post/post-list
     {:post-type :latest
      :posts posts})))

(def routes
  (atom
   ["/" {"" :latest
         [:post-type] {""             :post-list
                       ["/" :post-id] :post-detail}}]))


(defn dispatch
  [{:keys [route-params handler]}]
  (let [post-type (or (:post-type route-params) ; just always use the store version?
                      @(re-frame/subscribe [::subs/post-type]))
        post-id (:post-id route-params)]
    (if post-id ; single post
      (let [found-post @(re-frame/subscribe [::subs/post-by-id post-id])]
        (when (nil? found-post) ; call for post if not in state
          (re-frame/dispatch [::events/get-post {:post-type post-type :post-id post-id}]))
        (re-frame/dispatch ; set the page route in state
         [::events/set-route 
          {:handler handler
           :post-type post-type
           :post-id post-id}])) 
      (let [posts @(re-frame/subscribe [::subs/posts-by-type post-type])] ; post-list
        (when (nil? (:last-loaded-page posts))
          (re-frame/dispatch [::events/get-posts {:post-type post-type}]))
        (re-frame/dispatch 
         [::events/set-route
          {:handler handler 
           :post-type post-type 
           :post-id nil}])))))

;; I need hash routing for the frontend so the backend server will ignore
(defn parse
  [url]
  (bidi/match-route 
    @routes 
    (str/replace url #"^/?#" "")))

(defonce history
  (pushy/pushy 
    dispatch 
    parse))

;; called by core.cljs, just starts history
(defn start! [] (pushy/start! history))

;; (url-for :post-list :post-type :football) => "/football"
;; (url-for :post-detail :post-type :football :post-id 234343) => "/football/234343"
(defn url-for
  [& args]
  (str "#" (apply bidi/path-for (into [@routes] args))))

(re-frame/reg-fx
 :navigate
 (fn [{:keys [handler post-type post-id]}]
   (pushy/set-token! 
     history 
     (url-for 
       handler
       :post-type post-type
       :post-id post-id))))
