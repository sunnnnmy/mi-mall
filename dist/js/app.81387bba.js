(function(t){function e(e){for(var s,i,c=e[0],o=e[1],l=e[2],u=0,d=[];u<c.length;u++)i=c[u],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&d.push(n[i][0]),n[i]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);m&&m(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,i=1;i<a.length;i++){var c=a[i];0!==n[c]&&(s=!1)}s&&(r.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},i={app:0},n={app:0},r=[];function c(t){return o.p+"js/"+({}[t]||t)+"."+{"chunk-0022726c":"95b84c4b","chunk-2e361a43":"919212a2","chunk-351ed5df":"38331c09","chunk-4ee51a0c":"140d10f6","chunk-5aba50e7":"b81ae575","chunk-746dfdf7":"b8f8b93b","chunk-79829702":"f3dd1027","chunk-80f44e70":"61b38b6c","chunk-91a81460":"c6d2aff0"}[t]+".js"}function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(t){var e=[],a={"chunk-0022726c":1,"chunk-2e361a43":1,"chunk-351ed5df":1,"chunk-4ee51a0c":1,"chunk-5aba50e7":1,"chunk-79829702":1,"chunk-80f44e70":1,"chunk-91a81460":1};i[t]?e.push(i[t]):0!==i[t]&&a[t]&&e.push(i[t]=new Promise((function(e,a){for(var s="css/"+({}[t]||t)+"."+{"chunk-0022726c":"3441cf46","chunk-2e361a43":"246a21cf","chunk-351ed5df":"31da37d0","chunk-4ee51a0c":"a7155041","chunk-5aba50e7":"c1e7ca0b","chunk-746dfdf7":"31d6cfe0","chunk-79829702":"eed33b45","chunk-80f44e70":"3887b65a","chunk-91a81460":"4fac7a40"}[t]+".css",n=o.p+s,r=document.getElementsByTagName("link"),c=0;c<r.length;c++){var l=r[c],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===s||u===n))return e()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){l=d[c],u=l.getAttribute("data-href");if(u===s||u===n)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var s=e&&e.target&&e.target.src||n,r=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=s,delete i[t],m.parentNode.removeChild(m),a(r)},m.href=n;var v=document.getElementsByTagName("head")[0];v.appendChild(m)})).then((function(){i[t]=0})));var s=n[t];if(0!==s)if(s)e.push(s[2]);else{var r=new Promise((function(e,a){s=n[t]=[e,a]}));e.push(s[2]=r);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,o.nc&&u.setAttribute("nonce",o.nc),u.src=c(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(m);var a=n[t];if(0!==a){if(a){var s=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+s+": "+i+")",d.name="ChunkLoadError",d.type=s,d.request=i,a[1](d)}n[t]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var m=u;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0025":function(t,e,a){},"30db":function(t,e,a){"use strict";a("0025")},"56d7":function(t,e,a){"use strict";a.r(e);a("0fb7"),a("450d");var s=a("f529"),i=a.n(s),n=(a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("d3b7"),a("2b0e")),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},c=[],o={name:"App",components:{},mounted:function(){this.$cookie.get("userId")&&(this.getUser(),this.getCartCount())},methods:{getUser:function(){var t=this;this.axios.get("/user").then((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t.$store.dispatch("saveUserName",e.username)}))},getCartCount:function(){var t=this;this.axios.get("/carts/products/sum").then((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;t.$store.dispatch("saveCartCount",e)}))}}},l=o,u=(a("5c0b"),a("2877")),d=Object(u["a"])(l,r,c,!1,null,null,null),m=d.exports,v=(a("3ca3"),a("ddb0"),a("8c4f")),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav-header"),a("router-view"),a("nav-footer")],1)},f=[],h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header"},[a("div",{staticClass:"nav-topbar"},[a("div",{staticClass:"container"},[t._m(0),a("div",{staticClass:"topbar-user"},[t.username?a("a",{attrs:{href:"javascript:;"}},[t._v(t._s(t.username))]):t._e(),t.username?t._e():a("a",{attrs:{href:"javascript:;"},on:{click:function(e){return t.login()}}},[t._v("登录")]),t.username?a("a",{attrs:{href:"javascript:;"},on:{click:function(e){return t.logout()}}},[t._v("退出")]):t._e(),t.username?a("a",{attrs:{href:"/#/order/list"}},[t._v(" 我的订单")]):t._e(),a("a",{staticClass:"my-cart",attrs:{href:"javascript:;"},on:{click:function(e){return t.goToCart()}}},[a("span",{staticClass:"icon-cart"}),t._v("购物车("+t._s(t.cartCount)+")")])])])]),a("div",{staticClass:"nav-header"},[a("div",{staticClass:"container"},[t._m(1),a("div",{staticClass:"header-menu"},[a("div",{staticClass:"item-menu"},[a("span",[t._v("小米手机")]),a("div",{staticClass:"children"},[a("ul",t._l(t.phoneList,(function(e,s){return a("li",{key:s,staticClass:"product"},[a("a",{attrs:{href:"/#/product/"+e.id,target:"_blank"}},[a("div",{staticClass:"pro-imgs"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.mainImage,expression:"item.mainImage"}],attrs:{alt:e.subtitle}})]),a("div",{staticClass:"pro-name"},[t._v(t._s(e.name))]),a("div",{staticClass:"pro-price"},[t._v(t._s(t._f("currency")(e.price)))])])])})),0)])]),t._m(2),a("div",{staticClass:"item-menu"},[a("span",[t._v("电视")]),a("div",{staticClass:"children"},[a("ul",[a("li",{staticClass:"product"},[a("a",{attrs:{href:"",target:"_blank"}},[a("div",{staticClass:"pro-imgs"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"/imgs/nav-img/nav-3-1.jpg",expression:"'/imgs/nav-img/nav-3-1.jpg'"}],attrs:{alt:""}})]),a("div",{staticClass:"pro-name"},[t._v("小米壁画电视 5英寸")]),a("div",{staticClass:"pro-price"},[t._v("6999元")])])]),a("li",{staticClass:"product"},[a("a",{attrs:{href:"",target:"_blank"}},[a("div",{staticClass:"pro-imgs"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"/imgs/nav-img/nav-3-2.jpg",expression:"'/imgs/nav-img/nav-3-2.jpg'"}],attrs:{alt:""}})]),a("div",{staticClass:"pro-name"},[t._v("小米全面屏电视E55A")]),a("div",{staticClass:"pro-price"},[t._v("1999元")])])]),a("li",{staticClass:"product"},[a("a",{attrs:{href:"",target:"_blank"}},[a("div",{staticClass:"pro-imgs"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"/imgs/nav-img/nav-3-3.png",expression:"'/imgs/nav-img/nav-3-3.png'"}],attrs:{alt:""}})]),a("div",{staticClass:"pro-name"},[t._v("小米电视4A")]),a("div",{staticClass:"pro-price"},[t._v("699元")])])]),a("li",{staticClass:"product"},[a("a",{attrs:{href:"",target:"_blank"}},[a("div",{staticClass:"pro-imgs"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"/imgs/nav-img/nav-3-4.jpg",expression:"'/imgs/nav-img/nav-3-4.jpg'"}],attrs:{alt:""}})]),a("div",{staticClass:"pro-name"},[t._v("小米CC9")]),a("div",{staticClass:"pro-price"},[t._v("1799元")])])]),a("li",{staticClass:"product"},[a("a",{attrs:{href:"",target:"_blank"}},[a("div",{staticClass:"pro-imgs"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"/imgs/nav-img/nav-3-5.jpg",expression:"'/imgs/nav-img/nav-3-5.jpg'"}],attrs:{alt:""}})]),a("div",{staticClass:"pro-name"},[t._v("小米CC9")]),a("div",{staticClass:"pro-price"},[t._v("1799元")])])]),a("li",{staticClass:"product"},[a("a",{attrs:{href:"",target:"_blank"}},[a("div",{staticClass:"pro-imgs"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"/imgs/nav-img/nav-3-6.png",expression:"'/imgs/nav-img/nav-3-6.png'"}],attrs:{alt:""}})]),a("div",{staticClass:"pro-name"},[t._v("查看全部")]),a("div",{staticClass:"pro-price"},[t._v("查看全部")])])])])])])]),t._m(3)])])])},g=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"topbar-menu"},[a("a",{attrs:{href:"javascript;;"}},[t._v("小米商城")]),a("a",{attrs:{href:"javascript;;"}},[t._v("MUI")]),a("a",{attrs:{href:"javascript;;"}},[t._v("云服务")]),a("a",{attrs:{href:"javascript;;"}},[t._v("协议规则")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header-logo"},[a("a",{attrs:{href:"/#/index"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"item-menu"},[a("span",[t._v("RedMi红米")]),a("div",{staticClass:"children"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header-search"},[a("div",{staticClass:"wrapper"},[a("input",{attrs:{type:"text",name:"keyword"}}),a("a",{attrs:{href:"javascript;;"}})])])}],_=(a("b680"),a("fb6a"),{name:"nav-header",data:function(){return{phoneList:[]}},computed:{username:function(){return this.$store.state.username},cartCount:function(){return this.$store.state.cartCount}},filters:{currency:function(t){return t?"￥"+t.toFixed(2)+"元":"0.00"}},mounted:function(){this.getProductList(),this.$route.params&&"login"==this.$route.params.from&&this.getCartCount()},methods:{login:function(){this.$router.push("/login")},getCartCount:function(){var t=this;this.axios.get("/carts/products/sum").then((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;t.$store.dispatch("saveCartCount",e)}))},logout:function(){var t=this;this.axios.post("/user/logout").then((function(){t.$message.success("退出成功"),t.$cookie.set("userId","",{expires:"-1"}),t.$store.dispatch("saveUserName",""),t.$store.dispatch("saveCartCount","0")}))},getProductList:function(){var t=this;this.axios.get("/products",{params:{categoryId:"100012",pageSize:6}}).then((function(e){e.list.length>=6&&(t.phoneList=e.list.slice(0,6))}))},goToCart:function(){this.$router.push("/cart")}}}),C=_,b=(a("8ee7"),Object(u["a"])(C,h,g,!1,null,null,null)),y=b.exports,k=a("f091"),w={name:"nav-home",components:{NavHeader:y,NavFooter:k["a"]}},x=w,j=Object(u["a"])(x,p,f,!1,null,null,null),$=j.exports,E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"index"},[a("div",{staticClass:"container"},[a("div",{staticClass:"swiper-box"},[a("div",{staticClass:"nav-menu"},[a("ul",{staticClass:"menu-wrap"},[a("li",{staticClass:"menu-item"},[a("a",{attrs:{href:"javascript;;"}},[t._v("手机 电话卡")]),a("div",{staticClass:"children"},t._l(t.menuList,(function(e,s){return a("ul",{key:s},t._l(e,(function(e,s){return a("li",{key:s},[a("a",{attrs:{href:e?"/#/product/"+e.id:""}},[a("img",{attrs:{src:e?e.img:"/imgs/item-box-1.png",alt:""}}),t._v(" "+t._s(e?e.name:"小米9")+" ")])])})),0)})),0)]),t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6)])]),a("swiper",{attrs:{options:t.swiperOptions}},[t._l(t.slideList,(function(t,e){return a("swiper-slide",{key:e},[a("a",{attrs:{href:"/#/product/"+t.id}},[a("img",{attrs:{src:t.img,alt:""}})])])})),a("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"}),a("div",{staticClass:"swiper-button-prev",attrs:{slot:"button-prev"},slot:"button-prev"}),a("div",{staticClass:"swiper-button-next",attrs:{slot:"button-next"},slot:"button-next"})],2)],1),a("div",{staticClass:"ads-box"},t._l(t.adsList,(function(t,e){return a("a",{key:e,attrs:{href:"/#/product/"+t.id}},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.img,expression:"item.img"}],attrs:{alt:""}})])})),0),a("div",{staticClass:"banner"},[a("a",{attrs:{href:"/#/product/30"}},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"/imgs/banner-1.png",expression:"'/imgs/banner-1.png'"}],attrs:{alt:""}})])])]),a("div",{staticClass:"product-box"},[a("div",{staticClass:"container"},[a("h2",[t._v("手机")]),a("div",{staticClass:"wrapper"},[a("div",{staticClass:"banner-left"},[a("a",{attrs:{href:"/#/products/35"}},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"/imgs/mix-alpha.jpg",expression:"'/imgs/mix-alpha.jpg'"}],attrs:{alt:""}})])]),a("div",{staticClass:"list-box"},t._l(t.phoneList,(function(e,s){return a("div",{key:s,staticClass:"list"},t._l(e,(function(e,s){return a("div",{key:s,staticClass:"item"},[a("span",{class:{"new-pro":s%2==0}},[t._v("新品")]),a("div",{staticClass:"item-img"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.mainImage,expression:"item.mainImage"}],attrs:{alt:""}})]),a("div",{staticClass:"item-info"},[a("h3",[t._v(t._s(e.name))]),a("p",[t._v(t._s(e.subtitle))]),a("p",{staticClass:"price",on:{click:function(a){return t.addCart(e.id)}}},[t._v(t._s(e.price)+"元")])])])})),0)})),0)])])]),a("service-bar"),a("modal",{attrs:{title:"提示",sureText:"查看购物车",btnType:"1",modalType:"small",showModal:t.showModal},on:{submit:t.gotoCart,cancle:function(e){t.showModal=!1}},scopedSlots:t._u([{key:"body",fn:function(){return[a("p",[t._v("商品添加成功！")])]},proxy:!0}])})],1)},S=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"menu-item"},[a("a",{attrs:{href:"javascript;;"}},[t._v("电视 盒子")]),a("div",{staticClass:"children"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"menu-item"},[a("a",{attrs:{href:"javascript;;"}},[t._v("笔记本 平板")]),a("div",{staticClass:"children"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"menu-item"},[a("a",{attrs:{href:"javascript;;"}},[t._v("家电 插线板")]),a("div",{staticClass:"children"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"menu-item"},[a("a",{attrs:{href:"javascript;;"}},[t._v("出行 穿戴")]),a("div",{staticClass:"children"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"menu-item"},[a("a",{attrs:{href:"javascript;;"}},[t._v("智能 路由器")]),a("div",{staticClass:"children"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"menu-item"},[a("a",{attrs:{href:"javascript;;"}},[t._v("电源 配件")]),a("div",{staticClass:"children"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"menu-item"},[a("a",{attrs:{href:"javascript;;"}},[t._v("生活 箱包")]),a("div",{staticClass:"children"})])}],T=a("984c"),z=a("7212"),N=(a("a7a3"),a("714b")),O={name:"index",components:{Swiper:z["Swiper"],SwiperSlide:z["SwiperSlide"],ServiceBar:T["a"],Modal:N["a"]},data:function(){return{swiperOptions:{autoplay:!0,loop:!0,effect:"cube",cubeEffect:{shadowOffset:100,shadowScale:.6},pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}},slideList:[{id:"42",img:"/imgs/slider/slide-1.jpg"},{id:"45",img:"/imgs/slider/slide-2.jpg"},{id:"43",img:"/imgs/slider/slide-3.jpg"},{id:"44",img:"/imgs/slider/slide-4.jpg"},{id:"46",img:"/imgs/slider/slide-5.jpg"}],menuList:[[{id:30,img:"/imgs/item-box-1.png",name:"小米CC9"},{id:31,img:"/imgs/item-box-2.png",name:"小米8青春版"},{id:32,img:"/imgs/item-box-3.jpg",name:"RedMI K20 Pro"},{id:33,img:"/imgs/item-box-4.jpg",name:"移动4G专区"}],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],adsList:[{id:33,img:"/imgs/ads/ads-1.png"},{id:48,img:"/imgs/ads/ads-2.jpg"},{id:45,img:"/imgs/ads/ads-3.png"},{id:47,img:"/imgs/ads/ads-4.jpg"}],phoneList:[],showModal:!1}},mounted:function(){this.init()},methods:{init:function(){var t=this;this.axios.get("/products",{params:{categoryId:"100012",pageSize:14}}).then((function(e){e.list=e.list.slice(6,14),t.phoneList=[e.list.slice(0,4),e.list.slice(4,8)]}))},addCart:function(t){var e=this;this.axios.post("/carts",{productId:t,selected:!0}).then((function(t){e.showModal=!0,e.$store.dispatch("saveCartCount",t.cartTotalQuantity)})).catch((function(){e.showModal=!0}))},gotoCart:function(){this.$router.push("/cart")}}},L=O,M=(a("bd5f"),Object(u["a"])(L,E,S,!1,null,null,null)),P=M.exports;n["default"].use(v["a"]);var I=new v["a"]({routes:[{path:"/",name:"home",component:$,redirect:"./index",children:[{path:"/index",name:"index",component:P},{path:"/product/:id",name:"product",component:function(t){return a.e("chunk-80f44e70").then(function(){var e=[a("2320")];t.apply(null,e)}.bind(this)).catch(a.oe)}},{path:"/detail/:id",name:"detail",component:function(t){return a.e("chunk-79829702").then(function(){var e=[a("afa2")];t.apply(null,e)}.bind(this)).catch(a.oe)}}]},{path:"/cart",name:"cart",component:function(t){return a.e("chunk-351ed5df").then(function(){var e=[a("7cb1")];t.apply(null,e)}.bind(this)).catch(a.oe)}},{path:"/login",name:"login",component:function(){return a.e("chunk-5aba50e7").then(a.bind(null,"c6f7"))}},{path:"/order",name:"order",component:function(){return a.e("chunk-746dfdf7").then(a.bind(null,"2a628"))},children:[{path:"list",name:"order-list",component:function(){return a.e("chunk-2e361a43").then(a.bind(null,"c56b"))}},{path:"confirm",name:"order-confirm",component:function(){return a.e("chunk-4ee51a0c").then(a.bind(null,"2c69"))}},{path:"pay",name:"order-pay",component:function(){return a.e("chunk-0022726c").then(a.bind(null,"5d59"))}},{path:"alipay",name:"alipay",component:function(){return a.e("chunk-91a81460").then(a.bind(null,"064a"))}}]}]}),U=a("bc3a"),A=a.n(U),R=(a("0fae"),a("130e")),B=a("caf9"),F=a("00e7"),q=a.n(F),D=a("2f62"),H={saveUserName:function(t,e){t.username=e},saveCartCount:function(t,e){t.cartCount=e}},J={saveUserName:function(t,e){t.commit("saveUserName",e)},saveCartCount:function(t,e){t.commit("saveCartCount",e)}};n["default"].use(D["a"]);var K={username:"",cartCount:0},G=new D["a"].Store({state:K,mutations:H,actions:J}),Q=!1;Q&&a("fc6e"),A.a.defaults.baseURL="/api",A.a.defaults.timeout=8e3,A.a.interceptors.response.use((function(t){var e=t.data,a=location.hash;return 0==e.status?e.data:10==e.status?("#/index"!=a&&(window.location.href="/#/login"),Promise.reject(e)):(i.a.warning(e.msg),Promise.reject(e))}),(function(t){var e=t.response;return i.a.error(e.data.message),Promise.reject(t)})),n["default"].use(q.a),n["default"].use(R["a"],A.a),n["default"].use(i.a),n["default"].use(B["a"],{loading:"/imgs/loading-svg/loading-bars.svg"}),n["default"].prototype.$message=i.a,n["default"].config.productionTip=!1,new n["default"]({store:G,router:I,render:function(t){return t(m)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";a("9c0c")},"714b":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("transition",{attrs:{name:"slide"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.showModal,expression:"showModal"}],staticClass:"modal"},[a("div",{staticClass:"mask"}),a("div",{staticClass:"modal-dialog"},[a("div",{staticClass:"modal-header"},[a("span",[t._v(t._s(t.title))]),a("a",{staticClass:"icon-close",attrs:{href:"javascript:;"},on:{click:function(e){return t.$emit("cancle")}}})]),a("div",{staticClass:"modal-body"},[t._t("body")],2),a("div",{staticClass:"modal-footer"},[1==t.btnType?a("a",{staticClass:"btn",attrs:{href:"javascript:;"},on:{click:function(e){return t.$emit("submit")}}},[t._v(t._s(t.sureText))]):t._e(),2==t.btnType?a("a",{staticClass:"btn",attrs:{href:"javascript:;"},on:{click:function(e){return t.$emit("cancle")}}},[t._v(t._s(t.cancelText))]):t._e(),3==t.btnType?a("div",{staticClass:"btn-group"},[a("a",{staticClass:"btn",attrs:{href:"javascript:;"},on:{click:function(e){return t.$emit("submit")}}},[t._v(t._s(t.sureText))]),a("a",{staticClass:"btn btn-default",attrs:{href:"javascript:;"},on:{click:function(e){return t.$emit("cancle")}}},[t._v(t._s(t.cancelText))])]):t._e()])])])])],1)},i=[],n={name:"modal",props:{modalType:{type:String,default:"form"},title:String,btnType:String,sureText:{type:String,default:"确定"},cancelText:{type:String,default:"取消"},showModal:Boolean}},r=n,c=(a("30db"),a("2877")),o=Object(c["a"])(r,s,i,!1,null,null,null);e["a"]=o.exports},"885f":function(t,e,a){},"8ee7":function(t,e,a){"use strict";a("e8ec")},"984c":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"service"},[a("div",{staticClass:"container"},[a("ul",[a("li",[a("span",{staticClass:"icon-setting"}),t._v("预约维修服务")]),a("li",[a("span",{staticClass:"icon-7day"}),t._v("7天无理由退货")]),a("li",[a("span",{staticClass:"icon-15day"}),t._v("15天免费换货")]),a("li",[a("span",{staticClass:"icon-post"}),t._v("满150元")])])])])}],n={name:"service-bar"},r=n,c=(a("f8b2"),a("2877")),o=Object(c["a"])(r,s,i,!1,null,null,null);e["a"]=o.exports},"9c0c":function(t,e,a){},b8a9:function(t,e,a){},bd1c:function(t,e,a){"use strict";a("885f")},bd5f:function(t,e,a){"use strict";a("fa94")},e8ec:function(t,e,a){},f091:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer"},[a("div",{staticClass:"footer-logo"},[a("img",{attrs:{src:"/imgs/logo-footer.png",alt:""}}),a("p",[t._v("小米商城")])]),a("div",{staticClass:"footer-link"},[a("a",{attrs:{href:"",target:"_blank"}},[t._v("河畔一角主页")]),a("span",[t._v("|")]),a("a",{attrs:{href:"",target:"_blank"}},[t._v("Vue全栈课程")]),a("span",[t._v("|")]),a("a",{attrs:{href:"",target:"_blank"}},[t._v("React全家桶课程")]),a("span",[t._v("|")]),a("a",{attrs:{href:"",target:"_blank"}},[t._v("微信支付专项课程")])]),a("div",{staticClass:"copyright"},[t._v("Copyright ©2020 "),a("span",{staticClass:"domain"},[t._v(" mi.futurefe.com ")]),t._v("Rights Reserved.")])])}],n={name:"nav-footer"},r=n,c=(a("bd1c"),a("2877")),o=Object(c["a"])(r,s,i,!1,null,"11a2c5de",null);e["a"]=o.exports},f8b2:function(t,e,a){"use strict";a("b8a9")},fa94:function(t,e,a){},fc6e:function(t,e,a){"use strict";a.r(e);var s=a("96eb"),i=a.n(s);i.a.mock("/api/user/login",{})}});
//# sourceMappingURL=app.81387bba.js.map