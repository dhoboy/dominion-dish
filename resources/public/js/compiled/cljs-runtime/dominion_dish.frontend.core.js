goog.provide('dominion_dish.frontend.core');
dominion_dish.frontend.core.dev_setup = (function dominion_dish$frontend$core$dev_setup(){
if(dominion_dish.frontend.config.debug_QMARK_){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["dev mode"], 0));
} else {
return null;
}
});
dominion_dish.frontend.core.mount_root = (function dominion_dish$frontend$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_();

var root_el = document.getElementById("app");
reagent.dom.unmount_component_at_node(root_el);

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dominion_dish.frontend.components.app.container], null),root_el);
});
dominion_dish.frontend.core.init = (function dominion_dish$frontend$core$init(){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dominion-dish.frontend.events","initialize-db","dominion-dish.frontend.events/initialize-db",286310147)], null));

dominion_dish.frontend.routes.start_BANG_();

dominion_dish.frontend.core.dev_setup();

return dominion_dish.frontend.core.mount_root();
});

//# sourceMappingURL=dominion_dish.frontend.core.js.map
