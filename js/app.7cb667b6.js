(function(t){function i(i){for(var r,a,c=i[0],o=i[1],l=i[2],m=0,g=[];m<c.length;m++)a=c[m],Object.prototype.hasOwnProperty.call(e,a)&&e[a]&&g.push(e[a][0]),e[a]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);u&&u(i);while(g.length)g.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,i=0;i<s.length;i++){for(var n=s[i],r=!0,c=1;c<n.length;c++){var o=n[c];0!==e[o]&&(r=!1)}r&&(s.splice(i--,1),t=a(a.s=n[0]))}return t}var r={},e={app:0},s=[];function a(i){if(r[i])return r[i].exports;var n=r[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,i,n){a.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,i){if(1&i&&(t=a(t)),8&i)return t;if(4&i&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var r in t)a.d(n,r,function(i){return t[i]}.bind(null,r));return n},a.n=function(t){var i=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(i,"a",i),i},a.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},a.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=i,c=c.slice();for(var l=0;l<c.length;l++)i(c[l]);var u=o;s.push([0,"chunk-vendors"]),n()})({0:function(t,i,n){t.exports=n("56d7")},"086f":function(t,i,n){"use strict";n.r(i);var r=function(){var t=this,i=t.$createElement;t._self._c;return t._m(0)},e=[function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"works"},[n("div",{staticClass:"bread__title"},[t._v("晴天設計")])])}],s={name:"home",data:function(){return{}}},a=s,c=(n("793d"),n("2877")),o=Object(c["a"])(a,r,e,!1,null,"2b37d574",null);i["default"]=o.exports},"09ad":function(t,i,n){},"211c":function(t,i,n){"use strict";n.r(i);var r=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"works"},[n("el-tabs",{on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(i){t.activeName=i},expression:"activeName"}},[n("el-tab-pane",{attrs:{label:"全部",name:"all"}},[n("div",{staticClass:"tab"},t._l(t.frontEnd,(function(t){return n("div",[n("a",{attrs:{href:t.href,target:"_blank"}},[n("img",{attrs:{src:t.url}})])])})),0),n("div",{staticClass:"tab"},t._l(t.frontEnd2,(function(t){return n("div",[n("a",{attrs:{href:t.href,target:"_blank"}},[n("img",{attrs:{src:t.url}})])])})),0),n("div",{staticClass:"tab"},t._l(t.DESIGN,(function(i){return n("div",[["design"===i.class?n("list-lightbox",{attrs:{srcs:t.LOGO_IMG}}):t._e(),"website"===i.class?n("list-lightbox",{attrs:{srcs:t.WEBSITE_IMG}}):t._e(),"poster"===i.class?n("list-lightbox",{attrs:{srcs:t.POSTER_IMG}}):t._e(),"draw"===i.class?n("list-lightbox",{attrs:{srcs:t.DRAW_IMG}}):t._e()]],2)})),0),n("div",{staticClass:"tab"},t._l(t.BACKSTAGE,(function(i){return n("div",["mega-back"===i.class?[n("list-lightbox",{attrs:{srcs:t.BACKSTAGE_IMG}})]:"king"===i.class?[n("list-lightbox",{attrs:{srcs:t.KING_IMG}})]:"edm"===i.class?[n("list-lightbox",{attrs:{srcs:t.edm}})]:[n("list-lightbox",{attrs:{srcs:t.Launch}})]],2)})),0),n("div",{staticClass:"tab"},t._l(t.WEB_PM,(function(t){return n("div",["no"===t.class?[n("img",{attrs:{src:t.url}})]:[n("a",{attrs:{href:t.href,target:"_blank"}},[n("img",{attrs:{src:t.url}})])]],2)})),0)]),n("el-tab-pane",{attrs:{label:"平面設計",name:"design"}},[n("div",{staticClass:"tab"},t._l(t.DESIGN,(function(i){return n("div",[["design"===i.class?n("list-lightbox",{attrs:{srcs:t.LOGO_IMG}}):t._e(),"website"===i.class?n("list-lightbox",{attrs:{srcs:t.WEBSITE_IMG}}):t._e(),"poster"===i.class?n("list-lightbox",{attrs:{srcs:t.POSTER_IMG}}):t._e(),"draw"===i.class?n("list-lightbox",{attrs:{srcs:t.DRAW_IMG}}):t._e()]],2)})),0),n("div",{staticClass:"tab"},t._l(t.BACKSTAGE,(function(i){return n("div",["mega-back"===i.class?[n("list-lightbox",{attrs:{srcs:t.BACKSTAGE_IMG}})]:"king"===i.class?[n("list-lightbox",{attrs:{srcs:t.KING_IMG}})]:"edm"===i.class?[n("list-lightbox",{attrs:{srcs:t.edm}})]:[n("list-lightbox",{attrs:{srcs:t.Launch}})]],2)})),0)]),n("el-tab-pane",{attrs:{label:"網頁開發",name:"website"}},[n("div",{staticClass:"tab"},t._l(t.frontEnd,(function(t){return n("div",[n("a",{attrs:{href:t.href,target:"_blank"}},[n("img",{attrs:{src:t.url}})])])})),0),n("div",{staticClass:"tab"},t._l(t.frontEnd2,(function(t){return n("div",[n("a",{attrs:{href:t.href,target:"_blank"}},[n("img",{attrs:{src:t.url}})])])})),0)]),n("el-tab-pane",{attrs:{label:"行銷企劃",name:"plan"}},[n("div",{staticClass:"tab"},t._l(t.WEB_PM,(function(t){return n("div",["no"===t.class?[n("img",{attrs:{src:t.url}})]:[n("a",{attrs:{href:t.href,target:"_blank"}},[n("img",{attrs:{src:t.url}})])]],2)})),0)]),n("el-tab-pane",{attrs:{label:"社群經營",name:"community"}},[n("div",{staticClass:"tab"},t._l(t.community,(function(t){return n("div",["no"===t.class?[n("img",{attrs:{src:t.url}})]:[n("a",{attrs:{href:t.href,target:"_blank"}},[n("img",{attrs:{src:t.url}})])]],2)})),0)]),n("el-tab-pane",{attrs:{label:"電子商務",name:"ecommerce"}},[n("div",{staticClass:"tab"},t._l(t.ecommerce,(function(t){return n("div",["no"===t.class?[n("img",{attrs:{src:t.url}})]:[n("a",{attrs:{href:t.href,target:"_blank"}},[n("img",{attrs:{src:t.url}})])]],2)})),0)])],1)],1)},e=[],s=n("5f38"),a=function(){var t=this,i=t.$createElement,n=t._self._c||i;return t.lightboxList.length>0?n("div",{staticClass:"list-lightbox",on:{click:t.callLightbox}},[n("img",{attrs:{src:t.lightboxList[0]}}),t._l(t.lightboxList,(function(i,r){return t.isActive?[""!==i?n("div",{key:r,staticClass:"lightbox",class:{active:t.isActive&&r===t.currentIndex},on:{click:function(i){return i.stopPropagation(),t.closeLightbox(i)}}},[t.lightboxList.length>1?[n("div",{staticClass:"prev",on:{click:function(i){return i.stopPropagation(),t.handleClickArrow(-1)}}}),n("div",{staticClass:"next",on:{click:function(i){return i.stopPropagation(),t.handleClickArrow(1)}}})]:t._e(),n("div",{staticClass:"close"}),n("div",{staticClass:"image-box"},[n("img",{staticClass:"lightbox-img",attrs:{src:i},on:{click:function(i){return i.stopPropagation(),t.openLightbox(i)}}})])],2):t._e()]:t._e()}))],2):t._e()},c=[],o=(n("6762"),n("2fdb"),{name:"list-lightbox",props:{srcs:Array},data:function(){return{isActive:!1,currentIndex:0}},computed:{lightboxList:function(){return this.srcs.filter((function(t){return!["",null,void 0].includes(t)}))}},created:function(){},methods:{handleClickArrow:function(t){this.currentIndex=(this.currentIndex+t+this.lightboxList.length)%this.lightboxList.length},callLightbox:function(){this.isActive=!0,this.currentIndex=0},closeLightbox:function(){this.isActive=!1},openLightbox:function(){this.isActive=!0}}}),l=o,u=(n("af54"),n("2877")),m=Object(u["a"])(l,a,c,!1,null,"df0cf49e",null),g=m.exports,p={name:"works",components:{listLightbox:g},data:function(){return{activeName:"all",frontEnd:s["o"],frontEnd2:s["p"],BACKSTAGE:s["a"],DESIGN:s["c"],WEB_PM:s["j"],BACKSTAGE_IMG:s["b"],LOGO_IMG:s["f"],POSTER_IMG:s["h"],DRAW_IMG:s["d"],WEBSITE_IMG:s["i"],KING_IMG:s["e"],Launch:s["g"],edm:s["n"],community:s["l"],ecommerce:s["m"]}}},h=p,f=(n("e258"),Object(u["a"])(h,r,e,!1,null,"c0661344",null));i["default"]=f.exports},"270a":function(t,i,n){"use strict";n.r(i);var r=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div")},e=[],s={name:"skill-tree"},a=s,c=(n("d54e"),n("2877")),o=Object(c["a"])(a,r,e,!1,null,"2f0aca45",null);i["default"]=o.exports},"4c0b":function(t,i,n){t.exports=n.p+"img/gmail-icon.e67c6af8.svg"},"56d7":function(t,i,n){"use strict";n.r(i);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),e=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{attrs:{id:"app"}},[n("div",[n("router-view")],1)])},s=[],a={name:"index",components:{},data:function(){return{}},methods:{}},c=a,o=(n("5c0b"),n("2877")),l=Object(o["a"])(c,e,s,!1,null,null,null),u=l.exports,m=n("8c4f"),g=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"welcome"},[n("about"),n("works"),n("foot"),n("el-backtop",{attrs:{bottom:80}})],1)},p=[],h=n("086f"),f=n("e684"),d=n("270a"),b=n("211c"),v=function(){var t=this,i=t.$createElement;t._self._c;return t._m(0)},_=[function(){var t=this,i=t.$createElement,r=t._self._c||i;return r("div",{staticClass:"foot"},[r("div",{staticClass:"social-links"},[r("div",[r("a",{attrs:{href:"mailto:summer.hung222@gmail.com",target:"_blank"}},[r("img",{attrs:{src:n("4c0b")}}),r("span",[t._v("summer.hung222@gmail.com")])])]),r("div",[r("a",{attrs:{href:"https://lin.ee/0EC31Ps",target:"_blank"}},[r("img",{attrs:{src:n("b206")}}),r("span",[t._v("@277yofqa or ID: like3028")])])])]),r("div",{staticClass:"copyright"},[t._v("Copyright© Summer Studio, 2022.01")])])}],x={name:"foot"},w=x,k=(n("fc51"),Object(o["a"])(w,v,_,!1,null,"50230842",null)),E=k.exports,C={name:"welcome",components:{home:h["default"],about:f["default"],skillTree:d["default"],works:b["default"],foot:E},data:function(){return{classes:"bounce",delay:1e3,duration:1e3,iteration:5}}},y=C,I=(n("ce37"),Object(o["a"])(y,g,p,!1,null,"4f91d0a2",null)),A=I.exports;r["default"].use(m["a"]);var M=new m["a"]({routes:[{path:"/",name:"welcome",component:A},{path:"/home",name:"home",component:function(){return Promise.resolve().then(n.bind(null,"086f"))}},{path:"/about",name:"about",component:function(){return Promise.resolve().then(n.bind(null,"e684"))}},{path:"/skill-tree",name:"skill-tree",component:function(){return Promise.resolve().then(n.bind(null,"270a"))}},{path:"/works",name:"works",component:function(){return Promise.resolve().then(n.bind(null,"211c"))}}]}),G=n("2f62");r["default"].use(G["a"]);var O=new G["a"].Store({state:{count:1,todos:[{id:1,text:"...",done:!0},{id:2,text:"...",done:!1}]},getters:{doneTodos:function(t){return t.todos.filter((function(t){return t.done}))}},mutations:{increment:function(t,i){t.count+=i.amount}}}),P=n("5c96"),j=n.n(P);n("c69f");r["default"].use(j.a);var S=n("00e4");r["default"].config.productionTip=!1,r["default"].use(S["a"]),new r["default"]({router:M,store:O,render:function(t){return t(u)}}).$mount("#app")},"5c0b":function(t,i,n){"use strict";var r=n("e332"),e=n.n(r);e.a},"5f38":function(t,i,n){"use strict";n.d(i,"o",(function(){return r})),n.d(i,"p",(function(){return e})),n.d(i,"a",(function(){return s})),n.d(i,"c",(function(){return a})),n.d(i,"j",(function(){return c})),n.d(i,"l",(function(){return o})),n.d(i,"m",(function(){return l})),n.d(i,"b",(function(){return u})),n.d(i,"e",(function(){return m})),n.d(i,"f",(function(){return g})),n.d(i,"h",(function(){return p})),n.d(i,"d",(function(){return h})),n.d(i,"i",(function(){return f})),n.d(i,"g",(function(){return d})),n.d(i,"n",(function(){return b})),n.d(i,"k",(function(){return v}));var r=[{label:"MotherK",class:"motherk",url:"https://i.imgur.com/sYdLfmU.png",href:"https://www.motherk.com.tw/"},{label:"劉麵包",class:"liu-bread",url:"https://i.imgur.com/yCesJFq.png",href:"http://www.nutricom.com.tw/index.html"},{label:"東方平台",class:"gpo",url:"https://i.imgur.com/68nTGuK.png",href:"https://hong-liyen.github.io/GPO_v5/"},{label:"中博彩票",class:"cb",url:"https://i.imgur.com/xbUWcLH.png",href:"https://hong-liyen.github.io/CB_website/"}],e=[{label:"Mega-Page展",class:"mega",url:"https://i.imgur.com/sXlN5Q4.png",href:"https://hong-liyen.github.io/page/"},{label:"OT後台系統",class:"ot",url:"https://i.imgur.com/oDssjpx.png",href:"https://hong-liyen.github.io/OTPlatform/"},{label:"刷卡換現金",class:"cash",url:"https://i.imgur.com/6EdvSCe.png",href:"http://0988368092.tw/"},{label:"刷卡換現金",class:"cash2",url:"https://i.imgur.com/WaB4EI3.png",href:"http://0915290156.tw/"}],s=[{label:"EDM",class:"edm",url:"edm",href:"no-website"},{label:"mega後台",class:"mega-back",href:"no-website"},{label:"前台-王者娛樂",class:"king",href:"no-website"},{label:"APP-啟動圖",class:"Launch",href:"no-website"}],a=[{label:"logo啟動圖設計",class:"design",href:"no-website"},{label:"網頁設計",class:"website",href:"no-website"},{label:"海報設計",class:"poster",href:"no-wesite"},{label:"插畫設計",class:"draw",href:"no-wesite"}],c=[{label:"newtalk-前台",href:"https://nphu1y.axshare.com",url:"https://i.imgur.com/lAftXmQ.png"},{label:"QPP",href:"https://a3lnkz.axshare.com",url:"https://i.imgur.com/xkKBkQ5.png"},{label:"GM",href:"https://iptiml.axshare.com",url:"https://i.imgur.com/8i6iLw9.png"},{label:"Wlive",href:"https://4pis07.axshare.com",url:"https://i.imgur.com/roaok53.png"}],o=[{label:"橙真水晶",href:"https://www.facebook.com/chengjhencrystal",url:"https://i.imgur.com/izafgZd.png"},{label:"Amanda生活隨筆",href:"https://www.facebook.com/Amanda%E7%94%9F%E6%B4%BB%E9%9A%A8%E7%AD%86-102146218528993",url:"https://i.imgur.com/ObCbtC8.png"}],l=[{label:"橙真水晶",href:"https://shopee.tw/amanda328",url:"https://i.imgur.com/FWAPRNT.png"}],u=["https://i.imgur.com/D2JKSoY.png","https://i.imgur.com/wy89H1S.jpg","https://i.imgur.com/roHUpJd.jpg","https://i.imgur.com/5IytKGw.jpg"],m=["https://i.imgur.com/LKtbCIV.png","https://i.imgur.com/soo1TlE.png","https://i.imgur.com/Yzj4M4w.png","https://i.imgur.com/pF3ApgE.png","https://i.imgur.com/SEiFroR.png","https://i.imgur.com/hQWa22k.png","https://i.imgur.com/qzWUKc7.png","https://i.imgur.com/yTHhO0C.png","https://i.imgur.com/ue7p3Lp.png","https://i.imgur.com/kiN94dZ.png","https://i.imgur.com/HTsOQ3D.png"],g=["https://i.imgur.com/MAmAWMO.png","https://i.imgur.com/ArZds5X.png","https://i.imgur.com/8JE0McP.png","https://i.imgur.com/EkZKXEK.png","https://i.imgur.com/bfOuQ18.png","https://i.imgur.com/KzWBwj6.png","https://i.imgur.com/lYCbSJL.png","https://i.imgur.com/f4oRtu9.png","https://i.imgur.com/HRSUSrk.png"],p=["https://i.imgur.com/bX1FgM1.png","https://i.imgur.com/69IXN1m.png","https://i.imgur.com/QvQtnW6.png","https://i.imgur.com/fW1mUrM.png","https://i.imgur.com/ApjKO07.png","https://i.imgur.com/3CGYFxP.png","https://i.imgur.com/MYvaAyX.png","https://i.imgur.com/abDU5Gs.png","https://i.imgur.com/XZdXsR9.png","https://i.imgur.com/H9gaVys.png","https://i.imgur.com/UJPNXug.png","https://i.imgur.com/pexNKFX.png","https://i.imgur.com/lJ4ubhv.png","https://i.imgur.com/RsIP9bI.png","https://i.imgur.com/xmnqdcb.png","https://i.imgur.com/zsOXczs.png","https://i.imgur.com/6fvAhZj.jpg","https://i.imgur.com/CNTkDC2.jpg","https://i.imgur.com/9ytjFJF.png","https://i.imgur.com/dOqAP4t.png","https://i.imgur.com/qRD8s1T.png","https://i.imgur.com/cXoBX6m.jpg","https://i.imgur.com/GJKAvXE.png"],h=["https://i.imgur.com/xsd3qTQ.png","https://i.imgur.com/Ji24Jif.png","https://i.imgur.com/uDfEdit.png","https://i.imgur.com/ihuRBUE.png","https://i.imgur.com/5wWn5cL.jpg","https://i.imgur.com/isHzdeV.jpg","https://i.imgur.com/CgC25W2.jpg"],f=["https://i.imgur.com/MPfsbPW.png","https://i.imgur.com/E9izCe7.png","https://i.imgur.com/pk8D3CP.png","https://i.imgur.com/nSUs32m.png","https://i.imgur.com/f2TVkso.png","https://i.imgur.com/RK2DWb0.png","https://i.imgur.com/Pk7pOHS.png","https://i.imgur.com/z67VMJ1.png","https://i.imgur.com/WmoVHFF.png","https://i.imgur.com/xxLJ6fi.png"],d=["https://i.imgur.com/Mdt36k3.png","https://i.imgur.com/ZujxB5W.png","https://i.imgur.com/RtLMi0c.png","https://i.imgur.com/X5Ml3HB.png"],b=["https://i.imgur.com/g8riQdy.png","https://i.imgur.com/Hg0nz1i.png","https://i.imgur.com/vU3wcBN.png","https://i.imgur.com/wI9g5Ex.png","https://i.imgur.com/ygyiVQg.png","https://i.imgur.com/qmnEiI3.png"],v=["https://i.imgur.com/Ws0Hjsh.png","https://i.imgur.com/DxKKbib.png","https://i.imgur.com/Ep1kx7b.png","https://i.imgur.com/hyS6pVH.png"]},"793d":function(t,i,n){"use strict";var r=n("80df"),e=n.n(r);e.a},"80df":function(t,i,n){},9310:function(t,i,n){"use strict";var r=n("09ad"),e=n.n(r);e.a},af54:function(t,i,n){"use strict";var r=n("e86b"),e=n.n(r);e.a},b206:function(t,i,n){t.exports=n.p+"img/line-messenger.62e83cd7.svg"},c0b5:function(t,i,n){},c69f:function(t,i,n){},cacc:function(t,i,n){},ce37:function(t,i,n){"use strict";var r=n("db65"),e=n.n(r);e.a},cf4e:function(t,i,n){},d54e:function(t,i,n){"use strict";var r=n("cacc"),e=n.n(r);e.a},db65:function(t,i,n){},e258:function(t,i,n){"use strict";var r=n("cf4e"),e=n.n(r);e.a},e332:function(t,i,n){},e684:function(t,i,n){"use strict";n.r(i);var r=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"about"},[n("el-carousel",{attrs:{interval:3e3,arrow:"always",height:"65vh"}},t._l(t.bannerImg,(function(t,i){return n("el-carousel-item",{key:t},[n("img",{attrs:{src:t}})])})),1)],1)},e=[],s=n("5f38"),a={name:"about",data:function(){return{bannerImg:s["k"]}}},c=a,o=(n("9310"),n("2877")),l=Object(o["a"])(c,r,e,!1,null,"477b9a1a",null);i["default"]=l.exports},e86b:function(t,i,n){},fc51:function(t,i,n){"use strict";var r=n("c0b5"),e=n.n(r);e.a}});
//# sourceMappingURL=app.7cb667b6.js.map