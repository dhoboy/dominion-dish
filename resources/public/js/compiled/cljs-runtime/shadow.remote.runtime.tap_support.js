goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__44663,p__44664){
var map__44666 = p__44663;
var map__44666__$1 = cljs.core.__destructure_map(map__44666);
var svc = map__44666__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44666__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44666__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44666__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__44667 = p__44664;
var map__44667__$1 = cljs.core.__destructure_map(map__44667);
var msg = map__44667__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44667__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44667__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44667__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__44667__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__44681,p__44682){
var map__44683 = p__44681;
var map__44683__$1 = cljs.core.__destructure_map(map__44683);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44683__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__44684 = p__44682;
var map__44684__$1 = cljs.core.__destructure_map(map__44684);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44684__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__44687,p__44688){
var map__44690 = p__44687;
var map__44690__$1 = cljs.core.__destructure_map(map__44690);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44690__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44690__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__44691 = p__44688;
var map__44691__$1 = cljs.core.__destructure_map(map__44691);
var msg = map__44691__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__44691__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__44697,tid){
var map__44699 = p__44697;
var map__44699__$1 = cljs.core.__destructure_map(map__44699);
var svc = map__44699__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44699__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__44714 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__44715 = null;
var count__44716 = (0);
var i__44717 = (0);
while(true){
if((i__44717 < count__44716)){
var vec__44734 = chunk__44715.cljs$core$IIndexed$_nth$arity$2(null,i__44717);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44734,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44734,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__44760 = seq__44714;
var G__44761 = chunk__44715;
var G__44762 = count__44716;
var G__44763 = (i__44717 + (1));
seq__44714 = G__44760;
chunk__44715 = G__44761;
count__44716 = G__44762;
i__44717 = G__44763;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__44714);
if(temp__5753__auto__){
var seq__44714__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44714__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__44714__$1);
var G__44767 = cljs.core.chunk_rest(seq__44714__$1);
var G__44768 = c__4638__auto__;
var G__44769 = cljs.core.count(c__4638__auto__);
var G__44770 = (0);
seq__44714 = G__44767;
chunk__44715 = G__44768;
count__44716 = G__44769;
i__44717 = G__44770;
continue;
} else {
var vec__44742 = cljs.core.first(seq__44714__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44742,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44742,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__44771 = cljs.core.next(seq__44714__$1);
var G__44772 = null;
var G__44773 = (0);
var G__44774 = (0);
seq__44714 = G__44771;
chunk__44715 = G__44772;
count__44716 = G__44773;
i__44717 = G__44774;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__44702_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__44702_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__44703_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__44703_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__44704_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__44704_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__44705_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__44705_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__44750){
var map__44751 = p__44750;
var map__44751__$1 = cljs.core.__destructure_map(map__44751);
var svc = map__44751__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44751__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44751__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
