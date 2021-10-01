goog.provide('dominion_dish.frontend.components.app');
dominion_dish.frontend.components.app.container = (function dominion_dish$frontend$components$app$container(){
cljs.core.add_watch(dominion_dish.frontend.components.post.post_list_get_more_el,new cljs.core.Keyword(null,"post-list-load-more-watcher","post-list-load-more-watcher",1119721170),(function (_,___$1,old_state,new_state){
if((!((old_state == null)))){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dominion-dish.frontend.events","unobserve-post-list","dominion-dish.frontend.events/unobserve-post-list",103317516),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"element","element",1974019749),old_state], null)], null));
} else {
}

if((!((new_state == null)))){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dominion-dish.frontend.events","observe-post-list","dominion-dish.frontend.events/observe-post-list",-1135917881),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"element","element",1974019749),new_state], null)], null));
} else {
return null;
}
}));

cljs.core.add_watch(dominion_dish.frontend.components.post.post_detail_el,new cljs.core.Keyword(null,"post-detail-load-scroll-top-watcher","post-detail-load-scroll-top-watcher",-1507751711),(function (_,___$1,___$2,new_state){
if((!((new_state == null)))){
dominion_dish.frontend.utils.scroll_page_top(new_state);

return dominion_dish.frontend.utils.scroll_body_top();
} else {
return null;
}
}));

var active_panel = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dominion-dish.frontend.subs","active-panel","dominion-dish.frontend.subs/active-panel",1861751923)], null)));
var icon_key = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dominion-dish.frontend.subs","icon-key","dominion-dish.frontend.subs/icon-key",-1752273367)], null)));
var post_type = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dominion-dish.frontend.subs","post-type","dominion-dish.frontend.subs/post-type",-1759312886)], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.page","div.page",1917984906),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dominion_dish.frontend.components.header.header,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"icon-key","icon-key",2046537328),icon_key], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dominion_dish.frontend.components.generic.err_boundary,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.body","div.body",-96313067),dominion_dish.frontend.components.nav.nav_container(post_type),dominion_dish.frontend.routes.panels.cljs$core$IFn$_invoke$arity$1(active_panel)], null)], null)], null);
});

//# sourceMappingURL=dominion_dish.frontend.components.app.js.map
