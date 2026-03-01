(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/frontend/node_modules/@react-three/drei/web/Html.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Html",
    ()=>Html
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/client.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/fiber/dist/index-4f1a8e2f.esm.js [app-client] (ecmascript) <export w as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__x__as__useFrame$3e$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/fiber/dist/index-4f1a8e2f.esm.js [app-client] (ecmascript) <export x as useFrame>");
;
;
;
;
;
const v1 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
const v2 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
const v3 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
function defaultCalculatePosition(el, camera, size) {
    const objectPos = v1.setFromMatrixPosition(el.matrixWorld);
    objectPos.project(camera);
    const widthHalf = size.width / 2;
    const heightHalf = size.height / 2;
    return [
        objectPos.x * widthHalf + widthHalf,
        -(objectPos.y * heightHalf) + heightHalf
    ];
}
function isObjectBehindCamera(el, camera) {
    const objectPos = v1.setFromMatrixPosition(el.matrixWorld);
    const cameraPos = v2.setFromMatrixPosition(camera.matrixWorld);
    const deltaCamObj = objectPos.sub(cameraPos);
    const camDir = camera.getWorldDirection(v3);
    return deltaCamObj.angleTo(camDir) > Math.PI / 2;
}
function isObjectVisible(el, camera, raycaster, occlude) {
    const elPos = v1.setFromMatrixPosition(el.matrixWorld);
    const screenPos = elPos.clone();
    screenPos.project(camera);
    raycaster.setFromCamera(screenPos, camera);
    const intersects = raycaster.intersectObjects(occlude, true);
    if (intersects.length) {
        const intersectionDistance = intersects[0].distance;
        const pointDistance = elPos.distanceTo(raycaster.ray.origin);
        return pointDistance < intersectionDistance;
    }
    return true;
}
function objectScale(el, camera) {
    if (camera instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrthographicCamera"]) {
        return camera.zoom;
    } else if (camera instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PerspectiveCamera"]) {
        const objectPos = v1.setFromMatrixPosition(el.matrixWorld);
        const cameraPos = v2.setFromMatrixPosition(camera.matrixWorld);
        const vFOV = camera.fov * Math.PI / 180;
        const dist = objectPos.distanceTo(cameraPos);
        const scaleFOV = 2 * Math.tan(vFOV / 2) * dist;
        return 1 / scaleFOV;
    } else {
        return 1;
    }
}
function objectZIndex(el, camera, zIndexRange) {
    if (camera instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PerspectiveCamera"] || camera instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrthographicCamera"]) {
        const objectPos = v1.setFromMatrixPosition(el.matrixWorld);
        const cameraPos = v2.setFromMatrixPosition(camera.matrixWorld);
        const dist = objectPos.distanceTo(cameraPos);
        const A = (zIndexRange[1] - zIndexRange[0]) / (camera.far - camera.near);
        const B = zIndexRange[1] - A * camera.far;
        return Math.round(A * dist + B);
    }
    return undefined;
}
const epsilon = (value)=>Math.abs(value) < 1e-10 ? 0 : value;
function getCSSMatrix(matrix, multipliers, prepend = '') {
    let matrix3d = 'matrix3d(';
    for(let i = 0; i !== 16; i++){
        matrix3d += epsilon(multipliers[i] * matrix.elements[i]) + (i !== 15 ? ',' : ')');
    }
    return prepend + matrix3d;
}
const getCameraCSSMatrix = ((multipliers)=>{
    return (matrix)=>getCSSMatrix(matrix, multipliers);
})([
    1,
    -1,
    1,
    1,
    1,
    -1,
    1,
    1,
    1,
    -1,
    1,
    1,
    1,
    -1,
    1,
    1
]);
const getObjectCSSMatrix = ((scaleMultipliers)=>{
    return (matrix, factor)=>getCSSMatrix(matrix, scaleMultipliers(factor), 'translate(-50%,-50%)');
})((f)=>[
        1 / f,
        1 / f,
        1 / f,
        1,
        -1 / f,
        -1 / f,
        -1 / f,
        -1,
        1 / f,
        1 / f,
        1 / f,
        1,
        1,
        1,
        1,
        1
    ]);
const Html = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ children, eps = 0.001, style, className, prepend, center, fullscreen, portal, distanceFactor, sprite = false, transform = false, occlude, onOcclude, zIndexRange = [
    16777271,
    0
], calculatePosition = defaultCalculatePosition, as = 'div', wrapperClass, pointerEvents = 'auto', ...props }, ref)=>{
    var _portal$current;
    const gl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__["useThree"])({
        "Html.useThree[gl]": ({ gl })=>gl
    }["Html.useThree[gl]"]);
    const camera = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__["useThree"])({
        "Html.useThree[camera]": ({ camera })=>camera
    }["Html.useThree[camera]"]);
    const scene = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__["useThree"])({
        "Html.useThree[scene]": ({ scene })=>scene
    }["Html.useThree[scene]"]);
    const size = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__["useThree"])({
        "Html.useThree[size]": ({ size })=>size
    }["Html.useThree[size]"]);
    const raycaster = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__["useThree"])({
        "Html.useThree[raycaster]": ({ raycaster })=>raycaster
    }["Html.useThree[raycaster]"]);
    const [el] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "Html.useState": ()=>document.createElement(as)
    }["Html.useState"]);
    const root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Html.useMemo[root]": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRoot"](el)
    }["Html.useMemo[root]"], [
        el
    ]);
    const group = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const oldZoom = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](0);
    const oldPosition = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"]([
        0,
        0
    ]);
    const transformOuterRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const transformInnerRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const target = (_portal$current = portal == null ? void 0 : portal.current) !== null && _portal$current !== void 0 ? _portal$current : gl.domElement.parentNode;
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "Html.useEffect": ()=>{
            if (group.current) {
                scene.updateMatrixWorld();
                if (transform) {
                    el.style.cssText = `position:absolute;top:0;left:0;pointer-events:none;overflow:hidden;`;
                } else {
                    const vec = calculatePosition(group.current, camera, size);
                    el.style.cssText = `position:absolute;top:0;left:0;transform:translate3d(${vec[0]}px,${vec[1]}px,0);transform-origin:0 0;`;
                }
                if (target) {
                    if (prepend) target.prepend(el);
                    else target.appendChild(el);
                }
                return ({
                    "Html.useEffect": ()=>{
                        if (target) target.removeChild(el);
                        root.unmount();
                    }
                })["Html.useEffect"];
            }
        }
    }["Html.useEffect"], [
        target,
        transform
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"]({
        "Html.useLayoutEffect": ()=>{
            if (wrapperClass) el.className = wrapperClass;
        }
    }["Html.useLayoutEffect"], [
        wrapperClass
    ]);
    const styles = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Html.useMemo[styles]": ()=>{
            if (transform) {
                return {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: size.width,
                    height: size.height,
                    transformStyle: 'preserve-3d',
                    pointerEvents: 'none'
                };
            } else {
                return {
                    position: 'absolute',
                    transform: center ? 'translate3d(-50%,-50%,0)' : 'none',
                    ...fullscreen && {
                        top: -size.height / 2,
                        left: -size.width / 2,
                        width: size.width,
                        height: size.height
                    },
                    ...style
                };
            }
        }
    }["Html.useMemo[styles]"], [
        style,
        center,
        fullscreen,
        size,
        transform
    ]);
    const transformInnerStyles = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Html.useMemo[transformInnerStyles]": ()=>({
                position: 'absolute',
                pointerEvents
            })
    }["Html.useMemo[transformInnerStyles]"], [
        pointerEvents
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"]({
        "Html.useLayoutEffect": ()=>{
            if (transform) {
                root.render(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
                    ref: transformOuterRef,
                    style: styles
                }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
                    ref: transformInnerRef,
                    style: transformInnerStyles
                }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
                    ref: ref,
                    className: className,
                    style: style,
                    children: children
                }))));
            } else {
                root.render(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
                    ref: ref,
                    style: styles,
                    className: className,
                    children: children
                }));
            }
        }
    }["Html.useLayoutEffect"]);
    const visible = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__x__as__useFrame$3e$__["useFrame"])({
        "Html.useFrame": ()=>{
            if (group.current) {
                camera.updateMatrixWorld();
                group.current.updateWorldMatrix(true, false);
                const vec = transform ? oldPosition.current : calculatePosition(group.current, camera, size);
                if (transform || Math.abs(oldZoom.current - camera.zoom) > eps || Math.abs(oldPosition.current[0] - vec[0]) > eps || Math.abs(oldPosition.current[1] - vec[1]) > eps) {
                    const isBehindCamera = isObjectBehindCamera(group.current, camera);
                    let raytraceTarget = false;
                    if (typeof occlude === 'boolean') {
                        if (occlude === true) {
                            raytraceTarget = [
                                scene
                            ];
                        }
                    } else if (Array.isArray(occlude)) {
                        raytraceTarget = occlude.map({
                            "Html.useFrame": (item)=>item.current
                        }["Html.useFrame"]);
                    }
                    const previouslyVisible = visible.current;
                    if (raytraceTarget) {
                        const isvisible = isObjectVisible(group.current, camera, raycaster, raytraceTarget);
                        visible.current = isvisible && !isBehindCamera;
                    } else {
                        visible.current = !isBehindCamera;
                    }
                    if (previouslyVisible !== visible.current) {
                        if (onOcclude) onOcclude(!visible.current);
                        else el.style.display = visible.current ? 'block' : 'none';
                    }
                    el.style.zIndex = `${objectZIndex(group.current, camera, zIndexRange)}`;
                    if (transform) {
                        const [widthHalf, heightHalf] = [
                            size.width / 2,
                            size.height / 2
                        ];
                        const fov = camera.projectionMatrix.elements[5] * heightHalf;
                        const { isOrthographicCamera, top, left, bottom, right } = camera;
                        const cameraMatrix = getCameraCSSMatrix(camera.matrixWorldInverse);
                        const cameraTransform = isOrthographicCamera ? `scale(${fov})translate(${epsilon(-(right + left) / 2)}px,${epsilon((top + bottom) / 2)}px)` : `translateZ(${fov}px)`;
                        let matrix = group.current.matrixWorld;
                        if (sprite) {
                            matrix = camera.matrixWorldInverse.clone().transpose().copyPosition(matrix).scale(group.current.scale);
                            matrix.elements[3] = matrix.elements[7] = matrix.elements[11] = 0;
                            matrix.elements[15] = 1;
                        }
                        el.style.width = size.width + 'px';
                        el.style.height = size.height + 'px';
                        el.style.perspective = isOrthographicCamera ? '' : `${fov}px`;
                        if (transformOuterRef.current && transformInnerRef.current) {
                            transformOuterRef.current.style.transform = `${cameraTransform}${cameraMatrix}translate(${widthHalf}px,${heightHalf}px)`;
                            transformInnerRef.current.style.transform = getObjectCSSMatrix(matrix, 1 / ((distanceFactor || 10) / 400));
                        }
                    } else {
                        const scale = distanceFactor === undefined ? 1 : objectScale(group.current, camera) * distanceFactor;
                        el.style.transform = `translate3d(${vec[0]}px,${vec[1]}px,0) scale(${scale})`;
                    }
                    oldPosition.current = vec;
                    oldZoom.current = camera.zoom;
                }
            }
        }
    }["Html.useFrame"]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("group", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, props, {
        ref: group
    }));
});
;
}),
"[project]/apps/frontend/node_modules/@react-three/drei/web/CycleRaycast.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CycleRaycast",
    ()=>CycleRaycast
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/fiber/dist/index-4f1a8e2f.esm.js [app-client] (ecmascript) <export w as useThree>");
;
;
function CycleRaycast({ onChanged, portal, preventDefault = true, scroll = true, keyCode = 9 }) {
    const cycle = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](0);
    const setEvents = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__["useThree"])({
        "CycleRaycast.useThree[setEvents]": (state)=>state.setEvents
    }["CycleRaycast.useThree[setEvents]"]);
    const get = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__["useThree"])({
        "CycleRaycast.useThree[get]": (state)=>state.get
    }["CycleRaycast.useThree[get]"]);
    const gl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__["useThree"])({
        "CycleRaycast.useThree[gl]": (state)=>state.gl
    }["CycleRaycast.useThree[gl]"]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "CycleRaycast.useEffect": ()=>{
            var _portal$current;
            let hits = [];
            let lastEvent = undefined;
            const prev = get().events.filter;
            const target = (_portal$current = portal == null ? void 0 : portal.current) !== null && _portal$current !== void 0 ? _portal$current : gl.domElement.parentNode; // Render custom status
            const renderStatus = {
                "CycleRaycast.useEffect.renderStatus": ()=>target && onChanged && onChanged(hits, Math.round(cycle.current) % hits.length)
            }["CycleRaycast.useEffect.renderStatus"]; // Overwrite the raycasters custom filter (this only exists in r3f)
            setEvents({
                filter: {
                    "CycleRaycast.useEffect": (intersections, state)=>{
                        // Reset cycle when the intersections change
                        let clone = [
                            ...intersections
                        ];
                        if (clone.length !== hits.length || !hits.every({
                            "CycleRaycast.useEffect": (hit)=>clone.map({
                                    "CycleRaycast.useEffect": (e)=>e.object.uuid
                                }["CycleRaycast.useEffect"]).includes(hit.object.uuid)
                        }["CycleRaycast.useEffect"])) {
                            cycle.current = 0;
                            hits = clone;
                            renderStatus();
                        } // Run custom filter if there is one
                        if (prev) clone = prev(clone, state); // Cycle through the actual raycast intersects
                        for(let i = 0; i < Math.round(cycle.current) % clone.length; i++){
                            const first = clone.shift();
                            clone = [
                                ...clone,
                                first
                            ];
                        }
                        return clone;
                    }
                }["CycleRaycast.useEffect"]
            }); // Cycle, refresh events and render status
            const refresh = {
                "CycleRaycast.useEffect.refresh": (fn)=>{
                    var _get$events$handlers, _get$events$handlers2;
                    cycle.current = fn(cycle.current); // Cancel hovered elements and fake a pointer-move
                    (_get$events$handlers = get().events.handlers) == null ? void 0 : _get$events$handlers.onPointerCancel(undefined);
                    (_get$events$handlers2 = get().events.handlers) == null ? void 0 : _get$events$handlers2.onPointerMove(lastEvent);
                    renderStatus();
                }
            }["CycleRaycast.useEffect.refresh"]; // Key events
            const tabEvent = {
                "CycleRaycast.useEffect.tabEvent": (event)=>{
                    if (event.keyCode || event.which === keyCode) {
                        if (preventDefault) event.preventDefault();
                        if (hits.length > 1) refresh({
                            "CycleRaycast.useEffect.tabEvent": (current)=>current + 1
                        }["CycleRaycast.useEffect.tabEvent"]);
                    }
                }
            }["CycleRaycast.useEffect.tabEvent"]; // Wheel events
            const wheelEvent = {
                "CycleRaycast.useEffect.wheelEvent": (event)=>{
                    if (preventDefault) event.preventDefault();
                    let delta = 0;
                    if (!event) event = window.event;
                    if (event.wheelDelta) delta = event.wheelDelta / 120;
                    else if (event.detail) delta = -event.detail / 3;
                    if (hits.length > 1) refresh({
                        "CycleRaycast.useEffect.wheelEvent": (current)=>Math.abs(current - delta)
                    }["CycleRaycast.useEffect.wheelEvent"]);
                }
            }["CycleRaycast.useEffect.wheelEvent"]; // Catch last move event and position custom status
            const moveEvent = {
                "CycleRaycast.useEffect.moveEvent": (event)=>lastEvent = event
            }["CycleRaycast.useEffect.moveEvent"];
            document.addEventListener('pointermove', moveEvent, {
                passive: true
            });
            if (scroll) document.addEventListener('wheel', wheelEvent);
            if (keyCode !== undefined) document.addEventListener('keydown', tabEvent);
            return ({
                "CycleRaycast.useEffect": ()=>{
                    // Clean up
                    setEvents({
                        filter: prev
                    });
                    if (keyCode !== undefined) document.removeEventListener('keydown', tabEvent);
                    if (scroll) document.removeEventListener('wheel', wheelEvent);
                    document.removeEventListener('pointermove', moveEvent);
                }
            })["CycleRaycast.useEffect"];
        }
    }["CycleRaycast.useEffect"], [
        gl,
        get,
        setEvents,
        preventDefault,
        scroll,
        keyCode
    ]);
    return null;
}
;
}),
"[project]/apps/frontend/node_modules/@react-three/drei/web/Loader.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Loader",
    ()=>Loader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../core/useProgress.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
