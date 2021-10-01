goog.provide('day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet');
/**
 * Create a rule function for the given selector. The `selector`
 *   argument must be valid selector (ie. a keyword, string, or symbol).
 *   Additional arguments may consist of extra selectors or
 *   declarations.
 * 
 *   The returned function accepts any number of arguments which represent
 *   the rule's children.
 * 
 *   Ex.
 *    (let [text-field (rule "[type="text"])]
 *     (text-field {:border ["1px" :solid "black"]}))
 *    ;; => ["[type="text"] {:boder ["1px" :solid "black"]}]
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.rule = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$stylesheet$rule(var_args){
var args__4824__auto__ = [];
var len__4818__auto___36288 = arguments.length;
var i__4819__auto___36290 = (0);
while(true){
if((i__4819__auto___36290 < len__4818__auto___36288)){
args__4824__auto__.push((arguments[i__4819__auto___36290]));

var G__36292 = (i__4819__auto___36290 + (1));
i__4819__auto___36290 = G__36292;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic = (function (selector,more){
if((!((((selector instanceof cljs.core.Keyword)) || (((typeof selector === 'string') || ((selector instanceof cljs.core.Symbol)))))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Selector must be either a keyword, string, or symbol.",cljs.core.PersistentArrayMap.EMPTY);
} else {
return (function() { 
var G__36294__delegate = function (children){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,selector,more),children);
};
var G__36294 = function (var_args){
var children = null;
if (arguments.length > 0) {
var G__36296__i = 0, G__36296__a = new Array(arguments.length -  0);
while (G__36296__i < G__36296__a.length) {G__36296__a[G__36296__i] = arguments[G__36296__i + 0]; ++G__36296__i;}
  children = new cljs.core.IndexedSeq(G__36296__a,0,null);
} 
return G__36294__delegate.call(this,children);};
G__36294.cljs$lang$maxFixedArity = 0;
G__36294.cljs$lang$applyTo = (function (arglist__36297){
var children = cljs.core.seq(arglist__36297);
return G__36294__delegate(children);
});
G__36294.cljs$core$IFn$_invoke$arity$variadic = G__36294__delegate;
return G__36294;
})()
;
}
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.rule.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.rule.cljs$lang$applyTo = (function (seq36202){
var G__36203 = cljs.core.first(seq36202);
var seq36202__$1 = cljs.core.next(seq36202);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36203,seq36202__$1);
}));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.cssfn = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$stylesheet$cssfn(fn_name){
return (function() { 
var G__36298__delegate = function (args){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSFunction(fn_name,args,null,null,null));
};
var G__36298 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36299__i = 0, G__36299__a = new Array(arguments.length -  0);
while (G__36299__i < G__36299__a.length) {G__36299__a[G__36299__i] = arguments[G__36299__i + 0]; ++G__36299__i;}
  args = new cljs.core.IndexedSeq(G__36299__a,0,null);
} 
return G__36298__delegate.call(this,args);};
G__36298.cljs$lang$maxFixedArity = 0;
G__36298.cljs$lang$applyTo = (function (arglist__36300){
var args = cljs.core.seq(arglist__36300);
return G__36298__delegate(args);
});
G__36298.cljs$core$IFn$_invoke$arity$variadic = G__36298__delegate;
return G__36298;
})()
;
});
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_rule = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$stylesheet$at_rule(identifier,value){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSAtRule(identifier,value,null,null,null));
});
/**
 * Create a CSS @font-face rule.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_font_face = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$stylesheet$at_font_face(var_args){
var args__4824__auto__ = [];
var len__4818__auto___36301 = arguments.length;
var i__4819__auto___36303 = (0);
while(true){
if((i__4819__auto___36303 < len__4818__auto___36301)){
args__4824__auto__.push((arguments[i__4819__auto___36303]));

var G__36309 = (i__4819__auto___36303 + (1));
i__4819__auto___36303 = G__36309;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic = (function (font_properties){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["@font-face",font_properties], null);
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_font_face.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_font_face.cljs$lang$applyTo = (function (seq36220){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq36220));
}));

/**
 * Create a CSS @import rule.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_import = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$stylesheet$at_import(var_args){
var G__36238 = arguments.length;
switch (G__36238) {
case 1:
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4839__auto__ = [];
var len__4818__auto___36311 = arguments.length;
var i__4819__auto___36312 = (0);
while(true){
if((i__4819__auto___36312 < len__4818__auto___36311)){
args_arr__4839__auto__.push((arguments[i__4819__auto___36312]));

var G__36313 = (i__4819__auto___36312 + (1));
i__4819__auto___36312 = G__36313;
continue;
} else {
}
break;
}

var argseq__4840__auto__ = (new cljs.core.IndexedSeq(args_arr__4839__auto__.slice((1)),(0),null));
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4840__auto__);

}
});

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1 = (function (url){
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_rule(new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),null], null));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic = (function (url,media_queries){
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_rule(new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries], null));
}));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_import.cljs$lang$applyTo = (function (seq36236){
var G__36237 = cljs.core.first(seq36236);
var seq36236__$1 = cljs.core.next(seq36236);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36237,seq36236__$1);
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_import.cljs$lang$maxFixedArity = (1));

/**
 * Create a CSS @media rule.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_media = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$stylesheet$at_media(var_args){
var args__4824__auto__ = [];
var len__4818__auto___36314 = arguments.length;
var i__4819__auto___36315 = (0);
while(true){
if((i__4819__auto___36315 < len__4818__auto___36314)){
args__4824__auto__.push((arguments[i__4819__auto___36315]));

var G__36316 = (i__4819__auto___36315 + (1));
i__4819__auto___36315 = G__36316;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic = (function (media_queries,rules){
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_rule(new cljs.core.Keyword(null,"media","media",-1066138403),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries,new cljs.core.Keyword(null,"rules","rules",1198912366),rules], null));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_media.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_media.cljs$lang$applyTo = (function (seq36247){
var G__36249 = cljs.core.first(seq36247);
var seq36247__$1 = cljs.core.next(seq36247);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36249,seq36247__$1);
}));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_supports = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$stylesheet$at_supports(var_args){
var args__4824__auto__ = [];
var len__4818__auto___36320 = arguments.length;
var i__4819__auto___36321 = (0);
while(true){
if((i__4819__auto___36321 < len__4818__auto___36320)){
args__4824__auto__.push((arguments[i__4819__auto___36321]));

var G__36323 = (i__4819__auto___36321 + (1));
i__4819__auto___36321 = G__36323;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_supports.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_supports.cljs$core$IFn$_invoke$arity$variadic = (function (feature_queries,rules){

return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_rule(new cljs.core.Keyword(null,"feature","feature",27242652),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"feature-queries","feature-queries",-1340998408),feature_queries,new cljs.core.Keyword(null,"rules","rules",1198912366),rules], null));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_supports.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_supports.cljs$lang$applyTo = (function (seq36265){
var G__36266 = cljs.core.first(seq36265);
var seq36265__$1 = cljs.core.next(seq36265);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36266,seq36265__$1);
}));

/**
 * Create a CSS @keyframes rule.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_keyframes = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$stylesheet$at_keyframes(var_args){
var args__4824__auto__ = [];
var len__4818__auto___36326 = arguments.length;
var i__4819__auto___36327 = (0);
while(true){
if((i__4819__auto___36327 < len__4818__auto___36326)){
args__4824__auto__.push((arguments[i__4819__auto___36327]));

var G__36328 = (i__4819__auto___36327 + (1));
i__4819__auto___36327 = G__36328;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic = (function (identifier,frames){
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_rule(new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"identifier","identifier",-805503498),identifier,new cljs.core.Keyword(null,"frames","frames",1765687497),frames], null));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_keyframes.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_keyframes.cljs$lang$applyTo = (function (seq36275){
var G__36276 = cljs.core.first(seq36275);
var seq36275__$1 = cljs.core.next(seq36275);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36276,seq36275__$1);
}));

/**
 * Create a color from RGB values.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.rgb = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$stylesheet$rgb(r,g,b){
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.rgb.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null));
});
/**
 * Create a color from HSL values.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.hsl = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$stylesheet$hsl(h,s,l){
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.hsl.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,s,l], null));
});

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.js.map
