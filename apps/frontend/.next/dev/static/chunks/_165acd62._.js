(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/frontend/node_modules/zustand/esm/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>create
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function createStore(createState) {
    let state;
    const listeners = /* @__PURE__ */ new Set();
    const setState = (partial, replace)=>{
        const nextState = typeof partial === "function" ? partial(state) : partial;
        if (nextState !== state) {
            const previousState = state;
            state = replace ? nextState : Object.assign({}, state, nextState);
            listeners.forEach((listener)=>listener(state, previousState));
        }
    };
    const getState = ()=>state;
    const subscribeWithSelector = (listener, selector = getState, equalityFn = Object.is)=>{
        console.warn("[DEPRECATED] Please use `subscribeWithSelector` middleware");
        let currentSlice = selector(state);
        function listenerToAdd() {
            const nextSlice = selector(state);
            if (!equalityFn(currentSlice, nextSlice)) {
                const previousSlice = currentSlice;
                listener(currentSlice = nextSlice, previousSlice);
            }
        }
        listeners.add(listenerToAdd);
        return ()=>listeners.delete(listenerToAdd);
    };
    const subscribe = (listener, selector, equalityFn)=>{
        if (selector || equalityFn) {
            return subscribeWithSelector(listener, selector, equalityFn);
        }
        listeners.add(listener);
        return ()=>listeners.delete(listener);
    };
    const destroy = ()=>listeners.clear();
    const api = {
        setState,
        getState,
        subscribe,
        destroy
    };
    state = createState(setState, getState, api);
    return api;
}
const isSSR = typeof window === "undefined" || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent);
const useIsomorphicLayoutEffect = isSSR ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"];
function create(createState) {
    const api = typeof createState === "function" ? createStore(createState) : createState;
    const useStore = (selector = api.getState, equalityFn = Object.is)=>{
        const [, forceUpdate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducer"])({
            "create.useStore.useReducer": (c)=>c + 1
        }["create.useStore.useReducer"], 0);
        const state = api.getState();
        const stateRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(state);
        const selectorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(selector);
        const equalityFnRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(equalityFn);
        const erroredRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
        const currentSliceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
        if (currentSliceRef.current === void 0) {
            currentSliceRef.current = selector(state);
        }
        let newStateSlice;
        let hasNewStateSlice = false;
        if (stateRef.current !== state || selectorRef.current !== selector || equalityFnRef.current !== equalityFn || erroredRef.current) {
            newStateSlice = selector(state);
            hasNewStateSlice = !equalityFn(currentSliceRef.current, newStateSlice);
        }
        useIsomorphicLayoutEffect({
            "create.useStore.useIsomorphicLayoutEffect": ()=>{
                if (hasNewStateSlice) {
                    currentSliceRef.current = newStateSlice;
                }
                stateRef.current = state;
                selectorRef.current = selector;
                equalityFnRef.current = equalityFn;
                erroredRef.current = false;
            }
        }["create.useStore.useIsomorphicLayoutEffect"]);
        const stateBeforeSubscriptionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(state);
        useIsomorphicLayoutEffect({
            "create.useStore.useIsomorphicLayoutEffect": ()=>{
                const listener = {
                    "create.useStore.useIsomorphicLayoutEffect.listener": ()=>{
                        try {
                            const nextState = api.getState();
                            const nextStateSlice = selectorRef.current(nextState);
                            if (!equalityFnRef.current(currentSliceRef.current, nextStateSlice)) {
                                stateRef.current = nextState;
                                currentSliceRef.current = nextStateSlice;
                                forceUpdate();
                            }
                        } catch (error) {
                            erroredRef.current = true;
                            forceUpdate();
                        }
                    }
                }["create.useStore.useIsomorphicLayoutEffect.listener"];
                const unsubscribe = api.subscribe(listener);
                if (api.getState() !== stateBeforeSubscriptionRef.current) {
                    listener();
                }
                return unsubscribe;
            }
        }["create.useStore.useIsomorphicLayoutEffect"], []);
        const sliceToReturn = hasNewStateSlice ? newStateSlice : currentSliceRef.current;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebugValue"])(sliceToReturn);
        return sliceToReturn;
    };
    Object.assign(useStore, api);
    useStore[Symbol.iterator] = function() {
        console.warn("[useStore, api] = create() is deprecated and will be removed in v4");
        const items = [
            useStore,
            api
        ];
        return {
            next () {
                const done = items.length <= 0;
                return {
                    value: items.shift(),
                    done
                };
            }
        };
    };
    return useStore;
}
;
}),
"[project]/apps/frontend/node_modules/zustand/esm/shallow.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>shallow
]);
function shallow(objA, objB) {
    if (Object.is(objA, objB)) {
        return true;
    }
    if (typeof objA !== "object" || objA === null || typeof objB !== "object" || objB === null) {
        return false;
    }
    const keysA = Object.keys(objA);
    if (keysA.length !== Object.keys(objB).length) {
        return false;
    }
    for(let i = 0; i < keysA.length; i++){
        if (!Object.prototype.hasOwnProperty.call(objB, keysA[i]) || !Object.is(objA[keysA[i]], objB[keysA[i]])) {
            return false;
        }
    }
    return true;
}
;
}),
"[project]/node_modules/scheduler/cjs/scheduler.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'use strict';
if ("TURBOPACK compile-time truthy", 1) {
    (function() {
        'use strict';
        /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */ if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === 'function') {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
        }
        var enableSchedulerDebugging = false;
        var enableProfiling = false;
        var frameYieldMs = 5;
        function push(heap, node) {
            var index = heap.length;
            heap.push(node);
            siftUp(heap, node, index);
        }
        function peek(heap) {
            return heap.length === 0 ? null : heap[0];
        }
        function pop(heap) {
            if (heap.length === 0) {
                return null;
            }
            var first = heap[0];
            var last = heap.pop();
            if (last !== first) {
                heap[0] = last;
                siftDown(heap, last, 0);
            }
            return first;
        }
        function siftUp(heap, node, i) {
            var index = i;
            while(index > 0){
                var parentIndex = index - 1 >>> 1;
                var parent = heap[parentIndex];
                if (compare(parent, node) > 0) {
                    // The parent is larger. Swap positions.
                    heap[parentIndex] = node;
                    heap[index] = parent;
                    index = parentIndex;
                } else {
                    // The parent is smaller. Exit.
                    return;
                }
            }
        }
        function siftDown(heap, node, i) {
            var index = i;
            var length = heap.length;
            var halfLength = length >>> 1;
            while(index < halfLength){
                var leftIndex = (index + 1) * 2 - 1;
                var left = heap[leftIndex];
                var rightIndex = leftIndex + 1;
                var right = heap[rightIndex]; // If the left or right node is smaller, swap with the smaller of those.
                if (compare(left, node) < 0) {
                    if (rightIndex < length && compare(right, left) < 0) {
                        heap[index] = right;
                        heap[rightIndex] = node;
                        index = rightIndex;
                    } else {
                        heap[index] = left;
                        heap[leftIndex] = node;
                        index = leftIndex;
                    }
                } else if (rightIndex < length && compare(right, node) < 0) {
                    heap[index] = right;
                    heap[rightIndex] = node;
                    index = rightIndex;
                } else {
                    // Neither child is smaller. Exit.
                    return;
                }
            }
        }
        function compare(a, b) {
            // Compare sort index first, then task id.
            var diff = a.sortIndex - b.sortIndex;
            return diff !== 0 ? diff : a.id - b.id;
        }
        // TODO: Use symbols?
        var ImmediatePriority = 1;
        var UserBlockingPriority = 2;
        var NormalPriority = 3;
        var LowPriority = 4;
        var IdlePriority = 5;
        function markTaskErrored(task, ms) {}
        /* eslint-disable no-var */ var hasPerformanceNow = typeof performance === 'object' && typeof performance.now === 'function';
        if (hasPerformanceNow) {
            var localPerformance = performance;
            exports.unstable_now = function() {
                return localPerformance.now();
            };
        } else {
            var localDate = Date;
            var initialTime = localDate.now();
            exports.unstable_now = function() {
                return localDate.now() - initialTime;
            };
        } // Max 31 bit integer. The max integer size in V8 for 32-bit systems.
        // Math.pow(2, 30) - 1
        // 0b111111111111111111111111111111
        var maxSigned31BitInt = 1073741823; // Times out immediately
        var IMMEDIATE_PRIORITY_TIMEOUT = -1; // Eventually times out
        var USER_BLOCKING_PRIORITY_TIMEOUT = 250;
        var NORMAL_PRIORITY_TIMEOUT = 5000;
        var LOW_PRIORITY_TIMEOUT = 10000; // Never times out
        var IDLE_PRIORITY_TIMEOUT = maxSigned31BitInt; // Tasks are stored on a min heap
        var taskQueue = [];
        var timerQueue = []; // Incrementing id counter. Used to maintain insertion order.
        var taskIdCounter = 1; // Pausing the scheduler is useful for debugging.
        var currentTask = null;
        var currentPriorityLevel = NormalPriority; // This is set while performing work, to prevent re-entrance.
        var isPerformingWork = false;
        var isHostCallbackScheduled = false;
        var isHostTimeoutScheduled = false; // Capture local references to native APIs, in case a polyfill overrides them.
        var localSetTimeout = typeof setTimeout === 'function' ? setTimeout : null;
        var localClearTimeout = typeof clearTimeout === 'function' ? clearTimeout : null;
        var localSetImmediate = typeof setImmediate !== 'undefined' ? setImmediate : null; // IE and Node.js + jsdom
        var isInputPending = typeof navigator !== 'undefined' && navigator.scheduling !== undefined && navigator.scheduling.isInputPending !== undefined ? navigator.scheduling.isInputPending.bind(navigator.scheduling) : null;
        function advanceTimers(currentTime) {
            // Check for tasks that are no longer delayed and add them to the queue.
            var timer = peek(timerQueue);
            while(timer !== null){
                if (timer.callback === null) {
                    // Timer was cancelled.
                    pop(timerQueue);
                } else if (timer.startTime <= currentTime) {
                    // Timer fired. Transfer to the task queue.
                    pop(timerQueue);
                    timer.sortIndex = timer.expirationTime;
                    push(taskQueue, timer);
                } else {
                    // Remaining timers are pending.
                    return;
                }
                timer = peek(timerQueue);
            }
        }
        function handleTimeout(currentTime) {
            isHostTimeoutScheduled = false;
            advanceTimers(currentTime);
            if (!isHostCallbackScheduled) {
                if (peek(taskQueue) !== null) {
                    isHostCallbackScheduled = true;
                    requestHostCallback(flushWork);
                } else {
                    var firstTimer = peek(timerQueue);
                    if (firstTimer !== null) {
                        requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
                    }
                }
            }
        }
        function flushWork(hasTimeRemaining, initialTime) {
            isHostCallbackScheduled = false;
            if (isHostTimeoutScheduled) {
                // We scheduled a timeout but it's no longer needed. Cancel it.
                isHostTimeoutScheduled = false;
                cancelHostTimeout();
            }
            isPerformingWork = true;
            var previousPriorityLevel = currentPriorityLevel;
            try {
                if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                {
                    var currentTime;
                } else {
                    // No catch in prod code path.
                    return workLoop(hasTimeRemaining, initialTime);
                }
            } finally{
                currentTask = null;
                currentPriorityLevel = previousPriorityLevel;
                isPerformingWork = false;
            }
        }
        function workLoop(hasTimeRemaining, initialTime) {
            var currentTime = initialTime;
            advanceTimers(currentTime);
            currentTask = peek(taskQueue);
            while(currentTask !== null && !enableSchedulerDebugging){
                if (currentTask.expirationTime > currentTime && (!hasTimeRemaining || shouldYieldToHost())) {
                    break;
                }
                var callback = currentTask.callback;
                if (typeof callback === 'function') {
                    currentTask.callback = null;
                    currentPriorityLevel = currentTask.priorityLevel;
                    var didUserCallbackTimeout = currentTask.expirationTime <= currentTime;
                    var continuationCallback = callback(didUserCallbackTimeout);
                    currentTime = exports.unstable_now();
                    if (typeof continuationCallback === 'function') {
                        currentTask.callback = continuationCallback;
                    } else {
                        if (currentTask === peek(taskQueue)) {
                            pop(taskQueue);
                        }
                    }
                    advanceTimers(currentTime);
                } else {
                    pop(taskQueue);
                }
                currentTask = peek(taskQueue);
            } // Return whether there's additional work
            if (currentTask !== null) {
                return true;
            } else {
                var firstTimer = peek(timerQueue);
                if (firstTimer !== null) {
                    requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
                }
                return false;
            }
        }
        function unstable_runWithPriority(priorityLevel, eventHandler) {
            switch(priorityLevel){
                case ImmediatePriority:
                case UserBlockingPriority:
                case NormalPriority:
                case LowPriority:
                case IdlePriority:
                    break;
                default:
                    priorityLevel = NormalPriority;
            }
            var previousPriorityLevel = currentPriorityLevel;
            currentPriorityLevel = priorityLevel;
            try {
                return eventHandler();
            } finally{
                currentPriorityLevel = previousPriorityLevel;
            }
        }
        function unstable_next(eventHandler) {
            var priorityLevel;
            switch(currentPriorityLevel){
                case ImmediatePriority:
                case UserBlockingPriority:
                case NormalPriority:
                    // Shift down to normal priority
                    priorityLevel = NormalPriority;
                    break;
                default:
                    // Anything lower than normal priority should remain at the current level.
                    priorityLevel = currentPriorityLevel;
                    break;
            }
            var previousPriorityLevel = currentPriorityLevel;
            currentPriorityLevel = priorityLevel;
            try {
                return eventHandler();
            } finally{
                currentPriorityLevel = previousPriorityLevel;
            }
        }
        function unstable_wrapCallback(callback) {
            var parentPriorityLevel = currentPriorityLevel;
            return function() {
                // This is a fork of runWithPriority, inlined for performance.
                var previousPriorityLevel = currentPriorityLevel;
                currentPriorityLevel = parentPriorityLevel;
                try {
                    return callback.apply(this, arguments);
                } finally{
                    currentPriorityLevel = previousPriorityLevel;
                }
            };
        }
        function unstable_scheduleCallback(priorityLevel, callback, options) {
            var currentTime = exports.unstable_now();
            var startTime;
            if (typeof options === 'object' && options !== null) {
                var delay = options.delay;
                if (typeof delay === 'number' && delay > 0) {
                    startTime = currentTime + delay;
                } else {
                    startTime = currentTime;
                }
            } else {
                startTime = currentTime;
            }
            var timeout;
            switch(priorityLevel){
                case ImmediatePriority:
                    timeout = IMMEDIATE_PRIORITY_TIMEOUT;
                    break;
                case UserBlockingPriority:
                    timeout = USER_BLOCKING_PRIORITY_TIMEOUT;
                    break;
                case IdlePriority:
                    timeout = IDLE_PRIORITY_TIMEOUT;
                    break;
                case LowPriority:
                    timeout = LOW_PRIORITY_TIMEOUT;
                    break;
                case NormalPriority:
                default:
                    timeout = NORMAL_PRIORITY_TIMEOUT;
                    break;
            }
            var expirationTime = startTime + timeout;
            var newTask = {
                id: taskIdCounter++,
                callback: callback,
                priorityLevel: priorityLevel,
                startTime: startTime,
                expirationTime: expirationTime,
                sortIndex: -1
            };
            if (startTime > currentTime) {
                // This is a delayed task.
                newTask.sortIndex = startTime;
                push(timerQueue, newTask);
                if (peek(taskQueue) === null && newTask === peek(timerQueue)) {
                    // All tasks are delayed, and this is the task with the earliest delay.
                    if (isHostTimeoutScheduled) {
                        // Cancel an existing timeout.
                        cancelHostTimeout();
                    } else {
                        isHostTimeoutScheduled = true;
                    } // Schedule a timeout.
                    requestHostTimeout(handleTimeout, startTime - currentTime);
                }
            } else {
                newTask.sortIndex = expirationTime;
                push(taskQueue, newTask);
                // wait until the next time we yield.
                if (!isHostCallbackScheduled && !isPerformingWork) {
                    isHostCallbackScheduled = true;
                    requestHostCallback(flushWork);
                }
            }
            return newTask;
        }
        function unstable_pauseExecution() {}
        function unstable_continueExecution() {
            if (!isHostCallbackScheduled && !isPerformingWork) {
                isHostCallbackScheduled = true;
                requestHostCallback(flushWork);
            }
        }
        function unstable_getFirstCallbackNode() {
            return peek(taskQueue);
        }
        function unstable_cancelCallback(task) {
            // remove from the queue because you can't remove arbitrary nodes from an
            // array based heap, only the first one.)
            task.callback = null;
        }
        function unstable_getCurrentPriorityLevel() {
            return currentPriorityLevel;
        }
        var isMessageLoopRunning = false;
        var scheduledHostCallback = null;
        var taskTimeoutID = -1; // Scheduler periodically yields in case there is other work on the main
        // thread, like user events. By default, it yields multiple times per frame.
        // It does not attempt to align with frame boundaries, since most tasks don't
        // need to be frame aligned; for those that do, use requestAnimationFrame.
        var frameInterval = frameYieldMs;
        var startTime = -1;
        function shouldYieldToHost() {
            var timeElapsed = exports.unstable_now() - startTime;
            if (timeElapsed < frameInterval) {
                // The main thread has only been blocked for a really short amount of time;
                // smaller than a single frame. Don't yield yet.
                return false;
            } // The main thread has been blocked for a non-negligible amount of time. We
            return true;
        }
        function requestPaint() {}
        function forceFrameRate(fps) {
            if (fps < 0 || fps > 125) {
                // Using console['error'] to evade Babel and ESLint
                console['error']('forceFrameRate takes a positive int between 0 and 125, ' + 'forcing frame rates higher than 125 fps is not supported');
                return;
            }
            if (fps > 0) {
                frameInterval = Math.floor(1000 / fps);
            } else {
                // reset the framerate
                frameInterval = frameYieldMs;
            }
        }
        var performWorkUntilDeadline = function() {
            if (scheduledHostCallback !== null) {
                var currentTime = exports.unstable_now(); // Keep track of the start time so we can measure how long the main thread
                // has been blocked.
                startTime = currentTime;
                var hasTimeRemaining = true; // If a scheduler task throws, exit the current browser task so the
                // error can be observed.
                //
                // Intentionally not using a try-catch, since that makes some debugging
                // techniques harder. Instead, if `scheduledHostCallback` errors, then
                // `hasMoreWork` will remain true, and we'll continue the work loop.
                var hasMoreWork = true;
                try {
                    hasMoreWork = scheduledHostCallback(hasTimeRemaining, currentTime);
                } finally{
                    if (hasMoreWork) {
                        // If there's more work, schedule the next message event at the end
                        // of the preceding one.
                        schedulePerformWorkUntilDeadline();
                    } else {
                        isMessageLoopRunning = false;
                        scheduledHostCallback = null;
                    }
                }
            } else {
                isMessageLoopRunning = false;
            } // Yielding to the browser will give it a chance to paint, so we can
        };
        var schedulePerformWorkUntilDeadline;
        if (typeof localSetImmediate === 'function') {
            // Node.js and old IE.
            // There's a few reasons for why we prefer setImmediate.
            //
            // Unlike MessageChannel, it doesn't prevent a Node.js process from exiting.
            // (Even though this is a DOM fork of the Scheduler, you could get here
            // with a mix of Node.js 15+, which has a MessageChannel, and jsdom.)
            // https://github.com/facebook/react/issues/20756
            //
            // But also, it runs earlier which is the semantic we want.
            // If other browsers ever implement it, it's better to use it.
            // Although both of these would be inferior to native scheduling.
            schedulePerformWorkUntilDeadline = function() {
                localSetImmediate(performWorkUntilDeadline);
            };
        } else if (typeof MessageChannel !== 'undefined') {
            // DOM and Worker environments.
            // We prefer MessageChannel because of the 4ms setTimeout clamping.
            var channel = new MessageChannel();
            var port = channel.port2;
            channel.port1.onmessage = performWorkUntilDeadline;
            schedulePerformWorkUntilDeadline = function() {
                port.postMessage(null);
            };
        } else {
            // We should only fallback here in non-browser environments.
            schedulePerformWorkUntilDeadline = function() {
                localSetTimeout(performWorkUntilDeadline, 0);
            };
        }
        function requestHostCallback(callback) {
            scheduledHostCallback = callback;
            if (!isMessageLoopRunning) {
                isMessageLoopRunning = true;
                schedulePerformWorkUntilDeadline();
            }
        }
        function requestHostTimeout(callback, ms) {
            taskTimeoutID = localSetTimeout(function() {
                callback(exports.unstable_now());
            }, ms);
        }
        function cancelHostTimeout() {
            localClearTimeout(taskTimeoutID);
            taskTimeoutID = -1;
        }
        var unstable_requestPaint = requestPaint;
        var unstable_Profiling = null;
        exports.unstable_IdlePriority = IdlePriority;
        exports.unstable_ImmediatePriority = ImmediatePriority;
        exports.unstable_LowPriority = LowPriority;
        exports.unstable_NormalPriority = NormalPriority;
        exports.unstable_Profiling = unstable_Profiling;
        exports.unstable_UserBlockingPriority = UserBlockingPriority;
        exports.unstable_cancelCallback = unstable_cancelCallback;
        exports.unstable_continueExecution = unstable_continueExecution;
        exports.unstable_forceFrameRate = forceFrameRate;
        exports.unstable_getCurrentPriorityLevel = unstable_getCurrentPriorityLevel;
        exports.unstable_getFirstCallbackNode = unstable_getFirstCallbackNode;
        exports.unstable_next = unstable_next;
        exports.unstable_pauseExecution = unstable_pauseExecution;
        exports.unstable_requestPaint = unstable_requestPaint;
        exports.unstable_runWithPriority = unstable_runWithPriority;
        exports.unstable_scheduleCallback = unstable_scheduleCallback;
        exports.unstable_shouldYield = shouldYieldToHost;
        exports.unstable_wrapCallback = unstable_wrapCallback;
        /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */ if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === 'function') {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
        }
    })();
}
}),
"[project]/node_modules/scheduler/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/scheduler/cjs/scheduler.development.js [app-client] (ecmascript)");
}
}),
"[project]/apps/frontend/node_modules/suspend-react/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clear",
    ()=>clear,
    "peek",
    ()=>peek,
    "preload",
    ()=>preload,
    "suspend",
    ()=>suspend
]);
function shallowEqualArrays(arrA, arrB, equal = (a, b)=>a === b) {
    if (arrA === arrB) return true;
    if (!arrA || !arrB) return false;
    const len = arrA.length;
    if (arrB.length !== len) return false;
    for(let i = 0; i < len; i++)if (!equal(arrA[i], arrB[i])) return false;
    return true;
}
const globalCache = [];
function query(fn, keys, preload = false, config = {}) {
    for (const entry of globalCache){
        // Find a match
        if (shallowEqualArrays(keys, entry.keys, entry.equal)) {
            // If we're pre-loading and the element is present, just return
            if (preload) return undefined; // If an error occurred, throw
            if (Object.prototype.hasOwnProperty.call(entry, 'error')) throw entry.error; // If a response was successful, return
            if (Object.prototype.hasOwnProperty.call(entry, 'response')) return entry.response; // If the promise is still unresolved, throw
            if (!preload) throw entry.promise;
        }
    } // The request is new or has changed.
    const entry = {
        keys,
        equal: config.equal,
        promise: fn(...keys) // When it resolves, store its value
        .then((response)=>entry.response = response) // Remove the entry if a lifespan was given
        .then(()=>{
            if (config.lifespan && config.lifespan > 0) {
                setTimeout(()=>{
                    const index = globalCache.indexOf(entry);
                    if (index !== -1) globalCache.splice(index, 1);
                }, config.lifespan);
            }
        }) // Store caught errors, they will be thrown in the render-phase to bubble into an error-bound
        .catch((error)=>entry.error = error)
    }; // Register the entry
    globalCache.push(entry); // And throw the promise, this yields control back to React
    if (!preload) throw entry.promise;
    return undefined;
}
const suspend = (fn, keys, config)=>query(fn, keys, false, config);
const preload = (fn, keys, config)=>void query(fn, keys, true, config);
const peek = (keys)=>{
    var _globalCache$find;
    return (_globalCache$find = globalCache.find((entry)=>shallowEqualArrays(keys, entry.keys, entry.equal))) == null ? void 0 : _globalCache$find.response;
};
const clear = (keys)=>{
    if (keys === undefined || keys.length === 0) globalCache.splice(0, globalCache.length);
    else {
        const entry = globalCache.find((entry)=>shallowEqualArrays(keys, entry.keys, entry.equal));
        if (entry) {
            const index = globalCache.indexOf(entry);
            if (index !== -1) globalCache.splice(index, 1);
        }
    }
};
;
}),
"[project]/apps/frontend/node_modules/@react-three/fiber/dist/index-4f1a8e2f.esm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "B",
    ()=>Block,
    "E",
    ()=>ErrorBoundary,
    "a",
    ()=>createRoot,
    "b",
    ()=>useIsomorphicLayoutEffect,
    "c",
    ()=>createEvents,
    "d",
    ()=>unmountComponentAtNode,
    "e",
    ()=>extend,
    "f",
    ()=>context,
    "g",
    ()=>createPortal,
    "h",
    ()=>reconciler,
    "i",
    ()=>applyProps,
    "j",
    ()=>dispose,
    "k",
    ()=>invalidate,
    "l",
    ()=>advance,
    "m",
    ()=>addEffect,
    "n",
    ()=>addAfterEffect,
    "o",
    ()=>addTail,
    "p",
    ()=>getRootState,
    "q",
    ()=>act,
    "r",
    ()=>render,
    "s",
    ()=>roots,
    "t",
    ()=>threeTypes,
    "u",
    ()=>useMutableCallback,
    "v",
    ()=>useStore,
    "w",
    ()=>useThree,
    "x",
    ()=>useFrame,
    "y",
    ()=>useGraph,
    "z",
    ()=>useLoader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.module.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$reconciler$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-reconciler/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f$zustand$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/zustand/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$reconciler$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-reconciler/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$scheduler$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/scheduler/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f$suspend$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/suspend-react/dist/index.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
var threeTypes = /*#__PURE__*/ Object.freeze({
    __proto__: null
});
const isOrthographicCamera = (def)=>def && def.isOrthographicCamera; // React currently throws a warning when using useLayoutEffect on the server.
// To get around it, we can conditionally useEffect on the server (no-op) and
// useLayoutEffect on the client.
const isSSR = typeof window === 'undefined' || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent);
const useIsomorphicLayoutEffect = isSSR ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"];
function useMutableCallback(fn) {
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](fn);
    useIsomorphicLayoutEffect({
        "useMutableCallback.useIsomorphicLayoutEffect": ()=>void (ref.current = fn)
    }["useMutableCallback.useIsomorphicLayoutEffect"], [
        fn
    ]);
    return ref;
}
function Block({ set }) {
    useIsomorphicLayoutEffect({
        "Block.useIsomorphicLayoutEffect": ()=>{
            set(new Promise({
                "Block.useIsomorphicLayoutEffect": ()=>null
            }["Block.useIsomorphicLayoutEffect"]));
            return ({
                "Block.useIsomorphicLayoutEffect": ()=>set(false)
            })["Block.useIsomorphicLayoutEffect"];
        }
    }["Block.useIsomorphicLayoutEffect"], [
        set
    ]);
    return null;
}
class ErrorBoundary extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Component"] {
    constructor(...args){
        super(...args);
        this.state = {
            error: false
        };
    }
    componentDidCatch(error) {
        this.props.set(error);
    }
    render() {
        return this.state.error ? null : this.props.children;
    }
}
ErrorBoundary.getDerivedStateFromError = ()=>({
        error: true
    });
