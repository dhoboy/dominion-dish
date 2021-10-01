goog.provide('dominion_dish.components.loader');
/**
 * Component that takes loading, error, and children
 * props and renders accordingly
 */
dominion_dish.components.loader.loader = (function dominion_dish$components$loader$loader(p__35945){
var map__35946 = p__35945;
var map__35946__$1 = cljs.core.__destructure_map(map__35946);
var loading = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35946__$1,new cljs.core.Keyword(null,"loading","loading",-737050189));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35946__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var contents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35946__$1,new cljs.core.Keyword(null,"contents","contents",-1567174023));
var wrapper_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35946__$1,new cljs.core.Keyword(null,"wrapper-class","wrapper-class",1300340883));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),wrapper_class], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(loading,true))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.loader","div.loader",-1644603528),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-spinner","i.fas.fa-spinner",2081576421)], null)], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(error,true))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Error..."], null):contents
))], null);
});

//# sourceMappingURL=dominion_dish.components.loader.js.map
