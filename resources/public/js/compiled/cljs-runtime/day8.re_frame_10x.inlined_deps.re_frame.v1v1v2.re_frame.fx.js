goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx');
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind) : day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (day8.re-frame-10x.inlined-deps.re-frame.v1v1v2.re-frame.registrar/kinds kind)"));
}
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$reg_fx(id,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.register_handler(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.do_fx = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$do_fx_after(context){
if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__32427 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__32428 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__32428);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___32553 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___32553)){
var new_db_32554 = temp__5753__auto___32553;
var fexpr__32436_32555 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__32436_32555.cljs$core$IFn$_invoke$arity$1 ? fexpr__32436_32555.cljs$core$IFn$_invoke$arity$1(new_db_32554) : fexpr__32436_32555.call(null,new_db_32554));
} else {
}

var seq__32437 = cljs.core.seq(effects_without_db);
var chunk__32438 = null;
var count__32439 = (0);
var i__32440 = (0);
while(true){
if((i__32440 < count__32439)){
var vec__32456 = chunk__32438.cljs$core$IIndexed$_nth$arity$2(null,i__32440);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32456,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32456,(1),null);
var temp__5751__auto___32558 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___32558)){
var effect_fn_32559 = temp__5751__auto___32558;
(effect_fn_32559.cljs$core$IFn$_invoke$arity$1 ? effect_fn_32559.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_32559.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__32561 = seq__32437;
var G__32562 = chunk__32438;
var G__32563 = count__32439;
var G__32564 = (i__32440 + (1));
seq__32437 = G__32561;
chunk__32438 = G__32562;
count__32439 = G__32563;
i__32440 = G__32564;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32437);
if(temp__5753__auto__){
var seq__32437__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32437__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__32437__$1);
var G__32565 = cljs.core.chunk_rest(seq__32437__$1);
var G__32566 = c__4638__auto__;
var G__32567 = cljs.core.count(c__4638__auto__);
var G__32568 = (0);
seq__32437 = G__32565;
chunk__32438 = G__32566;
count__32439 = G__32567;
i__32440 = G__32568;
continue;
} else {
var vec__32460 = cljs.core.first(seq__32437__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32460,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32460,(1),null);
var temp__5751__auto___32569 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___32569)){
var effect_fn_32570 = temp__5751__auto___32569;
(effect_fn_32570.cljs$core$IFn$_invoke$arity$1 ? effect_fn_32570.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_32570.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__32571 = cljs.core.next(seq__32437__$1);
var G__32572 = null;
var G__32573 = (0);
var G__32574 = (0);
seq__32437 = G__32571;
chunk__32438 = G__32572;
count__32439 = G__32573;
i__32440 = G__32574;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var end__32098__auto___32575 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now();
var duration__32099__auto___32576 = (end__32098__auto___32575 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__32099__auto___32576,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.run_tracing_callbacks_BANG_(end__32098__auto___32575);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__32427);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___32577 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___32577)){
var new_db_32578 = temp__5753__auto___32577;
var fexpr__32465_32580 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__32465_32580.cljs$core$IFn$_invoke$arity$1 ? fexpr__32465_32580.cljs$core$IFn$_invoke$arity$1(new_db_32578) : fexpr__32465_32580.call(null,new_db_32578));
} else {
}

