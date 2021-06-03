(window.webpackJsonp=window.webpackJsonp||[]).push([[6,2],{210:function(t,e,o){"use strict";o.r(e);var l=o(16),component=Object(l.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("transition",{attrs:{name:"modal"}},[o("div",{staticClass:"modal-mask fixed z-50 top-0 left-0 w-full h-full bg-black bg-opacity-80 table transition duration-300 ease"},[o("div",{staticClass:"modal-wrapper table-cell align-middle"},[o("div",{staticClass:"modal-container w-3/4 md:w-2/5 mx-auto px-12 py-6 bg-pinkish border-2 shadow-md transition duration-300 ease font-archivo flex flex-col justify-center items-center"},[o("div",{staticClass:"modal-header"},[t._t("header",[t._v("\n            default title\n          ")])],2),t._v(" "),o("div",{staticClass:"modal-body text-center"},[t._t("body",[t._v("\n            default body\n          ")])],2),t._v(" "),o("div",{staticClass:"modal-footer"},[t._t("footer",[t._v("\n            default footer\n          ")])],2),t._v(" "),o("button",{staticClass:"modal-default-button text-md font-archivo font-bold text-darkestBlue bg-textBlue px-4 py-2 my-3 hover:text-textBlue hover:bg-darkestBlue transition duration-300 ease-linear rounded-sm",on:{click:function(e){return t.$emit("close")}}},[t._v("\n          Zamknij\n        ")])])])])])}),[],!1,null,null,null);e.default=component.exports},215:function(t,e,o){t.exports=o.p+"img/birdie.0cf5294.jpg"},216:function(t,e,o){t.exports=o.p+"img/mountains.9e0b5a5.jpg"},217:function(t,e,o){t.exports=o.p+"img/cars.8076b48.jpg"},218:function(t,e,o){t.exports=o.p+"img/sns.ad95cb7.jpg"},219:function(t,e,o){t.exports=o.p+"img/smileco.3409931.png"},220:function(t,e,o){t.exports=o.p+"img/water.069e944.png"},221:function(t,e,o){t.exports=o.p+"img/pokeguess.2baaae8.png"},224:function(t,e,o){"use strict";o.r(e);var l={components:{Modal:o(210).default},head:{title:"Portfolio - Weronika Rycerz"},data:function(){return{title:"",imgUrl:"",url:"",techs:"",udemy:"",showModal:!1,worksList:[{title:"Photobirdie",url:o(215),alt:"photobirdie cover",link:"https://wirii.github.io/photobirdie",udemy:!0,icons:["fab fa-html5","fab fa-css3-alt","fab fa-js"]},{title:"Heaven Mountains",url:o(216),alt:"heaven mountains cover",link:"https://wirii.github.io/heaven-mountains",udemy:!0,icons:["fab fa-html5","fab fa-css3-alt","fab fa-js"]},{title:"Heaven Cars",url:o(217),alt:"heaven cars cover",link:"https://wirii.github.io/heaven-cars",udemy:!0,icons:["fab fa-html5","fab fa-css3-alt","fab fa-js"]},{title:"Sweet&Salty",url:o(218),alt:"sweet and salty cover",link:"https://wirii.github.io/sweet-and-salty",udemy:!1,icons:["fab fa-html5","fab fa-css3-alt"]},{title:"Smile Company",url:o(219),alt:"smile company cover",link:"https://smile-company.infinityfreeapp.com/",udemy:!1,icons:["fab fa-wordpress"]},{title:"Relaxing Waters",url:o(220),alt:"relaxing waters cover",link:"https://water-is-wet.infinityfreeapp.com/",udemy:!1,icons:["fab fa-wordpress"]},{title:"PokeGuess",url:o(221),alt:"pokeguess cover",link:"https://poke-guess.netlify.app/",udemy:!1,icons:["fab fa-html5","fab fa-css3-alt","fab fa-js"]}]}}},n=o(16),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container block md:flex flex-col justify-center items-center w-screen h-full md:h-screen mx-auto"},[t._m(0),t._v(" "),o("div",{staticClass:"container flex justify-center items-stretch w-10/12 m-1 flex-wrap mt-20 mx-auto"},[t._l(t.worksList,(function(e){return o("div",{key:e.link,staticClass:"container flex flex-col justify-center items-center w-3/4 md:w-2/5 lg:w-1/3 xl:w-1/4 my-3 mx-3 px-3 bg-secondBlue bg-opacity-30 transform hover:scale-105 transition ease-linear duration-300 shadow-xl rounded-sm"},[o("h4",{staticClass:"text-3xl text-pinkish mx-1 my-3 text-center font-archivo font-bold"},[t._v(t._s(e.title))]),t._v(" "),o("img",{staticClass:"mb-4 cursor-pointer w-80 h-48 object-cover border-4 border-nicePurple rounded-sm",attrs:{src:e.url,alt:e.alt,id:"show-modal"},on:{click:function(o){t.showModal=!0,t.title=e.title,t.imgUrl=e.url,t.techs=e.icons,t.udemy=e.udemy,t.link=e.link}}})])})),t._v(" "),t.showModal?o("modal",{staticClass:"modal flex flex-col",on:{close:function(e){t.showModal=!1}}},[o("h4",{staticClass:"text-3xl md:text-5xl text-niceBlue mx-auto my-3 text-center font-archivo font-bold",attrs:{slot:"header"},slot:"header"},[t._v(t._s(t.title))]),t._v(" "),t.udemy?o("p",{staticClass:"text-xs text-darkestBlue mx-auto my-3 text-center font-archivo font-semibold",attrs:{slot:"header"},slot:"header"},[o("a",{attrs:{href:"https://www.udemy.com/course/seven-to-heaven-html5-css3-and-jquery-course/"}},[t._v("część kursu na platformie Udemy")])]):t._e(),t._v(" "),o("a",{attrs:{slot:"body",href:t.link,target:"_blank"},slot:"body"},[o("img",{staticClass:"w-96 my-5 border-2 border-nicePurple object-cover rounded-sm",attrs:{src:t.imgUrl}})]),t._v(" "),t._l(t.techs,(function(t){return o("i",{key:t.id,staticClass:"text-4xl mx-2 mt-1 mb-3 text-darkestBlue",class:t,attrs:{slot:"body"},slot:"body"})})),t._v(" "),o("a",{staticClass:"text-lg text-nicePurple mx-auto mt-5 mb-8 text-center font-archivo font-bold transform duration-300 hover:scale-110 hover:text-secondBlue",attrs:{slot:"footer",href:t.link,target:"_blank"},slot:"footer"},[t._v("Odwiedź stronę")])],2):t._e()],2)])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container flex justify-center items-center md:mt-96"},[o("h1",{staticClass:"text-4xl md:text-5xl lg:text-6xl font-archivo md:mx-24 text-pinkish font-bold mt-28 xl:mt-52 md:pt-44 xl:pt-0"},[t._v("Portfolio")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Modal:o(210).default})}}]);