const DEFAULT = '__default';
const isDiffSet = (def)=>def && !!def.memoized && !!def.changes;
function calculateDpr(dpr) {
    return Array.isArray(dpr) ? Math.min(Math.max(dpr[0], window.devicePixelRatio), dpr[1]) : dpr;
}
/**
 * Returns instance root state
 */ const getRootState = (obj)=>{
    var _r3f;
    return (_r3f = obj.__r3f) == null ? void 0 : _r3f.root.getState();
};
// A collection of compare functions
const is = {
    obj: (a)=>a === Object(a) && !is.arr(a) && typeof a !== 'function',
    fun: (a)=>typeof a === 'function',
    str: (a)=>typeof a === 'string',
    num: (a)=>typeof a === 'number',
    boo: (a)=>typeof a === 'boolean',
    und: (a)=>a === void 0,
    arr: (a)=>Array.isArray(a),
    equ (a, b, { arrays = 'shallow', objects = 'reference', strict = true } = {}) {
        // Wrong type or one of the two undefined, doesn't match
        if (typeof a !== typeof b || !!a !== !!b) return false; // Atomic, just compare a against b
        if (is.str(a) || is.num(a)) return a === b;
        const isObj = is.obj(a);
        if (isObj && objects === 'reference') return a === b;
        const isArr = is.arr(a);
        if (isArr && arrays === 'reference') return a === b; // Array or Object, shallow compare first to see if it's a match
        if ((isArr || isObj) && a === b) return true; // Last resort, go through keys
        let i;
        for(i in a)if (!(i in b)) return false;
        for(i in strict ? b : a)if (a[i] !== b[i]) return false;
        if (is.und(i)) {
            if (isArr && a.length === 0 && b.length === 0) return true;
            if (isObj && Object.keys(a).length === 0 && Object.keys(b).length === 0) return true;
            if (a !== b) return false;
        }
        return true;
    }
}; // Collects nodes and materials from a THREE.Object3D
function buildGraph(object) {
    const data = {
        nodes: {},
        materials: {}
    };
    if (object) {
        object.traverse((obj)=>{
            if (obj.name) data.nodes[obj.name] = obj;
            if (obj.material && !data.materials[obj.material.name]) data.materials[obj.material.name] = obj.material;
        });
    }
    return data;
} // Disposes an object and all its properties
function dispose(obj) {
    if (obj.dispose && obj.type !== 'Scene') obj.dispose();
    for(const p in obj){
        p.dispose == null ? void 0 : p.dispose();
        delete obj[p];
    }
} // Each object in the scene carries a small LocalState descriptor
function prepare(object, state) {
    const instance = object;
    if (state != null && state.primitive || !instance.__r3f) {
        instance.__r3f = {
            type: '',
            root: null,
            previousAttach: null,
            memoizedProps: {},
            eventCount: 0,
            handlers: {},
            objects: [],
            parent: null,
            ...state
        };
    }
    return object;
}
function resolve(instance, key) {
    let target = instance;
    if (key.includes('-')) {
        const entries = key.split('-');
        const last = entries.pop();
        target = entries.reduce((acc, key)=>acc[key], instance);
        return {
            target,
            key: last
        };
    } else return {
        target,
        key
    };
} // Checks if a dash-cased string ends with an integer
const INDEX_REGEX = /-\d+$/;
function attach(parent, child, type) {
    if (is.str(type)) {
        // If attaching into an array (foo-0), create one
        if (INDEX_REGEX.test(type)) {
            const root = type.replace(INDEX_REGEX, '');
            const { target, key } = resolve(parent, root);
            if (!Array.isArray(target[key])) target[key] = [];
        }
        const { target, key } = resolve(parent, type);
        child.__r3f.previousAttach = target[key];
        target[key] = child;
    } else child.__r3f.previousAttach = type(parent, child);
}
function detach(parent, child, type) {
    var _child$__r3f, _child$__r3f2;
    if (is.str(type)) {
        const { target, key } = resolve(parent, type);
        const previous = child.__r3f.previousAttach; // When the previous value was undefined, it means the value was never set to begin with
        if (previous === undefined) delete target[key]; // Otherwise set the previous value
        else target[key] = previous;
    } else (_child$__r3f = child.__r3f) == null ? void 0 : _child$__r3f.previousAttach == null ? void 0 : _child$__r3f.previousAttach(parent, child);
    (_child$__r3f2 = child.__r3f) == null ? true : delete _child$__r3f2.previousAttach;
} // This function prepares a set of changes to be applied to the instance
function diffProps(instance, { children: cN, key: kN, ref: rN, ...props }, { children: cP, key: kP, ref: rP, ...previous } = {}, remove = false) {
    var _instance$__r3f;
    const localState = (_instance$__r3f = instance == null ? void 0 : instance.__r3f) != null ? _instance$__r3f : {};
    const entries = Object.entries(props);
    const changes = []; // Catch removed props, prepend them so they can be reset or removed
    if (remove) {
        const previousKeys = Object.keys(previous);
        for(let i = 0; i < previousKeys.length; i++){
            if (!props.hasOwnProperty(previousKeys[i])) entries.unshift([
                previousKeys[i],
                DEFAULT + 'remove'
            ]);
        }
    }
    entries.forEach(([key, value])=>{
        var _instance$__r3f2;
        // Bail out on primitive object
        if ((_instance$__r3f2 = instance.__r3f) != null && _instance$__r3f2.primitive && key === 'object') return; // When props match bail out
        if (is.equ(value, previous[key])) return; // Collect handlers and bail out
        if (/^on(Pointer|Click|DoubleClick|ContextMenu|Wheel)/.test(key)) return changes.push([
            key,
            value,
            true,
            []
        ]); // Split dashed props
        let entries = [];
        if (key.includes('-')) entries = key.split('-');
        changes.push([
            key,
            value,
            false,
            entries
        ]);
    });
    const memoized = {
        ...props
    };
    if (localState.memoizedProps && localState.memoizedProps.args) memoized.args = localState.memoizedProps.args;
    if (localState.memoizedProps && localState.memoizedProps.attach) memoized.attach = localState.memoizedProps.attach;
    return {
        memoized,
        changes
    };
} // This function applies a set of changes to the instance
function applyProps$1(instance, data) {
    var _instance$__r3f3, _root$getState;
    // Filter equals, events and reserved props
    const localState = (_instance$__r3f3 = instance.__r3f) != null ? _instance$__r3f3 : {};
    const root = localState.root;
    const rootState = (_root$getState = root == null ? void 0 : root.getState == null ? void 0 : root.getState()) != null ? _root$getState : {};
    const { memoized, changes } = isDiffSet(data) ? data : diffProps(instance, data);
    const prevHandlers = localState.eventCount; // Prepare memoized props
    if (instance.__r3f) instance.__r3f.memoizedProps = memoized;
    changes.forEach(([key, value, isEvent, keys])=>{
        let currentInstance = instance;
        let targetProp = currentInstance[key]; // Revolve dashed props
        if (keys.length) {
            targetProp = keys.reduce((acc, key)=>acc[key], instance); // If the target is atomic, it forces us to switch the root
            if (!(targetProp && targetProp.set)) {
                const [name, ...reverseEntries] = keys.reverse();
                currentInstance = reverseEntries.reverse().reduce((acc, key)=>acc[key], instance);
                key = name;
            }
        } // https://github.com/mrdoob/three.js/issues/21209
        // HMR/fast-refresh relies on the ability to cancel out props, but threejs
        // has no means to do this. Hence we curate a small collection of value-classes
        // with their respective constructor/set arguments
        // For removed props, try to set default values, if possible
        if (value === DEFAULT + 'remove') {
            if (targetProp && targetProp.constructor) {
                var _memoized$args;
                // use the prop constructor to find the default it should be
                value = new targetProp.constructor(...(_memoized$args = memoized.args) != null ? _memoized$args : []);
            } else if (currentInstance.constructor) {
                var _currentInstance$__r;
                // create a blank slate of the instance and copy the particular parameter.
                // @ts-ignore
                const defaultClassCall = new currentInstance.constructor(...(_currentInstance$__r = currentInstance.__r3f.memoizedProps.args) != null ? _currentInstance$__r : []);
                value = defaultClassCall[targetProp]; // destory the instance
                if (defaultClassCall.dispose) defaultClassCall.dispose(); // instance does not have constructor, just set it to 0
            } else {
                value = 0;
            }
        } // Deal with pointer events ...
        if (isEvent) {
            if (value) localState.handlers[key] = value;
            else delete localState.handlers[key];
            localState.eventCount = Object.keys(localState.handlers).length;
        } else if (targetProp && targetProp.set && (targetProp.copy || targetProp instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Layers)) {
            // If value is an array
            if (Array.isArray(value)) {
                if (targetProp.fromArray) targetProp.fromArray(value);
                else targetProp.set(...value);
            } else if (targetProp.copy && value && value.constructor && targetProp.constructor.name === value.constructor.name) {
                targetProp.copy(value);
            } else if (value !== undefined) {
                const isColor = targetProp instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Color; // Allow setting array scalars
                if (!isColor && targetProp.setScalar) targetProp.setScalar(value); // Layers have no copy function, we must therefore copy the mask property
                else if (targetProp instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Layers && value instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Layers) targetProp.mask = value.mask; // Otherwise just set ...
                else targetProp.set(value); // For versions of three which don't support THREE.ColorManagement,
                // Auto-convert sRGB colors
                // https://github.com/pmndrs/react-three-fiber/issues/344
                const supportsColorManagement = 'ColorManagement' in __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__;
                if (!supportsColorManagement && !rootState.linear && isColor) targetProp.convertSRGBToLinear();
            } // Else, just overwrite the value
        } else {
            currentInstance[key] = value; // Auto-convert sRGB textures, for now ...
            // https://github.com/pmndrs/react-three-fiber/issues/344
            if (!rootState.linear && currentInstance[key] instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Texture) {
                currentInstance[key].encoding = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.sRGBEncoding;
            }
        }
        invalidateInstance(instance);
    });
    if (localState.parent && rootState.internal && instance.raycast && prevHandlers !== localState.eventCount) {
        // Pre-emptively remove the instance from the interaction manager
        const index = rootState.internal.interaction.indexOf(instance);
        if (index > -1) rootState.internal.interaction.splice(index, 1); // Add the instance to the interaction manager only when it has handlers
        if (localState.eventCount) rootState.internal.interaction.push(instance);
    } // Call the update lifecycle when it is being updated, but only when it is part of the scene
    if (changes.length && instance.parent) updateInstance(instance);
    return instance;
}
function invalidateInstance(instance) {
    var _instance$__r3f4, _instance$__r3f4$root;
    const state = (_instance$__r3f4 = instance.__r3f) == null ? void 0 : (_instance$__r3f4$root = _instance$__r3f4.root) == null ? void 0 : _instance$__r3f4$root.getState == null ? void 0 : _instance$__r3f4$root.getState();
    if (state && state.internal.frames === 0) state.invalidate();
}
function updateInstance(instance) {
    instance.onUpdate == null ? void 0 : instance.onUpdate(instance);
}
function updateCamera(camera, size) {
    // https://github.com/pmndrs/react-three-fiber/issues/92
    // Do not mess with the camera if it belongs to the user
    if (!camera.manual) {
        if (isOrthographicCamera(camera)) {
            camera.left = size.width / -2;
            camera.right = size.width / 2;
            camera.top = size.height / 2;
            camera.bottom = size.height / -2;
        } else {
            camera.aspect = size.width / size.height;
        }
        camera.updateProjectionMatrix(); // https://github.com/pmndrs/react-three-fiber/issues/178
        // Update matrix world since the renderer is a frame late
        camera.updateMatrixWorld();
    }
}
/**
 * Safely sets a deeply-nested value on an object.
 */ function setDeep(obj, value, keys) {
    const key = keys.pop();
    const target = keys.reduce((acc, key)=>acc[key], obj);
    return target[key] = value;
}
function makeId(event) {
    return (event.eventObject || event.object).uuid + '/' + event.index + event.instanceId;
} // https://github.com/facebook/react/tree/main/packages/react-reconciler#getcurrenteventpriority
// Gives React a clue as to how import the current interaction is
function getEventPriority() {
    var _window, _window$event;
    let name = (_window = window) == null ? void 0 : (_window$event = _window.event) == null ? void 0 : _window$event.type;
    switch(name){
        case 'click':
        case 'contextmenu':
        case 'dblclick':
        case 'pointercancel':
        case 'pointerdown':
        case 'pointerup':
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$reconciler$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DiscreteEventPriority"];
        case 'pointermove':
        case 'pointerout':
        case 'pointerover':
        case 'pointerenter':
        case 'pointerleave':
        case 'wheel':
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$reconciler$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContinuousEventPriority"];
        default:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$reconciler$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DefaultEventPriority"];
    }
}
/**
 * Release pointer captures.
 * This is called by releasePointerCapture in the API, and when an object is removed.
 */ function releaseInternalPointerCapture(capturedMap, obj, captures, pointerId) {
    const captureData = captures.get(obj);
    if (captureData) {
        captures.delete(obj); // If this was the last capturing object for this pointer
        if (captures.size === 0) {
            capturedMap.delete(pointerId);
            captureData.target.releasePointerCapture(pointerId);
        }
    }
}
function removeInteractivity(store, object) {
    const { internal } = store.getState(); // Removes every trace of an object from the data store
    internal.interaction = internal.interaction.filter((o)=>o !== object);
    internal.initialHits = internal.initialHits.filter((o)=>o !== object);
    internal.hovered.forEach((value, key)=>{
        if (value.eventObject === object || value.object === object) {
            // Clear out intersects, they are outdated by now
            internal.hovered.delete(key);
        }
    });
    internal.capturedMap.forEach((captures, pointerId)=>{
        releaseInternalPointerCapture(internal.capturedMap, object, captures, pointerId);
    });
}
function createEvents(store) {
    const temp = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Vector3();
    /** Calculates delta */ function calculateDistance(event) {
        const { internal } = store.getState();
        const dx = event.offsetX - internal.initialClick[0];
        const dy = event.offsetY - internal.initialClick[1];
        return Math.round(Math.sqrt(dx * dx + dy * dy));
    }
    /** Returns true if an instance has a valid pointer-event registered, this excludes scroll, clicks etc */ function filterPointerEvents(objects) {
        return objects.filter((obj)=>[
                'Move',
                'Over',
                'Enter',
                'Out',
                'Leave'
            ].some((name)=>{
                var _r3f;
                return (_r3f = obj.__r3f) == null ? void 0 : _r3f.handlers['onPointer' + name];
            }));
    }
    function intersect(event, filter) {
        const state = store.getState();
        const duplicates = new Set();
        const intersections = []; // Allow callers to eliminate event objects
        const eventsObjects = filter ? filter(state.internal.interaction) : state.internal.interaction; // Reset all raycaster cameras to undefined
        eventsObjects.forEach((obj)=>{
            const state = getRootState(obj);
            if (state) {
                state.raycaster.camera = undefined;
            }
        });
        if (!state.previousRoot) {
            // Make sure root-level pointer and ray are set up
            state.events.compute == null ? void 0 : state.events.compute(event, state);
        } // Collect events
        let hits = eventsObjects // Intersect objects
        .flatMap((obj)=>{
            const state = getRootState(obj); // Skip event handling when noEvents is set, or when the raycasters camera is null
            if (!state || !state.events.enabled || state.raycaster.camera === null) return []; // When the camera is undefined we have to call the event layers update function
            if (state.raycaster.camera === undefined) {
                var _state$previousRoot;
                state.events.compute == null ? void 0 : state.events.compute(event, state, (_state$previousRoot = state.previousRoot) == null ? void 0 : _state$previousRoot.getState()); // If the camera is still undefined we have to skip this layer entirely
                if (state.raycaster.camera === undefined) state.raycaster.camera = null;
            } // Intersect object by object
            return state.raycaster.camera ? state.raycaster.intersectObject(obj, true) : [];
        }) // Sort by event priority and distance
        .sort((a, b)=>{
            const aState = getRootState(a.object);
            const bState = getRootState(b.object);
            if (!aState || !bState) return 0;
            return bState.events.priority - aState.events.priority || a.distance - b.distance;
        }) // Filter out duplicates
        .filter((item)=>{
            const id = makeId(item);
            if (duplicates.has(id)) return false;
            duplicates.add(id);
            return true;
        }); // https://github.com/mrdoob/three.js/issues/16031
        // Allow custom userland intersect sort order, this likely only makes sense on the root filter
        if (state.events.filter) hits = state.events.filter(hits, state); // Bubble up the events, find the event source (eventObject)
        for (const hit of hits){
            let eventObject = hit.object; // Bubble event up
            while(eventObject){
                var _r3f2;
                if ((_r3f2 = eventObject.__r3f) != null && _r3f2.eventCount) intersections.push({
                    ...hit,
                    eventObject
                });
                eventObject = eventObject.parent;
            }
        } // If the interaction is captured, make all capturing targets part of the intersect.
        if ('pointerId' in event && state.internal.capturedMap.has(event.pointerId)) {
            for (let captureData of state.internal.capturedMap.get(event.pointerId).values()){
                intersections.push(captureData.intersection);
            }
        }
        return intersections;
    }
    /**  Handles intersections by forwarding them to handlers */ function handleIntersects(intersections, event, delta, callback) {
        const { raycaster, pointer, camera, internal } = store.getState(); // If anything has been found, forward it to the event listeners
        if (intersections.length) {
            const unprojectedPoint = temp.set(pointer.x, pointer.y, 0).unproject(camera);
            const localState = {
                stopped: false
            };
            for (const hit of intersections){
                const hasPointerCapture = (id)=>{
                    var _internal$capturedMap, _internal$capturedMap2;
                    return (_internal$capturedMap = (_internal$capturedMap2 = internal.capturedMap.get(id)) == null ? void 0 : _internal$capturedMap2.has(hit.eventObject)) != null ? _internal$capturedMap : false;
                };
                const setPointerCapture = (id)=>{
                    const captureData = {
                        intersection: hit,
                        target: event.target
                    };
                    if (internal.capturedMap.has(id)) {
                        // if the pointerId was previously captured, we add the hit to the
                        // event capturedMap.
                        internal.capturedMap.get(id).set(hit.eventObject, captureData);
                    } else {
                        // if the pointerId was not previously captured, we create a map
                        // containing the hitObject, and the hit. hitObject is used for
                        // faster access.
                        internal.capturedMap.set(id, new Map([
                            [
                                hit.eventObject,
                                captureData
                            ]
                        ]));
                    } // Call the original event now
                    event.target.setPointerCapture(id);
                };
                const releasePointerCapture = (id)=>{
                    const captures = internal.capturedMap.get(id);
                    if (captures) {
                        releaseInternalPointerCapture(internal.capturedMap, hit.eventObject, captures, id);
                    }
                }; // Add native event props
                let extractEventProps = {}; // This iterates over the event's properties including the inherited ones. Native PointerEvents have most of their props as getters which are inherited, but polyfilled PointerEvents have them all as their own properties (i.e. not inherited). We can't use Object.keys() or Object.entries() as they only return "own" properties; nor Object.getPrototypeOf(event) as that *doesn't* return "own" properties, only inherited ones.
                for(let prop in event){
                    let property = event[prop]; // Only copy over atomics, leave functions alone as these should be
                    // called as event.nativeEvent.fn()
                    if (typeof property !== 'function') extractEventProps[prop] = property;
                }
                let raycastEvent = {
                    ...hit,
                    ...extractEventProps,
                    pointer,
                    intersections,
                    stopped: localState.stopped,
                    delta,
                    unprojectedPoint,
                    ray: raycaster.ray,
                    camera: camera,
                    // Hijack stopPropagation, which just sets a flag
                    stopPropagation: ()=>{
                        // https://github.com/pmndrs/react-three-fiber/issues/596
                        // Events are not allowed to stop propagation if the pointer has been captured
                        const capturesForPointer = 'pointerId' in event && internal.capturedMap.get(event.pointerId); // We only authorize stopPropagation...
                        if (!capturesForPointer || // ... or if the hit object is capturing the pointer
                        capturesForPointer.has(hit.eventObject)) {
                            raycastEvent.stopped = localState.stopped = true; // Propagation is stopped, remove all other hover records
                            // An event handler is only allowed to flush other handlers if it is hovered itself
                            if (internal.hovered.size && Array.from(internal.hovered.values()).find((i)=>i.eventObject === hit.eventObject)) {
                                // Objects cannot flush out higher up objects that have already caught the event
                                const higher = intersections.slice(0, intersections.indexOf(hit));
                                cancelPointer([
                                    ...higher,
                                    hit
                                ]);
                            }
                        }
                    },
                    // there should be a distinction between target and currentTarget
                    target: {
                        hasPointerCapture,
                        setPointerCapture,
                        releasePointerCapture
                    },
                    currentTarget: {
                        hasPointerCapture,
                        setPointerCapture,
                        releasePointerCapture
                    },
                    nativeEvent: event
                }; // Call subscribers
                callback(raycastEvent); // Event bubbling may be interrupted by stopPropagation
                if (localState.stopped === true) break;
            }
        }
        return intersections;
    }
    function cancelPointer(intersections) {
        const { internal } = store.getState();
        Array.from(internal.hovered.values()).forEach((hoveredObj)=>{
            // When no objects were hit or the the hovered object wasn't found underneath the cursor
            // we call onPointerOut and delete the object from the hovered-elements map
            if (!intersections.length || !intersections.find((hit)=>hit.object === hoveredObj.object && hit.index === hoveredObj.index && hit.instanceId === hoveredObj.instanceId)) {
                const eventObject = hoveredObj.eventObject;
                const instance = eventObject.__r3f;
                const handlers = instance == null ? void 0 : instance.handlers;
                internal.hovered.delete(makeId(hoveredObj));
                if (instance != null && instance.eventCount) {
                    // Clear out intersects, they are outdated by now
                    const data = {
                        ...hoveredObj,
                        intersections
                    };
                    handlers.onPointerOut == null ? void 0 : handlers.onPointerOut(data);
                    handlers.onPointerLeave == null ? void 0 : handlers.onPointerLeave(data);
                }
            }
        });
    }
    const handlePointer = (name)=>{
        // Deal with cancelation
        switch(name){
            case 'onPointerLeave':
            case 'onPointerCancel':
                return ()=>cancelPointer([]);
            case 'onLostPointerCapture':
                return (event)=>{
                    const { internal } = store.getState();
                    if ('pointerId' in event && !internal.capturedMap.has(event.pointerId)) {
                        // If the object event interface had onLostPointerCapture, we'd call it here on every
                        // object that's getting removed.
                        internal.capturedMap.delete(event.pointerId);
                        cancelPointer([]);
                    }
                };
        } // Any other pointer goes here ...
        return (event)=>{
            const { onPointerMissed, internal } = store.getState(); //prepareRay(event)
            internal.lastEvent.current = event; // Get fresh intersects
            const isPointerMove = name === 'onPointerMove';
            const isClickEvent = name === 'onClick' || name === 'onContextMenu' || name === 'onDoubleClick';
            const filter = isPointerMove ? filterPointerEvents : undefined; //const hits = patchIntersects(intersect(filter), event)
            const hits = intersect(event, filter);
            const delta = isClickEvent ? calculateDistance(event) : 0; // Save initial coordinates on pointer-down
            if (name === 'onPointerDown') {
                internal.initialClick = [
                    event.offsetX,
                    event.offsetY
                ];
                internal.initialHits = hits.map((hit)=>hit.eventObject);
            } // If a click yields no results, pass it back to the user as a miss
            // Missed events have to come first in order to establish user-land side-effect clean up
            if (isClickEvent && !hits.length) {
                if (delta <= 2) {
                    pointerMissed(event, internal.interaction);
                    if (onPointerMissed) onPointerMissed(event);
                }
            } // Take care of unhover
            if (isPointerMove) cancelPointer(hits);
            handleIntersects(hits, event, delta, (data)=>{
                const eventObject = data.eventObject;
                const instance = eventObject.__r3f;
                const handlers = instance == null ? void 0 : instance.handlers; // Check presence of handlers
                if (!(instance != null && instance.eventCount)) return;
                if (isPointerMove) {
                    // Move event ...
                    if (handlers.onPointerOver || handlers.onPointerEnter || handlers.onPointerOut || handlers.onPointerLeave) {
                        // When enter or out is present take care of hover-state
                        const id = makeId(data);
                        const hoveredItem = internal.hovered.get(id);
                        if (!hoveredItem) {
                            // If the object wasn't previously hovered, book it and call its handler
                            internal.hovered.set(id, data);
                            handlers.onPointerOver == null ? void 0 : handlers.onPointerOver(data);
                            handlers.onPointerEnter == null ? void 0 : handlers.onPointerEnter(data);
                        } else if (hoveredItem.stopped) {
                            // If the object was previously hovered and stopped, we shouldn't allow other items to proceed
                            data.stopPropagation();
                        }
                    } // Call mouse move
                    handlers.onPointerMove == null ? void 0 : handlers.onPointerMove(data);
                } else {
                    // All other events ...
                    const handler = handlers[name];
                    if (handler) {
                        // Forward all events back to their respective handlers with the exception of click events,
                        // which must use the initial target
                        if (!isClickEvent || internal.initialHits.includes(eventObject)) {
                            // Missed events have to come first
                            pointerMissed(event, internal.interaction.filter((object)=>!internal.initialHits.includes(object))); // Now call the handler
                            handler(data);
                        }
                    } else {
                        // Trigger onPointerMissed on all elements that have pointer over/out handlers, but not click and weren't hit
                        if (isClickEvent && internal.initialHits.includes(eventObject)) {
                            pointerMissed(event, internal.interaction.filter((object)=>!internal.initialHits.includes(object)));
                        }
                    }
                }
            });
        };
    };
    function pointerMissed(event, objects) {
        objects.forEach((object)=>{
            var _r3f3;
            return (_r3f3 = object.__r3f) == null ? void 0 : _r3f3.handlers.onPointerMissed == null ? void 0 : _r3f3.handlers.onPointerMissed(event);
        });
    }
    return {
        handlePointer
    };
}
let catalogue = {};
let extend = (objects)=>void (catalogue = {
        ...catalogue,
        ...objects
    });
function createRenderer(roots, getEventPriority) {
    function createInstance(type, { args = [], attach, ...props }, root) {
        let name = `${type[0].toUpperCase()}${type.slice(1)}`;
        let instance; // Auto-attach geometries and materials
        if (attach === undefined) {
            if (name.endsWith('Geometry')) attach = 'geometry';
            else if (name.endsWith('Material')) attach = 'material';
        }
        if (type === 'primitive') {
            if (props.object === undefined) throw `Primitives without 'object' are invalid!`;
            const object = props.object;
            instance = prepare(object, {
                type,
                root,
                attach,
                primitive: true
            });
        } else {
            const target = catalogue[name];
            if (!target) {
                throw `${name} is not part of the THREE namespace! Did you forget to extend? See: https://docs.pmnd.rs/react-three-fiber/api/objects#using-3rd-party-objects-declaratively`;
            } // Throw if an object or literal was passed for args
            if (!Array.isArray(args)) throw 'The args prop must be an array!'; // Instanciate new object, link it to the root
            // Append memoized props with args so it's not forgotten
            instance = prepare(new target(...args), {
                type,
                root,
                attach,
                // Save args in case we need to reconstruct later for HMR
                memoizedProps: {
                    args
                }
            });
        } // It should NOT call onUpdate on object instanciation, because it hasn't been added to the
        // view yet. If the callback relies on references for instance, they won't be ready yet, this is
        // why it passes "true" here
        // There is no reason to apply props to injects
        if (name !== 'inject') applyProps$1(instance, props);
        return instance;
    }
    function appendChild(parentInstance, child) {
        let added = false;
        if (child) {
            var _child$__r3f, _parentInstance$__r3f;
            // The attach attribute implies that the object attaches itself on the parent
            if ((_child$__r3f = child.__r3f) != null && _child$__r3f.attach) {
                attach(parentInstance, child, child.__r3f.attach);
            } else if (child.isObject3D && parentInstance.isObject3D) {
                // add in the usual parent-child way
                parentInstance.add(child);
                added = true;
            } // This is for anything that used attach, and for non-Object3Ds that don't get attached to props;
            // that is, anything that's a child in React but not a child in the scenegraph.
            if (!added) (_parentInstance$__r3f = parentInstance.__r3f) == null ? void 0 : _parentInstance$__r3f.objects.push(child);
            if (!child.__r3f) prepare(child, {});
            child.__r3f.parent = parentInstance;
            updateInstance(child);
            invalidateInstance(child);
        }
    }
    function insertBefore(parentInstance, child, beforeChild) {
        let added = false;
        if (child) {
            var _child$__r3f2, _parentInstance$__r3f2;
            if ((_child$__r3f2 = child.__r3f) != null && _child$__r3f2.attach) {
                attach(parentInstance, child, child.__r3f.attach);
            } else if (child.isObject3D && parentInstance.isObject3D) {
                child.parent = parentInstance;
                child.dispatchEvent({
                    type: 'added'
                });
                const restSiblings = parentInstance.children.filter((sibling)=>sibling !== child);
                const index = restSiblings.indexOf(beforeChild);
                parentInstance.children = [
                    ...restSiblings.slice(0, index),
                    child,
                    ...restSiblings.slice(index)
                ];
                added = true;
            }
            if (!added) (_parentInstance$__r3f2 = parentInstance.__r3f) == null ? void 0 : _parentInstance$__r3f2.objects.push(child);
            if (!child.__r3f) prepare(child, {});
            child.__r3f.parent = parentInstance;
            updateInstance(child);
            invalidateInstance(child);
        }
    }
    function removeRecursive(array, parent, dispose = false) {
        if (array) [
            ...array
        ].forEach((child)=>removeChild(parent, child, dispose));
    }
    function removeChild(parentInstance, child, dispose) {
        if (child) {
            var _parentInstance$__r3f3, _child$__r3f3, _child$__r3f5;
            // Clear the parent reference
            if (child.__r3f) child.__r3f.parent = null; // Remove child from the parents objects
            if ((_parentInstance$__r3f3 = parentInstance.__r3f) != null && _parentInstance$__r3f3.objects) parentInstance.__r3f.objects = parentInstance.__r3f.objects.filter((x)=>x !== child); // Remove attachment
            if ((_child$__r3f3 = child.__r3f) != null && _child$__r3f3.attach) {
                detach(parentInstance, child, child.__r3f.attach);
            } else if (child.isObject3D && parentInstance.isObject3D) {
                var _child$__r3f4;
                parentInstance.remove(child); // Remove interactivity
                if ((_child$__r3f4 = child.__r3f) != null && _child$__r3f4.root) {
                    removeInteractivity(child.__r3f.root, child);
                }
            } // Allow objects to bail out of recursive dispose altogether by passing dispose={null}
            // Never dispose of primitives because their state may be kept outside of React!
            // In order for an object to be able to dispose it has to have
            //   - a dispose method,
            //   - it cannot be a <primitive object={...} />
            //   - it cannot be a THREE.Scene, because three has broken it's own api
            //
            // Since disposal is recursive, we can check the optional dispose arg, which will be undefined
            // when the reconciler calls it, but then carry our own check recursively
            const isPrimitive = (_child$__r3f5 = child.__r3f) == null ? void 0 : _child$__r3f5.primitive;
            const shouldDispose = dispose === undefined ? child.dispose !== null && !isPrimitive : dispose; // Remove nested child objects. Primitives should not have objects and children that are
            // attached to them declaratively ...
            if (!isPrimitive) {
                var _child$__r3f6;
                removeRecursive((_child$__r3f6 = child.__r3f) == null ? void 0 : _child$__r3f6.objects, child, shouldDispose);
                removeRecursive(child.children, child, shouldDispose);
            } // Remove references
            if (child.__r3f) {
                delete child.__r3f.root;
                delete child.__r3f.objects;
                delete child.__r3f.handlers;
                delete child.__r3f.memoizedProps;
                if (!isPrimitive) delete child.__r3f;
            } // Dispose item whenever the reconciler feels like it
            if (shouldDispose && child.dispose && child.type !== 'Scene') {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$scheduler$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unstable_scheduleCallback"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$scheduler$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unstable_IdlePriority"], ()=>{
                    try {
                        child.dispose();
                    } catch (e) {
                    /* ... */ }
                });
            }
            invalidateInstance(parentInstance);
        }
    }
    function switchInstance(instance, type, newProps, fiber) {
        var _instance$__r3f;
        const parent = (_instance$__r3f = instance.__r3f) == null ? void 0 : _instance$__r3f.parent;
        if (!parent) return;
        const newInstance = createInstance(type, newProps, instance.__r3f.root); // https://github.com/pmndrs/react-three-fiber/issues/1348
        // When args change the instance has to be re-constructed, which then
        // forces r3f to re-parent the children and non-scene objects
        // This can not include primitives, which should not have declarative children
        if (type !== 'primitive' && instance.children) {
            instance.children.forEach((child)=>appendChild(newInstance, child));
            instance.children = [];
        }
        instance.__r3f.objects.forEach((child)=>appendChild(newInstance, child));
        instance.__r3f.objects = [];
        removeChild(parent, instance);
        appendChild(parent, newInstance); // Re-bind event handlers
        if (newInstance.raycast && newInstance.__r3f.eventCount) {
            const rootState = newInstance.__r3f.root.getState();
            rootState.internal.interaction.push(newInstance);
        } // This evil hack switches the react-internal fiber node
        [
            fiber,
            fiber.alternate
        ].forEach((fiber)=>{
            if (fiber !== null) {
                fiber.stateNode = newInstance;
                if (fiber.ref) {
                    if (typeof fiber.ref === 'function') fiber.ref(newInstance);
                    else fiber.ref.current = newInstance;
                }
            }
        });
    }
    const reconciler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$reconciler$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        createInstance,
        removeChild,
        appendChild,
        appendInitialChild: appendChild,
        insertBefore,
        supportsMicrotask: true,
        warnsIfNotActing: true,
        supportsMutation: true,
        isPrimaryRenderer: false,
        noTimeout: -1,
        appendChildToContainer: (container, child)=>{
            const scene = container.getState().scene; // Link current root to the default scene
            scene.__r3f.root = container;
            appendChild(scene, child);
        },
        removeChildFromContainer: (container, child)=>removeChild(container.getState().scene, child),
        insertInContainerBefore: (container, child, beforeChild)=>insertBefore(container.getState().scene, child, beforeChild),
        getRootHostContext: ()=>null,
        getChildHostContext: (parentHostContext)=>parentHostContext,
        finalizeInitialChildren (instance) {
            var _instance$__r3f2;
            const localState = (_instance$__r3f2 = instance == null ? void 0 : instance.__r3f) != null ? _instance$__r3f2 : {}; // https://github.com/facebook/react/issues/20271
            // Returning true will trigger commitMount
            return !!localState.handlers;
        },
        prepareUpdate (instance, type, oldProps, newProps) {
            // Create diff-sets
            if (instance.__r3f.primitive && newProps.object && newProps.object !== instance) {
                return [
                    true
                ];
            } else {
                // This is a data object, let's extract critical information about it
                const { args: argsNew = [], children: cN, ...restNew } = newProps;
                const { args: argsOld = [], children: cO, ...restOld } = oldProps; // Throw if an object or literal was passed for args
                if (!Array.isArray(argsNew)) throw 'The args prop must be an array!'; // If it has new props or arguments, then it needs to be re-instanciated
                if (argsNew.some((value, index)=>value !== argsOld[index])) return [
                    true
                ]; // Create a diff-set, flag if there are any changes
                const diff = diffProps(instance, restNew, restOld, true);
                if (diff.changes.length) return [
                    false,
                    diff
                ]; // Otherwise do not touch the instance
                return null;
            }
        },
        commitUpdate (instance, [reconstruct, diff], type, oldProps, newProps, fiber) {
            // Reconstruct when args or <primitive object={...} have changes
            if (reconstruct) switchInstance(instance, type, newProps, fiber); // Otherwise just overwrite props
            else applyProps$1(instance, diff);
        },
        commitMount (instance, type, props, int) {
            var _instance$__r3f3;
            // https://github.com/facebook/react/issues/20271
            // This will make sure events are only added once to the central container
            const localState = (_instance$__r3f3 = instance.__r3f) != null ? _instance$__r3f3 : {};
            if (instance.raycast && localState.handlers && localState.eventCount) {
                instance.__r3f.root.getState().internal.interaction.push(instance);
            }
        },
        getPublicInstance: (instance)=>instance,
        shouldDeprioritizeSubtree: ()=>false,
        prepareForCommit: ()=>null,
        preparePortalMount: (container)=>prepare(container.getState().scene),
        resetAfterCommit: ()=>{},
        shouldSetTextContent: ()=>false,
        clearContainer: ()=>false,
        detachDeletedInstance: ()=>{},
        hideInstance (instance) {
            var _instance$__r3f4;
            // Deatch while the instance is hidden
            const { attach: type, parent } = (_instance$__r3f4 = instance == null ? void 0 : instance.__r3f) != null ? _instance$__r3f4 : {};
            if (type && parent) detach(parent, instance, type);
            if (instance.isObject3D) instance.visible = false;
            invalidateInstance(instance);
        },
        unhideInstance (instance, props) {
            var _instance$__r3f5;
            // Re-attach when the instance is unhidden
            const { attach: type, parent } = (_instance$__r3f5 = instance == null ? void 0 : instance.__r3f) != null ? _instance$__r3f5 : {};
            if (type && parent) attach(parent, instance, type);
            if (instance.isObject3D && props.visible == null || props.visible) instance.visible = true;
            invalidateInstance(instance);
        },
        createTextInstance: ()=>{},
        hideTextInstance: ()=>{
            throw new Error('Text is not allowed in the R3F tree.');
        },
        unhideTextInstance: ()=>{},
        getCurrentEventPriority: ()=>getEventPriority ? getEventPriority() : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$reconciler$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DefaultEventPriority"],
        // @ts-ignore
        now: typeof performance !== 'undefined' && is.fun(performance.now) ? performance.now : is.fun(Date.now) ? Date.now : undefined,
        // @ts-ignore
        scheduleTimeout: is.fun(setTimeout) ? setTimeout : undefined,
        // @ts-ignore
        cancelTimeout: is.fun(clearTimeout) ? clearTimeout : undefined,
        setTimeout: is.fun(setTimeout) ? setTimeout : undefined,
        clearTimeout: is.fun(clearTimeout) ? clearTimeout : undefined
    });
    return {
        reconciler,
        applyProps: applyProps$1
    };
}
const privateKeys = [
    'set',
    'get',
    'setSize',
    'setFrameloop',
    'setDpr',
    'events',
    'invalidate',
    'advance',
    'size',
    'viewport'
];
const isRenderer = (def)=>!!(def != null && def.render);
const context = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](null);
const createStore = (invalidate, advance)=>{
    const rootState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f$zustand$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((set, get)=>{
        const position = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Vector3();
        const defaultTarget = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Vector3();
        const tempTarget = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Vector3();
        function getCurrentViewport(camera = get().camera, target = defaultTarget, size = get().size) {
            const { width, height } = size;
            const aspect = width / height;
            if (target instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Vector3) tempTarget.copy(target);
            else tempTarget.set(...target);
            const distance = camera.getWorldPosition(position).distanceTo(tempTarget);
            if (isOrthographicCamera(camera)) {
                return {
                    width: width / camera.zoom,
                    height: height / camera.zoom,
                    factor: 1,
                    distance,
                    aspect
                };
            } else {
                const fov = camera.fov * Math.PI / 180; // convert vertical fov to radians
                const h = 2 * Math.tan(fov / 2) * distance; // visible height
                const w = h * (width / height);
                return {
                    width: w,
                    height: h,
                    factor: width / w,
                    distance,
                    aspect
                };
            }
        }
        let performanceTimeout = undefined;
        const setPerformanceCurrent = (current)=>set((state)=>({
                    performance: {
                        ...state.performance,
                        current
                    }
                }));
        const pointer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Vector2();
        return {
            set,
            get,
            // Mock objects that have to be configured
            gl: null,
            camera: null,
            raycaster: null,
            events: {
                priority: 1,
                enabled: true,
                connected: false
            },
            xr: null,
            invalidate: (frames = 1)=>invalidate(get(), frames),
            advance: (timestamp, runGlobalEffects)=>advance(timestamp, runGlobalEffects, get()),
            legacy: false,
            linear: false,
            flat: false,
            scene: prepare(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Scene()),
            controls: null,
            clock: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Clock(),
            pointer,
            mouse: pointer,
            frameloop: 'always',
            onPointerMissed: undefined,
            performance: {
                current: 1,
                min: 0.5,
                max: 1,
                debounce: 200,
                regress: ()=>{
                    const state = get(); // Clear timeout
                    if (performanceTimeout) clearTimeout(performanceTimeout); // Set lower bound performance
                    if (state.performance.current !== state.performance.min) setPerformanceCurrent(state.performance.min); // Go back to upper bound performance after a while unless something regresses meanwhile
                    performanceTimeout = setTimeout(()=>setPerformanceCurrent(get().performance.max), state.performance.debounce);
                }
            },
            size: {
                width: 0,
                height: 0,
                updateStyle: false
            },
            viewport: {
                initialDpr: 0,
                dpr: 0,
                width: 0,
                height: 0,
                aspect: 0,
                distance: 0,
                factor: 0,
                getCurrentViewport
            },
            setEvents: (events)=>set((state)=>({
                        ...state,
                        events: {
                            ...state.events,
                            ...events
                        }
                    })),
            setSize: (width, height, updateStyle)=>{
                const camera = get().camera;
                const size = {
                    width,
                    height,
                    updateStyle
                };
                set((state)=>({
                        size,
                        viewport: {
                            ...state.viewport,
                            ...getCurrentViewport(camera, defaultTarget, size)
                        }
                    }));
            },
            setDpr: (dpr)=>set((state)=>{
                    const resolved = calculateDpr(dpr);
                    return {
                        viewport: {
                            ...state.viewport,
                            dpr: resolved,
                            initialDpr: state.viewport.initialDpr || resolved
                        }
                    };
                }),
            setFrameloop: (frameloop = 'always')=>{
                const clock = get().clock; // if frameloop === "never" clock.elapsedTime is updated using advance(timestamp)
                clock.stop();
                clock.elapsedTime = 0;
                if (frameloop !== 'never') {
                    clock.start();
                    clock.elapsedTime = 0;
                }
                set(()=>({
                        frameloop
                    }));
            },
            previousRoot: undefined,
            internal: {
                active: false,
                priority: 0,
                frames: 0,
                lastEvent: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRef"](),
                interaction: [],
                hovered: new Map(),
                subscribers: [],
                initialClick: [
                    0,
                    0
                ],
                initialHits: [],
                capturedMap: new Map(),
                subscribe: (ref, priority, store)=>{
                    const internal = get().internal; // If this subscription was given a priority, it takes rendering into its own hands
                    // For that reason we switch off automatic rendering and increase the manual flag
                    // As long as this flag is positive there can be no internal rendering at all
                    // because there could be multiple render subscriptions
                    internal.priority = internal.priority + (priority > 0 ? 1 : 0);
                    internal.subscribers.push({
                        ref,
                        priority,
                        store
                    }); // Register subscriber and sort layers from lowest to highest, meaning,
                    // highest priority renders last (on top of the other frames)
                    internal.subscribers = internal.subscribers.sort((a, b)=>a.priority - b.priority);
                    return ()=>{
                        const internal = get().internal;
                        if (internal != null && internal.subscribers) {
                            // Decrease manual flag if this subscription had a priority
                            internal.priority = internal.priority - (priority > 0 ? 1 : 0); // Remove subscriber from list
                            internal.subscribers = internal.subscribers.filter((s)=>s.ref !== ref);
                        }
                    };
                }
            }
        };
    });
    const state = rootState.getState();
    let oldSize = state.size;
    let oldDpr = state.viewport.dpr;
    let oldCamera = state.camera;
    rootState.subscribe(()=>{
        const { camera, size, viewport, gl, set } = rootState.getState(); // Resize camera and renderer on changes to size and pixelratio
        if (size !== oldSize || viewport.dpr !== oldDpr) {
            oldSize = size;
            oldDpr = viewport.dpr; // Update camera & renderer
            updateCamera(camera, size);
            gl.setPixelRatio(viewport.dpr);
            gl.setSize(size.width, size.height, size.updateStyle);
        } // Update viewport once the camera changes
        if (camera !== oldCamera) {
            oldCamera = camera; // Update viewport
            set((state)=>({
                    viewport: {
                        ...state.viewport,
                        ...state.viewport.getCurrentViewport(camera)
                    }
                }));
        }
    }); // Invalidate on any change
    rootState.subscribe((state)=>invalidate(state)); // Return root state
    return rootState;
};
function createSubs(callback, subs) {
    const index = subs.length;
    subs.push(callback);
    return ()=>void subs.splice(index, 1);
}
let i;
let globalEffects = [];
let globalAfterEffects = [];
let globalTailEffects = [];
/**
 * Adds a global render callback which is called each frame.
 * @see https://docs.pmnd.rs/react-three-fiber/api/additional-exports#addEffect
 */ const addEffect = (callback)=>createSubs(callback, globalEffects);
