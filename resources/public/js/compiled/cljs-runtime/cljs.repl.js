goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__43857){
var map__43859 = p__43857;
var map__43859__$1 = cljs.core.__destructure_map(map__43859);
var m = map__43859__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43859__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43859__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4212__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__43865_44173 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__43866_44174 = null;
var count__43867_44175 = (0);
var i__43868_44176 = (0);
while(true){
if((i__43868_44176 < count__43867_44175)){
var f_44178 = chunk__43866_44174.cljs$core$IIndexed$_nth$arity$2(null,i__43868_44176);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_44178], 0));


var G__44179 = seq__43865_44173;
var G__44180 = chunk__43866_44174;
var G__44181 = count__43867_44175;
var G__44182 = (i__43868_44176 + (1));
seq__43865_44173 = G__44179;
chunk__43866_44174 = G__44180;
count__43867_44175 = G__44181;
i__43868_44176 = G__44182;
continue;
} else {
var temp__5753__auto___44184 = cljs.core.seq(seq__43865_44173);
if(temp__5753__auto___44184){
var seq__43865_44185__$1 = temp__5753__auto___44184;
if(cljs.core.chunked_seq_QMARK_(seq__43865_44185__$1)){
var c__4638__auto___44186 = cljs.core.chunk_first(seq__43865_44185__$1);
var G__44187 = cljs.core.chunk_rest(seq__43865_44185__$1);
var G__44188 = c__4638__auto___44186;
var G__44189 = cljs.core.count(c__4638__auto___44186);
var G__44190 = (0);
seq__43865_44173 = G__44187;
chunk__43866_44174 = G__44188;
count__43867_44175 = G__44189;
i__43868_44176 = G__44190;
continue;
} else {
var f_44192 = cljs.core.first(seq__43865_44185__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_44192], 0));


var G__44193 = cljs.core.next(seq__43865_44185__$1);
var G__44194 = null;
var G__44195 = (0);
var G__44196 = (0);
seq__43865_44173 = G__44193;
chunk__43866_44174 = G__44194;
count__43867_44175 = G__44195;
i__43868_44176 = G__44196;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_44197 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4212__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_44197], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_44197)))?cljs.core.second(arglists_44197):arglists_44197)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__43906_44204 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__43907_44205 = null;
var count__43908_44206 = (0);
var i__43909_44207 = (0);
while(true){
if((i__43909_44207 < count__43908_44206)){
var vec__43929_44209 = chunk__43907_44205.cljs$core$IIndexed$_nth$arity$2(null,i__43909_44207);
var name_44210 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43929_44209,(0),null);
var map__43932_44211 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43929_44209,(1),null);
var map__43932_44212__$1 = cljs.core.__destructure_map(map__43932_44211);
var doc_44213 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43932_44212__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_44214 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43932_44212__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_44210], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_44214], 0));

if(cljs.core.truth_(doc_44213)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_44213], 0));
} else {
}


var G__44217 = seq__43906_44204;
var G__44218 = chunk__43907_44205;
var G__44219 = count__43908_44206;
var G__44220 = (i__43909_44207 + (1));
seq__43906_44204 = G__44217;
chunk__43907_44205 = G__44218;
count__43908_44206 = G__44219;
i__43909_44207 = G__44220;
continue;
} else {
var temp__5753__auto___44221 = cljs.core.seq(seq__43906_44204);
if(temp__5753__auto___44221){
var seq__43906_44223__$1 = temp__5753__auto___44221;
if(cljs.core.chunked_seq_QMARK_(seq__43906_44223__$1)){
var c__4638__auto___44225 = cljs.core.chunk_first(seq__43906_44223__$1);
var G__44226 = cljs.core.chunk_rest(seq__43906_44223__$1);
var G__44227 = c__4638__auto___44225;
var G__44228 = cljs.core.count(c__4638__auto___44225);
var G__44229 = (0);
seq__43906_44204 = G__44226;
chunk__43907_44205 = G__44227;
count__43908_44206 = G__44228;
i__43909_44207 = G__44229;
continue;
} else {
var vec__43940_44230 = cljs.core.first(seq__43906_44223__$1);
var name_44231 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43940_44230,(0),null);
var map__43943_44232 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43940_44230,(1),null);
var map__43943_44233__$1 = cljs.core.__destructure_map(map__43943_44232);
var doc_44234 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43943_44233__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_44235 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43943_44233__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_44231], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_44235], 0));

