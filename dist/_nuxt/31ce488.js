(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{342:function(t,e,r){var content=r(431);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(121).default)("54ddf3ca",content,!0,{sourceMap:!1})},429:function(t,e,r){t.exports=r.p+"img/laptop.d507045.jpg"},430:function(t,e,r){"use strict";r(342)},431:function(t,e,r){var o=r(120)(!1);o.push([t.i,'.wrapper[data-v-1ac2314a]{height:100vh;width:100vw;background-color:#000;opacity:0}h1[data-v-1ac2314a]{position:relative;font-size:5em;margin-left:.6em;color:#fff;font-family:"Montserrat";text-transform:uppercase;opacity:0;transform:translateY(30px);margin-top:1em}.imagewrap[data-v-1ac2314a]{display:flex;flex-direction:row;flex-grow:1;justify-content:space-evenly;align-items:center}img[data-v-1ac2314a]{-o-object-fit:cover;object-fit:cover;margin:1em;height:70vh;width:100%}img[data-v-1ac2314a]:nth-child(3){overflow:hidden;margin-right:1em!important}p[data-v-1ac2314a]{color:#fff;text-transform:uppercase;margin-left:1em}@media screen and (max-width:480px) and (orientation:portrait){.wrapper[data-v-1ac2314a]{overflow-y:scroll}h1[data-v-1ac2314a]{font-size:3em}.imagewrap[data-v-1ac2314a]{justify-content:center;align-items:center;flex-direction:column}img[data-v-1ac2314a]{width:80%}}',""]),t.exports=o},441:function(t,e,r){"use strict";r.r(e);var o=r(40),n=r(429),c=r.n(n),l={name:"WorkPage",layout:"default",data:function(){return{projects:[{image:{url:c.a},title:"DUDE Project"},{image:{url:c.a},title:"Circuit Project"},{image:{url:c.a},title:"Code Project"}]}},mounted:function(){o.a.to(".wrapper",{opacity:1,duration:1.5,ease:"power2.in"}),o.a.to("h1",{opacity:1,duration:1.5,delay:.3,y:0,ease:"power2.in"}),o.a.to(this.$refs.projects,{opacity:1,duration:1.5,stagger:.1,x:0,ease:"power2.in"})}},d=(r(430),r(15)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"wrapper",attrs:{"data-color":"rgb(0, 0, 0)"}},[r("h1",[t._v("\n    My Work\n  ")]),t._v(" "),r("div",{staticClass:"imagewrap"},t._l(t.projects,(function(e){return r("div",{key:e.id,ref:"projects",refInFor:!0,staticStyle:{transform:"translateX(30px)"}},[r("img",{attrs:{src:e.image.url,alt:"laptop"}}),t._v(" "),r("p",[t._v(t._s(e.title))])])})),0)])}),[],!1,null,"1ac2314a",null);e.default=component.exports}}]);