/**
 * Adds a global after-render callback which is called each frame.
 * @see https://docs.pmnd.rs/react-three-fiber/api/additional-exports#addAfterEffect
 */ const addAfterEffect = (callback)=>createSubs(callback, globalAfterEffects);
/**
 * Adds a global callback which is called when rendering stops.
 * @see https://docs.pmnd.rs/react-three-fiber/api/additional-exports#addTail
 */ const addTail = (callback)=>createSubs(callback, globalTailEffects);
function run(effects, timestamp) {
    for(i = 0; i < effects.length; i++)effects[i](timestamp);
}
let subscribers;
let subscription;
function render$1(timestamp, state, frame) {
    // Run local effects
    let delta = state.clock.getDelta(); // In frameloop='never' mode, clock times are updated using the provided timestamp
    if (state.frameloop === 'never' && typeof timestamp === 'number') {
        delta = timestamp - state.clock.elapsedTime;
        state.clock.oldTime = state.clock.elapsedTime;
        state.clock.elapsedTime = timestamp;
    } // Call subscribers (useFrame)
    subscribers = state.internal.subscribers;
    for(i = 0; i < subscribers.length; i++){
        subscription = subscribers[i];
        subscription.ref.current(subscription.store.getState(), delta, frame);
    } // Render content
    if (!state.internal.priority && state.gl.render) state.gl.render(state.scene, state.camera); // Decrease frame count
    state.internal.frames = Math.max(0, state.internal.frames - 1);
    return state.frameloop === 'always' ? 1 : state.internal.frames;
}
function createLoop(roots) {
    let running = false;
    let repeat;
    let frame;
    let state;
    function loop(timestamp) {
        frame = requestAnimationFrame(loop);
        running = true;
        repeat = 0; // Run effects
        if (globalEffects.length) run(globalEffects, timestamp); // Render all roots
        roots.forEach((root)=>{
            var _state$gl$xr;
            state = root.store.getState(); // If the frameloop is invalidated, do not run another frame
            if (state.internal.active && (state.frameloop === 'always' || state.internal.frames > 0) && !((_state$gl$xr = state.gl.xr) != null && _state$gl$xr.isPresenting)) {
                repeat += render$1(timestamp, state);
            }
        }); // Run after-effects
        if (globalAfterEffects.length) run(globalAfterEffects, timestamp); // Stop the loop if nothing invalidates it
        if (repeat === 0) {
            // Tail call effects, they are called when rendering stops
            if (globalTailEffects.length) run(globalTailEffects, timestamp); // Flag end of operation
            running = false;
            return cancelAnimationFrame(frame);
        }
    }
    function invalidate(state, frames = 1) {
        var _state$gl$xr2;
        if (!state) return roots.forEach((root)=>invalidate(root.store.getState()), frames);
        if ((_state$gl$xr2 = state.gl.xr) != null && _state$gl$xr2.isPresenting || !state.internal.active || state.frameloop === 'never') return; // Increase frames, do not go higher than 60
        state.internal.frames = Math.min(60, state.internal.frames + frames); // If the render-loop isn't active, start it
        if (!running) {
            running = true;
            requestAnimationFrame(loop);
        }
    }
    function advance(timestamp, runGlobalEffects = true, state, frame) {
        if (runGlobalEffects) run(globalEffects, timestamp);
        if (!state) roots.forEach((root)=>render$1(timestamp, root.store.getState()));
        else render$1(timestamp, state, frame);
        if (runGlobalEffects) run(globalAfterEffects, timestamp);
    }
    return {
        loop,
        /**
     * Invalidates the view, requesting a frame to be rendered. Will globally invalidate unless passed a root's state.
     * @see https://docs.pmnd.rs/react-three-fiber/api/additional-exports#invalidate
     */ invalidate,
        /**
     * Advances the frameloop and runs render effects, useful for when manually rendering via `frameloop="never"`.
     * @see https://docs.pmnd.rs/react-three-fiber/api/additional-exports#advance
     */ advance
    };
}
function useStore() {
    const store = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](context);
    if (!store) throw `R3F hooks can only be used within the Canvas component!`;
    return store;
}
/**
 * Accesses R3F's internal state, containing renderer, canvas, scene, etc.
 * @see https://docs.pmnd.rs/react-three-fiber/api/hooks#usethree
 */ function useThree(selector = (state)=>state, equalityFn) {
    return useStore()(selector, equalityFn);
}
/**
 * Executes a callback before render in a shared frame loop.
 * Can order effects with render priority or manually render with a positive priority.
 * @see https://docs.pmnd.rs/react-three-fiber/api/hooks#useframe
 */ function useFrame(callback, renderPriority = 0) {
    const store = useStore();
    const subscribe = store.getState().internal.subscribe; // Memoize ref
    const ref = useMutableCallback(callback); // Subscribe on mount, unsubscribe on unmount
    useIsomorphicLayoutEffect({
        "useFrame.useIsomorphicLayoutEffect": ()=>subscribe(ref, renderPriority, store)
    }["useFrame.useIsomorphicLayoutEffect"], [
        renderPriority,
        subscribe,
        store
    ]);
    return null;
}
/**
 * Returns a node graph of an object with named nodes & materials.
 * @see https://docs.pmnd.rs/react-three-fiber/api/hooks#usegraph
 */ function useGraph(object) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useGraph.useMemo": ()=>buildGraph(object)
    }["useGraph.useMemo"], [
        object
    ]);
}
function loadingFn(extensions, onProgress) {
    return function(Proto, ...input) {
        // Construct new loader and run extensions
        const loader = new Proto();
        if (extensions) extensions(loader); // Go through the urls and load them
        return Promise.all(input.map((input)=>new Promise((res, reject)=>loader.load(input, (data)=>{
                    if (data.scene) Object.assign(data, buildGraph(data.scene));
                    res(data);
                }, onProgress, (error)=>reject(`Could not load ${input}: ${error.message}`)))));
    };
}
/**
 * Synchronously loads and caches assets with a three loader.
 *
 * Note: this hook's caller must be wrapped with `React.Suspense`
 * @see https://docs.pmnd.rs/react-three-fiber/api/hooks#useloader
 */ function useLoader(Proto, input, extensions, onProgress) {
    // Use suspense to load async assets
    const keys = Array.isArray(input) ? input : [
        input
    ];
    const results = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f$suspend$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["suspend"])(loadingFn(extensions, onProgress), [
        Proto,
        ...keys
    ], {
        equal: is.equ
    }); // Return the object/s
    return Array.isArray(input) ? results : results[0];
}
/**
 * Preloads an asset into cache as a side-effect.
 */ useLoader.preload = function(Proto, input, extensions) {
    const keys = Array.isArray(input) ? input : [
        input
    ];
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f$suspend$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["preload"])(loadingFn(extensions), [
        Proto,
        ...keys
    ]);
};
/**
 * Removes a loaded asset from cache.
 */ useLoader.clear = function(Proto, input) {
    const keys = Array.isArray(input) ? input : [
        input
    ];
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f$suspend$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clear"])([
        Proto,
        ...keys
    ]);
};
const roots = new Map();
const { invalidate, advance } = createLoop(roots);
const { reconciler, applyProps } = createRenderer(roots, getEventPriority);
const shallowLoose = {
    objects: 'shallow',
    strict: false
};
const createRendererInstance = (gl, canvas)=>{
    const customRenderer = typeof gl === 'function' ? gl(canvas) : gl;
    if (isRenderer(customRenderer)) return customRenderer;
    else return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.WebGLRenderer({
        powerPreference: 'high-performance',
        canvas: canvas,
        antialias: true,
        alpha: true,
        ...gl
    });
};
function createRoot(canvas) {
    // Check against mistaken use of createRoot
    let prevRoot = roots.get(canvas);
    let prevFiber = prevRoot == null ? void 0 : prevRoot.fiber;
    let prevStore = prevRoot == null ? void 0 : prevRoot.store;
    if (prevRoot) console.warn('R3F.createRoot should only be called once!'); // Report when an error was detected in a previous render
    // https://github.com/pmndrs/react-three-fiber/pull/2261
    const logRecoverableError = typeof reportError === 'function' ? // emulating an uncaught JavaScript error.
    reportError : console.error; // Create store
    const store = prevStore || createStore(invalidate, advance); // Create renderer
    const fiber = prevFiber || reconciler.createContainer(store, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$reconciler$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConcurrentRoot"], null, false, null, '', logRecoverableError, null); // Map it
    if (!prevRoot) roots.set(canvas, {
        fiber,
        store
    }); // Locals
    let onCreated;
    let configured = false;
    return {
        configure (props = {}) {
            var _canvas$parentElement, _canvas$parentElement2, _canvas$parentElement3, _canvas$parentElement4;
            let { gl: glConfig, size, events, onCreated: onCreatedCallback, shadows = false, linear = false, flat = false, legacy = false, orthographic = false, frameloop = 'always', dpr = [
                1,
                2
            ], performance: performance1, raycaster: raycastOptions, camera: cameraOptions, onPointerMissed } = props;
            let state = store.getState(); // Set up renderer (one time only!)
            let gl = state.gl;
            if (!state.gl) state.set({
                gl: gl = createRendererInstance(glConfig, canvas)
            }); // Set up raycaster (one time only!)
            let raycaster = state.raycaster;
            if (!raycaster) state.set({
                raycaster: raycaster = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Raycaster()
            }); // Set raycaster options
            const { params, ...options } = raycastOptions || {};
            if (!is.equ(options, raycaster, shallowLoose)) applyProps(raycaster, {
                ...options
            });
            if (!is.equ(params, raycaster.params, shallowLoose)) applyProps(raycaster, {
                params: {
                    ...raycaster.params,
                    ...params
                }
            }); // Create default camera (one time only!)
            if (!state.camera) {
                const isCamera = cameraOptions instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Camera;
                const camera = isCamera ? cameraOptions : orthographic ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.OrthographicCamera(0, 0, 0, 0, 0.1, 1000) : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.PerspectiveCamera(75, 0, 0.1, 1000);
                if (!isCamera) {
                    camera.position.z = 5;
                    if (cameraOptions) applyProps(camera, cameraOptions); // Always look at center by default
                    if (!(cameraOptions != null && cameraOptions.rotation)) camera.lookAt(0, 0, 0);
                }
                state.set({
                    camera
                });
            } // Set up XR (one time only!)
            if (!state.xr) {
                // Handle frame behavior in WebXR
                const handleXRFrame = (timestamp, frame)=>{
                    const state = store.getState();
                    if (state.frameloop === 'never') return;
                    advance(timestamp, true, state, frame);
                }; // Toggle render switching on session
                const handleSessionChange = ()=>{
                    const state = store.getState();
                    state.gl.xr.enabled = state.gl.xr.isPresenting;
                    state.gl.xr.setAnimationLoop(state.gl.xr.isPresenting ? handleXRFrame : null);
                    if (!state.gl.xr.isPresenting) invalidate(state);
                }; // WebXR session manager
                const xr = {
                    connect () {
                        const gl = store.getState().gl;
                        gl.xr.addEventListener('sessionstart', handleSessionChange);
                        gl.xr.addEventListener('sessionend', handleSessionChange);
                    },
                    disconnect () {
                        const gl = store.getState().gl;
                        gl.xr.removeEventListener('sessionstart', handleSessionChange);
                        gl.xr.removeEventListener('sessionend', handleSessionChange);
                    }
                }; // Subscribe to WebXR session events
                if (gl.xr) xr.connect();
                state.set({
                    xr
                });
            } // Set shadowmap
            if (gl.shadowMap) {
                const isBoolean = is.boo(shadows);
                if (isBoolean && gl.shadowMap.enabled !== shadows || !is.equ(shadows, gl.shadowMap, shallowLoose)) {
                    const old = gl.shadowMap.enabled;
                    gl.shadowMap.enabled = !!shadows;
                    if (!isBoolean) Object.assign(gl.shadowMap, shadows);
                    else gl.shadowMap.type = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.PCFSoftShadowMap;
                    if (old !== gl.shadowMap.enabled) gl.shadowMap.needsUpdate = true;
                }
            } // Safely set color management if available.
            // Avoid accessing THREE.ColorManagement to play nice with older versions
            if ('ColorManagement' in __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__) {
                setDeep(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__, legacy, [
                    'ColorManagement',
                    'legacyMode'
                ]);
            }
            const outputEncoding = linear ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.LinearEncoding : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.sRGBEncoding;
            const toneMapping = flat ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.NoToneMapping : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.ACESFilmicToneMapping;
            if (gl.outputEncoding !== outputEncoding) gl.outputEncoding = outputEncoding;
            if (gl.toneMapping !== toneMapping) gl.toneMapping = toneMapping; // Update color management state
            if (state.legacy !== legacy) state.set(()=>({
                    legacy
                }));
            if (state.linear !== linear) state.set(()=>({
                    linear
                }));
            if (state.flat !== flat) state.set(()=>({
                    flat
                })); // Set gl props
            if (glConfig && !is.fun(glConfig) && !isRenderer(glConfig) && !is.equ(glConfig, gl, shallowLoose)) applyProps(gl, glConfig); // Store events internally
            if (events && !state.events.handlers) state.set({
                events: events(store)
            }); // Check pixelratio
            if (dpr && state.viewport.dpr !== calculateDpr(dpr)) state.setDpr(dpr); // Check size, allow it to take on container bounds initially
            size = size || {
                width: (_canvas$parentElement = (_canvas$parentElement2 = canvas.parentElement) == null ? void 0 : _canvas$parentElement2.clientWidth) != null ? _canvas$parentElement : 0,
                height: (_canvas$parentElement3 = (_canvas$parentElement4 = canvas.parentElement) == null ? void 0 : _canvas$parentElement4.clientHeight) != null ? _canvas$parentElement3 : 0
            };
            if (!is.equ(size, state.size, shallowLoose)) state.setSize(size.width, size.height, size.updateStyle); // Check frameloop
            if (state.frameloop !== frameloop) state.setFrameloop(frameloop); // Check pointer missed
            if (!state.onPointerMissed) state.set({
                onPointerMissed
            }); // Check performance
            if (performance1 && !is.equ(performance1, state.performance, shallowLoose)) state.set((state)=>({
                    performance: {
                        ...state.performance,
                        ...performance1
                    }
                })); // Set locals
            onCreated = onCreatedCallback;
            configured = true;
            return this;
        },
        render (children) {
            // The root has to be configured before it can be rendered
            if (!configured) this.configure();
            reconciler.updateContainer(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Provider, {
                store: store,
                children: children,
                onCreated: onCreated,
                rootElement: canvas
            }), fiber, null, ()=>undefined);
            return store;
        },
        unmount () {
            unmountComponentAtNode(canvas);
        }
    };
}
function render(children, canvas, config) {
    console.warn('R3F.render is no longer supported in React 18. Use createRoot instead!');
    const root = createRoot(canvas);
    root.configure(config);
    return root.render(children);
}
function Provider({ store, children, onCreated, rootElement }) {
    useIsomorphicLayoutEffect({
        "Provider.useIsomorphicLayoutEffect": ()=>{
            const state = store.getState(); // Flag the canvas active, rendering will now begin
            state.set({
                "Provider.useIsomorphicLayoutEffect": (state)=>({
                        internal: {
                            ...state.internal,
                            active: true
                        }
                    })
            }["Provider.useIsomorphicLayoutEffect"]); // Notifiy that init is completed, the scene graph exists, but nothing has yet rendered
            if (onCreated) onCreated(state); // Connect events to the targets parent, this is done to ensure events are registered on
            // a shared target, and not on the canvas itself
            if (!store.getState().events.connected) state.events.connect == null ? void 0 : state.events.connect(rootElement); // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["Provider.useIsomorphicLayoutEffect"], []);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](context.Provider, {
        value: store
    }, children);
}
function unmountComponentAtNode(canvas, callback) {
    const root = roots.get(canvas);
    const fiber = root == null ? void 0 : root.fiber;
    if (fiber) {
        const state = root == null ? void 0 : root.store.getState();
        if (state) state.internal.active = false;
        reconciler.updateContainer(null, fiber, null, ()=>{
            if (state) {
                setTimeout(()=>{
                    try {
                        var _state$gl, _state$gl$renderLists, _state$gl2, _state$gl3;
                        state.events.disconnect == null ? void 0 : state.events.disconnect();
                        (_state$gl = state.gl) == null ? void 0 : (_state$gl$renderLists = _state$gl.renderLists) == null ? void 0 : _state$gl$renderLists.dispose == null ? void 0 : _state$gl$renderLists.dispose();
                        (_state$gl2 = state.gl) == null ? void 0 : _state$gl2.forceContextLoss == null ? void 0 : _state$gl2.forceContextLoss();
                        if ((_state$gl3 = state.gl) != null && _state$gl3.xr) state.xr.disconnect();
                        dispose(state);
                        roots.delete(canvas);
                        if (callback) callback(canvas);
                    } catch (e) {
                    /* ... */ }
                }, 500);
            }
        });
    }
}
function createPortal(children, container, state) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Portal, {
        key: container.uuid,
        children: children,
        container: container,
        state: state
    });
}
function Portal({ state = {}, children, container }) {
    /** This has to be a component because it would not be able to call useThree/useStore otherwise since
   *  if this is our environment, then we are not in r3f's renderer but in react-dom, it would trigger
   *  the "R3F hooks can only be used within the Canvas component!" warning:
   *  <Canvas>
   *    {createPortal(...)} */ const { events, size, ...rest } = state;
    const previousRoot = useStore();
    const [raycaster] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "Portal.useState": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Raycaster()
    }["Portal.useState"]);
    const [pointer] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "Portal.useState": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Vector2()
    }["Portal.useState"]);
    const inject = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "Portal.useCallback[inject]": (rootState, injectState)=>{
            const intersect = {
                ...rootState
            }; // all prev state props
            // Only the fields of "rootState" that do not differ from injectState
            // Some props should be off-limits
            // Otherwise filter out the props that are different and let the inject layer take precedence
            Object.keys(rootState).forEach({
                "Portal.useCallback[inject]": (key)=>{
                    if (privateKeys.includes(key) || // Otherwise filter out the props that are different and let the inject layer take precedence
                    rootState[key] !== injectState[key]) {
                        delete intersect[key];
                    }
                }
            }["Portal.useCallback[inject]"]);
            let viewport = undefined;
            if (injectState && size) {
                const camera = injectState.camera; // Calculate the override viewport, if present
                viewport = rootState.viewport.getCurrentViewport(camera, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Vector3(), size); // Update the portal camera, if it differs from the previous layer
                if (camera !== rootState.camera) updateCamera(camera, size);
            }
            return {
                ...intersect,
                // Portals have their own scene, which forms the root, a raycaster and a pointer
                scene: container,
                raycaster,
                pointer,
                mouse: pointer,
                // Their previous root is the layer before it
                previousRoot,
                // Events, size and viewport can be overridden by the inject layer
                events: {
                    ...rootState.events,
                    ...injectState == null ? void 0 : injectState.events,
                    ...events
                },
                size: {
                    ...rootState.size,
                    ...size
                },
                viewport: {
                    ...rootState.viewport,
                    ...viewport
                },
                ...rest
            };
        }
    }["Portal.useCallback[inject]"], [
        state
    ]);
    const [usePortalStore] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "Portal.useState": ()=>{
            // Create a mirrored store, based on the previous root with a few overrides ...
            const previousState = previousRoot.getState();
            const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f$zustand$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
                "Portal.useState.store": (set, get)=>({
                        ...previousState,
                        scene: container,
                        raycaster,
                        pointer,
                        mouse: pointer,
                        previousRoot,
                        events: {
                            ...previousState.events,
                            ...events
                        },
                        size: {
                            ...previousState.size,
                            ...size
                        },
                        ...rest,
                        // Set and get refer to this root-state
                        set,
                        get,
                        // Layers are allowed to override events
                        setEvents: ({
                            "Portal.useState.store": (events)=>set({
                                    "Portal.useState.store": (state)=>({
                                            ...state,
                                            events: {
                                                ...state.events,
                                                ...events
                                            }
                                        })
                                }["Portal.useState.store"])
                        })["Portal.useState.store"]
                    })
            }["Portal.useState.store"]);
            return store;
        }
    }["Portal.useState"]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "Portal.useEffect": ()=>{
            // Subscribe to previous root-state and copy changes over to the mirrored portal-state
            const unsub = previousRoot.subscribe({
                "Portal.useEffect.unsub": (prev)=>usePortalStore.setState({
                        "Portal.useEffect.unsub": (state)=>inject(prev, state)
                    }["Portal.useEffect.unsub"])
            }["Portal.useEffect.unsub"]);
            return ({
                "Portal.useEffect": ()=>{
                    unsub();
                    usePortalStore.destroy();
                }
            })["Portal.useEffect"];
        }
    }["Portal.useEffect"], []);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "Portal.useEffect": ()=>{
            usePortalStore.setState({
                "Portal.useEffect": (injectState)=>inject(previousRoot.getState(), injectState)
            }["Portal.useEffect"]);
        }
    }["Portal.useEffect"], [
        inject
    ]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, reconciler.createPortal(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](context.Provider, {
        value: usePortalStore
    }, children), usePortalStore, null));
}
reconciler.injectIntoDevTools({
    bundleType: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 1,
    rendererPackageName: '@react-three/fiber',
    version: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["version"]
});
const act = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unstable_act"];
;
}),
"[project]/apps/frontend/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Canvas",
    ()=>Canvas,
    "events",
    ()=>createPointerEvents
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/fiber/dist/index-4f1a8e2f.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.module.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$use$2d$measure$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-use-measure/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$reconciler$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-reconciler/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$reconciler$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-reconciler/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$scheduler$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/scheduler/index.js [app-client] (ecmascript)");
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
const DOM_EVENTS = {
    onClick: [
        'click',
        false
    ],
    onContextMenu: [
        'contextmenu',
        false
    ],
    onDoubleClick: [
        'dblclick',
        false
    ],
    onWheel: [
        'wheel',
        true
    ],
    onPointerDown: [
        'pointerdown',
        true
    ],
    onPointerUp: [
        'pointerup',
        true
    ],
    onPointerLeave: [
        'pointerleave',
        true
    ],
    onPointerMove: [
        'pointermove',
        true
    ],
    onPointerCancel: [
        'pointercancel',
        true
    ],
    onLostPointerCapture: [
        'lostpointercapture',
        true
    ]
};
/** Default R3F event manager for web */ function createPointerEvents(store) {
    const { handlePointer } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(store);
    return {
        priority: 1,
        enabled: true,
        compute (event, state, previous) {
            // https://github.com/pmndrs/react-three-fiber/pull/782
            // Events trigger outside of canvas when moved, use offsetX/Y by default and allow overrides
            state.pointer.set(event.offsetX / state.size.width * 2 - 1, -(event.offsetY / state.size.height) * 2 + 1);
            state.raycaster.setFromCamera(state.pointer, state.camera);
        },
        connected: undefined,
        handlers: Object.keys(DOM_EVENTS).reduce((acc, key)=>({
                ...acc,
                [key]: handlePointer(key)
            }), {}),
        connect: (target)=>{
            var _events$handlers;
            const { set, events } = store.getState();
            events.disconnect == null ? void 0 : events.disconnect();
            set((state)=>({
                    events: {
                        ...state.events,
                        connected: target
                    }
                }));
            Object.entries((_events$handlers = events.handlers) != null ? _events$handlers : []).forEach(([name, event])=>{
                const [eventName, passive] = DOM_EVENTS[name];
                target.addEventListener(eventName, event, {
                    passive
                });
            });
        },
        disconnect: ()=>{
            const { set, events } = store.getState();
            if (events.connected) {
                var _events$handlers2;
                Object.entries((_events$handlers2 = events.handlers) != null ? _events$handlers2 : []).forEach(([name, event])=>{
                    if (events && events.connected instanceof HTMLElement) {
                        const [eventName] = DOM_EVENTS[name];
                        events.connected.removeEventListener(eventName, event);
                    }
                });
                set((state)=>({
                        events: {
                            ...state.events,
                            connected: undefined
                        }
                    }));
            }
        }
    };
}
/**
 * A DOM canvas which accepts threejs elements as children.
 * @see https://docs.pmnd.rs/react-three-fiber/api/canvas
 */ const Canvas = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function Canvas({ children, fallback, resize, style, gl, events = createPointerEvents, shadows, linear, flat, legacy, orthographic, frameloop, dpr, performance, raycaster, camera, onPointerMissed, onCreated, ...props }, forwardedRef) {
    // Create a known catalogue of Threejs-native elements
    // This will include the entire THREE namespace by default, users can extend
    // their own elements by using the createRoot API instead
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Canvas.Canvas.useMemo": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__)
    }["Canvas.Canvas.useMemo"], []);
    const [containerRef, { width, height }] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$use$2d$measure$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        scroll: true,
        debounce: {
            scroll: 50,
            resize: 0
        },
        ...resize
    });
    const canvasRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const divRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const [canvas, setCanvas] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"](forwardedRef, {
        "Canvas.Canvas.useImperativeHandle": ()=>canvasRef.current
    }["Canvas.Canvas.useImperativeHandle"]);
    const handlePointerMissed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u"])(onPointerMissed);
    const [block, setBlock] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const [error, setError] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false); // Suspend this component if block is a promise (2nd run)
    if (block) throw block; // Throw exception outwards if anything within canvas throws
    if (error) throw error;
    const root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    if (width > 0 && height > 0 && canvas) {
        if (!root.current) root.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(canvas);
        root.current.configure({
            gl,
            events,
            shadows,
            linear,
            flat,
            legacy,
            orthographic,
            frameloop,
            dpr,
            performance,
            raycaster,
            camera,
            size: {
                width,
                height
            },
            // Pass mutable reference to onPointerMissed so it's free to update
            onPointerMissed: (...args)=>handlePointerMissed.current == null ? void 0 : handlePointerMissed.current(...args),
            onCreated: (state)=>{
                state.events.connect == null ? void 0 : state.events.connect(divRef.current);
                onCreated == null ? void 0 : onCreated(state);
            }
        });
        root.current.render(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["E"], {
            set: setError
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
            fallback: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["B"], {
                set: setBlock
            })
        }, children)));
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])({
        "Canvas.Canvas.useIsomorphicLayoutEffect": ()=>{
            setCanvas(canvasRef.current);
        }
    }["Canvas.Canvas.useIsomorphicLayoutEffect"], []);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "Canvas.Canvas.useEffect": ()=>{
            if (canvas) return ({
                "Canvas.Canvas.useEffect": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])(canvas)
            })["Canvas.Canvas.useEffect"];
        }
    }["Canvas.Canvas.useEffect"], [
        canvas
    ]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        ref: divRef,
        style: {
            position: 'relative',
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            ...style
        }
    }, props), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        ref: containerRef,
        style: {
            width: '100%',
            height: '100%'
        }
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("canvas", {
        ref: canvasRef,
        style: {
            display: 'block'
        }
    }, fallback)));
});
;
}),
"[project]/apps/frontend/node_modules/@react-three/fiber/dist/index-4f1a8e2f.esm.js [app-client] (ecmascript) <export x as useFrame>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useFrame",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["x"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/fiber/dist/index-4f1a8e2f.esm.js [app-client] (ecmascript)");
}),
"[project]/apps/frontend/node_modules/@react-three/fiber/dist/index-4f1a8e2f.esm.js [app-client] (ecmascript) <export w as useThree>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useThree",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["w"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/fiber/dist/index-4f1a8e2f.esm.js [app-client] (ecmascript)");
}),
"[project]/apps/frontend/node_modules/@react-three/fiber/dist/index-4f1a8e2f.esm.js [app-client] (ecmascript) <export f as context>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "context",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["f"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/fiber/dist/index-4f1a8e2f.esm.js [app-client] (ecmascript)");
}),
"[project]/apps/frontend/node_modules/@react-three/fiber/dist/index-4f1a8e2f.esm.js [app-client] (ecmascript) <export z as useLoader>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useLoader",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/fiber/dist/index-4f1a8e2f.esm.js [app-client] (ecmascript)");
}),
"[project]/apps/frontend/node_modules/@react-three/fiber/dist/index-4f1a8e2f.esm.js [app-client] (ecmascript) <export e as extend>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "extend",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/fiber/dist/index-4f1a8e2f.esm.js [app-client] (ecmascript)");
}),
"[project]/apps/frontend/node_modules/@react-three/fiber/dist/index-4f1a8e2f.esm.js [app-client] (ecmascript) <export g as createPortal>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createPortal",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["g"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/fiber/dist/index-4f1a8e2f.esm.js [app-client] (ecmascript)");
}),
"[project]/apps/frontend/node_modules/@react-three/fiber/dist/index-4f1a8e2f.esm.js [app-client] (ecmascript) <export i as applyProps>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "applyProps",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["i"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/node_modules/@react-three/fiber/dist/index-4f1a8e2f.esm.js [app-client] (ecmascript)");
}),
"[project]/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_extends
]);
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable", _extends.apply(null, arguments);
}
;
}),
"[project]/node_modules/react-use-measure/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>j
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function g(n, t) {
    let o;
    return (...i)=>{
        window.clearTimeout(o), o = window.setTimeout(()=>n(...i), t);
    };
}
function j({ debounce: n, scroll: t, polyfill: o, offsetSize: i } = {
    debounce: 0,
    scroll: !1,
    offsetSize: !1
}) {
    const a = o || (typeof window == "undefined" ? class {
    } : window.ResizeObserver);
    if (!a) throw new Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");
    const [c, h] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        left: 0,
        top: 0,
        width: 0,
        height: 0,
        bottom: 0,
        right: 0,
        x: 0,
        y: 0
    }), e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        element: null,
        scrollContainers: null,
        resizeObserver: null,
        lastBounds: c,
        orientationHandler: null
    }), d = n ? typeof n == "number" ? n : n.scroll : null, f = n ? typeof n == "number" ? n : n.resize : null, w = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(!1);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>(w.current = !0, ()=>void (w.current = !1)));
    const [z, m, s] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const r = ()=>{
            if (!e.current.element) return;
            const { left: y, top: C, width: H, height: O, bottom: S, right: x, x: B, y: R } = e.current.element.getBoundingClientRect(), l = {
                left: y,
                top: C,
                width: H,
                height: O,
                bottom: S,
                right: x,
                x: B,
                y: R
            };
            e.current.element instanceof HTMLElement && i && (l.height = e.current.element.offsetHeight, l.width = e.current.element.offsetWidth), Object.freeze(l), w.current && !D(e.current.lastBounds, l) && h(e.current.lastBounds = l);
        };
        return [
            r,
            f ? g(r, f) : r,
            d ? g(r, d) : r
        ];
    }, [
        h,
        i,
        d,
        f
    ]);
    function v() {
        e.current.scrollContainers && (e.current.scrollContainers.forEach((r)=>r.removeEventListener("scroll", s, !0)), e.current.scrollContainers = null), e.current.resizeObserver && (e.current.resizeObserver.disconnect(), e.current.resizeObserver = null), e.current.orientationHandler && ("orientation" in screen && "removeEventListener" in screen.orientation ? screen.orientation.removeEventListener("change", e.current.orientationHandler) : "onorientationchange" in window && window.removeEventListener("orientationchange", e.current.orientationHandler));
    }
    function b() {
        e.current.element && (e.current.resizeObserver = new a(s), e.current.resizeObserver.observe(e.current.element), t && e.current.scrollContainers && e.current.scrollContainers.forEach((r)=>r.addEventListener("scroll", s, {
                capture: !0,
                passive: !0
            })), e.current.orientationHandler = ()=>{
            s();
        }, "orientation" in screen && "addEventListener" in screen.orientation ? screen.orientation.addEventListener("change", e.current.orientationHandler) : "onorientationchange" in window && window.addEventListener("orientationchange", e.current.orientationHandler));
    }
    const L = (r)=>{
        !r || r === e.current.element || (v(), e.current.element = r, e.current.scrollContainers = E(r), b());
    };
    return X(s, !!t), W(m), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        v(), b();
    }, [
        t,
        s,
        m
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>v, []), [
        L,
        c,
        z
    ];
}
function W(n) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const t = n;
        return window.addEventListener("resize", t), ()=>void window.removeEventListener("resize", t);
    }, [
        n
    ]);
}
function X(n, t) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (t) {
            const o = n;
            return window.addEventListener("scroll", o, {
                capture: !0,
                passive: !0
            }), ()=>void window.removeEventListener("scroll", o, !0);
        }
    }, [
        n,
        t
    ]);
}
function E(n) {
    const t = [];
    if (!n || n === document.body) return t;
    const { overflow: o, overflowX: i, overflowY: a } = window.getComputedStyle(n);
    return [
        o,
        i,
        a
    ].some((c)=>c === "auto" || c === "scroll") && t.push(n), [
        ...t,
        ...E(n.parentElement)
    ];
}
const k = [
    "x",
    "y",
    "top",
    "bottom",
    "left",
    "right",
    "width",
    "height"
], D = (n, t)=>k.every((o)=>n[o] === t[o]);
;
 //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/react-merge-refs/dist/react-merge-refs.esm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function mergeRefs(refs) {
    return function(value) {
        refs.forEach(function(ref) {
            if (typeof ref === "function") {
                ref(value);
            } else if (ref != null) {
                ref.current = value;
            }
        });
    };
}
const __TURBOPACK__default__export__ = mergeRefs;
 //# sourceMappingURL=react-merge-refs.esm.js.map
}),
"[project]/node_modules/@react-spring/rafz/dist/react-spring_rafz.modern.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__raf",
    ()=>__raf,
    "raf",
    ()=>raf
]);
// src/index.ts
var updateQueue = makeQueue();
var raf = (fn)=>schedule(fn, updateQueue);
var writeQueue = makeQueue();
raf.write = (fn)=>schedule(fn, writeQueue);
var onStartQueue = makeQueue();
raf.onStart = (fn)=>schedule(fn, onStartQueue);
var onFrameQueue = makeQueue();
raf.onFrame = (fn)=>schedule(fn, onFrameQueue);
var onFinishQueue = makeQueue();
raf.onFinish = (fn)=>schedule(fn, onFinishQueue);
var timeouts = [];
raf.setTimeout = (handler, ms)=>{
    const time = raf.now() + ms;
    const cancel = ()=>{
        const i = timeouts.findIndex((t)=>t.cancel == cancel);
        if (~i) timeouts.splice(i, 1);
        pendingCount -= ~i ? 1 : 0;
    };
    const timeout = {
        time,
        handler,
        cancel
    };
    timeouts.splice(findTimeout(time), 0, timeout);
    pendingCount += 1;
    start();
    return timeout;
};
var findTimeout = (time)=>~(~timeouts.findIndex((t)=>t.time > time) || ~timeouts.length);
raf.cancel = (fn)=>{
    onStartQueue.delete(fn);
    onFrameQueue.delete(fn);
    onFinishQueue.delete(fn);
    updateQueue.delete(fn);
    writeQueue.delete(fn);
};
raf.sync = (fn)=>{
    sync = true;
    raf.batchedUpdates(fn);
    sync = false;
};
raf.throttle = (fn)=>{
    let lastArgs;
    function queuedFn() {
        try {
            fn(...lastArgs);
        } finally{
            lastArgs = null;
        }
    }
    function throttled(...args) {
        lastArgs = args;
        raf.onStart(queuedFn);
    }
    throttled.handler = fn;
    throttled.cancel = ()=>{
        onStartQueue.delete(queuedFn);
        lastArgs = null;
    };
    return throttled;
};
var nativeRaf = typeof window != "undefined" ? window.requestAnimationFrame : // eslint-disable-next-line @typescript-eslint/no-empty-function
()=>{};
raf.use = (impl)=>nativeRaf = impl;
raf.now = typeof performance != "undefined" ? ()=>performance.now() : Date.now;
raf.batchedUpdates = (fn)=>fn();
raf.catch = console.error;
raf.frameLoop = "always";
raf.advance = ()=>{
    if (raf.frameLoop !== "demand") {
        console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand");
    } else {
        update();
    }
};
var ts = -1;
var pendingCount = 0;
var sync = false;
function schedule(fn, queue) {
    if (sync) {
        queue.delete(fn);
        fn(0);
    } else {
        queue.add(fn);
        start();
    }
}
function start() {
    if (ts < 0) {
        ts = 0;
        if (raf.frameLoop !== "demand") {
            nativeRaf(loop);
        }
    }
}
function stop() {
    ts = -1;
}
function loop() {
    if (~ts) {
        nativeRaf(loop);
        raf.batchedUpdates(update);
    }
}
function update() {
    const prevTs = ts;
    ts = raf.now();
    const count = findTimeout(ts);
    if (count) {
        eachSafely(timeouts.splice(0, count), (t)=>t.handler());
        pendingCount -= count;
    }
    if (!pendingCount) {
        stop();
        return;
    }
    onStartQueue.flush();
    updateQueue.flush(prevTs ? Math.min(64, ts - prevTs) : 16.667);
    onFrameQueue.flush();
    writeQueue.flush();
    onFinishQueue.flush();
}
function makeQueue() {
    let next = /* @__PURE__ */ new Set();
    let current = next;
    return {
        add (fn) {
            pendingCount += current == next && !next.has(fn) ? 1 : 0;
            next.add(fn);
        },
        delete (fn) {
            pendingCount -= current == next && next.has(fn) ? 1 : 0;
            return next.delete(fn);
        },
        flush (arg) {
            if (current.size) {
                next = /* @__PURE__ */ new Set();
                pendingCount -= current.size;
                eachSafely(current, (fn)=>fn(arg) && next.add(fn));
                pendingCount += next.size;
                current = next;
            }
        }
    };
}
function eachSafely(values, each) {
    values.forEach((value)=>{
        try {
            each(value);
        } catch (e) {
            raf.catch(e);
        }
    });
}
var __raf = {
    /** The number of pending tasks */ count () {
        return pendingCount;
    },
    /** Whether there's a raf update loop running */ isRunning () {
        return ts >= 0;
    },
    /** Clear internal state. Never call from update loop! */ clear () {
        ts = -1;
        timeouts = [];
        onStartQueue = makeQueue();
        updateQueue = makeQueue();
        onFrameQueue = makeQueue();
        writeQueue = makeQueue();
        onFinishQueue = makeQueue();
        pendingCount = 0;
    }
};
;
 //# sourceMappingURL=react-spring_rafz.modern.mjs.map
}),
"[project]/node_modules/@react-spring/shared/dist/react-spring_shared.modern.mjs [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FluidValue",
    ()=>FluidValue,
    "Globals",
    ()=>globals_exports,
    "addFluidObserver",
    ()=>addFluidObserver,
    "callFluidObserver",
    ()=>callFluidObserver,
    "callFluidObservers",
    ()=>callFluidObservers,
    "clamp",
    ()=>clamp,
    "colorToRgba",
    ()=>colorToRgba,
    "colors",
    ()=>colors2,
    "createInterpolator",
    ()=>createInterpolator,
    "createStringInterpolator",
    ()=>createStringInterpolator2,
    "defineHidden",
    ()=>defineHidden,
    "deprecateDirectCall",
    ()=>deprecateDirectCall,
    "deprecateInterpolate",
    ()=>deprecateInterpolate,
    "each",
    ()=>each,
    "eachProp",
    ()=>eachProp,
    "easings",
    ()=>easings,
    "flush",
    ()=>flush,
    "flushCalls",
    ()=>flushCalls,
    "frameLoop",
    ()=>frameLoop,
    "getFluidObservers",
    ()=>getFluidObservers,
    "getFluidValue",
    ()=>getFluidValue,
    "hasFluidValue",
    ()=>hasFluidValue,
    "hex3",
    ()=>hex3,
    "hex4",
    ()=>hex4,
    "hex6",
    ()=>hex6,
    "hex8",
    ()=>hex8,
    "hsl",
    ()=>hsl,
    "hsla",
    ()=>hsla,
    "is",
    ()=>is,
    "isAnimatedString",
    ()=>isAnimatedString,
    "isEqual",
    ()=>isEqual,
    "isSSR",
    ()=>isSSR,
    "noop",
    ()=>noop,
    "onResize",
    ()=>onResize,
    "onScroll",
    ()=>onScroll,
    "once",
    ()=>once,
    "prefix",
    ()=>prefix,
    "removeFluidObserver",
    ()=>removeFluidObserver,
    "rgb",
    ()=>rgb,
    "rgba",
    ()=>rgba,
    "setFluidGetter",
    ()=>setFluidGetter,
    "toArray",
    ()=>toArray,
    "useConstant",
    ()=>useConstant,
    "useForceUpdate",
    ()=>useForceUpdate,
    "useIsomorphicLayoutEffect",
    ()=>useIsomorphicLayoutEffect,
    "useMemoOne",
    ()=>useMemoOne,
    "useOnce",
    ()=>useOnce,
    "usePrev",
    ()=>usePrev,
    "useReducedMotion",
    ()=>useReducedMotion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$rafz$2f$dist$2f$react$2d$spring_rafz$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-spring/rafz/dist/react-spring_rafz.modern.mjs [app-client] (ecmascript)");