if(cljs.core.truth_(doc_44234)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_44234], 0));
} else {
}


var G__44237 = cljs.core.next(seq__43906_44223__$1);
var G__44238 = null;
var G__44239 = (0);
var G__44240 = (0);
seq__43906_44204 = G__44237;
chunk__43907_44205 = G__44238;
count__43908_44206 = G__44239;
i__43909_44207 = G__44240;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__43948 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__43949 = null;
var count__43950 = (0);
var i__43951 = (0);
while(true){
if((i__43951 < count__43950)){
var role = chunk__43949.cljs$core$IIndexed$_nth$arity$2(null,i__43951);
var temp__5753__auto___44247__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___44247__$1)){
var spec_44248 = temp__5753__auto___44247__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_44248)], 0));
} else {
}


var G__44250 = seq__43948;
var G__44251 = chunk__43949;
var G__44252 = count__43950;
var G__44253 = (i__43951 + (1));
seq__43948 = G__44250;
chunk__43949 = G__44251;
count__43950 = G__44252;
i__43951 = G__44253;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__43948);
if(temp__5753__auto____$1){
var seq__43948__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__43948__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__43948__$1);
var G__44256 = cljs.core.chunk_rest(seq__43948__$1);
var G__44257 = c__4638__auto__;
var G__44258 = cljs.core.count(c__4638__auto__);
var G__44259 = (0);
seq__43948 = G__44256;
chunk__43949 = G__44257;
count__43950 = G__44258;
i__43951 = G__44259;
continue;
} else {
var role = cljs.core.first(seq__43948__$1);
var temp__5753__auto___44261__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___44261__$2)){
var spec_44262 = temp__5753__auto___44261__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_44262)], 0));
} else {
}


