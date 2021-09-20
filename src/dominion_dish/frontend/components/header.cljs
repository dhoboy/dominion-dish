(ns dominion-dish.frontend.components.header)

;; Issues with getting these icons to re-render
;; wrapping icons in a tag with a key got it to work

(defn basketball-icon
  []
  [:span.icon {:key "basketball-icon"}
   [:i.fas.fa-basketball-ball]])

(defn football-icon
  []
  [:span.icon {:key "football-icon"} 
   [:i.fas.fa-football-ball]])

(defn running-icon
  []
  [:span.icon {:key "running-icon"}
   [:i.fas.fa-running]])

;; Header Component
(defn header
  [{:keys [icon-key] :or {icon-key :running}}]
  (let [header-icons {:football (football-icon)
                      :girls-basketball (basketball-icon)
                      :boys-basketball (basketball-icon)
                      :running (running-icon)}]
    [:div.header-wrapper
     [:div.header
      [:div
       [:h1 "The Dominion Dish"]
       [:h3 "Dishing you news and insights on VHSL Dominion District Sports"]]
      (when icon-key (icon-key header-icons))]]))
