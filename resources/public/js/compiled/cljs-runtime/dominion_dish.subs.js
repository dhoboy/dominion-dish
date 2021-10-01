goog.provide('dominion_dish.subs');
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("dominion-dish.subs","active-panel","dominion-dish.subs/active-panel",1833255039),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("dominion-dish.subs","loading","dominion-dish.subs/loading",-1663330918),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return new cljs.core.Keyword(null,"loading","loading",-737050189).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("dominion-dish.subs","error","dominion-dish.subs/error",2110267955),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("dominion-dish.subs","post-id","dominion-dish.subs/post-id",683719437),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return new cljs.core.Keyword(null,"post-id","post-id",1618659080).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("dominion-dish.subs","post-type","dominion-dish.subs/post-type",526888998),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return new cljs.core.Keyword(null,"post-type","post-type",2092024867).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("dominion-dish.subs","all-posts","dominion-dish.subs/all-posts",-527748280),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36024_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__36024_SHARP_)),new cljs.core.Keyword(null,"items","items",1031954938));
}),dominion_dish.db.post_types)));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("dominion-dish.subs","post-by-id","dominion-dish.subs/post-by-id",-983358139),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (_,p__36031){
var vec__36032 = p__36031;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36032,(0),null);
var post_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36032,(1),null);
var all_posts = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dominion-dish.subs","all-posts","dominion-dish.subs/all-posts",-527748280)], null)));
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__36030_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(post_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__36030_SHARP_));
}),all_posts));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("dominion-dish.subs","posts-by-type","dominion-dish.subs/posts-by-type",-1147746620),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__36036){
var vec__36037 = p__36036;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36037,(0),null);
var post_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36037,(1),null);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(post_type));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("dominion-dish.subs","last-loaded-page","dominion-dish.subs/last-loaded-page",1911702213),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__36040){
var vec__36041 = p__36040;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36041,(0),null);
var post_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36041,(1),null);
return new cljs.core.Keyword(null,"last-loaded-page","last-loaded-page",-1180154172).cljs$core$IFn$_invoke$arity$1((function (){var fexpr__36044 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(post_type);
return (fexpr__36044.cljs$core$IFn$_invoke$arity$1 ? fexpr__36044.cljs$core$IFn$_invoke$arity$1(db) : fexpr__36044.call(null,db));
})());
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("dominion-dish.subs","per","dominion-dish.subs/per",-710399479),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__36045){
var vec__36046 = p__36045;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36046,(0),null);
var post_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36046,(1),null);
return new cljs.core.Keyword(null,"per","per",-1436678642).cljs$core$IFn$_invoke$arity$1((function (){var fexpr__36054 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(post_type);
return (fexpr__36054.cljs$core$IFn$_invoke$arity$1 ? fexpr__36054.cljs$core$IFn$_invoke$arity$1(db) : fexpr__36054.call(null,db));
})());
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("dominion-dish.subs","icon-key","dominion-dish.subs/icon-key",-1329483147),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){
var post_id = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dominion-dish.subs","post-id","dominion-dish.subs/post-id",683719437)], null)));
var post_type = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dominion-dish.subs","post-type","dominion-dish.subs/post-type",526888998)], null)));
var recent_post = (function (){var or__4212__auto__ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dominion-dish.subs","post-by-id","dominion-dish.subs/post-by-id",-983358139),post_id], null)));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.first(new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dominion-dish.subs","posts-by-type","dominion-dish.subs/posts-by-type",-1147746620),post_type], null)))));
}
})();
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((((((!((post_id == null)))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(post_type,"latest"))))?cljs.core.first(new cljs.core.Keyword(null,"labels","labels",-626734591).cljs$core$IFn$_invoke$arity$1(recent_post)):post_type));
})], 0));

//# sourceMappingURL=dominion_dish.subs.js.map
