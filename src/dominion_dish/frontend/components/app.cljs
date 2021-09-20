(ns dominion-dish.frontend.components.app
  (:require [re-frame.core :refer [subscribe dispatch]]
            [dominion-dish.frontend.routes :as routes]
            [dominion-dish.frontend.subs :as subs]
            [dominion-dish.frontend.events :as events]
            [dominion-dish.frontend.components.header :as header]
            [dominion-dish.frontend.components.nav :as nav]
            [dominion-dish.frontend.components.post :as post]
            [dominion-dish.frontend.components.generic :as generic]
            [dominion-dish.frontend.utils :as utils]))


;; Main Parent Component for App
(defn container []
  ;; post list infinite scroll atom watcher
  (add-watch
   post/post-list-get-more-el 
   :post-list-load-more-watcher
   (fn [_ _ old-state new-state]
     (when (some? old-state)
       (dispatch [::events/unobserve-post-list {:element old-state}]))
     (when (some? new-state)
       (dispatch [::events/observe-post-list {:element new-state}]))))
  
  ;; post detail scroll to top of page on load watcher
  (add-watch
   post/post-detail-el
   :post-detail-load-scroll-top-watcher
   (fn [_ _ _ new-state]
     (when (some? new-state)
       (utils/scroll-page-top new-state)
       (utils/scroll-body-top))))
  
  ;; app 
  (let [active-panel @(subscribe [::subs/active-panel])
        icon-key @(subscribe [::subs/icon-key])
        post-type @(subscribe [::subs/post-type])]
    [:div.page
     [header/header {:icon-key icon-key}]
     [generic/err-boundary
      [:div.body
       (nav/nav-container post-type)
       (routes/panels active-panel)]]]))
