goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_46631 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_46631(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_46638 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_46638(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__45820 = coll;
var G__45821 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__45820,G__45821) : shadow.dom.lazy_native_coll_seq.call(null,G__45820,G__45821));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4212__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__45845 = arguments.length;
switch (G__45845) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__45852 = arguments.length;
switch (G__45852) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__45858 = arguments.length;
switch (G__45858) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__45866 = arguments.length;
switch (G__45866) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__45878 = arguments.length;
switch (G__45878) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__45890 = arguments.length;
switch (G__45890) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4212__auto__ = (!((typeof document !== 'undefined')));
if(or__4212__auto__){
return or__4212__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e45901){if((e45901 instanceof Object)){
var e = e45901;
return console.log("didnt support attachEvent",el,e);
} else {
throw e45901;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4212__auto__ = (!((typeof document !== 'undefined')));
if(or__4212__auto__){
return or__4212__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__45910 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__45911 = null;
var count__45912 = (0);
var i__45913 = (0);
while(true){
if((i__45913 < count__45912)){
var el = chunk__45911.cljs$core$IIndexed$_nth$arity$2(null,i__45913);
var handler_46680__$1 = ((function (seq__45910,chunk__45911,count__45912,i__45913,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__45910,chunk__45911,count__45912,i__45913,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_46680__$1);


var G__46681 = seq__45910;
var G__46682 = chunk__45911;
var G__46683 = count__45912;
var G__46684 = (i__45913 + (1));
seq__45910 = G__46681;
chunk__45911 = G__46682;
count__45912 = G__46683;
i__45913 = G__46684;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__45910);
if(temp__5753__auto__){
var seq__45910__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45910__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__45910__$1);
var G__46685 = cljs.core.chunk_rest(seq__45910__$1);
var G__46686 = c__4638__auto__;
var G__46687 = cljs.core.count(c__4638__auto__);
var G__46688 = (0);
seq__45910 = G__46685;
chunk__45911 = G__46686;
count__45912 = G__46687;
i__45913 = G__46688;
continue;
} else {
var el = cljs.core.first(seq__45910__$1);
var handler_46689__$1 = ((function (seq__45910,chunk__45911,count__45912,i__45913,el,seq__45910__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__45910,chunk__45911,count__45912,i__45913,el,seq__45910__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_46689__$1);


var G__46690 = cljs.core.next(seq__45910__$1);
var G__46691 = null;
var G__46692 = (0);
var G__46693 = (0);
seq__45910 = G__46690;
chunk__45911 = G__46691;
count__45912 = G__46692;
i__45913 = G__46693;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__45943 = arguments.length;
switch (G__45943) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__45952 = cljs.core.seq(events);
var chunk__45953 = null;
var count__45954 = (0);
var i__45955 = (0);
while(true){
if((i__45955 < count__45954)){
var vec__45968 = chunk__45953.cljs$core$IIndexed$_nth$arity$2(null,i__45955);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45968,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45968,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__46701 = seq__45952;
var G__46702 = chunk__45953;
var G__46703 = count__45954;
var G__46704 = (i__45955 + (1));
seq__45952 = G__46701;
chunk__45953 = G__46702;
count__45954 = G__46703;
i__45955 = G__46704;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__45952);
if(temp__5753__auto__){
var seq__45952__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45952__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__45952__$1);
var G__46705 = cljs.core.chunk_rest(seq__45952__$1);
var G__46706 = c__4638__auto__;
var G__46707 = cljs.core.count(c__4638__auto__);
var G__46708 = (0);
seq__45952 = G__46705;
chunk__45953 = G__46706;
count__45954 = G__46707;
i__45955 = G__46708;
continue;
} else {
var vec__45974 = cljs.core.first(seq__45952__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45974,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45974,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__46712 = cljs.core.next(seq__45952__$1);
var G__46713 = null;
var G__46714 = (0);
var G__46715 = (0);
seq__45952 = G__46712;
chunk__45953 = G__46713;
count__45954 = G__46714;
i__45955 = G__46715;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__45984 = cljs.core.seq(styles);
var chunk__45986 = null;
var count__45987 = (0);
var i__45988 = (0);
while(true){
if((i__45988 < count__45987)){
var vec__46010 = chunk__45986.cljs$core$IIndexed$_nth$arity$2(null,i__45988);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46010,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46010,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__46719 = seq__45984;
var G__46720 = chunk__45986;
var G__46721 = count__45987;
var G__46722 = (i__45988 + (1));
seq__45984 = G__46719;
chunk__45986 = G__46720;
count__45987 = G__46721;
i__45988 = G__46722;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__45984);
if(temp__5753__auto__){
var seq__45984__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45984__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__45984__$1);
var G__46724 = cljs.core.chunk_rest(seq__45984__$1);
var G__46725 = c__4638__auto__;
var G__46726 = cljs.core.count(c__4638__auto__);
var G__46727 = (0);
seq__45984 = G__46724;
chunk__45986 = G__46725;
count__45987 = G__46726;
i__45988 = G__46727;
continue;
} else {
var vec__46021 = cljs.core.first(seq__45984__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46021,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46021,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__46729 = cljs.core.next(seq__45984__$1);
var G__46730 = null;
var G__46731 = (0);
var G__46732 = (0);
seq__45984 = G__46729;
chunk__45986 = G__46730;
count__45987 = G__46731;
i__45988 = G__46732;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__46028_46734 = key;
var G__46028_46735__$1 = (((G__46028_46734 instanceof cljs.core.Keyword))?G__46028_46734.fqn:null);
switch (G__46028_46735__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_46739 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4212__auto__ = goog.string.startsWith(ks_46739,"data-");
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return goog.string.startsWith(ks_46739,"aria-");
}
})())){
el.setAttribute(ks_46739,value);
} else {
(el[ks_46739] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__46063){
var map__46065 = p__46063;
var map__46065__$1 = cljs.core.__destructure_map(map__46065);
var props = map__46065__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46065__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__46067 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46067,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46067,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46067,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__46071 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__46071,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__46071;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__46075 = arguments.length;
switch (G__46075) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__46090){
var vec__46091 = p__46090;
var seq__46092 = cljs.core.seq(vec__46091);
var first__46093 = cljs.core.first(seq__46092);
var seq__46092__$1 = cljs.core.next(seq__46092);
var nn = first__46093;
var first__46093__$1 = cljs.core.first(seq__46092__$1);
var seq__46092__$2 = cljs.core.next(seq__46092__$1);
var np = first__46093__$1;
var nc = seq__46092__$2;
var node = vec__46091;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__46098 = nn;
var G__46099 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__46098,G__46099) : create_fn.call(null,G__46098,G__46099));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__46101 = nn;
var G__46102 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__46101,G__46102) : create_fn.call(null,G__46101,G__46102));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__46109 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46109,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46109,(1),null);
var seq__46112_46747 = cljs.core.seq(node_children);
var chunk__46114_46748 = null;
var count__46115_46749 = (0);
var i__46116_46750 = (0);
while(true){
if((i__46116_46750 < count__46115_46749)){
var child_struct_46752 = chunk__46114_46748.cljs$core$IIndexed$_nth$arity$2(null,i__46116_46750);
var children_46754 = shadow.dom.dom_node(child_struct_46752);
if(cljs.core.seq_QMARK_(children_46754)){
var seq__46153_46755 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_46754));
var chunk__46155_46756 = null;
var count__46156_46757 = (0);
var i__46157_46758 = (0);
while(true){
if((i__46157_46758 < count__46156_46757)){
var child_46759 = chunk__46155_46756.cljs$core$IIndexed$_nth$arity$2(null,i__46157_46758);
if(cljs.core.truth_(child_46759)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_46759);


var G__46760 = seq__46153_46755;
var G__46761 = chunk__46155_46756;
var G__46762 = count__46156_46757;
var G__46763 = (i__46157_46758 + (1));
seq__46153_46755 = G__46760;
chunk__46155_46756 = G__46761;
count__46156_46757 = G__46762;
i__46157_46758 = G__46763;
continue;
} else {
var G__46764 = seq__46153_46755;
var G__46765 = chunk__46155_46756;
var G__46766 = count__46156_46757;
var G__46767 = (i__46157_46758 + (1));
seq__46153_46755 = G__46764;
chunk__46155_46756 = G__46765;
count__46156_46757 = G__46766;
i__46157_46758 = G__46767;
continue;
}
} else {
var temp__5753__auto___46768 = cljs.core.seq(seq__46153_46755);
if(temp__5753__auto___46768){
var seq__46153_46770__$1 = temp__5753__auto___46768;
if(cljs.core.chunked_seq_QMARK_(seq__46153_46770__$1)){
var c__4638__auto___46771 = cljs.core.chunk_first(seq__46153_46770__$1);
var G__46772 = cljs.core.chunk_rest(seq__46153_46770__$1);
var G__46773 = c__4638__auto___46771;
var G__46774 = cljs.core.count(c__4638__auto___46771);
var G__46775 = (0);
seq__46153_46755 = G__46772;
chunk__46155_46756 = G__46773;
count__46156_46757 = G__46774;
i__46157_46758 = G__46775;
continue;
} else {
var child_46776 = cljs.core.first(seq__46153_46770__$1);
if(cljs.core.truth_(child_46776)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_46776);


var G__46777 = cljs.core.next(seq__46153_46770__$1);
var G__46778 = null;
var G__46779 = (0);
var G__46780 = (0);
seq__46153_46755 = G__46777;
chunk__46155_46756 = G__46778;
count__46156_46757 = G__46779;
i__46157_46758 = G__46780;
continue;
} else {
var G__46781 = cljs.core.next(seq__46153_46770__$1);
var G__46782 = null;
var G__46783 = (0);
var G__46784 = (0);
seq__46153_46755 = G__46781;
chunk__46155_46756 = G__46782;
count__46156_46757 = G__46783;
i__46157_46758 = G__46784;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_46754);
}


var G__46785 = seq__46112_46747;
var G__46786 = chunk__46114_46748;
var G__46787 = count__46115_46749;
var G__46788 = (i__46116_46750 + (1));
seq__46112_46747 = G__46785;
chunk__46114_46748 = G__46786;
count__46115_46749 = G__46787;
i__46116_46750 = G__46788;
continue;
} else {
var temp__5753__auto___46789 = cljs.core.seq(seq__46112_46747);
if(temp__5753__auto___46789){
var seq__46112_46790__$1 = temp__5753__auto___46789;
if(cljs.core.chunked_seq_QMARK_(seq__46112_46790__$1)){
var c__4638__auto___46791 = cljs.core.chunk_first(seq__46112_46790__$1);
var G__46792 = cljs.core.chunk_rest(seq__46112_46790__$1);
var G__46793 = c__4638__auto___46791;
var G__46794 = cljs.core.count(c__4638__auto___46791);
var G__46795 = (0);
seq__46112_46747 = G__46792;
chunk__46114_46748 = G__46793;
count__46115_46749 = G__46794;
i__46116_46750 = G__46795;
continue;
} else {
var child_struct_46796 = cljs.core.first(seq__46112_46790__$1);
var children_46797 = shadow.dom.dom_node(child_struct_46796);
if(cljs.core.seq_QMARK_(children_46797)){
var seq__46170_46798 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_46797));
var chunk__46173_46799 = null;
var count__46174_46800 = (0);
var i__46175_46801 = (0);
while(true){
if((i__46175_46801 < count__46174_46800)){
var child_46802 = chunk__46173_46799.cljs$core$IIndexed$_nth$arity$2(null,i__46175_46801);
if(cljs.core.truth_(child_46802)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_46802);


var G__46803 = seq__46170_46798;
var G__46804 = chunk__46173_46799;
var G__46805 = count__46174_46800;
var G__46806 = (i__46175_46801 + (1));
seq__46170_46798 = G__46803;
chunk__46173_46799 = G__46804;
count__46174_46800 = G__46805;
i__46175_46801 = G__46806;
continue;
} else {
var G__46808 = seq__46170_46798;
var G__46809 = chunk__46173_46799;
var G__46810 = count__46174_46800;
var G__46811 = (i__46175_46801 + (1));
seq__46170_46798 = G__46808;
chunk__46173_46799 = G__46809;
count__46174_46800 = G__46810;
i__46175_46801 = G__46811;
continue;
}
} else {
var temp__5753__auto___46812__$1 = cljs.core.seq(seq__46170_46798);
if(temp__5753__auto___46812__$1){
var seq__46170_46814__$1 = temp__5753__auto___46812__$1;
if(cljs.core.chunked_seq_QMARK_(seq__46170_46814__$1)){
var c__4638__auto___46815 = cljs.core.chunk_first(seq__46170_46814__$1);
var G__46816 = cljs.core.chunk_rest(seq__46170_46814__$1);
var G__46817 = c__4638__auto___46815;
var G__46818 = cljs.core.count(c__4638__auto___46815);
var G__46819 = (0);
seq__46170_46798 = G__46816;
chunk__46173_46799 = G__46817;
count__46174_46800 = G__46818;
i__46175_46801 = G__46819;
continue;
} else {
var child_46820 = cljs.core.first(seq__46170_46814__$1);
if(cljs.core.truth_(child_46820)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_46820);


var G__46821 = cljs.core.next(seq__46170_46814__$1);
var G__46822 = null;
var G__46823 = (0);
var G__46824 = (0);
seq__46170_46798 = G__46821;
chunk__46173_46799 = G__46822;
count__46174_46800 = G__46823;
i__46175_46801 = G__46824;
continue;
} else {
var G__46825 = cljs.core.next(seq__46170_46814__$1);
var G__46826 = null;
var G__46827 = (0);
var G__46828 = (0);
seq__46170_46798 = G__46825;
chunk__46173_46799 = G__46826;
count__46174_46800 = G__46827;
i__46175_46801 = G__46828;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_46797);
}


var G__46829 = cljs.core.next(seq__46112_46790__$1);
var G__46830 = null;
var G__46831 = (0);
var G__46832 = (0);
seq__46112_46747 = G__46829;
chunk__46114_46748 = G__46830;
count__46115_46749 = G__46831;
i__46116_46750 = G__46832;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__46201 = cljs.core.seq(node);
var chunk__46202 = null;
var count__46203 = (0);
var i__46204 = (0);
while(true){
if((i__46204 < count__46203)){
var n = chunk__46202.cljs$core$IIndexed$_nth$arity$2(null,i__46204);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__46836 = seq__46201;
var G__46837 = chunk__46202;
var G__46838 = count__46203;
var G__46839 = (i__46204 + (1));
seq__46201 = G__46836;
chunk__46202 = G__46837;
count__46203 = G__46838;
i__46204 = G__46839;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__46201);
if(temp__5753__auto__){
var seq__46201__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46201__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__46201__$1);
var G__46840 = cljs.core.chunk_rest(seq__46201__$1);
var G__46841 = c__4638__auto__;
var G__46842 = cljs.core.count(c__4638__auto__);
var G__46843 = (0);
seq__46201 = G__46840;
chunk__46202 = G__46841;
count__46203 = G__46842;
i__46204 = G__46843;
continue;
} else {
var n = cljs.core.first(seq__46201__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__46844 = cljs.core.next(seq__46201__$1);
var G__46845 = null;
var G__46846 = (0);
var G__46847 = (0);
seq__46201 = G__46844;
chunk__46202 = G__46845;
count__46203 = G__46846;
i__46204 = G__46847;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__46228 = arguments.length;
switch (G__46228) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__46233 = arguments.length;
switch (G__46233) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__46242 = arguments.length;
switch (G__46242) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4212__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4824__auto__ = [];
var len__4818__auto___46858 = arguments.length;
var i__4819__auto___46859 = (0);
while(true){
if((i__4819__auto___46859 < len__4818__auto___46858)){
args__4824__auto__.push((arguments[i__4819__auto___46859]));

var G__46860 = (i__4819__auto___46859 + (1));
i__4819__auto___46859 = G__46860;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__46253_46861 = cljs.core.seq(nodes);
var chunk__46254_46862 = null;
var count__46255_46863 = (0);
var i__46256_46864 = (0);
while(true){
if((i__46256_46864 < count__46255_46863)){
var node_46865 = chunk__46254_46862.cljs$core$IIndexed$_nth$arity$2(null,i__46256_46864);
fragment.appendChild(shadow.dom._to_dom(node_46865));


var G__46866 = seq__46253_46861;
var G__46867 = chunk__46254_46862;
var G__46868 = count__46255_46863;
var G__46869 = (i__46256_46864 + (1));
seq__46253_46861 = G__46866;
chunk__46254_46862 = G__46867;
count__46255_46863 = G__46868;
i__46256_46864 = G__46869;
continue;
} else {
var temp__5753__auto___46870 = cljs.core.seq(seq__46253_46861);
if(temp__5753__auto___46870){
var seq__46253_46871__$1 = temp__5753__auto___46870;
if(cljs.core.chunked_seq_QMARK_(seq__46253_46871__$1)){
var c__4638__auto___46872 = cljs.core.chunk_first(seq__46253_46871__$1);
var G__46873 = cljs.core.chunk_rest(seq__46253_46871__$1);
var G__46874 = c__4638__auto___46872;
var G__46875 = cljs.core.count(c__4638__auto___46872);
var G__46876 = (0);
seq__46253_46861 = G__46873;
chunk__46254_46862 = G__46874;
count__46255_46863 = G__46875;
i__46256_46864 = G__46876;
continue;
} else {
var node_46877 = cljs.core.first(seq__46253_46871__$1);
fragment.appendChild(shadow.dom._to_dom(node_46877));


var G__46882 = cljs.core.next(seq__46253_46871__$1);
var G__46883 = null;
var G__46884 = (0);
var G__46885 = (0);
seq__46253_46861 = G__46882;
chunk__46254_46862 = G__46883;
count__46255_46863 = G__46884;
i__46256_46864 = G__46885;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq46251){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq46251));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__46257_46886 = cljs.core.seq(scripts);
var chunk__46258_46887 = null;
var count__46259_46888 = (0);
var i__46260_46889 = (0);
while(true){
if((i__46260_46889 < count__46259_46888)){
var vec__46273_46890 = chunk__46258_46887.cljs$core$IIndexed$_nth$arity$2(null,i__46260_46889);
var script_tag_46891 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46273_46890,(0),null);
var script_body_46892 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46273_46890,(1),null);
eval(script_body_46892);


var G__46893 = seq__46257_46886;
var G__46894 = chunk__46258_46887;
var G__46895 = count__46259_46888;
var G__46896 = (i__46260_46889 + (1));
seq__46257_46886 = G__46893;
chunk__46258_46887 = G__46894;
count__46259_46888 = G__46895;
i__46260_46889 = G__46896;
continue;
} else {
var temp__5753__auto___46898 = cljs.core.seq(seq__46257_46886);
if(temp__5753__auto___46898){
var seq__46257_46899__$1 = temp__5753__auto___46898;
if(cljs.core.chunked_seq_QMARK_(seq__46257_46899__$1)){
var c__4638__auto___46900 = cljs.core.chunk_first(seq__46257_46899__$1);
var G__46901 = cljs.core.chunk_rest(seq__46257_46899__$1);
var G__46902 = c__4638__auto___46900;
var G__46903 = cljs.core.count(c__4638__auto___46900);
var G__46904 = (0);
seq__46257_46886 = G__46901;
chunk__46258_46887 = G__46902;
count__46259_46888 = G__46903;
i__46260_46889 = G__46904;
continue;
} else {
var vec__46279_46905 = cljs.core.first(seq__46257_46899__$1);
var script_tag_46906 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46279_46905,(0),null);
var script_body_46907 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46279_46905,(1),null);
eval(script_body_46907);


var G__46909 = cljs.core.next(seq__46257_46899__$1);
var G__46910 = null;
var G__46911 = (0);
var G__46912 = (0);
seq__46257_46886 = G__46909;
chunk__46258_46887 = G__46910;
count__46259_46888 = G__46911;
i__46260_46889 = G__46912;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__46283){
var vec__46284 = p__46283;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46284,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46284,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__46294 = arguments.length;
switch (G__46294) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__46320 = cljs.core.seq(style_keys);
var chunk__46321 = null;
var count__46322 = (0);
var i__46323 = (0);
while(true){
if((i__46323 < count__46322)){
var it = chunk__46321.cljs$core$IIndexed$_nth$arity$2(null,i__46323);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__46921 = seq__46320;
var G__46922 = chunk__46321;
var G__46923 = count__46322;
var G__46924 = (i__46323 + (1));
seq__46320 = G__46921;
chunk__46321 = G__46922;
count__46322 = G__46923;
i__46323 = G__46924;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__46320);
if(temp__5753__auto__){
var seq__46320__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46320__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__46320__$1);
var G__46928 = cljs.core.chunk_rest(seq__46320__$1);
var G__46929 = c__4638__auto__;
var G__46930 = cljs.core.count(c__4638__auto__);
var G__46931 = (0);
seq__46320 = G__46928;
chunk__46321 = G__46929;
count__46322 = G__46930;
i__46323 = G__46931;
continue;
} else {
var it = cljs.core.first(seq__46320__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__46932 = cljs.core.next(seq__46320__$1);
var G__46933 = null;
var G__46934 = (0);
var G__46935 = (0);
seq__46320 = G__46932;
chunk__46321 = G__46933;
count__46322 = G__46934;
i__46323 = G__46935;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k46331,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__46337 = k46331;
var G__46337__$1 = (((G__46337 instanceof cljs.core.Keyword))?G__46337.fqn:null);
switch (G__46337__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k46331,else__4464__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__46339){
var vec__46340 = p__46339;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46340,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46340,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__46330){
var self__ = this;
var G__46330__$1 = this;
return (new cljs.core.RecordIter((0),G__46330__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
})(this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this46332,other46333){
var self__ = this;
var this46332__$1 = this;
return (((!((other46333 == null)))) && ((((this46332__$1.constructor === other46333.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46332__$1.x,other46333.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46332__$1.y,other46333.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46332__$1.__extmap,other46333.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k46331){
var self__ = this;
var this__4468__auto____$1 = this;
var G__46354 = k46331;
var G__46354__$1 = (((G__46354 instanceof cljs.core.Keyword))?G__46354.fqn:null);
switch (G__46354__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k46331);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__46330){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__46358 = cljs.core.keyword_identical_QMARK_;
var expr__46359 = k__4470__auto__;
if(cljs.core.truth_((pred__46358.cljs$core$IFn$_invoke$arity$2 ? pred__46358.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__46359) : pred__46358.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__46359)))){
return (new shadow.dom.Coordinate(G__46330,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46358.cljs$core$IFn$_invoke$arity$2 ? pred__46358.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__46359) : pred__46358.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__46359)))){
return (new shadow.dom.Coordinate(self__.x,G__46330,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__46330),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__46330){
var self__ = this;
var this__4460__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__46330,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4467__auto__,(0)),cljs.core._nth(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__46334){
var extmap__4501__auto__ = (function (){var G__46367 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__46334,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__46334)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__46367);
} else {
return G__46367;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__46334),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__46334),null,cljs.core.not_empty(extmap__4501__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k46374,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__46383 = k46374;
var G__46383__$1 = (((G__46383 instanceof cljs.core.Keyword))?G__46383.fqn:null);
switch (G__46383__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k46374,else__4464__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__46387){
var vec__46389 = p__46387;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46389,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46389,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#shadow.dom.Size{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__46373){
var self__ = this;
var G__46373__$1 = this;
return (new cljs.core.RecordIter((0),G__46373__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
})(this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this46375,other46376){
var self__ = this;
var this46375__$1 = this;
return (((!((other46376 == null)))) && ((((this46375__$1.constructor === other46376.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46375__$1.w,other46376.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46375__$1.h,other46376.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46375__$1.__extmap,other46376.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k46374){
var self__ = this;
var this__4468__auto____$1 = this;
var G__46405 = k46374;
var G__46405__$1 = (((G__46405 instanceof cljs.core.Keyword))?G__46405.fqn:null);
switch (G__46405__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k46374);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__46373){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__46409 = cljs.core.keyword_identical_QMARK_;
var expr__46410 = k__4470__auto__;
if(cljs.core.truth_((pred__46409.cljs$core$IFn$_invoke$arity$2 ? pred__46409.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__46410) : pred__46409.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__46410)))){
return (new shadow.dom.Size(G__46373,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46409.cljs$core$IFn$_invoke$arity$2 ? pred__46409.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__46410) : pred__46409.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__46410)))){
return (new shadow.dom.Size(self__.w,G__46373,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__46373),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__46373){
var self__ = this;
var this__4460__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__46373,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4467__auto__,(0)),cljs.core._nth(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__46378){
var extmap__4501__auto__ = (function (){var G__46424 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__46378,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__46378)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__46424);
} else {
return G__46424;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__46378),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__46378),null,cljs.core.not_empty(extmap__4501__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4692__auto__ = opts;
var l__4693__auto__ = a__4692__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4693__auto__)){
var G__46970 = (i + (1));
var G__46971 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__46970;
ret = G__46971;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__46447){
var vec__46449 = p__46447;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46449,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46449,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__46454 = arguments.length;
switch (G__46454) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__46986 = ps;
var G__46987 = (i + (1));
el__$1 = G__46986;
i = G__46987;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__46479 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46479,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46479,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46479,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__46484_46998 = cljs.core.seq(props);
var chunk__46485_46999 = null;
var count__46486_47000 = (0);
var i__46487_47001 = (0);
while(true){
if((i__46487_47001 < count__46486_47000)){
var vec__46496_47002 = chunk__46485_46999.cljs$core$IIndexed$_nth$arity$2(null,i__46487_47001);
var k_47003 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46496_47002,(0),null);
var v_47004 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46496_47002,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_47003);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_47003),v_47004);


var G__47005 = seq__46484_46998;
var G__47006 = chunk__46485_46999;
var G__47007 = count__46486_47000;
var G__47008 = (i__46487_47001 + (1));
seq__46484_46998 = G__47005;
chunk__46485_46999 = G__47006;
count__46486_47000 = G__47007;
i__46487_47001 = G__47008;
continue;
} else {
var temp__5753__auto___47009 = cljs.core.seq(seq__46484_46998);
if(temp__5753__auto___47009){
var seq__46484_47010__$1 = temp__5753__auto___47009;
if(cljs.core.chunked_seq_QMARK_(seq__46484_47010__$1)){
var c__4638__auto___47011 = cljs.core.chunk_first(seq__46484_47010__$1);
var G__47012 = cljs.core.chunk_rest(seq__46484_47010__$1);
var G__47013 = c__4638__auto___47011;
var G__47014 = cljs.core.count(c__4638__auto___47011);
var G__47015 = (0);
seq__46484_46998 = G__47012;
chunk__46485_46999 = G__47013;
count__46486_47000 = G__47014;
i__46487_47001 = G__47015;
continue;
} else {
var vec__46502_47016 = cljs.core.first(seq__46484_47010__$1);
var k_47017 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46502_47016,(0),null);
var v_47018 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46502_47016,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_47017);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_47017),v_47018);


var G__47019 = cljs.core.next(seq__46484_47010__$1);
var G__47020 = null;
var G__47021 = (0);
var G__47022 = (0);
seq__46484_46998 = G__47019;
chunk__46485_46999 = G__47020;
count__46486_47000 = G__47021;
i__46487_47001 = G__47022;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__46509 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46509,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46509,(1),null);
var seq__46512_47023 = cljs.core.seq(node_children);
var chunk__46514_47024 = null;
var count__46515_47025 = (0);
var i__46516_47026 = (0);
while(true){
if((i__46516_47026 < count__46515_47025)){
var child_struct_47027 = chunk__46514_47024.cljs$core$IIndexed$_nth$arity$2(null,i__46516_47026);
if((!((child_struct_47027 == null)))){
if(typeof child_struct_47027 === 'string'){
var text_47028 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_47028),child_struct_47027].join(''));
} else {
var children_47029 = shadow.dom.svg_node(child_struct_47027);
if(cljs.core.seq_QMARK_(children_47029)){
var seq__46547_47030 = cljs.core.seq(children_47029);
var chunk__46549_47031 = null;
var count__46550_47032 = (0);
var i__46551_47033 = (0);
while(true){
if((i__46551_47033 < count__46550_47032)){
var child_47034 = chunk__46549_47031.cljs$core$IIndexed$_nth$arity$2(null,i__46551_47033);
if(cljs.core.truth_(child_47034)){
node.appendChild(child_47034);


var G__47035 = seq__46547_47030;
var G__47036 = chunk__46549_47031;
var G__47037 = count__46550_47032;
var G__47038 = (i__46551_47033 + (1));
seq__46547_47030 = G__47035;
chunk__46549_47031 = G__47036;
count__46550_47032 = G__47037;
i__46551_47033 = G__47038;
continue;
} else {
var G__47039 = seq__46547_47030;
var G__47040 = chunk__46549_47031;
var G__47041 = count__46550_47032;
var G__47042 = (i__46551_47033 + (1));
seq__46547_47030 = G__47039;
chunk__46549_47031 = G__47040;
count__46550_47032 = G__47041;
i__46551_47033 = G__47042;
continue;
}
} else {
var temp__5753__auto___47043 = cljs.core.seq(seq__46547_47030);
if(temp__5753__auto___47043){
var seq__46547_47044__$1 = temp__5753__auto___47043;
if(cljs.core.chunked_seq_QMARK_(seq__46547_47044__$1)){
var c__4638__auto___47045 = cljs.core.chunk_first(seq__46547_47044__$1);
var G__47046 = cljs.core.chunk_rest(seq__46547_47044__$1);
var G__47047 = c__4638__auto___47045;
var G__47048 = cljs.core.count(c__4638__auto___47045);
var G__47049 = (0);
seq__46547_47030 = G__47046;
chunk__46549_47031 = G__47047;
count__46550_47032 = G__47048;
i__46551_47033 = G__47049;
continue;
} else {
var child_47050 = cljs.core.first(seq__46547_47044__$1);
if(cljs.core.truth_(child_47050)){
node.appendChild(child_47050);


var G__47051 = cljs.core.next(seq__46547_47044__$1);
var G__47052 = null;
var G__47053 = (0);
var G__47054 = (0);
seq__46547_47030 = G__47051;
chunk__46549_47031 = G__47052;
count__46550_47032 = G__47053;
i__46551_47033 = G__47054;
continue;
} else {
var G__47055 = cljs.core.next(seq__46547_47044__$1);
var G__47056 = null;
var G__47057 = (0);
var G__47058 = (0);
seq__46547_47030 = G__47055;
chunk__46549_47031 = G__47056;
count__46550_47032 = G__47057;
i__46551_47033 = G__47058;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_47029);
}
}


var G__47061 = seq__46512_47023;
var G__47062 = chunk__46514_47024;
var G__47063 = count__46515_47025;
var G__47064 = (i__46516_47026 + (1));
seq__46512_47023 = G__47061;
chunk__46514_47024 = G__47062;
count__46515_47025 = G__47063;
i__46516_47026 = G__47064;
continue;
} else {
var G__47065 = seq__46512_47023;
var G__47066 = chunk__46514_47024;
var G__47067 = count__46515_47025;
var G__47068 = (i__46516_47026 + (1));
seq__46512_47023 = G__47065;
chunk__46514_47024 = G__47066;
count__46515_47025 = G__47067;
i__46516_47026 = G__47068;
continue;
}
} else {
var temp__5753__auto___47069 = cljs.core.seq(seq__46512_47023);
if(temp__5753__auto___47069){
var seq__46512_47070__$1 = temp__5753__auto___47069;
if(cljs.core.chunked_seq_QMARK_(seq__46512_47070__$1)){
var c__4638__auto___47071 = cljs.core.chunk_first(seq__46512_47070__$1);
var G__47072 = cljs.core.chunk_rest(seq__46512_47070__$1);
var G__47073 = c__4638__auto___47071;
var G__47074 = cljs.core.count(c__4638__auto___47071);
var G__47075 = (0);
seq__46512_47023 = G__47072;
chunk__46514_47024 = G__47073;
count__46515_47025 = G__47074;
i__46516_47026 = G__47075;
continue;
} else {
var child_struct_47076 = cljs.core.first(seq__46512_47070__$1);
if((!((child_struct_47076 == null)))){
if(typeof child_struct_47076 === 'string'){
var text_47077 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_47077),child_struct_47076].join(''));
} else {
var children_47078 = shadow.dom.svg_node(child_struct_47076);
if(cljs.core.seq_QMARK_(children_47078)){
var seq__46562_47079 = cljs.core.seq(children_47078);
var chunk__46564_47080 = null;
var count__46565_47081 = (0);
var i__46566_47082 = (0);
while(true){
if((i__46566_47082 < count__46565_47081)){
var child_47083 = chunk__46564_47080.cljs$core$IIndexed$_nth$arity$2(null,i__46566_47082);
if(cljs.core.truth_(child_47083)){
node.appendChild(child_47083);


var G__47085 = seq__46562_47079;
var G__47086 = chunk__46564_47080;
var G__47087 = count__46565_47081;
var G__47088 = (i__46566_47082 + (1));
seq__46562_47079 = G__47085;
chunk__46564_47080 = G__47086;
count__46565_47081 = G__47087;
i__46566_47082 = G__47088;
continue;
} else {
var G__47094 = seq__46562_47079;
var G__47095 = chunk__46564_47080;
var G__47096 = count__46565_47081;
var G__47097 = (i__46566_47082 + (1));
seq__46562_47079 = G__47094;
chunk__46564_47080 = G__47095;
count__46565_47081 = G__47096;
i__46566_47082 = G__47097;
continue;
}
} else {
var temp__5753__auto___47098__$1 = cljs.core.seq(seq__46562_47079);
if(temp__5753__auto___47098__$1){
var seq__46562_47102__$1 = temp__5753__auto___47098__$1;
if(cljs.core.chunked_seq_QMARK_(seq__46562_47102__$1)){
var c__4638__auto___47107 = cljs.core.chunk_first(seq__46562_47102__$1);
var G__47108 = cljs.core.chunk_rest(seq__46562_47102__$1);
var G__47109 = c__4638__auto___47107;
var G__47110 = cljs.core.count(c__4638__auto___47107);
var G__47111 = (0);
seq__46562_47079 = G__47108;
chunk__46564_47080 = G__47109;
count__46565_47081 = G__47110;
i__46566_47082 = G__47111;
continue;
} else {
var child_47114 = cljs.core.first(seq__46562_47102__$1);
if(cljs.core.truth_(child_47114)){
node.appendChild(child_47114);


var G__47120 = cljs.core.next(seq__46562_47102__$1);
var G__47121 = null;
var G__47122 = (0);
var G__47123 = (0);
seq__46562_47079 = G__47120;
chunk__46564_47080 = G__47121;
count__46565_47081 = G__47122;
i__46566_47082 = G__47123;
continue;
} else {
var G__47125 = cljs.core.next(seq__46562_47102__$1);
var G__47126 = null;
var G__47127 = (0);
var G__47128 = (0);
seq__46562_47079 = G__47125;
chunk__46564_47080 = G__47126;
count__46565_47081 = G__47127;
i__46566_47082 = G__47128;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_47078);
}
}


var G__47132 = cljs.core.next(seq__46512_47070__$1);
var G__47133 = null;
var G__47134 = (0);
var G__47135 = (0);
seq__46512_47023 = G__47132;
chunk__46514_47024 = G__47133;
count__46515_47025 = G__47134;
i__46516_47026 = G__47135;
continue;
} else {
var G__47136 = cljs.core.next(seq__46512_47070__$1);
var G__47137 = null;
var G__47138 = (0);
var G__47139 = (0);
seq__46512_47023 = G__47136;
chunk__46514_47024 = G__47137;
count__46515_47025 = G__47138;
i__46516_47026 = G__47139;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4824__auto__ = [];
var len__4818__auto___47144 = arguments.length;
var i__4819__auto___47145 = (0);
while(true){
if((i__4819__auto___47145 < len__4818__auto___47144)){
args__4824__auto__.push((arguments[i__4819__auto___47145]));

var G__47146 = (i__4819__auto___47145 + (1));
i__4819__auto___47145 = G__47146;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq46581){
var G__46582 = cljs.core.first(seq46581);
var seq46581__$1 = cljs.core.next(seq46581);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46582,seq46581__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__46590 = arguments.length;
switch (G__46590) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4210__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4210__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4210__auto__;
}
})())){
var c__43466__auto___47150 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43467__auto__ = (function (){var switch__43333__auto__ = (function (state_46602){
var state_val_46603 = (state_46602[(1)]);
if((state_val_46603 === (1))){
var state_46602__$1 = state_46602;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46602__$1,(2),once_or_cleanup);
} else {
if((state_val_46603 === (2))){
var inst_46599 = (state_46602[(2)]);
var inst_46600 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_46602__$1 = (function (){var statearr_46610 = state_46602;
(statearr_46610[(7)] = inst_46599);

return statearr_46610;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_46602__$1,inst_46600);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__43334__auto__ = null;
var shadow$dom$state_machine__43334__auto____0 = (function (){
var statearr_46611 = [null,null,null,null,null,null,null,null];
(statearr_46611[(0)] = shadow$dom$state_machine__43334__auto__);

(statearr_46611[(1)] = (1));

return statearr_46611;
});
var shadow$dom$state_machine__43334__auto____1 = (function (state_46602){
while(true){
var ret_value__43335__auto__ = (function (){try{while(true){
var result__43336__auto__ = switch__43333__auto__(state_46602);
if(cljs.core.keyword_identical_QMARK_(result__43336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43336__auto__;
}
break;
}
}catch (e46612){var ex__43337__auto__ = e46612;
var statearr_46614_47152 = state_46602;
(statearr_46614_47152[(2)] = ex__43337__auto__);


if(cljs.core.seq((state_46602[(4)]))){
var statearr_46615_47153 = state_46602;
(statearr_46615_47153[(1)] = cljs.core.first((state_46602[(4)])));

} else {
throw ex__43337__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43335__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47158 = state_46602;
state_46602 = G__47158;
continue;
} else {
return ret_value__43335__auto__;
}
break;
}
});
shadow$dom$state_machine__43334__auto__ = function(state_46602){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__43334__auto____0.call(this);
case 1:
return shadow$dom$state_machine__43334__auto____1.call(this,state_46602);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__43334__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__43334__auto____0;
shadow$dom$state_machine__43334__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__43334__auto____1;
return shadow$dom$state_machine__43334__auto__;
})()
})();
var state__43468__auto__ = (function (){var statearr_46619 = f__43467__auto__();
(statearr_46619[(6)] = c__43466__auto___47150);

return statearr_46619;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43468__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
