(function(t){function n(n){for(var r,a,c=n[0],o=n[1],l=n[2],m=0,g=[];m<c.length;m++)a=c[m],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&g.push(i[a][0]),i[a]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);u&&u(n);while(g.length)g.shift()();return s.push.apply(s,l||[]),e()}function e(){for(var t,n=0;n<s.length;n++){for(var e=s[n],r=!0,c=1;c<e.length;c++){var o=e[c];0!==i[o]&&(r=!1)}r&&(s.splice(n--,1),t=a(a.s=e[0]))}return t}var r={},i={app:0},s=[];function a(n){if(r[n])return r[n].exports;var e=r[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,a),e.l=!0,e.exports}a.m=t,a.c=r,a.d=function(t,n,e){a.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,n){if(1&n&&(t=a(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(a.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)a.d(e,r,function(n){return t[n]}.bind(null,r));return e},a.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(n,"a",n),n},a.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},a.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=n,c=c.slice();for(var l=0;l<c.length;l++)n(c[l]);var u=o;s.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"086f":function(t,n,e){"use strict";e.r(n);var r=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"works"},[e("div",{staticClass:"bread__title"},[t._v("晴天設計")])])}],s={name:"home",data:function(){return{}}},a=s,c=(e("793d"),e("2877")),o=Object(c["a"])(a,r,i,!1,null,"2b37d574",null);n["default"]=o.exports},"09ad":function(t,n,e){},"211c":function(t,n,e){"use strict";e.r(n);var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"works"},[e("el-tabs",{on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(n){t.activeName=n},expression:"activeName"}},[e("el-tab-pane",{attrs:{label:"全部",name:"all"}},[e("div",{staticClass:"tab"},t._l(t.frontEnd,(function(t){return e("div",[e("a",{attrs:{href:t.href,target:"_blank"}},[e("img",{attrs:{src:t.url}})])])})),0),e("div",{staticClass:"tab"},t._l(t.frontEnd2,(function(t){return e("div",[e("a",{attrs:{href:t.href,target:"_blank"}},[e("img",{attrs:{src:t.url}})])])})),0),e("div",{staticClass:"tab"},t._l(t.DESIGN,(function(n){return e("div",[["design"===n.class?e("list-lightbox",{attrs:{srcs:t.LOGO_IMG}}):t._e(),"website"===n.class?e("list-lightbox",{attrs:{srcs:t.WEBSITE_IMG}}):t._e(),"banner"===n.class?e("list-lightbox",{attrs:{srcs:t.POSTER_IMG}}):t._e(),"draw"===n.class?e("list-lightbox",{attrs:{srcs:t.DRAW_IMG}}):t._e()]],2)})),0),e("div",{staticClass:"tab"},t._l(t.BACKSTAGE,(function(n){return e("div",["APP-Design"===n.class?[e("list-lightbox",{attrs:{srcs:t.APPDESIGN_IMG}})]:"king"===n.class?[e("list-lightbox",{attrs:{srcs:t.BANNER_IMG}})]:"edm"===n.class?[e("list-lightbox",{attrs:{srcs:t.edm}})]:[e("list-lightbox",{attrs:{srcs:t.Launch}})]],2)})),0),e("div",{staticClass:"tab"},t._l(t.WEB_PM,(function(t){return e("div",["no"===t.class?[e("img",{attrs:{src:t.url}})]:[e("a",{attrs:{href:t.href,target:"_blank"}},[e("img",{attrs:{src:t.url}})])]],2)})),0)]),e("el-tab-pane",{attrs:{label:"平面設計",name:"design"}},[e("div",{staticClass:"tab"},t._l(t.DESIGN,(function(n){return e("div",[["design"===n.class?e("list-lightbox",{attrs:{srcs:t.LOGO_IMG}}):t._e(),"website"===n.class?e("list-lightbox",{attrs:{srcs:t.WEBSITE_IMG}}):t._e(),"banner"===n.class?e("list-lightbox",{attrs:{srcs:t.POSTER_IMG}}):t._e(),"draw"===n.class?e("list-lightbox",{attrs:{srcs:t.DRAW_IMG}}):t._e()]],2)})),0),e("div",{staticClass:"tab"},t._l(t.BACKSTAGE,(function(n){return e("div",["APP-Design"===n.class?[e("list-lightbox",{attrs:{srcs:t.APPDESIGN_IMG}})]:"king"===n.class?[e("list-lightbox",{attrs:{srcs:t.BANNER_IMG}})]:"edm"===n.class?[e("list-lightbox",{attrs:{srcs:t.edm}})]:[e("list-lightbox",{attrs:{srcs:t.Launch}})]],2)})),0)]),e("el-tab-pane",{attrs:{label:"網頁開發",name:"website"}},[e("div",{staticClass:"tab"},t._l(t.frontEnd,(function(t){return e("div",[e("a",{attrs:{href:t.href,target:"_blank"}},[e("img",{attrs:{src:t.url}})])])})),0),e("div",{staticClass:"tab"},t._l(t.frontEnd2,(function(t){return e("div",[e("a",{attrs:{href:t.href,target:"_blank"}},[e("img",{attrs:{src:t.url}})])])})),0)]),e("el-tab-pane",{attrs:{label:"行銷企劃",name:"plan"}},[e("div",{staticClass:"tab"},t._l(t.WEB_PM,(function(t){return e("div",["no"===t.class?[e("img",{attrs:{src:t.url}})]:[e("a",{attrs:{href:t.href,target:"_blank"}},[e("img",{attrs:{src:t.url}})])]],2)})),0)]),e("el-tab-pane",{attrs:{label:"社群經營",name:"community"}},[e("div",{staticClass:"tab"},t._l(t.community,(function(t){return e("div",["no"===t.class?[e("img",{attrs:{src:t.url}})]:[e("a",{attrs:{href:t.href,target:"_blank"}},[e("img",{attrs:{src:t.url}})])]],2)})),0)]),e("el-tab-pane",{attrs:{label:"電子商務",name:"ecommerce"}},[e("div",{staticClass:"tab"},t._l(t.ecommerce,(function(t){return e("div",["no"===t.class?[e("img",{attrs:{src:t.url}})]:[e("a",{attrs:{href:t.href,target:"_blank"}},[e("img",{attrs:{src:t.url}})])]],2)})),0)]),e("el-tab-pane",{attrs:{label:"影像剪輯",name:"videoClip"}},[e("div",{staticClass:"tab"},t._l(t.videoClip,(function(t){return e("div",["no"===t.class?[e("img",{attrs:{src:t.url}})]:[e("a",{attrs:{href:t.href,target:"_blank"}},[e("img",{attrs:{src:t.url}})])]],2)})),0)])],1)],1)},i=[],s=e("5f38"),a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.lightboxList.length>0?e("div",{staticClass:"list-lightbox",on:{click:t.callLightbox}},[e("img",{attrs:{src:t.lightboxList[0]}}),t._l(t.lightboxList,(function(n,r){return t.isActive?[""!==n?e("div",{key:r,staticClass:"lightbox",class:{active:t.isActive&&r===t.currentIndex},on:{click:function(n){return n.stopPropagation(),t.closeLightbox(n)}}},[t.lightboxList.length>1?[e("div",{staticClass:"prev",on:{click:function(n){return n.stopPropagation(),t.handleClickArrow(-1)}}}),e("div",{staticClass:"next",on:{click:function(n){return n.stopPropagation(),t.handleClickArrow(1)}}})]:t._e(),e("div",{staticClass:"close"}),e("div",{staticClass:"image-box"},[e("img",{staticClass:"lightbox-img",attrs:{src:n},on:{click:function(n){return n.stopPropagation(),t.openLightbox(n)}}})])],2):t._e()]:t._e()}))],2):t._e()},c=[],o=(e("6762"),e("2fdb"),{name:"list-lightbox",props:{srcs:Array},data:function(){return{isActive:!1,currentIndex:0}},computed:{lightboxList:function(){return this.srcs.filter((function(t){return!["",null,void 0].includes(t)}))}},created:function(){},methods:{handleClickArrow:function(t){this.currentIndex=(this.currentIndex+t+this.lightboxList.length)%this.lightboxList.length},callLightbox:function(){this.isActive=!0,this.currentIndex=0},closeLightbox:function(){this.isActive=!1},openLightbox:function(){this.isActive=!0}}}),l=o,u=(e("af54"),e("2877")),m=Object(u["a"])(l,a,c,!1,null,"df0cf49e",null),g=m.exports,p={name:"works",components:{listLightbox:g},data:function(){return{activeName:"all",frontEnd:s["o"],frontEnd2:s["p"],BACKSTAGE:s["b"],DESIGN:s["d"],WEB_PM:s["j"],APPDESIGN_IMG:s["a"],LOGO_IMG:s["f"],POSTER_IMG:s["h"],DRAW_IMG:s["e"],WEBSITE_IMG:s["i"],BANNER_IMG:s["c"],Launch:s["g"],edm:s["n"],community:s["l"],ecommerce:s["m"],videoClip:s["q"]}}},h=p,f=(e("2ac7"),Object(u["a"])(h,r,i,!1,null,"6b7d6dae",null));n["default"]=f.exports},"270a":function(t,n,e){"use strict";e.r(n);var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div")},i=[],s={name:"skill-tree"},a=s,c=(e("d54e"),e("2877")),o=Object(c["a"])(a,r,i,!1,null,"2f0aca45",null);n["default"]=o.exports},"2ac7":function(t,n,e){"use strict";var r=e("e331"),i=e.n(r);i.a},"4c0b":function(t,n,e){t.exports=e.p+"img/gmail-icon.e67c6af8.svg"},"56d7":function(t,n,e){"use strict";e.r(n);e("cadf"),e("551c"),e("f751"),e("097d");var r=e("2b0e"),i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("div",[e("router-view")],1)])},s=[],a={name:"index",components:{},data:function(){return{}},methods:{}},c=a,o=(e("5c0b"),e("2877")),l=Object(o["a"])(c,i,s,!1,null,null,null),u=l.exports,m=e("8c4f"),g=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"welcome"},[e("about"),e("works"),e("foot"),e("el-backtop",{attrs:{bottom:80}})],1)},p=[],h=e("086f"),f=e("e684"),d=e("270a"),b=e("211c"),v=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},_=[function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"foot"},[r("div",{staticClass:"social-links"},[r("div",[r("a",{attrs:{href:"mailto:summer.hung222@gmail.com",target:"_blank"}},[r("img",{attrs:{src:e("4c0b")}}),r("span",[t._v("summer.hung222@gmail.com")])])]),r("div",[r("a",{attrs:{href:"https://lin.ee/0EC31Ps",target:"_blank"}},[r("img",{attrs:{src:e("b206")}}),r("span",[t._v("@277yofqa or ID: like3028")])])])]),r("div",{staticClass:"copyright"},[t._v("Copyright© Summer Studio, 2022.01")])])}],w={name:"foot"},x=w,k=(e("fc51"),Object(o["a"])(x,v,_,!1,null,"50230842",null)),E=k.exports,C={name:"welcome",components:{home:h["default"],about:f["default"],skillTree:d["default"],works:b["default"],foot:E},data:function(){return{classes:"bounce",delay:1e3,duration:1e3,iteration:5}}},P=C,A=(e("ce37"),Object(o["a"])(P,g,p,!1,null,"4f91d0a2",null)),y=A.exports;r["default"].use(m["a"]);var I=new m["a"]({routes:[{path:"/",name:"welcome",component:y},{path:"/home",name:"home",component:function(){return Promise.resolve().then(e.bind(null,"086f"))}},{path:"/about",name:"about",component:function(){return Promise.resolve().then(e.bind(null,"e684"))}},{path:"/skill-tree",name:"skill-tree",component:function(){return Promise.resolve().then(e.bind(null,"270a"))}},{path:"/works",name:"works",component:function(){return Promise.resolve().then(e.bind(null,"211c"))}}]}),G=e("2f62");r["default"].use(G["a"]);var M=new G["a"].Store({state:{count:1,todos:[{id:1,text:"...",done:!0},{id:2,text:"...",done:!1}]},getters:{doneTodos:function(t){return t.todos.filter((function(t){return t.done}))}},mutations:{increment:function(t,n){t.count+=n.amount}}}),O=e("5c96"),j=e.n(O);e("c69f");r["default"].use(j.a);var L=e("00e4");r["default"].config.productionTip=!1,r["default"].use(L["a"]),new r["default"]({router:I,store:M,render:function(t){return t(u)}}).$mount("#app")},"5c0b":function(t,n,e){"use strict";var r=e("e332"),i=e.n(r);i.a},"5f38":function(t,n,e){"use strict";e.d(n,"o",(function(){return r})),e.d(n,"p",(function(){return i})),e.d(n,"b",(function(){return s})),e.d(n,"d",(function(){return a})),e.d(n,"j",(function(){return c})),e.d(n,"l",(function(){return o})),e.d(n,"m",(function(){return l})),e.d(n,"q",(function(){return u})),e.d(n,"a",(function(){return m})),e.d(n,"c",(function(){return g})),e.d(n,"f",(function(){return p})),e.d(n,"h",(function(){return h})),e.d(n,"e",(function(){return f})),e.d(n,"i",(function(){return d})),e.d(n,"g",(function(){return b})),e.d(n,"n",(function(){return v})),e.d(n,"k",(function(){return _}));var r=[{label:"MotherK",class:"motherk",url:"https://i.imgur.com/sYdLfmU.png",href:"https://www.motherk.com.tw/"},{label:"劉麵包",class:"liu-bread",url:"https://i.imgur.com/yCesJFq.png",href:"http://www.nutricom.com.tw/index.html"},{label:"東方平台",class:"gpo",url:"https://i.imgur.com/68nTGuK.png",href:"https://hong-liyen.github.io/GPO_v5/"},{label:"中博彩票",class:"cb",url:"https://i.imgur.com/xbUWcLH.png",href:"https://hong-liyen.github.io/CB_website/"}],i=[{label:"Mega-Page展",class:"mega",url:"https://i.imgur.com/sXlN5Q4.png",href:"https://hong-liyen.github.io/page/"},{label:"OT後台系統",class:"ot",url:"https://i.imgur.com/zBXDECG.png",href:"https://hong-liyen.github.io/OTPlatform/"},{label:"刷卡換現金",class:"cash",url:"https://i.imgur.com/6EdvSCe.png",href:"http://0988368092.tw/"},{label:"刷卡換現金",class:"cash2",url:"https://i.imgur.com/WaB4EI3.png",href:"http://0915290156.tw/"}],s=[{label:"EDM",class:"edm",url:"edm",href:"no-website"},{label:"APP設計",class:"APP-Design",href:"no-website"},{label:"前台-王者娛樂",class:"king",href:"no-website"},{label:"APP-啟動圖",class:"Launch",href:"no-website"}],a=[{label:"logo啟動圖設計",class:"design",href:"no-website"},{label:"網頁設計",class:"website",href:"no-website"},{label:"Banner設計",class:"banner",href:"no-wesite"},{label:"插畫設計",class:"draw",href:"no-wesite"}],c=[{label:"newtalk-前台",href:"https://nphu1y.axshare.com",url:"https://i.imgur.com/lAftXmQ.png"},{label:"QPP",href:"https://a3lnkz.axshare.com",url:"https://i.imgur.com/xkKBkQ5.png"},{label:"GM",href:"https://iptiml.axshare.com",url:"https://i.imgur.com/8i6iLw9.png"},{label:"Wlive",href:"https://4pis07.axshare.com",url:"https://i.imgur.com/roaok53.png"}],o=[{label:"FB橙真水晶",href:"https://www.facebook.com/chengjhencrystal",url:"https://i.imgur.com/b84AmJl.png"},{label:"IG橙真水晶",href:"https://www.instagram.com/chengjhen/",url:"https://i.imgur.com/na9Q6MD.png"},{label:"FB-Amanda生活隨筆",href:"https://www.facebook.com/Amanda%E7%94%9F%E6%B4%BB%E9%9A%A8%E7%AD%86-102146218528993",url:"https://i.imgur.com/4zEAyZj.png"},{label:"IG-Amanda生活隨筆",href:"https://www.instagram.com/amandahong328/",url:"https://i.imgur.com/III4a0m.png"}],l=[{label:"蝦皮-橙真水晶",href:"https://shopee.tw/amanda328",url:"https://i.imgur.com/HbbFr0w.png"}],u=[{label:"YT-橙真水晶",href:"https://www.youtube.com/channel/UCe1I3LGe7SzQgEpg1yDzHMQ/featured",url:"https://i.imgur.com/Qs2aa6P.png"},{label:"YT-Amanda隨筆生活",href:"https://www.youtube.com/channel/UCe1I3LGe7SzQgEpg1yDzHMQ/featured",url:"https://i.imgur.com/iOW5ulc.png"}],m=["https://i.imgur.com/Jx930nt.png","https://i.imgur.com/WmoVHFF.png"],g=["https://i.imgur.com/yRl3ogF.png","https://i.imgur.com/ls5xNdM.png","https://i.imgur.com/lbV4HkN.png"],p=["https://i.imgur.com/ogje3rK.png","https://i.imgur.com/CCWVqYN.png","https://i.imgur.com/esUCD9O.png","https://i.imgur.com/KoKv7PA.png","https://i.imgur.com/5HFRH8m.png","https://i.imgur.com/HlW1ZaD.png","https://i.imgur.com/bG4llmA.png"],h=["https://i.imgur.com/bX1FgM1.png","https://i.imgur.com/69IXN1m.png","https://i.imgur.com/QvQtnW6.png","https://i.imgur.com/fW1mUrM.png","https://i.imgur.com/ApjKO07.png","https://i.imgur.com/3CGYFxP.png","https://i.imgur.com/MYvaAyX.png","https://i.imgur.com/abDU5Gs.png","https://i.imgur.com/XZdXsR9.png","https://i.imgur.com/H9gaVys.png","https://i.imgur.com/UJPNXug.png","https://i.imgur.com/pexNKFX.png","https://i.imgur.com/lJ4ubhv.png","https://i.imgur.com/RsIP9bI.png","https://i.imgur.com/xmnqdcb.png","https://i.imgur.com/zsOXczs.png","https://i.imgur.com/6fvAhZj.jpg","https://i.imgur.com/CNTkDC2.jpg","https://i.imgur.com/9ytjFJF.png","https://i.imgur.com/dOqAP4t.png","https://i.imgur.com/qRD8s1T.png","https://i.imgur.com/cXoBX6m.jpg","https://i.imgur.com/GJKAvXE.png"],f=["https://i.imgur.com/xsd3qTQ.png","https://i.imgur.com/Ji24Jif.png","https://i.imgur.com/uDfEdit.png","https://i.imgur.com/ihuRBUE.png","https://i.imgur.com/5wWn5cL.jpg","https://i.imgur.com/isHzdeV.jpg","https://i.imgur.com/CgC25W2.jpg"],d=["https://i.imgur.com/dezb0PL.png","https://i.imgur.com/soo1TlE.png","https://i.imgur.com/Yzj4M4w.png","https://i.imgur.com/pF3ApgE.png","https://i.imgur.com/SEiFroR.png","https://i.imgur.com/hQWa22k.png","https://i.imgur.com/qzWUKc7.png","https://i.imgur.com/yTHhO0C.png","https://i.imgur.com/ue7p3Lp.png","https://i.imgur.com/kiN94dZ.png","https://i.imgur.com/HTsOQ3D.png"],b=["https://i.imgur.com/Mdt36k3.png","https://i.imgur.com/ZujxB5W.png","https://i.imgur.com/RtLMi0c.png","https://i.imgur.com/X5Ml3HB.png"],v=["https://i.imgur.com/g8riQdy.png","https://i.imgur.com/Hg0nz1i.png","https://i.imgur.com/Ppb4c1r.png","https://i.imgur.com/Ar060TI.png","https://i.imgur.com/ygyiVQg.png"],_=["https://i.imgur.com/cw5QwZ2.png","https://i.imgur.com/NfGgMxK.png","https://i.imgur.com/jh18iZf.png","https://i.imgur.com/3EUcPsb.png"]},"793d":function(t,n,e){"use strict";var r=e("80df"),i=e.n(r);i.a},"80df":function(t,n,e){},9310:function(t,n,e){"use strict";var r=e("09ad"),i=e.n(r);i.a},af54:function(t,n,e){"use strict";var r=e("e86b"),i=e.n(r);i.a},b206:function(t,n,e){t.exports=e.p+"img/line-messenger.62e83cd7.svg"},c0b5:function(t,n,e){},c69f:function(t,n,e){},cacc:function(t,n,e){},ce37:function(t,n,e){"use strict";var r=e("db65"),i=e.n(r);i.a},d54e:function(t,n,e){"use strict";var r=e("cacc"),i=e.n(r);i.a},db65:function(t,n,e){},e331:function(t,n,e){},e332:function(t,n,e){},e684:function(t,n,e){"use strict";e.r(n);var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"about"},[e("el-carousel",{attrs:{interval:3e3,arrow:"always",height:"65vh"}},t._l(t.bannerImg,(function(t,n){return e("el-carousel-item",{key:t},[e("img",{attrs:{src:t}})])})),1)],1)},i=[],s=e("5f38"),a={name:"about",data:function(){return{bannerImg:s["k"]}}},c=a,o=(e("9310"),e("2877")),l=Object(o["a"])(c,r,i,!1,null,"477b9a1a",null);n["default"]=l.exports},e86b:function(t,n,e){},fc51:function(t,n,e){"use strict";var r=e("c0b5"),i=e.n(r);i.a}});
//# sourceMappingURL=app.a60c1722.js.map