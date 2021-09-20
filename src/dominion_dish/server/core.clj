(ns dominion-dish.server.core
  (:require [compojure.core :refer [defroutes GET]]
            [compojure.route :as route]
            [ring.adapter.jetty :as jetty]
            [ring.middleware.json :refer [wrap-json-response]]
            [ring.middleware.params :refer [wrap-params]]
            [ring.middleware.resource :refer [wrap-resource]]
            [ring.util.response :refer [file-response response]]
            [jumblerg.middleware.cors :refer [wrap-cors]]
            [mount.core :as mount]
            [dominion-dish.server.api :as api]))

;; handlers
(defn index-handler []
  (file-response "index.html" {:root "resources/public"}))

(defn post-list-handler [post-type page per]
  (response
    (api/get-posts
      (merge
        {:post-type post-type}
        (when page
          {:page (if (string? page)
                   (Integer/parseInt page)
                   page)})
        (when per
          {:per (if (string? per)
                  (Integer/parseInt per)
                  per)})))))

(defn post-get-handler [post-id]
  (response
    (api/get-post
      {:post-id post-id})))

;; routes
(defroutes app-routes
  (GET "/" []
    (index-handler))

  (GET "/posts/:post-type" [post-type page per]
    (post-list-handler post-type page per))

  (GET "/post/:post-id" [post-id]
    (post-get-handler post-id))

  (route/not-found "Not Found"))

;; app
(def app
  (-> app-routes
      (wrap-resource "public")
      (wrap-params)
      (wrap-cors #".*") ; lock down to just this app's front-end when deploying
      (wrap-json-response)))

;; start server
(mount/defstate server
  :start (jetty/run-jetty #'app {:port 3000 :join? false})
  :stop (.stop server))

(defn -main [& args]
  (mount/start))
  