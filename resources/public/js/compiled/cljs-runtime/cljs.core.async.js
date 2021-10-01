goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__43548 = arguments.length;
switch (G__43548) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43549 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43549 = (function (f,blockable,meta43550){
this.f = f;
this.blockable = blockable;
this.meta43550 = meta43550;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43549.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43551,meta43550__$1){
var self__ = this;
var _43551__$1 = this;
return (new cljs.core.async.t_cljs$core$async43549(self__.f,self__.blockable,meta43550__$1));
}));

(cljs.core.async.t_cljs$core$async43549.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43551){
var self__ = this;
var _43551__$1 = this;
return self__.meta43550;
}));

(cljs.core.async.t_cljs$core$async43549.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43549.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async43549.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async43549.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async43549.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta43550","meta43550",1982148208,null)], null);
}));

(cljs.core.async.t_cljs$core$async43549.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43549.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43549");

(cljs.core.async.t_cljs$core$async43549.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async43549");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43549.
 */
cljs.core.async.__GT_t_cljs$core$async43549 = (function cljs$core$async$__GT_t_cljs$core$async43549(f__$1,blockable__$1,meta43550){
return (new cljs.core.async.t_cljs$core$async43549(f__$1,blockable__$1,meta43550));
});

}

return (new cljs.core.async.t_cljs$core$async43549(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__43556 = arguments.length;
switch (G__43556) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__43558 = arguments.length;
switch (G__43558) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__43572 = arguments.length;
switch (G__43572) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_45824 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_45824) : fn1.call(null,val_45824));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_45824) : fn1.call(null,val_45824));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__43580 = arguments.length;
switch (G__43580) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4695__auto___45831 = n;
var x_45832 = (0);
while(true){
if((x_45832 < n__4695__auto___45831)){
(a[x_45832] = x_45832);

var G__45833 = (x_45832 + (1));
x_45832 = G__45833;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43591 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43591 = (function (flag,meta43592){
this.flag = flag;
this.meta43592 = meta43592;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43591.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43593,meta43592__$1){
var self__ = this;
var _43593__$1 = this;
return (new cljs.core.async.t_cljs$core$async43591(self__.flag,meta43592__$1));
}));

(cljs.core.async.t_cljs$core$async43591.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43593){
var self__ = this;
var _43593__$1 = this;
return self__.meta43592;
}));

(cljs.core.async.t_cljs$core$async43591.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43591.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async43591.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async43591.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async43591.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta43592","meta43592",318378063,null)], null);
}));

(cljs.core.async.t_cljs$core$async43591.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43591.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43591");

(cljs.core.async.t_cljs$core$async43591.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async43591");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43591.
 */
cljs.core.async.__GT_t_cljs$core$async43591 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async43591(flag__$1,meta43592){
return (new cljs.core.async.t_cljs$core$async43591(flag__$1,meta43592));
});

}

return (new cljs.core.async.t_cljs$core$async43591(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43597 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43597 = (function (flag,cb,meta43598){
this.flag = flag;
this.cb = cb;
this.meta43598 = meta43598;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43597.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43599,meta43598__$1){
var self__ = this;
var _43599__$1 = this;
return (new cljs.core.async.t_cljs$core$async43597(self__.flag,self__.cb,meta43598__$1));
}));

(cljs.core.async.t_cljs$core$async43597.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43599){
var self__ = this;
var _43599__$1 = this;
return self__.meta43598;
}));

(cljs.core.async.t_cljs$core$async43597.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43597.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async43597.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async43597.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async43597.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta43598","meta43598",1072595215,null)], null);
}));

(cljs.core.async.t_cljs$core$async43597.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43597.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43597");

(cljs.core.async.t_cljs$core$async43597.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async43597");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43597.
 */
cljs.core.async.__GT_t_cljs$core$async43597 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async43597(flag__$1,cb__$1,meta43598){
return (new cljs.core.async.t_cljs$core$async43597(flag__$1,cb__$1,meta43598));
});

}

