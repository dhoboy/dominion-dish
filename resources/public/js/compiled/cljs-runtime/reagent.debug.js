goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__34752__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__34752 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34753__i = 0, G__34753__a = new Array(arguments.length -  0);
while (G__34753__i < G__34753__a.length) {G__34753__a[G__34753__i] = arguments[G__34753__i + 0]; ++G__34753__i;}
  args = new cljs.core.IndexedSeq(G__34753__a,0,null);
} 
return G__34752__delegate.call(this,args);};
G__34752.cljs$lang$maxFixedArity = 0;
G__34752.cljs$lang$applyTo = (function (arglist__34754){
var args = cljs.core.seq(arglist__34754);
return G__34752__delegate(args);
});
G__34752.cljs$core$IFn$_invoke$arity$variadic = G__34752__delegate;
return G__34752;
})()
);

(o.error = (function() { 
var G__34755__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__34755 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34756__i = 0, G__34756__a = new Array(arguments.length -  0);
while (G__34756__i < G__34756__a.length) {G__34756__a[G__34756__i] = arguments[G__34756__i + 0]; ++G__34756__i;}
  args = new cljs.core.IndexedSeq(G__34756__a,0,null);
} 
return G__34755__delegate.call(this,args);};
G__34755.cljs$lang$maxFixedArity = 0;
G__34755.cljs$lang$applyTo = (function (arglist__34757){
var args = cljs.core.seq(arglist__34757);
return G__34755__delegate(args);
});
G__34755.cljs$core$IFn$_invoke$arity$variadic = G__34755__delegate;
return G__34755;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
