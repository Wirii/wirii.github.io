(function(t){function e(e){for(var n,r,s=e[0],c=e[1],l=e[2],u=0,f=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&f.push(o[r][0]),o[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);p&&p(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,r=1;r<a.length;r++){var s=a[r];0!==o[s]&&(n=!1)}n&&(i.splice(e--,1),t=c(c.s=a[0]))}return t}var n={},r={app:0},o={app:0},i=[];function s(t){return c.p+"js/"+({contact:"contact",portfolio:"portfolio"}[t]||t)+"."+{contact:"28a5042e",portfolio:"ed22c681"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={contact:1,portfolio:1};r[t]?e.push(r[t]):0!==r[t]&&a[t]&&e.push(r[t]=new Promise((function(e,a){for(var n="css/"+({contact:"contact",portfolio:"portfolio"}[t]||t)+"."+{contact:"ff04fb11",portfolio:"2fd896c2"}[t]+".css",o=c.p+n,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var l=i[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===o))return e()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){l=f[s],u=l.getAttribute("data-href");if(u===n||u===o)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var n=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete r[t],p.parentNode.removeChild(p),a(i)},p.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){r[t]=0})));var n=o[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise((function(e,a){n=o[t]=[e,a]}));e.push(n[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(t);var f=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(p);var a=o[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+n+": "+r+")",f.name="ChunkLoadError",f.type=n,f.request=r,a[1](f)}o[t]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(a,n,function(e){return t[e]}.bind(null,n));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var f=0;f<l.length;f++)e(l[f]);var p=u;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0c33":function(t,e,a){"use strict";var n=a("4ac7"),r=a.n(n);r.a},3788:function(t,e,a){"use strict";var n=a("4ee8"),r=a.n(n);r.a},"4ac7":function(t,e,a){},"4ee8":function(t,e,a){},5310:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Nav"),a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("router-view")],1),a("Footer")],1)},o=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"nav-section"},[a("router-link",{staticClass:"link",attrs:{to:"/"}},[t._v("O mnie")]),a("router-link",{staticClass:"link",attrs:{to:"/portfolio"}},[t._v("Portfolio")]),a("router-link",{staticClass:"link",attrs:{to:"/kontakt"}},[t._v("Kontakt")])],1)},s=[],c={},l=c,u=(a("3788"),a("2877")),f=Object(u["a"])(l,i,s,!1,null,"55acae1a",null),p=f.exports,d=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},m=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",[a("p",[t._v("© Wirii 2020")])])}],v={},h=v,y=(a("ebf2"),Object(u["a"])(h,d,m,!1,null,"69f27fee",null)),_=y.exports,k={components:{Nav:p,Footer:_},computed:{pageTitle:function(){return this.$route.name}}},g=k,w=(a("cf25"),Object(u["a"])(g,r,o,!1,null,null,null)),b=w.exports,C=a("8c4f"),j=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},z=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("header",{staticClass:"introduction"},[n("div",{staticClass:"name-gif-wrapper"},[n("div",{staticClass:"name"},[n("h1",{staticClass:"animate__animated animate__slideInLeft"},[t._v("Weronika"),n("br"),t._v("Rycerz")]),n("h2",{staticClass:"animate__animated animate__fadeInLeft animate__delay-1s"},[t._v("front-end developer")])]),n("div",{staticClass:"gif"},[n("img",{attrs:{src:a("8450"),alt:"delete gif"}})])]),n("div",{staticClass:"arrow"},[n("a",{attrs:{href:"#arrow-scroll"}},[n("i",{staticClass:"fas fa-angle-double-down animate__animated animate__bounce animate__infinite"})])])]),n("div",{attrs:{id:"arrow-scroll"}}),n("div",{staticClass:"about-me"},[n("img",{attrs:{src:a("7f00"),alt:"me"}}),n("p",[t._v("Jestem początkującą twórczynią stron internetowych pochodzącą z przedmieść Poznania. W 2019 roku ukończyłam studia inżynierskie na kierunku Informatyka, ze specjalizacją w technologiach internetowych i informacyjnych na Uniwersytecie im. Adama Mickiewicza.")]),n("p",[t._v("Swoją przygodę z tworzeniem stron internetowych zaczęłam od nauki Wordpress, z czasem jednak postanowiłam budować je od podstaw. Początkowo tylko przy pomocy HTML5 i CSS3, aby po kilku interetowych kursach spróbować swoich sił w JavaScript i frameworku Vue.js.")]),n("p",[t._v("Oprócz technologii front-end, posiadam również wyniesioną ze studiów wiedzę o programowaniu w jezyku Python, którą wykorzystuję do nauki frameworka Django. Niektóre z umiejętności, które posiadam to:")]),n("div",{staticClass:"skills"},[n("div",{staticClass:"skill-col"},[n("div",{staticClass:"skill"},[n("i",{staticClass:"fab fa-html5"}),n("p",[t._v("HTML5")])]),n("div",{staticClass:"skill"},[n("i",{staticClass:"fab fa-css3-alt"}),n("p",[t._v("CSS3")])]),n("div",{staticClass:"skill"},[n("i",{staticClass:"fab fa-sass"}),n("p",[t._v("Sass")])]),n("div",{staticClass:"skill"},[n("i",{staticClass:"fab fa-js"}),n("p",[t._v("JavaScript")])])]),n("div",{staticClass:"skill-col"},[n("div",{staticClass:"skill"},[n("i",{staticClass:"fab fa-vuejs"}),n("p",[t._v("Vue.js")])]),n("div",{staticClass:"skill"},[n("i",{staticClass:"fab fa-python"}),n("p",[t._v("Python")])]),n("div",{staticClass:"skill"},[n("i",{staticClass:"fab fa-github"}),n("p",[t._v("GitHub")])]),n("div",{staticClass:"skill"},[n("i",{staticClass:"fab fa-wordpress"}),n("p",[t._v("Wordpress")])])])]),n("p",[t._v("Posiadam certyfikaty z podstaw marketingu internetowego i "),n("a",{attrs:{href:"https://skillshop.exceedlms.com/student/award/55940079"}},[t._v("kwalifikację indywidualną Google Analytics")]),t._v(" wydane przez Google. Potrafię posługiwać się programiami graficznymi GIMP, Blender, Adobe Illustrator, Figma.")])])])}],P={},O=P,S=(a("0c33"),Object(u["a"])(O,j,z,!1,null,"905c81de",null)),E=S.exports;n["a"].use(C["a"]);const x=[{path:"/",name:"About",component:E},{path:"/portfolio",name:"Portfolio",component:function(){return a.e("portfolio").then(a.bind(null,"c9e5"))}},{path:"/kontakt",name:"Contact",component:function(){return a.e("contact").then(a.bind(null,"b8fa"))}}],T=new C["a"]({mode:"history",base:"/",routes:x});var A=T;n["a"].config.productionTip=!1,new n["a"]({router:A,render:function(t){return t(b)}}).$mount("#app")},"7f00":function(t,e,a){t.exports=a.p+"img/ore.fe379cdc.png"},8450:function(t,e,a){t.exports=a.p+"img/delete.19166bcd.gif"},cf25:function(t,e,a){"use strict";var n=a("fea6"),r=a.n(n);r.a},ebf2:function(t,e,a){"use strict";var n=a("5310"),r=a.n(n);r.a},fea6:function(t,e,a){}});
//# sourceMappingURL=app.562d12fa.js.map