return (new cljs.core.async.t_cljs$core$async43597(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__43603_SHARP_){
var G__43605 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__43603_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__43605) : fret.call(null,G__43605));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__43604_SHARP_){
var G__43606 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__43604_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__43606) : fret.call(null,G__43606));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4212__auto__ = wport;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return port;
}
})()], null));
} else {
var G__45851 = (i + (1));
i = G__45851;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4212__auto__ = ret;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4210__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4210__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4210__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___45854 = arguments.length;
var i__4819__auto___45855 = (0);
while(true){
if((i__4819__auto___45855 < len__4818__auto___45854)){
args__4824__auto__.push((arguments[i__4819__auto___45855]));

var G__45856 = (i__4819__auto___45855 + (1));
i__4819__auto___45855 = G__45856;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__43609){
var map__43610 = p__43609;
var map__43610__$1 = cljs.core.__destructure_map(map__43610);
var opts = map__43610__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq43607){
var G__43608 = cljs.core.first(seq43607);
var seq43607__$1 = cljs.core.next(seq43607);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43608,seq43607__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__43613 = arguments.length;
switch (G__43613) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__43466__auto___45860 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43467__auto__ = (function (){var switch__43333__auto__ = (function (state_43663){
var state_val_43664 = (state_43663[(1)]);
if((state_val_43664 === (7))){
var inst_43657 = (state_43663[(2)]);
var state_43663__$1 = state_43663;
var statearr_43665_45861 = state_43663__$1;
(statearr_43665_45861[(2)] = inst_43657);

(statearr_43665_45861[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43664 === (1))){
var state_43663__$1 = state_43663;
var statearr_43671_45862 = state_43663__$1;
(statearr_43671_45862[(2)] = null);

(statearr_43671_45862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43664 === (4))){
var inst_43639 = (state_43663[(7)]);
var inst_43639__$1 = (state_43663[(2)]);
var inst_43640 = (inst_43639__$1 == null);
var state_43663__$1 = (function (){var statearr_43688 = state_43663;
(statearr_43688[(7)] = inst_43639__$1);

return statearr_43688;
})();
if(cljs.core.truth_(inst_43640)){
var statearr_43689_45864 = state_43663__$1;
(statearr_43689_45864[(1)] = (5));

} else {
var statearr_43691_45865 = state_43663__$1;
(statearr_43691_45865[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43664 === (13))){
var state_43663__$1 = state_43663;
var statearr_43693_45867 = state_43663__$1;
(statearr_43693_45867[(2)] = null);

(statearr_43693_45867[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43664 === (6))){
var inst_43639 = (state_43663[(7)]);
var state_43663__$1 = state_43663;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43663__$1,(11),to,inst_43639);
} else {
if((state_val_43664 === (3))){
var inst_43661 = (state_43663[(2)]);
var state_43663__$1 = state_43663;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43663__$1,inst_43661);
} else {
if((state_val_43664 === (12))){
var state_43663__$1 = state_43663;
var statearr_43714_45868 = state_43663__$1;
(statearr_43714_45868[(2)] = null);

(statearr_43714_45868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43664 === (2))){
var state_43663__$1 = state_43663;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43663__$1,(4),from);
} else {
if((state_val_43664 === (11))){
var inst_43650 = (state_43663[(2)]);
var state_43663__$1 = state_43663;
if(cljs.core.truth_(inst_43650)){
var statearr_43724_45869 = state_43663__$1;
(statearr_43724_45869[(1)] = (12));

} else {
var statearr_43726_45870 = state_43663__$1;
(statearr_43726_45870[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43664 === (9))){
var state_43663__$1 = state_43663;
var statearr_43734_45871 = state_43663__$1;
(statearr_43734_45871[(2)] = null);

(statearr_43734_45871[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43664 === (5))){
var state_43663__$1 = state_43663;
if(cljs.core.truth_(close_QMARK_)){
var statearr_43739_45872 = state_43663__$1;
(statearr_43739_45872[(1)] = (8));

} else {
var statearr_43740_45873 = state_43663__$1;
(statearr_43740_45873[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43664 === (14))){
var inst_43655 = (state_43663[(2)]);
var state_43663__$1 = state_43663;
var statearr_43741_45874 = state_43663__$1;
(statearr_43741_45874[(2)] = inst_43655);

(statearr_43741_45874[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43664 === (10))){
var inst_43647 = (state_43663[(2)]);
var state_43663__$1 = state_43663;
var statearr_43742_45875 = state_43663__$1;
(statearr_43742_45875[(2)] = inst_43647);

(statearr_43742_45875[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43664 === (8))){
var inst_43644 = cljs.core.async.close_BANG_(to);
var state_43663__$1 = state_43663;
var statearr_43743_45876 = state_43663__$1;
(statearr_43743_45876[(2)] = inst_43644);

(statearr_43743_45876[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43334__auto__ = null;
var cljs$core$async$state_machine__43334__auto____0 = (function (){
var statearr_43745 = [null,null,null,null,null,null,null,null];
(statearr_43745[(0)] = cljs$core$async$state_machine__43334__auto__);

(statearr_43745[(1)] = (1));

return statearr_43745;
});
var cljs$core$async$state_machine__43334__auto____1 = (function (state_43663){
while(true){
var ret_value__43335__auto__ = (function (){try{while(true){
var result__43336__auto__ = switch__43333__auto__(state_43663);
if(cljs.core.keyword_identical_QMARK_(result__43336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43336__auto__;
}
break;
}
}catch (e43746){var ex__43337__auto__ = e43746;
var statearr_43747_45879 = state_43663;
(statearr_43747_45879[(2)] = ex__43337__auto__);


if(cljs.core.seq((state_43663[(4)]))){
var statearr_43749_45880 = state_43663;
(statearr_43749_45880[(1)] = cljs.core.first((state_43663[(4)])));

} else {
throw ex__43337__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43335__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45881 = state_43663;
state_43663 = G__45881;
continue;
} else {
return ret_value__43335__auto__;
}
break;
}
});
cljs$core$async$state_machine__43334__auto__ = function(state_43663){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43334__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43334__auto____1.call(this,state_43663);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43334__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43334__auto____0;
cljs$core$async$state_machine__43334__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43334__auto____1;
return cljs$core$async$state_machine__43334__auto__;
})()
})();
var state__43468__auto__ = (function (){var statearr_43752 = f__43467__auto__();
(statearr_43752[(6)] = c__43466__auto___45860);

return statearr_43752;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43468__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__43756){
var vec__43761 = p__43756;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43761,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43761,(1),null);
var job = vec__43761;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__43466__auto___45886 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43467__auto__ = (function (){var switch__43333__auto__ = (function (state_43774){
var state_val_43775 = (state_43774[(1)]);
if((state_val_43775 === (1))){
var state_43774__$1 = state_43774;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43774__$1,(2),res,v);
} else {
if((state_val_43775 === (2))){
var inst_43771 = (state_43774[(2)]);
var inst_43772 = cljs.core.async.close_BANG_(res);
var state_43774__$1 = (function (){var statearr_43784 = state_43774;
(statearr_43784[(7)] = inst_43771);

return statearr_43784;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_43774__$1,inst_43772);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43334__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43334__auto____0 = (function (){
var statearr_43787 = [null,null,null,null,null,null,null,null];
(statearr_43787[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43334__auto__);

(statearr_43787[(1)] = (1));

return statearr_43787;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43334__auto____1 = (function (state_43774){
while(true){
var ret_value__43335__auto__ = (function (){try{while(true){
var result__43336__auto__ = switch__43333__auto__(state_43774);
if(cljs.core.keyword_identical_QMARK_(result__43336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43336__auto__;
}
break;
}
}catch (e43796){var ex__43337__auto__ = e43796;
var statearr_43797_45887 = state_43774;
(statearr_43797_45887[(2)] = ex__43337__auto__);


if(cljs.core.seq((state_43774[(4)]))){
var statearr_43798_45889 = state_43774;
(statearr_43798_45889[(1)] = cljs.core.first((state_43774[(4)])));

} else {
throw ex__43337__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43335__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45891 = state_43774;
state_43774 = G__45891;
continue;
} else {
return ret_value__43335__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43334__auto__ = function(state_43774){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43334__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43334__auto____1.call(this,state_43774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43334__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43334__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43334__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43334__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43334__auto__;
})()
})();
var state__43468__auto__ = (function (){var statearr_43799 = f__43467__auto__();
(statearr_43799[(6)] = c__43466__auto___45886);

return statearr_43799;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43468__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__43800){
var vec__43801 = p__43800;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43801,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43801,(1),null);
var job = vec__43801;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4695__auto___45892 = n;
var __45893 = (0);
while(true){
if((__45893 < n__4695__auto___45892)){
var G__43804_45894 = type;
var G__43804_45895__$1 = (((G__43804_45894 instanceof cljs.core.Keyword))?G__43804_45894.fqn:null);
switch (G__43804_45895__$1) {
case "compute":
var c__43466__auto___45897 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__45893,c__43466__auto___45897,G__43804_45894,G__43804_45895__$1,n__4695__auto___45892,jobs,results,process,async){
return (function (){
var f__43467__auto__ = (function (){var switch__43333__auto__ = ((function (__45893,c__43466__auto___45897,G__43804_45894,G__43804_45895__$1,n__4695__auto___45892,jobs,results,process,async){
return (function (state_43817){
var state_val_43818 = (state_43817[(1)]);
if((state_val_43818 === (1))){
var state_43817__$1 = state_43817;
var statearr_43819_45898 = state_43817__$1;
(statearr_43819_45898[(2)] = null);

(statearr_43819_45898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43818 === (2))){
var state_43817__$1 = state_43817;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43817__$1,(4),jobs);
} else {
if((state_val_43818 === (3))){
var inst_43815 = (state_43817[(2)]);
var state_43817__$1 = state_43817;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43817__$1,inst_43815);
} else {
if((state_val_43818 === (4))){
var inst_43807 = (state_43817[(2)]);
var inst_43808 = process(inst_43807);
var state_43817__$1 = state_43817;
if(cljs.core.truth_(inst_43808)){
var statearr_43820_45899 = state_43817__$1;
(statearr_43820_45899[(1)] = (5));

} else {
var statearr_43821_45900 = state_43817__$1;
(statearr_43821_45900[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43818 === (5))){
var state_43817__$1 = state_43817;
var statearr_43822_45903 = state_43817__$1;
(statearr_43822_45903[(2)] = null);

(statearr_43822_45903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43818 === (6))){
var state_43817__$1 = state_43817;
var statearr_43827_45904 = state_43817__$1;
(statearr_43827_45904[(2)] = null);

(statearr_43827_45904[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43818 === (7))){
var inst_43813 = (state_43817[(2)]);
var state_43817__$1 = state_43817;
var statearr_43828_45905 = state_43817__$1;
(statearr_43828_45905[(2)] = inst_43813);

(statearr_43828_45905[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__45893,c__43466__auto___45897,G__43804_45894,G__43804_45895__$1,n__4695__auto___45892,jobs,results,process,async))
;
return ((function (__45893,switch__43333__auto__,c__43466__auto___45897,G__43804_45894,G__43804_45895__$1,n__4695__auto___45892,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43334__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43334__auto____0 = (function (){
var statearr_43830 = [null,null,null,null,null,null,null];
(statearr_43830[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43334__auto__);

(statearr_43830[(1)] = (1));

return statearr_43830;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43334__auto____1 = (function (state_43817){
while(true){
var ret_value__43335__auto__ = (function (){try{while(true){
var result__43336__auto__ = switch__43333__auto__(state_43817);
if(cljs.core.keyword_identical_QMARK_(result__43336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43336__auto__;
}
break;
}
}catch (e43831){var ex__43337__auto__ = e43831;
var statearr_43832_45906 = state_43817;
(statearr_43832_45906[(2)] = ex__43337__auto__);


if(cljs.core.seq((state_43817[(4)]))){
var statearr_43833_45907 = state_43817;
(statearr_43833_45907[(1)] = cljs.core.first((state_43817[(4)])));

} else {
throw ex__43337__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43335__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45908 = state_43817;
state_43817 = G__45908;
continue;
} else {
return ret_value__43335__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43334__auto__ = function(state_43817){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43334__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43334__auto____1.call(this,state_43817);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43334__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43334__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43334__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43334__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43334__auto__;
})()
;})(__45893,switch__43333__auto__,c__43466__auto___45897,G__43804_45894,G__43804_45895__$1,n__4695__auto___45892,jobs,results,process,async))
})();
var state__43468__auto__ = (function (){var statearr_43836 = f__43467__auto__();
(statearr_43836[(6)] = c__43466__auto___45897);

return statearr_43836;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43468__auto__);
});})(__45893,c__43466__auto___45897,G__43804_45894,G__43804_45895__$1,n__4695__auto___45892,jobs,results,process,async))
);


break;
case "async":
var c__43466__auto___45909 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__45893,c__43466__auto___45909,G__43804_45894,G__43804_45895__$1,n__4695__auto___45892,jobs,results,process,async){
return (function (){
var f__43467__auto__ = (function (){var switch__43333__auto__ = ((function (__45893,c__43466__auto___45909,G__43804_45894,G__43804_45895__$1,n__4695__auto___45892,jobs,results,process,async){
return (function (state_43849){
var state_val_43850 = (state_43849[(1)]);
if((state_val_43850 === (1))){
var state_43849__$1 = state_43849;
var statearr_43853_45914 = state_43849__$1;
(statearr_43853_45914[(2)] = null);

(statearr_43853_45914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43850 === (2))){
var state_43849__$1 = state_43849;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43849__$1,(4),jobs);
} else {
if((state_val_43850 === (3))){
var inst_43847 = (state_43849[(2)]);
var state_43849__$1 = state_43849;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43849__$1,inst_43847);
} else {
if((state_val_43850 === (4))){
var inst_43839 = (state_43849[(2)]);
var inst_43840 = async(inst_43839);
var state_43849__$1 = state_43849;
if(cljs.core.truth_(inst_43840)){
var statearr_43854_45920 = state_43849__$1;
(statearr_43854_45920[(1)] = (5));

} else {
var statearr_43855_45921 = state_43849__$1;
(statearr_43855_45921[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43850 === (5))){
var state_43849__$1 = state_43849;
var statearr_43856_45922 = state_43849__$1;
(statearr_43856_45922[(2)] = null);

(statearr_43856_45922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43850 === (6))){
var state_43849__$1 = state_43849;
var statearr_43858_45923 = state_43849__$1;
(statearr_43858_45923[(2)] = null);

(statearr_43858_45923[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43850 === (7))){
var inst_43845 = (state_43849[(2)]);
var state_43849__$1 = state_43849;
var statearr_43864_45924 = state_43849__$1;
(statearr_43864_45924[(2)] = inst_43845);

(statearr_43864_45924[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__45893,c__43466__auto___45909,G__43804_45894,G__43804_45895__$1,n__4695__auto___45892,jobs,results,process,async))
;
return ((function (__45893,switch__43333__auto__,c__43466__auto___45909,G__43804_45894,G__43804_45895__$1,n__4695__auto___45892,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43334__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43334__auto____0 = (function (){
var statearr_43869 = [null,null,null,null,null,null,null];
(statearr_43869[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43334__auto__);

(statearr_43869[(1)] = (1));

return statearr_43869;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43334__auto____1 = (function (state_43849){
while(true){
var ret_value__43335__auto__ = (function (){try{while(true){
var result__43336__auto__ = switch__43333__auto__(state_43849);
if(cljs.core.keyword_identical_QMARK_(result__43336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43336__auto__;
}
break;
}
}catch (e43872){var ex__43337__auto__ = e43872;
var statearr_43873_45925 = state_43849;
(statearr_43873_45925[(2)] = ex__43337__auto__);


if(cljs.core.seq((state_43849[(4)]))){
var statearr_43874_45926 = state_43849;
(statearr_43874_45926[(1)] = cljs.core.first((state_43849[(4)])));

} else {
throw ex__43337__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43335__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45928 = state_43849;
state_43849 = G__45928;
continue;
} else {
return ret_value__43335__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43334__auto__ = function(state_43849){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43334__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43334__auto____1.call(this,state_43849);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43334__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43334__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43334__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43334__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43334__auto__;
})()
;})(__45893,switch__43333__auto__,c__43466__auto___45909,G__43804_45894,G__43804_45895__$1,n__4695__auto___45892,jobs,results,process,async))
})();
var state__43468__auto__ = (function (){var statearr_43880 = f__43467__auto__();
(statearr_43880[(6)] = c__43466__auto___45909);

return statearr_43880;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43468__auto__);
});})(__45893,c__43466__auto___45909,G__43804_45894,G__43804_45895__$1,n__4695__auto___45892,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43804_45895__$1)].join('')));

}

var G__45929 = (__45893 + (1));
__45893 = G__45929;
continue;
} else {
}
break;
}

var c__43466__auto___45930 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43467__auto__ = (function (){var switch__43333__auto__ = (function (state_43904){
var state_val_43905 = (state_43904[(1)]);
if((state_val_43905 === (7))){
var inst_43900 = (state_43904[(2)]);
var state_43904__$1 = state_43904;
var statearr_43916_45935 = state_43904__$1;
(statearr_43916_45935[(2)] = inst_43900);

(statearr_43916_45935[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43905 === (1))){
var state_43904__$1 = state_43904;
var statearr_43917_45936 = state_43904__$1;
(statearr_43917_45936[(2)] = null);

(statearr_43917_45936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43905 === (4))){
var inst_43883 = (state_43904[(7)]);
var inst_43883__$1 = (state_43904[(2)]);
var inst_43884 = (inst_43883__$1 == null);
var state_43904__$1 = (function (){var statearr_43926 = state_43904;
(statearr_43926[(7)] = inst_43883__$1);

return statearr_43926;
})();
if(cljs.core.truth_(inst_43884)){
var statearr_43927_45938 = state_43904__$1;
(statearr_43927_45938[(1)] = (5));

} else {
var statearr_43928_45940 = state_43904__$1;
(statearr_43928_45940[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43905 === (6))){
var inst_43888 = (state_43904[(8)]);
var inst_43883 = (state_43904[(7)]);
var inst_43888__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_43889 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43892 = [inst_43883,inst_43888__$1];
var inst_43893 = (new cljs.core.PersistentVector(null,2,(5),inst_43889,inst_43892,null));
var state_43904__$1 = (function (){var statearr_43933 = state_43904;
(statearr_43933[(8)] = inst_43888__$1);

return statearr_43933;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43904__$1,(8),jobs,inst_43893);
} else {
if((state_val_43905 === (3))){
var inst_43902 = (state_43904[(2)]);
var state_43904__$1 = state_43904;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43904__$1,inst_43902);
} else {
if((state_val_43905 === (2))){
var state_43904__$1 = state_43904;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43904__$1,(4),from);
} else {
if((state_val_43905 === (9))){
var inst_43897 = (state_43904[(2)]);
var state_43904__$1 = (function (){var statearr_43945 = state_43904;
(statearr_43945[(9)] = inst_43897);

return statearr_43945;
})();
var statearr_43946_45944 = state_43904__$1;
(statearr_43946_45944[(2)] = null);

(statearr_43946_45944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43905 === (5))){
var inst_43886 = cljs.core.async.close_BANG_(jobs);
var state_43904__$1 = state_43904;
var statearr_43947_45945 = state_43904__$1;
(statearr_43947_45945[(2)] = inst_43886);

(statearr_43947_45945[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43905 === (8))){
var inst_43888 = (state_43904[(8)]);
var inst_43895 = (state_43904[(2)]);
var state_43904__$1 = (function (){var statearr_43953 = state_43904;
(statearr_43953[(10)] = inst_43895);

return statearr_43953;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43904__$1,(9),results,inst_43888);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43334__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43334__auto____0 = (function (){
var statearr_43954 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43954[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43334__auto__);

(statearr_43954[(1)] = (1));

return statearr_43954;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43334__auto____1 = (function (state_43904){
while(true){
var ret_value__43335__auto__ = (function (){try{while(true){
var result__43336__auto__ = switch__43333__auto__(state_43904);
if(cljs.core.keyword_identical_QMARK_(result__43336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43336__auto__;
}
break;
}
}catch (e43956){var ex__43337__auto__ = e43956;
var statearr_43957_45946 = state_43904;
(statearr_43957_45946[(2)] = ex__43337__auto__);


if(cljs.core.seq((state_43904[(4)]))){
var statearr_43958_45947 = state_43904;
(statearr_43958_45947[(1)] = cljs.core.first((state_43904[(4)])));

} else {
throw ex__43337__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43335__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45948 = state_43904;
state_43904 = G__45948;
continue;
} else {
return ret_value__43335__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43334__auto__ = function(state_43904){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43334__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43334__auto____1.call(this,state_43904);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43334__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43334__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43334__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43334__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43334__auto__;
})()
})();
var state__43468__auto__ = (function (){var statearr_43959 = f__43467__auto__();
(statearr_43959[(6)] = c__43466__auto___45930);

return statearr_43959;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43468__auto__);
}));


var c__43466__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43467__auto__ = (function (){var switch__43333__auto__ = (function (state_43998){
var state_val_43999 = (state_43998[(1)]);
if((state_val_43999 === (7))){
var inst_43994 = (state_43998[(2)]);
var state_43998__$1 = state_43998;
var statearr_44001_45949 = state_43998__$1;
(statearr_44001_45949[(2)] = inst_43994);

(statearr_44001_45949[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43999 === (20))){
var state_43998__$1 = state_43998;
var statearr_44002_45950 = state_43998__$1;
(statearr_44002_45950[(2)] = null);

(statearr_44002_45950[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43999 === (1))){
var state_43998__$1 = state_43998;
var statearr_44003_45951 = state_43998__$1;
(statearr_44003_45951[(2)] = null);

(statearr_44003_45951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43999 === (4))){
var inst_43963 = (state_43998[(7)]);
var inst_43963__$1 = (state_43998[(2)]);
var inst_43964 = (inst_43963__$1 == null);
var state_43998__$1 = (function (){var statearr_44007 = state_43998;
(statearr_44007[(7)] = inst_43963__$1);

return statearr_44007;
})();
if(cljs.core.truth_(inst_43964)){
var statearr_44008_45956 = state_43998__$1;
(statearr_44008_45956[(1)] = (5));

} else {
var statearr_44009_45960 = state_43998__$1;
(statearr_44009_45960[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43999 === (15))){
var inst_43976 = (state_43998[(8)]);
var state_43998__$1 = state_43998;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43998__$1,(18),to,inst_43976);
} else {
if((state_val_43999 === (21))){
var inst_43989 = (state_43998[(2)]);
var state_43998__$1 = state_43998;
var statearr_44018_45961 = state_43998__$1;
(statearr_44018_45961[(2)] = inst_43989);

(statearr_44018_45961[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43999 === (13))){
var inst_43991 = (state_43998[(2)]);
var state_43998__$1 = (function (){var statearr_44031 = state_43998;
(statearr_44031[(9)] = inst_43991);

return statearr_44031;
})();
var statearr_44032_45962 = state_43998__$1;
(statearr_44032_45962[(2)] = null);

(statearr_44032_45962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43999 === (6))){
var inst_43963 = (state_43998[(7)]);
var state_43998__$1 = state_43998;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43998__$1,(11),inst_43963);
} else {
if((state_val_43999 === (17))){
var inst_43984 = (state_43998[(2)]);
var state_43998__$1 = state_43998;
if(cljs.core.truth_(inst_43984)){
var statearr_44033_45966 = state_43998__$1;
(statearr_44033_45966[(1)] = (19));

} else {
var statearr_44035_45967 = state_43998__$1;
(statearr_44035_45967[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43999 === (3))){
var inst_43996 = (state_43998[(2)]);
var state_43998__$1 = state_43998;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43998__$1,inst_43996);
} else {
if((state_val_43999 === (12))){
var inst_43973 = (state_43998[(10)]);
var state_43998__$1 = state_43998;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43998__$1,(14),inst_43973);
} else {
if((state_val_43999 === (2))){
var state_43998__$1 = state_43998;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43998__$1,(4),results);
} else {
if((state_val_43999 === (19))){
var state_43998__$1 = state_43998;
var statearr_44041_45971 = state_43998__$1;
(statearr_44041_45971[(2)] = null);

(statearr_44041_45971[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43999 === (11))){
var inst_43973 = (state_43998[(2)]);
var state_43998__$1 = (function (){var statearr_44042 = state_43998;
(statearr_44042[(10)] = inst_43973);

return statearr_44042;
})();
var statearr_44043_45972 = state_43998__$1;
(statearr_44043_45972[(2)] = null);

(statearr_44043_45972[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43999 === (9))){
var state_43998__$1 = state_43998;
var statearr_44045_45973 = state_43998__$1;
(statearr_44045_45973[(2)] = null);

(statearr_44045_45973[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43999 === (5))){
var state_43998__$1 = state_43998;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44047_45977 = state_43998__$1;
(statearr_44047_45977[(1)] = (8));

} else {
var statearr_44048_45978 = state_43998__$1;
(statearr_44048_45978[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43999 === (14))){
var inst_43978 = (state_43998[(11)]);
var inst_43976 = (state_43998[(8)]);
var inst_43976__$1 = (state_43998[(2)]);
var inst_43977 = (inst_43976__$1 == null);
var inst_43978__$1 = cljs.core.not(inst_43977);
var state_43998__$1 = (function (){var statearr_44051 = state_43998;
(statearr_44051[(11)] = inst_43978__$1);

(statearr_44051[(8)] = inst_43976__$1);

return statearr_44051;
})();
if(inst_43978__$1){
var statearr_44052_45982 = state_43998__$1;
(statearr_44052_45982[(1)] = (15));

} else {
var statearr_44054_45983 = state_43998__$1;
(statearr_44054_45983[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43999 === (16))){
var inst_43978 = (state_43998[(11)]);
var state_43998__$1 = state_43998;
var statearr_44056_45985 = state_43998__$1;
(statearr_44056_45985[(2)] = inst_43978);

(statearr_44056_45985[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43999 === (10))){
var inst_43970 = (state_43998[(2)]);
var state_43998__$1 = state_43998;
var statearr_44057_45989 = state_43998__$1;
(statearr_44057_45989[(2)] = inst_43970);

(statearr_44057_45989[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43999 === (18))){
var inst_43981 = (state_43998[(2)]);
var state_43998__$1 = state_43998;
var statearr_44061_45990 = state_43998__$1;
(statearr_44061_45990[(2)] = inst_43981);

(statearr_44061_45990[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43999 === (8))){
var inst_43967 = cljs.core.async.close_BANG_(to);
var state_43998__$1 = state_43998;
var statearr_44063_45991 = state_43998__$1;
(statearr_44063_45991[(2)] = inst_43967);

(statearr_44063_45991[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43334__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43334__auto____0 = (function (){
var statearr_44064 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44064[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43334__auto__);

(statearr_44064[(1)] = (1));

return statearr_44064;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43334__auto____1 = (function (state_43998){
while(true){
var ret_value__43335__auto__ = (function (){try{while(true){
var result__43336__auto__ = switch__43333__auto__(state_43998);
if(cljs.core.keyword_identical_QMARK_(result__43336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43336__auto__;
}
break;
}
}catch (e44068){var ex__43337__auto__ = e44068;
var statearr_44069_45992 = state_43998;
(statearr_44069_45992[(2)] = ex__43337__auto__);


if(cljs.core.seq((state_43998[(4)]))){
var statearr_44070_45993 = state_43998;
(statearr_44070_45993[(1)] = cljs.core.first((state_43998[(4)])));

} else {
throw ex__43337__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43335__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45994 = state_43998;
state_43998 = G__45994;
continue;
} else {
return ret_value__43335__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43334__auto__ = function(state_43998){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43334__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43334__auto____1.call(this,state_43998);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43334__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43334__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43334__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43334__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43334__auto__;
})()
})();
var state__43468__auto__ = (function (){var statearr_44073 = f__43467__auto__();
(statearr_44073[(6)] = c__43466__auto__);

return statearr_44073;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43468__auto__);
}));

return c__43466__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__44087 = arguments.length;
switch (G__44087) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__44102 = arguments.length;
switch (G__44102) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__44131 = arguments.length;
switch (G__44131) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__43466__auto___46009 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43467__auto__ = (function (){var switch__43333__auto__ = (function (state_44166){
var state_val_44167 = (state_44166[(1)]);
if((state_val_44167 === (7))){
var inst_44162 = (state_44166[(2)]);
var state_44166__$1 = state_44166;
var statearr_44168_46013 = state_44166__$1;
(statearr_44168_46013[(2)] = inst_44162);

(statearr_44168_46013[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44167 === (1))){
var state_44166__$1 = state_44166;
var statearr_44169_46014 = state_44166__$1;
(statearr_44169_46014[(2)] = null);

(statearr_44169_46014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44167 === (4))){
var inst_44143 = (state_44166[(7)]);
var inst_44143__$1 = (state_44166[(2)]);
var inst_44144 = (inst_44143__$1 == null);
var state_44166__$1 = (function (){var statearr_44170 = state_44166;
(statearr_44170[(7)] = inst_44143__$1);

return statearr_44170;
})();
if(cljs.core.truth_(inst_44144)){
var statearr_44171_46015 = state_44166__$1;
(statearr_44171_46015[(1)] = (5));

} else {
var statearr_44172_46016 = state_44166__$1;
(statearr_44172_46016[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44167 === (13))){
var state_44166__$1 = state_44166;
var statearr_44177_46019 = state_44166__$1;
(statearr_44177_46019[(2)] = null);

(statearr_44177_46019[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44167 === (6))){
var inst_44143 = (state_44166[(7)]);
var inst_44149 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_44143) : p.call(null,inst_44143));
var state_44166__$1 = state_44166;
if(cljs.core.truth_(inst_44149)){
var statearr_44183_46020 = state_44166__$1;
(statearr_44183_46020[(1)] = (9));

} else {
var statearr_44191_46024 = state_44166__$1;
(statearr_44191_46024[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44167 === (3))){
var inst_44164 = (state_44166[(2)]);
var state_44166__$1 = state_44166;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44166__$1,inst_44164);
} else {
if((state_val_44167 === (12))){
var state_44166__$1 = state_44166;
var statearr_44202_46025 = state_44166__$1;
(statearr_44202_46025[(2)] = null);

(statearr_44202_46025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44167 === (2))){
var state_44166__$1 = state_44166;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44166__$1,(4),ch);
} else {
if((state_val_44167 === (11))){
var inst_44143 = (state_44166[(7)]);
var inst_44153 = (state_44166[(2)]);
var state_44166__$1 = state_44166;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44166__$1,(8),inst_44153,inst_44143);
} else {
if((state_val_44167 === (9))){
var state_44166__$1 = state_44166;
var statearr_44208_46026 = state_44166__$1;
(statearr_44208_46026[(2)] = tc);

(statearr_44208_46026[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44167 === (5))){
var inst_44146 = cljs.core.async.close_BANG_(tc);
var inst_44147 = cljs.core.async.close_BANG_(fc);
var state_44166__$1 = (function (){var statearr_44215 = state_44166;
(statearr_44215[(8)] = inst_44146);

return statearr_44215;
})();
var statearr_44216_46027 = state_44166__$1;
(statearr_44216_46027[(2)] = inst_44147);

(statearr_44216_46027[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44167 === (14))){
var inst_44160 = (state_44166[(2)]);
var state_44166__$1 = state_44166;
var statearr_44224_46029 = state_44166__$1;
(statearr_44224_46029[(2)] = inst_44160);

(statearr_44224_46029[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44167 === (10))){
var state_44166__$1 = state_44166;
var statearr_44236_46034 = state_44166__$1;
(statearr_44236_46034[(2)] = fc);

(statearr_44236_46034[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44167 === (8))){
var inst_44155 = (state_44166[(2)]);
var state_44166__$1 = state_44166;
if(cljs.core.truth_(inst_44155)){
var statearr_44242_46035 = state_44166__$1;
(statearr_44242_46035[(1)] = (12));

} else {
var statearr_44246_46037 = state_44166__$1;
(statearr_44246_46037[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43334__auto__ = null;
var cljs$core$async$state_machine__43334__auto____0 = (function (){
var statearr_44249 = [null,null,null,null,null,null,null,null,null];
(statearr_44249[(0)] = cljs$core$async$state_machine__43334__auto__);

(statearr_44249[(1)] = (1));

return statearr_44249;
});
var cljs$core$async$state_machine__43334__auto____1 = (function (state_44166){
while(true){
var ret_value__43335__auto__ = (function (){try{while(true){
var result__43336__auto__ = switch__43333__auto__(state_44166);
if(cljs.core.keyword_identical_QMARK_(result__43336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43336__auto__;
}
break;
}
}catch (e44254){var ex__43337__auto__ = e44254;
var statearr_44255_46038 = state_44166;
(statearr_44255_46038[(2)] = ex__43337__auto__);


if(cljs.core.seq((state_44166[(4)]))){
var statearr_44260_46039 = state_44166;
(statearr_44260_46039[(1)] = cljs.core.first((state_44166[(4)])));

} else {
throw ex__43337__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43335__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46040 = state_44166;
state_44166 = G__46040;
continue;
} else {
return ret_value__43335__auto__;
}
break;
}
});
cljs$core$async$state_machine__43334__auto__ = function(state_44166){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43334__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43334__auto____1.call(this,state_44166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43334__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43334__auto____0;
cljs$core$async$state_machine__43334__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43334__auto____1;
return cljs$core$async$state_machine__43334__auto__;
})()
})();
var state__43468__auto__ = (function (){var statearr_44267 = f__43467__auto__();
(statearr_44267[(6)] = c__43466__auto___46009);

return statearr_44267;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43468__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__43466__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43467__auto__ = (function (){var switch__43333__auto__ = (function (state_44291){
var state_val_44292 = (state_44291[(1)]);
if((state_val_44292 === (7))){
var inst_44287 = (state_44291[(2)]);
var state_44291__$1 = state_44291;
var statearr_44294_46042 = state_44291__$1;
(statearr_44294_46042[(2)] = inst_44287);

(statearr_44294_46042[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44292 === (1))){
var inst_44270 = init;
var inst_44271 = inst_44270;
var state_44291__$1 = (function (){var statearr_44296 = state_44291;
(statearr_44296[(7)] = inst_44271);

return statearr_44296;
})();
var statearr_44297_46043 = state_44291__$1;
(statearr_44297_46043[(2)] = null);

(statearr_44297_46043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44292 === (4))){
var inst_44274 = (state_44291[(8)]);
var inst_44274__$1 = (state_44291[(2)]);
var inst_44275 = (inst_44274__$1 == null);
var state_44291__$1 = (function (){var statearr_44301 = state_44291;
(statearr_44301[(8)] = inst_44274__$1);

return statearr_44301;
})();
if(cljs.core.truth_(inst_44275)){
var statearr_44302_46048 = state_44291__$1;
(statearr_44302_46048[(1)] = (5));

} else {
var statearr_44303_46049 = state_44291__$1;
(statearr_44303_46049[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44292 === (6))){
var inst_44271 = (state_44291[(7)]);
var inst_44274 = (state_44291[(8)]);
var inst_44278 = (state_44291[(9)]);
var inst_44278__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_44271,inst_44274) : f.call(null,inst_44271,inst_44274));
var inst_44279 = cljs.core.reduced_QMARK_(inst_44278__$1);
var state_44291__$1 = (function (){var statearr_44304 = state_44291;
(statearr_44304[(9)] = inst_44278__$1);

return statearr_44304;
})();
if(inst_44279){
var statearr_44305_46052 = state_44291__$1;
(statearr_44305_46052[(1)] = (8));

} else {
var statearr_44306_46053 = state_44291__$1;
(statearr_44306_46053[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44292 === (3))){
var inst_44289 = (state_44291[(2)]);
var state_44291__$1 = state_44291;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44291__$1,inst_44289);
} else {
if((state_val_44292 === (2))){
var state_44291__$1 = state_44291;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44291__$1,(4),ch);
} else {
if((state_val_44292 === (9))){
var inst_44278 = (state_44291[(9)]);
var inst_44271 = inst_44278;
var state_44291__$1 = (function (){var statearr_44307 = state_44291;
(statearr_44307[(7)] = inst_44271);

return statearr_44307;
})();
var statearr_44308_46055 = state_44291__$1;
(statearr_44308_46055[(2)] = null);

(statearr_44308_46055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44292 === (5))){
var inst_44271 = (state_44291[(7)]);
var state_44291__$1 = state_44291;
var statearr_44310_46056 = state_44291__$1;
(statearr_44310_46056[(2)] = inst_44271);

(statearr_44310_46056[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44292 === (10))){
var inst_44285 = (state_44291[(2)]);
var state_44291__$1 = state_44291;
var statearr_44311_46057 = state_44291__$1;
(statearr_44311_46057[(2)] = inst_44285);

(statearr_44311_46057[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44292 === (8))){
var inst_44278 = (state_44291[(9)]);
var inst_44281 = cljs.core.deref(inst_44278);
var state_44291__$1 = state_44291;
var statearr_44312_46058 = state_44291__$1;
(statearr_44312_46058[(2)] = inst_44281);

(statearr_44312_46058[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__43334__auto__ = null;
var cljs$core$async$reduce_$_state_machine__43334__auto____0 = (function (){
var statearr_44313 = [null,null,null,null,null,null,null,null,null,null];
(statearr_44313[(0)] = cljs$core$async$reduce_$_state_machine__43334__auto__);

(statearr_44313[(1)] = (1));

return statearr_44313;
});
var cljs$core$async$reduce_$_state_machine__43334__auto____1 = (function (state_44291){
while(true){
var ret_value__43335__auto__ = (function (){try{while(true){
var result__43336__auto__ = switch__43333__auto__(state_44291);
if(cljs.core.keyword_identical_QMARK_(result__43336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43336__auto__;
}
break;
}
}catch (e44315){var ex__43337__auto__ = e44315;
var statearr_44316_46059 = state_44291;
(statearr_44316_46059[(2)] = ex__43337__auto__);


if(cljs.core.seq((state_44291[(4)]))){
var statearr_44317_46060 = state_44291;
(statearr_44317_46060[(1)] = cljs.core.first((state_44291[(4)])));

} else {
throw ex__43337__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43335__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46061 = state_44291;
state_44291 = G__46061;
continue;
} else {
return ret_value__43335__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__43334__auto__ = function(state_44291){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__43334__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__43334__auto____1.call(this,state_44291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__43334__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__43334__auto____0;
cljs$core$async$reduce_$_state_machine__43334__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__43334__auto____1;
return cljs$core$async$reduce_$_state_machine__43334__auto__;
})()
})();
var state__43468__auto__ = (function (){var statearr_44322 = f__43467__auto__();
(statearr_44322[(6)] = c__43466__auto__);

return statearr_44322;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43468__auto__);
}));

return c__43466__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__43466__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43467__auto__ = (function (){var switch__43333__auto__ = (function (state_44335){
var state_val_44336 = (state_44335[(1)]);
if((state_val_44336 === (1))){
var inst_44330 = cljs.core.async.reduce(f__$1,init,ch);
var state_44335__$1 = state_44335;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44335__$1,(2),inst_44330);
} else {
if((state_val_44336 === (2))){
var inst_44332 = (state_44335[(2)]);
var inst_44333 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_44332) : f__$1.call(null,inst_44332));
var state_44335__$1 = state_44335;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44335__$1,inst_44333);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__43334__auto__ = null;
var cljs$core$async$transduce_$_state_machine__43334__auto____0 = (function (){
var statearr_44341 = [null,null,null,null,null,null,null];
(statearr_44341[(0)] = cljs$core$async$transduce_$_state_machine__43334__auto__);

(statearr_44341[(1)] = (1));

return statearr_44341;
});
var cljs$core$async$transduce_$_state_machine__43334__auto____1 = (function (state_44335){
while(true){
var ret_value__43335__auto__ = (function (){try{while(true){
var result__43336__auto__ = switch__43333__auto__(state_44335);
if(cljs.core.keyword_identical_QMARK_(result__43336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43336__auto__;
}
break;
}
}catch (e44342){var ex__43337__auto__ = e44342;
var statearr_44343_46062 = state_44335;
(statearr_44343_46062[(2)] = ex__43337__auto__);


if(cljs.core.seq((state_44335[(4)]))){
var statearr_44344_46064 = state_44335;
(statearr_44344_46064[(1)] = cljs.core.first((state_44335[(4)])));

} else {
throw ex__43337__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43335__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46066 = state_44335;
state_44335 = G__46066;
continue;
} else {
return ret_value__43335__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__43334__auto__ = function(state_44335){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__43334__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__43334__auto____1.call(this,state_44335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__43334__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__43334__auto____0;
cljs$core$async$transduce_$_state_machine__43334__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__43334__auto____1;
return cljs$core$async$transduce_$_state_machine__43334__auto__;
})()
})();
var state__43468__auto__ = (function (){var statearr_44347 = f__43467__auto__();
(statearr_44347[(6)] = c__43466__auto__);

return statearr_44347;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43468__auto__);
}));

return c__43466__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__44349 = arguments.length;
switch (G__44349) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__43466__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43467__auto__ = (function (){var switch__43333__auto__ = (function (state_44375){
var state_val_44377 = (state_44375[(1)]);
if((state_val_44377 === (7))){
var inst_44357 = (state_44375[(2)]);
var state_44375__$1 = state_44375;
var statearr_44381_46072 = state_44375__$1;
(statearr_44381_46072[(2)] = inst_44357);

(statearr_44381_46072[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44377 === (1))){
var inst_44351 = cljs.core.seq(coll);
var inst_44352 = inst_44351;
var state_44375__$1 = (function (){var statearr_44382 = state_44375;
(statearr_44382[(7)] = inst_44352);

return statearr_44382;
})();
var statearr_44384_46074 = state_44375__$1;
(statearr_44384_46074[(2)] = null);

(statearr_44384_46074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44377 === (4))){
var inst_44352 = (state_44375[(7)]);
var inst_44355 = cljs.core.first(inst_44352);
var state_44375__$1 = state_44375;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44375__$1,(7),ch,inst_44355);
} else {
if((state_val_44377 === (13))){
var inst_44369 = (state_44375[(2)]);
var state_44375__$1 = state_44375;
var statearr_44386_46079 = state_44375__$1;
(statearr_44386_46079[(2)] = inst_44369);

(statearr_44386_46079[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44377 === (6))){
var inst_44360 = (state_44375[(2)]);
var state_44375__$1 = state_44375;
if(cljs.core.truth_(inst_44360)){
var statearr_44387_46080 = state_44375__$1;
(statearr_44387_46080[(1)] = (8));

} else {
var statearr_44389_46081 = state_44375__$1;
(statearr_44389_46081[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44377 === (3))){
var inst_44373 = (state_44375[(2)]);
var state_44375__$1 = state_44375;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44375__$1,inst_44373);
} else {
if((state_val_44377 === (12))){
var state_44375__$1 = state_44375;
var statearr_44391_46082 = state_44375__$1;
(statearr_44391_46082[(2)] = null);

(statearr_44391_46082[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44377 === (2))){
var inst_44352 = (state_44375[(7)]);
var state_44375__$1 = state_44375;
if(cljs.core.truth_(inst_44352)){
var statearr_44392_46083 = state_44375__$1;
(statearr_44392_46083[(1)] = (4));

} else {
var statearr_44395_46084 = state_44375__$1;
(statearr_44395_46084[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44377 === (11))){
var inst_44366 = cljs.core.async.close_BANG_(ch);
var state_44375__$1 = state_44375;
var statearr_44396_46085 = state_44375__$1;
(statearr_44396_46085[(2)] = inst_44366);

(statearr_44396_46085[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44377 === (9))){
var state_44375__$1 = state_44375;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44399_46086 = state_44375__$1;
(statearr_44399_46086[(1)] = (11));

} else {
var statearr_44400_46087 = state_44375__$1;
(statearr_44400_46087[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44377 === (5))){
var inst_44352 = (state_44375[(7)]);
var state_44375__$1 = state_44375;
var statearr_44403_46088 = state_44375__$1;
(statearr_44403_46088[(2)] = inst_44352);

(statearr_44403_46088[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44377 === (10))){
var inst_44371 = (state_44375[(2)]);
var state_44375__$1 = state_44375;
var statearr_44404_46089 = state_44375__$1;
(statearr_44404_46089[(2)] = inst_44371);

(statearr_44404_46089[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44377 === (8))){
var inst_44352 = (state_44375[(7)]);
var inst_44362 = cljs.core.next(inst_44352);
var inst_44352__$1 = inst_44362;
var state_44375__$1 = (function (){var statearr_44405 = state_44375;
(statearr_44405[(7)] = inst_44352__$1);

return statearr_44405;
})();
var statearr_44406_46094 = state_44375__$1;
(statearr_44406_46094[(2)] = null);

(statearr_44406_46094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43334__auto__ = null;
var cljs$core$async$state_machine__43334__auto____0 = (function (){
var statearr_44407 = [null,null,null,null,null,null,null,null];
(statearr_44407[(0)] = cljs$core$async$state_machine__43334__auto__);

(statearr_44407[(1)] = (1));

return statearr_44407;
});
var cljs$core$async$state_machine__43334__auto____1 = (function (state_44375){
while(true){
var ret_value__43335__auto__ = (function (){try{while(true){
var result__43336__auto__ = switch__43333__auto__(state_44375);
if(cljs.core.keyword_identical_QMARK_(result__43336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43336__auto__;
}
break;
}
}catch (e44410){var ex__43337__auto__ = e44410;
var statearr_44411_46096 = state_44375;
(statearr_44411_46096[(2)] = ex__43337__auto__);


if(cljs.core.seq((state_44375[(4)]))){
var statearr_44412_46097 = state_44375;
(statearr_44412_46097[(1)] = cljs.core.first((state_44375[(4)])));

} else {
throw ex__43337__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43335__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46100 = state_44375;
state_44375 = G__46100;
continue;
} else {
return ret_value__43335__auto__;
}
break;
}
});
cljs$core$async$state_machine__43334__auto__ = function(state_44375){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43334__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43334__auto____1.call(this,state_44375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43334__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43334__auto____0;
cljs$core$async$state_machine__43334__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43334__auto____1;
return cljs$core$async$state_machine__43334__auto__;
})()
})();
var state__43468__auto__ = (function (){var statearr_44415 = f__43467__auto__();
(statearr_44415[(6)] = c__43466__auto__);

return statearr_44415;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43468__auto__);
}));

return c__43466__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__44419 = arguments.length;
switch (G__44419) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_46113 = (function (_){
var x__4509__auto__ = (((_ == null))?null:_);
var m__4510__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4510__auto__.call(null,_));
} else {
var m__4508__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4508__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_46113(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_46117 = (function (m,ch,close_QMARK_){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4510__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4508__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4508__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_46117(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_46125 = (function (m,ch){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4510__auto__.call(null,m,ch));
} else {
var m__4508__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4508__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_46125(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_46132 = (function (m){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4510__auto__.call(null,m));
} else {
var m__4508__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4508__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_46132(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44433 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44433 = (function (ch,cs,meta44434){
this.ch = ch;
this.cs = cs;
this.meta44434 = meta44434;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44433.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44435,meta44434__$1){
var self__ = this;
var _44435__$1 = this;
return (new cljs.core.async.t_cljs$core$async44433(self__.ch,self__.cs,meta44434__$1));
}));

(cljs.core.async.t_cljs$core$async44433.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44435){
var self__ = this;
var _44435__$1 = this;
return self__.meta44434;
}));

(cljs.core.async.t_cljs$core$async44433.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44433.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async44433.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44433.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async44433.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async44433.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async44433.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta44434","meta44434",-1250757555,null)], null);
}));

(cljs.core.async.t_cljs$core$async44433.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44433.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44433");

(cljs.core.async.t_cljs$core$async44433.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async44433");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44433.
 */
cljs.core.async.__GT_t_cljs$core$async44433 = (function cljs$core$async$mult_$___GT_t_cljs$core$async44433(ch__$1,cs__$1,meta44434){
return (new cljs.core.async.t_cljs$core$async44433(ch__$1,cs__$1,meta44434));
});

}

return (new cljs.core.async.t_cljs$core$async44433(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__43466__auto___46139 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43467__auto__ = (function (){var switch__43333__auto__ = (function (state_44586){
var state_val_44587 = (state_44586[(1)]);
if((state_val_44587 === (7))){
var inst_44580 = (state_44586[(2)]);
var state_44586__$1 = state_44586;
var statearr_44592_46140 = state_44586__$1;
(statearr_44592_46140[(2)] = inst_44580);

(statearr_44592_46140[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44587 === (20))){
var inst_44478 = (state_44586[(7)]);
var inst_44491 = cljs.core.first(inst_44478);
var inst_44492 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44491,(0),null);
var inst_44493 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44491,(1),null);
var state_44586__$1 = (function (){var statearr_44593 = state_44586;
(statearr_44593[(8)] = inst_44492);

return statearr_44593;
})();
if(cljs.core.truth_(inst_44493)){
var statearr_44594_46141 = state_44586__$1;
(statearr_44594_46141[(1)] = (22));

} else {
var statearr_44595_46142 = state_44586__$1;
(statearr_44595_46142[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44587 === (27))){
var inst_44532 = (state_44586[(9)]);
var inst_44523 = (state_44586[(10)]);
var inst_44525 = (state_44586[(11)]);
var inst_44446 = (state_44586[(12)]);
var inst_44532__$1 = cljs.core._nth(inst_44523,inst_44525);
var inst_44533 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_44532__$1,inst_44446,done);
var state_44586__$1 = (function (){var statearr_44599 = state_44586;
(statearr_44599[(9)] = inst_44532__$1);

return statearr_44599;
})();
if(cljs.core.truth_(inst_44533)){
var statearr_44601_46143 = state_44586__$1;
(statearr_44601_46143[(1)] = (30));

} else {
var statearr_44602_46144 = state_44586__$1;
(statearr_44602_46144[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44587 === (1))){
var state_44586__$1 = state_44586;
var statearr_44603_46145 = state_44586__$1;
(statearr_44603_46145[(2)] = null);

(statearr_44603_46145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44587 === (24))){
var inst_44478 = (state_44586[(7)]);
var inst_44499 = (state_44586[(2)]);
var inst_44501 = cljs.core.next(inst_44478);
var inst_44455 = inst_44501;
var inst_44456 = null;
var inst_44457 = (0);
var inst_44458 = (0);
var state_44586__$1 = (function (){var statearr_44604 = state_44586;
(statearr_44604[(13)] = inst_44456);

(statearr_44604[(14)] = inst_44499);

(statearr_44604[(15)] = inst_44455);

(statearr_44604[(16)] = inst_44457);

(statearr_44604[(17)] = inst_44458);

return statearr_44604;
})();
var statearr_44606_46146 = state_44586__$1;
(statearr_44606_46146[(2)] = null);

(statearr_44606_46146[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44587 === (39))){
var state_44586__$1 = state_44586;
var statearr_44613_46147 = state_44586__$1;
(statearr_44613_46147[(2)] = null);

(statearr_44613_46147[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44587 === (4))){
var inst_44446 = (state_44586[(12)]);
var inst_44446__$1 = (state_44586[(2)]);
var inst_44447 = (inst_44446__$1 == null);
var state_44586__$1 = (function (){var statearr_44615 = state_44586;
(statearr_44615[(12)] = inst_44446__$1);

return statearr_44615;
})();
if(cljs.core.truth_(inst_44447)){
var statearr_44616_46148 = state_44586__$1;
(statearr_44616_46148[(1)] = (5));

} else {
var statearr_44617_46149 = state_44586__$1;
(statearr_44617_46149[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44587 === (15))){
var inst_44456 = (state_44586[(13)]);
var inst_44455 = (state_44586[(15)]);
var inst_44457 = (state_44586[(16)]);
var inst_44458 = (state_44586[(17)]);
var inst_44473 = (state_44586[(2)]);
var inst_44474 = (inst_44458 + (1));
var tmp44610 = inst_44456;
var tmp44611 = inst_44455;
var tmp44612 = inst_44457;
var inst_44455__$1 = tmp44611;
var inst_44456__$1 = tmp44610;
var inst_44457__$1 = tmp44612;
var inst_44458__$1 = inst_44474;
var state_44586__$1 = (function (){var statearr_44622 = state_44586;
(statearr_44622[(13)] = inst_44456__$1);

(statearr_44622[(15)] = inst_44455__$1);

(statearr_44622[(16)] = inst_44457__$1);

(statearr_44622[(17)] = inst_44458__$1);

(statearr_44622[(18)] = inst_44473);

return statearr_44622;
})();
var statearr_44623_46159 = state_44586__$1;
(statearr_44623_46159[(2)] = null);

(statearr_44623_46159[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44587 === (21))){
var inst_44504 = (state_44586[(2)]);
var state_44586__$1 = state_44586;
var statearr_44628_46160 = state_44586__$1;
(statearr_44628_46160[(2)] = inst_44504);

(statearr_44628_46160[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44587 === (31))){
var inst_44532 = (state_44586[(9)]);
var inst_44536 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_44532);
var state_44586__$1 = state_44586;
var statearr_44630_46161 = state_44586__$1;
(statearr_44630_46161[(2)] = inst_44536);

(statearr_44630_46161[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44587 === (32))){
var inst_44524 = (state_44586[(19)]);
var inst_44522 = (state_44586[(20)]);
var inst_44523 = (state_44586[(10)]);
var inst_44525 = (state_44586[(11)]);
var inst_44538 = (state_44586[(2)]);
var inst_44540 = (inst_44525 + (1));
var tmp44624 = inst_44524;
var tmp44625 = inst_44522;
var tmp44626 = inst_44523;
var inst_44522__$1 = tmp44625;
var inst_44523__$1 = tmp44626;
var inst_44524__$1 = tmp44624;
var inst_44525__$1 = inst_44540;
var state_44586__$1 = (function (){var statearr_44631 = state_44586;
(statearr_44631[(19)] = inst_44524__$1);

(statearr_44631[(21)] = inst_44538);

(statearr_44631[(20)] = inst_44522__$1);

(statearr_44631[(10)] = inst_44523__$1);

(statearr_44631[(11)] = inst_44525__$1);

return statearr_44631;
})();
var statearr_44632_46162 = state_44586__$1;
(statearr_44632_46162[(2)] = null);

(statearr_44632_46162[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44587 === (40))){
var inst_44553 = (state_44586[(22)]);
var inst_44557 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_44553);
var state_44586__$1 = state_44586;
var statearr_44637_46163 = state_44586__$1;
(statearr_44637_46163[(2)] = inst_44557);

(statearr_44637_46163[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44587 === (33))){
var inst_44544 = (state_44586[(23)]);
var inst_44546 = cljs.core.chunked_seq_QMARK_(inst_44544);
var state_44586__$1 = state_44586;
if(inst_44546){
var statearr_44638_46164 = state_44586__$1;
(statearr_44638_46164[(1)] = (36));

} else {
var statearr_44639_46165 = state_44586__$1;
(statearr_44639_46165[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44587 === (13))){
var inst_44467 = (state_44586[(24)]);
var inst_44470 = cljs.core.async.close_BANG_(inst_44467);
var state_44586__$1 = state_44586;
var statearr_44640_46166 = state_44586__$1;
(statearr_44640_46166[(2)] = inst_44470);

(statearr_44640_46166[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44587 === (22))){
var inst_44492 = (state_44586[(8)]);
var inst_44496 = cljs.core.async.close_BANG_(inst_44492);
var state_44586__$1 = state_44586;
var statearr_44643_46167 = state_44586__$1;
(statearr_44643_46167[(2)] = inst_44496);

(statearr_44643_46167[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44587 === (36))){
var inst_44544 = (state_44586[(23)]);
var inst_44548 = cljs.core.chunk_first(inst_44544);
var inst_44549 = cljs.core.chunk_rest(inst_44544);
var inst_44550 = cljs.core.count(inst_44548);
var inst_44522 = inst_44549;
var inst_44523 = inst_44548;
var inst_44524 = inst_44550;
var inst_44525 = (0);
var state_44586__$1 = (function (){var statearr_44644 = state_44586;
(statearr_44644[(19)] = inst_44524);

(statearr_44644[(20)] = inst_44522);

(statearr_44644[(10)] = inst_44523);

(statearr_44644[(11)] = inst_44525);

return statearr_44644;
})();
var statearr_44645_46169 = state_44586__$1;
(statearr_44645_46169[(2)] = null);

(statearr_44645_46169[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44587 === (41))){
var inst_44544 = (state_44586[(23)]);
var inst_44559 = (state_44586[(2)]);
var inst_44560 = cljs.core.next(inst_44544);
var inst_44522 = inst_44560;
var inst_44523 = null;
var inst_44524 = (0);
var inst_44525 = (0);
var state_44586__$1 = (function (){var statearr_44646 = state_44586;
(statearr_44646[(25)] = inst_44559);

(statearr_44646[(19)] = inst_44524);

(statearr_44646[(20)] = inst_44522);

(statearr_44646[(10)] = inst_44523);

(statearr_44646[(11)] = inst_44525);

return statearr_44646;
})();
var statearr_44648_46171 = state_44586__$1;
(statearr_44648_46171[(2)] = null);

(statearr_44648_46171[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44587 === (43))){
var state_44586__$1 = state_44586;
var statearr_44650_46177 = state_44586__$1;
(statearr_44650_46177[(2)] = null);

(statearr_44650_46177[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44587 === (29))){
var inst_44568 = (state_44586[(2)]);
var state_44586__$1 = state_44586;
var statearr_44652_46179 = state_44586__$1;
(statearr_44652_46179[(2)] = inst_44568);

(statearr_44652_46179[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44587 === (44))){
var inst_44577 = (state_44586[(2)]);
var state_44586__$1 = (function (){var statearr_44654 = state_44586;
(statearr_44654[(26)] = inst_44577);

return statearr_44654;
})();
var statearr_44655_46181 = state_44586__$1;
(statearr_44655_46181[(2)] = null);

(statearr_44655_46181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44587 === (6))){
var inst_44514 = (state_44586[(27)]);
var inst_44513 = cljs.core.deref(cs);
var inst_44514__$1 = cljs.core.keys(inst_44513);
var inst_44515 = cljs.core.count(inst_44514__$1);
var inst_44516 = cljs.core.reset_BANG_(dctr,inst_44515);
var inst_44521 = cljs.core.seq(inst_44514__$1);
var inst_44522 = inst_44521;
var inst_44523 = null;
var inst_44524 = (0);
var inst_44525 = (0);
var state_44586__$1 = (function (){var statearr_44656 = state_44586;
(statearr_44656[(27)] = inst_44514__$1);

(statearr_44656[(19)] = inst_44524);

(statearr_44656[(28)] = inst_44516);

(statearr_44656[(20)] = inst_44522);

(statearr_44656[(10)] = inst_44523);

(statearr_44656[(11)] = inst_44525);

return statearr_44656;
})();
var statearr_44657_46182 = state_44586__$1;
(statearr_44657_46182[(2)] = null);

(statearr_44657_46182[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44587 === (28))){
var inst_44522 = (state_44586[(20)]);
var inst_44544 = (state_44586[(23)]);
var inst_44544__$1 = cljs.core.seq(inst_44522);
var state_44586__$1 = (function (){var statearr_44658 = state_44586;
(statearr_44658[(23)] = inst_44544__$1);

return statearr_44658;
})();
if(inst_44544__$1){
var statearr_44659_46183 = state_44586__$1;
(statearr_44659_46183[(1)] = (33));

} else {
var statearr_44660_46184 = state_44586__$1;
(statearr_44660_46184[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44587 === (25))){
var inst_44524 = (state_44586[(19)]);
var inst_44525 = (state_44586[(11)]);
var inst_44527 = (inst_44525 < inst_44524);
var inst_44528 = inst_44527;
var state_44586__$1 = state_44586;
if(cljs.core.truth_(inst_44528)){
var statearr_44662_46185 = state_44586__$1;
(statearr_44662_46185[(1)] = (27));

} else {
var statearr_44665_46186 = state_44586__$1;
(statearr_44665_46186[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44587 === (34))){
var state_44586__$1 = state_44586;
var statearr_44668_46187 = state_44586__$1;
(statearr_44668_46187[(2)] = null);

(statearr_44668_46187[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44587 === (17))){
var state_44586__$1 = state_44586;
var statearr_44672_46188 = state_44586__$1;
(statearr_44672_46188[(2)] = null);

(statearr_44672_46188[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44587 === (3))){
var inst_44582 = (state_44586[(2)]);
var state_44586__$1 = state_44586;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44586__$1,inst_44582);
} else {
if((state_val_44587 === (12))){
var inst_44509 = (state_44586[(2)]);
var state_44586__$1 = state_44586;
var statearr_44674_46189 = state_44586__$1;
(statearr_44674_46189[(2)] = inst_44509);

(statearr_44674_46189[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44587 === (2))){
var state_44586__$1 = state_44586;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44586__$1,(4),ch);
} else {
if((state_val_44587 === (23))){
var state_44586__$1 = state_44586;
var statearr_44679_46190 = state_44586__$1;
(statearr_44679_46190[(2)] = null);

(statearr_44679_46190[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44587 === (35))){
var inst_44566 = (state_44586[(2)]);
var state_44586__$1 = state_44586;
var statearr_44685_46191 = state_44586__$1;
(statearr_44685_46191[(2)] = inst_44566);

(statearr_44685_46191[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44587 === (19))){
var inst_44478 = (state_44586[(7)]);
var inst_44483 = cljs.core.chunk_first(inst_44478);
var inst_44484 = cljs.core.chunk_rest(inst_44478);
var inst_44485 = cljs.core.count(inst_44483);
var inst_44455 = inst_44484;
var inst_44456 = inst_44483;
var inst_44457 = inst_44485;
var inst_44458 = (0);
var state_44586__$1 = (function (){var statearr_44689 = state_44586;
(statearr_44689[(13)] = inst_44456);

(statearr_44689[(15)] = inst_44455);

(statearr_44689[(16)] = inst_44457);

(statearr_44689[(17)] = inst_44458);

return statearr_44689;
})();
var statearr_44693_46193 = state_44586__$1;
(statearr_44693_46193[(2)] = null);

(statearr_44693_46193[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44587 === (11))){
var inst_44478 = (state_44586[(7)]);
var inst_44455 = (state_44586[(15)]);
var inst_44478__$1 = cljs.core.seq(inst_44455);
var state_44586__$1 = (function (){var statearr_44695 = state_44586;
(statearr_44695[(7)] = inst_44478__$1);

return statearr_44695;
})();
if(inst_44478__$1){
var statearr_44696_46194 = state_44586__$1;
(statearr_44696_46194[(1)] = (16));

} else {
var statearr_44698_46195 = state_44586__$1;
(statearr_44698_46195[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44587 === (9))){
var inst_44511 = (state_44586[(2)]);
var state_44586__$1 = state_44586;
var statearr_44700_46196 = state_44586__$1;
(statearr_44700_46196[(2)] = inst_44511);

(statearr_44700_46196[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44587 === (5))){
var inst_44453 = cljs.core.deref(cs);
var inst_44454 = cljs.core.seq(inst_44453);
var inst_44455 = inst_44454;
var inst_44456 = null;
var inst_44457 = (0);
var inst_44458 = (0);
var state_44586__$1 = (function (){var statearr_44701 = state_44586;
(statearr_44701[(13)] = inst_44456);

(statearr_44701[(15)] = inst_44455);

(statearr_44701[(16)] = inst_44457);

(statearr_44701[(17)] = inst_44458);

return statearr_44701;
})();
var statearr_44706_46197 = state_44586__$1;
(statearr_44706_46197[(2)] = null);

(statearr_44706_46197[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44587 === (14))){
var state_44586__$1 = state_44586;
var statearr_44707_46198 = state_44586__$1;
(statearr_44707_46198[(2)] = null);

(statearr_44707_46198[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44587 === (45))){
var inst_44574 = (state_44586[(2)]);
var state_44586__$1 = state_44586;
var statearr_44712_46200 = state_44586__$1;
(statearr_44712_46200[(2)] = inst_44574);

(statearr_44712_46200[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44587 === (26))){
var inst_44514 = (state_44586[(27)]);
var inst_44570 = (state_44586[(2)]);
var inst_44571 = cljs.core.seq(inst_44514);
var state_44586__$1 = (function (){var statearr_44718 = state_44586;
(statearr_44718[(29)] = inst_44570);

return statearr_44718;
})();
if(inst_44571){
var statearr_44722_46205 = state_44586__$1;
(statearr_44722_46205[(1)] = (42));

} else {
var statearr_44723_46206 = state_44586__$1;
(statearr_44723_46206[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44587 === (16))){
var inst_44478 = (state_44586[(7)]);
var inst_44481 = cljs.core.chunked_seq_QMARK_(inst_44478);
var state_44586__$1 = state_44586;
if(inst_44481){
var statearr_44726_46207 = state_44586__$1;
(statearr_44726_46207[(1)] = (19));

} else {
var statearr_44727_46208 = state_44586__$1;
(statearr_44727_46208[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44587 === (38))){
var inst_44563 = (state_44586[(2)]);
var state_44586__$1 = state_44586;
var statearr_44728_46209 = state_44586__$1;
(statearr_44728_46209[(2)] = inst_44563);

(statearr_44728_46209[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44587 === (30))){
var state_44586__$1 = state_44586;
var statearr_44732_46211 = state_44586__$1;
(statearr_44732_46211[(2)] = null);

(statearr_44732_46211[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44587 === (10))){
var inst_44456 = (state_44586[(13)]);
var inst_44458 = (state_44586[(17)]);
var inst_44466 = cljs.core._nth(inst_44456,inst_44458);
var inst_44467 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44466,(0),null);
var inst_44468 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44466,(1),null);
var state_44586__$1 = (function (){var statearr_44738 = state_44586;
(statearr_44738[(24)] = inst_44467);

return statearr_44738;
})();
if(cljs.core.truth_(inst_44468)){
var statearr_44739_46214 = state_44586__$1;
(statearr_44739_46214[(1)] = (13));

} else {
var statearr_44740_46218 = state_44586__$1;
(statearr_44740_46218[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44587 === (18))){
var inst_44507 = (state_44586[(2)]);
var state_44586__$1 = state_44586;
var statearr_44741_46219 = state_44586__$1;
(statearr_44741_46219[(2)] = inst_44507);

(statearr_44741_46219[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44587 === (42))){
var state_44586__$1 = state_44586;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44586__$1,(45),dchan);
} else {
if((state_val_44587 === (37))){
var inst_44553 = (state_44586[(22)]);
var inst_44446 = (state_44586[(12)]);
var inst_44544 = (state_44586[(23)]);
var inst_44553__$1 = cljs.core.first(inst_44544);
var inst_44554 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_44553__$1,inst_44446,done);
var state_44586__$1 = (function (){var statearr_44745 = state_44586;
(statearr_44745[(22)] = inst_44553__$1);

return statearr_44745;
})();
if(cljs.core.truth_(inst_44554)){
var statearr_44747_46220 = state_44586__$1;
(statearr_44747_46220[(1)] = (39));

} else {
var statearr_44748_46221 = state_44586__$1;
(statearr_44748_46221[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44587 === (8))){
var inst_44457 = (state_44586[(16)]);
var inst_44458 = (state_44586[(17)]);
var inst_44460 = (inst_44458 < inst_44457);
var inst_44461 = inst_44460;
var state_44586__$1 = state_44586;
if(cljs.core.truth_(inst_44461)){
var statearr_44749_46222 = state_44586__$1;
(statearr_44749_46222[(1)] = (10));

} else {
var statearr_44752_46223 = state_44586__$1;
(statearr_44752_46223[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__43334__auto__ = null;
var cljs$core$async$mult_$_state_machine__43334__auto____0 = (function (){
var statearr_44753 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44753[(0)] = cljs$core$async$mult_$_state_machine__43334__auto__);

(statearr_44753[(1)] = (1));

return statearr_44753;
});
var cljs$core$async$mult_$_state_machine__43334__auto____1 = (function (state_44586){
while(true){
var ret_value__43335__auto__ = (function (){try{while(true){
var result__43336__auto__ = switch__43333__auto__(state_44586);
if(cljs.core.keyword_identical_QMARK_(result__43336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43336__auto__;
}
break;
}
}catch (e44754){var ex__43337__auto__ = e44754;
var statearr_44755_46229 = state_44586;
(statearr_44755_46229[(2)] = ex__43337__auto__);


if(cljs.core.seq((state_44586[(4)]))){
var statearr_44756_46230 = state_44586;
(statearr_44756_46230[(1)] = cljs.core.first((state_44586[(4)])));

} else {
throw ex__43337__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43335__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46231 = state_44586;
state_44586 = G__46231;
continue;
} else {
return ret_value__43335__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__43334__auto__ = function(state_44586){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__43334__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__43334__auto____1.call(this,state_44586);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__43334__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__43334__auto____0;
cljs$core$async$mult_$_state_machine__43334__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__43334__auto____1;
return cljs$core$async$mult_$_state_machine__43334__auto__;
})()
})();
var state__43468__auto__ = (function (){var statearr_44757 = f__43467__auto__();
(statearr_44757[(6)] = c__43466__auto___46139);

return statearr_44757;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43468__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__44759 = arguments.length;
switch (G__44759) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_46236 = (function (m,ch){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4510__auto__.call(null,m,ch));
} else {
var m__4508__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4508__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_46236(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_46237 = (function (m,ch){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4510__auto__.call(null,m,ch));
} else {
var m__4508__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4508__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_46237(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_46239 = (function (m){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4510__auto__.call(null,m));
} else {
var m__4508__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4508__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_46239(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_46240 = (function (m,state_map){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4510__auto__.call(null,m,state_map));
} else {
var m__4508__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4508__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_46240(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_46243 = (function (m,mode){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4510__auto__.call(null,m,mode));
} else {
var m__4508__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4508__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_46243(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___46244 = arguments.length;
var i__4819__auto___46245 = (0);
while(true){
if((i__4819__auto___46245 < len__4818__auto___46244)){
args__4824__auto__.push((arguments[i__4819__auto___46245]));

var G__46246 = (i__4819__auto___46245 + (1));
i__4819__auto___46245 = G__46246;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__44779){
var map__44780 = p__44779;
var map__44780__$1 = cljs.core.__destructure_map(map__44780);
var opts = map__44780__$1;
var statearr_44781_46247 = state;
(statearr_44781_46247[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_44782_46248 = state;
(statearr_44782_46248[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_44785_46249 = state;
(statearr_44785_46249[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq44775){
var G__44776 = cljs.core.first(seq44775);
var seq44775__$1 = cljs.core.next(seq44775);
var G__44777 = cljs.core.first(seq44775__$1);
var seq44775__$2 = cljs.core.next(seq44775__$1);
var G__44778 = cljs.core.first(seq44775__$2);
var seq44775__$3 = cljs.core.next(seq44775__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44776,G__44777,G__44778,seq44775__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44790 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44790 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta44791){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta44791 = meta44791;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44790.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44792,meta44791__$1){
var self__ = this;
var _44792__$1 = this;
return (new cljs.core.async.t_cljs$core$async44790(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta44791__$1));
}));

(cljs.core.async.t_cljs$core$async44790.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44792){
var self__ = this;
var _44792__$1 = this;
return self__.meta44791;
}));

(cljs.core.async.t_cljs$core$async44790.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44790.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async44790.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44790.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async44790.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async44790.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async44790.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async44790.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async44790.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta44791","meta44791",-1494128877,null)], null);
}));

(cljs.core.async.t_cljs$core$async44790.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44790.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44790");

(cljs.core.async.t_cljs$core$async44790.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async44790");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44790.
 */
cljs.core.async.__GT_t_cljs$core$async44790 = (function cljs$core$async$mix_$___GT_t_cljs$core$async44790(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta44791){
return (new cljs.core.async.t_cljs$core$async44790(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta44791));
});

}

return (new cljs.core.async.t_cljs$core$async44790(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__43466__auto___46261 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43467__auto__ = (function (){var switch__43333__auto__ = (function (state_44865){
var state_val_44866 = (state_44865[(1)]);
if((state_val_44866 === (7))){
var inst_44824 = (state_44865[(2)]);
var state_44865__$1 = state_44865;
if(cljs.core.truth_(inst_44824)){
var statearr_44872_46266 = state_44865__$1;
(statearr_44872_46266[(1)] = (8));

} else {
var statearr_44873_46267 = state_44865__$1;
(statearr_44873_46267[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44866 === (20))){
var inst_44817 = (state_44865[(7)]);
var state_44865__$1 = state_44865;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44865__$1,(23),out,inst_44817);
} else {
if((state_val_44866 === (1))){
var inst_44799 = calc_state();
var inst_44800 = cljs.core.__destructure_map(inst_44799);
var inst_44802 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44800,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_44803 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44800,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_44804 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44800,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_44805 = inst_44799;
var state_44865__$1 = (function (){var statearr_44876 = state_44865;
(statearr_44876[(8)] = inst_44804);

(statearr_44876[(9)] = inst_44805);

(statearr_44876[(10)] = inst_44802);

(statearr_44876[(11)] = inst_44803);

return statearr_44876;
})();
var statearr_44877_46268 = state_44865__$1;
(statearr_44877_46268[(2)] = null);

(statearr_44877_46268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44866 === (24))){
var inst_44808 = (state_44865[(12)]);
var inst_44805 = inst_44808;
var state_44865__$1 = (function (){var statearr_44879 = state_44865;
(statearr_44879[(9)] = inst_44805);

return statearr_44879;
})();
var statearr_44881_46272 = state_44865__$1;
(statearr_44881_46272[(2)] = null);

(statearr_44881_46272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44866 === (4))){
var inst_44819 = (state_44865[(13)]);
var inst_44817 = (state_44865[(7)]);
var inst_44816 = (state_44865[(2)]);
var inst_44817__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44816,(0),null);
var inst_44818 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44816,(1),null);
var inst_44819__$1 = (inst_44817__$1 == null);
var state_44865__$1 = (function (){var statearr_44883 = state_44865;
(statearr_44883[(14)] = inst_44818);

(statearr_44883[(13)] = inst_44819__$1);

(statearr_44883[(7)] = inst_44817__$1);

return statearr_44883;
})();
if(cljs.core.truth_(inst_44819__$1)){
var statearr_44884_46277 = state_44865__$1;
(statearr_44884_46277[(1)] = (5));

} else {
var statearr_44885_46278 = state_44865__$1;
(statearr_44885_46278[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44866 === (15))){
var inst_44809 = (state_44865[(15)]);
var inst_44838 = (state_44865[(16)]);
var inst_44838__$1 = cljs.core.empty_QMARK_(inst_44809);
var state_44865__$1 = (function (){var statearr_44886 = state_44865;
(statearr_44886[(16)] = inst_44838__$1);

return statearr_44886;
})();
if(inst_44838__$1){
var statearr_44887_46282 = state_44865__$1;
(statearr_44887_46282[(1)] = (17));

} else {
var statearr_44888_46287 = state_44865__$1;
(statearr_44888_46287[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44866 === (21))){
var inst_44808 = (state_44865[(12)]);
var inst_44805 = inst_44808;
var state_44865__$1 = (function (){var statearr_44891 = state_44865;
(statearr_44891[(9)] = inst_44805);

return statearr_44891;
})();
var statearr_44892_46288 = state_44865__$1;
(statearr_44892_46288[(2)] = null);

(statearr_44892_46288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44866 === (13))){
var inst_44831 = (state_44865[(2)]);
var inst_44832 = calc_state();
var inst_44805 = inst_44832;
var state_44865__$1 = (function (){var statearr_44895 = state_44865;
(statearr_44895[(17)] = inst_44831);

(statearr_44895[(9)] = inst_44805);

return statearr_44895;
})();
var statearr_44896_46289 = state_44865__$1;
(statearr_44896_46289[(2)] = null);

(statearr_44896_46289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44866 === (22))){
var inst_44859 = (state_44865[(2)]);
var state_44865__$1 = state_44865;
var statearr_44897_46290 = state_44865__$1;
(statearr_44897_46290[(2)] = inst_44859);

(statearr_44897_46290[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44866 === (6))){
var inst_44818 = (state_44865[(14)]);
var inst_44822 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_44818,change);
var state_44865__$1 = state_44865;
var statearr_44900_46291 = state_44865__$1;
(statearr_44900_46291[(2)] = inst_44822);

(statearr_44900_46291[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44866 === (25))){
var state_44865__$1 = state_44865;
var statearr_44901_46292 = state_44865__$1;
(statearr_44901_46292[(2)] = null);

(statearr_44901_46292[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44866 === (17))){
var inst_44810 = (state_44865[(18)]);
var inst_44818 = (state_44865[(14)]);
var inst_44840 = (inst_44810.cljs$core$IFn$_invoke$arity$1 ? inst_44810.cljs$core$IFn$_invoke$arity$1(inst_44818) : inst_44810.call(null,inst_44818));
var inst_44841 = cljs.core.not(inst_44840);
var state_44865__$1 = state_44865;
var statearr_44903_46295 = state_44865__$1;
(statearr_44903_46295[(2)] = inst_44841);

(statearr_44903_46295[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44866 === (3))){
var inst_44863 = (state_44865[(2)]);
var state_44865__$1 = state_44865;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44865__$1,inst_44863);
} else {
if((state_val_44866 === (12))){
var state_44865__$1 = state_44865;
var statearr_44905_46296 = state_44865__$1;
(statearr_44905_46296[(2)] = null);

(statearr_44905_46296[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44866 === (2))){
var inst_44808 = (state_44865[(12)]);
var inst_44805 = (state_44865[(9)]);
var inst_44808__$1 = cljs.core.__destructure_map(inst_44805);
var inst_44809 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44808__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_44810 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44808__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_44811 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44808__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_44865__$1 = (function (){var statearr_44906 = state_44865;
(statearr_44906[(12)] = inst_44808__$1);

(statearr_44906[(18)] = inst_44810);

(statearr_44906[(15)] = inst_44809);

return statearr_44906;
})();
return cljs.core.async.ioc_alts_BANG_(state_44865__$1,(4),inst_44811);
} else {
if((state_val_44866 === (23))){
var inst_44849 = (state_44865[(2)]);
var state_44865__$1 = state_44865;
if(cljs.core.truth_(inst_44849)){
var statearr_44911_46300 = state_44865__$1;
(statearr_44911_46300[(1)] = (24));

} else {
var statearr_44912_46301 = state_44865__$1;
(statearr_44912_46301[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44866 === (19))){
var inst_44844 = (state_44865[(2)]);
var state_44865__$1 = state_44865;
var statearr_44914_46302 = state_44865__$1;
(statearr_44914_46302[(2)] = inst_44844);

(statearr_44914_46302[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44866 === (11))){
var inst_44818 = (state_44865[(14)]);
var inst_44828 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_44818);
var state_44865__$1 = state_44865;
var statearr_44915_46303 = state_44865__$1;
(statearr_44915_46303[(2)] = inst_44828);

(statearr_44915_46303[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44866 === (9))){
var inst_44835 = (state_44865[(19)]);
var inst_44818 = (state_44865[(14)]);
var inst_44809 = (state_44865[(15)]);
var inst_44835__$1 = (inst_44809.cljs$core$IFn$_invoke$arity$1 ? inst_44809.cljs$core$IFn$_invoke$arity$1(inst_44818) : inst_44809.call(null,inst_44818));
var state_44865__$1 = (function (){var statearr_44916 = state_44865;
(statearr_44916[(19)] = inst_44835__$1);

return statearr_44916;
})();
if(cljs.core.truth_(inst_44835__$1)){
var statearr_44918_46304 = state_44865__$1;
(statearr_44918_46304[(1)] = (14));

} else {
var statearr_44919_46305 = state_44865__$1;
(statearr_44919_46305[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44866 === (5))){
var inst_44819 = (state_44865[(13)]);
var state_44865__$1 = state_44865;
var statearr_44920_46306 = state_44865__$1;
(statearr_44920_46306[(2)] = inst_44819);

(statearr_44920_46306[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44866 === (14))){
var inst_44835 = (state_44865[(19)]);
var state_44865__$1 = state_44865;
var statearr_44921_46307 = state_44865__$1;
(statearr_44921_46307[(2)] = inst_44835);

(statearr_44921_46307[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44866 === (26))){
var inst_44855 = (state_44865[(2)]);
var state_44865__$1 = state_44865;
var statearr_44922_46308 = state_44865__$1;
(statearr_44922_46308[(2)] = inst_44855);

(statearr_44922_46308[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44866 === (16))){
var inst_44846 = (state_44865[(2)]);
var state_44865__$1 = state_44865;
if(cljs.core.truth_(inst_44846)){
var statearr_44923_46310 = state_44865__$1;
(statearr_44923_46310[(1)] = (20));

} else {
var statearr_44924_46311 = state_44865__$1;
(statearr_44924_46311[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44866 === (10))){
var inst_44861 = (state_44865[(2)]);
var state_44865__$1 = state_44865;
var statearr_44926_46313 = state_44865__$1;
(statearr_44926_46313[(2)] = inst_44861);

(statearr_44926_46313[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44866 === (18))){
var inst_44838 = (state_44865[(16)]);
var state_44865__$1 = state_44865;
var statearr_44927_46314 = state_44865__$1;
(statearr_44927_46314[(2)] = inst_44838);

(statearr_44927_46314[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44866 === (8))){
var inst_44817 = (state_44865[(7)]);
var inst_44826 = (inst_44817 == null);
var state_44865__$1 = state_44865;
if(cljs.core.truth_(inst_44826)){
var statearr_44928_46315 = state_44865__$1;
(statearr_44928_46315[(1)] = (11));

} else {
var statearr_44929_46316 = state_44865__$1;
(statearr_44929_46316[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__43334__auto__ = null;
var cljs$core$async$mix_$_state_machine__43334__auto____0 = (function (){
var statearr_44931 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44931[(0)] = cljs$core$async$mix_$_state_machine__43334__auto__);

(statearr_44931[(1)] = (1));

return statearr_44931;
});
var cljs$core$async$mix_$_state_machine__43334__auto____1 = (function (state_44865){
while(true){
var ret_value__43335__auto__ = (function (){try{while(true){
var result__43336__auto__ = switch__43333__auto__(state_44865);
if(cljs.core.keyword_identical_QMARK_(result__43336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43336__auto__;
}
break;
}
}catch (e44932){var ex__43337__auto__ = e44932;
var statearr_44933_46317 = state_44865;
(statearr_44933_46317[(2)] = ex__43337__auto__);


if(cljs.core.seq((state_44865[(4)]))){
var statearr_44934_46318 = state_44865;
(statearr_44934_46318[(1)] = cljs.core.first((state_44865[(4)])));

} else {
throw ex__43337__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43335__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46319 = state_44865;
state_44865 = G__46319;
continue;
} else {
return ret_value__43335__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__43334__auto__ = function(state_44865){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__43334__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__43334__auto____1.call(this,state_44865);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__43334__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__43334__auto____0;
cljs$core$async$mix_$_state_machine__43334__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__43334__auto____1;
return cljs$core$async$mix_$_state_machine__43334__auto__;
})()
})();
var state__43468__auto__ = (function (){var statearr_44939 = f__43467__auto__();
(statearr_44939[(6)] = c__43466__auto___46261);

return statearr_44939;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43468__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_46324 = (function (p,v,ch,close_QMARK_){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4510__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4508__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4508__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_46324(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_46325 = (function (p,v,ch){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4510__auto__.call(null,p,v,ch));
} else {
var m__4508__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4508__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_46325(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_46327 = (function() {
var G__46328 = null;
var G__46328__1 = (function (p){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4510__auto__.call(null,p));
} else {
var m__4508__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4508__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__46328__2 = (function (p,v){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4510__auto__.call(null,p,v));
} else {
var m__4508__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4508__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__46328 = function(p,v){
switch(arguments.length){
case 1:
return G__46328__1.call(this,p);
case 2:
return G__46328__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__46328.cljs$core$IFn$_invoke$arity$1 = G__46328__1;
G__46328.cljs$core$IFn$_invoke$arity$2 = G__46328__2;
return G__46328;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__44945 = arguments.length;
switch (G__44945) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_46327(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_46327(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__44950 = arguments.length;
switch (G__44950) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4212__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__44948_SHARP_){
if(cljs.core.truth_((p1__44948_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__44948_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__44948_SHARP_.call(null,topic)))){
return p1__44948_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__44948_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44955 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44955 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta44956){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta44956 = meta44956;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44955.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44957,meta44956__$1){
var self__ = this;
var _44957__$1 = this;
return (new cljs.core.async.t_cljs$core$async44955(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta44956__$1));
}));

(cljs.core.async.t_cljs$core$async44955.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44957){
var self__ = this;
var _44957__$1 = this;
return self__.meta44956;
}));

(cljs.core.async.t_cljs$core$async44955.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44955.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async44955.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44955.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async44955.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async44955.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async44955.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async44955.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta44956","meta44956",-1404966377,null)], null);
}));

(cljs.core.async.t_cljs$core$async44955.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44955.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44955");

(cljs.core.async.t_cljs$core$async44955.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async44955");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44955.
 */
cljs.core.async.__GT_t_cljs$core$async44955 = (function cljs$core$async$__GT_t_cljs$core$async44955(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta44956){
return (new cljs.core.async.t_cljs$core$async44955(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta44956));
});

}

return (new cljs.core.async.t_cljs$core$async44955(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__43466__auto___46344 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43467__auto__ = (function (){var switch__43333__auto__ = (function (state_45039){
var state_val_45040 = (state_45039[(1)]);
if((state_val_45040 === (7))){
var inst_45033 = (state_45039[(2)]);
var state_45039__$1 = state_45039;
var statearr_45042_46345 = state_45039__$1;
(statearr_45042_46345[(2)] = inst_45033);

(statearr_45042_46345[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45040 === (20))){
var state_45039__$1 = state_45039;
var statearr_45044_46346 = state_45039__$1;
(statearr_45044_46346[(2)] = null);

(statearr_45044_46346[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45040 === (1))){
var state_45039__$1 = state_45039;
var statearr_45045_46347 = state_45039__$1;
(statearr_45045_46347[(2)] = null);

(statearr_45045_46347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45040 === (24))){
var inst_45015 = (state_45039[(7)]);
var inst_45025 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_45015);
var state_45039__$1 = state_45039;
var statearr_45046_46348 = state_45039__$1;
(statearr_45046_46348[(2)] = inst_45025);

(statearr_45046_46348[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45040 === (4))){
var inst_44966 = (state_45039[(8)]);
var inst_44966__$1 = (state_45039[(2)]);
var inst_44967 = (inst_44966__$1 == null);
var state_45039__$1 = (function (){var statearr_45047 = state_45039;
(statearr_45047[(8)] = inst_44966__$1);

return statearr_45047;
})();
if(cljs.core.truth_(inst_44967)){
var statearr_45048_46349 = state_45039__$1;
(statearr_45048_46349[(1)] = (5));

} else {
var statearr_45049_46350 = state_45039__$1;
(statearr_45049_46350[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45040 === (15))){
var inst_45008 = (state_45039[(2)]);
var state_45039__$1 = state_45039;
var statearr_45050_46351 = state_45039__$1;
(statearr_45050_46351[(2)] = inst_45008);

(statearr_45050_46351[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45040 === (21))){
var inst_45030 = (state_45039[(2)]);
var state_45039__$1 = (function (){var statearr_45051 = state_45039;
(statearr_45051[(9)] = inst_45030);

return statearr_45051;
})();
var statearr_45052_46352 = state_45039__$1;
(statearr_45052_46352[(2)] = null);

(statearr_45052_46352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45040 === (13))){
var inst_44990 = (state_45039[(10)]);
var inst_44992 = cljs.core.chunked_seq_QMARK_(inst_44990);
var state_45039__$1 = state_45039;
if(inst_44992){
var statearr_45053_46353 = state_45039__$1;
(statearr_45053_46353[(1)] = (16));

} else {
var statearr_45054_46355 = state_45039__$1;
(statearr_45054_46355[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45040 === (22))){
var inst_45022 = (state_45039[(2)]);
var state_45039__$1 = state_45039;
if(cljs.core.truth_(inst_45022)){
var statearr_45057_46356 = state_45039__$1;
(statearr_45057_46356[(1)] = (23));

} else {
var statearr_45058_46357 = state_45039__$1;
(statearr_45058_46357[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45040 === (6))){
var inst_45015 = (state_45039[(7)]);
var inst_44966 = (state_45039[(8)]);
var inst_45018 = (state_45039[(11)]);
var inst_45015__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_44966) : topic_fn.call(null,inst_44966));
var inst_45017 = cljs.core.deref(mults);
var inst_45018__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45017,inst_45015__$1);
var state_45039__$1 = (function (){var statearr_45062 = state_45039;
(statearr_45062[(7)] = inst_45015__$1);

(statearr_45062[(11)] = inst_45018__$1);

return statearr_45062;
})();
if(cljs.core.truth_(inst_45018__$1)){
var statearr_45063_46361 = state_45039__$1;
(statearr_45063_46361[(1)] = (19));

} else {
var statearr_45064_46362 = state_45039__$1;
(statearr_45064_46362[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45040 === (25))){
var inst_45027 = (state_45039[(2)]);
var state_45039__$1 = state_45039;
var statearr_45067_46363 = state_45039__$1;
(statearr_45067_46363[(2)] = inst_45027);

(statearr_45067_46363[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45040 === (17))){
var inst_44990 = (state_45039[(10)]);
var inst_44999 = cljs.core.first(inst_44990);
var inst_45000 = cljs.core.async.muxch_STAR_(inst_44999);
var inst_45001 = cljs.core.async.close_BANG_(inst_45000);
var inst_45002 = cljs.core.next(inst_44990);
var inst_44976 = inst_45002;
var inst_44977 = null;
var inst_44978 = (0);
var inst_44979 = (0);
var state_45039__$1 = (function (){var statearr_45070 = state_45039;
(statearr_45070[(12)] = inst_44976);

(statearr_45070[(13)] = inst_44978);

(statearr_45070[(14)] = inst_45001);

(statearr_45070[(15)] = inst_44977);

(statearr_45070[(16)] = inst_44979);

return statearr_45070;
})();
var statearr_45073_46364 = state_45039__$1;
(statearr_45073_46364[(2)] = null);

(statearr_45073_46364[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45040 === (3))){
var inst_45035 = (state_45039[(2)]);
var state_45039__$1 = state_45039;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45039__$1,inst_45035);
} else {
if((state_val_45040 === (12))){
var inst_45010 = (state_45039[(2)]);
var state_45039__$1 = state_45039;
var statearr_45074_46365 = state_45039__$1;
(statearr_45074_46365[(2)] = inst_45010);

(statearr_45074_46365[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45040 === (2))){
var state_45039__$1 = state_45039;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45039__$1,(4),ch);
} else {
if((state_val_45040 === (23))){
var state_45039__$1 = state_45039;
var statearr_45075_46366 = state_45039__$1;
(statearr_45075_46366[(2)] = null);

(statearr_45075_46366[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45040 === (19))){
var inst_44966 = (state_45039[(8)]);
var inst_45018 = (state_45039[(11)]);
var inst_45020 = cljs.core.async.muxch_STAR_(inst_45018);
var state_45039__$1 = state_45039;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45039__$1,(22),inst_45020,inst_44966);
} else {
if((state_val_45040 === (11))){
var inst_44976 = (state_45039[(12)]);
var inst_44990 = (state_45039[(10)]);
var inst_44990__$1 = cljs.core.seq(inst_44976);
var state_45039__$1 = (function (){var statearr_45076 = state_45039;
(statearr_45076[(10)] = inst_44990__$1);

return statearr_45076;
})();
if(inst_44990__$1){
var statearr_45077_46368 = state_45039__$1;
(statearr_45077_46368[(1)] = (13));

} else {
var statearr_45078_46369 = state_45039__$1;
(statearr_45078_46369[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45040 === (9))){
var inst_45012 = (state_45039[(2)]);
var state_45039__$1 = state_45039;
var statearr_45079_46370 = state_45039__$1;
(statearr_45079_46370[(2)] = inst_45012);

(statearr_45079_46370[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45040 === (5))){
var inst_44973 = cljs.core.deref(mults);
var inst_44974 = cljs.core.vals(inst_44973);
var inst_44975 = cljs.core.seq(inst_44974);
var inst_44976 = inst_44975;
var inst_44977 = null;
var inst_44978 = (0);
var inst_44979 = (0);
var state_45039__$1 = (function (){var statearr_45081 = state_45039;
(statearr_45081[(12)] = inst_44976);

(statearr_45081[(13)] = inst_44978);

(statearr_45081[(15)] = inst_44977);

(statearr_45081[(16)] = inst_44979);

return statearr_45081;
})();
var statearr_45082_46371 = state_45039__$1;
(statearr_45082_46371[(2)] = null);

(statearr_45082_46371[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45040 === (14))){
var state_45039__$1 = state_45039;
var statearr_45087_46372 = state_45039__$1;
(statearr_45087_46372[(2)] = null);

(statearr_45087_46372[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45040 === (16))){
var inst_44990 = (state_45039[(10)]);
var inst_44994 = cljs.core.chunk_first(inst_44990);
var inst_44995 = cljs.core.chunk_rest(inst_44990);
var inst_44996 = cljs.core.count(inst_44994);
var inst_44976 = inst_44995;
var inst_44977 = inst_44994;
var inst_44978 = inst_44996;
var inst_44979 = (0);
var state_45039__$1 = (function (){var statearr_45089 = state_45039;
(statearr_45089[(12)] = inst_44976);

(statearr_45089[(13)] = inst_44978);

(statearr_45089[(15)] = inst_44977);

(statearr_45089[(16)] = inst_44979);

return statearr_45089;
})();
var statearr_45090_46377 = state_45039__$1;
(statearr_45090_46377[(2)] = null);

(statearr_45090_46377[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45040 === (10))){
var inst_44976 = (state_45039[(12)]);
var inst_44978 = (state_45039[(13)]);
var inst_44977 = (state_45039[(15)]);
var inst_44979 = (state_45039[(16)]);
var inst_44984 = cljs.core._nth(inst_44977,inst_44979);
var inst_44985 = cljs.core.async.muxch_STAR_(inst_44984);
var inst_44986 = cljs.core.async.close_BANG_(inst_44985);
var inst_44987 = (inst_44979 + (1));
var tmp45083 = inst_44976;
var tmp45084 = inst_44978;
var tmp45085 = inst_44977;
var inst_44976__$1 = tmp45083;
var inst_44977__$1 = tmp45085;
var inst_44978__$1 = tmp45084;
var inst_44979__$1 = inst_44987;
var state_45039__$1 = (function (){var statearr_45092 = state_45039;
(statearr_45092[(12)] = inst_44976__$1);

(statearr_45092[(13)] = inst_44978__$1);

(statearr_45092[(17)] = inst_44986);

(statearr_45092[(15)] = inst_44977__$1);

(statearr_45092[(16)] = inst_44979__$1);

return statearr_45092;
})();
var statearr_45093_46379 = state_45039__$1;
(statearr_45093_46379[(2)] = null);

(statearr_45093_46379[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45040 === (18))){
var inst_45005 = (state_45039[(2)]);
var state_45039__$1 = state_45039;
var statearr_45095_46380 = state_45039__$1;
(statearr_45095_46380[(2)] = inst_45005);

(statearr_45095_46380[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45040 === (8))){
var inst_44978 = (state_45039[(13)]);
var inst_44979 = (state_45039[(16)]);
var inst_44981 = (inst_44979 < inst_44978);
var inst_44982 = inst_44981;
var state_45039__$1 = state_45039;
if(cljs.core.truth_(inst_44982)){
var statearr_45096_46381 = state_45039__$1;
(statearr_45096_46381[(1)] = (10));

} else {
var statearr_45097_46382 = state_45039__$1;
(statearr_45097_46382[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43334__auto__ = null;
var cljs$core$async$state_machine__43334__auto____0 = (function (){
var statearr_45099 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45099[(0)] = cljs$core$async$state_machine__43334__auto__);

(statearr_45099[(1)] = (1));

return statearr_45099;
});
var cljs$core$async$state_machine__43334__auto____1 = (function (state_45039){
while(true){
var ret_value__43335__auto__ = (function (){try{while(true){
var result__43336__auto__ = switch__43333__auto__(state_45039);
if(cljs.core.keyword_identical_QMARK_(result__43336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43336__auto__;
}
break;
}
}catch (e45100){var ex__43337__auto__ = e45100;
var statearr_45102_46384 = state_45039;
(statearr_45102_46384[(2)] = ex__43337__auto__);


if(cljs.core.seq((state_45039[(4)]))){
var statearr_45103_46385 = state_45039;
(statearr_45103_46385[(1)] = cljs.core.first((state_45039[(4)])));

} else {
throw ex__43337__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43335__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46386 = state_45039;
state_45039 = G__46386;
continue;
} else {
return ret_value__43335__auto__;
}
break;
}
});
cljs$core$async$state_machine__43334__auto__ = function(state_45039){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43334__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43334__auto____1.call(this,state_45039);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43334__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43334__auto____0;
cljs$core$async$state_machine__43334__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43334__auto____1;
return cljs$core$async$state_machine__43334__auto__;
})()
})();
var state__43468__auto__ = (function (){var statearr_45104 = f__43467__auto__();
(statearr_45104[(6)] = c__43466__auto___46344);

return statearr_45104;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43468__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__45106 = arguments.length;
switch (G__45106) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__45117 = arguments.length;
switch (G__45117) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__45119 = arguments.length;
switch (G__45119) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__43466__auto___46394 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43467__auto__ = (function (){var switch__43333__auto__ = (function (state_45163){
var state_val_45164 = (state_45163[(1)]);
if((state_val_45164 === (7))){
var state_45163__$1 = state_45163;
var statearr_45165_46395 = state_45163__$1;
(statearr_45165_46395[(2)] = null);

(statearr_45165_46395[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45164 === (1))){
var state_45163__$1 = state_45163;
var statearr_45166_46396 = state_45163__$1;
(statearr_45166_46396[(2)] = null);

(statearr_45166_46396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45164 === (4))){
var inst_45123 = (state_45163[(7)]);
var inst_45124 = (state_45163[(8)]);
var inst_45126 = (inst_45124 < inst_45123);
var state_45163__$1 = state_45163;
if(cljs.core.truth_(inst_45126)){
var statearr_45168_46397 = state_45163__$1;
(statearr_45168_46397[(1)] = (6));

} else {
var statearr_45169_46398 = state_45163__$1;
(statearr_45169_46398[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45164 === (15))){
var inst_45149 = (state_45163[(9)]);
var inst_45154 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_45149);
var state_45163__$1 = state_45163;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45163__$1,(17),out,inst_45154);
} else {
if((state_val_45164 === (13))){
var inst_45149 = (state_45163[(9)]);
var inst_45149__$1 = (state_45163[(2)]);
var inst_45150 = cljs.core.some(cljs.core.nil_QMARK_,inst_45149__$1);
var state_45163__$1 = (function (){var statearr_45170 = state_45163;
(statearr_45170[(9)] = inst_45149__$1);

return statearr_45170;
})();
if(cljs.core.truth_(inst_45150)){
var statearr_45171_46399 = state_45163__$1;
(statearr_45171_46399[(1)] = (14));

} else {
var statearr_45172_46400 = state_45163__$1;
(statearr_45172_46400[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45164 === (6))){
var state_45163__$1 = state_45163;
var statearr_45173_46401 = state_45163__$1;
(statearr_45173_46401[(2)] = null);

(statearr_45173_46401[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45164 === (17))){
var inst_45156 = (state_45163[(2)]);
var state_45163__$1 = (function (){var statearr_45175 = state_45163;
(statearr_45175[(10)] = inst_45156);

return statearr_45175;
})();
var statearr_45176_46402 = state_45163__$1;
(statearr_45176_46402[(2)] = null);

(statearr_45176_46402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45164 === (3))){
var inst_45161 = (state_45163[(2)]);
var state_45163__$1 = state_45163;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45163__$1,inst_45161);
} else {
if((state_val_45164 === (12))){
var _ = (function (){var statearr_45177 = state_45163;
(statearr_45177[(4)] = cljs.core.rest((state_45163[(4)])));

return statearr_45177;
})();
var state_45163__$1 = state_45163;
var ex45174 = (state_45163__$1[(2)]);
var statearr_45178_46403 = state_45163__$1;
(statearr_45178_46403[(5)] = ex45174);


if((ex45174 instanceof Object)){
var statearr_45179_46404 = state_45163__$1;
(statearr_45179_46404[(1)] = (11));

(statearr_45179_46404[(5)] = null);

} else {
throw ex45174;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45164 === (2))){
var inst_45122 = cljs.core.reset_BANG_(dctr,cnt);
var inst_45123 = cnt;
var inst_45124 = (0);
var state_45163__$1 = (function (){var statearr_45180 = state_45163;
(statearr_45180[(7)] = inst_45123);

(statearr_45180[(11)] = inst_45122);

(statearr_45180[(8)] = inst_45124);

return statearr_45180;
})();
var statearr_45181_46407 = state_45163__$1;
(statearr_45181_46407[(2)] = null);

(statearr_45181_46407[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45164 === (11))){
var inst_45128 = (state_45163[(2)]);
var inst_45129 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_45163__$1 = (function (){var statearr_45183 = state_45163;
(statearr_45183[(12)] = inst_45128);

return statearr_45183;
})();
var statearr_45184_46412 = state_45163__$1;
(statearr_45184_46412[(2)] = inst_45129);

(statearr_45184_46412[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45164 === (9))){
var inst_45124 = (state_45163[(8)]);
var _ = (function (){var statearr_45185 = state_45163;
(statearr_45185[(4)] = cljs.core.cons((12),(state_45163[(4)])));

return statearr_45185;
})();
var inst_45135 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_45124) : chs__$1.call(null,inst_45124));
var inst_45136 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_45124) : done.call(null,inst_45124));
var inst_45137 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_45135,inst_45136);
var ___$1 = (function (){var statearr_45186 = state_45163;
(statearr_45186[(4)] = cljs.core.rest((state_45163[(4)])));

return statearr_45186;
})();
var state_45163__$1 = state_45163;
var statearr_45187_46413 = state_45163__$1;
(statearr_45187_46413[(2)] = inst_45137);

(statearr_45187_46413[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45164 === (5))){
var inst_45147 = (state_45163[(2)]);
var state_45163__$1 = (function (){var statearr_45188 = state_45163;
(statearr_45188[(13)] = inst_45147);

return statearr_45188;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45163__$1,(13),dchan);
} else {
if((state_val_45164 === (14))){
var inst_45152 = cljs.core.async.close_BANG_(out);
var state_45163__$1 = state_45163;
var statearr_45189_46414 = state_45163__$1;
(statearr_45189_46414[(2)] = inst_45152);

(statearr_45189_46414[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45164 === (16))){
var inst_45159 = (state_45163[(2)]);
var state_45163__$1 = state_45163;
var statearr_45190_46416 = state_45163__$1;
(statearr_45190_46416[(2)] = inst_45159);

(statearr_45190_46416[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45164 === (10))){
var inst_45124 = (state_45163[(8)]);
var inst_45140 = (state_45163[(2)]);
var inst_45141 = (inst_45124 + (1));
var inst_45124__$1 = inst_45141;
var state_45163__$1 = (function (){var statearr_45191 = state_45163;
(statearr_45191[(14)] = inst_45140);

(statearr_45191[(8)] = inst_45124__$1);

return statearr_45191;
})();
var statearr_45192_46418 = state_45163__$1;
(statearr_45192_46418[(2)] = null);

(statearr_45192_46418[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45164 === (8))){
var inst_45145 = (state_45163[(2)]);
var state_45163__$1 = state_45163;
var statearr_45194_46419 = state_45163__$1;
(statearr_45194_46419[(2)] = inst_45145);

(statearr_45194_46419[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43334__auto__ = null;
var cljs$core$async$state_machine__43334__auto____0 = (function (){
var statearr_45196 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45196[(0)] = cljs$core$async$state_machine__43334__auto__);

(statearr_45196[(1)] = (1));

return statearr_45196;
});
var cljs$core$async$state_machine__43334__auto____1 = (function (state_45163){
while(true){
var ret_value__43335__auto__ = (function (){try{while(true){
var result__43336__auto__ = switch__43333__auto__(state_45163);
if(cljs.core.keyword_identical_QMARK_(result__43336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43336__auto__;
}
break;
}
}catch (e45197){var ex__43337__auto__ = e45197;
var statearr_45198_46420 = state_45163;
(statearr_45198_46420[(2)] = ex__43337__auto__);


if(cljs.core.seq((state_45163[(4)]))){
var statearr_45199_46421 = state_45163;
(statearr_45199_46421[(1)] = cljs.core.first((state_45163[(4)])));

} else {
throw ex__43337__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43335__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46422 = state_45163;
state_45163 = G__46422;
continue;
} else {
return ret_value__43335__auto__;
}
break;
}
});
cljs$core$async$state_machine__43334__auto__ = function(state_45163){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43334__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43334__auto____1.call(this,state_45163);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43334__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43334__auto____0;
cljs$core$async$state_machine__43334__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43334__auto____1;
return cljs$core$async$state_machine__43334__auto__;
})()
})();
var state__43468__auto__ = (function (){var statearr_45200 = f__43467__auto__();
(statearr_45200[(6)] = c__43466__auto___46394);

return statearr_45200;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43468__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__45203 = arguments.length;
switch (G__45203) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__43466__auto___46426 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43467__auto__ = (function (){var switch__43333__auto__ = (function (state_45235){
var state_val_45236 = (state_45235[(1)]);
if((state_val_45236 === (7))){
var inst_45214 = (state_45235[(7)]);
var inst_45215 = (state_45235[(8)]);
var inst_45214__$1 = (state_45235[(2)]);
var inst_45215__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45214__$1,(0),null);
var inst_45216 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45214__$1,(1),null);
var inst_45217 = (inst_45215__$1 == null);
var state_45235__$1 = (function (){var statearr_45237 = state_45235;
(statearr_45237[(7)] = inst_45214__$1);

(statearr_45237[(8)] = inst_45215__$1);

(statearr_45237[(9)] = inst_45216);

return statearr_45237;
})();
if(cljs.core.truth_(inst_45217)){
var statearr_45238_46428 = state_45235__$1;
(statearr_45238_46428[(1)] = (8));

} else {
var statearr_45239_46429 = state_45235__$1;
(statearr_45239_46429[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45236 === (1))){
var inst_45204 = cljs.core.vec(chs);
var inst_45205 = inst_45204;
var state_45235__$1 = (function (){var statearr_45240 = state_45235;
(statearr_45240[(10)] = inst_45205);

return statearr_45240;
})();
var statearr_45241_46430 = state_45235__$1;
(statearr_45241_46430[(2)] = null);

(statearr_45241_46430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45236 === (4))){
var inst_45205 = (state_45235[(10)]);
var state_45235__$1 = state_45235;
return cljs.core.async.ioc_alts_BANG_(state_45235__$1,(7),inst_45205);
} else {
if((state_val_45236 === (6))){
var inst_45231 = (state_45235[(2)]);
var state_45235__$1 = state_45235;
var statearr_45242_46431 = state_45235__$1;
(statearr_45242_46431[(2)] = inst_45231);

(statearr_45242_46431[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45236 === (3))){
var inst_45233 = (state_45235[(2)]);
var state_45235__$1 = state_45235;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45235__$1,inst_45233);
} else {
if((state_val_45236 === (2))){
var inst_45205 = (state_45235[(10)]);
var inst_45207 = cljs.core.count(inst_45205);
var inst_45208 = (inst_45207 > (0));
var state_45235__$1 = state_45235;
if(cljs.core.truth_(inst_45208)){
var statearr_45244_46432 = state_45235__$1;
(statearr_45244_46432[(1)] = (4));

} else {
var statearr_45245_46433 = state_45235__$1;
(statearr_45245_46433[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45236 === (11))){
var inst_45205 = (state_45235[(10)]);
var inst_45224 = (state_45235[(2)]);
var tmp45243 = inst_45205;
var inst_45205__$1 = tmp45243;
var state_45235__$1 = (function (){var statearr_45246 = state_45235;
(statearr_45246[(11)] = inst_45224);

(statearr_45246[(10)] = inst_45205__$1);

return statearr_45246;
})();
var statearr_45247_46436 = state_45235__$1;
(statearr_45247_46436[(2)] = null);

(statearr_45247_46436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45236 === (9))){
var inst_45215 = (state_45235[(8)]);
var state_45235__$1 = state_45235;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45235__$1,(11),out,inst_45215);
} else {
if((state_val_45236 === (5))){
var inst_45229 = cljs.core.async.close_BANG_(out);
var state_45235__$1 = state_45235;
var statearr_45248_46437 = state_45235__$1;
(statearr_45248_46437[(2)] = inst_45229);

(statearr_45248_46437[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45236 === (10))){
var inst_45227 = (state_45235[(2)]);
var state_45235__$1 = state_45235;
var statearr_45249_46438 = state_45235__$1;
(statearr_45249_46438[(2)] = inst_45227);

(statearr_45249_46438[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45236 === (8))){
var inst_45214 = (state_45235[(7)]);
var inst_45215 = (state_45235[(8)]);
var inst_45216 = (state_45235[(9)]);
var inst_45205 = (state_45235[(10)]);
var inst_45219 = (function (){var cs = inst_45205;
var vec__45210 = inst_45214;
var v = inst_45215;
var c = inst_45216;
return (function (p1__45201_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__45201_SHARP_);
});
})();
var inst_45220 = cljs.core.filterv(inst_45219,inst_45205);
var inst_45205__$1 = inst_45220;
var state_45235__$1 = (function (){var statearr_45250 = state_45235;
(statearr_45250[(10)] = inst_45205__$1);

return statearr_45250;
})();
var statearr_45251_46443 = state_45235__$1;
(statearr_45251_46443[(2)] = null);

(statearr_45251_46443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43334__auto__ = null;
var cljs$core$async$state_machine__43334__auto____0 = (function (){
var statearr_45252 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45252[(0)] = cljs$core$async$state_machine__43334__auto__);

(statearr_45252[(1)] = (1));

return statearr_45252;
});
var cljs$core$async$state_machine__43334__auto____1 = (function (state_45235){
while(true){
var ret_value__43335__auto__ = (function (){try{while(true){
var result__43336__auto__ = switch__43333__auto__(state_45235);
if(cljs.core.keyword_identical_QMARK_(result__43336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43336__auto__;
}
break;
}
}catch (e45253){var ex__43337__auto__ = e45253;
var statearr_45254_46445 = state_45235;
(statearr_45254_46445[(2)] = ex__43337__auto__);


if(cljs.core.seq((state_45235[(4)]))){
var statearr_45255_46448 = state_45235;
(statearr_45255_46448[(1)] = cljs.core.first((state_45235[(4)])));

} else {
throw ex__43337__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43335__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46452 = state_45235;
state_45235 = G__46452;
continue;
} else {
return ret_value__43335__auto__;
}
break;
}
});
cljs$core$async$state_machine__43334__auto__ = function(state_45235){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43334__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43334__auto____1.call(this,state_45235);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43334__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43334__auto____0;
cljs$core$async$state_machine__43334__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43334__auto____1;
return cljs$core$async$state_machine__43334__auto__;
})()
})();
var state__43468__auto__ = (function (){var statearr_45256 = f__43467__auto__();
(statearr_45256[(6)] = c__43466__auto___46426);

return statearr_45256;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43468__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__45262 = arguments.length;
switch (G__45262) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__43466__auto___46456 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43467__auto__ = (function (){var switch__43333__auto__ = (function (state_45288){
var state_val_45289 = (state_45288[(1)]);
if((state_val_45289 === (7))){
var inst_45269 = (state_45288[(7)]);
var inst_45269__$1 = (state_45288[(2)]);
var inst_45270 = (inst_45269__$1 == null);
var inst_45271 = cljs.core.not(inst_45270);
var state_45288__$1 = (function (){var statearr_45294 = state_45288;
(statearr_45294[(7)] = inst_45269__$1);

return statearr_45294;
})();
if(inst_45271){
var statearr_45295_46459 = state_45288__$1;
(statearr_45295_46459[(1)] = (8));

} else {
var statearr_45296_46463 = state_45288__$1;
(statearr_45296_46463[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45289 === (1))){
var inst_45264 = (0);
var state_45288__$1 = (function (){var statearr_45297 = state_45288;
(statearr_45297[(8)] = inst_45264);

return statearr_45297;
})();
var statearr_45298_46465 = state_45288__$1;
(statearr_45298_46465[(2)] = null);

(statearr_45298_46465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45289 === (4))){
var state_45288__$1 = state_45288;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45288__$1,(7),ch);
} else {
if((state_val_45289 === (6))){
var inst_45283 = (state_45288[(2)]);
var state_45288__$1 = state_45288;
var statearr_45299_46467 = state_45288__$1;
(statearr_45299_46467[(2)] = inst_45283);

(statearr_45299_46467[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45289 === (3))){
var inst_45285 = (state_45288[(2)]);
var inst_45286 = cljs.core.async.close_BANG_(out);
var state_45288__$1 = (function (){var statearr_45300 = state_45288;
(statearr_45300[(9)] = inst_45285);

return statearr_45300;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_45288__$1,inst_45286);
} else {
if((state_val_45289 === (2))){
var inst_45264 = (state_45288[(8)]);
var inst_45266 = (inst_45264 < n);
var state_45288__$1 = state_45288;
if(cljs.core.truth_(inst_45266)){
var statearr_45301_46469 = state_45288__$1;
(statearr_45301_46469[(1)] = (4));

} else {
var statearr_45302_46470 = state_45288__$1;
(statearr_45302_46470[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45289 === (11))){
var inst_45264 = (state_45288[(8)]);
var inst_45275 = (state_45288[(2)]);
var inst_45276 = (inst_45264 + (1));
var inst_45264__$1 = inst_45276;
var state_45288__$1 = (function (){var statearr_45303 = state_45288;
(statearr_45303[(8)] = inst_45264__$1);

(statearr_45303[(10)] = inst_45275);

return statearr_45303;
})();
var statearr_45304_46471 = state_45288__$1;
(statearr_45304_46471[(2)] = null);

(statearr_45304_46471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45289 === (9))){
var state_45288__$1 = state_45288;
var statearr_45305_46472 = state_45288__$1;
(statearr_45305_46472[(2)] = null);

(statearr_45305_46472[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45289 === (5))){
var state_45288__$1 = state_45288;
var statearr_45306_46474 = state_45288__$1;
(statearr_45306_46474[(2)] = null);

(statearr_45306_46474[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45289 === (10))){
var inst_45280 = (state_45288[(2)]);
var state_45288__$1 = state_45288;
var statearr_45307_46475 = state_45288__$1;
(statearr_45307_46475[(2)] = inst_45280);

(statearr_45307_46475[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45289 === (8))){
var inst_45269 = (state_45288[(7)]);
var state_45288__$1 = state_45288;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45288__$1,(11),out,inst_45269);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43334__auto__ = null;
var cljs$core$async$state_machine__43334__auto____0 = (function (){
var statearr_45308 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45308[(0)] = cljs$core$async$state_machine__43334__auto__);

(statearr_45308[(1)] = (1));

return statearr_45308;
});
var cljs$core$async$state_machine__43334__auto____1 = (function (state_45288){
while(true){
var ret_value__43335__auto__ = (function (){try{while(true){
var result__43336__auto__ = switch__43333__auto__(state_45288);
if(cljs.core.keyword_identical_QMARK_(result__43336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43336__auto__;
}
break;
}
}catch (e45309){var ex__43337__auto__ = e45309;
var statearr_45310_46477 = state_45288;
(statearr_45310_46477[(2)] = ex__43337__auto__);


if(cljs.core.seq((state_45288[(4)]))){
var statearr_45311_46482 = state_45288;
(statearr_45311_46482[(1)] = cljs.core.first((state_45288[(4)])));

} else {
throw ex__43337__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43335__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46483 = state_45288;
state_45288 = G__46483;
continue;
} else {
return ret_value__43335__auto__;
}
break;
}
});
cljs$core$async$state_machine__43334__auto__ = function(state_45288){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43334__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43334__auto____1.call(this,state_45288);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43334__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43334__auto____0;
cljs$core$async$state_machine__43334__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43334__auto____1;
return cljs$core$async$state_machine__43334__auto__;
})()
})();
var state__43468__auto__ = (function (){var statearr_45312 = f__43467__auto__();
(statearr_45312[(6)] = c__43466__auto___46456);

return statearr_45312;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43468__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45314 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45314 = (function (f,ch,meta45315){
this.f = f;
this.ch = ch;
this.meta45315 = meta45315;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45314.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45316,meta45315__$1){
var self__ = this;
var _45316__$1 = this;
return (new cljs.core.async.t_cljs$core$async45314(self__.f,self__.ch,meta45315__$1));
}));

(cljs.core.async.t_cljs$core$async45314.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45316){
var self__ = this;
var _45316__$1 = this;
return self__.meta45315;
}));

(cljs.core.async.t_cljs$core$async45314.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45314.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async45314.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async45314.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45314.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45321 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45321 = (function (f,ch,meta45315,_,fn1,meta45322){
this.f = f;
this.ch = ch;
this.meta45315 = meta45315;
this._ = _;
this.fn1 = fn1;
this.meta45322 = meta45322;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45321.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45323,meta45322__$1){
var self__ = this;
var _45323__$1 = this;
return (new cljs.core.async.t_cljs$core$async45321(self__.f,self__.ch,self__.meta45315,self__._,self__.fn1,meta45322__$1));
}));

(cljs.core.async.t_cljs$core$async45321.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45323){
var self__ = this;
var _45323__$1 = this;
return self__.meta45322;
}));

(cljs.core.async.t_cljs$core$async45321.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45321.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async45321.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async45321.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__45313_SHARP_){
var G__45324 = (((p1__45313_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__45313_SHARP_) : self__.f.call(null,p1__45313_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__45324) : f1.call(null,G__45324));
});
}));

(cljs.core.async.t_cljs$core$async45321.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45315","meta45315",1200231910,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async45314","cljs.core.async/t_cljs$core$async45314",-1092124960,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta45322","meta45322",1406522519,null)], null);
}));

(cljs.core.async.t_cljs$core$async45321.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45321.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45321");

(cljs.core.async.t_cljs$core$async45321.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async45321");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45321.
 */
cljs.core.async.__GT_t_cljs$core$async45321 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async45321(f__$1,ch__$1,meta45315__$1,___$2,fn1__$1,meta45322){
return (new cljs.core.async.t_cljs$core$async45321(f__$1,ch__$1,meta45315__$1,___$2,fn1__$1,meta45322));
});

}

return (new cljs.core.async.t_cljs$core$async45321(self__.f,self__.ch,self__.meta45315,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4210__auto__ = ret;
if(cljs.core.truth_(and__4210__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4210__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__45326 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__45326) : self__.f.call(null,G__45326));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async45314.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45314.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async45314.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45315","meta45315",1200231910,null)], null);
}));

(cljs.core.async.t_cljs$core$async45314.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45314.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45314");

(cljs.core.async.t_cljs$core$async45314.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async45314");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45314.
 */
cljs.core.async.__GT_t_cljs$core$async45314 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async45314(f__$1,ch__$1,meta45315){
return (new cljs.core.async.t_cljs$core$async45314(f__$1,ch__$1,meta45315));
});

}

return (new cljs.core.async.t_cljs$core$async45314(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45329 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45329 = (function (f,ch,meta45330){
this.f = f;
this.ch = ch;
this.meta45330 = meta45330;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45329.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45331,meta45330__$1){
var self__ = this;
var _45331__$1 = this;
return (new cljs.core.async.t_cljs$core$async45329(self__.f,self__.ch,meta45330__$1));
}));

(cljs.core.async.t_cljs$core$async45329.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45331){
var self__ = this;
var _45331__$1 = this;
return self__.meta45330;
}));

(cljs.core.async.t_cljs$core$async45329.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45329.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async45329.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45329.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async45329.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45329.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async45329.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45330","meta45330",-1520849255,null)], null);
}));

(cljs.core.async.t_cljs$core$async45329.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45329.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45329");

(cljs.core.async.t_cljs$core$async45329.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async45329");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45329.
 */
cljs.core.async.__GT_t_cljs$core$async45329 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async45329(f__$1,ch__$1,meta45330){
return (new cljs.core.async.t_cljs$core$async45329(f__$1,ch__$1,meta45330));
});

}

return (new cljs.core.async.t_cljs$core$async45329(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45338 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45338 = (function (p,ch,meta45339){
this.p = p;
this.ch = ch;
this.meta45339 = meta45339;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45338.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45340,meta45339__$1){
var self__ = this;
var _45340__$1 = this;
return (new cljs.core.async.t_cljs$core$async45338(self__.p,self__.ch,meta45339__$1));
}));

(cljs.core.async.t_cljs$core$async45338.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45340){
var self__ = this;
var _45340__$1 = this;
return self__.meta45339;
}));

(cljs.core.async.t_cljs$core$async45338.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45338.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async45338.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async45338.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45338.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async45338.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45338.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async45338.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45339","meta45339",1442897554,null)], null);
}));

(cljs.core.async.t_cljs$core$async45338.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45338.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45338");

(cljs.core.async.t_cljs$core$async45338.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async45338");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45338.
 */
cljs.core.async.__GT_t_cljs$core$async45338 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async45338(p__$1,ch__$1,meta45339){
return (new cljs.core.async.t_cljs$core$async45338(p__$1,ch__$1,meta45339));
});

}

return (new cljs.core.async.t_cljs$core$async45338(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__45345 = arguments.length;
switch (G__45345) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__43466__auto___46526 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43467__auto__ = (function (){var switch__43333__auto__ = (function (state_45367){
var state_val_45368 = (state_45367[(1)]);
if((state_val_45368 === (7))){
var inst_45363 = (state_45367[(2)]);
var state_45367__$1 = state_45367;
var statearr_45369_46527 = state_45367__$1;
(statearr_45369_46527[(2)] = inst_45363);

(statearr_45369_46527[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45368 === (1))){
var state_45367__$1 = state_45367;
var statearr_45370_46528 = state_45367__$1;
(statearr_45370_46528[(2)] = null);

(statearr_45370_46528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45368 === (4))){
var inst_45348 = (state_45367[(7)]);
var inst_45348__$1 = (state_45367[(2)]);
var inst_45350 = (inst_45348__$1 == null);
var state_45367__$1 = (function (){var statearr_45371 = state_45367;
(statearr_45371[(7)] = inst_45348__$1);

return statearr_45371;
})();
if(cljs.core.truth_(inst_45350)){
var statearr_45372_46529 = state_45367__$1;
(statearr_45372_46529[(1)] = (5));

} else {
var statearr_45373_46530 = state_45367__$1;
(statearr_45373_46530[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45368 === (6))){
var inst_45348 = (state_45367[(7)]);
var inst_45354 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_45348) : p.call(null,inst_45348));
var state_45367__$1 = state_45367;
if(cljs.core.truth_(inst_45354)){
var statearr_45374_46531 = state_45367__$1;
(statearr_45374_46531[(1)] = (8));

} else {
var statearr_45375_46532 = state_45367__$1;
(statearr_45375_46532[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45368 === (3))){
var inst_45365 = (state_45367[(2)]);
var state_45367__$1 = state_45367;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45367__$1,inst_45365);
} else {
if((state_val_45368 === (2))){
var state_45367__$1 = state_45367;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45367__$1,(4),ch);
} else {
if((state_val_45368 === (11))){
var inst_45357 = (state_45367[(2)]);
var state_45367__$1 = state_45367;
var statearr_45376_46533 = state_45367__$1;
(statearr_45376_46533[(2)] = inst_45357);

(statearr_45376_46533[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45368 === (9))){
var state_45367__$1 = state_45367;
var statearr_45377_46534 = state_45367__$1;
(statearr_45377_46534[(2)] = null);

(statearr_45377_46534[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45368 === (5))){
var inst_45352 = cljs.core.async.close_BANG_(out);
var state_45367__$1 = state_45367;
var statearr_45378_46535 = state_45367__$1;
(statearr_45378_46535[(2)] = inst_45352);

(statearr_45378_46535[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45368 === (10))){
var inst_45360 = (state_45367[(2)]);
var state_45367__$1 = (function (){var statearr_45379 = state_45367;
(statearr_45379[(8)] = inst_45360);

return statearr_45379;
})();
var statearr_45380_46542 = state_45367__$1;
(statearr_45380_46542[(2)] = null);

(statearr_45380_46542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45368 === (8))){
var inst_45348 = (state_45367[(7)]);
var state_45367__$1 = state_45367;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45367__$1,(11),out,inst_45348);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43334__auto__ = null;
var cljs$core$async$state_machine__43334__auto____0 = (function (){
var statearr_45381 = [null,null,null,null,null,null,null,null,null];
(statearr_45381[(0)] = cljs$core$async$state_machine__43334__auto__);

(statearr_45381[(1)] = (1));

return statearr_45381;
});
var cljs$core$async$state_machine__43334__auto____1 = (function (state_45367){
while(true){
var ret_value__43335__auto__ = (function (){try{while(true){
var result__43336__auto__ = switch__43333__auto__(state_45367);
if(cljs.core.keyword_identical_QMARK_(result__43336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43336__auto__;
}
break;
}
}catch (e45382){var ex__43337__auto__ = e45382;
var statearr_45383_46543 = state_45367;
(statearr_45383_46543[(2)] = ex__43337__auto__);


if(cljs.core.seq((state_45367[(4)]))){
var statearr_45384_46544 = state_45367;
(statearr_45384_46544[(1)] = cljs.core.first((state_45367[(4)])));

} else {
throw ex__43337__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43335__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46545 = state_45367;
state_45367 = G__46545;
continue;
} else {
return ret_value__43335__auto__;
}
break;
}
});
cljs$core$async$state_machine__43334__auto__ = function(state_45367){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43334__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43334__auto____1.call(this,state_45367);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43334__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43334__auto____0;
cljs$core$async$state_machine__43334__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43334__auto____1;
return cljs$core$async$state_machine__43334__auto__;
})()
})();
var state__43468__auto__ = (function (){var statearr_45385 = f__43467__auto__();
(statearr_45385[(6)] = c__43466__auto___46526);

return statearr_45385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43468__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__45387 = arguments.length;
switch (G__45387) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__43466__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43467__auto__ = (function (){var switch__43333__auto__ = (function (state_45449){
var state_val_45450 = (state_45449[(1)]);
if((state_val_45450 === (7))){
var inst_45445 = (state_45449[(2)]);
var state_45449__$1 = state_45449;
var statearr_45451_46553 = state_45449__$1;
(statearr_45451_46553[(2)] = inst_45445);

(statearr_45451_46553[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45450 === (20))){
var inst_45415 = (state_45449[(7)]);
var inst_45426 = (state_45449[(2)]);
var inst_45427 = cljs.core.next(inst_45415);
var inst_45401 = inst_45427;
var inst_45402 = null;
var inst_45403 = (0);
var inst_45404 = (0);
var state_45449__$1 = (function (){var statearr_45452 = state_45449;
(statearr_45452[(8)] = inst_45401);

(statearr_45452[(9)] = inst_45403);

(statearr_45452[(10)] = inst_45404);

(statearr_45452[(11)] = inst_45426);

(statearr_45452[(12)] = inst_45402);

return statearr_45452;
})();
var statearr_45453_46554 = state_45449__$1;
(statearr_45453_46554[(2)] = null);

(statearr_45453_46554[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45450 === (1))){
var state_45449__$1 = state_45449;
var statearr_45454_46555 = state_45449__$1;
(statearr_45454_46555[(2)] = null);

(statearr_45454_46555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45450 === (4))){
var inst_45390 = (state_45449[(13)]);
var inst_45390__$1 = (state_45449[(2)]);
var inst_45391 = (inst_45390__$1 == null);
var state_45449__$1 = (function (){var statearr_45455 = state_45449;
(statearr_45455[(13)] = inst_45390__$1);

return statearr_45455;
})();
if(cljs.core.truth_(inst_45391)){
var statearr_45456_46556 = state_45449__$1;
(statearr_45456_46556[(1)] = (5));

} else {
var statearr_45457_46557 = state_45449__$1;
(statearr_45457_46557[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45450 === (15))){
var state_45449__$1 = state_45449;
var statearr_45461_46558 = state_45449__$1;
(statearr_45461_46558[(2)] = null);

(statearr_45461_46558[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45450 === (21))){
var state_45449__$1 = state_45449;
var statearr_45462_46559 = state_45449__$1;
(statearr_45462_46559[(2)] = null);

(statearr_45462_46559[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45450 === (13))){
var inst_45401 = (state_45449[(8)]);
var inst_45403 = (state_45449[(9)]);
var inst_45404 = (state_45449[(10)]);
var inst_45402 = (state_45449[(12)]);
var inst_45411 = (state_45449[(2)]);
var inst_45412 = (inst_45404 + (1));
var tmp45458 = inst_45401;
var tmp45459 = inst_45403;
var tmp45460 = inst_45402;
var inst_45401__$1 = tmp45458;
var inst_45402__$1 = tmp45460;
var inst_45403__$1 = tmp45459;
var inst_45404__$1 = inst_45412;
var state_45449__$1 = (function (){var statearr_45463 = state_45449;
(statearr_45463[(8)] = inst_45401__$1);

(statearr_45463[(9)] = inst_45403__$1);

(statearr_45463[(10)] = inst_45404__$1);

(statearr_45463[(12)] = inst_45402__$1);

(statearr_45463[(14)] = inst_45411);

return statearr_45463;
})();
var statearr_45464_46560 = state_45449__$1;
(statearr_45464_46560[(2)] = null);

(statearr_45464_46560[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45450 === (22))){
var state_45449__$1 = state_45449;
var statearr_45465_46561 = state_45449__$1;
(statearr_45465_46561[(2)] = null);

(statearr_45465_46561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45450 === (6))){
var inst_45390 = (state_45449[(13)]);
var inst_45399 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_45390) : f.call(null,inst_45390));
var inst_45400 = cljs.core.seq(inst_45399);
var inst_45401 = inst_45400;
var inst_45402 = null;
var inst_45403 = (0);
var inst_45404 = (0);
var state_45449__$1 = (function (){var statearr_45466 = state_45449;
(statearr_45466[(8)] = inst_45401);

(statearr_45466[(9)] = inst_45403);

(statearr_45466[(10)] = inst_45404);

(statearr_45466[(12)] = inst_45402);

return statearr_45466;
})();
var statearr_45467_46568 = state_45449__$1;
(statearr_45467_46568[(2)] = null);

(statearr_45467_46568[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45450 === (17))){
var inst_45415 = (state_45449[(7)]);
var inst_45419 = cljs.core.chunk_first(inst_45415);
var inst_45420 = cljs.core.chunk_rest(inst_45415);
var inst_45421 = cljs.core.count(inst_45419);
var inst_45401 = inst_45420;
var inst_45402 = inst_45419;
var inst_45403 = inst_45421;
var inst_45404 = (0);
var state_45449__$1 = (function (){var statearr_45468 = state_45449;
(statearr_45468[(8)] = inst_45401);

(statearr_45468[(9)] = inst_45403);

(statearr_45468[(10)] = inst_45404);

(statearr_45468[(12)] = inst_45402);

return statearr_45468;
})();
var statearr_45469_46569 = state_45449__$1;
(statearr_45469_46569[(2)] = null);

(statearr_45469_46569[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45450 === (3))){
var inst_45447 = (state_45449[(2)]);
var state_45449__$1 = state_45449;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45449__$1,inst_45447);
} else {
if((state_val_45450 === (12))){
var inst_45435 = (state_45449[(2)]);
var state_45449__$1 = state_45449;
var statearr_45470_46570 = state_45449__$1;
(statearr_45470_46570[(2)] = inst_45435);

(statearr_45470_46570[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45450 === (2))){
var state_45449__$1 = state_45449;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45449__$1,(4),in$);
} else {
if((state_val_45450 === (23))){
var inst_45443 = (state_45449[(2)]);
var state_45449__$1 = state_45449;
var statearr_45471_46571 = state_45449__$1;
(statearr_45471_46571[(2)] = inst_45443);

(statearr_45471_46571[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45450 === (19))){
var inst_45430 = (state_45449[(2)]);
var state_45449__$1 = state_45449;
var statearr_45472_46572 = state_45449__$1;
(statearr_45472_46572[(2)] = inst_45430);

(statearr_45472_46572[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45450 === (11))){
var inst_45401 = (state_45449[(8)]);
var inst_45415 = (state_45449[(7)]);
var inst_45415__$1 = cljs.core.seq(inst_45401);
var state_45449__$1 = (function (){var statearr_45473 = state_45449;
(statearr_45473[(7)] = inst_45415__$1);

return statearr_45473;
})();
if(inst_45415__$1){
var statearr_45474_46573 = state_45449__$1;
(statearr_45474_46573[(1)] = (14));

} else {
var statearr_45475_46574 = state_45449__$1;
(statearr_45475_46574[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45450 === (9))){
var inst_45437 = (state_45449[(2)]);
var inst_45438 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_45449__$1 = (function (){var statearr_45476 = state_45449;
(statearr_45476[(15)] = inst_45437);

return statearr_45476;
})();
if(cljs.core.truth_(inst_45438)){
var statearr_45477_46575 = state_45449__$1;
(statearr_45477_46575[(1)] = (21));

} else {
var statearr_45478_46576 = state_45449__$1;
(statearr_45478_46576[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45450 === (5))){
var inst_45393 = cljs.core.async.close_BANG_(out);
var state_45449__$1 = state_45449;
var statearr_45479_46577 = state_45449__$1;
(statearr_45479_46577[(2)] = inst_45393);

(statearr_45479_46577[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45450 === (14))){
var inst_45415 = (state_45449[(7)]);
var inst_45417 = cljs.core.chunked_seq_QMARK_(inst_45415);
var state_45449__$1 = state_45449;
if(inst_45417){
var statearr_45480_46578 = state_45449__$1;
(statearr_45480_46578[(1)] = (17));

} else {
var statearr_45481_46579 = state_45449__$1;
(statearr_45481_46579[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45450 === (16))){
var inst_45433 = (state_45449[(2)]);
var state_45449__$1 = state_45449;
var statearr_45482_46580 = state_45449__$1;
(statearr_45482_46580[(2)] = inst_45433);

(statearr_45482_46580[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45450 === (10))){
var inst_45404 = (state_45449[(10)]);
var inst_45402 = (state_45449[(12)]);
var inst_45409 = cljs.core._nth(inst_45402,inst_45404);
var state_45449__$1 = state_45449;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45449__$1,(13),out,inst_45409);
} else {
if((state_val_45450 === (18))){
var inst_45415 = (state_45449[(7)]);
var inst_45424 = cljs.core.first(inst_45415);
var state_45449__$1 = state_45449;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45449__$1,(20),out,inst_45424);
} else {
if((state_val_45450 === (8))){
var inst_45403 = (state_45449[(9)]);
var inst_45404 = (state_45449[(10)]);
var inst_45406 = (inst_45404 < inst_45403);
var inst_45407 = inst_45406;
var state_45449__$1 = state_45449;
if(cljs.core.truth_(inst_45407)){
var statearr_45483_46583 = state_45449__$1;
(statearr_45483_46583[(1)] = (10));

} else {
var statearr_45484_46584 = state_45449__$1;
(statearr_45484_46584[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__43334__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__43334__auto____0 = (function (){
var statearr_45485 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45485[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__43334__auto__);

(statearr_45485[(1)] = (1));

return statearr_45485;
});
var cljs$core$async$mapcat_STAR__$_state_machine__43334__auto____1 = (function (state_45449){
while(true){
var ret_value__43335__auto__ = (function (){try{while(true){
var result__43336__auto__ = switch__43333__auto__(state_45449);
if(cljs.core.keyword_identical_QMARK_(result__43336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43336__auto__;
}
break;
}
}catch (e45486){var ex__43337__auto__ = e45486;
var statearr_45487_46585 = state_45449;
(statearr_45487_46585[(2)] = ex__43337__auto__);


if(cljs.core.seq((state_45449[(4)]))){
var statearr_45488_46588 = state_45449;
(statearr_45488_46588[(1)] = cljs.core.first((state_45449[(4)])));

} else {
throw ex__43337__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43335__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46591 = state_45449;
state_45449 = G__46591;
continue;
} else {
return ret_value__43335__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__43334__auto__ = function(state_45449){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__43334__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__43334__auto____1.call(this,state_45449);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__43334__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__43334__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__43334__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__43334__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__43334__auto__;
})()
})();
var state__43468__auto__ = (function (){var statearr_45489 = f__43467__auto__();
(statearr_45489[(6)] = c__43466__auto__);

return statearr_45489;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43468__auto__);
}));

return c__43466__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__45491 = arguments.length;
switch (G__45491) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__45493 = arguments.length;
switch (G__45493) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__45498 = arguments.length;
switch (G__45498) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__43466__auto___46597 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43467__auto__ = (function (){var switch__43333__auto__ = (function (state_45530){
var state_val_45531 = (state_45530[(1)]);
if((state_val_45531 === (7))){
var inst_45525 = (state_45530[(2)]);
var state_45530__$1 = state_45530;
var statearr_45535_46604 = state_45530__$1;
(statearr_45535_46604[(2)] = inst_45525);

(statearr_45535_46604[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45531 === (1))){
var inst_45506 = null;
var state_45530__$1 = (function (){var statearr_45538 = state_45530;
(statearr_45538[(7)] = inst_45506);

return statearr_45538;
})();
var statearr_45539_46606 = state_45530__$1;
(statearr_45539_46606[(2)] = null);

(statearr_45539_46606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45531 === (4))){
var inst_45509 = (state_45530[(8)]);
var inst_45509__$1 = (state_45530[(2)]);
var inst_45511 = (inst_45509__$1 == null);
var inst_45512 = cljs.core.not(inst_45511);
var state_45530__$1 = (function (){var statearr_45541 = state_45530;
(statearr_45541[(8)] = inst_45509__$1);

return statearr_45541;
})();
if(inst_45512){
var statearr_45545_46607 = state_45530__$1;
(statearr_45545_46607[(1)] = (5));

} else {
var statearr_45547_46608 = state_45530__$1;
(statearr_45547_46608[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45531 === (6))){
var state_45530__$1 = state_45530;
var statearr_45548_46609 = state_45530__$1;
(statearr_45548_46609[(2)] = null);

(statearr_45548_46609[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45531 === (3))){
var inst_45527 = (state_45530[(2)]);
var inst_45528 = cljs.core.async.close_BANG_(out);
var state_45530__$1 = (function (){var statearr_45550 = state_45530;
(statearr_45550[(9)] = inst_45527);

return statearr_45550;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_45530__$1,inst_45528);
} else {
if((state_val_45531 === (2))){
var state_45530__$1 = state_45530;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45530__$1,(4),ch);
} else {
if((state_val_45531 === (11))){
var inst_45509 = (state_45530[(8)]);
var inst_45519 = (state_45530[(2)]);
var inst_45506 = inst_45509;
var state_45530__$1 = (function (){var statearr_45563 = state_45530;
(statearr_45563[(10)] = inst_45519);

(statearr_45563[(7)] = inst_45506);

return statearr_45563;
})();
var statearr_45566_46613 = state_45530__$1;
(statearr_45566_46613[(2)] = null);

(statearr_45566_46613[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45531 === (9))){
var inst_45509 = (state_45530[(8)]);
var state_45530__$1 = state_45530;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45530__$1,(11),out,inst_45509);
} else {
if((state_val_45531 === (5))){
var inst_45509 = (state_45530[(8)]);
var inst_45506 = (state_45530[(7)]);
var inst_45514 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_45509,inst_45506);
var state_45530__$1 = state_45530;
if(inst_45514){
var statearr_45569_46616 = state_45530__$1;
(statearr_45569_46616[(1)] = (8));

} else {
var statearr_45570_46617 = state_45530__$1;
(statearr_45570_46617[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45531 === (10))){
var inst_45522 = (state_45530[(2)]);
var state_45530__$1 = state_45530;
var statearr_45571_46618 = state_45530__$1;
(statearr_45571_46618[(2)] = inst_45522);

(statearr_45571_46618[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45531 === (8))){
var inst_45506 = (state_45530[(7)]);
var tmp45568 = inst_45506;
var inst_45506__$1 = tmp45568;
var state_45530__$1 = (function (){var statearr_45573 = state_45530;
(statearr_45573[(7)] = inst_45506__$1);

return statearr_45573;
})();
var statearr_45576_46622 = state_45530__$1;
(statearr_45576_46622[(2)] = null);

(statearr_45576_46622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43334__auto__ = null;
var cljs$core$async$state_machine__43334__auto____0 = (function (){
var statearr_45579 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45579[(0)] = cljs$core$async$state_machine__43334__auto__);

(statearr_45579[(1)] = (1));

return statearr_45579;
});
var cljs$core$async$state_machine__43334__auto____1 = (function (state_45530){
while(true){
var ret_value__43335__auto__ = (function (){try{while(true){
var result__43336__auto__ = switch__43333__auto__(state_45530);
if(cljs.core.keyword_identical_QMARK_(result__43336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43336__auto__;
}
break;
}
}catch (e45581){var ex__43337__auto__ = e45581;
var statearr_45582_46623 = state_45530;
(statearr_45582_46623[(2)] = ex__43337__auto__);


if(cljs.core.seq((state_45530[(4)]))){
var statearr_45585_46624 = state_45530;
(statearr_45585_46624[(1)] = cljs.core.first((state_45530[(4)])));

} else {
throw ex__43337__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43335__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46625 = state_45530;
state_45530 = G__46625;
continue;
} else {
return ret_value__43335__auto__;
}
break;
}
});
cljs$core$async$state_machine__43334__auto__ = function(state_45530){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43334__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43334__auto____1.call(this,state_45530);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43334__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43334__auto____0;
cljs$core$async$state_machine__43334__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43334__auto____1;
return cljs$core$async$state_machine__43334__auto__;
})()
})();
var state__43468__auto__ = (function (){var statearr_45588 = f__43467__auto__();
(statearr_45588[(6)] = c__43466__auto___46597);

return statearr_45588;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43468__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__45595 = arguments.length;
switch (G__45595) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__43466__auto___46628 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43467__auto__ = (function (){var switch__43333__auto__ = (function (state_45637){
var state_val_45638 = (state_45637[(1)]);
if((state_val_45638 === (7))){
var inst_45633 = (state_45637[(2)]);
var state_45637__$1 = state_45637;
var statearr_45641_46629 = state_45637__$1;
(statearr_45641_46629[(2)] = inst_45633);

(statearr_45641_46629[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45638 === (1))){
var inst_45597 = (new Array(n));
var inst_45598 = inst_45597;
var inst_45599 = (0);
var state_45637__$1 = (function (){var statearr_45642 = state_45637;
(statearr_45642[(7)] = inst_45599);

(statearr_45642[(8)] = inst_45598);

return statearr_45642;
})();
var statearr_45643_46630 = state_45637__$1;
(statearr_45643_46630[(2)] = null);

(statearr_45643_46630[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45638 === (4))){
var inst_45605 = (state_45637[(9)]);
var inst_45605__$1 = (state_45637[(2)]);
var inst_45606 = (inst_45605__$1 == null);
var inst_45607 = cljs.core.not(inst_45606);
var state_45637__$1 = (function (){var statearr_45644 = state_45637;
(statearr_45644[(9)] = inst_45605__$1);

return statearr_45644;
})();
if(inst_45607){
var statearr_45645_46632 = state_45637__$1;
(statearr_45645_46632[(1)] = (5));

} else {
var statearr_45646_46633 = state_45637__$1;
(statearr_45646_46633[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45638 === (15))){
var inst_45627 = (state_45637[(2)]);
var state_45637__$1 = state_45637;
var statearr_45648_46635 = state_45637__$1;
(statearr_45648_46635[(2)] = inst_45627);

(statearr_45648_46635[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45638 === (13))){
var state_45637__$1 = state_45637;
var statearr_45649_46637 = state_45637__$1;
(statearr_45649_46637[(2)] = null);

(statearr_45649_46637[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45638 === (6))){
var inst_45599 = (state_45637[(7)]);
var inst_45623 = (inst_45599 > (0));
var state_45637__$1 = state_45637;
if(cljs.core.truth_(inst_45623)){
var statearr_45650_46639 = state_45637__$1;
(statearr_45650_46639[(1)] = (12));

} else {
var statearr_45651_46640 = state_45637__$1;
(statearr_45651_46640[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45638 === (3))){
var inst_45635 = (state_45637[(2)]);
var state_45637__$1 = state_45637;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45637__$1,inst_45635);
} else {
if((state_val_45638 === (12))){
var inst_45598 = (state_45637[(8)]);
var inst_45625 = cljs.core.vec(inst_45598);
var state_45637__$1 = state_45637;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45637__$1,(15),out,inst_45625);
} else {
if((state_val_45638 === (2))){
var state_45637__$1 = state_45637;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45637__$1,(4),ch);
} else {
if((state_val_45638 === (11))){
var inst_45617 = (state_45637[(2)]);
var inst_45618 = (new Array(n));
var inst_45598 = inst_45618;
var inst_45599 = (0);
var state_45637__$1 = (function (){var statearr_45653 = state_45637;
(statearr_45653[(10)] = inst_45617);

(statearr_45653[(7)] = inst_45599);

(statearr_45653[(8)] = inst_45598);

return statearr_45653;
})();
var statearr_45655_46642 = state_45637__$1;
(statearr_45655_46642[(2)] = null);

(statearr_45655_46642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45638 === (9))){
var inst_45598 = (state_45637[(8)]);
var inst_45615 = cljs.core.vec(inst_45598);
var state_45637__$1 = state_45637;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45637__$1,(11),out,inst_45615);
} else {
if((state_val_45638 === (5))){
var inst_45605 = (state_45637[(9)]);
var inst_45599 = (state_45637[(7)]);
var inst_45598 = (state_45637[(8)]);
var inst_45610 = (state_45637[(11)]);
var inst_45609 = (inst_45598[inst_45599] = inst_45605);
var inst_45610__$1 = (inst_45599 + (1));
var inst_45611 = (inst_45610__$1 < n);
var state_45637__$1 = (function (){var statearr_45660 = state_45637;
(statearr_45660[(11)] = inst_45610__$1);

(statearr_45660[(12)] = inst_45609);

return statearr_45660;
})();
if(cljs.core.truth_(inst_45611)){
var statearr_45661_46643 = state_45637__$1;
(statearr_45661_46643[(1)] = (8));

} else {
var statearr_45662_46646 = state_45637__$1;
(statearr_45662_46646[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45638 === (14))){
var inst_45630 = (state_45637[(2)]);
var inst_45631 = cljs.core.async.close_BANG_(out);
var state_45637__$1 = (function (){var statearr_45664 = state_45637;
(statearr_45664[(13)] = inst_45630);

return statearr_45664;
})();
var statearr_45665_46647 = state_45637__$1;
(statearr_45665_46647[(2)] = inst_45631);

(statearr_45665_46647[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45638 === (10))){
var inst_45621 = (state_45637[(2)]);
var state_45637__$1 = state_45637;
var statearr_45666_46648 = state_45637__$1;
(statearr_45666_46648[(2)] = inst_45621);

(statearr_45666_46648[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45638 === (8))){
var inst_45598 = (state_45637[(8)]);
var inst_45610 = (state_45637[(11)]);
var tmp45663 = inst_45598;
var inst_45598__$1 = tmp45663;
var inst_45599 = inst_45610;
var state_45637__$1 = (function (){var statearr_45667 = state_45637;
(statearr_45667[(7)] = inst_45599);

(statearr_45667[(8)] = inst_45598__$1);

return statearr_45667;
})();
var statearr_45672_46651 = state_45637__$1;
(statearr_45672_46651[(2)] = null);

(statearr_45672_46651[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43334__auto__ = null;
var cljs$core$async$state_machine__43334__auto____0 = (function (){
var statearr_45673 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45673[(0)] = cljs$core$async$state_machine__43334__auto__);

(statearr_45673[(1)] = (1));

return statearr_45673;
});
var cljs$core$async$state_machine__43334__auto____1 = (function (state_45637){
while(true){
var ret_value__43335__auto__ = (function (){try{while(true){
var result__43336__auto__ = switch__43333__auto__(state_45637);
if(cljs.core.keyword_identical_QMARK_(result__43336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43336__auto__;
}
break;
}
}catch (e45674){var ex__43337__auto__ = e45674;
var statearr_45675_46655 = state_45637;
(statearr_45675_46655[(2)] = ex__43337__auto__);


if(cljs.core.seq((state_45637[(4)]))){
var statearr_45676_46656 = state_45637;
(statearr_45676_46656[(1)] = cljs.core.first((state_45637[(4)])));

} else {
throw ex__43337__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43335__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46657 = state_45637;
state_45637 = G__46657;
continue;
} else {
return ret_value__43335__auto__;
}
break;
}
});
cljs$core$async$state_machine__43334__auto__ = function(state_45637){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43334__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43334__auto____1.call(this,state_45637);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43334__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43334__auto____0;
cljs$core$async$state_machine__43334__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43334__auto____1;
return cljs$core$async$state_machine__43334__auto__;
})()
})();
var state__43468__auto__ = (function (){var statearr_45681 = f__43467__auto__();
(statearr_45681[(6)] = c__43466__auto___46628);

return statearr_45681;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43468__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__45683 = arguments.length;
switch (G__45683) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__43466__auto___46661 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43467__auto__ = (function (){var switch__43333__auto__ = (function (state_45732){
var state_val_45733 = (state_45732[(1)]);
if((state_val_45733 === (7))){
var inst_45728 = (state_45732[(2)]);
var state_45732__$1 = state_45732;
var statearr_45736_46664 = state_45732__$1;
(statearr_45736_46664[(2)] = inst_45728);

(statearr_45736_46664[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45733 === (1))){
var inst_45686 = [];
var inst_45687 = inst_45686;
var inst_45688 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_45732__$1 = (function (){var statearr_45737 = state_45732;
(statearr_45737[(7)] = inst_45687);

(statearr_45737[(8)] = inst_45688);

return statearr_45737;
})();
var statearr_45738_46665 = state_45732__$1;
(statearr_45738_46665[(2)] = null);

(statearr_45738_46665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45733 === (4))){
var inst_45691 = (state_45732[(9)]);
var inst_45691__$1 = (state_45732[(2)]);
var inst_45692 = (inst_45691__$1 == null);
var inst_45693 = cljs.core.not(inst_45692);
var state_45732__$1 = (function (){var statearr_45739 = state_45732;
(statearr_45739[(9)] = inst_45691__$1);

return statearr_45739;
})();
if(inst_45693){
var statearr_45741_46667 = state_45732__$1;
(statearr_45741_46667[(1)] = (5));

} else {
var statearr_45742_46668 = state_45732__$1;
(statearr_45742_46668[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45733 === (15))){
var inst_45687 = (state_45732[(7)]);
var inst_45720 = cljs.core.vec(inst_45687);
var state_45732__$1 = state_45732;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45732__$1,(18),out,inst_45720);
} else {
if((state_val_45733 === (13))){
var inst_45714 = (state_45732[(2)]);
var state_45732__$1 = state_45732;
var statearr_45743_46673 = state_45732__$1;
(statearr_45743_46673[(2)] = inst_45714);

(statearr_45743_46673[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45733 === (6))){
var inst_45687 = (state_45732[(7)]);
var inst_45716 = inst_45687.length;
var inst_45717 = (inst_45716 > (0));
var state_45732__$1 = state_45732;
if(cljs.core.truth_(inst_45717)){
var statearr_45745_46675 = state_45732__$1;
(statearr_45745_46675[(1)] = (15));

} else {
var statearr_45747_46676 = state_45732__$1;
(statearr_45747_46676[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45733 === (17))){
var inst_45725 = (state_45732[(2)]);
var inst_45726 = cljs.core.async.close_BANG_(out);
var state_45732__$1 = (function (){var statearr_45752 = state_45732;
(statearr_45752[(10)] = inst_45725);

return statearr_45752;
})();
var statearr_45753_46678 = state_45732__$1;
(statearr_45753_46678[(2)] = inst_45726);

(statearr_45753_46678[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45733 === (3))){
var inst_45730 = (state_45732[(2)]);
var state_45732__$1 = state_45732;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45732__$1,inst_45730);
} else {
if((state_val_45733 === (12))){
var inst_45687 = (state_45732[(7)]);
var inst_45706 = cljs.core.vec(inst_45687);
var state_45732__$1 = state_45732;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45732__$1,(14),out,inst_45706);
} else {
if((state_val_45733 === (2))){
var state_45732__$1 = state_45732;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45732__$1,(4),ch);
} else {
if((state_val_45733 === (11))){
var inst_45695 = (state_45732[(11)]);
var inst_45687 = (state_45732[(7)]);
var inst_45691 = (state_45732[(9)]);
var inst_45703 = inst_45687.push(inst_45691);
var tmp45755 = inst_45687;
var inst_45687__$1 = tmp45755;
var inst_45688 = inst_45695;
var state_45732__$1 = (function (){var statearr_45756 = state_45732;
(statearr_45756[(7)] = inst_45687__$1);

(statearr_45756[(12)] = inst_45703);

(statearr_45756[(8)] = inst_45688);

return statearr_45756;
})();
var statearr_45758_46695 = state_45732__$1;
(statearr_45758_46695[(2)] = null);

(statearr_45758_46695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45733 === (9))){
var inst_45688 = (state_45732[(8)]);
var inst_45699 = cljs.core.keyword_identical_QMARK_(inst_45688,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_45732__$1 = state_45732;
var statearr_45759_46697 = state_45732__$1;
(statearr_45759_46697[(2)] = inst_45699);

(statearr_45759_46697[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45733 === (5))){
var inst_45695 = (state_45732[(11)]);
var inst_45696 = (state_45732[(13)]);
var inst_45691 = (state_45732[(9)]);
var inst_45688 = (state_45732[(8)]);
var inst_45695__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_45691) : f.call(null,inst_45691));
var inst_45696__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_45695__$1,inst_45688);
var state_45732__$1 = (function (){var statearr_45765 = state_45732;
(statearr_45765[(11)] = inst_45695__$1);

(statearr_45765[(13)] = inst_45696__$1);

return statearr_45765;
})();
if(inst_45696__$1){
var statearr_45766_46699 = state_45732__$1;
(statearr_45766_46699[(1)] = (8));

} else {
var statearr_45767_46700 = state_45732__$1;
(statearr_45767_46700[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45733 === (14))){
var inst_45695 = (state_45732[(11)]);
var inst_45691 = (state_45732[(9)]);
var inst_45708 = (state_45732[(2)]);
var inst_45709 = [];
var inst_45710 = inst_45709.push(inst_45691);
var inst_45687 = inst_45709;
var inst_45688 = inst_45695;
var state_45732__$1 = (function (){var statearr_45772 = state_45732;
(statearr_45772[(14)] = inst_45710);

(statearr_45772[(7)] = inst_45687);

(statearr_45772[(15)] = inst_45708);

(statearr_45772[(8)] = inst_45688);

return statearr_45772;
})();
var statearr_45773_46709 = state_45732__$1;
(statearr_45773_46709[(2)] = null);

(statearr_45773_46709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45733 === (16))){
var state_45732__$1 = state_45732;
var statearr_45777_46710 = state_45732__$1;
(statearr_45777_46710[(2)] = null);

(statearr_45777_46710[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45733 === (10))){
var inst_45701 = (state_45732[(2)]);
var state_45732__$1 = state_45732;
if(cljs.core.truth_(inst_45701)){
var statearr_45778_46716 = state_45732__$1;
(statearr_45778_46716[(1)] = (11));

} else {
var statearr_45779_46717 = state_45732__$1;
(statearr_45779_46717[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45733 === (18))){
var inst_45722 = (state_45732[(2)]);
var state_45732__$1 = state_45732;
var statearr_45780_46718 = state_45732__$1;
(statearr_45780_46718[(2)] = inst_45722);

(statearr_45780_46718[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45733 === (8))){
var inst_45696 = (state_45732[(13)]);
var state_45732__$1 = state_45732;
var statearr_45781_46723 = state_45732__$1;
(statearr_45781_46723[(2)] = inst_45696);

(statearr_45781_46723[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43334__auto__ = null;
var cljs$core$async$state_machine__43334__auto____0 = (function (){
var statearr_45782 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45782[(0)] = cljs$core$async$state_machine__43334__auto__);

(statearr_45782[(1)] = (1));

return statearr_45782;
});
var cljs$core$async$state_machine__43334__auto____1 = (function (state_45732){
while(true){
var ret_value__43335__auto__ = (function (){try{while(true){
var result__43336__auto__ = switch__43333__auto__(state_45732);
if(cljs.core.keyword_identical_QMARK_(result__43336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43336__auto__;
}
break;
}
}catch (e45783){var ex__43337__auto__ = e45783;
var statearr_45784_46733 = state_45732;
(statearr_45784_46733[(2)] = ex__43337__auto__);


if(cljs.core.seq((state_45732[(4)]))){
var statearr_45785_46737 = state_45732;
(statearr_45785_46737[(1)] = cljs.core.first((state_45732[(4)])));

} else {
throw ex__43337__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43335__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46738 = state_45732;
state_45732 = G__46738;
continue;
} else {
return ret_value__43335__auto__;
}
break;
}
});
cljs$core$async$state_machine__43334__auto__ = function(state_45732){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43334__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43334__auto____1.call(this,state_45732);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43334__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43334__auto____0;
cljs$core$async$state_machine__43334__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43334__auto____1;
return cljs$core$async$state_machine__43334__auto__;
})()
})();
var state__43468__auto__ = (function (){var statearr_45786 = f__43467__auto__();
(statearr_45786[(6)] = c__43466__auto___46661);

return statearr_45786;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43468__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
