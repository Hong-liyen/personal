(function(t){function e(e){for(var n,a,c=e[0],o=e[1],l=e[2],m=0,g=[];m<c.length;m++)a=c[m],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&g.push(i[a][0]),i[a]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);u&&u(e);while(g.length)g.shift()();return s.push.apply(s,l||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],n=!0,c=1;c<r.length;c++){var o=r[c];0!==i[o]&&(n=!1)}n&&(s.splice(e--,1),t=a(a.s=r[0]))}return t}var n={},i={app:0},s=[];function a(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=t,a.c=n,a.d=function(t,e,r){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(r,n,function(e){return t[e]}.bind(null,n));return r},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=o;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"086f":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"works"},[r("div",{staticClass:"bread__title"},[t._v("晴天設計")])])}],s={name:"home",data:function(){return{}}},a=s,c=(r("793d"),r("2877")),o=Object(c["a"])(a,n,i,!1,null,"2b37d574",null);e["default"]=o.exports},"09ad":function(t,e,r){},"132d":function(t,e,r){"use strict";var n=r("4e16"),i=r.n(n);i.a},"211c":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"works"},[r("el-tabs",{on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[r("el-tab-pane",{attrs:{label:"全部",name:"all"}},[r("div",{staticClass:"tab"},t._l(t.DESIGN,(function(e){return r("div",[["design"===e.class?r("list-lightbox",{attrs:{srcs:t.LOGO_IMG}}):t._e(),"website"===e.class?r("list-lightbox",{attrs:{srcs:t.WEBSITE_IMG}}):t._e(),"poster"===e.class?r("list-lightbox",{attrs:{srcs:t.POSTER_IMG}}):t._e(),"draw"===e.class?r("list-lightbox",{attrs:{srcs:t.DRAW_IMG}}):t._e()]],2)})),0),r("div",{staticClass:"tab"},t._l(t.BACKSTAGE,(function(e){return r("div",["APP-Design"===e.class?[r("list-lightbox",{attrs:{srcs:t.APPDESIGN_IMG}})]:"banner"===e.class?[r("list-lightbox",{attrs:{srcs:t.BANNER_IMG}})]:"edm"===e.class?[r("list-lightbox",{attrs:{srcs:t.edm}})]:[r("list-lightbox",{attrs:{srcs:t.card}})]],2)})),0),r("div",{staticClass:"tab"},t._l(t.frontEnd,(function(t){return r("div",[r("a",{attrs:{href:t.href,target:"_blank"}},[r("img",{attrs:{src:t.url}})])])})),0),r("div",{staticClass:"tab"},t._l(t.frontEnd2,(function(t){return r("div",[r("a",{attrs:{href:t.href,target:"_blank"}},[r("img",{attrs:{src:t.url}})])])})),0),r("div",{staticClass:"tab"},t._l(t.WEB_PM,(function(t){return r("div",["no"===t.class?[r("img",{attrs:{src:t.url}})]:[r("a",{attrs:{href:t.href,target:"_blank"}},[r("img",{attrs:{src:t.url}})])]],2)})),0)]),r("el-tab-pane",{attrs:{label:"平面設計",name:"design"}},[r("div",{staticClass:"tab"},t._l(t.DESIGN,(function(e){return r("div",[["design"===e.class?r("list-lightbox",{attrs:{srcs:t.LOGO_IMG}}):t._e(),"website"===e.class?r("list-lightbox",{attrs:{srcs:t.WEBSITE_IMG}}):t._e(),"poster"===e.class?r("list-lightbox",{attrs:{srcs:t.POSTER_IMG}}):t._e(),"draw"===e.class?r("list-lightbox",{attrs:{srcs:t.DRAW_IMG}}):t._e()]],2)})),0),r("div",{staticClass:"tab"},t._l(t.BACKSTAGE,(function(e){return r("div",["APP-Design"===e.class?[r("list-lightbox",{attrs:{srcs:t.APPDESIGN_IMG}})]:"banner"===e.class?[r("list-lightbox",{attrs:{srcs:t.BANNER_IMG}})]:"edm"===e.class?[r("list-lightbox",{attrs:{srcs:t.edm}})]:[r("list-lightbox",{attrs:{srcs:t.card}})]],2)})),0)]),r("el-tab-pane",{attrs:{label:"網頁開發",name:"website"}},[r("div",{staticClass:"tab"},t._l(t.frontEnd,(function(t){return r("div",[r("a",{attrs:{href:t.href,target:"_blank"}},[r("img",{attrs:{src:t.url}})])])})),0),r("div",{staticClass:"tab"},t._l(t.frontEnd2,(function(t){return r("div",[r("a",{attrs:{href:t.href,target:"_blank"}},[r("img",{attrs:{src:t.url}})])])})),0)]),r("el-tab-pane",{attrs:{label:"網站/APP企劃",name:"plan"}},[r("div",{staticClass:"tab"},t._l(t.WEB_PM,(function(t){return r("div",["no"===t.class?[r("img",{attrs:{src:t.url}})]:[r("a",{attrs:{href:t.href,target:"_blank"}},[r("img",{attrs:{src:t.url}})])]],2)})),0)]),r("el-tab-pane",{attrs:{label:"社群經營",name:"community"}},[r("div",{staticClass:"tab"},t._l(t.community,(function(t){return r("div",["no"===t.class?[r("img",{attrs:{src:t.url}})]:[r("a",{attrs:{href:t.href,target:"_blank"}},[r("img",{attrs:{src:t.url}})])]],2)})),0)]),r("el-tab-pane",{attrs:{label:"電子商務",name:"ecommerce"}},[r("div",{staticClass:"tab"},t._l(t.ecommerce,(function(t){return r("div",["no"===t.class?[r("img",{attrs:{src:t.url}})]:[r("a",{attrs:{href:t.href,target:"_blank"}},[r("img",{attrs:{src:t.url}})])]],2)})),0)]),r("el-tab-pane",{attrs:{label:"影像剪輯",name:"videoClip"}},[r("div",{staticClass:"tab"},t._l(t.videoClip,(function(t){return r("div",["no"===t.class?[r("img",{attrs:{src:t.url}})]:[r("a",{attrs:{href:t.href,target:"_blank"}},[r("img",{attrs:{src:t.url}})])]],2)})),0)])],1)],1)},i=[],s=r("5f38"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.lightboxList.length>0?r("div",{staticClass:"list-lightbox",on:{click:t.callLightbox}},[r("img",{attrs:{src:t.lightboxList[0]}}),t._l(t.lightboxList,(function(e,n){return t.isActive?[""!==e?r("div",{key:n,staticClass:"lightbox",class:{active:t.isActive&&n===t.currentIndex},on:{click:function(e){return e.stopPropagation(),t.closeLightbox(e)}}},[t.lightboxList.length>1?[r("div",{staticClass:"prev",on:{click:function(e){return e.stopPropagation(),t.handleClickArrow(-1)}}}),r("div",{staticClass:"next",on:{click:function(e){return e.stopPropagation(),t.handleClickArrow(1)}}})]:t._e(),r("div",{staticClass:"close"}),r("div",{staticClass:"image-box"},[r("img",{staticClass:"lightbox-img",attrs:{src:e},on:{click:function(e){return e.stopPropagation(),t.openLightbox(e)}}})])],2):t._e()]:t._e()}))],2):t._e()},c=[],o=(r("6762"),r("2fdb"),{name:"list-lightbox",props:{srcs:Array},data:function(){return{isActive:!1,currentIndex:0}},computed:{lightboxList:function(){return this.srcs.filter((function(t){return!["",null,void 0].includes(t)}))}},created:function(){},methods:{handleClickArrow:function(t){this.currentIndex=(this.currentIndex+t+this.lightboxList.length)%this.lightboxList.length},callLightbox:function(){this.isActive=!0,this.currentIndex=0},closeLightbox:function(){this.isActive=!1},openLightbox:function(){this.isActive=!0}}}),l=o,u=(r("af54"),r("2877")),m=Object(u["a"])(l,a,c,!1,null,"df0cf49e",null),g=m.exports,p={name:"works",components:{listLightbox:g},data:function(){return{activeName:"all",frontEnd:s["o"],frontEnd2:s["p"],BACKSTAGE:s["b"],DESIGN:s["d"],WEB_PM:s["i"],APPDESIGN_IMG:s["a"],LOGO_IMG:s["f"],POSTER_IMG:s["g"],DRAW_IMG:s["e"],WEBSITE_IMG:s["h"],BANNER_IMG:s["c"],card:s["k"],edm:s["n"],community:s["l"],ecommerce:s["m"],videoClip:s["q"]}}},h=p,f=(r("132d"),Object(u["a"])(h,n,i,!1,null,"08d6744b",null));e["default"]=f.exports},"270a":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div")},i=[],s={name:"skill-tree"},a=s,c=(r("d54e"),r("2877")),o=Object(c["a"])(a,n,i,!1,null,"2f0aca45",null);e["default"]=o.exports},"4c0b":function(t,e,r){t.exports=r.p+"img/gmail-icon.e67c6af8.svg"},"4e16":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("div",[r("router-view")],1)])},s=[],a={name:"index",components:{},data:function(){return{}},methods:{}},c=a,o=(r("5c0b"),r("2877")),l=Object(o["a"])(c,i,s,!1,null,null,null),u=l.exports,m=r("8c4f"),g=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"welcome"},[r("about"),r("works"),r("foot"),r("el-backtop",{attrs:{bottom:80}})],1)},p=[],h=r("086f"),f=r("e684"),d=r("270a"),b=r("211c"),v=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},_=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"foot"},[n("div",{staticClass:"social-links"},[n("div",[n("a",{attrs:{href:"mailto:summer.hung222@gmail.com",target:"_blank"}},[n("img",{attrs:{src:r("4c0b")}}),n("span",[t._v("summer.hung222@gmail.com")])])]),n("div",[n("a",{attrs:{href:"https://lin.ee/0EC31Ps",target:"_blank"}},[n("img",{attrs:{src:r("b206")}}),n("span",[t._v("@277yofqa or ID: like3028")])])])]),n("div",{staticClass:"copyright"},[t._v("Copyright© Summer Studio, 2022.01")])])}],w={name:"foot"},x=w,E=(r("fc51"),Object(o["a"])(x,v,_,!1,null,"50230842",null)),C=E.exports,k={name:"welcome",components:{home:h["default"],about:f["default"],skillTree:d["default"],works:b["default"],foot:C},data:function(){return{classes:"bounce",delay:1e3,duration:1e3,iteration:5}}},P=k,y=(r("ce37"),Object(o["a"])(P,g,p,!1,null,"4f91d0a2",null)),A=y.exports;n["default"].use(m["a"]);var j=new m["a"]({routes:[{path:"/",name:"welcome",component:A},{path:"/home",name:"home",component:function(){return Promise.resolve().then(r.bind(null,"086f"))}},{path:"/about",name:"about",component:function(){return Promise.resolve().then(r.bind(null,"e684"))}},{path:"/skill-tree",name:"skill-tree",component:function(){return Promise.resolve().then(r.bind(null,"270a"))}},{path:"/works",name:"works",component:function(){return Promise.resolve().then(r.bind(null,"211c"))}}]}),I=r("2f62");n["default"].use(I["a"]);var G=new I["a"].Store({state:{count:1,todos:[{id:1,text:"...",done:!0},{id:2,text:"...",done:!1}]},getters:{doneTodos:function(t){return t.todos.filter((function(t){return t.done}))}},mutations:{increment:function(t,e){t.count+=e.amount}}}),O=r("5c96"),M=r.n(O);r("c69f");n["default"].use(M.a);var B=r("00e4");n["default"].config.productionTip=!1,n["default"].use(B["a"]),new n["default"]({router:j,store:G,render:function(t){return t(u)}}).$mount("#app")},"5c0b":function(t,e,r){"use strict";var n=r("e332"),i=r.n(n);i.a},"5f38":function(t,e,r){"use strict";r.d(e,"o",(function(){return n})),r.d(e,"p",(function(){return i})),r.d(e,"b",(function(){return s})),r.d(e,"d",(function(){return a})),r.d(e,"i",(function(){return c})),r.d(e,"l",(function(){return o})),r.d(e,"m",(function(){return l})),r.d(e,"q",(function(){return u})),r.d(e,"a",(function(){return m})),r.d(e,"c",(function(){return g})),r.d(e,"f",(function(){return p})),r.d(e,"g",(function(){return h})),r.d(e,"e",(function(){return f})),r.d(e,"h",(function(){return d})),r.d(e,"k",(function(){return b})),r.d(e,"n",(function(){return v})),r.d(e,"j",(function(){return _}));var n=[{label:"MotherK",class:"motherk",url:"https://i.imgur.com/sYdLfmU.png",href:"https://www.motherk.com.tw/"},{label:"劉麵包",class:"liu-bread",url:"https://i.imgur.com/yCesJFq.png",href:"http://www.nutricom.com.tw/index.html"},{label:"東方平台",class:"gpo",url:"https://i.imgur.com/68nTGuK.png",href:"https://hong-liyen.github.io/GPO_v5/"},{label:"中博彩票",class:"cb",url:"https://i.imgur.com/xbUWcLH.png",href:"https://hong-liyen.github.io/CB_website/"}],i=[{label:"Mega-Page展",class:"mega",url:"https://i.imgur.com/sXlN5Q4.png",href:"https://hong-liyen.github.io/page/"},{label:"OT後台系統",class:"ot",url:"https://i.imgur.com/zBXDECG.png",href:"https://hong-liyen.github.io/OTPlatform/"},{label:"刷卡換現金",class:"cash",url:"https://i.imgur.com/6EdvSCe.png",href:"http://0988368092.tw/"},{label:"刷卡換現金",class:"cash2",url:"https://i.imgur.com/WaB4EI3.png",href:"http://0915290156.tw/"}],s=[{label:"EDM",class:"edm",url:"edm",href:"no-website"},{label:"APP設計",class:"APP-Design",href:"no-website"},{label:"Banner設計",class:"banner",href:"no-website"},{label:"APP-啟動圖",class:"Launch",href:"no-website"}],a=[{label:"logo啟動圖設計",class:"design",href:"no-website"},{label:"網頁設計",class:"website",href:"no-website"},{label:"海報設計",class:"poster",href:"no-wesite"},{label:"插畫設計",class:"draw",href:"no-wesite"}],c=[{label:"newtalk-前台",href:"https://nphu1y.axshare.com",url:"https://i.imgur.com/lAftXmQ.png"},{label:"QPP",href:"https://a3lnkz.axshare.com",url:"https://i.imgur.com/xkKBkQ5.png"},{label:"GM",href:"https://iptiml.axshare.com",url:"https://i.imgur.com/8i6iLw9.png"},{label:"Wlive",href:"https://4pis07.axshare.com",url:"https://i.imgur.com/roaok53.png"}],o=[{label:"FB橙真水晶",href:"https://www.facebook.com/chengjhencrystal",url:"https://i.imgur.com/b84AmJl.png"},{label:"IG橙真水晶",href:"https://www.instagram.com/chengjhen/",url:"https://i.imgur.com/na9Q6MD.png"},{label:"FB-Amanda生活隨筆",href:"https://www.facebook.com/Amanda%E7%94%9F%E6%B4%BB%E9%9A%A8%E7%AD%86-102146218528993",url:"https://i.imgur.com/4zEAyZj.png"},{label:"IG-Amanda生活隨筆",href:"https://www.instagram.com/amandahong328/",url:"https://i.imgur.com/III4a0m.png"}],l=[{label:"蝦皮-橙真水晶",href:"https://shopee.tw/amanda328",url:"https://i.imgur.com/HbbFr0w.png"}],u=[{label:"YT-橙真水晶",href:"https://www.youtube.com/channel/UCe1I3LGe7SzQgEpg1yDzHMQ/featured",url:"https://i.imgur.com/Qs2aa6P.png"}],m=["https://i.imgur.com/Jx930nt.png","https://i.imgur.com/P0dGWU8.jpg","https://i.imgur.com/sffpaEK.jpg","https://i.imgur.com/VEhgqVt.jpg","https://i.imgur.com/NlnwHwK.jpg","https://i.imgur.com/0LHemTQ.jpg","https://i.imgur.com/tZeoXCY.jpg"],g=["https://i.imgur.com/yRl3ogF.png","https://i.imgur.com/ZRNONa7.png"],p=["https://i.imgur.com/ogje3rK.png","https://i.imgur.com/CCWVqYN.png","https://i.imgur.com/esUCD9O.png","https://i.imgur.com/vlJUr7Z.png","https://i.imgur.com/cB3RwBJ.png","https://i.imgur.com/ZJhsHVe.png","https://i.imgur.com/0dxH9XJ.png","https://i.imgur.com/Oy7JOyH.png"],h=["https://i.imgur.com/bX1FgM1.png","https://i.imgur.com/69IXN1m.png","https://i.imgur.com/QvQtnW6.png","https://i.imgur.com/fW1mUrM.png","https://i.imgur.com/ApjKO07.png","https://i.imgur.com/3CGYFxP.png","https://i.imgur.com/MYvaAyX.png","https://i.imgur.com/abDU5Gs.png","https://i.imgur.com/XZdXsR9.png","https://i.imgur.com/H9gaVys.png","https://i.imgur.com/UJPNXug.png","https://i.imgur.com/pexNKFX.png","https://i.imgur.com/lJ4ubhv.png","https://i.imgur.com/RsIP9bI.png","https://i.imgur.com/xmnqdcb.png","https://i.imgur.com/zsOXczs.png","https://i.imgur.com/6fvAhZj.jpg","https://i.imgur.com/CNTkDC2.jpg","https://i.imgur.com/9ytjFJF.png","https://i.imgur.com/dOqAP4t.png","https://i.imgur.com/qRD8s1T.png","https://i.imgur.com/cXoBX6m.jpg","https://i.imgur.com/GJKAvXE.png"],f=["https://i.imgur.com/xsd3qTQ.png","https://i.imgur.com/Ji24Jif.png","https://i.imgur.com/uDfEdit.png","https://i.imgur.com/ihuRBUE.png","https://i.imgur.com/5wWn5cL.jpg","https://i.imgur.com/isHzdeV.jpg","https://i.imgur.com/CgC25W2.jpg"],d=["https://i.imgur.com/dezb0PL.png","https://i.imgur.com/tExyGWi.jpg","https://i.imgur.com/GTyy7Dp.jpg","https://i.imgur.com/a585Iii.jpg","https://i.imgur.com/oX886iX.jpg","https://i.imgur.com/efsy96O.jpg","https://i.imgur.com/q3iEOZ4.jpg"],b=["https://i.imgur.com/6AsWAKt.png","https://i.imgur.com/5Nm6vbb.png","https://i.imgur.com/gLm2n1T.png","https://i.imgur.com/gflgA32.png","https://i.imgur.com/XjwAy2H.png","https://i.imgur.com/FeWBhwf.png","https://i.imgur.com/Yb4awfG.png"],v=["https://i.imgur.com/g8riQdy.png","https://i.imgur.com/Cj8Zr4k.jpg","https://i.imgur.com/NmIaWG7.jpg","https://i.imgur.com/Ar060TI.png"],_=["https://i.imgur.com/BhcvnMX.png","https://i.imgur.com/xIEXtPj.png","https://i.imgur.com/HwGx4Hf.png","https://i.imgur.com/58t6SQO.png"]},"793d":function(t,e,r){"use strict";var n=r("80df"),i=r.n(n);i.a},"80df":function(t,e,r){},9310:function(t,e,r){"use strict";var n=r("09ad"),i=r.n(n);i.a},af54:function(t,e,r){"use strict";var n=r("e86b"),i=r.n(n);i.a},b206:function(t,e,r){t.exports=r.p+"img/line-messenger.62e83cd7.svg"},c0b5:function(t,e,r){},c69f:function(t,e,r){},cacc:function(t,e,r){},ce37:function(t,e,r){"use strict";var n=r("db65"),i=r.n(n);i.a},d54e:function(t,e,r){"use strict";var n=r("cacc"),i=r.n(n);i.a},db65:function(t,e,r){},e332:function(t,e,r){},e684:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"about"},[r("el-carousel",{attrs:{interval:3e3,arrow:"always",height:"65vh"}},t._l(t.bannerImg,(function(t,e){return r("el-carousel-item",{key:t},[r("img",{attrs:{src:t}})])})),1)],1)},i=[],s=r("5f38"),a={name:"about",data:function(){return{bannerImg:s["j"]}}},c=a,o=(r("9310"),r("2877")),l=Object(o["a"])(c,n,i,!1,null,"477b9a1a",null);e["default"]=l.exports},e86b:function(t,e,r){},fc51:function(t,e,r){"use strict";var n=r("c0b5"),i=r.n(n);i.a}});
//# sourceMappingURL=app.36e56f1d.js.map