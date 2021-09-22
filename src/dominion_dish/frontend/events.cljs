(ns dominion-dish.frontend.events
  (:require
   [re-frame.core :as re-frame]
   [ajax.core :as ajax]
   [day8.re-frame.http-fx]
   [day8.re-frame.tracing :refer-macros [fn-traced]]
   [dominion-dish.frontend.db :refer [default-db]]
   [dominion-dish.frontend.utils :as utils]))
 
;; initialize db
(re-frame/reg-event-db
 ::initialize-db
 (fn-traced [_ _]
            default-db))

;; routing effects
(re-frame/reg-event-fx
 ::navigate
 (fn-traced [_ [_ {:keys [handler post-type post-id]}]]
   ; this is an effects map with an effects key
   ; this :navigate effect is called
   ; and any other effects that may be in this map
   ; when this event fn returns.
   {:navigate {:handler handler
               :post-type post-type
               :post-id post-id}}))

(re-frame/reg-event-fx
 ::set-route
 (fn-traced [{:keys [db]} [_ {:keys [handler post-type post-id]}]]
   {:db (assoc
         db
         :active-panel handler
         :post-type post-type
         :post-id post-id)}))

 ;; post list infinite scroll effects
 (def post-list-observer
   (js/IntersectionObserver.
    (fn [entries _]
      (loop [[item & rest] entries]
        (when (.-isIntersecting item)
          (re-frame/dispatch [::check-post-list]))
        (when rest (recur rest))))
    {:root (.getElementById js/document "app")
     :threshold 1.0}))
 
(re-frame/reg-event-fx
  ::observe-post-list
  (fn [_ [_ {:keys [element]}]]
    (.observe post-list-observer element)))
  
(re-frame/reg-event-fx
  ::unobserve-post-list
  (fn [_ [_ {:keys [element]}]]
    (.unobserve post-list-observer element)))

(re-frame/reg-event-fx
 ::check-post-list
 (fn [{:keys [db]}]
   (let [loading (:loading db)
         post-type (:post-type db)
         post-type-key (keyword post-type)
         {:keys [last-loaded-page per items]} (post-type-key db)]
     (when (and (= (* last-loaded-page per) (count items)) (not loading))
       (re-frame/dispatch [::get-posts {:post-type post-type :page (+ last-loaded-page 1) :per per}])))))

;; TODO: look into cancel tokens in the case where you get
;; a request while another one is underway

;; get-posts
;; usage: (dispatch [::get-posts {:post-type "boys-basketball" :page 1 :per 10}])
(re-frame/reg-event-fx                             
 ::get-posts
 (fn [{:keys [db]} [_ {:keys [post-type page per] :or {page 1 per 10}}]]
   {:db (assoc db :loading true)
    :http-xhrio {:method          :get
                 :uri             (str 
                                   "http://localhost:3000/posts/" 
                                   post-type 
                                   "?page=" page "&per=" per)
                 :timeout         8000
                 :response-format (ajax/json-response-format {:keywords? true})
                 :on-success      [::get-posts-success {:post-type post-type}]
                 :on-failure      [::get-posts-failure]}}))

(re-frame/reg-event-db
 ::get-posts-success
 (fn [db [_ {:keys [post-type]} {:keys [pagination items]}]]
   (let [post-type-key (keyword post-type)]
     (assoc
      db
      :loading false
      :error false
      post-type-key {:last-loaded-page (:page pagination)
                     :per (:per pagination)
                     :items (utils/add-items-to-list
                             {:current-items (:items (post-type-key db))
                              :new-items items})}))))

(re-frame/reg-event-db
 ::get-posts-failure
 (fn [db [_ _resp]]
   (assoc 
    db
    :loading false
    :error true)))
  
;; get-post
;; usage: (dispatch [::events/get-post {:post-type "boys-basketball" :post-id "1234"}]
(re-frame/reg-event-fx
 ::get-post
 (fn [{:keys [db]} [_ {:keys [post-type post-id]}]]
   {:db (assoc db :loading true)
    :http-xhrio {:method          :get
                 :uri             (str "http://localhost:3000/post/" post-id)
                 :timeout         8000
                 :response-format (ajax/json-response-format {:keywords? true})
                 :on-success      [::get-post-success {:post-type post-type}]
                 :on-failure      [::get-post-failure]}}))
  
(re-frame/reg-event-db
 ::get-post-success
 (fn [db [_ {:keys [post-type]} {:keys [items]}]]
   (let [post-type-key (keyword post-type)]
     (assoc
      db
      :loading false
      :error false
      post-type-key {:items (utils/add-items-to-list
                             {:current-items (:items (post-type-key db))
                              :new-items items})}))))

(re-frame/reg-event-db
 ::get-post-failure
 (fn [db [_ _resp]]
   (assoc 
    db
    :loading false
    :error true)))