var G__44263 = cljs.core.next(seq__43948__$1);
var G__44264 = null;
var G__44265 = (0);
var G__44266 = (0);
seq__43948 = G__44263;
chunk__43949 = G__44264;
count__43950 = G__44265;
i__43951 = G__44266;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__44268 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__44269 = cljs.core.ex_cause(t);
via = G__44268;
t = G__44269;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__44037 = datafied_throwable;
var map__44037__$1 = cljs.core.__destructure_map(map__44037);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44037__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44037__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__44037__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__44038 = cljs.core.last(via);
var map__44038__$1 = cljs.core.__destructure_map(map__44038);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44038__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44038__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44038__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__44039 = data;
var map__44039__$1 = cljs.core.__destructure_map(map__44039);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44039__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44039__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44039__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__44040 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__44040__$1 = cljs.core.__destructure_map(map__44040);
var top_data = map__44040__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44040__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__44044 = phase;
var G__44044__$1 = (((G__44044 instanceof cljs.core.Keyword))?G__44044.fqn:null);
switch (G__44044__$1) {
case "read-source":
var map__44046 = data;
var map__44046__$1 = cljs.core.__destructure_map(map__44046);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44046__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44046__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__44049 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__44049__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44049,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__44049);
var G__44049__$2 = (cljs.core.truth_((function (){var fexpr__44050 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__44050.cljs$core$IFn$_invoke$arity$1 ? fexpr__44050.cljs$core$IFn$_invoke$arity$1(source) : fexpr__44050.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__44049__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__44049__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44049__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__44049__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__44053 = top_data;
var G__44053__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44053,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__44053);
var G__44053__$2 = (cljs.core.truth_((function (){var fexpr__44055 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__44055.cljs$core$IFn$_invoke$arity$1 ? fexpr__44055.cljs$core$IFn$_invoke$arity$1(source) : fexpr__44055.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__44053__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__44053__$1);
var G__44053__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44053__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__44053__$2);
var G__44053__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44053__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__44053__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44053__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__44053__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__44058 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44058,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44058,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44058,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44058,(3),null);
var G__44062 = top_data;
var G__44062__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44062,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__44062);
var G__44062__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44062__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__44062__$1);
var G__44062__$3 = (cljs.core.truth_((function (){var and__4210__auto__ = source__$1;
if(cljs.core.truth_(and__4210__auto__)){
return method;
} else {
return and__4210__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44062__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__44062__$2);
var G__44062__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44062__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__44062__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44062__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__44062__$4;
}

break;
case "execution":
var vec__44065 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44065,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44065,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44065,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44065,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__44036_SHARP_){
var or__4212__auto__ = (p1__44036_SHARP_ == null);
if(or__4212__auto__){
return or__4212__auto__;
} else {
var fexpr__44071 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__44071.cljs$core$IFn$_invoke$arity$1 ? fexpr__44071.cljs$core$IFn$_invoke$arity$1(p1__44036_SHARP_) : fexpr__44071.call(null,p1__44036_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4212__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return line;
}
})();
var G__44072 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__44072__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44072,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__44072);
var G__44072__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44072__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__44072__$1);
var G__44072__$3 = (cljs.core.truth_((function (){var or__4212__auto__ = fn;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var and__4210__auto__ = source__$1;
if(cljs.core.truth_(and__4210__auto__)){
return method;
} else {
return and__4210__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44072__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4212__auto__ = fn;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__44072__$2);
var G__44072__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44072__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__44072__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44072__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__44072__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44044__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__44098){
var map__44099 = p__44098;
var map__44099__$1 = cljs.core.__destructure_map(map__44099);
var triage_data = map__44099__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44099__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44099__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44099__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44099__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44099__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44099__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44099__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44099__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4212__auto__ = source;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4212__auto__ = line;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4212__auto__ = class$;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__44101 = phase;
var G__44101__$1 = (((G__44101 instanceof cljs.core.Keyword))?G__44101.fqn:null);
switch (G__44101__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__44103 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__44104 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__44105 = loc;
var G__44106 = (cljs.core.truth_(spec)?(function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__44107_44318 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__44108_44319 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__44109_44320 = true;
var _STAR_print_fn_STAR__temp_val__44110_44321 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__44109_44320);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__44110_44321);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__44096_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__44096_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__44108_44319);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__44107_44318);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__44103,G__44104,G__44105,G__44106) : format.call(null,G__44103,G__44104,G__44105,G__44106));

break;
case "macroexpansion":
var G__44111 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__44112 = cause_type;
var G__44113 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__44114 = loc;
var G__44115 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__44111,G__44112,G__44113,G__44114,G__44115) : format.call(null,G__44111,G__44112,G__44113,G__44114,G__44115));

break;
case "compile-syntax-check":
var G__44116 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__44117 = cause_type;
var G__44118 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__44119 = loc;
var G__44120 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__44116,G__44117,G__44118,G__44119,G__44120) : format.call(null,G__44116,G__44117,G__44118,G__44119,G__44120));

break;
case "compilation":
var G__44121 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__44122 = cause_type;
var G__44123 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__44124 = loc;
var G__44125 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__44121,G__44122,G__44123,G__44124,G__44125) : format.call(null,G__44121,G__44122,G__44123,G__44124,G__44125));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__44127 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__44128 = symbol;
var G__44129 = loc;
var G__44130 = (function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__44132_44326 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__44133_44327 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__44134_44328 = true;
var _STAR_print_fn_STAR__temp_val__44135_44329 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__44134_44328);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__44135_44329);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__44097_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__44097_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__44133_44327);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__44132_44326);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__44127,G__44128,G__44129,G__44130) : format.call(null,G__44127,G__44128,G__44129,G__44130));
} else {
var G__44137 = "Execution error%s at %s(%s).\n%s\n";
var G__44138 = cause_type;
var G__44139 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__44140 = loc;
var G__44141 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__44137,G__44138,G__44139,G__44140,G__44141) : format.call(null,G__44137,G__44138,G__44139,G__44140,G__44141));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44101__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
