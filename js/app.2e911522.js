(function(t){function i(i){for(var r,c,a=i[0],o=i[1],l=i[2],m=0,g=[];m<a.length;m++)c=a[m],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&g.push(n[c][0]),n[c]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);u&&u(i);while(g.length)g.shift()();return s.push.apply(s,l||[]),e()}function e(){for(var t,i=0;i<s.length;i++){for(var e=s[i],r=!0,a=1;a<e.length;a++){var o=e[a];0!==n[o]&&(r=!1)}r&&(s.splice(i--,1),t=c(c.s=e[0]))}return t}var r={},n={app:0},s=[];function c(i){if(r[i])return r[i].exports;var e=r[i]={i:i,l:!1,exports:{}};return t[i].call(e.exports,e,e.exports,c),e.l=!0,e.exports}c.m=t,c.c=r,c.d=function(t,i,e){c.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:e})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,i){if(1&i&&(t=c(t)),8&i)return t;if(4&i&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(c.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var r in t)c.d(e,r,function(i){return t[i]}.bind(null,r));return e},c.n=function(t){var i=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(i,"a",i),i},c.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},c.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],o=a.push.bind(a);a.push=i,a=a.slice();for(var l=0;l<a.length;l++)i(a[l]);var u=o;s.push([0,"chunk-vendors"]),e()})({0:function(t,i,e){t.exports=e("56d7")},"086f":function(t,i,e){"use strict";e.r(i);var r=function(){var t=this,i=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"works"},[e("div",{staticClass:"bread__title"},[t._v("晴天設計")])])}],s={name:"home",data:function(){return{}}},c=s,a=(e("793d"),e("2877")),o=Object(a["a"])(c,r,n,!1,null,"2b37d574",null);i["default"]=o.exports},"09ad":function(t,i,e){},"211c":function(t,i,e){"use strict";e.r(i);var r=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"works"},[e("el-tabs",{model:{value:t.activeName,callback:function(i){t.activeName=i},expression:"activeName"}},[e("el-tab-pane",{attrs:{label:"全部",name:"all"}},[e("div",{staticClass:"tab"},t._l(t.DESIGN,(function(i){return e("div",[["design"===i.class?e("list-lightbox",{attrs:{srcs:t.LOGO_IMG}}):t._e(),"website"===i.class?e("list-lightbox",{attrs:{srcs:t.WEBSITE_IMG}}):t._e(),"poster"===i.class?e("list-lightbox",{attrs:{srcs:t.POSTER_IMG}}):t._e(),"draw"===i.class?e("list-lightbox",{attrs:{srcs:t.DRAW_IMG}}):t._e()]],2)})),0),e("div",{staticClass:"tab"},t._l(t.BACKSTAGE,(function(i){return e("div",["APP-Design"===i.class?[e("list-lightbox",{attrs:{srcs:t.APPDESIGN_IMG}})]:"banner"===i.class?[e("list-lightbox",{attrs:{srcs:t.BANNER_IMG}})]:"edm"===i.class?[e("list-lightbox",{attrs:{srcs:t.edm}})]:[e("list-lightbox",{attrs:{srcs:t.card}})]],2)})),0),e("div",{staticClass:"tab"},t._l(t.frontEnd,(function(t){return e("div",[e("a",{attrs:{href:t.href,target:"_blank"}},[e("img",{attrs:{src:t.url}})])])})),0),e("div",{staticClass:"tab"},t._l(t.frontEnd2,(function(t){return e("div",[e("a",{attrs:{href:t.href,target:"_blank"}},[e("img",{attrs:{src:t.url}})])])})),0),e("div",{staticClass:"tab"},t._l(t.WEB_PM,(function(t){return e("div",["no"===t.class?[e("img",{attrs:{src:t.url}})]:[e("a",{attrs:{href:t.href,target:"_blank"}},[e("img",{attrs:{src:t.url}})])]],2)})),0)]),e("el-tab-pane",{attrs:{label:"平面/網頁設計",name:"design"}},[e("div",{staticClass:"tab"},t._l(t.DESIGN,(function(i){return e("div",[["design"===i.class?e("list-lightbox",{attrs:{srcs:t.LOGO_IMG}}):t._e(),"website"===i.class?e("list-lightbox",{attrs:{srcs:t.WEBSITE_IMG}}):t._e(),"poster"===i.class?e("list-lightbox",{attrs:{srcs:t.POSTER_IMG}}):t._e(),"draw"===i.class?e("list-lightbox",{attrs:{srcs:t.DRAW_IMG}}):t._e()]],2)})),0),e("div",{staticClass:"tab"},t._l(t.BACKSTAGE,(function(i){return e("div",["APP-Design"===i.class?[e("list-lightbox",{attrs:{srcs:t.APPDESIGN_IMG}})]:"banner"===i.class?[e("list-lightbox",{attrs:{srcs:t.BANNER_IMG}})]:"edm"===i.class?[e("list-lightbox",{attrs:{srcs:t.edm}})]:[e("list-lightbox",{attrs:{srcs:t.card}})]],2)})),0)]),e("el-tab-pane",{attrs:{label:"一頁式網頁",name:"onepage"}},[e("div",{staticClass:"tab"},t._l(t.onepage,(function(t){return e("div",[e("a",{attrs:{href:t.href,target:"_blank"}},[e("img",{attrs:{src:t.url}})])])})),0)]),e("el-tab-pane",{attrs:{label:"網頁開發",name:"website"}},[e("div",{staticClass:"tab"},t._l(t.frontEnd,(function(t){return e("div",[e("a",{attrs:{href:t.href,target:"_blank"}},[e("img",{attrs:{src:t.url}})])])})),0),e("div",{staticClass:"tab"},t._l(t.frontEnd2,(function(t){return e("div",[e("a",{attrs:{href:t.href,target:"_blank"}},[e("img",{attrs:{src:t.url}})])])})),0)]),e("el-tab-pane",{attrs:{label:"網站/APP企劃",name:"plan"}},[e("div",{staticClass:"tab"},t._l(t.WEB_PM,(function(t){return e("div",["no"===t.class?[e("img",{attrs:{src:t.url}})]:[e("a",{attrs:{href:t.href,target:"_blank"}},[e("img",{attrs:{src:t.url}})])]],2)})),0)]),e("el-tab-pane",{attrs:{label:"品牌經營",name:"community"}},[e("div",{staticClass:"tab"},t._l(t.community,(function(t){return e("div",["no"===t.class?[e("img",{attrs:{src:t.url}})]:[e("a",{attrs:{href:t.href,target:"_blank"}},[e("img",{attrs:{src:t.url}})])]],2)})),0)])],1)],1)},n=[],s=e("5f38"),c=function(){var t=this,i=t.$createElement,e=t._self._c||i;return t.lightboxList.length>0?e("div",{staticClass:"list-lightbox",on:{click:t.callLightbox}},[e("img",{attrs:{src:t.lightboxList[0]}}),t._l(t.lightboxList,(function(i,r){return t.isActive?[""!==i?e("div",{key:r,staticClass:"lightbox",class:{active:t.isActive&&r===t.currentIndex},on:{click:function(i){return i.stopPropagation(),t.closeLightbox(i)}}},[t.lightboxList.length>1?[e("div",{staticClass:"prev",on:{click:function(i){return i.stopPropagation(),t.handleClickArrow(-1)}}}),e("div",{staticClass:"next",on:{click:function(i){return i.stopPropagation(),t.handleClickArrow(1)}}})]:t._e(),e("div",{staticClass:"close"}),e("div",{staticClass:"image-box"},[e("img",{staticClass:"lightbox-img",attrs:{src:i},on:{click:function(i){return i.stopPropagation(),t.openLightbox(i)}}})])],2):t._e()]:t._e()}))],2):t._e()},a=[],o=(e("6762"),e("2fdb"),{name:"list-lightbox",props:{srcs:Array},data:function(){return{isActive:!1,currentIndex:0}},computed:{lightboxList:function(){return this.srcs.filter((function(t){return!["",null,void 0].includes(t)}))}},created:function(){},methods:{handleClickArrow:function(t){this.currentIndex=(this.currentIndex+t+this.lightboxList.length)%this.lightboxList.length},callLightbox:function(){this.isActive=!0,this.currentIndex=0},closeLightbox:function(){this.isActive=!1},openLightbox:function(){this.isActive=!0}}}),l=o,u=(e("3a21"),e("2877")),m=Object(u["a"])(l,c,a,!1,null,"2c389c9e",null),g=m.exports,p={name:"works",components:{listLightbox:g},data:function(){return{activeName:"all",onepage:s["q"],frontEnd:s["o"],frontEnd2:s["p"],BACKSTAGE:s["b"],DESIGN:s["d"],WEB_PM:s["i"],APPDESIGN_IMG:s["a"],LOGO_IMG:s["f"],POSTER_IMG:s["g"],DRAW_IMG:s["e"],WEBSITE_IMG:s["h"],BANNER_IMG:s["c"],card:s["k"],edm:s["n"],community:s["l"],ecommerce:s["ecommerce"],videoClip:s["videoClip"]}}},h=p,f=(e("c5b7"),Object(u["a"])(h,r,n,!1,null,"21bab7bd",null));i["default"]=f.exports},"270a":function(t,i,e){"use strict";e.r(i);var r=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div")},n=[],s={name:"skill-tree"},c=s,a=(e("d54e"),e("2877")),o=Object(a["a"])(c,r,n,!1,null,"2f0aca45",null);i["default"]=o.exports},"31cb":function(t,i,e){},"3a21":function(t,i,e){"use strict";var r=e("31cb"),n=e.n(r);n.a},"4c0b":function(t,i,e){t.exports=e.p+"img/gmail-icon.e67c6af8.svg"},"56d7":function(t,i,e){"use strict";e.r(i);e("cadf"),e("551c"),e("f751"),e("097d");var r=e("2b0e"),n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"app"}},[e("div",[e("router-view")],1)])},s=[],c={name:"index",components:{},data:function(){return{}},methods:{}},a=c,o=(e("5c0b"),e("2877")),l=Object(o["a"])(a,n,s,!1,null,null,null),u=l.exports,m=e("8c4f"),g=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"welcome"},[e("about"),e("works"),e("foot"),e("el-backtop",{attrs:{bottom:80}})],1)},p=[],h=e("086f"),f=e("e684"),b=e("270a"),d=e("211c"),v=function(){var t=this,i=t.$createElement;t._self._c;return t._m(0)},_=[function(){var t=this,i=t.$createElement,r=t._self._c||i;return r("div",{staticClass:"foot"},[r("div",{staticClass:"social-links"},[r("div",[r("a",{attrs:{href:"mailto:summer.hung222@gmail.com",target:"_blank"}},[r("img",{attrs:{src:e("4c0b")}}),r("span",[t._v("summer.hung222@gmail.com")])])]),r("div",[r("a",{attrs:{href:"https://lin.ee/0EC31Ps",target:"_blank"}},[r("img",{attrs:{src:e("b206")}}),r("span",[t._v("@277yofqa or ID: like3028")])])])]),r("div",{staticClass:"copyright"},[t._v("Copyright© Summer Studio, 2022.01")])])}],x={name:"foot"},w=x,j=(e("fc51"),Object(o["a"])(w,v,_,!1,null,"50230842",null)),y=j.exports,P={name:"welcome",components:{home:h["default"],about:f["default"],skillTree:b["default"],works:d["default"],foot:y},data:function(){return{classes:"bounce",delay:1e3,duration:1e3,iteration:5}}},k=P,C=(e("ce37"),Object(o["a"])(k,g,p,!1,null,"4f91d0a2",null)),E=C.exports;r["default"].use(m["a"]);var O=new m["a"]({routes:[{path:"/",name:"welcome",component:E},{path:"/home",name:"home",component:function(){return Promise.resolve().then(e.bind(null,"086f"))}},{path:"/about",name:"about",component:function(){return Promise.resolve().then(e.bind(null,"e684"))}},{path:"/skill-tree",name:"skill-tree",component:function(){return Promise.resolve().then(e.bind(null,"270a"))}},{path:"/works",name:"works",component:function(){return Promise.resolve().then(e.bind(null,"211c"))}}]}),G=e("2f62");r["default"].use(G["a"]);var A=new G["a"].Store({state:{count:1,todos:[{id:1,text:"...",done:!0},{id:2,text:"...",done:!1}]},getters:{doneTodos:function(t){return t.todos.filter((function(t){return t.done}))}},mutations:{increment:function(t,i){t.count+=i.amount}}}),I=e("5c96"),M=e.n(I);e("c69f");r["default"].use(M.a);var S=e("00e4");r["default"].config.productionTip=!1,r["default"].use(S["a"]),new r["default"]({router:O,store:A,render:function(t){return t(u)}}).$mount("#app")},"5c0b":function(t,i,e){"use strict";var r=e("e332"),n=e.n(r);n.a},"5f38":function(t,i,e){"use strict";e.d(i,"q",(function(){return r})),e.d(i,"o",(function(){return n})),e.d(i,"p",(function(){return s})),e.d(i,"b",(function(){return c})),e.d(i,"d",(function(){return a})),e.d(i,"i",(function(){return o})),e.d(i,"l",(function(){return l})),e.d(i,"a",(function(){return u})),e.d(i,"c",(function(){return m})),e.d(i,"f",(function(){return g})),e.d(i,"g",(function(){return p})),e.d(i,"e",(function(){return h})),e.d(i,"h",(function(){return f})),e.d(i,"k",(function(){return b})),e.d(i,"n",(function(){return d})),e.d(i,"j",(function(){return v}));var r=[{label:"泰國CQ9",class:"thai-cq9",url:"https://i.imgur.com/cpi4zWl.png",href:"https://hong-liyen.github.io/thai/"},{label:"pinshan品善",class:"pinshan",url:"https://i.imgur.com/rj9mBvc.png",href:"https://hong-liyen.github.io/pinshan/"},{label:"CQ9",class:"cq9",url:"https://i.imgur.com/THNRgpu.png",href:"https://hong-liyen.github.io/GPO_v5/CQ9/index.html"},{label:"幸運飛艇",class:"ship",url:"https://i.imgur.com/Ne1SptY.png",href:"https://hong-liyen.github.io/GPO_v5/luckyairship/index.html"}],n=[{label:"MotherK",class:"motherk",url:"https://i.imgur.com/sYdLfmU.png",href:"https://www.motherk.com.tw/"},{label:"劉麵包",class:"liu-bread",url:"https://i.imgur.com/yCesJFq.png",href:"http://www.nutricom.com.tw/index.html"},{label:"東方平台",class:"gpo",url:"https://i.imgur.com/68nTGuK.png",href:"https://hong-liyen.github.io/GPO_v5/"},{label:"中博彩票",class:"cb",url:"https://i.imgur.com/xbUWcLH.png",href:"https://hong-liyen.github.io/CB_website/"}],s=[{label:"Mega-Page展",class:"mega",url:"https://i.imgur.com/sXlN5Q4.png",href:"https://hong-liyen.github.io/page/"},{label:"OT後台系統",class:"ot",url:"https://i.imgur.com/zBXDECG.png",href:"https://hong-liyen.github.io/OTPlatform/"},{label:"CQ9",class:"cq9",url:"https://i.imgur.com/THNRgpu.png",href:"https://hong-liyen.github.io/GPO_v5/CQ9/index.html"},{label:"幸運飛艇",class:"ship",url:"https://i.imgur.com/Ne1SptY.png",href:"https://hong-liyen.github.io/GPO_v5/luckyairship/index.html"}],c=[{label:"EDM",class:"edm",url:"edm",href:"no-website"},{label:"APP設計",class:"APP-Design",href:"no-website"},{label:"Banner設計",class:"banner",href:"no-website"},{label:"APP-啟動圖",class:"Launch",href:"no-website"}],a=[{label:"logo啟動圖設計",class:"design",href:"no-website"},{label:"網頁設計",class:"website",href:"no-website"},{label:"海報設計",class:"poster",href:"no-wesite"},{label:"插畫設計",class:"draw",href:"no-wesite"}],o=[{label:"newtalk-前台",href:"https://nphu1y.axshare.com",url:"https://i.imgur.com/lAftXmQ.png"},{label:"QPP",href:"https://a3lnkz.axshare.com",url:"https://i.imgur.com/xkKBkQ5.png"},{label:"GM",href:"https://iptiml.axshare.com",url:"https://i.imgur.com/8i6iLw9.png"},{label:"Wlive",href:"https://4pis07.axshare.com",url:"https://i.imgur.com/roaok53.png"}],l=[{label:"FB橙真水晶",href:"https://www.facebook.com/chengjhencrystal",url:"https://i.imgur.com/q758HfY.png"},{label:"IG橙真水晶",href:"https://www.instagram.com/chengjhen/",url:"https://i.imgur.com/ijb650j.png"},{label:"YT橙真水晶",href:"https://www.youtube.com/channel/UCe1I3LGe7SzQgEpg1yDzHMQ/featured",url:"https://i.imgur.com/KBykmju.png"},{label:"蝦皮橙真水晶",href:"https://shopee.tw/amanda328",url:"https://i.imgur.com/mjUymwI.png"}],u=["https://i.imgur.com/Jx930nt.png","https://i.imgur.com/B5AN5ug.jpg","https://i.imgur.com/4nOxSDX.jpg","https://i.imgur.com/YkBXDS5.jpg","https://i.imgur.com/cAAtS1k.jpg","https://i.imgur.com/kLWZA8S.jpg","https://i.imgur.com/Cd0bDTi.jpg","https://i.imgur.com/EOz1KxF.jpg","https://i.imgur.com/w0sb0vU.jpg","https://i.imgur.com/EVK4DBv.jpg","https://i.imgur.com/d3nqGAo.jpg","https://i.imgur.com/ZDq2SK9.jpg","https://i.imgur.com/VtjyMFD.jpg"],m=["https://i.imgur.com/yRl3ogF.png","https://i.imgur.com/ZRNONa7.png","https://i.imgur.com/WvUdH4O.png"],g=["https://i.imgur.com/ogje3rK.png","https://i.imgur.com/CCWVqYN.png","https://i.imgur.com/esUCD9O.png","https://i.imgur.com/vlJUr7Z.png","https://i.imgur.com/cB3RwBJ.png","https://i.imgur.com/ZJhsHVe.png","https://i.imgur.com/0dxH9XJ.png","https://i.imgur.com/Oy7JOyH.png"],p=["https://i.imgur.com/bX1FgM1.png","https://i.imgur.com/69IXN1m.png","https://i.imgur.com/QvQtnW6.png","https://i.imgur.com/fW1mUrM.png","https://i.imgur.com/ApjKO07.png","https://i.imgur.com/3CGYFxP.png","https://i.imgur.com/MYvaAyX.png","https://i.imgur.com/abDU5Gs.png","https://i.imgur.com/XZdXsR9.png","https://i.imgur.com/H9gaVys.png","https://i.imgur.com/UJPNXug.png","https://i.imgur.com/pexNKFX.png","https://i.imgur.com/lJ4ubhv.png","https://i.imgur.com/RsIP9bI.png","https://i.imgur.com/xmnqdcb.png","https://i.imgur.com/zsOXczs.png","https://i.imgur.com/6fvAhZj.jpg","https://i.imgur.com/CNTkDC2.jpg","https://i.imgur.com/9ytjFJF.png","https://i.imgur.com/dOqAP4t.png","https://i.imgur.com/qRD8s1T.png","https://i.imgur.com/cXoBX6m.jpg","https://i.imgur.com/GJKAvXE.png"],h=["https://i.imgur.com/xsd3qTQ.png","https://i.imgur.com/Ji24Jif.png","https://i.imgur.com/uDfEdit.png","https://i.imgur.com/ihuRBUE.png","https://i.imgur.com/5wWn5cL.jpg","https://i.imgur.com/isHzdeV.jpg","https://i.imgur.com/CgC25W2.jpg"],f=["https://i.imgur.com/dezb0PL.png","https://i.imgur.com/6shVJhT.jpg","https://i.imgur.com/KKucDWS.jpg","https://i.imgur.com/nqbS9pr.jpg","https://i.imgur.com/eGUMrlf.jpg","https://i.imgur.com/UMmYXFn.jpg","https://i.imgur.com/z3B6LJO.jpg","https://i.imgur.com/HjqhGcH.jpg","https://i.imgur.com/MzuhgVd.jpg","https://i.imgur.com/SJVXUob.jpg","https://i.imgur.com/qU09w0p.jpg","https://i.imgur.com/8z6ue03.jpg","https://i.imgur.com/RX30UY0.jpg"],b=["https://i.imgur.com/6AsWAKt.png","https://i.imgur.com/5Nm6vbb.png","https://i.imgur.com/gLm2n1T.png","https://i.imgur.com/gflgA32.png","https://i.imgur.com/XjwAy2H.png","https://i.imgur.com/FeWBhwf.png","https://i.imgur.com/Yb4awfG.png"],d=["https://i.imgur.com/g8riQdy.png","https://i.imgur.com/t0i1uDF.png","https://i.imgur.com/NmIaWG7.jpg","https://i.imgur.com/Ar060TI.png","https://i.imgur.com/P1rLeLg.png"],v=["https://i.imgur.com/VDL7dWl.png","https://i.imgur.com/OHMfeHv.png","https://i.imgur.com/qeiPNMX.png","https://i.imgur.com/te9OL1O.png"]},"793d":function(t,i,e){"use strict";var r=e("80df"),n=e.n(r);n.a},"80df":function(t,i,e){},9310:function(t,i,e){"use strict";var r=e("09ad"),n=e.n(r);n.a},b206:function(t,i,e){t.exports=e.p+"img/line-messenger.62e83cd7.svg"},c0b5:function(t,i,e){},c5b7:function(t,i,e){"use strict";var r=e("fd1e"),n=e.n(r);n.a},c69f:function(t,i,e){},cacc:function(t,i,e){},ce37:function(t,i,e){"use strict";var r=e("db65"),n=e.n(r);n.a},d54e:function(t,i,e){"use strict";var r=e("cacc"),n=e.n(r);n.a},db65:function(t,i,e){},e332:function(t,i,e){},e684:function(t,i,e){"use strict";e.r(i);var r=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"about"},[e("el-carousel",{attrs:{interval:3e3,arrow:"always",height:"65vh"}},t._l(t.bannerImg,(function(t,i){return e("el-carousel-item",{key:t},[e("img",{attrs:{src:t}})])})),1)],1)},n=[],s=e("5f38"),c={name:"about",data:function(){return{bannerImg:s["j"]}}},a=c,o=(e("9310"),e("2877")),l=Object(o["a"])(a,r,n,!1,null,"477b9a1a",null);i["default"]=l.exports},fc51:function(t,i,e){"use strict";var r=e("c0b5"),n=e.n(r);n.a},fd1e:function(t,i,e){}});
//# sourceMappingURL=app.2e911522.js.map