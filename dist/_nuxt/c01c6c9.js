(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{340:function(n,e,t){var content=t(426);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,t(121).default)("ab71215a",content,!0,{sourceMap:!1})},419:function(n,e,t){n.exports=t.p+"img/px.a534119.png"},420:function(n,e,t){n.exports=t.p+"img/py.71ef5c5.png"},421:function(n,e,t){n.exports=t.p+"img/pz.3f5599d.png"},422:function(n,e,t){n.exports=t.p+"img/nx.cff46b2.png"},423:function(n,e,t){n.exports=t.p+"img/ny.ee1cbdb.png"},424:function(n,e,t){n.exports=t.p+"img/nz.2ff572a.png"},425:function(n,e,t){"use strict";t(340)},426:function(n,e,t){var o=t(120)(!1);o.push([n.i,'canvas[data-v-3895e084]{display:block;outline:none;cursor:pointer}.wrapper[data-v-3895e084]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);text-align:center;color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center}h1[data-v-3895e084]{font-size:1.5em;font-family:"Montserrat";text-transform:uppercase;color:#9d9797;will-change:transform}.button--container[data-v-3895e084]{display:flex;justify-content:center;align-items:center;position:relative;width:200px;height:200px}button[data-v-3895e084]{color:#fff;background:#00f;width:130px;height:20px}button[data-v-3895e084]:hover{color:#00f;background:#fff}.title[data-v-3895e084]{width:100px;position:absolute;top:20px;color:#39ed39;border-radius:25px;border:2px solid red}',""]),n.exports=o},439:function(n,e,t){"use strict";t.r(e);var o=t(305),r=t(306),c=t(419),l=t.n(c),d=t(420),f=t.n(d),v=t(421),m=t.n(v),w=t(422),x=t.n(w),h=t(423),y=t.n(h),k=t(424),_=t.n(k),z={name:"About",layout:"default",mounted:function(){var n=new o.s,e=new o.s,t=new o.m(70,innerWidth/innerHeight,.1,1e3),c=new o.z({canvas:this.$refs.canvas2,antialias:!0});t.position.z=50,c.setSize(innerWidth,innerHeight),c.setPixelRatio(Math.min(window.devicePixelRatio,2)),new r.a(t,c.domElement);var d=new o.w,v=d.load(l.a),w=d.load(m.a),h=d.load(f.a),k=d.load(x.a),z=d.load(y.a),P=d.load(_.a),j=new o.a(30,30,30),M=[new o.k({map:v}),new o.k({map:w}),new o.k({map:h}),new o.k({map:k}),new o.k({map:z}),new o.k({map:P})],U=new o.j(j,M);n.add(U);var E=new o.t({side:o.e,vertexShader:"uniform float time;\n      varying vec2 vUv;\n      varying vec3 vPosition;\n      uniform vec2 pixels;\n      float PI = 3.141592653589793238;\n        void main() {\n          vUv = uv;\n          gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n      }",fragmentShader:"uniform float time;\n      uniform float progress;\n      uniform sampler2D texture1;\n      uniform vec4 resolution;\n      varying vec2 vUv;\n      varying vec3 vPosition;\n      float PI = 3.141592653589793238;\n        void main(){\n          //vec2 newUV = (vUv - vec2(0.5))*resolution.zw + vec2(0.5);\n          gl_FragColor = vec4(vUv,0.0,1.);\n      }"}),H=new o.n(100,100,100,100),W=new o.j(H,E);e.add(W);var S={x:void 0,y:void 0};!function animate(){requestAnimationFrame(animate),c.render(e,t),W.rotation.x+=.005,U.rotation.y+=.01}(),addEventListener("mousemove",(function(n){S.x=n.clientX/innerWidth*2-1,S.y=-n.clientY/innerHeight*2+1})),addEventListener("resize",(function(){t.aspect=innerWidth/innerHeight,t.updateProjectionMatrix(),c.setSize(innerWidth,innerHeight)}))}},P=(t(425),t(15)),component=Object(P.a)(z,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{"data-color":"rgb(57, 237, 57)"}},[t("canvas",{ref:"canvas2"}),n._v(" "),n._m(0)])}),[function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"wrapper"},[t("h1",[n._v("\n      About\n    ")])])}],!1,null,"3895e084",null);e.default=component.exports}}]);