goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4824__auto__ = [];
var len__4818__auto___48150 = arguments.length;
var i__4819__auto___48151 = (0);
while(true){
if((i__4819__auto___48151 < len__4818__auto___48150)){
args__4824__auto__.push((arguments[i__4819__auto___48151]));

var G__48155 = (i__4819__auto___48151 + (1));
i__4819__auto___48151 = G__48155;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq47936){
var G__47937 = cljs.core.first(seq47936);
var seq47936__$1 = cljs.core.next(seq47936);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47937,seq47936__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__47949 = cljs.core.seq(sources);
var chunk__47950 = null;
var count__47951 = (0);
var i__47952 = (0);
while(true){
if((i__47952 < count__47951)){
var map__47970 = chunk__47950.cljs$core$IIndexed$_nth$arity$2(null,i__47952);
var map__47970__$1 = cljs.core.__destructure_map(map__47970);
var src = map__47970__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47970__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47970__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47970__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47970__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e47972){var e_48158 = e47972;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_48158);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_48158.message)].join('')));
}

var G__48159 = seq__47949;
var G__48160 = chunk__47950;
var G__48161 = count__47951;
var G__48162 = (i__47952 + (1));
seq__47949 = G__48159;
chunk__47950 = G__48160;
count__47951 = G__48161;
i__47952 = G__48162;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__47949);
if(temp__5753__auto__){
var seq__47949__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47949__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__47949__$1);
var G__48164 = cljs.core.chunk_rest(seq__47949__$1);
var G__48165 = c__4638__auto__;
var G__48166 = cljs.core.count(c__4638__auto__);
var G__48167 = (0);
seq__47949 = G__48164;
chunk__47950 = G__48165;
count__47951 = G__48166;
i__47952 = G__48167;
continue;
} else {
var map__47973 = cljs.core.first(seq__47949__$1);
var map__47973__$1 = cljs.core.__destructure_map(map__47973);
var src = map__47973__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47973__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47973__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47973__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47973__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e47975){var e_48168 = e47975;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_48168);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_48168.message)].join('')));
}

var G__48170 = cljs.core.next(seq__47949__$1);
var G__48171 = null;
var G__48172 = (0);
var G__48173 = (0);
seq__47949 = G__48170;
chunk__47950 = G__48171;
count__47951 = G__48172;
i__47952 = G__48173;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__47978 = cljs.core.seq(js_requires);
var chunk__47979 = null;
var count__47980 = (0);
var i__47981 = (0);
while(true){
if((i__47981 < count__47980)){
var js_ns = chunk__47979.cljs$core$IIndexed$_nth$arity$2(null,i__47981);
var require_str_48174 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_48174);


var G__48175 = seq__47978;
var G__48176 = chunk__47979;
var G__48177 = count__47980;
var G__48178 = (i__47981 + (1));
seq__47978 = G__48175;
chunk__47979 = G__48176;
count__47980 = G__48177;
i__47981 = G__48178;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__47978);
if(temp__5753__auto__){
var seq__47978__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47978__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__47978__$1);
var G__48180 = cljs.core.chunk_rest(seq__47978__$1);
var G__48181 = c__4638__auto__;
var G__48182 = cljs.core.count(c__4638__auto__);
var G__48183 = (0);
seq__47978 = G__48180;
chunk__47979 = G__48181;
count__47980 = G__48182;
i__47981 = G__48183;
continue;
} else {
var js_ns = cljs.core.first(seq__47978__$1);
var require_str_48185 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_48185);


