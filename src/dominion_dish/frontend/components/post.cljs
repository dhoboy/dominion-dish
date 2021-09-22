(ns dominion-dish.frontend.components.post
  (:require [re-frame.core :refer [subscribe dispatch]]
            [dominion-dish.frontend.subs :as subs]
            [dominion-dish.frontend.utils :as utils]
            [dominion-dish.frontend.events :as events]
            [dominion-dish.frontend.components.generic :as generic]))

;; Post Preview Component
(defn post-preview
  "Post preview card for the main page"
  [{:keys [title content id post-type published]}]
  (let [formatted-content (utils/strip-off-html content)]
    [:div.post-preview
     {:key id
      :on-click #(dispatch [::events/navigate
                            {:handler :post-detail
                             :post-type post-type
                             :post-id id}])}
     [:div.title
      [:h3 title]
      [:p (utils/format-date published)]] ; nah, look into text-overflow: ellipsis for this
     [:p.preview-body (if (> (count formatted-content) 200)
                        (str (subs formatted-content 0 200) "...")
                        formatted-content)]]))

;; Post Detail Component
(def post-detail-el (atom nil))

(defn post-detail
  "Post detail card for full view"
  [{:keys [title content published]}]
  (let [loading @(subscribe [::subs/loading])
        error @(subscribe [::subs/error])]
    [:div.post-detail {:ref (fn [el] (reset! post-detail-el el))}
     (when (and loading (not error)) (generic/loader {:size "large"}))
     (when (and (not loading) error) (generic/error))
     (when (and (not loading) (not error))
       [:<>
         [:div.title
           [:h3 title]
           [:p (utils/format-date published)]]
         [:p.detail-body (utils/strip-off-html content)]])]))

;; Post List Component
(def post-list-get-more-el (atom nil))

(defn post-list
  "Returns a post list of posts of passed in type"
  [{:keys [post-type posts]}]
  (let [loading @(subscribe [::subs/loading])
        error @(subscribe [::subs/error])
        last-loaded-page @(subscribe [::subs/last-loaded-page post-type])
        per @(subscribe [::subs/per post-type])]
    [:div.post-list
     (map
      #(post-preview (assoc % :post-type post-type))
      (:items posts))
     (when (and loading (not error))
       (generic/loader {:size (if (= (count (:items posts)) 0) "large" "small")}))
     (when (and (not loading) error)
       (generic/error "The Dish can't get more posts right now. Give us a moment and try again."))
     (when (= (* last-loaded-page per) (count (:items posts)))
       [:div {:id "post-list-get-more"
              :ref (fn [el] (reset! post-list-get-more-el el))}])
     (when (not= (* last-loaded-page per) (count (:items posts)))
       [:div {:id "post-list-end"}
        [:i {:class "fas fa-ellipsis-h"}]])]))

;; this is working with component loader HOC, but i'm not 100% sure why
;; (defn post-list
;;   "Returns a post list of posts of passed in type"
;;   [{:keys [post-type posts]}]
;;   (let [loading @(subscribe [::subs/loading])
;;         error false]
;;     (generic/component-loader
;;      {:loading loading
;;       :error error
;;       :wrapper-class "post-list"
;;       :contents [:<>
;;                  (map
;;                   #(post-preview (assoc % :post-type post-type))
;;                   (:items posts))
;;                  [:div {:id "post-list-get-more" 
;;                         :ref (fn [el]
;;                                (println "yo new one is made: " el)
;;                                (reset! post-list-get-more-el el))}]]})))
