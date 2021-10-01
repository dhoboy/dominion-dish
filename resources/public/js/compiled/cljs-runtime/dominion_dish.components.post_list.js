goog.provide('dominion_dish.components.post_list');
/**
 * Post preview card for the main page
 */
dominion_dish.components.post_list.post_preview = (function dominion_dish$components$post_list$post_preview(p__39989){
var map__39990 = p__39989;
var map__39990__$1 = cljs.core.__destructure_map(map__39990);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39990__$1,new cljs.core.Keyword(null,"title","title",636505583));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39990__$1,new cljs.core.Keyword(null,"content","content",15833224));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39990__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),dominion_dish.utils.strip_off_html(content)], null)], null);
});
/**
 * Returns a post list of posts of passed in type
 */
dominion_dish.components.post_list.post_list = (function dominion_dish$components$post_list$post_list(p__39991){
var map__39992 = p__39991;
var map__39992__$1 = cljs.core.__destructure_map(map__39992);
var post_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39992__$1,new cljs.core.Keyword(null,"post-type","post-type",2092024867));
var posts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39992__$1,new cljs.core.Keyword(null,"posts","posts",760043164));
var loading = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dominion-dish.subs","loading","dominion-dish.subs/loading",-1663330918)], null)));
if(cljs.core.truth_(loading)){
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Loading..."], null);
} else {
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.post-list","div.post-list",695657075),cljs.core.map.cljs$core$IFn$_invoke$arity$2(dominion_dish.components.post_list.post_preview,new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(posts))], null);
});

//# sourceMappingURL=dominion_dish.components.post_list.js.map