var G__48186 = cljs.core.next(seq__47978__$1);
var G__48187 = null;
var G__48188 = (0);
var G__48189 = (0);
seq__47978 = G__48186;
chunk__47979 = G__48187;
count__47980 = G__48188;
i__47981 = G__48189;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__47992){
var map__47993 = p__47992;
var map__47993__$1 = cljs.core.__destructure_map(map__47993);
var msg = map__47993__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47993__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47993__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4611__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__47994(s__47995){
return (new cljs.core.LazySeq(null,(function (){
var s__47995__$1 = s__47995;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__47995__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__48000 = cljs.core.first(xs__6308__auto__);
var map__48000__$1 = cljs.core.__destructure_map(map__48000);
var src = map__48000__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48000__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48000__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4607__auto__ = ((function (s__47995__$1,map__48000,map__48000__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__47993,map__47993__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__47994_$_iter__47996(s__47997){
return (new cljs.core.LazySeq(null,((function (s__47995__$1,map__48000,map__48000__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__47993,map__47993__$1,msg,info,reload_info){
return (function (){
var s__47997__$1 = s__47997;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__47997__$1);
if(temp__5753__auto____$1){
var s__47997__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__47997__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__47997__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__47999 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__47998 = (0);
while(true){
if((i__47998 < size__4610__auto__)){
var warning = cljs.core._nth(c__4609__auto__,i__47998);
cljs.core.chunk_append(b__47999,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__48190 = (i__47998 + (1));
i__47998 = G__48190;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47999),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__47994_$_iter__47996(cljs.core.chunk_rest(s__47997__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47999),null);
}
} else {
var warning = cljs.core.first(s__47997__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__47994_$_iter__47996(cljs.core.rest(s__47997__$2)));
}
} else {
return null;
}
break;
}
});})(s__47995__$1,map__48000,map__48000__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__47993,map__47993__$1,msg,info,reload_info))
,null,null));
});})(s__47995__$1,map__48000,map__48000__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__47993,map__47993__$1,msg,info,reload_info))
;
var fs__4608__auto__ = cljs.core.seq(iterys__4607__auto__(warnings));
if(fs__4608__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4608__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__47994(cljs.core.rest(s__47995__$1)));
} else {
var G__48195 = cljs.core.rest(s__47995__$1);
s__47995__$1 = G__48195;
continue;
}
} else {
var G__48196 = cljs.core.rest(s__47995__$1);
s__47995__$1 = G__48196;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__48003_48197 = cljs.core.seq(warnings);
var chunk__48004_48198 = null;
var count__48005_48199 = (0);
var i__48006_48200 = (0);
while(true){
if((i__48006_48200 < count__48005_48199)){
var map__48011_48201 = chunk__48004_48198.cljs$core$IIndexed$_nth$arity$2(null,i__48006_48200);
var map__48011_48202__$1 = cljs.core.__destructure_map(map__48011_48201);
var w_48203 = map__48011_48202__$1;
var msg_48204__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48011_48202__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_48205 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48011_48202__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_48206 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48011_48202__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_48207 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48011_48202__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_48207)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_48205),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_48206),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_48204__$1)].join(''));


var G__48208 = seq__48003_48197;
var G__48209 = chunk__48004_48198;
var G__48210 = count__48005_48199;
var G__48211 = (i__48006_48200 + (1));
seq__48003_48197 = G__48208;
chunk__48004_48198 = G__48209;
count__48005_48199 = G__48210;
i__48006_48200 = G__48211;
continue;
} else {
var temp__5753__auto___48212 = cljs.core.seq(seq__48003_48197);
if(temp__5753__auto___48212){
var seq__48003_48213__$1 = temp__5753__auto___48212;
if(cljs.core.chunked_seq_QMARK_(seq__48003_48213__$1)){
var c__4638__auto___48214 = cljs.core.chunk_first(seq__48003_48213__$1);
var G__48215 = cljs.core.chunk_rest(seq__48003_48213__$1);
var G__48216 = c__4638__auto___48214;
var G__48217 = cljs.core.count(c__4638__auto___48214);
var G__48218 = (0);
seq__48003_48197 = G__48215;
chunk__48004_48198 = G__48216;
count__48005_48199 = G__48217;
i__48006_48200 = G__48218;
continue;
} else {
var map__48016_48219 = cljs.core.first(seq__48003_48213__$1);
var map__48016_48220__$1 = cljs.core.__destructure_map(map__48016_48219);
var w_48221 = map__48016_48220__$1;
var msg_48222__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48016_48220__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_48223 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48016_48220__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_48224 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48016_48220__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_48225 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48016_48220__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_48225)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_48223),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_48224),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_48222__$1)].join(''));


