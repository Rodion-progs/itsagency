(function(t){function e(e){for(var i,o,a=e[0],c=e[1],l=e[2],d=0,p=[];d<a.length;d++)o=a[d],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&p.push(s[o][0]),s[o]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(p.length)p.shift()();return n.push.apply(n,l||[]),r()}function r(){for(var t,e=0;e<n.length;e++){for(var r=n[e],i=!0,a=1;a<r.length;a++){var c=r[a];0!==s[c]&&(i=!1)}i&&(n.splice(e--,1),t=o(o.s=r[0]))}return t}var i={},s={app:0},n=[];function o(e){if(i[e])return i[e].exports;var r=i[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=i,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(r,i,function(e){return t[e]}.bind(null,i));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/itsagency/dist/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var u=c;n.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"14ab":function(t,e,r){t.exports=r.p+"img/product_5.4379200a.jpg"},2292:function(t,e,r){t.exports=r.p+"img/product_7.041e819f.jpg"},"32d5":function(t,e,r){},"347f":function(t,e,r){t.exports=r.p+"img/product_9.e3121fab.jpg"},"4d39":function(t,e,r){t.exports=r.p+"img/product_3.98d8a8cf.jpg"},"4f87":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var i=r("2b0e"),s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("AppHeader"),r("AppBreadcrumbs"),r("section",{staticClass:"hero"},[r("div",{staticClass:"container"},[r("swiper",{ref:"hero__slider",attrs:{options:t.swiperOptions}},[t._l(t.banners,(function(e,i){return r("swiper-slide",{key:e.title+i},[r("div",{staticClass:"hero__slide"},[r(e.tag||"h2",{tag:"h2",staticClass:"hero__title"},[t._v(" "+t._s(e.title)+" ")]),r("p",{staticClass:"hero__text"},[t._v(t._s(e.text))])],1)])})),r("template",{slot:"pagination"},[r("div",{staticClass:"swiper-pagination"})]),r("div",{staticClass:"swiper-button-prev",attrs:{slot:"button-prev"},slot:"button-prev"},[r("svg",{attrs:{width:"22",height:"42",viewBox:"0 0 22 42",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M1 41L21 21L1 1",stroke:"white","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}})])]),r("div",{staticClass:"swiper-button-next",attrs:{slot:"button-next"},slot:"button-next"},[r("svg",{attrs:{width:"22",height:"42",viewBox:"0 0 22 42",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M1 41L21 21L1 1",stroke:"white","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}})])])],2)],1)]),r("main",{staticClass:"main"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("transition",{attrs:{name:"filter"}},[r("AppFilter",{directives:[{name:"show",rawName:"v-show",value:t.isFilter&&t.width<=1200||t.width>1200,expression:"(isFilter && width <= 1200) || width > 1200"}]})],1),r("ProductsList")],1)])]),r("transition",{attrs:{name:"cart"}},[r("AppCart",{directives:[{name:"show",rawName:"v-show",value:t.isCartShow,expression:"isCartShow"}]})],1),r("DarkLayer",{directives:[{name:"show",rawName:"v-show",value:t.isCartShow,expression:"isCartShow"}],on:{click:t.closeCart}}),r("ProductSort",{directives:[{name:"show",rawName:"v-show",value:t.sorting.show,expression:"sorting.show"}],style:{top:t.sorting.position.y+"px",left:t.sorting.position.x+"px"}}),r("DarkLayer",{directives:[{name:"show",rawName:"v-show",value:t.sorting.show,expression:"sorting.show"}],on:{click:t.sortClose}}),r("DarkLayer",{directives:[{name:"show",rawName:"v-show",value:t.isFilter&&t.width<=1200,expression:"isFilter && width <= 1200"}],on:{click:t.closeFilter}}),r("AppFooter")],1)},n=[],o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{staticClass:"header"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row header__row"},[r("button",{staticClass:"burger"},[r("svg",{attrs:{width:"24",height:"14",viewBox:"0 0 24 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("rect",{attrs:{width:"24",height:"2",fill:"#1F2020"}}),r("rect",{attrs:{y:"6",width:"24",height:"2",fill:"#1F2020"}}),r("rect",{attrs:{y:"12",width:"24",height:"2",fill:"#1F2020"}})])]),r("div",{staticClass:"header__navbar"},[r("a",{staticClass:"header__logo"},[r("svg",{attrs:{width:"99",height:"21",viewBox:"0 0 99 21",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M12.87 12.72C12.342 14.37 10.89 16.02 8.36 16.02C5.478 16.02 3.3 13.82 3.3 10.3C3.3 6.78 5.478 4.58 8.36 4.58C10.318 4.58 12.1 5.68 12.87 7.77L15.29 7.77C14.652 5.02 12.21 2.38 8.36 2.38C4.312 2.38 0.99 5.57 0.99 10.3C0.99 15.03 4.312 18.22 8.36 18.22C12.518 18.22 14.762 15.14 15.29 12.72H12.87ZM24.4303 18.22C28.4783 18.22 31.8003 15.03 31.8003 10.3C31.8003 5.57 28.4783 2.38 24.4303 2.38C20.3823 2.38 17.0603 5.57 17.0603 10.3C17.0603 15.03 20.3823 18.22 24.4303 18.22ZM24.4303 4.58C27.3123 4.58 29.4903 6.78 29.4903 10.3C29.4903 13.82 27.3123 16.02 24.4303 16.02C21.5483 16.02 19.3703 13.82 19.3703 10.3C19.3703 6.78 21.5483 4.58 24.4303 4.58ZM34.4352 18H44.2252V15.8L36.7452 15.8V2.6L34.4352 2.6V18ZM52.1452 18.22C56.1932 18.22 59.5152 15.03 59.5152 10.3C59.5152 5.57 56.1932 2.38 52.1452 2.38C48.0972 2.38 44.7752 5.57 44.7752 10.3C44.7752 15.03 48.0972 18.22 52.1452 18.22ZM52.1452 4.58C55.0272 4.58 57.2052 6.78 57.2052 10.3C57.2052 13.82 55.0272 16.02 52.1452 16.02C49.2632 16.02 47.0852 13.82 47.0852 10.3C47.0852 6.78 49.2632 4.58 52.1452 4.58ZM62.15 18H64.46V12.5H65.56L71.06 18H74.03L68.53 12.5H69.08C71.61 12.5 73.59 10.542 73.59 7.55C73.59 4.558 71.61 2.6 69.08 2.6L62.15 2.6V18ZM64.46 10.3V4.8H68.97C70.202 4.8 71.28 5.9 71.28 7.55C71.28 9.2 70.202 10.3 68.97 10.3H64.46ZM75.6886 13.27C75.6886 16.02 77.8886 18.22 81.7386 18.22C85.5886 18.22 87.5686 16.24 87.5686 13.71C87.5686 11.268 86.1606 9.97 83.0586 9.42L80.6386 8.98C78.9666 8.65 78.3286 7.88 78.3286 6.89C78.3286 5.658 79.4286 4.58 81.5186 4.58C83.7186 4.58 85.0386 5.9 85.0386 7.33L87.3486 7.33C87.3486 4.58 85.3686 2.38 81.5186 2.38C78.1086 2.38 76.0186 4.36 76.0186 6.89C76.0186 9.002 77.2066 10.52 79.6486 10.96L82.6186 11.51C84.3786 11.84 85.2586 12.588 85.2586 13.71C85.2586 15.03 84.2686 16.02 81.7386 16.02C79.4506 16.02 77.9986 14.7 77.9986 13.27H75.6886Z",fill:"#1F2020"}}),r("circle",{attrs:{cx:"95",cy:"6",r:"4",fill:"#1F2020"}})])]),t._m(0)]),r("div",{staticClass:"header__info"},[t._m(1),r("div",{staticClass:"header__icons"},[r("button",{staticClass:"header__search"},[r("svg",{attrs:{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z",stroke:"#1F2020","stroke-width":"1.4","stroke-linecap":"round","stroke-linejoin":"round"}}),r("path",{attrs:{d:"M17.5 17.5L13.875 13.875",stroke:"#1F2020","stroke-width":"1.4","stroke-linecap":"round","stroke-linejoin":"round"}})])]),r("button",{staticClass:"header__profile"},[r("svg",{attrs:{width:"22",height:"22",viewBox:"0 0 22 22",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("circle",{attrs:{cx:"11",cy:"23",r:"8.4",stroke:"black","stroke-width":"1.2"}}),r("circle",{attrs:{cx:"11",cy:"7",r:"3.4",stroke:"black","stroke-width":"1.2"}})])]),r("button",{staticClass:"header__favorite"},[r("svg",{attrs:{width:"22",height:"22",viewBox:"0 0 22 22",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M11.0009 19C10.745 19.0001 10.4978 18.9074 10.3052 18.739C9.57966 18.1047 8.87674 17.5067 8.25817 16.9802C6.65691 15.7048 5.16127 14.3023 3.78581 12.7865C2.67695 11.5918 2.0423 10.0341 2.00085 8.4053C1.97621 6.99164 2.48598 5.62067 3.42845 4.56595C3.88583 4.0681 4.44256 3.67154 5.06275 3.40184C5.68294 3.13214 6.35283 2.9953 7.0292 3.00012C8.05552 2.99541 9.053 3.3392 9.8581 3.97514C10.2942 4.31625 10.6791 4.71815 11.0009 5.16854C11.3231 4.71841 11.7082 4.31682 12.1446 3.97605C12.9489 3.34036 13.9453 2.99628 14.9708 3.00012C15.6472 2.9953 16.3171 3.13214 16.9372 3.40184C17.5574 3.67154 18.1142 4.0681 18.5715 4.56595C19.514 5.62067 20.0238 6.99164 19.9991 8.4053C19.9585 10.0337 19.3249 11.5915 18.2169 12.7865C16.8425 14.3013 15.3481 15.7028 13.7482 16.9775C13.1287 17.5049 12.4267 18.1029 11.6975 18.7399C11.5045 18.9081 11.257 19.0005 11.0009 19V19Z",stroke:"black","stroke-width":"1.2"}})])]),r("button",{staticClass:"header__basket",on:{click:t.openCart}},[t._v(t._s(t.getProductsInCart.length))])])])])])])},a=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",{staticClass:"header__nav"},[r("ul",{staticClass:"menu"},[r("li",{staticClass:"menu__item"},[r("a",{staticClass:"menu__link"},[t._v("Продукты")])]),r("li",{staticClass:"menu__item"},[r("a",{staticClass:"menu__link"},[t._v("Цвета")])]),r("li",{staticClass:"menu__item"},[r("a",{staticClass:"menu__link"},[t._v("Вдохновление")])]),r("li",{staticClass:"menu__item"},[r("a",{staticClass:"menu__link"},[t._v("Советы")])]),r("li",{staticClass:"menu__item"},[r("a",{staticClass:"menu__link"},[t._v("Найти магазин")])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"header__contact"},[r("a",{staticClass:"header__phone",attrs:{href:"tel:+74952217769"}},[t._v("+7 (495) 221-77-69 ")]),r("button",{staticClass:"header__callback"},[t._v("Заказать звонок")])])}],c=r("2f62"),l={name:"AppHeader",computed:Object(c["b"])(["getProductsInCart"]),methods:{openCart:function(){this.$store.commit("toggleCart",!0)}}},u=l,d=r("2877"),p=Object(d["a"])(u,o,a,!1,null,null,null),h=p.exports,g=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",{staticClass:"footer"})},f=[],_={name:"AppFooter"},w=_,C=Object(d["a"])(w,g,f,!1,null,"850725b0",null),m=C.exports,v=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"breadcrumbs"},[r("div",{staticClass:"container"},[r("ul",{staticClass:"breadcrumbs__list"},[r("li",{staticClass:"breadcrumbs__item"},[r("a",{staticClass:"breadcrumbs__link",attrs:{href:"/"}},[t._v("Главная")]),r("svg",{staticClass:"breadcrumbs__separate",attrs:{width:"3",height:"4",viewBox:"0 0 3 4",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("circle",{attrs:{cx:"1.5",cy:"2",r:"1.5",fill:"#C4C4C4"}})])]),r("li",{staticClass:"breadcrumbs__item"},[r("a",{staticClass:"breadcrumbs__link",attrs:{href:"/"}},[t._v("Продукты")]),r("svg",{staticClass:"breadcrumbs__separate",attrs:{width:"3",height:"4",viewBox:"0 0 3 4",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("circle",{attrs:{cx:"1.5",cy:"2",r:"1.5",fill:"#C4C4C4"}})])]),r("li",{staticClass:"breadcrumbs__item"},[t._v("Краски")])])])])},b=[],k={name:"Breadcrumbs"},x=k,y=Object(d["a"])(x,v,b,!1,null,null,null),S=y.exports,j=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"filter",on:{mousedown:function(e){return t.startDrag(e)},mouseup:function(e){return t.stopDrag(e)}}},[r("div",{staticClass:"filter-stick"}),t._l(t.getFilters,(function(e){return r("label",{key:e.title,staticClass:"filter__item"},[r("input",{staticClass:"filter__checkbox",attrs:{type:"checkbox",name:"filter"},domProps:{checked:e.selected,value:e.selected},on:{change:function(r){return t.changeFilter(e.title)}}}),r("span",{staticClass:"filter__checkbox_custom"}),t._v(" "+t._s(e.title)+" ")])}))],2)},P=[],F={computed:Object(c["b"])(["getFilters","getWindowWidth"]),data:function(){return{currentPosition:0}},methods:{changeFilter:function(t){this.$store.commit("changeFilter",t)},startDrag:function(t){this.currentPosition=t.clientY},stopDrag:function(t){t.clientY-this.currentPosition>50&&this.$store.commit("toggleFilter",!1)}}},M=F,B=Object(d["a"])(M,j,P,!1,null,null,null),O=B.exports,L=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"product-list"},[r("h2",{staticClass:"product-list__title"},[t._v("Краски")]),r("div",{staticClass:"product-list__controls"},[r("span",{staticClass:"product-list__count"},[t._v(t._s(t.products.length)+" "+t._s(t.normalize))]),r("button",{staticClass:"product-list__control-button product-list__control-button_filter",on:{click:function(e){return t.toggleFilter(!0)}}},[t._v(" Фильтры ")]),r("button",{staticClass:"product-list__control-button product-list__control-button_with-icon",on:{click:t.showSorting}},[t._v(" "+t._s(t.activeSorting.title)+" "),r("svg",{staticClass:"product-list__control_icon",attrs:{width:"10",height:"11",viewBox:"0 0 10 11",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M5 7.5L8.4641 3L1.5359 3L5 7.5Z",fill:"#202020"}})])])]),r("div",{staticClass:"product-list__row row"},t._l(t.products,(function(t){return r("ProductItem",{key:t.id,attrs:{title:t.title,img:t.img,id:t.id,price:t.price}})})),1)])},W=[],$=r("5530"),D=function(t,e){return t>100&&(t%=100),t<=20&&t>=10?e[2]:(t>20&&(t%=10),1===t?e[0]:t>1&&t<5?e[1]:e[2])},A=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product-item"},[r("div",{staticClass:"product-card"},[r("img",{staticClass:"product-card__img",attrs:{src:t.img,alt:t.title}}),r("p",{staticClass:"product-card__title"},[t._v(t._s(t.title))]),r("div",{staticClass:"product-card__footer"},[r("span",{staticClass:"product-card__price"},[t._v(t._s(t.price)+" ₽")]),r("button",{staticClass:"product-card__increase",on:{click:function(e){return t.addToCart(t.id)}}},[r("svg",{attrs:{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M8 3.33337V12.6667",stroke:"#1F2020","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}}),r("path",{attrs:{d:"M3.33301 8H12.6663",stroke:"#1F2020","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}})])])])])])},E=[],I=(r("a9e3"),{name:"Product123",props:{title:{type:String,required:!0},img:{type:String,required:!0},price:{type:Number,default:0},id:{type:Number,required:!0}},methods:{addToCart:function(t){this.$store.dispatch("setCartProduct",t)}}}),q=I,H=Object(d["a"])(q,A,E,!1,null,null,null),Z=H.exports,V={name:"ProductsList",components:{ProductItem:Z},computed:Object($["a"])(Object($["a"])({},Object(c["b"])({products:"sortingProducts",activeSorting:"getSortingActive"})),{},{normalize:function(){return D(this.products.length,["товар","товара","товаров"])}}),methods:Object($["a"])({showSorting:function(t){this.$store.commit("showSorting",{y:t.layerY})}},Object(c["c"])(["toggleFilter"]))},N=V,T=Object(d["a"])(N,L,W,!1,null,null,null),z=T.exports,Y=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"dark-layer",on:{click:function(e){return t.$emit("click")}}})},J=[],G={name:"DatkLayer"},K=G,Q=Object(d["a"])(K,Y,J,!1,null,null,null),R=Q.exports,U=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"sort"},t._l(t.getSorting.list,(function(e){return r("li",{key:e.title,staticClass:"sort__item",class:{sort__item_active:e.active},on:{click:function(r){return t.changeSorting(e)}}},[t._v(" "+t._s(e.title)+" ")])})),0)},X=[],tt={name:"ProductSort",computed:Object(c["b"])(["getSorting"]),methods:Object(c["c"])(["changeSorting"])},et=tt,rt=Object(d["a"])(et,U,X,!1,null,null,null),it=rt.exports,st=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("aside",{staticClass:"cart"},[i("div",{staticClass:"cart__header"},[i("h3",{staticClass:"cart__title"},[t._v("Корзина")]),i("button",{staticClass:"cart__close",on:{click:t.closeCart}},[i("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[i("path",{attrs:{d:"M18 6L6 18",stroke:"#1F2020","stroke-width":"1.4","stroke-linecap":"round","stroke-linejoin":"round"}}),i("path",{attrs:{d:"M6 6L18 18",stroke:"#1F2020","stroke-width":"1.4","stroke-linecap":"round","stroke-linejoin":"round"}})])])]),i("div",{staticClass:"cart__body"},[i("div",{staticClass:"cart-list-header"},[i("span",{staticClass:"cart-list-header__count"},[t._v(t._s(t.products.length)+" "+t._s(t.normalize))]),i("button",{staticClass:"cart-list-header__reset",on:{click:t.deleteAllCart}},[t._v(" очистить список ")])]),i("div",{staticClass:"cart-list"},t._l(t.products,(function(e){return i("div",{key:e.id,staticClass:"cart-item",class:{"cart-item_disabled":e.deleted}},[i("img",{staticClass:"cart-item__img",attrs:{src:r("ce97"),alt:""}}),i("div",{staticClass:"cart-item__info"},[i("p",{staticClass:"cart-item__title"},[t._v(t._s(e.title))]),i("span",{staticClass:"cart-item__price"},[t._v(t._s(e.price)+" ₽")])]),i("div",{staticClass:"cart-item__control"},[i("button",{staticClass:"cart-item__control-button",on:{click:function(r){return t.decreaseCount(e.id)}}},[i("svg",{attrs:{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[i("path",{attrs:{d:"M3.3335 8H12.6668",stroke:"black","stroke-width":"1.4","stroke-linecap":"round","stroke-linejoin":"round"}})])]),i("span",{staticClass:"cart-item__count"},[t._v(t._s(e.count))]),i("button",{staticClass:"cart-item__control-button",on:{click:function(r){return t.addToCart(e.id)}}},[i("svg",{attrs:{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[i("path",{attrs:{d:"M8 3.33325V12.6666",stroke:"black","stroke-width":"1.4","stroke-linecap":"round","stroke-linejoin":"round"}}),i("path",{attrs:{d:"M3.3335 8H12.6668",stroke:"black","stroke-width":"1.4","stroke-linecap":"round","stroke-linejoin":"round"}})])])]),e.deleted?i("button",{staticClass:"cart-item__delete",on:{click:function(r){return t.recoverProduct(e.id)}}},[i("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[i("path",{attrs:{d:"M17 1L21 5L17 9",stroke:"black","stroke-width":"1.4","stroke-linecap":"round","stroke-linejoin":"round"}}),i("path",{attrs:{d:"M3 11V9C3 7.93913 3.42143 6.92172 4.17157 6.17157C4.92172 5.42143 5.93913 5 7 5H21",stroke:"black","stroke-width":"1.4","stroke-linecap":"round","stroke-linejoin":"round"}}),i("path",{attrs:{d:"M7 23L3 19L7 15",stroke:"black","stroke-width":"1.4","stroke-linecap":"round","stroke-linejoin":"round"}}),i("path",{attrs:{d:"M21 13V15C21 16.0609 20.5786 17.0783 19.8284 17.8284C19.0783 18.5786 18.0609 19 17 19H3",stroke:"black","stroke-width":"1.4","stroke-linecap":"round","stroke-linejoin":"round"}})])]):i("button",{staticClass:"cart-item__delete",on:{click:function(r){return t.deleteOneProduct(e.id)}}},[i("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[i("g",{attrs:{opacity:"0.2"}},[i("path",{attrs:{d:"M18 6L6 18",stroke:"#1F2020","stroke-width":"1.4","stroke-linecap":"round","stroke-linejoin":"round"}}),i("path",{attrs:{d:"M6 6L18 18",stroke:"#1F2020","stroke-width":"1.4","stroke-linecap":"round","stroke-linejoin":"round"}})])])])])})),0)]),i("div",{staticClass:"cart__footer"},[i("div",{staticClass:"cart__total"},[i("span",{staticClass:"cart__total-text"},[t._v("Итого")]),i("span",{staticClass:"cart__total-price"},[t._v(t._s(t.totalPrice)+"₽")])]),i("button",{staticClass:"cart__order button button-primary"},[t._v("Оформить заказ")])])])},nt=[],ot=(r("13d5"),r("4de4"),r("7db0"),{name:"AppCart",computed:Object($["a"])({normalize:function(){return D(this.products.length,["товар","товара","товаров"])},totalPrice:function(){return this.products.filter((function(t){return!t.deleted})).reduce((function(t,e){return t+e.price*e.count}),0).toLocaleString()}},Object(c["b"])({products:"getProductsInCart",isCart:"getIsCartShow"})),methods:Object($["a"])(Object($["a"])({},Object(c["c"])(["deleteAllCart","deleteOneProduct"])),{},{closeCart:function(){this.$store.commit("toggleCart",!1)},addToCart:function(t){this.products.find((function(e){return e.id===t})).deleted||this.$store.commit("increaseCountInCart",t)},decreaseCount:function(t){this.products.find((function(e){return e.id===t})).deleted||this.$store.commit("decreaseCountInCart",t)},recoverProduct:function(t){this.$store.commit("recoverProduct",t)}})}),at=ot,ct=Object(d["a"])(at,st,nt,!1,null,"0485dcfa",null),lt=ct.exports,ut=r("7212"),dt={components:{AppHeader:h,AppBreadcrumbs:S,AppFilter:O,ProductsList:z,Swiper:ut["Swiper"],SwiperSlide:ut["SwiperSlide"],DarkLayer:R,AppCart:lt,AppFooter:m,ProductSort:it},mounted:function(){window.addEventListener("resize",this.updateWidth),this.$store.commit("changeWindowWidth",window.innerWidth)},directives:{swiper:ut["directive"]},computed:Object(c["b"])({banners:"getBanners",isCartShow:"getIsCartShow",sorting:"getSorting",filter:"getFilters",width:"getWindowWidth",isFilter:"getIsFilter"}),data:function(){return{swiperOptions:{pagination:{el:".swiper-pagination",type:"bullets",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}}},methods:{closeCart:function(){this.$store.commit("toggleCart",!1)},sortClose:function(){this.$store.commit("hideSorting")},updateWidth:function(){this.$store.commit("changeWindowWidth",window.innerWidth)},closeFilter:function(){this.$store.commit("toggleFilter",!1)}},beforeDestroy:function(){window.removeEventListener("resize",this.updateWidth)}},pt=dt,ht=(r("665e"),Object(d["a"])(pt,s,n,!1,null,"36f9a721",null)),gt=ht.exports;r("d81d"),r("caad"),r("2532");i["default"].use(c["a"]);var ft=new c["a"].Store({state:{isCart:!1,isDarkLayer:!1,isFilter:!1,width:0,sorting:{list:[{title:"Сначала дорогие",active:!0,sortDir:"DESC",sortBy:"price"},{title:"Сначала недорогие",active:!1,sortDir:"ASC",sortBy:"price"},{title:"Сначала популярные",active:!1,sortDir:"DESC",sortBy:"popularity"},{title:"Сначала новые",active:!1,sortDir:"DESC",sortBy:"newest"}],sortBy:"price",sortDir:"DESC",show:!1,position:{y:0}},banners:[{title:"Краски",text:"Идеально подходят для стен и других поверхностей. Найди свой идеальный цвет!",tag:"h1"},{title:"Краски",text:"Идеально подходят для стен и других поверхностей. Найди свой идеальный цвет!"},{title:"Краски",text:"Идеально подходят для стен и других поверхностей. Найди свой идеальный цвет!"},{title:"Краски",text:"Идеально подходят для стен и других поверхностей. Найди свой идеальный цвет!"},{title:"Краски",text:"Идеально подходят для стен и других поверхностей. Найди свой идеальный цвет!"}],products:[{id:1,title:"Краска Wallquest, Brownsone MS90102",price:6e3,popularity:100,img:r("faf6"),tags:["Новинки","Есть в наличии","Эксклюзивные","Контрактный"]},{id:2,title:"Краска Wallquest, Brownsone MS90102",price:4800,img:r("ce97"),tags:["Новинки","Есть в наличии","Контрактный"]},{id:3,title:"Краска Wallquest, Brownsone MS90102",price:5290,popularity:60,img:r("4d39"),tags:["Новинки","Есть в наличии","Эксклюзивные"]},{id:4,title:"Краска Wallquest, Brownsone MS90102",price:2800,popularity:10,img:r("fe34"),tags:["Новинки","Есть в наличии","Эксклюзивные","Контрактный"]},{id:5,title:"Краска Wallquest, Brownsone MS90102",price:3400,img:r("14ab"),tags:["Новинки","Есть в наличии","Контрактный"]},{id:6,title:"Краска Wallquest, Brownsone MS90102",price:6e3,img:r("cd9f"),tags:["Есть в наличии","Контрактный"]},{id:7,title:"Краска Wallquest, Brownsone MS90102",price:4800,img:r("2292"),tags:["Новинки","Эксклюзивные","Контрактный"]},{id:8,title:"Краска Wallquest, Brownsone MS90102",price:5290,img:r("2292"),tags:["Есть в наличии","Контрактный","Распродажа"]},{id:9,title:"Краска Wallquest, Brownsone MS90102",price:2800,img:r("773f"),tags:["Новинки","Есть в наличии","Эксклюзивные"]},{id:10,title:"Краска Wallquest, Brownsone MS90102",price:3400,img:r("347f"),tags:["Распродажа"]},{id:11,title:"Краска Wallquest, Brownsone MS90102",price:6e3,img:r("cd9f"),tags:["Есть в наличии","Эксклюзивные","Контрактный"]},{id:12,title:"Краска Wallquest, Brownsone MS90102",price:4800,img:r("2292"),tags:["Новинки","Есть в наличии","Эксклюзивные"]},{id:13,title:"Краска Wallquest, Brownsone MS90102",price:5290,img:r("2292"),tags:["Новинки","Эксклюзивные"]},{id:14,title:"Краска Wallquest, Brownsone MS90102",price:2800,img:r("773f"),tags:["Новинки","Есть в наличии","Эксклюзивные","Контрактный"]},{id:15,title:"Краска Wallquest, Brownsone MS90102",price:3400,img:r("347f"),tags:["Новинки","Есть в наличии","Контрактный","Распродажа"]}],cartProducts:[],filteredProduct:[],filters:[{title:"Новинки",selected:!1},{title:"Есть в наличии",selected:!1},{title:"Контрактный",selected:!1},{title:"Эксклюзивные",selected:!0},{title:"Распродажа",selected:!1}]},mutations:{increaseCountInCart:function(t,e){t.cartProducts.find((function(t){return t.id===e})).count+=1},decreaseCountInCart:function(t,e){t.cartProducts.find((function(t){return t.id===e})).count<=1||(t.cartProducts.find((function(t){return t.id===e})).count-=1)},pushInCart:function(t,e){t.cartProducts.push(e)},toggleCart:function(t,e){t.isCart=e},showSorting:function(t,e){t.sorting.show=!0,t.sorting.position.y=e.y},hideSorting:function(t){t.sorting.show=!1},deleteAllCart:function(t){t.cartProducts=[]},deleteOneProduct:function(t,e){t.cartProducts.find((function(t){return t.id===e})).deleted=!0},recoverProduct:function(t,e){t.cartProducts.find((function(t){return t.id===e})).deleted=!1},changeFilter:function(t,e){t.filters.find((function(t){return t.title===e})).selected=!t.filters.find((function(t){return t.title===e})).selected},changeSorting:function(t,e){t.sorting.sortBy=e.sortBy,t.sorting.sortDir=e.sortDir,t.sorting.list.find((function(t){return t.active})).active=!1,t.sorting.list.find((function(t){return t.title===e.title})).active=!0,t.sorting.show=!1},changeWindowWidth:function(t,e){t.width=e},toggleFilter:function(t,e){t.isFilter=e}},actions:{setCartProduct:function(t,e){var r=t.getters,i=t.commit,s=r.getProductsInCart.some((function(t){return t.id===e}));if(s)i("increaseCountInCart",e);else{var n=r.getProducts.find((function(t){return t.id===e}));n.count=1,n.deleted=!1,i("pushInCart",Object.assign({},n))}}},getters:{getBanners:function(t){return t.banners},getProducts:function(t){return t.products},getProductsInCart:function(t){return t.cartProducts},getIsDarkLayer:function(t){return t.isDarkLayer},getIsCartShow:function(t){return t.isCart},getSorting:function(t){return t.sorting},getSortingActive:function(t){return t.sorting.list.find((function(t){return t.active}))},getFilters:function(t){return t.filters},getActiveFilters:function(t){return t.filters.filter((function(t){return t.selected}))},getFilteredProducts:function(t,e){if(!e.getActiveFilters.length)return t.products;var r=e.getActiveFilters.map((function(t){return t.title})),i=t.products.filter((function(t){return t.tags.some((function(t){return r.includes(t)}))}));return i},sortingProducts:function(t,e){var r=e.getFilteredProducts;if("price"===t.sorting.sortBy){var i=t.sorting.sortBy,s="DESC"===t.sorting.sortDir?-1:1;return r.sort((function(t,e){return s*(t[i]-e[i])}))}return"popularity"===t.sorting.sortBy?r.sort((function(t,e){return t.popularity-e.popularity})):r.sort((function(t,e){return t.tags.includes("Новинки")-e.tags.includes("Новинки")}))},getWindowWidth:function(t){return t.width},getIsFilter:function(t){return t.isFilter}}});r("4f87");i["default"].config.productionTip=!1,new i["default"]({store:ft,render:function(t){return t(gt)}}).$mount("#app")},"665e":function(t,e,r){"use strict";r("32d5")},"773f":function(t,e,r){t.exports=r.p+"img/product_8.028ad203.jpg"},cd9f:function(t,e,r){t.exports=r.p+"img/product_6.b7e9ce35.jpg"},ce97:function(t,e,r){t.exports=r.p+"img/product_2.c62ad31c.jpg"},faf6:function(t,e,r){t.exports=r.p+"img/product_1.cd6487d9.jpg"},fe34:function(t,e,r){t.exports=r.p+"img/product_4.1306c623.jpg"}});
//# sourceMappingURL=app.c1780920.js.map