const defaultDataInterpolation = (p)=>`Loading ${p.toFixed(2)}%`;
function Loader({ containerStyles, innerStyles, barStyles, dataStyles, dataInterpolation = defaultDataInterpolation, initialState = (active)=>active }) {
    const { active, progress } = useProgress();
    const progressRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](0);
    const rafRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](0);
    const progressSpanRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const [shown, setShown] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](initialState(active));
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "Loader.useEffect": ()=>{
            let t;
            if (active !== shown) t = setTimeout({
                "Loader.useEffect": ()=>setShown(active)
            }["Loader.useEffect"], 300);
            return ({
                "Loader.useEffect": ()=>clearTimeout(t)
            })["Loader.useEffect"];
        }
    }["Loader.useEffect"], [
        shown,
        active
    ]);
    const updateProgress = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "Loader.useCallback[updateProgress]": ()=>{
            if (!progressSpanRef.current) return;
            progressRef.current += (progress - progressRef.current) / 2;
            if (progressRef.current > 0.95 * progress || progress === 100) progressRef.current = progress;
            progressSpanRef.current.innerText = dataInterpolation(progressRef.current);
            if (progressRef.current < progress) rafRef.current = requestAnimationFrame(updateProgress);
        }
    }["Loader.useCallback[updateProgress]"], [
        dataInterpolation,
        progress
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "Loader.useEffect": ()=>{
            updateProgress();
            return ({
                "Loader.useEffect": ()=>cancelAnimationFrame(rafRef.current)
            })["Loader.useEffect"];
        }
    }["Loader.useEffect"], [
        updateProgress
    ]);
    return shown ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        style: {
            ...styles.container,
            opacity: active ? 1 : 0,
            ...containerStyles
        }
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        style: {
            ...styles.inner,
            ...innerStyles
        }
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        style: {
            ...styles.bar,
            transform: `scaleX(${progress / 100})`,
            ...barStyles
        }
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("span", {
        ref: progressSpanRef,
        style: {
            ...styles.data,
            ...dataStyles
        }
    })))) : null;
}
const styles = {
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: '#171717',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'opacity 300ms ease',
        zIndex: 1000
    },
    inner: {
        width: 100,
        height: 3,
        background: '#272727',
        textAlign: 'center'
    },
    bar: {
        height: 3,
        width: '100%',
        background: 'white',
        transition: 'transform 200ms',
        transformOrigin: 'left center'
    },
    data: {
        display: 'inline-block',
        position: 'relative',
        fontVariantNumeric: 'tabular-nums',
        marginTop: '0.8em',
        color: '#f0f0f0',
        fontSize: '0.6em',
        fontFamily: `-apple-system, BlinkMacSystemFont, "Inter", "Segoe UI", "Helvetica Neue", Helvetica, Arial, Roboto, Ubuntu, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
        whiteSpace: 'nowrap'
    }
};
;
}),
"[project]/apps/frontend/node_modules/@react-three/drei/web/PresentationControls.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PresentationControls",
    ()=>PresentationControls
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/fiber/dist/index-4f1a8e2f.esm.js [app-client] (ecmascript) <export w as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$dist$2f$react$2d$spring_three$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-spring/three/dist/react-spring_three.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$core$2f$dist$2f$react$2d$spring_core$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-spring/core/dist/react-spring_core.modern.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$use$2d$gesture$2f$react$2f$dist$2f$use$2d$gesture$2d$react$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@use-gesture/react/dist/use-gesture-react.esm.js [app-client] (ecmascript) <locals>");
;
;
;
;
;
;
function PresentationControls({ snap, global, cursor = true, children, speed = 1, rotation = [
    0,
    0,
    0
], zoom = 1, polar = [
    0,
    Math.PI / 2
], azimuth = [
    -Infinity,
    Infinity
], config = {
    mass: 1,
    tension: 170,
    friction: 26
} }) {
    const { size, gl } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__["useThree"])();
    const rPolar = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "PresentationControls.useMemo[rPolar]": ()=>[
                rotation[0] + polar[0],
                rotation[0] + polar[1]
            ]
    }["PresentationControls.useMemo[rPolar]"], [
        rotation[0],
        polar[0],
        polar[1]
    ]);
    const rAzimuth = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "PresentationControls.useMemo[rAzimuth]": ()=>[
                rotation[1] + azimuth[0],
                rotation[1] + azimuth[1]
            ]
    }["PresentationControls.useMemo[rAzimuth]"], [
        rotation[1],
        azimuth[0],
        azimuth[1]
    ]);
    const rInitial = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "PresentationControls.useMemo[rInitial]": ()=>[
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].clamp(rotation[0], ...rPolar),
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].clamp(rotation[1], ...rAzimuth),
                rotation[2]
            ]
    }["PresentationControls.useMemo[rInitial]"], [
        rotation[0],
        rotation[1],
        rotation[2],
        rPolar,
        rAzimuth
    ]);
    const [spring, api] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$core$2f$dist$2f$react$2d$spring_core$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])({
        "PresentationControls.useSpring": ()=>({
                scale: 1,
                rotation: rInitial,
                config
            })
    }["PresentationControls.useSpring"]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "PresentationControls.useEffect": ()=>void api.start({
                scale: 1,
                rotation: rInitial,
                config
            })
    }["PresentationControls.useEffect"], [
        rInitial
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "PresentationControls.useEffect": ()=>{
            if (global && cursor) gl.domElement.style.cursor = 'grab';
        }
    }["PresentationControls.useEffect"], [
        global,
        cursor,
        gl.domElement
    ]);
    const bind = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$use$2d$gesture$2f$react$2f$dist$2f$use$2d$gesture$2d$react$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGesture"])({
        onHover: {
            "PresentationControls.useGesture[bind]": ({ last })=>{
                if (cursor && !global) gl.domElement.style.cursor = last ? 'auto' : 'grab';
            }
        }["PresentationControls.useGesture[bind]"],
        onDrag: {
            "PresentationControls.useGesture[bind]": ({ down, delta: [x, y], memo: [oldY, oldX] = spring.rotation.animation.to || rInitial })=>{
                if (cursor) gl.domElement.style.cursor = down ? 'grabbing' : 'grab';
                x = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].clamp(oldX + x / size.width * Math.PI * speed, ...rAzimuth);
                y = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].clamp(oldY + y / size.height * Math.PI * speed, ...rPolar);
                const sConfig = snap && !down && typeof snap !== 'boolean' ? snap : config;
                api.start({
                    scale: down && y > rPolar[1] / 2 ? zoom : 1,
                    rotation: snap && !down ? rInitial : [
                        y,
                        x,
                        0
                    ],
                    config: {
                        "PresentationControls.useGesture[bind]": (n)=>n === 'scale' ? {
                                ...sConfig,
                                friction: sConfig.friction * 3
                            } : sConfig
                    }["PresentationControls.useGesture[bind]"]
                });
                return [
                    y,
                    x
                ];
            }
        }["PresentationControls.useGesture[bind]"]
    }, {
        target: global ? gl.domElement : undefined
    });
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$dist$2f$react$2d$spring_three$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["a"].group, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, bind == null ? void 0 : bind(), spring), children);
}
;
}),
"[project]/apps/frontend/node_modules/@react-three/drei/core/Billboard.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Billboard",
    ()=>Billboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__x__as__useFrame$3e$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/fiber/dist/index-4f1a8e2f.esm.js [app-client] (ecmascript) <export x as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$merge$2d$refs$2f$dist$2f$react$2d$merge$2d$refs$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-merge-refs/dist/react-merge-refs.esm.js [app-client] (ecmascript)");
;
;
;
;
/**
 * Wraps children in a billboarded group. Sample usage:
 *
 * ```js
 * <Billboard>
 *   <Text>hi</Text>
 * </Billboard>
 * ```
 */ const Billboard = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function Billboard({ follow = true, lockX = false, lockY = false, lockZ = false, ...props }, ref) {
    const localRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"]();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__x__as__useFrame$3e$__["useFrame"])({
        "Billboard.Billboard.useFrame": ({ camera })=>{
            if (!follow || !localRef.current) return; // save previous rotation in case we're locking an axis
            const prevRotation = localRef.current.rotation.clone(); // always face the camera
            localRef.current.quaternion.copy(camera.quaternion); // readjust any axis that is locked
            if (lockX) localRef.current.rotation.x = prevRotation.x;
            if (lockY) localRef.current.rotation.y = prevRotation.y;
            if (lockZ) localRef.current.rotation.z = prevRotation.z;
        }
    }["Billboard.Billboard.useFrame"]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("group", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        ref: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$merge$2d$refs$2f$dist$2f$react$2d$merge$2d$refs$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])([
            localRef,
            ref
        ])
    }, props));
});
;
}),
"[project]/apps/frontend/node_modules/@react-three/drei/core/Line.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Line",
    ()=>Line
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2d$stdlib$2f$lines$2f$Line2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three-stdlib/lines/Line2.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2d$stdlib$2f$lines$2f$LineMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three-stdlib/lines/LineMaterial.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2d$stdlib$2f$lines$2f$LineGeometry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three-stdlib/lines/LineGeometry.js [app-client] (ecmascript)");
;
;
;
;
const Line = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function Line({ points, color = 'black', vertexColors, lineWidth, dashed, ...rest }, ref) {
    const [line2] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "Line.Line.useState": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2d$stdlib$2f$lines$2f$Line2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line2"]()
    }["Line.Line.useState"]);
    const [lineMaterial] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "Line.Line.useState": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2d$stdlib$2f$lines$2f$LineMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineMaterial"]()
    }["Line.Line.useState"]);
    const [resolution] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "Line.Line.useState": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](512, 512)
    }["Line.Line.useState"]);
    const lineGeom = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Line.Line.useMemo[lineGeom]": ()=>{
            const geom = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2d$stdlib$2f$lines$2f$LineGeometry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineGeometry"]();
            const pValues = points.map({
                "Line.Line.useMemo[lineGeom].pValues": (p)=>p instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"] ? p.toArray() : p
            }["Line.Line.useMemo[lineGeom].pValues"]);
            geom.setPositions(pValues.flat());
            if (vertexColors) {
                const cValues = vertexColors.map({
                    "Line.Line.useMemo[lineGeom].cValues": (c)=>c instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"] ? c.toArray() : c
                }["Line.Line.useMemo[lineGeom].cValues"]);
                geom.setColors(cValues.flat());
            }
            return geom;
        }
    }["Line.Line.useMemo[lineGeom]"], [
        points,
        vertexColors
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"]({
        "Line.Line.useLayoutEffect": ()=>{
            line2.computeLineDistances();
        }
    }["Line.Line.useLayoutEffect"], [
        points,
        line2
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"]({
        "Line.Line.useLayoutEffect": ()=>{
            if (dashed) {
                lineMaterial.defines.USE_DASH = '';
            } else {
                // Setting lineMaterial.defines.USE_DASH to undefined is apparently not sufficient.
                delete lineMaterial.defines.USE_DASH;
            }
            lineMaterial.needsUpdate = true;
        }
    }["Line.Line.useLayoutEffect"], [
        dashed,
        lineMaterial
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "Line.Line.useEffect": ()=>{
            return ({
                "Line.Line.useEffect": ()=>lineGeom.dispose()
            })["Line.Line.useEffect"];
        }
    }["Line.Line.useEffect"], [
        lineGeom
    ]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("primitive", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        object: line2,
        ref: ref
    }, rest), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("primitive", {
        object: lineGeom,
        attach: "geometry"
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("primitive", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        object: lineMaterial,
        attach: "material",
        color: color,
        vertexColors: Boolean(vertexColors),
        resolution: resolution,
        linewidth: lineWidth,
        dashed: dashed
    }, rest)));
});
;
}),
"[project]/apps/frontend/node_modules/@react-three/drei/core/QuadraticBezierLine.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QuadraticBezierLine",
    ()=>QuadraticBezierLine
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$merge$2d$refs$2f$dist$2f$react$2d$merge$2d$refs$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-merge-refs/dist/react-merge-refs.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/drei/core/Line.js [app-client] (ecmascript)");
;
;
;
;
;
const v = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
const QuadraticBezierLine = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function QuadraticBezierLine({ start = [
    0,
    0,
    0
], end = [
    0,
    0,
    0
], mid, segments = 20, ...rest }, forwardref) {
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const [curve] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "QuadraticBezierLine.QuadraticBezierLine.useState": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QuadraticBezierCurve3"](undefined, undefined, undefined)
    }["QuadraticBezierLine.QuadraticBezierLine.useState"]);
    const getPoints = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "QuadraticBezierLine.QuadraticBezierLine.useCallback[getPoints]": (start, end, mid, segments = 20)=>{
            if (start instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]) curve.v0.copy(start);
            else curve.v0.set(...start);
            if (end instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]) curve.v2.copy(end);
            else curve.v2.set(...end);
            if (mid instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]) {
                curve.v1.copy(mid);
            } else {
                curve.v1.copy(curve.v0.clone().add(curve.v2.clone().sub(curve.v0)).add(v.set(0, curve.v0.y - curve.v2.y, 0)));
            }
            return curve.getPoints(segments);
        }
    }["QuadraticBezierLine.QuadraticBezierLine.useCallback[getPoints]"], []);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"]({
        "QuadraticBezierLine.QuadraticBezierLine.useLayoutEffect": ()=>{
            ref.current.setPoints = ({
                "QuadraticBezierLine.QuadraticBezierLine.useLayoutEffect": (start, end, mid)=>{
                    const points = getPoints(start, end, mid);
                    if (ref.current.geometry) ref.current.geometry.setPositions(points.map({
                        "QuadraticBezierLine.QuadraticBezierLine.useLayoutEffect": (p)=>p.toArray()
                    }["QuadraticBezierLine.QuadraticBezierLine.useLayoutEffect"]).flat());
                }
            })["QuadraticBezierLine.QuadraticBezierLine.useLayoutEffect"];
        }
    }["QuadraticBezierLine.QuadraticBezierLine.useLayoutEffect"], []);
    const points = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "QuadraticBezierLine.QuadraticBezierLine.useMemo[points]": ()=>getPoints(start, end, mid, segments)
    }["QuadraticBezierLine.QuadraticBezierLine.useMemo[points]"], [
        start,
        end,
        mid,
        segments
    ]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        ref: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$merge$2d$refs$2f$dist$2f$react$2d$merge$2d$refs$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])([
            ref,
            forwardref
        ]),
        points: points
    }, rest));
});
;
}),
"[project]/apps/frontend/node_modules/@react-three/drei/core/CubicBezierLine.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CubicBezierLine",
    ()=>CubicBezierLine
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/drei/core/Line.js [app-client] (ecmascript)");
;
;
;
;
const CubicBezierLine = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function CubicBezierLine({ start, end, midA, midB, segments = 20, ...rest }, ref) {
    const points = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "CubicBezierLine.CubicBezierLine.useMemo[points]": ()=>{
            const startV = start instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"] ? start : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](...start);
            const endV = end instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"] ? end : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](...end);
            const midAV = midA instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"] ? midA : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](...midA);
            const midBV = midB instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"] ? midB : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](...midB);
            const interpolatedV = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CubicBezierCurve3"](startV, midAV, midBV, endV).getPoints(segments);
            return interpolatedV;
        }
    }["CubicBezierLine.CubicBezierLine.useMemo[points]"], [
        start,
        end,
        midA,
        midB,
        segments
    ]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        ref: ref,
        points: points
    }, rest));
});
;
}),
"[project]/apps/frontend/node_modules/@react-three/drei/core/PositionalAudio.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PositionalAudio",
    ()=>PositionalAudio
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/fiber/dist/index-4f1a8e2f.esm.js [app-client] (ecmascript) <export w as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__z__as__useLoader$3e$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/fiber/dist/index-4f1a8e2f.esm.js [app-client] (ecmascript) <export z as useLoader>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$merge$2d$refs$2f$dist$2f$react$2d$merge$2d$refs$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-merge-refs/dist/react-merge-refs.esm.js [app-client] (ecmascript)");
;
;
;
;
;
const PositionalAudio = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ url, distance = 1, loop = true, autoplay, ...props }, ref)=>{
    const sound = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"]();
    const camera = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__["useThree"])({
        "PositionalAudio.useThree[camera]": ({ camera })=>camera
    }["PositionalAudio.useThree[camera]"]);
    const [listener] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "PositionalAudio.useState": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AudioListener"]()
    }["PositionalAudio.useState"]);
    const buffer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__z__as__useLoader$3e$__["useLoader"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AudioLoader"], url);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "PositionalAudio.useEffect": ()=>{
            const _sound = sound.current;
            if (_sound) {
                _sound.setBuffer(buffer);
                _sound.setRefDistance(distance);
                _sound.setLoop(loop);
                if (autoplay && !_sound.isPlaying) _sound.play();
            }
        }
    }["PositionalAudio.useEffect"], [
        buffer,
        camera,
        distance,
        loop
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "PositionalAudio.useEffect": ()=>{
            const _sound = sound.current;
            camera.add(listener);
            return ({
                "PositionalAudio.useEffect": ()=>{
                    camera.remove(listener);
                    if (_sound) {
                        if (_sound.isPlaying) _sound.stop();
                        if (_sound.source && _sound.source._connected) _sound.disconnect();
                    }
                }
            })["PositionalAudio.useEffect"];
        }
    }["PositionalAudio.useEffect"], []);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("positionalAudio", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        ref: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$merge$2d$refs$2f$dist$2f$react$2d$merge$2d$refs$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])([
            sound,
            ref
        ]),
        args: [
            listener
        ]
    }, props));
});
;
}),
"[project]/apps/frontend/node_modules/@react-three/drei/core/Effects.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Effects",
    ()=>Effects,
    "isWebGL2Available",
    ()=>isWebGL2Available
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.module.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__extend$3e$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/fiber/dist/index-4f1a8e2f.esm.js [app-client] (ecmascript) <export e as extend>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/fiber/dist/index-4f1a8e2f.esm.js [app-client] (ecmascript) <export w as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__x__as__useFrame$3e$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/fiber/dist/index-4f1a8e2f.esm.js [app-client] (ecmascript) <export x as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2d$stdlib$2f$postprocessing$2f$EffectComposer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three-stdlib/postprocessing/EffectComposer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2d$stdlib$2f$postprocessing$2f$RenderPass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three-stdlib/postprocessing/RenderPass.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2d$stdlib$2f$postprocessing$2f$ShaderPass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three-stdlib/postprocessing/ShaderPass.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2d$stdlib$2f$shaders$2f$GammaCorrectionShader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three-stdlib/shaders/GammaCorrectionShader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$merge$2d$refs$2f$dist$2f$react$2d$merge$2d$refs$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-merge-refs/dist/react-merge-refs.esm.js [app-client] (ecmascript)");
;
;
;
;
;
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__extend$3e$__["extend"])({
    EffectComposer: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2d$stdlib$2f$postprocessing$2f$EffectComposer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EffectComposer"],
    RenderPass: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2d$stdlib$2f$postprocessing$2f$RenderPass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RenderPass"],
    ShaderPass: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2d$stdlib$2f$postprocessing$2f$ShaderPass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderPass"]
});
const isWebGL2Available = ()=>{
    try {
        var canvas = document.createElement('canvas');
        return !!(window.WebGL2RenderingContext && canvas.getContext('webgl2'));
    } catch (e) {
        return false;
    }
};
const Effects = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ children, multisamping = 8, renderIndex = 1, disableGamma = false, disableRenderPass = false, ...props }, ref)=>{
    const composer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"]();
    const scene = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__["useThree"])({
        "Effects.useThree[scene]": ({ scene })=>scene
    }["Effects.useThree[scene]"]);
    const camera = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__["useThree"])({
        "Effects.useThree[camera]": ({ camera })=>camera
    }["Effects.useThree[camera]"]);
    const gl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__["useThree"])({
        "Effects.useThree[gl]": ({ gl })=>gl
    }["Effects.useThree[gl]"]);
    const size = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__["useThree"])({
        "Effects.useThree[size]": ({ size })=>size
    }["Effects.useThree[size]"]);
    const [target] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "Effects.useState": ()=>{
            if (isWebGL2Available() && multisamping > 0) {
                const t = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGLRenderTarget"](size.width, size.height, {
                    format: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RGBAFormat"],
                    encoding: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sRGBEncoding"]
                });
                t.samples = 8;
                return t;
            }
        }
    }["Effects.useState"]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "Effects.useEffect": ()=>{
            var _composer$current, _composer$current2;
            (_composer$current = composer.current) == null ? void 0 : _composer$current.setSize(size.width, size.height);
            (_composer$current2 = composer.current) == null ? void 0 : _composer$current2.setPixelRatio(gl.getPixelRatio());
        }
    }["Effects.useEffect"], [
        gl,
        size
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__x__as__useFrame$3e$__["useFrame"])({
        "Effects.useFrame": ()=>{
            var _composer$current3;
            return (_composer$current3 = composer.current) == null ? void 0 : _composer$current3.render();
        }
    }["Effects.useFrame"], renderIndex);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("effectComposer", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        ref: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$merge$2d$refs$2f$dist$2f$react$2d$merge$2d$refs$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])([
            ref,
            composer
        ]),
        args: [
            gl,
            target
        ]
    }, props), !disableRenderPass && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("renderPass", {
        attach: "passes",
        args: [
            scene,
            camera
        ]
    }), !disableGamma && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("shaderPass", {
        attach: "passes",
        args: [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2d$stdlib$2f$shaders$2f$GammaCorrectionShader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GammaCorrectionShader"]
        ]
    }), children);
});
;
}),
"[project]/apps/frontend/node_modules/@react-three/drei/core/GradientTexture.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GradientTexture",
    ()=>GradientTexture
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/fiber/dist/index-4f1a8e2f.esm.js [app-client] (ecmascript) <export w as useThree>");
;
;
;
;
function GradientTexture({ stops, colors, size = 1024, ...props }) {
    const gl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__["useThree"])({
        "GradientTexture.useThree[gl]": (state)=>state.gl
    }["GradientTexture.useThree[gl]"]);
    const texture = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "GradientTexture.useMemo[texture]": ()=>{
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            canvas.width = 16;
            canvas.height = size;
            const gradient = context.createLinearGradient(0, 0, 0, size);
            let i = stops.length;
            while(i--){
                gradient.addColorStop(stops[i], colors[i]);
            }
            context.fillStyle = gradient;
            context.fillRect(0, 0, 16, size);
            const texture = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Texture"](canvas);
            texture.needsUpdate = true;
            return texture;
        }
    }["GradientTexture.useMemo[texture]"], [
        stops
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "GradientTexture.useEffect": ()=>({
                "GradientTexture.useEffect": ()=>void texture.dispose()
            })["GradientTexture.useEffect"]
    }["GradientTexture.useEffect"], [
        texture
    ]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("primitive", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        object: texture,
        attach: "map",
        encoding: gl.outputEncoding
    }, props));
}
;
}),
"[project]/apps/frontend/node_modules/@react-three/drei/core/Image.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Image",
    ()=>Image
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__extend$3e$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/fiber/dist/index-4f1a8e2f.esm.js [app-client] (ecmascript) <export e as extend>");
(()=>{
    const e = new Error("Cannot find module './shaderMaterial.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './useTexture.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
;
;
;
const ImageMaterialImpl = shaderMaterial({
    color: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]('white'),
    scale: [
        1,
        1
    ],
    imageBounds: [
        1,
        1
    ],
    map: null,
    zoom: 1,
    grayscale: 0
}, /* glsl */ `
  varying vec2 vUv;
  void main() {
    gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.);
    vUv = uv;
  }
`, /* glsl */ `
  // mostly from https://gist.github.com/statico/df64c5d167362ecf7b34fca0b1459a44
  varying vec2 vUv;
  uniform vec2 scale;
  uniform vec2 imageBounds;
  uniform vec3 color;
  uniform sampler2D map;
  uniform float zoom;
  uniform float grayscale;
  const vec3 luma = vec3(.299, 0.587, 0.114);
  vec4 toGrayscale(vec4 color, float intensity) {
    return vec4(mix(color.rgb, vec3(dot(color.rgb, luma)), intensity), color.a);
  }
  vec2 aspect(vec2 size) {
    return size / min(size.x, size.y);
  }
  void main() {
    vec2 s = aspect(scale);
    vec2 i = aspect(imageBounds);
    float rs = s.x / s.y;
    float ri = i.x / i.y;
    vec2 new = rs < ri ? vec2(i.x * s.y / i.y, s.y) : vec2(s.x, i.y * s.x / i.x);
    vec2 offset = (rs < ri ? vec2((new.x - s.x) / 2.0, 0.0) : vec2(0.0, (new.y - s.y) / 2.0)) / new;
    vec2 uv = vUv * s / new + offset;
    vec2 zUv = (uv - vec2(0.5, 0.5)) / zoom + vec2(0.5, 0.5);
    gl_FragColor = toGrayscale(texture2D(map, zUv) * vec4(color, 1.0), grayscale);
    
    #include <tonemapping_fragment>
    #include <encodings_fragment>
  }
