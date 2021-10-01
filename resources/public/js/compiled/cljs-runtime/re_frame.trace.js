goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__35450){
var map__35451 = p__35450;
var map__35451__$1 = cljs.core.__destructure_map(map__35451);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35451__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35451__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35451__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35451__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4212__auto__ = child_of;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__35455_35496 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__35456_35497 = null;
var count__35457_35498 = (0);
var i__35458_35499 = (0);
while(true){
if((i__35458_35499 < count__35457_35498)){
var vec__35469_35528 = chunk__35456_35497.cljs$core$IIndexed$_nth$arity$2(null,i__35458_35499);
var k_35529 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35469_35528,(0),null);
var cb_35530 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35469_35528,(1),null);
try{var G__35474_35534 = cljs.core.deref(re_frame.trace.traces);
(cb_35530.cljs$core$IFn$_invoke$arity$1 ? cb_35530.cljs$core$IFn$_invoke$arity$1(G__35474_35534) : cb_35530.call(null,G__35474_35534));
}catch (e35472){var e_35535 = e35472;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_35529,"while storing",cljs.core.deref(re_frame.trace.traces),e_35535], 0));
}

var G__35536 = seq__35455_35496;
var G__35537 = chunk__35456_35497;
var G__35538 = count__35457_35498;
var G__35539 = (i__35458_35499 + (1));
seq__35455_35496 = G__35536;
chunk__35456_35497 = G__35537;
count__35457_35498 = G__35538;
i__35458_35499 = G__35539;
continue;
} else {
var temp__5753__auto___35540 = cljs.core.seq(seq__35455_35496);
if(temp__5753__auto___35540){
var seq__35455_35541__$1 = temp__5753__auto___35540;
if(cljs.core.chunked_seq_QMARK_(seq__35455_35541__$1)){
var c__4638__auto___35542 = cljs.core.chunk_first(seq__35455_35541__$1);
var G__35543 = cljs.core.chunk_rest(seq__35455_35541__$1);
var G__35544 = c__4638__auto___35542;
var G__35545 = cljs.core.count(c__4638__auto___35542);
var G__35546 = (0);
seq__35455_35496 = G__35543;
chunk__35456_35497 = G__35544;
count__35457_35498 = G__35545;
i__35458_35499 = G__35546;
continue;
} else {
var vec__35476_35547 = cljs.core.first(seq__35455_35541__$1);
var k_35549 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35476_35547,(0),null);
var cb_35550 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35476_35547,(1),null);
try{var G__35481_35563 = cljs.core.deref(re_frame.trace.traces);
(cb_35550.cljs$core$IFn$_invoke$arity$1 ? cb_35550.cljs$core$IFn$_invoke$arity$1(G__35481_35563) : cb_35550.call(null,G__35481_35563));
}catch (e35480){var e_35564 = e35480;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_35549,"while storing",cljs.core.deref(re_frame.trace.traces),e_35564], 0));
}

var G__35565 = cljs.core.next(seq__35455_35541__$1);
var G__35566 = null;
var G__35567 = (0);
var G__35568 = (0);
seq__35455_35496 = G__35565;
chunk__35456_35497 = G__35566;
count__35457_35498 = G__35567;
i__35458_35499 = G__35568;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
