goog.provide('dominion_dish.frontend.routes');
if((typeof dominion_dish !== 'undefined') && (typeof dominion_dish.frontend !== 'undefined') && (typeof dominion_dish.frontend.routes !== 'undefined') && (typeof dominion_dish.frontend.routes.panels !== 'undefined')){
} else {
dominion_dish.frontend.routes.panels = (function (){var method_table__4701__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4702__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4703__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4704__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4705__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__31317 = cljs.core.get_global_hierarchy;
return (fexpr__31317.cljs$core$IFn$_invoke$arity$0 ? fexpr__31317.cljs$core$IFn$_invoke$arity$0() : fexpr__31317.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("dominion-dish.frontend.routes","panels"),cljs.core.identity,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4705__auto__,method_table__4701__auto__,prefer_table__4702__auto__,method_cache__4703__auto__,cached_hierarchy__4704__auto__));
})();
}
dominion_dish.frontend.routes.panels.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"post-detail","post-detail",-113060058),(function (){
var post_id = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dominion-dish.frontend.subs","post-id","dominion-dish.frontend.subs/post-id",2133558849)], null)));
var post = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dominion-dish.frontend.subs","post-by-id","dominion-dish.frontend.subs/post-by-id",-48000623),post_id], null)));
return dominion_dish.frontend.components.post.post_detail(post);
}));
dominion_dish.frontend.routes.panels.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"post-list","post-list",652210946),(function (){
var post_type = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dominion-dish.frontend.subs","post-type","dominion-dish.frontend.subs/post-type",-1759312886)], null)));
var posts = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dominion-dish.frontend.subs","posts-by-type","dominion-dish.frontend.subs/posts-by-type",-1589966056),post_type], null)));
return dominion_dish.frontend.components.post.post_list(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"post-type","post-type",2092024867),post_type,new cljs.core.Keyword(null,"posts","posts",760043164),posts], null));
}));
dominion_dish.frontend.routes.panels.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (){
var posts = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dominion-dish.frontend.subs","posts-by-type","dominion-dish.frontend.subs/posts-by-type",-1589966056),"latest"], null)));
return dominion_dish.frontend.components.post.post_list(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"post-type","post-type",2092024867),new cljs.core.Keyword(null,"latest","latest",24323665),new cljs.core.Keyword(null,"posts","posts",760043164),posts], null));
}));
dominion_dish.frontend.routes.routes = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",cljs.core.PersistentArrayMap.createAsIfByAssoc(["",new cljs.core.Keyword(null,"latest","latest",24323665),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"post-type","post-type",2092024867)], null),cljs.core.PersistentArrayMap.createAsIfByAssoc(["",new cljs.core.Keyword(null,"post-list","post-list",652210946),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.Keyword(null,"post-id","post-id",1618659080)], null),new cljs.core.Keyword(null,"post-detail","post-detail",-113060058)])])], null));
dominion_dish.frontend.routes.dispatch = (function dominion_dish$frontend$routes$dispatch(p__31318){
var map__31319 = p__31318;
var map__31319__$1 = cljs.core.__destructure_map(map__31319);
var route_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31319__$1,new cljs.core.Keyword(null,"route-params","route-params",2111411055));
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31319__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var post_type = (function (){var or__4212__auto__ = new cljs.core.Keyword(null,"post-type","post-type",2092024867).cljs$core$IFn$_invoke$arity$1(route_params);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dominion-dish.frontend.subs","post-type","dominion-dish.frontend.subs/post-type",-1759312886)], null)));
}
})();
var post_id = new cljs.core.Keyword(null,"post-id","post-id",1618659080).cljs$core$IFn$_invoke$arity$1(route_params);
if(cljs.core.truth_(post_id)){
var found_post = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dominion-dish.frontend.subs","post-by-id","dominion-dish.frontend.subs/post-by-id",-48000623),post_id], null)));
if((found_post == null)){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dominion-dish.frontend.events","get-post","dominion-dish.frontend.events/get-post",991312184),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"post-type","post-type",2092024867),post_type,new cljs.core.Keyword(null,"post-id","post-id",1618659080),post_id], null)], null));
} else {
}

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dominion-dish.frontend.events","set-route","dominion-dish.frontend.events/set-route",-2077830542),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"handler","handler",-195596612),handler,new cljs.core.Keyword(null,"post-type","post-type",2092024867),post_type,new cljs.core.Keyword(null,"post-id","post-id",1618659080),post_id], null)], null));
} else {
var posts = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dominion-dish.frontend.subs","posts-by-type","dominion-dish.frontend.subs/posts-by-type",-1589966056),post_type], null)));
if((new cljs.core.Keyword(null,"last-loaded-page","last-loaded-page",-1180154172).cljs$core$IFn$_invoke$arity$1(posts) == null)){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dominion-dish.frontend.events","get-posts","dominion-dish.frontend.events/get-posts",1244940294),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"post-type","post-type",2092024867),post_type], null)], null));
} else {
}

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dominion-dish.frontend.events","set-route","dominion-dish.frontend.events/set-route",-2077830542),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"handler","handler",-195596612),handler,new cljs.core.Keyword(null,"post-type","post-type",2092024867),post_type,new cljs.core.Keyword(null,"post-id","post-id",1618659080),null], null)], null));
}
});
dominion_dish.frontend.routes.parse = (function dominion_dish$frontend$routes$parse(url){
return bidi.bidi.match_route(cljs.core.deref(dominion_dish.frontend.routes.routes),clojure.string.replace(url,/^\/?#/,""));
});
if((typeof dominion_dish !== 'undefined') && (typeof dominion_dish.frontend !== 'undefined') && (typeof dominion_dish.frontend.routes !== 'undefined') && (typeof dominion_dish.frontend.routes.history !== 'undefined')){
} else {
dominion_dish.frontend.routes.history = pushy.core.pushy(dominion_dish.frontend.routes.dispatch,dominion_dish.frontend.routes.parse);
}
dominion_dish.frontend.routes.start_BANG_ = (function dominion_dish$frontend$routes$start_BANG_(){
return dominion_dish.frontend.routes.history.pushy$core$IHistory$start_BANG_$arity$1(null);
});
dominion_dish.frontend.routes.url_for = (function dominion_dish$frontend$routes$url_for(var_args){
var args__4824__auto__ = [];
var len__4818__auto___31323 = arguments.length;
var i__4819__auto___31324 = (0);
while(true){
if((i__4819__auto___31324 < len__4818__auto___31323)){
args__4824__auto__.push((arguments[i__4819__auto___31324]));

var G__31325 = (i__4819__auto___31324 + (1));
i__4819__auto___31324 = G__31325;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return dominion_dish.frontend.routes.url_for.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(dominion_dish.frontend.routes.url_for.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(bidi.bidi.path_for,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(dominion_dish.frontend.routes.routes)], null),args)))].join('');
}));

(dominion_dish.frontend.routes.url_for.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dominion_dish.frontend.routes.url_for.cljs$lang$applyTo = (function (seq31320){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq31320));
}));

re_frame.core.reg_fx(new cljs.core.Keyword(null,"navigate","navigate",657596805),(function (p__31321){
var map__31322 = p__31321;
var map__31322__$1 = cljs.core.__destructure_map(map__31322);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31322__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var post_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31322__$1,new cljs.core.Keyword(null,"post-type","post-type",2092024867));
var post_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31322__$1,new cljs.core.Keyword(null,"post-id","post-id",1618659080));
return dominion_dish.frontend.routes.history.pushy$core$IHistory$set_token_BANG_$arity$2(null,dominion_dish.frontend.routes.url_for.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([handler,new cljs.core.Keyword(null,"post-type","post-type",2092024867),post_type,new cljs.core.Keyword(null,"post-id","post-id",1618659080),post_id], 0)));
}));

//# sourceMappingURL=dominion_dish.frontend.routes.js.map