// src/hooks/useConstant.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __defProp = Object.defineProperty;
var __export = (target, all)=>{
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
// src/globals.ts
var globals_exports = {};
__export(globals_exports, {
    assign: ()=>assign,
    colors: ()=>colors,
    createStringInterpolator: ()=>createStringInterpolator,
    skipAnimation: ()=>skipAnimation,
    to: ()=>to,
    willAdvance: ()=>willAdvance
});
;
// src/helpers.ts
function noop() {}
var defineHidden = (obj, key, value)=>Object.defineProperty(obj, key, {
        value,
        writable: true,
        configurable: true
    });
var is = {
    arr: Array.isArray,
    obj: (a)=>!!a && a.constructor.name === "Object",
    fun: (a)=>typeof a === "function",
    str: (a)=>typeof a === "string",
    num: (a)=>typeof a === "number",
    und: (a)=>a === void 0
};
function isEqual(a, b) {
    if (is.arr(a)) {
        if (!is.arr(b) || a.length !== b.length) return false;
        for(let i = 0; i < a.length; i++){
            if (a[i] !== b[i]) return false;
        }
        return true;
    }
    return a === b;
}
var each = (obj, fn)=>obj.forEach(fn);
function eachProp(obj, fn, ctx) {
    if (is.arr(obj)) {
        for(let i = 0; i < obj.length; i++){
            fn.call(ctx, obj[i], `${i}`);
        }
        return;
    }
    for(const key in obj){
        if (obj.hasOwnProperty(key)) {
            fn.call(ctx, obj[key], key);
        }
    }
}
var toArray = (a)=>is.und(a) ? [] : is.arr(a) ? a : [
        a
    ];
function flush(queue, iterator) {
    if (queue.size) {
        const items = Array.from(queue);
        queue.clear();
        each(items, iterator);
    }
}
var flushCalls = (queue, ...args)=>flush(queue, (fn)=>fn(...args));
var isSSR = ()=>typeof window === "undefined" || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent);
// src/globals.ts
var createStringInterpolator;
var to;
var colors = null;
var skipAnimation = false;
var willAdvance = noop;
var assign = (globals)=>{
    if (globals.to) to = globals.to;
    if (globals.now) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$rafz$2f$dist$2f$react$2d$spring_rafz$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["raf"].now = globals.now;
    if (globals.colors !== void 0) colors = globals.colors;
    if (globals.skipAnimation != null) skipAnimation = globals.skipAnimation;
    if (globals.createStringInterpolator) createStringInterpolator = globals.createStringInterpolator;
    if (globals.requestAnimationFrame) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$rafz$2f$dist$2f$react$2d$spring_rafz$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["raf"].use(globals.requestAnimationFrame);
    if (globals.batchedUpdates) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$rafz$2f$dist$2f$react$2d$spring_rafz$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["raf"].batchedUpdates = globals.batchedUpdates;
    if (globals.willAdvance) willAdvance = globals.willAdvance;
    if (globals.frameLoop) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$rafz$2f$dist$2f$react$2d$spring_rafz$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["raf"].frameLoop = globals.frameLoop;
};
;
var startQueue = /* @__PURE__ */ new Set();
var currentFrame = [];
var prevFrame = [];
var priority = 0;
var frameLoop = {
    get idle () {
        return !startQueue.size && !currentFrame.length;
    },
    /** Advance the given animation on every frame until idle. */ start (animation) {
        if (priority > animation.priority) {
            startQueue.add(animation);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$rafz$2f$dist$2f$react$2d$spring_rafz$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["raf"].onStart(flushStartQueue);
        } else {
            startSafely(animation);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$rafz$2f$dist$2f$react$2d$spring_rafz$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["raf"])(advance);
        }
    },
    /** Advance all animations by the given time. */ advance,
    /** Call this when an animation's priority changes. */ sort (animation) {
        if (priority) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$rafz$2f$dist$2f$react$2d$spring_rafz$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["raf"].onFrame(()=>frameLoop.sort(animation));
        } else {
            const prevIndex = currentFrame.indexOf(animation);
            if (~prevIndex) {
                currentFrame.splice(prevIndex, 1);
                startUnsafely(animation);
            }
        }
    },
    /**
   * Clear all animations. For testing purposes.
   *
   * ☠️ Never call this from within the frameloop.
   */ clear () {
        currentFrame = [];
        startQueue.clear();
    }
};
function flushStartQueue() {
    startQueue.forEach(startSafely);
    startQueue.clear();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$rafz$2f$dist$2f$react$2d$spring_rafz$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["raf"])(advance);
}
function startSafely(animation) {
    if (!currentFrame.includes(animation)) startUnsafely(animation);
}
function startUnsafely(animation) {
    currentFrame.splice(findIndex(currentFrame, (other)=>other.priority > animation.priority), 0, animation);
}
function advance(dt) {
    const nextFrame = prevFrame;
    for(let i = 0; i < currentFrame.length; i++){
        const animation = currentFrame[i];
        priority = animation.priority;
        if (!animation.idle) {
            willAdvance(animation);
            animation.advance(dt);
            if (!animation.idle) {
                nextFrame.push(animation);
            }
        }
    }
    priority = 0;
    prevFrame = currentFrame;
    prevFrame.length = 0;
    currentFrame = nextFrame;
    return currentFrame.length > 0;
}
function findIndex(arr, test) {
    const index = arr.findIndex(test);
    return index < 0 ? arr.length : index;
}
// src/clamp.ts
var clamp = (min, max, v)=>Math.min(Math.max(v, min), max);
// src/colors.ts
var colors2 = {
    transparent: 0,
    aliceblue: 4042850303,
    antiquewhite: 4209760255,
    aqua: 16777215,
    aquamarine: 2147472639,
    azure: 4043309055,
    beige: 4126530815,
    bisque: 4293182719,
    black: 255,
    blanchedalmond: 4293643775,
    blue: 65535,
    blueviolet: 2318131967,
    brown: 2771004159,
    burlywood: 3736635391,
    burntsienna: 3934150143,
    cadetblue: 1604231423,
    chartreuse: 2147418367,
    chocolate: 3530104575,
    coral: 4286533887,
    cornflowerblue: 1687547391,
    cornsilk: 4294499583,
    crimson: 3692313855,
    cyan: 16777215,
    darkblue: 35839,
    darkcyan: 9145343,
    darkgoldenrod: 3095792639,
    darkgray: 2846468607,
    darkgreen: 6553855,
    darkgrey: 2846468607,
    darkkhaki: 3182914559,
    darkmagenta: 2332068863,
    darkolivegreen: 1433087999,
    darkorange: 4287365375,
    darkorchid: 2570243327,
    darkred: 2332033279,
    darksalmon: 3918953215,
    darkseagreen: 2411499519,
    darkslateblue: 1211993087,
    darkslategray: 793726975,
    darkslategrey: 793726975,
    darkturquoise: 13554175,
    darkviolet: 2483082239,
    deeppink: 4279538687,
    deepskyblue: 12582911,
    dimgray: 1768516095,
    dimgrey: 1768516095,
    dodgerblue: 512819199,
    firebrick: 2988581631,
    floralwhite: 4294635775,
    forestgreen: 579543807,
    fuchsia: 4278255615,
    gainsboro: 3705462015,
    ghostwhite: 4177068031,
    gold: 4292280575,
    goldenrod: 3668254975,
    gray: 2155905279,
    green: 8388863,
    greenyellow: 2919182335,
    grey: 2155905279,
    honeydew: 4043305215,
    hotpink: 4285117695,
    indianred: 3445382399,
    indigo: 1258324735,
    ivory: 4294963455,
    khaki: 4041641215,
    lavender: 3873897215,
    lavenderblush: 4293981695,
    lawngreen: 2096890111,
    lemonchiffon: 4294626815,
    lightblue: 2916673279,
    lightcoral: 4034953471,
    lightcyan: 3774873599,
    lightgoldenrodyellow: 4210742015,
    lightgray: 3553874943,
    lightgreen: 2431553791,
    lightgrey: 3553874943,
    lightpink: 4290167295,
    lightsalmon: 4288707327,
    lightseagreen: 548580095,
    lightskyblue: 2278488831,
    lightslategray: 2005441023,
    lightslategrey: 2005441023,
    lightsteelblue: 2965692159,
    lightyellow: 4294959359,
    lime: 16711935,
    limegreen: 852308735,
    linen: 4210091775,
    magenta: 4278255615,
    maroon: 2147483903,
    mediumaquamarine: 1724754687,
    mediumblue: 52735,
    mediumorchid: 3126187007,
    mediumpurple: 2473647103,
    mediumseagreen: 1018393087,
    mediumslateblue: 2070474495,
    mediumspringgreen: 16423679,
    mediumturquoise: 1221709055,
    mediumvioletred: 3340076543,
    midnightblue: 421097727,
    mintcream: 4127193855,
    mistyrose: 4293190143,
    moccasin: 4293178879,
    navajowhite: 4292783615,
    navy: 33023,
    oldlace: 4260751103,
    olive: 2155872511,
    olivedrab: 1804477439,
    orange: 4289003775,
    orangered: 4282712319,
    orchid: 3664828159,
    palegoldenrod: 4008225535,
    palegreen: 2566625535,
    paleturquoise: 2951671551,
    palevioletred: 3681588223,
    papayawhip: 4293907967,
    peachpuff: 4292524543,
    peru: 3448061951,
    pink: 4290825215,
    plum: 3718307327,
    powderblue: 2967529215,
    purple: 2147516671,
    rebeccapurple: 1714657791,
    red: 4278190335,
    rosybrown: 3163525119,
    royalblue: 1097458175,
    saddlebrown: 2336560127,
    salmon: 4202722047,
    sandybrown: 4104413439,
    seagreen: 780883967,
    seashell: 4294307583,
    sienna: 2689740287,
    silver: 3233857791,
    skyblue: 2278484991,
    slateblue: 1784335871,
    slategray: 1887473919,
    slategrey: 1887473919,
    snow: 4294638335,
    springgreen: 16744447,
    steelblue: 1182971135,
    tan: 3535047935,
    teal: 8421631,
    thistle: 3636451583,
    tomato: 4284696575,
    turquoise: 1088475391,
    violet: 4001558271,
    wheat: 4125012991,
    white: 4294967295,
    whitesmoke: 4126537215,
    yellow: 4294902015,
    yellowgreen: 2597139199
};
// src/colorMatchers.ts
var NUMBER = "[-+]?\\d*\\.?\\d+";
var PERCENTAGE = NUMBER + "%";
function call(...parts) {
    return "\\(\\s*(" + parts.join(")\\s*,\\s*(") + ")\\s*\\)";
}
var rgb = new RegExp("rgb" + call(NUMBER, NUMBER, NUMBER));
var rgba = new RegExp("rgba" + call(NUMBER, NUMBER, NUMBER, NUMBER));
var hsl = new RegExp("hsl" + call(NUMBER, PERCENTAGE, PERCENTAGE));
var hsla = new RegExp("hsla" + call(NUMBER, PERCENTAGE, PERCENTAGE, NUMBER));
var hex3 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
var hex4 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
var hex6 = /^#([0-9a-fA-F]{6})$/;
var hex8 = /^#([0-9a-fA-F]{8})$/;
// src/normalizeColor.ts
function normalizeColor(color) {
    let match;
    if (typeof color === "number") {
        return color >>> 0 === color && color >= 0 && color <= 4294967295 ? color : null;
    }
    if (match = hex6.exec(color)) return parseInt(match[1] + "ff", 16) >>> 0;
    if (colors && colors[color] !== void 0) {
        return colors[color];
    }
    if (match = rgb.exec(color)) {
        return (parse255(match[1]) << 24 | // r
        parse255(match[2]) << 16 | // g
        parse255(match[3]) << 8 | // b
        255) >>> // a
        0;
    }
    if (match = rgba.exec(color)) {
        return (parse255(match[1]) << 24 | // r
        parse255(match[2]) << 16 | // g
        parse255(match[3]) << 8 | // b
        parse1(match[4])) >>> // a
        0;
    }
    if (match = hex3.exec(color)) {
        return parseInt(match[1] + match[1] + // r
        match[2] + match[2] + // g
        match[3] + match[3] + // b
        "ff", // a
        16) >>> 0;
    }
    if (match = hex8.exec(color)) return parseInt(match[1], 16) >>> 0;
    if (match = hex4.exec(color)) {
        return parseInt(match[1] + match[1] + // r
        match[2] + match[2] + // g
        match[3] + match[3] + // b
        match[4] + match[4], // a
        16) >>> 0;
    }
    if (match = hsl.exec(color)) {
        return (hslToRgb(parse360(match[1]), // h
        parsePercentage(match[2]), // s
        parsePercentage(match[3])) | 255) >>> // a
        0;
    }
    if (match = hsla.exec(color)) {
        return (hslToRgb(parse360(match[1]), // h
        parsePercentage(match[2]), // s
        parsePercentage(match[3])) | parse1(match[4])) >>> // a
        0;
    }
    return null;
}
function hue2rgb(p, q, t) {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
}
function hslToRgb(h, s, l) {
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    const r = hue2rgb(p, q, h + 1 / 3);
    const g = hue2rgb(p, q, h);
    const b = hue2rgb(p, q, h - 1 / 3);
    return Math.round(r * 255) << 24 | Math.round(g * 255) << 16 | Math.round(b * 255) << 8;
}
function parse255(str) {
    const int = parseInt(str, 10);
    if (int < 0) return 0;
    if (int > 255) return 255;
    return int;
}
function parse360(str) {
    const int = parseFloat(str);
    return (int % 360 + 360) % 360 / 360;
}
function parse1(str) {
    const num = parseFloat(str);
    if (num < 0) return 0;
    if (num > 1) return 255;
    return Math.round(num * 255);
}
function parsePercentage(str) {
    const int = parseFloat(str);
    if (int < 0) return 0;
    if (int > 100) return 1;
    return int / 100;
}
// src/colorToRgba.ts
function colorToRgba(input) {
    let int32Color = normalizeColor(input);
    if (int32Color === null) return input;
    int32Color = int32Color || 0;
    const r = (int32Color & 4278190080) >>> 24;
    const g = (int32Color & 16711680) >>> 16;
    const b = (int32Color & 65280) >>> 8;
    const a = (int32Color & 255) / 255;
    return `rgba(${r}, ${g}, ${b}, ${a})`;
}
// src/createInterpolator.ts
var createInterpolator = (range, output, extrapolate)=>{
    if (is.fun(range)) {
        return range;
    }
    if (is.arr(range)) {
        return createInterpolator({
            range,
            output,
            extrapolate
        });
    }
    if (is.str(range.output[0])) {
        return createStringInterpolator(range);
    }
    const config = range;
    const outputRange = config.output;
    const inputRange = config.range || [
        0,
        1
    ];
    const extrapolateLeft = config.extrapolateLeft || config.extrapolate || "extend";
    const extrapolateRight = config.extrapolateRight || config.extrapolate || "extend";
    const easing = config.easing || ((t)=>t);
    return (input)=>{
        const range2 = findRange(input, inputRange);
        return interpolate(input, inputRange[range2], inputRange[range2 + 1], outputRange[range2], outputRange[range2 + 1], easing, extrapolateLeft, extrapolateRight, config.map);
    };
};
function interpolate(input, inputMin, inputMax, outputMin, outputMax, easing, extrapolateLeft, extrapolateRight, map) {
    let result = map ? map(input) : input;
    if (result < inputMin) {
        if (extrapolateLeft === "identity") return result;
        else if (extrapolateLeft === "clamp") result = inputMin;
    }
    if (result > inputMax) {
        if (extrapolateRight === "identity") return result;
        else if (extrapolateRight === "clamp") result = inputMax;
    }
    if (outputMin === outputMax) return outputMin;
    if (inputMin === inputMax) return input <= inputMin ? outputMin : outputMax;
    if (inputMin === -Infinity) result = -result;
    else if (inputMax === Infinity) result = result - inputMin;
    else result = (result - inputMin) / (inputMax - inputMin);
    result = easing(result);
    if (outputMin === -Infinity) result = -result;
    else if (outputMax === Infinity) result = result + outputMin;
    else result = result * (outputMax - outputMin) + outputMin;
    return result;
}
function findRange(input, inputRange) {
    for(var i = 1; i < inputRange.length - 1; ++i)if (inputRange[i] >= input) break;
    return i - 1;
}
// src/easings.ts
var steps = (steps2, direction = "end")=>(progress2)=>{
        progress2 = direction === "end" ? Math.min(progress2, 0.999) : Math.max(progress2, 1e-3);
        const expanded = progress2 * steps2;
        const rounded = direction === "end" ? Math.floor(expanded) : Math.ceil(expanded);
        return clamp(0, 1, rounded / steps2);
    };
