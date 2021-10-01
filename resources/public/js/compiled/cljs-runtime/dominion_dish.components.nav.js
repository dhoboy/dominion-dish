goog.provide('dominion_dish.components.nav');
/**
 * Links to sections in the app
 */
dominion_dish.components.nav.internal_nav = (function dominion_dish$components$nav$internal_nav(post_type){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.internal-nav","div.internal-nav",-1379231850),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(post_type,"latest"))?"active":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dominion-dish.events","navigate","dominion-dish.events/navigate",-230252570),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),new cljs.core.Keyword(null,"post-list","post-list",652210946),new cljs.core.Keyword(null,"post-type","post-type",2092024867),new cljs.core.Keyword(null,"latest","latest",24323665)], null)], null));
})], null),"latest"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(post_type,"football"))?"active":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dominion-dish.events","navigate","dominion-dish.events/navigate",-230252570),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),new cljs.core.Keyword(null,"post-list","post-list",652210946),new cljs.core.Keyword(null,"post-type","post-type",2092024867),new cljs.core.Keyword(null,"football","football",947714612)], null)], null));
})], null),"football"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(post_type,"boys-basketball"))?"active":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dominion-dish.events","navigate","dominion-dish.events/navigate",-230252570),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),new cljs.core.Keyword(null,"post-list","post-list",652210946),new cljs.core.Keyword(null,"post-type","post-type",2092024867),new cljs.core.Keyword(null,"boys-basketball","boys-basketball",1387888045)], null)], null));
})], null),"boys basketball"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(post_type,"girls-basketball"))?"active":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dominion-dish.events","navigate","dominion-dish.events/navigate",-230252570),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),new cljs.core.Keyword(null,"post-list","post-list",652210946),new cljs.core.Keyword(null,"post-type","post-type",2092024867),new cljs.core.Keyword(null,"girls-basketball","girls-basketball",1006938823)], null)], null));
})], null),"girls basketball"], null)], null);
});
/**
 * Links to pages outside the app
 */
dominion_dish.components.nav.external_nav = (function dominion_dish$components$nav$external_nav(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.external-nav","a.external-nav",581919642),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"https://www.dominiondistrictva.org/",new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),"Schedule",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-external-link-alt","i.fas.fa-external-link-alt",686764632)], null)], null);
});
/**
 * Internal and external links for app
 */
dominion_dish.components.nav.nav_container = (function dominion_dish$components$nav$nav_container(post_type){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.nav-container","div.nav-container",786437332),dominion_dish.components.nav.internal_nav(post_type),dominion_dish.components.nav.external_nav()], null);
});

//# sourceMappingURL=dominion_dish.components.nav.js.map
