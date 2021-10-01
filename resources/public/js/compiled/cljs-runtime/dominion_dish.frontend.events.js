goog.provide('dominion_dish.frontend.events');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("dominion-dish.frontend.events","initialize-db","dominion-dish.frontend.events/initialize-db",286310147),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (_,___$1){
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.Symbol(null,"default-db","default-db",-1149092330,null)));

var result__30235__auto__ = dominion_dish.frontend.db.default_db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__30235__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"default-db","default-db",-1149092330,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__30235__auto__;
}catch (e31225){var e = e31225;
throw e;
}}):(function (_,___$1){
return dominion_dish.frontend.db.default_db;
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("dominion-dish.frontend.events","navigate","dominion-dish.frontend.events/navigate",1517165354),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (_,p__31226){
var vec__31227 = p__31226;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31227,(0),null);
var map__31230 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31227,(1),null);
var map__31230__$1 = cljs.core.__destructure_map(map__31230);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31230__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var post_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31230__$1,new cljs.core.Keyword(null,"post-type","post-type",2092024867));
var post_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31230__$1,new cljs.core.Keyword(null,"post-id","post-id",1618659080));
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"handler","handler",1444934915,null),new cljs.core.Symbol(null,"post-type","post-type",-562410902,null),new cljs.core.Symbol(null,"post-id","post-id",-1035776689,null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"navigate","navigate",657596805),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"handler","handler",-195596612),new cljs.core.Symbol(null,"handler","handler",1444934915,null),new cljs.core.Keyword(null,"post-type","post-type",2092024867),new cljs.core.Symbol(null,"post-type","post-type",-562410902,null),new cljs.core.Keyword(null,"post-id","post-id",1618659080),new cljs.core.Symbol(null,"post-id","post-id",-1035776689,null)], null)], null)));

var result__30235__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"navigate","navigate",657596805),(function (){var result__30235__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (){var result__30235__auto__ = handler;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(5),new cljs.core.Keyword(null,"result","result",1415092211),result__30235__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"handler","handler",1444934915,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__30235__auto__;
})(),new cljs.core.Keyword(null,"post-type","post-type",2092024867),(function (){var result__30235__auto__ = post_type;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(7),new cljs.core.Keyword(null,"result","result",1415092211),result__30235__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"post-type","post-type",-562410902,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__30235__auto__;
})(),new cljs.core.Keyword(null,"post-id","post-id",1618659080),(function (){var result__30235__auto__ = post_id;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(9),new cljs.core.Keyword(null,"result","result",1415092211),result__30235__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"post-id","post-id",-1035776689,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__30235__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(3),new cljs.core.Keyword(null,"result","result",1415092211),result__30235__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"handler","handler",-195596612),new cljs.core.Symbol(null,"handler","handler",1444934915,null),new cljs.core.Keyword(null,"post-type","post-type",2092024867),new cljs.core.Symbol(null,"post-type","post-type",-562410902,null),new cljs.core.Keyword(null,"post-id","post-id",1618659080),new cljs.core.Symbol(null,"post-id","post-id",-1035776689,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__30235__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__30235__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"navigate","navigate",657596805),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"handler","handler",-195596612),new cljs.core.Symbol(null,"handler","handler",1444934915,null),new cljs.core.Keyword(null,"post-type","post-type",2092024867),new cljs.core.Symbol(null,"post-type","post-type",-562410902,null),new cljs.core.Keyword(null,"post-id","post-id",1618659080),new cljs.core.Symbol(null,"post-id","post-id",-1035776689,null)], null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__30235__auto__;
}catch (e31231){var e = e31231;
throw e;
}}):(function (_,p__31232){
var vec__31233 = p__31232;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31233,(0),null);
var map__31236 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31233,(1),null);
var map__31236__$1 = cljs.core.__destructure_map(map__31236);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31236__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var post_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31236__$1,new cljs.core.Keyword(null,"post-type","post-type",2092024867));
var post_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31236__$1,new cljs.core.Keyword(null,"post-id","post-id",1618659080));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"navigate","navigate",657596805),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"handler","handler",-195596612),handler,new cljs.core.Keyword(null,"post-type","post-type",2092024867),post_type,new cljs.core.Keyword(null,"post-id","post-id",1618659080),post_id], null)], null);
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("dominion-dish.frontend.events","set-route","dominion-dish.frontend.events/set-route",-2077830542),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__31237,p__31238){
var map__31239 = p__31237;
var map__31239__$1 = cljs.core.__destructure_map(map__31239);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31239__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__31240 = p__31238;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31240,(0),null);
var map__31243 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31240,(1),null);
var map__31243__$1 = cljs.core.__destructure_map(map__31243);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31243__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var post_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31243__$1,new cljs.core.Keyword(null,"post-type","post-type",2092024867));
var post_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31243__$1,new cljs.core.Keyword(null,"post-id","post-id",1618659080));
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"handler","handler",1444934915,null),new cljs.core.Symbol(null,"post-type","post-type",-562410902,null),new cljs.core.Symbol(null,"post-id","post-id",-1035776689,null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),new cljs.core.Symbol(null,"handler","handler",1444934915,null),new cljs.core.Keyword(null,"post-type","post-type",2092024867),new cljs.core.Symbol(null,"post-type","post-type",-562410902,null),new cljs.core.Keyword(null,"post-id","post-id",1618659080),new cljs.core.Symbol(null,"post-id","post-id",-1035776689,null))], null)));