var c1 = 1.70158;
var c2 = c1 * 1.525;
var c3 = c1 + 1;
var c4 = 2 * Math.PI / 3;
var c5 = 2 * Math.PI / 4.5;
var bounceOut = (x)=>{
    const n1 = 7.5625;
    const d1 = 2.75;
    if (x < 1 / d1) {
        return n1 * x * x;
    } else if (x < 2 / d1) {
        return n1 * (x -= 1.5 / d1) * x + 0.75;
    } else if (x < 2.5 / d1) {
        return n1 * (x -= 2.25 / d1) * x + 0.9375;
    } else {
        return n1 * (x -= 2.625 / d1) * x + 0.984375;
    }
};
var easings = {
    linear: (x)=>x,
    easeInQuad: (x)=>x * x,
    easeOutQuad: (x)=>1 - (1 - x) * (1 - x),
    easeInOutQuad: (x)=>x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2,
    easeInCubic: (x)=>x * x * x,
    easeOutCubic: (x)=>1 - Math.pow(1 - x, 3),
    easeInOutCubic: (x)=>x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2,
    easeInQuart: (x)=>x * x * x * x,
    easeOutQuart: (x)=>1 - Math.pow(1 - x, 4),
    easeInOutQuart: (x)=>x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2,
    easeInQuint: (x)=>x * x * x * x * x,
    easeOutQuint: (x)=>1 - Math.pow(1 - x, 5),
    easeInOutQuint: (x)=>x < 0.5 ? 16 * x * x * x * x * x : 1 - Math.pow(-2 * x + 2, 5) / 2,
    easeInSine: (x)=>1 - Math.cos(x * Math.PI / 2),
    easeOutSine: (x)=>Math.sin(x * Math.PI / 2),
    easeInOutSine: (x)=>-(Math.cos(Math.PI * x) - 1) / 2,
    easeInExpo: (x)=>x === 0 ? 0 : Math.pow(2, 10 * x - 10),
    easeOutExpo: (x)=>x === 1 ? 1 : 1 - Math.pow(2, -10 * x),
    easeInOutExpo: (x)=>x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ? Math.pow(2, 20 * x - 10) / 2 : (2 - Math.pow(2, -20 * x + 10)) / 2,
    easeInCirc: (x)=>1 - Math.sqrt(1 - Math.pow(x, 2)),
    easeOutCirc: (x)=>Math.sqrt(1 - Math.pow(x - 1, 2)),
    easeInOutCirc: (x)=>x < 0.5 ? (1 - Math.sqrt(1 - Math.pow(2 * x, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * x + 2, 2)) + 1) / 2,
    easeInBack: (x)=>c3 * x * x * x - c1 * x * x,
    easeOutBack: (x)=>1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2),
    easeInOutBack: (x)=>x < 0.5 ? Math.pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2) / 2 : (Math.pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2,
    easeInElastic: (x)=>x === 0 ? 0 : x === 1 ? 1 : -Math.pow(2, 10 * x - 10) * Math.sin((x * 10 - 10.75) * c4),
    easeOutElastic: (x)=>x === 0 ? 0 : x === 1 ? 1 : Math.pow(2, -10 * x) * Math.sin((x * 10 - 0.75) * c4) + 1,
    easeInOutElastic: (x)=>x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ? -(Math.pow(2, 20 * x - 10) * Math.sin((20 * x - 11.125) * c5)) / 2 : Math.pow(2, -20 * x + 10) * Math.sin((20 * x - 11.125) * c5) / 2 + 1,
    easeInBounce: (x)=>1 - bounceOut(1 - x),
    easeOutBounce: bounceOut,
    easeInOutBounce: (x)=>x < 0.5 ? (1 - bounceOut(1 - 2 * x)) / 2 : (1 + bounceOut(2 * x - 1)) / 2,
    steps
};
// src/fluids.ts
var $get = Symbol.for("FluidValue.get");
var $observers = Symbol.for("FluidValue.observers");
var hasFluidValue = (arg)=>Boolean(arg && arg[$get]);
var getFluidValue = (arg)=>arg && arg[$get] ? arg[$get]() : arg;
var getFluidObservers = (target)=>target[$observers] || null;
function callFluidObserver(observer2, event) {
    if (observer2.eventObserved) {
        observer2.eventObserved(event);
    } else {
        observer2(event);
    }
}
function callFluidObservers(target, event) {
    const observers = target[$observers];
    if (observers) {
        observers.forEach((observer2)=>{
            callFluidObserver(observer2, event);
        });
    }
}
var FluidValue = class {
    constructor(get){
        if (!get && !(get = this.get)) {
            throw Error("Unknown getter");
        }
        setFluidGetter(this, get);
    }
};
$get, $observers;
var setFluidGetter = (target, get)=>setHidden(target, $get, get);
function addFluidObserver(target, observer2) {
    if (target[$get]) {
        let observers = target[$observers];
        if (!observers) {
            setHidden(target, $observers, observers = /* @__PURE__ */ new Set());
        }
        if (!observers.has(observer2)) {
            observers.add(observer2);
            if (target.observerAdded) {
                target.observerAdded(observers.size, observer2);
            }
        }
    }
    return observer2;
}
function removeFluidObserver(target, observer2) {
    const observers = target[$observers];
    if (observers && observers.has(observer2)) {
        const count = observers.size - 1;
        if (count) {
            observers.delete(observer2);
        } else {
            target[$observers] = null;
        }
        if (target.observerRemoved) {
            target.observerRemoved(count, observer2);
        }
    }
}
var setHidden = (target, key, value)=>Object.defineProperty(target, key, {
        value,
        writable: true,
        configurable: true
    });
