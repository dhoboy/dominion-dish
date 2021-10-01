goog.provide('day8.re_frame_10x.tools.string');
/**
 * Return a pluralized phrase, appending an s to the singular form if no plural is provided.
 *   For example:
 *   (pluralize 5 "month") => "5 months"
 *   (pluralize 1 "month") => "1 month"
 *   (pluralize 1 "radius" "radii") => "1 radius"
 *   (pluralize 9 "radius" "radii") => "9 radii"
 *   From https://github.com/flatland/useful/blob/194950/src/flatland/useful/string.clj#L25-L33
 */
day8.re_frame_10x.tools.string.pluralize = (function day8$re_frame_10x$tools$string$pluralize(var_args){
var args__4824__auto__ = [];
var len__4818__auto___40390 = arguments.length;
var i__4819__auto___40391 = (0);
while(true){
if((i__4819__auto___40391 < len__4818__auto___40390)){
args__4824__auto__.push((arguments[i__4819__auto___40391]));

var G__40392 = (i__4819__auto___40391 + (1));
i__4819__auto___40391 = G__40392;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.tools.string.pluralize.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(day8.re_frame_10x.tools.string.pluralize.cljs$core$IFn$_invoke$arity$variadic = (function (num,singular,p__40368){
var vec__40370 = p__40368;
var plural = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40370,(0),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(num)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),num))?singular:(function (){var or__4212__auto__ = plural;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(singular),"s"].join('');
}
})()))].join('');
}));

(day8.re_frame_10x.tools.string.pluralize.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(day8.re_frame_10x.tools.string.pluralize.cljs$lang$applyTo = (function (seq40363){
var G__40364 = cljs.core.first(seq40363);
var seq40363__$1 = cljs.core.next(seq40363);
var G__40365 = cljs.core.first(seq40363__$1);
var seq40363__$2 = cljs.core.next(seq40363__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40364,G__40365,seq40363__$2);
}));

/**
 * Same as pluralize, but doesn't prepend the number to the pluralized string.
 */
day8.re_frame_10x.tools.string.pluralize_ = (function day8$re_frame_10x$tools$string$pluralize_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___40396 = arguments.length;
var i__4819__auto___40397 = (0);
while(true){
if((i__4819__auto___40397 < len__4818__auto___40396)){
args__4824__auto__.push((arguments[i__4819__auto___40397]));

var G__40398 = (i__4819__auto___40397 + (1));
i__4819__auto___40397 = G__40398;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.tools.string.pluralize_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(day8.re_frame_10x.tools.string.pluralize_.cljs$core$IFn$_invoke$arity$variadic = (function (num,singular,p__40380){
var vec__40381 = p__40380;
var plural = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40381,(0),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),num)){
return singular;
} else {
var or__4212__auto__ = plural;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(singular),"s"].join('');
}
}
}));

(day8.re_frame_10x.tools.string.pluralize_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(day8.re_frame_10x.tools.string.pluralize_.cljs$lang$applyTo = (function (seq40377){
var G__40378 = cljs.core.first(seq40377);
var seq40377__$1 = cljs.core.next(seq40377);
var G__40379 = cljs.core.first(seq40377__$1);
var seq40377__$2 = cljs.core.next(seq40377__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40378,G__40379,seq40377__$2);
}));


//# sourceMappingURL=day8.re_frame_10x.tools.string.js.map
