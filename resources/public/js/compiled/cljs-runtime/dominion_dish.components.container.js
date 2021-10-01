goog.provide('dominion_dish.components.container');
dominion_dish.components.container.container = (function dominion_dish$components$container$container(){
var active_panel = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dominion-dish.subs","active-panel","dominion-dish.subs/active-panel",1833255039)], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dominion_dish.components.header.header], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.body","div.body",-96313067),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dominion_dish.components.nav.nav], null),dominion_dish.routes.panels.cljs$core$IFn$_invoke$arity$1(active_panel)], null)], null);
});

//# sourceMappingURL=dominion_dish.components.container.js.map
