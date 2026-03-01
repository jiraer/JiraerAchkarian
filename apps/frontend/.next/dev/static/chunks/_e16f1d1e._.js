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
"[project]/apps/frontend/node_modules/@react-three/fiber/dist/index-4f1a8e2f.esm.js [app-client] (ecmascript) <export z as useLoader>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useLoader",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$index$2d$4f1a8e2f$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"]
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

//# sourceMappingURL=_e16f1d1e._.js.map