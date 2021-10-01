goog.provide('dominion_dish.components.post');
/**
 * Post preview card for the main page
 */
dominion_dish.components.post.post_preview = (function dominion_dish$components$post$post_preview(p__35837){
var map__35838 = p__35837;
var map__35838__$1 = cljs.core.__destructure_map(map__35838);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35838__$1,new cljs.core.Keyword(null,"title","title",636505583));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35838__$1,new cljs.core.Keyword(null,"content","content",15833224));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35838__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var post_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35838__$1,new cljs.core.Keyword(null,"post-type","post-type",2092024867));
var published = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35838__$1,new cljs.core.Keyword(null,"published","published",-514587618));
var formatted_content = dominion_dish.utils.strip_off_html(content);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.post-preview","div.post-preview",572870949),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),id,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dominion-dish.events","navigate","dominion-dish.events/navigate",-230252570),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"handler","handler",-195596612),new cljs.core.Keyword(null,"post-detail","post-detail",-113060058),new cljs.core.Keyword(null,"post-type","post-type",2092024867),post_type,new cljs.core.Keyword(null,"post-id","post-id",1618659080),id], null)], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.title","div.title",-1929547732),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),dominion_dish.utils.format_date(published)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.preview-body","p.preview-body",-447193924),(((((formatted_content).length) > (200)))?[cljs.core.subs.cljs$core$IFn$_invoke$arity$3(formatted_content,(0),(200)),"..."].join(''):formatted_content)], null)], null);
});
dominion_dish.components.post.post_detail_el = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
/**
 * Post detail card for full view
 */
dominion_dish.components.post.post_detail = (function dominion_dish$components$post$post_detail(p__35839){
var map__35840 = p__35839;
var map__35840__$1 = cljs.core.__destructure_map(map__35840);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35840__$1,new cljs.core.Keyword(null,"title","title",636505583));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35840__$1,new cljs.core.Keyword(null,"content","content",15833224));
var published = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35840__$1,new cljs.core.Keyword(null,"published","published",-514587618));
var loading = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dominion-dish.subs","loading","dominion-dish.subs/loading",-1663330918)], null)));
var error = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dominion-dish.subs","error","dominion-dish.subs/error",2110267955)], null)));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.post-detail","div.post-detail",172649280),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),(function (el){
return cljs.core.reset_BANG_(dominion_dish.components.post.post_detail_el,el);
})], null),(cljs.core.truth_(loading)?dominion_dish.components.generic.loader(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),"large"], null)):null),(cljs.core.truth_(error)?dominion_dish.components.generic.error():null),((((cljs.core.not(loading)) && (cljs.core.not(error))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.title","div.title",-1929547732),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),dominion_dish.utils.format_date(published)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.detail-body","p.detail-body",348724171),dominion_dish.utils.strip_off_html(content)], null)], null):null)], null);
});
dominion_dish.components.post.post_list_get_more_el = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
/**
 * Returns a post list of posts of passed in type
 */
dominion_dish.components.post.post_list = (function dominion_dish$components$post$post_list(p__35842){
var map__35843 = p__35842;
var map__35843__$1 = cljs.core.__destructure_map(map__35843);
var post_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35843__$1,new cljs.core.Keyword(null,"post-type","post-type",2092024867));
var posts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35843__$1,new cljs.core.Keyword(null,"posts","posts",760043164));
var loading = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dominion-dish.subs","loading","dominion-dish.subs/loading",-1663330918)], null)));
var error = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dominion-dish.subs","error","dominion-dish.subs/error",2110267955)], null)));
var last_loaded_page = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dominion-dish.subs","last-loaded-page","dominion-dish.subs/last-loaded-page",1911702213),post_type], null)));
var per = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dominion-dish.subs","per","dominion-dish.subs/per",-710399479),post_type], null)));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.post-list","div.post-list",695657075),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35841_SHARP_){
return dominion_dish.components.post.post_preview(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__35841_SHARP_,new cljs.core.Keyword(null,"post-type","post-type",2092024867),post_type));
}),new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(posts)),(cljs.core.truth_(loading)?dominion_dish.components.generic.loader(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(posts)),(0)))?"large":"small")], null)):null),(cljs.core.truth_(error)?dominion_dish.components.generic.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["The Dish can't get more posts right now. Give us a moment and try again."], 0)):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((last_loaded_page * per),cljs.core.count(new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(posts))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"post-list-get-more",new cljs.core.Keyword(null,"ref","ref",1289896967),(function (el){
return cljs.core.reset_BANG_(dominion_dish.components.post.post_list_get_more_el,el);
})], null)], null):null),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((last_loaded_page * per),cljs.core.count(new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(posts))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"post-list-end"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"fas fa-ellipsis-h"], null)], null)], null):null)], null);
});

//# sourceMappingURL=dominion_dish.components.post.js.map
