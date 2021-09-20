(ns dominion-dish.frontend.components.nav
  (:require [re-frame.core :refer [dispatch]]
            [dominion-dish.frontend.events :as events]))

(defn internal-nav
  "Links to sections in the app"
  [post-type]
  [:div.internal-nav
   [:a {:class (when (= post-type "latest") "active")
        :on-click #(dispatch
                    [::events/navigate
                     {:handler :post-list
                      :post-type :latest}])}
    "latest"]
   [:a {:class (when (= post-type "football") "active")
        :on-click #(dispatch
                    [::events/navigate
                     {:handler :post-list
                      :post-type :football}])}
    "football"]
   [:a {:class (when (= post-type "boys-basketball") "active")
        :on-click #(dispatch
                    [::events/navigate
                     {:handler :post-list
                      :post-type :boys-basketball}])}
    "boys basketball"]
   [:a {:class (when (= post-type "girls-basketball") "active")
        :on-click #(dispatch
                    [::events/navigate
                     {:handler :post-list
                      :post-type :girls-basketball}])}
    "girls basketball"]])

(defn external-nav 
  "Links to pages outside the app"
  []
  [:a.external-nav
    {:href "https://www.dominiondistrictva.org/" 
     :target "_blank"}
   "Schedule" [:i.fas.fa-external-link-alt]])

(defn nav-container
  "Internal and external links for app"
  [post-type]
  [:div.nav-container
   (internal-nav post-type)
   (external-nav)])