`);
const Image = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ children, color, segments = 1, scale = 1, zoom = 1, grayscale = 0, url, toneMapped, ...props }, ref)=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__extend$3e$__["extend"])({
        ImageMaterial: ImageMaterialImpl
    });
    const texture = useTexture(url);
    const planeBounds = Array.isArray(scale) ? [
        scale[0],
        scale[1]
    ] : [
        scale,
        scale
    ];
    const imageBounds = [
        texture.image.width,
        texture.image.height
    ];
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("mesh", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        ref: ref,
        scale: scale
    }, props), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("planeGeometry", {
        args: [
            1,
            1,
            segments,
            segments
        ]
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("imageMaterial", {
        color: color,
        map: texture,
        zoom: zoom,
        grayscale: grayscale,
        scale: planeBounds,
        imageBounds: imageBounds,
        toneMapped: toneMapped
    }), children);
});
;
}),
"[project]/apps/frontend/node_modules/@react-three/drei/core/Edges.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Edges",
    ()=>Edges
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
;
;
function Edges({ userData, children, geometry, threshold = 15, color = 'black', ...props }) {
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"]({
        "Edges.useLayoutEffect": ()=>{
            const parent = ref.current.parent;
            if (parent) {
                const geom = geometry || parent.geometry;
                if (geom !== ref.current.userData.currentGeom || threshold !== ref.current.userData.currentThreshold) {
                    ref.current.userData.currentGeom = geom;
                    ref.current.userData.currentThreshold = threshold;
                    ref.current.geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EdgesGeometry"](geom, threshold);
                }
            }
        }
    }["Edges.useLayoutEffect"]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("lineSegments", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        ref: ref,
        raycast: ()=>null
    }, props), children ? children : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("lineBasicMaterial", {
        color: color
    }));
}
;
}),
"[project]/apps/frontend/node_modules/@react-three/drei/core/Sampler.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sampler",
    ()=>Sampler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2d$stdlib$2f$math$2f$MeshSurfaceSampler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three-stdlib/math/MeshSurfaceSampler.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
;
;
;
const Sampler = ({ children, weight, transform, instances, mesh, ...props })=>{
    const group = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const instancedRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const meshToSampleRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "Sampler.useEffect": ()=>{
            var _instances$current, _mesh$current;
            instancedRef.current = (_instances$current = instances == null ? void 0 : instances.current) !== null && _instances$current !== void 0 ? _instances$current : group.current.children.find({
                "Sampler.useEffect": (c)=>c.hasOwnProperty('instanceMatrix')
            }["Sampler.useEffect"]);
            meshToSampleRef.current = (_mesh$current = mesh == null ? void 0 : mesh.current) !== null && _mesh$current !== void 0 ? _mesh$current : group.current.children.find({
                "Sampler.useEffect": (c)=>c.type === 'Mesh'
            }["Sampler.useEffect"]);
        }
    }["Sampler.useEffect"], [
        children,
        mesh == null ? void 0 : mesh.current,
        instances == null ? void 0 : instances.current
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "Sampler.useEffect": ()=>{
            if (typeof meshToSampleRef.current === 'undefined') return;
            if (typeof instancedRef.current === 'undefined') return;
            const sampler = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2d$stdlib$2f$math$2f$MeshSurfaceSampler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshSurfaceSampler"](meshToSampleRef.current);
            if (weight) {
                sampler.setWeightAttribute(weight);
            }
            sampler.build();
            const position = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
            const normal = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
            const color = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]();
            const dummy = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Object3D"]();
            meshToSampleRef.current.updateMatrixWorld(true);
            for(let i = 0; i < instancedRef.current.count; i++){
                sampler.sample(position, normal, color);
                if (typeof transform === 'function') {
                    transform({
                        dummy,
                        sampledMesh: meshToSampleRef.current,
                        position,
                        normal,
                        color
                    }, i);
                } else {
                    dummy.position.copy(position);
                }
                dummy.updateMatrix();
                instancedRef.current.setMatrixAt(i, dummy.matrix);
            }
            instancedRef.current.instanceMatrix.needsUpdate = true;
        }
    }["Sampler.useEffect"], [
        children,
        mesh == null ? void 0 : mesh.current,
        instances == null ? void 0 : instances.current
    ]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("group", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        ref: group
    }, props), children);
};
;
}),
"[project]/apps/frontend/node_modules/@react-three/drei/core/ComputedAttribute.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ComputedAttribute",
    ()=>ComputedAttribute
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
;
;
/**
 * Used exclusively as a child of a BufferGeometry.
 * Computes the BufferAttribute by calling the `compute` function
 * and attaches the attribute to the geometry.
 */ const ComputedAttribute = ({ compute, name, ...props })=>{
    const [bufferAttribute] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "ComputedAttribute.useState": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferAttribute"](new Float32Array(0), 1)
    }["ComputedAttribute.useState"]);
    const primitive = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"]({
        "ComputedAttribute.useLayoutEffect": ()=>{
            if (primitive.current) {
                var _ref;
                // @ts-expect-error brittle
                const parent = (_ref = primitive.current.parent) !== null && _ref !== void 0 ? _ref : primitive.current.__r3f.parent;
                const attr = compute(parent);
                primitive.current.copy(attr);
            }
        }
    }["ComputedAttribute.useLayoutEffect"], [
        compute
    ]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("primitive", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        ref: primitive,
        object: bufferAttribute,
        attach: `attributes-${name}`
    }, props));
};
;
}),
"[project]/apps/frontend/node_modules/@react-three/drei/core/Clone.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Clone",
    ()=>Clone
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2e$pick$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lodash.pick/index.js [app-client] (ecmascript)");
;
;
;
function createSpread(child, { keys = [
    'near',
    'far',
    'color',
    'distance',
    'decay',
    'penumbra',
    'angle',
    'intensity',
    'skeleton',
    'visible',
    'castShadow',
    'receiveShadow',
    'morphTargetDictionary',
    'morphTargetInfluences',
    'name',
    'geometry',
    'material',
    'position',
    'rotation',
    'scale',
    'up',
    'userData'
], deep, inject, castShadow, receiveShadow }) {
    let spread = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2e$pick$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(child, keys);
    if (deep) {
        if (spread.geometry && deep !== 'materialsOnly') spread.geometry = spread.geometry.clone();
        if (spread.material && deep !== 'geometriesOnly') spread.material = spread.material.clone();
    }
    if (inject) {
        if (typeof inject === 'function') spread = {
            ...spread,
            children: inject(child)
        };
        else if (/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"](inject)) spread = {
            ...spread,
            children: inject
        };
        else spread = {
            ...spread,
            ...inject
        };
    }
    if (child.type === 'Mesh') {
        if (castShadow) spread.castShadow = true;
        if (receiveShadow) spread.receiveShadow = true;
    }
    return spread;
}
const Clone = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ object, children, deep, castShadow, receiveShadow, inject, keys, ...props }, forwardRef)=>{
    const config = {
        keys,
        deep,
        inject,
        castShadow,
        receiveShadow
    }; // Deal with arrayed clones
    if (Array.isArray(object)) {
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("group", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, props, {
            ref: forwardRef
        }), object.map((o)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Clone, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
                key: o.uuid,
                object: o
            }, config))), children);
    } // Singleton clones
    const { children: injectChildren, ...spread } = createSpread(object, config);
    const Element = object.type[0].toLowerCase() + object.type.slice(1);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Element, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, spread, props, {
        ref: forwardRef
    }), (object == null ? void 0 : object.children).map((child)=>{
        let spread = {};
        let Element = child.type[0].toLowerCase() + child.type.slice(1);
        if (Element === 'group' || Element === 'object3D') {
            Element = Clone;
            spread = {
                object: child,
                ...config
            };
        } else {
            spread = createSpread(child, config);
        }
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Element, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
            key: child.uuid
        }, spread));
    }), children, injectChildren);
});
;
}),
"[project]/apps/frontend/node_modules/@react-three/drei/core/OrthographicCamera.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OrthographicCamera",
    ()=>OrthographicCamera
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/fiber/dist/index-4f1a8e2f.esm.js [app-client] (ecmascript) <export w as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$merge$2d$refs$2f$dist$2f$react$2d$merge$2d$refs$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-merge-refs/dist/react-merge-refs.esm.js [app-client] (ecmascript)");
;
;
;
;
const OrthographicCamera = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ makeDefault, ...props }, ref)=>{
    const set = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__["useThree"])({
        "OrthographicCamera.useThree[set]": ({ set })=>set
    }["OrthographicCamera.useThree[set]"]);
    const camera = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__["useThree"])({
        "OrthographicCamera.useThree[camera]": ({ camera })=>camera
    }["OrthographicCamera.useThree[camera]"]);
    const size = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__["useThree"])({
        "OrthographicCamera.useThree[size]": ({ size })=>size
    }["OrthographicCamera.useThree[size]"]);
    const cameraRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"]();
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"]({
        "OrthographicCamera.useLayoutEffect": ()=>{
            if (cameraRef.current && !props.manual) {
                cameraRef.current.updateProjectionMatrix();
            }
        }
    }["OrthographicCamera.useLayoutEffect"], [
        size,
        props
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"]({
        "OrthographicCamera.useLayoutEffect": ()=>{
            if (makeDefault && cameraRef.current) {
                const oldCam = camera;
                set({
                    "OrthographicCamera.useLayoutEffect": ()=>({
                            camera: cameraRef.current
                        })
                }["OrthographicCamera.useLayoutEffect"]);
                return ({
                    "OrthographicCamera.useLayoutEffect": ()=>set({
                            "OrthographicCamera.useLayoutEffect": ()=>({
                                    camera: oldCam
                                })
                        }["OrthographicCamera.useLayoutEffect"])
                })["OrthographicCamera.useLayoutEffect"];
            }
        }
    }["OrthographicCamera.useLayoutEffect"], [
        camera,
        cameraRef,
        makeDefault,
        set
    ]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("orthographicCamera", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        left: size.width / -2,
        right: size.width / 2,
        top: size.height / 2,
        bottom: size.height / -2,
        ref: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$merge$2d$refs$2f$dist$2f$react$2d$merge$2d$refs$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])([
            cameraRef,
            ref
        ])
    }, props));
});
;
}),
"[project]/apps/frontend/node_modules/@react-three/drei/core/PerspectiveCamera.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PerspectiveCamera",
    ()=>PerspectiveCamera
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/fiber/dist/index-4f1a8e2f.esm.js [app-client] (ecmascript) <export w as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$merge$2d$refs$2f$dist$2f$react$2d$merge$2d$refs$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-merge-refs/dist/react-merge-refs.esm.js [app-client] (ecmascript)");
;
;
;
;
const PerspectiveCamera = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ makeDefault, ...props }, ref)=>{
    const set = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__["useThree"])({
        "PerspectiveCamera.useThree[set]": ({ set })=>set
    }["PerspectiveCamera.useThree[set]"]);
    const camera = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__["useThree"])({
        "PerspectiveCamera.useThree[camera]": ({ camera })=>camera
    }["PerspectiveCamera.useThree[camera]"]);
    const size = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__["useThree"])({
        "PerspectiveCamera.useThree[size]": ({ size })=>size
    }["PerspectiveCamera.useThree[size]"]);
    const cameraRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"]();
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"]({
        "PerspectiveCamera.useLayoutEffect": ()=>{
            const { current: cam } = cameraRef;
            if (cam && !props.manual) {
                cam.aspect = size.width / size.height;
                cam.updateProjectionMatrix();
            }
        }
    }["PerspectiveCamera.useLayoutEffect"], [
        size,
        props
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"]({
        "PerspectiveCamera.useLayoutEffect": ()=>{
            if (makeDefault && cameraRef.current) {
                const oldCam = camera;
                set({
                    "PerspectiveCamera.useLayoutEffect": ()=>({
                            camera: cameraRef.current
                        })
                }["PerspectiveCamera.useLayoutEffect"]);
                return ({
                    "PerspectiveCamera.useLayoutEffect": ()=>set({
                            "PerspectiveCamera.useLayoutEffect": ()=>({
                                    camera: oldCam
                                })
                        }["PerspectiveCamera.useLayoutEffect"])
                })["PerspectiveCamera.useLayoutEffect"];
            }
        }
    }["PerspectiveCamera.useLayoutEffect"], [
        camera,
        cameraRef,
        makeDefault,
        set
    ]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("perspectiveCamera", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        ref: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$merge$2d$refs$2f$dist$2f$react$2d$merge$2d$refs$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])([
            cameraRef,
            ref
        ])
    }, props));
});
;
}),
"[project]/apps/frontend/node_modules/@react-three/drei/core/CubeCamera.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CubeCamera",
    ()=>CubeCamera
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.module.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/fiber/dist/index-4f1a8e2f.esm.js [app-client] (ecmascript) <export w as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__x__as__useFrame$3e$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/fiber/dist/index-4f1a8e2f.esm.js [app-client] (ecmascript) <export x as useFrame>");
;
;
;
function CubeCamera({ children, fog, frames = Infinity, resolution = 256, near = 1, far = 1000, ...props }) {
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"]();
    const [camera, setCamera] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const scene = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__["useThree"])({
        "CubeCamera.useThree[scene]": ({ scene })=>scene
    }["CubeCamera.useThree[scene]"]);
    const gl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__["useThree"])({
        "CubeCamera.useThree[gl]": ({ gl })=>gl
    }["CubeCamera.useThree[gl]"]);
    const fbo = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "CubeCamera.useMemo[fbo]": ()=>{
            const fbo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WebGLCubeRenderTarget"](resolution);
            fbo.texture.type = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HalfFloatType"];
            return fbo;
        }
    }["CubeCamera.useMemo[fbo]"], [
        resolution
    ]);
    let count = 0;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__x__as__useFrame$3e$__["useFrame"])({
        "CubeCamera.useFrame": ()=>{
            if (camera && ref.current && (frames === Infinity || count < frames)) {
                ref.current.traverse({
                    "CubeCamera.useFrame": (obj)=>obj.visible = false
                }["CubeCamera.useFrame"]);
                const originalFog = scene.fog;
                scene.fog = fog || originalFog;
                camera.update(gl, scene);
                scene.fog = originalFog;
                ref.current.traverse({
                    "CubeCamera.useFrame": (obj)=>obj.visible = true
                }["CubeCamera.useFrame"]);
                count++;
            }
        }
    }["CubeCamera.useFrame"]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("group", props, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("cubeCamera", {
        ref: setCamera,
        args: [
            near,
            far,
            fbo
        ]
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("group", {
        ref: ref
    }, children(fbo.texture)));
}
;
}),
"[project]/apps/frontend/node_modules/@react-three/drei/core/DeviceOrientationControls.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DeviceOrientationControls",
    ()=>DeviceOrientationControls
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/fiber/dist/index-4f1a8e2f.esm.js [app-client] (ecmascript) <export w as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__x__as__useFrame$3e$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/fiber/dist/index-4f1a8e2f.esm.js [app-client] (ecmascript) <export x as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2d$stdlib$2f$controls$2f$DeviceOrientationControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three-stdlib/controls/DeviceOrientationControls.js [app-client] (ecmascript)");
;
;
;
;
const DeviceOrientationControls = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>{
    const { camera, onChange, ...rest } = props;
    const defaultCamera = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__["useThree"])({
        "DeviceOrientationControls.useThree[defaultCamera]": (state)=>state.camera
    }["DeviceOrientationControls.useThree[defaultCamera]"]);
    const invalidate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__["useThree"])({
        "DeviceOrientationControls.useThree[invalidate]": (state)=>state.invalidate
    }["DeviceOrientationControls.useThree[invalidate]"]);
    const explCamera = camera || defaultCamera;
    const [controls] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "DeviceOrientationControls.useState": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2d$stdlib$2f$controls$2f$DeviceOrientationControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DeviceOrientationControls"](explCamera)
    }["DeviceOrientationControls.useState"]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "DeviceOrientationControls.useEffect": ()=>{
            const callback = {
                "DeviceOrientationControls.useEffect.callback": (e)=>{
                    invalidate();
                    if (onChange) onChange(e);
                }
            }["DeviceOrientationControls.useEffect.callback"];
            controls == null ? void 0 : controls.addEventListener == null ? void 0 : controls.addEventListener('change', callback);
            return ({
                "DeviceOrientationControls.useEffect": ()=>controls == null ? void 0 : controls.removeEventListener == null ? void 0 : controls.removeEventListener('change', callback)
            })["DeviceOrientationControls.useEffect"];
        }
    }["DeviceOrientationControls.useEffect"], [
        onChange,
        controls,
        invalidate
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__x__as__useFrame$3e$__["useFrame"])({
        "DeviceOrientationControls.useFrame": ()=>controls == null ? void 0 : controls.update()
    }["DeviceOrientationControls.useFrame"]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "DeviceOrientationControls.useEffect": ()=>{
            const current = controls;
            current == null ? void 0 : current.connect();
            return ({
                "DeviceOrientationControls.useEffect": ()=>current == null ? void 0 : current.dispose()
            })["DeviceOrientationControls.useEffect"];
        }
    }["DeviceOrientationControls.useEffect"], [
        controls
    ]);
    return controls ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("primitive", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        ref: ref,
        dispose: undefined,
        object: controls
    }, rest)) : null;
});
;
}),
"[project]/apps/frontend/node_modules/@react-three/drei/core/FlyControls.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FlyControls",
    ()=>FlyControls
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/fiber/dist/index-4f1a8e2f.esm.js [app-client] (ecmascript) <export w as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__x__as__useFrame$3e$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/fiber/dist/index-4f1a8e2f.esm.js [app-client] (ecmascript) <export x as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2d$stdlib$2f$controls$2f$FlyControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three-stdlib/controls/FlyControls.js [app-client] (ecmascript)");
;
;
;
;
const FlyControls = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ domElement, ...props }, ref)=>{
    const { onChange, ...rest } = props;
    const invalidate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__["useThree"])({
        "FlyControls.useThree[invalidate]": (state)=>state.invalidate
    }["FlyControls.useThree[invalidate]"]);
    const camera = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__["useThree"])({
        "FlyControls.useThree[camera]": (state)=>state.camera
    }["FlyControls.useThree[camera]"]);
    const gl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__["useThree"])({
        "FlyControls.useThree[gl]": (state)=>state.gl
    }["FlyControls.useThree[gl]"]);
    const events = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__["useThree"])({
        "FlyControls.useThree[events]": (state)=>state.events
    }["FlyControls.useThree[events]"]);
    const explDomElement = domElement || events.connected || gl.domElement;
    const [controls] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "FlyControls.useState": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2d$stdlib$2f$controls$2f$FlyControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FlyControls"](camera, explDomElement)
    }["FlyControls.useState"]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "FlyControls.useEffect": ()=>{
            const callback = {
                "FlyControls.useEffect.callback": (e)=>{
                    invalidate();
                    if (onChange) onChange(e);
                }
            }["FlyControls.useEffect.callback"];
            controls == null ? void 0 : controls.addEventListener == null ? void 0 : controls.addEventListener('change', callback);
            return ({
                "FlyControls.useEffect": ()=>controls == null ? void 0 : controls.removeEventListener == null ? void 0 : controls.removeEventListener('change', callback)
            })["FlyControls.useEffect"];
        }
    }["FlyControls.useEffect"], [
        onChange,
        controls,
        invalidate
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__x__as__useFrame$3e$__["useFrame"])({
        "FlyControls.useFrame": (_, delta)=>controls == null ? void 0 : controls.update(delta)
    }["FlyControls.useFrame"]);
    return controls ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("primitive", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        ref: ref,
        dispose: undefined,
        object: controls
    }, rest)) : null;
});
;
}),
"[project]/apps/frontend/node_modules/@react-three/drei/core/MapControls.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MapControls",
    ()=>MapControls
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/fiber/dist/index-4f1a8e2f.esm.js [app-client] (ecmascript) <export w as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__x__as__useFrame$3e$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/fiber/dist/index-4f1a8e2f.esm.js [app-client] (ecmascript) <export x as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2d$stdlib$2f$controls$2f$OrbitControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three-stdlib/controls/OrbitControls.js [app-client] (ecmascript)");
;
;
;
;
const MapControls = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props = {
    enableDamping: true
}, ref)=>{
    const { domElement, camera, onChange, onStart, onEnd, ...rest } = props;
    const invalidate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__["useThree"])({
        "MapControls.useThree[invalidate]": (state)=>state.invalidate
    }["MapControls.useThree[invalidate]"]);
    const defaultCamera = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__["useThree"])({
        "MapControls.useThree[defaultCamera]": (state)=>state.camera
    }["MapControls.useThree[defaultCamera]"]);
    const gl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__["useThree"])({
        "MapControls.useThree[gl]": (state)=>state.gl
    }["MapControls.useThree[gl]"]);
    const events = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__["useThree"])({
        "MapControls.useThree[events]": (state)=>state.events
    }["MapControls.useThree[events]"]);
    const explDomElement = domElement || events.connected || gl.domElement;
    const explCamera = camera || defaultCamera;
    const controls = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "MapControls.useMemo[controls]": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2d$stdlib$2f$controls$2f$OrbitControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MapControls"](explCamera)
    }["MapControls.useMemo[controls]"], [
        explCamera
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "MapControls.useEffect": ()=>{
            controls.connect(explDomElement);
            const callback = {
                "MapControls.useEffect.callback": (e)=>{
                    invalidate();
                    if (onChange) onChange(e);
                }
            }["MapControls.useEffect.callback"];
            controls.addEventListener('change', callback);
            if (onStart) controls.addEventListener('start', onStart);
            if (onEnd) controls.addEventListener('end', onEnd);
            return ({
                "MapControls.useEffect": ()=>{
                    controls.dispose();
                    controls.removeEventListener('change', callback);
                    if (onStart) controls.removeEventListener('start', onStart);
                    if (onEnd) controls.removeEventListener('end', onEnd);
                }
            })["MapControls.useEffect"];
        }
    }["MapControls.useEffect"], [
        onChange,
        onStart,
        onEnd,
        controls,
        invalidate,
        explDomElement
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__x__as__useFrame$3e$__["useFrame"])({
        "MapControls.useFrame": ()=>controls.update()
    }["MapControls.useFrame"]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("primitive", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        ref: ref,
        dispose: undefined,
        object: controls,
        enableDamping: true
    }, rest));
});
;
}),
"[project]/apps/frontend/node_modules/@react-three/drei/core/OrbitControls.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OrbitControls",
    ()=>OrbitControls
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/fiber/dist/index-4f1a8e2f.esm.js [app-client] (ecmascript) <export w as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__x__as__useFrame$3e$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/fiber/dist/index-4f1a8e2f.esm.js [app-client] (ecmascript) <export x as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2d$stdlib$2f$controls$2f$OrbitControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three-stdlib/controls/OrbitControls.js [app-client] (ecmascript)");
;
;
;
;
const OrbitControls = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ makeDefault, camera, regress, domElement, enableDamping = true, onChange, onStart, onEnd, ...restProps }, ref)=>{
    const invalidate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__["useThree"])({
        "OrbitControls.useThree[invalidate]": (state)=>state.invalidate
    }["OrbitControls.useThree[invalidate]"]);
    const defaultCamera = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__["useThree"])({
        "OrbitControls.useThree[defaultCamera]": (state)=>state.camera
    }["OrbitControls.useThree[defaultCamera]"]);
    const gl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__["useThree"])({
        "OrbitControls.useThree[gl]": (state)=>state.gl
    }["OrbitControls.useThree[gl]"]);
    const events = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__["useThree"])({
        "OrbitControls.useThree[events]": (state)=>state.events
    }["OrbitControls.useThree[events]"]);
    const set = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__["useThree"])({
        "OrbitControls.useThree[set]": (state)=>state.set
    }["OrbitControls.useThree[set]"]);
    const get = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__["useThree"])({
        "OrbitControls.useThree[get]": (state)=>state.get
    }["OrbitControls.useThree[get]"]);
    const performance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__["useThree"])({
        "OrbitControls.useThree[performance]": (state)=>state.performance
    }["OrbitControls.useThree[performance]"]);
    const explCamera = camera || defaultCamera;
    const explDomElement = domElement || events.connected || gl.domElement;
    const controls = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "OrbitControls.useMemo[controls]": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2d$stdlib$2f$controls$2f$OrbitControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrbitControls"](explCamera)
    }["OrbitControls.useMemo[controls]"], [
        explCamera
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__x__as__useFrame$3e$__["useFrame"])({
        "OrbitControls.useFrame": ()=>{
            if (controls.enabled) controls.update();
        }
    }["OrbitControls.useFrame"]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "OrbitControls.useEffect": ()=>{
            controls.connect(explDomElement);
            return ({
                "OrbitControls.useEffect": ()=>void controls.dispose()
            })["OrbitControls.useEffect"];
        }
    }["OrbitControls.useEffect"], [
        explDomElement,
        regress,
        controls,
        invalidate
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "OrbitControls.useEffect": ()=>{
            const callback = {
                "OrbitControls.useEffect.callback": (e)=>{
                    invalidate();
                    if (regress) performance.regress();
                    if (onChange) onChange(e);
                }
            }["OrbitControls.useEffect.callback"];
            controls.addEventListener('change', callback);
            if (onStart) controls.addEventListener('start', onStart);
            if (onEnd) controls.addEventListener('end', onEnd);
            return ({
                "OrbitControls.useEffect": ()=>{
                    if (onStart) controls.removeEventListener('start', onStart);
                    if (onEnd) controls.removeEventListener('end', onEnd);
                    controls.removeEventListener('change', callback);
                }
            })["OrbitControls.useEffect"];
        }
    }["OrbitControls.useEffect"], [
        onChange,
        onStart,
        onEnd
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "OrbitControls.useEffect": ()=>{
            if (makeDefault) {
                const old = get().controls;
                set({
                    controls
                });
                return ({
                    "OrbitControls.useEffect": ()=>set({
                            controls: old
                        })
                })["OrbitControls.useEffect"];
            }
        }
    }["OrbitControls.useEffect"], [
        makeDefault,
        controls
    ]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("primitive", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        ref: ref,
        object: controls,
        enableDamping: enableDamping
    }, restProps));
});
;
}),
"[project]/apps/frontend/node_modules/@react-three/drei/core/ArcballControls.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArcballControls",
    ()=>ArcballControls
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/fiber/dist/index-4f1a8e2f.esm.js [app-client] (ecmascript) <export w as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__x__as__useFrame$3e$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/fiber/dist/index-4f1a8e2f.esm.js [app-client] (ecmascript) <export x as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2d$stdlib$2f$controls$2f$ArcballControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three-stdlib/controls/ArcballControls.js [app-client] (ecmascript)");
;
;
;
;
;
const ArcballControls = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ camera, makeDefault, regress, domElement, onChange, onStart, onEnd, ...restProps }, ref)=>{
    const invalidate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__["useThree"])({
        "ArcballControls.useThree[invalidate]": (state)=>state.invalidate
    }["ArcballControls.useThree[invalidate]"]);
    const defaultCamera = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__["useThree"])({
        "ArcballControls.useThree[defaultCamera]": (state)=>state.camera
    }["ArcballControls.useThree[defaultCamera]"]);
    const gl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__["useThree"])({
        "ArcballControls.useThree[gl]": (state)=>state.gl
    }["ArcballControls.useThree[gl]"]);
    const events = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__["useThree"])({
        "ArcballControls.useThree[events]": (state)=>state.events
    }["ArcballControls.useThree[events]"]);
    const set = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__["useThree"])({
        "ArcballControls.useThree[set]": (state)=>state.set
    }["ArcballControls.useThree[set]"]);
    const get = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__["useThree"])({
        "ArcballControls.useThree[get]": (state)=>state.get
    }["ArcballControls.useThree[get]"]);
    const performance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__["useThree"])({
        "ArcballControls.useThree[performance]": (state)=>state.performance
    }["ArcballControls.useThree[performance]"]);
    const explCamera = camera || defaultCamera;
    const explDomElement = domElement || events.connected || gl.domElement;
    const controls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ArcballControls.useMemo[controls]": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2d$stdlib$2f$controls$2f$ArcballControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArcballControls"](explCamera)
    }["ArcballControls.useMemo[controls]"], [
        explCamera
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__x__as__useFrame$3e$__["useFrame"])({
        "ArcballControls.useFrame": ()=>{
            if (controls.enabled) controls.update();
        }
    }["ArcballControls.useFrame"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ArcballControls.useEffect": ()=>{
            controls.connect(explDomElement);
            return ({
                "ArcballControls.useEffect": ()=>void controls.dispose()
            })["ArcballControls.useEffect"];
        }
    }["ArcballControls.useEffect"], [
        explDomElement,
        regress,
        controls,
        invalidate
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ArcballControls.useEffect": ()=>{
            const callback = {
                "ArcballControls.useEffect.callback": (e)=>{
                    invalidate();
                    if (regress) performance.regress();
                    if (onChange) onChange(e);
                }
            }["ArcballControls.useEffect.callback"];
            controls.addEventListener('change', callback);
            if (onStart) controls.addEventListener('start', onStart);
            if (onEnd) controls.addEventListener('end', onEnd);
            return ({
                "ArcballControls.useEffect": ()=>{
                    controls.removeEventListener('change', callback);
                    if (onStart) controls.removeEventListener('start', onStart);
                    if (onEnd) controls.removeEventListener('end', onEnd);
                }
            })["ArcballControls.useEffect"];
        }
    }["ArcballControls.useEffect"], [
        onChange,
        onStart,
        onEnd
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ArcballControls.useEffect": ()=>{
            if (makeDefault) {
                const old = get().controls;
                set({
                    controls
                });
                return ({
                    "ArcballControls.useEffect": ()=>set({
                            controls: old
                        })
                })["ArcballControls.useEffect"];
            }
        }
    }["ArcballControls.useEffect"], [
        makeDefault,
        controls
    ]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("primitive", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        ref: ref,
        object: controls
    }, restProps));
});
;
}),
"[project]/apps/frontend/node_modules/@react-three/drei/core/PointerLockControls.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PointerLockControls",
    ()=>PointerLockControls
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/fiber/dist/index-4f1a8e2f.esm.js [app-client] (ecmascript) <export w as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2d$stdlib$2f$controls$2f$PointerLockControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three-stdlib/controls/PointerLockControls.js [app-client] (ecmascript)");
;
;
;
;
const PointerLockControls = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ domElement, selector, onChange, onLock, onUnlock, enabled = true, ...props }, ref)=>{
    const { camera, ...rest } = props;
    const get = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__["useThree"])({
        "PointerLockControls.useThree[get]": (state)=>state.get
    }["PointerLockControls.useThree[get]"]);
    const setEvents = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__["useThree"])({
        "PointerLockControls.useThree[setEvents]": (state)=>state.setEvents
    }["PointerLockControls.useThree[setEvents]"]);
    const gl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__["useThree"])({
        "PointerLockControls.useThree[gl]": (state)=>state.gl
    }["PointerLockControls.useThree[gl]"]);
    const defaultCamera = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__["useThree"])({
        "PointerLockControls.useThree[defaultCamera]": (state)=>state.camera
    }["PointerLockControls.useThree[defaultCamera]"]);
    const invalidate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__["useThree"])({
        "PointerLockControls.useThree[invalidate]": (state)=>state.invalidate
    }["PointerLockControls.useThree[invalidate]"]);
    const events = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__["useThree"])({
        "PointerLockControls.useThree[events]": (state)=>state.events
    }["PointerLockControls.useThree[events]"]);
    const explCamera = camera || defaultCamera;
    const explDomElement = domElement || events.connected || gl.domElement;
    const [controls] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "PointerLockControls.useState": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2d$stdlib$2f$controls$2f$PointerLockControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointerLockControls"](explCamera)
    }["PointerLockControls.useState"]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "PointerLockControls.useEffect": ()=>{
            if (enabled) {
                controls.connect(explDomElement); // Force events to be centered while PLC is active
                const oldComputeOffsets = get().events.compute;
                setEvents({
                    compute (event, state) {
                        const offsetX = state.size.width / 2;
                        const offsetY = state.size.height / 2;
                        state.pointer.set(offsetX / state.size.width * 2 - 1, -(offsetY / state.size.height) * 2 + 1);
                        state.raycaster.setFromCamera(state.pointer, state.camera);
                    }
                });
                return ({
                    "PointerLockControls.useEffect": ()=>{
                        controls.disconnect();
                        setEvents({
                            compute: oldComputeOffsets
                        });
                    }
                })["PointerLockControls.useEffect"];
            }
        }
    }["PointerLockControls.useEffect"], [
        enabled,
        controls
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "PointerLockControls.useEffect": ()=>{
            const callback = {
                "PointerLockControls.useEffect.callback": (e)=>{
                    invalidate();
                    if (onChange) onChange(e);
                }
            }["PointerLockControls.useEffect.callback"];
            controls.addEventListener('change', callback);
            if (onLock) controls.addEventListener('lock', onLock);
            if (onUnlock) controls.addEventListener('unlock', onUnlock); // Enforce previous interaction
            const handler = {
                "PointerLockControls.useEffect.handler": ()=>controls.lock()
            }["PointerLockControls.useEffect.handler"];
            const elements = selector ? Array.from(document.querySelectorAll(selector)) : [
                document
            ];
            elements.forEach({
                "PointerLockControls.useEffect": (element)=>element && element.addEventListener('click', handler)
            }["PointerLockControls.useEffect"]);
            return ({
                "PointerLockControls.useEffect": ()=>{
                    controls.removeEventListener('change', callback);
                    if (onLock) controls.addEventListener('lock', onLock);
                    if (onUnlock) controls.addEventListener('unlock', onUnlock);
                    elements.forEach({
                        "PointerLockControls.useEffect": (element)=>element ? element.removeEventListener('click', handler) : undefined
                    }["PointerLockControls.useEffect"]);
                }
            })["PointerLockControls.useEffect"];
        }
    }["PointerLockControls.useEffect"], [
        onChange,
        onLock,
        onUnlock,
        selector
    ]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("primitive", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        ref: ref,
        object: controls
    }, rest));
});
;
}),
"[project]/apps/frontend/node_modules/@react-three/drei/core/FirstPersonControls.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FirstPersonControls",
    ()=>FirstPersonControls
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/fiber/dist/index-4f1a8e2f.esm.js [app-client] (ecmascript) <export w as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__x__as__useFrame$3e$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/fiber/dist/index-4f1a8e2f.esm.js [app-client] (ecmascript) <export x as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2d$stdlib$2f$controls$2f$FirstPersonControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three-stdlib/controls/FirstPersonControls.js [app-client] (ecmascript)");
;
;
;
;
const FirstPersonControls = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ domElement, ...props }, ref)=>{
    const camera = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__["useThree"])({
        "FirstPersonControls.useThree[camera]": (state)=>state.camera
    }["FirstPersonControls.useThree[camera]"]);
    const gl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__["useThree"])({
        "FirstPersonControls.useThree[gl]": (state)=>state.gl
    }["FirstPersonControls.useThree[gl]"]);
    const events = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__["useThree"])({
        "FirstPersonControls.useThree[events]": (state)=>state.events
    }["FirstPersonControls.useThree[events]"]);
    const explDomElement = domElement || events.connected || gl.domElement;
    const [controls] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "FirstPersonControls.useState": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2d$stdlib$2f$controls$2f$FirstPersonControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FirstPersonControls"](camera, explDomElement)
    }["FirstPersonControls.useState"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__x__as__useFrame$3e$__["useFrame"])({
        "FirstPersonControls.useFrame": (_, delta)=>{
            controls.update(delta);
        }
    }["FirstPersonControls.useFrame"]);
    return controls ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("primitive", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        ref: ref,
        object: controls
    }, props)) : null;
});
;
}),
"[project]/apps/frontend/node_modules/@react-three/drei/core/GizmoHelper.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GizmoHelper",
    ()=>GizmoHelper,
    "useGizmoContext",
    ()=>useGizmoContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/fiber/dist/index-4f1a8e2f.esm.js [app-client] (ecmascript) <export w as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__x__as__useFrame$3e$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/fiber/dist/index-4f1a8e2f.esm.js [app-client] (ecmascript) <export x as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__g__as__createPortal$3e$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/fiber/dist/index-4f1a8e2f.esm.js [app-client] (ecmascript) <export g as createPortal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$OrthographicCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/drei/core/OrthographicCamera.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './useCamera.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
;
;
const Context = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"]({});
const useGizmoContext = ()=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](Context);
};
const turnRate = 2 * Math.PI; // turn rate in angles per second
const dummy = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Object3D"]();
const matrix = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix4"]();
const [q1, q2] = [
    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"](),
    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"]()
];
const target = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
const targetPosition = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
const GizmoHelper = ({ alignment = 'bottom-right', margin = [
    80,
    80
], renderPriority = 0, autoClear = true, onUpdate, onTarget, children: GizmoHelperComponent })=>{
    const size = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__["useThree"])({
        "GizmoHelper.useThree[size]": ({ size })=>size
    }["GizmoHelper.useThree[size]"]);
    const mainCamera = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__["useThree"])({
        "GizmoHelper.useThree[mainCamera]": ({ camera })=>camera
    }["GizmoHelper.useThree[mainCamera]"]); // @ts-expect-error new in @react-three/fiber@7.0.5
    const defaultControls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__["useThree"])({
        "GizmoHelper.useThree[defaultControls]": ({ controls })=>controls
    }["GizmoHelper.useThree[defaultControls]"]);
    const gl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__["useThree"])({
        "GizmoHelper.useThree[gl]": ({ gl })=>gl
    }["GizmoHelper.useThree[gl]"]);
    const scene = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__["useThree"])({
        "GizmoHelper.useThree[scene]": ({ scene })=>scene
    }["GizmoHelper.useThree[scene]"]);
    const invalidate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__["useThree"])({
        "GizmoHelper.useThree[invalidate]": ({ invalidate })=>invalidate
    }["GizmoHelper.useThree[invalidate]"]);
    const backgroundRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"]();
    const gizmoRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"]();
    const virtualCam = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const [virtualScene] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "GizmoHelper.useState": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scene"]()
    }["GizmoHelper.useState"]);
    const animating = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](false);
    const radius = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](0);
    const focusPoint = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, 0));
    const tweenCamera = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "GizmoHelper.useCallback[tweenCamera]": (direction)=>{
            animating.current = true;
            if (defaultControls || onTarget) focusPoint.current = (defaultControls == null ? void 0 : defaultControls.target) || (onTarget == null ? void 0 : onTarget());
            radius.current = mainCamera.position.distanceTo(target); // Rotate from current camera orientation
            q1.copy(mainCamera.quaternion); // To new current camera orientation
            targetPosition.copy(direction).multiplyScalar(radius.current).add(target);
            dummy.lookAt(targetPosition);
            q2.copy(dummy.quaternion);
            invalidate();
        }
    }["GizmoHelper.useCallback[tweenCamera]"], [
        defaultControls,
        mainCamera,
        onTarget,
        invalidate
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "GizmoHelper.useEffect": ()=>{
            if (scene.background) {
                //Interchange the actual scene background with the virtual scene
                backgroundRef.current = scene.background;
                scene.background = null;
                virtualScene.background = backgroundRef.current;
            }
            return ({
                "GizmoHelper.useEffect": ()=>{
                    // reset on unmount
                    if (backgroundRef.current) scene.background = backgroundRef.current;
                }
            })["GizmoHelper.useEffect"];
        }
    }["GizmoHelper.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__x__as__useFrame$3e$__["useFrame"])({
        "GizmoHelper.useFrame": (_, delta)=>{
            if (virtualCam.current && gizmoRef.current) {
                var _gizmoRef$current;
                // Animate step
                if (animating.current) {
                    if (q1.angleTo(q2) < 0.01) {
                        animating.current = false;
                    } else {
                        const step = delta * turnRate; // animate position by doing a slerp and then scaling the position on the unit sphere
                        q1.rotateTowards(q2, step); // animate orientation
                        mainCamera.position.set(0, 0, 1).applyQuaternion(q1).multiplyScalar(radius.current).add(focusPoint.current);
                        mainCamera.up.set(0, 1, 0).applyQuaternion(q1).normalize();
                        mainCamera.quaternion.copy(q1);
                        if (onUpdate) onUpdate();
                        else if (defaultControls) defaultControls.update();
                        invalidate();
                    }
                } // Sync Gizmo with main camera orientation
                matrix.copy(mainCamera.matrix).invert();
                (_gizmoRef$current = gizmoRef.current) == null ? void 0 : _gizmoRef$current.quaternion.setFromRotationMatrix(matrix); // Render virtual camera
                if (autoClear) gl.autoClear = false;
                gl.clearDepth();
                gl.render(virtualScene, virtualCam.current);
            }
        }
    }["GizmoHelper.useFrame"], renderPriority);
    const raycast = useCamera(virtualCam);
    const gizmoHelperContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "GizmoHelper.useMemo[gizmoHelperContext]": ()=>({
                tweenCamera,
                raycast
            })
    }["GizmoHelper.useMemo[gizmoHelperContext]"], [
        tweenCamera
    ]); // Position gizmo component within scene
    const [marginX, marginY] = margin;
    const x = alignment.endsWith('-left') ? -size.width / 2 + marginX : size.width / 2 - marginX;
    const y = alignment.startsWith('top-') ? size.height / 2 - marginY : -size.height / 2 + marginY;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__g__as__createPortal$3e$__["createPortal"])(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Context.Provider, {
        value: gizmoHelperContext
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$OrthographicCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrthographicCamera"], {
        ref: virtualCam,
        position: [
            0,
            0,
            200
        ]
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("group", {
        ref: gizmoRef,
        position: [
            x,
            y,
            0
        ]
    }, GizmoHelperComponent)), virtualScene);
};
;
}),
"[project]/apps/frontend/node_modules/@react-three/drei/core/GizmoViewcube.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GizmoViewcube",
    ()=>GizmoViewcube
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/fiber/dist/index-4f1a8e2f.esm.js [app-client] (ecmascript) <export w as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$GizmoHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/drei/core/GizmoHelper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
;
;
;
;
const colors = {
    bg: '#f0f0f0',
    hover: '#999',
    text: 'black',
    stroke: 'black'
};
const defaultFaces = [
    'Right',
    'Left',
    'Top',
    'Bottom',
    'Front',
    'Back'
];
const makePositionVector = (xyz)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](...xyz).multiplyScalar(0.38);
const corners = [
    [
        1,
        1,
        1
    ],
    [
        1,
        1,
        -1
    ],
    [
        1,
        -1,
        1
    ],
    [
        1,
        -1,
        -1
    ],
    [
        -1,
        1,
        1
    ],
    [
        -1,
        1,
        -1
    ],
    [
        -1,
        -1,
        1
    ],
    [
        -1,
        -1,
        -1
    ]
].map(makePositionVector);
const cornerDimensions = [
    0.25,
    0.25,
    0.25
];
const edges = [
    [
        1,
        1,
        0
    ],
    [
        1,
        0,
        1
    ],
    [
        1,
        0,
        -1
    ],
    [
        1,
        -1,
        0
    ],
    [
        0,
        1,
        1
    ],
    [
        0,
        1,
        -1
    ],
    [
        0,
        -1,
        1
    ],
    [
        0,
        -1,
        -1
    ],
    [
        -1,
        1,
        0
    ],
    [
        -1,
        0,
        1
    ],
    [
        -1,
        0,
        -1
    ],
    [
        -1,
        -1,
        0
    ]
].map(makePositionVector);
const edgeDimensions = edges.map((edge)=>edge.toArray().map((axis)=>axis == 0 ? 0.5 : 0.25));
const FaceMaterial = ({ hover, index, font = '20px Inter var, Arial, sans-serif', faces = defaultFaces, color = colors.bg, hoverColor = colors.hover, textColor = colors.text, strokeColor = colors.stroke, opacity = 1 })=>{
    const gl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__["useThree"])({
        "FaceMaterial.useThree[gl]": (state)=>state.gl
    }["FaceMaterial.useThree[gl]"]);
    const texture = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "FaceMaterial.useMemo[texture]": ()=>{
            const canvas = document.createElement('canvas');
            canvas.width = 128;
            canvas.height = 128;
            const context = canvas.getContext('2d');
            context.fillStyle = color;
            context.fillRect(0, 0, canvas.width, canvas.height);
            context.strokeStyle = strokeColor;
            context.strokeRect(0, 0, canvas.width, canvas.height);
            context.font = font;
            context.textAlign = 'center';
            context.fillStyle = textColor;
            context.fillText(faces[index].toUpperCase(), 64, 76);
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CanvasTexture"](canvas);
        }
    }["FaceMaterial.useMemo[texture]"], [
        index,
        faces,
        font,
        color,
        textColor,
        strokeColor
    ]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("meshLambertMaterial", {
        map: texture,
        "map-anisotropy": gl.capabilities.getMaxAnisotropy() || 1,
        attach: `material-${index}`,
        color: hover ? hoverColor : 'white',
        transparent: true,
        opacity: opacity
    });
};
const FaceCube = (props)=>{
    const { tweenCamera, raycast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$GizmoHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGizmoContext"])();
    const [hover, setHover] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const handlePointerOut = (e)=>{
        e.stopPropagation();
        setHover(null);
    };
    const handleClick = (e)=>{
        e.stopPropagation();
        tweenCamera(e.face.normal);
    };
    const handlePointerMove = (e)=>{
        e.stopPropagation();
        setHover(Math.floor(e.faceIndex / 2));
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("mesh", {
        raycast: raycast,
        onPointerOut: handlePointerOut,
        onPointerMove: handlePointerMove,
        onClick: props.onClick || handleClick
    }, [
        ...Array(6)
    ].map((_, index)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](FaceMaterial, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
            key: index,
            index: index,
            hover: hover === index
        }, props))), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("boxGeometry", null));
};
const EdgeCube = ({ onClick, dimensions, position, hoverColor = colors.hover })=>{
    const { tweenCamera, raycast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$GizmoHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGizmoContext"])();
    const [hover, setHover] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const handlePointerOut = (e)=>{
        e.stopPropagation();
        setHover(false);
    };
    const handlePointerOver = (e)=>{
        e.stopPropagation();
        setHover(true);
    };
    const handleClick = (e)=>{
        e.stopPropagation();
        tweenCamera(position);
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("mesh", {
        scale: 1.01,
        position: position,
        raycast: raycast,
        onPointerOver: handlePointerOver,
        onPointerOut: handlePointerOut,
        onClick: onClick || handleClick
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("meshBasicMaterial", {
        color: hover ? hoverColor : 'white',
        transparent: true,
        opacity: 0.6,
        visible: hover
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("boxGeometry", {
        args: dimensions
    }));
};
const GizmoViewcube = (props)=>{
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("group", {
        scale: [
            60,
            60,
            60
        ]
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](FaceCube, props), edges.map((edge, index)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](EdgeCube, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
            key: index,
            position: edge,
            dimensions: edgeDimensions[index]
        }, props))), corners.map((corner, index)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](EdgeCube, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
            key: index,
            position: corner,
            dimensions: cornerDimensions
        }, props))), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("ambientLight", {
        intensity: 0.5
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("pointLight", {
        position: [
            10,
            10,
            10
        ],
        intensity: 0.5
    }));
};
;
}),
"[project]/apps/frontend/node_modules/@react-three/drei/core/GizmoViewport.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GizmoViewport",
    ()=>GizmoViewport
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/fiber/dist/index-4f1a8e2f.esm.js [app-client] (ecmascript) <export w as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$GizmoHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/drei/core/GizmoHelper.js [app-client] (ecmascript)");
;
;
;
;
;
function Axis({ scale = [
    0.8,
    0.05,
    0.05
], color, rotation }) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("group", {
        rotation: rotation
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("mesh", {
        position: [
            0.4,
            0,
            0
        ]
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("boxGeometry", {
        args: scale
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("meshBasicMaterial", {
        color: color,
        toneMapped: false
    })));
}
function AxisHead({ onClick, font, disabled, arcStyle, label, labelColor, axisHeadScale = 1, ...props }) {
    const gl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__["useThree"])({
        "AxisHead.useThree[gl]": (state)=>state.gl
    }["AxisHead.useThree[gl]"]);
    const texture = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "AxisHead.useMemo[texture]": ()=>{
            const canvas = document.createElement('canvas');
            canvas.width = 64;
            canvas.height = 64;
            const context = canvas.getContext('2d');
            context.beginPath();
            context.arc(32, 32, 16, 0, 2 * Math.PI);
            context.closePath();
            context.fillStyle = arcStyle;
            context.fill();
            if (label) {
                context.font = font;
                context.textAlign = 'center';
                context.fillStyle = labelColor;
                context.fillText(label, 32, 41);
            }
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CanvasTexture"](canvas);
        }
    }["AxisHead.useMemo[texture]"], [
        arcStyle,
        label,
        labelColor,
        font
    ]);
    const [active, setActive] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const scale = (label ? 1 : 0.75) * (active ? 1.2 : 1) * axisHeadScale;
    const handlePointerOver = (e)=>{
        e.stopPropagation();
        setActive(true);
    };
    const handlePointerOut = (e)=>{
        e.stopPropagation();
        setActive(false);
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("sprite", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        scale: scale,
        onPointerOver: !disabled ? handlePointerOver : undefined,
        onPointerOut: !disabled ? onClick || handlePointerOut : undefined
    }, props), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("spriteMaterial", {
        map: texture,
        "map-anisotropy": gl.capabilities.getMaxAnisotropy() || 1,
        alphaTest: 0.3,
        opacity: label ? 1 : 0.75,
        toneMapped: false
    }));
}
const GizmoViewport = ({ hideNegativeAxes, hideAxisHeads, disabled, font = '18px Inter var, Arial, sans-serif', axisColors = [
    '#ff3653',
    '#0adb50',
    '#2c8fdf'
], axisHeadScale = 1, axisScale, labels = [
    'X',
    'Y',
    'Z'
], labelColor = '#000', onClick, ...props })=>{
    const [colorX, colorY, colorZ] = axisColors;
    const { tweenCamera, raycast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$GizmoHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGizmoContext"])();
    const axisHeadProps = {
        font,
        disabled,
        labelColor,
        raycast,
        onClick,
        axisHeadScale,
        onPointerDown: !disabled ? (e)=>{
            tweenCamera(e.object.position);
            e.stopPropagation();
        } : undefined
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("group", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        scale: 40
    }, props), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Axis, {
        color: colorX,
        rotation: [
            0,
            0,
            0
        ],
        scale: axisScale
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Axis, {
        color: colorY,
        rotation: [
            0,
            0,
            Math.PI / 2
        ],
        scale: axisScale
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Axis, {
        color: colorZ,
        rotation: [
            0,
            -Math.PI / 2,
            0
        ],
        scale: axisScale
    }), !hideAxisHeads && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](AxisHead, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        arcStyle: colorX,
        position: [
            1,
            0,
            0
        ],
        label: labels[0]
    }, axisHeadProps)), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](AxisHead, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        arcStyle: colorY,
        position: [
            0,
            1,
            0
        ],
        label: labels[1]
    }, axisHeadProps)), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](AxisHead, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        arcStyle: colorZ,
        position: [
            0,
            0,
            1
        ],
        label: labels[2]
    }, axisHeadProps)), !hideNegativeAxes && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](AxisHead, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        arcStyle: colorX,
        position: [
            -1,
            0,
            0
        ]
    }, axisHeadProps)), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](AxisHead, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        arcStyle: colorY,
        position: [
            0,
            -1,
            0
        ]
    }, axisHeadProps)), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](AxisHead, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        arcStyle: colorZ,
        position: [
            0,
            0,
            -1
        ]
    }, axisHeadProps)))), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("ambientLight", {
        intensity: 0.5
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("pointLight", {
        position: [
            10,
            10,
            10
        ],
        intensity: 0.5
    }));
};
;
}),
"[project]/apps/frontend/node_modules/@react-three/drei/core/CurveModifier.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CurveModifier",
    ()=>CurveModifier
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__g__as__createPortal$3e$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/fiber/dist/index-4f1a8e2f.esm.js [app-client] (ecmascript) <export g as createPortal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2d$stdlib$2f$modifiers$2f$CurveModifier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three-stdlib/modifiers/CurveModifier.js [app-client] (ecmascript)");
;
;
;
;
const CurveModifier = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ children, curve }, ref)=>{
    const [scene] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "CurveModifier.useState": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scene"]()
    }["CurveModifier.useState"]);
    const [obj, set] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]();
    const modifier = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"]();
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "CurveModifier.useEffect": ()=>{
            modifier.current = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2d$stdlib$2f$modifiers$2f$CurveModifier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flow"](scene.children[0]);
            set(modifier.current.object3D);
        }
    }["CurveModifier.useEffect"], [
        children
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "CurveModifier.useEffect": ()=>{
            var _modifier$current;
            if (curve) (_modifier$current = modifier.current) == null ? void 0 : _modifier$current.updateCurve(0, curve);
        }
    }["CurveModifier.useEffect"], [
        curve
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"](ref, {
        "CurveModifier.useImperativeHandle": ()=>({
                moveAlongCurve: ({
                    "CurveModifier.useImperativeHandle": (val)=>{
                        var _modifier$current2;
                        (_modifier$current2 = modifier.current) == null ? void 0 : _modifier$current2.moveAlongCurve(val);
                    }
                })["CurveModifier.useImperativeHandle"]
            })
    }["CurveModifier.useImperativeHandle"]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__g__as__createPortal$3e$__["createPortal"])(children, scene), obj && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("primitive", {
        object: obj
    }));
});
;
}),
"[project]/apps/frontend/node_modules/@react-three/drei/helpers/glsl/distort.vert.glsl.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>distort
]);
var distort = "#define GLSLIFY 1\nvec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}float snoise(vec3 v){const vec2 C=vec2(1.0/6.0,1.0/3.0);const vec4 D=vec4(0.0,0.5,1.0,2.0);vec3 i=floor(v+dot(v,C.yyy));vec3 x0=v-i+dot(i,C.xxx);vec3 g=step(x0.yzx,x0.xyz);vec3 l=1.0-g;vec3 i1=min(g.xyz,l.zxy);vec3 i2=max(g.xyz,l.zxy);vec3 x1=x0-i1+C.xxx;vec3 x2=x0-i2+C.yyy;vec3 x3=x0-D.yyy;i=mod289(i);vec4 p=permute(permute(permute(i.z+vec4(0.0,i1.z,i2.z,1.0))+i.y+vec4(0.0,i1.y,i2.y,1.0))+i.x+vec4(0.0,i1.x,i2.x,1.0));float n_=0.142857142857;vec3 ns=n_*D.wyz-D.xzx;vec4 j=p-49.0*floor(p*ns.z*ns.z);vec4 x_=floor(j*ns.z);vec4 y_=floor(j-7.0*x_);vec4 x=x_*ns.x+ns.yyyy;vec4 y=y_*ns.x+ns.yyyy;vec4 h=1.0-abs(x)-abs(y);vec4 b0=vec4(x.xy,y.xy);vec4 b1=vec4(x.zw,y.zw);vec4 s0=floor(b0)*2.0+1.0;vec4 s1=floor(b1)*2.0+1.0;vec4 sh=-step(h,vec4(0.0));vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;vec3 p0=vec3(a0.xy,h.x);vec3 p1=vec3(a0.zw,h.y);vec3 p2=vec3(a1.xy,h.z);vec3 p3=vec3(a1.zw,h.w);vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;vec4 m=max(0.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0);m=m*m;return 42.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));}"; // eslint-disable-line
;
}),
"[project]/apps/frontend/node_modules/@react-three/drei/core/MeshDistortMaterial.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MeshDistortMaterial",
    ()=>MeshDistortMaterial
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__x__as__useFrame$3e$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/fiber/dist/index-4f1a8e2f.esm.js [app-client] (ecmascript) <export x as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$drei$2f$helpers$2f$glsl$2f$distort$2e$vert$2e$glsl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/drei/helpers/glsl/distort.vert.glsl.js [app-client] (ecmascript)");
;
;
;
;
;
class DistortMaterialImpl extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshPhysicalMaterial"] {
    constructor(parameters = {}){
        super(parameters);
        this.setValues(parameters);
        this._time = {
            value: 0
        };
        this._distort = {
            value: 0.4
        };
        this._radius = {
            value: 1
        };
    }
    onBeforeCompile(shader) {
        shader.uniforms.time = this._time;
        shader.uniforms.radius = this._radius;
        shader.uniforms.distort = this._distort;
        shader.vertexShader = `
      uniform float time;
      uniform float radius;
      uniform float distort;
      ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$drei$2f$helpers$2f$glsl$2f$distort$2e$vert$2e$glsl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]}
      ${shader.vertexShader}
    `;
        shader.vertexShader = shader.vertexShader.replace('#include <begin_vertex>', `
        float updateTime = time / 50.0;
        float noise = snoise(vec3(position / 2.0 + updateTime * 5.0));
        vec3 transformed = vec3(position * (noise * pow(distort, 2.0) + radius));
        `);
    }
    get time() {
        return this._time.value;
    }
    set time(v) {
        this._time.value = v;
    }
    get distort() {
        return this._distort.value;
    }
    set distort(v) {
        this._distort.value = v;
    }
    get radius() {
        return this._radius.value;
    }
    set radius(v) {
        this._radius.value = v;
    }
}
const MeshDistortMaterial = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ speed = 1, ...props }, ref)=>{
    const [material] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "MeshDistortMaterial.useState": ()=>new DistortMaterialImpl()
    }["MeshDistortMaterial.useState"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__x__as__useFrame$3e$__["useFrame"])({
        "MeshDistortMaterial.useFrame": (state)=>material && (material.time = state.clock.getElapsedTime() * speed)
    }["MeshDistortMaterial.useFrame"]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("primitive", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        dispose: undefined,
        object: material,
        ref: ref,
        attach: "material"
    }, props));
});
;
}),
"[project]/apps/frontend/node_modules/@react-three/drei/core/MeshWobbleMaterial.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MeshWobbleMaterial",
    ()=>MeshWobbleMaterial
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__x__as__useFrame$3e$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/fiber/dist/index-4f1a8e2f.esm.js [app-client] (ecmascript) <export x as useFrame>");
;
;
;
;
class WobbleMaterialImpl extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"] {
    constructor(parameters = {}){
        super(parameters);
        this.setValues(parameters);
        this._time = {
            value: 0
        };
        this._factor = {
            value: 1
        };
    }
    onBeforeCompile(shader) {
        shader.uniforms.time = this._time;
        shader.uniforms.factor = this._factor;
        shader.vertexShader = `
      uniform float time;
      uniform float factor;
      ${shader.vertexShader}
    `;
        shader.vertexShader = shader.vertexShader.replace('#include <begin_vertex>', `float theta = sin( time + position.y ) / 2.0 * factor;
        float c = cos( theta );
        float s = sin( theta );
        mat3 m = mat3( c, 0, s, 0, 1, 0, -s, 0, c );
        vec3 transformed = vec3( position ) * m;
        vNormal = vNormal * m;`);
    }
    get time() {
        return this._time.value;
    }
    set time(v) {
        this._time.value = v;
    }
    get factor() {
        return this._factor.value;
    }
    set factor(v) {
        this._factor.value = v;
    }
}
const MeshWobbleMaterial = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ speed = 1, ...props }, ref)=>{
    const [material] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "MeshWobbleMaterial.useState": ()=>new WobbleMaterialImpl()
    }["MeshWobbleMaterial.useState"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__x__as__useFrame$3e$__["useFrame"])({
        "MeshWobbleMaterial.useFrame": (state)=>material && (material.time = state.clock.getElapsedTime() * speed)
    }["MeshWobbleMaterial.useFrame"]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("primitive", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        dispose: undefined,
        object: material,
        ref: ref,
        attach: "material"
    }, props));
});
;
}),
"[project]/apps/frontend/node_modules/@react-three/drei/materials/ConvolutionMaterial.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConvolutionMaterial",
    ()=>ConvolutionMaterial
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
class ConvolutionMaterial extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderMaterial"] {
    constructor(texelSize = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"]()){
        super({
            uniforms: {
                inputBuffer: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Uniform"](null),
                depthBuffer: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Uniform"](null),
                resolution: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Uniform"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"]()),
                texelSize: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Uniform"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"]()),
                halfTexelSize: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Uniform"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"]()),
                kernel: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Uniform"](0.0),
                scale: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Uniform"](1.0),
                cameraNear: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Uniform"](0.0),
                cameraFar: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Uniform"](1.0),
                minDepthThreshold: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Uniform"](0.0),
                maxDepthThreshold: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Uniform"](1.0),
                depthScale: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Uniform"](0.0),
                depthToBlurRatioBias: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Uniform"](0.25)
            },
            fragmentShader: `#include <common>
        #include <dithering_pars_fragment>      
        uniform sampler2D inputBuffer;
        uniform sampler2D depthBuffer;
        uniform float cameraNear;
        uniform float cameraFar;
        uniform float minDepthThreshold;
        uniform float maxDepthThreshold;
        uniform float depthScale;
        uniform float depthToBlurRatioBias;
        varying vec2 vUv;
        varying vec2 vUv0;
        varying vec2 vUv1;
        varying vec2 vUv2;
        varying vec2 vUv3;

        void main() {
          float depthFactor = 0.0;
          
          #ifdef USE_DEPTH
            vec4 depth = texture2D(depthBuffer, vUv);
            depthFactor = smoothstep(minDepthThreshold, maxDepthThreshold, 1.0-(depth.r * depth.a));
            depthFactor *= depthScale;
            depthFactor = max(0.0, min(1.0, depthFactor + 0.25));
          #endif
          
          vec4 sum = texture2D(inputBuffer, mix(vUv0, vUv, depthFactor));
          sum += texture2D(inputBuffer, mix(vUv1, vUv, depthFactor));
          sum += texture2D(inputBuffer, mix(vUv2, vUv, depthFactor));
          sum += texture2D(inputBuffer, mix(vUv3, vUv, depthFactor));
          gl_FragColor = sum * 0.25 ;

          #include <dithering_fragment>
          #include <tonemapping_fragment>
          #include <encodings_fragment>
        }`,
            vertexShader: `uniform vec2 texelSize;
        uniform vec2 halfTexelSize;
        uniform float kernel;
        uniform float scale;
        varying vec2 vUv;
        varying vec2 vUv0;
        varying vec2 vUv1;
        varying vec2 vUv2;
        varying vec2 vUv3;

        void main() {
          vec2 uv = position.xy * 0.5 + 0.5;
          vUv = uv;

          vec2 dUv = (texelSize * vec2(kernel) + halfTexelSize) * scale;
          vUv0 = vec2(uv.x - dUv.x, uv.y + dUv.y);
          vUv1 = vec2(uv.x + dUv.x, uv.y + dUv.y);
          vUv2 = vec2(uv.x + dUv.x, uv.y - dUv.y);
          vUv3 = vec2(uv.x - dUv.x, uv.y - dUv.y);

          gl_Position = vec4(position.xy, 1.0, 1.0);
        }`,
            blending: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NoBlending"],
            depthWrite: false,
            depthTest: false
        });
        this.toneMapped = false;
        this.setTexelSize(texelSize.x, texelSize.y);
        this.kernel = new Float32Array([
            0.0,
            1.0,
            2.0,
            2.0,
            3.0
        ]);
    }
    setTexelSize(x, y) {
        this.uniforms.texelSize.value.set(x, y);
        this.uniforms.halfTexelSize.value.set(x, y).multiplyScalar(0.5);
    }
    setResolution(resolution) {
        this.uniforms.resolution.value.copy(resolution);
    }
}
;
}),
"[project]/apps/frontend/node_modules/@react-three/drei/materials/BlurPass.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BlurPass",
    ()=>BlurPass
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$drei$2f$materials$2f$ConvolutionMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/drei/materials/ConvolutionMaterial.js [app-client] (ecmascript)");
;
;
class BlurPass {
    constructor({ gl, resolution, width = 500, height = 500, minDepthThreshold = 0, maxDepthThreshold = 1, depthScale = 0, depthToBlurRatioBias = 0.25 }){
        this.renderToScreen = false;
        this.renderTargetA = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGLRenderTarget"](resolution, resolution, {
            minFilter: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinearFilter"],
            magFilter: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinearFilter"],
            stencilBuffer: false,
            depthBuffer: false,
            encoding: gl.outputEncoding
        });
        this.renderTargetB = this.renderTargetA.clone();
        this.convolutionMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$drei$2f$materials$2f$ConvolutionMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConvolutionMaterial"]();
        this.convolutionMaterial.setTexelSize(1.0 / width, 1.0 / height);
        this.convolutionMaterial.setResolution(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](width, height));
        this.scene = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scene"]();
        this.camera = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Camera"]();
        this.convolutionMaterial.uniforms.minDepthThreshold.value = minDepthThreshold;
        this.convolutionMaterial.uniforms.maxDepthThreshold.value = maxDepthThreshold;
        this.convolutionMaterial.uniforms.depthScale.value = depthScale;
        this.convolutionMaterial.uniforms.depthToBlurRatioBias.value = depthToBlurRatioBias;
        this.convolutionMaterial.defines.USE_DEPTH = depthScale > 0;
        const vertices = new Float32Array([
            -1,
            -1,
            0,
            3,
            -1,
            0,
            -1,
            3,
            0
        ]);
        const uvs = new Float32Array([
            0,
            0,
            2,
            0,
            0,
            2
        ]);
        const geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferGeometry"]();
        geometry.setAttribute('position', new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferAttribute"](vertices, 3));
        geometry.setAttribute('uv', new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferAttribute"](uvs, 2));
        this.screen = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](geometry, this.convolutionMaterial);
        this.screen.frustumCulled = false;
        this.scene.add(this.screen);
    }
    render(renderer, inputBuffer, outputBuffer) {
        const scene = this.scene;
        const camera = this.camera;
        const renderTargetA = this.renderTargetA;
        const renderTargetB = this.renderTargetB;
        let material = this.convolutionMaterial;
        let uniforms = material.uniforms;
        uniforms.depthBuffer.value = inputBuffer.depthTexture;
        const kernel = material.kernel;
        let lastRT = inputBuffer;
        let destRT;
        let i, l; // Apply the multi-pass blur.
        for(i = 0, l = kernel.length - 1; i < l; ++i){
            // Alternate between targets.
            destRT = (i & 1) === 0 ? renderTargetA : renderTargetB;
            uniforms.kernel.value = kernel[i];
            uniforms.inputBuffer.value = lastRT.texture;
            renderer.setRenderTarget(destRT);
            renderer.render(scene, camera);
            lastRT = destRT;
        }
        uniforms.kernel.value = kernel[i];
        uniforms.inputBuffer.value = lastRT.texture;
        renderer.setRenderTarget(this.renderToScreen ? null : outputBuffer);
        renderer.render(scene, camera);
    }
}
;
}),
"[project]/apps/frontend/node_modules/@react-three/drei/materials/MeshReflectorMaterial.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MeshReflectorMaterial",
    ()=>MeshReflectorMaterial
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
class MeshReflectorMaterial extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"] {
    constructor(parameters = {}){
        super(parameters);
        this._tDepth = {
            value: null
        };
        this._distortionMap = {
            value: null
        };
        this._tDiffuse = {
            value: null
        };
        this._tDiffuseBlur = {
            value: null
        };
        this._textureMatrix = {
            value: null
        };
        this._hasBlur = {
            value: false
        };
        this._mirror = {
            value: 0.0
        };
        this._mixBlur = {
            value: 0.0
        };
        this._blurStrength = {
            value: 0.5
        };
        this._minDepthThreshold = {
            value: 0.9
        };
        this._maxDepthThreshold = {
            value: 1
        };
        this._depthScale = {
            value: 0
        };
        this._depthToBlurRatioBias = {
            value: 0.25
        };
        this._distortion = {
            value: 1
        };
        this._mixContrast = {
            value: 1.0
        };
        this.setValues(parameters);
    }
    onBeforeCompile(shader) {
        var _shader$defines;
        if (!((_shader$defines = shader.defines) != null && _shader$defines.USE_UV)) {
            shader.defines.USE_UV = '';
        }
        shader.uniforms.hasBlur = this._hasBlur;
        shader.uniforms.tDiffuse = this._tDiffuse;
        shader.uniforms.tDepth = this._tDepth;
        shader.uniforms.distortionMap = this._distortionMap;
        shader.uniforms.tDiffuseBlur = this._tDiffuseBlur;
        shader.uniforms.textureMatrix = this._textureMatrix;
        shader.uniforms.mirror = this._mirror;
        shader.uniforms.mixBlur = this._mixBlur;
        shader.uniforms.mixStrength = this._blurStrength;
        shader.uniforms.minDepthThreshold = this._minDepthThreshold;
        shader.uniforms.maxDepthThreshold = this._maxDepthThreshold;
        shader.uniforms.depthScale = this._depthScale;
        shader.uniforms.depthToBlurRatioBias = this._depthToBlurRatioBias;
        shader.uniforms.distortion = this._distortion;
        shader.uniforms.mixContrast = this._mixContrast;
        shader.vertexShader = `
        uniform mat4 textureMatrix;
        varying vec4 my_vUv;
      ${shader.vertexShader}`;
        shader.vertexShader = shader.vertexShader.replace('#include <project_vertex>', `#include <project_vertex>
        my_vUv = textureMatrix * vec4( position, 1.0 );
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );`);
        shader.fragmentShader = `
        uniform sampler2D tDiffuse;
        uniform sampler2D tDiffuseBlur;
        uniform sampler2D tDepth;
        uniform sampler2D distortionMap;
        uniform float distortion;
        uniform float cameraNear;
			  uniform float cameraFar;
        uniform bool hasBlur;
        uniform float mixBlur;
        uniform float mirror;
        uniform float mixStrength;
        uniform float minDepthThreshold;
        uniform float maxDepthThreshold;
        uniform float mixContrast;
        uniform float depthScale;
        uniform float depthToBlurRatioBias;
        varying vec4 my_vUv;
        ${shader.fragmentShader}`;
        shader.fragmentShader = shader.fragmentShader.replace('#include <emissivemap_fragment>', `#include <emissivemap_fragment>

      float distortionFactor = 0.0;
      #ifdef USE_DISTORTION
        distortionFactor = texture2D(distortionMap, vUv).r * distortion;
      #endif

      vec4 new_vUv = my_vUv;
      new_vUv.x += distortionFactor;
      new_vUv.y += distortionFactor;

      vec4 base = texture2DProj(tDiffuse, new_vUv);
      vec4 blur = texture2DProj(tDiffuseBlur, new_vUv);

      vec4 merge = base;

      #ifdef USE_NORMALMAP
        vec2 normal_uv = vec2(0.0);
        vec4 normalColor = texture2D(normalMap, vUv * normalScale);
        vec3 my_normal = normalize( vec3( normalColor.r * 2.0 - 1.0, normalColor.b,  normalColor.g * 2.0 - 1.0 ) );
        vec3 coord = new_vUv.xyz / new_vUv.w;
        normal_uv = coord.xy + coord.z * my_normal.xz * 0.05;
        vec4 base_normal = texture2D(tDiffuse, normal_uv);
        vec4 blur_normal = texture2D(tDiffuseBlur, normal_uv);
        merge = base_normal;
        blur = blur_normal;
      #endif

      float depthFactor = 0.0001;
      float blurFactor = 0.0;

      #ifdef USE_DEPTH
        vec4 depth = texture2DProj(tDepth, new_vUv);
        depthFactor = smoothstep(minDepthThreshold, maxDepthThreshold, 1.0-(depth.r * depth.a));
        depthFactor *= depthScale;
        depthFactor = max(0.0001, min(1.0, depthFactor));

        #ifdef USE_BLUR
          blur = blur * min(1.0, depthFactor + depthToBlurRatioBias);
          merge = merge * min(1.0, depthFactor + 0.5);
        #else
          merge = merge * depthFactor;
        #endif

      #endif

      float reflectorRoughnessFactor = roughness;
      #ifdef USE_ROUGHNESSMAP
        vec4 reflectorTexelRoughness = texture2D( roughnessMap, vUv );
        reflectorRoughnessFactor *= reflectorTexelRoughness.g;
      #endif

      #ifdef USE_BLUR
        blurFactor = min(1.0, mixBlur * reflectorRoughnessFactor);
        merge = mix(merge, blur, blurFactor);
      #endif

      vec4 newMerge = vec4(0.0, 0.0, 0.0, 1.0);
      newMerge.r = (merge.r - 0.5) * mixContrast + 0.5;
      newMerge.g = (merge.g - 0.5) * mixContrast + 0.5;
      newMerge.b = (merge.b - 0.5) * mixContrast + 0.5;

      diffuseColor.rgb = diffuseColor.rgb * ((1.0 - min(1.0, mirror)) + newMerge.rgb * mixStrength);
      `);
    }
    get tDiffuse() {
        return this._tDiffuse.value;
    }
    set tDiffuse(v) {
        this._tDiffuse.value = v;
    }
    get tDepth() {
        return this._tDepth.value;
    }
    set tDepth(v) {
        this._tDepth.value = v;
    }
    get distortionMap() {
        return this._distortionMap.value;
    }
    set distortionMap(v) {
        this._distortionMap.value = v;
    }
    get tDiffuseBlur() {
        return this._tDiffuseBlur.value;
    }
    set tDiffuseBlur(v) {
        this._tDiffuseBlur.value = v;
    }
    get textureMatrix() {
        return this._textureMatrix.value;
    }
    set textureMatrix(v) {
        this._textureMatrix.value = v;
    }
    get hasBlur() {
        return this._hasBlur.value;
    }
    set hasBlur(v) {
        this._hasBlur.value = v;
    }
    get mirror() {
        return this._mirror.value;
    }
    set mirror(v) {
        this._mirror.value = v;
    }
    get mixBlur() {
        return this._mixBlur.value;
    }
    set mixBlur(v) {
        this._mixBlur.value = v;
    }
    get mixStrength() {
        return this._blurStrength.value;
    }
    set mixStrength(v) {
        this._blurStrength.value = v;
    }
    get minDepthThreshold() {
        return this._minDepthThreshold.value;
    }
    set minDepthThreshold(v) {
        this._minDepthThreshold.value = v;
    }
    get maxDepthThreshold() {
        return this._maxDepthThreshold.value;
    }
    set maxDepthThreshold(v) {
        this._maxDepthThreshold.value = v;
    }
    get depthScale() {
        return this._depthScale.value;
    }
    set depthScale(v) {
        this._depthScale.value = v;
    }
    get depthToBlurRatioBias() {
        return this._depthToBlurRatioBias.value;
    }
    set depthToBlurRatioBias(v) {
        this._depthToBlurRatioBias.value = v;
    }
    get distortion() {
        return this._distortion.value;
    }
    set distortion(v) {
        this._distortion.value = v;
    }
    get mixContrast() {
        return this._mixContrast.value;
    }
    set mixContrast(v) {
        this._mixContrast.value = v;
    }
}
;
}),
"[project]/apps/frontend/node_modules/@react-three/drei/core/MeshReflectorMaterial.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MeshReflectorMaterial",
    ()=>MeshReflectorMaterial
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__extend$3e$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/fiber/dist/index-4f1a8e2f.esm.js [app-client] (ecmascript) <export e as extend>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/fiber/dist/index-4f1a8e2f.esm.js [app-client] (ecmascript) <export w as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__x__as__useFrame$3e$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/fiber/dist/index-4f1a8e2f.esm.js [app-client] (ecmascript) <export x as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$merge$2d$refs$2f$dist$2f$react$2d$merge$2d$refs$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-merge-refs/dist/react-merge-refs.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$drei$2f$materials$2f$BlurPass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/drei/materials/BlurPass.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$drei$2f$materials$2f$MeshReflectorMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/drei/materials/MeshReflectorMaterial.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__extend$3e$__["extend"])({
    MeshReflectorMaterialImpl: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$drei$2f$materials$2f$MeshReflectorMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshReflectorMaterial"]
});
const MeshReflectorMaterial = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ mixBlur = 0, mixStrength = 1, resolution = 256, blur = [
    0,
    0
], minDepthThreshold = 0.9, maxDepthThreshold = 1, depthScale = 0, depthToBlurRatioBias = 0.25, mirror = 0, distortion = 1, mixContrast = 1, distortionMap, reflectorOffset = 0, ...props }, ref)=>{
    const gl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__["useThree"])({
        "MeshReflectorMaterial.useThree[gl]": ({ gl })=>gl
    }["MeshReflectorMaterial.useThree[gl]"]);
    const camera = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__["useThree"])({
        "MeshReflectorMaterial.useThree[camera]": ({ camera })=>camera
    }["MeshReflectorMaterial.useThree[camera]"]);
    const scene = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__["useThree"])({
        "MeshReflectorMaterial.useThree[scene]": ({ scene })=>scene
    }["MeshReflectorMaterial.useThree[scene]"]);
    blur = Array.isArray(blur) ? blur : [
        blur,
        blur
    ];
    const hasBlur = blur[0] + blur[1] > 0;
    const materialRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const [reflectorPlane] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "MeshReflectorMaterial.useState": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Plane"]()
    }["MeshReflectorMaterial.useState"]);
    const [normal] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "MeshReflectorMaterial.useState": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]()
    }["MeshReflectorMaterial.useState"]);
    const [reflectorWorldPosition] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "MeshReflectorMaterial.useState": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]()
    }["MeshReflectorMaterial.useState"]);
    const [cameraWorldPosition] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "MeshReflectorMaterial.useState": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]()
    }["MeshReflectorMaterial.useState"]);
    const [rotationMatrix] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "MeshReflectorMaterial.useState": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix4"]()
    }["MeshReflectorMaterial.useState"]);
    const [lookAtPosition] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "MeshReflectorMaterial.useState": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, -1)
    }["MeshReflectorMaterial.useState"]);
    const [clipPlane] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "MeshReflectorMaterial.useState": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector4"]()
    }["MeshReflectorMaterial.useState"]);
    const [view] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "MeshReflectorMaterial.useState": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]()
    }["MeshReflectorMaterial.useState"]);
    const [target] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "MeshReflectorMaterial.useState": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]()
    }["MeshReflectorMaterial.useState"]);
    const [q] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "MeshReflectorMaterial.useState": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector4"]()
    }["MeshReflectorMaterial.useState"]);
    const [textureMatrix] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "MeshReflectorMaterial.useState": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix4"]()
    }["MeshReflectorMaterial.useState"]);
    const [virtualCamera] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "MeshReflectorMaterial.useState": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PerspectiveCamera"]()
    }["MeshReflectorMaterial.useState"]);
    const beforeRender = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "MeshReflectorMaterial.useCallback[beforeRender]": ()=>{
            var _materialRef$current;
            // TODO: As of R3f 7-8 this should be __r3f.parent
            const parent = materialRef.current.parent || ((_materialRef$current = materialRef.current) == null ? void 0 : _materialRef$current.__r3f.parent);
            if (!parent) return;
            reflectorWorldPosition.setFromMatrixPosition(parent.matrixWorld);
            cameraWorldPosition.setFromMatrixPosition(camera.matrixWorld);
            rotationMatrix.extractRotation(parent.matrixWorld);
            normal.set(0, 0, 1);
            normal.applyMatrix4(rotationMatrix);
            reflectorWorldPosition.addScaledVector(normal, reflectorOffset);
            view.subVectors(reflectorWorldPosition, cameraWorldPosition); // Avoid rendering when reflector is facing away
            if (view.dot(normal) > 0) return;
            view.reflect(normal).negate();
            view.add(reflectorWorldPosition);
            rotationMatrix.extractRotation(camera.matrixWorld);
            lookAtPosition.set(0, 0, -1);
            lookAtPosition.applyMatrix4(rotationMatrix);
            lookAtPosition.add(cameraWorldPosition);
            target.subVectors(reflectorWorldPosition, lookAtPosition);
            target.reflect(normal).negate();
            target.add(reflectorWorldPosition);
            virtualCamera.position.copy(view);
            virtualCamera.up.set(0, 1, 0);
            virtualCamera.up.applyMatrix4(rotationMatrix);
            virtualCamera.up.reflect(normal);
            virtualCamera.lookAt(target);
            virtualCamera.far = camera.far; // Used in WebGLBackground
            virtualCamera.updateMatrixWorld();
            virtualCamera.projectionMatrix.copy(camera.projectionMatrix); // Update the texture matrix
            textureMatrix.set(0.5, 0.0, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.0, 0.5, 0.5, 0.0, 0.0, 0.0, 1.0);
            textureMatrix.multiply(virtualCamera.projectionMatrix);
            textureMatrix.multiply(virtualCamera.matrixWorldInverse);
            textureMatrix.multiply(parent.matrixWorld); // Now update projection matrix with new clip plane, implementing code from: http://www.terathon.com/code/oblique.html
            // Paper explaining this technique: http://www.terathon.com/lengyel/Lengyel-Oblique.pdf
            reflectorPlane.setFromNormalAndCoplanarPoint(normal, reflectorWorldPosition);
            reflectorPlane.applyMatrix4(virtualCamera.matrixWorldInverse);
            clipPlane.set(reflectorPlane.normal.x, reflectorPlane.normal.y, reflectorPlane.normal.z, reflectorPlane.constant);
            const projectionMatrix = virtualCamera.projectionMatrix;
            q.x = (Math.sign(clipPlane.x) + projectionMatrix.elements[8]) / projectionMatrix.elements[0];
            q.y = (Math.sign(clipPlane.y) + projectionMatrix.elements[9]) / projectionMatrix.elements[5];
            q.z = -1.0;
            q.w = (1.0 + projectionMatrix.elements[10]) / projectionMatrix.elements[14]; // Calculate the scaled plane vector
            clipPlane.multiplyScalar(2.0 / clipPlane.dot(q)); // Replacing the third row of the projection matrix
            projectionMatrix.elements[2] = clipPlane.x;
            projectionMatrix.elements[6] = clipPlane.y;
            projectionMatrix.elements[10] = clipPlane.z + 1.0;
            projectionMatrix.elements[14] = clipPlane.w;
        }
    }["MeshReflectorMaterial.useCallback[beforeRender]"], [
        camera,
        reflectorOffset
    ]);
    const [fbo1, fbo2, blurpass, reflectorProps] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "MeshReflectorMaterial.useMemo": ()=>{
            const parameters = {
                minFilter: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinearFilter"],
                magFilter: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinearFilter"],
                encoding: gl.outputEncoding,
                type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HalfFloatType"]
            };
            const fbo1 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGLRenderTarget"](resolution, resolution, parameters);
            fbo1.depthBuffer = true;
            fbo1.depthTexture = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DepthTexture"](resolution, resolution);
            fbo1.depthTexture.format = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DepthFormat"];
            fbo1.depthTexture.type = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnsignedShortType"];
            const fbo2 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGLRenderTarget"](resolution, resolution, parameters);
            const blurpass = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$drei$2f$materials$2f$BlurPass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BlurPass"]({
                gl,
                resolution,
                width: blur[0],
                height: blur[1],
                minDepthThreshold,
                maxDepthThreshold,
                depthScale,
                depthToBlurRatioBias
            });
            const reflectorProps = {
                mirror,
                textureMatrix,
                mixBlur,
                tDiffuse: fbo1.texture,
                tDepth: fbo1.depthTexture,
                tDiffuseBlur: fbo2.texture,
                hasBlur,
                mixStrength,
                minDepthThreshold,
                maxDepthThreshold,
                depthScale,
                depthToBlurRatioBias,
                transparent: true,
                distortion,
                distortionMap,
                mixContrast,
                'defines-USE_BLUR': hasBlur ? '' : undefined,
                'defines-USE_DEPTH': depthScale > 0 ? '' : undefined,
                'defines-USE_DISTORTION': distortionMap ? '' : undefined
            };
            return [
                fbo1,
                fbo2,
                blurpass,
                reflectorProps
            ];
        }
    }["MeshReflectorMaterial.useMemo"], [
        gl,
        blur,
        textureMatrix,
        resolution,
        mirror,
        hasBlur,
        mixBlur,
        mixStrength,
        minDepthThreshold,
        maxDepthThreshold,
        depthScale,
        depthToBlurRatioBias,
        distortion,
        distortionMap,
        mixContrast
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__x__as__useFrame$3e$__["useFrame"])({
        "MeshReflectorMaterial.useFrame": ()=>{
            var _materialRef$current2;
            // TODO: As of R3f 7-8 this should be __r3f.parent
            const parent = materialRef.current.parent || ((_materialRef$current2 = materialRef.current) == null ? void 0 : _materialRef$current2.__r3f.parent);
            if (!parent) return;
            parent.visible = false;
            const currentXrEnabled = gl.xr.enabled;
            const currentShadowAutoUpdate = gl.shadowMap.autoUpdate;
            beforeRender();
            gl.xr.enabled = false;
            gl.shadowMap.autoUpdate = false;
            gl.setRenderTarget(fbo1);
            gl.state.buffers.depth.setMask(true);
            if (!gl.autoClear) gl.clear();
            gl.render(scene, virtualCamera);
            if (hasBlur) blurpass.render(gl, fbo1, fbo2);
            gl.xr.enabled = currentXrEnabled;
            gl.shadowMap.autoUpdate = currentShadowAutoUpdate;
            parent.visible = true;
            gl.setRenderTarget(null);
        }
    }["MeshReflectorMaterial.useFrame"]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("meshReflectorMaterialImpl", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        attach: "material" // Defines can't be updated dynamically, so we need to recreate the material
        ,
        key: 'key' + reflectorProps['defines-USE_BLUR'] + reflectorProps['defines-USE_DEPTH'] + reflectorProps['defines-USE_DISTORTION'],
        ref: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$merge$2d$refs$2f$dist$2f$react$2d$merge$2d$refs$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])([
            materialRef,
            ref
        ])
    }, reflectorProps, props));
});
;
}),
"[project]/apps/frontend/node_modules/@react-three/drei/core/PointMaterial.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PointMaterial",
    ()=>PointMaterial,
    "PointMaterialImpl",
    ()=>PointMaterialImpl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
;
class PointMaterialImpl extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointsMaterial"] {
    constructor(props){
        super(props);
        this.onBeforeCompile = (shader)=>{
            shader.fragmentShader = shader.fragmentShader.replace('#include <output_fragment>', `
        #include <output_fragment>
      vec2 cxy = 2.0 * gl_PointCoord - 1.0;
      float r = dot(cxy, cxy);
      float delta = fwidth(r);     
      float mask = 1.0 - smoothstep(1.0 - delta, 1.0 + delta, r);
      gl_FragColor = vec4(gl_FragColor.rgb, mask * gl_FragColor.a );
      `);
        };
    }
}
const PointMaterial = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>{
    const [material] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "PointMaterial.useState": ()=>new PointMaterialImpl(null)
    }["PointMaterial.useState"]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("primitive", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, props, {
        object: material,
        ref: ref,
        attach: "material"
    }));
});
;
}),
"[project]/apps/frontend/node_modules/@react-three/drei/core/RoundedBox.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RoundedBox",
    ()=>RoundedBox
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
;
;
const eps = 0.00001;
function createShape(width, height, radius0) {
    const shape = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Shape"]();
    const radius = radius0 - eps;
    shape.absarc(eps, eps, eps, -Math.PI / 2, -Math.PI, true);
    shape.absarc(eps, height - radius * 2, eps, Math.PI, Math.PI / 2, true);
    shape.absarc(width - radius * 2, height - radius * 2, eps, Math.PI / 2, 0, true);
    shape.absarc(width - radius * 2, eps, eps, 0, -Math.PI / 2, true);
    return shape;
}
const RoundedBox = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function RoundedBox({ args: [width = 1, height = 1, depth = 1] = [], radius = 0.05, steps = 1, smoothness = 4, children, ...rest }, ref) {
    const shape = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "RoundedBox.RoundedBox.useMemo[shape]": ()=>createShape(width, height, radius)
    }["RoundedBox.RoundedBox.useMemo[shape]"], [
        width,
        height,
        radius
    ]);
    const params = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "RoundedBox.RoundedBox.useMemo[params]": ()=>({
                depth: depth - radius * 2,
                bevelEnabled: true,
                bevelSegments: smoothness * 2,
                steps,
                bevelSize: radius - eps,
                bevelThickness: radius,
                curveSegments: smoothness
            })
    }["RoundedBox.RoundedBox.useMemo[params]"], [
        depth,
        radius,
        smoothness
    ]);
    const geomRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"]();
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"]({
        "RoundedBox.RoundedBox.useLayoutEffect": ()=>{
            if (geomRef.current) {
                geomRef.current.center();
            }
        }
    }["RoundedBox.RoundedBox.useLayoutEffect"], [
        shape,
        params
    ]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("mesh", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        ref: ref
    }, rest), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("extrudeBufferGeometry", {
        attach: "geometry",
        ref: geomRef,
        args: [
            shape,
            params
        ]
    }), children);
});
;
}),
"[project]/apps/frontend/node_modules/@react-three/drei/core/Center.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Center",
    ()=>Center
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
;
const Center = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function Center({ children, alignTop, ...props }, ref) {
    const outer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const inner = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"]({
        "Center.Center.useLayoutEffect": ()=>{
            outer.current.position.set(0, 0, 0);
            outer.current.updateWorldMatrix(true, true);
            const box3 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box3"]().setFromObject(inner.current);
            const center = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
            const sphere = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sphere"]();
            const height = box3.max.y - box3.min.y;
            box3.getCenter(center);
            box3.getBoundingSphere(sphere);
            outer.current.position.set(-center.x, -center.y + (alignTop ? height / 2 : 0), -center.z);
        }
    }["Center.Center.useLayoutEffect"], [
        children
    ]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("group", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        ref: ref
    }, props), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("group", {
        ref: outer
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("group", {
        ref: inner
    }, children)));
});
;
}),
"[project]/apps/frontend/node_modules/@react-three/drei/core/Bounds.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Bounds",
    ()=>Bounds,
    "useBounds",
    ()=>useBounds
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/fiber/dist/index-4f1a8e2f.esm.js [app-client] (ecmascript) <export w as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__x__as__useFrame$3e$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/fiber/dist/index-4f1a8e2f.esm.js [app-client] (ecmascript) <export x as useFrame>");
;
;
;
const isOrthographic = (def)=>def && def.isOrthographicCamera;
const isBox3 = (def)=>def && def.isBox3;
const context = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](null);
function Bounds({ children, damping = 6, fit, clip, observe, margin = 1.2, eps = 0.01, onFit }) {
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const { camera, invalidate, size, controls: controlsImpl } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__["useThree"])();
    const controls = controlsImpl;
    const onFitRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](onFit);
    onFitRef.current = onFit;
    function equals(a, b) {
        return Math.abs(a.x - b.x) < eps && Math.abs(a.y - b.y) < eps && Math.abs(a.z - b.z) < eps;
    }
    function damp(v, t, lambda, delta) {
        v.x = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].damp(v.x, t.x, lambda, delta);
        v.y = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].damp(v.y, t.y, lambda, delta);
        v.z = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].damp(v.z, t.z, lambda, delta);
    }
    const [current] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "Bounds.useState": ()=>({
                animating: false,
                focus: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](),
                camera: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](),
                zoom: 1
            })
    }["Bounds.useState"]);
    const [goal] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "Bounds.useState": ()=>({
                focus: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](),
                camera: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](),
                zoom: 1
            })
    }["Bounds.useState"]);
    const [box] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "Bounds.useState": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box3"]()
    }["Bounds.useState"]);
    const api = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Bounds.useMemo[api]": ()=>{
            function getSize() {
                const size = box.getSize(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]());
                const center = box.getCenter(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]());
                const maxSize = Math.max(size.x, size.y, size.z);
                const fitHeightDistance = isOrthographic(camera) ? maxSize * 4 : maxSize / (2 * Math.atan(Math.PI * camera.fov / 360));
                const fitWidthDistance = isOrthographic(camera) ? maxSize * 4 : fitHeightDistance / camera.aspect;
                const distance = margin * Math.max(fitHeightDistance, fitWidthDistance);
                return {
                    box,
                    size,
                    center,
                    distance
                };
            }
            return {
                getSize,
                refresh (object) {
                    if (isBox3(object)) box.copy(object);
                    else {
                        const target = object || ref.current;
                        target.updateWorldMatrix(true, true);
                        box.setFromObject(target);
                    }
                    if (box.isEmpty()) {
                        const max = camera.position.length() || 10;
                        box.setFromCenterAndSize(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](max, max, max));
                    }
                    if ((controls == null ? void 0 : controls.constructor.name) === 'OrthographicTrackballControls') {
                        // Put camera on a sphere along which it should moves
                        const { distance } = getSize();
                        const direction = camera.position.clone().sub(controls.target).normalize().multiplyScalar(distance);
                        const newPos = controls.target.clone().add(direction);
                        camera.position.copy(newPos);
                    }
                    return this;
                },
                clip () {
                    const { distance } = getSize();
                    if (controls) controls.maxDistance = distance * 10;
                    camera.near = distance / 100;
                    camera.far = distance * 100;
                    camera.updateProjectionMatrix();
                    if (controls) controls.update();
                    invalidate();
                    return this;
                },
                fit () {
                    current.camera.copy(camera.position);
                    if (controls) current.focus.copy(controls.target);
                    const { center, distance } = getSize();
                    const direction = center.clone().sub(camera.position).normalize().multiplyScalar(distance);
                    goal.camera.copy(center).sub(direction);
                    goal.focus.copy(center);
                    if (isOrthographic(camera)) {
                        current.zoom = camera.zoom;
                        let maxHeight = 0, maxWidth = 0;
                        const vertices = [
                            new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](box.min.x, box.min.y, box.min.z),
                            new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](box.min.x, box.max.y, box.min.z),
                            new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](box.min.x, box.min.y, box.max.z),
                            new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](box.min.x, box.max.y, box.max.z),
                            new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](box.max.x, box.max.y, box.max.z),
                            new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](box.max.x, box.max.y, box.min.z),
                            new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](box.max.x, box.min.y, box.max.z),
                            new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](box.max.x, box.min.y, box.min.z)
                        ]; // Transform the center and each corner to camera space
                        center.applyMatrix4(camera.matrixWorldInverse);
                        for (const v of vertices){
                            v.applyMatrix4(camera.matrixWorldInverse);
                            maxHeight = Math.max(maxHeight, Math.abs(v.y - center.y));
                            maxWidth = Math.max(maxWidth, Math.abs(v.x - center.x));
                        }
                        maxHeight *= 2;
                        maxWidth *= 2;
                        const zoomForHeight = (camera.top - camera.bottom) / maxHeight;
                        const zoomForWidth = (camera.right - camera.left) / maxWidth;
                        goal.zoom = Math.min(zoomForHeight, zoomForWidth) / margin;
                        if (!damping) {
                            camera.zoom = goal.zoom;
                            camera.updateProjectionMatrix();
                        }
                    }
                    if (damping) {
                        current.animating = true;
                    } else {
                        camera.position.copy(goal.camera);
                        camera.lookAt(goal.focus);
                        if (controls) {
                            controls.target.copy(goal.focus);
                            controls.update();
                        }
                    }
                    if (onFitRef.current) onFitRef.current(this.getSize());
                    invalidate();
                    return this;
                }
            };
        }
    }["Bounds.useMemo[api]"], [
        box,
        camera,
        controls,
        margin,
        damping,
        invalidate
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"]({
        "Bounds.useLayoutEffect": ()=>{
            if (controls) {
                // Try to prevent drag hijacking
                const callback = {
                    "Bounds.useLayoutEffect.callback": ()=>current.animating = false
                }["Bounds.useLayoutEffect.callback"];
                controls.addEventListener('start', callback);
                return ({
                    "Bounds.useLayoutEffect": ()=>controls.removeEventListener('start', callback)
                })["Bounds.useLayoutEffect"];
            }
        }
    }["Bounds.useLayoutEffect"], [
        controls
    ]); // Scale pointer on window resize
    const count = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](0);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"]({
        "Bounds.useLayoutEffect": ()=>{
            if (observe || count.current++ === 0) {
                api.refresh();
                if (fit) api.fit();
                if (clip) api.clip();
            }
        }
    }["Bounds.useLayoutEffect"], [
        size,
        clip,
        fit,
        observe
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__x__as__useFrame$3e$__["useFrame"])({
        "Bounds.useFrame": (state, delta)=>{
            if (current.animating) {
                damp(current.focus, goal.focus, damping, delta);
                damp(current.camera, goal.camera, damping, delta);
                current.zoom = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].damp(current.zoom, goal.zoom, damping, delta);
                camera.position.copy(current.camera);
                if (isOrthographic(camera)) {
                    camera.zoom = current.zoom;
                    camera.updateProjectionMatrix();
                }
                if (!controls) {
                    camera.lookAt(current.focus);
                } else {
                    controls.target.copy(current.focus);
                    controls.update();
                }
                invalidate();
                if (isOrthographic(camera) && !(Math.abs(current.zoom - goal.zoom) < eps)) return;
                if (!isOrthographic(camera) && !equals(current.camera, goal.camera)) return;
                if (controls && !equals(current.focus, goal.focus)) return;
                current.animating = false;
            }
        }
    }["Bounds.useFrame"]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("group", {
        ref: ref
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](context.Provider, {
        value: api
    }, children));
}
function useBounds() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](context);
}
;
}),
"[project]/apps/frontend/node_modules/@react-three/drei/core/CameraShake.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CameraShake",
    ()=>CameraShake
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/fiber/dist/index-4f1a8e2f.esm.js [app-client] (ecmascript) <export w as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__x__as__useFrame$3e$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/fiber/dist/index-4f1a8e2f.esm.js [app-client] (ecmascript) <export x as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2d$stdlib$2f$math$2f$SimplexNoise$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three-stdlib/math/SimplexNoise.js [app-client] (ecmascript)");
;
;
;
const CameraShake = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ intensity = 1, decay, decayRate = 0.65, maxYaw = 0.1, maxPitch = 0.1, maxRoll = 0.1, yawFrequency = 0.1, pitchFrequency = 0.1, rollFrequency = 0.1, controls }, ref)=>{
    const camera = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__["useThree"])({
        "CameraShake.useThree[camera]": (state)=>state.camera
    }["CameraShake.useThree[camera]"]); // @ts-expect-error new in @react-three/fiber@7.0.5
    const defaultControls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__["useThree"])({
        "CameraShake.useThree[defaultControls]": (state)=>state.controls
    }["CameraShake.useThree[defaultControls]"]);
    const intensityRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](intensity);
    const initialRotation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](camera.rotation.clone());
    const [yawNoise] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "CameraShake.useState": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2d$stdlib$2f$math$2f$SimplexNoise$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SimplexNoise"]()
    }["CameraShake.useState"]);
    const [pitchNoise] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "CameraShake.useState": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2d$stdlib$2f$math$2f$SimplexNoise$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SimplexNoise"]()
    }["CameraShake.useState"]);
    const [rollNoise] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "CameraShake.useState": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2d$stdlib$2f$math$2f$SimplexNoise$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SimplexNoise"]()
    }["CameraShake.useState"]);
    const constrainIntensity = ()=>{
        if (intensityRef.current < 0 || intensityRef.current > 1) {
            intensityRef.current = intensityRef.current < 0 ? 0 : 1;
        }
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"](ref, {
        "CameraShake.useImperativeHandle": ()=>({
                getIntensity: ({
                    "CameraShake.useImperativeHandle": ()=>intensityRef.current
                })["CameraShake.useImperativeHandle"],
                setIntensity: ({
                    "CameraShake.useImperativeHandle": (val)=>{
                        intensityRef.current = val;
                        constrainIntensity();
                    }
                })["CameraShake.useImperativeHandle"]
            })
    }["CameraShake.useImperativeHandle"], []);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "CameraShake.useEffect": ()=>{
            const currControls = defaultControls || (controls == null ? void 0 : controls.current);
            const callback = {
                "CameraShake.useEffect.callback": ()=>void (initialRotation.current = camera.rotation.clone())
            }["CameraShake.useEffect.callback"];
            currControls == null ? void 0 : currControls.addEventListener('change', callback);
            return ({
                "CameraShake.useEffect": ()=>void (currControls == null ? void 0 : currControls.removeEventListener('change', callback))
            })["CameraShake.useEffect"];
        }
    }["CameraShake.useEffect"], [
        controls,
        defaultControls
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__x__as__useFrame$3e$__["useFrame"])({
        "CameraShake.useFrame": ({ clock }, delta)=>{
            const shake = Math.pow(intensityRef.current, 2);
            const yaw = maxYaw * shake * yawNoise.noise(clock.elapsedTime * yawFrequency, 1);
            const pitch = maxPitch * shake * pitchNoise.noise(clock.elapsedTime * pitchFrequency, 1);
            const roll = maxRoll * shake * rollNoise.noise(clock.elapsedTime * rollFrequency, 1);
            camera.rotation.set(initialRotation.current.x + pitch, initialRotation.current.y + yaw, initialRotation.current.z + roll);
            if (decay && intensityRef.current > 0) {
                intensityRef.current -= decayRate * delta;
                constrainIntensity();
            }
        }
    }["CameraShake.useFrame"]);
    return null;
});
;
}),
"[project]/apps/frontend/node_modules/@react-three/drei/core/Float.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Float",
    ()=>Float
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__x__as__useFrame$3e$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/fiber/dist/index-4f1a8e2f.esm.js [app-client] (ecmascript) <export x as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$merge$2d$refs$2f$dist$2f$react$2d$merge$2d$refs$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-merge-refs/dist/react-merge-refs.esm.js [app-client] (ecmascript)");
;
;
;
const Float = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ children, speed = 1, rotationIntensity = 1, floatIntensity = 1, ...props }, forwardRef)=>{
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const offset = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](Math.random() * 10000);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__x__as__useFrame$3e$__["useFrame"])({
        "Float.useFrame": (state)=>{
            const t = offset.current + state.clock.getElapsedTime();
            ref.current.rotation.x = Math.cos(t / 4 * speed) / 8 * rotationIntensity;
            ref.current.rotation.y = Math.sin(t / 4 * speed) / 8 * rotationIntensity;
            ref.current.rotation.z = Math.sin(t / 4 * speed) / 20 * rotationIntensity;
            ref.current.position.y = Math.sin(t / 4 * speed) / 10 * floatIntensity;
        }
    }["Float.useFrame"]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("group", props, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("group", {
        ref: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$merge$2d$refs$2f$dist$2f$react$2d$merge$2d$refs$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])([
            ref,
            forwardRef
        ])
    }, children));
});
;
}),
"[project]/apps/frontend/node_modules/@react-three/drei/core/Backdrop.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Backdrop",
    ()=>Backdrop
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const easeInExpo = (x)=>x === 0 ? 0 : Math.pow(2, 10 * x - 10);
function Backdrop({ children, floor = 0.25, segments = 20, receiveShadow, ...props }) {
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"]({
        "Backdrop.useLayoutEffect": ()=>{
            let i = 0;
            const offset = segments / segments / 2;
            const position = ref.current.attributes.position;
            for(let x = 0; x < segments + 1; x++){
                for(let y = 0; y < segments + 1; y++){
                    position.setXYZ(i++, x / segments - offset + (x === 0 ? -floor : 0), y / segments - offset, easeInExpo(x / segments));
                }
            }
            position.needsUpdate = true;
            ref.current.computeVertexNormals();
        }
    }["Backdrop.useLayoutEffect"], [
        segments,
        floor
    ]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("group", props, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("mesh", {
        receiveShadow: receiveShadow,
        rotation: [
            -Math.PI / 2,
            0,
            Math.PI / 2
        ]
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("planeGeometry", {
        ref: ref,
        args: [
            1,
            1,
            segments,
            segments
        ]
    }), children));
}
;
}),
"[project]/apps/frontend/node_modules/@react-three/drei/core/ContactShadows.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContactShadows",
    ()=>ContactShadows
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.module.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/fiber/dist/index-4f1a8e2f.esm.js [app-client] (ecmascript) <export w as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__x__as__useFrame$3e$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/fiber/dist/index-4f1a8e2f.esm.js [app-client] (ecmascript) <export x as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2d$stdlib$2f$shaders$2f$HorizontalBlurShader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three-stdlib/shaders/HorizontalBlurShader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2d$stdlib$2f$shaders$2f$VerticalBlurShader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three-stdlib/shaders/VerticalBlurShader.js [app-client] (ecmascript)");
;
;
;
;
;
const ContactShadows = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ scale, frames = Infinity, opacity = 1, width = 1, height = 1, blur = 1, far = 10, resolution = 256, smooth = true, color = '#000000', ...props }, ref)=>{
    const scene = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__["useThree"])({
        "ContactShadows.useThree[scene]": ({ scene })=>scene
    }["ContactShadows.useThree[scene]"]);
    const gl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__["useThree"])({
        "ContactShadows.useThree[gl]": ({ gl })=>gl
    }["ContactShadows.useThree[gl]"]);
    const shadowCamera = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    width = width * (Array.isArray(scale) ? scale[0] : scale || 1);
    height = height * (Array.isArray(scale) ? scale[1] : scale || 1);
    const [renderTarget, planeGeometry, depthMaterial, blurPlane, horizontalBlurMaterial, verticalBlurMaterial, renderTargetBlur] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "ContactShadows.useMemo": ()=>{
            const renderTarget = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGLRenderTarget"](resolution, resolution);
            const renderTargetBlur = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGLRenderTarget"](resolution, resolution);
            renderTargetBlur.texture.generateMipmaps = renderTarget.texture.generateMipmaps = false;
            const planeGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlaneBufferGeometry"](width, height).rotateX(Math.PI / 2);
            const blurPlane = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](planeGeometry);
            const depthMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshDepthMaterial"]();
            depthMaterial.depthTest = depthMaterial.depthWrite = false;
            depthMaterial.onBeforeCompile = ({
                "ContactShadows.useMemo": (shader)=>{
                    shader.uniforms = {
                        ...shader.uniforms,
                        ucolor: {
                            value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](color).convertSRGBToLinear()
                        }
                    };
                    shader.fragmentShader = shader.fragmentShader.replace(`void main() {`, `uniform vec3 ucolor;
           void main() {
          `);
                    shader.fragmentShader = shader.fragmentShader.replace('vec4( vec3( 1.0 - fragCoordZ ), opacity );', 'vec4( ucolor, ( 1.0 - fragCoordZ ) * 1.0 );');
                }
            })["ContactShadows.useMemo"];
            const horizontalBlurMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderMaterial"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2d$stdlib$2f$shaders$2f$HorizontalBlurShader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HorizontalBlurShader"]);
            const verticalBlurMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderMaterial"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2d$stdlib$2f$shaders$2f$VerticalBlurShader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VerticalBlurShader"]);
            verticalBlurMaterial.depthTest = horizontalBlurMaterial.depthTest = false;
            return [
                renderTarget,
                planeGeometry,
                depthMaterial,
                blurPlane,
                horizontalBlurMaterial,
                verticalBlurMaterial,
                renderTargetBlur
            ];
        }
    }["ContactShadows.useMemo"], [
        resolution,
        width,
        height,
        scale
    ]);
    const blurShadows = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "ContactShadows.useCallback[blurShadows]": (blur)=>{
            blurPlane.visible = true;
            blurPlane.material = horizontalBlurMaterial;
            horizontalBlurMaterial.uniforms.tDiffuse.value = renderTarget.texture;
            horizontalBlurMaterial.uniforms.h.value = blur * 1 / 256;
            gl.setRenderTarget(renderTargetBlur);
            gl.render(blurPlane, shadowCamera.current);
            blurPlane.material = verticalBlurMaterial;
            verticalBlurMaterial.uniforms.tDiffuse.value = renderTargetBlur.texture;
            verticalBlurMaterial.uniforms.v.value = blur * 1 / 256;
            gl.setRenderTarget(renderTarget);
            gl.render(blurPlane, shadowCamera.current);
            blurPlane.visible = false;
        }
    }["ContactShadows.useCallback[blurShadows]"], []);
    let count = 0;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__x__as__useFrame$3e$__["useFrame"])({
        "ContactShadows.useFrame": ()=>{
            if (shadowCamera.current && (frames === Infinity || count < frames)) {
                const initialBackground = scene.background;
                scene.background = null;
                const initialOverrideMaterial = scene.overrideMaterial;
                scene.overrideMaterial = depthMaterial;
                gl.setRenderTarget(renderTarget);
                gl.render(scene, shadowCamera.current);
                scene.overrideMaterial = initialOverrideMaterial;
                blurShadows(blur);
                if (smooth) blurShadows(blur * 0.4);
                gl.setRenderTarget(null);
                scene.background = initialBackground;
                count++;
            }
        }
    }["ContactShadows.useFrame"]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("group", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        "rotation-x": Math.PI / 2
    }, props, {
        ref: ref
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("mesh", {
        geometry: planeGeometry,
        scale: [
            1,
            -1,
            1
        ],
        rotation: [
            -Math.PI / 2,
            0,
            0
        ]
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("meshBasicMaterial", {
        map: renderTarget.texture,
        transparent: true,
        opacity: opacity
    })), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("orthographicCamera", {
        ref: shadowCamera,
        args: [
            -width / 2,
            width / 2,
            height / 2,
            -height / 2,
            0,
            far
        ]
    }));
});
;
}),
"[project]/apps/frontend/node_modules/@react-three/drei/core/Reflector.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Reflector",
    ()=>Reflector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__extend$3e$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/fiber/dist/index-4f1a8e2f.esm.js [app-client] (ecmascript) <export e as extend>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/fiber/dist/index-4f1a8e2f.esm.js [app-client] (ecmascript) <export w as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__x__as__useFrame$3e$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/fiber/dist/index-4f1a8e2f.esm.js [app-client] (ecmascript) <export x as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$merge$2d$refs$2f$dist$2f$react$2d$merge$2d$refs$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-merge-refs/dist/react-merge-refs.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$drei$2f$materials$2f$BlurPass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/drei/materials/BlurPass.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$drei$2f$materials$2f$MeshReflectorMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/drei/materials/MeshReflectorMaterial.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__extend$3e$__["extend"])({
    MeshReflectorMaterial: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$drei$2f$materials$2f$MeshReflectorMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshReflectorMaterial"]
});
const Reflector = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ mixBlur = 0, mixStrength = 0.5, resolution = 256, blur = [
    0,
    0
], args = [
    1,
    1
], minDepthThreshold = 0.9, maxDepthThreshold = 1, depthScale = 0, depthToBlurRatioBias = 0.25, mirror = 0, children, debug = 0, distortion = 1, mixContrast = 1, distortionMap, ...props }, ref)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "Reflector.useEffect": ()=>{
            console.warn('Reflector has been deprecated and will be removed next major. Replace it with <MeshReflectorMaterial />!');
        }
    }["Reflector.useEffect"], []);
    const gl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__["useThree"])({
        "Reflector.useThree[gl]": ({ gl })=>gl
    }["Reflector.useThree[gl]"]);
    const camera = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__["useThree"])({
        "Reflector.useThree[camera]": ({ camera })=>camera
    }["Reflector.useThree[camera]"]);
    const scene = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__["useThree"])({
        "Reflector.useThree[scene]": ({ scene })=>scene
    }["Reflector.useThree[scene]"]);
    blur = Array.isArray(blur) ? blur : [
        blur,
        blur
    ];
    const hasBlur = blur[0] + blur[1] > 0;
    const meshRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const [reflectorPlane] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "Reflector.useState": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Plane"]()
    }["Reflector.useState"]);
    const [normal] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "Reflector.useState": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]()
    }["Reflector.useState"]);
    const [reflectorWorldPosition] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "Reflector.useState": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]()
    }["Reflector.useState"]);
    const [cameraWorldPosition] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "Reflector.useState": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]()
    }["Reflector.useState"]);
    const [rotationMatrix] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "Reflector.useState": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix4"]()
    }["Reflector.useState"]);
    const [lookAtPosition] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "Reflector.useState": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, -1)
    }["Reflector.useState"]);
    const [clipPlane] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "Reflector.useState": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector4"]()
    }["Reflector.useState"]);
    const [view] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "Reflector.useState": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]()
    }["Reflector.useState"]);
    const [target] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "Reflector.useState": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]()
    }["Reflector.useState"]);
    const [q] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "Reflector.useState": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector4"]()
    }["Reflector.useState"]);
    const [textureMatrix] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "Reflector.useState": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix4"]()
    }["Reflector.useState"]);
    const [virtualCamera] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "Reflector.useState": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PerspectiveCamera"]()
    }["Reflector.useState"]);
    const beforeRender = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "Reflector.useCallback[beforeRender]": ()=>{
            reflectorWorldPosition.setFromMatrixPosition(meshRef.current.matrixWorld);
            cameraWorldPosition.setFromMatrixPosition(camera.matrixWorld);
            rotationMatrix.extractRotation(meshRef.current.matrixWorld);
            normal.set(0, 0, 1);
            normal.applyMatrix4(rotationMatrix);
            view.subVectors(reflectorWorldPosition, cameraWorldPosition); // Avoid rendering when reflector is facing away
            if (view.dot(normal) > 0) return;
            view.reflect(normal).negate();
            view.add(reflectorWorldPosition);
            rotationMatrix.extractRotation(camera.matrixWorld);
            lookAtPosition.set(0, 0, -1);
            lookAtPosition.applyMatrix4(rotationMatrix);
            lookAtPosition.add(cameraWorldPosition);
            target.subVectors(reflectorWorldPosition, lookAtPosition);
            target.reflect(normal).negate();
            target.add(reflectorWorldPosition);
            virtualCamera.position.copy(view);
            virtualCamera.up.set(0, 1, 0);
            virtualCamera.up.applyMatrix4(rotationMatrix);
            virtualCamera.up.reflect(normal);
            virtualCamera.lookAt(target);
            virtualCamera.far = camera.far; // Used in WebGLBackground
            virtualCamera.updateMatrixWorld();
            virtualCamera.projectionMatrix.copy(camera.projectionMatrix); // Update the texture matrix
            textureMatrix.set(0.5, 0.0, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.0, 0.5, 0.5, 0.0, 0.0, 0.0, 1.0);
            textureMatrix.multiply(virtualCamera.projectionMatrix);
            textureMatrix.multiply(virtualCamera.matrixWorldInverse);
            textureMatrix.multiply(meshRef.current.matrixWorld); // Now update projection matrix with new clip plane, implementing code from: http://www.terathon.com/code/oblique.html
            // Paper explaining this technique: http://www.terathon.com/lengyel/Lengyel-Oblique.pdf
            reflectorPlane.setFromNormalAndCoplanarPoint(normal, reflectorWorldPosition);
            reflectorPlane.applyMatrix4(virtualCamera.matrixWorldInverse);
            clipPlane.set(reflectorPlane.normal.x, reflectorPlane.normal.y, reflectorPlane.normal.z, reflectorPlane.constant);
            const projectionMatrix = virtualCamera.projectionMatrix;
            q.x = (Math.sign(clipPlane.x) + projectionMatrix.elements[8]) / projectionMatrix.elements[0];
            q.y = (Math.sign(clipPlane.y) + projectionMatrix.elements[9]) / projectionMatrix.elements[5];
            q.z = -1.0;
            q.w = (1.0 + projectionMatrix.elements[10]) / projectionMatrix.elements[14]; // Calculate the scaled plane vector
            clipPlane.multiplyScalar(2.0 / clipPlane.dot(q)); // Replacing the third row of the projection matrix
            projectionMatrix.elements[2] = clipPlane.x;
            projectionMatrix.elements[6] = clipPlane.y;
            projectionMatrix.elements[10] = clipPlane.z + 1.0;
            projectionMatrix.elements[14] = clipPlane.w;
        }
    }["Reflector.useCallback[beforeRender]"], []);
    const [fbo1, fbo2, blurpass, reflectorProps] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Reflector.useMemo": ()=>{
            const parameters = {
                minFilter: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinearFilter"],
                magFilter: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinearFilter"],
                encoding: gl.outputEncoding
            };
            const fbo1 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGLRenderTarget"](resolution, resolution, parameters);
            fbo1.depthBuffer = true;
            fbo1.depthTexture = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DepthTexture"](resolution, resolution);
            fbo1.depthTexture.format = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DepthFormat"];
            fbo1.depthTexture.type = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnsignedShortType"];
            const fbo2 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGLRenderTarget"](resolution, resolution, parameters);
            const blurpass = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$drei$2f$materials$2f$BlurPass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BlurPass"]({
                gl,
                resolution,
                width: blur[0],
                height: blur[1],
                minDepthThreshold,
                maxDepthThreshold,
                depthScale,
                depthToBlurRatioBias
            });
            const reflectorProps = {
                mirror,
                textureMatrix,
                mixBlur,
                tDiffuse: fbo1.texture,
                tDepth: fbo1.depthTexture,
                tDiffuseBlur: fbo2.texture,
                hasBlur,
                mixStrength,
                minDepthThreshold,
                maxDepthThreshold,
                depthScale,
                depthToBlurRatioBias,
                transparent: true,
                debug,
                distortion,
                distortionMap,
                mixContrast,
                'defines-USE_BLUR': hasBlur ? '' : undefined,
                'defines-USE_DEPTH': depthScale > 0 ? '' : undefined,
                'defines-USE_DISTORTION': distortionMap ? '' : undefined
            };
            return [
                fbo1,
                fbo2,
                blurpass,
                reflectorProps
            ];
        }
    }["Reflector.useMemo"], [
        gl,
        blur,
        textureMatrix,
        resolution,
        mirror,
        hasBlur,
        mixBlur,
        mixStrength,
        minDepthThreshold,
        maxDepthThreshold,
        depthScale,
        depthToBlurRatioBias,
        debug,
        distortion,
        distortionMap,
        mixContrast
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__x__as__useFrame$3e$__["useFrame"])({
        "Reflector.useFrame": ()=>{
            if (!(meshRef != null && meshRef.current)) return;
            meshRef.current.visible = false;
            const currentXrEnabled = gl.xr.enabled;
            const currentShadowAutoUpdate = gl.shadowMap.autoUpdate;
            beforeRender();
            gl.xr.enabled = false;
            gl.shadowMap.autoUpdate = false;
            gl.setRenderTarget(fbo1);
            gl.state.buffers.depth.setMask(true);
            if (!gl.autoClear) gl.clear();
            gl.render(scene, virtualCamera);
            if (hasBlur) blurpass.render(gl, fbo1, fbo2);
            gl.xr.enabled = currentXrEnabled;
            gl.shadowMap.autoUpdate = currentShadowAutoUpdate;
            meshRef.current.visible = true;
            gl.setRenderTarget(null);
        }
    }["Reflector.useFrame"]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("mesh", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        ref: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$merge$2d$refs$2f$dist$2f$react$2d$merge$2d$refs$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])([
            meshRef,
            ref
        ])
    }, props), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("planeBufferGeometry", {
        args: args
    }), children ? children('meshReflectorMaterial', reflectorProps) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("meshReflectorMaterial", reflectorProps));
});
;
}),
"[project]/apps/frontend/node_modules/@react-three/drei/helpers/environment-assets.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "presetsObj",
    ()=>presetsObj
]);
const presetsObj = {
    sunset: 'venice/venice_sunset_1k.hdr',
    dawn: 'kiara/kiara_1_dawn_1k.hdr',
    night: 'dikhololo/dikhololo_night_1k.hdr',
    warehouse: 'empty-wharehouse/empty_warehouse_01_1k.hdr',
    forest: 'forrest-slope/forest_slope_1k.hdr',
    apartment: 'lebombo/lebombo_1k.hdr',
    studio: 'studio-small-3/studio_small_03_1k.hdr',
    city: 'potsdamer-platz/potsdamer_platz_1k.hdr',
    park: 'rooitou/rooitou_park_1k.hdr',
    lobby: 'st-fagans/st_fagans_interior_1k.hdr'
};
;
}),
"[project]/apps/frontend/node_modules/@react-three/drei/core/Environment.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Environment",
    ()=>Environment,
    "EnvironmentCube",
    ()=>EnvironmentCube,
    "EnvironmentMap",
    ()=>EnvironmentMap,
    "EnvironmentPortal",
    ()=>EnvironmentPortal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/fiber/dist/index-4f1a8e2f.esm.js [app-client] (ecmascript) <export w as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__x__as__useFrame$3e$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/fiber/dist/index-4f1a8e2f.esm.js [app-client] (ecmascript) <export x as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__g__as__createPortal$3e$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/fiber/dist/index-4f1a8e2f.esm.js [app-client] (ecmascript) <export g as createPortal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__z__as__useLoader$3e$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/fiber/dist/index-4f1a8e2f.esm.js [app-client] (ecmascript) <export z as useLoader>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.module.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2d$stdlib$2f$loaders$2f$RGBELoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three-stdlib/loaders/RGBELoader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$drei$2f$helpers$2f$environment$2d$assets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/drei/helpers/environment-assets.js [app-client] (ecmascript)");
;
;
;
;
;
const CUBEMAP_ROOT = 'https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/hdris/';
const isRef = (obj)=>obj.current && obj.current.isScene;
const resolveScene = (scene)=>isRef(scene) ? scene.current : scene;
function Environment(props) {
    return props.map ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](EnvironmentMap, props) : props.children ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](EnvironmentPortal, props) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](EnvironmentCube, props);
}
function EnvironmentMap({ scene, background = false, map }) {
    const defaultScene = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__["useThree"])({
        "EnvironmentMap.useThree[defaultScene]": (state)=>state.scene
    }["EnvironmentMap.useThree[defaultScene]"]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"]({
        "EnvironmentMap.useLayoutEffect": ()=>{
            if (map) {
                const target = resolveScene(scene || defaultScene);
                const oldbg = target.background;
                const oldenv = target.environment;
                if (background !== 'only') target.environment = map;
                if (background) target.background = map;
                return ({
                    "EnvironmentMap.useLayoutEffect": ()=>{
                        if (background !== 'only') target.environment = oldenv;
                        if (background) target.background = oldbg;
                    }
                })["EnvironmentMap.useLayoutEffect"];
            }
        }
    }["EnvironmentMap.useLayoutEffect"], [
        scene,
        map
    ]);
    return null;
}
function EnvironmentPortal({ children, near = 1, far = 1000, resolution = 256, frames = 1, background = false, scene, files, path, preset = undefined, extensions }) {
    const gl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__["useThree"])({
        "EnvironmentPortal.useThree[gl]": (state)=>state.gl
    }["EnvironmentPortal.useThree[gl]"]);
    const defaultScene = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__["useThree"])({
        "EnvironmentPortal.useThree[defaultScene]": (state)=>state.scene
    }["EnvironmentPortal.useThree[defaultScene]"]);
    const camera = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const [virtualScene] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "EnvironmentPortal.useState": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scene"]()
    }["EnvironmentPortal.useState"]);
    const fbo = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "EnvironmentPortal.useMemo[fbo]": ()=>{
            const fbo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WebGLCubeRenderTarget"](resolution);
            fbo.texture.type = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HalfFloatType"];
            return fbo;
        }
    }["EnvironmentPortal.useMemo[fbo]"], [
        resolution
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"]({
        "EnvironmentPortal.useLayoutEffect": ()=>{
            if (frames === 1) camera.current.update(gl, virtualScene);
            const target = resolveScene(scene || defaultScene);
            const oldbg = target.background;
            const oldenv = target.environment;
            if (background !== 'only') target.environment = fbo.texture;
            if (background) target.background = fbo.texture;
            return ({
                "EnvironmentPortal.useLayoutEffect": ()=>{
                    if (background !== 'only') target.environment = oldenv;
                    if (background) target.background = oldbg;
                }
            })["EnvironmentPortal.useLayoutEffect"];
        }
    }["EnvironmentPortal.useLayoutEffect"], [
        children,
        scene
    ]);
    let count = 1;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__x__as__useFrame$3e$__["useFrame"])({
        "EnvironmentPortal.useFrame": ()=>{
            if (frames === Infinity || count < frames) {
                camera.current.update(gl, virtualScene);
                count++;
            }
        }
    }["EnvironmentPortal.useFrame"]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__g__as__createPortal$3e$__["createPortal"])(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, children, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("cubeCamera", {
        ref: camera,
        args: [
            near,
            far,
            fbo
        ]
    }), (files || preset) && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](EnvironmentMap, {
        background: true,
        files: files,
        preset: preset,
        path: path,
        extensions: extensions,
        scene: virtualScene
    })), virtualScene));
}
function EnvironmentCube({ background = false, files = [
    '/px.png',
    '/nx.png',
    '/py.png',
    '/ny.png',
    '/pz.png',
    '/nz.png'
], path = '', preset = undefined, scene, extensions }) {
    if (preset) {
        if (!(preset in __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$drei$2f$helpers$2f$environment$2d$assets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["presetsObj"])) throw new Error('Preset must be one of: ' + Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$drei$2f$helpers$2f$environment$2d$assets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["presetsObj"]).join(', '));
        files = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$drei$2f$helpers$2f$environment$2d$assets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["presetsObj"][preset];
        path = CUBEMAP_ROOT;
    }
    const defaultScene = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__["useThree"])({
        "EnvironmentCube.useThree[defaultScene]": (state)=>state.scene
    }["EnvironmentCube.useThree[defaultScene]"]);
    const isCubeMap = Array.isArray(files);
    const loader = isCubeMap ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CubeTextureLoader"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2d$stdlib$2f$loaders$2f$RGBELoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RGBELoader"]; // @ts-expect-error
    const loaderResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__z__as__useLoader$3e$__["useLoader"])(loader, isCubeMap ? [
        files
    ] : files, {
        "EnvironmentCube.useLoader[loaderResult]": (loader)=>{
            loader.setPath(path); // @ts-expect-error
            loader.setDataType == null ? void 0 : loader.setDataType(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FloatType"]);
            if (extensions) extensions(loader);
        }
    }["EnvironmentCube.useLoader[loaderResult]"]);
    const texture = isCubeMap ? loaderResult[0] : loaderResult;
    texture.mapping = isCubeMap ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CubeReflectionMapping"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EquirectangularReflectionMapping"];
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"]({
        "EnvironmentCube.useLayoutEffect": ()=>{
            const target = resolveScene(scene || defaultScene);
            const oldbg = target.background;
            const oldenv = target.environment;
            if (background !== 'only') target.environment = texture;
            if (background) target.background = texture;
            return ({
                "EnvironmentCube.useLayoutEffect": ()=>{
                    if (background !== 'only') target.environment = oldenv;
                    if (background) target.background = oldbg;
                }
            })["EnvironmentCube.useLayoutEffect"];
        }
    }["EnvironmentCube.useLayoutEffect"], [
        texture,
        background,
        scene
    ]);
    return null;
}
;
}),
"[project]/apps/frontend/node_modules/@react-three/drei/core/Lightformer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Lightformer",
    ()=>Lightformer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__i__as__applyProps$3e$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/fiber/dist/index-4f1a8e2f.esm.js [app-client] (ecmascript) <export i as applyProps>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$merge$2d$refs$2f$dist$2f$react$2d$merge$2d$refs$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-merge-refs/dist/react-merge-refs.esm.js [app-client] (ecmascript)");
;
;
;
;
;
const Lightformer = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ args, map, toneMapped = false, color = 'white', form: Form = 'rect', intensity = 1, scale = 1, target, children, ...props }, forwardRef)=>{
    // Apply emissive power
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"]({
        "Lightformer.useLayoutEffect": ()=>{
            if (!children && !props.material) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__i__as__applyProps$3e$__["applyProps"])(ref.current.material, {
                    color
                });
                ref.current.material.color.multiplyScalar(intensity);
            }
        }
    }["Lightformer.useLayoutEffect"], [
        color,
        intensity,
        children,
        props.material
    ]); // Target light
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"]({
        "Lightformer.useLayoutEffect": ()=>{
            if (target) ref.current.lookAt(Array.isArray(target) ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](...target) : target);
        }
    }["Lightformer.useLayoutEffect"], [
        target
    ]); // Fix 2-dimensional scale
    scale = Array.isArray(scale) && scale.length === 2 ? [
        scale[0],
        scale[1],
        1
    ] : scale;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("mesh", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        ref: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$merge$2d$refs$2f$dist$2f$react$2d$merge$2d$refs$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])([
            ref,
            forwardRef
        ]),
        scale: scale
    }, props), Form === 'circle' ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("ringGeometry", {
        args: [
            0,
            1,
            64
        ]
    }) : Form === 'ring' ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("ringGeometry", {
        args: [
            0.5,
            1,
            64
        ]
    }) : Form === 'rect' ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("planeGeometry", null) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Form, {
        args: args
    }), children ? children : !props.material ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("meshBasicMaterial", {
        toneMapped: toneMapped,
        map: map,
        side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DoubleSide"]
    }) : null);
});
;
}),
"[project]/apps/frontend/node_modules/@react-three/drei/core/Cloud.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Cloud",
    ()=>Cloud
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__x__as__useFrame$3e$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/fiber/dist/index-4f1a8e2f.esm.js [app-client] (ecmascript) <export x as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Billboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/drei/core/Billboard.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './shapes.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './useTexture.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
;
;
const CLOUD_URL = 'https://rawcdn.githack.com/pmndrs/drei-assets/9225a9f1fbd449d9411125c2f419b843d0308c9f/cloud.png';
function Cloud({ opacity = 0.5, speed = 0.4, width = 10, depth = 1.5, segments = 20, texture = CLOUD_URL, color = "#ffffff", depthTest = true, ...props }) {
    const group = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"]();
    const cloudTexture = useTexture(texture);
    const clouds = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Cloud.useMemo[clouds]": ()=>[
                ...new Array(segments)
            ].map({
                "Cloud.useMemo[clouds]": (_, index)=>({
                        x: width / 2 - Math.random() * width,
                        y: width / 2 - Math.random() * width,
                        scale: 0.4 + Math.sin((index + 1) / segments * Math.PI) * ((0.2 + Math.random()) * 10),
                        density: Math.max(0.2, Math.random()),
                        rotation: Math.max(0.002, 0.005 * Math.random()) * speed
                    })
            }["Cloud.useMemo[clouds]"])
    }["Cloud.useMemo[clouds]"], [
        width,
        segments,
        speed
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__x__as__useFrame$3e$__["useFrame"])({
        "Cloud.useFrame": (state)=>{
            var _group$current;
            return (_group$current = group.current) == null ? void 0 : _group$current.children.forEach({
                "Cloud.useFrame": (cloud, index)=>{
                    cloud.children[0].rotation.z += clouds[index].rotation;
                    cloud.children[0].scale.setScalar(clouds[index].scale + (1 + Math.sin(state.clock.getElapsedTime() / 10)) / 2 * index / 10);
                }
            }["Cloud.useFrame"]);
        }
    }["Cloud.useFrame"]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("group", props, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("group", {
        position: [
            0,
            0,
            segments / 2 * depth
        ],
        ref: group
    }, clouds.map(({ x, y, scale, density }, index)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Billboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Billboard"], {
            key: index,
            position: [
                x,
                y,
                -index * depth
            ]
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Plane, {
            scale: scale,
            rotation: [
                0,
                0,
                0
            ]
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("meshStandardMaterial", {
            map: cloudTexture,
            transparent: true,
            opacity: scale / 6 * density * opacity,
            depthTest: depthTest,
            color: color
        }))))));
}
;
}),
"[project]/apps/frontend/node_modules/@react-three/drei/helpers/Position.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Position",
    ()=>Position
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
const _instanceLocalMatrix = /*@__PURE__*/ new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix4"]();
const _instanceWorldMatrix = /*@__PURE__*/ new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix4"]();
const _instanceIntersects = [];
const _mesh = /*@__PURE__*/ new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"]();
class Position extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"] {
    constructor(){
        super();
        this.color = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]('white');
        this.instance = {
            current: undefined
        };
        this.instanceKey = {
            current: undefined
        };
    }
    get geometry() {
        var _this$instance$curren;
        return (_this$instance$curren = this.instance.current) == null ? void 0 : _this$instance$curren.geometry;
    }
    raycast(raycaster, intersects) {
        const parent = this.instance.current;
        if (!parent) return;
        if (!parent.geometry || !parent.material) return;
        _mesh.geometry = parent.geometry;
        const matrixWorld = parent.matrixWorld;
        let instanceId = parent.userData.instances.indexOf(this.instanceKey); // If the instance wasn't found or exceeds the parents draw range, bail out
        if (instanceId === -1 || instanceId > parent.count) return; // calculate the world matrix for each instance
        parent.getMatrixAt(instanceId, _instanceLocalMatrix);
        _instanceWorldMatrix.multiplyMatrices(matrixWorld, _instanceLocalMatrix); // the mesh represents this single instance
        _mesh.matrixWorld = _instanceWorldMatrix;
        _mesh.raycast(raycaster, _instanceIntersects); // process the result of raycast
        for(let i = 0, l = _instanceIntersects.length; i < l; i++){
            const intersect = _instanceIntersects[i];
            intersect.instanceId = instanceId;
            intersect.object = this;
            intersects.push(intersect);
        }
        _instanceIntersects.length = 0;
    }
}
;
}),
"[project]/apps/frontend/node_modules/@react-three/drei/core/Points.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Point",
    ()=>Point,
    "Points",
    ()=>Points,
    "PointsBuffer",
    ()=>PointsBuffer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__extend$3e$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/fiber/dist/index-4f1a8e2f.esm.js [app-client] (ecmascript) <export e as extend>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__x__as__useFrame$3e$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/fiber/dist/index-4f1a8e2f.esm.js [app-client] (ecmascript) <export x as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$merge$2d$refs$2f$dist$2f$react$2d$merge$2d$refs$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-merge-refs/dist/react-merge-refs.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$drei$2f$helpers$2f$Position$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/drei/helpers/Position.js [app-client] (ecmascript)");
;
;
;
;
;
;
let i, positionRef;
const context = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](null);
const parentMatrix = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix4"]();
const position = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]();
/**
 * Instance implementation, relies on react + context to update the attributes based on the children of this component
 */ const PointsInstances = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ children, range, limit = 1000, ...props }, ref)=>{
    const parentRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const [refs, setRefs] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]([]);
    const [[positions, colors, sizes]] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "PointsInstances.useState": ()=>[
                new Float32Array(limit * 3),
                Float32Array.from({
                    length: limit * 3
                }, {
                    "PointsInstances.useState": ()=>1
                }["PointsInstances.useState"]),
                Float32Array.from({
                    length: limit
                }, {
                    "PointsInstances.useState": ()=>1
                }["PointsInstances.useState"])
            ]
    }["PointsInstances.useState"]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"]({
        "PointsInstances.useLayoutEffect": ()=>{
            parentRef.current.geometry.drawRange.count = Math.min(limit, range !== undefined ? range : limit, refs.length);
        }
    }["PointsInstances.useLayoutEffect"], [
        refs,
        range
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "PointsInstances.useEffect": ()=>{
            // We might be a frame too late? 🤷‍♂️
            parentRef.current.geometry.attributes.position.needsUpdate = true;
        }
    }["PointsInstances.useEffect"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__x__as__useFrame$3e$__["useFrame"])({
        "PointsInstances.useFrame": ()=>{
            parentRef.current.updateMatrix();
            parentRef.current.updateMatrixWorld();
            parentMatrix.copy(parentRef.current.matrixWorld).invert();
            for(i = 0; i < refs.length; i++){
                positionRef = refs[i].current;
                position.toArray(positions, i * 3);
                parentRef.current.geometry.attributes.position.needsUpdate = true;
                positionRef.matrixWorldNeedsUpdate = true;
                positionRef.color.toArray(colors, i * 3);
                parentRef.current.geometry.attributes.color.needsUpdate = true;
                sizes.set([
                    positionRef.size
                ], i);
                parentRef.current.geometry.attributes.size.needsUpdate = true;
            }
        }
    }["PointsInstances.useFrame"]);
    const events = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "PointsInstances.useMemo[events]": ()=>{
            const events = {};
            for(i = 0; i < refs.length; i++){
                var _refs$i$current;
                Object.assign(events, (_refs$i$current = refs[i].current) == null ? void 0 : _refs$i$current.__r3f.handlers);
            }
            return Object.keys(events).reduce({
                "PointsInstances.useMemo[events]": (prev, key)=>({
                        ...prev,
                        [key]: ({
                            "PointsInstances.useMemo[events]": (event)=>{
                                var _refs$event$index, _r3f, _r3f$handlers;
                                const object = (_refs$event$index = refs[event.index]) == null ? void 0 : _refs$event$index.current;
                                return object == null ? void 0 : (_r3f = object.__r3f) == null ? void 0 : (_r3f$handlers = _r3f.handlers) == null ? void 0 : _r3f$handlers[key]({
                                    ...event,
                                    object
                                });
                            }
                        })["PointsInstances.useMemo[events]"]
                    })
            }["PointsInstances.useMemo[events]"], {});
        }
    }["PointsInstances.useMemo[events]"], [
        children,
        refs
    ]);
    const api = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "PointsInstances.useMemo[api]": ()=>({
                subscribe: ({
                    "PointsInstances.useMemo[api]": (ref)=>{
                        setRefs({
                            "PointsInstances.useMemo[api]": (refs)=>[
                                    ...refs,
                                    ref
                                ]
                        }["PointsInstances.useMemo[api]"]);
                        return ({
                            "PointsInstances.useMemo[api]": ()=>setRefs({
                                    "PointsInstances.useMemo[api]": (refs)=>refs.filter({
                                            "PointsInstances.useMemo[api]": (item)=>item.current !== ref.current
                                        }["PointsInstances.useMemo[api]"])
                                }["PointsInstances.useMemo[api]"])
                        })["PointsInstances.useMemo[api]"];
                    }
                })["PointsInstances.useMemo[api]"]
            })
    }["PointsInstances.useMemo[api]"], []);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("points", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        matrixAutoUpdate: false,
        ref: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$merge$2d$refs$2f$dist$2f$react$2d$merge$2d$refs$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])([
            ref,
            parentRef
        ])
    }, events, props), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("bufferGeometry", null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("bufferAttribute", {
        attach: "attributes-position",
        count: positions.length / 3,
        array: positions,
        itemSize: 3,
        usage: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DynamicDrawUsage"]
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("bufferAttribute", {
        attach: "attributes-color",
        count: colors.length / 3,
        array: colors,
        itemSize: 3,
        usage: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DynamicDrawUsage"]
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("bufferAttribute", {
        attach: "attributes-size",
        count: sizes.length,
        array: sizes,
        itemSize: 1,
        usage: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DynamicDrawUsage"]
    })), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](context.Provider, {
        value: api
    }, children));
});
const Point = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ children, ...props }, ref)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Point.useMemo": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__extend$3e$__["extend"])({
                Position: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$drei$2f$helpers$2f$Position$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Position"]
            })
    }["Point.useMemo"], []);
    const group = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"]();
    const { subscribe } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](context);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"]({
        "Point.useLayoutEffect": ()=>subscribe(group)
    }["Point.useLayoutEffect"], []);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("position", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        ref: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$merge$2d$refs$2f$dist$2f$react$2d$merge$2d$refs$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])([
            ref,
            group
        ])
    }, props), children);
});
/**
 * Buffer implementation, relies on complete buffers of the correct number, leaves it to the user to update them
 */ const PointsBuffer = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ children, positions, colors, sizes, stride = 3, ...props }, forwardedRef)=>{
    const pointsRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__x__as__useFrame$3e$__["useFrame"])({
        "PointsBuffer.useFrame": ()=>{
            const attr = pointsRef.current.geometry.attributes;
            attr.position.needsUpdate = true;
            if (colors) attr.color.needsUpdate = true;
            if (sizes) attr.size.needsUpdate = true;
        }
    }["PointsBuffer.useFrame"]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("points", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        ref: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$merge$2d$refs$2f$dist$2f$react$2d$merge$2d$refs$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])([
            forwardedRef,
            pointsRef
        ])
    }, props), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("bufferGeometry", null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("bufferAttribute", {
        attach: "attributes-position",
        count: positions.length / stride,
        array: positions,
        itemSize: stride,
        usage: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DynamicDrawUsage"]
    }), colors && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("bufferAttribute", {
        attach: "attributes-color",
        count: colors.length / stride,
        array: colors,
        itemSize: 3,
        usage: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DynamicDrawUsage"]
    }), sizes && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("bufferAttribute", {
        attach: "attributes-size",
        count: sizes.length / stride,
        array: sizes,
        itemSize: 1,
        usage: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DynamicDrawUsage"]
    })), children);
});
const Points = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    if (props.positions instanceof Float32Array) {
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](PointsBuffer, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, props, {
            ref: forwardedRef
        }));
    } else return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](PointsInstances, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, props, {
        ref: forwardedRef
    }));
});
;
}),
"[project]/apps/frontend/node_modules/@react-three/drei/core/Instances.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Instance",
    ()=>Instance,
    "Instances",
    ()=>Instances,
    "Merged",
    ()=>Merged
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__extend$3e$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/fiber/dist/index-4f1a8e2f.esm.js [app-client] (ecmascript) <export e as extend>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__x__as__useFrame$3e$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/fiber/dist/index-4f1a8e2f.esm.js [app-client] (ecmascript) <export x as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$merge$2d$refs$2f$dist$2f$react$2d$merge$2d$refs$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-merge-refs/dist/react-merge-refs.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$composer$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-composer/es/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$drei$2f$helpers$2f$Position$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/drei/helpers/Position.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
let i, instanceRef;
const globalContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](null);
const parentMatrix = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix4"]();
const instanceMatrix = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix4"]();
const tempMatrix = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix4"]();
new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]();
const translation = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
const rotation = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"]();
const scale = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
const Instance = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ context, children, ...props }, ref)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Instance.useMemo": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__extend$3e$__["extend"])({
                Position: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$drei$2f$helpers$2f$Position$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Position"]
            })
    }["Instance.useMemo"], []);
    const group = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"]();
    const { subscribe, getParent } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](context || globalContext);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"]({
        "Instance.useLayoutEffect": ()=>subscribe(group)
    }["Instance.useLayoutEffect"], []);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("position", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        instance: getParent(),
        instanceKey: group,
        ref: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$merge$2d$refs$2f$dist$2f$react$2d$merge$2d$refs$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])([
            ref,
            group
        ])
    }, props), children);
});
const Instances = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ children, range, limit = 1000, frames = Infinity, ...props }, ref)=>{
    const [{ context, instance }] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "Instances.useState": ()=>{
            const context = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](null);
            return {
                context,
                instance: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]({
                    "Instances.useState": (props, ref)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Instance, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
                            context: context
                        }, props, {
                            ref: ref
                        }))
                }["Instances.useState"])
            };
        }
    }["Instances.useState"]);
    const parentRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const [instances, setInstances] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]([]);
    const [[matrices, colors]] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "Instances.useState": ()=>{
            const mArray = new Float32Array(limit * 16);
            for(i = 0; i < limit; i++)tempMatrix.identity().toArray(mArray, i * 16);
            return [
                mArray,
                new Float32Array([
                    ...new Array(limit * 3)
                ].map({
                    "Instances.useState": ()=>1
                }["Instances.useState"]))
            ];
        }
    }["Instances.useState"]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"]({
        "Instances.useLayoutEffect": ()=>{
            parentRef.current.count = parentRef.current.instanceMatrix.updateRange.count = parentRef.current.instanceColor.updateRange.count = Math.min(limit, range !== undefined ? range : limit, instances.length);
        }
    }["Instances.useLayoutEffect"], [
        instances,
        range
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "Instances.useEffect": ()=>{
            // We might be a frame too late? 🤷‍♂️
            parentRef.current.instanceMatrix.needsUpdate = true;
        }
    }["Instances.useEffect"]);
    let count = 0;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__x__as__useFrame$3e$__["useFrame"])({
        "Instances.useFrame": ()=>{
            if (frames === Infinity || count < frames) {
                parentRef.current.updateMatrix();
                parentRef.current.updateMatrixWorld();
                parentMatrix.copy(parentRef.current.matrixWorld).invert();
                for(i = 0; i < instances.length; i++){
                    instanceRef = instances[i].current; // Multiply the inverse of the InstancedMesh world matrix or else
                    // Instances will be double-transformed if <Instances> isn't at identity
                    instanceRef.matrixWorld.decompose(translation, rotation, scale);
                    instanceMatrix.compose(translation, rotation, scale).premultiply(parentMatrix);
                    instanceMatrix.toArray(matrices, i * 16);
                    parentRef.current.instanceMatrix.needsUpdate = true;
                    instanceRef.color.toArray(colors, i * 3);
                    parentRef.current.instanceColor.needsUpdate = true;
                }
                count++;
            }
        }
    }["Instances.useFrame"]);
    const api = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Instances.useMemo[api]": ()=>({
                getParent: ({
                    "Instances.useMemo[api]": ()=>parentRef
                })["Instances.useMemo[api]"],
                subscribe: ({
                    "Instances.useMemo[api]": (ref)=>{
                        setInstances({
                            "Instances.useMemo[api]": (instances)=>[
                                    ...instances,
                                    ref
                                ]
                        }["Instances.useMemo[api]"]);
                        return ({
                            "Instances.useMemo[api]": ()=>setInstances({
                                    "Instances.useMemo[api]": (instances)=>instances.filter({
                                            "Instances.useMemo[api]": (item)=>item.current !== ref.current
                                        }["Instances.useMemo[api]"])
                                }["Instances.useMemo[api]"])
                        })["Instances.useMemo[api]"];
                    }
                })["Instances.useMemo[api]"]
            })
    }["Instances.useMemo[api]"], []);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("instancedMesh", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        userData: {
            instances
        },
        matrixAutoUpdate: false,
        ref: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$merge$2d$refs$2f$dist$2f$react$2d$merge$2d$refs$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])([
            ref,
            parentRef
        ]),
        args: [
            null,
            null,
            0
        ],
        raycast: ()=>null
    }, props), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("instancedBufferAttribute", {
        attach: "instanceMatrix",
        count: matrices.length / 16,
        array: matrices,
        itemSize: 16,
        usage: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DynamicDrawUsage"]
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("instancedBufferAttribute", {
        attach: "instanceColor",
        count: colors.length / 3,
        array: colors,
        itemSize: 3,
        usage: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DynamicDrawUsage"]
    }), typeof children === 'function' ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](context.Provider, {
        value: api
    }, children(instance)) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](globalContext.Provider, {
        value: api
    }, children));
});
function Merged({ meshes, children, ...props }) {
    const isArray = Array.isArray(meshes); // Filter out meshes from collections, which may contain non-meshes
    if (!isArray) {
        for (const key of Object.keys(meshes))if (!meshes[key].isMesh) delete meshes[key];
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$composer$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        components: (isArray ? meshes : Object.values(meshes)).map(({ geometry, material })=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Instances, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
                key: geometry.uuid,
                geometry: geometry,
                material: material
            }, props)))
    }, (args)=>isArray ? children(...args) : children(Object.keys(meshes).filter((key)=>meshes[key].isMesh).reduce((acc, key, i)=>({
                ...acc,
                [key]: args[i]
            }), {})));
}
;
}),
"[project]/apps/frontend/node_modules/@react-three/drei/core/Detailed.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Detailed",
    ()=>Detailed
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__x__as__useFrame$3e$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/fiber/dist/index-4f1a8e2f.esm.js [app-client] (ecmascript) <export x as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$merge$2d$refs$2f$dist$2f$react$2d$merge$2d$refs$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-merge-refs/dist/react-merge-refs.esm.js [app-client] (ecmascript)");
;
;
;
;
const Detailed = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ children, distances, ...props }, ref)=>{
    const lodRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"]({
        "Detailed.useLayoutEffect": ()=>{
            const { current: lod } = lodRef;
            lod.levels.length = 0;
            lod.children.forEach({
                "Detailed.useLayoutEffect": (object, index)=>lod.levels.push({
                        object,
                        distance: distances[index]
                    })
            }["Detailed.useLayoutEffect"]);
        }
    }["Detailed.useLayoutEffect"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__x__as__useFrame$3e$__["useFrame"])({
        "Detailed.useFrame": (state)=>{
            var _lodRef$current;
            return (_lodRef$current = lodRef.current) == null ? void 0 : _lodRef$current.update(state.camera);
        }
    }["Detailed.useFrame"]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("lOD", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        ref: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$merge$2d$refs$2f$dist$2f$react$2d$merge$2d$refs$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])([
            lodRef,
            ref
        ])
    }, props), children);
});
;
}),
"[project]/apps/frontend/node_modules/@react-three/drei/core/Preload.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Preload",
    ()=>Preload
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.module.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/fiber/dist/index-4f1a8e2f.esm.js [app-client] (ecmascript) <export w as useThree>");
;
;
;
function Preload({ all, scene, camera }) {
    const gl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__["useThree"])({
        "Preload.useThree[gl]": ({ gl })=>gl
    }["Preload.useThree[gl]"]);
    const dCamera = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__["useThree"])({
        "Preload.useThree[dCamera]": ({ camera })=>camera
    }["Preload.useThree[dCamera]"]);
    const dScene = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__["useThree"])({
        "Preload.useThree[dScene]": ({ scene })=>scene
    }["Preload.useThree[dScene]"]); // Layout effect because it must run before React commits
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"]({
        "Preload.useLayoutEffect": ()=>{
            const invisible = [];
            if (all) {
                (scene || dScene).traverse({
                    "Preload.useLayoutEffect": (object)=>{
                        if (object.visible === false) {
                            invisible.push(object);
                            object.visible = true;
                        }
                    }
                }["Preload.useLayoutEffect"]);
            } // Now compile the scene
            gl.compile(scene || dScene, camera || dCamera); // And for good measure, hit it with a cube camera
            const cubeRenderTarget = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WebGLCubeRenderTarget"](128);
            const cubeCamera = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CubeCamera"](0.01, 100000, cubeRenderTarget);
            cubeCamera.update(gl, scene || dScene);
            cubeRenderTarget.dispose(); // Flips these objects back
            invisible.forEach({
                "Preload.useLayoutEffect": (object)=>object.visible = false
            }["Preload.useLayoutEffect"]);
        }
    }["Preload.useLayoutEffect"], []);
    return null;
}
;
}),
"[project]/apps/frontend/node_modules/@react-three/drei/core/BakeShadows.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BakeShadows",
    ()=>BakeShadows
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/fiber/dist/index-4f1a8e2f.esm.js [app-client] (ecmascript) <export w as useThree>");
;
;
function BakeShadows() {
    const gl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__["useThree"])({
        "BakeShadows.useThree[gl]": (state)=>state.gl
    }["BakeShadows.useThree[gl]"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BakeShadows.useEffect": ()=>{
            gl.shadowMap.autoUpdate = false;
            gl.shadowMap.needsUpdate = true;
            return ({
                "BakeShadows.useEffect": ()=>{
                    gl.shadowMap.autoUpdate = gl.shadowMap.needsUpdate = true;
                }
            })["BakeShadows.useEffect"];
        }
    }["BakeShadows.useEffect"], [
        gl.shadowMap
    ]);
    return null;
}
;
}),
"[project]/apps/frontend/node_modules/@react-three/drei/core/meshBounds.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "meshBounds",
    ()=>meshBounds
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
const _inverseMatrix = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix4"]();
const _ray = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ray"]();
const _sphere = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sphere"]();
const _vA = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
function meshBounds(raycaster, intersects) {
    const geometry = this.geometry;
    const material = this.material;
    const matrixWorld = this.matrixWorld;
    if (material === undefined) return; // Checking boundingSphere distance to ray
    if (geometry.boundingSphere === null) geometry.computeBoundingSphere();
    _sphere.copy(geometry.boundingSphere);
    _sphere.applyMatrix4(matrixWorld);
    if (raycaster.ray.intersectsSphere(_sphere) === false) return;
    _inverseMatrix.copy(matrixWorld).invert();
    _ray.copy(raycaster.ray).applyMatrix4(_inverseMatrix); // Check boundingBox before continuing
    if (geometry.boundingBox !== null && _ray.intersectBox(geometry.boundingBox, _vA) === null) return;
    intersects.push({
        distance: _vA.distanceTo(raycaster.ray.origin),
        point: _vA.clone(),
        object: this
    });
}
;
}),
"[project]/apps/frontend/node_modules/@react-three/drei/core/AdaptiveDpr.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AdaptiveDpr",
    ()=>AdaptiveDpr
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/fiber/dist/index-4f1a8e2f.esm.js [app-client] (ecmascript) <export w as useThree>");
;
;
function AdaptiveDpr({ pixelated }) {
    const gl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__["useThree"])({
        "AdaptiveDpr.useThree[gl]": (state)=>state.gl
    }["AdaptiveDpr.useThree[gl]"]);
    const active = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__["useThree"])({
        "AdaptiveDpr.useThree[active]": (state)=>state.internal.active
    }["AdaptiveDpr.useThree[active]"]);
    const current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__["useThree"])({
        "AdaptiveDpr.useThree[current]": (state)=>state.performance.current
    }["AdaptiveDpr.useThree[current]"]);
    const initialDpr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__["useThree"])({
        "AdaptiveDpr.useThree[initialDpr]": (state)=>state.viewport.initialDpr
    }["AdaptiveDpr.useThree[initialDpr]"]);
    const setDpr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__["useThree"])({
        "AdaptiveDpr.useThree[setDpr]": (state)=>state.setDpr
    }["AdaptiveDpr.useThree[setDpr]"]); // Restore initial pixelratio on unmount
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "AdaptiveDpr.useEffect": ()=>{
            const domElement = gl.domElement;
            return ({
                "AdaptiveDpr.useEffect": ()=>{
                    if (active) setDpr(initialDpr);
                    if (pixelated && domElement) domElement.style.imageRendering = 'auto';
                }
            })["AdaptiveDpr.useEffect"];
        }
    }["AdaptiveDpr.useEffect"], []); // Set adaptive pixelratio
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "AdaptiveDpr.useEffect": ()=>{
            setDpr(current * initialDpr);
            if (pixelated && gl.domElement) gl.domElement.style.imageRendering = current === 1 ? 'auto' : 'pixelated';
        }
    }["AdaptiveDpr.useEffect"], [
        current
    ]);
    return null;
}
;
}),
"[project]/apps/frontend/node_modules/@react-three/drei/core/AdaptiveEvents.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AdaptiveEvents",
    ()=>AdaptiveEvents
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/fiber/dist/index-4f1a8e2f.esm.js [app-client] (ecmascript) <export w as useThree>");
;
;
function AdaptiveEvents() {
    const get = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__["useThree"])({
        "AdaptiveEvents.useThree[get]": (state)=>state.get
    }["AdaptiveEvents.useThree[get]"]);
    const setEvents = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__["useThree"])({
        "AdaptiveEvents.useThree[setEvents]": (state)=>state.setEvents
    }["AdaptiveEvents.useThree[setEvents]"]);
    const current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useThree$3e$__["useThree"])({
        "AdaptiveEvents.useThree[current]": (state)=>state.performance.current
    }["AdaptiveEvents.useThree[current]"]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "AdaptiveEvents.useEffect": ()=>{
            const enabled = get().events.enabled;
            return ({
                "AdaptiveEvents.useEffect": ()=>setEvents({
                        enabled
                    })
            })["AdaptiveEvents.useEffect"];
        }
    }["AdaptiveEvents.useEffect"], []);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "AdaptiveEvents.useEffect": ()=>setEvents({
                enabled: current === 1
            })
    }["AdaptiveEvents.useEffect"], [
        current
    ]);
    return null;
}
;
}),
"[project]/apps/frontend/node_modules/@react-three/drei/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/drei/web/Html.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$CycleRaycast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/drei/web/CycleRaycast.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './web/useCursor.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Loader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/drei/web/Loader.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './web/ScrollControls.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$PresentationControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/drei/web/PresentationControls.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './web/Select.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Billboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/drei/core/Billboard.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$QuadraticBezierLine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/drei/core/QuadraticBezierLine.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$CubicBezierLine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/drei/core/CubicBezierLine.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/drei/core/Line.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$PositionalAudio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/drei/core/PositionalAudio.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './core/Text.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Effects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/drei/core/Effects.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$GradientTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/drei/core/GradientTexture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/drei/core/Image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Edges$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/drei/core/Edges.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './core/Trail.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Sampler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/drei/core/Sampler.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$ComputedAttribute$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/drei/core/ComputedAttribute.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Clone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/drei/core/Clone.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$OrthographicCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/drei/core/OrthographicCamera.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$PerspectiveCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/drei/core/PerspectiveCamera.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$CubeCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/drei/core/CubeCamera.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$DeviceOrientationControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/drei/core/DeviceOrientationControls.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$FlyControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/drei/core/FlyControls.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$MapControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/drei/core/MapControls.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$OrbitControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/drei/core/OrbitControls.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './core/TrackballControls.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$ArcballControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/drei/core/ArcballControls.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './core/TransformControls.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$PointerLockControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/drei/core/PointerLockControls.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$FirstPersonControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/drei/core/FirstPersonControls.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$GizmoHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/drei/core/GizmoHelper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$GizmoViewcube$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/drei/core/GizmoViewcube.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$GizmoViewport$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/drei/core/GizmoViewport.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './core/useCubeTexture.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './core/useFBX.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './core/useGLTF.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './core/useProgress.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './core/useTexture.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './core/useKTX2.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './core/Stats.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './core/useDepthBuffer.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './core/useAspect.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './core/useCamera.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './core/useDetectGPU.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './core/useHelper.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './core/useBVH.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './core/useContextBridge.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './core/useAnimations.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './core/useFBO.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './core/useIntersect.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './core/useBoxProjectedEnv.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$CurveModifier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/drei/core/CurveModifier.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$MeshDistortMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/drei/core/MeshDistortMaterial.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$MeshWobbleMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/drei/core/MeshWobbleMaterial.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$MeshReflectorMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/drei/core/MeshReflectorMaterial.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$PointMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/drei/core/PointMaterial.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './core/shaderMaterial.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './core/softShadows.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './core/shapes.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$RoundedBox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/drei/core/RoundedBox.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './core/ScreenQuad.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Center$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/drei/core/Center.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Bounds$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/drei/core/Bounds.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$CameraShake$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/drei/core/CameraShake.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Float$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/drei/core/Float.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './core/Stage.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Backdrop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/drei/core/Backdrop.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './core/Shadow.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$ContactShadows$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/drei/core/ContactShadows.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Reflector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/drei/core/Reflector.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './core/SpotLight.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Environment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/drei/core/Environment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Lightformer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/drei/core/Lightformer.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './core/Sky.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './core/Stars.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Cloud$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/drei/core/Cloud.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './core/useMatcapTexture.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './core/useNormalTexture.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Points$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/drei/core/Points.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Instances$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/drei/core/Instances.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './core/Segments.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Detailed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/drei/core/Detailed.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Preload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/drei/core/Preload.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$BakeShadows$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/drei/core/BakeShadows.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$meshBounds$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/drei/core/meshBounds.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$AdaptiveDpr$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/drei/core/AdaptiveDpr.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$AdaptiveEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/drei/core/AdaptiveEvents.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
}),
]);

//# sourceMappingURL=6063a_%40react-three_drei_af06c383._.js.map