var G__48226 = cljs.core.next(seq__48003_48213__$1);
var G__48227 = null;
var G__48228 = (0);
var G__48229 = (0);
seq__48003_48197 = G__48226;
chunk__48004_48198 = G__48227;
count__48005_48199 = G__48228;
i__48006_48200 = G__48229;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__47991_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__47991_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4210__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4210__auto__){
var and__4210__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4210__auto____$1){
return new$;
} else {
return and__4210__auto____$1;
}
} else {
return and__4210__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__48024){
var map__48025 = p__48024;
var map__48025__$1 = cljs.core.__destructure_map(map__48025);
var msg = map__48025__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48025__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__48026 = cljs.core.seq(updates);
var chunk__48028 = null;
var count__48029 = (0);
var i__48030 = (0);
while(true){
if((i__48030 < count__48029)){
var path = chunk__48028.cljs$core$IIndexed$_nth$arity$2(null,i__48030);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__48073_48231 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__48077_48232 = null;
var count__48078_48233 = (0);
var i__48079_48234 = (0);
while(true){
if((i__48079_48234 < count__48078_48233)){
var node_48235 = chunk__48077_48232.cljs$core$IIndexed$_nth$arity$2(null,i__48079_48234);
if(cljs.core.not(node_48235.shadow$old)){
var path_match_48236 = shadow.cljs.devtools.client.browser.match_paths(node_48235.getAttribute("href"),path);
if(cljs.core.truth_(path_match_48236)){
var new_link_48238 = (function (){var G__48091 = node_48235.cloneNode(true);
G__48091.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_48236),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__48091;
})();
(node_48235.shadow$old = true);

(new_link_48238.onload = ((function (seq__48073_48231,chunk__48077_48232,count__48078_48233,i__48079_48234,seq__48026,chunk__48028,count__48029,i__48030,new_link_48238,path_match_48236,node_48235,path,map__48025,map__48025__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_48235);
});})(seq__48073_48231,chunk__48077_48232,count__48078_48233,i__48079_48234,seq__48026,chunk__48028,count__48029,i__48030,new_link_48238,path_match_48236,node_48235,path,map__48025,map__48025__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_48236], 0));

goog.dom.insertSiblingAfter(new_link_48238,node_48235);


var G__48239 = seq__48073_48231;
var G__48240 = chunk__48077_48232;
var G__48241 = count__48078_48233;
var G__48242 = (i__48079_48234 + (1));
seq__48073_48231 = G__48239;
chunk__48077_48232 = G__48240;
count__48078_48233 = G__48241;
i__48079_48234 = G__48242;
continue;
} else {
var G__48243 = seq__48073_48231;
var G__48244 = chunk__48077_48232;
var G__48245 = count__48078_48233;
var G__48246 = (i__48079_48234 + (1));
seq__48073_48231 = G__48243;
chunk__48077_48232 = G__48244;
count__48078_48233 = G__48245;
i__48079_48234 = G__48246;
continue;
}
} else {
var G__48247 = seq__48073_48231;
var G__48248 = chunk__48077_48232;
var G__48249 = count__48078_48233;
var G__48250 = (i__48079_48234 + (1));
seq__48073_48231 = G__48247;
chunk__48077_48232 = G__48248;
count__48078_48233 = G__48249;
i__48079_48234 = G__48250;
continue;
}
} else {
var temp__5753__auto___48251 = cljs.core.seq(seq__48073_48231);
if(temp__5753__auto___48251){
var seq__48073_48252__$1 = temp__5753__auto___48251;
if(cljs.core.chunked_seq_QMARK_(seq__48073_48252__$1)){
var c__4638__auto___48253 = cljs.core.chunk_first(seq__48073_48252__$1);
var G__48254 = cljs.core.chunk_rest(seq__48073_48252__$1);
var G__48255 = c__4638__auto___48253;
var G__48256 = cljs.core.count(c__4638__auto___48253);
var G__48257 = (0);
seq__48073_48231 = G__48254;
chunk__48077_48232 = G__48255;
count__48078_48233 = G__48256;
i__48079_48234 = G__48257;
continue;
} else {
var node_48258 = cljs.core.first(seq__48073_48252__$1);
if(cljs.core.not(node_48258.shadow$old)){
var path_match_48259 = shadow.cljs.devtools.client.browser.match_paths(node_48258.getAttribute("href"),path);
if(cljs.core.truth_(path_match_48259)){
var new_link_48260 = (function (){var G__48093 = node_48258.cloneNode(true);
G__48093.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_48259),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__48093;
})();
(node_48258.shadow$old = true);

(new_link_48260.onload = ((function (seq__48073_48231,chunk__48077_48232,count__48078_48233,i__48079_48234,seq__48026,chunk__48028,count__48029,i__48030,new_link_48260,path_match_48259,node_48258,seq__48073_48252__$1,temp__5753__auto___48251,path,map__48025,map__48025__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_48258);
});})(seq__48073_48231,chunk__48077_48232,count__48078_48233,i__48079_48234,seq__48026,chunk__48028,count__48029,i__48030,new_link_48260,path_match_48259,node_48258,seq__48073_48252__$1,temp__5753__auto___48251,path,map__48025,map__48025__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_48259], 0));

goog.dom.insertSiblingAfter(new_link_48260,node_48258);


var G__48261 = cljs.core.next(seq__48073_48252__$1);
var G__48262 = null;
var G__48263 = (0);
var G__48264 = (0);
seq__48073_48231 = G__48261;
chunk__48077_48232 = G__48262;
count__48078_48233 = G__48263;
i__48079_48234 = G__48264;
continue;
} else {
var G__48265 = cljs.core.next(seq__48073_48252__$1);
var G__48266 = null;
var G__48267 = (0);
var G__48268 = (0);
seq__48073_48231 = G__48265;
chunk__48077_48232 = G__48266;
count__48078_48233 = G__48267;
i__48079_48234 = G__48268;
continue;
}
} else {
var G__48270 = cljs.core.next(seq__48073_48252__$1);
var G__48271 = null;
var G__48272 = (0);
var G__48273 = (0);
seq__48073_48231 = G__48270;
chunk__48077_48232 = G__48271;
count__48078_48233 = G__48272;
i__48079_48234 = G__48273;
continue;
}
}
} else {
}
}
break;
}


