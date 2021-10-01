goog.provide('dominion_dish.components.header');
dominion_dish.components.header.basketball_icon = (function dominion_dish$components$header$basketball_icon(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.icon","span.icon",-1181275586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"basketball-icon"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-basketball-ball","i.fas.fa-basketball-ball",-332787346)], null)], null);
});
dominion_dish.components.header.football_icon = (function dominion_dish$components$header$football_icon(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.icon","span.icon",-1181275586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"football-icon"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-football-ball","i.fas.fa-football-ball",2070313674)], null)], null);
});
dominion_dish.components.header.running_icon = (function dominion_dish$components$header$running_icon(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.icon","span.icon",-1181275586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"running-icon"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-running","i.fas.fa-running",422437797)], null)], null);
});
dominion_dish.components.header.header = (function dominion_dish$components$header$header(p__40696){
var map__40697 = p__40696;
var map__40697__$1 = cljs.core.__destructure_map(map__40697);
var icon_key = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__40697__$1,new cljs.core.Keyword(null,"icon-key","icon-key",2046537328),new cljs.core.Keyword(null,"running","running",1554969103));
var header_icons = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"football","football",947714612),dominion_dish.components.header.football_icon(),new cljs.core.Keyword(null,"girls-basketball","girls-basketball",1006938823),dominion_dish.components.header.basketball_icon(),new cljs.core.Keyword(null,"boys-basketball","boys-basketball",1387888045),dominion_dish.components.header.basketball_icon(),new cljs.core.Keyword(null,"running","running",1554969103),dominion_dish.components.header.running_icon()], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.header-wrapper","div.header-wrapper",-729363549),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.header","div.header",1964513620),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"The Dominion Dish"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Dishing you news and insights on VHSL Dominion District Sports"], null)], null),(cljs.core.truth_(icon_key)?(icon_key.cljs$core$IFn$_invoke$arity$1 ? icon_key.cljs$core$IFn$_invoke$arity$1(header_icons) : icon_key.call(null,header_icons)):null)], null)], null);
});

//# sourceMappingURL=dominion_dish.components.header.js.map
