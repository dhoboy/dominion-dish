goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
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
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__35766 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__35767 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__35767);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___35915 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___35915)){
var new_db_35916 = temp__5753__auto___35915;
var fexpr__35776_35917 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__35776_35917.cljs$core$IFn$_invoke$arity$1 ? fexpr__35776_35917.cljs$core$IFn$_invoke$arity$1(new_db_35916) : fexpr__35776_35917.call(null,new_db_35916));
} else {
}

var seq__35778 = cljs.core.seq(effects_without_db);
var chunk__35779 = null;
var count__35780 = (0);
var i__35781 = (0);
while(true){
if((i__35781 < count__35780)){
var vec__35793 = chunk__35779.cljs$core$IIndexed$_nth$arity$2(null,i__35781);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35793,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35793,(1),null);
var temp__5751__auto___35918 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___35918)){
var effect_fn_35919 = temp__5751__auto___35918;
(effect_fn_35919.cljs$core$IFn$_invoke$arity$1 ? effect_fn_35919.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_35919.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__35922 = seq__35778;
var G__35923 = chunk__35779;
var G__35924 = count__35780;
var G__35925 = (i__35781 + (1));
seq__35778 = G__35922;
chunk__35779 = G__35923;
count__35780 = G__35924;
i__35781 = G__35925;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35778);
if(temp__5753__auto__){
var seq__35778__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35778__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__35778__$1);
var G__35926 = cljs.core.chunk_rest(seq__35778__$1);
var G__35927 = c__4638__auto__;
var G__35928 = cljs.core.count(c__4638__auto__);
var G__35929 = (0);
seq__35778 = G__35926;
chunk__35779 = G__35927;
count__35780 = G__35928;
i__35781 = G__35929;
continue;
} else {
var vec__35814 = cljs.core.first(seq__35778__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35814,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35814,(1),null);
var temp__5751__auto___35931 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___35931)){
var effect_fn_35932 = temp__5751__auto___35931;
(effect_fn_35932.cljs$core$IFn$_invoke$arity$1 ? effect_fn_35932.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_35932.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__35933 = cljs.core.next(seq__35778__$1);
var G__35934 = null;
var G__35935 = (0);
var G__35936 = (0);
seq__35778 = G__35933;
chunk__35779 = G__35934;
count__35780 = G__35935;
i__35781 = G__35936;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__35428__auto___35937 = re_frame.interop.now();
var duration__35429__auto___35938 = (end__35428__auto___35937 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__35429__auto___35938,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__35428__auto___35937);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__35766);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___35942 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___35942)){
var new_db_35943 = temp__5753__auto___35942;
var fexpr__35821_35944 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__35821_35944.cljs$core$IFn$_invoke$arity$1 ? fexpr__35821_35944.cljs$core$IFn$_invoke$arity$1(new_db_35943) : fexpr__35821_35944.call(null,new_db_35943));
} else {
}

