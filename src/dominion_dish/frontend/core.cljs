(ns dominion-dish.frontend.core
  (:require
   [reagent.dom :as rdom]
   [re-frame.core :as re-frame]
   [dominion-dish.frontend.events :as events]
   [dominion-dish.frontend.routes :as routes]
   [dominion-dish.frontend.components.app :as app]
   [dominion-dish.frontend.config :as config]))

(defn dev-setup []
  (when config/debug?
    (println "dev mode")))

(defn ^:dev/after-load mount-root []
  (re-frame/clear-subscription-cache!)
  (let [root-el (.getElementById js/document "app")]
    (rdom/unmount-component-at-node root-el)
    (rdom/render [app/container] root-el)))

(defn init []
  (re-frame/dispatch-sync [::events/initialize-db])
  (routes/start!)
  (dev-setup)
  (mount-root))
