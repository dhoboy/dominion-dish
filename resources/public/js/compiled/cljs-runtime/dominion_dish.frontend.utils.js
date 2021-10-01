goog.provide('dominion_dish.frontend.utils');
/**
 * util for stripping html off of post content
 */
dominion_dish.frontend.utils.strip_off_html = (function dominion_dish$frontend$utils$strip_off_html(s){
var document = (new DOMParser()).parseFromString(s,"text/html");
var or__4212__auto__ = clojure.string.trim(document.body.textContent);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return "";
}
});
/**
 * Util for scrolling passed in elem to top of page
 */
dominion_dish.frontend.utils.scroll_page_top = (function dominion_dish$frontend$utils$scroll_page_top(elem){
return elem.scrollTo((0),(0));
});
/**
 * Util for scrolling body to top of page
 */
dominion_dish.frontend.utils.scroll_body_top = (function dominion_dish$frontend$utils$scroll_body_top(){
return dominion_dish.frontend.utils.scroll_page_top(cljs.core.first(document.getElementsByClassName("body")));
});
/**
 * Given a datestring like '2021-08-25T02:14:00-07:00',
 * builds a date that can be compared against
 */
dominion_dish.frontend.utils.build_date = (function dominion_dish$frontend$utils$build_date(date_str){
return (new Date(date_str));
});
dominion_dish.frontend.utils.months = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["January","February","March","April","May","June","July","August","September","October","November","December"], null);
/**
 * Given a datestring like '2021-08-25T02:14:00-07:00',
 *   returns that date formatted in a more human-friendly way
 */
dominion_dish.frontend.utils.format_date = (function dominion_dish$frontend$utils$format_date(date_str){
var date_obj = dominion_dish.frontend.utils.build_date(date_str);
var year = date_obj.getFullYear();
var month = cljs.core.get.cljs$core$IFn$_invoke$arity$2(dominion_dish.frontend.utils.months,date_obj.getMonth());
var day = date_obj.getDate();
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(month)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(day),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(year)].join('');
});
/**
 * takes an existing items list and adds new items, de-dupded;
 * optionally sorts by published date
 */
dominion_dish.frontend.utils.add_items_to_list = (function dominion_dish$frontend$utils$add_items_to_list(p__48112){
var map__48113 = p__48112;
var map__48113__$1 = cljs.core.__destructure_map(map__48113);
var current_items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48113__$1,new cljs.core.Keyword(null,"current-items","current-items",292221155));
var new_items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48113__$1,new cljs.core.Keyword(null,"new-items","new-items",-2122710837));
return cljs.core.sort.cljs$core$IFn$_invoke$arity$2((function (p1__48110_SHARP_,p2__48111_SHARP_){
return (dominion_dish.frontend.utils.build_date(new cljs.core.Keyword(null,"published","published",-514587618).cljs$core$IFn$_invoke$arity$1(p1__48110_SHARP_)) > dominion_dish.frontend.utils.build_date(new cljs.core.Keyword(null,"published","published",-514587618).cljs$core$IFn$_invoke$arity$1(p2__48111_SHARP_)));
}),cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(current_items,new_items)));
});

//# sourceMappingURL=dominion_dish.frontend.utils.js.map