var G__48275 = seq__48026;
var G__48276 = chunk__48028;
var G__48277 = count__48029;
var G__48278 = (i__48030 + (1));
seq__48026 = G__48275;
chunk__48028 = G__48276;
count__48029 = G__48277;
i__48030 = G__48278;
continue;
} else {
var G__48279 = seq__48026;
var G__48280 = chunk__48028;
var G__48281 = count__48029;
var G__48282 = (i__48030 + (1));
seq__48026 = G__48279;
chunk__48028 = G__48280;
count__48029 = G__48281;
i__48030 = G__48282;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__48026);
if(temp__5753__auto__){
var seq__48026__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48026__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__48026__$1);
var G__48283 = cljs.core.chunk_rest(seq__48026__$1);
var G__48284 = c__4638__auto__;
var G__48285 = cljs.core.count(c__4638__auto__);
var G__48286 = (0);
seq__48026 = G__48283;
chunk__48028 = G__48284;
count__48029 = G__48285;
i__48030 = G__48286;
continue;
} else {
var path = cljs.core.first(seq__48026__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__48099_48287 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__48103_48288 = null;
var count__48104_48289 = (0);
var i__48105_48290 = (0);
while(true){
if((i__48105_48290 < count__48104_48289)){
var node_48291 = chunk__48103_48288.cljs$core$IIndexed$_nth$arity$2(null,i__48105_48290);
if(cljs.core.not(node_48291.shadow$old)){
var path_match_48292 = shadow.cljs.devtools.client.browser.match_paths(node_48291.getAttribute("href"),path);
if(cljs.core.truth_(path_match_48292)){
var new_link_48294 = (function (){var G__48117 = node_48291.cloneNode(true);
G__48117.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_48292),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__48117;
})();
(node_48291.shadow$old = true);

(new_link_48294.onload = ((function (seq__48099_48287,chunk__48103_48288,count__48104_48289,i__48105_48290,seq__48026,chunk__48028,count__48029,i__48030,new_link_48294,path_match_48292,node_48291,path,seq__48026__$1,temp__5753__auto__,map__48025,map__48025__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_48291);
});})(seq__48099_48287,chunk__48103_48288,count__48104_48289,i__48105_48290,seq__48026,chunk__48028,count__48029,i__48030,new_link_48294,path_match_48292,node_48291,path,seq__48026__$1,temp__5753__auto__,map__48025,map__48025__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_48292], 0));

goog.dom.insertSiblingAfter(new_link_48294,node_48291);


var G__48295 = seq__48099_48287;
var G__48296 = chunk__48103_48288;
var G__48297 = count__48104_48289;
var G__48298 = (i__48105_48290 + (1));
seq__48099_48287 = G__48295;
chunk__48103_48288 = G__48296;
count__48104_48289 = G__48297;
i__48105_48290 = G__48298;
continue;
} else {
var G__48299 = seq__48099_48287;
var G__48300 = chunk__48103_48288;
var G__48301 = count__48104_48289;
var G__48302 = (i__48105_48290 + (1));
seq__48099_48287 = G__48299;
chunk__48103_48288 = G__48300;
count__48104_48289 = G__48301;
i__48105_48290 = G__48302;
continue;
}
} else {
var G__48303 = seq__48099_48287;
var G__48304 = chunk__48103_48288;
var G__48305 = count__48104_48289;
var G__48306 = (i__48105_48290 + (1));
seq__48099_48287 = G__48303;
chunk__48103_48288 = G__48304;
count__48104_48289 = G__48305;
i__48105_48290 = G__48306;
continue;
}
} else {
var temp__5753__auto___48307__$1 = cljs.core.seq(seq__48099_48287);
if(temp__5753__auto___48307__$1){
var seq__48099_48308__$1 = temp__5753__auto___48307__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48099_48308__$1)){
var c__4638__auto___48309 = cljs.core.chunk_first(seq__48099_48308__$1);
var G__48310 = cljs.core.chunk_rest(seq__48099_48308__$1);
var G__48311 = c__4638__auto___48309;
var G__48312 = cljs.core.count(c__4638__auto___48309);
var G__48313 = (0);
seq__48099_48287 = G__48310;
chunk__48103_48288 = G__48311;
count__48104_48289 = G__48312;
i__48105_48290 = G__48313;
continue;
} else {
var node_48314 = cljs.core.first(seq__48099_48308__$1);
if(cljs.core.not(node_48314.shadow$old)){
var path_match_48315 = shadow.cljs.devtools.client.browser.match_paths(node_48314.getAttribute("href"),path);
if(cljs.core.truth_(path_match_48315)){
var new_link_48316 = (function (){var G__48120 = node_48314.cloneNode(true);
G__48120.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_48315),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__48120;
})();
(node_48314.shadow$old = true);

(new_link_48316.onload = ((function (seq__48099_48287,chunk__48103_48288,count__48104_48289,i__48105_48290,seq__48026,chunk__48028,count__48029,i__48030,new_link_48316,path_match_48315,node_48314,seq__48099_48308__$1,temp__5753__auto___48307__$1,path,seq__48026__$1,temp__5753__auto__,map__48025,map__48025__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_48314);
});})(seq__48099_48287,chunk__48103_48288,count__48104_48289,i__48105_48290,seq__48026,chunk__48028,count__48029,i__48030,new_link_48316,path_match_48315,node_48314,seq__48099_48308__$1,temp__5753__auto___48307__$1,path,seq__48026__$1,temp__5753__auto__,map__48025,map__48025__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_48315], 0));

