(ns dominion-dish.frontend.db)

;; TODO: make a clojure endpoint to get what all post types there are
;; get that programatically and initialize the different
;; post types here. 

(def post-types #{"latest" "boys-basketball" "girls-basketball" "football"})

(def default-db
  {:loading          true
   :error            false
   :active-panel     :post-list
   :post-type        "latest"
   :post-id          nil
   :latest           {:last-loaded-page nil :per 10 :items []}
   :football         {:last-loaded-page nil :per 10 :items []}
   :boys-basketball  {:last-loaded-page nil :per 10 :items []}
   :girls-basketball {:last-loaded-page nil :per 10 :items []}})