var seq__35822 = cljs.core.seq(effects_without_db);
var chunk__35823 = null;
var count__35824 = (0);
var i__35825 = (0);
while(true){
if((i__35825 < count__35824)){
var vec__35837 = chunk__35823.cljs$core$IIndexed$_nth$arity$2(null,i__35825);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35837,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35837,(1),null);
var temp__5751__auto___35945 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___35945)){
var effect_fn_35946 = temp__5751__auto___35945;
(effect_fn_35946.cljs$core$IFn$_invoke$arity$1 ? effect_fn_35946.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_35946.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__35948 = seq__35822;
var G__35949 = chunk__35823;
var G__35950 = count__35824;
var G__35951 = (i__35825 + (1));
seq__35822 = G__35948;
chunk__35823 = G__35949;
count__35824 = G__35950;
i__35825 = G__35951;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35822);
if(temp__5753__auto__){
var seq__35822__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35822__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__35822__$1);
var G__35953 = cljs.core.chunk_rest(seq__35822__$1);
var G__35954 = c__4638__auto__;
var G__35955 = cljs.core.count(c__4638__auto__);
var G__35956 = (0);
seq__35822 = G__35953;
chunk__35823 = G__35954;
count__35824 = G__35955;
i__35825 = G__35956;
continue;
} else {
var vec__35842 = cljs.core.first(seq__35822__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35842,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35842,(1),null);
var temp__5751__auto___35957 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___35957)){
var effect_fn_35958 = temp__5751__auto___35957;
(effect_fn_35958.cljs$core$IFn$_invoke$arity$1 ? effect_fn_35958.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_35958.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__35959 = cljs.core.next(seq__35822__$1);
var G__35960 = null;
var G__35961 = (0);
var G__35962 = (0);
seq__35822 = G__35959;
chunk__35823 = G__35960;
count__35824 = G__35961;
i__35825 = G__35962;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__35846){
var map__35847 = p__35846;
var map__35847__$1 = cljs.core.__destructure_map(map__35847);
var effect = map__35847__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35847__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35847__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__35849 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__35850 = null;
var count__35851 = (0);
var i__35852 = (0);
while(true){
if((i__35852 < count__35851)){
var effect = chunk__35850.cljs$core$IIndexed$_nth$arity$2(null,i__35852);
re_frame.fx.dispatch_later(effect);


var G__35965 = seq__35849;
var G__35966 = chunk__35850;
var G__35967 = count__35851;
var G__35968 = (i__35852 + (1));
seq__35849 = G__35965;
chunk__35850 = G__35966;
count__35851 = G__35967;
i__35852 = G__35968;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35849);
if(temp__5753__auto__){
var seq__35849__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35849__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__35849__$1);
var G__35972 = cljs.core.chunk_rest(seq__35849__$1);
var G__35973 = c__4638__auto__;
var G__35974 = cljs.core.count(c__4638__auto__);
var G__35975 = (0);
seq__35849 = G__35972;
chunk__35850 = G__35973;
count__35851 = G__35974;
i__35852 = G__35975;
continue;
} else {
var effect = cljs.core.first(seq__35849__$1);
re_frame.fx.dispatch_later(effect);


var G__35976 = cljs.core.next(seq__35849__$1);
var G__35977 = null;
var G__35978 = (0);
var G__35979 = (0);
seq__35849 = G__35976;
chunk__35850 = G__35977;
count__35851 = G__35978;
i__35852 = G__35979;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__35861 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__35862 = null;
var count__35863 = (0);
var i__35864 = (0);
while(true){
if((i__35864 < count__35863)){
var vec__35872 = chunk__35862.cljs$core$IIndexed$_nth$arity$2(null,i__35864);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35872,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35872,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___35980 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___35980)){
var effect_fn_35981 = temp__5751__auto___35980;
(effect_fn_35981.cljs$core$IFn$_invoke$arity$1 ? effect_fn_35981.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_35981.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__35982 = seq__35861;
var G__35983 = chunk__35862;
var G__35984 = count__35863;
var G__35985 = (i__35864 + (1));
seq__35861 = G__35982;
chunk__35862 = G__35983;
count__35863 = G__35984;
i__35864 = G__35985;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35861);
if(temp__5753__auto__){
var seq__35861__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35861__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__35861__$1);
var G__35987 = cljs.core.chunk_rest(seq__35861__$1);
var G__35988 = c__4638__auto__;
var G__35989 = cljs.core.count(c__4638__auto__);
var G__35990 = (0);
seq__35861 = G__35987;
chunk__35862 = G__35988;
count__35863 = G__35989;
i__35864 = G__35990;
continue;
} else {
var vec__35878 = cljs.core.first(seq__35861__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35878,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35878,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___35992 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___35992)){
var effect_fn_35993 = temp__5751__auto___35992;
(effect_fn_35993.cljs$core$IFn$_invoke$arity$1 ? effect_fn_35993.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_35993.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__35994 = cljs.core.next(seq__35861__$1);
var G__35995 = null;
var G__35996 = (0);
var G__35997 = (0);
seq__35861 = G__35994;
chunk__35862 = G__35995;
count__35863 = G__35996;
i__35864 = G__35997;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__35886 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__35887 = null;
var count__35888 = (0);
var i__35889 = (0);
while(true){
if((i__35889 < count__35888)){
var event = chunk__35887.cljs$core$IIndexed$_nth$arity$2(null,i__35889);
re_frame.router.dispatch(event);


var G__36000 = seq__35886;
var G__36001 = chunk__35887;
var G__36002 = count__35888;
var G__36003 = (i__35889 + (1));
seq__35886 = G__36000;
chunk__35887 = G__36001;
count__35888 = G__36002;
i__35889 = G__36003;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35886);
if(temp__5753__auto__){
var seq__35886__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35886__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__35886__$1);
var G__36005 = cljs.core.chunk_rest(seq__35886__$1);
var G__36006 = c__4638__auto__;
var G__36007 = cljs.core.count(c__4638__auto__);
var G__36008 = (0);
seq__35886 = G__36005;
chunk__35887 = G__36006;
count__35888 = G__36007;
i__35889 = G__36008;
continue;
} else {
var event = cljs.core.first(seq__35886__$1);
re_frame.router.dispatch(event);


var G__36009 = cljs.core.next(seq__35886__$1);
var G__36010 = null;
var G__36011 = (0);
var G__36012 = (0);
seq__35886 = G__36009;
chunk__35887 = G__36010;
count__35888 = G__36011;
i__35889 = G__36012;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__35894 = cljs.core.seq(value);
var chunk__35895 = null;
var count__35896 = (0);
var i__35897 = (0);
while(true){
if((i__35897 < count__35896)){
var event = chunk__35895.cljs$core$IIndexed$_nth$arity$2(null,i__35897);
clear_event(event);


var G__36013 = seq__35894;
var G__36014 = chunk__35895;
var G__36015 = count__35896;
var G__36016 = (i__35897 + (1));
seq__35894 = G__36013;
chunk__35895 = G__36014;
count__35896 = G__36015;
i__35897 = G__36016;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35894);
if(temp__5753__auto__){
var seq__35894__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35894__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__35894__$1);
var G__36019 = cljs.core.chunk_rest(seq__35894__$1);
var G__36020 = c__4638__auto__;
var G__36021 = cljs.core.count(c__4638__auto__);
var G__36022 = (0);
seq__35894 = G__36019;
chunk__35895 = G__36020;
count__35896 = G__36021;
i__35897 = G__36022;
continue;
} else {
var event = cljs.core.first(seq__35894__$1);
clear_event(event);


var G__36023 = cljs.core.next(seq__35894__$1);
var G__36024 = null;
var G__36025 = (0);
var G__36026 = (0);
seq__35894 = G__36023;
chunk__35895 = G__36024;
count__35896 = G__36025;
i__35897 = G__36026;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
