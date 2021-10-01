goog.provide('dominion_dish.events');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("dominion-dish.events","initialize-db","dominion-dish.events/initialize-db",1762148415),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (_,___$1){
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.Symbol(null,"default-db","default-db",-1149092330,null)));

var result__33664__auto__ = dominion_dish.db.default_db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__33664__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"default-db","default-db",-1149092330,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__33664__auto__;
}catch (e36023){var e = e36023;
throw e;
}}):(function (_,___$1){
return dominion_dish.db.default_db;
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("dominion-dish.events","navigate","dominion-dish.events/navigate",-230252570),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (_,p__36025){
var vec__36026 = p__36025;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36026,(0),null);
var map__36029 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36026,(1),null);
var map__36029__$1 = cljs.core.__destructure_map(map__36029);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36029__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var post_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36029__$1,new cljs.core.Keyword(null,"post-type","post-type",2092024867));
var post_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36029__$1,new cljs.core.Keyword(null,"post-id","post-id",1618659080));
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"handler","handler",1444934915,null),new cljs.core.Symbol(null,"post-type","post-type",-562410902,null),new cljs.core.Symbol(null,"post-id","post-id",-1035776689,null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"navigate","navigate",657596805),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"handler","handler",-195596612),new cljs.core.Symbol(null,"handler","handler",1444934915,null),new cljs.core.Keyword(null,"post-type","post-type",2092024867),new cljs.core.Symbol(null,"post-type","post-type",-562410902,null),new cljs.core.Keyword(null,"post-id","post-id",1618659080),new cljs.core.Symbol(null,"post-id","post-id",-1035776689,null)], null)], null)));

var result__33664__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"navigate","navigate",657596805),(function (){var result__33664__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (){var result__33664__auto__ = handler;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(5),new cljs.core.Keyword(null,"result","result",1415092211),result__33664__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"handler","handler",1444934915,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__33664__auto__;
})(),new cljs.core.Keyword(null,"post-type","post-type",2092024867),(function (){var result__33664__auto__ = post_type;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(7),new cljs.core.Keyword(null,"result","result",1415092211),result__33664__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"post-type","post-type",-562410902,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__33664__auto__;
})(),new cljs.core.Keyword(null,"post-id","post-id",1618659080),(function (){var result__33664__auto__ = post_id;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(9),new cljs.core.Keyword(null,"result","result",1415092211),result__33664__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"post-id","post-id",-1035776689,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__33664__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(3),new cljs.core.Keyword(null,"result","result",1415092211),result__33664__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"handler","handler",-195596612),new cljs.core.Symbol(null,"handler","handler",1444934915,null),new cljs.core.Keyword(null,"post-type","post-type",2092024867),new cljs.core.Symbol(null,"post-type","post-type",-562410902,null),new cljs.core.Keyword(null,"post-id","post-id",1618659080),new cljs.core.Symbol(null,"post-id","post-id",-1035776689,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__33664__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__33664__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"navigate","navigate",657596805),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"handler","handler",-195596612),new cljs.core.Symbol(null,"handler","handler",1444934915,null),new cljs.core.Keyword(null,"post-type","post-type",2092024867),new cljs.core.Symbol(null,"post-type","post-type",-562410902,null),new cljs.core.Keyword(null,"post-id","post-id",1618659080),new cljs.core.Symbol(null,"post-id","post-id",-1035776689,null)], null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__33664__auto__;
}catch (e36035){var e = e36035;
throw e;
}}):(function (_,p__36049){
var vec__36050 = p__36049;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36050,(0),null);
var map__36053 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36050,(1),null);
var map__36053__$1 = cljs.core.__destructure_map(map__36053);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36053__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var post_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36053__$1,new cljs.core.Keyword(null,"post-type","post-type",2092024867));
var post_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36053__$1,new cljs.core.Keyword(null,"post-id","post-id",1618659080));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"navigate","navigate",657596805),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"handler","handler",-195596612),handler,new cljs.core.Keyword(null,"post-type","post-type",2092024867),post_type,new cljs.core.Keyword(null,"post-id","post-id",1618659080),post_id], null)], null);
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("dominion-dish.events","set-route","dominion-dish.events/set-route",-65187026),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__36055,p__36056){
var map__36057 = p__36055;
var map__36057__$1 = cljs.core.__destructure_map(map__36057);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36057__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__36058 = p__36056;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36058,(0),null);
var map__36061 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36058,(1),null);
var map__36061__$1 = cljs.core.__destructure_map(map__36061);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36061__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var post_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36061__$1,new cljs.core.Keyword(null,"post-type","post-type",2092024867));
var post_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36061__$1,new cljs.core.Keyword(null,"post-id","post-id",1618659080));
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"handler","handler",1444934915,null),new cljs.core.Symbol(null,"post-type","post-type",-562410902,null),new cljs.core.Symbol(null,"post-id","post-id",-1035776689,null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),new cljs.core.Symbol(null,"handler","handler",1444934915,null),new cljs.core.Keyword(null,"post-type","post-type",2092024867),new cljs.core.Symbol(null,"post-type","post-type",-562410902,null),new cljs.core.Keyword(null,"post-id","post-id",1618659080),new cljs.core.Symbol(null,"post-id","post-id",-1035776689,null))], null)));

