(function(t){function i(i){for(var e,c,o=i[0],a=i[1],l=i[2],m=0,g=[];m<o.length;m++)c=o[m],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&g.push(n[c][0]),n[c]=0;for(e in a)Object.prototype.hasOwnProperty.call(a,e)&&(t[e]=a[e]);u&&u(i);while(g.length)g.shift()();return s.push.apply(s,l||[]),r()}function r(){for(var t,i=0;i<s.length;i++){for(var r=s[i],e=!0,o=1;o<r.length;o++){var a=r[o];0!==n[a]&&(e=!1)}e&&(s.splice(i--,1),t=c(c.s=r[0]))}return t}var e={},n={app:0},s=[];function c(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=t,c.c=e,c.d=function(t,i,r){c.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:r})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,i){if(1&i&&(t=c(t)),8&i)return t;if(4&i&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var e in t)c.d(r,e,function(i){return t[i]}.bind(null,e));return r},c.n=function(t){var i=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(i,"a",i),i},c.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},c.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],a=o.push.bind(o);o.push=i,o=o.slice();for(var l=0;l<o.length;l++)i(o[l]);var u=a;s.push([0,"chunk-vendors"]),r()})({0:function(t,i,r){t.exports=r("56d7")},"086f":function(t,i,r){"use strict";r.r(i);var e=function(){var t=this,i=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,i=t.$createElement,r=t._self._c||i;return r("div",{staticClass:"works"},[r("div",{staticClass:"bread__title"},[t._v("晴天設計")])])}],s={name:"home",data:function(){return{}}},c=s,o=(r("793d"),r("2877")),a=Object(o["a"])(c,e,n,!1,null,"2b37d574",null);i["default"]=a.exports},"09ad":function(t,i,r){},"211c":function(t,i,r){"use strict";r.r(i);var e=function(){var t=this,i=t.$createElement,r=t._self._c||i;return r("div",{staticClass:"works"},[r("el-tabs",{model:{value:t.activeName,callback:function(i){t.activeName=i},expression:"activeName"}},[r("el-tab-pane",{attrs:{label:"全部",name:"all"}},[r("div",{staticClass:"tab"},t._l(t.DESIGN,(function(i){return r("div",[["design"===i.class?r("list-lightbox",{attrs:{srcs:t.LOGO_IMG}}):t._e(),"website"===i.class?r("list-lightbox",{attrs:{srcs:t.WEBSITE_IMG}}):t._e(),"poster"===i.class?r("list-lightbox",{attrs:{srcs:t.POSTER_IMG}}):t._e(),"draw"===i.class?r("list-lightbox",{attrs:{srcs:t.DRAW_IMG}}):t._e()]],2)})),0),r("div",{staticClass:"tab"},t._l(t.BACKSTAGE,(function(i){return r("div",["APP-Design"===i.class?[r("list-lightbox",{attrs:{srcs:t.APPDESIGN_IMG}})]:"banner"===i.class?[r("list-lightbox",{attrs:{srcs:t.BANNER_IMG}})]:"edm"===i.class?[r("list-lightbox",{attrs:{srcs:t.edm}})]:[r("list-lightbox",{attrs:{srcs:t.card}})]],2)})),0),r("div",{staticClass:"tab"},t._l(t.frontEnd,(function(t){return r("div",[r("a",{attrs:{href:t.href,target:"_blank"}},[r("img",{attrs:{src:t.url}})])])})),0),r("div",{staticClass:"tab"},t._l(t.frontEnd2,(function(t){return r("div",[r("a",{attrs:{href:t.href,target:"_blank"}},[r("img",{attrs:{src:t.url}})])])})),0),r("div",{staticClass:"tab"},t._l(t.WEB_PM,(function(t){return r("div",["no"===t.class?[r("img",{attrs:{src:t.url}})]:[r("a",{attrs:{href:t.href,target:"_blank"}},[r("img",{attrs:{src:t.url}})])]],2)})),0)]),r("el-tab-pane",{attrs:{label:"平面/網頁設計",name:"design"}},[r("div",{staticClass:"tab"},t._l(t.DESIGN,(function(i){return r("div",[["design"===i.class?r("list-lightbox",{attrs:{srcs:t.LOGO_IMG}}):t._e(),"website"===i.class?r("list-lightbox",{attrs:{srcs:t.WEBSITE_IMG}}):t._e(),"poster"===i.class?r("list-lightbox",{attrs:{srcs:t.POSTER_IMG}}):t._e(),"draw"===i.class?r("list-lightbox",{attrs:{srcs:t.DRAW_IMG}}):t._e()]],2)})),0),r("div",{staticClass:"tab"},t._l(t.BACKSTAGE,(function(i){return r("div",["APP-Design"===i.class?[r("list-lightbox",{attrs:{srcs:t.APPDESIGN_IMG}})]:"banner"===i.class?[r("list-lightbox",{attrs:{srcs:t.BANNER_IMG}})]:"edm"===i.class?[r("list-lightbox",{attrs:{srcs:t.edm}})]:[r("list-lightbox",{attrs:{srcs:t.card}})]],2)})),0)]),r("el-tab-pane",{attrs:{label:"一頁式RWD網頁",name:"onepage"}},[r("div",{staticClass:"tab"},t._l(t.onepage,(function(t){return r("div",[r("a",{attrs:{href:t.href,target:"_blank"}},[r("img",{attrs:{src:t.url}})])])})),0)]),r("el-tab-pane",{attrs:{label:"客製化RWD網頁",name:"website"}},[r("div",{staticClass:"tab"},t._l(t.frontEnd,(function(t){return r("div",[r("a",{attrs:{href:t.href,target:"_blank"}},[r("img",{attrs:{src:t.url}})])])})),0),r("div",{staticClass:"tab"},t._l(t.frontEnd2,(function(t){return r("div",[r("a",{attrs:{href:t.href,target:"_blank"}},[r("img",{attrs:{src:t.url}})])])})),0)]),r("el-tab-pane",{attrs:{label:"網站/APP企劃",name:"plan"}},[r("div",{staticClass:"tab"},t._l(t.WEB_PM,(function(t){return r("div",["no"===t.class?[r("img",{attrs:{src:t.url}})]:[r("a",{attrs:{href:t.href,target:"_blank"}},[r("img",{attrs:{src:t.url}})])]],2)})),0)]),r("el-tab-pane",{attrs:{label:"電子商務",name:"community"}},[r("div",{staticClass:"tab"},t._l(t.community,(function(t){return r("div",["no"===t.class?[r("img",{attrs:{src:t.url}})]:[r("a",{attrs:{href:t.href,target:"_blank"}},[r("img",{attrs:{src:t.url}})])]],2)})),0)])],1)],1)},n=[],s=r("5f38"),c=function(){var t=this,i=t.$createElement,r=t._self._c||i;return t.lightboxList.length>0?r("div",{staticClass:"list-lightbox",on:{click:t.callLightbox}},[r("img",{attrs:{src:t.lightboxList[0]}}),t._l(t.lightboxList,(function(i,e){return t.isActive?[""!==i?r("div",{key:e,staticClass:"lightbox",class:{active:t.isActive&&e===t.currentIndex},on:{click:function(i){return i.stopPropagation(),t.closeLightbox(i)}}},[t.lightboxList.length>1?[r("div",{staticClass:"prev",on:{click:function(i){return i.stopPropagation(),t.handleClickArrow(-1)}}}),r("div",{staticClass:"next",on:{click:function(i){return i.stopPropagation(),t.handleClickArrow(1)}}})]:t._e(),r("div",{staticClass:"close"}),r("div",{staticClass:"image-box"},[r("img",{staticClass:"lightbox-img",attrs:{src:i},on:{click:function(i){return i.stopPropagation(),t.openLightbox(i)}}})])],2):t._e()]:t._e()}))],2):t._e()},o=[],a=(r("6762"),r("2fdb"),{name:"list-lightbox",props:{srcs:Array},data:function(){return{isActive:!1,currentIndex:0}},computed:{lightboxList:function(){return this.srcs.filter((function(t){return!["",null,void 0].includes(t)}))}},created:function(){},methods:{handleClickArrow:function(t){this.currentIndex=(this.currentIndex+t+this.lightboxList.length)%this.lightboxList.length},callLightbox:function(){this.isActive=!0,this.currentIndex=0},closeLightbox:function(){this.isActive=!1},openLightbox:function(){this.isActive=!0}}}),l=a,u=(r("3a21"),r("2877")),m=Object(u["a"])(l,c,o,!1,null,"2c389c9e",null),g=m.exports,p={name:"works",components:{listLightbox:g},data:function(){return{activeName:"all",onepage:s["q"],frontEnd:s["o"],frontEnd2:s["p"],BACKSTAGE:s["b"],DESIGN:s["d"],WEB_PM:s["i"],APPDESIGN_IMG:s["a"],LOGO_IMG:s["f"],POSTER_IMG:s["g"],DRAW_IMG:s["e"],WEBSITE_IMG:s["h"],BANNER_IMG:s["c"],card:s["k"],edm:s["n"],community:s["l"],ecommerce:s["ecommerce"],videoClip:s["videoClip"]}}},h=p,f=(r("b587"),Object(u["a"])(h,e,n,!1,null,"8f095e46",null));i["default"]=f.exports},"270a":function(t,i,r){"use strict";r.r(i);var e=function(){var t=this,i=t.$createElement,r=t._self._c||i;return r("div")},n=[],s={name:"skill-tree"},c=s,o=(r("d54e"),r("2877")),a=Object(o["a"])(c,e,n,!1,null,"2f0aca45",null);i["default"]=a.exports},"31cb":function(t,i,r){},"3a21":function(t,i,r){"use strict";var e=r("31cb"),n=r.n(e);n.a},"4c0b":function(t,i,r){t.exports=r.p+"img/gmail-icon.e67c6af8.svg"},"55b4":function(t,i,r){},"56d7":function(t,i,r){"use strict";r.r(i);r("cadf"),r("551c"),r("f751"),r("097d");var e=r("2b0e"),n=function(){var t=this,i=t.$createElement,r=t._self._c||i;return r("div",{attrs:{id:"app"}},[r("div",[r("router-view")],1)])},s=[],c={name:"index",components:{},data:function(){return{}},methods:{}},o=c,a=(r("5c0b"),r("2877")),l=Object(a["a"])(o,n,s,!1,null,null,null),u=l.exports,m=r("8c4f"),g=function(){var t=this,i=t.$createElement,r=t._self._c||i;return r("div",{staticClass:"welcome"},[r("about"),r("works"),r("foot"),r("el-backtop",{attrs:{bottom:80}})],1)},p=[],h=r("086f"),f=r("e684"),b=r("270a"),d=r("211c"),v=function(){var t=this,i=t.$createElement;t._self._c;return t._m(0)},_=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"foot"},[e("div",{staticClass:"social-links"},[e("div",[e("a",{attrs:{href:"mailto:summer.hung222@gmail.com",target:"_blank"}},[e("img",{attrs:{src:r("4c0b")}}),e("span",[t._v("summer.hung222@gmail.com")])])]),e("div",[e("a",{attrs:{href:"https://lin.ee/0EC31Ps",target:"_blank"}},[e("img",{attrs:{src:r("b206")}}),e("span",[t._v("@277yofqa or ID: like3028")])])])]),e("div",{staticClass:"copyright"},[t._v("Copyright© Summer Studio, 2022.01")])])}],x={name:"foot"},w=x,j=(r("fc51"),Object(a["a"])(w,v,_,!1,null,"50230842",null)),k=j.exports,y={name:"welcome",components:{home:h["default"],about:f["default"],skillTree:b["default"],works:d["default"],foot:k},data:function(){return{classes:"bounce",delay:1e3,duration:1e3,iteration:5}}},P=y,E=(r("ce37"),Object(a["a"])(P,g,p,!1,null,"4f91d0a2",null)),C=E.exports;e["default"].use(m["a"]);var A=new m["a"]({routes:[{path:"/",name:"welcome",component:C},{path:"/home",name:"home",component:function(){return Promise.resolve().then(r.bind(null,"086f"))}},{path:"/about",name:"about",component:function(){return Promise.resolve().then(r.bind(null,"e684"))}},{path:"/skill-tree",name:"skill-tree",component:function(){return Promise.resolve().then(r.bind(null,"270a"))}},{path:"/works",name:"works",component:function(){return Promise.resolve().then(r.bind(null,"211c"))}}]}),O=r("2f62");e["default"].use(O["a"]);var G=new O["a"].Store({state:{count:1,todos:[{id:1,text:"...",done:!0},{id:2,text:"...",done:!1}]},getters:{doneTodos:function(t){return t.todos.filter((function(t){return t.done}))}},mutations:{increment:function(t,i){t.count+=i.amount}}}),I=r("5c96"),M=r.n(I);r("c69f");e["default"].use(M.a);var L=r("00e4");e["default"].config.productionTip=!1,e["default"].use(L["a"]),new e["default"]({router:A,store:G,render:function(t){return t(u)}}).$mount("#app")},"5c0b":function(t,i,r){"use strict";var e=r("e332"),n=r.n(e);n.a},"5f38":function(t,i,r){"use strict";r.d(i,"q",(function(){return e})),r.d(i,"o",(function(){return n})),r.d(i,"p",(function(){return s})),r.d(i,"b",(function(){return c})),r.d(i,"d",(function(){return o})),r.d(i,"i",(function(){return a})),r.d(i,"l",(function(){return l})),r.d(i,"a",(function(){return u})),r.d(i,"c",(function(){return m})),r.d(i,"f",(function(){return g})),r.d(i,"g",(function(){return p})),r.d(i,"e",(function(){return h})),r.d(i,"h",(function(){return f})),r.d(i,"k",(function(){return b})),r.d(i,"n",(function(){return d})),r.d(i,"j",(function(){return v}));var e=[{label:"甜心交友網",class:"sweet",url:"https://i.imgur.com/j9wFb55.png",href:"https://hong-liyen.github.io/sweet/"},{label:"韓國代購",class:"korea",url:"https://i.imgur.com/laAgfXR.png",href:"https://hong-liyen.github.io/korea/"},{label:"泰國CQ9",class:"thai-cq9",url:"https://i.imgur.com/cpi4zWl.png",href:"https://hong-liyen.github.io/thai/"},{label:"pinshan品善",class:"pinshan",url:"https://i.imgur.com/rj9mBvc.png",href:"https://hong-liyen.github.io/pinshan/"}],n=[{label:"MotherK",class:"motherk",url:"https://i.imgur.com/sYdLfmU.png",href:"https://www.motherk.com.tw/"},{label:"劉麵包",class:"liu-bread",url:"https://i.imgur.com/yCesJFq.png",href:"http://www.nutricom.com.tw/index.html"},{label:"東方平台",class:"gpo",url:"https://i.imgur.com/68nTGuK.png",href:"https://hong-liyen.github.io/GPO_v5/"},{label:"中博彩票",class:"cb",url:"https://i.imgur.com/xbUWcLH.png",href:"https://hong-liyen.github.io/CB_website/"}],s=[{label:"Mega-Page展",class:"mega",url:"https://i.imgur.com/sXlN5Q4.png",href:"https://hong-liyen.github.io/page/"},{label:"OT後台系統",class:"ot",url:"https://i.imgur.com/zBXDECG.png",href:"https://hong-liyen.github.io/OTPlatform/"},{label:"CQ9",class:"cq9",url:"https://i.imgur.com/THNRgpu.png",href:"https://hong-liyen.github.io/GPO_v5/CQ9/index.html"},{label:"幸運飛艇",class:"ship",url:"https://i.imgur.com/Ne1SptY.png",href:"https://hong-liyen.github.io/GPO_v5/luckyairship/index.html"}],c=[{label:"EDM",class:"edm",url:"edm",href:"no-website"},{label:"APP設計",class:"APP-Design",href:"no-website"},{label:"Banner設計",class:"banner",href:"no-website"},{label:"APP-啟動圖",class:"Launch",href:"no-website"}],o=[{label:"logo啟動圖設計",class:"design",href:"no-website"},{label:"網頁設計",class:"website",href:"no-website"},{label:"海報設計",class:"poster",href:"no-wesite"},{label:"插畫設計",class:"draw",href:"no-wesite"}],a=[{label:"newtalk-前台",href:"https://nphu1y.axshare.com",url:"https://i.imgur.com/lAftXmQ.png"},{label:"QPP",href:"https://a3lnkz.axshare.com",url:"https://i.imgur.com/xkKBkQ5.png"},{label:"GM",href:"https://iptiml.axshare.com",url:"https://i.imgur.com/8i6iLw9.png"},{label:"Wlive",href:"https://4pis07.axshare.com",url:"https://i.imgur.com/roaok53.png"}],l=[{label:"FB橙真水晶",href:"https://www.facebook.com/chengjhencrystal",url:"https://i.imgur.com/q758HfY.png"},{label:"IG橙真水晶",href:"https://www.instagram.com/chengjhen/",url:"https://i.imgur.com/ijb650j.png"},{label:"YT橙真水晶",href:"https://www.youtube.com/channel/UCe1I3LGe7SzQgEpg1yDzHMQ/featured",url:"https://i.imgur.com/KBykmju.png"},{label:"蝦皮橙真水晶",href:"https://shopee.tw/amanda328",url:"https://i.imgur.com/mjUymwI.png"}],u=["https://i.imgur.com/Jx930nt.png","https://i.imgur.com/B5AN5ug.jpg","https://i.imgur.com/4nOxSDX.jpg","https://i.imgur.com/YkBXDS5.jpg","https://i.imgur.com/cAAtS1k.jpg","https://i.imgur.com/kLWZA8S.jpg","https://i.imgur.com/Cd0bDTi.jpg","https://i.imgur.com/EOz1KxF.jpg","https://i.imgur.com/w0sb0vU.jpg","https://i.imgur.com/EVK4DBv.jpg","https://i.imgur.com/sCmBLzq.jpg","https://i.imgur.com/mDclB2H.jpg","https://i.imgur.com/0imdh9g.jpg","https://i.imgur.com/73rgkOq.jpg","https://i.imgur.com/m9MbRb4.jpg","https://i.imgur.com/9E6PyyT.jpg"],m=["https://i.imgur.com/yRl3ogF.png","https://i.imgur.com/ZRNONa7.png","https://i.imgur.com/c3Rygiv.png","https://i.imgur.com/WvUdH4O.png"],g=["https://i.imgur.com/ogje3rK.png","https://i.imgur.com/CCWVqYN.png","https://i.imgur.com/esUCD9O.png","https://i.imgur.com/vlJUr7Z.png","https://i.imgur.com/hGJk5sB.png","https://i.imgur.com/ZJhsHVe.png","https://i.imgur.com/0dxH9XJ.png","https://i.imgur.com/Oy7JOyH.png","https://i.imgur.com/o816A2i.png"],p=["https://i.imgur.com/bX1FgM1.png","https://i.imgur.com/8a4EgRX.jpg","https://i.imgur.com/LFPj8dZ.jpg","https://i.imgur.com/mw4nOj7.jpg","https://i.imgur.com/ApjKO07.png","https://i.imgur.com/3CGYFxP.png","https://i.imgur.com/MYvaAyX.png","https://i.imgur.com/abDU5Gs.png","https://i.imgur.com/XZdXsR9.png","https://i.imgur.com/H9gaVys.png","https://i.imgur.com/UJPNXug.png","https://i.imgur.com/pexNKFX.png","https://i.imgur.com/lJ4ubhv.png","https://i.imgur.com/RsIP9bI.png","https://i.imgur.com/xmnqdcb.png","https://i.imgur.com/zsOXczs.png","https://i.imgur.com/6fvAhZj.jpg","https://i.imgur.com/CNTkDC2.jpg","https://i.imgur.com/9ytjFJF.png","https://i.imgur.com/dOqAP4t.png","https://i.imgur.com/qRD8s1T.png","https://i.imgur.com/cXoBX6m.jpg","https://i.imgur.com/GJKAvXE.png"],h=["https://i.imgur.com/xsd3qTQ.png","https://i.imgur.com/Ji24Jif.png","https://i.imgur.com/uDfEdit.png","https://i.imgur.com/ihuRBUE.png","https://i.imgur.com/5wWn5cL.jpg","https://i.imgur.com/isHzdeV.jpg","https://i.imgur.com/CgC25W2.jpg"],f=["https://i.imgur.com/dezb0PL.png","https://i.imgur.com/W6b2diD.png","https://i.imgur.com/BFacmL9.png","https://i.imgur.com/mTLhUFZ.png","https://i.imgur.com/RGrEcML.png","https://i.imgur.com/6shVJhT.jpg","https://i.imgur.com/KKucDWS.jpg","https://i.imgur.com/nqbS9pr.jpg","https://i.imgur.com/eGUMrlf.jpg","https://i.imgur.com/UMmYXFn.jpg","https://i.imgur.com/z3B6LJO.jpg","https://i.imgur.com/P6QN3IM.jpg","https://i.imgur.com/hSDfm1p.jpg","https://i.imgur.com/MTIhfXO.jpg","https://i.imgur.com/EiLZXFx.jpg","https://i.imgur.com/2upwmqE.jpg"],b=["https://i.imgur.com/6AsWAKt.png","https://i.imgur.com/5Nm6vbb.png","https://i.imgur.com/gLm2n1T.png","https://i.imgur.com/gflgA32.png","https://i.imgur.com/XjwAy2H.png","https://i.imgur.com/FeWBhwf.png","https://i.imgur.com/Yb4awfG.png"],d=["https://i.imgur.com/g8riQdy.png","https://i.imgur.com/cm37YoD.png","https://i.imgur.com/EdMuxql.png","https://i.imgur.com/t0i1uDF.png","https://i.imgur.com/NmIaWG7.jpg","https://i.imgur.com/Ar060TI.png","https://i.imgur.com/P1rLeLg.png"],v=["https://i.imgur.com/VDL7dWl.png","https://i.imgur.com/OHMfeHv.png","https://i.imgur.com/qeiPNMX.png","https://i.imgur.com/vW9VcMX.png"]},"793d":function(t,i,r){"use strict";var e=r("80df"),n=r.n(e);n.a},"80df":function(t,i,r){},9310:function(t,i,r){"use strict";var e=r("09ad"),n=r.n(e);n.a},b206:function(t,i,r){t.exports=r.p+"img/line-messenger.62e83cd7.svg"},b587:function(t,i,r){"use strict";var e=r("55b4"),n=r.n(e);n.a},c0b5:function(t,i,r){},c69f:function(t,i,r){},cacc:function(t,i,r){},ce37:function(t,i,r){"use strict";var e=r("db65"),n=r.n(e);n.a},d54e:function(t,i,r){"use strict";var e=r("cacc"),n=r.n(e);n.a},db65:function(t,i,r){},e332:function(t,i,r){},e684:function(t,i,r){"use strict";r.r(i);var e=function(){var t=this,i=t.$createElement,r=t._self._c||i;return r("div",{staticClass:"about"},[r("el-carousel",{attrs:{interval:3e3,arrow:"always",height:"65vh"}},t._l(t.bannerImg,(function(t,i){return r("el-carousel-item",{key:t},[r("img",{attrs:{src:t}})])})),1)],1)},n=[],s=r("5f38"),c={name:"about",data:function(){return{bannerImg:s["j"]}}},o=c,a=(r("9310"),r("2877")),l=Object(a["a"])(o,e,n,!1,null,"477b9a1a",null);i["default"]=l.exports},fc51:function(t,i,r){"use strict";var e=r("c0b5"),n=r.n(e);n.a}});
//# sourceMappingURL=app.1c5d74e5.js.map