(ns dominion-dish.frontend.subs
  (:require [re-frame.core :refer [reg-sub subscribe]]
            [dominion-dish.frontend.db :refer [post-types]]))

;; hooks/use-selectors go here

;; these all need to be named with two ::'s and I
;; don't understand why

;; active-panel
(reg-sub
 ::active-panel
 (fn [db _]
   (:active-panel db)))

;; loading
(reg-sub
 ::loading
 (fn [db]
   (:loading db)))

;; error
(reg-sub
 ::error
 (fn [db]
   (:error db)))

;; post-id
(reg-sub
 ::post-id
 (fn [db]
   (:post-id db)))
  
;; post-type
(reg-sub
 ::post-type
 (fn [db]
   (:post-type db)))
  
;; all post arrays combined together, de-duped
(reg-sub 
 ::all-posts
 (fn [db]
   (distinct
     (apply
       concat
       (map #(-> db
                 (get (keyword %))
                 (get :items))
            post-types)))))

;; get post for passed in post-id
(reg-sub
 ::post-by-id
 (fn [_ [_ post-id]]
   (let [all-posts @(subscribe [::all-posts])] 
     (first
       (filter
         #(= post-id (:id %))
         all-posts)))))

;; gets post list for passed in post-type
(reg-sub
 ::posts-by-type
 (fn [db [_ post-type]]
   (get db (keyword post-type))))

;; metadata about post list for passed in post-type
(reg-sub
 ::last-loaded-page
 (fn [db [_ post-type]]
   (:last-loaded-page ((keyword post-type) db))))

(reg-sub
 ::per
 (fn [db [_ post-type]]
   (:per ((keyword post-type) db))))

;; which icon header should use
(reg-sub
 ::icon-key
 (fn []
   (let [post-id     @(subscribe [::post-id])
         post-type   @(subscribe [::post-type])
         recent-post (or ; either post detail page, or first :latest post
                      @(subscribe [::post-by-id post-id])
                      (first (:items @(subscribe [::posts-by-type post-type]))))]
     (keyword
      (if (or (some? post-id) (= post-type "latest"))
        (first (:labels recent-post))
        post-type)))))