// src/regexs.ts
var numberRegex = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
var colorRegex = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi;
var unitRegex = new RegExp(`(${numberRegex.source})(%|[a-z]+)`, "i");
var rgbaRegex = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi;
var cssVariableRegex = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
// src/variableToRgba.ts
var variableToRgba = (input)=>{
    const [token, fallback] = parseCSSVariable(input);
    if (!token || isSSR()) {
        return input;
    }
    const value = window.getComputedStyle(document.documentElement).getPropertyValue(token);
    if (value) {
        return value.trim();
    } else if (fallback && fallback.startsWith("--")) {
        const value2 = window.getComputedStyle(document.documentElement).getPropertyValue(fallback);
        if (value2) {
            return value2;
        } else {
            return input;
        }
    } else if (fallback && cssVariableRegex.test(fallback)) {
        return variableToRgba(fallback);
    } else if (fallback) {
        return fallback;
    }
    return input;
};
var parseCSSVariable = (current)=>{
    const match = cssVariableRegex.exec(current);
    if (!match) return [
        , 
    ];
    const [, token, fallback] = match;
    return [
        token,
        fallback
    ];
};
// src/stringInterpolation.ts
var namedColorRegex;
var rgbaRound = (_, p1, p2, p3, p4)=>`rgba(${Math.round(p1)}, ${Math.round(p2)}, ${Math.round(p3)}, ${p4})`;
var createStringInterpolator2 = (config)=>{
    if (!namedColorRegex) namedColorRegex = colors ? // match color names, ignore partial matches
    new RegExp(`(${Object.keys(colors).join("|")})(?!\\w)`, "g") : // never match
    /^\b$/;
    const output = config.output.map((value)=>{
        return getFluidValue(value).replace(cssVariableRegex, variableToRgba).replace(colorRegex, colorToRgba).replace(namedColorRegex, colorToRgba);
    });
    const keyframes = output.map((value)=>value.match(numberRegex).map(Number));
    const outputRanges = keyframes[0].map((_, i)=>keyframes.map((values)=>{
            if (!(i in values)) {
                throw Error('The arity of each "output" value must be equal');
            }
            return values[i];
        }));
    const interpolators = outputRanges.map((output2)=>createInterpolator({
            ...config,
            output: output2
        }));
    return (input)=>{
        const missingUnit = !unitRegex.test(output[0]) && output.find((value)=>unitRegex.test(value))?.replace(numberRegex, "");
        let i = 0;
        return output[0].replace(numberRegex, ()=>`${interpolators[i++](input)}${missingUnit || ""}`).replace(rgbaRegex, rgbaRound);
    };
};
// src/deprecations.ts
var prefix = "react-spring: ";
var once = (fn)=>{
    const func = fn;
    let called = false;
    if (typeof func != "function") {
        throw new TypeError(`${prefix}once requires a function parameter`);
    }
    return (...args)=>{
        if (!called) {
            func(...args);
            called = true;
        }
    };
};
var warnInterpolate = once(console.warn);
function deprecateInterpolate() {
    warnInterpolate(`${prefix}The "interpolate" function is deprecated in v9 (use "to" instead)`);
}
var warnDirectCall = once(console.warn);
function deprecateDirectCall() {
    warnDirectCall(`${prefix}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
}
// src/isAnimatedString.ts
function isAnimatedString(value) {
    return is.str(value) && (value[0] == "#" || /\d/.test(value) || // Do not identify a CSS variable as an AnimatedString if its SSR
    !isSSR() && cssVariableRegex.test(value) || value in (colors || {}));
}
;
// src/dom-events/resize/resizeElement.ts
var observer;
var resizeHandlers = /* @__PURE__ */ new WeakMap();
var handleObservation = (entries)=>entries.forEach(({ target, contentRect })=>{
        return resizeHandlers.get(target)?.forEach((handler)=>handler(contentRect));
    });
function resizeElement(handler, target) {
    if (!observer) {
        if (typeof ResizeObserver !== "undefined") {
            observer = new ResizeObserver(handleObservation);
        }
    }
    let elementHandlers = resizeHandlers.get(target);
    if (!elementHandlers) {
        elementHandlers = /* @__PURE__ */ new Set();
        resizeHandlers.set(target, elementHandlers);
    }
    elementHandlers.add(handler);
    if (observer) {
        observer.observe(target);
    }
    return ()=>{
        const elementHandlers2 = resizeHandlers.get(target);
        if (!elementHandlers2) return;
        elementHandlers2.delete(handler);
        if (!elementHandlers2.size && observer) {
            observer.unobserve(target);
        }
    };
}
// src/dom-events/resize/resizeWindow.ts
var listeners = /* @__PURE__ */ new Set();
var cleanupWindowResizeHandler;
var createResizeHandler = ()=>{
    const handleResize = ()=>{
        listeners.forEach((callback)=>callback({
                width: window.innerWidth,
                height: window.innerHeight
            }));
    };
    window.addEventListener("resize", handleResize);
    return ()=>{
        window.removeEventListener("resize", handleResize);
    };
};
var resizeWindow = (callback)=>{
    listeners.add(callback);
    if (!cleanupWindowResizeHandler) {
        cleanupWindowResizeHandler = createResizeHandler();
    }
    return ()=>{
        listeners.delete(callback);
        if (!listeners.size && cleanupWindowResizeHandler) {
            cleanupWindowResizeHandler();
            cleanupWindowResizeHandler = void 0;
        }
    };
};
// src/dom-events/resize/index.ts
var onResize = (callback, { container = document.documentElement } = {})=>{
    if (container === document.documentElement) {
        return resizeWindow(callback);
    } else {
        return resizeElement(callback, container);
    }
};
// src/progress.ts
var progress = (min, max, value)=>max - min === 0 ? 1 : (value - min) / (max - min);
// src/dom-events/scroll/ScrollHandler.ts
var SCROLL_KEYS = {
    x: {
        length: "Width",
        position: "Left"
    },
    y: {
        length: "Height",
        position: "Top"
    }
};
var ScrollHandler = class {
    constructor(callback, container){
        this.createAxis = ()=>({
                current: 0,
                progress: 0,
                scrollLength: 0
            });
        this.updateAxis = (axisName)=>{
            const axis = this.info[axisName];
            const { length, position } = SCROLL_KEYS[axisName];
            axis.current = this.container[`scroll${position}`];
            axis.scrollLength = this.container[`scroll${length}`] - this.container[`client${length}`];
            axis.progress = progress(0, axis.scrollLength, axis.current);
        };
        this.update = ()=>{
            this.updateAxis("x");
            this.updateAxis("y");
        };
        this.sendEvent = ()=>{
            this.callback(this.info);
        };
        this.advance = ()=>{
            this.update();
            this.sendEvent();
        };
        this.callback = callback;
        this.container = container;
        this.info = {
            time: 0,
            x: this.createAxis(),
            y: this.createAxis()
        };
    }
};
// src/dom-events/scroll/index.ts
var scrollListeners = /* @__PURE__ */ new WeakMap();
var resizeListeners = /* @__PURE__ */ new WeakMap();
var onScrollHandlers = /* @__PURE__ */ new WeakMap();
var getTarget = (container)=>container === document.documentElement ? window : container;
var onScroll = (callback, { container = document.documentElement } = {})=>{
    let containerHandlers = onScrollHandlers.get(container);
    if (!containerHandlers) {
        containerHandlers = /* @__PURE__ */ new Set();
        onScrollHandlers.set(container, containerHandlers);
    }
    const containerHandler = new ScrollHandler(callback, container);
    containerHandlers.add(containerHandler);
    if (!scrollListeners.has(container)) {
        const listener = ()=>{
            containerHandlers?.forEach((handler)=>handler.advance());
            return true;
        };
        scrollListeners.set(container, listener);
        const target = getTarget(container);
        window.addEventListener("resize", listener, {
            passive: true
        });
        if (container !== document.documentElement) {
            resizeListeners.set(container, onResize(listener, {
                container
            }));
        }
        target.addEventListener("scroll", listener, {
            passive: true
        });
    }
    const animateScroll = scrollListeners.get(container);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$rafz$2f$dist$2f$react$2d$spring_rafz$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["raf"])(animateScroll);
    return ()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$rafz$2f$dist$2f$react$2d$spring_rafz$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["raf"].cancel(animateScroll);
        const containerHandlers2 = onScrollHandlers.get(container);
        if (!containerHandlers2) return;
        containerHandlers2.delete(containerHandler);
        if (containerHandlers2.size) return;
        const listener = scrollListeners.get(container);
        scrollListeners.delete(container);
        if (listener) {
            getTarget(container).removeEventListener("scroll", listener);
            window.removeEventListener("resize", listener);
            resizeListeners.get(container)?.();
        }
    };
};
;
function useConstant(init) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    if (ref.current === null) {
        ref.current = init();
    }
    return ref.current;
}
;
;
;
var useIsomorphicLayoutEffect = isSSR() ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"];
// src/hooks/useIsMounted.ts
var useIsMounted = ()=>{
    const isMounted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    useIsomorphicLayoutEffect({
        "useIsMounted.useIsomorphicLayoutEffect": ()=>{
            isMounted.current = true;
            return ({
                "useIsMounted.useIsomorphicLayoutEffect": ()=>{
                    isMounted.current = false;
                }
            })["useIsMounted.useIsomorphicLayoutEffect"];
        }
    }["useIsMounted.useIsomorphicLayoutEffect"], []);
    return isMounted;
};
// src/hooks/useForceUpdate.ts
function useForceUpdate() {
    const update = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])()[1];
    const isMounted = useIsMounted();
    return ()=>{
        if (isMounted.current) {
            update(Math.random());
        }
    };
}
;
function useMemoOne(getResult, inputs) {
    const [initial] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "useMemoOne.useState2": ()=>({
                inputs,
                result: getResult()
            })
    }["useMemoOne.useState2"]);
    const committed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    const prevCache = committed.current;
    let cache = prevCache;
    if (cache) {
        const useCache = Boolean(inputs && cache.inputs && areInputsEqual(inputs, cache.inputs));
        if (!useCache) {
            cache = {
                inputs,
                result: getResult()
            };
        }
    } else {
        cache = initial;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMemoOne.useEffect2": ()=>{
            committed.current = cache;
            if (prevCache == initial) {
                initial.inputs = initial.result = void 0;
            }
        }
    }["useMemoOne.useEffect2"], [
        cache
    ]);
    return cache.result;
}
function areInputsEqual(next, prev) {
    if (next.length !== prev.length) {
        return false;
    }
    for(let i = 0; i < next.length; i++){
        if (next[i] !== prev[i]) {
            return false;
        }
    }
    return true;
}
;
var useOnce = (effect)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(effect, emptyDeps);
var emptyDeps = [];
;
function usePrev(value) {
    const prevRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "usePrev.useEffect4": ()=>{
            prevRef.current = value;
        }
    }["usePrev.useEffect4"]);
    return prevRef.current;
}
;
var useReducedMotion = ()=>{
    const [reducedMotion, setReducedMotion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    useIsomorphicLayoutEffect({
        "useReducedMotion.useIsomorphicLayoutEffect": ()=>{
            const mql = window.matchMedia("(prefers-reduced-motion)");
            const handleMediaChange = {
                "useReducedMotion.useIsomorphicLayoutEffect.handleMediaChange": (e)=>{
                    setReducedMotion(e.matches);
                    assign({
                        skipAnimation: e.matches
                    });
                }
            }["useReducedMotion.useIsomorphicLayoutEffect.handleMediaChange"];
            handleMediaChange(mql);
            if (mql.addEventListener) {
                mql.addEventListener("change", handleMediaChange);
            } else {
                mql.addListener(handleMediaChange);
            }
            return ({
                "useReducedMotion.useIsomorphicLayoutEffect": ()=>{
                    if (mql.removeEventListener) {
                        mql.removeEventListener("change", handleMediaChange);
                    } else {
                        mql.removeListener(handleMediaChange);
                    }
                }
            })["useReducedMotion.useIsomorphicLayoutEffect"];
        }
    }["useReducedMotion.useIsomorphicLayoutEffect"], []);
    return reducedMotion;
};
;
;
 //# sourceMappingURL=react-spring_shared.modern.mjs.map
}),
"[project]/node_modules/@react-spring/animated/dist/react-spring_animated.modern.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Animated",
    ()=>Animated,
    "AnimatedArray",
    ()=>AnimatedArray,
    "AnimatedObject",
    ()=>AnimatedObject,
    "AnimatedString",
    ()=>AnimatedString,
    "AnimatedValue",
    ()=>AnimatedValue,
    "createHost",
    ()=>createHost,
    "getAnimated",
    ()=>getAnimated,
    "getAnimatedType",
    ()=>getAnimatedType,
    "getPayload",
    ()=>getPayload,
    "isAnimated",
    ()=>isAnimated,
    "setAnimated",
    ()=>setAnimated
]);
// src/Animated.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-spring/shared/dist/react-spring_shared.modern.mjs [app-client] (ecmascript) <locals>");
// src/withAnimated.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$rafz$2f$dist$2f$react$2d$spring_rafz$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-spring/rafz/dist/react-spring_rafz.modern.mjs [app-client] (ecmascript)");
;
var $node = Symbol.for("Animated:node");
var isAnimated = (value)=>!!value && value[$node] === value;
var getAnimated = (owner)=>owner && owner[$node];
var setAnimated = (owner, node)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["defineHidden"])(owner, $node, node);
var getPayload = (owner)=>owner && owner[$node] && owner[$node].getPayload();
var Animated = class {
    constructor(){
        setAnimated(this, this);
    }
    /** Get every `AnimatedValue` used by this node. */ getPayload() {
        return this.payload || [];
    }
};
;
var AnimatedValue = class extends Animated {
    constructor(_value){
        super();
        this._value = _value;
        this.done = true;
        this.durationProgress = 0;
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].num(this._value)) {
            this.lastPosition = this._value;
        }
    }
    /** @internal */ static create(value) {
        return new AnimatedValue(value);
    }
    getPayload() {
        return [
            this
        ];
    }
    getValue() {
        return this._value;
    }
    setValue(value, step) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].num(value)) {
            this.lastPosition = value;
            if (step) {
                value = Math.round(value / step) * step;
                if (this.done) {
                    this.lastPosition = value;
                }
            }
        }
        if (this._value === value) {
            return false;
        }
        this._value = value;
        return true;
    }
    reset() {
        const { done } = this;
        this.done = false;
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].num(this._value)) {
            this.elapsedTime = 0;
            this.durationProgress = 0;
            this.lastPosition = this._value;
            if (done) this.lastVelocity = null;
            this.v0 = null;
        }
    }
};
;
var AnimatedString = class extends AnimatedValue {
    constructor(value){
        super(0);
        this._string = null;
        this._toString = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createInterpolator"])({
            output: [
                value,
                value
            ]
        });
    }
    /** @internal */ static create(value) {
        return new AnimatedString(value);
    }
    getValue() {
        const value = this._string;
        return value == null ? this._string = this._toString(this._value) : value;
    }
    setValue(value) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].str(value)) {
            if (value == this._string) {
                return false;
            }
            this._string = value;
            this._value = 1;
        } else if (super.setValue(value)) {
            this._string = null;
        } else {
            return false;
        }
        return true;
    }
    reset(goal) {
        if (goal) {
            this._toString = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createInterpolator"])({
                output: [
                    this.getValue(),
                    goal
                ]
            });
        }
        this._value = 0;
        super.reset();
    }
};
;
;
// src/context.ts
var TreeContext = {
    dependencies: null
};
// src/AnimatedObject.ts
var AnimatedObject = class extends Animated {
    constructor(source){
        super();
        this.source = source;
        this.setValue(source);
    }
    getValue(animated) {
        const values = {};
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["eachProp"])(this.source, (source, key)=>{
            if (isAnimated(source)) {
                values[key] = source.getValue(animated);
            } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hasFluidValue"])(source)) {
                values[key] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getFluidValue"])(source);
            } else if (!animated) {
                values[key] = source;
            }
        });
        return values;
    }
    /** Replace the raw object data */ setValue(source) {
        this.source = source;
        this.payload = this._makePayload(source);
    }
    reset() {
        if (this.payload) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["each"])(this.payload, (node)=>node.reset());
        }
    }
    /** Create a payload set. */ _makePayload(source) {
        if (source) {
            const payload = /* @__PURE__ */ new Set();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["eachProp"])(source, this._addToPayload, payload);
            return Array.from(payload);
        }
    }
    /** Add to a payload set. */ _addToPayload(source) {
        if (TreeContext.dependencies && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hasFluidValue"])(source)) {
            TreeContext.dependencies.add(source);
        }
        const payload = getPayload(source);
        if (payload) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["each"])(payload, (node)=>this.add(node));
        }
    }
};
// src/AnimatedArray.ts
var AnimatedArray = class extends AnimatedObject {
    constructor(source){
        super(source);
    }
    /** @internal */ static create(source) {
        return new AnimatedArray(source);
    }
    getValue() {
        return this.source.map((node)=>node.getValue());
    }
    setValue(source) {
        const payload = this.getPayload();
        if (source.length == payload.length) {
            return payload.map((node, i)=>node.setValue(source[i])).some(Boolean);
        }
        super.setValue(source.map(makeAnimated));
        return true;
    }
};
function makeAnimated(value) {
    const nodeType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isAnimatedString"])(value) ? AnimatedString : AnimatedValue;
    return nodeType.create(value);
}
;
function getAnimatedType(value) {
    const parentNode = getAnimated(value);
    return parentNode ? parentNode.constructor : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].arr(value) ? AnimatedArray : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isAnimatedString"])(value) ? AnimatedString : AnimatedValue;
}
;
;
;
;
var withAnimated = (Component, host)=>{
    const hasInstance = // Function components must use "forwardRef" to avoid being
    // re-rendered on every animation frame.
    !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].fun(Component) || Component.prototype && Component.prototype.isReactComponent;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((givenProps, givenRef)=>{
        const instanceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
        const ref = hasInstance && // eslint-disable-next-line react-hooks/rules-of-hooks
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
            "withAnimated.useCallback": (value)=>{
                instanceRef.current = updateRef(givenRef, value);
            }
        }["withAnimated.useCallback"], [
            givenRef
        ]);
        const [props, deps] = getAnimatedState(givenProps, host);
        const forceUpdate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useForceUpdate"])();
        const callback = ()=>{
            const instance = instanceRef.current;
            if (hasInstance && !instance) {
                return;
            }
            const didUpdate = instance ? host.applyAnimatedValues(instance, props.getValue(true)) : false;
            if (didUpdate === false) {
                forceUpdate();
            }
        };
        const observer = new PropsObserver(callback, deps);
        const observerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useIsomorphicLayoutEffect"])({
            "withAnimated.useIsomorphicLayoutEffect": ()=>{
                observerRef.current = observer;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["each"])(deps, {
                    "withAnimated.useIsomorphicLayoutEffect": (dep)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["addFluidObserver"])(dep, observer)
                }["withAnimated.useIsomorphicLayoutEffect"]);
                return ({
                    "withAnimated.useIsomorphicLayoutEffect": ()=>{
                        if (observerRef.current) {
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["each"])(observerRef.current.deps, {
                                "withAnimated.useIsomorphicLayoutEffect": (dep)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["removeFluidObserver"])(dep, observerRef.current)
                            }["withAnimated.useIsomorphicLayoutEffect"]);
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$rafz$2f$dist$2f$react$2d$spring_rafz$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["raf"].cancel(observerRef.current.update);
                        }
                    }
                })["withAnimated.useIsomorphicLayoutEffect"];
            }
        }["withAnimated.useIsomorphicLayoutEffect"]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(callback, []);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useOnce"])({
            "withAnimated.useOnce": ()=>({
                    "withAnimated.useOnce": ()=>{
                        const observer2 = observerRef.current;
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["each"])(observer2.deps, {
                            "withAnimated.useOnce": (dep)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["removeFluidObserver"])(dep, observer2)
                        }["withAnimated.useOnce"]);
                    }
                })["withAnimated.useOnce"]
        }["withAnimated.useOnce"]);
        const usedProps = host.getComponentProps(props.getValue());
        return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Component, {
            ...usedProps,
            ref
        });
    });
};
var PropsObserver = class {
    constructor(update, deps){
        this.update = update;
        this.deps = deps;
    }
    eventObserved(event) {
        if (event.type == "change") {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$rafz$2f$dist$2f$react$2d$spring_rafz$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["raf"].write(this.update);
        }
    }
};
function getAnimatedState(props, host) {
    const dependencies = /* @__PURE__ */ new Set();
    TreeContext.dependencies = dependencies;
    if (props.style) props = {
        ...props,
        style: host.createAnimatedStyle(props.style)
    };
    props = new AnimatedObject(props);
    TreeContext.dependencies = null;
    return [
        props,
        dependencies
    ];
}
function updateRef(ref, value) {
    if (ref) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].fun(ref)) ref(value);
        else ref.current = value;
    }
    return value;
}
// src/createHost.ts
var cacheKey = Symbol.for("AnimatedComponent");
var createHost = (components, { applyAnimatedValues = ()=>false, createAnimatedStyle = (style)=>new AnimatedObject(style), getComponentProps = (props)=>props } = {})=>{
    const hostConfig = {
        applyAnimatedValues,
        createAnimatedStyle,
        getComponentProps
    };
    const animated = (Component)=>{
        const displayName = getDisplayName(Component) || "Anonymous";
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].str(Component)) {
            Component = animated[Component] || (animated[Component] = withAnimated(Component, hostConfig));
        } else {
            Component = Component[cacheKey] || (Component[cacheKey] = withAnimated(Component, hostConfig));
        }
        Component.displayName = `Animated(${displayName})`;
        return Component;
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["eachProp"])(components, (Component, key)=>{
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].arr(components)) {
            key = getDisplayName(Component);
        }
        animated[key] = animated(Component);
    });
    return {
        animated
    };
};
var getDisplayName = (arg)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].str(arg) ? arg : arg && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].str(arg.displayName) ? arg.displayName : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].fun(arg) && arg.name || null;
;
 //# sourceMappingURL=react-spring_animated.modern.mjs.map
}),
"[project]/node_modules/@react-spring/types/dist/react-spring_types.modern.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Any",
    ()=>Any
]);
// src/utils.ts
var Any = class {
};
;
 //# sourceMappingURL=react-spring_types.modern.mjs.map
}),
"[project]/node_modules/@react-spring/three/dist/react-spring_three.modern.mjs [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

// src/index.ts
__turbopack_context__.s([
    "a",
    ()=>animated,
    "animated",
    ()=>animated
]);
(()=>{
    const e = new Error("Cannot find module '@react-three/fiber'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$core$2f$dist$2f$react$2d$spring_core$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-spring/core/dist/react-spring_core.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-spring/shared/dist/react-spring_shared.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$rafz$2f$dist$2f$react$2d$spring_rafz$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-spring/rafz/dist/react-spring_rafz.modern.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$animated$2f$dist$2f$react$2d$spring_animated$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-spring/animated/dist/react-spring_animated.modern.mjs [app-client] (ecmascript)");
// src/primitives.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.module.js [app-client] (ecmascript)");
;
;
;
;
;
;
var primitives = [
    "primitive"
].concat(Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__).filter((key)=>/^[A-Z]/.test(key)).map((key)=>key[0].toLowerCase() + key.slice(1)));
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Globals"].assign({
    createStringInterpolator: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createStringInterpolator"],
    colors: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring_shared$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["colors"],
    frameLoop: "demand"
});
addEffect(()=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$rafz$2f$dist$2f$react$2d$spring_rafz$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["raf"].advance();
});
var host = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$animated$2f$dist$2f$react$2d$spring_animated$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createHost"])(primitives, {
    // @ts-expect-error r3f related
    applyAnimatedValues: applyProps
});
var animated = host.animated;
;
 //# sourceMappingURL=react-spring_three.modern.mjs.map
}),
"[project]/node_modules/@use-gesture/core/actions/dist/use-gesture-core-actions.esm.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
;
}),
"[project]/node_modules/@use-gesture/core/dist/maths-0ab39ae9.esm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "V",
    ()=>V,
    "c",
    ()=>computeRubberband,
    "r",
    ()=>rubberbandIfOutOfBounds
]);
function clamp(v, min, max) {
    return Math.max(min, Math.min(v, max));
}
const V = {
    toVector (v, fallback) {
        if (v === undefined) v = fallback;
        return Array.isArray(v) ? v : [
            v,
            v
        ];
    },
    add (v1, v2) {
        return [
            v1[0] + v2[0],
            v1[1] + v2[1]
        ];
    },
    sub (v1, v2) {
        return [
            v1[0] - v2[0],
            v1[1] - v2[1]
        ];
    },
    addTo (v1, v2) {
        v1[0] += v2[0];
        v1[1] += v2[1];
    },
    subTo (v1, v2) {
        v1[0] -= v2[0];
        v1[1] -= v2[1];
    }
};
function rubberband(distance, dimension, constant) {
    if (dimension === 0 || Math.abs(dimension) === Infinity) return Math.pow(distance, constant * 5);
    return distance * dimension * constant / (dimension + constant * distance);
}
function rubberbandIfOutOfBounds(position, min, max, constant = 0.15) {
    if (constant === 0) return clamp(position, min, max);
    if (position < min) return -rubberband(min - position, max - min, constant) + min;
    if (position > max) return +rubberband(position - max, max - min, constant) + max;
    return position;
}
function computeRubberband(bounds, [Vx, Vy], [Rx, Ry]) {
    const [[X0, X1], [Y0, Y1]] = bounds;
    return [
        rubberbandIfOutOfBounds(Vx, X0, X1, Rx),
        rubberbandIfOutOfBounds(Vy, Y0, Y1, Ry)
    ];
}
;
}),
"[project]/node_modules/@use-gesture/core/dist/actions-fe213e88.esm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "C",
    ()=>ConfigResolverMap,
    "E",
    ()=>EngineMap,
    "S",
    ()=>SUPPORT,
    "_",
    ()=>_objectSpread2,
    "a",
    ()=>_defineProperty,
    "b",
    ()=>touchIds,
    "c",
    ()=>chain,
    "d",
    ()=>toHandlerProp,
    "e",
    ()=>dragAction,
    "f",
    ()=>pinchAction,
    "h",
    ()=>hoverAction,
    "i",
    ()=>isTouch,
    "m",
    ()=>moveAction,
    "p",
    ()=>parseProp,
    "r",
    ()=>registerAction,
    "s",
    ()=>scrollAction,
    "t",
    ()=>toDomEventType,
    "w",
    ()=>wheelAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$use$2d$gesture$2f$core$2f$dist$2f$maths$2d$0ab39ae9$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@use-gesture/core/dist/maths-0ab39ae9.esm.js [app-client] (ecmascript)");
;
function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (typeof res !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
}
function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function _objectSpread2(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
            _defineProperty(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
const EVENT_TYPE_MAP = {
    pointer: {
        start: 'down',
        change: 'move',
        end: 'up'
    },
    mouse: {
        start: 'down',
        change: 'move',
        end: 'up'
    },
    touch: {
        start: 'start',
        change: 'move',
        end: 'end'
    },
    gesture: {
        start: 'start',
        change: 'change',
        end: 'end'
    }
};
function capitalize(string) {
    if (!string) return '';
    return string[0].toUpperCase() + string.slice(1);
}
const actionsWithoutCaptureSupported = [
    'enter',
    'leave'
];
function hasCapture(capture = false, actionKey) {
    return capture && !actionsWithoutCaptureSupported.includes(actionKey);
}
function toHandlerProp(device, action = '', capture = false) {
    const deviceProps = EVENT_TYPE_MAP[device];
    const actionKey = deviceProps ? deviceProps[action] || action : action;
    return 'on' + capitalize(device) + capitalize(actionKey) + (hasCapture(capture, actionKey) ? 'Capture' : '');
}
const pointerCaptureEvents = [
    'gotpointercapture',
    'lostpointercapture'
];
function parseProp(prop) {
    let eventKey = prop.substring(2).toLowerCase();
    const passive = !!~eventKey.indexOf('passive');
    if (passive) eventKey = eventKey.replace('passive', '');
    const captureKey = pointerCaptureEvents.includes(eventKey) ? 'capturecapture' : 'capture';
    const capture = !!~eventKey.indexOf(captureKey);
    if (capture) eventKey = eventKey.replace('capture', '');
    return {
        device: eventKey,
        capture,
        passive
    };
}
function toDomEventType(device, action = '') {
    const deviceProps = EVENT_TYPE_MAP[device];
    const actionKey = deviceProps ? deviceProps[action] || action : action;
    return device + actionKey;
}
function isTouch(event) {
    return 'touches' in event;
}
function getPointerType(event) {
    if (isTouch(event)) return 'touch';
    if ('pointerType' in event) return event.pointerType;
    return 'mouse';
}
function getCurrentTargetTouchList(event) {
    return Array.from(event.touches).filter((e)=>{
        var _event$currentTarget, _event$currentTarget$;
        return e.target === event.currentTarget || ((_event$currentTarget = event.currentTarget) === null || _event$currentTarget === void 0 || (_event$currentTarget$ = _event$currentTarget.contains) === null || _event$currentTarget$ === void 0 ? void 0 : _event$currentTarget$.call(_event$currentTarget, e.target));
    });
}
function getTouchList(event) {
    return event.type === 'touchend' || event.type === 'touchcancel' ? event.changedTouches : event.targetTouches;
}
function getValueEvent(event) {
    return isTouch(event) ? getTouchList(event)[0] : event;
}
function distanceAngle(P1, P2) {
    try {
        const dx = P2.clientX - P1.clientX;
        const dy = P2.clientY - P1.clientY;
        const cx = (P2.clientX + P1.clientX) / 2;
        const cy = (P2.clientY + P1.clientY) / 2;
        const distance = Math.hypot(dx, dy);
        const angle = -(Math.atan2(dx, dy) * 180) / Math.PI;
        const origin = [
            cx,
            cy
        ];
        return {
            angle,
            distance,
            origin
        };
    } catch (_unused) {}
    return null;
}
function touchIds(event) {
    return getCurrentTargetTouchList(event).map((touch)=>touch.identifier);
}
function touchDistanceAngle(event, ids) {
    const [P1, P2] = Array.from(event.touches).filter((touch)=>ids.includes(touch.identifier));
    return distanceAngle(P1, P2);
}
function pointerId(event) {
    const valueEvent = getValueEvent(event);
    return isTouch(event) ? valueEvent.identifier : valueEvent.pointerId;
}
function pointerValues(event) {
    const valueEvent = getValueEvent(event);
    return [
        valueEvent.clientX,
        valueEvent.clientY
    ];
}
const LINE_HEIGHT = 40;
const PAGE_HEIGHT = 800;
function wheelValues(event) {
    let { deltaX, deltaY, deltaMode } = event;
    if (deltaMode === 1) {
        deltaX *= LINE_HEIGHT;
        deltaY *= LINE_HEIGHT;
    } else if (deltaMode === 2) {
        deltaX *= PAGE_HEIGHT;
        deltaY *= PAGE_HEIGHT;
    }
    return [
        deltaX,
        deltaY
    ];
}
function scrollValues(event) {
    var _ref, _ref2;
    const { scrollX, scrollY, scrollLeft, scrollTop } = event.currentTarget;
    return [
        (_ref = scrollX !== null && scrollX !== void 0 ? scrollX : scrollLeft) !== null && _ref !== void 0 ? _ref : 0,
        (_ref2 = scrollY !== null && scrollY !== void 0 ? scrollY : scrollTop) !== null && _ref2 !== void 0 ? _ref2 : 0
    ];
}
function getEventDetails(event) {
    const payload = {};
    if ('buttons' in event) payload.buttons = event.buttons;
    if ('shiftKey' in event) {
        const { shiftKey, altKey, metaKey, ctrlKey } = event;
        Object.assign(payload, {
            shiftKey,
            altKey,
            metaKey,
            ctrlKey
        });
    }
    return payload;
}
function call(v, ...args) {
    if (typeof v === 'function') {
        return v(...args);
    } else {
        return v;
    }
}
function noop() {}
function chain(...fns) {
    if (fns.length === 0) return noop;
    if (fns.length === 1) return fns[0];
    return function() {
        let result;
        for (const fn of fns){
            result = fn.apply(this, arguments) || result;
        }
        return result;
    };
}
function assignDefault(value, fallback) {
    return Object.assign({}, fallback, value || {});
}
const BEFORE_LAST_KINEMATICS_DELAY = 32;
class Engine {
    constructor(ctrl, args, key){
        this.ctrl = ctrl;
        this.args = args;
        this.key = key;
        if (!this.state) {
            this.state = {};
            this.computeValues([
                0,
                0
            ]);
            this.computeInitial();
            if (this.init) this.init();
            this.reset();
        }
    }
    get state() {
        return this.ctrl.state[this.key];
    }
    set state(state) {
        this.ctrl.state[this.key] = state;
    }
    get shared() {
        return this.ctrl.state.shared;
    }
    get eventStore() {
        return this.ctrl.gestureEventStores[this.key];
    }
    get timeoutStore() {
        return this.ctrl.gestureTimeoutStores[this.key];
    }
    get config() {
        return this.ctrl.config[this.key];
    }
    get sharedConfig() {
        return this.ctrl.config.shared;
    }
    get handler() {
        return this.ctrl.handlers[this.key];
    }
    reset() {
        const { state, shared, ingKey, args } = this;
        shared[ingKey] = state._active = state.active = state._blocked = state._force = false;
        state._step = [
            false,
            false
        ];
        state.intentional = false;
        state._movement = [
            0,
            0
        ];
        state._distance = [
            0,
            0
        ];
        state._direction = [
            0,
            0
        ];
        state._delta = [
            0,
            0
        ];
        state._bounds = [
            [
                -Infinity,
                Infinity
            ],
            [
                -Infinity,
                Infinity
            ]
        ];
        state.args = args;
        state.axis = undefined;
        state.memo = undefined;
        state.elapsedTime = state.timeDelta = 0;
        state.direction = [
            0,
            0
        ];
        state.distance = [
            0,
            0
        ];
        state.overflow = [
            0,
            0
        ];
        state._movementBound = [
            false,
            false
        ];
        state.velocity = [
            0,
            0
        ];
        state.movement = [
            0,
            0
        ];
        state.delta = [
            0,
            0
        ];
        state.timeStamp = 0;
    }
    start(event) {
        const state = this.state;
        const config = this.config;
        if (!state._active) {
            this.reset();
            this.computeInitial();
            state._active = true;
            state.target = event.target;
            state.currentTarget = event.currentTarget;
            state.lastOffset = config.from ? call(config.from, state) : state.offset;
            state.offset = state.lastOffset;
            state.startTime = state.timeStamp = event.timeStamp;
        }
    }
    computeValues(values) {
        const state = this.state;
        state._values = values;
        state.values = this.config.transform(values);
    }
    computeInitial() {
        const state = this.state;
        state._initial = state._values;
        state.initial = state.values;
    }
    compute(event) {
        const { state, config, shared } = this;
        state.args = this.args;
        let dt = 0;
        if (event) {
            state.event = event;
            if (config.preventDefault && event.cancelable) state.event.preventDefault();
            state.type = event.type;
            shared.touches = this.ctrl.pointerIds.size || this.ctrl.touchIds.size;
            shared.locked = !!document.pointerLockElement;
            Object.assign(shared, getEventDetails(event));
            shared.down = shared.pressed = shared.buttons % 2 === 1 || shared.touches > 0;
            dt = event.timeStamp - state.timeStamp;
            state.timeStamp = event.timeStamp;
            state.elapsedTime = state.timeStamp - state.startTime;
        }
        if (state._active) {
            const _absoluteDelta = state._delta.map(Math.abs);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$use$2d$gesture$2f$core$2f$dist$2f$maths$2d$0ab39ae9$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["V"].addTo(state._distance, _absoluteDelta);
        }
        if (this.axisIntent) this.axisIntent(event);
        const [_m0, _m1] = state._movement;
        const [t0, t1] = config.threshold;
        const { _step, values } = state;
        if (config.hasCustomTransform) {
            if (_step[0] === false) _step[0] = Math.abs(_m0) >= t0 && values[0];
            if (_step[1] === false) _step[1] = Math.abs(_m1) >= t1 && values[1];
        } else {
            if (_step[0] === false) _step[0] = Math.abs(_m0) >= t0 && Math.sign(_m0) * t0;
            if (_step[1] === false) _step[1] = Math.abs(_m1) >= t1 && Math.sign(_m1) * t1;
        }
        state.intentional = _step[0] !== false || _step[1] !== false;
        if (!state.intentional) return;
        const movement = [
            0,
            0
        ];
        if (config.hasCustomTransform) {
            const [v0, v1] = values;
            movement[0] = _step[0] !== false ? v0 - _step[0] : 0;
            movement[1] = _step[1] !== false ? v1 - _step[1] : 0;
        } else {
            movement[0] = _step[0] !== false ? _m0 - _step[0] : 0;
            movement[1] = _step[1] !== false ? _m1 - _step[1] : 0;
        }
        if (this.restrictToAxis && !state._blocked) this.restrictToAxis(movement);
        const previousOffset = state.offset;
        const gestureIsActive = state._active && !state._blocked || state.active;
        if (gestureIsActive) {
            state.first = state._active && !state.active;
            state.last = !state._active && state.active;
            state.active = shared[this.ingKey] = state._active;
            if (event) {
                if (state.first) {
                    if ('bounds' in config) state._bounds = call(config.bounds, state);
                    if (this.setup) this.setup();
                }
                state.movement = movement;
                this.computeOffset();
            }
        }
        const [ox, oy] = state.offset;
        const [[x0, x1], [y0, y1]] = state._bounds;
        state.overflow = [
            ox < x0 ? -1 : ox > x1 ? 1 : 0,
            oy < y0 ? -1 : oy > y1 ? 1 : 0
        ];
        state._movementBound[0] = state.overflow[0] ? state._movementBound[0] === false ? state._movement[0] : state._movementBound[0] : false;
        state._movementBound[1] = state.overflow[1] ? state._movementBound[1] === false ? state._movement[1] : state._movementBound[1] : false;
        const rubberband = state._active ? config.rubberband || [
            0,
            0
        ] : [
            0,
            0
        ];
        state.offset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$use$2d$gesture$2f$core$2f$dist$2f$maths$2d$0ab39ae9$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(state._bounds, state.offset, rubberband);
        state.delta = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$use$2d$gesture$2f$core$2f$dist$2f$maths$2d$0ab39ae9$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["V"].sub(state.offset, previousOffset);
        this.computeMovement();
        if (gestureIsActive && (!state.last || dt > BEFORE_LAST_KINEMATICS_DELAY)) {
            state.delta = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$use$2d$gesture$2f$core$2f$dist$2f$maths$2d$0ab39ae9$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["V"].sub(state.offset, previousOffset);
            const absoluteDelta = state.delta.map(Math.abs);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$use$2d$gesture$2f$core$2f$dist$2f$maths$2d$0ab39ae9$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["V"].addTo(state.distance, absoluteDelta);
            state.direction = state.delta.map(Math.sign);
            state._direction = state._delta.map(Math.sign);
            if (!state.first && dt > 0) {
                state.velocity = [
                    absoluteDelta[0] / dt,
                    absoluteDelta[1] / dt
                ];
                state.timeDelta = dt;
            }
        }
    }
    emit() {
        const state = this.state;
        const shared = this.shared;
        const config = this.config;
        if (!state._active) this.clean();
        if ((state._blocked || !state.intentional) && !state._force && !config.triggerAllEvents) return;
        const memo = this.handler(_objectSpread2(_objectSpread2(_objectSpread2({}, shared), state), {}, {
            [this.aliasKey]: state.values
        }));
        if (memo !== undefined) state.memo = memo;
    }
    clean() {
        this.eventStore.clean();
        this.timeoutStore.clean();
    }
}
function selectAxis([dx, dy], threshold) {
    const absDx = Math.abs(dx);
    const absDy = Math.abs(dy);
    if (absDx > absDy && absDx > threshold) {
        return 'x';
    }
    if (absDy > absDx && absDy > threshold) {
        return 'y';
    }
    return undefined;
}
class CoordinatesEngine extends Engine {
    constructor(...args){
        super(...args);
        _defineProperty(this, "aliasKey", 'xy');
    }
    reset() {
        super.reset();
        this.state.axis = undefined;
    }
    init() {
        this.state.offset = [
            0,
            0
        ];
        this.state.lastOffset = [
            0,
            0
        ];
    }
    computeOffset() {
        this.state.offset = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$use$2d$gesture$2f$core$2f$dist$2f$maths$2d$0ab39ae9$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["V"].add(this.state.lastOffset, this.state.movement);
    }
    computeMovement() {
        this.state.movement = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$use$2d$gesture$2f$core$2f$dist$2f$maths$2d$0ab39ae9$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["V"].sub(this.state.offset, this.state.lastOffset);
    }
    axisIntent(event) {
        const state = this.state;
        const config = this.config;
        if (!state.axis && event) {
            const threshold = typeof config.axisThreshold === 'object' ? config.axisThreshold[getPointerType(event)] : config.axisThreshold;
            state.axis = selectAxis(state._movement, threshold);
        }
        state._blocked = (config.lockDirection || !!config.axis) && !state.axis || !!config.axis && config.axis !== state.axis;
    }
    restrictToAxis(v) {
        if (this.config.axis || this.config.lockDirection) {
            switch(this.state.axis){
                case 'x':
                    v[1] = 0;
                    break;
                case 'y':
                    v[0] = 0;
                    break;
            }
        }
    }
}
const identity = (v)=>v;
const DEFAULT_RUBBERBAND = 0.15;
const commonConfigResolver = {
    enabled (value = true) {
        return value;
    },
    eventOptions (value, _k, config) {
        return _objectSpread2(_objectSpread2({}, config.shared.eventOptions), value);
    },
    preventDefault (value = false) {
        return value;
    },
    triggerAllEvents (value = false) {
        return value;
    },
    rubberband (value = 0) {
        switch(value){
            case true:
                return [
                    DEFAULT_RUBBERBAND,
                    DEFAULT_RUBBERBAND
                ];
            case false:
                return [
                    0,
                    0
                ];
            default:
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$use$2d$gesture$2f$core$2f$dist$2f$maths$2d$0ab39ae9$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["V"].toVector(value);
        }
    },
    from (value) {
        if (typeof value === 'function') return value;
        if (value != null) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$use$2d$gesture$2f$core$2f$dist$2f$maths$2d$0ab39ae9$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["V"].toVector(value);
    },
    transform (value, _k, config) {
        const transform = value || config.shared.transform;
        this.hasCustomTransform = !!transform;
        if ("TURBOPACK compile-time truthy", 1) {
            const originalTransform = transform || identity;
            return (v)=>{
                const r = originalTransform(v);
                if (!isFinite(r[0]) || !isFinite(r[1])) {
                    console.warn(`[@use-gesture]: config.transform() must produce a valid result, but it was: [${r[0]},${[
                        1
                    ]}]`);
                }
                return r;
            };
        }
        //TURBOPACK unreachable
        ;
    },
    threshold (value) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$use$2d$gesture$2f$core$2f$dist$2f$maths$2d$0ab39ae9$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["V"].toVector(value, 0);
    }
};
if ("TURBOPACK compile-time truthy", 1) {
    Object.assign(commonConfigResolver, {
        domTarget (value) {
            if (value !== undefined) {
                throw Error(`[@use-gesture]: \`domTarget\` option has been renamed to \`target\`.`);
            }
            return NaN;
        },
        lockDirection (value) {
            if (value !== undefined) {
                throw Error(`[@use-gesture]: \`lockDirection\` option has been merged with \`axis\`. Use it as in \`{ axis: 'lock' }\``);
            }
            return NaN;
        },
        initial (value) {
            if (value !== undefined) {
                throw Error(`[@use-gesture]: \`initial\` option has been renamed to \`from\`.`);
            }
            return NaN;
        }
    });
}
const DEFAULT_AXIS_THRESHOLD = 0;
const coordinatesConfigResolver = _objectSpread2(_objectSpread2({}, commonConfigResolver), {}, {
    axis (_v, _k, { axis }) {
        this.lockDirection = axis === 'lock';
        if (!this.lockDirection) return axis;
    },
    axisThreshold (value = DEFAULT_AXIS_THRESHOLD) {
        return value;
    },
    bounds (value = {}) {
        if (typeof value === 'function') {
            return (state)=>coordinatesConfigResolver.bounds(value(state));
        }
        if ('current' in value) {
            return ()=>value.current;
        }
        if (typeof HTMLElement === 'function' && value instanceof HTMLElement) {
            return value;
        }
        const { left = -Infinity, right = Infinity, top = -Infinity, bottom = Infinity } = value;
        return [
            [
                left,
                right
            ],
            [
                top,
                bottom
            ]
        ];
    }
});
const KEYS_DELTA_MAP = {
    ArrowRight: (displacement, factor = 1)=>[
            displacement * factor,
            0
        ],
    ArrowLeft: (displacement, factor = 1)=>[
            -1 * displacement * factor,
            0
        ],
    ArrowUp: (displacement, factor = 1)=>[
            0,
            -1 * displacement * factor
        ],
    ArrowDown: (displacement, factor = 1)=>[
            0,
            displacement * factor
        ]
};
class DragEngine extends CoordinatesEngine {
    constructor(...args){
        super(...args);
        _defineProperty(this, "ingKey", 'dragging');
    }
    reset() {
        super.reset();
        const state = this.state;
        state._pointerId = undefined;
        state._pointerActive = false;
        state._keyboardActive = false;
        state._preventScroll = false;
        state._delayed = false;
        state.swipe = [
            0,
            0
        ];
        state.tap = false;
        state.canceled = false;
        state.cancel = this.cancel.bind(this);
    }
    setup() {
        const state = this.state;
        if (state._bounds instanceof HTMLElement) {
            const boundRect = state._bounds.getBoundingClientRect();
            const targetRect = state.currentTarget.getBoundingClientRect();
            const _bounds = {
                left: boundRect.left - targetRect.left + state.offset[0],
                right: boundRect.right - targetRect.right + state.offset[0],
                top: boundRect.top - targetRect.top + state.offset[1],
                bottom: boundRect.bottom - targetRect.bottom + state.offset[1]
            };
            state._bounds = coordinatesConfigResolver.bounds(_bounds);
        }
    }
    cancel() {
        const state = this.state;
        if (state.canceled) return;
        state.canceled = true;
        state._active = false;
        setTimeout(()=>{
            this.compute();
            this.emit();
        }, 0);
    }
    setActive() {
        this.state._active = this.state._pointerActive || this.state._keyboardActive;
    }
    clean() {
        this.pointerClean();
        this.state._pointerActive = false;
        this.state._keyboardActive = false;
        super.clean();
    }
    pointerDown(event) {
        const config = this.config;
        const state = this.state;
        if (event.buttons != null && (Array.isArray(config.pointerButtons) ? !config.pointerButtons.includes(event.buttons) : config.pointerButtons !== -1 && config.pointerButtons !== event.buttons)) return;
        const ctrlIds = this.ctrl.setEventIds(event);
        if (config.pointerCapture) {
            event.target.setPointerCapture(event.pointerId);
        }
        if (ctrlIds && ctrlIds.size > 1 && state._pointerActive) return;
        this.start(event);
        this.setupPointer(event);
        state._pointerId = pointerId(event);
        state._pointerActive = true;
        this.computeValues(pointerValues(event));
        this.computeInitial();
        if (config.preventScrollAxis && getPointerType(event) !== 'mouse') {
            state._active = false;
            this.setupScrollPrevention(event);
        } else if (config.delay > 0) {
            this.setupDelayTrigger(event);
            if (config.triggerAllEvents) {
                this.compute(event);
                this.emit();
            }
        } else {
            this.startPointerDrag(event);
        }
    }
    startPointerDrag(event) {
        const state = this.state;
        state._active = true;
        state._preventScroll = true;
        state._delayed = false;
        this.compute(event);
        this.emit();
    }
    pointerMove(event) {
        const state = this.state;
        const config = this.config;
        if (!state._pointerActive) return;
        const id = pointerId(event);
        if (state._pointerId !== undefined && id !== state._pointerId) return;
        const _values = pointerValues(event);
        if (document.pointerLockElement === event.target) {
            state._delta = [
                event.movementX,
                event.movementY
            ];
        } else {
            state._delta = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$use$2d$gesture$2f$core$2f$dist$2f$maths$2d$0ab39ae9$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["V"].sub(_values, state._values);
            this.computeValues(_values);
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$use$2d$gesture$2f$core$2f$dist$2f$maths$2d$0ab39ae9$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["V"].addTo(state._movement, state._delta);
        this.compute(event);
        if (state._delayed && state.intentional) {
            this.timeoutStore.remove('dragDelay');
            state.active = false;
            this.startPointerDrag(event);
            return;
        }
        if (config.preventScrollAxis && !state._preventScroll) {
            if (state.axis) {
                if (state.axis === config.preventScrollAxis || config.preventScrollAxis === 'xy') {
                    state._active = false;
                    this.clean();
                    return;
                } else {
                    this.timeoutStore.remove('startPointerDrag');
                    this.startPointerDrag(event);
                    return;
                }
            } else {
                return;
            }
        }
        this.emit();
    }
    pointerUp(event) {
        this.ctrl.setEventIds(event);
        try {
            if (this.config.pointerCapture && event.target.hasPointerCapture(event.pointerId)) {
                ;
                event.target.releasePointerCapture(event.pointerId);
            }
        } catch (_unused) {
            if ("TURBOPACK compile-time truthy", 1) {
                console.warn(`[@use-gesture]: If you see this message, it's likely that you're using an outdated version of \`@react-three/fiber\`. \n\nPlease upgrade to the latest version.`);
            }
        }
        const state = this.state;
        const config = this.config;
        if (!state._active || !state._pointerActive) return;
        const id = pointerId(event);
        if (state._pointerId !== undefined && id !== state._pointerId) return;
        this.state._pointerActive = false;
        this.setActive();
        this.compute(event);
        const [dx, dy] = state._distance;
        state.tap = dx <= config.tapsThreshold && dy <= config.tapsThreshold;
        if (state.tap && config.filterTaps) {
            state._force = true;
        } else {
            const [_dx, _dy] = state._delta;
            const [_mx, _my] = state._movement;
            const [svx, svy] = config.swipe.velocity;
            const [sx, sy] = config.swipe.distance;
            const sdt = config.swipe.duration;
            if (state.elapsedTime < sdt) {
                const _vx = Math.abs(_dx / state.timeDelta);
                const _vy = Math.abs(_dy / state.timeDelta);
                if (_vx > svx && Math.abs(_mx) > sx) state.swipe[0] = Math.sign(_dx);
                if (_vy > svy && Math.abs(_my) > sy) state.swipe[1] = Math.sign(_dy);
            }
        }
        this.emit();
    }
    pointerClick(event) {
        if (!this.state.tap && event.detail > 0) {
            event.preventDefault();
            event.stopPropagation();
        }
    }
    setupPointer(event) {
        const config = this.config;
        const device = config.device;
        if ("TURBOPACK compile-time truthy", 1) {
            try {
                if (device === 'pointer' && config.preventScrollDelay === undefined) {
                    const currentTarget = 'uv' in event ? event.sourceEvent.currentTarget : event.currentTarget;
                    const style = window.getComputedStyle(currentTarget);
                    if (style.touchAction === 'auto') {
                        console.warn(`[@use-gesture]: The drag target has its \`touch-action\` style property set to \`auto\`. It is recommended to add \`touch-action: 'none'\` so that the drag gesture behaves correctly on touch-enabled devices. For more information read this: https://use-gesture.netlify.app/docs/extras/#touch-action.\n\nThis message will only show in development mode. It won't appear in production. If this is intended, you can ignore it.`, currentTarget);
                    }
                }
            } catch (_unused2) {}
        }
        if (config.pointerLock) {
            event.currentTarget.requestPointerLock();
        }
        if (!config.pointerCapture) {
            this.eventStore.add(this.sharedConfig.window, device, 'change', this.pointerMove.bind(this));
            this.eventStore.add(this.sharedConfig.window, device, 'end', this.pointerUp.bind(this));
            this.eventStore.add(this.sharedConfig.window, device, 'cancel', this.pointerUp.bind(this));
        }
    }
    pointerClean() {
        if (this.config.pointerLock && document.pointerLockElement === this.state.currentTarget) {
            document.exitPointerLock();
        }
    }
    preventScroll(event) {
        if (this.state._preventScroll && event.cancelable) {
            event.preventDefault();
        }
    }
    setupScrollPrevention(event) {
        this.state._preventScroll = false;
        persistEvent(event);
        const remove = this.eventStore.add(this.sharedConfig.window, 'touch', 'change', this.preventScroll.bind(this), {
            passive: false
        });
        this.eventStore.add(this.sharedConfig.window, 'touch', 'end', remove);
        this.eventStore.add(this.sharedConfig.window, 'touch', 'cancel', remove);
        this.timeoutStore.add('startPointerDrag', this.startPointerDrag.bind(this), this.config.preventScrollDelay, event);
    }
    setupDelayTrigger(event) {
        this.state._delayed = true;
        this.timeoutStore.add('dragDelay', ()=>{
            this.state._step = [
                0,
                0
            ];
            this.startPointerDrag(event);
        }, this.config.delay);
    }
    keyDown(event) {
        const deltaFn = KEYS_DELTA_MAP[event.key];
        if (deltaFn) {
            const state = this.state;
            const factor = event.shiftKey ? 10 : event.altKey ? 0.1 : 1;
            this.start(event);
            state._delta = deltaFn(this.config.keyboardDisplacement, factor);
            state._keyboardActive = true;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$use$2d$gesture$2f$core$2f$dist$2f$maths$2d$0ab39ae9$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["V"].addTo(state._movement, state._delta);
            this.compute(event);
            this.emit();
        }
    }
    keyUp(event) {
        if (!(event.key in KEYS_DELTA_MAP)) return;
        this.state._keyboardActive = false;
        this.setActive();
        this.compute(event);
        this.emit();
    }
    bind(bindFunction) {
        const device = this.config.device;
        bindFunction(device, 'start', this.pointerDown.bind(this));
        if (this.config.pointerCapture) {
            bindFunction(device, 'change', this.pointerMove.bind(this));
            bindFunction(device, 'end', this.pointerUp.bind(this));
            bindFunction(device, 'cancel', this.pointerUp.bind(this));
            bindFunction('lostPointerCapture', '', this.pointerUp.bind(this));
        }
        if (this.config.keys) {
            bindFunction('key', 'down', this.keyDown.bind(this));
            bindFunction('key', 'up', this.keyUp.bind(this));
        }
        if (this.config.filterTaps) {
            bindFunction('click', '', this.pointerClick.bind(this), {
                capture: true,
                passive: false
            });
        }
    }
}
function persistEvent(event) {
    'persist' in event && typeof event.persist === 'function' && event.persist();
}
const isBrowser = typeof window !== 'undefined' && window.document && window.document.createElement;
function supportsTouchEvents() {
    return isBrowser && 'ontouchstart' in window;
}
function isTouchScreen() {
    return supportsTouchEvents() || isBrowser && window.navigator.maxTouchPoints > 1;
}
function supportsPointerEvents() {
    return isBrowser && 'onpointerdown' in window;
}
function supportsPointerLock() {
    return isBrowser && 'exitPointerLock' in window.document;
}
function supportsGestureEvents() {
    try {
        return 'constructor' in GestureEvent;
    } catch (e) {
        return false;
    }
}
const SUPPORT = {
    isBrowser,
    gesture: supportsGestureEvents(),
    touch: supportsTouchEvents(),
    touchscreen: isTouchScreen(),
    pointer: supportsPointerEvents(),
    pointerLock: supportsPointerLock()
};
const DEFAULT_PREVENT_SCROLL_DELAY = 250;
const DEFAULT_DRAG_DELAY = 180;
const DEFAULT_SWIPE_VELOCITY = 0.5;
const DEFAULT_SWIPE_DISTANCE = 50;
const DEFAULT_SWIPE_DURATION = 250;
const DEFAULT_KEYBOARD_DISPLACEMENT = 10;
const DEFAULT_DRAG_AXIS_THRESHOLD = {
    mouse: 0,
    touch: 0,
    pen: 8
};
const dragConfigResolver = _objectSpread2(_objectSpread2({}, coordinatesConfigResolver), {}, {
    device (_v, _k, { pointer: { touch = false, lock = false, mouse = false } = {} }) {
        this.pointerLock = lock && SUPPORT.pointerLock;
        if (SUPPORT.touch && touch) return 'touch';
        if (this.pointerLock) return 'mouse';
        if (SUPPORT.pointer && !mouse) return 'pointer';
        if (SUPPORT.touch) return 'touch';
        return 'mouse';
    },
    preventScrollAxis (value, _k, { preventScroll }) {
        this.preventScrollDelay = typeof preventScroll === 'number' ? preventScroll : preventScroll || preventScroll === undefined && value ? DEFAULT_PREVENT_SCROLL_DELAY : undefined;
        if (!SUPPORT.touchscreen || preventScroll === false) return undefined;
        return value ? value : preventScroll !== undefined ? 'y' : undefined;
    },
    pointerCapture (_v, _k, { pointer: { capture = true, buttons = 1, keys = true } = {} }) {
        this.pointerButtons = buttons;
        this.keys = keys;
        return !this.pointerLock && this.device === 'pointer' && capture;
    },
    threshold (value, _k, { filterTaps = false, tapsThreshold = 3, axis = undefined }) {
        const threshold = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$use$2d$gesture$2f$core$2f$dist$2f$maths$2d$0ab39ae9$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["V"].toVector(value, filterTaps ? tapsThreshold : axis ? 1 : 0);
        this.filterTaps = filterTaps;
        this.tapsThreshold = tapsThreshold;
        return threshold;
    },
    swipe ({ velocity = DEFAULT_SWIPE_VELOCITY, distance = DEFAULT_SWIPE_DISTANCE, duration = DEFAULT_SWIPE_DURATION } = {}) {
        return {
            velocity: this.transform(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$use$2d$gesture$2f$core$2f$dist$2f$maths$2d$0ab39ae9$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["V"].toVector(velocity)),
            distance: this.transform(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$use$2d$gesture$2f$core$2f$dist$2f$maths$2d$0ab39ae9$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["V"].toVector(distance)),
            duration
        };
    },
    delay (value = 0) {
        switch(value){
            case true:
                return DEFAULT_DRAG_DELAY;
            case false:
                return 0;
            default:
                return value;
        }
    },
    axisThreshold (value) {
        if (!value) return DEFAULT_DRAG_AXIS_THRESHOLD;
        return _objectSpread2(_objectSpread2({}, DEFAULT_DRAG_AXIS_THRESHOLD), value);
    },
    keyboardDisplacement (value = DEFAULT_KEYBOARD_DISPLACEMENT) {
        return value;
    }
});
if ("TURBOPACK compile-time truthy", 1) {
    Object.assign(dragConfigResolver, {
        useTouch (value) {
            if (value !== undefined) {
                throw Error(`[@use-gesture]: \`useTouch\` option has been renamed to \`pointer.touch\`. Use it as in \`{ pointer: { touch: true } }\`.`);
            }
            return NaN;
        },
        experimental_preventWindowScrollY (value) {
            if (value !== undefined) {
                throw Error(`[@use-gesture]: \`experimental_preventWindowScrollY\` option has been renamed to \`preventScroll\`.`);
            }
            return NaN;
        },
        swipeVelocity (value) {
            if (value !== undefined) {
                throw Error(`[@use-gesture]: \`swipeVelocity\` option has been renamed to \`swipe.velocity\`. Use it as in \`{ swipe: { velocity: 0.5 } }\`.`);
            }
            return NaN;
        },
        swipeDistance (value) {
            if (value !== undefined) {
                throw Error(`[@use-gesture]: \`swipeDistance\` option has been renamed to \`swipe.distance\`. Use it as in \`{ swipe: { distance: 50 } }\`.`);
            }
            return NaN;
        },
        swipeDuration (value) {
            if (value !== undefined) {
                throw Error(`[@use-gesture]: \`swipeDuration\` option has been renamed to \`swipe.duration\`. Use it as in \`{ swipe: { duration: 250 } }\`.`);
            }
            return NaN;
        }
    });
}
function clampStateInternalMovementToBounds(state) {
    const [ox, oy] = state.overflow;
    const [dx, dy] = state._delta;
    const [dirx, diry] = state._direction;
    if (ox < 0 && dx > 0 && dirx < 0 || ox > 0 && dx < 0 && dirx > 0) {
        state._movement[0] = state._movementBound[0];
    }
    if (oy < 0 && dy > 0 && diry < 0 || oy > 0 && dy < 0 && diry > 0) {
        state._movement[1] = state._movementBound[1];
    }
}
const SCALE_ANGLE_RATIO_INTENT_DEG = 30;
const PINCH_WHEEL_RATIO = 100;
class PinchEngine extends Engine {
    constructor(...args){
        super(...args);
        _defineProperty(this, "ingKey", 'pinching');
        _defineProperty(this, "aliasKey", 'da');
    }
    init() {
        this.state.offset = [
            1,
            0
        ];
        this.state.lastOffset = [
            1,
            0
        ];
        this.state._pointerEvents = new Map();
    }
    reset() {
        super.reset();
        const state = this.state;
        state._touchIds = [];
        state.canceled = false;
        state.cancel = this.cancel.bind(this);
        state.turns = 0;
    }
    computeOffset() {
        const { type, movement, lastOffset } = this.state;
        if (type === 'wheel') {
            this.state.offset = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$use$2d$gesture$2f$core$2f$dist$2f$maths$2d$0ab39ae9$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["V"].add(movement, lastOffset);
        } else {
            this.state.offset = [
                (1 + movement[0]) * lastOffset[0],
                movement[1] + lastOffset[1]
            ];
        }
    }
    computeMovement() {
        const { offset, lastOffset } = this.state;
        this.state.movement = [
            offset[0] / lastOffset[0],
            offset[1] - lastOffset[1]
        ];
    }
    axisIntent() {
        const state = this.state;
        const [_m0, _m1] = state._movement;
        if (!state.axis) {
            const axisMovementDifference = Math.abs(_m0) * SCALE_ANGLE_RATIO_INTENT_DEG - Math.abs(_m1);
            if (axisMovementDifference < 0) state.axis = 'angle';
            else if (axisMovementDifference > 0) state.axis = 'scale';
        }
    }
    restrictToAxis(v) {
        if (this.config.lockDirection) {
            if (this.state.axis === 'scale') v[1] = 0;
            else if (this.state.axis === 'angle') v[0] = 0;
        }
    }
    cancel() {
        const state = this.state;
        if (state.canceled) return;
        setTimeout(()=>{
            state.canceled = true;
            state._active = false;
            this.compute();
            this.emit();
        }, 0);
    }
    touchStart(event) {
        this.ctrl.setEventIds(event);
        const state = this.state;
        const ctrlTouchIds = this.ctrl.touchIds;
        if (state._active) {
            if (state._touchIds.every((id)=>ctrlTouchIds.has(id))) return;
        }
        if (ctrlTouchIds.size < 2) return;
        this.start(event);
        state._touchIds = Array.from(ctrlTouchIds).slice(0, 2);
        const payload = touchDistanceAngle(event, state._touchIds);
        if (!payload) return;
        this.pinchStart(event, payload);
    }
    pointerStart(event) {
        if (event.buttons != null && event.buttons % 2 !== 1) return;
        this.ctrl.setEventIds(event);
        event.target.setPointerCapture(event.pointerId);
        const state = this.state;
        const _pointerEvents = state._pointerEvents;
        const ctrlPointerIds = this.ctrl.pointerIds;
        if (state._active) {
            if (Array.from(_pointerEvents.keys()).every((id)=>ctrlPointerIds.has(id))) return;
        }
        if (_pointerEvents.size < 2) {
            _pointerEvents.set(event.pointerId, event);
        }
        if (state._pointerEvents.size < 2) return;
        this.start(event);
        const payload = distanceAngle(...Array.from(_pointerEvents.values()));
        if (!payload) return;
        this.pinchStart(event, payload);
    }
    pinchStart(event, payload) {
        const state = this.state;
        state.origin = payload.origin;
        this.computeValues([
            payload.distance,
            payload.angle
        ]);
        this.computeInitial();
        this.compute(event);
        this.emit();
    }
    touchMove(event) {
        if (!this.state._active) return;
        const payload = touchDistanceAngle(event, this.state._touchIds);
        if (!payload) return;
        this.pinchMove(event, payload);
    }
    pointerMove(event) {
        const _pointerEvents = this.state._pointerEvents;
        if (_pointerEvents.has(event.pointerId)) {
            _pointerEvents.set(event.pointerId, event);
        }
        if (!this.state._active) return;
        const payload = distanceAngle(...Array.from(_pointerEvents.values()));
        if (!payload) return;
        this.pinchMove(event, payload);
    }
    pinchMove(event, payload) {
        const state = this.state;
        const prev_a = state._values[1];
        const delta_a = payload.angle - prev_a;
        let delta_turns = 0;
        if (Math.abs(delta_a) > 270) delta_turns += Math.sign(delta_a);
        this.computeValues([
            payload.distance,
            payload.angle - 360 * delta_turns
        ]);
        state.origin = payload.origin;
        state.turns = delta_turns;
        state._movement = [
            state._values[0] / state._initial[0] - 1,
            state._values[1] - state._initial[1]
        ];
        this.compute(event);
        this.emit();
    }
    touchEnd(event) {
        this.ctrl.setEventIds(event);
        if (!this.state._active) return;
        if (this.state._touchIds.some((id)=>!this.ctrl.touchIds.has(id))) {
            this.state._active = false;
            this.compute(event);
            this.emit();
        }
    }
    pointerEnd(event) {
        const state = this.state;
        this.ctrl.setEventIds(event);
        try {
            event.target.releasePointerCapture(event.pointerId);
        } catch (_unused) {}
        if (state._pointerEvents.has(event.pointerId)) {
            state._pointerEvents.delete(event.pointerId);
        }
        if (!state._active) return;
        if (state._pointerEvents.size < 2) {
            state._active = false;
            this.compute(event);
            this.emit();
        }
    }
    gestureStart(event) {
        if (event.cancelable) event.preventDefault();
        const state = this.state;
        if (state._active) return;
        this.start(event);
        this.computeValues([
            event.scale,
            event.rotation
        ]);
        state.origin = [
            event.clientX,
            event.clientY
        ];
        this.compute(event);
        this.emit();
    }
    gestureMove(event) {
        if (event.cancelable) event.preventDefault();
        if (!this.state._active) return;
        const state = this.state;
        this.computeValues([
            event.scale,
            event.rotation
        ]);
        state.origin = [
            event.clientX,
            event.clientY
        ];
        const _previousMovement = state._movement;
        state._movement = [
            event.scale - 1,
            event.rotation
        ];
        state._delta = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$use$2d$gesture$2f$core$2f$dist$2f$maths$2d$0ab39ae9$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["V"].sub(state._movement, _previousMovement);
        this.compute(event);
        this.emit();
    }
    gestureEnd(event) {
        if (!this.state._active) return;
        this.state._active = false;
        this.compute(event);
        this.emit();
    }
    wheel(event) {
        const modifierKey = this.config.modifierKey;
        if (modifierKey && (Array.isArray(modifierKey) ? !modifierKey.find((k)=>event[k]) : !event[modifierKey])) return;
        if (!this.state._active) this.wheelStart(event);
        else this.wheelChange(event);
        this.timeoutStore.add('wheelEnd', this.wheelEnd.bind(this));
    }
    wheelStart(event) {
        this.start(event);
        this.wheelChange(event);
    }
    wheelChange(event) {
        const isR3f = 'uv' in event;
        if (!isR3f) {
            if (event.cancelable) {
                event.preventDefault();
            }
            if (("TURBOPACK compile-time value", "development") === 'development' && !event.defaultPrevented) {
                console.warn(`[@use-gesture]: To properly support zoom on trackpads, try using the \`target\` option.\n\nThis message will only appear in development mode.`);
            }
        }
        const state = this.state;
        state._delta = [
            -wheelValues(event)[1] / PINCH_WHEEL_RATIO * state.offset[0],
            0
        ];
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$use$2d$gesture$2f$core$2f$dist$2f$maths$2d$0ab39ae9$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["V"].addTo(state._movement, state._delta);
        clampStateInternalMovementToBounds(state);
        this.state.origin = [
            event.clientX,
            event.clientY
        ];
        this.compute(event);
        this.emit();
    }
    wheelEnd() {
        if (!this.state._active) return;
        this.state._active = false;
        this.compute();
        this.emit();
    }
    bind(bindFunction) {
        const device = this.config.device;
        if (!!device) {
            bindFunction(device, 'start', this[device + 'Start'].bind(this));
            bindFunction(device, 'change', this[device + 'Move'].bind(this));
            bindFunction(device, 'end', this[device + 'End'].bind(this));
            bindFunction(device, 'cancel', this[device + 'End'].bind(this));
            bindFunction('lostPointerCapture', '', this[device + 'End'].bind(this));
        }
        if (this.config.pinchOnWheel) {
            bindFunction('wheel', '', this.wheel.bind(this), {
                passive: false
            });
        }
    }
}
const pinchConfigResolver = _objectSpread2(_objectSpread2({}, commonConfigResolver), {}, {
    device (_v, _k, { shared, pointer: { touch = false } = {} }) {
        const sharedConfig = shared;
        if (sharedConfig.target && !SUPPORT.touch && SUPPORT.gesture) return 'gesture';
        if (SUPPORT.touch && touch) return 'touch';
        if (SUPPORT.touchscreen) {
            if (SUPPORT.pointer) return 'pointer';
            if (SUPPORT.touch) return 'touch';
        }
    },
    bounds (_v, _k, { scaleBounds = {}, angleBounds = {} }) {
        const _scaleBounds = (state)=>{
            const D = assignDefault(call(scaleBounds, state), {
                min: -Infinity,
                max: Infinity
            });
            return [
                D.min,
                D.max
            ];
        };
        const _angleBounds = (state)=>{
            const A = assignDefault(call(angleBounds, state), {
                min: -Infinity,
                max: Infinity
            });
            return [
                A.min,
                A.max
            ];
        };
        if (typeof scaleBounds !== 'function' && typeof angleBounds !== 'function') return [
            _scaleBounds(),
            _angleBounds()
        ];
        return (state)=>[
                _scaleBounds(state),
                _angleBounds(state)
            ];
    },
    threshold (value, _k, config) {
        this.lockDirection = config.axis === 'lock';
        const threshold = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$use$2d$gesture$2f$core$2f$dist$2f$maths$2d$0ab39ae9$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["V"].toVector(value, this.lockDirection ? [
            0.1,
            3
        ] : 0);
        return threshold;
    },
    modifierKey (value) {
        if (value === undefined) return 'ctrlKey';
        return value;
    },
    pinchOnWheel (value = true) {
        return value;
    }
});
class MoveEngine extends CoordinatesEngine {
    constructor(...args){
        super(...args);
        _defineProperty(this, "ingKey", 'moving');
    }
    move(event) {
        if (this.config.mouseOnly && event.pointerType !== 'mouse') return;
        if (!this.state._active) this.moveStart(event);
        else this.moveChange(event);
        this.timeoutStore.add('moveEnd', this.moveEnd.bind(this));
    }
    moveStart(event) {
        this.start(event);
        this.computeValues(pointerValues(event));
        this.compute(event);
        this.computeInitial();
        this.emit();
    }
    moveChange(event) {
        if (!this.state._active) return;
        const values = pointerValues(event);
        const state = this.state;
        state._delta = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$use$2d$gesture$2f$core$2f$dist$2f$maths$2d$0ab39ae9$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["V"].sub(values, state._values);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$use$2d$gesture$2f$core$2f$dist$2f$maths$2d$0ab39ae9$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["V"].addTo(state._movement, state._delta);
        this.computeValues(values);
        this.compute(event);
        this.emit();
    }
    moveEnd(event) {
        if (!this.state._active) return;
        this.state._active = false;
        this.compute(event);
        this.emit();
    }
    bind(bindFunction) {
        bindFunction('pointer', 'change', this.move.bind(this));
        bindFunction('pointer', 'leave', this.moveEnd.bind(this));
    }
}
const moveConfigResolver = _objectSpread2(_objectSpread2({}, coordinatesConfigResolver), {}, {
    mouseOnly: (value = true)=>value
});
class ScrollEngine extends CoordinatesEngine {
    constructor(...args){
        super(...args);
        _defineProperty(this, "ingKey", 'scrolling');
    }
    scroll(event) {
        if (!this.state._active) this.start(event);
        this.scrollChange(event);
        this.timeoutStore.add('scrollEnd', this.scrollEnd.bind(this));
    }
    scrollChange(event) {
        if (event.cancelable) event.preventDefault();
        const state = this.state;
        const values = scrollValues(event);
        state._delta = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$use$2d$gesture$2f$core$2f$dist$2f$maths$2d$0ab39ae9$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["V"].sub(values, state._values);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$use$2d$gesture$2f$core$2f$dist$2f$maths$2d$0ab39ae9$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["V"].addTo(state._movement, state._delta);
        this.computeValues(values);
        this.compute(event);
        this.emit();
    }
    scrollEnd() {
        if (!this.state._active) return;
        this.state._active = false;
        this.compute();
        this.emit();
    }
    bind(bindFunction) {
        bindFunction('scroll', '', this.scroll.bind(this));
    }
}
const scrollConfigResolver = coordinatesConfigResolver;
class WheelEngine extends CoordinatesEngine {
    constructor(...args){
        super(...args);
        _defineProperty(this, "ingKey", 'wheeling');
    }
    wheel(event) {
        if (!this.state._active) this.start(event);
        this.wheelChange(event);
        this.timeoutStore.add('wheelEnd', this.wheelEnd.bind(this));
    }
    wheelChange(event) {
        const state = this.state;
        state._delta = wheelValues(event);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$use$2d$gesture$2f$core$2f$dist$2f$maths$2d$0ab39ae9$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["V"].addTo(state._movement, state._delta);
        clampStateInternalMovementToBounds(state);
        this.compute(event);
        this.emit();
    }
    wheelEnd() {
        if (!this.state._active) return;
        this.state._active = false;
        this.compute();
        this.emit();
    }
    bind(bindFunction) {
        bindFunction('wheel', '', this.wheel.bind(this));
    }
}
const wheelConfigResolver = coordinatesConfigResolver;
class HoverEngine extends CoordinatesEngine {
    constructor(...args){
        super(...args);
        _defineProperty(this, "ingKey", 'hovering');
    }
    enter(event) {
        if (this.config.mouseOnly && event.pointerType !== 'mouse') return;
        this.start(event);
        this.computeValues(pointerValues(event));
        this.compute(event);
        this.emit();
    }
    leave(event) {
        if (this.config.mouseOnly && event.pointerType !== 'mouse') return;
        const state = this.state;
        if (!state._active) return;
        state._active = false;
        const values = pointerValues(event);
        state._movement = state._delta = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$use$2d$gesture$2f$core$2f$dist$2f$maths$2d$0ab39ae9$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["V"].sub(values, state._values);
        this.computeValues(values);
        this.compute(event);
        state.delta = state.movement;
        this.emit();
    }
    bind(bindFunction) {
        bindFunction('pointer', 'enter', this.enter.bind(this));
        bindFunction('pointer', 'leave', this.leave.bind(this));
    }
}
const hoverConfigResolver = _objectSpread2(_objectSpread2({}, coordinatesConfigResolver), {}, {
    mouseOnly: (value = true)=>value
});
const EngineMap = new Map();
const ConfigResolverMap = new Map();
function registerAction(action) {
    EngineMap.set(action.key, action.engine);
    ConfigResolverMap.set(action.key, action.resolver);
}
const dragAction = {
    key: 'drag',
    engine: DragEngine,
    resolver: dragConfigResolver
};
const hoverAction = {
    key: 'hover',
    engine: HoverEngine,
    resolver: hoverConfigResolver
};
const moveAction = {
    key: 'move',
    engine: MoveEngine,
    resolver: moveConfigResolver
};
const pinchAction = {
    key: 'pinch',
    engine: PinchEngine,
    resolver: pinchConfigResolver
};
const scrollAction = {
    key: 'scroll',
    engine: ScrollEngine,
    resolver: scrollConfigResolver
};
const wheelAction = {
    key: 'wheel',
    engine: WheelEngine,
    resolver: wheelConfigResolver
};
;
}),
"[project]/node_modules/@use-gesture/core/dist/actions-fe213e88.esm.js [app-client] (ecmascript) <export r as registerAction>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "registerAction",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$use$2d$gesture$2f$core$2f$dist$2f$actions$2d$fe213e88$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["r"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$use$2d$gesture$2f$core$2f$dist$2f$actions$2d$fe213e88$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@use-gesture/core/dist/actions-fe213e88.esm.js [app-client] (ecmascript)");
}),
"[project]/node_modules/@use-gesture/core/dist/actions-fe213e88.esm.js [app-client] (ecmascript) <export e as dragAction>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "dragAction",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$use$2d$gesture$2f$core$2f$dist$2f$actions$2d$fe213e88$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$use$2d$gesture$2f$core$2f$dist$2f$actions$2d$fe213e88$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@use-gesture/core/dist/actions-fe213e88.esm.js [app-client] (ecmascript)");
}),
"[project]/node_modules/@use-gesture/core/dist/actions-fe213e88.esm.js [app-client] (ecmascript) <export f as pinchAction>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "pinchAction",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$use$2d$gesture$2f$core$2f$dist$2f$actions$2d$fe213e88$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["f"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$use$2d$gesture$2f$core$2f$dist$2f$actions$2d$fe213e88$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@use-gesture/core/dist/actions-fe213e88.esm.js [app-client] (ecmascript)");
}),
"[project]/node_modules/@use-gesture/core/dist/actions-fe213e88.esm.js [app-client] (ecmascript) <export w as wheelAction>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "wheelAction",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$use$2d$gesture$2f$core$2f$dist$2f$actions$2d$fe213e88$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["w"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$use$2d$gesture$2f$core$2f$dist$2f$actions$2d$fe213e88$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@use-gesture/core/dist/actions-fe213e88.esm.js [app-client] (ecmascript)");
}),
"[project]/node_modules/@use-gesture/core/dist/actions-fe213e88.esm.js [app-client] (ecmascript) <export s as scrollAction>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "scrollAction",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$use$2d$gesture$2f$core$2f$dist$2f$actions$2d$fe213e88$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["s"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$use$2d$gesture$2f$core$2f$dist$2f$actions$2d$fe213e88$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@use-gesture/core/dist/actions-fe213e88.esm.js [app-client] (ecmascript)");
}),
"[project]/node_modules/@use-gesture/core/dist/actions-fe213e88.esm.js [app-client] (ecmascript) <export m as moveAction>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "moveAction",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$use$2d$gesture$2f$core$2f$dist$2f$actions$2d$fe213e88$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$use$2d$gesture$2f$core$2f$dist$2f$actions$2d$fe213e88$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@use-gesture/core/dist/actions-fe213e88.esm.js [app-client] (ecmascript)");
}),
"[project]/node_modules/@use-gesture/core/dist/actions-fe213e88.esm.js [app-client] (ecmascript) <export h as hoverAction>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hoverAction",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$use$2d$gesture$2f$core$2f$dist$2f$actions$2d$fe213e88$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["h"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$use$2d$gesture$2f$core$2f$dist$2f$actions$2d$fe213e88$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@use-gesture/core/dist/actions-fe213e88.esm.js [app-client] (ecmascript)");
}),
"[project]/node_modules/@use-gesture/core/dist/use-gesture-core.esm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Controller",
    ()=>Controller,
    "parseMergedHandlers",
    ()=>parseMergedHandlers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$use$2d$gesture$2f$core$2f$dist$2f$actions$2d$fe213e88$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@use-gesture/core/dist/actions-fe213e88.esm.js [app-client] (ecmascript)");
