(function(t){function n(n){for(var e,o,c=n[0],u=n[1],a=n[2],m=0,p=[];m<c.length;m++)o=c[m],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(e in u)Object.prototype.hasOwnProperty.call(u,e)&&(t[e]=u[e]);l&&l(n);while(p.length)p.shift()();return s.push.apply(s,a||[]),i()}function i(){for(var t,n=0;n<s.length;n++){for(var i=s[n],e=!0,c=1;c<i.length;c++){var u=i[c];0!==r[u]&&(e=!1)}e&&(s.splice(n--,1),t=o(o.s=i[0]))}return t}var e={},r={app:0},s=[];function o(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=e,o.d=function(t,n,i){o.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,n){if(1&n&&(t=o(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var e in t)o.d(i,e,function(n){return t[n]}.bind(null,e));return i},o.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(n,"a",n),n},o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},o.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=n,c=c.slice();for(var a=0;a<c.length;a++)n(c[a]);var l=u;s.push([0,"chunk-vendors"]),i()})({0:function(t,n,i){t.exports=i("56d7")},"086f":function(t,n,i){"use strict";i.r(n);var e=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"works"},[i("div",{staticClass:"bread__title"},[t._v("晴天設計")])])}],s={name:"home",data:function(){return{}}},o=s,c=(i("793d"),i("2877")),u=Object(c["a"])(o,e,r,!1,null,"2b37d574",null);n["default"]=u.exports},"211c":function(t,n,i){"use strict";i.r(n);var e=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"works"},[i("div",{staticClass:"tab"},t._l(t.frontEnd,(function(t){return i("div",[i("a",{attrs:{href:t.href,target:"_blank"}},[i("img",{attrs:{src:t.url}})])])})),0),i("div",{staticClass:"tab"},t._l(t.frontEnd2,(function(t){return i("div",[i("a",{attrs:{href:t.href,target:"_blank"}},[i("img",{attrs:{src:t.url}})])])})),0),i("div",{staticClass:"tab"},t._l(t.DESIGN,(function(n){return i("div",[["design"===n.class?i("list-lightbox",{attrs:{srcs:t.LOGO_IMG}}):t._e(),"website"===n.class?i("list-lightbox",{attrs:{srcs:t.WEBSITE_IMG}}):t._e(),"poster"===n.class?i("list-lightbox",{attrs:{srcs:t.POSTER_IMG}}):t._e(),"draw"===n.class?i("list-lightbox",{attrs:{srcs:t.DRAW_IMG}}):t._e()]],2)})),0),i("div",{staticClass:"tab"},t._l(t.BACKSTAGE,(function(n){return i("div",["mega-back"===n.class?[i("list-lightbox",{attrs:{srcs:t.BACKSTAGE_IMG}})]:"king"===n.class?[i("list-lightbox",{attrs:{srcs:t.KING_IMG}})]:"edm"===n.class?[i("list-lightbox",{attrs:{srcs:t.edm}})]:[i("list-lightbox",{attrs:{srcs:t.Launch}})]],2)})),0),i("div",{staticClass:"tab"},t._l(t.WEB_PM,(function(t){return i("div",["no"===t.class?[i("img",{attrs:{src:t.url}})]:[i("a",{attrs:{href:t.href,target:"_blank"}},[i("img",{attrs:{src:t.url}})])]],2)})),0)])},r=[],s=i("5f38"),o=function(){var t=this,n=t.$createElement,i=t._self._c||n;return t.lightboxList.length>0?i("div",{staticClass:"list-lightbox",on:{click:t.callLightbox}},[i("img",{attrs:{src:t.lightboxList[0]}}),t._l(t.lightboxList,(function(n,e){return t.isActive?[""!==n?i("div",{key:e,staticClass:"lightbox",class:{active:t.isActive&&e===t.currentIndex},on:{click:function(n){return n.stopPropagation(),t.closeLightbox(n)}}},[t.lightboxList.length>1?[i("div",{staticClass:"prev",on:{click:function(n){return n.stopPropagation(),t.handleClickArrow(-1)}}}),i("div",{staticClass:"next",on:{click:function(n){return n.stopPropagation(),t.handleClickArrow(1)}}})]:t._e(),i("div",{staticClass:"close"}),i("div",{staticClass:"image-box"},[i("img",{staticClass:"lightbox-img",attrs:{src:n},on:{click:function(n){return n.stopPropagation(),t.openLightbox(n)}}})])],2):t._e()]:t._e()}))],2):t._e()},c=[],u=(i("6762"),i("2fdb"),{name:"list-lightbox",props:{srcs:Array},data:function(){return{isActive:!1,currentIndex:0}},computed:{lightboxList:function(){return this.srcs.filter((function(t){return!["",null,void 0].includes(t)}))}},created:function(){},methods:{handleClickArrow:function(t){this.currentIndex=(this.currentIndex+t+this.lightboxList.length)%this.lightboxList.length},callLightbox:function(){this.isActive=!0,this.currentIndex=0},closeLightbox:function(){this.isActive=!1},openLightbox:function(){this.isActive=!0}}}),a=u,l=(i("af54"),i("2877")),m=Object(l["a"])(a,o,c,!1,null,"df0cf49e",null),p=m.exports,g={name:"works",components:{listLightbox:p},data:function(){return{frontEnd:s["n"],frontEnd2:s["o"],BACKSTAGE:s["a"],DESIGN:s["c"],PRODUCT:s["PRODUCT"],WEB_PM:s["k"],BACKSTAGE_IMG:s["b"],LOGO_IMG:s["f"],POSTER_IMG:s["h"],DRAW_IMG:s["d"],WEBSITE_IMG:s["j"],KING_IMG:s["e"],Launch:s["g"],edm:s["m"]}}},h=g,f=(i("bfef"),Object(l["a"])(h,e,r,!1,null,"46335643",null));n["default"]=f.exports},"270a":function(t,n,i){"use strict";i.r(n);var e=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div")},r=[],s={name:"skill-tree"},o=s,c=(i("d54e"),i("2877")),u=Object(c["a"])(o,e,r,!1,null,"2f0aca45",null);n["default"]=u.exports},"358d":function(t,n,i){},"4c0b":function(t,n,i){t.exports=i.p+"img/gmail-icon.e67c6af8.svg"},"4ded":function(t,n,i){},"56d7":function(t,n,i){"use strict";i.r(n);i("cadf"),i("551c"),i("f751"),i("097d");var e=i("2b0e"),r=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{attrs:{id:"app"}},[i("div",[i("router-view")],1)])},s=[],o={name:"index",components:{},data:function(){return{}},methods:{}},c=o,u=(i("5c0b"),i("2877")),a=Object(u["a"])(c,r,s,!1,null,null,null),l=a.exports,m=i("8c4f"),p=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{directives:[{name:"animate-css",rawName:"v-animate-css",value:"animation",expression:"'animation'"}],staticClass:"welcome"},[i("about"),i("works"),i("foot"),i("el-backtop",{attrs:{bottom:80}})],1)},g=[],h=i("086f"),f=i("e684"),d=i("270a"),b=i("211c"),v=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},x=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"foot"},[e("div",{staticClass:"social-links"},[e("div",[e("a",{attrs:{href:"mailto:summer.hung222@gmail.com",target:"_blank"}},[e("img",{attrs:{src:i("4c0b")}}),e("span",[t._v("summer.hung222@gmail.com")])])]),e("div",[e("a",{attrs:{href:"https://lin.ee/0EC31Ps",target:"_blank"}},[e("img",{attrs:{src:i("b206")}}),e("span",[t._v("@277yofqa or ID: like3028")])])])]),e("div",{staticClass:"copyright"},[t._v("Copyright© Summer Studio, 2022.01")])])}],_={name:"foot"},w=_,k=(i("fc51"),Object(u["a"])(w,v,x,!1,null,"50230842",null)),C=k.exports,E={name:"welcome",components:{home:h["default"],about:f["default"],skillTree:d["default"],works:b["default"],foot:C},data:function(){return{classes:"bounce",delay:1e3,duration:1e3,iteration:5}}},y=E,O=(i("6a91"),Object(u["a"])(y,p,g,!1,null,"439632c3",null)),P=O.exports;e["default"].use(m["a"]);var j=new m["a"]({routes:[{path:"/",name:"welcome",component:P},{path:"/home",name:"home",component:function(){return Promise.resolve().then(i.bind(null,"086f"))}},{path:"/about",name:"about",component:function(){return Promise.resolve().then(i.bind(null,"e684"))}},{path:"/skill-tree",name:"skill-tree",component:function(){return Promise.resolve().then(i.bind(null,"270a"))}},{path:"/works",name:"works",component:function(){return Promise.resolve().then(i.bind(null,"211c"))}}]}),I=i("2f62");e["default"].use(I["a"]);var M=new I["a"].Store({state:{count:1,todos:[{id:1,text:"...",done:!0},{id:2,text:"...",done:!1}]},getters:{doneTodos:function(t){return t.todos.filter((function(t){return t.done}))}},mutations:{increment:function(t,n){t.count+=n.amount}}}),A=i("5c96"),G=i.n(A);i("c69f");e["default"].use(G.a);var L=i("00e4");e["default"].config.productionTip=!1,e["default"].use(L["a"]),new e["default"]({router:j,store:M,render:function(t){return t(l)}}).$mount("#app")},"5c0b":function(t,n,i){"use strict";var e=i("e332"),r=i.n(e);r.a},"5f38":function(t,n,i){"use strict";i.d(n,"n",(function(){return e})),i.d(n,"o",(function(){return r})),i.d(n,"a",(function(){return s})),i.d(n,"c",(function(){return o})),i.d(n,"k",(function(){return c})),i.d(n,"b",(function(){return u})),i.d(n,"e",(function(){return a})),i.d(n,"f",(function(){return l})),i.d(n,"h",(function(){return m})),i.d(n,"d",(function(){return p})),i.d(n,"j",(function(){return g})),i.d(n,"g",(function(){return h})),i.d(n,"m",(function(){return f})),i.d(n,"l",(function(){return d}));var e=[{label:"MotherK",class:"motherk",url:"https://i.imgur.com/sYdLfmU.png",href:"https://www.motherk.com.tw/"},{label:"劉麵包",class:"liu-bread",url:"https://i.imgur.com/yCesJFq.png",href:"http://www.nutricom.com.tw/index.html"},{label:"東方平台",class:"gpo",url:"https://i.imgur.com/68nTGuK.png",href:"https://hong-liyen.github.io/GPO_v5/"},{label:"中博彩票",class:"cb",url:"https://i.imgur.com/xbUWcLH.png",href:"https://hong-liyen.github.io/CB_website/"}],r=[{label:"Mega-Page展",class:"mega",url:"https://i.imgur.com/sXlN5Q4.png",href:"https://hong-liyen.github.io/page/"},{label:"OT後台系統",class:"ot",url:"https://i.imgur.com/oDssjpx.png",href:"https://hong-liyen.github.io/OTPlatform/"},{label:"刷卡換現金",class:"cash",url:"https://i.imgur.com/6EdvSCe.png",href:"http://0988368092.tw/"},{label:"刷卡換現金",class:"cash2",url:"https://i.imgur.com/WaB4EI3.png",href:"http://0915290156.tw/"}],s=[{label:"EDM",class:"edm",url:"edm",href:"no-website"},{label:"mega後台",class:"mega-back",href:"no-website"},{label:"前台-王者娛樂",class:"king",href:"no-website"},{label:"APP-啟動圖",class:"Launch",href:"no-website"}],o=[{label:"logo啟動圖設計",class:"design",href:"no-website"},{label:"網頁設計",class:"website",href:"no-website"},{label:"海報設計",class:"poster",href:"no-wesite"},{label:"插畫設計",class:"draw",href:"no-wesite"}],c=[{label:"newtalk-前台",href:"https://nphu1y.axshare.com",url:"https://i.imgur.com/lAftXmQ.png"},{label:"QPP",href:"https://a3lnkz.axshare.com",url:"https://i.imgur.com/xkKBkQ5.png"},{label:"GM",href:"https://iptiml.axshare.com",url:"https://i.imgur.com/8i6iLw9.png"},{label:"Wlive",href:"https://4pis07.axshare.com",url:"https://i.imgur.com/roaok53.png"}],u=["https://i.imgur.com/D2JKSoY.png","https://i.imgur.com/wy89H1S.jpg","https://i.imgur.com/roHUpJd.jpg","https://i.imgur.com/5IytKGw.jpg"],a=["https://i.imgur.com/LKtbCIV.png","https://i.imgur.com/soo1TlE.png","https://i.imgur.com/Yzj4M4w.png","https://i.imgur.com/pF3ApgE.png","https://i.imgur.com/SEiFroR.png","https://i.imgur.com/hQWa22k.png","https://i.imgur.com/qzWUKc7.png","https://i.imgur.com/yTHhO0C.png","https://i.imgur.com/ue7p3Lp.png","https://i.imgur.com/kiN94dZ.png","https://i.imgur.com/HTsOQ3D.png"],l=["https://i.imgur.com/MAmAWMO.png","https://i.imgur.com/KzWBwj6.png","https://i.imgur.com/lYCbSJL.png","https://i.imgur.com/ArZds5X.png","https://i.imgur.com/EkZKXEK.png"],m=["https://i.imgur.com/bX1FgM1.png","https://i.imgur.com/69IXN1m.png","https://i.imgur.com/QvQtnW6.png","https://i.imgur.com/fW1mUrM.png","https://i.imgur.com/ApjKO07.png","https://i.imgur.com/3CGYFxP.png","https://i.imgur.com/MYvaAyX.png","https://i.imgur.com/abDU5Gs.png","https://i.imgur.com/XZdXsR9.png","https://i.imgur.com/H9gaVys.png","https://i.imgur.com/UJPNXug.png","https://i.imgur.com/pexNKFX.png","https://i.imgur.com/lJ4ubhv.png","https://i.imgur.com/RsIP9bI.png","https://i.imgur.com/xmnqdcb.png","https://i.imgur.com/zsOXczs.png","https://i.imgur.com/6fvAhZj.jpg","https://i.imgur.com/CNTkDC2.jpg","https://i.imgur.com/9ytjFJF.png","https://i.imgur.com/dOqAP4t.png","https://i.imgur.com/qRD8s1T.png","https://i.imgur.com/cXoBX6m.jpg","https://i.imgur.com/GJKAvXE.png"],p=["https://i.imgur.com/xsd3qTQ.png","https://i.imgur.com/Ji24Jif.png","https://i.imgur.com/uDfEdit.png","https://i.imgur.com/ihuRBUE.png","https://i.imgur.com/5wWn5cL.jpg","https://i.imgur.com/isHzdeV.jpg","https://i.imgur.com/CgC25W2.jpg"],g=["https://i.imgur.com/MPfsbPW.png","https://i.imgur.com/E9izCe7.png","https://i.imgur.com/pk8D3CP.png","https://i.imgur.com/nSUs32m.png","https://i.imgur.com/f2TVkso.png","https://i.imgur.com/RK2DWb0.png","https://i.imgur.com/Pk7pOHS.png","https://i.imgur.com/z67VMJ1.png","https://i.imgur.com/WmoVHFF.png","https://i.imgur.com/xxLJ6fi.png"],h=["https://i.imgur.com/Mdt36k3.png","https://i.imgur.com/ZujxB5W.png","https://i.imgur.com/RtLMi0c.png","https://i.imgur.com/X5Ml3HB.png"],f=["https://i.imgur.com/g8riQdy.png","https://i.imgur.com/Hg0nz1i.png","https://i.imgur.com/vU3wcBN.png","https://i.imgur.com/wI9g5Ex.png","https://i.imgur.com/ygyiVQg.png","https://i.imgur.com/qmnEiI3.png"],d=["https://i.imgur.com/Ws0Hjsh.png","https://i.imgur.com/DxKKbib.png"]},"6a91":function(t,n,i){"use strict";var e=i("358d"),r=i.n(e);r.a},"771d":function(t,n,i){},"793d":function(t,n,i){"use strict";var e=i("80df"),r=i.n(e);r.a},"80df":function(t,n,i){},af54:function(t,n,i){"use strict";var e=i("e86b"),r=i.n(e);r.a},b206:function(t,n,i){t.exports=i.p+"img/line-messenger.62e83cd7.svg"},bfef:function(t,n,i){"use strict";var e=i("4ded"),r=i.n(e);r.a},c0b5:function(t,n,i){},c69f:function(t,n,i){},cacc:function(t,n,i){},d54e:function(t,n,i){"use strict";var e=i("cacc"),r=i.n(e);r.a},e332:function(t,n,i){},e684:function(t,n,i){"use strict";i.r(n);var e=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"about"},[i("el-carousel",{attrs:{interval:3e3,arrow:"always",height:"60vh"}},t._l(t.bannerImg,(function(t,n){return i("el-carousel-item",{key:t},[i("img",{attrs:{src:t}})])})),1)],1)},r=[],s=i("5f38"),o={name:"about",data:function(){return{bannerImg:s["l"]}}},c=o,u=(i("e791"),i("2877")),a=Object(u["a"])(c,e,r,!1,null,"0975e62e",null);n["default"]=a.exports},e791:function(t,n,i){"use strict";var e=i("771d"),r=i.n(e);r.a},e86b:function(t,n,i){},fc51:function(t,n,i){"use strict";var e=i("c0b5"),r=i.n(e);r.a}});
//# sourceMappingURL=app.db68b26c.js.map