var result__33664__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),(function (){var result__33664__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic((function (){var result__33664__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(4),new cljs.core.Keyword(null,"result","result",1415092211),result__33664__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__33664__auto__;
})(),new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),(function (){var result__33664__auto__ = handler;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(6),new cljs.core.Keyword(null,"result","result",1415092211),result__33664__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"handler","handler",1444934915,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__33664__auto__;
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"post-type","post-type",2092024867),(function (){var result__33664__auto__ = post_type;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(8),new cljs.core.Keyword(null,"result","result",1415092211),result__33664__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"post-type","post-type",-562410902,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__33664__auto__;
})(),new cljs.core.Keyword(null,"post-id","post-id",1618659080),(function (){var result__33664__auto__ = post_id;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(10),new cljs.core.Keyword(null,"result","result",1415092211),result__33664__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"post-id","post-id",-1035776689,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__33664__auto__;
})()], 0));
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(3),new cljs.core.Keyword(null,"result","result",1415092211),result__33664__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),new cljs.core.Symbol(null,"handler","handler",1444934915,null),new cljs.core.Keyword(null,"post-type","post-type",2092024867),new cljs.core.Symbol(null,"post-type","post-type",-562410902,null),new cljs.core.Keyword(null,"post-id","post-id",1618659080),new cljs.core.Symbol(null,"post-id","post-id",-1035776689,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__33664__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__33664__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),new cljs.core.Symbol(null,"handler","handler",1444934915,null),new cljs.core.Keyword(null,"post-type","post-type",2092024867),new cljs.core.Symbol(null,"post-type","post-type",-562410902,null),new cljs.core.Keyword(null,"post-id","post-id",1618659080),new cljs.core.Symbol(null,"post-id","post-id",-1035776689,null))], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__33664__auto__;
}catch (e36062){var e = e36062;
throw e;
}}):(function (p__36063,p__36064){
var map__36065 = p__36063;
var map__36065__$1 = cljs.core.__destructure_map(map__36065);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36065__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__36066 = p__36064;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36066,(0),null);
var map__36069 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36066,(1),null);
var map__36069__$1 = cljs.core.__destructure_map(map__36069);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36069__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var post_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36069__$1,new cljs.core.Keyword(null,"post-type","post-type",2092024867));
var post_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36069__$1,new cljs.core.Keyword(null,"post-id","post-id",1618659080));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),handler,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"post-type","post-type",2092024867),post_type,new cljs.core.Keyword(null,"post-id","post-id",1618659080),post_id], 0))], null);
})));
dominion_dish.events.post_list_observer = (new IntersectionObserver((function (entries,_){
var G__36073 = entries;
var vec__36074 = G__36073;
var seq__36075 = cljs.core.seq(vec__36074);
var first__36076 = cljs.core.first(seq__36075);
var seq__36075__$1 = cljs.core.next(seq__36075);
var item = first__36076;
var rest = seq__36075__$1;
var G__36073__$1 = G__36073;
while(true){
var vec__36077 = G__36073__$1;
var seq__36078 = cljs.core.seq(vec__36077);
var first__36079 = cljs.core.first(seq__36078);
var seq__36078__$1 = cljs.core.next(seq__36078);
var item__$1 = first__36079;
var rest__$1 = seq__36078__$1;
if(cljs.core.truth_(item__$1.isIntersecting)){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dominion-dish.events","check-post-list","dominion-dish.events/check-post-list",-1019013924)], null));
} else {
}

if(rest__$1){
var G__36127 = rest__$1;
G__36073__$1 = G__36127;
continue;
} else {
return null;
}
break;
}
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"root","root",-448657453),document.getElementById("app"),new cljs.core.Keyword(null,"threshold","threshold",204221583),1.0], null)));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("dominion-dish.events","observe-post-list","dominion-dish.events/observe-post-list",1145882003),(function (_,p__36080){
var vec__36081 = p__36080;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36081,(0),null);
var map__36084 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36081,(1),null);
var map__36084__$1 = cljs.core.__destructure_map(map__36084);
var element = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36084__$1,new cljs.core.Keyword(null,"element","element",1974019749));
return dominion_dish.events.post_list_observer.observe(element);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("dominion-dish.events","unobserve-post-list","dominion-dish.events/unobserve-post-list",1848639712),(function (_,p__36085){
var vec__36086 = p__36085;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36086,(0),null);
var map__36089 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36086,(1),null);
var map__36089__$1 = cljs.core.__destructure_map(map__36089);
var element = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36089__$1,new cljs.core.Keyword(null,"element","element",1974019749));
return dominion_dish.events.post_list_observer.unobserve(element);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("dominion-dish.events","check-post-list","dominion-dish.events/check-post-list",-1019013924),(function (p__36090){
var map__36091 = p__36090;
var map__36091__$1 = cljs.core.__destructure_map(map__36091);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36091__$1,new cljs.core.Keyword(null,"db","db",993250759));
var post_type = new cljs.core.Keyword(null,"post-type","post-type",2092024867).cljs$core$IFn$_invoke$arity$1(db);
var post_type_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(post_type);
var map__36092 = (post_type_key.cljs$core$IFn$_invoke$arity$1 ? post_type_key.cljs$core$IFn$_invoke$arity$1(db) : post_type_key.call(null,db));
var map__36092__$1 = cljs.core.__destructure_map(map__36092);
var last_loaded_page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36092__$1,new cljs.core.Keyword(null,"last-loaded-page","last-loaded-page",-1180154172));
var per = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36092__$1,new cljs.core.Keyword(null,"per","per",-1436678642));
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36092__$1,new cljs.core.Keyword(null,"items","items",1031954938));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((last_loaded_page * per),cljs.core.count(items))){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dominion-dish.events","get-posts","dominion-dish.events/get-posts",-768489742),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"post-type","post-type",2092024867),post_type,new cljs.core.Keyword(null,"page","page",849072397),(last_loaded_page + (1)),new cljs.core.Keyword(null,"per","per",-1436678642),per], null)], null));
} else {
return null;
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("dominion-dish.events","get-posts","dominion-dish.events/get-posts",-768489742),(function (p__36093,p__36094){
var map__36095 = p__36093;
var map__36095__$1 = cljs.core.__destructure_map(map__36095);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36095__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__36096 = p__36094;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36096,(0),null);
var map__36099 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36096,(1),null);
var map__36099__$1 = cljs.core.__destructure_map(map__36099);
var post_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36099__$1,new cljs.core.Keyword(null,"post-type","post-type",2092024867));
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36099__$1,new cljs.core.Keyword(null,"page","page",849072397),(1));
var per = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36099__$1,new cljs.core.Keyword(null,"per","per",-1436678642),(10));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"loading","loading",-737050189),true),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),["http://localhost:3000/posts/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(post_type),"?page=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(page),"&per=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(per)].join(''),new cljs.core.Keyword(null,"timeout","timeout",-318625318),(8000),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dominion-dish.events","get-posts-success","dominion-dish.events/get-posts-success",-1989177594),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"post-type","post-type",2092024867),post_type], null)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dominion-dish.events","get-posts-failure","dominion-dish.events/get-posts-failure",-1369804639)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("dominion-dish.events","get-posts-success","dominion-dish.events/get-posts-success",-1989177594),(function (db,p__36100){
var vec__36101 = p__36100;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36101,(0),null);
var map__36104 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36101,(1),null);
var map__36104__$1 = cljs.core.__destructure_map(map__36104);
var post_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36104__$1,new cljs.core.Keyword(null,"post-type","post-type",2092024867));
var map__36105 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36101,(2),null);
var map__36105__$1 = cljs.core.__destructure_map(map__36105);
var pagination = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36105__$1,new cljs.core.Keyword(null,"pagination","pagination",-1553654604));
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36105__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var post_type_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(post_type);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"loading","loading",-737050189),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([post_type_key,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"last-loaded-page","last-loaded-page",-1180154172),new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(pagination),new cljs.core.Keyword(null,"per","per",-1436678642),new cljs.core.Keyword(null,"per","per",-1436678642).cljs$core$IFn$_invoke$arity$1(pagination),new cljs.core.Keyword(null,"items","items",1031954938),dominion_dish.utils.add_items_to_list(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-items","current-items",292221155),new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1((post_type_key.cljs$core$IFn$_invoke$arity$1 ? post_type_key.cljs$core$IFn$_invoke$arity$1(db) : post_type_key.call(null,db))),new cljs.core.Keyword(null,"new-items","new-items",-2122710837),items], null))], null)], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("dominion-dish.events","get-posts-failure","dominion-dish.events/get-posts-failure",-1369804639),(function (db,p__36106){
var vec__36107 = p__36106;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36107,(0),null);
var resp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36107,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"error","error",-978969032),true);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("dominion-dish.events","get-post","dominion-dish.events/get-post",-1559778820),(function (p__36110,p__36111){
var map__36112 = p__36110;
var map__36112__$1 = cljs.core.__destructure_map(map__36112);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36112__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__36113 = p__36111;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36113,(0),null);
var map__36116 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36113,(1),null);
var map__36116__$1 = cljs.core.__destructure_map(map__36116);
var post_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36116__$1,new cljs.core.Keyword(null,"post-type","post-type",2092024867));
var post_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36116__$1,new cljs.core.Keyword(null,"post-id","post-id",1618659080));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"loading","loading",-737050189),true),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),["http://localhost:3000/post/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(post_id)].join(''),new cljs.core.Keyword(null,"timeout","timeout",-318625318),(8000),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dominion-dish.events","get-post-success","dominion-dish.events/get-post-success",1222108630),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"post-type","post-type",2092024867),post_type], null)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dominion-dish.events","get-post-failure","dominion-dish.events/get-post-failure",118664079)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("dominion-dish.events","get-post-success","dominion-dish.events/get-post-success",1222108630),(function (db,p__36117){
var vec__36118 = p__36117;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36118,(0),null);
var map__36121 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36118,(1),null);
var map__36121__$1 = cljs.core.__destructure_map(map__36121);
var post_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36121__$1,new cljs.core.Keyword(null,"post-type","post-type",2092024867));
var map__36122 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36118,(2),null);
var map__36122__$1 = cljs.core.__destructure_map(map__36122);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36122__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var post_type_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(post_type);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"loading","loading",-737050189),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([post_type_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"items","items",1031954938),dominion_dish.utils.add_items_to_list(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-items","current-items",292221155),new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1((post_type_key.cljs$core$IFn$_invoke$arity$1 ? post_type_key.cljs$core$IFn$_invoke$arity$1(db) : post_type_key.call(null,db))),new cljs.core.Keyword(null,"new-items","new-items",-2122710837),items], null))], null)], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("dominion-dish.events","get-post-failure","dominion-dish.events/get-post-failure",118664079),(function (db,p__36123){
var vec__36124 = p__36123;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36124,(0),null);
var resp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36124,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"error","error",-978969032),true);
}));

//# sourceMappingURL=dominion_dish.events.js.map
