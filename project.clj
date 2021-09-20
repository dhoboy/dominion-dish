(defproject dominion-dish-backend "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :min-lein-version "2.0.0"
  :main dominion-dish.server.core
  :dependencies [[org.clojure/clojure "1.10.0"]
                 [org.clojure/core.async "1.3.618"]
                 [simple-time "0.2.0"]
                 [compojure "1.6.1"]
                 [aleph "0.4.6"]
                 [mount "0.1.16"]
                 [cheshire "5.10.0"]
                 [clj-http "3.12.3"]
                 [ring/ring-core "1.8.2"]
                 [ring/ring-jetty-adapter "1.8.2"]
                 [ring/ring-defaults "0.3.2"]
                 [ring/ring-json "0.5.0"]
                 [jumblerg/ring-cors "2.0.0"]]
  :plugins [[lein-ring "0.12.5"]]
  :ring {:handler dominion-dish.server.core/app}
  :profiles
  {:dev {:dependencies [[javax.servlet/servlet-api "2.5"]
                        [ring/ring-mock "0.3.2"]]}})