var result__30235__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),(function (){var result__30235__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic((function (){var result__30235__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(4),new cljs.core.Keyword(null,"result","result",1415092211),result__30235__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__30235__auto__;
})(),new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),(function (){var result__30235__auto__ = handler;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(6),new cljs.core.Keyword(null,"result","result",1415092211),result__30235__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"handler","handler",1444934915,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__30235__auto__;
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"post-type","post-type",2092024867),(function (){var result__30235__auto__ = post_type;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(8),new cljs.core.Keyword(null,"result","result",1415092211),result__30235__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"post-type","post-type",-562410902,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__30235__auto__;
})(),new cljs.core.Keyword(null,"post-id","post-id",1618659080),(function (){var result__30235__auto__ = post_id;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(10),new cljs.core.Keyword(null,"result","result",1415092211),result__30235__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"post-id","post-id",-1035776689,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__30235__auto__;
})()], 0));
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(3),new cljs.core.Keyword(null,"result","result",1415092211),result__30235__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),new cljs.core.Symbol(null,"handler","handler",1444934915,null),new cljs.core.Keyword(null,"post-type","post-type",2092024867),new cljs.core.Symbol(null,"post-type","post-type",-562410902,null),new cljs.core.Keyword(null,"post-id","post-id",1618659080),new cljs.core.Symbol(null,"post-id","post-id",-1035776689,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__30235__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__30235__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),new cljs.core.Symbol(null,"handler","handler",1444934915,null),new cljs.core.Keyword(null,"post-type","post-type",2092024867),new cljs.core.Symbol(null,"post-type","post-type",-562410902,null),new cljs.core.Keyword(null,"post-id","post-id",1618659080),new cljs.core.Symbol(null,"post-id","post-id",-1035776689,null))], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__30235__auto__;
}catch (e31244){var e = e31244;
throw e;
}}):(function (p__31245,p__31246){
var map__31247 = p__31245;
var map__31247__$1 = cljs.core.__destructure_map(map__31247);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31247__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__31248 = p__31246;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31248,(0),null);
var map__31251 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31248,(1),null);
var map__31251__$1 = cljs.core.__destructure_map(map__31251);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31251__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var post_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31251__$1,new cljs.core.Keyword(null,"post-type","post-type",2092024867));
var post_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31251__$1,new cljs.core.Keyword(null,"post-id","post-id",1618659080));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),handler,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"post-type","post-type",2092024867),post_type,new cljs.core.Keyword(null,"post-id","post-id",1618659080),post_id], 0))], null);
})));
dominion_dish.frontend.events.post_list_observer = (new IntersectionObserver((function (entries,_){
var G__31255 = entries;
var vec__31256 = G__31255;
var seq__31257 = cljs.core.seq(vec__31256);
var first__31258 = cljs.core.first(seq__31257);
var seq__31257__$1 = cljs.core.next(seq__31257);
var item = first__31258;
var rest = seq__31257__$1;
var G__31255__$1 = G__31255;
while(true){
var vec__31259 = G__31255__$1;
var seq__31260 = cljs.core.seq(vec__31259);
var first__31261 = cljs.core.first(seq__31260);
var seq__31260__$1 = cljs.core.next(seq__31260);
var item__$1 = first__31261;
var rest__$1 = seq__31260__$1;
if(cljs.core.truth_(item__$1.isIntersecting)){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dominion-dish.frontend.events","check-post-list","dominion-dish.frontend.events/check-post-list",1531221016)], null));
} else {
}

if(rest__$1){
var G__31313 = rest__$1;
G__31255__$1 = G__31313;
continue;
} else {
return null;
}
break;
}
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"root","root",-448657453),document.getElementById("app"),new cljs.core.Keyword(null,"threshold","threshold",204221583),1.0], null)));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("dominion-dish.frontend.events","observe-post-list","dominion-dish.frontend.events/observe-post-list",-1135917881),(function (_,p__31262){
var vec__31263 = p__31262;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31263,(0),null);
var map__31266 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31263,(1),null);
var map__31266__$1 = cljs.core.__destructure_map(map__31266);
var element = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31266__$1,new cljs.core.Keyword(null,"element","element",1974019749));
return dominion_dish.frontend.events.post_list_observer.observe(element);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("dominion-dish.frontend.events","unobserve-post-list","dominion-dish.frontend.events/unobserve-post-list",103317516),(function (_,p__31267){
var vec__31268 = p__31267;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31268,(0),null);
var map__31271 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31268,(1),null);
var map__31271__$1 = cljs.core.__destructure_map(map__31271);
var element = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31271__$1,new cljs.core.Keyword(null,"element","element",1974019749));
return dominion_dish.frontend.events.post_list_observer.unobserve(element);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("dominion-dish.frontend.events","check-post-list","dominion-dish.frontend.events/check-post-list",1531221016),(function (p__31272){
var map__31273 = p__31272;
var map__31273__$1 = cljs.core.__destructure_map(map__31273);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31273__$1,new cljs.core.Keyword(null,"db","db",993250759));
var loading = new cljs.core.Keyword(null,"loading","loading",-737050189).cljs$core$IFn$_invoke$arity$1(db);
var post_type = new cljs.core.Keyword(null,"post-type","post-type",2092024867).cljs$core$IFn$_invoke$arity$1(db);
var post_type_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(post_type);
var map__31274 = (post_type_key.cljs$core$IFn$_invoke$arity$1 ? post_type_key.cljs$core$IFn$_invoke$arity$1(db) : post_type_key.call(null,db));
var map__31274__$1 = cljs.core.__destructure_map(map__31274);
var last_loaded_page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31274__$1,new cljs.core.Keyword(null,"last-loaded-page","last-loaded-page",-1180154172));
var per = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31274__$1,new cljs.core.Keyword(null,"per","per",-1436678642));
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31274__$1,new cljs.core.Keyword(null,"items","items",1031954938));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((last_loaded_page * per),cljs.core.count(items))) && (cljs.core.not(loading)))){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dominion-dish.frontend.events","get-posts","dominion-dish.frontend.events/get-posts",1244940294),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"post-type","post-type",2092024867),post_type,new cljs.core.Keyword(null,"page","page",849072397),(last_loaded_page + (1)),new cljs.core.Keyword(null,"per","per",-1436678642),per], null)], null));
} else {
return null;
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("dominion-dish.frontend.events","get-posts","dominion-dish.frontend.events/get-posts",1244940294),(function (p__31275,p__31276){
var map__31277 = p__31275;
var map__31277__$1 = cljs.core.__destructure_map(map__31277);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31277__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__31278 = p__31276;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31278,(0),null);
var map__31281 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31278,(1),null);
var map__31281__$1 = cljs.core.__destructure_map(map__31281);
var post_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31281__$1,new cljs.core.Keyword(null,"post-type","post-type",2092024867));
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31281__$1,new cljs.core.Keyword(null,"page","page",849072397),(1));
var per = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31281__$1,new cljs.core.Keyword(null,"per","per",-1436678642),(10));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"loading","loading",-737050189),true),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),["http://localhost:3000/posts/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(post_type),"?page=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(page),"&per=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(per)].join(''),new cljs.core.Keyword(null,"timeout","timeout",-318625318),(8000),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dominion-dish.frontend.events","get-posts-success","dominion-dish.frontend.events/get-posts-success",-512815542),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"post-type","post-type",2092024867),post_type], null)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dominion-dish.frontend.events","get-posts-failure","dominion-dish.frontend.events/get-posts-failure",1452339421)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("dominion-dish.frontend.events","get-posts-success","dominion-dish.frontend.events/get-posts-success",-512815542),(function (db,p__31282){
var vec__31283 = p__31282;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31283,(0),null);
var map__31286 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31283,(1),null);
var map__31286__$1 = cljs.core.__destructure_map(map__31286);
var post_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31286__$1,new cljs.core.Keyword(null,"post-type","post-type",2092024867));
var map__31287 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31283,(2),null);
var map__31287__$1 = cljs.core.__destructure_map(map__31287);
var pagination = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31287__$1,new cljs.core.Keyword(null,"pagination","pagination",-1553654604));
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31287__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var post_type_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(post_type);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"loading","loading",-737050189),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"error","error",-978969032),false,post_type_key,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"last-loaded-page","last-loaded-page",-1180154172),new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(pagination),new cljs.core.Keyword(null,"per","per",-1436678642),new cljs.core.Keyword(null,"per","per",-1436678642).cljs$core$IFn$_invoke$arity$1(pagination),new cljs.core.Keyword(null,"items","items",1031954938),dominion_dish.frontend.utils.add_items_to_list(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-items","current-items",292221155),new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1((post_type_key.cljs$core$IFn$_invoke$arity$1 ? post_type_key.cljs$core$IFn$_invoke$arity$1(db) : post_type_key.call(null,db))),new cljs.core.Keyword(null,"new-items","new-items",-2122710837),items], null))], null)], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("dominion-dish.frontend.events","get-posts-failure","dominion-dish.frontend.events/get-posts-failure",1452339421),(function (db,p__31288){
var vec__31289 = p__31288;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31289,(0),null);
var _resp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31289,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"loading","loading",-737050189),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"error","error",-978969032),true], 0));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("dominion-dish.frontend.events","get-post","dominion-dish.frontend.events/get-post",991312184),(function (p__31292,p__31293){
var map__31294 = p__31292;
var map__31294__$1 = cljs.core.__destructure_map(map__31294);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31294__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__31295 = p__31293;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31295,(0),null);
var map__31298 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31295,(1),null);
var map__31298__$1 = cljs.core.__destructure_map(map__31298);
var post_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31298__$1,new cljs.core.Keyword(null,"post-type","post-type",2092024867));
var post_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31298__$1,new cljs.core.Keyword(null,"post-id","post-id",1618659080));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"loading","loading",-737050189),true),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),["http://localhost:3000/post/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(post_id)].join(''),new cljs.core.Keyword(null,"timeout","timeout",-318625318),(8000),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dominion-dish.frontend.events","get-post-success","dominion-dish.frontend.events/get-post-success",-1327602294),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"post-type","post-type",2092024867),post_type], null)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dominion-dish.frontend.events","get-post-failure","dominion-dish.frontend.events/get-post-failure",520694331)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("dominion-dish.frontend.events","get-post-success","dominion-dish.frontend.events/get-post-success",-1327602294),(function (db,p__31299){
var vec__31300 = p__31299;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31300,(0),null);
var map__31303 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31300,(1),null);
var map__31303__$1 = cljs.core.__destructure_map(map__31303);
var post_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31303__$1,new cljs.core.Keyword(null,"post-type","post-type",2092024867));
var map__31304 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31300,(2),null);
var map__31304__$1 = cljs.core.__destructure_map(map__31304);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31304__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var post_type_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(post_type);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"loading","loading",-737050189),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"error","error",-978969032),false,post_type_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"items","items",1031954938),dominion_dish.frontend.utils.add_items_to_list(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-items","current-items",292221155),new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1((post_type_key.cljs$core$IFn$_invoke$arity$1 ? post_type_key.cljs$core$IFn$_invoke$arity$1(db) : post_type_key.call(null,db))),new cljs.core.Keyword(null,"new-items","new-items",-2122710837),items], null))], null)], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("dominion-dish.frontend.events","get-post-failure","dominion-dish.frontend.events/get-post-failure",520694331),(function (db,p__31305){
var vec__31306 = p__31305;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31306,(0),null);
var _resp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31306,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"loading","loading",-737050189),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"error","error",-978969032),true], 0));
}));

//# sourceMappingURL=dominion_dish.frontend.events.js.map
