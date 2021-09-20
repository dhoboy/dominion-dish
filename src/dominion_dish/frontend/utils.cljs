(ns dominion-dish.frontend.utils
  (:require [clojure.string :as str]))

(defn strip-off-html
  "util for stripping html off of post content"
  [s]
  (let [document (.parseFromString (js/DOMParser.) s "text/html")]  
    (or 
      (str/trim (.-textContent (.-body document)))
      "")))

(defn scroll-page-top
  "Util for scrolling passed in elem to top of page"
  [elem]
  (.scrollTo elem 0 0))

(defn scroll-body-top
  "Util for scrolling body to top of page"
  []
  (-> js/document
       (.getElementsByClassName "body")
       first
       scroll-page-top))

(defn build-date
  "Given a datestring like '2021-08-25T02:14:00-07:00',
   builds a date that can be compared against"
  [date-str]
  (js/Date. date-str))

(def months ["January" "February" "March" "April" "May" 
             "June" "July" "August" "September" "October" 
             "November" "December"])

(defn format-date
  "Given a datestring like '2021-08-25T02:14:00-07:00',
  returns that date formatted in a more human-friendly way"
  [date-str]
  (let [date-obj (build-date date-str)
        year (.getFullYear date-obj)
        month (get months (.getMonth date-obj))
        day (.getDate date-obj)]
    (str month " " day ", " year)))

(defn add-items-to-list
  "takes an existing items list and adds new items, de-dupded;
   optionally sorts by published date"
  [{:keys [current-items new-items]}]
  (sort
    #(> (build-date (:published %1))
        (build-date (:published %2)))
    (distinct
      (concat
        current-items
        new-items))))
    
