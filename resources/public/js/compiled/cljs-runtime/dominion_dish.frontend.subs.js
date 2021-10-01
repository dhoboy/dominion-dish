goog.provide('dominion_dish.frontend.subs');
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("dominion-dish.frontend.subs","active-panel","dominion-dish.frontend.subs/active-panel",1861751923),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("dominion-dish.frontend.subs","loading","dominion-dish.frontend.subs/loading",1990410478),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return new cljs.core.Keyword(null,"loading","loading",-737050189).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("dominion-dish.frontend.subs","error","dominion-dish.frontend.subs/error",-669786529),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("dominion-dish.frontend.subs","post-id","dominion-dish.frontend.subs/post-id",2133558849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return new cljs.core.Keyword(null,"post-id","post-id",1618659080).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("dominion-dish.frontend.subs","post-type","dominion-dish.frontend.subs/post-type",-1759312886),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return new cljs.core.Keyword(null,"post-type","post-type",2092024867).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("dominion-dish.frontend.subs","all-posts","dominion-dish.frontend.subs/all-posts",-959451244),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__48483_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__48483_SHARP_)),new cljs.core.Keyword(null,"items","items",1031954938));
}),dominion_dish.frontend.db.post_types)));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("dominion-dish.frontend.subs","post-by-id","dominion-dish.frontend.subs/post-by-id",-48000623),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (_,p__48487){
var vec__48488 = p__48487;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48488,(0),null);
var post_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48488,(1),null);
var all_posts = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dominion-dish.frontend.subs","all-posts","dominion-dish.frontend.subs/all-posts",-959451244)], null)));
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__48486_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(post_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__48486_SHARP_));
}),all_posts));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("dominion-dish.frontend.subs","posts-by-type","dominion-dish.frontend.subs/posts-by-type",-1589966056),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__48493){
var vec__48494 = p__48493;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48494,(0),null);
var post_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48494,(1),null);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(post_type));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("dominion-dish.frontend.subs","last-loaded-page","dominion-dish.frontend.subs/last-loaded-page",-1675688023),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__48508){
var vec__48511 = p__48508;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48511,(0),null);
var post_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48511,(1),null);
return new cljs.core.Keyword(null,"last-loaded-page","last-loaded-page",-1180154172).cljs$core$IFn$_invoke$arity$1((function (){var fexpr__48519 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(post_type);
return (fexpr__48519.cljs$core$IFn$_invoke$arity$1 ? fexpr__48519.cljs$core$IFn$_invoke$arity$1(db) : fexpr__48519.call(null,db));
})());
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("dominion-dish.frontend.subs","per","dominion-dish.frontend.subs/per",-856767019),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__48538){
var vec__48541 = p__48538;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48541,(0),null);
var post_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48541,(1),null);
return new cljs.core.Keyword(null,"per","per",-1436678642).cljs$core$IFn$_invoke$arity$1((function (){var fexpr__48544 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(post_type);
return (fexpr__48544.cljs$core$IFn$_invoke$arity$1 ? fexpr__48544.cljs$core$IFn$_invoke$arity$1(db) : fexpr__48544.call(null,db));
})());
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("dominion-dish.frontend.subs","icon-key","dominion-dish.frontend.subs/icon-key",-1752273367),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){
var post_id = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dominion-dish.frontend.subs","post-id","dominion-dish.frontend.subs/post-id",2133558849)], null)));
var post_type = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dominion-dish.frontend.subs","post-type","dominion-dish.frontend.subs/post-type",-1759312886)], null)));
var recent_post = (function (){var or__4212__auto__ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dominion-dish.frontend.subs","post-by-id","dominion-dish.frontend.subs/post-by-id",-48000623),post_id], null)));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.first(new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dominion-dish.frontend.subs","posts-by-type","dominion-dish.frontend.subs/posts-by-type",-1589966056),post_type], null)))));
}
})();
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((((((!((post_id == null)))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(post_type,"latest"))))?cljs.core.first(new cljs.core.Keyword(null,"labels","labels",-626734591).cljs$core$IFn$_invoke$arity$1(recent_post)):post_type));
})], 0));

//# sourceMappingURL=dominion_dish.frontend.subs.js.map
