(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(19)},17:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(7),i=n.n(a),o=n(9),r=n.n(o),s=(n(17),n(0)),c=n(5),d=n(2),h=n(1),u=n(3),l=n(6),m=n(4),p=n(10),b=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={},n.start=n.start.bind(Object(l.a)(Object(l.a)(n))),n.stop=n.stop.bind(Object(l.a)(Object(l.a)(n))),n.animate=n.animate.bind(Object(l.a)(Object(l.a)(n))),n.renderScene=n.renderScene.bind(Object(l.a)(Object(l.a)(n))),n.computeBoundingBox=n.computeBoundingBox.bind(Object(l.a)(Object(l.a)(n))),n.setupScene=n.setupScene.bind(Object(l.a)(Object(l.a)(n))),n.destroyContext=n.destroyContext.bind(Object(l.a)(Object(l.a)(n))),n.handleWindowResize=n.handleWindowResize.bind(Object(l.a)(Object(l.a)(n))),n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){window.addEventListener("resize",this.handleWindowResize)}},{key:"componentDidMount",value:function(){this.setupScene()}},{key:"setupScene",value:function(){this.width=this.container.clientWidth,this.height=this.container.clientHeight;var e=new m.t({antialias:!0});e.setPixelRatio(window.devicePixelRatio),e.shadowMap.enabled=!0,e.gammaOutput=!0,e.gammaFactor=2.2,e.shadowMap.type=m.i;var t=new m.l;t.background=new m.c("black");var n=new m.j(60,this.width/this.height,.25,1e3);t.add(n);var a=new m.m(50,300,300),i=new m.h({map:(new m.q).load("/Assets/2_no_clouds_4k.jpg"),bumpMap:(new m.q).load("/Assets/elev_bump_4k.jpg"),bumpScale:.005,specularMap:m.e.loadTexture("/Assets/water_4k.png"),specular:new m.c("grey")}),o=new m.g(a,i);t.add(o),a=new m.m(50.1,300,300),i=new m.h({map:(new m.q).load("/Assets/fair_clouds_4k.png"),transparent:!0}),o=new m.g(a,i),t.add(o),this.renderer=e,this.scene=t,this.camera=n,this.object=o;var r=new m.o(16777215,.25);r.position.set(45,50,15),n.add(r),this.spotLight=r;var s=new m.a(3355443);s.position.set(5,3,5),this.camera.add(s),this.computeBoundingBox()}},{key:"computeBoundingBox",value:function(){var e=new m.b;e.setFromObject(this.object);var t=e.getCenter(),n=e.getSize(),a=Math.max(n.x,n.y,n.z),i=this.camera.fov*(Math.PI/180),o=a/2/Math.tan(i/2);o*=1.6,this.camera.position.z=t.z+o;var r=e.min.z,s=r<0?-r+o:o-r;this.camera.far=3*s,this.camera.lookAt(t),this.camera.updateProjectionMatrix();var c=new p.a(this.camera,this.renderer.domElement);c.enableDamping=!0,c.dampingFactor=.25,c.enableZoom=!0,c.zoomSpeed=.1,c.enableKeys=!1,c.screenSpacePanning=!1,c.enableRotate=!0,c.autoRotate=!0,c.dampingFactor=1,c.autoRotateSpeed=1.2,c.enablePan=!1,c.target.set(t.x,t.y,t.z),c.update(),this.controls=c,this.renderer.setSize(this.width,this.height),this.container.appendChild(this.renderer.domElement),this.start()}},{key:"start",value:function(){this.frameId||(this.frameId=requestAnimationFrame(this.animate))}},{key:"renderScene",value:function(){this.renderer.render(this.scene,this.camera)}},{key:"animate",value:function(){this.frameId=requestAnimationFrame(this.animate),this.controls.update(),this.renderScene()}},{key:"stop",value:function(){cancelAnimationFrame(this.frameId)}},{key:"handleWindowResize",value:function(){var e=window.innerWidth,t=window.innerHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix()}},{key:"componentWillUnmount",value:function(){this.stop(),this.destroyContext()}},{key:"destroyContext",value:function(){this.container.removeChild(this.renderer.domElement),this.renderer.forceContextLoss(),this.renderer.context=null,this.renderer.domElement=null,this.renderer=null}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{ref:function(t){e.container=t},style:{width:"100%",height:"100%",position:"absolute",overflow:"hidden"}})}}]),t}(a.Component),w=function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(b,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,2,1]]]);
//# sourceMappingURL=main.dafd5ee5.chunk.js.map