;
;
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
const sharedConfigResolver = {
    target (value) {
        if (value) {
            return ()=>'current' in value ? value.current : value;
        }
        return undefined;
    },
    enabled (value = true) {
        return value;
    },
    window (value = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$use$2d$gesture$2f$core$2f$dist$2f$actions$2d$fe213e88$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["S"].isBrowser ? window : undefined) {
        return value;
    },
    eventOptions ({ passive = true, capture = false } = {}) {
        return {
            passive,
            capture
        };
    },
    transform (value) {
        return value;
    }
};
const _excluded = [
    "target",
    "eventOptions",
    "window",
    "enabled",
    "transform"
];
function resolveWith(config = {}, resolvers) {
    const result = {};
    for (const [key, resolver] of Object.entries(resolvers)){
        switch(typeof resolver){
            case 'function':
                if ("TURBOPACK compile-time truthy", 1) {
                    const r = resolver.call(result, config[key], key, config);
                    if (!Number.isNaN(r)) result[key] = r;
                } else //TURBOPACK unreachable
                ;
                break;
            case 'object':
                result[key] = resolveWith(config[key], resolver);
                break;
            case 'boolean':
                if (resolver) result[key] = config[key];
                break;
        }
    }
    return result;
}
function parse(newConfig, gestureKey, _config = {}) {
    const _ref = newConfig, { target, eventOptions, window: window1, enabled, transform } = _ref, rest = _objectWithoutProperties(_ref, _excluded);
    _config.shared = resolveWith({
        target,
        eventOptions,
        window: window1,
        enabled,
        transform
    }, sharedConfigResolver);
    if (gestureKey) {
        const resolver = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$use$2d$gesture$2f$core$2f$dist$2f$actions$2d$fe213e88$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].get(gestureKey);
        _config[gestureKey] = resolveWith((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$use$2d$gesture$2f$core$2f$dist$2f$actions$2d$fe213e88$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
            shared: _config.shared
        }, rest), resolver);
    } else {
        for(const key in rest){
            const resolver = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$use$2d$gesture$2f$core$2f$dist$2f$actions$2d$fe213e88$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].get(key);
            if (resolver) {
                _config[key] = resolveWith((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$use$2d$gesture$2f$core$2f$dist$2f$actions$2d$fe213e88$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
                    shared: _config.shared
                }, rest[key]), resolver);
            } else if ("TURBOPACK compile-time truthy", 1) {
                if (![
                    'drag',
                    'pinch',
                    'scroll',
                    'wheel',
                    'move',
                    'hover'
                ].includes(key)) {
                    if (key === 'domTarget') {
                        throw Error(`[@use-gesture]: \`domTarget\` option has been renamed to \`target\`.`);
                    }
                    console.warn(`[@use-gesture]: Unknown config key \`${key}\` was used. Please read the documentation for further information.`);
                }
            }
        }
    }
    return _config;
}
class EventStore {
    constructor(ctrl, gestureKey){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$use$2d$gesture$2f$core$2f$dist$2f$actions$2d$fe213e88$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(this, "_listeners", new Set());
        this._ctrl = ctrl;
        this._gestureKey = gestureKey;
    }
    add(element, device, action, handler, options) {
        const listeners = this._listeners;
        const type = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$use$2d$gesture$2f$core$2f$dist$2f$actions$2d$fe213e88$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])(device, action);
        const _options = this._gestureKey ? this._ctrl.config[this._gestureKey].eventOptions : {};
        const eventOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$use$2d$gesture$2f$core$2f$dist$2f$actions$2d$fe213e88$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$use$2d$gesture$2f$core$2f$dist$2f$actions$2d$fe213e88$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, _options), options);
        element.addEventListener(type, handler, eventOptions);
        const remove = ()=>{
            element.removeEventListener(type, handler, eventOptions);
            listeners.delete(remove);
        };
        listeners.add(remove);
        return remove;
    }
    clean() {
        this._listeners.forEach((remove)=>remove());
        this._listeners.clear();
    }
}
class TimeoutStore {
    constructor(){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$use$2d$gesture$2f$core$2f$dist$2f$actions$2d$fe213e88$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(this, "_timeouts", new Map());
    }
    add(key, callback, ms = 140, ...args) {
        this.remove(key);
        this._timeouts.set(key, window.setTimeout(callback, ms, ...args));
    }
    remove(key) {
        const timeout = this._timeouts.get(key);
        if (timeout) window.clearTimeout(timeout);
    }
    clean() {
        this._timeouts.forEach((timeout)=>void window.clearTimeout(timeout));
        this._timeouts.clear();
    }
}
class Controller {
    constructor(handlers){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$use$2d$gesture$2f$core$2f$dist$2f$actions$2d$fe213e88$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(this, "gestures", new Set());
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$use$2d$gesture$2f$core$2f$dist$2f$actions$2d$fe213e88$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(this, "_targetEventStore", new EventStore(this));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$use$2d$gesture$2f$core$2f$dist$2f$actions$2d$fe213e88$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(this, "gestureEventStores", {});
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$use$2d$gesture$2f$core$2f$dist$2f$actions$2d$fe213e88$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(this, "gestureTimeoutStores", {});
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$use$2d$gesture$2f$core$2f$dist$2f$actions$2d$fe213e88$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(this, "handlers", {});
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$use$2d$gesture$2f$core$2f$dist$2f$actions$2d$fe213e88$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(this, "config", {});
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$use$2d$gesture$2f$core$2f$dist$2f$actions$2d$fe213e88$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(this, "pointerIds", new Set());
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$use$2d$gesture$2f$core$2f$dist$2f$actions$2d$fe213e88$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(this, "touchIds", new Set());
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$use$2d$gesture$2f$core$2f$dist$2f$actions$2d$fe213e88$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(this, "state", {
            shared: {
                shiftKey: false,
                metaKey: false,
                ctrlKey: false,
                altKey: false
            }
        });
        resolveGestures(this, handlers);
    }
    setEventIds(event) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$use$2d$gesture$2f$core$2f$dist$2f$actions$2d$fe213e88$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["i"])(event)) {
            this.touchIds = new Set((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$use$2d$gesture$2f$core$2f$dist$2f$actions$2d$fe213e88$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])(event));
            return this.touchIds;
        } else if ('pointerId' in event) {
            if (event.type === 'pointerup' || event.type === 'pointercancel') this.pointerIds.delete(event.pointerId);
            else if (event.type === 'pointerdown') this.pointerIds.add(event.pointerId);
            return this.pointerIds;
        }
    }
    applyHandlers(handlers, nativeHandlers) {
        this.handlers = handlers;
        this.nativeHandlers = nativeHandlers;
    }
    applyConfig(config, gestureKey) {
        this.config = parse(config, gestureKey, this.config);
    }
    clean() {
        this._targetEventStore.clean();
        for (const key of this.gestures){
            this.gestureEventStores[key].clean();
            this.gestureTimeoutStores[key].clean();
        }
    }
    effect() {
        if (this.config.shared.target) this.bind();
        return ()=>this._targetEventStore.clean();
    }
    bind(...args) {
        const sharedConfig = this.config.shared;
        const props = {};
        let target;
        if (sharedConfig.target) {
            target = sharedConfig.target();
            if (!target) return;
        }
        if (sharedConfig.enabled) {
            for (const gestureKey of this.gestures){
                const gestureConfig = this.config[gestureKey];
                const bindFunction = bindToProps(props, gestureConfig.eventOptions, !!target);
                if (gestureConfig.enabled) {
                    const Engine = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$use$2d$gesture$2f$core$2f$dist$2f$actions$2d$fe213e88$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["E"].get(gestureKey);
                    new Engine(this, args, gestureKey).bind(bindFunction);
                }
            }
            const nativeBindFunction = bindToProps(props, sharedConfig.eventOptions, !!target);
            for(const eventKey in this.nativeHandlers){
                nativeBindFunction(eventKey, '', (event)=>this.nativeHandlers[eventKey]((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$use$2d$gesture$2f$core$2f$dist$2f$actions$2d$fe213e88$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$use$2d$gesture$2f$core$2f$dist$2f$actions$2d$fe213e88$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, this.state.shared), {}, {
                        event,
                        args
                    })), undefined, true);
            }
        }
        for(const handlerProp in props){
            props[handlerProp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$use$2d$gesture$2f$core$2f$dist$2f$actions$2d$fe213e88$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(...props[handlerProp]);
        }
        if (!target) return props;
        for(const handlerProp in props){
            const { device, capture, passive } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$use$2d$gesture$2f$core$2f$dist$2f$actions$2d$fe213e88$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["p"])(handlerProp);
            this._targetEventStore.add(target, device, '', props[handlerProp], {
                capture,
                passive
            });
        }
    }
}
function setupGesture(ctrl, gestureKey) {
    ctrl.gestures.add(gestureKey);
    ctrl.gestureEventStores[gestureKey] = new EventStore(ctrl, gestureKey);
    ctrl.gestureTimeoutStores[gestureKey] = new TimeoutStore();
}
function resolveGestures(ctrl, internalHandlers) {
    if (internalHandlers.drag) setupGesture(ctrl, 'drag');
    if (internalHandlers.wheel) setupGesture(ctrl, 'wheel');
    if (internalHandlers.scroll) setupGesture(ctrl, 'scroll');
    if (internalHandlers.move) setupGesture(ctrl, 'move');
    if (internalHandlers.pinch) setupGesture(ctrl, 'pinch');
    if (internalHandlers.hover) setupGesture(ctrl, 'hover');
}
const bindToProps = (props, eventOptions, withPassiveOption)=>(device, action, handler, options = {}, isNative = false)=>{
        var _options$capture, _options$passive;
        const capture = (_options$capture = options.capture) !== null && _options$capture !== void 0 ? _options$capture : eventOptions.capture;
        const passive = (_options$passive = options.passive) !== null && _options$passive !== void 0 ? _options$passive : eventOptions.passive;
        let handlerProp = isNative ? device : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$use$2d$gesture$2f$core$2f$dist$2f$actions$2d$fe213e88$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])(device, action, capture);
        if (withPassiveOption && passive) handlerProp += 'Passive';
        props[handlerProp] = props[handlerProp] || [];
        props[handlerProp].push(handler);
    };
