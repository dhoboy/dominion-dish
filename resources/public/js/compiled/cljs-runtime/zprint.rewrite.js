goog.provide('zprint.rewrite');
zprint.rewrite.prewalk_subtree = (function zprint$rewrite$prewalk_subtree(p_QMARK_,f,zloc){
var loc = zloc;
while(true){
if(cljs.core.truth_((rewrite_clj.zip.end_QMARK_.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.end_QMARK_.cljs$core$IFn$_invoke$arity$1(loc) : rewrite_clj.zip.end_QMARK_.call(null,loc)))){
return loc;
} else {
if(cljs.core.truth_((p_QMARK_.cljs$core$IFn$_invoke$arity$1 ? p_QMARK_.cljs$core$IFn$_invoke$arity$1(loc) : p_QMARK_.call(null,loc)))){
var temp__5751__auto__ = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(loc) : f.call(null,loc));
if(cljs.core.truth_(temp__5751__auto__)){
var n = temp__5751__auto__;
var G__39580 = (rewrite_clj.zip.next.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.next.cljs$core$IFn$_invoke$arity$1(n) : rewrite_clj.zip.next.call(null,n));
loc = G__39580;
continue;
} else {
var G__39581 = (rewrite_clj.zip.next.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.next.cljs$core$IFn$_invoke$arity$1(loc) : rewrite_clj.zip.next.call(null,loc));
loc = G__39581;
continue;
}
} else {
var G__39583 = (rewrite_clj.zip.next.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.next.cljs$core$IFn$_invoke$arity$1(loc) : rewrite_clj.zip.next.call(null,loc));
loc = G__39583;
continue;
}
}
break;
}
});
zprint.rewrite.prewalk = (function zprint$rewrite$prewalk(zloc,p_QMARK_,f){
var G__39571 = zloc;
var G__39572 = (function (){var G__39573 = zprint.rewrite.prewalk_subtree(p_QMARK_,f,(function (){var G__39574 = zloc;
var G__39574__$1 = (((G__39574 == null))?null:(rewrite_clj.zip.node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.node.cljs$core$IFn$_invoke$arity$1(G__39574) : rewrite_clj.zip.node.call(null,G__39574)));
if((G__39574__$1 == null)){
return null;
} else {
return (zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1(G__39574__$1) : zprint.zutil.edn_STAR_.call(null,G__39574__$1));
}
})());
return (rewrite_clj.zip.root.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.root.cljs$core$IFn$_invoke$arity$1(G__39573) : rewrite_clj.zip.root.call(null,G__39573));
})();
return (rewrite_clj.zip.replace.cljs$core$IFn$_invoke$arity$2 ? rewrite_clj.zip.replace.cljs$core$IFn$_invoke$arity$2(G__39571,G__39572) : rewrite_clj.zip.replace.call(null,G__39571,G__39572));
});
/**
 * Given a zloc, get something out of it that is sortable.
 */
zprint.rewrite.get_sortable = (function zprint$rewrite$get_sortable(zloc){
var nloc = zloc;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((rewrite_clj.zip.tag.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.tag.cljs$core$IFn$_invoke$arity$1(nloc) : rewrite_clj.zip.tag.call(null,nloc)),new cljs.core.Keyword(null,"token","token",-1211463215))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1(nloc) : rewrite_clj.zip.string.call(null,nloc))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var next_element = (rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1(nloc) : rewrite_clj.zip.right.call(null,nloc));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((rewrite_clj.zip.tag.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.tag.cljs$core$IFn$_invoke$arity$1(next_element) : rewrite_clj.zip.tag.call(null,next_element)),new cljs.core.Keyword(null,"token","token",-1211463215))){
return (rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1(next_element) : rewrite_clj.zip.string.call(null,next_element));
} else {
return "";
}
})())].join('');
} else {
var G__39584 = (rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1(nloc) : rewrite_clj.zip.down.call(null,nloc));
nloc = G__39584;
continue;
}
break;
}
});
/**
 * Sort the everything in the vector to the right of zloc.
 */
zprint.rewrite.sort_val = (function zprint$rewrite$sort_val(zloc){
var dep_val = zloc;
var dep_seq = (function (){var nloc = zloc;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(nloc)){
var G__39585 = (rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1(nloc) : rewrite_clj.zip.right.call(null,nloc));
var G__39586 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,nloc);
nloc = G__39585;
out = G__39586;
continue;
} else {
return out;
}
break;
}
})();
var dep_count = cljs.core.count(dep_seq);
var sorted_seq = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(zprint.rewrite.get_sortable,dep_seq);
var nloc = zloc;
var new_loc = sorted_seq;
var last_loc = null;
while(true){
if(cljs.core.truth_(new_loc)){
var new_z = cljs.core.first(new_loc);
var new_node = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((rewrite_clj.zip.tag.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.tag.cljs$core$IFn$_invoke$arity$1(new_z) : rewrite_clj.zip.tag.call(null,new_z)),new cljs.core.Keyword(null,"uneval","uneval",1932037707)))?rewrite_clj.parser.parse_string((rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1(new_z) : rewrite_clj.zip.string.call(null,new_z))):(rewrite_clj.zip.node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.node.cljs$core$IFn$_invoke$arity$1(new_z) : rewrite_clj.zip.node.call(null,new_z)));
var replaced_loc = clojure.zip.replace(nloc,new_node);
var G__39591 = (rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1(replaced_loc) : rewrite_clj.zip.right.call(null,replaced_loc));
var G__39592 = cljs.core.next(new_loc);
var G__39593 = replaced_loc;
nloc = G__39591;
new_loc = G__39592;
last_loc = G__39593;
continue;
} else {
return (rewrite_clj.zip.up.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.up.cljs$core$IFn$_invoke$arity$1(last_loc) : rewrite_clj.zip.up.call(null,last_loc));
}
break;
}
});
/**
 * Do a down and a sort-val
 */
zprint.rewrite.sort_down = (function zprint$rewrite$sort_down(zloc){
return zprint.rewrite.sort_val((function (){var G__39577 = (rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1(zloc) : rewrite_clj.zip.right.call(null,zloc));
return (rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1(G__39577) : rewrite_clj.zip.down.call(null,G__39577));
})());
});
/**
 * Reorder the dependencies in a project.clj file.
 */
zprint.rewrite.sort_dependencies = (function zprint$rewrite$sort_dependencies(caller,options,zloc){
var new_dep = zprint.rewrite.prewalk(zloc,(function (p1__39578_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((rewrite_clj.zip.tag.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.tag.cljs$core$IFn$_invoke$arity$1(p1__39578_SHARP_) : rewrite_clj.zip.tag.call(null,p1__39578_SHARP_)),new cljs.core.Keyword(null,"token","token",-1211463215))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((rewrite_clj.zip.sexpr.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.sexpr.cljs$core$IFn$_invoke$arity$1(p1__39578_SHARP_) : rewrite_clj.zip.sexpr.call(null,p1__39578_SHARP_)),new cljs.core.Keyword(null,"dependencies","dependencies",1108064605))));
}),zprint.rewrite.sort_down);
return new_dep;
});

//# sourceMappingURL=zprint.rewrite.js.map