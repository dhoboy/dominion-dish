(ns dominion-dish.frontend.components.generic
  (:require [reagent.core :as r]))

;; Loader Component
(defn loader 
  "An animated loader"
  [{:keys [size] :or {size "large"}}] ; "small" or "large"
  (let [icons ["basketball-ball"
               "running"
               "football-ball"
               "table-tennis"
               "volleyball-ball"]]
    [:div {:class (str "loader " size)}
     [:i {:class (str "fas fa-" (rand-nth icons))}]
     [:i {:class (str "fas fa-" (rand-nth icons))}]
     [:i {:class (str "fas fa-" (rand-nth icons))}]
     [:p "Loading..."]]))
  
;; Error Component
(defn error
  "Error state"
  [& message]
  [:h3.error (or message "The Dish hit a snag! Give us a moment and try again.")])

;; this HOC attempt has some issues, need to learn more
;; maybe need a level 2 or 3 component here...
;; (defn component-loader
;;   "Component that takes loading, error, and children
;;    props and renders accordingly"
;;   [{:keys [loading error contents wrapper-class]}]
;;   [:div {:class wrapper-class}
;;    (cond
;;      (= loading true) (loader)
;;      (= error true)   (error)
;;      :else contents)])

;; https://lilac.town/writing/modern-react-in-cljs-error-boundaries/
(defn err-boundary
  [& children]
  (let [err-state (r/atom nil)]
    (r/create-class ; level 3 component
      {:display-name "ErrBoundary"
       :component-did-catch (fn [err info]
                              (reset! err-state [err info])
                              (println "err: " err)
                              (println "info: " info))
       :reagent-render (fn [& children]
                         (if (nil? @err-state)
                           (into [:<>] children)
                           (error)))})))

