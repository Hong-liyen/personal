(function(t){function r(r){for(var n,a,c=r[0],o=r[1],l=r[2],m=0,g=[];m<c.length;m++)a=c[m],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&g.push(i[a][0]),i[a]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);u&&u(r);while(g.length)g.shift()();return s.push.apply(s,l||[]),e()}function e(){for(var t,r=0;r<s.length;r++){for(var e=s[r],n=!0,c=1;c<e.length;c++){var o=e[c];0!==i[o]&&(n=!1)}n&&(s.splice(r--,1),t=a(a.s=e[0]))}return t}var n={},i={app:0},s=[];function a(r){if(n[r])return n[r].exports;var e=n[r]={i:r,l:!1,exports:{}};return t[r].call(e.exports,e,e.exports,a),e.l=!0,e.exports}a.m=t,a.c=n,a.d=function(t,r,e){a.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:e})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,r){if(1&r&&(t=a(t)),8&r)return t;if(4&r&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(a.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var n in t)a.d(e,n,function(r){return t[r]}.bind(null,n));return e},a.n=function(t){var r=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(r,"a",r),r},a.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},a.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=r,c=c.slice();for(var l=0;l<c.length;l++)r(c[l]);var u=o;s.push([0,"chunk-vendors"]),e()})({0:function(t,r,e){t.exports=e("56d7")},"086f":function(t,r,e){"use strict";e.r(r);var n=function(){var t=this,r=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"works"},[e("div",{staticClass:"bread__title"},[t._v("晴天設計")])])}],s={name:"home",data:function(){return{}}},a=s,c=(e("793d"),e("2877")),o=Object(c["a"])(a,n,i,!1,null,"2b37d574",null);r["default"]=o.exports},"09ad":function(t,r,e){},"132d":function(t,r,e){"use strict";var n=e("4e16"),i=e.n(n);i.a},"211c":function(t,r,e){"use strict";e.r(r);var n=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"works"},[e("el-tabs",{on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(r){t.activeName=r},expression:"activeName"}},[e("el-tab-pane",{attrs:{label:"全部",name:"all"}},[e("div",{staticClass:"tab"},t._l(t.DESIGN,(function(r){return e("div",[["design"===r.class?e("list-lightbox",{attrs:{srcs:t.LOGO_IMG}}):t._e(),"website"===r.class?e("list-lightbox",{attrs:{srcs:t.WEBSITE_IMG}}):t._e(),"poster"===r.class?e("list-lightbox",{attrs:{srcs:t.POSTER_IMG}}):t._e(),"draw"===r.class?e("list-lightbox",{attrs:{srcs:t.DRAW_IMG}}):t._e()]],2)})),0),e("div",{staticClass:"tab"},t._l(t.BACKSTAGE,(function(r){return e("div",["APP-Design"===r.class?[e("list-lightbox",{attrs:{srcs:t.APPDESIGN_IMG}})]:"banner"===r.class?[e("list-lightbox",{attrs:{srcs:t.BANNER_IMG}})]:"edm"===r.class?[e("list-lightbox",{attrs:{srcs:t.edm}})]:[e("list-lightbox",{attrs:{srcs:t.card}})]],2)})),0),e("div",{staticClass:"tab"},t._l(t.frontEnd,(function(t){return e("div",[e("a",{attrs:{href:t.href,target:"_blank"}},[e("img",{attrs:{src:t.url}})])])})),0),e("div",{staticClass:"tab"},t._l(t.frontEnd2,(function(t){return e("div",[e("a",{attrs:{href:t.href,target:"_blank"}},[e("img",{attrs:{src:t.url}})])])})),0),e("div",{staticClass:"tab"},t._l(t.WEB_PM,(function(t){return e("div",["no"===t.class?[e("img",{attrs:{src:t.url}})]:[e("a",{attrs:{href:t.href,target:"_blank"}},[e("img",{attrs:{src:t.url}})])]],2)})),0)]),e("el-tab-pane",{attrs:{label:"平面設計",name:"design"}},[e("div",{staticClass:"tab"},t._l(t.DESIGN,(function(r){return e("div",[["design"===r.class?e("list-lightbox",{attrs:{srcs:t.LOGO_IMG}}):t._e(),"website"===r.class?e("list-lightbox",{attrs:{srcs:t.WEBSITE_IMG}}):t._e(),"poster"===r.class?e("list-lightbox",{attrs:{srcs:t.POSTER_IMG}}):t._e(),"draw"===r.class?e("list-lightbox",{attrs:{srcs:t.DRAW_IMG}}):t._e()]],2)})),0),e("div",{staticClass:"tab"},t._l(t.BACKSTAGE,(function(r){return e("div",["APP-Design"===r.class?[e("list-lightbox",{attrs:{srcs:t.APPDESIGN_IMG}})]:"banner"===r.class?[e("list-lightbox",{attrs:{srcs:t.BANNER_IMG}})]:"edm"===r.class?[e("list-lightbox",{attrs:{srcs:t.edm}})]:[e("list-lightbox",{attrs:{srcs:t.card}})]],2)})),0)]),e("el-tab-pane",{attrs:{label:"網頁開發",name:"website"}},[e("div",{staticClass:"tab"},t._l(t.frontEnd,(function(t){return e("div",[e("a",{attrs:{href:t.href,target:"_blank"}},[e("img",{attrs:{src:t.url}})])])})),0),e("div",{staticClass:"tab"},t._l(t.frontEnd2,(function(t){return e("div",[e("a",{attrs:{href:t.href,target:"_blank"}},[e("img",{attrs:{src:t.url}})])])})),0)]),e("el-tab-pane",{attrs:{label:"網站/APP企劃",name:"plan"}},[e("div",{staticClass:"tab"},t._l(t.WEB_PM,(function(t){return e("div",["no"===t.class?[e("img",{attrs:{src:t.url}})]:[e("a",{attrs:{href:t.href,target:"_blank"}},[e("img",{attrs:{src:t.url}})])]],2)})),0)]),e("el-tab-pane",{attrs:{label:"社群經營",name:"community"}},[e("div",{staticClass:"tab"},t._l(t.community,(function(t){return e("div",["no"===t.class?[e("img",{attrs:{src:t.url}})]:[e("a",{attrs:{href:t.href,target:"_blank"}},[e("img",{attrs:{src:t.url}})])]],2)})),0)]),e("el-tab-pane",{attrs:{label:"電子商務",name:"ecommerce"}},[e("div",{staticClass:"tab"},t._l(t.ecommerce,(function(t){return e("div",["no"===t.class?[e("img",{attrs:{src:t.url}})]:[e("a",{attrs:{href:t.href,target:"_blank"}},[e("img",{attrs:{src:t.url}})])]],2)})),0)]),e("el-tab-pane",{attrs:{label:"影像剪輯",name:"videoClip"}},[e("div",{staticClass:"tab"},t._l(t.videoClip,(function(t){return e("div",["no"===t.class?[e("img",{attrs:{src:t.url}})]:[e("a",{attrs:{href:t.href,target:"_blank"}},[e("img",{attrs:{src:t.url}})])]],2)})),0)])],1)],1)},i=[],s=e("5f38"),a=function(){var t=this,r=t.$createElement,e=t._self._c||r;return t.lightboxList.length>0?e("div",{staticClass:"list-lightbox",on:{click:t.callLightbox}},[e("img",{attrs:{src:t.lightboxList[0]}}),t._l(t.lightboxList,(function(r,n){return t.isActive?[""!==r?e("div",{key:n,staticClass:"lightbox",class:{active:t.isActive&&n===t.currentIndex},on:{click:function(r){return r.stopPropagation(),t.closeLightbox(r)}}},[t.lightboxList.length>1?[e("div",{staticClass:"prev",on:{click:function(r){return r.stopPropagation(),t.handleClickArrow(-1)}}}),e("div",{staticClass:"next",on:{click:function(r){return r.stopPropagation(),t.handleClickArrow(1)}}})]:t._e(),e("div",{staticClass:"close"}),e("div",{staticClass:"image-box"},[e("img",{staticClass:"lightbox-img",attrs:{src:r},on:{click:function(r){return r.stopPropagation(),t.openLightbox(r)}}})])],2):t._e()]:t._e()}))],2):t._e()},c=[],o=(e("6762"),e("2fdb"),{name:"list-lightbox",props:{srcs:Array},data:function(){return{isActive:!1,currentIndex:0}},computed:{lightboxList:function(){return this.srcs.filter((function(t){return!["",null,void 0].includes(t)}))}},created:function(){},methods:{handleClickArrow:function(t){this.currentIndex=(this.currentIndex+t+this.lightboxList.length)%this.lightboxList.length},callLightbox:function(){this.isActive=!0,this.currentIndex=0},closeLightbox:function(){this.isActive=!1},openLightbox:function(){this.isActive=!0}}}),l=o,u=(e("af54"),e("2877")),m=Object(u["a"])(l,a,c,!1,null,"df0cf49e",null),g=m.exports,p={name:"works",components:{listLightbox:g},data:function(){return{activeName:"all",frontEnd:s["o"],frontEnd2:s["p"],BACKSTAGE:s["b"],DESIGN:s["d"],WEB_PM:s["i"],APPDESIGN_IMG:s["a"],LOGO_IMG:s["f"],POSTER_IMG:s["g"],DRAW_IMG:s["e"],WEBSITE_IMG:s["h"],BANNER_IMG:s["c"],card:s["k"],edm:s["n"],community:s["l"],ecommerce:s["m"],videoClip:s["q"]}}},h=p,f=(e("132d"),Object(u["a"])(h,n,i,!1,null,"08d6744b",null));r["default"]=f.exports},"270a":function(t,r,e){"use strict";e.r(r);var n=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div")},i=[],s={name:"skill-tree"},a=s,c=(e("d54e"),e("2877")),o=Object(c["a"])(a,n,i,!1,null,"2f0aca45",null);r["default"]=o.exports},"4c0b":function(t,r,e){t.exports=e.p+"img/gmail-icon.e67c6af8.svg"},"4e16":function(t,r,e){},"56d7":function(t,r,e){"use strict";e.r(r);e("cadf"),e("551c"),e("f751"),e("097d");var n=e("2b0e"),i=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{attrs:{id:"app"}},[e("div",[e("router-view")],1)])},s=[],a={name:"index",components:{},data:function(){return{}},methods:{}},c=a,o=(e("5c0b"),e("2877")),l=Object(o["a"])(c,i,s,!1,null,null,null),u=l.exports,m=e("8c4f"),g=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"welcome"},[e("about"),e("works"),e("foot"),e("el-backtop",{attrs:{bottom:80}})],1)},p=[],h=e("086f"),f=e("e684"),d=e("270a"),b=e("211c"),v=function(){var t=this,r=t.$createElement;t._self._c;return t._m(0)},_=[function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",{staticClass:"foot"},[n("div",{staticClass:"social-links"},[n("div",[n("a",{attrs:{href:"mailto:summer.hung222@gmail.com",target:"_blank"}},[n("img",{attrs:{src:e("4c0b")}}),n("span",[t._v("summer.hung222@gmail.com")])])]),n("div",[n("a",{attrs:{href:"https://lin.ee/0EC31Ps",target:"_blank"}},[n("img",{attrs:{src:e("b206")}}),n("span",[t._v("@277yofqa or ID: like3028")])])])]),n("div",{staticClass:"copyright"},[t._v("Copyright© Summer Studio, 2022.01")])])}],w={name:"foot"},x=w,C=(e("fc51"),Object(o["a"])(x,v,_,!1,null,"50230842",null)),E=C.exports,k={name:"welcome",components:{home:h["default"],about:f["default"],skillTree:d["default"],works:b["default"],foot:E},data:function(){return{classes:"bounce",delay:1e3,duration:1e3,iteration:5}}},A=k,P=(e("ce37"),Object(o["a"])(A,g,p,!1,null,"4f91d0a2",null)),y=P.exports;n["default"].use(m["a"]);var I=new m["a"]({routes:[{path:"/",name:"welcome",component:y},{path:"/home",name:"home",component:function(){return Promise.resolve().then(e.bind(null,"086f"))}},{path:"/about",name:"about",component:function(){return Promise.resolve().then(e.bind(null,"e684"))}},{path:"/skill-tree",name:"skill-tree",component:function(){return Promise.resolve().then(e.bind(null,"270a"))}},{path:"/works",name:"works",component:function(){return Promise.resolve().then(e.bind(null,"211c"))}}]}),G=e("2f62");n["default"].use(G["a"]);var j=new G["a"].Store({state:{count:1,todos:[{id:1,text:"...",done:!0},{id:2,text:"...",done:!1}]},getters:{doneTodos:function(t){return t.todos.filter((function(t){return t.done}))}},mutations:{increment:function(t,r){t.count+=r.amount}}}),O=e("5c96"),M=e.n(O);e("c69f");n["default"].use(M.a);var B=e("00e4");n["default"].config.productionTip=!1,n["default"].use(B["a"]),new n["default"]({router:I,store:j,render:function(t){return t(u)}}).$mount("#app")},"5c0b":function(t,r,e){"use strict";var n=e("e332"),i=e.n(n);i.a},"5f38":function(t,r,e){"use strict";e.d(r,"o",(function(){return n})),e.d(r,"p",(function(){return i})),e.d(r,"b",(function(){return s})),e.d(r,"d",(function(){return a})),e.d(r,"i",(function(){return c})),e.d(r,"l",(function(){return o})),e.d(r,"m",(function(){return l})),e.d(r,"q",(function(){return u})),e.d(r,"a",(function(){return m})),e.d(r,"c",(function(){return g})),e.d(r,"f",(function(){return p})),e.d(r,"g",(function(){return h})),e.d(r,"e",(function(){return f})),e.d(r,"h",(function(){return d})),e.d(r,"k",(function(){return b})),e.d(r,"n",(function(){return v})),e.d(r,"j",(function(){return _}));var n=[{label:"MotherK",class:"motherk",url:"https://i.imgur.com/sYdLfmU.png",href:"https://www.motherk.com.tw/"},{label:"劉麵包",class:"liu-bread",url:"https://i.imgur.com/yCesJFq.png",href:"http://www.nutricom.com.tw/index.html"},{label:"東方平台",class:"gpo",url:"https://i.imgur.com/68nTGuK.png",href:"https://hong-liyen.github.io/GPO_v5/"},{label:"中博彩票",class:"cb",url:"https://i.imgur.com/xbUWcLH.png",href:"https://hong-liyen.github.io/CB_website/"}],i=[{label:"Mega-Page展",class:"mega",url:"https://i.imgur.com/sXlN5Q4.png",href:"https://hong-liyen.github.io/page/"},{label:"OT後台系統",class:"ot",url:"https://i.imgur.com/zBXDECG.png",href:"https://hong-liyen.github.io/OTPlatform/"},{label:"刷卡換現金",class:"cash",url:"https://i.imgur.com/6EdvSCe.png",href:"http://0988368092.tw/"},{label:"刷卡換現金",class:"cash2",url:"https://i.imgur.com/WaB4EI3.png",href:"http://0915290156.tw/"}],s=[{label:"EDM",class:"edm",url:"edm",href:"no-website"},{label:"APP設計",class:"APP-Design",href:"no-website"},{label:"Banner設計",class:"banner",href:"no-website"},{label:"APP-啟動圖",class:"Launch",href:"no-website"}],a=[{label:"logo啟動圖設計",class:"design",href:"no-website"},{label:"網頁設計",class:"website",href:"no-website"},{label:"海報設計",class:"poster",href:"no-wesite"},{label:"插畫設計",class:"draw",href:"no-wesite"}],c=[{label:"newtalk-前台",href:"https://nphu1y.axshare.com",url:"https://i.imgur.com/lAftXmQ.png"},{label:"QPP",href:"https://a3lnkz.axshare.com",url:"https://i.imgur.com/xkKBkQ5.png"},{label:"GM",href:"https://iptiml.axshare.com",url:"https://i.imgur.com/8i6iLw9.png"},{label:"Wlive",href:"https://4pis07.axshare.com",url:"https://i.imgur.com/roaok53.png"}],o=[{label:"FB橙真水晶",href:"https://www.facebook.com/chengjhencrystal",url:"https://i.imgur.com/b84AmJl.png"},{label:"IG橙真水晶",href:"https://www.instagram.com/chengjhen/",url:"https://i.imgur.com/na9Q6MD.png"},{label:"FB-Amanda生活隨筆",href:"https://www.facebook.com/Amanda%E7%94%9F%E6%B4%BB%E9%9A%A8%E7%AD%86-102146218528993",url:"https://i.imgur.com/4zEAyZj.png"},{label:"IG-Amanda生活隨筆",href:"https://www.instagram.com/amandahong328/",url:"https://i.imgur.com/III4a0m.png"}],l=[{label:"蝦皮-橙真水晶",href:"https://shopee.tw/amanda328",url:"https://i.imgur.com/HbbFr0w.png"}],u=[{label:"YT-橙真水晶",href:"https://www.youtube.com/channel/UCe1I3LGe7SzQgEpg1yDzHMQ/featured",url:"https://i.imgur.com/Qs2aa6P.png"}],m=["https://i.imgur.com/Jx930nt.png","https://i.imgur.com/6Cn3TM8.jpg","https://i.imgur.com/FNNvUk4.jpg","https://i.imgur.com/qdzMA2o.jpg","https://i.imgur.com/Lw4hqs2.jpg","https://i.imgur.com/mDA3fEC.jpg"],g=["https://i.imgur.com/yRl3ogF.png","https://i.imgur.com/L5gRiOc.png"],p=["https://i.imgur.com/ogje3rK.png","https://i.imgur.com/CCWVqYN.png","https://i.imgur.com/esUCD9O.png","https://i.imgur.com/vlJUr7Z.png","https://i.imgur.com/cB3RwBJ.png","https://i.imgur.com/ZJhsHVe.png","https://i.imgur.com/0dxH9XJ.png","https://i.imgur.com/Oy7JOyH.png"],h=["https://i.imgur.com/bX1FgM1.png","https://i.imgur.com/69IXN1m.png","https://i.imgur.com/QvQtnW6.png","https://i.imgur.com/fW1mUrM.png","https://i.imgur.com/ApjKO07.png","https://i.imgur.com/3CGYFxP.png","https://i.imgur.com/MYvaAyX.png","https://i.imgur.com/abDU5Gs.png","https://i.imgur.com/XZdXsR9.png","https://i.imgur.com/H9gaVys.png","https://i.imgur.com/UJPNXug.png","https://i.imgur.com/pexNKFX.png","https://i.imgur.com/lJ4ubhv.png","https://i.imgur.com/RsIP9bI.png","https://i.imgur.com/xmnqdcb.png","https://i.imgur.com/zsOXczs.png","https://i.imgur.com/6fvAhZj.jpg","https://i.imgur.com/CNTkDC2.jpg","https://i.imgur.com/9ytjFJF.png","https://i.imgur.com/dOqAP4t.png","https://i.imgur.com/qRD8s1T.png","https://i.imgur.com/cXoBX6m.jpg","https://i.imgur.com/GJKAvXE.png"],f=["https://i.imgur.com/xsd3qTQ.png","https://i.imgur.com/Ji24Jif.png","https://i.imgur.com/uDfEdit.png","https://i.imgur.com/ihuRBUE.png","https://i.imgur.com/5wWn5cL.jpg","https://i.imgur.com/isHzdeV.jpg","https://i.imgur.com/CgC25W2.jpg"],d=["https://i.imgur.com/dezb0PL.png","https://i.imgur.com/tExyGWi.jpg","https://i.imgur.com/GTyy7Dp.jpg","https://i.imgur.com/r16roBT.jpg","https://i.imgur.com/v3CKdIR.jpg","https://i.imgur.com/efsy96O.jpg"],b=["https://i.imgur.com/6AsWAKt.png","https://i.imgur.com/5Nm6vbb.png","https://i.imgur.com/gLm2n1T.png","https://i.imgur.com/gflgA32.png","https://i.imgur.com/XjwAy2H.png","https://i.imgur.com/FeWBhwf.png","https://i.imgur.com/Yb4awfG.png"],v=["https://i.imgur.com/g8riQdy.png","https://i.imgur.com/Cj8Zr4k.jpg","https://i.imgur.com/NmIaWG7.jpg","https://i.imgur.com/Ar060TI.png"],_=["https://i.imgur.com/BhcvnMX.png","https://i.imgur.com/1G7LzXG.png","https://i.imgur.com/HwGx4Hf.png","https://i.imgur.com/58t6SQO.png"]},"793d":function(t,r,e){"use strict";var n=e("80df"),i=e.n(n);i.a},"80df":function(t,r,e){},9310:function(t,r,e){"use strict";var n=e("09ad"),i=e.n(n);i.a},af54:function(t,r,e){"use strict";var n=e("e86b"),i=e.n(n);i.a},b206:function(t,r,e){t.exports=e.p+"img/line-messenger.62e83cd7.svg"},c0b5:function(t,r,e){},c69f:function(t,r,e){},cacc:function(t,r,e){},ce37:function(t,r,e){"use strict";var n=e("db65"),i=e.n(n);i.a},d54e:function(t,r,e){"use strict";var n=e("cacc"),i=e.n(n);i.a},db65:function(t,r,e){},e332:function(t,r,e){},e684:function(t,r,e){"use strict";e.r(r);var n=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"about"},[e("el-carousel",{attrs:{interval:3e3,arrow:"always",height:"65vh"}},t._l(t.bannerImg,(function(t,r){return e("el-carousel-item",{key:t},[e("img",{attrs:{src:t}})])})),1)],1)},i=[],s=e("5f38"),a={name:"about",data:function(){return{bannerImg:s["j"]}}},c=a,o=(e("9310"),e("2877")),l=Object(o["a"])(c,n,i,!1,null,"477b9a1a",null);r["default"]=l.exports},e86b:function(t,r,e){},fc51:function(t,r,e){"use strict";var n=e("c0b5"),i=e.n(n);i.a}});
//# sourceMappingURL=app.77013ef1.js.map