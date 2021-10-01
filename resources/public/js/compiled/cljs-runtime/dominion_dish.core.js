goog.provide('dominion_dish.core');
dominion_dish.core.dev_setup = (function dominion_dish$core$dev_setup(){
if(dominion_dish.config.debug_QMARK_){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["dev mode"], 0));
} else {
return null;
}
});
dominion_dish.core.mount_root = (function dominion_dish$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_();

var root_el = document.getElementById("app");
reagent.dom.unmount_component_at_node(root_el);

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dominion_dish.components.app.container], null),root_el);
});
dominion_dish.core.init = (function dominion_dish$core$init(){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dominion-dish.events","initialize-db","dominion-dish.events/initialize-db",1762148415)], null));

dominion_dish.routes.start_BANG_();

dominion_dish.core.dev_setup();

return dominion_dish.core.mount_root();
});

//# sourceMappingURL=dominion_dish.core.js.map