goog.dom.insertSiblingAfter(new_link_48316,node_48314);


var G__48320 = cljs.core.next(seq__48099_48308__$1);
var G__48321 = null;
var G__48322 = (0);
var G__48323 = (0);
seq__48099_48287 = G__48320;
chunk__48103_48288 = G__48321;
count__48104_48289 = G__48322;
i__48105_48290 = G__48323;
continue;
} else {
var G__48324 = cljs.core.next(seq__48099_48308__$1);
var G__48325 = null;
var G__48326 = (0);
var G__48327 = (0);
seq__48099_48287 = G__48324;
chunk__48103_48288 = G__48325;
count__48104_48289 = G__48326;
i__48105_48290 = G__48327;
continue;
}
} else {
var G__48328 = cljs.core.next(seq__48099_48308__$1);
var G__48330 = null;
var G__48331 = (0);
var G__48332 = (0);
seq__48099_48287 = G__48328;
chunk__48103_48288 = G__48330;
count__48104_48289 = G__48331;
i__48105_48290 = G__48332;
continue;
}
}
} else {
}
}
break;
}


var G__48333 = cljs.core.next(seq__48026__$1);
var G__48334 = null;
var G__48335 = (0);
var G__48336 = (0);
seq__48026 = G__48333;
chunk__48028 = G__48334;
count__48029 = G__48335;
i__48030 = G__48336;
continue;
} else {
var G__48338 = cljs.core.next(seq__48026__$1);
var G__48339 = null;
var G__48340 = (0);
var G__48341 = (0);
seq__48026 = G__48338;
chunk__48028 = G__48339;
count__48029 = G__48340;
i__48030 = G__48341;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__48121){
var map__48122 = p__48121;
var map__48122__$1 = cljs.core.__destructure_map(map__48122);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48122__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__48123){
var map__48124 = p__48123;
var map__48124__$1 = cljs.core.__destructure_map(map__48124);
var _ = map__48124__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48124__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__48125,done,error){
var map__48126 = p__48125;
var map__48126__$1 = cljs.core.__destructure_map(map__48126);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48126__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__48127,done,error){
var map__48128 = p__48127;
var map__48128__$1 = cljs.core.__destructure_map(map__48128);
var msg = map__48128__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48128__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48128__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48128__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__48129){
var map__48130 = p__48129;
var map__48130__$1 = cljs.core.__destructure_map(map__48130);
var src = map__48130__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48130__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4210__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4210__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__48131 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__48131) : done.call(null,G__48131));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__48132){
var map__48133 = p__48132;
var map__48133__$1 = cljs.core.__destructure_map(map__48133);
var msg__$1 = map__48133__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48133__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e48134){var ex = e48134;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__48135){
var map__48136 = p__48135;
var map__48136__$1 = cljs.core.__destructure_map(map__48136);
var env = map__48136__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48136__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__48142){
var map__48143 = p__48142;
var map__48143__$1 = cljs.core.__destructure_map(map__48143);
var msg = map__48143__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48143__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__48144){
var map__48145 = p__48144;
var map__48145__$1 = cljs.core.__destructure_map(map__48145);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48145__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48145__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__48148){
var map__48149 = p__48148;
var map__48149__$1 = cljs.core.__destructure_map(map__48149);
var svc = map__48149__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48149__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
