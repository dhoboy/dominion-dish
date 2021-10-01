goog.provide('dominion_dish.components.generic');
/**
 * An animated loader
 */
dominion_dish.components.generic.loader = (function dominion_dish$components$generic$loader(p__35785){
var map__35786 = p__35785;
var map__35786__$1 = cljs.core.__destructure_map(map__35786);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35786__$1,new cljs.core.Keyword(null,"size","size",1098693007),"large");
var icons = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["basketball-ball","running","football-ball","table-tennis","volleyball-ball"], null);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["loader ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["fas fa-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand_nth(icons))].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["fas fa-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand_nth(icons))].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["fas fa-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand_nth(icons))].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Loading..."], null)], null);
});
/**
 * Error state
 */
dominion_dish.components.generic.error = (function dominion_dish$components$generic$error(var_args){
var args__4824__auto__ = [];
var len__4818__auto___35789 = arguments.length;
var i__4819__auto___35790 = (0);
while(true){
if((i__4819__auto___35790 < len__4818__auto___35789)){
args__4824__auto__.push((arguments[i__4819__auto___35790]));

var G__35791 = (i__4819__auto___35790 + (1));
i__4819__auto___35790 = G__35791;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return dominion_dish.components.generic.error.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(dominion_dish.components.generic.error.cljs$core$IFn$_invoke$arity$variadic = (function (message){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.error","h3.error",-1762895947),(function (){var or__4212__auto__ = message;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return "The Dish hit a snag! Give us a moment and try again.";
}
})()], null);
}));

(dominion_dish.components.generic.error.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dominion_dish.components.generic.error.cljs$lang$applyTo = (function (seq35787){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35787));
}));

dominion_dish.components.generic.err_boundary = (function dominion_dish$components$generic$err_boundary(var_args){
var args__4824__auto__ = [];
var len__4818__auto___35792 = arguments.length;
var i__4819__auto___35793 = (0);
while(true){
if((i__4819__auto___35793 < len__4818__auto___35792)){
args__4824__auto__.push((arguments[i__4819__auto___35793]));

var G__35794 = (i__4819__auto___35793 + (1));
i__4819__auto___35793 = G__35794;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return dominion_dish.components.generic.err_boundary.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(dominion_dish.components.generic.err_boundary.cljs$core$IFn$_invoke$arity$variadic = (function (children){
var err_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"ErrBoundary",new cljs.core.Keyword(null,"component-did-catch","component-did-catch",652725810),(function (err,info){
cljs.core.reset_BANG_(err_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [err,info], null));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["err: ",err], 0));

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["info: ",info], 0));
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function() { 
var G__35797__delegate = function (children__$1){
if((cljs.core.deref(err_state) == null)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),children__$1);
} else {
return dominion_dish.components.generic.error();
}
};
var G__35797 = function (var_args){
var children__$1 = null;
if (arguments.length > 0) {
var G__35798__i = 0, G__35798__a = new Array(arguments.length -  0);
while (G__35798__i < G__35798__a.length) {G__35798__a[G__35798__i] = arguments[G__35798__i + 0]; ++G__35798__i;}
  children__$1 = new cljs.core.IndexedSeq(G__35798__a,0,null);
} 
return G__35797__delegate.call(this,children__$1);};
G__35797.cljs$lang$maxFixedArity = 0;
G__35797.cljs$lang$applyTo = (function (arglist__35799){
var children__$1 = cljs.core.seq(arglist__35799);
return G__35797__delegate(children__$1);
});
G__35797.cljs$core$IFn$_invoke$arity$variadic = G__35797__delegate;
return G__35797;
})()
], null));
}));

(dominion_dish.components.generic.err_boundary.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dominion_dish.components.generic.err_boundary.cljs$lang$applyTo = (function (seq35788){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35788));
}));


//# sourceMappingURL=dominion_dish.components.generic.js.map
