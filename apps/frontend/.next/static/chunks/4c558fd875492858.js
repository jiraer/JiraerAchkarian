(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,25390,e=>{"use strict";let t,r,n,a;var i,o,s,l,u=e.i(43476),f=e.i(71645),c=e.i(75056),d=e.i(71753),h=e.i(31067),p=e.i(15080),v=e.i(90072),m=Object.defineProperty;class g{constructor(){((e,t,r)=>{let n;return(n="symbol"!=typeof t?t+"":t)in e?m(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r})(this,"_listeners")}addEventListener(e,t){void 0===this._listeners&&(this._listeners={});let r=this._listeners;void 0===r[e]&&(r[e]=[]),-1===r[e].indexOf(t)&&r[e].push(t)}hasEventListener(e,t){if(void 0===this._listeners)return!1;let r=this._listeners;return void 0!==r[e]&&-1!==r[e].indexOf(t)}removeEventListener(e,t){if(void 0===this._listeners)return;let r=this._listeners[e];if(void 0!==r){let e=r.indexOf(t);-1!==e&&r.splice(e,1)}}dispatchEvent(e){if(void 0===this._listeners)return;let t=this._listeners[e.type];if(void 0!==t){e.target=this;let r=t.slice(0);for(let t=0,n=r.length;t<n;t++)r[t].call(this,e);e.target=null}}}var y=Object.defineProperty,b=(e,t,r)=>{let n;return(n="symbol"!=typeof t?t+"":t)in e?y(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,r};let x=new v.Ray,S=new v.Plane,w=Math.cos(Math.PI/180*70),U=(e,t)=>(e%t+t)%t;class T extends g{constructor(e,t){super(),b(this,"object"),b(this,"domElement"),b(this,"enabled",!0),b(this,"target",new v.Vector3),b(this,"minDistance",0),b(this,"maxDistance",1/0),b(this,"minZoom",0),b(this,"maxZoom",1/0),b(this,"minPolarAngle",0),b(this,"maxPolarAngle",Math.PI),b(this,"minAzimuthAngle",-1/0),b(this,"maxAzimuthAngle",1/0),b(this,"enableDamping",!1),b(this,"dampingFactor",.05),b(this,"enableZoom",!0),b(this,"zoomSpeed",1),b(this,"enableRotate",!0),b(this,"rotateSpeed",1),b(this,"enablePan",!0),b(this,"panSpeed",1),b(this,"screenSpacePanning",!0),b(this,"keyPanSpeed",7),b(this,"zoomToCursor",!1),b(this,"autoRotate",!1),b(this,"autoRotateSpeed",2),b(this,"reverseOrbit",!1),b(this,"reverseHorizontalOrbit",!1),b(this,"reverseVerticalOrbit",!1),b(this,"keys",{LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"}),b(this,"mouseButtons",{LEFT:v.MOUSE.ROTATE,MIDDLE:v.MOUSE.DOLLY,RIGHT:v.MOUSE.PAN}),b(this,"touches",{ONE:v.TOUCH.ROTATE,TWO:v.TOUCH.DOLLY_PAN}),b(this,"target0"),b(this,"position0"),b(this,"zoom0"),b(this,"_domElementKeyEvents",null),b(this,"getPolarAngle"),b(this,"getAzimuthalAngle"),b(this,"setPolarAngle"),b(this,"setAzimuthalAngle"),b(this,"getDistance"),b(this,"getZoomScale"),b(this,"listenToKeyEvents"),b(this,"stopListenToKeyEvents"),b(this,"saveState"),b(this,"reset"),b(this,"update"),b(this,"connect"),b(this,"dispose"),b(this,"dollyIn"),b(this,"dollyOut"),b(this,"getScale"),b(this,"setScale"),this.object=e,this.domElement=t,this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.getPolarAngle=()=>u.phi,this.getAzimuthalAngle=()=>u.theta,this.setPolarAngle=e=>{let t=U(e,2*Math.PI),n=u.phi;n<0&&(n+=2*Math.PI),t<0&&(t+=2*Math.PI);let a=Math.abs(t-n);2*Math.PI-a<a&&(t<n?t+=2*Math.PI:n+=2*Math.PI),f.phi=t-n,r.update()},this.setAzimuthalAngle=e=>{let t=U(e,2*Math.PI),n=u.theta;n<0&&(n+=2*Math.PI),t<0&&(t+=2*Math.PI);let a=Math.abs(t-n);2*Math.PI-a<a&&(t<n?t+=2*Math.PI:n+=2*Math.PI),f.theta=t-n,r.update()},this.getDistance=()=>r.object.position.distanceTo(r.target),this.listenToKeyEvents=e=>{e.addEventListener("keydown",ee),this._domElementKeyEvents=e},this.stopListenToKeyEvents=()=>{this._domElementKeyEvents.removeEventListener("keydown",ee),this._domElementKeyEvents=null},this.saveState=()=>{r.target0.copy(r.target),r.position0.copy(r.object.position),r.zoom0=r.object.zoom},this.reset=()=>{r.target.copy(r.target0),r.object.position.copy(r.position0),r.object.zoom=r.zoom0,r.object.updateProjectionMatrix(),r.dispatchEvent(n),r.update(),s=o.NONE},this.update=(()=>{let t=new v.Vector3,a=new v.Vector3(0,1,0),i=new v.Quaternion().setFromUnitVectors(e.up,a),h=i.clone().invert(),p=new v.Vector3,m=new v.Quaternion,g=2*Math.PI;return function(){let y=r.object.position;i.setFromUnitVectors(e.up,a),h.copy(i).invert(),t.copy(y).sub(r.target),t.applyQuaternion(i),u.setFromVector3(t),r.autoRotate&&s===o.NONE&&P(2*Math.PI/60/60*r.autoRotateSpeed),r.enableDamping?(u.theta+=f.theta*r.dampingFactor,u.phi+=f.phi*r.dampingFactor):(u.theta+=f.theta,u.phi+=f.phi);let b=r.minAzimuthAngle,U=r.maxAzimuthAngle;isFinite(b)&&isFinite(U)&&(b<-Math.PI?b+=g:b>Math.PI&&(b-=g),U<-Math.PI?U+=g:U>Math.PI&&(U-=g),b<=U?u.theta=Math.max(b,Math.min(U,u.theta)):u.theta=u.theta>(b+U)/2?Math.max(b,u.theta):Math.min(U,u.theta)),u.phi=Math.max(r.minPolarAngle,Math.min(r.maxPolarAngle,u.phi)),u.makeSafe(),!0===r.enableDamping?r.target.addScaledVector(d,r.dampingFactor):r.target.add(d),r.zoomToCursor&&A||r.object.isOrthographicCamera?u.radius=z(u.radius):u.radius=z(u.radius*c),t.setFromSpherical(u),t.applyQuaternion(h),y.copy(r.target).add(t),r.object.matrixAutoUpdate||r.object.updateMatrix(),r.object.lookAt(r.target),!0===r.enableDamping?(f.theta*=1-r.dampingFactor,f.phi*=1-r.dampingFactor,d.multiplyScalar(1-r.dampingFactor)):(f.set(0,0,0),d.set(0,0,0));let T=!1;if(r.zoomToCursor&&A){let n=null;if(r.object instanceof v.PerspectiveCamera&&r.object.isPerspectiveCamera){let e=t.length();n=z(e*c);let a=e-n;r.object.position.addScaledVector(E,a),r.object.updateMatrixWorld()}else if(r.object.isOrthographicCamera){let e=new v.Vector3(C.x,C.y,0);e.unproject(r.object),r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom/c)),r.object.updateProjectionMatrix(),T=!0;let a=new v.Vector3(C.x,C.y,0);a.unproject(r.object),r.object.position.sub(a).add(e),r.object.updateMatrixWorld(),n=t.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),r.zoomToCursor=!1;null!==n&&(r.screenSpacePanning?r.target.set(0,0,-1).transformDirection(r.object.matrix).multiplyScalar(n).add(r.object.position):(x.origin.copy(r.object.position),x.direction.set(0,0,-1).transformDirection(r.object.matrix),Math.abs(r.object.up.dot(x.direction))<w?e.lookAt(r.target):(S.setFromNormalAndCoplanarPoint(r.object.up,r.target),x.intersectPlane(S,r.target))))}else r.object instanceof v.OrthographicCamera&&r.object.isOrthographicCamera&&(T=1!==c)&&(r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom/c)),r.object.updateProjectionMatrix());return c=1,A=!1,!!(T||p.distanceToSquared(r.object.position)>l||8*(1-m.dot(r.object.quaternion))>l)&&(r.dispatchEvent(n),p.copy(r.object.position),m.copy(r.object.quaternion),T=!1,!0)}})(),this.connect=e=>{r.domElement=e,r.domElement.style.touchAction="none",r.domElement.addEventListener("contextmenu",et),r.domElement.addEventListener("pointerdown",Z),r.domElement.addEventListener("pointercancel",Q),r.domElement.addEventListener("wheel",J)},this.dispose=()=>{var e,t,n,a,i,o;r.domElement&&(r.domElement.style.touchAction="auto"),null==(e=r.domElement)||e.removeEventListener("contextmenu",et),null==(t=r.domElement)||t.removeEventListener("pointerdown",Z),null==(n=r.domElement)||n.removeEventListener("pointercancel",Q),null==(a=r.domElement)||a.removeEventListener("wheel",J),null==(i=r.domElement)||i.ownerDocument.removeEventListener("pointermove",K),null==(o=r.domElement)||o.ownerDocument.removeEventListener("pointerup",Q),null!==r._domElementKeyEvents&&r._domElementKeyEvents.removeEventListener("keydown",ee)};const r=this,n={type:"change"},a={type:"start"},i={type:"end"},o={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=o.NONE;const l=1e-6,u=new v.Spherical,f=new v.Spherical;let c=1;const d=new v.Vector3,h=new v.Vector2,p=new v.Vector2,m=new v.Vector2,g=new v.Vector2,y=new v.Vector2,T=new v.Vector2,_=new v.Vector2,k=new v.Vector2,M=new v.Vector2,E=new v.Vector3,C=new v.Vector2;let A=!1;const D=[],F={};function O(){return Math.pow(.95,r.zoomSpeed)}function P(e){r.reverseOrbit||r.reverseHorizontalOrbit?f.theta+=e:f.theta-=e}function I(e){r.reverseOrbit||r.reverseVerticalOrbit?f.phi+=e:f.phi-=e}const R=(()=>{let e=new v.Vector3;return function(t,r){e.setFromMatrixColumn(r,0),e.multiplyScalar(-t),d.add(e)}})(),L=(()=>{let e=new v.Vector3;return function(t,n){!0===r.screenSpacePanning?e.setFromMatrixColumn(n,1):(e.setFromMatrixColumn(n,0),e.crossVectors(r.object.up,e)),e.multiplyScalar(t),d.add(e)}})(),B=(()=>{let e=new v.Vector3;return function(t,n){let a=r.domElement;if(a&&r.object instanceof v.PerspectiveCamera&&r.object.isPerspectiveCamera){let i=r.object.position;e.copy(i).sub(r.target);let o=e.length();R(2*t*(o*=Math.tan(r.object.fov/2*Math.PI/180))/a.clientHeight,r.object.matrix),L(2*n*o/a.clientHeight,r.object.matrix)}else a&&r.object instanceof v.OrthographicCamera&&r.object.isOrthographicCamera?(R(t*(r.object.right-r.object.left)/r.object.zoom/a.clientWidth,r.object.matrix),L(n*(r.object.top-r.object.bottom)/r.object.zoom/a.clientHeight,r.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),r.enablePan=!1)}})();function G(e){r.object instanceof v.PerspectiveCamera&&r.object.isPerspectiveCamera||r.object instanceof v.OrthographicCamera&&r.object.isOrthographicCamera?c=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),r.enableZoom=!1)}function j(e){if(!r.zoomToCursor||!r.domElement)return;A=!0;let t=r.domElement.getBoundingClientRect(),n=e.clientX-t.left,a=e.clientY-t.top,i=t.width,o=t.height;C.x=n/i*2-1,C.y=-(a/o*2)+1,E.set(C.x,C.y,1).unproject(r.object).sub(r.object.position).normalize()}function z(e){return Math.max(r.minDistance,Math.min(r.maxDistance,e))}function V(e){h.set(e.clientX,e.clientY)}function N(e){g.set(e.clientX,e.clientY)}function W(){if(1==D.length)h.set(D[0].pageX,D[0].pageY);else{let e=.5*(D[0].pageX+D[1].pageX),t=.5*(D[0].pageY+D[1].pageY);h.set(e,t)}}function H(){if(1==D.length)g.set(D[0].pageX,D[0].pageY);else{let e=.5*(D[0].pageX+D[1].pageX),t=.5*(D[0].pageY+D[1].pageY);g.set(e,t)}}function X(){let e=D[0].pageX-D[1].pageX,t=D[0].pageY-D[1].pageY,r=Math.sqrt(e*e+t*t);_.set(0,r)}function Y(e){if(1==D.length)p.set(e.pageX,e.pageY);else{let t=en(e),r=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);p.set(r,n)}m.subVectors(p,h).multiplyScalar(r.rotateSpeed);let t=r.domElement;t&&(P(2*Math.PI*m.x/t.clientHeight),I(2*Math.PI*m.y/t.clientHeight)),h.copy(p)}function q(e){if(1==D.length)y.set(e.pageX,e.pageY);else{let t=en(e),r=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);y.set(r,n)}T.subVectors(y,g).multiplyScalar(r.panSpeed),B(T.x,T.y),g.copy(y)}function $(e){var t;let n=en(e),a=e.pageX-n.x,i=e.pageY-n.y,o=Math.sqrt(a*a+i*i);k.set(0,o),M.set(0,Math.pow(k.y/_.y,r.zoomSpeed)),t=M.y,G(c/t),_.copy(k)}function Z(e){var t,n,i;!1!==r.enabled&&(0===D.length&&(null==(t=r.domElement)||t.ownerDocument.addEventListener("pointermove",K),null==(n=r.domElement)||n.ownerDocument.addEventListener("pointerup",Q)),i=e,D.push(i),"touch"===e.pointerType?function(e){switch(er(e),D.length){case 1:switch(r.touches.ONE){case v.TOUCH.ROTATE:if(!1===r.enableRotate)return;W(),s=o.TOUCH_ROTATE;break;case v.TOUCH.PAN:if(!1===r.enablePan)return;H(),s=o.TOUCH_PAN;break;default:s=o.NONE}break;case 2:switch(r.touches.TWO){case v.TOUCH.DOLLY_PAN:if(!1===r.enableZoom&&!1===r.enablePan)return;r.enableZoom&&X(),r.enablePan&&H(),s=o.TOUCH_DOLLY_PAN;break;case v.TOUCH.DOLLY_ROTATE:if(!1===r.enableZoom&&!1===r.enableRotate)return;r.enableZoom&&X(),r.enableRotate&&W(),s=o.TOUCH_DOLLY_ROTATE;break;default:s=o.NONE}break;default:s=o.NONE}s!==o.NONE&&r.dispatchEvent(a)}(e):function(e){let t;switch(e.button){case 0:t=r.mouseButtons.LEFT;break;case 1:t=r.mouseButtons.MIDDLE;break;case 2:t=r.mouseButtons.RIGHT;break;default:t=-1}switch(t){case v.MOUSE.DOLLY:if(!1===r.enableZoom)return;j(e),_.set(e.clientX,e.clientY),s=o.DOLLY;break;case v.MOUSE.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===r.enablePan)return;N(e),s=o.PAN}else{if(!1===r.enableRotate)return;V(e),s=o.ROTATE}break;case v.MOUSE.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===r.enableRotate)return;V(e),s=o.ROTATE}else{if(!1===r.enablePan)return;N(e),s=o.PAN}break;default:s=o.NONE}s!==o.NONE&&r.dispatchEvent(a)}(e))}function K(e){!1!==r.enabled&&("touch"===e.pointerType?function(e){switch(er(e),s){case o.TOUCH_ROTATE:if(!1===r.enableRotate)return;Y(e),r.update();break;case o.TOUCH_PAN:if(!1===r.enablePan)return;q(e),r.update();break;case o.TOUCH_DOLLY_PAN:if(!1===r.enableZoom&&!1===r.enablePan)return;r.enableZoom&&$(e),r.enablePan&&q(e),r.update();break;case o.TOUCH_DOLLY_ROTATE:if(!1===r.enableZoom&&!1===r.enableRotate)return;r.enableZoom&&$(e),r.enableRotate&&Y(e),r.update();break;default:s=o.NONE}}(e):function(e){if(!1!==r.enabled)switch(s){case o.ROTATE:let t;if(!1===r.enableRotate)return;p.set(e.clientX,e.clientY),m.subVectors(p,h).multiplyScalar(r.rotateSpeed),(t=r.domElement)&&(P(2*Math.PI*m.x/t.clientHeight),I(2*Math.PI*m.y/t.clientHeight)),h.copy(p),r.update();break;case o.DOLLY:var n,a;if(!1===r.enableZoom)return;(k.set(e.clientX,e.clientY),M.subVectors(k,_),M.y>0)?(n=O(),G(c/n)):M.y<0&&(a=O(),G(c*a)),_.copy(k),r.update();break;case o.PAN:if(!1===r.enablePan)return;y.set(e.clientX,e.clientY),T.subVectors(y,g).multiplyScalar(r.panSpeed),B(T.x,T.y),g.copy(y),r.update()}}(e))}function Q(e){var t,n,a;(function(e){delete F[e.pointerId];for(let t=0;t<D.length;t++)if(D[t].pointerId==e.pointerId)return void D.splice(t,1)})(e),0===D.length&&(null==(t=r.domElement)||t.releasePointerCapture(e.pointerId),null==(n=r.domElement)||n.ownerDocument.removeEventListener("pointermove",K),null==(a=r.domElement)||a.ownerDocument.removeEventListener("pointerup",Q)),r.dispatchEvent(i),s=o.NONE}function J(e){if(!1!==r.enabled&&!1!==r.enableZoom&&(s===o.NONE||s===o.ROTATE)){var t,n;e.preventDefault(),r.dispatchEvent(a),(j(e),e.deltaY<0)?(t=O(),G(c*t)):e.deltaY>0&&(n=O(),G(c/n)),r.update(),r.dispatchEvent(i)}}function ee(e){if(!1!==r.enabled&&!1!==r.enablePan){let t=!1;switch(e.code){case r.keys.UP:B(0,r.keyPanSpeed),t=!0;break;case r.keys.BOTTOM:B(0,-r.keyPanSpeed),t=!0;break;case r.keys.LEFT:B(r.keyPanSpeed,0),t=!0;break;case r.keys.RIGHT:B(-r.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),r.update())}}function et(e){!1!==r.enabled&&e.preventDefault()}function er(e){let t=F[e.pointerId];void 0===t&&(t=new v.Vector2,F[e.pointerId]=t),t.set(e.pageX,e.pageY)}function en(e){return F[(e.pointerId===D[0].pointerId?D[1]:D[0]).pointerId]}this.dollyIn=(e=O())=>{G(c*e),r.update()},this.dollyOut=(e=O())=>{G(c/e),r.update()},this.getScale=()=>c,this.setScale=e=>{G(e),r.update()},this.getZoomScale=()=>O(),void 0!==t&&this.connect(t),this.update()}}let _=f.forwardRef(({makeDefault:e,camera:t,regress:r,domElement:n,enableDamping:a=!0,keyEvents:i=!1,onChange:o,onStart:s,onEnd:l,...u},c)=>{let v=(0,p.useThree)(e=>e.invalidate),m=(0,p.useThree)(e=>e.camera),g=(0,p.useThree)(e=>e.gl),y=(0,p.useThree)(e=>e.events),b=(0,p.useThree)(e=>e.setEvents),x=(0,p.useThree)(e=>e.set),S=(0,p.useThree)(e=>e.get),w=(0,p.useThree)(e=>e.performance),U=t||m,_=n||y.connected||g.domElement,k=f.useMemo(()=>new T(U),[U]);return(0,d.useFrame)(()=>{k.enabled&&k.update()},-1),f.useEffect(()=>(i&&k.connect(!0===i?_:i),k.connect(_),()=>void k.dispose()),[i,_,r,k,v]),f.useEffect(()=>{let e=e=>{v(),r&&w.regress(),o&&o(e)},t=e=>{s&&s(e)},n=e=>{l&&l(e)};return k.addEventListener("change",e),k.addEventListener("start",t),k.addEventListener("end",n),()=>{k.removeEventListener("start",t),k.removeEventListener("end",n),k.removeEventListener("change",e)}},[o,s,l,k,v,b]),f.useEffect(()=>{if(e){let e=S().controls;return x({controls:k}),()=>x({controls:e})}},[e,k]),f.createElement("primitive",(0,h.default)({ref:c,object:k,enableDamping:a},u))});var k=v,M=v;let E=new M.Box3,C=new M.Vector3;class A extends M.InstancedBufferGeometry{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry",this.setIndex([0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5]),this.setAttribute("position",new M.Float32BufferAttribute([-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],3)),this.setAttribute("uv",new M.Float32BufferAttribute([-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],2))}applyMatrix4(e){let t=this.attributes.instanceStart,r=this.attributes.instanceEnd;return void 0!==t&&(t.applyMatrix4(e),r.applyMatrix4(e),t.needsUpdate=!0),null!==this.boundingBox&&this.computeBoundingBox(),null!==this.boundingSphere&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let r=new M.InstancedInterleavedBuffer(t,6,1);return this.setAttribute("instanceStart",new M.InterleavedBufferAttribute(r,3,0)),this.setAttribute("instanceEnd",new M.InterleavedBufferAttribute(r,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e,t=3){let r;e instanceof Float32Array?r=e:Array.isArray(e)&&(r=new Float32Array(e));let n=new M.InstancedInterleavedBuffer(r,2*t,1);return this.setAttribute("instanceColorStart",new M.InterleavedBufferAttribute(n,t,0)),this.setAttribute("instanceColorEnd",new M.InterleavedBufferAttribute(n,t,t)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new M.WireframeGeometry(e.geometry)),this}fromLineSegments(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){null===this.boundingBox&&(this.boundingBox=new M.Box3);let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;void 0!==e&&void 0!==t&&(this.boundingBox.setFromBufferAttribute(e),E.setFromBufferAttribute(t),this.boundingBox.union(E))}computeBoundingSphere(){null===this.boundingSphere&&(this.boundingSphere=new M.Sphere),null===this.boundingBox&&this.computeBoundingBox();let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(void 0!==e&&void 0!==t){let r=this.boundingSphere.center;this.boundingBox.getCenter(r);let n=0;for(let a=0,i=e.count;a<i;a++)C.fromBufferAttribute(e,a),n=Math.max(n,r.distanceToSquared(C)),C.fromBufferAttribute(t,a),n=Math.max(n,r.distanceToSquared(C));this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}var D=v,F=e.i(8560);let O=parseInt(v.REVISION.replace(/\D+/g,""));class P extends D.ShaderMaterial{constructor(e){super({type:"LineMaterial",uniforms:D.UniformsUtils.clone(D.UniformsUtils.merge([F.UniformsLib.common,F.UniformsLib.fog,{worldUnits:{value:1},linewidth:{value:1},resolution:{value:new D.Vector2(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}}])),vertexShader:`
				#include <common>
				#include <fog_pars_vertex>
				#include <logdepthbuf_pars_vertex>
				#include <clipping_planes_pars_vertex>

				uniform float linewidth;
				uniform vec2 resolution;

				attribute vec3 instanceStart;
				attribute vec3 instanceEnd;

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
						attribute vec4 instanceColorStart;
						attribute vec4 instanceColorEnd;
					#else
						varying vec3 vLineColor;
						attribute vec3 instanceColorStart;
						attribute vec3 instanceColorEnd;
					#endif
				#endif

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#ifdef USE_DASH

					uniform float dashScale;
					attribute float instanceDistanceStart;
					attribute float instanceDistanceEnd;
					varying float vLineDistance;

				#endif

				void trimSegment( const in vec4 start, inout vec4 end ) {

					// trim end segment so it terminates between the camera plane and the near plane

					// conservative estimate of the near plane
					float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
					float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
					float nearEstimate = - 0.5 * b / a;

					float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

					end.xyz = mix( start.xyz, end.xyz, alpha );

				}

				void main() {

					#ifdef USE_COLOR

						vLineColor = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

					#endif

					#ifdef USE_DASH

						vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
						vUv = uv;

					#endif

					float aspect = resolution.x / resolution.y;

					// camera space
					vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
					vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

					#ifdef WORLD_UNITS

						worldStart = start.xyz;
						worldEnd = end.xyz;

					#else

						vUv = uv;

					#endif

					// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
					// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
					// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
					// perhaps there is a more elegant solution -- WestLangley

					bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

					if ( perspective ) {

						if ( start.z < 0.0 && end.z >= 0.0 ) {

							trimSegment( start, end );

						} else if ( end.z < 0.0 && start.z >= 0.0 ) {

							trimSegment( end, start );

						}

					}

					// clip space
					vec4 clipStart = projectionMatrix * start;
					vec4 clipEnd = projectionMatrix * end;

					// ndc space
					vec3 ndcStart = clipStart.xyz / clipStart.w;
					vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

					// direction
					vec2 dir = ndcEnd.xy - ndcStart.xy;

					// account for clip-space aspect ratio
					dir.x *= aspect;
					dir = normalize( dir );

					#ifdef WORLD_UNITS

						// get the offset direction as perpendicular to the view vector
						vec3 worldDir = normalize( end.xyz - start.xyz );
						vec3 offset;
						if ( position.y < 0.5 ) {

							offset = normalize( cross( start.xyz, worldDir ) );

						} else {

							offset = normalize( cross( end.xyz, worldDir ) );

						}

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						float forwardOffset = dot( worldDir, vec3( 0.0, 0.0, 1.0 ) );

						// don't extend the line if we're rendering dashes because we
						// won't be rendering the endcaps
						#ifndef USE_DASH

							// extend the line bounds to encompass  endcaps
							start.xyz += - worldDir * linewidth * 0.5;
							end.xyz += worldDir * linewidth * 0.5;

							// shift the position of the quad so it hugs the forward edge of the line
							offset.xy -= dir * forwardOffset;
							offset.z += 0.5;

						#endif

						// endcaps
						if ( position.y > 1.0 || position.y < 0.0 ) {

							offset.xy += dir * 2.0 * forwardOffset;

						}

						// adjust for linewidth
						offset *= linewidth * 0.5;

						// set the world position
						worldPos = ( position.y < 0.5 ) ? start : end;
						worldPos.xyz += offset;

						// project the worldpos
						vec4 clip = projectionMatrix * worldPos;

						// shift the depth of the projected points so the line
						// segments overlap neatly
						vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
						clip.z = clipPose.z * clip.w;

					#else

						vec2 offset = vec2( dir.y, - dir.x );
						// undo aspect ratio adjustment
						dir.x /= aspect;
						offset.x /= aspect;

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						// endcaps
						if ( position.y < 0.0 ) {

							offset += - dir;

						} else if ( position.y > 1.0 ) {

							offset += dir;

						}

						// adjust for linewidth
						offset *= linewidth;

						// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
						offset /= resolution.y;

						// select end
						vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

						// back to clip space
						offset *= clip.w;

						clip.xy += offset;

					#endif

					gl_Position = clip;

					vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

					#include <logdepthbuf_vertex>
					#include <clipping_planes_vertex>
					#include <fog_vertex>

				}
			`,fragmentShader:`
				uniform vec3 diffuse;
				uniform float opacity;
				uniform float linewidth;

				#ifdef USE_DASH

					uniform float dashOffset;
					uniform float dashSize;
					uniform float gapSize;

				#endif

				varying float vLineDistance;

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#include <common>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <clipping_planes_pars_fragment>

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
					#else
						varying vec3 vLineColor;
					#endif
				#endif

				vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

					float mua;
					float mub;

					vec3 p13 = p1 - p3;
					vec3 p43 = p4 - p3;

					vec3 p21 = p2 - p1;

					float d1343 = dot( p13, p43 );
					float d4321 = dot( p43, p21 );
					float d1321 = dot( p13, p21 );
					float d4343 = dot( p43, p43 );
					float d2121 = dot( p21, p21 );

					float denom = d2121 * d4343 - d4321 * d4321;

					float numer = d1343 * d4321 - d1321 * d4343;

					mua = numer / denom;
					mua = clamp( mua, 0.0, 1.0 );
					mub = ( d1343 + d4321 * ( mua ) ) / d4343;
					mub = clamp( mub, 0.0, 1.0 );

					return vec2( mua, mub );

				}

				void main() {

					#include <clipping_planes_fragment>

					#ifdef USE_DASH

						if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

						if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

					#endif

					float alpha = opacity;

					#ifdef WORLD_UNITS

						// Find the closest points on the view ray and the line segment
						vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
						vec3 lineDir = worldEnd - worldStart;
						vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

						vec3 p1 = worldStart + lineDir * params.x;
						vec3 p2 = rayEnd * params.y;
						vec3 delta = p1 - p2;
						float len = length( delta );
						float norm = len / linewidth;

						#ifndef USE_DASH

							#ifdef USE_ALPHA_TO_COVERAGE

								float dnorm = fwidth( norm );
								alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

							#else

								if ( norm > 0.5 ) {

									discard;

								}

							#endif

						#endif

					#else

						#ifdef USE_ALPHA_TO_COVERAGE

							// artifacts appear on some hardware if a derivative is taken within a conditional
							float a = vUv.x;
							float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
							float len2 = a * a + b * b;
							float dlen = fwidth( len2 );

							if ( abs( vUv.y ) > 1.0 ) {

								alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

							}

						#else

							if ( abs( vUv.y ) > 1.0 ) {

								float a = vUv.x;
								float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
								float len2 = a * a + b * b;

								if ( len2 > 1.0 ) discard;

							}

						#endif

					#endif

					vec4 diffuseColor = vec4( diffuse, alpha );
					#ifdef USE_COLOR
						#ifdef USE_LINE_COLOR_ALPHA
							diffuseColor *= vLineColor;
						#else
							diffuseColor.rgb *= vLineColor;
						#endif
					#endif

					#include <logdepthbuf_fragment>

					gl_FragColor = diffuseColor;

					#include <tonemapping_fragment>
					#include <${O>=154?"colorspace_fragment":"encodings_fragment"}>
					#include <fog_fragment>
					#include <premultiplied_alpha_fragment>

				}
			`,clipping:!0}),this.isLineMaterial=!0,this.onBeforeCompile=function(){this.transparent?this.defines.USE_LINE_COLOR_ALPHA="1":delete this.defines.USE_LINE_COLOR_ALPHA},Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(e){this.uniforms.diffuse.value=e}},worldUnits:{enumerable:!0,get:function(){return"WORLD_UNITS"in this.defines},set:function(e){!0===e?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(e){this.uniforms.linewidth.value=e}},dashed:{enumerable:!0,get:function(){return"USE_DASH"in this.defines},set(e){!!e!="USE_DASH"in this.defines&&(this.needsUpdate=!0),!0===e?this.defines.USE_DASH="":delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(e){this.uniforms.dashScale.value=e}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(e){this.uniforms.dashSize.value=e}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(e){this.uniforms.dashOffset.value=e}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(e){this.uniforms.gapSize.value=e}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(e){this.uniforms.opacity.value=e}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(e){this.uniforms.resolution.value.copy(e)}},alphaToCoverage:{enumerable:!0,get:function(){return"USE_ALPHA_TO_COVERAGE"in this.defines},set:function(e){!!e!="USE_ALPHA_TO_COVERAGE"in this.defines&&(this.needsUpdate=!0),!0===e?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(e)}}let I=O>=125?"uv1":"uv2",R=new k.Vector4,L=new k.Vector3,B=new k.Vector3,G=new k.Vector4,j=new k.Vector4,z=new k.Vector4,V=new k.Vector3,N=new k.Matrix4,W=new k.Line3,H=new k.Vector3,X=new k.Box3,Y=new k.Sphere,q=new k.Vector4;function $(e,t,n){return q.set(0,0,-t,1).applyMatrix4(e.projectionMatrix),q.multiplyScalar(1/q.w),q.x=r/n.width,q.y=r/n.height,q.applyMatrix4(e.projectionMatrixInverse),q.multiplyScalar(1/q.w),Math.abs(Math.max(q.x,q.y))}class Z extends k.Mesh{constructor(e=new A,t=new P({color:0xffffff*Math.random()})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let e=this.geometry,t=e.attributes.instanceStart,r=e.attributes.instanceEnd,n=new Float32Array(2*t.count);for(let e=0,a=0,i=t.count;e<i;e++,a+=2)L.fromBufferAttribute(t,e),B.fromBufferAttribute(r,e),n[a]=0===a?0:n[a-1],n[a+1]=n[a]+L.distanceTo(B);let a=new k.InstancedInterleavedBuffer(n,2,1);return e.setAttribute("instanceDistanceStart",new k.InterleavedBufferAttribute(a,1,0)),e.setAttribute("instanceDistanceEnd",new k.InterleavedBufferAttribute(a,1,1)),this}raycast(e,n){let a,i,o=this.material.worldUnits,s=e.camera;null!==s||o||console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');let l=void 0!==e.params.Line2&&e.params.Line2.threshold||0;t=e.ray;let u=this.matrixWorld,f=this.geometry,c=this.material;if(r=c.linewidth+l,null===f.boundingSphere&&f.computeBoundingSphere(),Y.copy(f.boundingSphere).applyMatrix4(u),o)a=.5*r;else{let e=Math.max(s.near,Y.distanceToPoint(t.origin));a=$(s,e,c.resolution)}if(Y.radius+=a,!1!==t.intersectsSphere(Y)){if(null===f.boundingBox&&f.computeBoundingBox(),X.copy(f.boundingBox).applyMatrix4(u),o)i=.5*r;else{let e=Math.max(s.near,X.distanceToPoint(t.origin));i=$(s,e,c.resolution)}X.expandByScalar(i),!1!==t.intersectsBox(X)&&(o?function(e,n){let a=e.matrixWorld,i=e.geometry,o=i.attributes.instanceStart,s=i.attributes.instanceEnd,l=Math.min(i.instanceCount,o.count);for(let i=0;i<l;i++){W.start.fromBufferAttribute(o,i),W.end.fromBufferAttribute(s,i),W.applyMatrix4(a);let l=new k.Vector3,u=new k.Vector3;t.distanceSqToSegment(W.start,W.end,u,l),u.distanceTo(l)<.5*r&&n.push({point:u,pointOnLine:l,distance:t.origin.distanceTo(u),object:e,face:null,faceIndex:i,uv:null,[I]:null})}}(this,n):function(e,n,a){let i=n.projectionMatrix,o=e.material.resolution,s=e.matrixWorld,l=e.geometry,u=l.attributes.instanceStart,f=l.attributes.instanceEnd,c=Math.min(l.instanceCount,u.count),d=-n.near;t.at(1,z),z.w=1,z.applyMatrix4(n.matrixWorldInverse),z.applyMatrix4(i),z.multiplyScalar(1/z.w),z.x*=o.x/2,z.y*=o.y/2,z.z=0,V.copy(z),N.multiplyMatrices(n.matrixWorldInverse,s);for(let n=0;n<c;n++){if(G.fromBufferAttribute(u,n),j.fromBufferAttribute(f,n),G.w=1,j.w=1,G.applyMatrix4(N),j.applyMatrix4(N),G.z>d&&j.z>d)continue;if(G.z>d){let e=G.z-j.z,t=(G.z-d)/e;G.lerp(j,t)}else if(j.z>d){let e=j.z-G.z,t=(j.z-d)/e;j.lerp(G,t)}G.applyMatrix4(i),j.applyMatrix4(i),G.multiplyScalar(1/G.w),j.multiplyScalar(1/j.w),G.x*=o.x/2,G.y*=o.y/2,j.x*=o.x/2,j.y*=o.y/2,W.start.copy(G),W.start.z=0,W.end.copy(j),W.end.z=0;let l=W.closestPointToPointParameter(V,!0);W.at(l,H);let c=k.MathUtils.lerp(G.z,j.z,l),h=c>=-1&&c<=1,p=V.distanceTo(H)<.5*r;if(h&&p){W.start.fromBufferAttribute(u,n),W.end.fromBufferAttribute(f,n),W.start.applyMatrix4(s),W.end.applyMatrix4(s);let r=new k.Vector3,i=new k.Vector3;t.distanceSqToSegment(W.start,W.end,i,r),a.push({point:i,pointOnLine:r,distance:t.origin.distanceTo(i),object:e,face:null,faceIndex:n,uv:null,[I]:null})}}}(this,s,n))}}onBeforeRender(e){let t=this.material.uniforms;t&&t.resolution&&(e.getViewport(R),this.material.uniforms.resolution.value.set(R.z,R.w))}}class K extends A{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){let t=e.length-3,r=new Float32Array(2*t);for(let n=0;n<t;n+=3)r[2*n]=e[n],r[2*n+1]=e[n+1],r[2*n+2]=e[n+2],r[2*n+3]=e[n+3],r[2*n+4]=e[n+4],r[2*n+5]=e[n+5];return super.setPositions(r),this}setColors(e,t=3){let r=e.length-t,n=new Float32Array(2*r);if(3===t)for(let a=0;a<r;a+=t)n[2*a]=e[a],n[2*a+1]=e[a+1],n[2*a+2]=e[a+2],n[2*a+3]=e[a+3],n[2*a+4]=e[a+4],n[2*a+5]=e[a+5];else for(let a=0;a<r;a+=t)n[2*a]=e[a],n[2*a+1]=e[a+1],n[2*a+2]=e[a+2],n[2*a+3]=e[a+3],n[2*a+4]=e[a+4],n[2*a+5]=e[a+5],n[2*a+6]=e[a+6],n[2*a+7]=e[a+7];return super.setColors(n,t),this}fromLine(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}}class Q extends Z{constructor(e=new K,t=new P({color:0xffffff*Math.random()})){super(e,t),this.isLine2=!0,this.type="Line2"}}let J=f.forwardRef(function({points:e,color:t=0xffffff,vertexColors:r,linewidth:n,lineWidth:a,segments:i,dashed:o,...s},l){var u,c;let d=(0,p.useThree)(e=>e.size),m=f.useMemo(()=>i?new Z:new Q,[i]),[g]=f.useState(()=>new P),y=(null==r||null==(u=r[0])?void 0:u.length)===4?4:3,b=f.useMemo(()=>{let n=i?new A:new K,a=e.map(e=>{let t=Array.isArray(e);return e instanceof v.Vector3||e instanceof v.Vector4?[e.x,e.y,e.z]:e instanceof v.Vector2?[e.x,e.y,0]:t&&3===e.length?[e[0],e[1],e[2]]:t&&2===e.length?[e[0],e[1],0]:e});if(n.setPositions(a.flat()),r){t=0xffffff;let e=r.map(e=>e instanceof v.Color?e.toArray():e);n.setColors(e.flat(),y)}return n},[e,i,r,y]);return f.useLayoutEffect(()=>{m.computeLineDistances()},[e,m]),f.useLayoutEffect(()=>{o?g.defines.USE_DASH="":delete g.defines.USE_DASH,g.needsUpdate=!0},[o,g]),f.useEffect(()=>()=>{b.dispose(),g.dispose()},[b]),f.createElement("primitive",(0,h.default)({object:m,ref:l},s),f.createElement("primitive",{object:b,attach:"geometry"}),f.createElement("primitive",(0,h.default)({object:g,attach:"material",color:t,vertexColors:!!r,resolution:[d.width,d.height],linewidth:null!=(c=null!=n?n:a)?c:1,dashed:o,transparent:4===y},s)))});var ee=v;function et(){var e=Object.create(null);function t(e,t){var r=void 0;self.troikaDefine=function(e){return r=e};var n=URL.createObjectURL(new Blob(["/** "+e.replace(/\*/g,"")+" **/\n\ntroikaDefine(\n"+t+"\n)"],{type:"application/javascript"}));try{importScripts(n)}catch(e){console.error(e)}return URL.revokeObjectURL(n),delete self.troikaDefine,r}self.addEventListener("message",function(r){var n=r.data,a=n.messageId,i=n.action,o=n.data;try{"registerModule"===i&&function r(n,a){var i=n.id,o=n.name,s=n.dependencies;void 0===s&&(s=[]);var l=n.init;void 0===l&&(l=function(){});var u=n.getTransferables;if(void 0===u&&(u=null),!e[i])try{s=s.map(function(t){return t&&t.isWorkerModule&&(r(t,function(e){if(e instanceof Error)throw e}),t=e[t.id].value),t}),l=t("<"+o+">.init",l),u&&(u=t("<"+o+">.getTransferables",u));var f=null;"function"==typeof l?f=l.apply(void 0,s):console.error("worker module init function failed to rehydrate"),e[i]={id:i,value:f,getTransferables:u},a(f)}catch(e){e&&e.noLog||console.error(e),a(e)}}(o,function(e){e instanceof Error?postMessage({messageId:a,success:!1,error:e.message}):postMessage({messageId:a,success:!0,result:{isCallable:"function"==typeof e}})}),"callModule"===i&&function(t,r){var n,a=t.id,i=t.args;e[a]&&"function"==typeof e[a].value||r(Error("Worker module "+a+": not found or its 'init' did not return a function"));try{var o=(n=e[a]).value.apply(n,i);o&&"function"==typeof o.then?o.then(s,function(e){return r(e instanceof Error?e:Error(""+e))}):s(o)}catch(e){r(e)}function s(t){try{var n=e[a].getTransferables&&e[a].getTransferables(t);n&&Array.isArray(n)&&n.length||(n=void 0),r(t,n)}catch(e){console.error(e),r(e)}}}(o,function(e,t){e instanceof Error?postMessage({messageId:a,success:!1,error:e.message}):postMessage({messageId:a,success:!0,result:e},t||void 0)})}catch(e){postMessage({messageId:a,success:!1,error:e.stack})}})}e.i(47167);var er=function(){var e=!1;if("u">typeof window&&void 0!==window.document)try{new Worker(URL.createObjectURL(new Blob([""],{type:"application/javascript"}))).terminate(),e=!0}catch(e){console.log("Troika createWorkerModule: web workers not allowed; falling back to main thread execution. Cause: ["+e.message+"]")}return er=function(){return e},e},en=0,ea=0,ei=!1,eo=Object.create(null),es=Object.create(null),el=Object.create(null);function eu(e){if((!e||"function"!=typeof e.init)&&!ei)throw Error("requires `options.init` function");var t,r=e.dependencies,n=e.init,a=e.getTransferables,i=e.workerId,o=((t=function(){for(var e=[],r=arguments.length;r--;)e[r]=arguments[r];return t._getInitResult().then(function(t){if("function"==typeof t)return t.apply(void 0,e);throw Error("Worker module function was called but `init` did not return a callable function")})})._getInitResult=function(){var r=e.dependencies,n=e.init,a=Promise.all(r=Array.isArray(r)?r.map(function(e){return e&&(e=e.onMainThread||e)._getInitResult&&(e=e._getInitResult()),e}):[]).then(function(e){return n.apply(null,e)});return t._getInitResult=function(){return a},a},t);null==i&&(i="#default");var s="workerModule"+ ++en,l=e.name||s,u=null;function f(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];if(!er())return o.apply(void 0,e);if(!u){u=ec(i,"registerModule",f.workerModuleData);var r=function(){u=null,es[i].delete(r)};(es[i]||(es[i]=new Set)).add(r)}return u.then(function(t){if(t.isCallable)return ec(i,"callModule",{id:s,args:e});throw Error("Worker module function was called but `init` did not return a callable function")})}return r=r&&r.map(function(e){return"function"!=typeof e||e.workerModuleData||(ei=!0,e=eu({workerId:i,name:"<"+l+"> function dependency: "+e.name,init:"function(){return (\n"+ef(e)+"\n)}"}),ei=!1),e&&e.workerModuleData&&(e=e.workerModuleData),e}),f.workerModuleData={isWorkerModule:!0,id:s,name:l,dependencies:r,init:ef(n),getTransferables:a&&ef(a)},f.onMainThread=o,f}function ef(e){var t=e.toString();return!/^function/.test(t)&&/^\w+\s*\(/.test(t)&&(t="function "+t),t}function ec(e,t,r){return new Promise(function(n,a){var i=++ea;el[i]=function(e){e.success?n(e.result):a(Error("Error in worker "+t+" call: "+e.error))},(function(e){var t=eo[e];if(!t){var r=ef(et);(t=eo[e]=new Worker(URL.createObjectURL(new Blob(["/** Worker Module Bootstrap: "+e.replace(/\*/g,"")+" **/\n\n;("+r+")()"],{type:"application/javascript"})))).onmessage=function(e){var t=e.data,r=t.messageId,n=el[r];if(!n)throw Error("WorkerModule response with empty or unknown messageId");delete el[r],n(t)}}return t})(e).postMessage({messageId:i,action:t,data:r})})}function ed(){return function(e){function t(e,t){for(var r,n,a,i,o,s=/([MLQCZ])([^MLQCZ]*)/g;r=s.exec(e);){var l=r[2].replace(/^\s*|\s*$/g,"").split(/[,\s]+/).map(function(e){return parseFloat(e)});switch(r[1]){case"M":i=n=l[0],o=a=l[1];break;case"L":(l[0]!==i||l[1]!==o)&&t("L",i,o,i=l[0],o=l[1]);break;case"Q":t("Q",i,o,i=l[2],o=l[3],l[0],l[1]);break;case"C":t("C",i,o,i=l[4],o=l[5],l[0],l[1],l[2],l[3]);break;case"Z":(i!==n||o!==a)&&t("L",i,o,n,a)}}}function r(e,r,n){void 0===n&&(n=16);var a={x:0,y:0};t(e,function(e,t,i,o,s,l,u,f,c){switch(e){case"L":r(t,i,o,s);break;case"Q":for(var d=t,h=i,p=1;p<n;p++)!function(e,t,r,n,a,i,o,s){var l=1-o;s.x=l*l*e+2*l*o*r+o*o*a,s.y=l*l*t+2*l*o*n+o*o*i}(t,i,l,u,o,s,p/(n-1),a),r(d,h,a.x,a.y),d=a.x,h=a.y;break;case"C":for(var v=t,m=i,g=1;g<n;g++)!function(e,t,r,n,a,i,o,s,l,u){var f=1-l;u.x=f*f*f*e+3*f*f*l*r+3*f*l*l*a+l*l*l*o,u.y=f*f*f*t+3*f*f*l*n+3*f*l*l*i+l*l*l*s}(t,i,l,u,f,c,o,s,g/(n-1),a),r(v,m,a.x,a.y),v=a.x,m=a.y}})}var n="precision highp float;attribute vec2 aUV;varying vec2 vUV;void main(){vUV=aUV;gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",a=new WeakMap,i={premultipliedAlpha:!1,preserveDrawingBuffer:!0,antialias:!1,depth:!1};function o(e,t){var r=e.getContext?e.getContext("webgl",i):e,n=a.get(r);if(!n){var o="u">typeof WebGL2RenderingContext&&r instanceof WebGL2RenderingContext,s={},l={},u={},f=-1,c=[];function d(e){var t=s[e];if(!t&&!(t=s[e]=r.getExtension(e)))throw Error(e+" not supported");return t}function h(e,t){var n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}function p(){s={},l={},u={},f=-1,c.length=0}r.canvas.addEventListener("webglcontextlost",function(e){p(),e.preventDefault()},!1),a.set(r,n={gl:r,isWebGL2:o,getExtension:d,withProgram:function(e,t,n,a){if(!l[e]){var i={},s={},u=r.createProgram();r.attachShader(u,h(t,r.VERTEX_SHADER)),r.attachShader(u,h(n,r.FRAGMENT_SHADER)),r.linkProgram(u),l[e]={program:u,transaction:function(e){r.useProgram(u),e({setUniform:function(e,t){for(var n=[],a=arguments.length-2;a-- >0;)n[a]=arguments[a+2];var i=s[t]||(s[t]=r.getUniformLocation(u,t));r["uniform"+e].apply(r,[i].concat(n))},setAttribute:function(e,t,n,a,s){var l=i[e];l||(l=i[e]={buf:r.createBuffer(),loc:r.getAttribLocation(u,e),data:null}),r.bindBuffer(r.ARRAY_BUFFER,l.buf),r.vertexAttribPointer(l.loc,t,r.FLOAT,!1,0,0),r.enableVertexAttribArray(l.loc),o?r.vertexAttribDivisor(l.loc,a):d("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(l.loc,a),s!==l.data&&(r.bufferData(r.ARRAY_BUFFER,s,n),l.data=s)}})}}}l[e].transaction(a)},withTexture:function(e,t){f++;try{r.activeTexture(r.TEXTURE0+f);var n=u[e];n||(n=u[e]=r.createTexture(),r.bindTexture(r.TEXTURE_2D,n),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.NEAREST)),r.bindTexture(r.TEXTURE_2D,n),t(n,f)}finally{f--}},withTextureFramebuffer:function(e,t,n){var a=r.createFramebuffer();c.push(a),r.bindFramebuffer(r.FRAMEBUFFER,a),r.activeTexture(r.TEXTURE0+t),r.bindTexture(r.TEXTURE_2D,e),r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,e,0);try{n(a)}finally{r.deleteFramebuffer(a),r.bindFramebuffer(r.FRAMEBUFFER,c[--c.length-1]||null)}},handleContextLoss:p})}t(n)}function s(e,t,r,a,i,s,l,u){void 0===l&&(l=15),void 0===u&&(u=null),o(e,function(e){var o=e.gl,f=e.withProgram;(0,e.withTexture)("copy",function(e,c){o.texImage2D(o.TEXTURE_2D,0,o.RGBA,i,s,0,o.RGBA,o.UNSIGNED_BYTE,t),f("copy",n,"precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){gl_FragColor=texture2D(tex,vUV);}",function(e){var t=e.setUniform;(0,e.setAttribute)("aUV",2,o.STATIC_DRAW,0,new Float32Array([0,0,2,0,0,2])),t("1i","image",c),o.bindFramebuffer(o.FRAMEBUFFER,u||null),o.disable(o.BLEND),o.colorMask(8&l,4&l,2&l,1&l),o.viewport(r,a,i,s),o.scissor(r,a,i,s),o.drawArrays(o.TRIANGLES,0,3)})})})}var l=Object.freeze({__proto__:null,withWebGLContext:o,renderImageData:s,resizeWebGLCanvasWithoutClearing:function(e,t,r){var n=e.width,a=e.height;o(e,function(i){var o=i.gl,l=new Uint8Array(n*a*4);o.readPixels(0,0,n,a,o.RGBA,o.UNSIGNED_BYTE,l),e.width=t,e.height=r,s(o,l,0,0,n,a)})}});function u(e,t,n,a,i,o){void 0===o&&(o=1);var s=new Uint8Array(e*t),l=a[2]-a[0],u=a[3]-a[1],f=[];r(n,function(e,t,r,n){f.push({x1:e,y1:t,x2:r,y2:n,minX:Math.min(e,r),minY:Math.min(t,n),maxX:Math.max(e,r),maxY:Math.max(t,n)})}),f.sort(function(e,t){return e.maxX-t.maxX});for(var c=0;c<e;c++)for(var d=0;d<t;d++){var h=function(e,t){for(var r=1/0,n=1/0,a=f.length;a--;){var i=f[a];if(i.maxX+n<=e)break;if(e+n>i.minX&&t-n<i.maxY&&t+n>i.minY){var o=function(e,t,r,n,a,i){var o=a-r,s=i-n,l=o*o+s*s,u=l?Math.max(0,Math.min(1,((e-r)*o+(t-n)*s)/l)):0,f=e-(r+u*o),c=t-(n+u*s);return f*f+c*c}(e,t,i.x1,i.y1,i.x2,i.y2);o<r&&(n=Math.sqrt(r=o))}}return function(e,t){for(var r=0,n=f.length;n--;){var a=f[n];if(a.maxX<=e)break;a.y1>t!=a.y2>t&&e<(a.x2-a.x1)*(t-a.y1)/(a.y2-a.y1)+a.x1&&(r+=a.y1<a.y2?1:-1)}return 0!==r}(e,t)&&(n=-n),n}(a[0]+l*(c+.5)/e,a[1]+u*(d+.5)/t),p=Math.pow(1-Math.abs(h)/i,o)/2;h<0&&(p=1-p),p=Math.max(0,Math.min(255,Math.round(255*p))),s[d*e+c]=p}return s}function f(e,t,r,n,a,i,o,s,l,u){void 0===i&&(i=1),void 0===s&&(s=0),void 0===l&&(l=0),void 0===u&&(u=0),c(e,t,r,n,a,i,o,null,s,l,u)}function c(e,t,r,n,a,i,o,l,f,c,d){void 0===i&&(i=1),void 0===f&&(f=0),void 0===c&&(c=0),void 0===d&&(d=0);for(var h=u(e,t,r,n,a,i),p=new Uint8Array(4*h.length),v=0;v<h.length;v++)p[4*v+d]=h[v];s(o,p,f,c,e,t,1<<3-d,l)}var d=Object.freeze({__proto__:null,generate:u,generateIntoCanvas:f,generateIntoFramebuffer:c}),h=new Float32Array([0,0,2,0,0,2]),p=null,v=!1,m={},g=new WeakMap;function y(e){if(!v&&!w(e))throw Error("WebGL generation not supported")}function b(e,t,r,n,a,i,s){if(void 0===i&&(i=1),void 0===s&&(s=null),!s&&!(s=p)){var l="function"==typeof OffscreenCanvas?new OffscreenCanvas(1,1):"u">typeof document?document.createElement("canvas"):null;if(!l)throw Error("OffscreenCanvas or DOM canvas not supported");s=p=l.getContext("webgl",{depth:!1})}y(s);var u=new Uint8Array(e*t*4);o(s,function(o){var s=o.gl,l=o.withTexture,f=o.withTextureFramebuffer;l("readable",function(o,l){s.texImage2D(s.TEXTURE_2D,0,s.RGBA,e,t,0,s.RGBA,s.UNSIGNED_BYTE,null),f(o,l,function(o){S(e,t,r,n,a,i,s,o,0,0,0),s.readPixels(0,0,e,t,s.RGBA,s.UNSIGNED_BYTE,u)})})});for(var f=new Uint8Array(e*t),c=0,d=0;c<u.length;c+=4)f[d++]=u[c];return f}function x(e,t,r,n,a,i,o,s,l,u){void 0===i&&(i=1),void 0===s&&(s=0),void 0===l&&(l=0),void 0===u&&(u=0),S(e,t,r,n,a,i,o,null,s,l,u)}function S(e,t,a,i,s,l,u,f,c,d,p){void 0===l&&(l=1),void 0===c&&(c=0),void 0===d&&(d=0),void 0===p&&(p=0),y(u);var v=[];r(a,function(e,t,r,n){v.push(e,t,r,n)}),v=new Float32Array(v),o(u,function(r){var a=r.gl,o=r.isWebGL2,u=r.getExtension,m=r.withProgram,g=r.withTexture,y=r.withTextureFramebuffer,b=r.handleContextLoss;if(g("rawDistances",function(r,g){(e!==r._lastWidth||t!==r._lastHeight)&&a.texImage2D(a.TEXTURE_2D,0,a.RGBA,r._lastWidth=e,r._lastHeight=t,0,a.RGBA,a.UNSIGNED_BYTE,null),m("main","precision highp float;uniform vec4 uGlyphBounds;attribute vec2 aUV;attribute vec4 aLineSegment;varying vec4 vLineSegment;varying vec2 vGlyphXY;void main(){vLineSegment=aLineSegment;vGlyphXY=mix(uGlyphBounds.xy,uGlyphBounds.zw,aUV);gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}","precision highp float;uniform vec4 uGlyphBounds;uniform float uMaxDistance;uniform float uExponent;varying vec4 vLineSegment;varying vec2 vGlyphXY;float absDistToSegment(vec2 point,vec2 lineA,vec2 lineB){vec2 lineDir=lineB-lineA;float lenSq=dot(lineDir,lineDir);float t=lenSq==0.0 ? 0.0 : clamp(dot(point-lineA,lineDir)/lenSq,0.0,1.0);vec2 linePt=lineA+t*lineDir;return distance(point,linePt);}void main(){vec4 seg=vLineSegment;vec2 p=vGlyphXY;float dist=absDistToSegment(p,seg.xy,seg.zw);float val=pow(1.0-clamp(dist/uMaxDistance,0.0,1.0),uExponent)*0.5;bool crossing=(seg.y>p.y!=seg.w>p.y)&&(p.x<(seg.z-seg.x)*(p.y-seg.y)/(seg.w-seg.y)+seg.x);bool crossingUp=crossing&&vLineSegment.y<vLineSegment.w;gl_FragColor=vec4(crossingUp ? 1.0/255.0 : 0.0,crossing&&!crossingUp ? 1.0/255.0 : 0.0,0.0,val);}",function(n){var f=n.setAttribute,c=n.setUniform,d=!o&&u("ANGLE_instanced_arrays"),p=!o&&u("EXT_blend_minmax");f("aUV",2,a.STATIC_DRAW,0,h),f("aLineSegment",4,a.DYNAMIC_DRAW,1,v),c.apply(void 0,["4f","uGlyphBounds"].concat(i)),c("1f","uMaxDistance",s),c("1f","uExponent",l),y(r,g,function(r){a.enable(a.BLEND),a.colorMask(!0,!0,!0,!0),a.viewport(0,0,e,t),a.scissor(0,0,e,t),a.blendFunc(a.ONE,a.ONE),a.blendEquationSeparate(a.FUNC_ADD,o?a.MAX:p.MAX_EXT),a.clear(a.COLOR_BUFFER_BIT),o?a.drawArraysInstanced(a.TRIANGLES,0,3,v.length/4):d.drawArraysInstancedANGLE(a.TRIANGLES,0,3,v.length/4)})}),m("post",n,"precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){vec4 color=texture2D(tex,vUV);bool inside=color.r!=color.g;float val=inside ? 1.0-color.a : color.a;gl_FragColor=vec4(val);}",function(r){r.setAttribute("aUV",2,a.STATIC_DRAW,0,h),r.setUniform("1i","tex",g),a.bindFramebuffer(a.FRAMEBUFFER,f),a.disable(a.BLEND),a.colorMask(0===p,1===p,2===p,3===p),a.viewport(c,d,e,t),a.scissor(c,d,e,t),a.drawArrays(a.TRIANGLES,0,3)})}),a.isContextLost())throw b(),Error("webgl context lost")})}function w(e){var t=e&&e!==p?e.canvas||e:m,r=g.get(t);if(void 0===r){v=!0;var n=null;try{var a=[97,106,97,61,99,137,118,80,80,118,137,99,61,97,106,97],i=b(4,4,"M8,8L16,8L24,24L16,24Z",[0,0,32,32],24,1,e);(r=i&&a.length===i.length&&i.every(function(e,t){return e===a[t]}))||(n="bad trial run results",console.info(a,i))}catch(e){r=!1,n=e.message}n&&console.warn("WebGL SDF generation not supported:",n),v=!1,g.set(t,r)}return r}var U=Object.freeze({__proto__:null,generate:b,generateIntoCanvas:x,generateIntoFramebuffer:S,isSupported:w});return e.forEachPathCommand=t,e.generate=function(e,t,r,n,a,i){void 0===a&&(a=Math.max(n[2]-n[0],n[3]-n[1])/2),void 0===i&&(i=1);try{return b.apply(U,arguments)}catch(e){return console.info("WebGL SDF generation failed, falling back to JS",e),u.apply(d,arguments)}},e.generateIntoCanvas=function(e,t,r,n,a,i,o,s,l,u){void 0===a&&(a=Math.max(n[2]-n[0],n[3]-n[1])/2),void 0===i&&(i=1),void 0===s&&(s=0),void 0===l&&(l=0),void 0===u&&(u=0);try{return x.apply(U,arguments)}catch(e){return console.info("WebGL SDF generation failed, falling back to JS",e),f.apply(d,arguments)}},e.javascript=d,e.pathToLineSegments=r,e.webgl=U,e.webglUtils=l,Object.defineProperty(e,"__esModule",{value:!0}),e}({})}var eh=v;let ep=/\bvoid\s+main\s*\(\s*\)\s*{/g;function ev(e){return e.replace(/^[ \t]*#include +<([\w\d./]+)>/gm,function(e,t){let r=F.ShaderChunk[t];return r?ev(r):e})}let em=[];for(let e=0;e<256;e++)em[e]=(e<16?"0":"")+e.toString(16);let eg=Object.assign||function(){let e=arguments[0];for(let t=1,r=arguments.length;t<r;t++){let r=arguments[t];if(r)for(let t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},ey=Date.now(),eb=new WeakMap,ex=new Map,eS=1e10;function ew(e,t){let r,n,a=(r=JSON.stringify(t,eT),null==(n=ek.get(r))&&ek.set(r,n=++e_),n),i=eb.get(e);if(i||eb.set(e,i=Object.create(null)),i[a])return new i[a];let o=`_onBeforeCompile${a}`,s=function(r,n){e.onBeforeCompile.call(this,r,n);let i=this.customProgramCacheKey()+"|"+r.vertexShader+"|"+r.fragmentShader,s=ex[i];if(!s){let e=function(e,{vertexShader:t,fragmentShader:r},n,a){let{vertexDefs:i,vertexMainIntro:o,vertexMainOutro:s,vertexTransform:l,fragmentDefs:u,fragmentMainIntro:f,fragmentMainOutro:c,fragmentColorTransform:d,customRewriter:h,timeUniform:p}=n;if(i=i||"",o=o||"",s=s||"",u=u||"",f=f||"",c=c||"",(l||h)&&(t=ev(t)),(d||h)&&(r=ev(r=r.replace(/^[ \t]*#include <((?:tonemapping|encodings|colorspace|fog|premultiplied_alpha|dithering)_fragment)>/gm,"\n//!BEGIN_POST_CHUNK $1\n$&\n//!END_POST_CHUNK\n"))),h){let e=h({vertexShader:t,fragmentShader:r});t=e.vertexShader,r=e.fragmentShader}if(d){let e=[];r=r.replace(/^\/\/!BEGIN_POST_CHUNK[^]+?^\/\/!END_POST_CHUNK/gm,t=>(e.push(t),"")),c=`${d}
${e.join("\n")}
${c}`}if(p){let e=`
uniform float ${p};
`;i=e+i,u=e+u}return l&&(t=`vec3 troika_position_${a};
vec3 troika_normal_${a};
vec2 troika_uv_${a};
${t}
`,i=`${i}
void troikaVertexTransform${a}(inout vec3 position, inout vec3 normal, inout vec2 uv) {
  ${l}
}
`,o=`
troika_position_${a} = vec3(position);
troika_normal_${a} = vec3(normal);
troika_uv_${a} = vec2(uv);
troikaVertexTransform${a}(troika_position_${a}, troika_normal_${a}, troika_uv_${a});
${o}
`,t=t.replace(/\b(position|normal|uv)\b/g,(e,t,r,n)=>/\battribute\s+vec[23]\s+$/.test(n.substr(0,r))?t:`troika_${t}_${a}`),e.map&&e.map.channel>0||(t=t.replace(/\bMAP_UV\b/g,`troika_uv_${a}`))),{vertexShader:t=eU(t,a,i,o,s),fragmentShader:r=eU(r,a,u,f,c)}}(this,r,t,a);s=ex[i]=e}r.vertexShader=s.vertexShader,r.fragmentShader=s.fragmentShader,eg(r.uniforms,this.uniforms),t.timeUniform&&(r.uniforms[t.timeUniform]={get value(){return Date.now()-ey}}),this[o]&&this[o](r)},l=function(){return u(t.chained?e:e.clone())},u=function(r){let n,i,o,s,l=Object.create(r,f);return Object.defineProperty(l,"baseMaterial",{value:e}),Object.defineProperty(l,"id",{value:eS++}),n=0xffffffff*Math.random()|0,i=0xffffffff*Math.random()|0,o=0xffffffff*Math.random()|0,s=0xffffffff*Math.random()|0,l.uuid=(em[255&n]+em[n>>8&255]+em[n>>16&255]+em[n>>24&255]+"-"+em[255&i]+em[i>>8&255]+"-"+em[i>>16&15|64]+em[i>>24&255]+"-"+em[63&o|128]+em[o>>8&255]+"-"+em[o>>16&255]+em[o>>24&255]+em[255&s]+em[s>>8&255]+em[s>>16&255]+em[s>>24&255]).toUpperCase(),l.uniforms=eg({},r.uniforms,t.uniforms),l.defines=eg({},r.defines,t.defines),l.defines[`TROIKA_DERIVED_MATERIAL_${a}`]="",l.extensions=eg({},r.extensions,t.extensions),l._listeners=void 0,l},f={constructor:{value:l},isDerivedMaterial:{value:!0},type:{get:()=>e.type,set:t=>{e.type=t}},isDerivedFrom:{writable:!0,configurable:!0,value:function(e){let t=this.baseMaterial;return e===t||t.isDerivedMaterial&&t.isDerivedFrom(e)||!1}},customProgramCacheKey:{writable:!0,configurable:!0,value:function(){return e.customProgramCacheKey()+"|"+a}},onBeforeCompile:{get:()=>s,set(e){this[o]=e}},copy:{writable:!0,configurable:!0,value:function(t){return e.copy.call(this,t),e.isShaderMaterial||e.isDerivedMaterial||(eg(this.extensions,t.extensions),eg(this.defines,t.defines),eg(this.uniforms,eh.UniformsUtils.clone(t.uniforms))),this}},clone:{writable:!0,configurable:!0,value:function(){return u(new e.constructor).copy(this)}},getDepthMaterial:{writable:!0,configurable:!0,value:function(){let r=this._depthMaterial;return r||((r=this._depthMaterial=ew(e.isDerivedMaterial?e.getDepthMaterial():new eh.MeshDepthMaterial({depthPacking:eh.RGBADepthPacking}),t)).defines.IS_DEPTH_MATERIAL="",r.uniforms=this.uniforms),r}},getDistanceMaterial:{writable:!0,configurable:!0,value:function(){let r=this._distanceMaterial;return r||((r=this._distanceMaterial=ew(e.isDerivedMaterial?e.getDistanceMaterial():new eh.MeshDistanceMaterial,t)).defines.IS_DISTANCE_MATERIAL="",r.uniforms=this.uniforms),r}},dispose:{writable:!0,configurable:!0,value(){let{_depthMaterial:t,_distanceMaterial:r}=this;t&&t.dispose(),r&&r.dispose(),e.dispose.call(this)}}};return i[a]=l,new l}function eU(e,t,r,n,a){return(n||a||r)&&(e=e.replace(ep,`
${r}
void troikaOrigMain${t}() {`)+`
void main() {
  ${n}
  troikaOrigMain${t}();
  ${a}
}`),e}function eT(e,t){return"uniforms"===e?void 0:"function"==typeof t?t.toString():t}let e_=0,ek=new Map,eM=`
uniform vec3 pointA;
uniform vec3 controlA;
uniform vec3 controlB;
uniform vec3 pointB;
uniform float radius;
varying float bezierT;

vec3 cubicBezier(vec3 p1, vec3 c1, vec3 c2, vec3 p2, float t) {
  float t2 = 1.0 - t;
  float b0 = t2 * t2 * t2;
  float b1 = 3.0 * t * t2 * t2;
  float b2 = 3.0 * t * t * t2;
  float b3 = t * t * t;
  return b0 * p1 + b1 * c1 + b2 * c2 + b3 * p2;
}

vec3 cubicBezierDerivative(vec3 p1, vec3 c1, vec3 c2, vec3 p2, float t) {
  float t2 = 1.0 - t;
  return -3.0 * p1 * t2 * t2 +
    c1 * (3.0 * t2 * t2 - 6.0 * t2 * t) +
    c2 * (6.0 * t2 * t - 3.0 * t * t) +
    3.0 * p2 * t * t;
}
`,eE=`
float t = position.y;
bezierT = t;
vec3 bezierCenterPos = cubicBezier(pointA, controlA, controlB, pointB, t);
vec3 bezierDir = normalize(cubicBezierDerivative(pointA, controlA, controlB, pointB, t));

// Make "sideways" always perpendicular to the camera ray; this ensures that any twists
// in the cylinder occur where you won't see them: 
vec3 viewDirection = normalMatrix * vec3(0.0, 0.0, 1.0);
if (bezierDir == viewDirection) {
  bezierDir = normalize(cubicBezierDerivative(pointA, controlA, controlB, pointB, t == 1.0 ? t - 0.0001 : t + 0.0001));
}
vec3 sideways = normalize(cross(bezierDir, viewDirection));
vec3 upish = normalize(cross(sideways, bezierDir));

// Build a matrix for transforming this disc in the cylinder:
mat4 discTx;
discTx[0].xyz = sideways * radius;
discTx[1].xyz = bezierDir * radius;
discTx[2].xyz = upish * radius;
discTx[3].xyz = bezierCenterPos;
discTx[3][3] = 1.0;

// Apply transform, ignoring original y
position = (discTx * vec4(position.x, 0.0, position.z, 1.0)).xyz;
normal = normalize(mat3(discTx) * normal);
`,eC=`
uniform vec3 dashing;
varying float bezierT;
`,eA=`
if (dashing.x + dashing.y > 0.0) {
  float dashFrac = mod(bezierT - dashing.z, dashing.x + dashing.y);
  if (dashFrac > dashing.x) {
    discard;
  }
}
`,eD=null,eF=new eh.MeshStandardMaterial({color:0xffffff,side:eh.DoubleSide});class eO extends eh.Mesh{static getGeometry(){return eD||(eD=new eh.CylinderGeometry(1,1,1,6,64).translate(0,.5,0))}constructor(){super(eO.getGeometry(),eF),this.pointA=new eh.Vector3,this.controlA=new eh.Vector3,this.controlB=new eh.Vector3,this.pointB=new eh.Vector3,this.radius=.01,this.dashArray=new eh.Vector2,this.dashOffset=0,this.frustumCulled=!1}get material(){let e=this._derivedMaterial,t=this._baseMaterial||this._defaultMaterial||(this._defaultMaterial=eF.clone());return e&&e.baseMaterial===t||(e=this._derivedMaterial=ew(t,{chained:!0,uniforms:{pointA:{value:new eh.Vector3},controlA:{value:new eh.Vector3},controlB:{value:new eh.Vector3},pointB:{value:new eh.Vector3},radius:{value:.01},dashing:{value:new eh.Vector3}},vertexDefs:eM,vertexTransform:eE,fragmentDefs:eC,fragmentMainIntro:eA}),t.addEventListener("dispose",function r(){t.removeEventListener("dispose",r),e.dispose()})),e}set material(e){this._baseMaterial=e}get customDepthMaterial(){return this.material.getDepthMaterial()}set customDepthMaterial(e){}get customDistanceMaterial(){return this.material.getDistanceMaterial()}set customDistanceMaterial(e){}onBeforeRender(){let{uniforms:e}=this.material,{pointA:t,controlA:r,controlB:n,pointB:a,radius:i,dashArray:o,dashOffset:s}=this;e.pointA.value.copy(t),e.controlA.value.copy(r),e.controlB.value.copy(n),e.pointB.value.copy(a),e.radius.value=i,e.dashing.value.set(o.x,o.y,s||0)}raycast(){}}let eP=eu({name:"Typr Font Parser",dependencies:[function(){var e,t,r;return"u"<typeof window&&(self.window=self),(e={},(t={parse:function(e){var r=t._bin,n=new Uint8Array(e);if("ttcf"==r.readASCII(n,0,4)){var a=4;r.readUshort(n,a),a+=2,r.readUshort(n,a),a+=2;var i=r.readUint(n,a);a+=4;for(var o=[],s=0;s<i;s++){var l=r.readUint(n,a);a+=4,o.push(t._readFont(n,l))}return o}return[t._readFont(n,0)]},_readFont:function(e,r){var n=t._bin,a=r;n.readFixed(e,r),r+=4;var i=n.readUshort(e,r);r+=2,n.readUshort(e,r),r+=2,n.readUshort(e,r),r+=2,n.readUshort(e,r),r+=2;for(var o=["cmap","head","hhea","maxp","hmtx","name","OS/2","post","loca","glyf","kern","CFF ","GDEF","GPOS","GSUB","SVG "],s={_data:e,_offset:a},l={},u=0;u<i;u++){var f=n.readASCII(e,r,4);r+=4,n.readUint(e,r),r+=4;var c=n.readUint(e,r);r+=4;var d=n.readUint(e,r);r+=4,l[f]={offset:c,length:d}}for(u=0;u<o.length;u++){var h=o[u];l[h]&&(s[h.trim()]=t[h.trim()].parse(e,l[h].offset,l[h].length,s))}return s},_tabOffset:function(e,r,n){for(var a=t._bin,i=a.readUshort(e,n+4),o=n+12,s=0;s<i;s++){var l=a.readASCII(e,o,4);o+=4,a.readUint(e,o),o+=4;var u=a.readUint(e,o);if(o+=4,a.readUint(e,o),o+=4,l==r)return u}return 0}})._bin={readFixed:function(e,t){return(e[t]<<8|e[t+1])+(e[t+2]<<8|e[t+3])/65540},readF2dot14:function(e,r){return t._bin.readShort(e,r)/16384},readInt:function(e,r){return t._bin._view(e).getInt32(r)},readInt8:function(e,r){return t._bin._view(e).getInt8(r)},readShort:function(e,r){return t._bin._view(e).getInt16(r)},readUshort:function(e,r){return t._bin._view(e).getUint16(r)},readUshorts:function(e,r,n){for(var a=[],i=0;i<n;i++)a.push(t._bin.readUshort(e,r+2*i));return a},readUint:function(e,r){return t._bin._view(e).getUint32(r)},readUint64:function(e,r){return 0x100000000*t._bin.readUint(e,r)+t._bin.readUint(e,r+4)},readASCII:function(e,t,r){for(var n="",a=0;a<r;a++)n+=String.fromCharCode(e[t+a]);return n},readUnicode:function(e,t,r){for(var n="",a=0;a<r;a++)n+=String.fromCharCode(e[t++]<<8|e[t++]);return n},_tdec:"u">typeof window&&window.TextDecoder?new window.TextDecoder:null,readUTF8:function(e,r,n){var a=t._bin._tdec;return a&&0==r&&n==e.length?a.decode(e):t._bin.readASCII(e,r,n)},readBytes:function(e,t,r){for(var n=[],a=0;a<r;a++)n.push(e[t+a]);return n},readASCIIArray:function(e,t,r){for(var n=[],a=0;a<r;a++)n.push(String.fromCharCode(e[t+a]));return n},_view:function(e){return e._dataView||(e._dataView=e.buffer?new DataView(e.buffer,e.byteOffset,e.byteLength):new DataView(new Uint8Array(e).buffer))}},t._lctf={},t._lctf.parse=function(e,r,n,a,i){var o=t._bin,s={},l=r;o.readFixed(e,r),r+=4;var u=o.readUshort(e,r);r+=2;var f=o.readUshort(e,r);r+=2;var c=o.readUshort(e,r);return r+=2,s.scriptList=t._lctf.readScriptList(e,l+u),s.featureList=t._lctf.readFeatureList(e,l+f),s.lookupList=t._lctf.readLookupList(e,l+c,i),s},t._lctf.readLookupList=function(e,r,n){var a=t._bin,i=r,o=[],s=a.readUshort(e,r);r+=2;for(var l=0;l<s;l++){var u=a.readUshort(e,r);r+=2;var f=t._lctf.readLookupTable(e,i+u,n);o.push(f)}return o},t._lctf.readLookupTable=function(e,r,n){var a=t._bin,i=r,o={tabs:[]};o.ltype=a.readUshort(e,r),r+=2,o.flag=a.readUshort(e,r),r+=2;var s=a.readUshort(e,r);r+=2;for(var l=o.ltype,u=0;u<s;u++){var f=a.readUshort(e,r);r+=2;var c=n(e,l,i+f,o);o.tabs.push(c)}return o},t._lctf.numOfOnes=function(e){for(var t=0,r=0;r<32;r++)0!=(e>>>r&1)&&t++;return t},t._lctf.readClassDef=function(e,r){var n=t._bin,a=[],i=n.readUshort(e,r);if(r+=2,1==i){var o=n.readUshort(e,r);r+=2;var s=n.readUshort(e,r);r+=2;for(var l=0;l<s;l++)a.push(o+l),a.push(o+l),a.push(n.readUshort(e,r)),r+=2}if(2==i){var u=n.readUshort(e,r);for(r+=2,l=0;l<u;l++)a.push(n.readUshort(e,r)),r+=2,a.push(n.readUshort(e,r)),r+=2,a.push(n.readUshort(e,r)),r+=2}return a},t._lctf.getInterval=function(e,t){for(var r=0;r<e.length;r+=3){var n=e[r],a=e[r+1];if(e[r+2],n<=t&&t<=a)return r}return -1},t._lctf.readCoverage=function(e,r){var n=t._bin,a={};a.fmt=n.readUshort(e,r),r+=2;var i=n.readUshort(e,r);return r+=2,1==a.fmt&&(a.tab=n.readUshorts(e,r,i)),2==a.fmt&&(a.tab=n.readUshorts(e,r,3*i)),a},t._lctf.coverageIndex=function(e,r){var n=e.tab;if(1==e.fmt)return n.indexOf(r);if(2==e.fmt){var a=t._lctf.getInterval(n,r);if(-1!=a)return n[a+2]+(r-n[a])}return -1},t._lctf.readFeatureList=function(e,r){var n=t._bin,a=r,i=[],o=n.readUshort(e,r);r+=2;for(var s=0;s<o;s++){var l=n.readASCII(e,r,4);r+=4;var u=n.readUshort(e,r);r+=2;var f=t._lctf.readFeatureTable(e,a+u);f.tag=l.trim(),i.push(f)}return i},t._lctf.readFeatureTable=function(e,r){var n=t._bin,a=r,i={},o=n.readUshort(e,r);r+=2,o>0&&(i.featureParams=a+o);var s=n.readUshort(e,r);r+=2,i.tab=[];for(var l=0;l<s;l++)i.tab.push(n.readUshort(e,r+2*l));return i},t._lctf.readScriptList=function(e,r){var n=t._bin,a=r,i={},o=n.readUshort(e,r);r+=2;for(var s=0;s<o;s++){var l=n.readASCII(e,r,4);r+=4;var u=n.readUshort(e,r);r+=2,i[l.trim()]=t._lctf.readScriptTable(e,a+u)}return i},t._lctf.readScriptTable=function(e,r){var n=t._bin,a=r,i={},o=n.readUshort(e,r);r+=2,o>0&&(i.default=t._lctf.readLangSysTable(e,a+o));var s=n.readUshort(e,r);r+=2;for(var l=0;l<s;l++){var u=n.readASCII(e,r,4);r+=4;var f=n.readUshort(e,r);r+=2,i[u.trim()]=t._lctf.readLangSysTable(e,a+f)}return i},t._lctf.readLangSysTable=function(e,r){var n=t._bin,a={};n.readUshort(e,r),r+=2,a.reqFeature=n.readUshort(e,r),r+=2;var i=n.readUshort(e,r);return r+=2,a.features=n.readUshorts(e,r,i),a},t.CFF={},t.CFF.parse=function(e,r,n){var a=t._bin;(e=new Uint8Array(e.buffer,r,n))[r=0],e[++r],e[++r],e[++r],r++;var i=[];r=t.CFF.readIndex(e,r,i);for(var o=[],s=0;s<i.length-1;s++)o.push(a.readASCII(e,r+i[s],i[s+1]-i[s]));r+=i[i.length-1];var l=[];r=t.CFF.readIndex(e,r,l);var u=[];for(s=0;s<l.length-1;s++)u.push(t.CFF.readDict(e,r+l[s],r+l[s+1]));r+=l[l.length-1];var f=u[0],c=[];r=t.CFF.readIndex(e,r,c);var d=[];for(s=0;s<c.length-1;s++)d.push(a.readASCII(e,r+c[s],c[s+1]-c[s]));if(r+=c[c.length-1],t.CFF.readSubrs(e,r,f),f.CharStrings){r=f.CharStrings,c=[],r=t.CFF.readIndex(e,r,c);var h=[];for(s=0;s<c.length-1;s++)h.push(a.readBytes(e,r+c[s],c[s+1]-c[s]));f.CharStrings=h}if(f.ROS){r=f.FDArray;var p=[];for(r=t.CFF.readIndex(e,r,p),f.FDArray=[],s=0;s<p.length-1;s++){var v=t.CFF.readDict(e,r+p[s],r+p[s+1]);t.CFF._readFDict(e,v,d),f.FDArray.push(v)}r+=p[p.length-1],r=f.FDSelect,f.FDSelect=[];var m=e[r];if(r++,3!=m)throw m;var g=a.readUshort(e,r);for(r+=2,s=0;s<g+1;s++)f.FDSelect.push(a.readUshort(e,r),e[r+2]),r+=3}return f.Encoding&&(f.Encoding=t.CFF.readEncoding(e,f.Encoding,f.CharStrings.length)),f.charset&&(f.charset=t.CFF.readCharset(e,f.charset,f.CharStrings.length)),t.CFF._readFDict(e,f,d),f},t.CFF._readFDict=function(e,r,n){var a;for(var i in r.Private&&(a=r.Private[1],r.Private=t.CFF.readDict(e,a,a+r.Private[0]),r.Private.Subrs&&t.CFF.readSubrs(e,a+r.Private.Subrs,r.Private)),r)-1!=["FamilyName","FontName","FullName","Notice","version","Copyright"].indexOf(i)&&(r[i]=n[r[i]-426+35])},t.CFF.readSubrs=function(e,r,n){var a=t._bin,i=[];r=t.CFF.readIndex(e,r,i);var o=i.length;n.Bias=o<1240?107:o<33900?1131:32768,n.Subrs=[];for(var s=0;s<i.length-1;s++)n.Subrs.push(a.readBytes(e,r+i[s],i[s+1]-i[s]))},t.CFF.tableSE=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,0,111,112,113,114,0,115,116,117,118,119,120,121,122,0,123,0,124,125,126,127,128,129,130,131,0,132,133,0,134,135,136,137,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,138,0,139,0,0,0,0,140,141,142,143,0,0,0,0,0,144,0,0,0,145,0,0,146,147,148,149,0,0,0,0],t.CFF.glyphByUnicode=function(e,t){for(var r=0;r<e.charset.length;r++)if(e.charset[r]==t)return r;return -1},t.CFF.glyphBySE=function(e,r){return r<0||r>255?-1:t.CFF.glyphByUnicode(e,t.CFF.tableSE[r])},t.CFF.readEncoding=function(e,r,n){t._bin;var a=[".notdef"],i=e[r];if(r++,0!=i)throw"error: unknown encoding format: "+i;var o=e[r];r++;for(var s=0;s<o;s++)a.push(e[r+s]);return a},t.CFF.readCharset=function(e,r,n){var a=t._bin,i=[".notdef"],o=e[r];if(r++,0==o)for(var s=0;s<n;s++){var l=a.readUshort(e,r);r+=2,i.push(l)}else{if(1!=o&&2!=o)throw"error: format: "+o;for(;i.length<n;){l=a.readUshort(e,r),r+=2;var u=0;for(1==o?(u=e[r],r++):(u=a.readUshort(e,r),r+=2),s=0;s<=u;s++)i.push(l),l++}}return i},t.CFF.readIndex=function(e,r,n){var a=t._bin,i=a.readUshort(e,r)+1,o=e[r+=2];if(r++,1==o)for(var s=0;s<i;s++)n.push(e[r+s]);else if(2==o)for(s=0;s<i;s++)n.push(a.readUshort(e,r+2*s));else if(3==o)for(s=0;s<i;s++)n.push(0xffffff&a.readUint(e,r+3*s-1));else if(1!=i)throw"unsupported offset size: "+o+", count: "+i;return(r+=i*o)-1},t.CFF.getCharString=function(e,r,n){var a=t._bin,i=e[r],o=e[r+1];e[r+2],e[r+3],e[r+4];var s=1,l=null,u=null;i<=20&&(l=i,s=1),12==i&&(l=100*i+o,s=2),21<=i&&i<=27&&(l=i,s=1),28==i&&(u=a.readShort(e,r+1),s=3),29<=i&&i<=31&&(l=i,s=1),32<=i&&i<=246&&(u=i-139,s=1),247<=i&&i<=250&&(u=256*(i-247)+o+108,s=2),251<=i&&i<=254&&(u=-(256*(i-251))-o-108,s=2),255==i&&(u=a.readInt(e,r+1)/65535,s=5),n.val=null!=u?u:"o"+l,n.size=s},t.CFF.readCharString=function(e,r,n){for(var a=r+n,i=t._bin,o=[];r<a;){var s=e[r],l=e[r+1];e[r+2],e[r+3],e[r+4];var u=1,f=null,c=null;s<=20&&(f=s,u=1),12==s&&(f=100*s+l,u=2),19!=s&&20!=s||(f=s,u=2),21<=s&&s<=27&&(f=s,u=1),28==s&&(c=i.readShort(e,r+1),u=3),29<=s&&s<=31&&(f=s,u=1),32<=s&&s<=246&&(c=s-139,u=1),247<=s&&s<=250&&(c=256*(s-247)+l+108,u=2),251<=s&&s<=254&&(c=-(256*(s-251))-l-108,u=2),255==s&&(c=i.readInt(e,r+1)/65535,u=5),o.push(null!=c?c:"o"+f),r+=u}return o},t.CFF.readDict=function(e,r,n){for(var a=t._bin,i={},o=[];r<n;){var s=e[r],l=e[r+1];e[r+2],e[r+3],e[r+4];var u=1,f=null,c=null;if(28==s&&(c=a.readShort(e,r+1),u=3),29==s&&(c=a.readInt(e,r+1),u=5),32<=s&&s<=246&&(c=s-139,u=1),247<=s&&s<=250&&(c=256*(s-247)+l+108,u=2),251<=s&&s<=254&&(c=-(256*(s-251))-l-108,u=2),255==s)throw c=a.readInt(e,r+1)/65535,u=5,"unknown number";if(30==s){var d=[];for(u=1;;){var h=e[r+u];u++;var p=h>>4,v=15&h;if(15!=p&&d.push(p),15!=v&&d.push(v),15==v)break}for(var m="",g=[0,1,2,3,4,5,6,7,8,9,".","e","e-","reserved","-","endOfNumber"],y=0;y<d.length;y++)m+=g[d[y]];c=parseFloat(m)}s<=21&&(f=["version","Notice","FullName","FamilyName","Weight","FontBBox","BlueValues","OtherBlues","FamilyBlues","FamilyOtherBlues","StdHW","StdVW","escape","UniqueID","XUID","charset","Encoding","CharStrings","Private","Subrs","defaultWidthX","nominalWidthX"][s],u=1,12==s)&&(f=["Copyright","isFixedPitch","ItalicAngle","UnderlinePosition","UnderlineThickness","PaintType","CharstringType","FontMatrix","StrokeWidth","BlueScale","BlueShift","BlueFuzz","StemSnapH","StemSnapV","ForceBold",0,0,"LanguageGroup","ExpansionFactor","initialRandomSeed","SyntheticBase","PostScript","BaseFontName","BaseFontBlend",0,0,0,0,0,0,"ROS","CIDFontVersion","CIDFontRevision","CIDFontType","CIDCount","UIDBase","FDArray","FDSelect","FontName"][l],u=2),null!=f?(i[f]=1==o.length?o[0]:o,o=[]):o.push(c),r+=u}return i},t.cmap={},t.cmap.parse=function(e,r,n){e=new Uint8Array(e.buffer,r,n),r=0;var a=t._bin,i={};a.readUshort(e,r),r+=2;var o=a.readUshort(e,r);r+=2;var s=[];i.tables=[];for(var l=0;l<o;l++){var u=a.readUshort(e,r);r+=2;var f=a.readUshort(e,r);r+=2;var c=a.readUint(e,r);r+=4;var d="p"+u+"e"+f,h=s.indexOf(c);if(-1==h){h=i.tables.length,s.push(c);var p,v=a.readUshort(e,c);0==v?p=t.cmap.parse0(e,c):4==v?p=t.cmap.parse4(e,c):6==v?p=t.cmap.parse6(e,c):12==v?p=t.cmap.parse12(e,c):console.debug("unknown format: "+v,u,f,c),i.tables.push(p)}if(null!=i[d])throw"multiple tables for one platform+encoding";i[d]=h}return i},t.cmap.parse0=function(e,r){var n=t._bin,a={};a.format=n.readUshort(e,r),r+=2;var i=n.readUshort(e,r);r+=2,n.readUshort(e,r),r+=2,a.map=[];for(var o=0;o<i-6;o++)a.map.push(e[r+o]);return a},t.cmap.parse4=function(e,r){var n=t._bin,a=r,i={};i.format=n.readUshort(e,r),r+=2;var o=n.readUshort(e,r);r+=2,n.readUshort(e,r),r+=2;var s=n.readUshort(e,r);r+=2;var l=s/2;i.searchRange=n.readUshort(e,r),r+=2,i.entrySelector=n.readUshort(e,r),r+=2,i.rangeShift=n.readUshort(e,r),r+=2,i.endCount=n.readUshorts(e,r,l),r+=2*l,r+=2,i.startCount=n.readUshorts(e,r,l),r+=2*l,i.idDelta=[];for(var u=0;u<l;u++)i.idDelta.push(n.readShort(e,r)),r+=2;for(i.idRangeOffset=n.readUshorts(e,r,l),r+=2*l,i.glyphIdArray=[];r<a+o;)i.glyphIdArray.push(n.readUshort(e,r)),r+=2;return i},t.cmap.parse6=function(e,r){var n=t._bin,a={};a.format=n.readUshort(e,r),r+=2,n.readUshort(e,r),r+=2,n.readUshort(e,r),r+=2,a.firstCode=n.readUshort(e,r),r+=2;var i=n.readUshort(e,r);r+=2,a.glyphIdArray=[];for(var o=0;o<i;o++)a.glyphIdArray.push(n.readUshort(e,r)),r+=2;return a},t.cmap.parse12=function(e,r){var n=t._bin,a={};a.format=n.readUshort(e,r),r+=2,r+=2,n.readUint(e,r),r+=4,n.readUint(e,r),r+=4;var i=n.readUint(e,r);r+=4,a.groups=[];for(var o=0;o<i;o++){var s=r+12*o,l=n.readUint(e,s+0),u=n.readUint(e,s+4),f=n.readUint(e,s+8);a.groups.push([l,u,f])}return a},t.glyf={},t.glyf.parse=function(e,t,r,n){for(var a=[],i=0;i<n.maxp.numGlyphs;i++)a.push(null);return a},t.glyf._parseGlyf=function(e,r){var n,a=t._bin,i=e._data,o=t._tabOffset(i,"glyf",e._offset)+e.loca[r];if(e.loca[r]==e.loca[r+1])return null;var s={};if(s.noc=a.readShort(i,o),o+=2,s.xMin=a.readShort(i,o),o+=2,s.yMin=a.readShort(i,o),o+=2,s.xMax=a.readShort(i,o),o+=2,s.yMax=a.readShort(i,o),o+=2,s.xMin>=s.xMax||s.yMin>=s.yMax)return null;if(s.noc>0){s.endPts=[];for(var l=0;l<s.noc;l++)s.endPts.push(a.readUshort(i,o)),o+=2;var u=a.readUshort(i,o);if(o+=2,i.length-o<u)return null;s.instructions=a.readBytes(i,o,u),o+=u;var f=s.endPts[s.noc-1]+1;for(l=0,s.flags=[];l<f;l++){var c=i[o];if(o++,s.flags.push(c),0!=(8&c)){var d=i[o];o++;for(var h=0;h<d;h++)s.flags.push(c),l++}}for(l=0,s.xs=[];l<f;l++){var p=0!=(2&s.flags[l]),v=0!=(16&s.flags[l]);p?(s.xs.push(v?i[o]:-i[o]),o++):v?s.xs.push(0):(s.xs.push(a.readShort(i,o)),o+=2)}for(l=0,s.ys=[];l<f;l++)p=0!=(4&s.flags[l]),v=0!=(32&s.flags[l]),p?(s.ys.push(v?i[o]:-i[o]),o++):v?s.ys.push(0):(s.ys.push(a.readShort(i,o)),o+=2);var m=0,g=0;for(l=0;l<f;l++)m+=s.xs[l],g+=s.ys[l],s.xs[l]=m,s.ys[l]=g}else{s.parts=[];do{n=a.readUshort(i,o),o+=2;var y={m:{a:1,b:0,c:0,d:1,tx:0,ty:0},p1:-1,p2:-1};if(s.parts.push(y),y.glyphIndex=a.readUshort(i,o),o+=2,1&n){var b=a.readShort(i,o);o+=2;var x=a.readShort(i,o);o+=2}else b=a.readInt8(i,o),o++,x=a.readInt8(i,o),o++;2&n?(y.m.tx=b,y.m.ty=x):(y.p1=b,y.p2=x),8&n?(y.m.a=y.m.d=a.readF2dot14(i,o),o+=2):64&n?(y.m.a=a.readF2dot14(i,o),o+=2,y.m.d=a.readF2dot14(i,o),o+=2):128&n&&(y.m.a=a.readF2dot14(i,o),o+=2,y.m.b=a.readF2dot14(i,o),o+=2,y.m.c=a.readF2dot14(i,o),o+=2,y.m.d=a.readF2dot14(i,o),o+=2)}while(32&n)if(256&n){var S=a.readUshort(i,o);for(o+=2,s.instr=[],l=0;l<S;l++)s.instr.push(i[o]),o++}}return s},t.GDEF={},t.GDEF.parse=function(e,r,n,a){var i=r;r+=4;var o=t._bin.readUshort(e,r);return{glyphClassDef:0===o?null:t._lctf.readClassDef(e,i+o)}},t.GPOS={},t.GPOS.parse=function(e,r,n,a){return t._lctf.parse(e,r,n,a,t.GPOS.subt)},t.GPOS.subt=function(e,r,n,a){var i=t._bin,o=n,s={};if(s.fmt=i.readUshort(e,n),n+=2,1==r||2==r||3==r||7==r||8==r&&s.fmt<=2){var l=i.readUshort(e,n);n+=2,s.coverage=t._lctf.readCoverage(e,l+o)}if(1==r&&1==s.fmt){var u=i.readUshort(e,n);n+=2,0!=u&&(s.pos=t.GPOS.readValueRecord(e,n,u))}else if(2==r&&s.fmt>=1&&s.fmt<=2){u=i.readUshort(e,n),n+=2;var f=i.readUshort(e,n);n+=2;var c=t._lctf.numOfOnes(u),d=t._lctf.numOfOnes(f);if(1==s.fmt){s.pairsets=[];var h=i.readUshort(e,n);n+=2;for(var p=0;p<h;p++){var v=o+i.readUshort(e,n);n+=2;var m=i.readUshort(e,v);v+=2;for(var g=[],y=0;y<m;y++){var b=i.readUshort(e,v);v+=2,0!=u&&(_=t.GPOS.readValueRecord(e,v,u),v+=2*c),0!=f&&(k=t.GPOS.readValueRecord(e,v,f),v+=2*d),g.push({gid2:b,val1:_,val2:k})}s.pairsets.push(g)}}if(2==s.fmt){var x=i.readUshort(e,n);n+=2;var S=i.readUshort(e,n);n+=2;var w=i.readUshort(e,n);n+=2;var U=i.readUshort(e,n);for(n+=2,s.classDef1=t._lctf.readClassDef(e,o+x),s.classDef2=t._lctf.readClassDef(e,o+S),s.matrix=[],p=0;p<w;p++){var T=[];for(y=0;y<U;y++){var _=null,k=null;0!=u&&(_=t.GPOS.readValueRecord(e,n,u),n+=2*c),0!=f&&(k=t.GPOS.readValueRecord(e,n,f),n+=2*d),T.push({val1:_,val2:k})}s.matrix.push(T)}}}else if(4==r&&1==s.fmt)s.markCoverage=t._lctf.readCoverage(e,i.readUshort(e,n)+o),s.baseCoverage=t._lctf.readCoverage(e,i.readUshort(e,n+2)+o),s.markClassCount=i.readUshort(e,n+4),s.markArray=t.GPOS.readMarkArray(e,i.readUshort(e,n+6)+o),s.baseArray=t.GPOS.readBaseArray(e,i.readUshort(e,n+8)+o,s.markClassCount);else if(6==r&&1==s.fmt)s.mark1Coverage=t._lctf.readCoverage(e,i.readUshort(e,n)+o),s.mark2Coverage=t._lctf.readCoverage(e,i.readUshort(e,n+2)+o),s.markClassCount=i.readUshort(e,n+4),s.mark1Array=t.GPOS.readMarkArray(e,i.readUshort(e,n+6)+o),s.mark2Array=t.GPOS.readBaseArray(e,i.readUshort(e,n+8)+o,s.markClassCount);else{if(9==r&&1==s.fmt){var M=i.readUshort(e,n);n+=2;var E=i.readUint(e,n);if(n+=4,9==a.ltype)a.ltype=M;else if(a.ltype!=M)throw"invalid extension substitution";return t.GPOS.subt(e,a.ltype,o+E)}console.debug("unsupported GPOS table LookupType",r,"format",s.fmt)}return s},t.GPOS.readValueRecord=function(e,r,n){var a=t._bin,i=[];return i.push(1&n?a.readShort(e,r):0),r+=1&n?2:0,i.push(2&n?a.readShort(e,r):0),r+=2&n?2:0,i.push(4&n?a.readShort(e,r):0),r+=4&n?2:0,i.push(8&n?a.readShort(e,r):0),r+=8&n?2:0,i},t.GPOS.readBaseArray=function(e,r,n){var a=t._bin,i=[],o=r,s=a.readUshort(e,r);r+=2;for(var l=0;l<s;l++){for(var u=[],f=0;f<n;f++)u.push(t.GPOS.readAnchorRecord(e,o+a.readUshort(e,r))),r+=2;i.push(u)}return i},t.GPOS.readMarkArray=function(e,r){var n=t._bin,a=[],i=r,o=n.readUshort(e,r);r+=2;for(var s=0;s<o;s++){var l=t.GPOS.readAnchorRecord(e,n.readUshort(e,r+2)+i);l.markClass=n.readUshort(e,r),a.push(l),r+=4}return a},t.GPOS.readAnchorRecord=function(e,r){var n=t._bin,a={};return a.fmt=n.readUshort(e,r),a.x=n.readShort(e,r+2),a.y=n.readShort(e,r+4),a},t.GSUB={},t.GSUB.parse=function(e,r,n,a){return t._lctf.parse(e,r,n,a,t.GSUB.subt)},t.GSUB.subt=function(e,r,n,a){var i=t._bin,o=n,s={};if(s.fmt=i.readUshort(e,n),n+=2,1!=r&&2!=r&&4!=r&&5!=r&&6!=r)return null;if(1==r||2==r||4==r||5==r&&s.fmt<=2||6==r&&s.fmt<=2){var l=i.readUshort(e,n);n+=2,s.coverage=t._lctf.readCoverage(e,o+l)}if(1==r&&s.fmt>=1&&s.fmt<=2){if(1==s.fmt)s.delta=i.readShort(e,n),n+=2;else if(2==s.fmt){var u=i.readUshort(e,n);n+=2,s.newg=i.readUshorts(e,n,u),n+=2*s.newg.length}}else if(2==r&&1==s.fmt){u=i.readUshort(e,n),n+=2,s.seqs=[];for(var f=0;f<u;f++){var c=i.readUshort(e,n)+o;n+=2;var d=i.readUshort(e,c);s.seqs.push(i.readUshorts(e,c+2,d))}}else if(4==r)for(s.vals=[],u=i.readUshort(e,n),n+=2,f=0;f<u;f++){var h=i.readUshort(e,n);n+=2,s.vals.push(t.GSUB.readLigatureSet(e,o+h))}else if(5==r&&2==s.fmt){if(2==s.fmt){var p=i.readUshort(e,n);n+=2,s.cDef=t._lctf.readClassDef(e,o+p),s.scset=[];var v=i.readUshort(e,n);for(n+=2,f=0;f<v;f++){var m=i.readUshort(e,n);n+=2,s.scset.push(0==m?null:t.GSUB.readSubClassSet(e,o+m))}}}else if(6==r&&3==s.fmt){if(3==s.fmt){for(f=0;f<3;f++){u=i.readUshort(e,n),n+=2;for(var g=[],y=0;y<u;y++)g.push(t._lctf.readCoverage(e,o+i.readUshort(e,n+2*y)));n+=2*u,0==f&&(s.backCvg=g),1==f&&(s.inptCvg=g),2==f&&(s.ahedCvg=g)}u=i.readUshort(e,n),n+=2,s.lookupRec=t.GSUB.readSubstLookupRecords(e,n,u)}}else{if(7==r&&1==s.fmt){var b=i.readUshort(e,n);n+=2;var x=i.readUint(e,n);if(n+=4,9==a.ltype)a.ltype=b;else if(a.ltype!=b)throw"invalid extension substitution";return t.GSUB.subt(e,a.ltype,o+x)}console.debug("unsupported GSUB table LookupType",r,"format",s.fmt)}return s},t.GSUB.readSubClassSet=function(e,r){var n=t._bin.readUshort,a=r,i=[],o=n(e,r);r+=2;for(var s=0;s<o;s++){var l=n(e,r);r+=2,i.push(t.GSUB.readSubClassRule(e,a+l))}return i},t.GSUB.readSubClassRule=function(e,r){var n=t._bin.readUshort,a={},i=n(e,r),o=n(e,r+=2);r+=2,a.input=[];for(var s=0;s<i-1;s++)a.input.push(n(e,r)),r+=2;return a.substLookupRecords=t.GSUB.readSubstLookupRecords(e,r,o),a},t.GSUB.readSubstLookupRecords=function(e,r,n){for(var a=t._bin.readUshort,i=[],o=0;o<n;o++)i.push(a(e,r),a(e,r+2)),r+=4;return i},t.GSUB.readChainSubClassSet=function(e,r){var n=t._bin,a=r,i=[],o=n.readUshort(e,r);r+=2;for(var s=0;s<o;s++){var l=n.readUshort(e,r);r+=2,i.push(t.GSUB.readChainSubClassRule(e,a+l))}return i},t.GSUB.readChainSubClassRule=function(e,r){for(var n=t._bin,a={},i=["backtrack","input","lookahead"],o=0;o<i.length;o++){var s=n.readUshort(e,r);r+=2,1==o&&s--,a[i[o]]=n.readUshorts(e,r,s),r+=2*a[i[o]].length}return s=n.readUshort(e,r),r+=2,a.subst=n.readUshorts(e,r,2*s),r+=2*a.subst.length,a},t.GSUB.readLigatureSet=function(e,r){var n=t._bin,a=r,i=[],o=n.readUshort(e,r);r+=2;for(var s=0;s<o;s++){var l=n.readUshort(e,r);r+=2,i.push(t.GSUB.readLigature(e,a+l))}return i},t.GSUB.readLigature=function(e,r){var n=t._bin,a={chain:[]};a.nglyph=n.readUshort(e,r),r+=2;var i=n.readUshort(e,r);r+=2;for(var o=0;o<i-1;o++)a.chain.push(n.readUshort(e,r)),r+=2;return a},t.head={},t.head.parse=function(e,r,n){var a=t._bin,i={};return a.readFixed(e,r),r+=4,i.fontRevision=a.readFixed(e,r),r+=4,a.readUint(e,r),r+=4,a.readUint(e,r),r+=4,i.flags=a.readUshort(e,r),r+=2,i.unitsPerEm=a.readUshort(e,r),r+=2,i.created=a.readUint64(e,r),r+=8,i.modified=a.readUint64(e,r),r+=8,i.xMin=a.readShort(e,r),r+=2,i.yMin=a.readShort(e,r),r+=2,i.xMax=a.readShort(e,r),r+=2,i.yMax=a.readShort(e,r),r+=2,i.macStyle=a.readUshort(e,r),r+=2,i.lowestRecPPEM=a.readUshort(e,r),r+=2,i.fontDirectionHint=a.readShort(e,r),r+=2,i.indexToLocFormat=a.readShort(e,r),r+=2,i.glyphDataFormat=a.readShort(e,r),r+=2,i},t.hhea={},t.hhea.parse=function(e,r,n){var a=t._bin,i={};return a.readFixed(e,r),r+=4,i.ascender=a.readShort(e,r),r+=2,i.descender=a.readShort(e,r),r+=2,i.lineGap=a.readShort(e,r),r+=2,i.advanceWidthMax=a.readUshort(e,r),r+=2,i.minLeftSideBearing=a.readShort(e,r),r+=2,i.minRightSideBearing=a.readShort(e,r),r+=2,i.xMaxExtent=a.readShort(e,r),r+=2,i.caretSlopeRise=a.readShort(e,r),r+=2,i.caretSlopeRun=a.readShort(e,r),r+=2,i.caretOffset=a.readShort(e,r),r+=2,r+=8,i.metricDataFormat=a.readShort(e,r),r+=2,i.numberOfHMetrics=a.readUshort(e,r),r+=2,i},t.hmtx={},t.hmtx.parse=function(e,r,n,a){for(var i=t._bin,o={aWidth:[],lsBearing:[]},s=0,l=0,u=0;u<a.maxp.numGlyphs;u++)u<a.hhea.numberOfHMetrics&&(s=i.readUshort(e,r),r+=2,l=i.readShort(e,r),r+=2),o.aWidth.push(s),o.lsBearing.push(l);return o},t.kern={},t.kern.parse=function(e,r,n,a){var i=t._bin,o=i.readUshort(e,r);if(r+=2,1==o)return t.kern.parseV1(e,r-2,n,a);var s=i.readUshort(e,r);r+=2;for(var l={glyph1:[],rval:[]},u=0;u<s;u++){r+=2,n=i.readUshort(e,r),r+=2;var f=i.readUshort(e,r);r+=2;var c=f>>>8;if(0!=(c&=15))throw"unknown kern table format: "+c;r=t.kern.readFormat0(e,r,l)}return l},t.kern.parseV1=function(e,r,n,a){var i=t._bin;i.readFixed(e,r),r+=4;var o=i.readUint(e,r);r+=4;for(var s={glyph1:[],rval:[]},l=0;l<o;l++){i.readUint(e,r),r+=4;var u=i.readUshort(e,r);r+=2,i.readUshort(e,r),r+=2;var f=u>>>8;if(0!=(f&=15))throw"unknown kern table format: "+f;r=t.kern.readFormat0(e,r,s)}return s},t.kern.readFormat0=function(e,r,n){var a=t._bin,i=-1,o=a.readUshort(e,r);r+=2,a.readUshort(e,r),r+=2,a.readUshort(e,r),r+=2,a.readUshort(e,r),r+=2;for(var s=0;s<o;s++){var l=a.readUshort(e,r);r+=2;var u=a.readUshort(e,r);r+=2;var f=a.readShort(e,r);r+=2,l!=i&&(n.glyph1.push(l),n.rval.push({glyph2:[],vals:[]}));var c=n.rval[n.rval.length-1];c.glyph2.push(u),c.vals.push(f),i=l}return r},t.loca={},t.loca.parse=function(e,r,n,a){var i=t._bin,o=[],s=a.head.indexToLocFormat,l=a.maxp.numGlyphs+1;if(0==s)for(var u=0;u<l;u++)o.push(i.readUshort(e,r+(u<<1))<<1);if(1==s)for(u=0;u<l;u++)o.push(i.readUint(e,r+(u<<2)));return o},t.maxp={},t.maxp.parse=function(e,r,n){var a=t._bin,i={},o=a.readUint(e,r);return r+=4,i.numGlyphs=a.readUshort(e,r),r+=2,65536==o&&(i.maxPoints=a.readUshort(e,r),r+=2,i.maxContours=a.readUshort(e,r),r+=2,i.maxCompositePoints=a.readUshort(e,r),r+=2,i.maxCompositeContours=a.readUshort(e,r),r+=2,i.maxZones=a.readUshort(e,r),r+=2,i.maxTwilightPoints=a.readUshort(e,r),r+=2,i.maxStorage=a.readUshort(e,r),r+=2,i.maxFunctionDefs=a.readUshort(e,r),r+=2,i.maxInstructionDefs=a.readUshort(e,r),r+=2,i.maxStackElements=a.readUshort(e,r),r+=2,i.maxSizeOfInstructions=a.readUshort(e,r),r+=2,i.maxComponentElements=a.readUshort(e,r),r+=2,i.maxComponentDepth=a.readUshort(e,r),r+=2),i},t.name={},t.name.parse=function(e,r,n){var a=t._bin,i={};a.readUshort(e,r),r+=2;var o=a.readUshort(e,r);r+=2,a.readUshort(e,r);for(var s,l=["copyright","fontFamily","fontSubfamily","ID","fullName","version","postScriptName","trademark","manufacturer","designer","description","urlVendor","urlDesigner","licence","licenceURL","---","typoFamilyName","typoSubfamilyName","compatibleFull","sampleText","postScriptCID","wwsFamilyName","wwsSubfamilyName","lightPalette","darkPalette"],u=r+=2,f=0;f<o;f++){var c=a.readUshort(e,r);r+=2;var d=a.readUshort(e,r);r+=2;var h=a.readUshort(e,r);r+=2;var p=a.readUshort(e,r);r+=2;var v=a.readUshort(e,r);r+=2;var m=a.readUshort(e,r);r+=2;var g,y=l[p],b=u+12*o+m;if(0==c)g=a.readUnicode(e,b,v/2);else if(3==c&&0==d)g=a.readUnicode(e,b,v/2);else if(0==d)g=a.readASCII(e,b,v);else if(1==d)g=a.readUnicode(e,b,v/2);else if(3==d)g=a.readUnicode(e,b,v/2);else{if(1!=c)throw"unknown encoding "+d+", platformID: "+c;g=a.readASCII(e,b,v),console.debug("reading unknown MAC encoding "+d+" as ASCII")}var x="p"+c+","+h.toString(16);null==i[x]&&(i[x]={}),i[x][void 0!==y?y:p]=g,i[x]._lang=h}for(var S in i)if(null!=i[S].postScriptName&&1033==i[S]._lang)return i[S];for(var S in i)if(null!=i[S].postScriptName&&0==i[S]._lang)return i[S];for(var S in i)if(null!=i[S].postScriptName&&3084==i[S]._lang)return i[S];for(var S in i)if(null!=i[S].postScriptName)return i[S];for(var S in i){s=S;break}return console.debug("returning name table with languageID "+i[s]._lang),i[s]},t["OS/2"]={},t["OS/2"].parse=function(e,r,n){var a=t._bin.readUshort(e,r);r+=2;var i={};if(0==a)t["OS/2"].version0(e,r,i);else if(1==a)t["OS/2"].version1(e,r,i);else if(2==a||3==a||4==a)t["OS/2"].version2(e,r,i);else{if(5!=a)throw"unknown OS/2 table version: "+a;t["OS/2"].version5(e,r,i)}return i},t["OS/2"].version0=function(e,r,n){var a=t._bin;return n.xAvgCharWidth=a.readShort(e,r),r+=2,n.usWeightClass=a.readUshort(e,r),r+=2,n.usWidthClass=a.readUshort(e,r),r+=2,n.fsType=a.readUshort(e,r),r+=2,n.ySubscriptXSize=a.readShort(e,r),r+=2,n.ySubscriptYSize=a.readShort(e,r),r+=2,n.ySubscriptXOffset=a.readShort(e,r),r+=2,n.ySubscriptYOffset=a.readShort(e,r),r+=2,n.ySuperscriptXSize=a.readShort(e,r),r+=2,n.ySuperscriptYSize=a.readShort(e,r),r+=2,n.ySuperscriptXOffset=a.readShort(e,r),r+=2,n.ySuperscriptYOffset=a.readShort(e,r),r+=2,n.yStrikeoutSize=a.readShort(e,r),r+=2,n.yStrikeoutPosition=a.readShort(e,r),r+=2,n.sFamilyClass=a.readShort(e,r),r+=2,n.panose=a.readBytes(e,r,10),r+=10,n.ulUnicodeRange1=a.readUint(e,r),r+=4,n.ulUnicodeRange2=a.readUint(e,r),r+=4,n.ulUnicodeRange3=a.readUint(e,r),r+=4,n.ulUnicodeRange4=a.readUint(e,r),r+=4,n.achVendID=[a.readInt8(e,r),a.readInt8(e,r+1),a.readInt8(e,r+2),a.readInt8(e,r+3)],r+=4,n.fsSelection=a.readUshort(e,r),r+=2,n.usFirstCharIndex=a.readUshort(e,r),r+=2,n.usLastCharIndex=a.readUshort(e,r),r+=2,n.sTypoAscender=a.readShort(e,r),r+=2,n.sTypoDescender=a.readShort(e,r),r+=2,n.sTypoLineGap=a.readShort(e,r),r+=2,n.usWinAscent=a.readUshort(e,r),r+=2,n.usWinDescent=a.readUshort(e,r),r+=2},t["OS/2"].version1=function(e,r,n){var a=t._bin;return r=t["OS/2"].version0(e,r,n),n.ulCodePageRange1=a.readUint(e,r),r+=4,n.ulCodePageRange2=a.readUint(e,r),r+=4},t["OS/2"].version2=function(e,r,n){var a=t._bin;return r=t["OS/2"].version1(e,r,n),n.sxHeight=a.readShort(e,r),r+=2,n.sCapHeight=a.readShort(e,r),r+=2,n.usDefault=a.readUshort(e,r),r+=2,n.usBreak=a.readUshort(e,r),r+=2,n.usMaxContext=a.readUshort(e,r),r+=2},t["OS/2"].version5=function(e,r,n){var a=t._bin;return r=t["OS/2"].version2(e,r,n),n.usLowerOpticalPointSize=a.readUshort(e,r),r+=2,n.usUpperOpticalPointSize=a.readUshort(e,r),r+=2},t.post={},t.post.parse=function(e,r,n){var a=t._bin,i={};return i.version=a.readFixed(e,r),r+=4,i.italicAngle=a.readFixed(e,r),r+=4,i.underlinePosition=a.readShort(e,r),r+=2,i.underlineThickness=a.readShort(e,r),r+=2,i},null==t&&(t={}),null==t.U&&(t.U={}),t.U.codeToGlyph=function(e,t){var r=e.cmap,n=-1;if(null!=r.p0e4?n=r.p0e4:null!=r.p3e1?n=r.p3e1:null!=r.p1e0?n=r.p1e0:null!=r.p0e3&&(n=r.p0e3),-1==n)throw"no familiar platform and encoding!";var a=r.tables[n];if(0==a.format)return t>=a.map.length?0:a.map[t];if(4==a.format){for(var i=-1,o=0;o<a.endCount.length;o++)if(t<=a.endCount[o]){i=o;break}return -1==i||a.startCount[i]>t?0:65535&(0!=a.idRangeOffset[i]?a.glyphIdArray[t-a.startCount[i]+(a.idRangeOffset[i]>>1)-(a.idRangeOffset.length-i)]:t+a.idDelta[i])}if(12==a.format){if(t>a.groups[a.groups.length-1][1])return 0;for(o=0;o<a.groups.length;o++){var s=a.groups[o];if(s[0]<=t&&t<=s[1])return s[2]+(t-s[0])}return 0}throw"unknown cmap table format "+a.format},t.U.glyphToPath=function(e,r){var n={cmds:[],crds:[]};if(e.SVG&&e.SVG.entries[r]){var a=e.SVG.entries[r];return null==a?n:("string"==typeof a&&(a=t.SVG.toPath(a),e.SVG.entries[r]=a),a)}if(e.CFF){var i={x:0,y:0,stack:[],nStems:0,haveWidth:!1,width:e.CFF.Private?e.CFF.Private.defaultWidthX:0,open:!1},o=e.CFF,s=e.CFF.Private;if(o.ROS){for(var l=0;o.FDSelect[l+2]<=r;)l+=2;s=o.FDArray[o.FDSelect[l+1]].Private}t.U._drawCFF(e.CFF.CharStrings[r],i,o,s,n)}else e.glyf&&t.U._drawGlyf(r,e,n);return n},t.U._drawGlyf=function(e,r,n){var a=r.glyf[e];null==a&&(a=r.glyf[e]=t.glyf._parseGlyf(r,e)),null!=a&&(a.noc>-1?t.U._simpleGlyph(a,n):t.U._compoGlyph(a,r,n))},t.U._simpleGlyph=function(e,r){for(var n=0;n<e.noc;n++){for(var a=0==n?0:e.endPts[n-1]+1,i=e.endPts[n],o=a;o<=i;o++){var s=o==a?i:o-1,l=o==i?a:o+1,u=1&e.flags[o],f=1&e.flags[s],c=1&e.flags[l],d=e.xs[o],h=e.ys[o];if(o==a)if(u){if(!f){t.U.P.moveTo(r,d,h);continue}t.U.P.moveTo(r,e.xs[s],e.ys[s])}else f?t.U.P.moveTo(r,e.xs[s],e.ys[s]):t.U.P.moveTo(r,(e.xs[s]+d)/2,(e.ys[s]+h)/2);u?f&&t.U.P.lineTo(r,d,h):c?t.U.P.qcurveTo(r,d,h,e.xs[l],e.ys[l]):t.U.P.qcurveTo(r,d,h,(d+e.xs[l])/2,(h+e.ys[l])/2)}t.U.P.closePath(r)}},t.U._compoGlyph=function(e,r,n){for(var a=0;a<e.parts.length;a++){var i={cmds:[],crds:[]},o=e.parts[a];t.U._drawGlyf(o.glyphIndex,r,i);for(var s=o.m,l=0;l<i.crds.length;l+=2){var u=i.crds[l],f=i.crds[l+1];n.crds.push(u*s.a+f*s.b+s.tx),n.crds.push(u*s.c+f*s.d+s.ty)}for(l=0;l<i.cmds.length;l++)n.cmds.push(i.cmds[l])}},t.U._getGlyphClass=function(e,r){var n=t._lctf.getInterval(r,e);return -1==n?0:r[n+2]},t.U._applySubs=function(e,r,n,a){for(var i=e.length-r-1,o=0;o<n.tabs.length;o++)if(null!=n.tabs[o]){var s,l=n.tabs[o];if(!l.coverage||-1!=(s=t._lctf.coverageIndex(l.coverage,e[r]))){if(1==n.ltype)e[r],1==l.fmt?e[r]=e[r]+l.delta:e[r]=l.newg[s];else if(4==n.ltype)for(var u=l.vals[s],f=0;f<u.length;f++){var c=u[f],d=c.chain.length;if(!(d>i)){for(var h=!0,p=0,v=0;v<d;v++){for(;-1==e[r+p+(1+v)];)p++;c.chain[v]!=e[r+p+(1+v)]&&(h=!1)}if(h){for(v=0,e[r]=c.nglyph;v<d+p;v++)e[r+v+1]=-1;break}}}else if(5==n.ltype&&2==l.fmt)for(var m=t._lctf.getInterval(l.cDef,e[r]),g=l.cDef[m+2],y=l.scset[g],b=0;b<y.length;b++){var x=y[b],S=x.input;if(!(S.length>i)){for(h=!0,v=0;v<S.length;v++){var w=t._lctf.getInterval(l.cDef,e[r+1+v]);if(-1==m&&l.cDef[w+2]!=S[v]){h=!1;break}}if(h){var U=x.substLookupRecords;for(f=0;f<U.length;f+=2)U[f],U[f+1]}}}else if(6==n.ltype&&3==l.fmt){if(!t.U._glsCovered(e,l.backCvg,r-l.backCvg.length)||!t.U._glsCovered(e,l.inptCvg,r)||!t.U._glsCovered(e,l.ahedCvg,r+l.inptCvg.length))continue;var T=l.lookupRec;for(b=0;b<T.length;b+=2){m=T[b];var _=a[T[b+1]];t.U._applySubs(e,r+m,_,a)}}}}},t.U._glsCovered=function(e,r,n){for(var a=0;a<r.length;a++)if(-1==t._lctf.coverageIndex(r[a],e[n+a]))return!1;return!0},t.U.glyphsToPath=function(e,r,n){for(var a={cmds:[],crds:[]},i=0,o=0;o<r.length;o++){var s=r[o];if(-1!=s){for(var l=o<r.length-1&&-1!=r[o+1]?r[o+1]:0,u=t.U.glyphToPath(e,s),f=0;f<u.crds.length;f+=2)a.crds.push(u.crds[f]+i),a.crds.push(u.crds[f+1]);for(n&&a.cmds.push(n),f=0;f<u.cmds.length;f++)a.cmds.push(u.cmds[f]);n&&a.cmds.push("X"),i+=e.hmtx.aWidth[s],o<r.length-1&&(i+=t.U.getPairAdjustment(e,s,l))}}return a},t.U.P={},t.U.P.moveTo=function(e,t,r){e.cmds.push("M"),e.crds.push(t,r)},t.U.P.lineTo=function(e,t,r){e.cmds.push("L"),e.crds.push(t,r)},t.U.P.curveTo=function(e,t,r,n,a,i,o){e.cmds.push("C"),e.crds.push(t,r,n,a,i,o)},t.U.P.qcurveTo=function(e,t,r,n,a){e.cmds.push("Q"),e.crds.push(t,r,n,a)},t.U.P.closePath=function(e){e.cmds.push("Z")},t.U._drawCFF=function(e,r,n,a,i){for(var o=r.stack,s=r.nStems,l=r.haveWidth,u=r.width,f=r.open,c=0,d=r.x,h=r.y,p=0,v=0,m=0,g=0,y=0,b=0,x=0,S=0,w=0,U=0,T={val:0,size:0};c<e.length;){t.CFF.getCharString(e,c,T);var _=T.val;if(c+=T.size,"o1"==_||"o18"==_)o.length%2==0||l||(u=o.shift()+a.nominalWidthX),s+=o.length>>1,o.length=0,l=!0;else if("o3"==_||"o23"==_)o.length%2==0||l||(u=o.shift()+a.nominalWidthX),s+=o.length>>1,o.length=0,l=!0;else if("o4"==_)o.length>1&&!l&&(u=o.shift()+a.nominalWidthX,l=!0),f&&t.U.P.closePath(i),h+=o.pop(),t.U.P.moveTo(i,d,h),f=!0;else if("o5"==_)for(;o.length>0;)d+=o.shift(),h+=o.shift(),t.U.P.lineTo(i,d,h);else if("o6"==_||"o7"==_)for(var k=o.length,M="o6"==_,E=0;E<k;E++){var C=o.shift();M?d+=C:h+=C,M=!M,t.U.P.lineTo(i,d,h)}else if("o8"==_||"o24"==_){k=o.length;for(var A=0;A+6<=k;)p=d+o.shift(),v=h+o.shift(),m=p+o.shift(),g=v+o.shift(),d=m+o.shift(),h=g+o.shift(),t.U.P.curveTo(i,p,v,m,g,d,h),A+=6;"o24"==_&&(d+=o.shift(),h+=o.shift(),t.U.P.lineTo(i,d,h))}else{if("o11"==_)break;if("o1234"==_||"o1235"==_||"o1236"==_||"o1237"==_)"o1234"==_&&(v=h,m=(p=d+o.shift())+o.shift(),U=g=v+o.shift(),b=g,S=h,d=(x=(y=(w=m+o.shift())+o.shift())+o.shift())+o.shift(),t.U.P.curveTo(i,p,v,m,g,w,U),t.U.P.curveTo(i,y,b,x,S,d,h)),"o1235"==_&&(p=d+o.shift(),v=h+o.shift(),m=p+o.shift(),g=v+o.shift(),w=m+o.shift(),U=g+o.shift(),y=w+o.shift(),b=U+o.shift(),x=y+o.shift(),S=b+o.shift(),d=x+o.shift(),h=S+o.shift(),o.shift(),t.U.P.curveTo(i,p,v,m,g,w,U),t.U.P.curveTo(i,y,b,x,S,d,h)),"o1236"==_&&(p=d+o.shift(),v=h+o.shift(),m=p+o.shift(),U=g=v+o.shift(),b=g,x=(y=(w=m+o.shift())+o.shift())+o.shift(),S=b+o.shift(),d=x+o.shift(),t.U.P.curveTo(i,p,v,m,g,w,U),t.U.P.curveTo(i,y,b,x,S,d,h)),"o1237"==_&&(p=d+o.shift(),v=h+o.shift(),m=p+o.shift(),g=v+o.shift(),w=m+o.shift(),U=g+o.shift(),y=w+o.shift(),b=U+o.shift(),Math.abs((x=y+o.shift())-d)>Math.abs((S=b+o.shift())-h)?d=x+o.shift():h=S+o.shift(),t.U.P.curveTo(i,p,v,m,g,w,U),t.U.P.curveTo(i,y,b,x,S,d,h));else if("o14"==_){if(o.length>0&&!l&&(u=o.shift()+n.nominalWidthX,l=!0),4==o.length){var D=o.shift(),F=o.shift(),O=o.shift(),P=o.shift(),I=t.CFF.glyphBySE(n,O),R=t.CFF.glyphBySE(n,P);t.U._drawCFF(n.CharStrings[I],r,n,a,i),r.x=D,r.y=F,t.U._drawCFF(n.CharStrings[R],r,n,a,i)}f&&(t.U.P.closePath(i),f=!1)}else if("o19"==_||"o20"==_)o.length%2==0||l||(u=o.shift()+a.nominalWidthX),s+=o.length>>1,o.length=0,l=!0,c+=s+7>>3;else if("o21"==_)o.length>2&&!l&&(u=o.shift()+a.nominalWidthX,l=!0),h+=o.pop(),d+=o.pop(),f&&t.U.P.closePath(i),t.U.P.moveTo(i,d,h),f=!0;else if("o22"==_)o.length>1&&!l&&(u=o.shift()+a.nominalWidthX,l=!0),d+=o.pop(),f&&t.U.P.closePath(i),t.U.P.moveTo(i,d,h),f=!0;else if("o25"==_){for(;o.length>6;)d+=o.shift(),h+=o.shift(),t.U.P.lineTo(i,d,h);p=d+o.shift(),v=h+o.shift(),m=p+o.shift(),g=v+o.shift(),d=m+o.shift(),h=g+o.shift(),t.U.P.curveTo(i,p,v,m,g,d,h)}else if("o26"==_)for(o.length%2&&(d+=o.shift());o.length>0;)p=d,v=h+o.shift(),d=m=p+o.shift(),h=(g=v+o.shift())+o.shift(),t.U.P.curveTo(i,p,v,m,g,d,h);else if("o27"==_)for(o.length%2&&(h+=o.shift());o.length>0;)v=h,m=(p=d+o.shift())+o.shift(),g=v+o.shift(),d=m+o.shift(),h=g,t.U.P.curveTo(i,p,v,m,g,d,h);else if("o10"==_||"o29"==_){var L="o10"==_?a:n;if(0==o.length)console.debug("error: empty stack");else{var B=o.pop(),G=L.Subrs[B+L.Bias];r.x=d,r.y=h,r.nStems=s,r.haveWidth=l,r.width=u,r.open=f,t.U._drawCFF(G,r,n,a,i),d=r.x,h=r.y,s=r.nStems,l=r.haveWidth,u=r.width,f=r.open}}else if("o30"==_||"o31"==_){var j=o.length,z=(A=0,"o31"==_);for(A+=j-(k=-3&j);A<k;)z?(v=h,m=(p=d+o.shift())+o.shift(),h=(g=v+o.shift())+o.shift(),k-A==5?(d=m+o.shift(),A++):d=m,z=!1):(p=d,v=h+o.shift(),m=p+o.shift(),g=v+o.shift(),d=m+o.shift(),k-A==5?(h=g+o.shift(),A++):h=g,z=!0),t.U.P.curveTo(i,p,v,m,g,d,h),A+=4}else{if("o"==(_+"").charAt(0))throw console.debug("Unknown operation: "+_,e),_;o.push(_)}}}r.x=d,r.y=h,r.nStems=s,r.haveWidth=l,r.width=u,r.open=f},e.Typr=r=t,e.default={Typr:r},Object.defineProperty(e,"__esModule",{value:!0}),e).Typr},function(){return function(e){var t=Uint8Array,r=Uint16Array,n=Uint32Array,a=new t([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),i=new t([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),o=new t([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),s=function(e,t){for(var a=new r(31),i=0;i<31;++i)a[i]=t+=1<<e[i-1];var o=new n(a[30]);for(i=1;i<30;++i)for(var s=a[i];s<a[i+1];++s)o[s]=s-a[i]<<5|i;return[a,o]},l=s(a,2),u=l[0],f=l[1];u[28]=258,f[258]=28;for(var c=s(i,0)[0],d=new r(32768),h=0;h<32768;++h){var p=(43690&h)>>>1|(21845&h)<<1;p=(61680&(p=(52428&p)>>>2|(13107&p)<<2))>>>4|(3855&p)<<4,d[h]=((65280&p)>>>8|(255&p)<<8)>>>1}var v=function(e,t,n){for(var a=e.length,i=0,o=new r(t);i<a;++i)++o[e[i]-1];var s,l=new r(t);for(i=0;i<t;++i)l[i]=l[i-1]+o[i-1]<<1;if(n){s=new r(1<<t);var u=15-t;for(i=0;i<a;++i)if(e[i])for(var f=i<<4|e[i],c=t-e[i],h=l[e[i]-1]++<<c,p=h|(1<<c)-1;h<=p;++h)s[d[h]>>>u]=f}else for(s=new r(a),i=0;i<a;++i)e[i]&&(s[i]=d[l[e[i]-1]++]>>>15-e[i]);return s},m=new t(288);for(h=0;h<144;++h)m[h]=8;for(h=144;h<256;++h)m[h]=9;for(h=256;h<280;++h)m[h]=7;for(h=280;h<288;++h)m[h]=8;var g=new t(32);for(h=0;h<32;++h)g[h]=5;var y=v(m,9,1),b=v(g,5,1),x=function(e){for(var t=e[0],r=1;r<e.length;++r)e[r]>t&&(t=e[r]);return t},S=function(e,t,r){var n=t/8|0;return(e[n]|e[n+1]<<8)>>(7&t)&r},w=function(e,t){var r=t/8|0;return(e[r]|e[r+1]<<8|e[r+2]<<16)>>(7&t)},U=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],T=function(e,t,r){var n=Error(t||U[e]);if(n.code=e,Error.captureStackTrace&&Error.captureStackTrace(n,T),!r)throw n;return n},_=function(e,s,l){var f,d,h,p,m=e.length;if(!m||l&&!l.l&&m<5)return s||new t(0);var g=!s||l,U=!l||l.i;l||(l={}),s||(s=new t(3*m));var _,k=function(e){var r=s.length;if(e>r){var n=new t(Math.max(2*r,e));n.set(s),s=n}},M=l.f||0,E=l.p||0,C=l.b||0,A=l.l,D=l.d,F=l.m,O=l.n,P=8*m;do{if(!A){l.f=M=S(e,E,1);var I=S(e,E+1,3);if(E+=3,!I){var R=e[(Y=((_=E)/8|0)+(7&_&&1)+4)-4]|e[Y-3]<<8,L=Y+R;if(L>m){U&&T(0);break}g&&k(C+R),s.set(e.subarray(Y,L),C),l.b=C+=R,l.p=E=8*L;continue}if(1==I)A=y,D=b,F=9,O=5;else if(2==I){var B=S(e,E,31)+257,G=S(e,E+10,15)+4,j=B+S(e,E+5,31)+1;E+=14;for(var z=new t(j),V=new t(19),N=0;N<G;++N)V[o[N]]=S(e,E+3*N,7);E+=3*G;var W=x(V),H=(1<<W)-1,X=v(V,W,1);for(N=0;N<j;){var Y,q=X[S(e,E,H)];if(E+=15&q,(Y=q>>>4)<16)z[N++]=Y;else{var $=0,Z=0;for(16==Y?(Z=3+S(e,E,3),E+=2,$=z[N-1]):17==Y?(Z=3+S(e,E,7),E+=3):18==Y&&(Z=11+S(e,E,127),E+=7);Z--;)z[N++]=$}}var K=z.subarray(0,B),Q=z.subarray(B);F=x(K),O=x(Q),A=v(K,F,1),D=v(Q,O,1)}else T(1);if(E>P){U&&T(0);break}}g&&k(C+131072);for(var J=(1<<F)-1,ee=(1<<O)-1,et=E;;et=E){var er=($=A[w(e,E)&J])>>>4;if((E+=15&$)>P){U&&T(0);break}if($||T(2),er<256)s[C++]=er;else{if(256==er){et=E,A=null;break}var en=er-254;if(er>264){var ea=a[N=er-257];en=S(e,E,(1<<ea)-1)+u[N],E+=ea}var ei=D[w(e,E)&ee],eo=ei>>>4;if(ei||T(3),E+=15&ei,Q=c[eo],eo>3&&(ea=i[eo],Q+=w(e,E)&(1<<ea)-1,E+=ea),E>P){U&&T(0);break}g&&k(C+131072);for(var es=C+en;C<es;C+=4)s[C]=s[C-Q],s[C+1]=s[C+1-Q],s[C+2]=s[C+2-Q],s[C+3]=s[C+3-Q];C=es}}l.l=A,l.p=et,l.b=C,A&&(M=1,l.m=F,l.d=D,l.n=O)}while(!M)return C==s.length?s:(f=s,(d=0)<0&&(d=0),(null==(h=C)||h>f.length)&&(h=f.length),(p=new(f instanceof r?r:f instanceof n?n:t)(h-d)).set(f.subarray(d,h)),p)},k=new t(0),M="u">typeof TextDecoder&&new TextDecoder;try{M.decode(k,{stream:!0})}catch(e){}return e.convert_streams=function(e){var t=new DataView(e),r=0;function n(){var e=t.getUint16(r);return r+=2,e}function a(){var e=t.getUint32(r);return r+=4,e}function i(e){g.setUint16(y,e),y+=2}function o(e){g.setUint32(y,e),y+=4}for(var s={signature:a(),flavor:a(),length:a(),numTables:n(),reserved:n(),totalSfntSize:a(),majorVersion:n(),minorVersion:n(),metaOffset:a(),metaLength:a(),metaOrigLength:a(),privOffset:a(),privLength:a()},l=0;Math.pow(2,l)<=s.numTables;)l++;l--;for(var u=16*Math.pow(2,l),f=16*s.numTables-u,c=12,d=[],h=0;h<s.numTables;h++)d.push({tag:a(),offset:a(),compLength:a(),origLength:a(),origChecksum:a()}),c+=16;var p,v=new Uint8Array(12+16*d.length+d.reduce(function(e,t){return e+t.origLength+4},0)),m=v.buffer,g=new DataView(m),y=0;return o(s.flavor),i(s.numTables),i(u),i(l),i(f),d.forEach(function(e){o(e.tag),o(e.origChecksum),o(c),o(e.origLength),e.outOffset=c,(c+=e.origLength)%4!=0&&(c+=4-c%4)}),d.forEach(function(t){var r=e.slice(t.offset,t.offset+t.compLength);if(t.compLength!=t.origLength){var n=new Uint8Array(t.origLength);_(new Uint8Array(r,2),n)}else n=new Uint8Array(r);v.set(n,t.outOffset);var a=0;(c=t.outOffset+t.origLength)%4!=0&&(a=4-c%4),v.set(new Uint8Array(a).buffer,t.outOffset+t.origLength),p=c+a}),m.slice(0,p)},Object.defineProperty(e,"__esModule",{value:!0}),e}({}).convert_streams},function(e,t){let r,n={M:2,L:2,Q:4,C:6,Z:0},a={C:"18g,ca,368,1kz",D:"17k,6,2,2+4,5+c,2+6,2+1,10+1,9+f,j+11,2+1,a,2,2+1,15+2,3,j+2,6+3,2+8,2,2,2+1,w+a,4+e,3+3,2,3+2,3+5,23+w,2f+4,3,2+9,2,b,2+3,3,1k+9,6+1,3+1,2+2,2+d,30g,p+y,1,1+1g,f+x,2,sd2+1d,jf3+4,f+3,2+4,2+2,b+3,42,2,4+2,2+1,2,3,t+1,9f+w,2,el+2,2+g,d+2,2l,2+1,5,3+1,2+1,2,3,6,16wm+1v",R:"17m+3,2,2,6+3,m,15+2,2+2,h+h,13,3+8,2,2,3+1,2,p+1,x,5+4,5,a,2,2,3,u,c+2,g+1,5,2+1,4+1,5j,6+1,2,b,2+2,f,2+1,1s+2,2,3+1,7,1ez0,2,2+1,4+4,b,4,3,b,42,2+2,4,3,2+1,2,o+3,ae,ep,x,2o+2,3+1,3,5+1,6",L:"x9u,jff,a,fd,jv",T:"4t,gj+33,7o+4,1+1,7c+18,2,2+1,2+1,2,21+a,2,1b+k,h,2u+6,3+5,3+1,2+3,y,2,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,3,7,6+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+d,1,1+1,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,ek,3+1,r+4,1e+4,6+5,2p+c,1+3,1,1+2,1+b,2db+2,3y,2p+v,ff+3,30+1,n9x,1+2,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,5s,6y+2,ea,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+9,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2,2b+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,470+8,at4+4,1o+6,t5,1s+3,2a,f5l+1,2+3,43o+2,a+7,1+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,1,gzau,v+2n,3l+6n"},i=[null,"isol","init","fina","medi"];function o(t,r){let n=t.GDEF&&t.GDEF.glyphClassDef;return n?e.U._getGlyphClass(r,n):0}function s(...e){for(let t=0;t<e.length;t++)if("number"==typeof e[t])return e[t]}return function(l){var u;let f,c,d,h,p,v,m=new Uint8Array(l,0,4),g=e._bin.readASCII(m,0,4);if("wOFF"===g)l=t(l);else if("wOF2"===g)throw Error("woff2 fonts not supported");return u=e.parse(l)[0],f=Object.create(null),c=u["OS/2"],d=u.hhea,h=u.head.unitsPerEm,p=s(c&&c.sTypoAscender,d&&d.ascender,h),v={unitsPerEm:h,ascender:p,descender:s(c&&c.sTypoDescender,d&&d.descender,0),capHeight:s(c&&c.sCapHeight,p),xHeight:s(c&&c.sxHeight,p),lineGap:s(c&&c.sTypoLineGap,d&&d.lineGap),supportsCodePoint:t=>e.U.codeToGlyph(u,t)>0,forEachGlyph(t,s,l,c){let d=0,h=1/v.unitsPerEm*s,p=function(t,n){let o=[];for(let r=0;r<n.length;r++){let a=n.codePointAt(r);a>65535&&r++,o.push(e.U.codeToGlyph(t,a))}let s=t.GSUB;if(s){let t,{lookupList:l,featureList:u}=s,f=/^(rlig|liga|mset|isol|init|fina|medi|half|pres|blws|ccmp)$/,c=[];u.forEach(s=>{if(f.test(s.tag))for(let u=0;u<s.tab.length;u++){if(c[s.tab[u]])continue;c[s.tab[u]]=!0;let f=l[s.tab[u]],d=/^(isol|init|fina|medi)$/.test(s.tag);d&&!t&&(t=function(e){let t=new Uint8Array(e.length),n=32,i=1,o=-1;for(let s=0;s<e.length;s++){let l=e.codePointAt(s),u=0|function(e){if(!r){let e={R:2,L:1,D:4,C:16,U:32,T:8};for(let t in r=new Map,a){let n=0;a[t].split(",").forEach(a=>{let[i,o]=a.split("+");i=parseInt(i,36),o=o?parseInt(o,36):0,r.set(n+=i,e[t]);for(let a=o;a--;)r.set(++n,e[t])})}}return r.get(e)||32}(l),f=1;!(8&u)&&(21&n?22&u?(f=3,(1===i||3===i)&&t[o]++):33&u&&(2===i||4===i)&&t[o]--:34&n&&(2===i||4===i)&&t[o]--,i=t[s]=f,n=u,o=s,l>65535&&s++)}return t}(n));for(let r=0;r<o.length;r++)t&&d&&i[t[r]]!==s.tag||e.U._applySubs(o,r,f,l)}})}return o}(u,t),m=0,g=function(t,r){let n=new Int16Array(3*r.length),a=0;for(;a<r.length;a++){let u=r[a];if(-1===u)continue;n[3*a+2]=t.hmtx.aWidth[u];let f=t.GPOS;if(f){let c=f.lookupList;for(let f=0;f<c.length;f++){let d=c[f];for(let f=0;f<d.tabs.length;f++){let c=d.tabs[f];if(1===d.ltype){if(-1!==e._lctf.coverageIndex(c.coverage,u)&&c.pos){l(c.pos,a);break}}else if(2===d.ltype){let t=null,n=i();if(-1!==n){let i=e._lctf.coverageIndex(c.coverage,r[n]);if(-1!==i){if(1===c.fmt){let e=c.pairsets[i];for(let r=0;r<e.length;r++)e[r].gid2===u&&(t=e[r])}else if(2===c.fmt){let a=e.U._getGlyphClass(r[n],c.classDef1),i=e.U._getGlyphClass(u,c.classDef2);t=c.matrix[a][i]}if(t){t.val1&&l(t.val1,n),t.val2&&l(t.val2,a);break}}}}else if(4===d.ltype){let t=e._lctf.coverageIndex(c.markCoverage,u);if(-1!==t){let o=i(s),l=-1===o?-1:e._lctf.coverageIndex(c.baseCoverage,r[o]);if(-1!==l){let e=c.markArray[t],r=c.baseArray[l][e.markClass];n[3*a]=r.x-e.x+n[3*o]-n[3*o+2],n[3*a+1]=r.y-e.y+n[3*o+1];break}}}else if(6===d.ltype){let s=e._lctf.coverageIndex(c.mark1Coverage,u);if(-1!==s){let l=i();if(-1!==l){let i=r[l];if(3===o(t,i)){let t=e._lctf.coverageIndex(c.mark2Coverage,i);if(-1!==t){let e=c.mark1Array[s],r=c.mark2Array[t][e.markClass];n[3*a]=r.x-e.x+n[3*l]-n[3*l+2],n[3*a+1]=r.y-e.y+n[3*l+1];break}}}}}}}}else if(t.kern&&!t.cff){let e=i();if(-1!==e){let a=t.kern.glyph1.indexOf(r[e]);if(-1!==a){let r=t.kern.rval[a].glyph2.indexOf(u);-1!==r&&(n[3*e+2]+=t.kern.rval[a].vals[r])}}}}return n;function i(e){for(let t=a-1;t>=0;t--)if(-1!==r[t]&&(!e||e(r[t])))return t;return -1}function s(e){return 1===o(t,e)}function l(e,t){for(let r=0;r<3;r++)n[3*t+r]+=e[r]||0}}(u,p);return p.forEach((r,a)=>{if(-1!==r){let t=f[r];if(!t){let a,i,o,s,{cmds:l,crds:c}=e.U.glyphToPath(u,r),d="",h=0;for(let e=0,t=l.length;e<t;e++){let t=n[l[e]];d+=l[e];for(let e=1;e<=t;e++)d+=(e>1?",":"")+c[h++]}if(c.length){a=i=1/0,o=s=-1/0;for(let e=0,t=c.length;e<t;e+=2){let t=c[e],r=c[e+1];t<a&&(a=t),r<i&&(i=r),t>o&&(o=t),r>s&&(s=r)}}else a=o=i=s=0;t=f[r]={index:r,advanceWidth:u.hmtx.aWidth[r],xMin:a,yMin:i,xMax:o,yMax:s,path:d}}c.call(null,t,d+g[3*a]*h,g[3*a+1]*h,m),d+=g[3*a+2]*h,l&&(d+=l*s)}m+=t.codePointAt(m)>65535?2:1}),d}}}}],init:(e,t,r)=>r(e(),t())}),eI=eu({name:"FontResolver",dependencies:[function(e,t){let r=Object.create(null),n=Object.create(null);function a(t,a){let i=r[t];if(i)a(i);else if(n[t])n[t].push(a);else{n[t]=[a];let i=e=>{console.error(`Failure loading font ${t}`,e)};try{let a=new XMLHttpRequest;a.open("get",t,!0),a.responseType="arraybuffer",a.onload=function(){if(a.status>=400)i(Error(a.statusText));else if(a.status>0)try{var o;let i=e(a.response);i.src=t,(o=i).src=t,r[t]=o,n[t].forEach(e=>e(o)),delete n[t]}catch(e){i(e)}},a.onerror=i,a.send()}catch(e){i(e)}}}return function(e,n,{lang:i,fonts:o=[],style:s="normal",weight:l="normal",unicodeFontsURL:u}={}){let f=new Uint8Array(e.length),c=[];e.length||v();let d=new Map,h=[];if("italic"!==s&&(s="normal"),"number"!=typeof l&&(l="bold"===l?700:400),o&&!Array.isArray(o)&&(o=[o]),(o=o.slice().filter(e=>!e.lang||e.lang.test(i)).reverse()).length){let t=0;!function n(i=0){for(let s=i,l=e.length;s<l;s++){let i=e.codePointAt(s);if(1===t&&c[f[s-1]].supportsCodePoint(i)||s>0&&/\s/.test(e[s]))f[s]=f[s-1],2===t&&(h[h.length-1][1]=s);else for(let e=f[s],l=o.length;e<=l;e++)if(e===l)(2===t?h[h.length-1]:h[h.length]=[s,s])[1]=s,t=2;else{f[s]=e;let{src:l,unicodeRange:u}=o[e];if(!u||function(e,t){for(let r=0;r<t.length;r++){let[n,a=n]=t[r];if(n<=e&&e<=a)return!0}return!1}(i,u)){let e=r[l];if(!e)return void a(l,()=>{n(s)});if(e.supportsCodePoint(i)){let r=d.get(e);"number"!=typeof r&&(r=c.length,c.push(e),d.set(e,r)),f[s]=r,t=1;break}}}i>65535&&s+1<l&&(f[s+1]=f[s],s++,2===t&&(h[h.length-1][1]=s))}p()}()}else h.push([0,e.length-1]),p();function p(){if(h.length){let r=h.map(t=>e.substring(t[0],t[1]+1)).join("\n");t.getFontsForString(r,{lang:i||void 0,style:s,weight:l,dataUrl:u}).then(({fontUrls:e,chars:t})=>{let r=c.length,n=0;h.forEach(e=>{for(let a=0,i=e[1]-e[0];a<=i;a++)f[e[0]+a]=t[n++]+r;n++});let i=0;e.forEach((t,n)=>{a(t,t=>{c[n+r]=t,++i===e.length&&v()})})})}else v()}function v(){n({chars:f,fonts:c})}}},eP,function(){return function(e){var t=function(){this.buckets=new Map};t.prototype.add=function(e){var t=e>>5;this.buckets.set(t,(this.buckets.get(t)||0)|1<<(31&e))},t.prototype.has=function(e){var t=this.buckets.get(e>>5);return void 0!==t&&0!=(t&1<<(31&e))},t.prototype.serialize=function(){var e=[];return this.buckets.forEach(function(t,r){e.push((+r).toString(36)+":"+t.toString(36))}),e.join(",")},t.prototype.deserialize=function(e){var t=this;this.buckets.clear(),e.split(",").forEach(function(e){var r=e.split(":");t.buckets.set(parseInt(r[0],36),parseInt(r[1],36))})};function r(e,t){var r=255&e,n=t.codePointAt(r/6|0);return 0!=((n=(n||48)-48)&1<<r%6)}function n(e,t){e.replace(/U\+/gi,"").replace(/^,+|,+$/g,"").split(/,+/).map(function(e){return e.split("-").map(function(e){return parseInt(e.trim(),16)})}).forEach(function(e){var r=e[0],n=e[1];void 0===n&&(n=r),function(e,r){for(var n=e;n<=r;n++)t(n)}(r,n)})}var a,i={},o={},s=new WeakMap,l="https://cdn.jsdelivr.net/gh/lojjic/unicode-font-resolver@v1.0.1/packages/data",u=new Map;function f(e,t,r){return e[t]?t:e[r]?r:function(e){for(var t in e)return t}(e)}return e.CodePointSet=t,e.clearCache=function(){i={},o={}},e.getFontsForString=function(e,c){void 0===c&&(c={});var d=c.lang;void 0===d&&(d=/\p{Script=Hangul}/u.test(e)?"ko":/\p{Script=Hiragana}|\p{Script=Katakana}/u.test(e)?"ja":"en");var h=c.category;void 0===h&&(h="sans-serif");var p=c.style;void 0===p&&(p="normal");var v=c.weight;void 0===v&&(v=400);var m=(c.dataUrl||l).replace(/\/$/g,""),g=new Map,y=new Uint8Array(e.length),b={},x={},S=Array(e.length),w=new Map,U=!1;function T(e){var t=u.get(e);return t||(t=fetch(m+"/"+e).then(function(e){if(!e.ok)throw Error(e.statusText);return e.json().then(function(e){if(!Array.isArray(e)||1!==e[0])throw Error("Incorrect schema version; need 1, got "+e[0]);return e[1]})}).catch(function(t){if(m!==l)return U||(console.error('unicode-font-resolver: Failed loading from dataUrl "'+m+'", trying default CDN. '+t.message),U=!0),m=l,u.delete(e),T(e);throw t}),u.set(e,t)),t}for(var _=0;_<e.length;_++)!function(t){var r=e.codePointAt(t),n=function(e){var t=(-256&e).toString(16),r=((-256&e)+256-1).toString(16);return"codepoint-index/plane"+(e>>16)+"/"+t+"-"+r+".json"}(r);S[t]=n,i[n]||w.has(n)||w.set(n,T(n).then(function(e){i[n]=e})),r>65535&&(_=++t)}(_);return Promise.all(w.values()).then(function(){w.clear();for(var t=0;t<e.length;t++)!function(n){var a=e.codePointAt(n),s=null,l=i[S[n]],u=void 0;for(var f in l){var c=x[f];if(void 0===c&&(c=x[f]=new RegExp(f).test(d||"en")),c){for(var h in u=f,l[f])if(r(a,l[f][h])){s=h;break}break}}if(!s){e:for(var p in l)if(p!==u){for(var v in l[p])if(r(a,l[p][v])){s=v;break e}}}s||(console.debug("No font coverage for U+"+a.toString(16)),s="latin"),S[n]=s,o[s]||w.has(s)||w.set(s,T("font-meta/"+s+".json").then(function(e){o[s]=e})),a>65535&&(t=++n)}(t);return Promise.all(w.values())}).then(function(){for(var r,i=null,l=0;l<e.length;l++){var u=e.codePointAt(l);if(i&&(a||(a=new Set,n("9-D,20,85,A0,1680,2000-200A,2028-202F,205F,3000",function(e){a.add(e)})),a.has(u)||(function(e){var r=s.get(e);return r||(r=new t,n(e.ranges,function(e){return r.add(e)}),s.set(e,r)),r})(i).has(u)))y[l]=y[l-1];else{var c=b[(i=o[S[l]]).id];if(!c){var d=i.typeforms,x=f(d,h,"sans-serif"),w=f(d[x],p,"normal"),U=function(e,t){var r=t;if(!e.includes(r)){r=1/0;for(var n=0;n<e.length;n++)Math.abs(e[n]-t)<Math.abs(r-t)&&(r=e[n])}return r}(null==(r=d[x])?void 0:r[w],v);c=b[i.id]=m+"/font-files/"+i.id+"/"+x+"."+w+"."+U+".woff"}var T=g.get(c);null==T&&(T=g.size,g.set(c,T)),y[l]=T}u>65535&&(y[++l]=y[l-1])}return{fontUrls:Array.from(g.keys()),chars:y}})},Object.defineProperty(e,"__esModule",{value:!0}),e}({})}],init:(e,t,r)=>e(t,r())}),eR=()=>(self.performance||Date).now(),eL=ed(),eB=[],eG=0;function ej(){let e=eR();for(;eB.length&&eR()-e<5;)eB.shift()();eG=eB.length?setTimeout(ej,0):0}let ez={},eV=0;function eN(e,t,r,n,a,i,o,s,l,u){let f="TroikaTextSDFGenerator_JS_"+eV++%4,c=ez[f];return c||(c=ez[f]={workerModule:eu({name:f,workerId:f,dependencies:[ed,eR],init(e,t){let r=e().javascript.generate;return function(...e){let n=t();return{textureData:r(...e),timing:t()-n}}},getTransferables:e=>[e.textureData.buffer]}),requests:0,idleTimer:null}),c.requests++,clearTimeout(c.idleTimer),c.workerModule(e,t,r,n,a,i).then(({textureData:r,timing:n})=>{let a=eR(),i=new Uint8Array(4*r.length);for(let e=0;e<r.length;e++)i[4*e+u]=r[e];return eL.webglUtils.renderImageData(o,i,s,l,e,t,1<<3-u),n+=eR()-a,0==--c.requests&&(c.idleTimer=setTimeout(()=>{es[f]&&es[f].forEach(function(e){e()}),eo[f]&&(eo[f].terminate(),delete eo[f])},2e3)),{timing:n}})}let eW=eL.webglUtils.resizeWebGLCanvasWithoutClearing,eH={defaultFontURL:null,unicodeFontsURL:null,sdfGlyphSize:64,sdfMargin:1/16,sdfExponent:9,textureWidth:2048,useWorker:!0},eX=new ee.Color;function eY(){return(self.performance||Date).now()}let eq=Object.create(null);function e$(e,t){e=function(e,t){for(let r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);return e}({},e);let r=eY(),{defaultFontURL:n}=eH,a=[];if(n&&a.push({label:"default",src:eK(n)}),e.font&&a.push({label:"user",src:eK(e.font)}),e.font=a,e.text=""+e.text,e.sdfGlyphSize=e.sdfGlyphSize||eH.sdfGlyphSize,e.unicodeFontsURL=e.unicodeFontsURL||eH.unicodeFontsURL,null!=e.colorRanges){let t={};for(let r in e.colorRanges)if(e.colorRanges.hasOwnProperty(r)){let n=e.colorRanges[r];"number"!=typeof n&&(n=eX.set(n).getHex()),t[r]=n}e.colorRanges=t}Object.freeze(e);let{textureWidth:i,sdfExponent:o}=eH,{sdfGlyphSize:s}=e,l=i/s*4,u=eq[s];if(!u){var f;let e,t=document.createElement("canvas");t.width=i,t.height=256*s/l,(u=eq[s]={glyphCount:0,sdfGlyphSize:s,sdfCanvas:t,sdfTexture:new ee.Texture(t,void 0,void 0,void 0,ee.LinearFilter,ee.LinearFilter),contextLost:!1,glyphsByFont:new Map}).sdfTexture.generateMipmaps=!1,(e=(f=u).sdfCanvas).addEventListener("webglcontextlost",e=>{console.log("Context Lost",e),e.preventDefault(),f.contextLost=!0}),e.addEventListener("webglcontextrestored",e=>{console.log("Context Restored",e),f.contextLost=!1;let t=[];f.glyphsByFont.forEach(e=>{e.forEach(e=>{t.push(eZ(e,f,!0))})}),Promise.all(t).then(()=>{eQ(f),f.sdfTexture.needsUpdate=!0})})}let{sdfTexture:c,sdfCanvas:d}=u;(eH.useWorker?e1:e0)(e).then(n=>{let{glyphIds:a,glyphFontIndices:f,fontData:h,glyphPositions:p,fontSize:v,timings:m}=n,g=[],y=new Float32Array(4*a.length),b=0,x=0,S=eY(),w=h.map(e=>{let t=u.glyphsByFont.get(e.src);return t||u.glyphsByFont.set(e.src,t=new Map),t});a.forEach((e,t)=>{let r=f[t],{src:i,unitsPerEm:o}=h[r],l=w[r].get(e);if(!l){let{path:t,pathBounds:a}=n.glyphData[i][e],o=Math.max(a[2]-a[0],a[3]-a[1])/s*(eH.sdfMargin*s+.5),f=u.glyphCount++,c=[a[0]-o,a[1]-o,a[2]+o,a[3]+o];w[r].set(e,l={path:t,atlasIndex:f,sdfViewBox:c}),g.push(l)}let{sdfViewBox:c}=l,d=p[x++],m=p[x++],S=v/o;y[b++]=d+c[0]*S,y[b++]=m+c[1]*S,y[b++]=d+c[2]*S,y[b++]=m+c[3]*S,a[t]=l.atlasIndex}),m.quads=(m.quads||0)+(eY()-S);let U=eY();m.sdf={};let T=d.height,_=Math.pow(2,Math.ceil(Math.log2(Math.ceil(u.glyphCount/l)*s)));_>T&&(console.info(`Increasing SDF texture size ${T}->${_}`),eW(d,i,_),c.dispose()),Promise.all(g.map(t=>eZ(t,u,e.gpuAccelerateSDF).then(({timing:e})=>{m.sdf[t.atlasIndex]=e}))).then(()=>{g.length&&!u.contextLost&&(eQ(u),c.needsUpdate=!0),m.sdfTotal=eY()-U,m.total=eY()-r,t(Object.freeze({parameters:e,sdfTexture:c,sdfGlyphSize:s,sdfExponent:o,glyphBounds:y,glyphAtlasIndices:a,glyphColors:n.glyphColors,caretPositions:n.caretPositions,chunkedBounds:n.chunkedBounds,ascender:n.ascender,descender:n.descender,lineHeight:n.lineHeight,capHeight:n.capHeight,xHeight:n.xHeight,topBaseline:n.topBaseline,blockBounds:n.blockBounds,visibleBounds:n.visibleBounds,timings:n.timings}))})}),Promise.resolve().then(()=>{!u.contextLost&&(d._warm||(eL.webgl.isSupported(d),d._warm=!0))})}function eZ({path:e,atlasIndex:t,sdfViewBox:r},{sdfGlyphSize:a,sdfCanvas:i,contextLost:o},s){if(o)return Promise.resolve({timing:-1});let{textureWidth:l,sdfExponent:u}=eH,f=Math.max(r[2]-r[0],r[3]-r[1]),c=Math.floor(t/4),d=c%(l/a)*a,h=Math.floor(c/(l/a))*a;return function(e,t,r,a,i,o,s,l,u,f,c=!0){return c?((...e)=>new Promise((t,r)=>{eB.push(()=>{let n=eR();try{eL.webgl.generateIntoCanvas(...e),t({timing:eR()-n})}catch(e){r(e)}}),eG||(eG=setTimeout(ej,0))}))(e,t,r,a,i,o,s,l,u,f).then(null,c=>(n||(console.warn("WebGL SDF generation failed, falling back to JS",c),n=!0),eN(e,t,r,a,i,o,s,l,u,f))):eN(e,t,r,a,i,o,s,l,u,f)}(a,a,e,r,f,u,i,d,h,t%4,s)}function eK(e){return a||(a="u"<typeof document?{}:document.createElement("a")),a.href=e,a.href}function eQ(e){if("function"!=typeof createImageBitmap){console.info("Safari<15: applying SDF canvas workaround");let{sdfCanvas:t,sdfTexture:r}=e,{width:n,height:a}=t,i=e.sdfCanvas.getContext("webgl"),o=r.image.data;o&&o.length===n*a*4||(o=new Uint8Array(n*a*4),r.image={width:n,height:a,data:o},r.flipY=!1,r.isDataTexture=!0),i.readPixels(0,0,n,a,i.RGBA,i.UNSIGNED_BYTE,o)}}let eJ=eu({name:"Typesetter",dependencies:[function(e,t){let r=1/0,n=/[\u00AD\u034F\u061C\u115F-\u1160\u17B4-\u17B5\u180B-\u180E\u200B-\u200F\u202A-\u202E\u2060-\u206F\u3164\uFE00-\uFE0F\uFEFF\uFFA0\uFFF0-\uFFF8]/,a=`[^\\S\\u00A0]`,i=RegExp(`${a}|[\\-\\u007C\\u00AD\\u2010\\u2012-\\u2014\\u2027\\u2056\\u2E17\\u2E40]`);function o({text:o="",font:c,lang:d,sdfGlyphSize:h=64,fontSize:p=400,fontWeight:v=1,fontStyle:m="normal",letterSpacing:g=0,lineHeight:y="normal",maxWidth:b=r,direction:x,textAlign:S="left",textIndent:w=0,whiteSpace:U="normal",overflowWrap:T="normal",anchorX:_=0,anchorY:k=0,metricsOnly:M=!1,unicodeFontsURL:E,preResolvedFonts:C=null,includeCaretPositions:A=!1,chunkedBoundsSize:D=8192,colorRanges:F=null},O){let P=u(),I={fontLoad:0,typesetting:0};o.indexOf("\r")>-1&&(console.info("Typesetter: got text with \\r chars; normalizing to \\n"),o=o.replace(/\r\n/g,"\n").replace(/\r/g,"\n")),p*=1,g*=1,b*=1,y=y||"normal",w*=1,function({text:t,lang:r,fonts:n,style:a,weight:i,preResolvedFonts:o,unicodeFontsURL:s},l){let u=({chars:e,fonts:t})=>{let r,n,a=[];for(let i=0;i<e.length;i++)e[i]!==n?(n=e[i],a.push(r={start:i,end:i,fontObj:t[e[i]]})):r.end=i;l(a)};o?u(o):e(t,u,{lang:r,fonts:n,style:a,weight:i,unicodeFontsURL:s})}({text:o,lang:d,style:m,weight:v,fonts:"string"==typeof c?[{src:c}]:c,unicodeFontsURL:E,preResolvedFonts:C},e=>{I.fontLoad=u()-P;let c=isFinite(b),d=null,h=null,v=null,m=null,E=null,C=null,R=null,L=null,B=0,G=0,j="nowrap"!==U,z=new Map,V=u(),N=w,W=0,H=new f,X=[H];e.forEach(e=>{let t,r,{fontObj:s}=e,{ascender:l,descender:u,unitsPerEm:d,lineGap:h,capHeight:v,xHeight:m}=s,x=z.get(s);if(!x){let e=p/d,t="normal"===y?(l-u+h)*e:y*p,r=(t-(l-u)*e)/2,n=Math.min(t,(l-u)*e),a=(l+u)/2*e+n/2;x={index:z.size,src:s.src,fontObj:s,fontSizeMult:e,unitsPerEm:d,ascender:l*e,descender:u*e,capHeight:v*e,xHeight:m*e,lineHeight:t,baseline:-r-l*e,caretTop:a,caretBottom:a-n},z.set(s,x)}let{fontSizeMult:S}=x,U=o.slice(e.start,e.end+1);s.forEachGlyph(U,p,g,(s,l,u,d)=>{let h;l+=W,d+=e.start,t=l,r=s;let v=o.charAt(d),m=s.advanceWidth*S,y=H.count;if("isEmpty"in s||(s.isWhitespace=!!v&&new RegExp(a).test(v),s.canBreakAfter=!!v&&i.test(v),s.isEmpty=s.xMin===s.xMax||s.yMin===s.yMax||n.test(v)),!s.isWhitespace&&!s.isEmpty&&G++,j&&c&&!s.isWhitespace&&l+m+N>b&&y){if(H.glyphAt(y-1).glyphObj.canBreakAfter)h=new f,N=-l;else for(let e=y;e--;)if(0===e&&"break-word"===T){h=new f,N=-l;break}else if(H.glyphAt(e).glyphObj.canBreakAfter){let t=(h=H.splitAt(e+1)).glyphAt(0).x;N-=t;for(let e=h.count;e--;)h.glyphAt(e).x-=t;break}h&&(H.isSoftWrapped=!0,H=h,X.push(H),B=b)}let U=H.glyphAt(H.count);U.glyphObj=s,U.x=l+N,U.y=u,U.width=m,U.charIndex=d,U.fontData=x,"\n"===v&&(H=new f,X.push(H),N=-(l+m+g*p)+w)}),W=t+r.advanceWidth*S+g*p});let Y=0;X.forEach(e=>{let t=!0;for(let r=e.count;r--;){let n=e.glyphAt(r);t&&!n.glyphObj.isWhitespace&&(e.width=n.x+n.width,e.width>B&&(B=e.width),t=!1);let{lineHeight:a,capHeight:i,xHeight:o,baseline:s}=n.fontData;a>e.lineHeight&&(e.lineHeight=a);let l=s-e.baseline;l<0&&(e.baseline+=l,e.cap+=l,e.ex+=l),e.cap=Math.max(e.cap,e.baseline+i),e.ex=Math.max(e.ex,e.baseline+o)}e.baseline-=Y,e.cap-=Y,e.ex-=Y,Y+=e.lineHeight});let q=0,$=0;if(_&&("number"==typeof _?q=-_:"string"==typeof _&&(q=-B*("left"===_?0:"center"===_?.5:"right"===_?1:s(_)))),k&&("number"==typeof k?$=-k:"string"==typeof k&&($="top"===k?0:"top-baseline"===k?-X[0].baseline:"top-cap"===k?-X[0].cap:"top-ex"===k?-X[0].ex:"middle"===k?Y/2:"bottom"===k?Y:"bottom-baseline"===k?-X[X.length-1].baseline:s(k)*Y)),!M){let e,n,a=t.getEmbeddingLevels(o,x);d=new Uint16Array(G),h=new Uint8Array(G),v=new Float32Array(2*G),m={},R=[r,r,-r,-r],L=[],A&&(C=new Float32Array(4*o.length)),F&&(E=new Uint8Array(3*G));let i=0,s=-1,u=-1;if(X.forEach((f,c)=>{let{count:p,width:g}=f;if(p>0){let c,y=0;for(let e=p;e--&&f.glyphAt(e).glyphObj.isWhitespace;)y++;let b=0,x=0;if("center"===S)b=(B-g)/2;else if("right"===S)b=B-g;else if("justify"===S&&f.isSoftWrapped){let e=0;for(let t=p-y;t--;)f.glyphAt(t).glyphObj.isWhitespace&&e++;x=(B-g)/e}if(x||b){let e=0;for(let t=0;t<p;t++){let r=f.glyphAt(t),n=r.glyphObj;r.x+=b+e,0!==x&&n.isWhitespace&&t<p-y&&(e+=x,r.width+=x)}}let w=t.getReorderSegments(o,a,f.glyphAt(0).charIndex,f.glyphAt(f.count-1).charIndex);for(let e=0;e<w.length;e++){let[t,r]=w[e],n=1/0,a=-1/0;for(let e=0;e<p;e++)if(f.glyphAt(e).charIndex>=t){let t=e,i=e;for(;i<p;i++){let e=f.glyphAt(i);if(e.charIndex>r)break;i<p-y&&(n=Math.min(n,e.x),a=Math.max(a,e.x+e.width))}for(let e=t;e<i;e++){let t=f.glyphAt(e);t.x=a-(t.x+t.width-n)}break}}let U=e=>c=e;for(let g=0;g<p;g++){let p=f.glyphAt(g),y=(c=p.glyphObj).index,b=1&a.levels[p.charIndex];if(b){let e=t.getMirroredCharacter(o[p.charIndex]);e&&p.fontData.fontObj.forEachGlyph(e,0,0,U)}if(A){let{charIndex:e,fontData:t}=p,r=p.x+q,n=p.x+p.width+q;C[4*e]=b?n:r,C[4*e+1]=b?r:n,C[4*e+2]=f.baseline+t.caretBottom+$,C[4*e+3]=f.baseline+t.caretTop+$;let a=e-s;a>1&&l(C,s,a),s=e}if(F){let{charIndex:e}=p;for(;e>u;)u++,F.hasOwnProperty(u)&&(n=F[u])}if(!c.isWhitespace&&!c.isEmpty){let t=i++,{fontSizeMult:a,src:o,index:s}=p.fontData,l=m[o]||(m[o]={});l[y]||(l[y]={path:c.path,pathBounds:[c.xMin,c.yMin,c.xMax,c.yMax]});let u=p.x+q,g=p.y+f.baseline+$;v[2*t]=u,v[2*t+1]=g;let b=u+c.xMin*a,x=g+c.yMin*a,S=u+c.xMax*a,w=g+c.yMax*a;b<R[0]&&(R[0]=b),x<R[1]&&(R[1]=x),S>R[2]&&(R[2]=S),w>R[3]&&(R[3]=w),t%D==0&&(e={start:t,end:t,rect:[r,r,-r,-r]},L.push(e)),e.end++;let U=e.rect;if(b<U[0]&&(U[0]=b),x<U[1]&&(U[1]=x),S>U[2]&&(U[2]=S),w>U[3]&&(U[3]=w),d[t]=y,h[t]=s,F){let e=3*t;E[e]=n>>16&255,E[e+1]=n>>8&255,E[e+2]=255&n}}}}}),C){let e=o.length-s;e>1&&l(C,s,e)}}let Z=[];z.forEach(({index:e,src:t,unitsPerEm:r,ascender:n,descender:a,lineHeight:i,capHeight:o,xHeight:s})=>{Z[e]={src:t,unitsPerEm:r,ascender:n,descender:a,lineHeight:i,capHeight:o,xHeight:s}}),I.typesetting=u()-V,O({glyphIds:d,glyphFontIndices:h,glyphPositions:v,glyphData:m,fontData:Z,caretPositions:C,glyphColors:E,chunkedBounds:L,fontSize:p,topBaseline:$+X[0].baseline,blockBounds:[q,$-Y,q+B,$],visibleBounds:R,timings:I})})}function s(e){let t=e.match(/^([\d.]+)%$/),r=t?parseFloat(t[1]):NaN;return isNaN(r)?0:r/100}function l(e,t,r){let n=e[4*t],a=e[4*t+1],i=e[4*t+2],o=e[4*t+3],s=(a-n)/r;for(let a=0;a<r;a++){let r=(t+a)*4;e[r]=n+s*a,e[r+1]=n+s*(a+1),e[r+2]=i,e[r+3]=o}}function u(){return(self.performance||Date).now()}function f(){this.data=[]}let c=["glyphObj","x","y","width","charIndex","fontData"];return f.prototype={width:0,lineHeight:0,baseline:0,cap:0,ex:0,isSoftWrapped:!1,get count(){return Math.ceil(this.data.length/c.length)},glyphAt(e){let t=f.flyweight;return t.data=this.data,t.index=e,t},splitAt(e){let t=new f;return t.data=this.data.splice(e*c.length),t}},f.flyweight=c.reduce((e,t,r,n)=>(Object.defineProperty(e,t,{get(){return this.data[this.index*c.length+r]},set(e){this.data[this.index*c.length+r]=e}}),e),{data:null,index:0}),{typeset:o,measure:function(e,t){o({...e,metricsOnly:!0},e=>{let[r,n,a,i]=e.blockBounds;t({width:a-r,height:i-n})})}}},eI,function(){return function(e){var t,r,n,a,i={R:"13k,1a,2,3,3,2+1j,ch+16,a+1,5+2,2+n,5,a,4,6+16,4+3,h+1b,4mo,179q,2+9,2+11,2i9+7y,2+68,4,3+4,5+13,4+3,2+4k,3+29,8+cf,1t+7z,w+17,3+3m,1t+3z,16o1+5r,8+30,8+mc,29+1r,29+4v,75+73",EN:"1c+9,3d+1,6,187+9,513,4+5,7+9,sf+j,175h+9,qw+q,161f+1d,4xt+a,25i+9",ES:"17,2,6dp+1,f+1,av,16vr,mx+1,4o,2",ET:"z+2,3h+3,b+1,ym,3e+1,2o,p4+1,8,6u,7c,g6,1wc,1n9+4,30+1b,2n,6d,qhx+1,h0m,a+1,49+2,63+1,4+1,6bb+3,12jj",AN:"16o+5,2j+9,2+1,35,ed,1ff2+9,87+u",CS:"18,2+1,b,2u,12k,55v,l,17v0,2,3,53,2+1,b",B:"a,3,f+2,2v,690",S:"9,2,k",WS:"c,k,4f4,1vk+a,u,1j,335",ON:"x+1,4+4,h+5,r+5,r+3,z,5+3,2+1,2+1,5,2+2,3+4,o,w,ci+1,8+d,3+d,6+8,2+g,39+1,9,6+1,2,33,b8,3+1,3c+1,7+1,5r,b,7h+3,sa+5,2,3i+6,jg+3,ur+9,2v,ij+1,9g+9,7+a,8m,4+1,49+x,14u,2+2,c+2,e+2,e+2,e+1,i+n,e+e,2+p,u+2,e+2,36+1,2+3,2+1,b,2+2,6+5,2,2,2,h+1,5+4,6+3,3+f,16+2,5+3l,3+81,1y+p,2+40,q+a,m+13,2r+ch,2+9e,75+hf,3+v,2+2w,6e+5,f+6,75+2a,1a+p,2+2g,d+5x,r+b,6+3,4+o,g,6+1,6+2,2k+1,4,2j,5h+z,1m+1,1e+f,t+2,1f+e,d+3,4o+3,2s+1,w,535+1r,h3l+1i,93+2,2s,b+1,3l+x,2v,4g+3,21+3,kz+1,g5v+1,5a,j+9,n+v,2,3,2+8,2+1,3+2,2,3,46+1,4+4,h+5,r+5,r+a,3h+2,4+6,b+4,78,1r+24,4+c,4,1hb,ey+6,103+j,16j+c,1ux+7,5+g,fsh,jdq+1t,4,57+2e,p1,1m,1m,1m,1m,4kt+1,7j+17,5+2r,d+e,3+e,2+e,2+10,m+4,w,1n+5,1q,4z+5,4b+rb,9+c,4+c,4+37,d+2g,8+b,l+b,5+1j,9+9,7+13,9+t,3+1,27+3c,2+29,2+3q,d+d,3+4,4+2,6+6,a+o,8+6,a+2,e+6,16+42,2+1i",BN:"0+8,6+d,2s+5,2+p,e,4m9,1kt+2,2b+5,5+5,17q9+v,7k,6p+8,6+1,119d+3,440+7,96s+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+75,6p+2rz,1ben+1,1ekf+1,1ekf+1",NSM:"lc+33,7o+6,7c+18,2,2+1,2+1,2,21+a,1d+k,h,2u+6,3+5,3+1,2+3,10,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,g+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+g,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,k1+w,2db+2,3y,2p+v,ff+3,30+1,n9x+3,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,r2,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+5,3+1,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2d+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,f0c+4,1o+6,t5,1s+3,2a,f5l+1,43t+2,i+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,gzhy+6n",AL:"16w,3,2,e+1b,z+2,2+2s,g+1,8+1,b+m,2+t,s+2i,c+e,4h+f,1d+1e,1bwe+dp,3+3z,x+c,2+1,35+3y,2rm+z,5+7,b+5,dt+l,c+u,17nl+27,1t+27,4x+6n,3+d",LRO:"6ct",RLO:"6cu",LRE:"6cq",RLE:"6cr",PDF:"6cs",LRI:"6ee",RLI:"6ef",FSI:"6eg",PDI:"6eh"},o={},s={};o.L=1,s[1]="L",Object.keys(i).forEach(function(e,t){o[e]=1<<t+1,s[o[e]]=e}),Object.freeze(o);var l=o.LRI|o.RLI|o.FSI,u=o.L|o.R|o.AL,f=o.B|o.S|o.WS|o.ON|o.FSI|o.LRI|o.RLI|o.PDI,c=o.BN|o.RLE|o.LRE|o.RLO|o.LRO|o.PDF,d=o.S|o.WS|o.B|l|o.PDI|c,h=null;function p(e){if(!h){h=new Map;var t=function(e){if(i.hasOwnProperty(e)){var t=0;i[e].split(",").forEach(function(r){var n=r.split("+"),a=n[0],i=n[1];a=parseInt(a,36),i=i?parseInt(i,36):0,h.set(t+=a,o[e]);for(var s=0;s<i;s++)h.set(++t,o[e])})}};for(var r in i)t(r)}return h.get(e.codePointAt(0))||o.L}function v(e,t){var r,n=0,a=new Map,i=t&&new Map;return e.split(",").forEach(function e(o){if(-1!==o.indexOf("+"))for(var s=+o;s--;)e(r);else{r=o;var l=o.split(">"),u=l[0],f=l[1];u=String.fromCodePoint(n+=parseInt(u,36)),f=String.fromCodePoint(n+=parseInt(f,36)),a.set(u,f),t&&i.set(f,u)}}),{map:a,reverseMap:i}}function m(){if(!t){var e=v("14>1,1e>2,u>2,2wt>1,1>1,1ge>1,1wp>1,1j>1,f>1,hm>1,1>1,u>1,u6>1,1>1,+5,28>1,w>1,1>1,+3,b8>1,1>1,+3,1>3,-1>-1,3>1,1>1,+2,1s>1,1>1,x>1,th>1,1>1,+2,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,4q>1,1e>2,u>2,2>1,+1",!0),a=e.map,i=e.reverseMap;t=a,r=i,n=v("6f1>-6dx,6dy>-6dx,6ec>-6ed,6ee>-6ed,6ww>2jj,-2ji>2jj,14r4>-1e7l,1e7m>-1e7l,1e7m>-1e5c,1e5d>-1e5b,1e5c>-14qx,14qy>-14qx,14vn>-1ecg,1ech>-1ecg,1edu>-1ecg,1eci>-1ecg,1eda>-1ecg,1eci>-1ecg,1eci>-168q,168r>-168q,168s>-14ye,14yf>-14ye",!1).map}}function g(e){return m(),t.get(e)||null}function y(e){return m(),r.get(e)||null}function b(e){return m(),n.get(e)||null}var x=o.L,S=o.R,w=o.EN,U=o.ES,T=o.ET,_=o.AN,k=o.CS,M=o.B,E=o.S,C=o.ON,A=o.BN,D=o.NSM,F=o.AL,O=o.LRO,P=o.RLO,I=o.LRE,R=o.RLE,L=o.PDF,B=o.LRI,G=o.RLI,j=o.FSI,z=o.PDI;function V(e){if(!a){var t=v("14>1,j>2,t>2,u>2,1a>g,2v3>1,1>1,1ge>1,1wd>1,b>1,1j>1,f>1,ai>3,-2>3,+1,8>1k0,-1jq>1y7,-1y6>1hf,-1he>1h6,-1h5>1ha,-1h8>1qi,-1pu>1,6>3u,-3s>7,6>1,1>1,f>1,1>1,+2,3>1,1>1,+13,4>1,1>1,6>1eo,-1ee>1,3>1mg,-1me>1mk,-1mj>1mi,-1mg>1mi,-1md>1,1>1,+2,1>10k,-103>1,1>1,4>1,5>1,1>1,+10,3>1,1>8,-7>8,+1,-6>7,+1,a>1,1>1,u>1,u6>1,1>1,+5,26>1,1>1,2>1,2>2,8>1,7>1,4>1,1>1,+5,b8>1,1>1,+3,1>3,-2>1,2>1,1>1,+2,c>1,3>1,1>1,+2,h>1,3>1,a>1,1>1,2>1,3>1,1>1,d>1,f>1,3>1,1a>1,1>1,6>1,7>1,13>1,k>1,1>1,+19,4>1,1>1,+2,2>1,1>1,+18,m>1,a>1,1>1,lk>1,1>1,4>1,2>1,f>1,3>1,1>1,+3,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,6>1,4j>1,j>2,t>2,u>2,2>1,+1",!0),r=t.map;t.reverseMap.forEach(function(e,t){r.set(t,e)}),a=r}return a.get(e)||null}function N(e,t,r,n){var a=e.length;r=Math.max(0,null==r?0:+r),n=Math.min(a-1,null==n?a-1:+n);var i=[];return t.paragraphs.forEach(function(a){var o=Math.max(r,a.start),s=Math.min(n,a.end);if(o<s){for(var l=t.levels.slice(o,s+1),u=s;u>=o&&p(e[u])&d;u--)l[u]=a.level;for(var f=a.level,c=1/0,h=0;h<l.length;h++){var v=l[h];v>f&&(f=v),v<c&&(c=1|v)}for(var m=f;m>=c;m--)for(var g=0;g<l.length;g++)if(l[g]>=m){for(var y=g;g+1<l.length&&l[g+1]>=m;)g++;g>y&&i.push([y+o,g+o])}}}),i}function W(e,t,r,n){for(var a=N(e,t,r,n),i=[],o=0;o<e.length;o++)i[o]=o;return a.forEach(function(e){for(var t=e[0],r=e[1],n=i.slice(t,r+1),a=n.length;a--;)i[r-a]=n[a]}),i}return e.closingToOpeningBracket=y,e.getBidiCharType=p,e.getBidiCharTypeName=function(e){return s[p(e)]},e.getCanonicalBracket=b,e.getEmbeddingLevels=function(e,t){for(var r=new Uint32Array(e.length),n=0;n<e.length;n++)r[n]=p(e[n]);var a=new Map;function i(e,t){var n=r[e];r[e]=t,a.set(n,a.get(n)-1),n&f&&a.set(f,a.get(f)-1),a.set(t,(a.get(t)||0)+1),t&f&&a.set(f,(a.get(f)||0)+1)}for(var o=new Uint8Array(e.length),s=new Map,h=[],v=null,m=0;m<e.length;m++)v||h.push(v={start:m,end:e.length-1,level:"rtl"===t?1:"ltr"===t?0:tA(m,!1)}),r[m]&M&&(v.end=m,v=null);for(var V=R|I|P|O|l|z|L|M,N=function(e){return e+(1&e?1:2)},W=function(e){return e+(1&e?2:1)},H=0;H<h.length;H++){var X=[{_level:(v=h[H]).level,_override:0,_isolate:0}],Y=void 0,q=0,$=0,Z=0;a.clear();for(var K=v.start;K<=v.end;K++){var Q=r[K];if(Y=X[X.length-1],a.set(Q,(a.get(Q)||0)+1),Q&f&&a.set(f,(a.get(f)||0)+1),Q&V)if(Q&(R|I)){o[K]=Y._level;var J=(Q===R?W:N)(Y._level);!(J<=125)||q||$?!q&&$++:X.push({_level:J,_override:0,_isolate:0})}else if(Q&(P|O)){o[K]=Y._level;var ee=(Q===P?W:N)(Y._level);!(ee<=125)||q||$?!q&&$++:X.push({_level:ee,_override:Q&P?S:x,_isolate:0})}else if(Q&l){Q&j&&(Q=1===tA(K+1,!0)?G:B),o[K]=Y._level,Y._override&&i(K,Y._override);var et=(Q===G?W:N)(Y._level);et<=125&&0===q&&0===$?(Z++,X.push({_level:et,_override:0,_isolate:1,_isolInitIndex:K})):q++}else if(Q&z){if(q>0)q--;else if(Z>0){for($=0;!X[X.length-1]._isolate;)X.pop();var er=X[X.length-1]._isolInitIndex;null!=er&&(s.set(er,K),s.set(K,er)),X.pop(),Z--}Y=X[X.length-1],o[K]=Y._level,Y._override&&i(K,Y._override)}else Q&L?(0===q&&($>0?$--:!Y._isolate&&X.length>1&&(X.pop(),Y=X[X.length-1])),o[K]=Y._level):Q&M&&(o[K]=v.level);else o[K]=Y._level,Y._override&&Q!==A&&i(K,Y._override)}for(var en=[],ea=null,ei=v.start;ei<=v.end;ei++){var eo=r[ei];if(!(eo&c)){var es=o[ei],el=eo&l,eu=eo===z;ea&&es===ea._level?(ea._end=ei,ea._endsWithIsolInit=el):en.push(ea={_start:ei,_end:ei,_level:es,_startsWithPDI:eu,_endsWithIsolInit:el})}}for(var ef=[],ec=0;ec<en.length;ec++){var ed=en[ec];if(!ed._startsWithPDI||ed._startsWithPDI&&!s.has(ed._start)){for(var eh=[ea=ed],ep=void 0;ea&&ea._endsWithIsolInit&&null!=(ep=s.get(ea._end));)for(var ev=ec+1;ev<en.length;ev++)if(en[ev]._start===ep){eh.push(ea=en[ev]);break}for(var em=[],eg=0;eg<eh.length;eg++)for(var ey=eh[eg],eb=ey._start;eb<=ey._end;eb++)em.push(eb);for(var ex=o[em[0]],eS=v.level,ew=em[0]-1;ew>=0;ew--)if(!(r[ew]&c)){eS=o[ew];break}var eU=em[em.length-1],eT=o[eU],e_=v.level;if(!(r[eU]&l)){for(var ek=eU+1;ek<=v.end;ek++)if(!(r[ek]&c)){e_=o[ek];break}}ef.push({_seqIndices:em,_sosType:Math.max(eS,ex)%2?S:x,_eosType:Math.max(e_,eT)%2?S:x})}}for(var eM=0;eM<ef.length;eM++){var eE=ef[eM],eC=eE._seqIndices,eA=eE._sosType,eD=eE._eosType,eF=1&o[eC[0]]?S:x;if(a.get(D))for(var eO=0;eO<eC.length;eO++){var eP=eC[eO];if(r[eP]&D){for(var eI=eA,eR=eO-1;eR>=0;eR--)if(!(r[eC[eR]]&c)){eI=r[eC[eR]];break}i(eP,eI&(l|z)?C:eI)}}if(a.get(w))for(var eL=0;eL<eC.length;eL++){var eB=eC[eL];if(r[eB]&w)for(var eG=eL-1;eG>=-1;eG--){var ej=-1===eG?eA:r[eC[eG]];if(ej&u){ej===F&&i(eB,_);break}}}if(a.get(F))for(var ez=0;ez<eC.length;ez++){var eV=eC[ez];r[eV]&F&&i(eV,S)}if(a.get(U)||a.get(k))for(var eN=1;eN<eC.length-1;eN++){var eW=eC[eN];if(r[eW]&(U|k)){for(var eH=0,eX=0,eY=eN-1;eY>=0&&(eH=r[eC[eY]])&c;eY--);for(var eq=eN+1;eq<eC.length&&(eX=r[eC[eq]])&c;eq++);eH===eX&&(r[eW]===U?eH===w:eH&(w|_))&&i(eW,eH)}}if(a.get(w)){for(var e$=0;e$<eC.length;e$++)if(r[eC[e$]]&w){for(var eZ=e$-1;eZ>=0&&r[eC[eZ]]&(T|c);eZ--)i(eC[eZ],w);for(e$++;e$<eC.length&&r[eC[e$]]&(T|c|w);e$++)r[eC[e$]]!==w&&i(eC[e$],w)}}if(a.get(T)||a.get(U)||a.get(k))for(var eK=0;eK<eC.length;eK++){var eQ=eC[eK];if(r[eQ]&(T|U|k)){i(eQ,C);for(var eJ=eK-1;eJ>=0&&r[eC[eJ]]&c;eJ--)i(eC[eJ],C);for(var e1=eK+1;e1<eC.length&&r[eC[e1]]&c;e1++)i(eC[e1],C)}}if(a.get(w))for(var e0=0,e2=eA;e0<eC.length;e0++){var e3=eC[e0],e4=r[e3];e4&w?e2===x&&i(e3,x):e4&u&&(e2=e4)}if(a.get(f)){for(var e5=S|w|_,e6=e5|x,e8=[],e7=[],e9=0;e9<eC.length;e9++)if(r[eC[e9]]&f){var te=e[eC[e9]],tt=void 0;if(null!==g(te))if(e7.length<63)e7.push({char:te,seqIndex:e9});else break;else if(null!==(tt=y(te)))for(var tr=e7.length-1;tr>=0;tr--){var tn=e7[tr].char;if(tn===tt||tn===y(b(te))||g(b(tn))===te){e8.push([e7[tr].seqIndex,e9]),e7.length=tr;break}}}e8.sort(function(e,t){return e[0]-t[0]});for(var ta=0;ta<e8.length;ta++){for(var ti=e8[ta],to=ti[0],ts=ti[1],tl=!1,tu=0,tf=to+1;tf<ts;tf++){var tc=eC[tf];if(r[tc]&e6){tl=!0;var td=r[tc]&e5?S:x;if(td===eF){tu=td;break}}}if(tl&&!tu){tu=eA;for(var th=to-1;th>=0;th--){var tp=eC[th];if(r[tp]&e6){var tv=r[tp]&e5?S:x;tu=tv!==eF?tv:eF;break}}}if(tu){if(r[eC[to]]=r[eC[ts]]=tu,tu!==eF){for(var tm=to+1;tm<eC.length;tm++)if(!(r[eC[tm]]&c)){p(e[eC[tm]])&D&&(r[eC[tm]]=tu);break}}if(tu!==eF){for(var tg=ts+1;tg<eC.length;tg++)if(!(r[eC[tg]]&c)){p(e[eC[tg]])&D&&(r[eC[tg]]=tu);break}}}}for(var ty=0;ty<eC.length;ty++)if(r[eC[ty]]&f){for(var tb=ty,tx=ty,tS=eA,tw=ty-1;tw>=0;tw--)if(r[eC[tw]]&c)tb=tw;else{tS=r[eC[tw]]&e5?S:x;break}for(var tU=eD,tT=ty+1;tT<eC.length;tT++)if(r[eC[tT]]&(f|c))tx=tT;else{tU=r[eC[tT]]&e5?S:x;break}for(var t_=tb;t_<=tx;t_++)r[eC[t_]]=tS===tU?tS:eF;ty=tx}}}for(var tk=v.start;tk<=v.end;tk++){var tM=o[tk],tE=r[tk];if(1&tM?tE&(x|w|_)&&o[tk]++:tE&S?o[tk]++:tE&(_|w)&&(o[tk]+=2),tE&c&&(o[tk]=0===tk?v.level:o[tk-1]),tk===v.end||p(e[tk])&(E|M))for(var tC=tk;tC>=0&&p(e[tC])&d;tC--)o[tC]=v.level}}return{levels:o,paragraphs:h};function tA(t,n){for(var a=t;a<e.length;a++){var i=r[a];if(i&(S|F))return 1;if(i&(M|x)||n&&i===z)break;if(i&l){var o=function(t){for(var n=1,a=t+1;a<e.length;a++){var i=r[a];if(i&M)break;if(i&z){if(0==--n)return a}else i&l&&n++}return -1}(a);a=-1===o?e.length:o}}return 0}},e.getMirroredCharacter=V,e.getMirroredCharactersMap=function(e,t,r,n){var a=e.length;r=Math.max(0,null==r?0:+r),n=Math.min(a-1,null==n?a-1:+n);for(var i=new Map,o=r;o<=n;o++)if(1&t[o]){var s=V(e[o]);null!==s&&i.set(o,s)}return i},e.getReorderSegments=N,e.getReorderedIndices=W,e.getReorderedString=function(e,t,r,n){var a=W(e,t,r,n),i=[].concat(e);return a.forEach(function(r,n){i[n]=(1&t.levels[r]?V(e[r]):null)||e[r]}),i.join("")},e.openingToClosingBracket=g,Object.defineProperty(e,"__esModule",{value:!0}),e}({})}],init:(e,t,r)=>e(t,r())}),e1=eu({name:"Typesetter",dependencies:[eJ],init:e=>function(t){return new Promise(r=>{e.typeset(t,r)})},getTransferables(e){let t=[];for(let r in e)e[r]&&e[r].buffer&&t.push(e[r].buffer);return t}}),e0=e1.onMainThread,e2={},e3="aTroikaGlyphIndex";class e4 extends ee.InstancedBufferGeometry{constructor(){super(),this.detail=1,this.curveRadius=0,this.groups=[{start:0,count:1/0,materialIndex:0},{start:0,count:1/0,materialIndex:1}],this.boundingSphere=new ee.Sphere,this.boundingBox=new ee.Box3}computeBoundingSphere(){}computeBoundingBox(){}set detail(e){if(e!==this._detail){var t;let r;this._detail=e,("number"!=typeof e||e<1)&&(e=1);let n=((r=e2[t=e])||(r=e2[t]=new ee.PlaneGeometry(1,1,t,t).translate(.5,.5,0)),r);["position","normal","uv"].forEach(e=>{this.attributes[e]=n.attributes[e].clone()}),this.setIndex(n.getIndex().clone())}}get detail(){return this._detail}set curveRadius(e){e!==this._curveRadius&&(this._curveRadius=e,this._updateBounds())}get curveRadius(){return this._curveRadius}updateGlyphs(e,t,r,n,a){this.updateAttributeData("aTroikaGlyphBounds",e,4),this.updateAttributeData(e3,t,1),this.updateAttributeData("aTroikaGlyphColor",a,3),this._blockBounds=r,this._chunkedBounds=n,this.instanceCount=t.length,this._updateBounds()}_updateBounds(){let e=this._blockBounds;if(e){let{curveRadius:t,boundingBox:r}=this;if(t){let{PI:n,floor:a,min:i,max:o,sin:s,cos:l}=Math,u=n/2,f=2*n,c=Math.abs(t),d=e[0]/c,h=e[2]/c,p=a((d+u)/f)!==a((h+u)/f)?-c:i(s(d)*c,s(h)*c),v=a((d-u)/f)!==a((h-u)/f)?c:o(s(d)*c,s(h)*c),m=a((d+n)/f)!==a((h+n)/f)?2*c:o(c-l(d)*c,c-l(h)*c);r.min.set(p,e[1],t<0?-m:0),r.max.set(v,e[3],t<0?0:m)}else r.min.set(e[0],e[1],0),r.max.set(e[2],e[3],0);r.getBoundingSphere(this.boundingSphere)}}applyClipRect(e){let t=this.getAttribute(e3).count,r=this._chunkedBounds;if(r)for(let n=r.length;n--;){t=r[n].end;let a=r[n].rect;if(a[1]<e.w&&a[3]>e.y&&a[0]<e.z&&a[2]>e.x)break}this.instanceCount=t}updateAttributeData(e,t,r){let n=this.getAttribute(e);t?n&&n.array.length===t.length?(n.array.set(t),n.needsUpdate=!0):(this.setAttribute(e,new ee.InstancedBufferAttribute(t,r)),delete this._maxInstanceCount,this.dispose()):n&&this.deleteAttribute(e)}}let e5=`
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform vec4 uTroikaTotalBounds;
uniform vec4 uTroikaClipRect;
uniform mat3 uTroikaOrient;
uniform bool uTroikaUseGlyphColors;
uniform float uTroikaEdgeOffset;
uniform float uTroikaBlurRadius;
uniform vec2 uTroikaPositionOffset;
uniform float uTroikaCurveRadius;
attribute vec4 aTroikaGlyphBounds;
attribute float aTroikaGlyphIndex;
attribute vec3 aTroikaGlyphColor;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec3 vTroikaGlyphColor;
varying vec2 vTroikaGlyphDimensions;
`,e6=`
vec4 bounds = aTroikaGlyphBounds;
bounds.xz += uTroikaPositionOffset.x;
bounds.yw -= uTroikaPositionOffset.y;

vec4 outlineBounds = vec4(
  bounds.xy - uTroikaEdgeOffset - uTroikaBlurRadius,
  bounds.zw + uTroikaEdgeOffset + uTroikaBlurRadius
);
vec4 clippedBounds = vec4(
  clamp(outlineBounds.xy, uTroikaClipRect.xy, uTroikaClipRect.zw),
  clamp(outlineBounds.zw, uTroikaClipRect.xy, uTroikaClipRect.zw)
);

vec2 clippedXY = (mix(clippedBounds.xy, clippedBounds.zw, position.xy) - bounds.xy) / (bounds.zw - bounds.xy);

position.xy = mix(bounds.xy, bounds.zw, clippedXY);

uv = (position.xy - uTroikaTotalBounds.xy) / (uTroikaTotalBounds.zw - uTroikaTotalBounds.xy);

float rad = uTroikaCurveRadius;
if (rad != 0.0) {
  float angle = position.x / rad;
  position.xz = vec2(sin(angle) * rad, rad - cos(angle) * rad);
  normal.xz = vec2(sin(angle), cos(angle));
}
  
position = uTroikaOrient * position;
normal = uTroikaOrient * normal;

vTroikaGlyphUV = clippedXY.xy;
vTroikaGlyphDimensions = vec2(bounds[2] - bounds[0], bounds[3] - bounds[1]);


float txCols = uTroikaSDFTextureSize.x / uTroikaSDFGlyphSize;
vec2 txUvPerSquare = uTroikaSDFGlyphSize / uTroikaSDFTextureSize;
vec2 txStartUV = txUvPerSquare * vec2(
  mod(floor(aTroikaGlyphIndex / 4.0), txCols),
  floor(floor(aTroikaGlyphIndex / 4.0) / txCols)
);
vTroikaTextureUVBounds = vec4(txStartUV, vec2(txStartUV) + txUvPerSquare);
vTroikaTextureChannel = mod(aTroikaGlyphIndex, 4.0);
`,e8=`
uniform sampler2D uTroikaSDFTexture;
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform float uTroikaSDFExponent;
uniform float uTroikaEdgeOffset;
uniform float uTroikaFillOpacity;
uniform float uTroikaBlurRadius;
uniform vec3 uTroikaStrokeColor;
uniform float uTroikaStrokeWidth;
uniform float uTroikaStrokeOpacity;
uniform bool uTroikaSDFDebug;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec2 vTroikaGlyphDimensions;

float troikaSdfValueToSignedDistance(float alpha) {
  // Inverse of exponential encoding in webgl-sdf-generator
  
  float maxDimension = max(vTroikaGlyphDimensions.x, vTroikaGlyphDimensions.y);
  float absDist = (1.0 - pow(2.0 * (alpha > 0.5 ? 1.0 - alpha : alpha), 1.0 / uTroikaSDFExponent)) * maxDimension;
  float signedDist = absDist * (alpha > 0.5 ? -1.0 : 1.0);
  return signedDist;
}

float troikaGlyphUvToSdfValue(vec2 glyphUV) {
  vec2 textureUV = mix(vTroikaTextureUVBounds.xy, vTroikaTextureUVBounds.zw, glyphUV);
  vec4 rgba = texture2D(uTroikaSDFTexture, textureUV);
  float ch = floor(vTroikaTextureChannel + 0.5); //NOTE: can't use round() in WebGL1
  return ch == 0.0 ? rgba.r : ch == 1.0 ? rgba.g : ch == 2.0 ? rgba.b : rgba.a;
}

float troikaGlyphUvToDistance(vec2 uv) {
  return troikaSdfValueToSignedDistance(troikaGlyphUvToSdfValue(uv));
}

float troikaGetAADist() {
  
  #if defined(GL_OES_standard_derivatives) || __VERSION__ >= 300
  return length(fwidth(vTroikaGlyphUV * vTroikaGlyphDimensions)) * 0.5;
  #else
  return vTroikaGlyphDimensions.x / 64.0;
  #endif
}

float troikaGetFragDistValue() {
  vec2 clampedGlyphUV = clamp(vTroikaGlyphUV, 0.5 / uTroikaSDFGlyphSize, 1.0 - 0.5 / uTroikaSDFGlyphSize);
  float distance = troikaGlyphUvToDistance(clampedGlyphUV);
 
  // Extrapolate distance when outside bounds:
  distance += clampedGlyphUV == vTroikaGlyphUV ? 0.0 : 
    length((vTroikaGlyphUV - clampedGlyphUV) * vTroikaGlyphDimensions);

  

  return distance;
}

float troikaGetEdgeAlpha(float distance, float distanceOffset, float aaDist) {
  #if defined(IS_DEPTH_MATERIAL) || defined(IS_DISTANCE_MATERIAL)
  float alpha = step(-distanceOffset, -distance);
  #else

  float alpha = smoothstep(
    distanceOffset + aaDist,
    distanceOffset - aaDist,
    distance
  );
  #endif

  return alpha;
}
`,e7=`
float aaDist = troikaGetAADist();
float fragDistance = troikaGetFragDistValue();
float edgeAlpha = uTroikaSDFDebug ?
  troikaGlyphUvToSdfValue(vTroikaGlyphUV) :
  troikaGetEdgeAlpha(fragDistance, uTroikaEdgeOffset, max(aaDist, uTroikaBlurRadius));

#if !defined(IS_DEPTH_MATERIAL) && !defined(IS_DISTANCE_MATERIAL)
vec4 fillRGBA = gl_FragColor;
fillRGBA.a *= uTroikaFillOpacity;
vec4 strokeRGBA = uTroikaStrokeWidth == 0.0 ? fillRGBA : vec4(uTroikaStrokeColor, uTroikaStrokeOpacity);
if (fillRGBA.a == 0.0) fillRGBA.rgb = strokeRGBA.rgb;
gl_FragColor = mix(fillRGBA, strokeRGBA, smoothstep(
  -uTroikaStrokeWidth - aaDist,
  -uTroikaStrokeWidth + aaDist,
  fragDistance
));
gl_FragColor.a *= edgeAlpha;
#endif

if (edgeAlpha == 0.0) {
  discard;
}
`,e9=new ee.MeshBasicMaterial({color:0xffffff,side:ee.DoubleSide,transparent:!0}),te=new ee.Matrix4,tt=new ee.Vector3,tr=new ee.Vector3,tn=[],ta=new ee.Vector3,ti="+x+y";function to(e){return Array.isArray(e)?e[0]:e}let ts=()=>{let e=new ee.Mesh(new ee.PlaneGeometry(1,1),e9);return ts=()=>e,e},tl=()=>{let e=new ee.Mesh(new ee.PlaneGeometry(1,1,32,1),e9);return tl=()=>e,e},tu={type:"syncstart"},tf={type:"synccomplete"},tc=["font","fontSize","fontStyle","fontWeight","lang","letterSpacing","lineHeight","maxWidth","overflowWrap","text","direction","textAlign","textIndent","whiteSpace","anchorX","anchorY","colorRanges","sdfGlyphSize"],td=tc.concat("material","color","depthOffset","clipRect","curveRadius","orientation","glyphGeometryDetail");class th extends ee.Mesh{constructor(){super(new e4,null),this.text="",this.anchorX=0,this.anchorY=0,this.curveRadius=0,this.direction="auto",this.font=null,this.unicodeFontsURL=null,this.fontSize=.1,this.fontWeight="normal",this.fontStyle="normal",this.lang=null,this.letterSpacing=0,this.lineHeight="normal",this.maxWidth=1/0,this.overflowWrap="normal",this.textAlign="left",this.textIndent=0,this.whiteSpace="normal",this.material=null,this.color=null,this.colorRanges=null,this.outlineWidth=0,this.outlineColor=0,this.outlineOpacity=1,this.outlineBlur=0,this.outlineOffsetX=0,this.outlineOffsetY=0,this.strokeWidth=0,this.strokeColor=8421504,this.strokeOpacity=1,this.fillOpacity=1,this.depthOffset=0,this.clipRect=null,this.orientation=ti,this.glyphGeometryDetail=1,this.sdfGlyphSize=null,this.gpuAccelerateSDF=!0,this.debugSDF=!1}sync(e){this._needsSync&&(this._needsSync=!1,this._isSyncing?(this._queuedSyncs||(this._queuedSyncs=[])).push(e):(this._isSyncing=!0,this.dispatchEvent(tu),e$({text:this.text,font:this.font,lang:this.lang,fontSize:this.fontSize||.1,fontWeight:this.fontWeight||"normal",fontStyle:this.fontStyle||"normal",letterSpacing:this.letterSpacing||0,lineHeight:this.lineHeight||"normal",maxWidth:this.maxWidth,direction:this.direction||"auto",textAlign:this.textAlign,textIndent:this.textIndent,whiteSpace:this.whiteSpace,overflowWrap:this.overflowWrap,anchorX:this.anchorX,anchorY:this.anchorY,colorRanges:this.colorRanges,includeCaretPositions:!0,sdfGlyphSize:this.sdfGlyphSize,gpuAccelerateSDF:this.gpuAccelerateSDF,unicodeFontsURL:this.unicodeFontsURL},t=>{this._isSyncing=!1,this._textRenderInfo=t,this.geometry.updateGlyphs(t.glyphBounds,t.glyphAtlasIndices,t.blockBounds,t.chunkedBounds,t.glyphColors);let r=this._queuedSyncs;r&&(this._queuedSyncs=null,this._needsSync=!0,this.sync(()=>{r.forEach(e=>e&&e())})),this.dispatchEvent(tf),e&&e()})))}onBeforeRender(e,t,r,n,a,i){this.sync(),a.isTroikaTextMaterial&&this._prepareForRender(a)}dispose(){this.geometry.dispose()}get textRenderInfo(){return this._textRenderInfo||null}createDerivedMaterial(e){let t;return(t=ew(e,{chained:!0,extensions:{derivatives:!0},uniforms:{uTroikaSDFTexture:{value:null},uTroikaSDFTextureSize:{value:new ee.Vector2},uTroikaSDFGlyphSize:{value:0},uTroikaSDFExponent:{value:0},uTroikaTotalBounds:{value:new ee.Vector4(0,0,0,0)},uTroikaClipRect:{value:new ee.Vector4(0,0,0,0)},uTroikaEdgeOffset:{value:0},uTroikaFillOpacity:{value:1},uTroikaPositionOffset:{value:new ee.Vector2},uTroikaCurveRadius:{value:0},uTroikaBlurRadius:{value:0},uTroikaStrokeWidth:{value:0},uTroikaStrokeColor:{value:new ee.Color},uTroikaStrokeOpacity:{value:1},uTroikaOrient:{value:new ee.Matrix3},uTroikaUseGlyphColors:{value:!0},uTroikaSDFDebug:{value:!1}},vertexDefs:e5,vertexTransform:e6,fragmentDefs:e8,fragmentColorTransform:e7,customRewriter({vertexShader:e,fragmentShader:t}){let r=/\buniform\s+vec3\s+diffuse\b/;return r.test(t)&&(t=t.replace(r,"varying vec3 vTroikaGlyphColor").replace(/\bdiffuse\b/g,"vTroikaGlyphColor"),r.test(e)||(e=e.replace(ep,"uniform vec3 diffuse;\n$&\nvTroikaGlyphColor = uTroikaUseGlyphColors ? aTroikaGlyphColor / 255.0 : diffuse;\n"))),{vertexShader:e,fragmentShader:t}}})).transparent=!0,t.forceSinglePass=!0,Object.defineProperties(t,{isTroikaTextMaterial:{value:!0},shadowSide:{get(){return this.side},set(){}}}),t}get material(){let e=this._derivedMaterial,t=this._baseMaterial||this._defaultMaterial||(this._defaultMaterial=e9.clone());if(e&&e.isDerivedFrom(t)||(e=this._derivedMaterial=this.createDerivedMaterial(t),t.addEventListener("dispose",function r(){t.removeEventListener("dispose",r),e.dispose()})),!this.hasOutline())return e;{let t=e._outlineMtl;return t||((t=e._outlineMtl=Object.create(e,{id:{value:e.id+.1}})).isTextOutlineMaterial=!0,t.depthWrite=!1,t.map=null,e.addEventListener("dispose",function r(){e.removeEventListener("dispose",r),t.dispose()})),[t,e]}}set material(e){e&&e.isTroikaTextMaterial?(this._derivedMaterial=e,this._baseMaterial=e.baseMaterial):this._baseMaterial=e}hasOutline(){return!!(this.outlineWidth||this.outlineBlur||this.outlineOffsetX||this.outlineOffsetY)}get glyphGeometryDetail(){return this.geometry.detail}set glyphGeometryDetail(e){this.geometry.detail=e}get curveRadius(){return this.geometry.curveRadius}set curveRadius(e){this.geometry.curveRadius=e}get customDepthMaterial(){return to(this.material).getDepthMaterial()}set customDepthMaterial(e){}get customDistanceMaterial(){return to(this.material).getDistanceMaterial()}set customDistanceMaterial(e){}_prepareForRender(e){let t=e.isTextOutlineMaterial,r=e.uniforms,n=this.textRenderInfo;if(n){let e,a,i,{sdfTexture:o,blockBounds:s}=n;r.uTroikaSDFTexture.value=o,r.uTroikaSDFTextureSize.value.set(o.image.width,o.image.height),r.uTroikaSDFGlyphSize.value=n.sdfGlyphSize,r.uTroikaSDFExponent.value=n.sdfExponent,r.uTroikaTotalBounds.value.fromArray(s),r.uTroikaUseGlyphColors.value=!t&&!!n.glyphColors;let l=0,u=0,f=0,c=0,d=0;if(t){let{outlineWidth:t,outlineOffsetX:r,outlineOffsetY:n,outlineBlur:a,outlineOpacity:i}=this;l=this._parsePercent(t)||0,u=Math.max(0,this._parsePercent(a)||0),e=i,c=this._parsePercent(r)||0,d=this._parsePercent(n)||0}else(f=Math.max(0,this._parsePercent(this.strokeWidth)||0))&&(i=this.strokeColor,r.uTroikaStrokeColor.value.set(null==i?8421504:i),null==(a=this.strokeOpacity)&&(a=1)),e=this.fillOpacity;r.uTroikaEdgeOffset.value=l,r.uTroikaPositionOffset.value.set(c,d),r.uTroikaBlurRadius.value=u,r.uTroikaStrokeWidth.value=f,r.uTroikaStrokeOpacity.value=a,r.uTroikaFillOpacity.value=null==e?1:e,r.uTroikaCurveRadius.value=this.curveRadius||0;let h=this.clipRect;if(h&&Array.isArray(h)&&4===h.length)r.uTroikaClipRect.value.fromArray(h);else{let e=100*(this.fontSize||.1);r.uTroikaClipRect.value.set(s[0]-e,s[1]-e,s[2]+e,s[3]+e)}this.geometry.applyClipRect(r.uTroikaClipRect.value)}r.uTroikaSDFDebug.value=!!this.debugSDF,e.polygonOffset=!!this.depthOffset,e.polygonOffsetFactor=e.polygonOffsetUnits=this.depthOffset||0;let a=t?this.outlineColor||0:this.color;if(null==a)delete e.color;else{let t=e.hasOwnProperty("color")?e.color:e.color=new ee.Color;(a!==t._input||"object"==typeof a)&&t.set(t._input=a)}let i=this.orientation||ti;if(i!==e._orientation){let t=r.uTroikaOrient.value,n=(i=i.replace(/[^-+xyz]/g,""))!==ti&&i.match(/^([-+])([xyz])([-+])([xyz])$/);if(n){let[,e,r,a,i]=n;tt.set(0,0,0)[r]="-"===e?1:-1,tr.set(0,0,0)[i]="-"===a?-1:1,te.lookAt(ta,tt.cross(tr),tr),t.setFromMatrix4(te)}else t.identity();e._orientation=i}}_parsePercent(e){if("string"==typeof e){let t=e.match(/^(-?[\d.]+)%$/),r=t?parseFloat(t[1]):NaN;e=(isNaN(r)?0:r/100)*this.fontSize}return e}localPositionToTextCoords(e,t=new ee.Vector2){t.copy(e);let r=this.curveRadius;return r&&(t.x=Math.atan2(e.x,Math.abs(r)-Math.abs(e.z))*Math.abs(r)),t}worldPositionToTextCoords(e,t=new ee.Vector2){return tt.copy(e),this.localPositionToTextCoords(this.worldToLocal(tt),t)}raycast(e,t){let{textRenderInfo:r,curveRadius:n}=this;if(r){let a=r.blockBounds,i=n?tl():ts(),o=i.geometry,{position:s,uv:l}=o.attributes;for(let e=0;e<l.count;e++){let t=a[0]+l.getX(e)*(a[2]-a[0]),r=a[1]+l.getY(e)*(a[3]-a[1]),i=0;n&&(i=n-Math.cos(t/n)*n,t=Math.sin(t/n)*n),s.setXYZ(e,t,r,i)}o.boundingSphere=this.geometry.boundingSphere,o.boundingBox=this.geometry.boundingBox,i.matrixWorld=this.matrixWorld,i.material.side=this.material.side,tn.length=0,i.raycast(e,tn);for(let e=0;e<tn.length;e++)tn[e].object=this,t.push(tn[e])}}copy(e){let t=this.geometry;return super.copy(e),this.geometry=t,td.forEach(t=>{this[t]=e[t]}),this}clone(){return new this.constructor().copy(this)}}tc.forEach(e=>{let t="_private_"+e;Object.defineProperty(th.prototype,e,{get(){return this[t]},set(e){e!==this[t]&&(this[t]=e,this._needsSync=!0)}})}),new ee.Box3,new ee.Color,new WeakMap,new WeakMap;var tp=e.i(20284);let tv=f.forwardRef(({sdfGlyphSize:e=64,anchorX:t="center",anchorY:r="middle",font:n,fontSize:a=1,children:i,characters:o,onSync:s,...l},u)=>{let c=(0,p.useThree)(({invalidate:e})=>e),[d]=f.useState(()=>new th),[v,m]=f.useMemo(()=>{let e=[],t="";return f.Children.forEach(i,r=>{"string"==typeof r||"number"==typeof r?t+=r:e.push(r)}),[e,t]},[i]);return(0,tp.suspend)(()=>new Promise(e=>(function({font:e,characters:t,sdfGlyphSize:r},n){e$({font:e,sdfGlyphSize:r,text:Array.isArray(t)?t.join("\n"):""+t},n)})({font:n,characters:o},e)),["troika-text",n,o]),f.useLayoutEffect(()=>void d.sync(()=>{c(),s&&s(d)})),f.useEffect(()=>()=>d.dispose(),[d]),f.createElement("primitive",(0,h.default)({object:d,ref:u,font:n,text:m,anchorX:t,anchorY:r,fontSize:a,sdfGlyphSize:e},l),v)});var tm=v,tg=e.i(58013);function ty(e,t,r){let n=(0,p.useThree)(e=>e.size),a=(0,p.useThree)(e=>e.viewport),i="number"==typeof e?e:n.width*a.dpr,o="number"==typeof t?t:n.height*a.dpr,s=("number"==typeof e?r:e)||{},{samples:l=0,depth:u,...c}=s,d=null!=u?u:s.depthBuffer,h=f.useMemo(()=>{let e=new v.WebGLRenderTarget(i,o,{minFilter:v.LinearFilter,magFilter:v.LinearFilter,type:v.HalfFloatType,...c});return d&&(e.depthTexture=new v.DepthTexture(i,o,v.FloatType)),e.samples=l,e},[]);return f.useLayoutEffect(()=>{h.setSize(i,o),l&&(h.samples=l)},[l,h,i,o]),f.useEffect(()=>()=>h.dispose(),[]),h}var tb=v;let tx=(i={},o="void main() { }",s="void main() { gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0); discard;  }",(l=class extends tb.ShaderMaterial{constructor(e){for(const t in super({vertexShader:o,fragmentShader:s,...e}),i)this.uniforms[t]=new tb.Uniform(i[t]),Object.defineProperty(this,t,{get(){return this.uniforms[t].value},set(e){this.uniforms[t].value=e}});this.uniforms=tb.UniformsUtils.clone(this.uniforms)}}).key=tb.MathUtils.generateUUID(),l);class tS extends tm.MeshPhysicalMaterial{constructor(e=6,t=!1){super(),this.uniforms={chromaticAberration:{value:.05},transmission:{value:0},_transmission:{value:1},transmissionMap:{value:null},roughness:{value:0},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:1/0},attenuationColor:{value:new tm.Color("white")},anisotropicBlur:{value:.1},time:{value:0},distortion:{value:0},distortionScale:{value:.5},temporalDistortion:{value:0},buffer:{value:null}},this.onBeforeCompile=r=>{r.uniforms={...r.uniforms,...this.uniforms},this.anisotropy>0&&(r.defines.USE_ANISOTROPY=""),t?r.defines.USE_SAMPLER="":r.defines.USE_TRANSMISSION="",r.fragmentShader=`
      uniform float chromaticAberration;         
      uniform float anisotropicBlur;      
      uniform float time;
      uniform float distortion;
      uniform float distortionScale;
      uniform float temporalDistortion;
      uniform sampler2D buffer;

      vec3 random3(vec3 c) {
        float j = 4096.0*sin(dot(c,vec3(17.0, 59.4, 15.0)));
        vec3 r;
        r.z = fract(512.0*j);
        j *= .125;
        r.x = fract(512.0*j);
        j *= .125;
        r.y = fract(512.0*j);
        return r-0.5;
      }

      uint hash( uint x ) {
        x += ( x << 10u );
        x ^= ( x >>  6u );
        x += ( x <<  3u );
        x ^= ( x >> 11u );
        x += ( x << 15u );
        return x;
      }

      // Compound versions of the hashing algorithm I whipped together.
      uint hash( uvec2 v ) { return hash( v.x ^ hash(v.y)                         ); }
      uint hash( uvec3 v ) { return hash( v.x ^ hash(v.y) ^ hash(v.z)             ); }
      uint hash( uvec4 v ) { return hash( v.x ^ hash(v.y) ^ hash(v.z) ^ hash(v.w) ); }

      // Construct a float with half-open range [0:1] using low 23 bits.
      // All zeroes yields 0.0, all ones yields the next smallest representable value below 1.0.
      float floatConstruct( uint m ) {
        const uint ieeeMantissa = 0x007FFFFFu; // binary32 mantissa bitmask
        const uint ieeeOne      = 0x3F800000u; // 1.0 in IEEE binary32
        m &= ieeeMantissa;                     // Keep only mantissa bits (fractional part)
        m |= ieeeOne;                          // Add fractional part to 1.0
        float  f = uintBitsToFloat( m );       // Range [1:2]
        return f - 1.0;                        // Range [0:1]
      }

      // Pseudo-random value in half-open range [0:1].
      float randomBase( float x ) { return floatConstruct(hash(floatBitsToUint(x))); }
      float randomBase( vec2  v ) { return floatConstruct(hash(floatBitsToUint(v))); }
      float randomBase( vec3  v ) { return floatConstruct(hash(floatBitsToUint(v))); }
      float randomBase( vec4  v ) { return floatConstruct(hash(floatBitsToUint(v))); }
      float rand(float seed) {
        float result = randomBase(vec3(gl_FragCoord.xy, seed));
        return result;
      }

      const float F3 =  0.3333333;
      const float G3 =  0.1666667;

      float snoise(vec3 p) {
        vec3 s = floor(p + dot(p, vec3(F3)));
        vec3 x = p - s + dot(s, vec3(G3));
        vec3 e = step(vec3(0.0), x - x.yzx);
        vec3 i1 = e*(1.0 - e.zxy);
        vec3 i2 = 1.0 - e.zxy*(1.0 - e);
        vec3 x1 = x - i1 + G3;
        vec3 x2 = x - i2 + 2.0*G3;
        vec3 x3 = x - 1.0 + 3.0*G3;
        vec4 w, d;
        w.x = dot(x, x);
        w.y = dot(x1, x1);
        w.z = dot(x2, x2);
        w.w = dot(x3, x3);
        w = max(0.6 - w, 0.0);
        d.x = dot(random3(s), x);
        d.y = dot(random3(s + i1), x1);
        d.z = dot(random3(s + i2), x2);
        d.w = dot(random3(s + 1.0), x3);
        w *= w;
        w *= w;
        d *= w;
        return dot(d, vec4(52.0));
      }

      float snoiseFractal(vec3 m) {
        return 0.5333333* snoise(m)
              +0.2666667* snoise(2.0*m)
              +0.1333333* snoise(4.0*m)
              +0.0666667* snoise(8.0*m);
      }
`+r.fragmentShader,r.fragmentShader=r.fragmentShader.replace("#include <transmission_pars_fragment>",`
        #ifdef USE_TRANSMISSION
          // Transmission code is based on glTF-Sampler-Viewer
          // https://github.com/KhronosGroup/glTF-Sample-Viewer
          uniform float _transmission;
          uniform float thickness;
          uniform float attenuationDistance;
          uniform vec3 attenuationColor;
          #ifdef USE_TRANSMISSIONMAP
            uniform sampler2D transmissionMap;
          #endif
          #ifdef USE_THICKNESSMAP
            uniform sampler2D thicknessMap;
          #endif
          uniform vec2 transmissionSamplerSize;
          uniform sampler2D transmissionSamplerMap;
          uniform mat4 modelMatrix;
          uniform mat4 projectionMatrix;
          varying vec3 vWorldPosition;
          vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
            // Direction of refracted light.
            vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
            // Compute rotation-independant scaling of the model matrix.
            vec3 modelScale;
            modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
            modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
            modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
            // The thickness is specified in local space.
            return normalize( refractionVector ) * thickness * modelScale;
          }
          float applyIorToRoughness( const in float roughness, const in float ior ) {
            // Scale roughness with IOR so that an IOR of 1.0 results in no microfacet refraction and
            // an IOR of 1.5 results in the default amount of microfacet refraction.
            return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
          }
          vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
            float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );            
            #ifdef USE_SAMPLER
              #ifdef texture2DLodEXT
                return texture2DLodEXT(transmissionSamplerMap, fragCoord.xy, framebufferLod);
              #else
                return texture2D(transmissionSamplerMap, fragCoord.xy, framebufferLod);
              #endif
            #else
              return texture2D(buffer, fragCoord.xy);
            #endif
          }
          vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
            if ( isinf( attenuationDistance ) ) {
              // Attenuation distance is +∞, i.e. the transmitted color is not attenuated at all.
              return radiance;
            } else {
              // Compute light attenuation using Beer's law.
              vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
              vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance ); // Beer's law
              return transmittance * radiance;
            }
          }
          vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
            const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
            const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
            const in vec3 attenuationColor, const in float attenuationDistance ) {
            vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
            vec3 refractedRayExit = position + transmissionRay;
            // Project refracted vector on the framebuffer, while mapping to normalized device coordinates.
            vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
            vec2 refractionCoords = ndcPos.xy / ndcPos.w;
            refractionCoords += 1.0;
            refractionCoords /= 2.0;
            // Sample framebuffer to get pixel the refracted ray hits.
            vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
            vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
            // Get the specular component.
            vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
            return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
          }
        #endif
`),r.fragmentShader=r.fragmentShader.replace("#include <transmission_fragment>",`  
        // Improve the refraction to use the world pos
        material.transmission = _transmission;
        material.transmissionAlpha = 1.0;
        material.thickness = thickness;
        material.attenuationDistance = attenuationDistance;
        material.attenuationColor = attenuationColor;
        #ifdef USE_TRANSMISSIONMAP
          material.transmission *= texture2D( transmissionMap, vUv ).r;
        #endif
        #ifdef USE_THICKNESSMAP
          material.thickness *= texture2D( thicknessMap, vUv ).g;
        #endif
        
        vec3 pos = vWorldPosition;
        float runningSeed = 0.0;
        vec3 v = normalize( cameraPosition - pos );
        vec3 n = inverseTransformDirection( normal, viewMatrix );
        vec3 transmission = vec3(0.0);
        float transmissionR, transmissionB, transmissionG;
        float randomCoords = rand(runningSeed++);
        float thickness_smear = thickness * max(pow(roughnessFactor, 0.33), anisotropicBlur);
        vec3 distortionNormal = vec3(0.0);
        vec3 temporalOffset = vec3(time, -time, -time) * temporalDistortion;
        if (distortion > 0.0) {
          distortionNormal = distortion * vec3(snoiseFractal(vec3((pos * distortionScale + temporalOffset))), snoiseFractal(vec3(pos.zxy * distortionScale - temporalOffset)), snoiseFractal(vec3(pos.yxz * distortionScale + temporalOffset)));
        }
        for (float i = 0.0; i < ${e}.0; i ++) {
          vec3 sampleNorm = normalize(n + roughnessFactor * roughnessFactor * 2.0 * normalize(vec3(rand(runningSeed++) - 0.5, rand(runningSeed++) - 0.5, rand(runningSeed++) - 0.5)) * pow(rand(runningSeed++), 0.33) + distortionNormal);
          transmissionR = getIBLVolumeRefraction(
            sampleNorm, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
            pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness  + thickness_smear * (i + randomCoords) / float(${e}),
            material.attenuationColor, material.attenuationDistance
          ).r;
          transmissionG = getIBLVolumeRefraction(
            sampleNorm, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
            pos, modelMatrix, viewMatrix, projectionMatrix, material.ior  * (1.0 + chromaticAberration * (i + randomCoords) / float(${e})) , material.thickness + thickness_smear * (i + randomCoords) / float(${e}),
            material.attenuationColor, material.attenuationDistance
          ).g;
          transmissionB = getIBLVolumeRefraction(
            sampleNorm, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
            pos, modelMatrix, viewMatrix, projectionMatrix, material.ior * (1.0 + 2.0 * chromaticAberration * (i + randomCoords) / float(${e})), material.thickness + thickness_smear * (i + randomCoords) / float(${e}),
            material.attenuationColor, material.attenuationDistance
          ).b;
          transmission.r += transmissionR;
          transmission.g += transmissionG;
          transmission.b += transmissionB;
        }
        transmission /= ${e}.0;
        totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
`)},Object.keys(this.uniforms).forEach(e=>Object.defineProperty(this,e,{get:()=>this.uniforms[e].value,set:t=>this.uniforms[e].value=t}))}}let tw=f.forwardRef(({buffer:e,transmissionSampler:t=!1,backside:r=!1,side:n=tm.FrontSide,transmission:a=1,thickness:i=0,backsideThickness:o=0,backsideEnvMapIntensity:s=1,samples:l=10,resolution:u,backsideResolution:c,background:p,anisotropy:v,anisotropicBlur:m,...g},y)=>{let b,x,S,w;(0,tg.extend)({MeshTransmissionMaterial:tS});let U=f.useRef(null),[T]=f.useState(()=>new tx),_=ty(c||u),k=ty(u);return(0,d.useFrame)(e=>{if(U.current.time=e.clock.elapsedTime,U.current.buffer===k.texture&&!t){var a;(w=null==(a=U.current.__r3f.parent)?void 0:a.object)&&(S=e.gl.toneMapping,b=e.scene.background,x=U.current.envMapIntensity,e.gl.toneMapping=tm.NoToneMapping,p&&(e.scene.background=p),w.material=T,r&&(e.gl.setRenderTarget(_),e.gl.render(e.scene,e.camera),w.material=U.current,w.material.buffer=_.texture,w.material.thickness=o,w.material.side=tm.BackSide,w.material.envMapIntensity=s),e.gl.setRenderTarget(k),e.gl.render(e.scene,e.camera),w.material=U.current,w.material.thickness=i,w.material.side=n,w.material.buffer=k.texture,w.material.envMapIntensity=x,e.scene.background=b,e.gl.setRenderTarget(null),e.gl.toneMapping=S)}}),f.useImperativeHandle(y,()=>U.current,[]),f.createElement("meshTransmissionMaterial",(0,h.default)({args:[l,t],ref:U},g,{buffer:e||k.texture,_transmission:a,anisotropicBlur:null!=m?m:v,transmission:t?a:0,thickness:i,side:n}))}),tU=f.forwardRef(({children:e,enabled:t=!0,speed:r=1,rotationIntensity:n=1,floatIntensity:a=1,floatingRange:i=[-.1,.1],autoInvalidate:o=!1,...s},l)=>{let u=f.useRef(null);f.useImperativeHandle(l,()=>u.current,[]);let c=f.useRef(1e4*Math.random());return(0,d.useFrame)(e=>{var s,l;if(!t||0===r)return;o&&e.invalidate();let f=c.current+e.clock.elapsedTime;u.current.rotation.x=Math.cos(f/4*r)/8*n,u.current.rotation.y=Math.sin(f/4*r)/8*n,u.current.rotation.z=Math.sin(f/4*r)/20*n;let d=Math.sin(f/4*r)/10;d=v.MathUtils.mapLinear(d,-.1,.1,null!=(s=null==i?void 0:i[0])?s:-.1,null!=(l=null==i?void 0:i[1])?l:.1),u.current.position.y=d*a,u.current.updateMatrix()}),f.createElement("group",s,f.createElement("group",{ref:u,matrixAutoUpdate:!1},e))}),tT=f.forwardRef(function({args:[e=1,t=1,r=1]=[],radius:n=.05,steps:a=1,smoothness:i=4,bevelSegments:o=4,creaseAngle:s=.4,children:l,...u},c){return f.createElement("mesh",(0,h.default)({ref:c},u),f.createElement(t_,{args:[e,t,r],radius:n,steps:a,smoothness:i,bevelSegments:o,creaseAngle:s}),l)}),t_=f.forwardRef(function({args:[e=1,t=1,r=1]=[],radius:n=.05,steps:a=1,smoothness:i=4,bevelSegments:o=4,creaseAngle:s=.4,...l},u){let c=f.useMemo(()=>{let r,a;return r=new v.Shape,a=n-1e-5,r.absarc(1e-5,1e-5,1e-5,-Math.PI/2,-Math.PI,!0),r.absarc(1e-5,t-2*a,1e-5,Math.PI,Math.PI/2,!0),r.absarc(e-2*a,t-2*a,1e-5,Math.PI/2,0,!0),r.absarc(e-2*a,1e-5,1e-5,0,-Math.PI/2,!0),r},[e,t,n]),d=f.useMemo(()=>({depth:r-2*n,bevelEnabled:!0,bevelSegments:2*o,steps:a,bevelSize:n-1e-5,bevelThickness:n,curveSegments:i}),[r,n,i,o,a]),p=f.useRef(null);return f.useLayoutEffect(()=>{p.current&&(p.current.center(),function(e,t=Math.PI/3){let r=Math.cos(t),n=(1+1e-10)*100,a=[new v.Vector3,new v.Vector3,new v.Vector3],i=new v.Vector3,o=new v.Vector3,s=new v.Vector3,l=new v.Vector3;function u(e){let t=~~(e.x*n),r=~~(e.y*n),a=~~(e.z*n);return`${t},${r},${a}`}let f=e.index?e.toNonIndexed():e,c=f.attributes.position,d={};for(let e=0,t=c.count/3;e<t;e++){let t=3*e,r=a[0].fromBufferAttribute(c,t+0),n=a[1].fromBufferAttribute(c,t+1),s=a[2].fromBufferAttribute(c,t+2);i.subVectors(s,n),o.subVectors(r,n);let l=new v.Vector3().crossVectors(i,o).normalize();for(let e=0;e<3;e++){let t=u(a[e]);t in d||(d[t]=[]),d[t].push(l)}}let h=new Float32Array(3*c.count),p=new v.BufferAttribute(h,3,!1);for(let e=0,t=c.count/3;e<t;e++){let t=3*e,n=a[0].fromBufferAttribute(c,t+0),f=a[1].fromBufferAttribute(c,t+1),h=a[2].fromBufferAttribute(c,t+2);i.subVectors(h,f),o.subVectors(n,f),s.crossVectors(i,o).normalize();for(let e=0;e<3;e++){let n=d[u(a[e])];l.set(0,0,0);for(let e=0,t=n.length;e<t;e++){let t=n[e];s.dot(t)>r&&l.add(t)}l.normalize(),p.setXYZ(t+e,l.x,l.y,l.z)}}f.setAttribute("normal",p)}(p.current,s))},[c,d,s]),f.useImperativeHandle(u,()=>p.current),f.createElement("extrudeGeometry",(0,h.default)({ref:p,args:[c,d]},l))}),tk={uniforms:{tDiffuse:{value:null},h:{value:1/512}},vertexShader:`
      varying vec2 vUv;

      void main() {

        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

      }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float h;

    varying vec2 vUv;

    void main() {

    	vec4 sum = vec4( 0.0 );

    	sum += texture2D( tDiffuse, vec2( vUv.x - 4.0 * h, vUv.y ) ) * 0.051;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 3.0 * h, vUv.y ) ) * 0.0918;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 2.0 * h, vUv.y ) ) * 0.12245;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 1.0 * h, vUv.y ) ) * 0.1531;
    	sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 1.0 * h, vUv.y ) ) * 0.1531;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 2.0 * h, vUv.y ) ) * 0.12245;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 3.0 * h, vUv.y ) ) * 0.0918;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 4.0 * h, vUv.y ) ) * 0.051;

    	gl_FragColor = sum;

    }
  `},tM={uniforms:{tDiffuse:{value:null},v:{value:1/512}},vertexShader:`
    varying vec2 vUv;

    void main() {

      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

    }
  `,fragmentShader:`

  uniform sampler2D tDiffuse;
  uniform float v;

  varying vec2 vUv;

  void main() {

    vec4 sum = vec4( 0.0 );

    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 4.0 * v ) ) * 0.051;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 3.0 * v ) ) * 0.0918;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 2.0 * v ) ) * 0.12245;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 1.0 * v ) ) * 0.1531;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 1.0 * v ) ) * 0.1531;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 2.0 * v ) ) * 0.12245;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 3.0 * v ) ) * 0.0918;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 4.0 * v ) ) * 0.051;

    gl_FragColor = sum;

  }
  `},tE=f.forwardRef(({scale:e=10,frames:t=1/0,opacity:r=1,width:n=1,height:a=1,blur:i=1,near:o=0,far:s=10,resolution:l=512,smooth:u=!0,color:c="#000000",depthWrite:m=!1,renderOrder:g,...y},b)=>{let x,S,w=f.useRef(null),U=(0,p.useThree)(e=>e.scene),T=(0,p.useThree)(e=>e.gl),_=f.useRef(null);n*=Array.isArray(e)?e[0]:e||1,a*=Array.isArray(e)?e[1]:e||1;let[k,M,E,C,A,D,F]=f.useMemo(()=>{let e=new v.WebGLRenderTarget(l,l),t=new v.WebGLRenderTarget(l,l);t.texture.generateMipmaps=e.texture.generateMipmaps=!1;let r=new v.PlaneGeometry(n,a).rotateX(Math.PI/2),i=new v.Mesh(r),o=new v.MeshDepthMaterial;o.depthTest=o.depthWrite=!1,o.onBeforeCompile=e=>{e.uniforms={...e.uniforms,ucolor:{value:new v.Color(c)}},e.fragmentShader=e.fragmentShader.replace("void main() {",`uniform vec3 ucolor;
           void main() {
          `),e.fragmentShader=e.fragmentShader.replace("vec4( vec3( 1.0 - fragCoordZ ), opacity );","vec4( ucolor * fragCoordZ * 2.0, ( 1.0 - fragCoordZ ) * 1.0 );")};let s=new v.ShaderMaterial(tk),u=new v.ShaderMaterial(tM);return u.depthTest=s.depthTest=!1,[e,r,o,i,s,u,t]},[l,n,a,e,c]),O=e=>{C.visible=!0,C.material=A,A.uniforms.tDiffuse.value=k.texture,A.uniforms.h.value=e/256,T.setRenderTarget(F),T.render(C,_.current),C.material=D,D.uniforms.tDiffuse.value=F.texture,D.uniforms.v.value=e/256,T.setRenderTarget(k),T.render(C,_.current),C.visible=!1},P=0;return(0,d.useFrame)(()=>{_.current&&(t===1/0||P<t)&&(P++,x=U.background,S=U.overrideMaterial,w.current.visible=!1,U.background=null,U.overrideMaterial=E,T.setRenderTarget(k),T.render(U,_.current),O(i),u&&O(.4*i),T.setRenderTarget(null),w.current.visible=!0,U.overrideMaterial=S,U.background=x)}),f.useImperativeHandle(b,()=>w.current,[]),f.createElement("group",(0,h.default)({"rotation-x":Math.PI/2},y,{ref:w}),f.createElement("mesh",{renderOrder:g,geometry:M,scale:[1,-1,1],rotation:[-Math.PI/2,0,0]},f.createElement("meshBasicMaterial",{transparent:!0,map:k.texture,opacity:r,depthWrite:m})),f.createElement("orthographicCamera",{ref:_,args:[-n/2,n/2,a/2,-a/2,o,s]}))}),tC={uniforms:{uTime:{value:0},uColor:{value:new v.Color("#00ffcc")},uFogNear:{value:6},uFogFar:{value:18}},vertexShader:`
    varying float vDepth;
    varying vec2 vUv;

    void main() {
      vUv = uv;
      vec4 mvPosition = modelViewMatrix * instanceMatrix * vec4(position, 1.0);
      vDepth = -mvPosition.z;
      gl_Position = projectionMatrix * mvPosition;
    }
  `,fragmentShader:`
    uniform vec3 uColor;
    uniform float uFogNear;
    uniform float uFogFar;
    varying float vDepth;
    varying vec2 vUv;

    void main() {

      float radial = 1.0 - length(vUv - 0.5) * 2.0;
      radial = smoothstep(0.0, 1.0, radial);

      float fogFactor = smoothstep(uFogNear, uFogFar, vDepth);

      vec3 base = uColor;
      float alpha = radial * 0.12;

      vec4 col = vec4(base, alpha);
      col.rgb = mix(col.rgb, vec3(0.02), fogFactor);

      gl_FragColor = col;
    }
  `},tA=({count:e=250})=>{let t=(0,f.useRef)(null),r=(0,f.useRef)(null),n=(0,f.useMemo)(()=>new v.Object3D,[]),a=(0,f.useMemo)(()=>Array.from({length:e},()=>({position:new v.Vector3(20*Math.random()-10,8*Math.random()-4,-20*Math.random()),scale:4*Math.random()+2,rotation:Math.random()*Math.PI})),[e]);return(0,d.useFrame)(e=>{r.current.uniforms.uTime.value=e.clock.elapsedTime,a.forEach((e,r)=>{e.position.z+=.01,e.position.z>5&&(e.position.z=-20),n.position.copy(e.position),n.rotation.z=e.rotation,n.scale.set(e.scale,e.scale,1),n.updateMatrix(),t.current.setMatrixAt(r,n.matrix)}),t.current.instanceMatrix.needsUpdate=!0}),(0,u.jsxs)("instancedMesh",{ref:t,args:[void 0,void 0,e],children:[(0,u.jsx)("planeGeometry",{args:[1,1]}),(0,u.jsx)("shaderMaterial",{ref:r,uniforms:tC.uniforms,vertexShader:tC.vertexShader,fragmentShader:tC.fragmentShader,transparent:!0,depthWrite:!1})]})},tD=({count:e=90})=>{let t=(0,f.useRef)(null),r=(0,f.useMemo)(()=>new v.Object3D,[]),n=(0,f.useMemo)(()=>Array.from({length:e},()=>({pos:new v.Vector3(12*Math.random()-6,12*Math.random()-6,12*Math.random()-6),speed:.01*Math.random()+.005,offset:100*Math.random()})),[e]);return(0,d.useFrame)(e=>{n.forEach((n,a)=>{n.pos.y+=n.speed,n.pos.y>6&&(n.pos.y=-6);let i=1+.5*Math.sin(e.clock.elapsedTime+n.offset);r.position.copy(n.pos),r.scale.setScalar(.012*i),r.updateMatrix(),t.current.setMatrixAt(a,r.matrix)}),t.current.instanceMatrix.needsUpdate=!0}),(0,u.jsxs)("instancedMesh",{ref:t,args:[void 0,void 0,e],children:[(0,u.jsx)("sphereGeometry",{args:[1,8,8]}),(0,u.jsx)("meshBasicMaterial",{color:"#00ffcc",transparent:!0,opacity:.2})]})},tF=()=>{let[e,t]=(0,f.useState)(()=>Array.from({length:40},(e,t)=>new v.Vector3(.25*t-5,0,0)));return(0,d.useFrame)(e=>{let r=e.clock.getElapsedTime();t(e=>e.map((e,t)=>(e.y=1.5*Math.sin(.4*t+r),e.z=+Math.cos(.3*t+r),e)))}),(0,u.jsx)("group",{position:[0,0,-1],children:(0,u.jsx)(J,{points:e,color:"#00ffcc",lineWidth:2.5,transparent:!0,opacity:.15})})},tO=()=>{let e=(0,f.useRef)(null),t=(0,f.useRef)(null),r=(0,f.useRef)(null);return(0,d.useFrame)(n=>{let{x:a,y:i}=n.mouse,o=n.clock.getElapsedTime();e.current.rotation.y=v.MathUtils.lerp(e.current.rotation.y,.25*a,.1),e.current.rotation.x=v.MathUtils.lerp(e.current.rotation.x,-(.15*i),.1),r.current&&(r.current.position.y=.8*Math.sin(1.5*o),r.current.material.opacity=.3+.4*Math.abs(a)),t.current&&o%2<.02&&(t.current.text=Math.random()>.5?"> SYNCING...":"> SECURE_NODE")}),(0,u.jsx)("group",{ref:e,children:(0,u.jsxs)(tU,{speed:1.5,rotationIntensity:.3,floatIntensity:.4,children:[(0,u.jsxs)(tT,{args:[3.8,2.2,.5],radius:.2,smoothness:4,position:[0,0,2.5],children:[(0,u.jsx)(tw,{backside:!0,samples:12,thickness:1.4,chromaticAberration:.15,anisotropy:.5,distortion:.3,distortionScale:.2,transmission:.9,color:"#e0fcf9",attenuationDistance:.5,attenuationColor:"#ffffff",roughness:.03,ior:1.45}),(0,u.jsx)(tv,{ref:t,position:[-1.6,.6,.26],fontSize:.14,color:"#00ffcc",anchorX:"left",children:"> INITIALIZING"}),(0,u.jsx)(tv,{position:[-1.6,.1,.26],fontSize:.07,color:"#111",opacity:.7,transparent:!0,anchorX:"left",lineHeight:1.5,children:"LOAD: 14.2% \nNODE: SOUTH_EAST_VR \nSTATUS: ENCRYPTED"}),(0,u.jsxs)("mesh",{ref:r,position:[0,0,.27],children:[(0,u.jsx)("planeGeometry",{args:[3.4,.02]}),(0,u.jsx)("meshBasicMaterial",{color:"#00ffcc",transparent:!0,opacity:.5})]}),(0,u.jsx)("pointLight",{position:[0,0,.1],intensity:.5,color:"#00ffcc",distance:2})]}),(0,u.jsxs)("mesh",{position:[0,0,2.3],children:[(0,u.jsx)("planeGeometry",{args:[4.5,2.8]}),(0,u.jsx)("meshBasicMaterial",{color:"#00ffcc",transparent:!0,opacity:.05})]})]})})};e.s(["LabScene",0,()=>(0,u.jsx)("div",{className:"relative h-[650px] w-full overflow-hidden rounded-[3rem] border border-white/10 bg-[#020202]",children:(0,u.jsxs)(c.Canvas,{shadows:!0,camera:{position:[0,0,10],fov:35},dpr:1,children:[(0,u.jsx)("color",{attach:"background",args:["#020202"]}),(0,u.jsx)("fog",{attach:"fog",args:["#020202",6,18]}),(0,u.jsx)("ambientLight",{intensity:.5}),(0,u.jsx)("spotLight",{position:[12,10,10],angle:.4,penumbra:1,intensity:8,color:"#00ffcc"}),(0,u.jsx)("pointLight",{position:[-8,-5,5],intensity:4,color:"#9d00ff"}),(0,u.jsx)(tA,{count:250}),(0,u.jsx)(tO,{}),(0,u.jsx)(tF,{}),(0,u.jsx)(tD,{count:90}),(0,u.jsxs)("group",{position:[0,-2.8,0],children:[(0,u.jsx)("gridHelper",{args:[30,30,"#00ffcc","#030303"]}),(0,u.jsx)(tE,{opacity:.4,scale:20,blur:3,far:4.5})]}),(0,u.jsx)(_,{enableZoom:!1,enablePan:!1,maxPolarAngle:Math.PI/1.7})]})})],25390)},40594,e=>{e.n(e.i(25390))}]);