var seq__32466 = cljs.core.seq(effects_without_db);
var chunk__32467 = null;
var count__32468 = (0);
var i__32469 = (0);
while(true){
if((i__32469 < count__32468)){
var vec__32479 = chunk__32467.cljs$core$IIndexed$_nth$arity$2(null,i__32469);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32479,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32479,(1),null);
var temp__5751__auto___32582 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___32582)){
var effect_fn_32583 = temp__5751__auto___32582;
(effect_fn_32583.cljs$core$IFn$_invoke$arity$1 ? effect_fn_32583.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_32583.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__32584 = seq__32466;
var G__32585 = chunk__32467;
var G__32586 = count__32468;
var G__32587 = (i__32469 + (1));
seq__32466 = G__32584;
chunk__32467 = G__32585;
count__32468 = G__32586;
i__32469 = G__32587;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32466);
if(temp__5753__auto__){
var seq__32466__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32466__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__32466__$1);
var G__32588 = cljs.core.chunk_rest(seq__32466__$1);
var G__32589 = c__4638__auto__;
var G__32590 = cljs.core.count(c__4638__auto__);
var G__32591 = (0);
seq__32466 = G__32588;
chunk__32467 = G__32589;
count__32468 = G__32590;
i__32469 = G__32591;
continue;
} else {
var vec__32486 = cljs.core.first(seq__32466__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32486,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32486,(1),null);
var temp__5751__auto___32592 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___32592)){
var effect_fn_32594 = temp__5751__auto___32592;
(effect_fn_32594.cljs$core$IFn$_invoke$arity$1 ? effect_fn_32594.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_32594.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__32595 = cljs.core.next(seq__32466__$1);
var G__32596 = null;
var G__32597 = (0);
var G__32598 = (0);
seq__32466 = G__32595;
chunk__32467 = G__32596;
count__32468 = G__32597;
i__32469 = G__32598;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$dispatch_later(p__32490){
var map__32491 = p__32490;
var map__32491__$1 = cljs.core.__destructure_map(map__32491);
var effect = map__32491__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32491__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32491__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.set_timeout_BANG_((function (){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(dispatch);
}),ms);
}
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(value);
} else {
var seq__32492 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__32493 = null;
var count__32494 = (0);
var i__32495 = (0);
while(true){
if((i__32495 < count__32494)){
var effect = chunk__32493.cljs$core$IIndexed$_nth$arity$2(null,i__32495);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__32601 = seq__32492;
var G__32602 = chunk__32493;
var G__32603 = count__32494;
var G__32604 = (i__32495 + (1));
seq__32492 = G__32601;
chunk__32493 = G__32602;
count__32494 = G__32603;
i__32495 = G__32604;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32492);
if(temp__5753__auto__){
var seq__32492__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32492__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__32492__$1);
var G__32605 = cljs.core.chunk_rest(seq__32492__$1);
var G__32606 = c__4638__auto__;
var G__32607 = cljs.core.count(c__4638__auto__);
var G__32608 = (0);
seq__32492 = G__32605;
chunk__32493 = G__32606;
count__32494 = G__32607;
i__32495 = G__32608;
continue;
} else {
var effect = cljs.core.first(seq__32492__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__32609 = cljs.core.next(seq__32492__$1);
var G__32610 = null;
var G__32611 = (0);
var G__32612 = (0);
seq__32492 = G__32609;
chunk__32493 = G__32610;
count__32494 = G__32611;
i__32495 = G__32612;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__32505 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__32506 = null;
var count__32507 = (0);
var i__32508 = (0);
while(true){
if((i__32508 < count__32507)){
var vec__32521 = chunk__32506.cljs$core$IIndexed$_nth$arity$2(null,i__32508);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32521,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32521,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___32620 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___32620)){
var effect_fn_32621 = temp__5751__auto___32620;
(effect_fn_32621.cljs$core$IFn$_invoke$arity$1 ? effect_fn_32621.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_32621.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__32622 = seq__32505;
var G__32623 = chunk__32506;
var G__32624 = count__32507;
var G__32625 = (i__32508 + (1));
seq__32505 = G__32622;
chunk__32506 = G__32623;
count__32507 = G__32624;
i__32508 = G__32625;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32505);
if(temp__5753__auto__){
var seq__32505__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32505__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__32505__$1);
var G__32627 = cljs.core.chunk_rest(seq__32505__$1);
var G__32628 = c__4638__auto__;
var G__32629 = cljs.core.count(c__4638__auto__);
var G__32630 = (0);
seq__32505 = G__32627;
chunk__32506 = G__32628;
count__32507 = G__32629;
i__32508 = G__32630;
continue;
} else {
var vec__32524 = cljs.core.first(seq__32505__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32524,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32524,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___32632 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___32632)){
var effect_fn_32634 = temp__5751__auto___32632;
(effect_fn_32634.cljs$core$IFn$_invoke$arity$1 ? effect_fn_32634.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_32634.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__32637 = cljs.core.next(seq__32505__$1);
var G__32638 = null;
var G__32639 = (0);
var G__32640 = (0);
seq__32505 = G__32637;
chunk__32506 = G__32638;
count__32507 = G__32639;
i__32508 = G__32640;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__32540 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__32541 = null;
var count__32542 = (0);
var i__32543 = (0);
while(true){
if((i__32543 < count__32542)){
var event = chunk__32541.cljs$core$IIndexed$_nth$arity$2(null,i__32543);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__32643 = seq__32540;
var G__32644 = chunk__32541;
var G__32645 = count__32542;
var G__32646 = (i__32543 + (1));
seq__32540 = G__32643;
chunk__32541 = G__32644;
count__32542 = G__32645;
i__32543 = G__32646;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32540);
if(temp__5753__auto__){
var seq__32540__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32540__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__32540__$1);
var G__32651 = cljs.core.chunk_rest(seq__32540__$1);
var G__32652 = c__4638__auto__;
var G__32653 = cljs.core.count(c__4638__auto__);
var G__32654 = (0);
seq__32540 = G__32651;
chunk__32541 = G__32652;
count__32542 = G__32653;
i__32543 = G__32654;
continue;
} else {
var event = cljs.core.first(seq__32540__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__32655 = cljs.core.next(seq__32540__$1);
var G__32656 = null;
var G__32657 = (0);
var G__32658 = (0);
seq__32540 = G__32655;
chunk__32541 = G__32656;
count__32542 = G__32657;
i__32543 = G__32658;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__32547 = cljs.core.seq(value);
var chunk__32548 = null;
var count__32549 = (0);
var i__32550 = (0);
while(true){
if((i__32550 < count__32549)){
var event = chunk__32548.cljs$core$IIndexed$_nth$arity$2(null,i__32550);
clear_event(event);


var G__32659 = seq__32547;
var G__32660 = chunk__32548;
var G__32661 = count__32549;
var G__32662 = (i__32550 + (1));
seq__32547 = G__32659;
chunk__32548 = G__32660;
count__32549 = G__32661;
i__32550 = G__32662;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32547);
if(temp__5753__auto__){
var seq__32547__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32547__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__32547__$1);
var G__32667 = cljs.core.chunk_rest(seq__32547__$1);
var G__32668 = c__4638__auto__;
var G__32669 = cljs.core.count(c__4638__auto__);
var G__32670 = (0);
seq__32547 = G__32667;
chunk__32548 = G__32668;
count__32549 = G__32669;
i__32550 = G__32670;
continue;
} else {
var event = cljs.core.first(seq__32547__$1);
clear_event(event);


var G__32672 = cljs.core.next(seq__32547__$1);
var G__32673 = null;
var G__32674 = (0);
var G__32675 = (0);
seq__32547 = G__32672;
chunk__32548 = G__32673;
count__32549 = G__32674;
i__32550 = G__32675;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.js.map
