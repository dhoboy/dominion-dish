goog.provide('ajax.xml_http_request');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__46959 = e.target.readyState;
var fexpr__46958 = new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null);
return (fexpr__46958.cljs$core$IFn$_invoke$arity$1 ? fexpr__46958.cljs$core$IFn$_invoke$arity$1(G__46959) : fexpr__46958.call(null,G__46959));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = (((typeof goog !== 'undefined') && (typeof goog.global !== 'undefined') && (typeof goog.global.XMLHttpRequest !== 'undefined'))?goog.global.XMLHttpRequest:(((typeof require !== 'undefined'))?(function (){var req = require;
return (req.cljs$core$IFn$_invoke$arity$1 ? req.cljs$core$IFn$_invoke$arity$1("xmlhttprequest") : req.call(null,"xmlhttprequest")).XMLHttpRequest;
})():null));
(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__46968,handler){
var map__46969 = p__46968;
var map__46969__$1 = cljs.core.__destructure_map(map__46969);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46969__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46969__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46969__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46969__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__46969__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__46969__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46969__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__46964_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state(p1__46964_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5753__auto___47084 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5753__auto___47084)){
var response_type_47089 = temp__5753__auto___47084;
(this$__$1.responseType = cljs.core.name(response_type_47089));
} else {
}

var seq__46976_47090 = cljs.core.seq(headers);
var chunk__46977_47091 = null;
var count__46978_47092 = (0);
var i__46979_47093 = (0);
while(true){
if((i__46979_47093 < count__46978_47092)){
var vec__46988_47099 = chunk__46977_47091.cljs$core$IIndexed$_nth$arity$2(null,i__46979_47093);
var k_47100 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46988_47099,(0),null);
var v_47101 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46988_47099,(1),null);
this$__$1.setRequestHeader(k_47100,v_47101);


var G__47103 = seq__46976_47090;
var G__47104 = chunk__46977_47091;
var G__47105 = count__46978_47092;
var G__47106 = (i__46979_47093 + (1));
seq__46976_47090 = G__47103;
chunk__46977_47091 = G__47104;
count__46978_47092 = G__47105;
i__46979_47093 = G__47106;
continue;
} else {
var temp__5753__auto___47112 = cljs.core.seq(seq__46976_47090);
if(temp__5753__auto___47112){
var seq__46976_47113__$1 = temp__5753__auto___47112;
if(cljs.core.chunked_seq_QMARK_(seq__46976_47113__$1)){
var c__4638__auto___47115 = cljs.core.chunk_first(seq__46976_47113__$1);
var G__47116 = cljs.core.chunk_rest(seq__46976_47113__$1);
var G__47117 = c__4638__auto___47115;
var G__47118 = cljs.core.count(c__4638__auto___47115);
var G__47119 = (0);
seq__46976_47090 = G__47116;
chunk__46977_47091 = G__47117;
count__46978_47092 = G__47118;
i__46979_47093 = G__47119;
continue;
} else {
var vec__46995_47129 = cljs.core.first(seq__46976_47113__$1);
var k_47130 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46995_47129,(0),null);
var v_47131 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46995_47129,(1),null);
this$__$1.setRequestHeader(k_47130,v_47131);


var G__47140 = cljs.core.next(seq__46976_47113__$1);
var G__47141 = null;
var G__47142 = (0);
var G__47143 = (0);
seq__46976_47090 = G__47140;
chunk__46977_47091 = G__47141;
count__46978_47092 = G__47142;
i__46979_47093 = G__47143;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__4212__auto__ = body;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return "";
}
})());

return this$__$1;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
}));

//# sourceMappingURL=ajax.xml_http_request.js.map