const RE_NOT_NATIVE = /^on(Drag|Wheel|Scroll|Move|Pinch|Hover)/;
function sortHandlers(_handlers) {
    const native = {};
    const handlers = {};
    const actions = new Set();
    for(let key in _handlers){
        if (RE_NOT_NATIVE.test(key)) {
            actions.add(RegExp.lastMatch);
            handlers[key] = _handlers[key];
        } else {
            native[key] = _handlers[key];
        }
    }
    return [
        handlers,
        native,
        actions
    ];
}
function registerGesture(actions, handlers, handlerKey, key, internalHandlers, config) {
    if (!actions.has(handlerKey)) return;
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$use$2d$gesture$2f$core$2f$dist$2f$actions$2d$fe213e88$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["E"].has(key)) {
        if ("TURBOPACK compile-time truthy", 1) {
            console.warn(`[@use-gesture]: You've created a custom handler that that uses the \`${key}\` gesture but isn't properly configured.\n\nPlease add \`${key}Action\` when creating your handler.`);
        }
        return;
    }
    const startKey = handlerKey + 'Start';
    const endKey = handlerKey + 'End';
    const fn = (state)=>{
        let memo = undefined;
        if (state.first && startKey in handlers) handlers[startKey](state);
        if (handlerKey in handlers) memo = handlers[handlerKey](state);
        if (state.last && endKey in handlers) handlers[endKey](state);
        return memo;
    };
    internalHandlers[key] = fn;
    config[key] = config[key] || {};
}
function parseMergedHandlers(mergedHandlers, mergedConfig) {
    const [handlers, nativeHandlers, actions] = sortHandlers(mergedHandlers);
    const internalHandlers = {};
    registerGesture(actions, handlers, 'onDrag', 'drag', internalHandlers, mergedConfig);
    registerGesture(actions, handlers, 'onWheel', 'wheel', internalHandlers, mergedConfig);
    registerGesture(actions, handlers, 'onScroll', 'scroll', internalHandlers, mergedConfig);
    registerGesture(actions, handlers, 'onPinch', 'pinch', internalHandlers, mergedConfig);
    registerGesture(actions, handlers, 'onMove', 'move', internalHandlers, mergedConfig);
    registerGesture(actions, handlers, 'onHover', 'hover', internalHandlers, mergedConfig);
    return {
        handlers: internalHandlers,
        config: mergedConfig,
        nativeHandlers
    };
}
;
}),
"[project]/node_modules/@use-gesture/core/utils/dist/use-gesture-core-utils.esm.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/node_modules/@use-gesture/core/types/dist/use-gesture-core-types.esm.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/node_modules/@use-gesture/react/dist/use-gesture-react.esm.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createUseGesture",
    ()=>createUseGesture,
    "useDrag",
    ()=>useDrag,
    "useGesture",
    ()=>useGesture,
    "useHover",
    ()=>useHover,
    "useMove",
    ()=>useMove,
    "usePinch",
    ()=>usePinch,
    "useScroll",
    ()=>useScroll,
    "useWheel",
    ()=>useWheel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$use$2d$gesture$2f$core$2f$actions$2f$dist$2f$use$2d$gesture$2d$core$2d$actions$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@use-gesture/core/actions/dist/use-gesture-core-actions.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$use$2d$gesture$2f$core$2f$dist$2f$actions$2d$fe213e88$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__r__as__registerAction$3e$__ = __turbopack_context__.i("[project]/node_modules/@use-gesture/core/dist/actions-fe213e88.esm.js [app-client] (ecmascript) <export r as registerAction>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$use$2d$gesture$2f$core$2f$dist$2f$actions$2d$fe213e88$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__dragAction$3e$__ = __turbopack_context__.i("[project]/node_modules/@use-gesture/core/dist/actions-fe213e88.esm.js [app-client] (ecmascript) <export e as dragAction>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$use$2d$gesture$2f$core$2f$dist$2f$actions$2d$fe213e88$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__f__as__pinchAction$3e$__ = __turbopack_context__.i("[project]/node_modules/@use-gesture/core/dist/actions-fe213e88.esm.js [app-client] (ecmascript) <export f as pinchAction>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$use$2d$gesture$2f$core$2f$dist$2f$actions$2d$fe213e88$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__wheelAction$3e$__ = __turbopack_context__.i("[project]/node_modules/@use-gesture/core/dist/actions-fe213e88.esm.js [app-client] (ecmascript) <export w as wheelAction>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$use$2d$gesture$2f$core$2f$dist$2f$actions$2d$fe213e88$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__s__as__scrollAction$3e$__ = __turbopack_context__.i("[project]/node_modules/@use-gesture/core/dist/actions-fe213e88.esm.js [app-client] (ecmascript) <export s as scrollAction>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$use$2d$gesture$2f$core$2f$dist$2f$actions$2d$fe213e88$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__m__as__moveAction$3e$__ = __turbopack_context__.i("[project]/node_modules/@use-gesture/core/dist/actions-fe213e88.esm.js [app-client] (ecmascript) <export m as moveAction>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$use$2d$gesture$2f$core$2f$dist$2f$actions$2d$fe213e88$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__h__as__hoverAction$3e$__ = __turbopack_context__.i("[project]/node_modules/@use-gesture/core/dist/actions-fe213e88.esm.js [app-client] (ecmascript) <export h as hoverAction>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$use$2d$gesture$2f$core$2f$dist$2f$use$2d$gesture$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@use-gesture/core/dist/use-gesture-core.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$use$2d$gesture$2f$core$2f$utils$2f$dist$2f$use$2d$gesture$2d$core$2d$utils$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@use-gesture/core/utils/dist/use-gesture-core-utils.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$use$2d$gesture$2f$core$2f$types$2f$dist$2f$use$2d$gesture$2d$core$2d$types$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@use-gesture/core/types/dist/use-gesture-core-types.esm.js [app-client] (ecmascript)");
;
;
;
;
;
;
function useRecognizers(handlers, config = {}, gestureKey, nativeHandlers) {
    const ctrl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "useRecognizers.useMemo[ctrl]": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$use$2d$gesture$2f$core$2f$dist$2f$use$2d$gesture$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controller"](handlers)
    }["useRecognizers.useMemo[ctrl]"], []);
    ctrl.applyHandlers(handlers, nativeHandlers);
    ctrl.applyConfig(config, gestureKey);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect(ctrl.effect.bind(ctrl));
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "useRecognizers.useEffect": ()=>{
            return ctrl.clean.bind(ctrl);
        }
    }["useRecognizers.useEffect"], []);
    if (config.target === undefined) {
        return ctrl.bind.bind(ctrl);
    }
    return undefined;
}
function useDrag(handler, config) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$use$2d$gesture$2f$core$2f$dist$2f$actions$2d$fe213e88$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__r__as__registerAction$3e$__["registerAction"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$use$2d$gesture$2f$core$2f$dist$2f$actions$2d$fe213e88$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__dragAction$3e$__["dragAction"]);
    return useRecognizers({
        drag: handler
    }, config || {}, 'drag');
}
function usePinch(handler, config) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$use$2d$gesture$2f$core$2f$dist$2f$actions$2d$fe213e88$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__r__as__registerAction$3e$__["registerAction"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$use$2d$gesture$2f$core$2f$dist$2f$actions$2d$fe213e88$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__f__as__pinchAction$3e$__["pinchAction"]);
    return useRecognizers({
        pinch: handler
    }, config || {}, 'pinch');
}
function useWheel(handler, config) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$use$2d$gesture$2f$core$2f$dist$2f$actions$2d$fe213e88$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__r__as__registerAction$3e$__["registerAction"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$use$2d$gesture$2f$core$2f$dist$2f$actions$2d$fe213e88$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__wheelAction$3e$__["wheelAction"]);
    return useRecognizers({
        wheel: handler
    }, config || {}, 'wheel');
}
function useScroll(handler, config) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$use$2d$gesture$2f$core$2f$dist$2f$actions$2d$fe213e88$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__r__as__registerAction$3e$__["registerAction"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$use$2d$gesture$2f$core$2f$dist$2f$actions$2d$fe213e88$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__s__as__scrollAction$3e$__["scrollAction"]);
    return useRecognizers({
        scroll: handler
    }, config || {}, 'scroll');
}
function useMove(handler, config) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$use$2d$gesture$2f$core$2f$dist$2f$actions$2d$fe213e88$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__r__as__registerAction$3e$__["registerAction"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$use$2d$gesture$2f$core$2f$dist$2f$actions$2d$fe213e88$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__m__as__moveAction$3e$__["moveAction"]);
    return useRecognizers({
        move: handler
    }, config || {}, 'move');
}
function useHover(handler, config) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$use$2d$gesture$2f$core$2f$dist$2f$actions$2d$fe213e88$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__r__as__registerAction$3e$__["registerAction"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$use$2d$gesture$2f$core$2f$dist$2f$actions$2d$fe213e88$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__h__as__hoverAction$3e$__["hoverAction"]);
    return useRecognizers({
        hover: handler
    }, config || {}, 'hover');
}
function createUseGesture(actions) {
    actions.forEach(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$use$2d$gesture$2f$core$2f$dist$2f$actions$2d$fe213e88$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__r__as__registerAction$3e$__["registerAction"]);
    return function useGesture(_handlers, _config) {
        const { handlers, nativeHandlers, config } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$use$2d$gesture$2f$core$2f$dist$2f$use$2d$gesture$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseMergedHandlers"])(_handlers, _config || {});
        return useRecognizers(handlers, config, undefined, nativeHandlers);
    };
}
function useGesture(handlers, config) {
    const hook = createUseGesture([
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$use$2d$gesture$2f$core$2f$dist$2f$actions$2d$fe213e88$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__dragAction$3e$__["dragAction"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$use$2d$gesture$2f$core$2f$dist$2f$actions$2d$fe213e88$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__f__as__pinchAction$3e$__["pinchAction"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$use$2d$gesture$2f$core$2f$dist$2f$actions$2d$fe213e88$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__s__as__scrollAction$3e$__["scrollAction"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$use$2d$gesture$2f$core$2f$dist$2f$actions$2d$fe213e88$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__wheelAction$3e$__["wheelAction"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$use$2d$gesture$2f$core$2f$dist$2f$actions$2d$fe213e88$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__m__as__moveAction$3e$__["moveAction"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$use$2d$gesture$2f$core$2f$dist$2f$actions$2d$fe213e88$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__h__as__hoverAction$3e$__["hoverAction"]
    ]);
    return hook(handlers, config || {});
}
;
}),
"[project]/node_modules/lodash.pick/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */ /** Used as references for various `Number` constants. */ var INFINITY = 1 / 0, MAX_SAFE_INTEGER = 9007199254740991;
/** `Object#toString` result references. */ var argsTag = '[object Arguments]', funcTag = '[object Function]', genTag = '[object GeneratorFunction]', symbolTag = '[object Symbol]';
/** Detect free variable `global` from Node.js. */ var freeGlobal = ("TURBOPACK compile-time value", "object") == 'object' && /*TURBOPACK member replacement*/ __turbopack_context__.g && /*TURBOPACK member replacement*/ __turbopack_context__.g.Object === Object && /*TURBOPACK member replacement*/ __turbopack_context__.g;
/** Detect free variable `self`. */ var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */ var root = freeGlobal || freeSelf || Function('return this')();
/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */ function apply(func, thisArg, args) {
    switch(args.length){
        case 0:
            return func.call(thisArg);
        case 1:
            return func.call(thisArg, args[0]);
        case 2:
            return func.call(thisArg, args[0], args[1]);
        case 3:
            return func.call(thisArg, args[0], args[1], args[2]);
    }
    return func.apply(thisArg, args);
}
/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */ function arrayMap(array, iteratee) {
    var index = -1, length = array ? array.length : 0, result = Array(length);
    while(++index < length){
        result[index] = iteratee(array[index], index, array);
    }
    return result;
}
/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */ function arrayPush(array, values) {
    var index = -1, length = values.length, offset = array.length;
    while(++index < length){
        array[offset + index] = values[index];
    }
    return array;
}
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var objectToString = objectProto.toString;
/** Built-in value references. */ var Symbol = root.Symbol, propertyIsEnumerable = objectProto.propertyIsEnumerable, spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeMax = Math.max;
/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */ function baseFlatten(array, depth, predicate, isStrict, result) {
    var index = -1, length = array.length;
    predicate || (predicate = isFlattenable);
    result || (result = []);
    while(++index < length){
        var value = array[index];
        if (depth > 0 && predicate(value)) {
            if (depth > 1) {
                // Recursively flatten arrays (susceptible to call stack limits).
                baseFlatten(value, depth - 1, predicate, isStrict, result);
            } else {
                arrayPush(result, value);
            }
        } else if (!isStrict) {
            result[result.length] = value;
        }
    }
    return result;
}
/**
 * The base implementation of `_.pick` without support for individual
 * property identifiers.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} props The property identifiers to pick.
 * @returns {Object} Returns the new object.
 */ function basePick(object, props) {
    object = Object(object);
    return basePickBy(object, props, function(value, key) {
        return key in object;
    });
}
/**
 * The base implementation of  `_.pickBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} props The property identifiers to pick from.
 * @param {Function} predicate The function invoked per property.
 * @returns {Object} Returns the new object.
 */ function basePickBy(object, props, predicate) {
    var index = -1, length = props.length, result = {};
    while(++index < length){
        var key = props[index], value = object[key];
        if (predicate(value, key)) {
            result[key] = value;
        }
    }
    return result;
}
/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */ function baseRest(func, start) {
    start = nativeMax(start === undefined ? func.length - 1 : start, 0);
    return function() {
        var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array(length);
        while(++index < length){
            array[index] = args[start + index];
        }
        index = -1;
        var otherArgs = Array(start + 1);
        while(++index < start){
            otherArgs[index] = args[index];
        }
        otherArgs[start] = array;
        return apply(func, this, otherArgs);
    };
}
/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */ function isFlattenable(value) {
    return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
}
/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */ function toKey(value) {
    if (typeof value == 'string' || isSymbol(value)) {
        return value;
    }
    var result = value + '';
    return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}
/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */ function isArguments(value) {
    // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
    return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') && (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}
/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */ var isArray = Array.isArray;
/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */ function isArrayLike(value) {
    return value != null && isLength(value.length) && !isFunction(value);
}
/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */ function isArrayLikeObject(value) {
    return isObjectLike(value) && isArrayLike(value);
}
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */ function isFunction(value) {
    // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 8-9 which returns 'object' for typed array and other constructors.
    var tag = isObject(value) ? objectToString.call(value) : '';
    return tag == funcTag || tag == genTag;
}
/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */ function isLength(value) {
    return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */ function isObject(value) {
    var type = typeof value;
    return !!value && (type == 'object' || type == 'function');
}
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */ function isObjectLike(value) {
    return !!value && typeof value == 'object';
}
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */ function isSymbol(value) {
    return typeof value == 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;
}
/**
 * Creates an object composed of the picked `object` properties.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [props] The property identifiers to pick.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.pick(object, ['a', 'c']);
 * // => { 'a': 1, 'c': 3 }
 */ var pick = baseRest(function(object, props) {
    return object == null ? {} : basePick(object, arrayMap(baseFlatten(props, 1), toKey));
});
module.exports = pick;
}),
"[project]/node_modules/react-is/cjs/react-is.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'use strict';
if ("TURBOPACK compile-time truthy", 1) {
    (function() {
        'use strict';
        // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
        // nor polyfill, then a plain number is used for performance.
        var hasSymbol = typeof Symbol === 'function' && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
        // (unstable) APIs that have been removed. Can we remove the symbols?
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;
        function isValidElementType(type) {
            return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
            type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object) {
            if (typeof object === 'object' && object !== null) {
                var $$typeof = object.$$typeof;
                switch($$typeof){
                    case REACT_ELEMENT_TYPE:
                        var type = object.type;
                        switch(type){
                            case REACT_ASYNC_MODE_TYPE:
                            case REACT_CONCURRENT_MODE_TYPE:
                            case REACT_FRAGMENT_TYPE:
                            case REACT_PROFILER_TYPE:
                            case REACT_STRICT_MODE_TYPE:
                            case REACT_SUSPENSE_TYPE:
                                return type;
                            default:
                                var $$typeofType = type && type.$$typeof;
                                switch($$typeofType){
                                    case REACT_CONTEXT_TYPE:
                                    case REACT_FORWARD_REF_TYPE:
                                    case REACT_LAZY_TYPE:
                                    case REACT_MEMO_TYPE:
                                    case REACT_PROVIDER_TYPE:
                                        return $$typeofType;
                                    default:
                                        return $$typeof;
                                }
                        }
                    case REACT_PORTAL_TYPE:
                        return $$typeof;
                }
            }
            return undefined;
        } // AsyncMode is deprecated along with isAsyncMode
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated
        function isAsyncMode(object) {
            {
                if (!hasWarnedAboutDeprecatedIsAsyncMode) {
                    hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint
                    console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
                }
            }
            return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
            return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object) {
            return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
            return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
            return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
            return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
            return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
            return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
            return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
            return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
            return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
            return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
            return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
    })();
}
}),
"[project]/node_modules/react-is/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/react-is/cjs/react-is.development.js [app-client] (ecmascript)");
}
}),
"[project]/node_modules/next/dist/build/polyfills/object-assign.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var assign = Object.assign.bind(Object);
module.exports = assign;
module.exports.default = module.exports; //# sourceMappingURL=object-assign.js.map
}),
"[project]/node_modules/prop-types/lib/ReactPropTypesSecret.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
module.exports = ReactPropTypesSecret;
}),
"[project]/node_modules/prop-types/lib/has.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
}),
"[project]/node_modules/prop-types/checkPropTypes.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'use strict';
var printWarning = function() {};
if ("TURBOPACK compile-time truthy", 1) {
    var ReactPropTypesSecret = __turbopack_context__.r("[project]/node_modules/prop-types/lib/ReactPropTypesSecret.js [app-client] (ecmascript)");
    var loggedTypeFailures = {};
    var has = __turbopack_context__.r("[project]/node_modules/prop-types/lib/has.js [app-client] (ecmascript)");
    printWarning = function(text) {
        var message = 'Warning: ' + text;
        if (typeof console !== 'undefined') {
            console.error(message);
        }
        try {
            // --- Welcome to debugging React ---
            // This error was thrown as a convenience so that you can use this stack
            // to find the callsite that caused this warning to fire.
            throw new Error(message);
        } catch (x) {}
    };
}
/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */ function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
    if ("TURBOPACK compile-time truthy", 1) {
        for(var typeSpecName in typeSpecs){
            if (has(typeSpecs, typeSpecName)) {
                var error;
                // Prop type validation may throw. In case they do, we don't want to
                // fail the render phase where it didn't fail before. So we log it.
                // After these have been cleaned up, we'll let them throw.
                try {
                    // This is intentionally an invariant that gets caught. It's the same
                    // behavior as without this statement except with a better message.
                    if (typeof typeSpecs[typeSpecName] !== 'function') {
                        var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
                        err.name = 'Invariant Violation';
                        throw err;
                    }
                    error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
                } catch (ex) {
                    error = ex;
                }
                if (error && !(error instanceof Error)) {
                    printWarning((componentName || 'React class') + ': type specification of ' + location + ' `' + typeSpecName + '` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a ' + typeof error + '. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).');
                }
                if (error instanceof Error && !(error.message in loggedTypeFailures)) {
                    // Only monitor this failure once because there tends to be a lot of the
                    // same error.
                    loggedTypeFailures[error.message] = true;
                    var stack = getStack ? getStack() : '';
                    printWarning('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
                }
            }
        }
    }
}
/**
 * Resets warning cache when testing.
 *
 * @private
 */ checkPropTypes.resetWarningCache = function() {
    if (("TURBOPACK compile-time value", "development") !== 'production') {
        loggedTypeFailures = {};
    }
};
module.exports = checkPropTypes;
}),
"[project]/node_modules/prop-types/factoryWithTypeCheckers.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'use strict';
var ReactIs = __turbopack_context__.r("[project]/node_modules/react-is/index.js [app-client] (ecmascript)");
var assign = __turbopack_context__.r("[project]/node_modules/next/dist/build/polyfills/object-assign.js [app-client] (ecmascript)");
var ReactPropTypesSecret = __turbopack_context__.r("[project]/node_modules/prop-types/lib/ReactPropTypesSecret.js [app-client] (ecmascript)");
var has = __turbopack_context__.r("[project]/node_modules/prop-types/lib/has.js [app-client] (ecmascript)");
var checkPropTypes = __turbopack_context__.r("[project]/node_modules/prop-types/checkPropTypes.js [app-client] (ecmascript)");
var printWarning = function() {};
if ("TURBOPACK compile-time truthy", 1) {
    printWarning = function(text) {
        var message = 'Warning: ' + text;
        if (typeof console !== 'undefined') {
            console.error(message);
        }
        try {
            // --- Welcome to debugging React ---
            // This error was thrown as a convenience so that you can use this stack
            // to find the callsite that caused this warning to fire.
            throw new Error(message);
        } catch (x) {}
    };
}
function emptyFunctionThatReturnsNull() {
    return null;
}
module.exports = function(isValidElement, throwOnDirectAccess) {
    /* global Symbol */ var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.
    /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */ function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === 'function') {
            return iteratorFn;
        }
    }
    /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */ var ANONYMOUS = '<<anonymous>>';
    // Important!
    // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
    var ReactPropTypes = {
        array: createPrimitiveTypeChecker('array'),
        bigint: createPrimitiveTypeChecker('bigint'),
        bool: createPrimitiveTypeChecker('boolean'),
        func: createPrimitiveTypeChecker('function'),
        number: createPrimitiveTypeChecker('number'),
        object: createPrimitiveTypeChecker('object'),
        string: createPrimitiveTypeChecker('string'),
        symbol: createPrimitiveTypeChecker('symbol'),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker
    };
    /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */ /*eslint-disable no-self-compare*/ function is(x, y) {
        // SameValue algorithm
        if (x === y) {
            // Steps 1-5, 7-10
            // Steps 6.b-6.e: +0 != -0
            return x !== 0 || 1 / x === 1 / y;
        } else {
            // Step 6.a: NaN == NaN
            return x !== x && y !== y;
        }
    }
    /*eslint-enable no-self-compare*/ /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */ function PropTypeError(message, data) {
        this.message = message;
        this.data = data && typeof data === 'object' ? data : {};
        this.stack = '';
    }
    // Make `instanceof Error` still work for returned errors.
    PropTypeError.prototype = Error.prototype;
    function createChainableTypeChecker(validate) {
        if (("TURBOPACK compile-time value", "development") !== 'production') {
            var manualPropTypeCallCache = {};
            var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
            componentName = componentName || ANONYMOUS;
            propFullName = propFullName || propName;
            if (secret !== ReactPropTypesSecret) {
                if (throwOnDirectAccess) {
                    // New behavior only for users of `prop-types` package
                    var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
                    err.name = 'Invariant Violation';
                    throw err;
                } else if (("TURBOPACK compile-time value", "development") !== 'production' && typeof console !== 'undefined') {
                    // Old behavior for people using React.PropTypes
                    var cacheKey = componentName + ':' + propName;
                    if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
                    manualPropTypeWarningCount < 3) {
                        printWarning('You are manually calling a React.PropTypes validation ' + 'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.');
                        manualPropTypeCallCache[cacheKey] = true;
                        manualPropTypeWarningCount++;
                    }
                }
            }
            if (props[propName] == null) {
                if (isRequired) {
                    if (props[propName] === null) {
                        return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
                    }
                    return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
                }
                return null;
            } else {
                return validate(props, propName, componentName, location, propFullName);
            }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
    }
    function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== expectedType) {
                // `propValue` being instance of, say, date/regexp, pass the 'object'
                // check, but we can offer a more precise error message here rather than
                // 'of type `object`'.
                var preciseType = getPreciseType(propValue);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'), {
                    expectedType: expectedType
                });
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
    }
    function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
            if (typeof typeChecker !== 'function') {
                return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
            }
            var propValue = props[propName];
            if (!Array.isArray(propValue)) {
                var propType = getPropType(propValue);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
            }
            for(var i = 0; i < propValue.length; i++){
                var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
                if (error instanceof Error) {
                    return error;
                }
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createElementTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            if (!isValidElement(propValue)) {
                var propType = getPropType(propValue);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createElementTypeTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            if (!ReactIs.isValidElementType(propValue)) {
                var propType = getPropType(propValue);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
            if (!(props[propName] instanceof expectedClass)) {
                var expectedClassName = expectedClass.name || ANONYMOUS;
                var actualClassName = getClassName(props[propName]);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
            if ("TURBOPACK compile-time truthy", 1) {
                if (arguments.length > 1) {
                    printWarning('Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' + 'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).');
                } else {
                    printWarning('Invalid argument supplied to oneOf, expected an array.');
                }
            }
            return emptyFunctionThatReturnsNull;
        }
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            for(var i = 0; i < expectedValues.length; i++){
                if (is(propValue, expectedValues[i])) {
                    return null;
                }
            }
            var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
                var type = getPreciseType(value);
                if (type === 'symbol') {
                    return String(value);
                }
                return value;
            });
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
        }
        return createChainableTypeChecker(validate);
    }
    function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
            if (typeof typeChecker !== 'function') {
                return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
            }
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== 'object') {
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
            }
            for(var key in propValue){
                if (has(propValue, key)) {
                    var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
                    if (error instanceof Error) {
                        return error;
                    }
                }
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
            ("TURBOPACK compile-time truthy", 1) ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : "TURBOPACK unreachable";
            return emptyFunctionThatReturnsNull;
        }
        for(var i = 0; i < arrayOfTypeCheckers.length; i++){
            var checker = arrayOfTypeCheckers[i];
            if (typeof checker !== 'function') {
                printWarning('Invalid argument supplied to oneOfType. Expected an array of check functions, but ' + 'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.');
                return emptyFunctionThatReturnsNull;
            }
        }
        function validate(props, propName, componentName, location, propFullName) {
            var expectedTypes = [];
            for(var i = 0; i < arrayOfTypeCheckers.length; i++){
                var checker = arrayOfTypeCheckers[i];
                var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
                if (checkerResult == null) {
                    return null;
                }
                if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
                    expectedTypes.push(checkerResult.data.expectedType);
                }
            }
            var expectedTypesMessage = expectedTypes.length > 0 ? ', expected one of type [' + expectedTypes.join(', ') + ']' : '';
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
        }
        return createChainableTypeChecker(validate);
    }
    function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
            if (!isNode(props[propName])) {
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function invalidValidatorError(componentName, location, propFullName, key, type) {
        return new PropTypeError((componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + type + '`.');
    }
    function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== 'object') {
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
            }
            for(var key in shapeTypes){
                var checker = shapeTypes[key];
                if (typeof checker !== 'function') {
                    return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
                }
                var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
                if (error) {
                    return error;
                }
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== 'object') {
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
            }
            // We need to check all keys in case some are required but missing from props.
            var allKeys = assign({}, props[propName], shapeTypes);
            for(var key in allKeys){
                var checker = shapeTypes[key];
                if (has(shapeTypes, key) && typeof checker !== 'function') {
                    return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
                }
                if (!checker) {
                    return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
                }
                var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
                if (error) {
                    return error;
                }
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function isNode(propValue) {
        switch(typeof propValue){
            case 'number':
            case 'string':
            case 'undefined':
                return true;
            case 'boolean':
                return !propValue;
            case 'object':
                if (Array.isArray(propValue)) {
                    return propValue.every(isNode);
                }
                if (propValue === null || isValidElement(propValue)) {
                    return true;
                }
                var iteratorFn = getIteratorFn(propValue);
                if (iteratorFn) {
                    var iterator = iteratorFn.call(propValue);
                    var step;
                    if (iteratorFn !== propValue.entries) {
                        while(!(step = iterator.next()).done){
                            if (!isNode(step.value)) {
                                return false;
                            }
                        }
                    } else {
                        // Iterator will provide entry [k,v] tuples rather than values.
                        while(!(step = iterator.next()).done){
                            var entry = step.value;
                            if (entry) {
                                if (!isNode(entry[1])) {
                                    return false;
                                }
                            }
                        }
                    }
                } else {
                    return false;
                }
                return true;
            default:
                return false;
        }
    }
    function isSymbol(propType, propValue) {
        // Native Symbol.
        if (propType === 'symbol') {
            return true;
        }
        // falsy value can't be a Symbol
        if (!propValue) {
            return false;
        }
        // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
        if (propValue['@@toStringTag'] === 'Symbol') {
            return true;
        }
        // Fallback for non-spec compliant Symbols which are polyfilled.
        if (typeof Symbol === 'function' && propValue instanceof Symbol) {
            return true;
        }
        return false;
    }
    // Equivalent of `typeof` but with special handling for array and regexp.
    function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
            return 'array';
        }
        if (propValue instanceof RegExp) {
            // Old webkits (at least until Android 4.0) return 'function' rather than
            // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
            // passes PropTypes.object.
            return 'object';
        }
        if (isSymbol(propType, propValue)) {
            return 'symbol';
        }
        return propType;
    }
    // This handles more types than `getPropType`. Only used for error messages.
    // See `createPrimitiveTypeChecker`.
    function getPreciseType(propValue) {
        if (typeof propValue === 'undefined' || propValue === null) {
            return '' + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === 'object') {
            if (propValue instanceof Date) {
                return 'date';
            } else if (propValue instanceof RegExp) {
                return 'regexp';
            }
        }
        return propType;
    }
    // Returns a string that is postfixed to a warning about an invalid type.
    // For example, "undefined" or "of type array"
    function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch(type){
            case 'array':
            case 'object':
                return 'an ' + type;
            case 'boolean':
            case 'date':
            case 'regexp':
                return 'a ' + type;
            default:
                return type;
        }
    }
    // Returns class name of the object, if any.
    function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
            return ANONYMOUS;
        }
        return propValue.constructor.name;
    }
    ReactPropTypes.checkPropTypes = checkPropTypes;
    ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
    ReactPropTypes.PropTypes = ReactPropTypes;
    return ReactPropTypes;
};
}),
"[project]/node_modules/prop-types/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ if ("TURBOPACK compile-time truthy", 1) {
    var ReactIs = __turbopack_context__.r("[project]/node_modules/react-is/index.js [app-client] (ecmascript)");
    // By explicitly using `prop-types` you are opting into new development behavior.
    // http://fb.me/prop-types-in-prod
    var throwOnDirectAccess = true;
    module.exports = __turbopack_context__.r("[project]/node_modules/prop-types/factoryWithTypeCheckers.js [app-client] (ecmascript)")(ReactIs.isElement, throwOnDirectAccess);
} else //TURBOPACK unreachable
;
}),
"[project]/node_modules/react-composer/es/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Composer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prop-types/index.js [app-client] (ecmascript)");
;
;
function Composer(props) {
    return renderRecursive(props.children, props.components);
}
Composer.propTypes = {
    children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func.isRequired,
    components: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].arrayOf(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].element,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
    ])).isRequired
};
/**
 * Recursively build up elements from props.components and accumulate `results` along the way.
 * @param {function} render
 * @param {Array.<ReactElement|Function>} remaining
 * @param {Array} [results]
 * @returns {ReactElement}
 */ function renderRecursive(render, remaining, results) {
    results = results || [];
    // Once components is exhausted, we can render out the results array.
    if (!remaining[0]) {
        return render(results);
    }
    // Continue recursion for remaining items.
    // results.concat([value]) ensures [...results, value] instead of [...results, ...value]
    function nextRender(value) {
        return renderRecursive(render, remaining.slice(1), results.concat([
            value
        ]));
    }
    // Each props.components entry is either an element or function [element factory]
    return typeof remaining[0] === 'function' ? remaining[0]({
        results: results,
        render: nextRender
    }) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"])(remaining[0], {
        children: nextRender
    });
}
}),
]);

//# sourceMappingURL=_165acd62._.js.map