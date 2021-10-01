goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__43750,res){
var map__43751 = p__43750;
var map__43751__$1 = cljs.core.__destructure_map(map__43751);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43751__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43751__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__43753 = res;
var G__43753__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43753,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__43753);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43753__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__43753__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__43755 = arguments.length;
switch (G__43755) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__43764,msg,handlers,timeout_after_ms){
var map__43765 = p__43764;
var map__43765__$1 = cljs.core.__destructure_map(map__43765);
var runtime = map__43765__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43765__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___44004 = arguments.length;
var i__4819__auto___44005 = (0);
while(true){
if((i__4819__auto___44005 < len__4818__auto___44004)){
args__4824__auto__.push((arguments[i__4819__auto___44005]));

var G__44006 = (i__4819__auto___44005 + (1));
i__4819__auto___44005 = G__44006;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__43785,ev,args){
var map__43786 = p__43785;
var map__43786__$1 = cljs.core.__destructure_map(map__43786);
var runtime = map__43786__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43786__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__43788 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__43791 = null;
var count__43792 = (0);
var i__43793 = (0);
while(true){
if((i__43793 < count__43792)){
var ext = chunk__43791.cljs$core$IIndexed$_nth$arity$2(null,i__43793);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__44010 = seq__43788;
var G__44011 = chunk__43791;
var G__44012 = count__43792;
var G__44013 = (i__43793 + (1));
seq__43788 = G__44010;
chunk__43791 = G__44011;
count__43792 = G__44012;
i__43793 = G__44013;
continue;
} else {
var G__44014 = seq__43788;
var G__44015 = chunk__43791;
var G__44016 = count__43792;
var G__44017 = (i__43793 + (1));
seq__43788 = G__44014;
chunk__43791 = G__44015;
count__43792 = G__44016;
i__43793 = G__44017;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__43788);
if(temp__5753__auto__){
var seq__43788__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43788__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__43788__$1);
var G__44019 = cljs.core.chunk_rest(seq__43788__$1);
var G__44020 = c__4638__auto__;
var G__44021 = cljs.core.count(c__4638__auto__);
var G__44022 = (0);
seq__43788 = G__44019;
chunk__43791 = G__44020;
count__43792 = G__44021;
i__43793 = G__44022;
continue;
} else {
var ext = cljs.core.first(seq__43788__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__44023 = cljs.core.next(seq__43788__$1);
var G__44024 = null;
var G__44025 = (0);
var G__44026 = (0);
seq__43788 = G__44023;
chunk__43791 = G__44024;
count__43792 = G__44025;
i__43793 = G__44026;
continue;
} else {
var G__44027 = cljs.core.next(seq__43788__$1);
var G__44028 = null;
var G__44029 = (0);
var G__44030 = (0);
seq__43788 = G__44027;
chunk__43791 = G__44028;
count__43792 = G__44029;
i__43793 = G__44030;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq43780){
var G__43781 = cljs.core.first(seq43780);
var seq43780__$1 = cljs.core.next(seq43780);
var G__43782 = cljs.core.first(seq43780__$1);
var seq43780__$2 = cljs.core.next(seq43780__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43781,G__43782,seq43780__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__43823,p__43824){
var map__43825 = p__43823;
var map__43825__$1 = cljs.core.__destructure_map(map__43825);
var runtime = map__43825__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43825__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__43826 = p__43824;
var map__43826__$1 = cljs.core.__destructure_map(map__43826);
var msg = map__43826__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43826__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__43829 = cljs.core.deref(state_ref);
var map__43829__$1 = cljs.core.__destructure_map(map__43829);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43829__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43829__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__43834){
var map__43835 = p__43834;
var map__43835__$1 = cljs.core.__destructure_map(map__43835);
var runtime = map__43835__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43835__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4212__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__43851,msg){
var map__43852 = p__43851;
var map__43852__$1 = cljs.core.__destructure_map(map__43852);
var runtime = map__43852__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43852__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__43860,key,p__43861){
var map__43862 = p__43860;
var map__43862__$1 = cljs.core.__destructure_map(map__43862);
var state = map__43862__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43862__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__43863 = p__43861;
var map__43863__$1 = cljs.core.__destructure_map(map__43863);
var spec = map__43863__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43863__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__43870,key,spec){
var map__43871 = p__43870;
var map__43871__$1 = cljs.core.__destructure_map(map__43871);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43871__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__43875_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__43875_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__43876_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__43876_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__43877_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__43877_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__43878_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__43878_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__43879_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__43879_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__43890,key){
var map__43891 = p__43890;
var map__43891__$1 = cljs.core.__destructure_map(map__43891);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43891__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__43910,msg){
var map__43915 = p__43910;
var map__43915__$1 = cljs.core.__destructure_map(map__43915);
var runtime = map__43915__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43915__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__43922,p__43923){
var map__43924 = p__43922;
var map__43924__$1 = cljs.core.__destructure_map(map__43924);
var runtime = map__43924__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43924__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__43925 = p__43923;
var map__43925__$1 = cljs.core.__destructure_map(map__43925);
var msg = map__43925__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43925__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43925__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__43934 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__43936 = null;
var count__43937 = (0);
var i__43938 = (0);
while(true){
if((i__43938 < count__43937)){
var map__43955 = chunk__43936.cljs$core$IIndexed$_nth$arity$2(null,i__43938);
var map__43955__$1 = cljs.core.__destructure_map(map__43955);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43955__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__44074 = seq__43934;
var G__44075 = chunk__43936;
var G__44076 = count__43937;
var G__44077 = (i__43938 + (1));
seq__43934 = G__44074;
chunk__43936 = G__44075;
count__43937 = G__44076;
i__43938 = G__44077;
continue;
} else {
var G__44078 = seq__43934;
var G__44079 = chunk__43936;
var G__44080 = count__43937;
var G__44081 = (i__43938 + (1));
seq__43934 = G__44078;
chunk__43936 = G__44079;
count__43937 = G__44080;
i__43938 = G__44081;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__43934);
if(temp__5753__auto__){
var seq__43934__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43934__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__43934__$1);
var G__44082 = cljs.core.chunk_rest(seq__43934__$1);
var G__44083 = c__4638__auto__;
var G__44084 = cljs.core.count(c__4638__auto__);
var G__44085 = (0);
seq__43934 = G__44082;
chunk__43936 = G__44083;
count__43937 = G__44084;
i__43938 = G__44085;
continue;
} else {
var map__43960 = cljs.core.first(seq__43934__$1);
var map__43960__$1 = cljs.core.__destructure_map(map__43960);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43960__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__44088 = cljs.core.next(seq__43934__$1);
var G__44089 = null;
var G__44090 = (0);
var G__44091 = (0);
seq__43934 = G__44088;
chunk__43936 = G__44089;
count__43937 = G__44090;
i__43938 = G__44091;
continue;
} else {
var G__44092 = cljs.core.next(seq__43934__$1);
var G__44093 = null;
var G__44094 = (0);
var G__44095 = (0);
seq__43934 = G__44092;
chunk__43936 = G__44093;
count__43937 = G__44094;
i__43938 = G__44095;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
