(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/frontend/node_modules/react-slick/lib/initial-state.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var initialState = {
    animating: false,
    autoplaying: null,
    currentDirection: 0,
    currentLeft: null,
    currentSlide: 0,
    direction: 1,
    dragging: false,
    edgeDragged: false,
    initialized: false,
    lazyLoadedList: [],
    listHeight: null,
    listWidth: null,
    scrolling: false,
    slideCount: null,
    slideHeight: null,
    slideWidth: null,
    swipeLeft: null,
    swiped: false,
    // used by swipeEvent. differentites between touch and swipe.
    swiping: false,
    touchObject: {
        startX: 0,
        startY: 0,
        curX: 0,
        curY: 0
    },
    trackStyle: {},
    trackWidth: 0,
    targetSlide: 0
};
var _default = exports["default"] = initialState;
}),
"[project]/frontend/node_modules/lodash.debounce/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */ /** Used as the `TypeError` message for "Functions" methods. */ var FUNC_ERROR_TEXT = 'Expected a function';
/** Used as references for various `Number` constants. */ var NAN = 0 / 0;
/** `Object#toString` result references. */ var symbolTag = '[object Symbol]';
/** Used to match leading and trailing whitespace. */ var reTrim = /^\s+|\s+$/g;
/** Used to detect bad signed hexadecimal string values. */ var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
/** Used to detect binary string values. */ var reIsBinary = /^0b[01]+$/i;
/** Used to detect octal string values. */ var reIsOctal = /^0o[0-7]+$/i;
/** Built-in method references without a dependency on `root`. */ var freeParseInt = parseInt;
/** Detect free variable `global` from Node.js. */ var freeGlobal = ("TURBOPACK compile-time value", "object") == 'object' && /*TURBOPACK member replacement*/ __turbopack_context__.g && /*TURBOPACK member replacement*/ __turbopack_context__.g.Object === Object && /*TURBOPACK member replacement*/ __turbopack_context__.g;
/** Detect free variable `self`. */ var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */ var root = freeGlobal || freeSelf || Function('return this')();
/** Used for built-in method references. */ var objectProto = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var objectToString = objectProto.toString;
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeMax = Math.max, nativeMin = Math.min;
/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */ var now = function() {
    return root.Date.now();
};
/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */ function debounce(func, wait, options) {
    var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
    if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
    }
    wait = toNumber(wait) || 0;
    if (isObject(options)) {
        leading = !!options.leading;
        maxing = 'maxWait' in options;
        maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
        trailing = 'trailing' in options ? !!options.trailing : trailing;
    }
    function invokeFunc(time) {
        var args = lastArgs, thisArg = lastThis;
        lastArgs = lastThis = undefined;
        lastInvokeTime = time;
        result = func.apply(thisArg, args);
        return result;
    }
    function leadingEdge(time) {
        // Reset any `maxWait` timer.
        lastInvokeTime = time;
        // Start the timer for the trailing edge.
        timerId = setTimeout(timerExpired, wait);
        // Invoke the leading edge.
        return leading ? invokeFunc(time) : result;
    }
    function remainingWait(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, result = wait - timeSinceLastCall;
        return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
    }
    function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
        // Either this is the first call, activity has stopped and we're at the
        // trailing edge, the system time has gone backwards and we're treating
        // it as the trailing edge, or we've hit the `maxWait` limit.
        return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
    }
    function timerExpired() {
        var time = now();
        if (shouldInvoke(time)) {
            return trailingEdge(time);
        }
        // Restart the timer.
        timerId = setTimeout(timerExpired, remainingWait(time));
    }
    function trailingEdge(time) {
        timerId = undefined;
        // Only invoke if we have `lastArgs` which means `func` has been
        // debounced at least once.
        if (trailing && lastArgs) {
            return invokeFunc(time);
        }
        lastArgs = lastThis = undefined;
        return result;
    }
    function cancel() {
        if (timerId !== undefined) {
            clearTimeout(timerId);
        }
        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = undefined;
    }
    function flush() {
        return timerId === undefined ? result : trailingEdge(now());
    }
    function debounced() {
        var time = now(), isInvoking = shouldInvoke(time);
        lastArgs = arguments;
        lastThis = this;
        lastCallTime = time;
        if (isInvoking) {
            if (timerId === undefined) {
                return leadingEdge(lastCallTime);
            }
            if (maxing) {
                // Handle invocations in a tight loop.
                timerId = setTimeout(timerExpired, wait);
                return invokeFunc(lastCallTime);
            }
        }
        if (timerId === undefined) {
            timerId = setTimeout(timerExpired, wait);
        }
        return result;
    }
    debounced.cancel = cancel;
    debounced.flush = flush;
    return debounced;
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
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */ function toNumber(value) {
    if (typeof value == 'number') {
        return value;
    }
    if (isSymbol(value)) {
        return NAN;
    }
    if (isObject(value)) {
        var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
        value = isObject(other) ? other + '' : other;
    }
    if (typeof value != 'string') {
        return value === 0 ? value : +value;
    }
    value = value.replace(reTrim, '');
    var isBinary = reIsBinary.test(value);
    return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
module.exports = debounce;
}),
"[project]/frontend/node_modules/classnames/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ /* global define */ (function() {
    'use strict';
    var hasOwn = {}.hasOwnProperty;
    function classNames() {
        var classes = '';
        for(var i = 0; i < arguments.length; i++){
            var arg = arguments[i];
            if (arg) {
                classes = appendClass(classes, parseValue(arg));
            }
        }
        return classes;
    }
    function parseValue(arg) {
        if (typeof arg === 'string' || typeof arg === 'number') {
            return arg;
        }
        if (typeof arg !== 'object') {
            return '';
        }
        if (Array.isArray(arg)) {
            return classNames.apply(null, arg);
        }
        if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
            return arg.toString();
        }
        var classes = '';
        for(var key in arg){
            if (hasOwn.call(arg, key) && arg[key]) {
                classes = appendClass(classes, key);
            }
        }
        return classes;
    }
    function appendClass(value, newClass) {
        if (!newClass) {
            return value;
        }
        if (value) {
            return value + ' ' + newClass;
        }
        return value + newClass;
    }
    if (("TURBOPACK compile-time value", "object") !== 'undefined' && module.exports) {
        classNames.default = classNames;
        module.exports = classNames;
    } else if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
        // register as 'classnames', consistent with npm package name
        ((r)=>r !== undefined && __turbopack_context__.v(r))(function() {
            return classNames;
        }());
    } else {
        window.classNames = classNames;
    }
})();
}),
"[project]/frontend/node_modules/react-slick/lib/default-props.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(__turbopack_context__.r("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        "default": e
    };
}
var defaultProps = {
    accessibility: true,
    adaptiveHeight: false,
    afterChange: null,
    appendDots: function appendDots(dots) {
        return /*#__PURE__*/ _react["default"].createElement("ul", {
            style: {
                display: "block"
            }
        }, dots);
    },
    arrows: true,
    autoplay: false,
    autoplaySpeed: 3000,
    beforeChange: null,
    centerMode: false,
    centerPadding: "50px",
    className: "",
    cssEase: "ease",
    customPaging: function customPaging(i) {
        return /*#__PURE__*/ _react["default"].createElement("button", null, i + 1);
    },
    dots: false,
    dotsClass: "slick-dots",
    draggable: true,
    easing: "linear",
    edgeFriction: 0.35,
    fade: false,
    focusOnSelect: false,
    infinite: true,
    initialSlide: 0,
    lazyLoad: null,
    nextArrow: null,
    onEdge: null,
    onInit: null,
    onLazyLoadError: null,
    onReInit: null,
    pauseOnDotsHover: false,
    pauseOnFocus: false,
    pauseOnHover: true,
    prevArrow: null,
    responsive: null,
    rows: 1,
    rtl: false,
    slide: "div",
    slidesPerRow: 1,
    slidesToScroll: 1,
    slidesToShow: 1,
    speed: 500,
    swipe: true,
    swipeEvent: null,
    swipeToSlide: false,
    touchMove: true,
    touchThreshold: 5,
    useCSS: true,
    useTransform: true,
    variableWidth: false,
    vertical: false,
    verticalSwiping: false,
    waitForAnimate: true,
    asNavFor: null,
    unslick: false
};
var _default = exports["default"] = defaultProps;
}),
"[project]/frontend/node_modules/react-slick/lib/utils/innerSliderUtils.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.checkSpecKeys = exports.checkNavigable = exports.changeSlide = exports.canUseDOM = exports.canGoNext = void 0;
exports.clamp = clamp;
exports.extractObject = void 0;
exports.filterSettings = filterSettings;
exports.validSettings = exports.swipeStart = exports.swipeMove = exports.swipeEnd = exports.slidesOnRight = exports.slidesOnLeft = exports.slideHandler = exports.siblingDirection = exports.safePreventDefault = exports.lazyStartIndex = exports.lazySlidesOnRight = exports.lazySlidesOnLeft = exports.lazyEndIndex = exports.keyHandler = exports.initializedState = exports.getWidth = exports.getTrackLeft = exports.getTrackCSS = exports.getTrackAnimateCSS = exports.getTotalSlides = exports.getSwipeDirection = exports.getSlideCount = exports.getRequiredLazySlides = exports.getPreClones = exports.getPostClones = exports.getOnDemandLazySlides = exports.getNavigableIndexes = exports.getHeight = void 0;
var _react = _interopRequireDefault(__turbopack_context__.r("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
var _defaultProps = _interopRequireDefault(__turbopack_context__.r("[project]/frontend/node_modules/react-slick/lib/default-props.js [app-client] (ecmascript)"));
function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        "default": e
    };
}
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
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
function _objectSpread(e) {
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
function _defineProperty(e, r, t) {
    return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
function clamp(number, lowerBound, upperBound) {
    return Math.max(lowerBound, Math.min(number, upperBound));
}
var safePreventDefault = exports.safePreventDefault = function safePreventDefault(event) {
    var passiveEvents = [
        "onTouchStart",
        "onTouchMove",
        "onWheel"
    ];
    if (!passiveEvents.includes(event._reactName)) {
        event.preventDefault();
    }
};
var getOnDemandLazySlides = exports.getOnDemandLazySlides = function getOnDemandLazySlides(spec) {
    var onDemandSlides = [];
    var startIndex = lazyStartIndex(spec);
    var endIndex = lazyEndIndex(spec);
    for(var slideIndex = startIndex; slideIndex < endIndex; slideIndex++){
        if (spec.lazyLoadedList.indexOf(slideIndex) < 0) {
            onDemandSlides.push(slideIndex);
        }
    }
    return onDemandSlides;
};
// return list of slides that need to be present
var getRequiredLazySlides = exports.getRequiredLazySlides = function getRequiredLazySlides(spec) {
    var requiredSlides = [];
    var startIndex = lazyStartIndex(spec);
    var endIndex = lazyEndIndex(spec);
    for(var slideIndex = startIndex; slideIndex < endIndex; slideIndex++){
        requiredSlides.push(slideIndex);
    }
    return requiredSlides;
};
// startIndex that needs to be present
var lazyStartIndex = exports.lazyStartIndex = function lazyStartIndex(spec) {
    return spec.currentSlide - lazySlidesOnLeft(spec);
};
var lazyEndIndex = exports.lazyEndIndex = function lazyEndIndex(spec) {
    return spec.currentSlide + lazySlidesOnRight(spec);
};
var lazySlidesOnLeft = exports.lazySlidesOnLeft = function lazySlidesOnLeft(spec) {
    return spec.centerMode ? Math.floor(spec.slidesToShow / 2) + (parseInt(spec.centerPadding) > 0 ? 1 : 0) : 0;
};
var lazySlidesOnRight = exports.lazySlidesOnRight = function lazySlidesOnRight(spec) {
    return spec.centerMode ? Math.floor((spec.slidesToShow - 1) / 2) + 1 + (parseInt(spec.centerPadding) > 0 ? 1 : 0) : spec.slidesToShow;
};
// get width of an element
var getWidth = exports.getWidth = function getWidth(elem) {
    return elem && elem.offsetWidth || 0;
};
var getHeight = exports.getHeight = function getHeight(elem) {
    return elem && elem.offsetHeight || 0;
};
var getSwipeDirection = exports.getSwipeDirection = function getSwipeDirection(touchObject) {
    var verticalSwiping = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var xDist, yDist, r, swipeAngle;
    xDist = touchObject.startX - touchObject.curX;
    yDist = touchObject.startY - touchObject.curY;
    r = Math.atan2(yDist, xDist);
    swipeAngle = Math.round(r * 180 / Math.PI);
    if (swipeAngle < 0) {
        swipeAngle = 360 - Math.abs(swipeAngle);
    }
    if (swipeAngle <= 45 && swipeAngle >= 0 || swipeAngle <= 360 && swipeAngle >= 315) {
        return "left";
    }
    if (swipeAngle >= 135 && swipeAngle <= 225) {
        return "right";
    }
    if (verticalSwiping === true) {
        if (swipeAngle >= 35 && swipeAngle <= 135) {
            return "up";
        } else {
            return "down";
        }
    }
    return "vertical";
};
// whether or not we can go next
var canGoNext = exports.canGoNext = function canGoNext(spec) {
    var canGo = true;
    if (!spec.infinite) {
        if (spec.centerMode && spec.currentSlide >= spec.slideCount - 1) {
            canGo = false;
        } else if (spec.slideCount <= spec.slidesToShow || spec.currentSlide >= spec.slideCount - spec.slidesToShow) {
            canGo = false;
        }
    }
    return canGo;
};
// given an object and a list of keys, return new object with given keys
var extractObject = exports.extractObject = function extractObject(spec, keys) {
    var newObject = {};
    keys.forEach(function(key) {
        return newObject[key] = spec[key];
    });
    return newObject;
};
// get initialized state
var initializedState = exports.initializedState = function initializedState(spec) {
    // spec also contains listRef, trackRef
    var slideCount = _react["default"].Children.count(spec.children);
    var listNode = spec.listRef;
    var listWidth = Math.ceil(getWidth(listNode));
    var trackNode = spec.trackRef && spec.trackRef.node;
    var trackWidth = Math.ceil(getWidth(trackNode));
    var slideWidth;
    if (!spec.vertical) {
        var centerPaddingAdj = spec.centerMode && parseInt(spec.centerPadding) * 2;
        if (typeof spec.centerPadding === "string" && spec.centerPadding.slice(-1) === "%") {
            centerPaddingAdj *= listWidth / 100;
        }
        slideWidth = Math.ceil((listWidth - centerPaddingAdj) / spec.slidesToShow);
    } else {
        slideWidth = listWidth;
    }
    var slideHeight = listNode && getHeight(listNode.querySelector('[data-index="0"]'));
    var listHeight = slideHeight * spec.slidesToShow;
    var currentSlide = spec.currentSlide === undefined ? spec.initialSlide : spec.currentSlide;
    if (spec.rtl && spec.currentSlide === undefined) {
        currentSlide = slideCount - 1 - spec.initialSlide;
    }
    var lazyLoadedList = spec.lazyLoadedList || [];
    var slidesToLoad = getOnDemandLazySlides(_objectSpread(_objectSpread({}, spec), {}, {
        currentSlide: currentSlide,
        lazyLoadedList: lazyLoadedList
    }));
    lazyLoadedList = lazyLoadedList.concat(slidesToLoad);
    var state = {
        slideCount: slideCount,
        slideWidth: slideWidth,
        listWidth: listWidth,
        trackWidth: trackWidth,
        currentSlide: currentSlide,
        slideHeight: slideHeight,
        listHeight: listHeight,
        lazyLoadedList: lazyLoadedList
    };
    if (spec.autoplaying === null && spec.autoplay) {
        state["autoplaying"] = "playing";
    }
    return state;
};
var slideHandler = exports.slideHandler = function slideHandler(spec) {
    var waitForAnimate = spec.waitForAnimate, animating = spec.animating, fade = spec.fade, infinite = spec.infinite, index = spec.index, slideCount = spec.slideCount, lazyLoad = spec.lazyLoad, currentSlide = spec.currentSlide, centerMode = spec.centerMode, slidesToScroll = spec.slidesToScroll, slidesToShow = spec.slidesToShow, useCSS = spec.useCSS;
    var lazyLoadedList = spec.lazyLoadedList;
    if (waitForAnimate && animating) return {};
    var animationSlide = index, finalSlide, animationLeft, finalLeft;
    var state = {}, nextState = {};
    var targetSlide = infinite ? index : clamp(index, 0, slideCount - 1);
    if (fade) {
        if (!infinite && (index < 0 || index >= slideCount)) return {};
        if (index < 0) {
            animationSlide = index + slideCount;
        } else if (index >= slideCount) {
            animationSlide = index - slideCount;
        }
        if (lazyLoad && lazyLoadedList.indexOf(animationSlide) < 0) {
            lazyLoadedList = lazyLoadedList.concat(animationSlide);
        }
        state = {
            animating: true,
            currentSlide: animationSlide,
            lazyLoadedList: lazyLoadedList,
            targetSlide: animationSlide
        };
        nextState = {
            animating: false,
            targetSlide: animationSlide
        };
    } else {
        finalSlide = animationSlide;
        if (animationSlide < 0) {
            finalSlide = animationSlide + slideCount;
            if (!infinite) finalSlide = 0;
            else if (slideCount % slidesToScroll !== 0) finalSlide = slideCount - slideCount % slidesToScroll;
        } else if (!canGoNext(spec) && animationSlide > currentSlide) {
            animationSlide = finalSlide = currentSlide;
        } else if (centerMode && animationSlide >= slideCount) {
            animationSlide = infinite ? slideCount : slideCount - 1;
            finalSlide = infinite ? 0 : slideCount - 1;
        } else if (animationSlide >= slideCount) {
            finalSlide = animationSlide - slideCount;
            if (!infinite) finalSlide = slideCount - slidesToShow;
            else if (slideCount % slidesToScroll !== 0) finalSlide = 0;
        }
        if (!infinite && animationSlide + slidesToShow >= slideCount) {
            finalSlide = slideCount - slidesToShow;
        }
        animationLeft = getTrackLeft(_objectSpread(_objectSpread({}, spec), {}, {
            slideIndex: animationSlide
        }));
        finalLeft = getTrackLeft(_objectSpread(_objectSpread({}, spec), {}, {
            slideIndex: finalSlide
        }));
        if (!infinite) {
            if (animationLeft === finalLeft) animationSlide = finalSlide;
            animationLeft = finalLeft;
        }
        if (lazyLoad) {
            lazyLoadedList = lazyLoadedList.concat(getOnDemandLazySlides(_objectSpread(_objectSpread({}, spec), {}, {
                currentSlide: animationSlide
            })));
        }
        if (!useCSS) {
            state = {
                currentSlide: finalSlide,
                trackStyle: getTrackCSS(_objectSpread(_objectSpread({}, spec), {}, {
                    left: finalLeft
                })),
                lazyLoadedList: lazyLoadedList,
                targetSlide: targetSlide
            };
        } else {
            state = {
                animating: true,
                currentSlide: finalSlide,
                trackStyle: getTrackAnimateCSS(_objectSpread(_objectSpread({}, spec), {}, {
                    left: animationLeft
                })),
                lazyLoadedList: lazyLoadedList,
                targetSlide: targetSlide
            };
            nextState = {
                animating: false,
                currentSlide: finalSlide,
                trackStyle: getTrackCSS(_objectSpread(_objectSpread({}, spec), {}, {
                    left: finalLeft
                })),
                swipeLeft: null,
                targetSlide: targetSlide
            };
        }
    }
    return {
        state: state,
        nextState: nextState
    };
};
var changeSlide = exports.changeSlide = function changeSlide(spec, options) {
    var indexOffset, previousInt, slideOffset, unevenOffset, targetSlide;
    var slidesToScroll = spec.slidesToScroll, slidesToShow = spec.slidesToShow, slideCount = spec.slideCount, currentSlide = spec.currentSlide, previousTargetSlide = spec.targetSlide, lazyLoad = spec.lazyLoad, infinite = spec.infinite;
    unevenOffset = slideCount % slidesToScroll !== 0;
    indexOffset = unevenOffset ? 0 : (slideCount - currentSlide) % slidesToScroll;
    if (options.message === "previous") {
        slideOffset = indexOffset === 0 ? slidesToScroll : slidesToShow - indexOffset;
        targetSlide = currentSlide - slideOffset;
        if (lazyLoad && !infinite) {
            previousInt = currentSlide - slideOffset;
            targetSlide = previousInt === -1 ? slideCount - 1 : previousInt;
        }
        if (!infinite) {
            targetSlide = previousTargetSlide - slidesToScroll;
        }
    } else if (options.message === "next") {
        slideOffset = indexOffset === 0 ? slidesToScroll : indexOffset;
        targetSlide = currentSlide + slideOffset;
        if (lazyLoad && !infinite) {
            targetSlide = (currentSlide + slidesToScroll) % slideCount + indexOffset;
        }
        if (!infinite) {
            targetSlide = previousTargetSlide + slidesToScroll;
        }
    } else if (options.message === "dots") {
        // Click on dots
        targetSlide = options.index * options.slidesToScroll;
    } else if (options.message === "children") {
        // Click on the slides
        targetSlide = options.index;
        if (infinite) {
            var direction = siblingDirection(_objectSpread(_objectSpread({}, spec), {}, {
                targetSlide: targetSlide
            }));
            if (targetSlide > options.currentSlide && direction === "left") {
                targetSlide = targetSlide - slideCount;
            } else if (targetSlide < options.currentSlide && direction === "right") {
                targetSlide = targetSlide + slideCount;
            }
        }
    } else if (options.message === "index") {
        targetSlide = Number(options.index);
    }
    return targetSlide;
};
var keyHandler = exports.keyHandler = function keyHandler(e, accessibility, rtl) {
    if (e.target.tagName.match("TEXTAREA|INPUT|SELECT") || !accessibility) return "";
    if (e.keyCode === 37) return rtl ? "next" : "previous";
    if (e.keyCode === 39) return rtl ? "previous" : "next";
    return "";
};
var swipeStart = exports.swipeStart = function swipeStart(e, swipe, draggable) {
    e.target.tagName === "IMG" && safePreventDefault(e);
    if (!swipe || !draggable && e.type.indexOf("mouse") !== -1) return "";
    return {
        dragging: true,
        touchObject: {
            startX: e.touches ? e.touches[0].pageX : e.clientX,
            startY: e.touches ? e.touches[0].pageY : e.clientY,
            curX: e.touches ? e.touches[0].pageX : e.clientX,
            curY: e.touches ? e.touches[0].pageY : e.clientY
        }
    };
};
var swipeMove = exports.swipeMove = function swipeMove(e, spec) {
    // spec also contains, trackRef and slideIndex
    var scrolling = spec.scrolling, animating = spec.animating, vertical = spec.vertical, swipeToSlide = spec.swipeToSlide, verticalSwiping = spec.verticalSwiping, rtl = spec.rtl, currentSlide = spec.currentSlide, edgeFriction = spec.edgeFriction, edgeDragged = spec.edgeDragged, onEdge = spec.onEdge, swiped = spec.swiped, swiping = spec.swiping, slideCount = spec.slideCount, slidesToScroll = spec.slidesToScroll, infinite = spec.infinite, touchObject = spec.touchObject, swipeEvent = spec.swipeEvent, listHeight = spec.listHeight, listWidth = spec.listWidth;
    if (scrolling) return;
    if (animating) return safePreventDefault(e);
    if (vertical && swipeToSlide && verticalSwiping) safePreventDefault(e);
    var swipeLeft, state = {};
    var curLeft = getTrackLeft(spec);
    touchObject.curX = e.touches ? e.touches[0].pageX : e.clientX;
    touchObject.curY = e.touches ? e.touches[0].pageY : e.clientY;
    touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(touchObject.curX - touchObject.startX, 2)));
    var verticalSwipeLength = Math.round(Math.sqrt(Math.pow(touchObject.curY - touchObject.startY, 2)));
    if (!verticalSwiping && !swiping && verticalSwipeLength > 10) {
        return {
            scrolling: true
        };
    }
    if (verticalSwiping) touchObject.swipeLength = verticalSwipeLength;
    var positionOffset = (!rtl ? 1 : -1) * (touchObject.curX > touchObject.startX ? 1 : -1);
    if (verticalSwiping) positionOffset = touchObject.curY > touchObject.startY ? 1 : -1;
    var dotCount = Math.ceil(slideCount / slidesToScroll);
    var swipeDirection = getSwipeDirection(spec.touchObject, verticalSwiping);
    var touchSwipeLength = touchObject.swipeLength;
    if (!infinite) {
        if (currentSlide === 0 && (swipeDirection === "right" || swipeDirection === "down") || currentSlide + 1 >= dotCount && (swipeDirection === "left" || swipeDirection === "up") || !canGoNext(spec) && (swipeDirection === "left" || swipeDirection === "up")) {
            touchSwipeLength = touchObject.swipeLength * edgeFriction;
            if (edgeDragged === false && onEdge) {
                onEdge(swipeDirection);
                state["edgeDragged"] = true;
            }
        }
    }
    if (!swiped && swipeEvent) {
        swipeEvent(swipeDirection);
        state["swiped"] = true;
    }
    if (!vertical) {
        if (!rtl) {
            swipeLeft = curLeft + touchSwipeLength * positionOffset;
        } else {
            swipeLeft = curLeft - touchSwipeLength * positionOffset;
        }
    } else {
        swipeLeft = curLeft + touchSwipeLength * (listHeight / listWidth) * positionOffset;
    }
    if (verticalSwiping) {
        swipeLeft = curLeft + touchSwipeLength * positionOffset;
    }
    state = _objectSpread(_objectSpread({}, state), {}, {
        touchObject: touchObject,
        swipeLeft: swipeLeft,
        trackStyle: getTrackCSS(_objectSpread(_objectSpread({}, spec), {}, {
            left: swipeLeft
        }))
    });
    if (Math.abs(touchObject.curX - touchObject.startX) < Math.abs(touchObject.curY - touchObject.startY) * 0.8) {
        return state;
    }
    if (touchObject.swipeLength > 10) {
        state["swiping"] = true;
        safePreventDefault(e);
    }
    return state;
};
var swipeEnd = exports.swipeEnd = function swipeEnd(e, spec) {
    var dragging = spec.dragging, swipe = spec.swipe, touchObject = spec.touchObject, listWidth = spec.listWidth, touchThreshold = spec.touchThreshold, verticalSwiping = spec.verticalSwiping, listHeight = spec.listHeight, swipeToSlide = spec.swipeToSlide, scrolling = spec.scrolling, onSwipe = spec.onSwipe, targetSlide = spec.targetSlide, currentSlide = spec.currentSlide, infinite = spec.infinite;
    if (!dragging) {
        if (swipe) safePreventDefault(e);
        return {};
    }
    var minSwipe = verticalSwiping ? listHeight / touchThreshold : listWidth / touchThreshold;
    var swipeDirection = getSwipeDirection(touchObject, verticalSwiping);
    // reset the state of touch related state variables.
    var state = {
        dragging: false,
        edgeDragged: false,
        scrolling: false,
        swiping: false,
        swiped: false,
        swipeLeft: null,
        touchObject: {}
    };
    if (scrolling) {
        return state;
    }
    if (!touchObject.swipeLength) {
        return state;
    }
    if (touchObject.swipeLength > minSwipe) {
        safePreventDefault(e);
        if (onSwipe) {
            onSwipe(swipeDirection);
        }
        var slideCount, newSlide;
        var activeSlide = infinite ? currentSlide : targetSlide;
        switch(swipeDirection){
            case "left":
            case "up":
                newSlide = activeSlide + getSlideCount(spec);
                slideCount = swipeToSlide ? checkNavigable(spec, newSlide) : newSlide;
                state["currentDirection"] = 0;
                break;
            case "right":
            case "down":
                newSlide = activeSlide - getSlideCount(spec);
                slideCount = swipeToSlide ? checkNavigable(spec, newSlide) : newSlide;
                state["currentDirection"] = 1;
                break;
            default:
                slideCount = activeSlide;
        }
        state["triggerSlideHandler"] = slideCount;
    } else {
        // Adjust the track back to it's original position.
        var currentLeft = getTrackLeft(spec);
        state["trackStyle"] = getTrackAnimateCSS(_objectSpread(_objectSpread({}, spec), {}, {
            left: currentLeft
        }));
    }
    return state;
};
var getNavigableIndexes = exports.getNavigableIndexes = function getNavigableIndexes(spec) {
    var max = spec.infinite ? spec.slideCount * 2 : spec.slideCount;
    var breakpoint = spec.infinite ? spec.slidesToShow * -1 : 0;
    var counter = spec.infinite ? spec.slidesToShow * -1 : 0;
    var indexes = [];
    while(breakpoint < max){
        indexes.push(breakpoint);
        breakpoint = counter + spec.slidesToScroll;
        counter += Math.min(spec.slidesToScroll, spec.slidesToShow);
    }
    return indexes;
};
var checkNavigable = exports.checkNavigable = function checkNavigable(spec, index) {
    var navigables = getNavigableIndexes(spec);
    var prevNavigable = 0;
    if (index > navigables[navigables.length - 1]) {
        index = navigables[navigables.length - 1];
    } else {
        for(var n in navigables){
            if (index < navigables[n]) {
                index = prevNavigable;
                break;
            }
            prevNavigable = navigables[n];
        }
    }
    return index;
};
var getSlideCount = exports.getSlideCount = function getSlideCount(spec) {
    var centerOffset = spec.centerMode ? spec.slideWidth * Math.floor(spec.slidesToShow / 2) : 0;
    if (spec.swipeToSlide) {
        var swipedSlide;
        var slickList = spec.listRef;
        var slides = slickList.querySelectorAll && slickList.querySelectorAll(".slick-slide") || [];
        Array.from(slides).every(function(slide) {
            if (!spec.vertical) {
                if (slide.offsetLeft - centerOffset + getWidth(slide) / 2 > spec.swipeLeft * -1) {
                    swipedSlide = slide;
                    return false;
                }
            } else {
                if (slide.offsetTop + getHeight(slide) / 2 > spec.swipeLeft * -1) {
                    swipedSlide = slide;
                    return false;
                }
            }
            return true;
        });
        if (!swipedSlide) {
            return 0;
        }
        var currentIndex = spec.rtl === true ? spec.slideCount - spec.currentSlide : spec.currentSlide;
        var slidesTraversed = Math.abs(swipedSlide.dataset.index - currentIndex) || 1;
        return slidesTraversed;
    } else {
        return spec.slidesToScroll;
    }
};
var checkSpecKeys = exports.checkSpecKeys = function checkSpecKeys(spec, keysArray) {
    return keysArray.reduce(function(value, key) {
        return value && spec.hasOwnProperty(key);
    }, true) ? null : console.error("Keys Missing:", spec);
};
var getTrackCSS = exports.getTrackCSS = function getTrackCSS(spec) {
    checkSpecKeys(spec, [
        "left",
        "variableWidth",
        "slideCount",
        "slidesToShow",
        "slideWidth"
    ]);
    var trackWidth, trackHeight;
    if (!spec.vertical) {
        trackWidth = getTotalSlides(spec) * spec.slideWidth;
    } else {
        var trackChildren = spec.unslick ? spec.slideCount : spec.slideCount + 2 * spec.slidesToShow;
        trackHeight = trackChildren * spec.slideHeight;
    }
    var style = {
        opacity: 1,
        transition: "",
        WebkitTransition: ""
    };
    if (spec.useTransform) {
        var WebkitTransform = !spec.vertical ? "translate3d(" + spec.left + "px, 0px, 0px)" : "translate3d(0px, " + spec.left + "px, 0px)";
        var transform = !spec.vertical ? "translate3d(" + spec.left + "px, 0px, 0px)" : "translate3d(0px, " + spec.left + "px, 0px)";
        var msTransform = !spec.vertical ? "translateX(" + spec.left + "px)" : "translateY(" + spec.left + "px)";
        style = _objectSpread(_objectSpread({}, style), {}, {
            WebkitTransform: WebkitTransform,
            transform: transform,
            msTransform: msTransform
        });
    } else {
        if (spec.vertical) {
            style["top"] = spec.left;
        } else {
            style["left"] = spec.left;
        }
    }
    if (spec.fade) style = {
        opacity: 1
    };
    if (trackWidth) style.width = trackWidth;
    if (trackHeight) style.height = trackHeight;
    // Fallback for IE8
    if (window && !window.addEventListener && window.attachEvent) {
        if (!spec.vertical) {
            style.marginLeft = spec.left + "px";
        } else {
            style.marginTop = spec.left + "px";
        }
    }
    return style;
};
var getTrackAnimateCSS = exports.getTrackAnimateCSS = function getTrackAnimateCSS(spec) {
    checkSpecKeys(spec, [
        "left",
        "variableWidth",
        "slideCount",
        "slidesToShow",
        "slideWidth",
        "speed",
        "cssEase"
    ]);
    var style = getTrackCSS(spec);
    // useCSS is true by default so it can be undefined
    if (spec.useTransform) {
        style.WebkitTransition = "-webkit-transform " + spec.speed + "ms " + spec.cssEase;
        style.transition = "transform " + spec.speed + "ms " + spec.cssEase;
    } else {
        if (spec.vertical) {
            style.transition = "top " + spec.speed + "ms " + spec.cssEase;
        } else {
            style.transition = "left " + spec.speed + "ms " + spec.cssEase;
        }
    }
    return style;
};
var getTrackLeft = exports.getTrackLeft = function getTrackLeft(spec) {
    if (spec.unslick) {
        return 0;
    }
    checkSpecKeys(spec, [
        "slideIndex",
        "trackRef",
        "infinite",
        "centerMode",
        "slideCount",
        "slidesToShow",
        "slidesToScroll",
        "slideWidth",
        "listWidth",
        "variableWidth",
        "slideHeight"
    ]);
    var slideIndex = spec.slideIndex, trackRef = spec.trackRef, infinite = spec.infinite, centerMode = spec.centerMode, slideCount = spec.slideCount, slidesToShow = spec.slidesToShow, slidesToScroll = spec.slidesToScroll, slideWidth = spec.slideWidth, listWidth = spec.listWidth, variableWidth = spec.variableWidth, slideHeight = spec.slideHeight, fade = spec.fade, vertical = spec.vertical;
    var slideOffset = 0;
    var targetLeft;
    var targetSlide;
    var verticalOffset = 0;
    if (fade || spec.slideCount === 1) {
        return 0;
    }
    var slidesToOffset = 0;
    if (infinite) {
        slidesToOffset = -getPreClones(spec); // bring active slide to the beginning of visual area
        // if next scroll doesn't have enough children, just reach till the end of original slides instead of shifting slidesToScroll children
        if (slideCount % slidesToScroll !== 0 && slideIndex + slidesToScroll > slideCount) {
            slidesToOffset = -(slideIndex > slideCount ? slidesToShow - (slideIndex - slideCount) : slideCount % slidesToScroll);
        }
        // shift current slide to center of the frame
        if (centerMode) {
            slidesToOffset += parseInt(slidesToShow / 2);
        }
    } else {
        if (slideCount % slidesToScroll !== 0 && slideIndex + slidesToScroll > slideCount) {
            slidesToOffset = slidesToShow - slideCount % slidesToScroll;
        }
        if (centerMode) {
            slidesToOffset = parseInt(slidesToShow / 2);
        }
    }
    slideOffset = slidesToOffset * slideWidth;
    verticalOffset = slidesToOffset * slideHeight;
    if (!vertical) {
        targetLeft = slideIndex * slideWidth * -1 + slideOffset;
    } else {
        targetLeft = slideIndex * slideHeight * -1 + verticalOffset;
    }
    if (variableWidth === true) {
        var targetSlideIndex;
        var trackElem = trackRef && trackRef.node;
        targetSlideIndex = slideIndex + getPreClones(spec);
        targetSlide = trackElem && trackElem.childNodes[targetSlideIndex];
        targetLeft = targetSlide ? targetSlide.offsetLeft * -1 : 0;
        if (centerMode === true) {
            targetSlideIndex = infinite ? slideIndex + getPreClones(spec) : slideIndex;
            targetSlide = trackElem && trackElem.children[targetSlideIndex];
            targetLeft = 0;
            for(var slide = 0; slide < targetSlideIndex; slide++){
                targetLeft -= trackElem && trackElem.children[slide] && trackElem.children[slide].offsetWidth;
            }
            targetLeft -= parseInt(spec.centerPadding);
            targetLeft += targetSlide && (listWidth - targetSlide.offsetWidth) / 2;
        }
    }
    return targetLeft;
};
var getPreClones = exports.getPreClones = function getPreClones(spec) {
    if (spec.unslick || !spec.infinite) {
        return 0;
    }
    if (spec.variableWidth) {
        return spec.slideCount;
    }
    return spec.slidesToShow + (spec.centerMode ? 1 : 0);
};
var getPostClones = exports.getPostClones = function getPostClones(spec) {
    if (spec.unslick || !spec.infinite) {
        return 0;
    }
    if (spec.variableWidth) {
        return spec.slideCount;
    }
    return spec.slidesToShow + (spec.centerMode ? 1 : 0);
};
var getTotalSlides = exports.getTotalSlides = function getTotalSlides(spec) {
    return spec.slideCount === 1 ? 1 : getPreClones(spec) + spec.slideCount + getPostClones(spec);
};
var siblingDirection = exports.siblingDirection = function siblingDirection(spec) {
    if (spec.targetSlide > spec.currentSlide) {
        if (spec.targetSlide > spec.currentSlide + slidesOnRight(spec)) {
            return "left";
        }
        return "right";
    } else {
        if (spec.targetSlide < spec.currentSlide - slidesOnLeft(spec)) {
            return "right";
        }
        return "left";
    }
};
var slidesOnRight = exports.slidesOnRight = function slidesOnRight(_ref) {
    var slidesToShow = _ref.slidesToShow, centerMode = _ref.centerMode, rtl = _ref.rtl, centerPadding = _ref.centerPadding;
    // returns no of slides on the right of active slide
    if (centerMode) {
        var right = (slidesToShow - 1) / 2 + 1;
        if (parseInt(centerPadding) > 0) right += 1;
        if (rtl && slidesToShow % 2 === 0) right += 1;
        return right;
    }
    if (rtl) {
        return 0;
    }
    return slidesToShow - 1;
};
var slidesOnLeft = exports.slidesOnLeft = function slidesOnLeft(_ref2) {
    var slidesToShow = _ref2.slidesToShow, centerMode = _ref2.centerMode, rtl = _ref2.rtl, centerPadding = _ref2.centerPadding;
    // returns no of slides on the left of active slide
    if (centerMode) {
        var left = (slidesToShow - 1) / 2 + 1;
        if (parseInt(centerPadding) > 0) left += 1;
        if (!rtl && slidesToShow % 2 === 0) left += 1;
        return left;
    }
    if (rtl) {
        return slidesToShow - 1;
    }
    return 0;
};
var canUseDOM = exports.canUseDOM = function canUseDOM() {
    return !!(typeof window !== "undefined" && window.document && window.document.createElement);
};
var validSettings = exports.validSettings = Object.keys(_defaultProps["default"]);
function filterSettings(settings) {
    return validSettings.reduce(function(acc, settingName) {
        if (settings.hasOwnProperty(settingName)) {
            acc[settingName] = settings[settingName];
        }
        return acc;
    }, {});
}
}),
"[project]/frontend/node_modules/react-slick/lib/track.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Track = void 0;
var _react = _interopRequireDefault(__turbopack_context__.r("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
var _classnames = _interopRequireDefault(__turbopack_context__.r("[project]/frontend/node_modules/classnames/index.js [app-client] (ecmascript)"));
var _innerSliderUtils = __turbopack_context__.r("[project]/frontend/node_modules/react-slick/lib/utils/innerSliderUtils.js [app-client] (ecmascript)");
function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        "default": e
    };
}
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable", _extends.apply(null, arguments);
}
function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
function _inherits(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(t, "prototype", {
        writable: !1
    }), e && _setPrototypeOf(t, e);
}
function _setPrototypeOf(t, e) {
    return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
        return t.__proto__ = e, t;
    }, _setPrototypeOf(t, e);
}
function _createSuper(t) {
    var r = _isNativeReflectConstruct();
    return function() {
        var e, o = _getPrototypeOf(t);
        if (r) {
            var s = _getPrototypeOf(this).constructor;
            e = Reflect.construct(o, arguments, s);
        } else e = o.apply(this, arguments);
        return _possibleConstructorReturn(this, e);
    };
}
function _possibleConstructorReturn(t, e) {
    if (e && ("object" == _typeof(e) || "function" == typeof e)) return e;
    if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(t);
}
function _assertThisInitialized(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
function _isNativeReflectConstruct() {
    try {
        var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (t) {}
    return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {
        return !!t;
    })();
}
function _getPrototypeOf(t) {
    return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
        return t.__proto__ || Object.getPrototypeOf(t);
    }, _getPrototypeOf(t);
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
function _objectSpread(e) {
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
function _defineProperty(e, r, t) {
    return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
// given specifications/props for a slide, fetch all the classes that need to be applied to the slide
var getSlideClasses = function getSlideClasses(spec) {
    var slickActive, slickCenter, slickCloned;
    var centerOffset, index;
    if (spec.rtl) {
        index = spec.slideCount - 1 - spec.index;
    } else {
        index = spec.index;
    }
    slickCloned = index < 0 || index >= spec.slideCount;
    if (spec.centerMode) {
        centerOffset = Math.floor(spec.slidesToShow / 2);
        slickCenter = (index - spec.currentSlide) % spec.slideCount === 0;
        if (index > spec.currentSlide - centerOffset - 1 && index <= spec.currentSlide + centerOffset) {
            slickActive = true;
        }
    } else {
        slickActive = spec.currentSlide <= index && index < spec.currentSlide + spec.slidesToShow;
    }
    var focusedSlide;
    if (spec.targetSlide < 0) {
        focusedSlide = spec.targetSlide + spec.slideCount;
    } else if (spec.targetSlide >= spec.slideCount) {
        focusedSlide = spec.targetSlide - spec.slideCount;
    } else {
        focusedSlide = spec.targetSlide;
    }
    var slickCurrent = index === focusedSlide;
    return {
        "slick-slide": true,
        "slick-active": slickActive,
        "slick-center": slickCenter,
        "slick-cloned": slickCloned,
        "slick-current": slickCurrent // dubious in case of RTL
    };
};
var getSlideStyle = function getSlideStyle(spec) {
    var style = {};
    if (spec.variableWidth === undefined || spec.variableWidth === false) {
        style.width = spec.slideWidth;
    }
    if (spec.fade) {
        style.position = "relative";
        if (spec.vertical) {
            style.top = -spec.index * parseInt(spec.slideHeight);
        } else {
            style.left = -spec.index * parseInt(spec.slideWidth);
        }
        style.opacity = spec.currentSlide === spec.index ? 1 : 0;
        style.zIndex = spec.currentSlide === spec.index ? 999 : 998;
        if (spec.useCSS) {
            style.transition = "opacity " + spec.speed + "ms " + spec.cssEase + ", " + "visibility " + spec.speed + "ms " + spec.cssEase;
        }
    }
    return style;
};
var getKey = function getKey(child, fallbackKey) {
    return child.key || fallbackKey;
};
var renderSlides = function renderSlides(spec) {
    var key;
    var slides = [];
    var preCloneSlides = [];
    var postCloneSlides = [];
    var childrenCount = _react["default"].Children.count(spec.children);
    var startIndex = (0, _innerSliderUtils.lazyStartIndex)(spec);
    var endIndex = (0, _innerSliderUtils.lazyEndIndex)(spec);
    _react["default"].Children.forEach(spec.children, function(elem, index) {
        var child;
        var childOnClickOptions = {
            message: "children",
            index: index,
            slidesToScroll: spec.slidesToScroll,
            currentSlide: spec.currentSlide
        };
        // in case of lazyLoad, whether or not we want to fetch the slide
        if (!spec.lazyLoad || spec.lazyLoad && spec.lazyLoadedList.indexOf(index) >= 0) {
            child = elem;
        } else {
            child = /*#__PURE__*/ _react["default"].createElement("div", null);
        }
        var childStyle = getSlideStyle(_objectSpread(_objectSpread({}, spec), {}, {
            index: index
        }));
        var slideClass = child.props.className || "";
        var slideClasses = getSlideClasses(_objectSpread(_objectSpread({}, spec), {}, {
            index: index
        }));
        // push a cloned element of the desired slide
        slides.push(/*#__PURE__*/ _react["default"].cloneElement(child, {
            key: "original" + getKey(child, index),
            "data-index": index,
            className: (0, _classnames["default"])(slideClasses, slideClass),
            tabIndex: "-1",
            "aria-hidden": !slideClasses["slick-active"],
            style: _objectSpread(_objectSpread({
                outline: "none"
            }, child.props.style || {}), childStyle),
            onClick: function onClick(e) {
                child.props && child.props.onClick && child.props.onClick(e);
                if (spec.focusOnSelect) {
                    spec.focusOnSelect(childOnClickOptions);
                }
            }
        }));
        // if slide needs to be precloned or postcloned
        if (spec.infinite && childrenCount > 1 && spec.fade === false && !spec.unslick) {
            var preCloneNo = childrenCount - index;
            if (preCloneNo <= (0, _innerSliderUtils.getPreClones)(spec)) {
                key = -preCloneNo;
                if (key >= startIndex) {
                    child = elem;
                }
                slideClasses = getSlideClasses(_objectSpread(_objectSpread({}, spec), {}, {
                    index: key
                }));
                preCloneSlides.push(/*#__PURE__*/ _react["default"].cloneElement(child, {
                    key: "precloned" + getKey(child, key),
                    "data-index": key,
                    tabIndex: "-1",
                    className: (0, _classnames["default"])(slideClasses, slideClass),
                    "aria-hidden": !slideClasses["slick-active"],
                    style: _objectSpread(_objectSpread({}, child.props.style || {}), childStyle),
                    onClick: function onClick(e) {
                        child.props && child.props.onClick && child.props.onClick(e);
                        if (spec.focusOnSelect) {
                            spec.focusOnSelect(childOnClickOptions);
                        }
                    }
                }));
            }
            if (index < (0, _innerSliderUtils.getPostClones)(spec)) {
                key = childrenCount + index;
                if (key < endIndex) {
                    child = elem;
                }
                slideClasses = getSlideClasses(_objectSpread(_objectSpread({}, spec), {}, {
                    index: key
                }));
                postCloneSlides.push(/*#__PURE__*/ _react["default"].cloneElement(child, {
                    key: "postcloned" + getKey(child, key),
                    "data-index": key,
                    tabIndex: "-1",
                    className: (0, _classnames["default"])(slideClasses, slideClass),
                    "aria-hidden": !slideClasses["slick-active"],
                    style: _objectSpread(_objectSpread({}, child.props.style || {}), childStyle),
                    onClick: function onClick(e) {
                        child.props && child.props.onClick && child.props.onClick(e);
                        if (spec.focusOnSelect) {
                            spec.focusOnSelect(childOnClickOptions);
                        }
                    }
                }));
            }
        }
    });
    if (spec.rtl) {
        return preCloneSlides.concat(slides, postCloneSlides).reverse();
    } else {
        return preCloneSlides.concat(slides, postCloneSlides);
    }
};
var Track = exports.Track = /*#__PURE__*/ function(_React$PureComponent) {
    _inherits(Track, _React$PureComponent);
    var _super = _createSuper(Track);
    function Track() {
        var _this;
        _classCallCheck(this, Track);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        _this = _super.call.apply(_super, [
            this
        ].concat(args));
        _defineProperty(_assertThisInitialized(_this), "node", null);
        _defineProperty(_assertThisInitialized(_this), "handleRef", function(ref) {
            _this.node = ref;
        });
        return _this;
    }
    _createClass(Track, [
        {
            key: "render",
            value: function render() {
                var slides = renderSlides(this.props);
                var _this$props = this.props, onMouseEnter = _this$props.onMouseEnter, onMouseOver = _this$props.onMouseOver, onMouseLeave = _this$props.onMouseLeave;
                var mouseEvents = {
                    onMouseEnter: onMouseEnter,
                    onMouseOver: onMouseOver,
                    onMouseLeave: onMouseLeave
                };
                return /*#__PURE__*/ _react["default"].createElement("div", _extends({
                    ref: this.handleRef,
                    className: "slick-track",
                    style: this.props.trackStyle
                }, mouseEvents), slides);
            }
        }
    ]);
    return Track;
}(_react["default"].PureComponent);
}),
"[project]/frontend/node_modules/react-slick/lib/dots.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Dots = void 0;
var _react = _interopRequireDefault(__turbopack_context__.r("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
var _classnames = _interopRequireDefault(__turbopack_context__.r("[project]/frontend/node_modules/classnames/index.js [app-client] (ecmascript)"));
var _innerSliderUtils = __turbopack_context__.r("[project]/frontend/node_modules/react-slick/lib/utils/innerSliderUtils.js [app-client] (ecmascript)");
function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        "default": e
    };
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
function _objectSpread(e) {
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
function _defineProperty(e, r, t) {
    return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}
function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
function _inherits(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(t, "prototype", {
        writable: !1
    }), e && _setPrototypeOf(t, e);
}
function _setPrototypeOf(t, e) {
    return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
        return t.__proto__ = e, t;
    }, _setPrototypeOf(t, e);
}
function _createSuper(t) {
    var r = _isNativeReflectConstruct();
    return function() {
        var e, o = _getPrototypeOf(t);
        if (r) {
            var s = _getPrototypeOf(this).constructor;
            e = Reflect.construct(o, arguments, s);
        } else e = o.apply(this, arguments);
        return _possibleConstructorReturn(this, e);
    };
}
function _possibleConstructorReturn(t, e) {
    if (e && ("object" == _typeof(e) || "function" == typeof e)) return e;
    if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(t);
}
function _assertThisInitialized(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
function _isNativeReflectConstruct() {
    try {
        var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (t) {}
    return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {
        return !!t;
    })();
}
function _getPrototypeOf(t) {
    return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
        return t.__proto__ || Object.getPrototypeOf(t);
    }, _getPrototypeOf(t);
}
var getDotCount = function getDotCount(spec) {
    var dots;
    if (spec.infinite) {
        dots = Math.ceil(spec.slideCount / spec.slidesToScroll);
    } else {
        dots = Math.ceil((spec.slideCount - spec.slidesToShow) / spec.slidesToScroll) + 1;
    }
    return dots;
};
var Dots = exports.Dots = /*#__PURE__*/ function(_React$PureComponent) {
    _inherits(Dots, _React$PureComponent);
    var _super = _createSuper(Dots);
    function Dots() {
        _classCallCheck(this, Dots);
        return _super.apply(this, arguments);
    }
    _createClass(Dots, [
        {
            key: "clickHandler",
            value: function clickHandler(options, e) {
                // In Autoplay the focus stays on clicked button even after transition
                // to next slide. That only goes away by click somewhere outside
                e.preventDefault();
                this.props.clickHandler(options);
            }
        },
        {
            key: "render",
            value: function render() {
                var _this$props = this.props, onMouseEnter = _this$props.onMouseEnter, onMouseOver = _this$props.onMouseOver, onMouseLeave = _this$props.onMouseLeave, infinite = _this$props.infinite, slidesToScroll = _this$props.slidesToScroll, slidesToShow = _this$props.slidesToShow, slideCount = _this$props.slideCount, currentSlide = _this$props.currentSlide;
                var dotCount = getDotCount({
                    slideCount: slideCount,
                    slidesToScroll: slidesToScroll,
                    slidesToShow: slidesToShow,
                    infinite: infinite
                });
                var mouseEvents = {
                    onMouseEnter: onMouseEnter,
                    onMouseOver: onMouseOver,
                    onMouseLeave: onMouseLeave
                };
                var dots = [];
                for(var i = 0; i < dotCount; i++){
                    var _rightBound = (i + 1) * slidesToScroll - 1;
                    var rightBound = infinite ? _rightBound : (0, _innerSliderUtils.clamp)(_rightBound, 0, slideCount - 1);
                    var _leftBound = rightBound - (slidesToScroll - 1);
                    var leftBound = infinite ? _leftBound : (0, _innerSliderUtils.clamp)(_leftBound, 0, slideCount - 1);
                    var className = (0, _classnames["default"])({
                        "slick-active": infinite ? currentSlide >= leftBound && currentSlide <= rightBound : currentSlide === leftBound
                    });
                    var dotOptions = {
                        message: "dots",
                        index: i,
                        slidesToScroll: slidesToScroll,
                        currentSlide: currentSlide
                    };
                    var onClick = this.clickHandler.bind(this, dotOptions);
                    dots = dots.concat(/*#__PURE__*/ _react["default"].createElement("li", {
                        key: i,
                        className: className
                    }, /*#__PURE__*/ _react["default"].cloneElement(this.props.customPaging(i), {
                        onClick: onClick
                    })));
                }
                return /*#__PURE__*/ _react["default"].cloneElement(this.props.appendDots(dots), _objectSpread({
                    className: this.props.dotsClass
                }, mouseEvents));
            }
        }
    ]);
    return Dots;
}(_react["default"].PureComponent);
}),
"[project]/frontend/node_modules/react-slick/lib/arrows.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PrevArrow = exports.NextArrow = void 0;
var _react = _interopRequireDefault(__turbopack_context__.r("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
var _classnames = _interopRequireDefault(__turbopack_context__.r("[project]/frontend/node_modules/classnames/index.js [app-client] (ecmascript)"));
var _innerSliderUtils = __turbopack_context__.r("[project]/frontend/node_modules/react-slick/lib/utils/innerSliderUtils.js [app-client] (ecmascript)");
function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        "default": e
    };
}
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable", _extends.apply(null, arguments);
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
function _objectSpread(e) {
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
function _defineProperty(e, r, t) {
    return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}
function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
function _inherits(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(t, "prototype", {
        writable: !1
    }), e && _setPrototypeOf(t, e);
}
function _setPrototypeOf(t, e) {
    return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
        return t.__proto__ = e, t;
    }, _setPrototypeOf(t, e);
}
function _createSuper(t) {
    var r = _isNativeReflectConstruct();
    return function() {
        var e, o = _getPrototypeOf(t);
        if (r) {
            var s = _getPrototypeOf(this).constructor;
            e = Reflect.construct(o, arguments, s);
        } else e = o.apply(this, arguments);
        return _possibleConstructorReturn(this, e);
    };
}
function _possibleConstructorReturn(t, e) {
    if (e && ("object" == _typeof(e) || "function" == typeof e)) return e;
    if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(t);
}
function _assertThisInitialized(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
function _isNativeReflectConstruct() {
    try {
        var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (t) {}
    return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {
        return !!t;
    })();
}
function _getPrototypeOf(t) {
    return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
        return t.__proto__ || Object.getPrototypeOf(t);
    }, _getPrototypeOf(t);
}
var PrevArrow = exports.PrevArrow = /*#__PURE__*/ function(_React$PureComponent) {
    _inherits(PrevArrow, _React$PureComponent);
    var _super = _createSuper(PrevArrow);
    function PrevArrow() {
        _classCallCheck(this, PrevArrow);
        return _super.apply(this, arguments);
    }
    _createClass(PrevArrow, [
        {
            key: "clickHandler",
            value: function clickHandler(options, e) {
                if (e) {
                    e.preventDefault();
                }
                this.props.clickHandler(options, e);
            }
        },
        {
            key: "render",
            value: function render() {
                var prevClasses = {
                    "slick-arrow": true,
                    "slick-prev": true
                };
                var prevHandler = this.clickHandler.bind(this, {
                    message: "previous"
                });
                if (!this.props.infinite && (this.props.currentSlide === 0 || this.props.slideCount <= this.props.slidesToShow)) {
                    prevClasses["slick-disabled"] = true;
                    prevHandler = null;
                }
                var prevArrowProps = {
                    key: "0",
                    "data-role": "none",
                    className: (0, _classnames["default"])(prevClasses),
                    style: {
                        display: "block"
                    },
                    onClick: prevHandler
                };
                var customProps = {
                    currentSlide: this.props.currentSlide,
                    slideCount: this.props.slideCount
                };
                var prevArrow;
                if (this.props.prevArrow) {
                    prevArrow = /*#__PURE__*/ _react["default"].cloneElement(this.props.prevArrow, _objectSpread(_objectSpread({}, prevArrowProps), customProps));
                } else {
                    prevArrow = /*#__PURE__*/ _react["default"].createElement("button", _extends({
                        key: "0",
                        type: "button"
                    }, prevArrowProps), " ", "Previous");
                }
                return prevArrow;
            }
        }
    ]);
    return PrevArrow;
}(_react["default"].PureComponent);
var NextArrow = exports.NextArrow = /*#__PURE__*/ function(_React$PureComponent2) {
    _inherits(NextArrow, _React$PureComponent2);
    var _super2 = _createSuper(NextArrow);
    function NextArrow() {
        _classCallCheck(this, NextArrow);
        return _super2.apply(this, arguments);
    }
    _createClass(NextArrow, [
        {
            key: "clickHandler",
            value: function clickHandler(options, e) {
                if (e) {
                    e.preventDefault();
                }
                this.props.clickHandler(options, e);
            }
        },
        {
            key: "render",
            value: function render() {
                var nextClasses = {
                    "slick-arrow": true,
                    "slick-next": true
                };
                var nextHandler = this.clickHandler.bind(this, {
                    message: "next"
                });
                if (!(0, _innerSliderUtils.canGoNext)(this.props)) {
                    nextClasses["slick-disabled"] = true;
                    nextHandler = null;
                }
                var nextArrowProps = {
                    key: "1",
                    "data-role": "none",
                    className: (0, _classnames["default"])(nextClasses),
                    style: {
                        display: "block"
                    },
                    onClick: nextHandler
                };
                var customProps = {
                    currentSlide: this.props.currentSlide,
                    slideCount: this.props.slideCount
                };
                var nextArrow;
                if (this.props.nextArrow) {
                    nextArrow = /*#__PURE__*/ _react["default"].cloneElement(this.props.nextArrow, _objectSpread(_objectSpread({}, nextArrowProps), customProps));
                } else {
                    nextArrow = /*#__PURE__*/ _react["default"].createElement("button", _extends({
                        key: "1",
                        type: "button"
                    }, nextArrowProps), " ", "Next");
                }
                return nextArrow;
            }
        }
    ]);
    return NextArrow;
}(_react["default"].PureComponent);
}),
"[project]/frontend/node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * A collection of shims that provide minimal functionality of the ES6 collections.
 *
 * These implementations are not meant to be used outside of the ResizeObserver
 * modules as they cover only a limited range of use cases.
 */ /* eslint-disable require-jsdoc, valid-jsdoc */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var MapShim = function() {
    if (typeof Map !== 'undefined') {
        return Map;
    }
    /**
     * Returns index in provided array that matches the specified key.
     *
     * @param {Array<Array>} arr
     * @param {*} key
     * @returns {number}
     */ function getIndex(arr, key) {
        var result = -1;
        arr.some(function(entry, index) {
            if (entry[0] === key) {
                result = index;
                return true;
            }
            return false;
        });
        return result;
    }
    return function() {
        function class_1() {
            this.__entries__ = [];
        }
        Object.defineProperty(class_1.prototype, "size", {
            /**
             * @returns {boolean}
             */ get: function() {
                return this.__entries__.length;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {*} key
         * @returns {*}
         */ class_1.prototype.get = function(key) {
            var index = getIndex(this.__entries__, key);
            var entry = this.__entries__[index];
            return entry && entry[1];
        };
        /**
         * @param {*} key
         * @param {*} value
         * @returns {void}
         */ class_1.prototype.set = function(key, value) {
            var index = getIndex(this.__entries__, key);
            if (~index) {
                this.__entries__[index][1] = value;
            } else {
                this.__entries__.push([
                    key,
                    value
                ]);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */ class_1.prototype.delete = function(key) {
            var entries = this.__entries__;
            var index = getIndex(entries, key);
            if (~index) {
                entries.splice(index, 1);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */ class_1.prototype.has = function(key) {
            return !!~getIndex(this.__entries__, key);
        };
        /**
         * @returns {void}
         */ class_1.prototype.clear = function() {
            this.__entries__.splice(0);
        };
        /**
         * @param {Function} callback
         * @param {*} [ctx=null]
         * @returns {void}
         */ class_1.prototype.forEach = function(callback, ctx) {
            if (ctx === void 0) {
                ctx = null;
            }
            for(var _i = 0, _a = this.__entries__; _i < _a.length; _i++){
                var entry = _a[_i];
                callback.call(ctx, entry[1], entry[0]);
            }
        };
        return class_1;
    }();
}();
/**
 * Detects whether window and document objects are available in current environment.
 */ var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document;
// Returns global object of a current environment.
var global$1 = function() {
    if (("TURBOPACK compile-time value", "object") !== 'undefined' && /*TURBOPACK member replacement*/ __turbopack_context__.g.Math === Math) {
        return /*TURBOPACK member replacement*/ __turbopack_context__.g;
    }
    if (typeof self !== 'undefined' && self.Math === Math) {
        return self;
    }
    if (typeof window !== 'undefined' && window.Math === Math) {
        return window;
    }
    // eslint-disable-next-line no-new-func
    return Function('return this')();
}();
/**
 * A shim for the requestAnimationFrame which falls back to the setTimeout if
 * first one is not supported.
 *
 * @returns {number} Requests' identifier.
 */ var requestAnimationFrame$1 = function() {
    if (typeof requestAnimationFrame === 'function') {
        // It's required to use a bounded function because IE sometimes throws
        // an "Invalid calling object" error if rAF is invoked without the global
        // object on the left hand side.
        return requestAnimationFrame.bind(global$1);
    }
    return function(callback) {
        return setTimeout(function() {
            return callback(Date.now());
        }, 1000 / 60);
    };
}();
// Defines minimum timeout before adding a trailing call.
var trailingTimeout = 2;
/**
 * Creates a wrapper function which ensures that provided callback will be
 * invoked only once during the specified delay period.
 *
 * @param {Function} callback - Function to be invoked after the delay period.
 * @param {number} delay - Delay after which to invoke callback.
 * @returns {Function}
 */ function throttle(callback, delay) {
    var leadingCall = false, trailingCall = false, lastCallTime = 0;
    /**
     * Invokes the original callback function and schedules new invocation if
     * the "proxy" was called during current request.
     *
     * @returns {void}
     */ function resolvePending() {
        if (leadingCall) {
            leadingCall = false;
            callback();
        }
        if (trailingCall) {
            proxy();
        }
    }
    /**
     * Callback invoked after the specified delay. It will further postpone
     * invocation of the original function delegating it to the
     * requestAnimationFrame.
     *
     * @returns {void}
     */ function timeoutCallback() {
        requestAnimationFrame$1(resolvePending);
    }
    /**
     * Schedules invocation of the original function.
     *
     * @returns {void}
     */ function proxy() {
        var timeStamp = Date.now();
        if (leadingCall) {
            // Reject immediately following calls.
            if (timeStamp - lastCallTime < trailingTimeout) {
                return;
            }
            // Schedule new call to be in invoked when the pending one is resolved.
            // This is important for "transitions" which never actually start
            // immediately so there is a chance that we might miss one if change
            // happens amids the pending invocation.
            trailingCall = true;
        } else {
            leadingCall = true;
            trailingCall = false;
            setTimeout(timeoutCallback, delay);
        }
        lastCallTime = timeStamp;
    }
    return proxy;
}
// Minimum delay before invoking the update of observers.
var REFRESH_DELAY = 20;
// A list of substrings of CSS properties used to find transition events that
// might affect dimensions of observed elements.
var transitionKeys = [
    'top',
    'right',
    'bottom',
    'left',
    'width',
    'height',
    'size',
    'weight'
];
// Check if MutationObserver is available.
var mutationObserverSupported = typeof MutationObserver !== 'undefined';
/**
 * Singleton controller class which handles updates of ResizeObserver instances.
 */ var ResizeObserverController = function() {
    /**
     * Creates a new instance of ResizeObserverController.
     *
     * @private
     */ function ResizeObserverController() {
        /**
         * Indicates whether DOM listeners have been added.
         *
         * @private {boolean}
         */ this.connected_ = false;
        /**
         * Tells that controller has subscribed for Mutation Events.
         *
         * @private {boolean}
         */ this.mutationEventsAdded_ = false;
        /**
         * Keeps reference to the instance of MutationObserver.
         *
         * @private {MutationObserver}
         */ this.mutationsObserver_ = null;
        /**
         * A list of connected observers.
         *
         * @private {Array<ResizeObserverSPI>}
         */ this.observers_ = [];
        this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
        this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
    }
    /**
     * Adds observer to observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be added.
     * @returns {void}
     */ ResizeObserverController.prototype.addObserver = function(observer) {
        if (!~this.observers_.indexOf(observer)) {
            this.observers_.push(observer);
        }
        // Add listeners if they haven't been added yet.
        if (!this.connected_) {
            this.connect_();
        }
    };
    /**
     * Removes observer from observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be removed.
     * @returns {void}
     */ ResizeObserverController.prototype.removeObserver = function(observer) {
        var observers = this.observers_;
        var index = observers.indexOf(observer);
        // Remove observer if it's present in registry.
        if (~index) {
            observers.splice(index, 1);
        }
        // Remove listeners if controller has no connected observers.
        if (!observers.length && this.connected_) {
            this.disconnect_();
        }
    };
    /**
     * Invokes the update of observers. It will continue running updates insofar
     * it detects changes.
     *
     * @returns {void}
     */ ResizeObserverController.prototype.refresh = function() {
        var changesDetected = this.updateObservers_();
        // Continue running updates if changes have been detected as there might
        // be future ones caused by CSS transitions.
        if (changesDetected) {
            this.refresh();
        }
    };
    /**
     * Updates every observer from observers list and notifies them of queued
     * entries.
     *
     * @private
     * @returns {boolean} Returns "true" if any observer has detected changes in
     *      dimensions of it's elements.
     */ ResizeObserverController.prototype.updateObservers_ = function() {
        // Collect observers that have active observations.
        var activeObservers = this.observers_.filter(function(observer) {
            return observer.gatherActive(), observer.hasActive();
        });
        // Deliver notifications in a separate cycle in order to avoid any
        // collisions between observers, e.g. when multiple instances of
        // ResizeObserver are tracking the same element and the callback of one
        // of them changes content dimensions of the observed target. Sometimes
        // this may result in notifications being blocked for the rest of observers.
        activeObservers.forEach(function(observer) {
            return observer.broadcastActive();
        });
        return activeObservers.length > 0;
    };
    /**
     * Initializes DOM listeners.
     *
     * @private
     * @returns {void}
     */ ResizeObserverController.prototype.connect_ = function() {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already added.
        if (!isBrowser || this.connected_) {
            return;
        }
        // Subscription to the "Transitionend" event is used as a workaround for
        // delayed transitions. This way it's possible to capture at least the
        // final state of an element.
        document.addEventListener('transitionend', this.onTransitionEnd_);
        window.addEventListener('resize', this.refresh);
        if (mutationObserverSupported) {
            this.mutationsObserver_ = new MutationObserver(this.refresh);
            this.mutationsObserver_.observe(document, {
                attributes: true,
                childList: true,
                characterData: true,
                subtree: true
            });
        } else {
            document.addEventListener('DOMSubtreeModified', this.refresh);
            this.mutationEventsAdded_ = true;
        }
        this.connected_ = true;
    };
    /**
     * Removes DOM listeners.
     *
     * @private
     * @returns {void}
     */ ResizeObserverController.prototype.disconnect_ = function() {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already removed.
        if (!isBrowser || !this.connected_) {
            return;
        }
        document.removeEventListener('transitionend', this.onTransitionEnd_);
        window.removeEventListener('resize', this.refresh);
        if (this.mutationsObserver_) {
            this.mutationsObserver_.disconnect();
        }
        if (this.mutationEventsAdded_) {
            document.removeEventListener('DOMSubtreeModified', this.refresh);
        }
        this.mutationsObserver_ = null;
        this.mutationEventsAdded_ = false;
        this.connected_ = false;
    };
    /**
     * "Transitionend" event handler.
     *
     * @private
     * @param {TransitionEvent} event
     * @returns {void}
     */ ResizeObserverController.prototype.onTransitionEnd_ = function(_a) {
        var _b = _a.propertyName, propertyName = _b === void 0 ? '' : _b;
        // Detect whether transition may affect dimensions of an element.
        var isReflowProperty = transitionKeys.some(function(key) {
            return !!~propertyName.indexOf(key);
        });
        if (isReflowProperty) {
            this.refresh();
        }
    };
    /**
     * Returns instance of the ResizeObserverController.
     *
     * @returns {ResizeObserverController}
     */ ResizeObserverController.getInstance = function() {
        if (!this.instance_) {
            this.instance_ = new ResizeObserverController();
        }
        return this.instance_;
    };
    /**
     * Holds reference to the controller's instance.
     *
     * @private {ResizeObserverController}
     */ ResizeObserverController.instance_ = null;
    return ResizeObserverController;
}();
/**
 * Defines non-writable/enumerable properties of the provided target object.
 *
 * @param {Object} target - Object for which to define properties.
 * @param {Object} props - Properties to be defined.
 * @returns {Object} Target object.
 */ var defineConfigurable = function(target, props) {
    for(var _i = 0, _a = Object.keys(props); _i < _a.length; _i++){
        var key = _a[_i];
        Object.defineProperty(target, key, {
            value: props[key],
            enumerable: false,
            writable: false,
            configurable: true
        });
    }
    return target;
};
/**
 * Returns the global object associated with provided element.
 *
 * @param {Object} target
 * @returns {Object}
 */ var getWindowOf = function(target) {
    // Assume that the element is an instance of Node, which means that it
    // has the "ownerDocument" property from which we can retrieve a
    // corresponding global object.
    var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;
    // Return the local global object if it's not possible extract one from
    // provided element.
    return ownerGlobal || global$1;
};
// Placeholder of an empty content rectangle.
var emptyRect = createRectInit(0, 0, 0, 0);
/**
 * Converts provided string to a number.
 *
 * @param {number|string} value
 * @returns {number}
 */ function toFloat(value) {
    return parseFloat(value) || 0;
}
/**
 * Extracts borders size from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @param {...string} positions - Borders positions (top, right, ...)
 * @returns {number}
 */ function getBordersSize(styles) {
    var positions = [];
    for(var _i = 1; _i < arguments.length; _i++){
        positions[_i - 1] = arguments[_i];
    }
    return positions.reduce(function(size, position) {
        var value = styles['border-' + position + '-width'];
        return size + toFloat(value);
    }, 0);
}
/**
 * Extracts paddings sizes from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @returns {Object} Paddings box.
 */ function getPaddings(styles) {
    var positions = [
        'top',
        'right',
        'bottom',
        'left'
    ];
    var paddings = {};
    for(var _i = 0, positions_1 = positions; _i < positions_1.length; _i++){
        var position = positions_1[_i];
        var value = styles['padding-' + position];
        paddings[position] = toFloat(value);
    }
    return paddings;
}
/**
 * Calculates content rectangle of provided SVG element.
 *
 * @param {SVGGraphicsElement} target - Element content rectangle of which needs
 *      to be calculated.
 * @returns {DOMRectInit}
 */ function getSVGContentRect(target) {
    var bbox = target.getBBox();
    return createRectInit(0, 0, bbox.width, bbox.height);
}
/**
 * Calculates content rectangle of provided HTMLElement.
 *
 * @param {HTMLElement} target - Element for which to calculate the content rectangle.
 * @returns {DOMRectInit}
 */ function getHTMLElementContentRect(target) {
    // Client width & height properties can't be
    // used exclusively as they provide rounded values.
    var clientWidth = target.clientWidth, clientHeight = target.clientHeight;
    // By this condition we can catch all non-replaced inline, hidden and
    // detached elements. Though elements with width & height properties less
    // than 0.5 will be discarded as well.
    //
    // Without it we would need to implement separate methods for each of
    // those cases and it's not possible to perform a precise and performance
    // effective test for hidden elements. E.g. even jQuery's ':visible' filter
    // gives wrong results for elements with width & height less than 0.5.
    if (!clientWidth && !clientHeight) {
        return emptyRect;
    }
    var styles = getWindowOf(target).getComputedStyle(target);
    var paddings = getPaddings(styles);
    var horizPad = paddings.left + paddings.right;
    var vertPad = paddings.top + paddings.bottom;
    // Computed styles of width & height are being used because they are the
    // only dimensions available to JS that contain non-rounded values. It could
    // be possible to utilize the getBoundingClientRect if only it's data wasn't
    // affected by CSS transformations let alone paddings, borders and scroll bars.
    var width = toFloat(styles.width), height = toFloat(styles.height);
    // Width & height include paddings and borders when the 'border-box' box
    // model is applied (except for IE).
    if (styles.boxSizing === 'border-box') {
        // Following conditions are required to handle Internet Explorer which
        // doesn't include paddings and borders to computed CSS dimensions.
        //
        // We can say that if CSS dimensions + paddings are equal to the "client"
        // properties then it's either IE, and thus we don't need to subtract
        // anything, or an element merely doesn't have paddings/borders styles.
        if (Math.round(width + horizPad) !== clientWidth) {
            width -= getBordersSize(styles, 'left', 'right') + horizPad;
        }
        if (Math.round(height + vertPad) !== clientHeight) {
            height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
        }
    }
    // Following steps can't be applied to the document's root element as its
    // client[Width/Height] properties represent viewport area of the window.
    // Besides, it's as well not necessary as the <html> itself neither has
    // rendered scroll bars nor it can be clipped.
    if (!isDocumentElement(target)) {
        // In some browsers (only in Firefox, actually) CSS width & height
        // include scroll bars size which can be removed at this step as scroll
        // bars are the only difference between rounded dimensions + paddings
        // and "client" properties, though that is not always true in Chrome.
        var vertScrollbar = Math.round(width + horizPad) - clientWidth;
        var horizScrollbar = Math.round(height + vertPad) - clientHeight;
        // Chrome has a rather weird rounding of "client" properties.
        // E.g. for an element with content width of 314.2px it sometimes gives
        // the client width of 315px and for the width of 314.7px it may give
        // 314px. And it doesn't happen all the time. So just ignore this delta
        // as a non-relevant.
        if (Math.abs(vertScrollbar) !== 1) {
            width -= vertScrollbar;
        }
        if (Math.abs(horizScrollbar) !== 1) {
            height -= horizScrollbar;
        }
    }
    return createRectInit(paddings.left, paddings.top, width, height);
}
/**
 * Checks whether provided element is an instance of the SVGGraphicsElement.
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */ var isSVGGraphicsElement = function() {
    // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
    // interface.
    if (typeof SVGGraphicsElement !== 'undefined') {
        return function(target) {
            return target instanceof getWindowOf(target).SVGGraphicsElement;
        };
    }
    // If it's so, then check that element is at least an instance of the
    // SVGElement and that it has the "getBBox" method.
    // eslint-disable-next-line no-extra-parens
    return function(target) {
        return target instanceof getWindowOf(target).SVGElement && typeof target.getBBox === 'function';
    };
}();
/**
 * Checks whether provided element is a document element (<html>).
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */ function isDocumentElement(target) {
    return target === getWindowOf(target).document.documentElement;
}
/**
 * Calculates an appropriate content rectangle for provided html or svg element.
 *
 * @param {Element} target - Element content rectangle of which needs to be calculated.
 * @returns {DOMRectInit}
 */ function getContentRect(target) {
    if (!isBrowser) {
        return emptyRect;
    }
    if (isSVGGraphicsElement(target)) {
        return getSVGContentRect(target);
    }
    return getHTMLElementContentRect(target);
}
/**
 * Creates rectangle with an interface of the DOMRectReadOnly.
 * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
 *
 * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
 * @returns {DOMRectReadOnly}
 */ function createReadOnlyRect(_a) {
    var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
    // If DOMRectReadOnly is available use it as a prototype for the rectangle.
    var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
    var rect = Object.create(Constr.prototype);
    // Rectangle's properties are not writable and non-enumerable.
    defineConfigurable(rect, {
        x: x,
        y: y,
        width: width,
        height: height,
        top: y,
        right: x + width,
        bottom: height + y,
        left: x
    });
    return rect;
}
/**
 * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
 * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
 *
 * @param {number} x - X coordinate.
 * @param {number} y - Y coordinate.
 * @param {number} width - Rectangle's width.
 * @param {number} height - Rectangle's height.
 * @returns {DOMRectInit}
 */ function createRectInit(x, y, width, height) {
    return {
        x: x,
        y: y,
        width: width,
        height: height
    };
}
/**
 * Class that is responsible for computations of the content rectangle of
 * provided DOM element and for keeping track of it's changes.
 */ var ResizeObservation = function() {
    /**
     * Creates an instance of ResizeObservation.
     *
     * @param {Element} target - Element to be observed.
     */ function ResizeObservation(target) {
        /**
         * Broadcasted width of content rectangle.
         *
         * @type {number}
         */ this.broadcastWidth = 0;
        /**
         * Broadcasted height of content rectangle.
         *
         * @type {number}
         */ this.broadcastHeight = 0;
        /**
         * Reference to the last observed content rectangle.
         *
         * @private {DOMRectInit}
         */ this.contentRect_ = createRectInit(0, 0, 0, 0);
        this.target = target;
    }
    /**
     * Updates content rectangle and tells whether it's width or height properties
     * have changed since the last broadcast.
     *
     * @returns {boolean}
     */ ResizeObservation.prototype.isActive = function() {
        var rect = getContentRect(this.target);
        this.contentRect_ = rect;
        return rect.width !== this.broadcastWidth || rect.height !== this.broadcastHeight;
    };
    /**
     * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
     * from the corresponding properties of the last observed content rectangle.
     *
     * @returns {DOMRectInit} Last observed content rectangle.
     */ ResizeObservation.prototype.broadcastRect = function() {
        var rect = this.contentRect_;
        this.broadcastWidth = rect.width;
        this.broadcastHeight = rect.height;
        return rect;
    };
    return ResizeObservation;
}();
var ResizeObserverEntry = function() {
    /**
     * Creates an instance of ResizeObserverEntry.
     *
     * @param {Element} target - Element that is being observed.
     * @param {DOMRectInit} rectInit - Data of the element's content rectangle.
     */ function ResizeObserverEntry(target, rectInit) {
        var contentRect = createReadOnlyRect(rectInit);
        // According to the specification following properties are not writable
        // and are also not enumerable in the native implementation.
        //
        // Property accessors are not being used as they'd require to define a
        // private WeakMap storage which may cause memory leaks in browsers that
        // don't support this type of collections.
        defineConfigurable(this, {
            target: target,
            contentRect: contentRect
        });
    }
    return ResizeObserverEntry;
}();
var ResizeObserverSPI = function() {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback function that is invoked
     *      when one of the observed elements changes it's content dimensions.
     * @param {ResizeObserverController} controller - Controller instance which
     *      is responsible for the updates of observer.
     * @param {ResizeObserver} callbackCtx - Reference to the public
     *      ResizeObserver instance which will be passed to callback function.
     */ function ResizeObserverSPI(callback, controller, callbackCtx) {
        /**
         * Collection of resize observations that have detected changes in dimensions
         * of elements.
         *
         * @private {Array<ResizeObservation>}
         */ this.activeObservations_ = [];
        /**
         * Registry of the ResizeObservation instances.
         *
         * @private {Map<Element, ResizeObservation>}
         */ this.observations_ = new MapShim();
        if (typeof callback !== 'function') {
            throw new TypeError('The callback provided as parameter 1 is not a function.');
        }
        this.callback_ = callback;
        this.controller_ = controller;
        this.callbackCtx_ = callbackCtx;
    }
    /**
     * Starts observing provided element.
     *
     * @param {Element} target - Element to be observed.
     * @returns {void}
     */ ResizeObserverSPI.prototype.observe = function(target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is already being observed.
        if (observations.has(target)) {
            return;
        }
        observations.set(target, new ResizeObservation(target));
        this.controller_.addObserver(this);
        // Force the update of observations.
        this.controller_.refresh();
    };
    /**
     * Stops observing provided element.
     *
     * @param {Element} target - Element to stop observing.
     * @returns {void}
     */ ResizeObserverSPI.prototype.unobserve = function(target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is not being observed.
        if (!observations.has(target)) {
            return;
        }
        observations.delete(target);
        if (!observations.size) {
            this.controller_.removeObserver(this);
        }
    };
    /**
     * Stops observing all elements.
     *
     * @returns {void}
     */ ResizeObserverSPI.prototype.disconnect = function() {
        this.clearActive();
        this.observations_.clear();
        this.controller_.removeObserver(this);
    };
    /**
     * Collects observation instances the associated element of which has changed
     * it's content rectangle.
     *
     * @returns {void}
     */ ResizeObserverSPI.prototype.gatherActive = function() {
        var _this = this;
        this.clearActive();
        this.observations_.forEach(function(observation) {
            if (observation.isActive()) {
                _this.activeObservations_.push(observation);
            }
        });
    };
    /**
     * Invokes initial callback function with a list of ResizeObserverEntry
     * instances collected from active resize observations.
     *
     * @returns {void}
     */ ResizeObserverSPI.prototype.broadcastActive = function() {
        // Do nothing if observer doesn't have active observations.
        if (!this.hasActive()) {
            return;
        }
        var ctx = this.callbackCtx_;
        // Create ResizeObserverEntry instance for every active observation.
        var entries = this.activeObservations_.map(function(observation) {
            return new ResizeObserverEntry(observation.target, observation.broadcastRect());
        });
        this.callback_.call(ctx, entries, ctx);
        this.clearActive();
    };
    /**
     * Clears the collection of active observations.
     *
     * @returns {void}
     */ ResizeObserverSPI.prototype.clearActive = function() {
        this.activeObservations_.splice(0);
    };
    /**
     * Tells whether observer has active observations.
     *
     * @returns {boolean}
     */ ResizeObserverSPI.prototype.hasActive = function() {
        return this.activeObservations_.length > 0;
    };
    return ResizeObserverSPI;
}();
// Registry of internal observers. If WeakMap is not available use current shim
// for the Map collection as it has all required methods and because WeakMap
// can't be fully polyfilled anyway.
var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();
/**
 * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
 * exposing only those methods and properties that are defined in the spec.
 */ var ResizeObserver = function() {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback that is invoked when
     *      dimensions of the observed elements change.
     */ function ResizeObserver(callback) {
        if (!(this instanceof ResizeObserver)) {
            throw new TypeError('Cannot call a class as a function.');
        }
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        var controller = ResizeObserverController.getInstance();
        var observer = new ResizeObserverSPI(callback, controller, this);
        observers.set(this, observer);
    }
    return ResizeObserver;
}();
// Expose public methods of ResizeObserver.
[
    'observe',
    'unobserve',
    'disconnect'
].forEach(function(method) {
    ResizeObserver.prototype[method] = function() {
        var _a;
        return (_a = observers.get(this))[method].apply(_a, arguments);
    };
});
var index = function() {
    // Export existing implementation if available.
    if (typeof global$1.ResizeObserver !== 'undefined') {
        return global$1.ResizeObserver;
    }
    return ResizeObserver;
}();
const __TURBOPACK__default__export__ = index;
}),
"[project]/frontend/node_modules/react-slick/lib/inner-slider.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.InnerSlider = void 0;
var _react = _interopRequireDefault(__turbopack_context__.r("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
var _initialState = _interopRequireDefault(__turbopack_context__.r("[project]/frontend/node_modules/react-slick/lib/initial-state.js [app-client] (ecmascript)"));
var _lodash = _interopRequireDefault(__turbopack_context__.r("[project]/frontend/node_modules/lodash.debounce/index.js [app-client] (ecmascript)"));
var _classnames = _interopRequireDefault(__turbopack_context__.r("[project]/frontend/node_modules/classnames/index.js [app-client] (ecmascript)"));
var _innerSliderUtils = __turbopack_context__.r("[project]/frontend/node_modules/react-slick/lib/utils/innerSliderUtils.js [app-client] (ecmascript)");
var _track = __turbopack_context__.r("[project]/frontend/node_modules/react-slick/lib/track.js [app-client] (ecmascript)");
var _dots = __turbopack_context__.r("[project]/frontend/node_modules/react-slick/lib/dots.js [app-client] (ecmascript)");
var _arrows = __turbopack_context__.r("[project]/frontend/node_modules/react-slick/lib/arrows.js [app-client] (ecmascript)");
var _resizeObserverPolyfill = _interopRequireDefault(__turbopack_context__.r("[project]/frontend/node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js [app-client] (ecmascript)"));
function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        "default": e
    };
}
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable", _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++){
            o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
        }
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r){
        if (({}).hasOwnProperty.call(r, n)) {
            if (e.includes(n)) continue;
            t[n] = r[n];
        }
    }
    return t;
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
function _objectSpread(e) {
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
function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
function _inherits(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(t, "prototype", {
        writable: !1
    }), e && _setPrototypeOf(t, e);
}
function _setPrototypeOf(t, e) {
    return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
        return t.__proto__ = e, t;
    }, _setPrototypeOf(t, e);
}
function _createSuper(t) {
    var r = _isNativeReflectConstruct();
    return function() {
        var e, o = _getPrototypeOf(t);
        if (r) {
            var s = _getPrototypeOf(this).constructor;
            e = Reflect.construct(o, arguments, s);
        } else e = o.apply(this, arguments);
        return _possibleConstructorReturn(this, e);
    };
}
function _possibleConstructorReturn(t, e) {
    if (e && ("object" == _typeof(e) || "function" == typeof e)) return e;
    if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(t);
}
function _assertThisInitialized(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
function _isNativeReflectConstruct() {
    try {
        var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (t) {}
    return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {
        return !!t;
    })();
}
function _getPrototypeOf(t) {
    return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
        return t.__proto__ || Object.getPrototypeOf(t);
    }, _getPrototypeOf(t);
}
function _defineProperty(e, r, t) {
    return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
var InnerSlider = exports.InnerSlider = /*#__PURE__*/ function(_React$Component) {
    _inherits(InnerSlider, _React$Component);
    var _super = _createSuper(InnerSlider);
    function InnerSlider(props) {
        var _this;
        _classCallCheck(this, InnerSlider);
        _this = _super.call(this, props);
        _defineProperty(_assertThisInitialized(_this), "listRefHandler", function(ref) {
            return _this.list = ref;
        });
        _defineProperty(_assertThisInitialized(_this), "trackRefHandler", function(ref) {
            return _this.track = ref;
        });
        _defineProperty(_assertThisInitialized(_this), "adaptHeight", function() {
            if (_this.props.adaptiveHeight && _this.list) {
                var elem = _this.list.querySelector("[data-index=\"".concat(_this.state.currentSlide, "\"]"));
                _this.list.style.height = (0, _innerSliderUtils.getHeight)(elem) + "px";
            }
        });
        _defineProperty(_assertThisInitialized(_this), "componentDidMount", function() {
            _this.props.onInit && _this.props.onInit();
            if (_this.props.lazyLoad) {
                var slidesToLoad = (0, _innerSliderUtils.getOnDemandLazySlides)(_objectSpread(_objectSpread({}, _this.props), _this.state));
                if (slidesToLoad.length > 0) {
                    _this.setState(function(prevState) {
                        return {
                            lazyLoadedList: prevState.lazyLoadedList.concat(slidesToLoad)
                        };
                    });
                    if (_this.props.onLazyLoad) {
                        _this.props.onLazyLoad(slidesToLoad);
                    }
                }
            }
            var spec = _objectSpread({
                listRef: _this.list,
                trackRef: _this.track
            }, _this.props);
            _this.updateState(spec, true, function() {
                _this.adaptHeight();
                _this.props.autoplay && _this.autoPlay("update");
            });
            if (_this.props.lazyLoad === "progressive") {
                _this.lazyLoadTimer = setInterval(_this.progressiveLazyLoad, 1000);
            }
            _this.ro = new _resizeObserverPolyfill["default"](function() {
                if (_this.state.animating) {
                    _this.onWindowResized(false); // don't set trackStyle hence don't break animation
                    _this.callbackTimers.push(setTimeout(function() {
                        return _this.onWindowResized();
                    }, _this.props.speed));
                } else {
                    _this.onWindowResized();
                }
            });
            _this.ro.observe(_this.list);
            document.querySelectorAll && Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"), function(slide) {
                slide.onfocus = _this.props.pauseOnFocus ? _this.onSlideFocus : null;
                slide.onblur = _this.props.pauseOnFocus ? _this.onSlideBlur : null;
            });
            if (window.addEventListener) {
                window.addEventListener("resize", _this.onWindowResized);
            } else {
                window.attachEvent("onresize", _this.onWindowResized);
            }
        });
        _defineProperty(_assertThisInitialized(_this), "componentWillUnmount", function() {
            if (_this.animationEndCallback) {
                clearTimeout(_this.animationEndCallback);
            }
            if (_this.lazyLoadTimer) {
                clearInterval(_this.lazyLoadTimer);
            }
            if (_this.callbackTimers.length) {
                _this.callbackTimers.forEach(function(timer) {
                    return clearTimeout(timer);
                });
                _this.callbackTimers = [];
            }
            if (window.addEventListener) {
                window.removeEventListener("resize", _this.onWindowResized);
            } else {
                window.detachEvent("onresize", _this.onWindowResized);
            }
            if (_this.autoplayTimer) {
                clearInterval(_this.autoplayTimer);
            }
            _this.ro.disconnect();
        });
        _defineProperty(_assertThisInitialized(_this), "componentDidUpdate", function(prevProps) {
            _this.checkImagesLoad();
            _this.props.onReInit && _this.props.onReInit();
            if (_this.props.lazyLoad) {
                var slidesToLoad = (0, _innerSliderUtils.getOnDemandLazySlides)(_objectSpread(_objectSpread({}, _this.props), _this.state));
                if (slidesToLoad.length > 0) {
                    _this.setState(function(prevState) {
                        return {
                            lazyLoadedList: prevState.lazyLoadedList.concat(slidesToLoad)
                        };
                    });
                    if (_this.props.onLazyLoad) {
                        _this.props.onLazyLoad(slidesToLoad);
                    }
                }
            }
            // if (this.props.onLazyLoad) {
            //   this.props.onLazyLoad([leftMostSlide])
            // }
            _this.adaptHeight();
            var spec = _objectSpread(_objectSpread({
                listRef: _this.list,
                trackRef: _this.track
            }, _this.props), _this.state);
            var setTrackStyle = _this.didPropsChange(prevProps);
            setTrackStyle && _this.updateState(spec, setTrackStyle, function() {
                if (_this.state.currentSlide >= _react["default"].Children.count(_this.props.children)) {
                    _this.changeSlide({
                        message: "index",
                        index: _react["default"].Children.count(_this.props.children) - _this.props.slidesToShow,
                        currentSlide: _this.state.currentSlide
                    });
                }
                if (_this.props.autoplay) {
                    _this.autoPlay("update");
                } else {
                    _this.pause("paused");
                }
            });
        });
        _defineProperty(_assertThisInitialized(_this), "onWindowResized", function(setTrackStyle) {
            if (_this.debouncedResize) _this.debouncedResize.cancel();
            _this.debouncedResize = (0, _lodash["default"])(function() {
                return _this.resizeWindow(setTrackStyle);
            }, 50);
            _this.debouncedResize();
        });
        _defineProperty(_assertThisInitialized(_this), "resizeWindow", function() {
            var setTrackStyle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            var isTrackMounted = Boolean(_this.track && _this.track.node);
            // prevent warning: setting state on unmounted component (server side rendering)
            if (!isTrackMounted) return;
            var spec = _objectSpread(_objectSpread({
                listRef: _this.list,
                trackRef: _this.track
            }, _this.props), _this.state);
            _this.updateState(spec, setTrackStyle, function() {
                if (_this.props.autoplay) _this.autoPlay("update");
                else _this.pause("paused");
            });
            // animating state should be cleared while resizing, otherwise autoplay stops working
            _this.setState({
                animating: false
            });
            clearTimeout(_this.animationEndCallback);
            delete _this.animationEndCallback;
        });
        _defineProperty(_assertThisInitialized(_this), "updateState", function(spec, setTrackStyle, callback) {
            var updatedState = (0, _innerSliderUtils.initializedState)(spec);
            spec = _objectSpread(_objectSpread(_objectSpread({}, spec), updatedState), {}, {
                slideIndex: updatedState.currentSlide
            });
            var targetLeft = (0, _innerSliderUtils.getTrackLeft)(spec);
            spec = _objectSpread(_objectSpread({}, spec), {}, {
                left: targetLeft
            });
            var trackStyle = (0, _innerSliderUtils.getTrackCSS)(spec);
            if (setTrackStyle || _react["default"].Children.count(_this.props.children) !== _react["default"].Children.count(spec.children)) {
                updatedState["trackStyle"] = trackStyle;
            }
            _this.setState(updatedState, callback);
        });
        _defineProperty(_assertThisInitialized(_this), "ssrInit", function() {
            if (_this.props.variableWidth) {
                var _trackWidth = 0, _trackLeft = 0;
                var childrenWidths = [];
                var preClones = (0, _innerSliderUtils.getPreClones)(_objectSpread(_objectSpread(_objectSpread({}, _this.props), _this.state), {}, {
                    slideCount: _this.props.children.length
                }));
                var postClones = (0, _innerSliderUtils.getPostClones)(_objectSpread(_objectSpread(_objectSpread({}, _this.props), _this.state), {}, {
                    slideCount: _this.props.children.length
                }));
                _this.props.children.forEach(function(child) {
                    childrenWidths.push(child.props.style.width);
                    _trackWidth += child.props.style.width;
                });
                for(var i = 0; i < preClones; i++){
                    _trackLeft += childrenWidths[childrenWidths.length - 1 - i];
                    _trackWidth += childrenWidths[childrenWidths.length - 1 - i];
                }
                for(var _i = 0; _i < postClones; _i++){
                    _trackWidth += childrenWidths[_i];
                }
                for(var _i2 = 0; _i2 < _this.state.currentSlide; _i2++){
                    _trackLeft += childrenWidths[_i2];
                }
                var _trackStyle = {
                    width: _trackWidth + "px",
                    left: -_trackLeft + "px"
                };
                if (_this.props.centerMode) {
                    var currentWidth = "".concat(childrenWidths[_this.state.currentSlide], "px");
                    _trackStyle.left = "calc(".concat(_trackStyle.left, " + (100% - ").concat(currentWidth, ") / 2 ) ");
                }
                return {
                    trackStyle: _trackStyle
                };
            }
            var childrenCount = _react["default"].Children.count(_this.props.children);
            var spec = _objectSpread(_objectSpread(_objectSpread({}, _this.props), _this.state), {}, {
                slideCount: childrenCount
            });
            var slideCount = (0, _innerSliderUtils.getPreClones)(spec) + (0, _innerSliderUtils.getPostClones)(spec) + childrenCount;
            var trackWidth = 100 / _this.props.slidesToShow * slideCount;
            var slideWidth = 100 / slideCount;
            var trackLeft = -slideWidth * ((0, _innerSliderUtils.getPreClones)(spec) + _this.state.currentSlide) * trackWidth / 100;
            if (_this.props.centerMode) {
                trackLeft += (100 - slideWidth * trackWidth / 100) / 2;
            }
            var trackStyle = {
                width: trackWidth + "%",
                left: trackLeft + "%"
            };
            return {
                slideWidth: slideWidth + "%",
                trackStyle: trackStyle
            };
        });
        _defineProperty(_assertThisInitialized(_this), "checkImagesLoad", function() {
            var images = _this.list && _this.list.querySelectorAll && _this.list.querySelectorAll(".slick-slide img") || [];
            var imagesCount = images.length, loadedCount = 0;
            Array.prototype.forEach.call(images, function(image) {
                var handler = function handler() {
                    return ++loadedCount && loadedCount >= imagesCount && _this.onWindowResized();
                };
                if (!image.onclick) {
                    image.onclick = function() {
                        return image.parentNode.focus();
                    };
                } else {
                    var prevClickHandler = image.onclick;
                    image.onclick = function(e) {
                        prevClickHandler(e);
                        image.parentNode.focus();
                    };
                }
                if (!image.onload) {
                    if (_this.props.lazyLoad) {
                        image.onload = function() {
                            _this.adaptHeight();
                            _this.callbackTimers.push(setTimeout(_this.onWindowResized, _this.props.speed));
                        };
                    } else {
                        image.onload = handler;
                        image.onerror = function() {
                            handler();
                            _this.props.onLazyLoadError && _this.props.onLazyLoadError();
                        };
                    }
                }
            });
        });
        _defineProperty(_assertThisInitialized(_this), "progressiveLazyLoad", function() {
            var slidesToLoad = [];
            var spec = _objectSpread(_objectSpread({}, _this.props), _this.state);
            for(var index = _this.state.currentSlide; index < _this.state.slideCount + (0, _innerSliderUtils.getPostClones)(spec); index++){
                if (_this.state.lazyLoadedList.indexOf(index) < 0) {
                    slidesToLoad.push(index);
                    break;
                }
            }
            for(var _index = _this.state.currentSlide - 1; _index >= -(0, _innerSliderUtils.getPreClones)(spec); _index--){
                if (_this.state.lazyLoadedList.indexOf(_index) < 0) {
                    slidesToLoad.push(_index);
                    break;
                }
            }
            if (slidesToLoad.length > 0) {
                _this.setState(function(state) {
                    return {
                        lazyLoadedList: state.lazyLoadedList.concat(slidesToLoad)
                    };
                });
                if (_this.props.onLazyLoad) {
                    _this.props.onLazyLoad(slidesToLoad);
                }
            } else {
                if (_this.lazyLoadTimer) {
                    clearInterval(_this.lazyLoadTimer);
                    delete _this.lazyLoadTimer;
                }
            }
        });
        _defineProperty(_assertThisInitialized(_this), "slideHandler", function(index) {
            var dontAnimate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var _this$props = _this.props, asNavFor = _this$props.asNavFor, beforeChange = _this$props.beforeChange, onLazyLoad = _this$props.onLazyLoad, speed = _this$props.speed, afterChange = _this$props.afterChange; // capture currentslide before state is updated
            var currentSlide = _this.state.currentSlide;
            var _slideHandler = (0, _innerSliderUtils.slideHandler)(_objectSpread(_objectSpread(_objectSpread({
                index: index
            }, _this.props), _this.state), {}, {
                trackRef: _this.track,
                useCSS: _this.props.useCSS && !dontAnimate
            })), state = _slideHandler.state, nextState = _slideHandler.nextState;
            if (!state) return;
            beforeChange && beforeChange(currentSlide, state.currentSlide);
            var slidesToLoad = state.lazyLoadedList.filter(function(value) {
                return _this.state.lazyLoadedList.indexOf(value) < 0;
            });
            onLazyLoad && slidesToLoad.length > 0 && onLazyLoad(slidesToLoad);
            if (!_this.props.waitForAnimate && _this.animationEndCallback) {
                clearTimeout(_this.animationEndCallback);
                afterChange && afterChange(currentSlide);
                delete _this.animationEndCallback;
            }
            _this.setState(state, function() {
                // asNavForIndex check is to avoid recursive calls of slideHandler in waitForAnimate=false mode
                if (asNavFor && _this.asNavForIndex !== index) {
                    _this.asNavForIndex = index;
                    asNavFor.innerSlider.slideHandler(index);
                }
                if (!nextState) return;
                _this.animationEndCallback = setTimeout(function() {
                    var animating = nextState.animating, firstBatch = _objectWithoutProperties(nextState, [
                        "animating"
                    ]);
                    _this.setState(firstBatch, function() {
                        _this.callbackTimers.push(setTimeout(function() {
                            return _this.setState({
                                animating: animating
                            });
                        }, 10));
                        afterChange && afterChange(state.currentSlide);
                        delete _this.animationEndCallback;
                    });
                }, speed);
            });
        });
        _defineProperty(_assertThisInitialized(_this), "changeSlide", function(options) {
            var dontAnimate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var spec = _objectSpread(_objectSpread({}, _this.props), _this.state);
            var targetSlide = (0, _innerSliderUtils.changeSlide)(spec, options);
            if (targetSlide !== 0 && !targetSlide) return;
            if (dontAnimate === true) {
                _this.slideHandler(targetSlide, dontAnimate);
            } else {
                _this.slideHandler(targetSlide);
            }
            _this.props.autoplay && _this.autoPlay("update");
            if (_this.props.focusOnSelect) {
                var nodes = _this.list.querySelectorAll(".slick-current");
                nodes[0] && nodes[0].focus();
            }
        });
        _defineProperty(_assertThisInitialized(_this), "clickHandler", function(e) {
            if (_this.clickable === false) {
                e.stopPropagation();
                e.preventDefault();
            }
            _this.clickable = true;
        });
        _defineProperty(_assertThisInitialized(_this), "keyHandler", function(e) {
            var dir = (0, _innerSliderUtils.keyHandler)(e, _this.props.accessibility, _this.props.rtl);
            dir !== "" && _this.changeSlide({
                message: dir
            });
        });
        _defineProperty(_assertThisInitialized(_this), "selectHandler", function(options) {
            _this.changeSlide(options);
        });
        _defineProperty(_assertThisInitialized(_this), "disableBodyScroll", function() {
            var preventDefault = function preventDefault(e) {
                e = e || window.event;
                if (e.preventDefault) e.preventDefault();
                e.returnValue = false;
            };
            window.ontouchmove = preventDefault;
        });
        _defineProperty(_assertThisInitialized(_this), "enableBodyScroll", function() {
            window.ontouchmove = null;
        });
        _defineProperty(_assertThisInitialized(_this), "swipeStart", function(e) {
            if (_this.props.verticalSwiping) {
                _this.disableBodyScroll();
            }
            var state = (0, _innerSliderUtils.swipeStart)(e, _this.props.swipe, _this.props.draggable);
            state !== "" && _this.setState(state);
        });
        _defineProperty(_assertThisInitialized(_this), "swipeMove", function(e) {
            var state = (0, _innerSliderUtils.swipeMove)(e, _objectSpread(_objectSpread(_objectSpread({}, _this.props), _this.state), {}, {
                trackRef: _this.track,
                listRef: _this.list,
                slideIndex: _this.state.currentSlide
            }));
            if (!state) return;
            if (state["swiping"]) {
                _this.clickable = false;
            }
            _this.setState(state);
        });
        _defineProperty(_assertThisInitialized(_this), "swipeEnd", function(e) {
            var state = (0, _innerSliderUtils.swipeEnd)(e, _objectSpread(_objectSpread(_objectSpread({}, _this.props), _this.state), {}, {
                trackRef: _this.track,
                listRef: _this.list,
                slideIndex: _this.state.currentSlide
            }));
            if (!state) return;
            var triggerSlideHandler = state["triggerSlideHandler"];
            delete state["triggerSlideHandler"];
            _this.setState(state);
            if (triggerSlideHandler === undefined) return;
            _this.slideHandler(triggerSlideHandler);
            if (_this.props.verticalSwiping) {
                _this.enableBodyScroll();
            }
        });
        _defineProperty(_assertThisInitialized(_this), "touchEnd", function(e) {
            _this.swipeEnd(e);
            _this.clickable = true;
        });
        _defineProperty(_assertThisInitialized(_this), "slickPrev", function() {
            // this and fellow methods are wrapped in setTimeout
            // to make sure initialize setState has happened before
            // any of such methods are called
            _this.callbackTimers.push(setTimeout(function() {
                return _this.changeSlide({
                    message: "previous"
                });
            }, 0));
        });
        _defineProperty(_assertThisInitialized(_this), "slickNext", function() {
            _this.callbackTimers.push(setTimeout(function() {
                return _this.changeSlide({
                    message: "next"
                });
            }, 0));
        });
        _defineProperty(_assertThisInitialized(_this), "slickGoTo", function(slide) {
            var dontAnimate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            slide = Number(slide);
            if (isNaN(slide)) return "";
            _this.callbackTimers.push(setTimeout(function() {
                return _this.changeSlide({
                    message: "index",
                    index: slide,
                    currentSlide: _this.state.currentSlide
                }, dontAnimate);
            }, 0));
        });
        _defineProperty(_assertThisInitialized(_this), "play", function() {
            var nextIndex;
            if (_this.props.rtl) {
                nextIndex = _this.state.currentSlide - _this.props.slidesToScroll;
            } else {
                if ((0, _innerSliderUtils.canGoNext)(_objectSpread(_objectSpread({}, _this.props), _this.state))) {
                    nextIndex = _this.state.currentSlide + _this.props.slidesToScroll;
                } else {
                    return false;
                }
            }
            _this.slideHandler(nextIndex);
        });
        _defineProperty(_assertThisInitialized(_this), "autoPlay", function(playType) {
            if (_this.autoplayTimer) {
                clearInterval(_this.autoplayTimer);
            }
            var autoplaying = _this.state.autoplaying;
            if (playType === "update") {
                if (autoplaying === "hovered" || autoplaying === "focused" || autoplaying === "paused") {
                    return;
                }
            } else if (playType === "leave") {
                if (autoplaying === "paused" || autoplaying === "focused") {
                    return;
                }
            } else if (playType === "blur") {
                if (autoplaying === "paused" || autoplaying === "hovered") {
                    return;
                }
            }
            _this.autoplayTimer = setInterval(_this.play, _this.props.autoplaySpeed + 50);
            _this.setState({
                autoplaying: "playing"
            });
        });
        _defineProperty(_assertThisInitialized(_this), "pause", function(pauseType) {
            if (_this.autoplayTimer) {
                clearInterval(_this.autoplayTimer);
                _this.autoplayTimer = null;
            }
            var autoplaying = _this.state.autoplaying;
            if (pauseType === "paused") {
                _this.setState({
                    autoplaying: "paused"
                });
            } else if (pauseType === "focused") {
                if (autoplaying === "hovered" || autoplaying === "playing") {
                    _this.setState({
                        autoplaying: "focused"
                    });
                }
            } else {
                // pauseType  is 'hovered'
                if (autoplaying === "playing") {
                    _this.setState({
                        autoplaying: "hovered"
                    });
                }
            }
        });
        _defineProperty(_assertThisInitialized(_this), "onDotsOver", function() {
            return _this.props.autoplay && _this.pause("hovered");
        });
        _defineProperty(_assertThisInitialized(_this), "onDotsLeave", function() {
            return _this.props.autoplay && _this.state.autoplaying === "hovered" && _this.autoPlay("leave");
        });
        _defineProperty(_assertThisInitialized(_this), "onTrackOver", function() {
            return _this.props.autoplay && _this.pause("hovered");
        });
        _defineProperty(_assertThisInitialized(_this), "onTrackLeave", function() {
            return _this.props.autoplay && _this.state.autoplaying === "hovered" && _this.autoPlay("leave");
        });
        _defineProperty(_assertThisInitialized(_this), "onSlideFocus", function() {
            return _this.props.autoplay && _this.pause("focused");
        });
        _defineProperty(_assertThisInitialized(_this), "onSlideBlur", function() {
            return _this.props.autoplay && _this.state.autoplaying === "focused" && _this.autoPlay("blur");
        });
        _defineProperty(_assertThisInitialized(_this), "render", function() {
            var className = (0, _classnames["default"])("slick-slider", _this.props.className, {
                "slick-vertical": _this.props.vertical,
                "slick-initialized": true
            });
            var spec = _objectSpread(_objectSpread({}, _this.props), _this.state);
            var trackProps = (0, _innerSliderUtils.extractObject)(spec, [
                "fade",
                "cssEase",
                "speed",
                "infinite",
                "centerMode",
                "focusOnSelect",
                "currentSlide",
                "lazyLoad",
                "lazyLoadedList",
                "rtl",
                "slideWidth",
                "slideHeight",
                "listHeight",
                "vertical",
                "slidesToShow",
                "slidesToScroll",
                "slideCount",
                "trackStyle",
                "variableWidth",
                "unslick",
                "centerPadding",
                "targetSlide",
                "useCSS"
            ]);
            var pauseOnHover = _this.props.pauseOnHover;
            trackProps = _objectSpread(_objectSpread({}, trackProps), {}, {
                onMouseEnter: pauseOnHover ? _this.onTrackOver : null,
                onMouseLeave: pauseOnHover ? _this.onTrackLeave : null,
                onMouseOver: pauseOnHover ? _this.onTrackOver : null,
                focusOnSelect: _this.props.focusOnSelect && _this.clickable ? _this.selectHandler : null
            });
            var dots;
            if (_this.props.dots === true && _this.state.slideCount >= _this.props.slidesToShow) {
                var dotProps = (0, _innerSliderUtils.extractObject)(spec, [
                    "dotsClass",
                    "slideCount",
                    "slidesToShow",
                    "currentSlide",
                    "slidesToScroll",
                    "clickHandler",
                    "children",
                    "customPaging",
                    "infinite",
                    "appendDots"
                ]);
                var pauseOnDotsHover = _this.props.pauseOnDotsHover;
                dotProps = _objectSpread(_objectSpread({}, dotProps), {}, {
                    clickHandler: _this.changeSlide,
                    onMouseEnter: pauseOnDotsHover ? _this.onDotsLeave : null,
                    onMouseOver: pauseOnDotsHover ? _this.onDotsOver : null,
                    onMouseLeave: pauseOnDotsHover ? _this.onDotsLeave : null
                });
                dots = /*#__PURE__*/ _react["default"].createElement(_dots.Dots, dotProps);
            }
            var prevArrow, nextArrow;
            var arrowProps = (0, _innerSliderUtils.extractObject)(spec, [
                "infinite",
                "centerMode",
                "currentSlide",
                "slideCount",
                "slidesToShow",
                "prevArrow",
                "nextArrow"
            ]);
            arrowProps.clickHandler = _this.changeSlide;
            if (_this.props.arrows) {
                prevArrow = /*#__PURE__*/ _react["default"].createElement(_arrows.PrevArrow, arrowProps);
                nextArrow = /*#__PURE__*/ _react["default"].createElement(_arrows.NextArrow, arrowProps);
            }
            var verticalHeightStyle = null;
            if (_this.props.vertical) {
                verticalHeightStyle = {
                    height: _this.state.listHeight
                };
            }
            var centerPaddingStyle = null;
            if (_this.props.vertical === false) {
                if (_this.props.centerMode === true) {
                    centerPaddingStyle = {
                        padding: "0px " + _this.props.centerPadding
                    };
                }
            } else {
                if (_this.props.centerMode === true) {
                    centerPaddingStyle = {
                        padding: _this.props.centerPadding + " 0px"
                    };
                }
            }
            var listStyle = _objectSpread(_objectSpread({}, verticalHeightStyle), centerPaddingStyle);
            var touchMove = _this.props.touchMove;
            var listProps = {
                className: "slick-list",
                style: listStyle,
                onClick: _this.clickHandler,
                onMouseDown: touchMove ? _this.swipeStart : null,
                onMouseMove: _this.state.dragging && touchMove ? _this.swipeMove : null,
                onMouseUp: touchMove ? _this.swipeEnd : null,
                onMouseLeave: _this.state.dragging && touchMove ? _this.swipeEnd : null,
                onTouchStart: touchMove ? _this.swipeStart : null,
                onTouchMove: _this.state.dragging && touchMove ? _this.swipeMove : null,
                onTouchEnd: touchMove ? _this.touchEnd : null,
                onTouchCancel: _this.state.dragging && touchMove ? _this.swipeEnd : null,
                onKeyDown: _this.props.accessibility ? _this.keyHandler : null
            };
            var innerSliderProps = {
                className: className,
                dir: "ltr",
                style: _this.props.style
            };
            if (_this.props.unslick) {
                listProps = {
                    className: "slick-list"
                };
                innerSliderProps = {
                    className: className,
                    style: _this.props.style
                };
            }
            return /*#__PURE__*/ _react["default"].createElement("div", innerSliderProps, !_this.props.unslick ? prevArrow : "", /*#__PURE__*/ _react["default"].createElement("div", _extends({
                ref: _this.listRefHandler
            }, listProps), /*#__PURE__*/ _react["default"].createElement(_track.Track, _extends({
                ref: _this.trackRefHandler
            }, trackProps), _this.props.children)), !_this.props.unslick ? nextArrow : "", !_this.props.unslick ? dots : "");
        });
        _this.list = null;
        _this.track = null;
        _this.state = _objectSpread(_objectSpread({}, _initialState["default"]), {}, {
            currentSlide: _this.props.initialSlide,
            targetSlide: _this.props.initialSlide ? _this.props.initialSlide : 0,
            slideCount: _react["default"].Children.count(_this.props.children)
        });
        _this.callbackTimers = [];
        _this.clickable = true;
        _this.debouncedResize = null;
        var ssrState = _this.ssrInit();
        _this.state = _objectSpread(_objectSpread({}, _this.state), ssrState);
        return _this;
    }
    _createClass(InnerSlider, [
        {
            key: "didPropsChange",
            value: function didPropsChange(prevProps) {
                var setTrackStyle = false;
                for(var _i3 = 0, _Object$keys = Object.keys(this.props); _i3 < _Object$keys.length; _i3++){
                    var key = _Object$keys[_i3];
                    if (!prevProps.hasOwnProperty(key)) {
                        setTrackStyle = true;
                        break;
                    }
                    if (_typeof(prevProps[key]) === "object" || typeof prevProps[key] === "function" || isNaN(prevProps[key])) {
                        continue;
                    }
                    if (prevProps[key] !== this.props[key]) {
                        setTrackStyle = true;
                        break;
                    }
                }
                return setTrackStyle || _react["default"].Children.count(this.props.children) !== _react["default"].Children.count(prevProps.children);
            }
        }
    ]);
    return InnerSlider;
}(_react["default"].Component);
}),
"[project]/frontend/node_modules/string-convert/camel2hyphen.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var camel2hyphen = function(str) {
    return str.replace(/[A-Z]/g, function(match) {
        return '-' + match.toLowerCase();
    }).toLowerCase();
};
module.exports = camel2hyphen;
}),
"[project]/frontend/node_modules/json2mq/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var camel2hyphen = __turbopack_context__.r("[project]/frontend/node_modules/string-convert/camel2hyphen.js [app-client] (ecmascript)");
var isDimension = function(feature) {
    var re = /[height|width]$/;
    return re.test(feature);
};
var obj2mq = function(obj) {
    var mq = '';
    var features = Object.keys(obj);
    features.forEach(function(feature, index) {
        var value = obj[feature];
        feature = camel2hyphen(feature);
        // Add px to dimension features
        if (isDimension(feature) && typeof value === 'number') {
            value = value + 'px';
        }
        if (value === true) {
            mq += feature;
        } else if (value === false) {
            mq += 'not ' + feature;
        } else {
            mq += '(' + feature + ': ' + value + ')';
        }
        if (index < features.length - 1) {
            mq += ' and ';
        }
    });
    return mq;
};
var json2mq = function(query) {
    var mq = '';
    if (typeof query === 'string') {
        return query;
    }
    // Handling array of media queries
    if (query instanceof Array) {
        query.forEach(function(q, index) {
            mq += obj2mq(q);
            if (index < query.length - 1) {
                mq += ', ';
            }
        });
        return mq;
    }
    // Handling single media query
    return obj2mq(query);
};
module.exports = json2mq;
}),
"[project]/frontend/node_modules/react-slick/lib/slider.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(__turbopack_context__.r("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
var _innerSlider = __turbopack_context__.r("[project]/frontend/node_modules/react-slick/lib/inner-slider.js [app-client] (ecmascript)");
var _json2mq = _interopRequireDefault(__turbopack_context__.r("[project]/frontend/node_modules/json2mq/index.js [app-client] (ecmascript)"));
var _defaultProps = _interopRequireDefault(__turbopack_context__.r("[project]/frontend/node_modules/react-slick/lib/default-props.js [app-client] (ecmascript)"));
var _innerSliderUtils = __turbopack_context__.r("[project]/frontend/node_modules/react-slick/lib/utils/innerSliderUtils.js [app-client] (ecmascript)");
function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        "default": e
    };
}
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable", _extends.apply(null, arguments);
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
function _objectSpread(e) {
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
function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
function _inherits(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(t, "prototype", {
        writable: !1
    }), e && _setPrototypeOf(t, e);
}
function _setPrototypeOf(t, e) {
    return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
        return t.__proto__ = e, t;
    }, _setPrototypeOf(t, e);
}
function _createSuper(t) {
    var r = _isNativeReflectConstruct();
    return function() {
        var e, o = _getPrototypeOf(t);
        if (r) {
            var s = _getPrototypeOf(this).constructor;
            e = Reflect.construct(o, arguments, s);
        } else e = o.apply(this, arguments);
        return _possibleConstructorReturn(this, e);
    };
}
function _possibleConstructorReturn(t, e) {
    if (e && ("object" == _typeof(e) || "function" == typeof e)) return e;
    if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(t);
}
function _assertThisInitialized(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
function _isNativeReflectConstruct() {
    try {
        var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (t) {}
    return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {
        return !!t;
    })();
}
function _getPrototypeOf(t) {
    return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
        return t.__proto__ || Object.getPrototypeOf(t);
    }, _getPrototypeOf(t);
}
function _defineProperty(e, r, t) {
    return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
var Slider = exports["default"] = /*#__PURE__*/ function(_React$Component) {
    _inherits(Slider, _React$Component);
    var _super = _createSuper(Slider);
    function Slider(props) {
        var _this;
        _classCallCheck(this, Slider);
        _this = _super.call(this, props);
        _defineProperty(_assertThisInitialized(_this), "innerSliderRefHandler", function(ref) {
            return _this.innerSlider = ref;
        });
        _defineProperty(_assertThisInitialized(_this), "slickPrev", function() {
            return _this.innerSlider.slickPrev();
        });
        _defineProperty(_assertThisInitialized(_this), "slickNext", function() {
            return _this.innerSlider.slickNext();
        });
        _defineProperty(_assertThisInitialized(_this), "slickGoTo", function(slide) {
            var dontAnimate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            return _this.innerSlider.slickGoTo(slide, dontAnimate);
        });
        _defineProperty(_assertThisInitialized(_this), "slickPause", function() {
            return _this.innerSlider.pause("paused");
        });
        _defineProperty(_assertThisInitialized(_this), "slickPlay", function() {
            return _this.innerSlider.autoPlay("play");
        });
        _this.state = {
            breakpoint: null
        };
        _this._responsiveMediaHandlers = [];
        return _this;
    }
    _createClass(Slider, [
        {
            key: "media",
            value: function media(query, handler) {
                // javascript handler for  css media query
                var mql = window.matchMedia(query);
                var listener = function listener(_ref) {
                    var matches = _ref.matches;
                    if (matches) {
                        handler();
                    }
                };
                mql.addListener(listener);
                this._responsiveMediaHandlers.push({
                    mql: mql,
                    query: query,
                    listener: listener
                });
            } // handles responsive breakpoints
        },
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                var _this2 = this;
                // performance monitoring
                //if (process.env.NODE_ENV !== 'production') {
                //const { whyDidYouUpdate } = require('why-did-you-update')
                //whyDidYouUpdate(React)
                //}
                if (this.props.responsive) {
                    var breakpoints = this.props.responsive.map(function(breakpt) {
                        return breakpt.breakpoint;
                    });
                    // sort them in increasing order of their numerical value
                    breakpoints.sort(function(x, y) {
                        return x - y;
                    });
                    breakpoints.forEach(function(breakpoint, index) {
                        // media query for each breakpoint
                        var bQuery;
                        if (index === 0) {
                            bQuery = (0, _json2mq["default"])({
                                minWidth: 0,
                                maxWidth: breakpoint
                            });
                        } else {
                            bQuery = (0, _json2mq["default"])({
                                minWidth: breakpoints[index - 1] + 1,
                                maxWidth: breakpoint
                            });
                        }
                        // when not using server side rendering
                        (0, _innerSliderUtils.canUseDOM)() && _this2.media(bQuery, function() {
                            _this2.setState({
                                breakpoint: breakpoint
                            });
                        });
                    });
                    // Register media query for full screen. Need to support resize from small to large
                    // convert javascript object to media query string
                    var query = (0, _json2mq["default"])({
                        minWidth: breakpoints.slice(-1)[0]
                    });
                    (0, _innerSliderUtils.canUseDOM)() && this.media(query, function() {
                        _this2.setState({
                            breakpoint: null
                        });
                    });
                }
            }
        },
        {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                this._responsiveMediaHandlers.forEach(function(obj) {
                    obj.mql.removeListener(obj.listener);
                });
            }
        },
        {
            key: "render",
            value: function render() {
                var _this3 = this;
                var settings;
                var newProps;
                if (this.state.breakpoint) {
                    newProps = this.props.responsive.filter(function(resp) {
                        return resp.breakpoint === _this3.state.breakpoint;
                    });
                    settings = newProps[0].settings === "unslick" ? "unslick" : _objectSpread(_objectSpread(_objectSpread({}, _defaultProps["default"]), this.props), newProps[0].settings);
                } else {
                    settings = _objectSpread(_objectSpread({}, _defaultProps["default"]), this.props);
                }
                // force scrolling by one if centerMode is on
                if (settings.centerMode) {
                    if (settings.slidesToScroll > 1 && ("TURBOPACK compile-time value", "development") !== "production") {
                        console.warn("slidesToScroll should be equal to 1 in centerMode, you are using ".concat(settings.slidesToScroll));
                    }
                    settings.slidesToScroll = 1;
                }
                // force showing one slide and scrolling by one if the fade mode is on
                if (settings.fade) {
                    if (settings.slidesToShow > 1 && ("TURBOPACK compile-time value", "development") !== "production") {
                        console.warn("slidesToShow should be equal to 1 when fade is true, you're using ".concat(settings.slidesToShow));
                    }
                    if (settings.slidesToScroll > 1 && ("TURBOPACK compile-time value", "development") !== "production") {
                        console.warn("slidesToScroll should be equal to 1 when fade is true, you're using ".concat(settings.slidesToScroll));
                    }
                    settings.slidesToShow = 1;
                    settings.slidesToScroll = 1;
                }
                // makes sure that children is an array, even when there is only 1 child
                var children = _react["default"].Children.toArray(this.props.children);
                // Children may contain false or null, so we should filter them
                // children may also contain string filled with spaces (in certain cases where we use jsx strings)
                children = children.filter(function(child) {
                    if (typeof child === "string") {
                        return !!child.trim();
                    }
                    return !!child;
                });
                // rows and slidesPerRow logic is handled here
                if (settings.variableWidth && (settings.rows > 1 || settings.slidesPerRow > 1)) {
                    console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1");
                    settings.variableWidth = false;
                }
                var newChildren = [];
                var currentWidth = null;
                for(var i = 0; i < children.length; i += settings.rows * settings.slidesPerRow){
                    var newSlide = [];
                    for(var j = i; j < i + settings.rows * settings.slidesPerRow; j += settings.slidesPerRow){
                        var row = [];
                        for(var k = j; k < j + settings.slidesPerRow; k += 1){
                            if (settings.variableWidth && children[k].props.style) {
                                currentWidth = children[k].props.style.width;
                            }
                            if (k >= children.length) break;
                            row.push(/*#__PURE__*/ _react["default"].cloneElement(children[k], {
                                key: 100 * i + 10 * j + k,
                                tabIndex: -1,
                                style: {
                                    width: "".concat(100 / settings.slidesPerRow, "%"),
                                    display: "inline-block"
                                }
                            }));
                        }
                        newSlide.push(/*#__PURE__*/ _react["default"].createElement("div", {
                            key: 10 * i + j
                        }, row));
                    }
                    if (settings.variableWidth) {
                        newChildren.push(/*#__PURE__*/ _react["default"].createElement("div", {
                            key: i,
                            style: {
                                width: currentWidth
                            }
                        }, newSlide));
                    } else {
                        newChildren.push(/*#__PURE__*/ _react["default"].createElement("div", {
                            key: i
                        }, newSlide));
                    }
                }
                if (settings === "unslick") {
                    var className = "regular slider " + (this.props.className || "");
                    return /*#__PURE__*/ _react["default"].createElement("div", {
                        className: className
                    }, children);
                } else if (newChildren.length <= settings.slidesToShow) {
                    settings.unslick = true;
                }
                return /*#__PURE__*/ _react["default"].createElement(_innerSlider.InnerSlider, _extends({
                    style: this.props.style,
                    ref: this.innerSliderRefHandler
                }, (0, _innerSliderUtils.filterSettings)(settings)), newChildren);
            }
        }
    ]);
    return Slider;
}(_react["default"].Component);
}),
"[project]/frontend/node_modules/react-slick/lib/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _slider = _interopRequireDefault(__turbopack_context__.r("[project]/frontend/node_modules/react-slick/lib/slider.js [app-client] (ecmascript)"));
function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        "default": e
    };
}
var _default = exports["default"] = _slider["default"];
}),
"[project]/frontend/node_modules/next/dist/shared/lib/lazy-dynamic/dynamic-bailout-to-csr.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "BailoutToCSR", {
    enumerable: true,
    get: function() {
        return BailoutToCSR;
    }
});
const _bailouttocsr = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js [app-client] (ecmascript)");
function BailoutToCSR(param) {
    let { reason, children } = param;
    if (typeof window === 'undefined') {
        throw Object.defineProperty(new _bailouttocsr.BailoutToCSRError(reason), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: false,
            configurable: true
        });
    }
    return children;
} //# sourceMappingURL=dynamic-bailout-to-csr.js.map
}),
"[project]/frontend/node_modules/next/dist/shared/lib/encode-uri-path.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "encodeURIPath", {
    enumerable: true,
    get: function() {
        return encodeURIPath;
    }
});
function encodeURIPath(file) {
    return file.split('/').map((p)=>encodeURIComponent(p)).join('/');
} //# sourceMappingURL=encode-uri-path.js.map
}),
"[project]/frontend/node_modules/next/dist/shared/lib/lazy-dynamic/preload-chunks.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PreloadChunks", {
    enumerable: true,
    get: function() {
        return PreloadChunks;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _reactdom = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
const _workasyncstorageexternal = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/server/app-render/work-async-storage.external.js [app-client] (ecmascript)");
const _encodeuripath = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/shared/lib/encode-uri-path.js [app-client] (ecmascript)");
function PreloadChunks(param) {
    let { moduleIds } = param;
    // Early return in client compilation and only load requestStore on server side
    if (typeof window !== 'undefined') {
        return null;
    }
    const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    if (workStore === undefined) {
        return null;
    }
    const allFiles = [];
    // Search the current dynamic call unique key id in react loadable manifest,
    // and find the corresponding CSS files to preload
    if (workStore.reactLoadableManifest && moduleIds) {
        const manifest = workStore.reactLoadableManifest;
        for (const key of moduleIds){
            if (!manifest[key]) continue;
            const chunks = manifest[key].files;
            allFiles.push(...chunks);
        }
    }
    if (allFiles.length === 0) {
        return null;
    }
    const dplId = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : '';
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
        children: allFiles.map((chunk)=>{
            const href = workStore.assetPrefix + "/_next/" + (0, _encodeuripath.encodeURIPath)(chunk) + dplId;
            const isCss = chunk.endsWith('.css');
            // If it's stylesheet we use `precedence` o help hoist with React Float.
            // For stylesheets we actually need to render the CSS because nothing else is going to do it so it needs to be part of the component tree.
            // The `preload` for stylesheet is not optional.
            if (isCss) {
                return /*#__PURE__*/ (0, _jsxruntime.jsx)("link", {
                    // @ts-ignore
                    precedence: "dynamic",
                    href: href,
                    rel: "stylesheet",
                    as: "style"
                }, chunk);
            } else {
                // If it's script we use ReactDOM.preload to preload the resources
                (0, _reactdom.preload)(href, {
                    as: 'script',
                    fetchPriority: 'low'
                });
                return null;
            }
        })
    });
} //# sourceMappingURL=preload-chunks.js.map
}),
"[project]/frontend/node_modules/next/dist/shared/lib/lazy-dynamic/loadable.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
const _dynamicbailouttocsr = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/shared/lib/lazy-dynamic/dynamic-bailout-to-csr.js [app-client] (ecmascript)");
const _preloadchunks = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/shared/lib/lazy-dynamic/preload-chunks.js [app-client] (ecmascript)");
// Normalize loader to return the module as form { default: Component } for `React.lazy`.
// Also for backward compatible since next/dynamic allows to resolve a component directly with loader
// Client component reference proxy need to be converted to a module.
function convertModule(mod) {
    // Check "default" prop before accessing it, as it could be client reference proxy that could break it reference.
    // Cases:
    // mod: { default: Component }
    // mod: Component
    // mod: { default: proxy(Component) }
    // mod: proxy(Component)
    const hasDefault = mod && 'default' in mod;
    return {
        default: hasDefault ? mod.default : mod
    };
}
const defaultOptions = {
    loader: ()=>Promise.resolve(convertModule(()=>null)),
    loading: null,
    ssr: true
};
function Loadable(options) {
    const opts = {
        ...defaultOptions,
        ...options
    };
    const Lazy = /*#__PURE__*/ (0, _react.lazy)(()=>opts.loader().then(convertModule));
    const Loading = opts.loading;
    function LoadableComponent(props) {
        const fallbackElement = Loading ? /*#__PURE__*/ (0, _jsxruntime.jsx)(Loading, {
            isLoading: true,
            pastDelay: true,
            error: null
        }) : null;
        // If it's non-SSR or provided a loading component, wrap it in a suspense boundary
        const hasSuspenseBoundary = !opts.ssr || !!opts.loading;
        const Wrap = hasSuspenseBoundary ? _react.Suspense : _react.Fragment;
        const wrapProps = hasSuspenseBoundary ? {
            fallback: fallbackElement
        } : {};
        const children = opts.ssr ? /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
            children: [
                typeof window === 'undefined' ? /*#__PURE__*/ (0, _jsxruntime.jsx)(_preloadchunks.PreloadChunks, {
                    moduleIds: opts.modules
                }) : null,
                /*#__PURE__*/ (0, _jsxruntime.jsx)(Lazy, {
                    ...props
                })
            ]
        }) : /*#__PURE__*/ (0, _jsxruntime.jsx)(_dynamicbailouttocsr.BailoutToCSR, {
            reason: "next/dynamic",
            children: /*#__PURE__*/ (0, _jsxruntime.jsx)(Lazy, {
                ...props
            })
        });
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(Wrap, {
            ...wrapProps,
            children: children
        });
    }
    LoadableComponent.displayName = 'LoadableComponent';
    return LoadableComponent;
}
const _default = Loadable; //# sourceMappingURL=loadable.js.map
}),
"[project]/frontend/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return dynamic;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/frontend/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _loadable = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/frontend/node_modules/next/dist/shared/lib/lazy-dynamic/loadable.js [app-client] (ecmascript)"));
function dynamic(dynamicOptions, options) {
    var _mergedOptions_loadableGenerated;
    const loadableOptions = {};
    if (typeof dynamicOptions === 'function') {
        loadableOptions.loader = dynamicOptions;
    }
    const mergedOptions = {
        ...loadableOptions,
        ...options
    };
    return (0, _loadable.default)({
        ...mergedOptions,
        modules: (_mergedOptions_loadableGenerated = mergedOptions.loadableGenerated) == null ? void 0 : _mergedOptions_loadableGenerated.modules
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-dynamic.js.map
}),
"[project]/frontend/node_modules/@swc/helpers/esm/_class_apply_descriptor_get.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_class_apply_descriptor_get
]);
function _class_apply_descriptor_get(receiver, descriptor) {
    if (descriptor.get) return descriptor.get.call(receiver);
    return descriptor.value;
}
;
}),
"[project]/frontend/node_modules/@swc/helpers/esm/_class_extract_field_descriptor.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_class_extract_field_descriptor
]);
function _class_extract_field_descriptor(receiver, privateMap, action) {
    if (!privateMap.has(receiver)) throw new TypeError("attempted to " + action + " private field on non-instance");
    return privateMap.get(receiver);
}
;
}),
"[project]/frontend/node_modules/@swc/helpers/esm/_class_private_field_get.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_class_private_field_get
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_apply_descriptor_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_class_apply_descriptor_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_extract_field_descriptor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_class_extract_field_descriptor.js [app-client] (ecmascript)");
;
;
function _class_private_field_get(receiver, privateMap) {
    var descriptor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_extract_field_descriptor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(receiver, privateMap, "get");
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_apply_descriptor_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(receiver, descriptor);
}
;
}),
"[project]/frontend/node_modules/@swc/helpers/esm/_check_private_redeclaration.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_check_private_redeclaration
]);
function _check_private_redeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) {
        throw new TypeError("Cannot initialize the same private elements twice on an object");
    }
}
;
}),
"[project]/frontend/node_modules/@swc/helpers/esm/_class_private_field_init.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_class_private_field_init
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_check_private_redeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_check_private_redeclaration.js [app-client] (ecmascript)");
;
function _class_private_field_init(obj, privateMap, value) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_check_private_redeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(obj, privateMap);
    privateMap.set(obj, value);
}
;
}),
"[project]/frontend/node_modules/@swc/helpers/esm/_class_apply_descriptor_set.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_class_apply_descriptor_set
]);
function _class_apply_descriptor_set(receiver, descriptor, value) {
    if (descriptor.set) descriptor.set.call(receiver, value);
    else {
        if (!descriptor.writable) {
            // This should only throw in strict mode, but class bodies are
            // always strict and private fields can only be used inside
            // class bodies.
            throw new TypeError("attempted to set read only private field");
        }
        descriptor.value = value;
    }
}
;
}),
"[project]/frontend/node_modules/@swc/helpers/esm/_class_private_field_set.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_class_private_field_set
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_apply_descriptor_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_class_apply_descriptor_set.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_extract_field_descriptor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_class_extract_field_descriptor.js [app-client] (ecmascript)");
;
;
function _class_private_field_set(receiver, privateMap, value) {
    var descriptor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_extract_field_descriptor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(receiver, privateMap, "set");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_apply_descriptor_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(receiver, descriptor, value);
    return value;
}
;
}),
"[project]/frontend/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_define_property
]);
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
;
}),
"[project]/frontend/node_modules/get-it/dist/_chunks-es/_commonjsHelpers.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "g",
    ()=>c,
    "p",
    ()=>r,
    "v",
    ()=>s
]);
const e = !(typeof navigator > "u") && "ReactNative" === navigator.product, t = {
    timeout: e ? 6e4 : 12e4
}, r = function(r) {
    const a = {
        ...t,
        ..."string" == typeof r ? {
            url: r
        } : r
    };
    if (a.timeout = n(a.timeout), a.query) {
        const { url: t, searchParams: r } = function(t) {
            const r = t.indexOf("?");
            if (-1 === r) return {
                url: t,
                searchParams: new URLSearchParams
            };
            const n = t.slice(0, r), a = t.slice(r + 1);
            if (!e) return {
                url: n,
                searchParams: new URLSearchParams(a)
            };
            if ("function" != typeof decodeURIComponent) throw new Error("Broken `URLSearchParams` implementation, and `decodeURIComponent` is not defined");
            const s = new URLSearchParams;
            for (const e of a.split("&")){
                const [t, r] = e.split("=");
                t && s.append(o(t), o(r || ""));
            }
            return {
                url: n,
                searchParams: s
            };
        }(a.url);
        for (const [e, o] of Object.entries(a.query)){
            if (void 0 !== o) if (Array.isArray(o)) for (const t of o)r.append(e, t);
            else r.append(e, o);
            const n = r.toString();
            n && (a.url = "".concat(t, "?").concat(n));
        }
    }
    return a.method = a.body && !a.method ? "POST" : (a.method || "GET").toUpperCase(), a;
};
function o(e) {
    return decodeURIComponent(e.replace(/\+/g, " "));
}
function n(e) {
    if (!1 === e || 0 === e) return !1;
    if (e.connect || e.socket) return e;
    const r = Number(e);
    return isNaN(r) ? n(t.timeout) : {
        connect: r,
        socket: r
    };
}
const a = /^https?:\/\//i, s = function(e) {
    if (!a.test(e.url)) throw new Error('"'.concat(e.url, '" is not a valid URL'));
};
function c(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
;
 //# sourceMappingURL=_commonjsHelpers.js.map
}),
"[project]/frontend/node_modules/get-it/dist/index.browser.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "adapter",
    ()=>c,
    "environment",
    ()=>f,
    "getIt",
    ()=>p
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_class_private_field_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_class_private_field_init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_class_private_field_set.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$get$2d$it$2f$dist$2f$_chunks$2d$es$2f$_commonjsHelpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/get-it/dist/_chunks-es/_commonjsHelpers.js [app-client] (ecmascript)");
;
;
;
;
;
const o = [
    "request",
    "response",
    "progress",
    "error",
    "abort"
], n = [
    "processOptions",
    "validateOptions",
    "interceptRequest",
    "finalizeOptions",
    "onRequest",
    "onResponse",
    "onError",
    "onReturn",
    "onHeaders"
];
function s(r, a) {
    const i = [], u = n.reduce((e, t)=>(e[t] = e[t] || [], e), {
        processOptions: [
            __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$get$2d$it$2f$dist$2f$_chunks$2d$es$2f$_commonjsHelpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["p"]
        ],
        validateOptions: [
            __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$get$2d$it$2f$dist$2f$_chunks$2d$es$2f$_commonjsHelpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["v"]
        ]
    });
    function l(e) {
        const t = o.reduce((e, t)=>(e[t] = function() {
                const e = /* @__PURE__ */ Object.create(null);
                let t = 0;
                return {
                    publish: function(t) {
                        for(const r in e)e[r](t);
                    },
                    subscribe: function(r) {
                        const o = t++;
                        return e[o] = r, function() {
                            delete e[o];
                        };
                    }
                };
            }(), e), {}), r = ((e)=>function(t, r) {
                for(var _len = arguments.length, o = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                    o[_key - 2] = arguments[_key];
                }
                const n = "onError" === t;
                let s = r;
                for(let r = 0; r < e[t].length && (s = (0, e[t][r])(s, ...o), !n || s); r++);
                return s;
            })(u), n = r("processOptions", e);
        r("validateOptions", n);
        const s = {
            options: n,
            channels: t,
            applyMiddleware: r
        };
        let i;
        const l = t.request.subscribe((e)=>{
            i = a(e, (o, n)=>((e, o, n)=>{
                    let s = e, a = o;
                    if (!s) try {
                        a = r("onResponse", o, n);
                    } catch (e) {
                        a = null, s = e;
                    }
                    s = s && r("onError", s, n), s ? t.error.publish(s) : a && t.response.publish(a);
                })(o, n, e));
        });
        t.abort.subscribe(()=>{
            l(), i && i.abort();
        });
        const c = r("onReturn", t, s);
        return c === t && t.request.publish(s), c;
    }
    return l.use = function(e) {
        if (!e) throw new Error("Tried to add middleware that resolved to falsey value");
        if ("function" == typeof e) throw new Error("Tried to add middleware that was a function. It probably expects you to pass options to it.");
        if (e.onReturn && u.onReturn.length > 0) throw new Error("Tried to add new middleware with `onReturn` handler, but another handler has already been registered for this event");
        return n.forEach((t)=>{
            e[t] && u[t].push(e[t]);
        }), i.push(e), l;
    }, l.clone = ()=>s(i, a), r.forEach(l.use), l;
}
var a, i, u = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$get$2d$it$2f$dist$2f$_chunks$2d$es$2f$_commonjsHelpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["g"])(function() {
    if (i) return a;
    i = 1;
    var e = function(e) {
        return e.replace(/^\s+|\s+$/g, "");
    }, t = function(e) {
        return "[object Array]" === Object.prototype.toString.call(e);
    };
    return a = function(r) {
        if (!r) return {};
        for(var o = /* @__PURE__ */ Object.create(null), n = e(r).split("\n"), s = 0; s < n.length; s++){
            var a = n[s], i = a.indexOf(":"), u = e(a.slice(0, i)).toLowerCase(), l = e(a.slice(i + 1));
            typeof o[u] > "u" ? o[u] = l : t(o[u]) ? o[u].push(l) : o[u] = [
                o[u],
                l
            ];
        }
        return o;
    };
}());
var _e = /*#__PURE__*/ new WeakMap(), _t = /*#__PURE__*/ new WeakMap(), _r = /*#__PURE__*/ new WeakMap(), _o = /*#__PURE__*/ new WeakMap(), _n = /*#__PURE__*/ new WeakMap(), _s = /*#__PURE__*/ new WeakMap(), _a = /*#__PURE__*/ new WeakMap();
class l {
    open(e, t, r) {
        var _this_onreadystatechange, _this;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _e, e), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _t, t), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _r, ""), this.readyState = 1, (_this_onreadystatechange = (_this = this).onreadystatechange) === null || _this_onreadystatechange === void 0 ? void 0 : _this_onreadystatechange.call(_this), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _n, void 0);
    }
    abort() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _n) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _n).abort();
    }
    getAllResponseHeaders() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _r);
    }
    setRequestHeader(e, t) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _o)[e] = t;
    }
    setInit(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _s, e), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _a, t);
    }
    send(e) {
        const t = "arraybuffer" !== this.responseType, r = {
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _s),
            method: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _e),
            headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _o),
            body: e
        };
        "function" == typeof AbortController && (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _a) && ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _n, new AbortController), typeof EventTarget < "u" && (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _n).signal instanceof EventTarget && (r.signal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _n).signal)), typeof document < "u" && (r.credentials = this.withCredentials ? "include" : "omit"), fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _t), r).then((e)=>{
            var _this_onreadystatechange, _this;
            return e.headers.forEach((e, t)=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _r, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _r) + "".concat(t, ": ").concat(e, "\r\n"));
            }), this.status = e.status, this.statusText = e.statusText, this.readyState = 3, (_this_onreadystatechange = (_this = this).onreadystatechange) === null || _this_onreadystatechange === void 0 ? void 0 : _this_onreadystatechange.call(_this), t ? e.text() : e.arrayBuffer();
        }).then((e)=>{
            var _this_onreadystatechange, _this;
            "string" == typeof e ? this.responseText = e : this.response = e, this.readyState = 4, (_this_onreadystatechange = (_this = this).onreadystatechange) === null || _this_onreadystatechange === void 0 ? void 0 : _this_onreadystatechange.call(_this);
        }).catch((e)=>{
            var _this_onerror, _this, _this_onabort, _this1;
            "AbortError" !== e.name ? (_this_onerror = (_this = this).onerror) === null || _this_onerror === void 0 ? void 0 : _this_onerror.call(_this, e) : (_this_onabort = (_this1 = this).onabort) === null || _this_onabort === void 0 ? void 0 : _this_onabort.call(_this1);
        });
    }
    constructor(){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "onabort", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "onerror", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "onreadystatechange", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "ontimeout", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "readyState", 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "response", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "responseText", "");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "responseType", "");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "status", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "statusText", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "withCredentials", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _e, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _t, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _r, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _o, {
            writable: true,
            value: {}
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _n, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _s, {
            writable: true,
            value: {}
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _a, {
            writable: true,
            value: void 0
        });
    }
}
const c = "function" == typeof XMLHttpRequest ? "xhr" : "fetch", h = "xhr" === c ? XMLHttpRequest : l, d = (e, t)=>{
    const r = e.options, o = e.applyMiddleware("finalizeOptions", r), n = {}, s = e.applyMiddleware("interceptRequest", void 0, {
        adapter: c,
        context: e
    });
    if (s) {
        const e = setTimeout(t, 0, null, s);
        return {
            abort: ()=>clearTimeout(e)
        };
    }
    let a = new h;
    var _o_useAbortSignal;
    a instanceof l && "object" == typeof o.fetch && a.setInit(o.fetch, (_o_useAbortSignal = o.useAbortSignal) !== null && _o_useAbortSignal !== void 0 ? _o_useAbortSignal : !0);
    const i = o.headers, d = o.timeout;
    let p = !1, f = !1, b = !1;
    if (a.onerror = (e)=>{
        m(a instanceof l ? e instanceof Error ? e : new Error("Request error while attempting to reach is ".concat(o.url), {
            cause: e
        }) : new Error("Request error while attempting to reach is ".concat(o.url).concat(e.lengthComputable ? "(".concat(e.loaded, " of ").concat(e.total, " bytes transferred)") : "")));
    }, a.ontimeout = (e)=>{
        m(new Error("Request timeout while attempting to reach ".concat(o.url).concat(e.lengthComputable ? "(".concat(e.loaded, " of ").concat(e.total, " bytes transferred)") : "")));
    }, a.onabort = ()=>{
        w(!0), p = !0;
    }, a.onreadystatechange = function() {
        d && (w(), n.socket = setTimeout(()=>y("ESOCKETTIMEDOUT"), d.socket)), !p && a && 4 === a.readyState && 0 !== a.status && function() {
            if (!(p || f || b)) {
                if (0 === a.status) return void m(new Error("Unknown XHR error"));
                w(), f = !0, t(null, {
                    body: a.response || ("" === a.responseType || "text" === a.responseType ? a.responseText : ""),
                    url: o.url,
                    method: o.method,
                    headers: u(a.getAllResponseHeaders()),
                    statusCode: a.status,
                    statusMessage: a.statusText
                });
            }
        }();
    }, a.open(o.method, o.url, !0), a.withCredentials = !!o.withCredentials, i && a.setRequestHeader) for(const e in i)i.hasOwnProperty(e) && a.setRequestHeader(e, i[e]);
    return o.rawBody && (a.responseType = "arraybuffer"), e.applyMiddleware("onRequest", {
        options: o,
        adapter: c,
        request: a,
        context: e
    }), a.send(o.body || null), d && (n.connect = setTimeout(()=>y("ETIMEDOUT"), d.connect)), {
        abort: function() {
            p = !0, a && a.abort();
        }
    };
    //TURBOPACK unreachable
    ;
    function y(t) {
        b = !0, a.abort();
        const r = new Error("ESOCKETTIMEDOUT" === t ? "Socket timed out on request to ".concat(o.url) : "Connection timed out on request to ".concat(o.url));
        r.code = t, e.channels.error.publish(r);
    }
    function w(e) {
        (e || p || a && a.readyState >= 2 && n.connect) && clearTimeout(n.connect), n.socket && clearTimeout(n.socket);
    }
    function m(e) {
        if (f) return;
        w(!0), f = !0, a = null;
        const r = e || new Error("Network error while attempting to reach ".concat(o.url));
        r.isNetworkError = !0, r.request = o, t(r);
    }
}, p = function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : d;
    return s(e, t);
}, f = "browser";
;
 //# sourceMappingURL=index.browser.js.map
}),
"[project]/frontend/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

(function() {
    var e = {
        675: function(e, r) {
            "use strict";
            r.byteLength = byteLength;
            r.toByteArray = toByteArray;
            r.fromByteArray = fromByteArray;
            var t = [];
            var f = [];
            var n = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
            var i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
            for(var o = 0, u = i.length; o < u; ++o){
                t[o] = i[o];
                f[i.charCodeAt(o)] = o;
            }
            f["-".charCodeAt(0)] = 62;
            f["_".charCodeAt(0)] = 63;
            function getLens(e) {
                var r = e.length;
                if (r % 4 > 0) {
                    throw new Error("Invalid string. Length must be a multiple of 4");
                }
                var t = e.indexOf("=");
                if (t === -1) t = r;
                var f = t === r ? 0 : 4 - t % 4;
                return [
                    t,
                    f
                ];
            }
            function byteLength(e) {
                var r = getLens(e);
                var t = r[0];
                var f = r[1];
                return (t + f) * 3 / 4 - f;
            }
            function _byteLength(e, r, t) {
                return (r + t) * 3 / 4 - t;
            }
            function toByteArray(e) {
                var r;
                var t = getLens(e);
                var i = t[0];
                var o = t[1];
                var u = new n(_byteLength(e, i, o));
                var a = 0;
                var s = o > 0 ? i - 4 : i;
                var h;
                for(h = 0; h < s; h += 4){
                    r = f[e.charCodeAt(h)] << 18 | f[e.charCodeAt(h + 1)] << 12 | f[e.charCodeAt(h + 2)] << 6 | f[e.charCodeAt(h + 3)];
                    u[a++] = r >> 16 & 255;
                    u[a++] = r >> 8 & 255;
                    u[a++] = r & 255;
                }
                if (o === 2) {
                    r = f[e.charCodeAt(h)] << 2 | f[e.charCodeAt(h + 1)] >> 4;
                    u[a++] = r & 255;
                }
                if (o === 1) {
                    r = f[e.charCodeAt(h)] << 10 | f[e.charCodeAt(h + 1)] << 4 | f[e.charCodeAt(h + 2)] >> 2;
                    u[a++] = r >> 8 & 255;
                    u[a++] = r & 255;
                }
                return u;
            }
            function tripletToBase64(e) {
                return t[e >> 18 & 63] + t[e >> 12 & 63] + t[e >> 6 & 63] + t[e & 63];
            }
            function encodeChunk(e, r, t) {
                var f;
                var n = [];
                for(var i = r; i < t; i += 3){
                    f = (e[i] << 16 & 16711680) + (e[i + 1] << 8 & 65280) + (e[i + 2] & 255);
                    n.push(tripletToBase64(f));
                }
                return n.join("");
            }
            function fromByteArray(e) {
                var r;
                var f = e.length;
                var n = f % 3;
                var i = [];
                var o = 16383;
                for(var u = 0, a = f - n; u < a; u += o){
                    i.push(encodeChunk(e, u, u + o > a ? a : u + o));
                }
                if (n === 1) {
                    r = e[f - 1];
                    i.push(t[r >> 2] + t[r << 4 & 63] + "==");
                } else if (n === 2) {
                    r = (e[f - 2] << 8) + e[f - 1];
                    i.push(t[r >> 10] + t[r >> 4 & 63] + t[r << 2 & 63] + "=");
                }
                return i.join("");
            }
        },
        72: function(e, r, t) {
            "use strict";
            /*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ var f = t(675);
            var n = t(783);
            var i = typeof Symbol === "function" && typeof Symbol.for === "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
            r.Buffer = Buffer;
            r.SlowBuffer = SlowBuffer;
            r.INSPECT_MAX_BYTES = 50;
            var o = 2147483647;
            r.kMaxLength = o;
            Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();
            if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") {
                console.error("This browser lacks typed array (Uint8Array) support which is required by " + "`buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
            }
            function typedArraySupport() {
                try {
                    var e = new Uint8Array(1);
                    var r = {
                        foo: function() {
                            return 42;
                        }
                    };
                    Object.setPrototypeOf(r, Uint8Array.prototype);
                    Object.setPrototypeOf(e, r);
                    return e.foo() === 42;
                } catch (e) {
                    return false;
                }
            }
            Object.defineProperty(Buffer.prototype, "parent", {
                enumerable: true,
                get: function() {
                    if (!Buffer.isBuffer(this)) return undefined;
                    return this.buffer;
                }
            });
            Object.defineProperty(Buffer.prototype, "offset", {
                enumerable: true,
                get: function() {
                    if (!Buffer.isBuffer(this)) return undefined;
                    return this.byteOffset;
                }
            });
            function createBuffer(e) {
                if (e > o) {
                    throw new RangeError('The value "' + e + '" is invalid for option "size"');
                }
                var r = new Uint8Array(e);
                Object.setPrototypeOf(r, Buffer.prototype);
                return r;
            }
            function Buffer(e, r, t) {
                if (typeof e === "number") {
                    if (typeof r === "string") {
                        throw new TypeError('The "string" argument must be of type string. Received type number');
                    }
                    return allocUnsafe(e);
                }
                return from(e, r, t);
            }
            Buffer.poolSize = 8192;
            function from(e, r, t) {
                if (typeof e === "string") {
                    return fromString(e, r);
                }
                if (ArrayBuffer.isView(e)) {
                    return fromArrayLike(e);
                }
                if (e == null) {
                    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, " + "or Array-like Object. Received type " + typeof e);
                }
                if (isInstance(e, ArrayBuffer) || e && isInstance(e.buffer, ArrayBuffer)) {
                    return fromArrayBuffer(e, r, t);
                }
                if (typeof SharedArrayBuffer !== "undefined" && (isInstance(e, SharedArrayBuffer) || e && isInstance(e.buffer, SharedArrayBuffer))) {
                    return fromArrayBuffer(e, r, t);
                }
                if (typeof e === "number") {
                    throw new TypeError('The "value" argument must not be of type number. Received type number');
                }
                var f = e.valueOf && e.valueOf();
                if (f != null && f !== e) {
                    return Buffer.from(f, r, t);
                }
                var n = fromObject(e);
                if (n) return n;
                if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof e[Symbol.toPrimitive] === "function") {
                    return Buffer.from(e[Symbol.toPrimitive]("string"), r, t);
                }
                throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, " + "or Array-like Object. Received type " + typeof e);
            }
            Buffer.from = function(e, r, t) {
                return from(e, r, t);
            };
            Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype);
            Object.setPrototypeOf(Buffer, Uint8Array);
            function assertSize(e) {
                if (typeof e !== "number") {
                    throw new TypeError('"size" argument must be of type number');
                } else if (e < 0) {
                    throw new RangeError('The value "' + e + '" is invalid for option "size"');
                }
            }
            function alloc(e, r, t) {
                assertSize(e);
                if (e <= 0) {
                    return createBuffer(e);
                }
                if (r !== undefined) {
                    return typeof t === "string" ? createBuffer(e).fill(r, t) : createBuffer(e).fill(r);
                }
                return createBuffer(e);
            }
            Buffer.alloc = function(e, r, t) {
                return alloc(e, r, t);
            };
            function allocUnsafe(e) {
                assertSize(e);
                return createBuffer(e < 0 ? 0 : checked(e) | 0);
            }
            Buffer.allocUnsafe = function(e) {
                return allocUnsafe(e);
            };
            Buffer.allocUnsafeSlow = function(e) {
                return allocUnsafe(e);
            };
            function fromString(e, r) {
                if (typeof r !== "string" || r === "") {
                    r = "utf8";
                }
                if (!Buffer.isEncoding(r)) {
                    throw new TypeError("Unknown encoding: " + r);
                }
                var t = byteLength(e, r) | 0;
                var f = createBuffer(t);
                var n = f.write(e, r);
                if (n !== t) {
                    f = f.slice(0, n);
                }
                return f;
            }
            function fromArrayLike(e) {
                var r = e.length < 0 ? 0 : checked(e.length) | 0;
                var t = createBuffer(r);
                for(var f = 0; f < r; f += 1){
                    t[f] = e[f] & 255;
                }
                return t;
            }
            function fromArrayBuffer(e, r, t) {
                if (r < 0 || e.byteLength < r) {
                    throw new RangeError('"offset" is outside of buffer bounds');
                }
                if (e.byteLength < r + (t || 0)) {
                    throw new RangeError('"length" is outside of buffer bounds');
                }
                var f;
                if (r === undefined && t === undefined) {
                    f = new Uint8Array(e);
                } else if (t === undefined) {
                    f = new Uint8Array(e, r);
                } else {
                    f = new Uint8Array(e, r, t);
                }
                Object.setPrototypeOf(f, Buffer.prototype);
                return f;
            }
            function fromObject(e) {
                if (Buffer.isBuffer(e)) {
                    var r = checked(e.length) | 0;
                    var t = createBuffer(r);
                    if (t.length === 0) {
                        return t;
                    }
                    e.copy(t, 0, 0, r);
                    return t;
                }
                if (e.length !== undefined) {
                    if (typeof e.length !== "number" || numberIsNaN(e.length)) {
                        return createBuffer(0);
                    }
                    return fromArrayLike(e);
                }
                if (e.type === "Buffer" && Array.isArray(e.data)) {
                    return fromArrayLike(e.data);
                }
            }
            function checked(e) {
                if (e >= o) {
                    throw new RangeError("Attempt to allocate Buffer larger than maximum " + "size: 0x" + o.toString(16) + " bytes");
                }
                return e | 0;
            }
            function SlowBuffer(e) {
                if (+e != e) {
                    e = 0;
                }
                return Buffer.alloc(+e);
            }
            Buffer.isBuffer = function isBuffer(e) {
                return e != null && e._isBuffer === true && e !== Buffer.prototype;
            };
            Buffer.compare = function compare(e, r) {
                if (isInstance(e, Uint8Array)) e = Buffer.from(e, e.offset, e.byteLength);
                if (isInstance(r, Uint8Array)) r = Buffer.from(r, r.offset, r.byteLength);
                if (!Buffer.isBuffer(e) || !Buffer.isBuffer(r)) {
                    throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                }
                if (e === r) return 0;
                var t = e.length;
                var f = r.length;
                for(var n = 0, i = Math.min(t, f); n < i; ++n){
                    if (e[n] !== r[n]) {
                        t = e[n];
                        f = r[n];
                        break;
                    }
                }
                if (t < f) return -1;
                if (f < t) return 1;
                return 0;
            };
            Buffer.isEncoding = function isEncoding(e) {
                switch(String(e).toLowerCase()){
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "latin1":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return true;
                    default:
                        return false;
                }
            };
            Buffer.concat = function concat(e, r) {
                if (!Array.isArray(e)) {
                    throw new TypeError('"list" argument must be an Array of Buffers');
                }
                if (e.length === 0) {
                    return Buffer.alloc(0);
                }
                var t;
                if (r === undefined) {
                    r = 0;
                    for(t = 0; t < e.length; ++t){
                        r += e[t].length;
                    }
                }
                var f = Buffer.allocUnsafe(r);
                var n = 0;
                for(t = 0; t < e.length; ++t){
                    var i = e[t];
                    if (isInstance(i, Uint8Array)) {
                        i = Buffer.from(i);
                    }
                    if (!Buffer.isBuffer(i)) {
                        throw new TypeError('"list" argument must be an Array of Buffers');
                    }
                    i.copy(f, n);
                    n += i.length;
                }
                return f;
            };
            function byteLength(e, r) {
                if (Buffer.isBuffer(e)) {
                    return e.length;
                }
                if (ArrayBuffer.isView(e) || isInstance(e, ArrayBuffer)) {
                    return e.byteLength;
                }
                if (typeof e !== "string") {
                    throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. ' + "Received type " + typeof e);
                }
                var t = e.length;
                var f = arguments.length > 2 && arguments[2] === true;
                if (!f && t === 0) return 0;
                var n = false;
                for(;;){
                    switch(r){
                        case "ascii":
                        case "latin1":
                        case "binary":
                            return t;
                        case "utf8":
                        case "utf-8":
                            return utf8ToBytes(e).length;
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return t * 2;
                        case "hex":
                            return t >>> 1;
                        case "base64":
                            return base64ToBytes(e).length;
                        default:
                            if (n) {
                                return f ? -1 : utf8ToBytes(e).length;
                            }
                            r = ("" + r).toLowerCase();
                            n = true;
                    }
                }
            }
            Buffer.byteLength = byteLength;
            function slowToString(e, r, t) {
                var f = false;
                if (r === undefined || r < 0) {
                    r = 0;
                }
                if (r > this.length) {
                    return "";
                }
                if (t === undefined || t > this.length) {
                    t = this.length;
                }
                if (t <= 0) {
                    return "";
                }
                t >>>= 0;
                r >>>= 0;
                if (t <= r) {
                    return "";
                }
                if (!e) e = "utf8";
                while(true){
                    switch(e){
                        case "hex":
                            return hexSlice(this, r, t);
                        case "utf8":
                        case "utf-8":
                            return utf8Slice(this, r, t);
                        case "ascii":
                            return asciiSlice(this, r, t);
                        case "latin1":
                        case "binary":
                            return latin1Slice(this, r, t);
                        case "base64":
                            return base64Slice(this, r, t);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return utf16leSlice(this, r, t);
                        default:
                            if (f) throw new TypeError("Unknown encoding: " + e);
                            e = (e + "").toLowerCase();
                            f = true;
                    }
                }
            }
            Buffer.prototype._isBuffer = true;
            function swap(e, r, t) {
                var f = e[r];
                e[r] = e[t];
                e[t] = f;
            }
            Buffer.prototype.swap16 = function swap16() {
                var e = this.length;
                if (e % 2 !== 0) {
                    throw new RangeError("Buffer size must be a multiple of 16-bits");
                }
                for(var r = 0; r < e; r += 2){
                    swap(this, r, r + 1);
                }
                return this;
            };
            Buffer.prototype.swap32 = function swap32() {
                var e = this.length;
                if (e % 4 !== 0) {
                    throw new RangeError("Buffer size must be a multiple of 32-bits");
                }
                for(var r = 0; r < e; r += 4){
                    swap(this, r, r + 3);
                    swap(this, r + 1, r + 2);
                }
                return this;
            };
            Buffer.prototype.swap64 = function swap64() {
                var e = this.length;
                if (e % 8 !== 0) {
                    throw new RangeError("Buffer size must be a multiple of 64-bits");
                }
                for(var r = 0; r < e; r += 8){
                    swap(this, r, r + 7);
                    swap(this, r + 1, r + 6);
                    swap(this, r + 2, r + 5);
                    swap(this, r + 3, r + 4);
                }
                return this;
            };
            Buffer.prototype.toString = function toString() {
                var e = this.length;
                if (e === 0) return "";
                if (arguments.length === 0) return utf8Slice(this, 0, e);
                return slowToString.apply(this, arguments);
            };
            Buffer.prototype.toLocaleString = Buffer.prototype.toString;
            Buffer.prototype.equals = function equals(e) {
                if (!Buffer.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                if (this === e) return true;
                return Buffer.compare(this, e) === 0;
            };
            Buffer.prototype.inspect = function inspect() {
                var e = "";
                var t = r.INSPECT_MAX_BYTES;
                e = this.toString("hex", 0, t).replace(/(.{2})/g, "$1 ").trim();
                if (this.length > t) e += " ... ";
                return "<Buffer " + e + ">";
            };
            if (i) {
                Buffer.prototype[i] = Buffer.prototype.inspect;
            }
            Buffer.prototype.compare = function compare(e, r, t, f, n) {
                if (isInstance(e, Uint8Array)) {
                    e = Buffer.from(e, e.offset, e.byteLength);
                }
                if (!Buffer.isBuffer(e)) {
                    throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. ' + "Received type " + typeof e);
                }
                if (r === undefined) {
                    r = 0;
                }
                if (t === undefined) {
                    t = e ? e.length : 0;
                }
                if (f === undefined) {
                    f = 0;
                }
                if (n === undefined) {
                    n = this.length;
                }
                if (r < 0 || t > e.length || f < 0 || n > this.length) {
                    throw new RangeError("out of range index");
                }
                if (f >= n && r >= t) {
                    return 0;
                }
                if (f >= n) {
                    return -1;
                }
                if (r >= t) {
                    return 1;
                }
                r >>>= 0;
                t >>>= 0;
                f >>>= 0;
                n >>>= 0;
                if (this === e) return 0;
                var i = n - f;
                var o = t - r;
                var u = Math.min(i, o);
                var a = this.slice(f, n);
                var s = e.slice(r, t);
                for(var h = 0; h < u; ++h){
                    if (a[h] !== s[h]) {
                        i = a[h];
                        o = s[h];
                        break;
                    }
                }
                if (i < o) return -1;
                if (o < i) return 1;
                return 0;
            };
            function bidirectionalIndexOf(e, r, t, f, n) {
                if (e.length === 0) return -1;
                if (typeof t === "string") {
                    f = t;
                    t = 0;
                } else if (t > 2147483647) {
                    t = 2147483647;
                } else if (t < -2147483648) {
                    t = -2147483648;
                }
                t = +t;
                if (numberIsNaN(t)) {
                    t = n ? 0 : e.length - 1;
                }
                if (t < 0) t = e.length + t;
                if (t >= e.length) {
                    if (n) return -1;
                    else t = e.length - 1;
                } else if (t < 0) {
                    if (n) t = 0;
                    else return -1;
                }
                if (typeof r === "string") {
                    r = Buffer.from(r, f);
                }
                if (Buffer.isBuffer(r)) {
                    if (r.length === 0) {
                        return -1;
                    }
                    return arrayIndexOf(e, r, t, f, n);
                } else if (typeof r === "number") {
                    r = r & 255;
                    if (typeof Uint8Array.prototype.indexOf === "function") {
                        if (n) {
                            return Uint8Array.prototype.indexOf.call(e, r, t);
                        } else {
                            return Uint8Array.prototype.lastIndexOf.call(e, r, t);
                        }
                    }
                    return arrayIndexOf(e, [
                        r
                    ], t, f, n);
                }
                throw new TypeError("val must be string, number or Buffer");
            }
            function arrayIndexOf(e, r, t, f, n) {
                var i = 1;
                var o = e.length;
                var u = r.length;
                if (f !== undefined) {
                    f = String(f).toLowerCase();
                    if (f === "ucs2" || f === "ucs-2" || f === "utf16le" || f === "utf-16le") {
                        if (e.length < 2 || r.length < 2) {
                            return -1;
                        }
                        i = 2;
                        o /= 2;
                        u /= 2;
                        t /= 2;
                    }
                }
                function read(e, r) {
                    if (i === 1) {
                        return e[r];
                    } else {
                        return e.readUInt16BE(r * i);
                    }
                }
                var a;
                if (n) {
                    var s = -1;
                    for(a = t; a < o; a++){
                        if (read(e, a) === read(r, s === -1 ? 0 : a - s)) {
                            if (s === -1) s = a;
                            if (a - s + 1 === u) return s * i;
                        } else {
                            if (s !== -1) a -= a - s;
                            s = -1;
                        }
                    }
                } else {
                    if (t + u > o) t = o - u;
                    for(a = t; a >= 0; a--){
                        var h = true;
                        for(var c = 0; c < u; c++){
                            if (read(e, a + c) !== read(r, c)) {
                                h = false;
                                break;
                            }
                        }
                        if (h) return a;
                    }
                }
                return -1;
            }
            Buffer.prototype.includes = function includes(e, r, t) {
                return this.indexOf(e, r, t) !== -1;
            };
            Buffer.prototype.indexOf = function indexOf(e, r, t) {
                return bidirectionalIndexOf(this, e, r, t, true);
            };
            Buffer.prototype.lastIndexOf = function lastIndexOf(e, r, t) {
                return bidirectionalIndexOf(this, e, r, t, false);
            };
            function hexWrite(e, r, t, f) {
                t = Number(t) || 0;
                var n = e.length - t;
                if (!f) {
                    f = n;
                } else {
                    f = Number(f);
                    if (f > n) {
                        f = n;
                    }
                }
                var i = r.length;
                if (f > i / 2) {
                    f = i / 2;
                }
                for(var o = 0; o < f; ++o){
                    var u = parseInt(r.substr(o * 2, 2), 16);
                    if (numberIsNaN(u)) return o;
                    e[t + o] = u;
                }
                return o;
            }
            function utf8Write(e, r, t, f) {
                return blitBuffer(utf8ToBytes(r, e.length - t), e, t, f);
            }
            function asciiWrite(e, r, t, f) {
                return blitBuffer(asciiToBytes(r), e, t, f);
            }
            function latin1Write(e, r, t, f) {
                return asciiWrite(e, r, t, f);
            }
            function base64Write(e, r, t, f) {
                return blitBuffer(base64ToBytes(r), e, t, f);
            }
            function ucs2Write(e, r, t, f) {
                return blitBuffer(utf16leToBytes(r, e.length - t), e, t, f);
            }
            Buffer.prototype.write = function write(e, r, t, f) {
                if (r === undefined) {
                    f = "utf8";
                    t = this.length;
                    r = 0;
                } else if (t === undefined && typeof r === "string") {
                    f = r;
                    t = this.length;
                    r = 0;
                } else if (isFinite(r)) {
                    r = r >>> 0;
                    if (isFinite(t)) {
                        t = t >>> 0;
                        if (f === undefined) f = "utf8";
                    } else {
                        f = t;
                        t = undefined;
                    }
                } else {
                    throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                }
                var n = this.length - r;
                if (t === undefined || t > n) t = n;
                if (e.length > 0 && (t < 0 || r < 0) || r > this.length) {
                    throw new RangeError("Attempt to write outside buffer bounds");
                }
                if (!f) f = "utf8";
                var i = false;
                for(;;){
                    switch(f){
                        case "hex":
                            return hexWrite(this, e, r, t);
                        case "utf8":
                        case "utf-8":
                            return utf8Write(this, e, r, t);
                        case "ascii":
                            return asciiWrite(this, e, r, t);
                        case "latin1":
                        case "binary":
                            return latin1Write(this, e, r, t);
                        case "base64":
                            return base64Write(this, e, r, t);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return ucs2Write(this, e, r, t);
                        default:
                            if (i) throw new TypeError("Unknown encoding: " + f);
                            f = ("" + f).toLowerCase();
                            i = true;
                    }
                }
            };
            Buffer.prototype.toJSON = function toJSON() {
                return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0)
                };
            };
            function base64Slice(e, r, t) {
                if (r === 0 && t === e.length) {
                    return f.fromByteArray(e);
                } else {
                    return f.fromByteArray(e.slice(r, t));
                }
            }
            function utf8Slice(e, r, t) {
                t = Math.min(e.length, t);
                var f = [];
                var n = r;
                while(n < t){
                    var i = e[n];
                    var o = null;
                    var u = i > 239 ? 4 : i > 223 ? 3 : i > 191 ? 2 : 1;
                    if (n + u <= t) {
                        var a, s, h, c;
                        switch(u){
                            case 1:
                                if (i < 128) {
                                    o = i;
                                }
                                break;
                            case 2:
                                a = e[n + 1];
                                if ((a & 192) === 128) {
                                    c = (i & 31) << 6 | a & 63;
                                    if (c > 127) {
                                        o = c;
                                    }
                                }
                                break;
                            case 3:
                                a = e[n + 1];
                                s = e[n + 2];
                                if ((a & 192) === 128 && (s & 192) === 128) {
                                    c = (i & 15) << 12 | (a & 63) << 6 | s & 63;
                                    if (c > 2047 && (c < 55296 || c > 57343)) {
                                        o = c;
                                    }
                                }
                                break;
                            case 4:
                                a = e[n + 1];
                                s = e[n + 2];
                                h = e[n + 3];
                                if ((a & 192) === 128 && (s & 192) === 128 && (h & 192) === 128) {
                                    c = (i & 15) << 18 | (a & 63) << 12 | (s & 63) << 6 | h & 63;
                                    if (c > 65535 && c < 1114112) {
                                        o = c;
                                    }
                                }
                        }
                    }
                    if (o === null) {
                        o = 65533;
                        u = 1;
                    } else if (o > 65535) {
                        o -= 65536;
                        f.push(o >>> 10 & 1023 | 55296);
                        o = 56320 | o & 1023;
                    }
                    f.push(o);
                    n += u;
                }
                return decodeCodePointsArray(f);
            }
            var u = 4096;
            function decodeCodePointsArray(e) {
                var r = e.length;
                if (r <= u) {
                    return String.fromCharCode.apply(String, e);
                }
                var t = "";
                var f = 0;
                while(f < r){
                    t += String.fromCharCode.apply(String, e.slice(f, f += u));
                }
                return t;
            }
            function asciiSlice(e, r, t) {
                var f = "";
                t = Math.min(e.length, t);
                for(var n = r; n < t; ++n){
                    f += String.fromCharCode(e[n] & 127);
                }
                return f;
            }
            function latin1Slice(e, r, t) {
                var f = "";
                t = Math.min(e.length, t);
                for(var n = r; n < t; ++n){
                    f += String.fromCharCode(e[n]);
                }
                return f;
            }
            function hexSlice(e, r, t) {
                var f = e.length;
                if (!r || r < 0) r = 0;
                if (!t || t < 0 || t > f) t = f;
                var n = "";
                for(var i = r; i < t; ++i){
                    n += s[e[i]];
                }
                return n;
            }
            function utf16leSlice(e, r, t) {
                var f = e.slice(r, t);
                var n = "";
                for(var i = 0; i < f.length; i += 2){
                    n += String.fromCharCode(f[i] + f[i + 1] * 256);
                }
                return n;
            }
            Buffer.prototype.slice = function slice(e, r) {
                var t = this.length;
                e = ~~e;
                r = r === undefined ? t : ~~r;
                if (e < 0) {
                    e += t;
                    if (e < 0) e = 0;
                } else if (e > t) {
                    e = t;
                }
                if (r < 0) {
                    r += t;
                    if (r < 0) r = 0;
                } else if (r > t) {
                    r = t;
                }
                if (r < e) r = e;
                var f = this.subarray(e, r);
                Object.setPrototypeOf(f, Buffer.prototype);
                return f;
            };
            function checkOffset(e, r, t) {
                if (e % 1 !== 0 || e < 0) throw new RangeError("offset is not uint");
                if (e + r > t) throw new RangeError("Trying to access beyond buffer length");
            }
            Buffer.prototype.readUIntLE = function readUIntLE(e, r, t) {
                e = e >>> 0;
                r = r >>> 0;
                if (!t) checkOffset(e, r, this.length);
                var f = this[e];
                var n = 1;
                var i = 0;
                while(++i < r && (n *= 256)){
                    f += this[e + i] * n;
                }
                return f;
            };
            Buffer.prototype.readUIntBE = function readUIntBE(e, r, t) {
                e = e >>> 0;
                r = r >>> 0;
                if (!t) {
                    checkOffset(e, r, this.length);
                }
                var f = this[e + --r];
                var n = 1;
                while(r > 0 && (n *= 256)){
                    f += this[e + --r] * n;
                }
                return f;
            };
            Buffer.prototype.readUInt8 = function readUInt8(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 1, this.length);
                return this[e];
            };
            Buffer.prototype.readUInt16LE = function readUInt16LE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 2, this.length);
                return this[e] | this[e + 1] << 8;
            };
            Buffer.prototype.readUInt16BE = function readUInt16BE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 2, this.length);
                return this[e] << 8 | this[e + 1];
            };
            Buffer.prototype.readUInt32LE = function readUInt32LE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + this[e + 3] * 16777216;
            };
            Buffer.prototype.readUInt32BE = function readUInt32BE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return this[e] * 16777216 + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
            };
            Buffer.prototype.readIntLE = function readIntLE(e, r, t) {
                e = e >>> 0;
                r = r >>> 0;
                if (!t) checkOffset(e, r, this.length);
                var f = this[e];
                var n = 1;
                var i = 0;
                while(++i < r && (n *= 256)){
                    f += this[e + i] * n;
                }
                n *= 128;
                if (f >= n) f -= Math.pow(2, 8 * r);
                return f;
            };
            Buffer.prototype.readIntBE = function readIntBE(e, r, t) {
                e = e >>> 0;
                r = r >>> 0;
                if (!t) checkOffset(e, r, this.length);
                var f = r;
                var n = 1;
                var i = this[e + --f];
                while(f > 0 && (n *= 256)){
                    i += this[e + --f] * n;
                }
                n *= 128;
                if (i >= n) i -= Math.pow(2, 8 * r);
                return i;
            };
            Buffer.prototype.readInt8 = function readInt8(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 1, this.length);
                if (!(this[e] & 128)) return this[e];
                return (255 - this[e] + 1) * -1;
            };
            Buffer.prototype.readInt16LE = function readInt16LE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 2, this.length);
                var t = this[e] | this[e + 1] << 8;
                return t & 32768 ? t | 4294901760 : t;
            };
            Buffer.prototype.readInt16BE = function readInt16BE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 2, this.length);
                var t = this[e + 1] | this[e] << 8;
                return t & 32768 ? t | 4294901760 : t;
            };
            Buffer.prototype.readInt32LE = function readInt32LE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
            };
            Buffer.prototype.readInt32BE = function readInt32BE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
            };
            Buffer.prototype.readFloatLE = function readFloatLE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return n.read(this, e, true, 23, 4);
            };
            Buffer.prototype.readFloatBE = function readFloatBE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return n.read(this, e, false, 23, 4);
            };
            Buffer.prototype.readDoubleLE = function readDoubleLE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 8, this.length);
                return n.read(this, e, true, 52, 8);
            };
            Buffer.prototype.readDoubleBE = function readDoubleBE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 8, this.length);
                return n.read(this, e, false, 52, 8);
            };
            function checkInt(e, r, t, f, n, i) {
                if (!Buffer.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
                if (r > n || r < i) throw new RangeError('"value" argument is out of bounds');
                if (t + f > e.length) throw new RangeError("Index out of range");
            }
            Buffer.prototype.writeUIntLE = function writeUIntLE(e, r, t, f) {
                e = +e;
                r = r >>> 0;
                t = t >>> 0;
                if (!f) {
                    var n = Math.pow(2, 8 * t) - 1;
                    checkInt(this, e, r, t, n, 0);
                }
                var i = 1;
                var o = 0;
                this[r] = e & 255;
                while(++o < t && (i *= 256)){
                    this[r + o] = e / i & 255;
                }
                return r + t;
            };
            Buffer.prototype.writeUIntBE = function writeUIntBE(e, r, t, f) {
                e = +e;
                r = r >>> 0;
                t = t >>> 0;
                if (!f) {
                    var n = Math.pow(2, 8 * t) - 1;
                    checkInt(this, e, r, t, n, 0);
                }
                var i = t - 1;
                var o = 1;
                this[r + i] = e & 255;
                while(--i >= 0 && (o *= 256)){
                    this[r + i] = e / o & 255;
                }
                return r + t;
            };
            Buffer.prototype.writeUInt8 = function writeUInt8(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 1, 255, 0);
                this[r] = e & 255;
                return r + 1;
            };
            Buffer.prototype.writeUInt16LE = function writeUInt16LE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 2, 65535, 0);
                this[r] = e & 255;
                this[r + 1] = e >>> 8;
                return r + 2;
            };
            Buffer.prototype.writeUInt16BE = function writeUInt16BE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 2, 65535, 0);
                this[r] = e >>> 8;
                this[r + 1] = e & 255;
                return r + 2;
            };
            Buffer.prototype.writeUInt32LE = function writeUInt32LE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 4, 4294967295, 0);
                this[r + 3] = e >>> 24;
                this[r + 2] = e >>> 16;
                this[r + 1] = e >>> 8;
                this[r] = e & 255;
                return r + 4;
            };
            Buffer.prototype.writeUInt32BE = function writeUInt32BE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 4, 4294967295, 0);
                this[r] = e >>> 24;
                this[r + 1] = e >>> 16;
                this[r + 2] = e >>> 8;
                this[r + 3] = e & 255;
                return r + 4;
            };
            Buffer.prototype.writeIntLE = function writeIntLE(e, r, t, f) {
                e = +e;
                r = r >>> 0;
                if (!f) {
                    var n = Math.pow(2, 8 * t - 1);
                    checkInt(this, e, r, t, n - 1, -n);
                }
                var i = 0;
                var o = 1;
                var u = 0;
                this[r] = e & 255;
                while(++i < t && (o *= 256)){
                    if (e < 0 && u === 0 && this[r + i - 1] !== 0) {
                        u = 1;
                    }
                    this[r + i] = (e / o >> 0) - u & 255;
                }
                return r + t;
            };
            Buffer.prototype.writeIntBE = function writeIntBE(e, r, t, f) {
                e = +e;
                r = r >>> 0;
                if (!f) {
                    var n = Math.pow(2, 8 * t - 1);
                    checkInt(this, e, r, t, n - 1, -n);
                }
                var i = t - 1;
                var o = 1;
                var u = 0;
                this[r + i] = e & 255;
                while(--i >= 0 && (o *= 256)){
                    if (e < 0 && u === 0 && this[r + i + 1] !== 0) {
                        u = 1;
                    }
                    this[r + i] = (e / o >> 0) - u & 255;
                }
                return r + t;
            };
            Buffer.prototype.writeInt8 = function writeInt8(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 1, 127, -128);
                if (e < 0) e = 255 + e + 1;
                this[r] = e & 255;
                return r + 1;
            };
            Buffer.prototype.writeInt16LE = function writeInt16LE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 2, 32767, -32768);
                this[r] = e & 255;
                this[r + 1] = e >>> 8;
                return r + 2;
            };
            Buffer.prototype.writeInt16BE = function writeInt16BE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 2, 32767, -32768);
                this[r] = e >>> 8;
                this[r + 1] = e & 255;
                return r + 2;
            };
            Buffer.prototype.writeInt32LE = function writeInt32LE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 4, 2147483647, -2147483648);
                this[r] = e & 255;
                this[r + 1] = e >>> 8;
                this[r + 2] = e >>> 16;
                this[r + 3] = e >>> 24;
                return r + 4;
            };
            Buffer.prototype.writeInt32BE = function writeInt32BE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 4, 2147483647, -2147483648);
                if (e < 0) e = 4294967295 + e + 1;
                this[r] = e >>> 24;
                this[r + 1] = e >>> 16;
                this[r + 2] = e >>> 8;
                this[r + 3] = e & 255;
                return r + 4;
            };
            function checkIEEE754(e, r, t, f, n, i) {
                if (t + f > e.length) throw new RangeError("Index out of range");
                if (t < 0) throw new RangeError("Index out of range");
            }
            function writeFloat(e, r, t, f, i) {
                r = +r;
                t = t >>> 0;
                if (!i) {
                    checkIEEE754(e, r, t, 4, 34028234663852886e22, -34028234663852886e22);
                }
                n.write(e, r, t, f, 23, 4);
                return t + 4;
            }
            Buffer.prototype.writeFloatLE = function writeFloatLE(e, r, t) {
                return writeFloat(this, e, r, true, t);
            };
            Buffer.prototype.writeFloatBE = function writeFloatBE(e, r, t) {
                return writeFloat(this, e, r, false, t);
            };
            function writeDouble(e, r, t, f, i) {
                r = +r;
                t = t >>> 0;
                if (!i) {
                    checkIEEE754(e, r, t, 8, 17976931348623157e292, -17976931348623157e292);
                }
                n.write(e, r, t, f, 52, 8);
                return t + 8;
            }
            Buffer.prototype.writeDoubleLE = function writeDoubleLE(e, r, t) {
                return writeDouble(this, e, r, true, t);
            };
            Buffer.prototype.writeDoubleBE = function writeDoubleBE(e, r, t) {
                return writeDouble(this, e, r, false, t);
            };
            Buffer.prototype.copy = function copy(e, r, t, f) {
                if (!Buffer.isBuffer(e)) throw new TypeError("argument should be a Buffer");
                if (!t) t = 0;
                if (!f && f !== 0) f = this.length;
                if (r >= e.length) r = e.length;
                if (!r) r = 0;
                if (f > 0 && f < t) f = t;
                if (f === t) return 0;
                if (e.length === 0 || this.length === 0) return 0;
                if (r < 0) {
                    throw new RangeError("targetStart out of bounds");
                }
                if (t < 0 || t >= this.length) throw new RangeError("Index out of range");
                if (f < 0) throw new RangeError("sourceEnd out of bounds");
                if (f > this.length) f = this.length;
                if (e.length - r < f - t) {
                    f = e.length - r + t;
                }
                var n = f - t;
                if (this === e && typeof Uint8Array.prototype.copyWithin === "function") {
                    this.copyWithin(r, t, f);
                } else if (this === e && t < r && r < f) {
                    for(var i = n - 1; i >= 0; --i){
                        e[i + r] = this[i + t];
                    }
                } else {
                    Uint8Array.prototype.set.call(e, this.subarray(t, f), r);
                }
                return n;
            };
            Buffer.prototype.fill = function fill(e, r, t, f) {
                if (typeof e === "string") {
                    if (typeof r === "string") {
                        f = r;
                        r = 0;
                        t = this.length;
                    } else if (typeof t === "string") {
                        f = t;
                        t = this.length;
                    }
                    if (f !== undefined && typeof f !== "string") {
                        throw new TypeError("encoding must be a string");
                    }
                    if (typeof f === "string" && !Buffer.isEncoding(f)) {
                        throw new TypeError("Unknown encoding: " + f);
                    }
                    if (e.length === 1) {
                        var n = e.charCodeAt(0);
                        if (f === "utf8" && n < 128 || f === "latin1") {
                            e = n;
                        }
                    }
                } else if (typeof e === "number") {
                    e = e & 255;
                } else if (typeof e === "boolean") {
                    e = Number(e);
                }
                if (r < 0 || this.length < r || this.length < t) {
                    throw new RangeError("Out of range index");
                }
                if (t <= r) {
                    return this;
                }
                r = r >>> 0;
                t = t === undefined ? this.length : t >>> 0;
                if (!e) e = 0;
                var i;
                if (typeof e === "number") {
                    for(i = r; i < t; ++i){
                        this[i] = e;
                    }
                } else {
                    var o = Buffer.isBuffer(e) ? e : Buffer.from(e, f);
                    var u = o.length;
                    if (u === 0) {
                        throw new TypeError('The value "' + e + '" is invalid for argument "value"');
                    }
                    for(i = 0; i < t - r; ++i){
                        this[i + r] = o[i % u];
                    }
                }
                return this;
            };
            var a = /[^+/0-9A-Za-z-_]/g;
            function base64clean(e) {
                e = e.split("=")[0];
                e = e.trim().replace(a, "");
                if (e.length < 2) return "";
                while(e.length % 4 !== 0){
                    e = e + "=";
                }
                return e;
            }
            function utf8ToBytes(e, r) {
                r = r || Infinity;
                var t;
                var f = e.length;
                var n = null;
                var i = [];
                for(var o = 0; o < f; ++o){
                    t = e.charCodeAt(o);
                    if (t > 55295 && t < 57344) {
                        if (!n) {
                            if (t > 56319) {
                                if ((r -= 3) > -1) i.push(239, 191, 189);
                                continue;
                            } else if (o + 1 === f) {
                                if ((r -= 3) > -1) i.push(239, 191, 189);
                                continue;
                            }
                            n = t;
                            continue;
                        }
                        if (t < 56320) {
                            if ((r -= 3) > -1) i.push(239, 191, 189);
                            n = t;
                            continue;
                        }
                        t = (n - 55296 << 10 | t - 56320) + 65536;
                    } else if (n) {
                        if ((r -= 3) > -1) i.push(239, 191, 189);
                    }
                    n = null;
                    if (t < 128) {
                        if ((r -= 1) < 0) break;
                        i.push(t);
                    } else if (t < 2048) {
                        if ((r -= 2) < 0) break;
                        i.push(t >> 6 | 192, t & 63 | 128);
                    } else if (t < 65536) {
                        if ((r -= 3) < 0) break;
                        i.push(t >> 12 | 224, t >> 6 & 63 | 128, t & 63 | 128);
                    } else if (t < 1114112) {
                        if ((r -= 4) < 0) break;
                        i.push(t >> 18 | 240, t >> 12 & 63 | 128, t >> 6 & 63 | 128, t & 63 | 128);
                    } else {
                        throw new Error("Invalid code point");
                    }
                }
                return i;
            }
            function asciiToBytes(e) {
                var r = [];
                for(var t = 0; t < e.length; ++t){
                    r.push(e.charCodeAt(t) & 255);
                }
                return r;
            }
            function utf16leToBytes(e, r) {
                var t, f, n;
                var i = [];
                for(var o = 0; o < e.length; ++o){
                    if ((r -= 2) < 0) break;
                    t = e.charCodeAt(o);
                    f = t >> 8;
                    n = t % 256;
                    i.push(n);
                    i.push(f);
                }
                return i;
            }
            function base64ToBytes(e) {
                return f.toByteArray(base64clean(e));
            }
            function blitBuffer(e, r, t, f) {
                for(var n = 0; n < f; ++n){
                    if (n + t >= r.length || n >= e.length) break;
                    r[n + t] = e[n];
                }
                return n;
            }
            function isInstance(e, r) {
                return e instanceof r || e != null && e.constructor != null && e.constructor.name != null && e.constructor.name === r.name;
            }
            function numberIsNaN(e) {
                return e !== e;
            }
            var s = function() {
                var e = "0123456789abcdef";
                var r = new Array(256);
                for(var t = 0; t < 16; ++t){
                    var f = t * 16;
                    for(var n = 0; n < 16; ++n){
                        r[f + n] = e[t] + e[n];
                    }
                }
                return r;
            }();
        },
        783: function(e, r) {
            /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ r.read = function(e, r, t, f, n) {
                var i, o;
                var u = n * 8 - f - 1;
                var a = (1 << u) - 1;
                var s = a >> 1;
                var h = -7;
                var c = t ? n - 1 : 0;
                var l = t ? -1 : 1;
                var p = e[r + c];
                c += l;
                i = p & (1 << -h) - 1;
                p >>= -h;
                h += u;
                for(; h > 0; i = i * 256 + e[r + c], c += l, h -= 8){}
                o = i & (1 << -h) - 1;
                i >>= -h;
                h += f;
                for(; h > 0; o = o * 256 + e[r + c], c += l, h -= 8){}
                if (i === 0) {
                    i = 1 - s;
                } else if (i === a) {
                    return o ? NaN : (p ? -1 : 1) * Infinity;
                } else {
                    o = o + Math.pow(2, f);
                    i = i - s;
                }
                return (p ? -1 : 1) * o * Math.pow(2, i - f);
            };
            r.write = function(e, r, t, f, n, i) {
                var o, u, a;
                var s = i * 8 - n - 1;
                var h = (1 << s) - 1;
                var c = h >> 1;
                var l = n === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
                var p = f ? 0 : i - 1;
                var y = f ? 1 : -1;
                var g = r < 0 || r === 0 && 1 / r < 0 ? 1 : 0;
                r = Math.abs(r);
                if (isNaN(r) || r === Infinity) {
                    u = isNaN(r) ? 1 : 0;
                    o = h;
                } else {
                    o = Math.floor(Math.log(r) / Math.LN2);
                    if (r * (a = Math.pow(2, -o)) < 1) {
                        o--;
                        a *= 2;
                    }
                    if (o + c >= 1) {
                        r += l / a;
                    } else {
                        r += l * Math.pow(2, 1 - c);
                    }
                    if (r * a >= 2) {
                        o++;
                        a /= 2;
                    }
                    if (o + c >= h) {
                        u = 0;
                        o = h;
                    } else if (o + c >= 1) {
                        u = (r * a - 1) * Math.pow(2, n);
                        o = o + c;
                    } else {
                        u = r * Math.pow(2, c - 1) * Math.pow(2, n);
                        o = 0;
                    }
                }
                for(; n >= 8; e[t + p] = u & 255, p += y, u /= 256, n -= 8){}
                o = o << n | u;
                s += n;
                for(; s > 0; e[t + p] = o & 255, p += y, o /= 256, s -= 8){}
                e[t + p - y] |= g * 128;
            };
        }
    };
    var r = {};
    function __nccwpck_require__(t) {
        var f = r[t];
        if (f !== undefined) {
            return f.exports;
        }
        var n = r[t] = {
            exports: {}
        };
        var i = true;
        try {
            e[t](n, n.exports, __nccwpck_require__);
            i = false;
        } finally{
            if (i) delete r[t];
        }
        return n.exports;
    }
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = ("TURBOPACK compile-time value", "/ROOT/frontend/node_modules/next/dist/compiled/buffer") + "/";
    var t = __nccwpck_require__(72);
    module.exports = t;
})();
}),
"[project]/frontend/node_modules/get-it/dist/middleware.browser.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Cancel",
    ()=>I,
    "CancelToken",
    ()=>T,
    "agent",
    ()=>n,
    "base",
    ()=>i,
    "debug",
    ()=>h,
    "headers",
    ()=>g,
    "httpErrors",
    ()=>y,
    "injectResponse",
    ()=>w,
    "jsonRequest",
    ()=>x,
    "jsonResponse",
    ()=>E,
    "keepAlive",
    ()=>B,
    "mtls",
    ()=>k,
    "observable",
    ()=>A,
    "progress",
    ()=>S,
    "promise",
    ()=>N,
    "proxy",
    ()=>M,
    "retry",
    ()=>P,
    "urlEncoded",
    ()=>L
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$get$2d$it$2f$dist$2f$_chunks$2d$es$2f$_commonjsHelpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/get-it/dist/_chunks-es/_commonjsHelpers.js [app-client] (ecmascript)");
;
;
;
function n(e) {
    return {};
}
const r = /^\//, o = /\/$/;
function i(e) {
    const t = e.replace(o, "");
    return {
        processOptions: (e)=>{
            if (/^https?:\/\//i.test(e.url)) return e;
            const s = [
                t,
                e.url.replace(r, "")
            ].join("/");
            return Object.assign({}, e, {
                url: s
            });
        }
    };
}
var a, c, u, l, p, d = {
    exports: {}
}, f = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$get$2d$it$2f$dist$2f$_chunks$2d$es$2f$_commonjsHelpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["g"])((p || (p = 1, function(e, t) {
    t.formatArgs = function(t) {
        if (t[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + t[0] + (this.useColors ? "%c " : " ") + "+" + e.exports.humanize(this.diff), !this.useColors) return;
        const s = "color: " + this.color;
        t.splice(1, 0, s, "color: inherit");
        let n = 0, r = 0;
        t[0].replace(/%[a-zA-Z%]/g, (e)=>{
            "%%" !== e && (n++, "%c" === e && (r = n));
        }), t.splice(r, 0, s);
    }, t.save = function(e) {
        try {
            e ? t.storage.setItem("debug", e) : t.storage.removeItem("debug");
        } catch (e) {}
    }, t.load = function() {
        let e;
        try {
            e = t.storage.getItem("debug") || t.storage.getItem("DEBUG");
        } catch (e) {}
        return !e && typeof __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] < "u" && "env" in __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] && (e = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.DEBUG), e;
    }, t.useColors = function() {
        if (typeof window < "u" && window.process && ("renderer" === window.process.type || window.process.__nwjs)) return !0;
        if (typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) return !1;
        let e;
        return typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator < "u" && navigator.userAgent && (e = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(e[1], 10) >= 31 || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }, t.storage = function() {
        try {
            return localStorage;
        } catch (e) {}
    }(), t.destroy = /* @__PURE__ */ (()=>{
        let e = !1;
        return ()=>{
            e || (e = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
        };
    })(), t.colors = [
        "#0000CC",
        "#0000FF",
        "#0033CC",
        "#0033FF",
        "#0066CC",
        "#0066FF",
        "#0099CC",
        "#0099FF",
        "#00CC00",
        "#00CC33",
        "#00CC66",
        "#00CC99",
        "#00CCCC",
        "#00CCFF",
        "#3300CC",
        "#3300FF",
        "#3333CC",
        "#3333FF",
        "#3366CC",
        "#3366FF",
        "#3399CC",
        "#3399FF",
        "#33CC00",
        "#33CC33",
        "#33CC66",
        "#33CC99",
        "#33CCCC",
        "#33CCFF",
        "#6600CC",
        "#6600FF",
        "#6633CC",
        "#6633FF",
        "#66CC00",
        "#66CC33",
        "#9900CC",
        "#9900FF",
        "#9933CC",
        "#9933FF",
        "#99CC00",
        "#99CC33",
        "#CC0000",
        "#CC0033",
        "#CC0066",
        "#CC0099",
        "#CC00CC",
        "#CC00FF",
        "#CC3300",
        "#CC3333",
        "#CC3366",
        "#CC3399",
        "#CC33CC",
        "#CC33FF",
        "#CC6600",
        "#CC6633",
        "#CC9900",
        "#CC9933",
        "#CCCC00",
        "#CCCC33",
        "#FF0000",
        "#FF0033",
        "#FF0066",
        "#FF0099",
        "#FF00CC",
        "#FF00FF",
        "#FF3300",
        "#FF3333",
        "#FF3366",
        "#FF3399",
        "#FF33CC",
        "#FF33FF",
        "#FF6600",
        "#FF6633",
        "#FF9900",
        "#FF9933",
        "#FFCC00",
        "#FFCC33"
    ], t.log = console.debug || console.log || (()=>{}), e.exports = (l ? u : (l = 1, u = function(e) {
        function t(e) {
            let n, r, o, i = null;
            function a() {
                for(var _len = arguments.length, e = new Array(_len), _key = 0; _key < _len; _key++){
                    e[_key] = arguments[_key];
                }
                if (!a.enabled) return;
                const s = a, r = Number(/* @__PURE__ */ new Date), o = r - (n || r);
                s.diff = o, s.prev = n, s.curr = r, n = r, e[0] = t.coerce(e[0]), "string" != typeof e[0] && e.unshift("%O");
                let i = 0;
                e[0] = e[0].replace(/%([a-zA-Z%])/g, (n, r)=>{
                    if ("%%" === n) return "%";
                    i++;
                    const o = t.formatters[r];
                    if ("function" == typeof o) {
                        const t = e[i];
                        n = o.call(s, t), e.splice(i, 1), i--;
                    }
                    return n;
                }), t.formatArgs.call(s, e), (s.log || t.log).apply(s, e);
            }
            return a.namespace = e, a.useColors = t.useColors(), a.color = t.selectColor(e), a.extend = s, a.destroy = t.destroy, Object.defineProperty(a, "enabled", {
                enumerable: !0,
                configurable: !1,
                get: ()=>null !== i ? i : (r !== t.namespaces && (r = t.namespaces, o = t.enabled(e)), o),
                set: (e)=>{
                    i = e;
                }
            }), "function" == typeof t.init && t.init(a), a;
        }
        function s(e, s) {
            const n = t(this.namespace + (typeof s > "u" ? ":" : s) + e);
            return n.log = this.log, n;
        }
        function n(e, t) {
            let s = 0, n = 0, r = -1, o = 0;
            for(; s < e.length;)if (n < t.length && (t[n] === e[s] || "*" === t[n])) "*" === t[n] ? (r = n, o = s, n++) : (s++, n++);
            else {
                if (-1 === r) return !1;
                n = r + 1, o++, s = o;
            }
            for(; n < t.length && "*" === t[n];)n++;
            return n === t.length;
        }
        return t.debug = t, t.default = t, t.coerce = function(e) {
            return e instanceof Error ? e.stack || e.message : e;
        }, t.disable = function() {
            const e = [
                ...t.names,
                ...t.skips.map((e)=>"-" + e)
            ].join(",");
            return t.enable(""), e;
        }, t.enable = function(e) {
            t.save(e), t.namespaces = e, t.names = [], t.skips = [];
            const s = ("string" == typeof e ? e : "").trim().replace(/\s+/g, ",").split(",").filter(Boolean);
            for (const e of s)"-" === e[0] ? t.skips.push(e.slice(1)) : t.names.push(e);
        }, t.enabled = function(e) {
            for (const s of t.skips)if (n(e, s)) return !1;
            for (const s of t.names)if (n(e, s)) return !0;
            return !1;
        }, t.humanize = function() {
            if (c) return a;
            c = 1;
            var e = 1e3, t = 60 * e, s = 60 * t, n = 24 * s, r = 7 * n;
            function o(e, t, s, n) {
                var r = t >= 1.5 * s;
                return Math.round(e / s) + " " + n + (r ? "s" : "");
            }
            return a = function(i, a) {
                a = a || {};
                var c, u, l = typeof i;
                if ("string" === l && i.length > 0) return function(o) {
                    if (!((o = String(o)).length > 100)) {
                        var i = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(o);
                        if (i) {
                            var a = parseFloat(i[1]);
                            switch((i[2] || "ms").toLowerCase()){
                                case "years":
                                case "year":
                                case "yrs":
                                case "yr":
                                case "y":
                                    return 315576e5 * a;
                                case "weeks":
                                case "week":
                                case "w":
                                    return a * r;
                                case "days":
                                case "day":
                                case "d":
                                    return a * n;
                                case "hours":
                                case "hour":
                                case "hrs":
                                case "hr":
                                case "h":
                                    return a * s;
                                case "minutes":
                                case "minute":
                                case "mins":
                                case "min":
                                case "m":
                                    return a * t;
                                case "seconds":
                                case "second":
                                case "secs":
                                case "sec":
                                case "s":
                                    return a * e;
                                case "milliseconds":
                                case "millisecond":
                                case "msecs":
                                case "msec":
                                case "ms":
                                    return a;
                                default:
                                    return;
                            }
                        }
                    }
                }(i);
                if ("number" === l && isFinite(i)) return a.long ? (c = i, (u = Math.abs(c)) >= n ? o(c, u, n, "day") : u >= s ? o(c, u, s, "hour") : u >= t ? o(c, u, t, "minute") : u >= e ? o(c, u, e, "second") : c + " ms") : function(r) {
                    var o = Math.abs(r);
                    return o >= n ? Math.round(r / n) + "d" : o >= s ? Math.round(r / s) + "h" : o >= t ? Math.round(r / t) + "m" : o >= e ? Math.round(r / e) + "s" : r + "ms";
                }(i);
                throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(i));
            };
        }(), t.destroy = function() {
            console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
        }, Object.keys(e).forEach((s)=>{
            t[s] = e[s];
        }), t.names = [], t.skips = [], t.formatters = {}, t.selectColor = function(e) {
            let s = 0;
            for(let t = 0; t < e.length; t++)s = (s << 5) - s + e.charCodeAt(t), s |= 0;
            return t.colors[Math.abs(s) % t.colors.length];
        }, t.enable(t.load()), t;
    }))(t);
    const { formatters: s } = e.exports;
    s.j = function(e) {
        try {
            return JSON.stringify(e);
        } catch (e) {
            return "[UnexpectedJSONParseError]: " + e.message;
        }
    };
}(d, d.exports)), d.exports));
const m = [
    "cookie",
    "authorization"
], C = Object.prototype.hasOwnProperty;
function h() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const t = e.verbose, s = e.namespace || "get-it", n = f(s), r = e.log || n, o = r === n && !f.enabled(s);
    let i = 0;
    return {
        processOptions: (e)=>(e.debug = r, e.requestId = e.requestId || ++i, e),
        onRequest: (s)=>{
            if (o || !s) return s;
            const n = s.options;
            if (r("[%s] HTTP %s %s", n.requestId, n.method, n.url), t && n.body && "string" == typeof n.body && r("[%s] Request body: %s", n.requestId, n.body), t && n.headers) {
                const t = !1 === e.redactSensitiveHeaders ? n.headers : ((e, t)=>{
                    const s = {};
                    for(const n in e)C.call(e, n) && (s[n] = t.indexOf(n.toLowerCase()) > -1 ? "<redacted>" : e[n]);
                    return s;
                })(n.headers, m);
                r("[%s] Request headers: %s", n.requestId, JSON.stringify(t, null, 2));
            }
            return s;
        },
        onResponse: (e, s)=>{
            if (o || !e) return e;
            const n = s.options.requestId;
            return r("[%s] Response code: %s %s", n, e.statusCode, e.statusMessage), t && e.body && r("[%s] Response body: %s", n, function(e) {
                return -1 !== (e.headers["content-type"] || "").toLowerCase().indexOf("application/json") ? function(e) {
                    try {
                        const t = "string" == typeof e ? JSON.parse(e) : e;
                        return JSON.stringify(t, null, 2);
                    } catch (e1) {
                        return e;
                    }
                }(e.body) : e.body;
            }(e)), e;
        },
        onError: (e, t)=>{
            const s = t.options.requestId;
            return e ? (r("[%s] ERROR: %s", s, e.message), e) : (r("[%s] Error encountered, but handled by an earlier middleware", s), e);
        }
    };
}
function g(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return {
        processOptions: (s)=>{
            const n = s.headers || {};
            return s.headers = t.override ? Object.assign({}, n, e) : Object.assign({}, e, n), s;
        }
    };
}
class b extends Error {
    constructor(e, t){
        super(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "response", void 0), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "request", void 0);
        const s = e.url.length > 400 ? "".concat(e.url.slice(0, 399), "…") : e.url;
        let n = "".concat(e.method, "-request to ").concat(s, " resulted in ");
        n += "HTTP ".concat(e.statusCode, " ").concat(e.statusMessage), this.message = n.trim(), this.response = e, this.request = t.options;
    }
}
function y() {
    return {
        onResponse: (e, t)=>{
            if (!(e.statusCode >= 400)) return e;
            throw new b(e, t);
        }
    };
}
function w() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if ("function" != typeof e.inject) throw new Error("`injectResponse` middleware requires a `inject` function");
    return {
        interceptRequest: function(t, s) {
            const n = e.inject(s, t);
            if (!n) return t;
            const r = s.context.options;
            return {
                body: "",
                url: r.url,
                method: r.method,
                headers: {},
                statusCode: 200,
                statusMessage: "OK",
                ...n
            };
        }
    };
}
const F = typeof __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"] > "u" ? ()=>!1 : (e)=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].isBuffer(e);
function O(e) {
    return "[object Object]" === Object.prototype.toString.call(e);
}
function j(e) {
    if (!1 === O(e)) return !1;
    const t = e.constructor;
    if (void 0 === t) return !0;
    const s = t.prototype;
    return !(!1 === O(s) || !1 === s.hasOwnProperty("isPrototypeOf"));
}
const v = [
    "boolean",
    "string",
    "number"
];
function x() {
    return {
        processOptions: (e)=>{
            const t = e.body;
            return !t || "function" == typeof t.pipe || F(t) || -1 === v.indexOf(typeof t) && !Array.isArray(t) && !j(t) ? e : Object.assign({}, e, {
                body: JSON.stringify(e.body),
                headers: Object.assign({}, e.headers, {
                    "Content-Type": "application/json"
                })
            });
        }
    };
}
function E(e) {
    return {
        onResponse: (s)=>{
            const n = s.headers["content-type"] || "", r = e && e.force || -1 !== n.indexOf("application/json");
            return s.body && n && r ? Object.assign({}, s, {
                body: t(s.body)
            }) : s;
        },
        processOptions: (e)=>Object.assign({}, e, {
                headers: Object.assign({
                    Accept: "application/json"
                }, e.headers)
            })
    };
    //TURBOPACK unreachable
    ;
    function t(e) {
        try {
            return JSON.parse(e);
        } catch (e) {
            throw e.message = "Failed to parsed response body as JSON: ".concat(e.message), e;
        }
    }
}
function k() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!e.ca) throw new Error('Required mtls option "ca" is missing');
    if (!e.cert) throw new Error('Required mtls option "cert" is missing');
    if (!e.key) throw new Error('Required mtls option "key" is missing');
    return {
        finalizeOptions: (t)=>{
            if (function(e) {
                return "object" == typeof e && null !== e && !("protocol" in e);
            }(t)) return t;
            const s = {
                cert: e.cert,
                key: e.key,
                ca: e.ca
            };
            return Object.assign({}, t, s);
        }
    };
}
let R = {};
typeof globalThis < "u" ? R = globalThis : typeof window < "u" ? R = window : ("TURBOPACK compile-time value", "object") < "u" ? R = /*TURBOPACK member replacement*/ __turbopack_context__.g : typeof self < "u" && (R = self);
var q = R;
function A() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const t = e.implementation || q.Observable;
    if (!t) throw new Error("`Observable` is not available in global scope, and no implementation was passed");
    return {
        onReturn: (e, s)=>new t((t)=>(e.error.subscribe((e)=>t.error(e)), e.progress.subscribe((e)=>t.next(Object.assign({
                        type: "progress"
                    }, e))), e.response.subscribe((e)=>{
                    t.next(Object.assign({
                        type: "response"
                    }, e)), t.complete();
                }), e.request.publish(s), ()=>e.abort.publish()))
    };
}
function S() {
    return {
        onRequest: (e)=>{
            if ("xhr" !== e.adapter) return;
            const t = e.request, s = e.context;
            function n(e) {
                return (t)=>{
                    const n = t.lengthComputable ? t.loaded / t.total * 100 : -1;
                    s.channels.progress.publish({
                        stage: e,
                        percent: n,
                        total: t.total,
                        loaded: t.loaded,
                        lengthComputable: t.lengthComputable
                    });
                };
            }
            "upload" in t && "onprogress" in t.upload && (t.upload.onprogress = n("upload")), "onprogress" in t && (t.onprogress = n("download"));
        }
    };
}
const N = function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const t = e.implementation || Promise;
    if (!t) throw new Error("`Promise` is not available in global scope, and no implementation was passed");
    return {
        onReturn: (s, n)=>new t((t, r)=>{
                const o = n.options.cancelToken;
                o && o.promise.then((e)=>{
                    s.abort.publish(e), r(e);
                }), s.error.subscribe(r), s.response.subscribe((s)=>{
                    t(e.onlyBody ? s.body : s);
                }), setTimeout(()=>{
                    try {
                        s.request.publish(n);
                    } catch (e) {
                        r(e);
                    }
                }, 0);
            })
    };
};
class I {
    toString() {
        return "Cancel" + (this.message ? ": ".concat(this.message) : "");
    }
    constructor(e){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "__CANCEL__", !0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "message", void 0);
        this.message = e;
    }
}
class T {
    constructor(e){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "promise", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "reason", void 0);
        if ("function" != typeof e) throw new TypeError("executor must be a function.");
        let t = null;
        this.promise = new Promise((e)=>{
            t = e;
        }), e((e)=>{
            this.reason || (this.reason = new I(e), t(this.reason));
        });
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(T, "source", ()=>{
    let e;
    return {
        token: new T((t)=>{
            e = t;
        }),
        cancel: e
    };
});
function M(e) {
    if (!(!1 === e || e && e.host)) throw new Error("Proxy middleware takes an object of host, port and auth properties");
    return {
        processOptions: (t)=>Object.assign({
                proxy: e
            }, t)
    };
}
N.Cancel = I, N.CancelToken = T, N.isCancel = (e)=>!(!e || !(e === null || e === void 0 ? void 0 : e.__CANCEL__));
var $ = (e, t, s)=>("GET" === s.method || "HEAD" === s.method) && (e.isNetworkError || !1);
function _(e) {
    return 100 * Math.pow(2, e) + 100 * Math.random();
}
const P = function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return ((e)=>{
        const t = e.maxRetries || 5, s = e.retryDelay || _, n = e.shouldRetry;
        return {
            onError: (e, r)=>{
                const o = r.options, i = o.maxRetries || t, a = o.retryDelay || s, c = o.shouldRetry || n, u = o.attemptNumber || 0;
                if (null !== (l = o.body) && "object" == typeof l && "function" == typeof l.pipe || !c(e, u, o) || u >= i) return e;
                var l;
                const p = Object.assign({}, r, {
                    options: Object.assign({}, o, {
                        attemptNumber: u + 1
                    })
                });
                return setTimeout(()=>r.channels.request.publish(p), a(u)), null;
            }
        };
    })({
        shouldRetry: $,
        ...e
    });
};
function J(e) {
    const t = new URLSearchParams, s = (e, n)=>{
        const r = n instanceof Set ? Array.from(n) : n;
        if (Array.isArray(r)) if (r.length) for(const t in r)s("".concat(e, "[").concat(t, "]"), r[t]);
        else t.append("".concat(e, "[]"), "");
        else if ("object" == typeof r && null !== r) for (const [t, n] of Object.entries(r))s("".concat(e, "[").concat(t, "]"), n);
        else t.append(e, r);
    };
    for (const [t, n] of Object.entries(e))s(t, n);
    return t.toString();
}
function L() {
    return {
        processOptions: (e)=>{
            const t = e.body;
            return t && "function" != typeof t.pipe && !F(t) && j(t) ? {
                ...e,
                body: J(e.body),
                headers: {
                    ...e.headers,
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            } : e;
        }
    };
}
P.shouldRetry = $;
class z extends Error {
    constructor(e, t){
        super(e.message), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "request", void 0), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "code", void 0), this.request = t, this.code = e.code;
    }
}
const B = (D = n, function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const { maxRetries: t = 3, ms: s = 1e3, maxFree: n = 256 } = e, { finalizeOptions: r } = D({
        keepAlive: !0,
        keepAliveMsecs: s,
        maxFreeSockets: n
    });
    return {
        finalizeOptions: r,
        onError: (e, s)=>{
            if (("GET" === s.options.method || "POST" === s.options.method) && e instanceof z && "ECONNRESET" === e.code && e.request.reusedSocket) {
                const e = s.options.attemptNumber || 0;
                if (e < t) {
                    const t = Object.assign({}, s, {
                        options: Object.assign({}, s.options, {
                            attemptNumber: e + 1
                        })
                    });
                    return setImmediate(()=>s.channels.request.publish(t)), null;
                }
            }
            return e;
        }
    };
});
var D;
;
 //# sourceMappingURL=middleware.browser.js.map
}),
"[project]/frontend/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise, SuppressedError, Symbol, Iterator */ __turbopack_context__.s([
    "__addDisposableResource",
    ()=>__addDisposableResource,
    "__assign",
    ()=>__assign,
    "__asyncDelegator",
    ()=>__asyncDelegator,
    "__asyncGenerator",
    ()=>__asyncGenerator,
    "__asyncValues",
    ()=>__asyncValues,
    "__await",
    ()=>__await,
    "__awaiter",
    ()=>__awaiter,
    "__classPrivateFieldGet",
    ()=>__classPrivateFieldGet,
    "__classPrivateFieldIn",
    ()=>__classPrivateFieldIn,
    "__classPrivateFieldSet",
    ()=>__classPrivateFieldSet,
    "__createBinding",
    ()=>__createBinding,
    "__decorate",
    ()=>__decorate,
    "__disposeResources",
    ()=>__disposeResources,
    "__esDecorate",
    ()=>__esDecorate,
    "__exportStar",
    ()=>__exportStar,
    "__extends",
    ()=>__extends,
    "__generator",
    ()=>__generator,
    "__importDefault",
    ()=>__importDefault,
    "__importStar",
    ()=>__importStar,
    "__makeTemplateObject",
    ()=>__makeTemplateObject,
    "__metadata",
    ()=>__metadata,
    "__param",
    ()=>__param,
    "__propKey",
    ()=>__propKey,
    "__read",
    ()=>__read,
    "__rest",
    ()=>__rest,
    "__rewriteRelativeImportExtension",
    ()=>__rewriteRelativeImportExtension,
    "__runInitializers",
    ()=>__runInitializers,
    "__setFunctionName",
    ()=>__setFunctionName,
    "__spread",
    ()=>__spread,
    "__spreadArray",
    ()=>__spreadArray,
    "__spreadArrays",
    ()=>__spreadArrays,
    "__values",
    ()=>__values,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return extendStatics(d, b);
};
function __extends(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) {
        if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
        return f;
    }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for(var i = decorators.length - 1; i >= 0; i--){
        var context = {};
        for(var p in contextIn)context[p] = p === "access" ? {} : contextIn[p];
        for(var p in contextIn.access)context.access[p] = contextIn.access[p];
        context.addInitializer = function(f) {
            if (done) throw new TypeError("Cannot add initializers after decoration has completed");
            extraInitializers.push(accept(f || null));
        };
        var result = (0, decorators[i])(kind === "accessor" ? {
            get: descriptor.get,
            set: descriptor.set
        } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        } else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
}
;
function __runInitializers(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for(var i = 0; i < initializers.length; i++){
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
}
;
function __propKey(x) {
    return typeof x === "symbol" ? x : "".concat(x);
}
;
function __setFunctionName(f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", {
        configurable: true,
        value: prefix ? "".concat(prefix, " ", name) : name
    });
}
;
function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function __generator(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    //TURBOPACK unreachable
    ;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var __createBinding = Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
};
function __exportStar(m, o) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}
function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function __spread() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat(__read(arguments[i]));
    return ar;
}
function __spreadArrays() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for(var i = 0, l = from.length, ar; i < l; i++){
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    //TURBOPACK unreachable
    ;
    function awaitReturn(f) {
        return function(v) {
            return Promise.resolve(v).then(f, reject);
        };
    }
    function verb(n, f) {
        if (g[n]) {
            i[n] = function(v) {
                return new Promise(function(a, b) {
                    q.push([
                        n,
                        v,
                        a,
                        b
                    ]) > 1 || resume(n, v);
                });
            };
            if (f) i[n] = f(i[n]);
        }
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}
function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
    //TURBOPACK unreachable
    ;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: __await(o[n](v)),
                done: false
            } : f ? f(v) : v;
        } : f;
    }
}
function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    //TURBOPACK unreachable
    ;
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
}
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
            value: raw
        });
    } else {
        cooked.raw = raw;
    }
    return cooked;
}
;
var __setModuleDefault = Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
};
var ownKeys = function(o) {
    ownKeys = Object.getOwnPropertyNames || function(o) {
        var ar = [];
        for(var k in o)if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
        return ar;
    };
    return ownKeys(o);
};
function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k = ownKeys(mod), i = 0; i < k.length; i++)if (k[i] !== "default") __createBinding(result, mod, k[i]);
    }
    __setModuleDefault(result, mod);
    return result;
}
function __importDefault(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}
function __addDisposableResource(env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose, inner;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
            if (async) inner = dispose;
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        if (inner) dispose = function() {
            try {
                inner.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        };
        env.stack.push({
            value: value,
            dispose: dispose,
            async: async
        });
    } else if (async) {
        env.stack.push({
            async: true
        });
    }
    return value;
}
var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
function __disposeResources(env) {
    function fail(e) {
        env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
        env.hasError = true;
    }
    var r, s = 0;
    function next() {
        while(r = env.stack.pop()){
            try {
                if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
                if (r.dispose) {
                    var result = r.dispose.call(r.value);
                    if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) {
                        fail(e);
                        return next();
                    });
                } else s |= 1;
            } catch (e) {
                fail(e);
            }
        }
        if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
        if (env.hasError) throw env.error;
    }
    return next();
}
function __rewriteRelativeImportExtension(path, preserveJsx) {
    if (typeof path === "string" && /^\.\.?\//.test(path)) {
        return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(m, tsx, d, ext, cm) {
            return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : d + ext + "." + cm.toLowerCase() + "js";
        });
    }
    return path;
}
const __TURBOPACK__default__export__ = {
    __extends,
    __assign,
    __rest,
    __decorate,
    __param,
    __esDecorate,
    __runInitializers,
    __propKey,
    __setFunctionName,
    __metadata,
    __awaiter,
    __generator,
    __createBinding,
    __exportStar,
    __values,
    __read,
    __spread,
    __spreadArrays,
    __spreadArray,
    __await,
    __asyncGenerator,
    __asyncDelegator,
    __asyncValues,
    __makeTemplateObject,
    __importStar,
    __importDefault,
    __classPrivateFieldGet,
    __classPrivateFieldSet,
    __classPrivateFieldIn,
    __addDisposableResource,
    __disposeResources,
    __rewriteRelativeImportExtension
};
}),
"[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/isFunction.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isFunction",
    ()=>isFunction
]);
function isFunction(value) {
    return typeof value === 'function';
} //# sourceMappingURL=isFunction.js.map
}),
"[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/createErrorClass.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createErrorClass",
    ()=>createErrorClass
]);
function createErrorClass(createImpl) {
    var _super = function(instance) {
        Error.call(instance);
        instance.stack = new Error().stack;
    };
    var ctorFunc = createImpl(_super);
    ctorFunc.prototype = Object.create(Error.prototype);
    ctorFunc.prototype.constructor = ctorFunc;
    return ctorFunc;
} //# sourceMappingURL=createErrorClass.js.map
}),
"[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/UnsubscriptionError.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UnsubscriptionError",
    ()=>UnsubscriptionError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$createErrorClass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/createErrorClass.js [app-client] (ecmascript)");
;
var UnsubscriptionError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$createErrorClass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createErrorClass"])(function(_super) {
    return function UnsubscriptionErrorImpl(errors) {
        _super(this);
        this.message = errors ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function(err, i) {
            return i + 1 + ") " + err.toString();
        }).join('\n  ') : '';
        this.name = 'UnsubscriptionError';
        this.errors = errors;
    };
}); //# sourceMappingURL=UnsubscriptionError.js.map
}),
"[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/arrRemove.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "arrRemove",
    ()=>arrRemove
]);
function arrRemove(arr, item) {
    if (arr) {
        var index = arr.indexOf(item);
        0 <= index && arr.splice(index, 1);
    }
} //# sourceMappingURL=arrRemove.js.map
}),
"[project]/frontend/node_modules/rxjs/dist/esm5/internal/Subscription.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EMPTY_SUBSCRIPTION",
    ()=>EMPTY_SUBSCRIPTION,
    "Subscription",
    ()=>Subscription,
    "isSubscription",
    ()=>isSubscription
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$isFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/isFunction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$UnsubscriptionError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/UnsubscriptionError.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$arrRemove$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/arrRemove.js [app-client] (ecmascript)");
;
;
;
;
var Subscription = function() {
    function Subscription(initialTeardown) {
        this.initialTeardown = initialTeardown;
        this.closed = false;
        this._parentage = null;
        this._finalizers = null;
    }
    Subscription.prototype.unsubscribe = function() {
        var e_1, _a, e_2, _b;
        var errors;
        if (!this.closed) {
            this.closed = true;
            var _parentage = this._parentage;
            if (_parentage) {
                this._parentage = null;
                if (Array.isArray(_parentage)) {
                    try {
                        for(var _parentage_1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__values"])(_parentage), _parentage_1_1 = _parentage_1.next(); !_parentage_1_1.done; _parentage_1_1 = _parentage_1.next()){
                            var parent_1 = _parentage_1_1.value;
                            parent_1.remove(this);
                        }
                    } catch (e_1_1) {
                        e_1 = {
                            error: e_1_1
                        };
                    } finally{
                        try {
                            if (_parentage_1_1 && !_parentage_1_1.done && (_a = _parentage_1.return)) _a.call(_parentage_1);
                        } finally{
                            if (e_1) throw e_1.error;
                        }
                    }
                } else {
                    _parentage.remove(this);
                }
            }
            var initialFinalizer = this.initialTeardown;
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$isFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(initialFinalizer)) {
                try {
                    initialFinalizer();
                } catch (e) {
                    errors = e instanceof __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$UnsubscriptionError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnsubscriptionError"] ? e.errors : [
                        e
                    ];
                }
            }
            var _finalizers = this._finalizers;
            if (_finalizers) {
                this._finalizers = null;
                try {
                    for(var _finalizers_1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__values"])(_finalizers), _finalizers_1_1 = _finalizers_1.next(); !_finalizers_1_1.done; _finalizers_1_1 = _finalizers_1.next()){
                        var finalizer = _finalizers_1_1.value;
                        try {
                            execFinalizer(finalizer);
                        } catch (err) {
                            errors = errors !== null && errors !== void 0 ? errors : [];
                            if (err instanceof __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$UnsubscriptionError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnsubscriptionError"]) {
                                errors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__spreadArray"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__spreadArray"])([], (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__read"])(errors)), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__read"])(err.errors));
                            } else {
                                errors.push(err);
                            }
                        }
                    }
                } catch (e_2_1) {
                    e_2 = {
                        error: e_2_1
                    };
                } finally{
                    try {
                        if (_finalizers_1_1 && !_finalizers_1_1.done && (_b = _finalizers_1.return)) _b.call(_finalizers_1);
                    } finally{
                        if (e_2) throw e_2.error;
                    }
                }
            }
            if (errors) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$UnsubscriptionError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnsubscriptionError"](errors);
            }
        }
    };
    Subscription.prototype.add = function(teardown) {
        var _a;
        if (teardown && teardown !== this) {
            if (this.closed) {
                execFinalizer(teardown);
            } else {
                if (teardown instanceof Subscription) {
                    if (teardown.closed || teardown._hasParent(this)) {
                        return;
                    }
                    teardown._addParent(this);
                }
                (this._finalizers = (_a = this._finalizers) !== null && _a !== void 0 ? _a : []).push(teardown);
            }
        }
    };
    Subscription.prototype._hasParent = function(parent) {
        var _parentage = this._parentage;
        return _parentage === parent || Array.isArray(_parentage) && _parentage.includes(parent);
    };
    Subscription.prototype._addParent = function(parent) {
        var _parentage = this._parentage;
        this._parentage = Array.isArray(_parentage) ? (_parentage.push(parent), _parentage) : _parentage ? [
            _parentage,
            parent
        ] : parent;
    };
    Subscription.prototype._removeParent = function(parent) {
        var _parentage = this._parentage;
        if (_parentage === parent) {
            this._parentage = null;
        } else if (Array.isArray(_parentage)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$arrRemove$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["arrRemove"])(_parentage, parent);
        }
    };
    Subscription.prototype.remove = function(teardown) {
        var _finalizers = this._finalizers;
        _finalizers && (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$arrRemove$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["arrRemove"])(_finalizers, teardown);
        if (teardown instanceof Subscription) {
            teardown._removeParent(this);
        }
    };
    Subscription.EMPTY = function() {
        var empty = new Subscription();
        empty.closed = true;
        return empty;
    }();
    return Subscription;
}();
;
var EMPTY_SUBSCRIPTION = Subscription.EMPTY;
function isSubscription(value) {
    return value instanceof Subscription || value && 'closed' in value && (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$isFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(value.remove) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$isFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(value.add) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$isFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(value.unsubscribe);
}
function execFinalizer(finalizer) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$isFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(finalizer)) {
        finalizer();
    } else {
        finalizer.unsubscribe();
    }
} //# sourceMappingURL=Subscription.js.map
}),
"[project]/frontend/node_modules/rxjs/dist/esm5/internal/config.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "config",
    ()=>config
]);
var config = {
    onUnhandledError: null,
    onStoppedNotification: null,
    Promise: undefined,
    useDeprecatedSynchronousErrorHandling: false,
    useDeprecatedNextContext: false
}; //# sourceMappingURL=config.js.map
}),
"[project]/frontend/node_modules/rxjs/dist/esm5/internal/scheduler/timeoutProvider.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "timeoutProvider",
    ()=>timeoutProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript)");
;
var timeoutProvider = {
    setTimeout: function(handler, timeout) {
        var args = [];
        for(var _i = 2; _i < arguments.length; _i++){
            args[_i - 2] = arguments[_i];
        }
        var delegate = timeoutProvider.delegate;
        if (delegate === null || delegate === void 0 ? void 0 : delegate.setTimeout) {
            return delegate.setTimeout.apply(delegate, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__spreadArray"])([
                handler,
                timeout
            ], (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__read"])(args)));
        }
        return setTimeout.apply(void 0, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__spreadArray"])([
            handler,
            timeout
        ], (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__read"])(args)));
    },
    clearTimeout: function(handle) {
        var delegate = timeoutProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearTimeout) || clearTimeout)(handle);
    },
    delegate: undefined
}; //# sourceMappingURL=timeoutProvider.js.map
}),
"[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/reportUnhandledError.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "reportUnhandledError",
    ()=>reportUnhandledError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/config.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$scheduler$2f$timeoutProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/scheduler/timeoutProvider.js [app-client] (ecmascript)");
;
;
function reportUnhandledError(err) {
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$scheduler$2f$timeoutProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timeoutProvider"].setTimeout(function() {
        var onUnhandledError = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["config"].onUnhandledError;
        if (onUnhandledError) {
            onUnhandledError(err);
        } else {
            throw err;
        }
    });
} //# sourceMappingURL=reportUnhandledError.js.map
}),
"[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/noop.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "noop",
    ()=>noop
]);
function noop() {} //# sourceMappingURL=noop.js.map
}),
"[project]/frontend/node_modules/rxjs/dist/esm5/internal/NotificationFactories.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "COMPLETE_NOTIFICATION",
    ()=>COMPLETE_NOTIFICATION,
    "createNotification",
    ()=>createNotification,
    "errorNotification",
    ()=>errorNotification,
    "nextNotification",
    ()=>nextNotification
]);
var COMPLETE_NOTIFICATION = function() {
    return createNotification('C', undefined, undefined);
}();
function errorNotification(error) {
    return createNotification('E', undefined, error);
}
function nextNotification(value) {
    return createNotification('N', value, undefined);
}
function createNotification(kind, value, error) {
    return {
        kind: kind,
        value: value,
        error: error
    };
} //# sourceMappingURL=NotificationFactories.js.map
}),
"[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/errorContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "captureError",
    ()=>captureError,
    "errorContext",
    ()=>errorContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/config.js [app-client] (ecmascript)");
;
var context = null;
function errorContext(cb) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["config"].useDeprecatedSynchronousErrorHandling) {
        var isRoot = !context;
        if (isRoot) {
            context = {
                errorThrown: false,
                error: null
            };
        }
        cb();
        if (isRoot) {
            var _a = context, errorThrown = _a.errorThrown, error = _a.error;
            context = null;
            if (errorThrown) {
                throw error;
            }
        }
    } else {
        cb();
    }
}
function captureError(err) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["config"].useDeprecatedSynchronousErrorHandling && context) {
        context.errorThrown = true;
        context.error = err;
    }
} //# sourceMappingURL=errorContext.js.map
}),
"[project]/frontend/node_modules/rxjs/dist/esm5/internal/Subscriber.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EMPTY_OBSERVER",
    ()=>EMPTY_OBSERVER,
    "SafeSubscriber",
    ()=>SafeSubscriber,
    "Subscriber",
    ()=>Subscriber
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$isFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/isFunction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$Subscription$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/Subscription.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/config.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$reportUnhandledError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/reportUnhandledError.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$noop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/noop.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$NotificationFactories$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/NotificationFactories.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$scheduler$2f$timeoutProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/scheduler/timeoutProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$errorContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/errorContext.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
var Subscriber = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(Subscriber, _super);
    function Subscriber(destination) {
        var _this = _super.call(this) || this;
        _this.isStopped = false;
        if (destination) {
            _this.destination = destination;
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$Subscription$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSubscription"])(destination)) {
                destination.add(_this);
            }
        } else {
            _this.destination = EMPTY_OBSERVER;
        }
        return _this;
    }
    Subscriber.create = function(next, error, complete) {
        return new SafeSubscriber(next, error, complete);
    };
    Subscriber.prototype.next = function(value) {
        if (this.isStopped) {
            handleStoppedNotification((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$NotificationFactories$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nextNotification"])(value), this);
        } else {
            this._next(value);
        }
    };
    Subscriber.prototype.error = function(err) {
        if (this.isStopped) {
            handleStoppedNotification((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$NotificationFactories$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["errorNotification"])(err), this);
        } else {
            this.isStopped = true;
            this._error(err);
        }
    };
    Subscriber.prototype.complete = function() {
        if (this.isStopped) {
            handleStoppedNotification(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$NotificationFactories$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMPLETE_NOTIFICATION"], this);
        } else {
            this.isStopped = true;
            this._complete();
        }
    };
    Subscriber.prototype.unsubscribe = function() {
        if (!this.closed) {
            this.isStopped = true;
            _super.prototype.unsubscribe.call(this);
            this.destination = null;
        }
    };
    Subscriber.prototype._next = function(value) {
        this.destination.next(value);
    };
    Subscriber.prototype._error = function(err) {
        try {
            this.destination.error(err);
        } finally{
            this.unsubscribe();
        }
    };
    Subscriber.prototype._complete = function() {
        try {
            this.destination.complete();
        } finally{
            this.unsubscribe();
        }
    };
    return Subscriber;
}(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$Subscription$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Subscription"]);
;
var _bind = Function.prototype.bind;
function bind(fn, thisArg) {
    return _bind.call(fn, thisArg);
}
var ConsumerObserver = function() {
    function ConsumerObserver(partialObserver) {
        this.partialObserver = partialObserver;
    }
    ConsumerObserver.prototype.next = function(value) {
        var partialObserver = this.partialObserver;
        if (partialObserver.next) {
            try {
                partialObserver.next(value);
            } catch (error) {
                handleUnhandledError(error);
            }
        }
    };
    ConsumerObserver.prototype.error = function(err) {
        var partialObserver = this.partialObserver;
        if (partialObserver.error) {
            try {
                partialObserver.error(err);
            } catch (error) {
                handleUnhandledError(error);
            }
        } else {
            handleUnhandledError(err);
        }
    };
    ConsumerObserver.prototype.complete = function() {
        var partialObserver = this.partialObserver;
        if (partialObserver.complete) {
            try {
                partialObserver.complete();
            } catch (error) {
                handleUnhandledError(error);
            }
        }
    };
    return ConsumerObserver;
}();
var SafeSubscriber = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(SafeSubscriber, _super);
    function SafeSubscriber(observerOrNext, error, complete) {
        var _this = _super.call(this) || this;
        var partialObserver;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$isFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(observerOrNext) || !observerOrNext) {
            partialObserver = {
                next: observerOrNext !== null && observerOrNext !== void 0 ? observerOrNext : undefined,
                error: error !== null && error !== void 0 ? error : undefined,
                complete: complete !== null && complete !== void 0 ? complete : undefined
            };
        } else {
            var context_1;
            if (_this && __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["config"].useDeprecatedNextContext) {
                context_1 = Object.create(observerOrNext);
                context_1.unsubscribe = function() {
                    return _this.unsubscribe();
                };
                partialObserver = {
                    next: observerOrNext.next && bind(observerOrNext.next, context_1),
                    error: observerOrNext.error && bind(observerOrNext.error, context_1),
                    complete: observerOrNext.complete && bind(observerOrNext.complete, context_1)
                };
            } else {
                partialObserver = observerOrNext;
            }
        }
        _this.destination = new ConsumerObserver(partialObserver);
        return _this;
    }
    return SafeSubscriber;
}(Subscriber);
;
function handleUnhandledError(error) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["config"].useDeprecatedSynchronousErrorHandling) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$errorContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["captureError"])(error);
    } else {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$reportUnhandledError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reportUnhandledError"])(error);
    }
}
function defaultErrorHandler(err) {
    throw err;
}
function handleStoppedNotification(notification, subscriber) {
    var onStoppedNotification = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["config"].onStoppedNotification;
    onStoppedNotification && __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$scheduler$2f$timeoutProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timeoutProvider"].setTimeout(function() {
        return onStoppedNotification(notification, subscriber);
    });
}
var EMPTY_OBSERVER = {
    closed: true,
    next: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$noop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"],
    error: defaultErrorHandler,
    complete: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$noop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"]
}; //# sourceMappingURL=Subscriber.js.map
}),
"[project]/frontend/node_modules/rxjs/dist/esm5/internal/symbol/observable.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "observable",
    ()=>observable
]);
var observable = function() {
    return typeof Symbol === 'function' && Symbol.observable || '@@observable';
}(); //# sourceMappingURL=observable.js.map
}),
"[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/identity.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "identity",
    ()=>identity
]);
function identity(x) {
    return x;
} //# sourceMappingURL=identity.js.map
}),
"[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/pipe.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "pipe",
    ()=>pipe,
    "pipeFromArray",
    ()=>pipeFromArray
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$identity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/identity.js [app-client] (ecmascript)");
;
function pipe() {
    var fns = [];
    for(var _i = 0; _i < arguments.length; _i++){
        fns[_i] = arguments[_i];
    }
    return pipeFromArray(fns);
}
function pipeFromArray(fns) {
    if (fns.length === 0) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$identity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identity"];
    }
    if (fns.length === 1) {
        return fns[0];
    }
    return function piped(input) {
        return fns.reduce(function(prev, fn) {
            return fn(prev);
        }, input);
    };
} //# sourceMappingURL=pipe.js.map
}),
"[project]/frontend/node_modules/rxjs/dist/esm5/internal/Observable.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Observable",
    ()=>Observable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$Subscriber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/Subscriber.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$Subscription$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/Subscription.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$symbol$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/symbol/observable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$pipe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/pipe.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/config.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$isFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/isFunction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$errorContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/errorContext.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
var Observable = function() {
    function Observable(subscribe) {
        if (subscribe) {
            this._subscribe = subscribe;
        }
    }
    Observable.prototype.lift = function(operator) {
        var observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
    };
    Observable.prototype.subscribe = function(observerOrNext, error, complete) {
        var _this = this;
        var subscriber = isSubscriber(observerOrNext) ? observerOrNext : new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$Subscriber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeSubscriber"](observerOrNext, error, complete);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$errorContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["errorContext"])(function() {
            var _a = _this, operator = _a.operator, source = _a.source;
            subscriber.add(operator ? operator.call(subscriber, source) : source ? _this._subscribe(subscriber) : _this._trySubscribe(subscriber));
        });
        return subscriber;
    };
    Observable.prototype._trySubscribe = function(sink) {
        try {
            return this._subscribe(sink);
        } catch (err) {
            sink.error(err);
        }
    };
    Observable.prototype.forEach = function(next, promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function(resolve, reject) {
            var subscriber = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$Subscriber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeSubscriber"]({
                next: function(value) {
                    try {
                        next(value);
                    } catch (err) {
                        reject(err);
                        subscriber.unsubscribe();
                    }
                },
                error: reject,
                complete: resolve
            });
            _this.subscribe(subscriber);
        });
    };
    Observable.prototype._subscribe = function(subscriber) {
        var _a;
        return (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber);
    };
    Observable.prototype[__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$symbol$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["observable"]] = function() {
        return this;
    };
    Observable.prototype.pipe = function() {
        var operations = [];
        for(var _i = 0; _i < arguments.length; _i++){
            operations[_i] = arguments[_i];
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$pipe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipeFromArray"])(operations)(this);
    };
    Observable.prototype.toPromise = function(promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function(resolve, reject) {
            var value;
            _this.subscribe(function(x) {
                return value = x;
            }, function(err) {
                return reject(err);
            }, function() {
                return resolve(value);
            });
        });
    };
    Observable.create = function(subscribe) {
        return new Observable(subscribe);
    };
    return Observable;
}();
;
function getPromiseCtor(promiseCtor) {
    var _a;
    return (_a = promiseCtor !== null && promiseCtor !== void 0 ? promiseCtor : __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["config"].Promise) !== null && _a !== void 0 ? _a : Promise;
}
function isObserver(value) {
    return value && (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$isFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(value.next) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$isFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(value.error) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$isFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(value.complete);
}
function isSubscriber(value) {
    return value && value instanceof __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$Subscriber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Subscriber"] || isObserver(value) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$Subscription$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSubscription"])(value);
} //# sourceMappingURL=Observable.js.map
}),
"[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/isArrayLike.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isArrayLike",
    ()=>isArrayLike
]);
var isArrayLike = function(x) {
    return x && typeof x.length === 'number' && typeof x !== 'function';
}; //# sourceMappingURL=isArrayLike.js.map
}),
"[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/isPromise.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isPromise",
    ()=>isPromise
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$isFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/isFunction.js [app-client] (ecmascript)");
;
function isPromise(value) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$isFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(value === null || value === void 0 ? void 0 : value.then);
} //# sourceMappingURL=isPromise.js.map
}),
"[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/isInteropObservable.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isInteropObservable",
    ()=>isInteropObservable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$symbol$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/symbol/observable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$isFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/isFunction.js [app-client] (ecmascript)");
;
;
function isInteropObservable(input) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$isFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(input[__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$symbol$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["observable"]]);
} //# sourceMappingURL=isInteropObservable.js.map
}),
"[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/isAsyncIterable.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isAsyncIterable",
    ()=>isAsyncIterable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$isFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/isFunction.js [app-client] (ecmascript)");
;
function isAsyncIterable(obj) {
    return Symbol.asyncIterator && (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$isFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(obj === null || obj === void 0 ? void 0 : obj[Symbol.asyncIterator]);
} //# sourceMappingURL=isAsyncIterable.js.map
}),
"[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/throwUnobservableError.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createInvalidObservableTypeError",
    ()=>createInvalidObservableTypeError
]);
function createInvalidObservableTypeError(input) {
    return new TypeError("You provided " + (input !== null && typeof input === 'object' ? 'an invalid object' : "'" + input + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
} //# sourceMappingURL=throwUnobservableError.js.map
}),
"[project]/frontend/node_modules/rxjs/dist/esm5/internal/symbol/iterator.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getSymbolIterator",
    ()=>getSymbolIterator,
    "iterator",
    ()=>iterator
]);
function getSymbolIterator() {
    if (typeof Symbol !== 'function' || !Symbol.iterator) {
        return '@@iterator';
    }
    return Symbol.iterator;
}
var iterator = getSymbolIterator(); //# sourceMappingURL=iterator.js.map
}),
"[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/isIterable.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isIterable",
    ()=>isIterable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$symbol$2f$iterator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/symbol/iterator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$isFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/isFunction.js [app-client] (ecmascript)");
;
;
function isIterable(input) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$isFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(input === null || input === void 0 ? void 0 : input[__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$symbol$2f$iterator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["iterator"]]);
} //# sourceMappingURL=isIterable.js.map
}),
"[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/isReadableStreamLike.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isReadableStreamLike",
    ()=>isReadableStreamLike,
    "readableStreamLikeToAsyncGenerator",
    ()=>readableStreamLikeToAsyncGenerator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$isFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/isFunction.js [app-client] (ecmascript)");
;
;
function readableStreamLikeToAsyncGenerator(readableStream) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__asyncGenerator"])(this, arguments, function readableStreamLikeToAsyncGenerator_1() {
        var reader, _a, value, done;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_b) {
            switch(_b.label){
                case 0:
                    reader = readableStream.getReader();
                    _b.label = 1;
                case 1:
                    _b.trys.push([
                        1,
                        ,
                        9,
                        10
                    ]);
                    _b.label = 2;
                case 2:
                    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                    ;
                    return [
                        4,
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__await"])(reader.read())
                    ];
                case 3:
                    _a = _b.sent(), value = _a.value, done = _a.done;
                    if (!done) return [
                        3,
                        5
                    ];
                    return [
                        4,
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__await"])(void 0)
                    ];
                case 4:
                    return [
                        2,
                        _b.sent()
                    ];
                case 5:
                    return [
                        4,
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__await"])(value)
                    ];
                case 6:
                    return [
                        4,
                        _b.sent()
                    ];
                case 7:
                    _b.sent();
                    return [
                        3,
                        2
                    ];
                case 8:
                    return [
                        3,
                        10
                    ];
                case 9:
                    reader.releaseLock();
                    return [
                        7
                    ];
                case 10:
                    return [
                        2
                    ];
            }
        });
    });
}
function isReadableStreamLike(obj) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$isFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(obj === null || obj === void 0 ? void 0 : obj.getReader);
} //# sourceMappingURL=isReadableStreamLike.js.map
}),
"[project]/frontend/node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fromArrayLike",
    ()=>fromArrayLike,
    "fromAsyncIterable",
    ()=>fromAsyncIterable,
    "fromInteropObservable",
    ()=>fromInteropObservable,
    "fromIterable",
    ()=>fromIterable,
    "fromPromise",
    ()=>fromPromise,
    "fromReadableStreamLike",
    ()=>fromReadableStreamLike,
    "innerFrom",
    ()=>innerFrom
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$isArrayLike$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/isArrayLike.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$isPromise$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/isPromise.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$Observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/Observable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$isInteropObservable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/isInteropObservable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$isAsyncIterable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/isAsyncIterable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$throwUnobservableError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/throwUnobservableError.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$isIterable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/isIterable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$isReadableStreamLike$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/isReadableStreamLike.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$isFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/isFunction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$reportUnhandledError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/reportUnhandledError.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$symbol$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/symbol/observable.js [app-client] (ecmascript)");
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
function innerFrom(input) {
    if (input instanceof __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$Observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]) {
        return input;
    }
    if (input != null) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$isInteropObservable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isInteropObservable"])(input)) {
            return fromInteropObservable(input);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$isArrayLike$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArrayLike"])(input)) {
            return fromArrayLike(input);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$isPromise$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPromise"])(input)) {
            return fromPromise(input);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$isAsyncIterable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAsyncIterable"])(input)) {
            return fromAsyncIterable(input);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$isIterable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isIterable"])(input)) {
            return fromIterable(input);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$isReadableStreamLike$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isReadableStreamLike"])(input)) {
            return fromReadableStreamLike(input);
        }
    }
    throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$throwUnobservableError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createInvalidObservableTypeError"])(input);
}
function fromInteropObservable(obj) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$Observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"](function(subscriber) {
        var obs = obj[__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$symbol$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["observable"]]();
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$isFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(obs.subscribe)) {
            return obs.subscribe(subscriber);
        }
        throw new TypeError('Provided object does not correctly implement Symbol.observable');
    });
}
function fromArrayLike(array) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$Observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"](function(subscriber) {
        for(var i = 0; i < array.length && !subscriber.closed; i++){
            subscriber.next(array[i]);
        }
        subscriber.complete();
    });
}
function fromPromise(promise) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$Observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"](function(subscriber) {
        promise.then(function(value) {
            if (!subscriber.closed) {
                subscriber.next(value);
                subscriber.complete();
            }
        }, function(err) {
            return subscriber.error(err);
        }).then(null, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$reportUnhandledError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reportUnhandledError"]);
    });
}
function fromIterable(iterable) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$Observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"](function(subscriber) {
        var e_1, _a;
        try {
            for(var iterable_1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__values"])(iterable), iterable_1_1 = iterable_1.next(); !iterable_1_1.done; iterable_1_1 = iterable_1.next()){
                var value = iterable_1_1.value;
                subscriber.next(value);
                if (subscriber.closed) {
                    return;
                }
            }
        } catch (e_1_1) {
            e_1 = {
                error: e_1_1
            };
        } finally{
            try {
                if (iterable_1_1 && !iterable_1_1.done && (_a = iterable_1.return)) _a.call(iterable_1);
            } finally{
                if (e_1) throw e_1.error;
            }
        }
        subscriber.complete();
    });
}
function fromAsyncIterable(asyncIterable) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$Observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"](function(subscriber) {
        process(asyncIterable, subscriber).catch(function(err) {
            return subscriber.error(err);
        });
    });
}
function fromReadableStreamLike(readableStream) {
    return fromAsyncIterable((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$isReadableStreamLike$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readableStreamLikeToAsyncGenerator"])(readableStream));
}
function process(asyncIterable, subscriber) {
    var asyncIterable_1, asyncIterable_1_1;
    var e_2, _a;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function() {
        var value, e_2_1;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_b) {
            switch(_b.label){
                case 0:
                    _b.trys.push([
                        0,
                        5,
                        6,
                        11
                    ]);
                    asyncIterable_1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__asyncValues"])(asyncIterable);
                    _b.label = 1;
                case 1:
                    return [
                        4,
                        asyncIterable_1.next()
                    ];
                case 2:
                    if (!(asyncIterable_1_1 = _b.sent(), !asyncIterable_1_1.done)) return [
                        3,
                        4
                    ];
                    value = asyncIterable_1_1.value;
                    subscriber.next(value);
                    if (subscriber.closed) {
                        return [
                            2
                        ];
                    }
                    _b.label = 3;
                case 3:
                    return [
                        3,
                        1
                    ];
                case 4:
                    return [
                        3,
                        11
                    ];
                case 5:
                    e_2_1 = _b.sent();
                    e_2 = {
                        error: e_2_1
                    };
                    return [
                        3,
                        11
                    ];
                case 6:
                    _b.trys.push([
                        6,
                        ,
                        9,
                        10
                    ]);
                    if (!(asyncIterable_1_1 && !asyncIterable_1_1.done && (_a = asyncIterable_1.return))) return [
                        3,
                        8
                    ];
                    return [
                        4,
                        _a.call(asyncIterable_1)
                    ];
                case 7:
                    _b.sent();
                    _b.label = 8;
                case 8:
                    return [
                        3,
                        10
                    ];
                case 9:
                    if (e_2) throw e_2.error;
                    return [
                        7
                    ];
                case 10:
                    return [
                        7
                    ];
                case 11:
                    subscriber.complete();
                    return [
                        2
                    ];
            }
        });
    });
} //# sourceMappingURL=innerFrom.js.map
}),
"[project]/frontend/node_modules/rxjs/dist/esm5/internal/observable/defer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defer",
    ()=>defer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$Observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/Observable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$observable$2f$innerFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js [app-client] (ecmascript)");
;
;
function defer(observableFactory) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$Observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"](function(subscriber) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$observable$2f$innerFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["innerFrom"])(observableFactory()).subscribe(subscriber);
    });
} //# sourceMappingURL=defer.js.map
}),
"[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/isScheduler.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isScheduler",
    ()=>isScheduler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$isFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/isFunction.js [app-client] (ecmascript)");
;
function isScheduler(value) {
    return value && (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$isFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(value.schedule);
} //# sourceMappingURL=isScheduler.js.map
}),
"[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/args.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "popNumber",
    ()=>popNumber,
    "popResultSelector",
    ()=>popResultSelector,
    "popScheduler",
    ()=>popScheduler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$isFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/isFunction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$isScheduler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/isScheduler.js [app-client] (ecmascript)");
;
;
function last(arr) {
    return arr[arr.length - 1];
}
function popResultSelector(args) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$isFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(last(args)) ? args.pop() : undefined;
}
function popScheduler(args) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$isScheduler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isScheduler"])(last(args)) ? args.pop() : undefined;
}
function popNumber(args, defaultValue) {
    return typeof last(args) === 'number' ? args.pop() : defaultValue;
} //# sourceMappingURL=args.js.map
}),
"[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/executeSchedule.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "executeSchedule",
    ()=>executeSchedule
]);
function executeSchedule(parentSubscription, scheduler, work, delay, repeat) {
    if (delay === void 0) {
        delay = 0;
    }
    if (repeat === void 0) {
        repeat = false;
    }
    var scheduleSubscription = scheduler.schedule(function() {
        work();
        if (repeat) {
            parentSubscription.add(this.schedule(null, delay));
        } else {
            this.unsubscribe();
        }
    }, delay);
    parentSubscription.add(scheduleSubscription);
    if (!repeat) {
        return scheduleSubscription;
    }
} //# sourceMappingURL=executeSchedule.js.map
}),
"[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/lift.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hasLift",
    ()=>hasLift,
    "operate",
    ()=>operate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$isFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/isFunction.js [app-client] (ecmascript)");
;
function hasLift(source) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$isFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(source === null || source === void 0 ? void 0 : source.lift);
}
function operate(init) {
    return function(source) {
        if (hasLift(source)) {
            return source.lift(function(liftedSource) {
                try {
                    return init(liftedSource, this);
                } catch (err) {
                    this.error(err);
                }
            });
        }
        throw new TypeError('Unable to lift unknown Observable type');
    };
} //# sourceMappingURL=lift.js.map
}),
"[project]/frontend/node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OperatorSubscriber",
    ()=>OperatorSubscriber,
    "createOperatorSubscriber",
    ()=>createOperatorSubscriber
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$Subscriber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/Subscriber.js [app-client] (ecmascript)");
;
;
function createOperatorSubscriber(destination, onNext, onComplete, onError, onFinalize) {
    return new OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize);
}
var OperatorSubscriber = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(OperatorSubscriber, _super);
    function OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize, shouldUnsubscribe) {
        var _this = _super.call(this, destination) || this;
        _this.onFinalize = onFinalize;
        _this.shouldUnsubscribe = shouldUnsubscribe;
        _this._next = onNext ? function(value) {
            try {
                onNext(value);
            } catch (err) {
                destination.error(err);
            }
        } : _super.prototype._next;
        _this._error = onError ? function(err) {
            try {
                onError(err);
            } catch (err) {
                destination.error(err);
            } finally{
                this.unsubscribe();
            }
        } : _super.prototype._error;
        _this._complete = onComplete ? function() {
            try {
                onComplete();
            } catch (err) {
                destination.error(err);
            } finally{
                this.unsubscribe();
            }
        } : _super.prototype._complete;
        return _this;
    }
    OperatorSubscriber.prototype.unsubscribe = function() {
        var _a;
        if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
            var closed_1 = this.closed;
            _super.prototype.unsubscribe.call(this);
            !closed_1 && ((_a = this.onFinalize) === null || _a === void 0 ? void 0 : _a.call(this));
        }
    };
    return OperatorSubscriber;
}(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$Subscriber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Subscriber"]);
;
 //# sourceMappingURL=OperatorSubscriber.js.map
}),
"[project]/frontend/node_modules/rxjs/dist/esm5/internal/operators/observeOn.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "observeOn",
    ()=>observeOn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$executeSchedule$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/executeSchedule.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$lift$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/lift.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$OperatorSubscriber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js [app-client] (ecmascript)");
;
;
;
function observeOn(scheduler, delay) {
    if (delay === void 0) {
        delay = 0;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$lift$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["operate"])(function(source, subscriber) {
        source.subscribe((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$OperatorSubscriber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createOperatorSubscriber"])(subscriber, function(value) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$executeSchedule$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["executeSchedule"])(subscriber, scheduler, function() {
                return subscriber.next(value);
            }, delay);
        }, function() {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$executeSchedule$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["executeSchedule"])(subscriber, scheduler, function() {
                return subscriber.complete();
            }, delay);
        }, function(err) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$executeSchedule$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["executeSchedule"])(subscriber, scheduler, function() {
                return subscriber.error(err);
            }, delay);
        }));
    });
} //# sourceMappingURL=observeOn.js.map
}),
"[project]/frontend/node_modules/rxjs/dist/esm5/internal/operators/subscribeOn.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "subscribeOn",
    ()=>subscribeOn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$lift$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/lift.js [app-client] (ecmascript)");
;
function subscribeOn(scheduler, delay) {
    if (delay === void 0) {
        delay = 0;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$lift$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["operate"])(function(source, subscriber) {
        subscriber.add(scheduler.schedule(function() {
            return source.subscribe(subscriber);
        }, delay));
    });
} //# sourceMappingURL=subscribeOn.js.map
}),
"[project]/frontend/node_modules/rxjs/dist/esm5/internal/scheduled/scheduleObservable.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "scheduleObservable",
    ()=>scheduleObservable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$observable$2f$innerFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$observeOn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/operators/observeOn.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$subscribeOn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/operators/subscribeOn.js [app-client] (ecmascript)");
;
;
;
function scheduleObservable(input, scheduler) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$observable$2f$innerFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["innerFrom"])(input).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$subscribeOn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subscribeOn"])(scheduler), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$observeOn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["observeOn"])(scheduler));
} //# sourceMappingURL=scheduleObservable.js.map
}),
"[project]/frontend/node_modules/rxjs/dist/esm5/internal/scheduled/schedulePromise.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "schedulePromise",
    ()=>schedulePromise
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$observable$2f$innerFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$observeOn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/operators/observeOn.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$subscribeOn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/operators/subscribeOn.js [app-client] (ecmascript)");
;
;
;
function schedulePromise(input, scheduler) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$observable$2f$innerFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["innerFrom"])(input).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$subscribeOn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subscribeOn"])(scheduler), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$observeOn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["observeOn"])(scheduler));
} //# sourceMappingURL=schedulePromise.js.map
}),
"[project]/frontend/node_modules/rxjs/dist/esm5/internal/scheduled/scheduleArray.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "scheduleArray",
    ()=>scheduleArray
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$Observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/Observable.js [app-client] (ecmascript)");
;
function scheduleArray(input, scheduler) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$Observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"](function(subscriber) {
        var i = 0;
        return scheduler.schedule(function() {
            if (i === input.length) {
                subscriber.complete();
            } else {
                subscriber.next(input[i++]);
                if (!subscriber.closed) {
                    this.schedule();
                }
            }
        });
    });
} //# sourceMappingURL=scheduleArray.js.map
}),
"[project]/frontend/node_modules/rxjs/dist/esm5/internal/scheduled/scheduleIterable.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "scheduleIterable",
    ()=>scheduleIterable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$Observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/Observable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$symbol$2f$iterator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/symbol/iterator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$isFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/isFunction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$executeSchedule$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/executeSchedule.js [app-client] (ecmascript)");
;
;
;
;
function scheduleIterable(input, scheduler) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$Observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"](function(subscriber) {
        var iterator;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$executeSchedule$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["executeSchedule"])(subscriber, scheduler, function() {
            iterator = input[__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$symbol$2f$iterator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["iterator"]]();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$executeSchedule$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["executeSchedule"])(subscriber, scheduler, function() {
                var _a;
                var value;
                var done;
                try {
                    _a = iterator.next(), value = _a.value, done = _a.done;
                } catch (err) {
                    subscriber.error(err);
                    return;
                }
                if (done) {
                    subscriber.complete();
                } else {
                    subscriber.next(value);
                }
            }, 0, true);
        });
        return function() {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$isFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(iterator === null || iterator === void 0 ? void 0 : iterator.return) && iterator.return();
        };
    });
} //# sourceMappingURL=scheduleIterable.js.map
}),
"[project]/frontend/node_modules/rxjs/dist/esm5/internal/scheduled/scheduleAsyncIterable.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "scheduleAsyncIterable",
    ()=>scheduleAsyncIterable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$Observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/Observable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$executeSchedule$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/executeSchedule.js [app-client] (ecmascript)");
;
;
function scheduleAsyncIterable(input, scheduler) {
    if (!input) {
        throw new Error('Iterable cannot be null');
    }
    return new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$Observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"](function(subscriber) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$executeSchedule$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["executeSchedule"])(subscriber, scheduler, function() {
            var iterator = input[Symbol.asyncIterator]();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$executeSchedule$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["executeSchedule"])(subscriber, scheduler, function() {
                iterator.next().then(function(result) {
                    if (result.done) {
                        subscriber.complete();
                    } else {
                        subscriber.next(result.value);
                    }
                });
            }, 0, true);
        });
    });
} //# sourceMappingURL=scheduleAsyncIterable.js.map
}),
"[project]/frontend/node_modules/rxjs/dist/esm5/internal/scheduled/scheduleReadableStreamLike.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "scheduleReadableStreamLike",
    ()=>scheduleReadableStreamLike
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$scheduled$2f$scheduleAsyncIterable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/scheduled/scheduleAsyncIterable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$isReadableStreamLike$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/isReadableStreamLike.js [app-client] (ecmascript)");
;
;
function scheduleReadableStreamLike(input, scheduler) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$scheduled$2f$scheduleAsyncIterable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scheduleAsyncIterable"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$isReadableStreamLike$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readableStreamLikeToAsyncGenerator"])(input), scheduler);
} //# sourceMappingURL=scheduleReadableStreamLike.js.map
}),
"[project]/frontend/node_modules/rxjs/dist/esm5/internal/scheduled/scheduled.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "scheduled",
    ()=>scheduled
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$scheduled$2f$scheduleObservable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/scheduled/scheduleObservable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$scheduled$2f$schedulePromise$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/scheduled/schedulePromise.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$scheduled$2f$scheduleArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/scheduled/scheduleArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$scheduled$2f$scheduleIterable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/scheduled/scheduleIterable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$scheduled$2f$scheduleAsyncIterable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/scheduled/scheduleAsyncIterable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$isInteropObservable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/isInteropObservable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$isPromise$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/isPromise.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$isArrayLike$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/isArrayLike.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$isIterable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/isIterable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$isAsyncIterable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/isAsyncIterable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$throwUnobservableError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/throwUnobservableError.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$isReadableStreamLike$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/isReadableStreamLike.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$scheduled$2f$scheduleReadableStreamLike$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/scheduled/scheduleReadableStreamLike.js [app-client] (ecmascript)");
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
function scheduled(input, scheduler) {
    if (input != null) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$isInteropObservable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isInteropObservable"])(input)) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$scheduled$2f$scheduleObservable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scheduleObservable"])(input, scheduler);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$isArrayLike$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArrayLike"])(input)) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$scheduled$2f$scheduleArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scheduleArray"])(input, scheduler);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$isPromise$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPromise"])(input)) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$scheduled$2f$schedulePromise$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schedulePromise"])(input, scheduler);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$isAsyncIterable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAsyncIterable"])(input)) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$scheduled$2f$scheduleAsyncIterable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scheduleAsyncIterable"])(input, scheduler);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$isIterable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isIterable"])(input)) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$scheduled$2f$scheduleIterable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scheduleIterable"])(input, scheduler);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$isReadableStreamLike$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isReadableStreamLike"])(input)) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$scheduled$2f$scheduleReadableStreamLike$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scheduleReadableStreamLike"])(input, scheduler);
        }
    }
    throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$throwUnobservableError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createInvalidObservableTypeError"])(input);
} //# sourceMappingURL=scheduled.js.map
}),
"[project]/frontend/node_modules/rxjs/dist/esm5/internal/observable/from.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "from",
    ()=>from
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$scheduled$2f$scheduled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/scheduled/scheduled.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$observable$2f$innerFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js [app-client] (ecmascript)");
;
;
function from(input, scheduler) {
    return scheduler ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$scheduled$2f$scheduled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scheduled"])(input, scheduler) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$observable$2f$innerFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["innerFrom"])(input);
} //# sourceMappingURL=from.js.map
}),
"[project]/frontend/node_modules/rxjs/dist/esm5/internal/observable/of.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "of",
    ()=>of
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$args$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/args.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$observable$2f$from$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/observable/from.js [app-client] (ecmascript)");
;
;
function of() {
    var args = [];
    for(var _i = 0; _i < arguments.length; _i++){
        args[_i] = arguments[_i];
    }
    var scheduler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$args$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["popScheduler"])(args);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$observable$2f$from$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["from"])(args, scheduler);
} //# sourceMappingURL=of.js.map
}),
"[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/isObservable.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isObservable",
    ()=>isObservable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$Observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/Observable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$isFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/isFunction.js [app-client] (ecmascript)");
;
;
function isObservable(obj) {
    return !!obj && (obj instanceof __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$Observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"] || (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$isFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(obj.lift) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$isFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(obj.subscribe));
} //# sourceMappingURL=isObservable.js.map
}),
"[project]/frontend/node_modules/rxjs/dist/esm5/internal/operators/map.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "map",
    ()=>map
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$lift$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/lift.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$OperatorSubscriber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js [app-client] (ecmascript)");
;
;
function map(project, thisArg) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$lift$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["operate"])(function(source, subscriber) {
        var index = 0;
        source.subscribe((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$OperatorSubscriber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createOperatorSubscriber"])(subscriber, function(value) {
            subscriber.next(project.call(thisArg, value, index++));
        }));
    });
} //# sourceMappingURL=map.js.map
}),
"[project]/frontend/node_modules/rxjs/dist/esm5/internal/operators/mergeInternals.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mergeInternals",
    ()=>mergeInternals
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$observable$2f$innerFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$executeSchedule$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/executeSchedule.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$OperatorSubscriber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js [app-client] (ecmascript)");
;
;
;
function mergeInternals(source, subscriber, project, concurrent, onBeforeNext, expand, innerSubScheduler, additionalFinalizer) {
    var buffer = [];
    var active = 0;
    var index = 0;
    var isComplete = false;
    var checkComplete = function() {
        if (isComplete && !buffer.length && !active) {
            subscriber.complete();
        }
    };
    var outerNext = function(value) {
        return active < concurrent ? doInnerSub(value) : buffer.push(value);
    };
    var doInnerSub = function(value) {
        expand && subscriber.next(value);
        active++;
        var innerComplete = false;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$observable$2f$innerFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["innerFrom"])(project(value, index++)).subscribe((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$OperatorSubscriber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createOperatorSubscriber"])(subscriber, function(innerValue) {
            onBeforeNext === null || onBeforeNext === void 0 ? void 0 : onBeforeNext(innerValue);
            if (expand) {
                outerNext(innerValue);
            } else {
                subscriber.next(innerValue);
            }
        }, function() {
            innerComplete = true;
        }, undefined, function() {
            if (innerComplete) {
                try {
                    active--;
                    var _loop_1 = function() {
                        var bufferedValue = buffer.shift();
                        if (innerSubScheduler) {
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$executeSchedule$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["executeSchedule"])(subscriber, innerSubScheduler, function() {
                                return doInnerSub(bufferedValue);
                            });
                        } else {
                            doInnerSub(bufferedValue);
                        }
                    };
                    while(buffer.length && active < concurrent){
                        _loop_1();
                    }
                    checkComplete();
                } catch (err) {
                    subscriber.error(err);
                }
            }
        }));
    };
    source.subscribe((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$OperatorSubscriber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createOperatorSubscriber"])(subscriber, outerNext, function() {
        isComplete = true;
        checkComplete();
    }));
    return function() {
        additionalFinalizer === null || additionalFinalizer === void 0 ? void 0 : additionalFinalizer();
    };
} //# sourceMappingURL=mergeInternals.js.map
}),
"[project]/frontend/node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mergeMap",
    ()=>mergeMap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/operators/map.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$observable$2f$innerFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$lift$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/lift.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$mergeInternals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/operators/mergeInternals.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$isFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/isFunction.js [app-client] (ecmascript)");
;
;
;
;
;
function mergeMap(project, resultSelector, concurrent) {
    if (concurrent === void 0) {
        concurrent = Infinity;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$isFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(resultSelector)) {
        return mergeMap(function(a, i) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["map"])(function(b, ii) {
                return resultSelector(a, b, i, ii);
            })((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$observable$2f$innerFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["innerFrom"])(project(a, i)));
        }, concurrent);
    } else if (typeof resultSelector === 'number') {
        concurrent = resultSelector;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$lift$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["operate"])(function(source, subscriber) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$mergeInternals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeInternals"])(source, subscriber, project, concurrent);
    });
} //# sourceMappingURL=mergeMap.js.map
}),
"[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/EmptyError.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EmptyError",
    ()=>EmptyError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$createErrorClass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/createErrorClass.js [app-client] (ecmascript)");
;
var EmptyError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$createErrorClass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createErrorClass"])(function(_super) {
    return function EmptyErrorImpl() {
        _super(this);
        this.name = 'EmptyError';
        this.message = 'no elements in sequence';
    };
}); //# sourceMappingURL=EmptyError.js.map
}),
"[project]/frontend/node_modules/rxjs/dist/esm5/internal/lastValueFrom.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "lastValueFrom",
    ()=>lastValueFrom
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$EmptyError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/EmptyError.js [app-client] (ecmascript)");
;
function lastValueFrom(source, config) {
    var hasConfig = typeof config === 'object';
    return new Promise(function(resolve, reject) {
        var _hasValue = false;
        var _value;
        source.subscribe({
            next: function(value) {
                _value = value;
                _hasValue = true;
            },
            error: reject,
            complete: function() {
                if (_hasValue) {
                    resolve(_value);
                } else if (hasConfig) {
                    resolve(config.defaultValue);
                } else {
                    reject(new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$EmptyError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmptyError"]());
                }
            }
        });
    });
} //# sourceMappingURL=lastValueFrom.js.map
}),
"[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/ObjectUnsubscribedError.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ObjectUnsubscribedError",
    ()=>ObjectUnsubscribedError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$createErrorClass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/createErrorClass.js [app-client] (ecmascript)");
;
var ObjectUnsubscribedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$createErrorClass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createErrorClass"])(function(_super) {
    return function ObjectUnsubscribedErrorImpl() {
        _super(this);
        this.name = 'ObjectUnsubscribedError';
        this.message = 'object unsubscribed';
    };
}); //# sourceMappingURL=ObjectUnsubscribedError.js.map
}),
"[project]/frontend/node_modules/rxjs/dist/esm5/internal/Subject.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnonymousSubject",
    ()=>AnonymousSubject,
    "Subject",
    ()=>Subject
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$Observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/Observable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$Subscription$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/Subscription.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$ObjectUnsubscribedError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/ObjectUnsubscribedError.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$arrRemove$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/arrRemove.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$errorContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/errorContext.js [app-client] (ecmascript)");
;
;
;
;
;
;
var Subject = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(Subject, _super);
    function Subject() {
        var _this = _super.call(this) || this;
        _this.closed = false;
        _this.currentObservers = null;
        _this.observers = [];
        _this.isStopped = false;
        _this.hasError = false;
        _this.thrownError = null;
        return _this;
    }
    Subject.prototype.lift = function(operator) {
        var subject = new AnonymousSubject(this, this);
        subject.operator = operator;
        return subject;
    };
    Subject.prototype._throwIfClosed = function() {
        if (this.closed) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$ObjectUnsubscribedError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ObjectUnsubscribedError"]();
        }
    };
    Subject.prototype.next = function(value) {
        var _this = this;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$errorContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["errorContext"])(function() {
            var e_1, _a;
            _this._throwIfClosed();
            if (!_this.isStopped) {
                if (!_this.currentObservers) {
                    _this.currentObservers = Array.from(_this.observers);
                }
                try {
                    for(var _b = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__values"])(_this.currentObservers), _c = _b.next(); !_c.done; _c = _b.next()){
                        var observer = _c.value;
                        observer.next(value);
                    }
                } catch (e_1_1) {
                    e_1 = {
                        error: e_1_1
                    };
                } finally{
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    } finally{
                        if (e_1) throw e_1.error;
                    }
                }
            }
        });
    };
    Subject.prototype.error = function(err) {
        var _this = this;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$errorContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["errorContext"])(function() {
            _this._throwIfClosed();
            if (!_this.isStopped) {
                _this.hasError = _this.isStopped = true;
                _this.thrownError = err;
                var observers = _this.observers;
                while(observers.length){
                    observers.shift().error(err);
                }
            }
        });
    };
    Subject.prototype.complete = function() {
        var _this = this;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$errorContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["errorContext"])(function() {
            _this._throwIfClosed();
            if (!_this.isStopped) {
                _this.isStopped = true;
                var observers = _this.observers;
                while(observers.length){
                    observers.shift().complete();
                }
            }
        });
    };
    Subject.prototype.unsubscribe = function() {
        this.isStopped = this.closed = true;
        this.observers = this.currentObservers = null;
    };
    Object.defineProperty(Subject.prototype, "observed", {
        get: function() {
            var _a;
            return ((_a = this.observers) === null || _a === void 0 ? void 0 : _a.length) > 0;
        },
        enumerable: false,
        configurable: true
    });
    Subject.prototype._trySubscribe = function(subscriber) {
        this._throwIfClosed();
        return _super.prototype._trySubscribe.call(this, subscriber);
    };
    Subject.prototype._subscribe = function(subscriber) {
        this._throwIfClosed();
        this._checkFinalizedStatuses(subscriber);
        return this._innerSubscribe(subscriber);
    };
    Subject.prototype._innerSubscribe = function(subscriber) {
        var _this = this;
        var _a = this, hasError = _a.hasError, isStopped = _a.isStopped, observers = _a.observers;
        if (hasError || isStopped) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$Subscription$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EMPTY_SUBSCRIPTION"];
        }
        this.currentObservers = null;
        observers.push(subscriber);
        return new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$Subscription$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Subscription"](function() {
            _this.currentObservers = null;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$arrRemove$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["arrRemove"])(observers, subscriber);
        });
    };
    Subject.prototype._checkFinalizedStatuses = function(subscriber) {
        var _a = this, hasError = _a.hasError, thrownError = _a.thrownError, isStopped = _a.isStopped;
        if (hasError) {
            subscriber.error(thrownError);
        } else if (isStopped) {
            subscriber.complete();
        }
    };
    Subject.prototype.asObservable = function() {
        var observable = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$Observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        observable.source = this;
        return observable;
    };
    Subject.create = function(destination, source) {
        return new AnonymousSubject(destination, source);
    };
    return Subject;
}(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$Observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]);
;
var AnonymousSubject = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(AnonymousSubject, _super);
    function AnonymousSubject(destination, source) {
        var _this = _super.call(this) || this;
        _this.destination = destination;
        _this.source = source;
        return _this;
    }
    AnonymousSubject.prototype.next = function(value) {
        var _a, _b;
        (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.next) === null || _b === void 0 ? void 0 : _b.call(_a, value);
    };
    AnonymousSubject.prototype.error = function(err) {
        var _a, _b;
        (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 ? void 0 : _b.call(_a, err);
    };
    AnonymousSubject.prototype.complete = function() {
        var _a, _b;
        (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.complete) === null || _b === void 0 ? void 0 : _b.call(_a);
    };
    AnonymousSubject.prototype._subscribe = function(subscriber) {
        var _a, _b;
        return (_b = (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber)) !== null && _b !== void 0 ? _b : __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$Subscription$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EMPTY_SUBSCRIPTION"];
    };
    return AnonymousSubject;
}(Subject);
;
 //# sourceMappingURL=Subject.js.map
}),
"[project]/frontend/node_modules/rxjs/dist/esm5/internal/scheduler/dateTimestampProvider.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "dateTimestampProvider",
    ()=>dateTimestampProvider
]);
var dateTimestampProvider = {
    now: function() {
        return (dateTimestampProvider.delegate || Date).now();
    },
    delegate: undefined
}; //# sourceMappingURL=dateTimestampProvider.js.map
}),
"[project]/frontend/node_modules/rxjs/dist/esm5/internal/ReplaySubject.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReplaySubject",
    ()=>ReplaySubject
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$Subject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/Subject.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$scheduler$2f$dateTimestampProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/scheduler/dateTimestampProvider.js [app-client] (ecmascript)");
;
;
;
var ReplaySubject = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(ReplaySubject, _super);
    function ReplaySubject(_bufferSize, _windowTime, _timestampProvider) {
        if (_bufferSize === void 0) {
            _bufferSize = Infinity;
        }
        if (_windowTime === void 0) {
            _windowTime = Infinity;
        }
        if (_timestampProvider === void 0) {
            _timestampProvider = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$scheduler$2f$dateTimestampProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dateTimestampProvider"];
        }
        var _this = _super.call(this) || this;
        _this._bufferSize = _bufferSize;
        _this._windowTime = _windowTime;
        _this._timestampProvider = _timestampProvider;
        _this._buffer = [];
        _this._infiniteTimeWindow = true;
        _this._infiniteTimeWindow = _windowTime === Infinity;
        _this._bufferSize = Math.max(1, _bufferSize);
        _this._windowTime = Math.max(1, _windowTime);
        return _this;
    }
    ReplaySubject.prototype.next = function(value) {
        var _a = this, isStopped = _a.isStopped, _buffer = _a._buffer, _infiniteTimeWindow = _a._infiniteTimeWindow, _timestampProvider = _a._timestampProvider, _windowTime = _a._windowTime;
        if (!isStopped) {
            _buffer.push(value);
            !_infiniteTimeWindow && _buffer.push(_timestampProvider.now() + _windowTime);
        }
        this._trimBuffer();
        _super.prototype.next.call(this, value);
    };
    ReplaySubject.prototype._subscribe = function(subscriber) {
        this._throwIfClosed();
        this._trimBuffer();
        var subscription = this._innerSubscribe(subscriber);
        var _a = this, _infiniteTimeWindow = _a._infiniteTimeWindow, _buffer = _a._buffer;
        var copy = _buffer.slice();
        for(var i = 0; i < copy.length && !subscriber.closed; i += _infiniteTimeWindow ? 1 : 2){
            subscriber.next(copy[i]);
        }
        this._checkFinalizedStatuses(subscriber);
        return subscription;
    };
    ReplaySubject.prototype._trimBuffer = function() {
        var _a = this, _bufferSize = _a._bufferSize, _timestampProvider = _a._timestampProvider, _buffer = _a._buffer, _infiniteTimeWindow = _a._infiniteTimeWindow;
        var adjustedBufferSize = (_infiniteTimeWindow ? 1 : 2) * _bufferSize;
        _bufferSize < Infinity && adjustedBufferSize < _buffer.length && _buffer.splice(0, _buffer.length - adjustedBufferSize);
        if (!_infiniteTimeWindow) {
            var now = _timestampProvider.now();
            var last = 0;
            for(var i = 1; i < _buffer.length && _buffer[i] <= now; i += 2){
                last = i;
            }
            last && _buffer.splice(0, last + 1);
        }
    };
    return ReplaySubject;
}(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$Subject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Subject"]);
;
 //# sourceMappingURL=ReplaySubject.js.map
}),
"[project]/frontend/node_modules/rxjs/dist/esm5/internal/operators/share.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "share",
    ()=>share
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$observable$2f$innerFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$Subject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/Subject.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$Subscriber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/Subscriber.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$lift$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/lift.js [app-client] (ecmascript)");
;
;
;
;
;
function share(options) {
    if (options === void 0) {
        options = {};
    }
    var _a = options.connector, connector = _a === void 0 ? function() {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$Subject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Subject"]();
    } : _a, _b = options.resetOnError, resetOnError = _b === void 0 ? true : _b, _c = options.resetOnComplete, resetOnComplete = _c === void 0 ? true : _c, _d = options.resetOnRefCountZero, resetOnRefCountZero = _d === void 0 ? true : _d;
    return function(wrapperSource) {
        var connection;
        var resetConnection;
        var subject;
        var refCount = 0;
        var hasCompleted = false;
        var hasErrored = false;
        var cancelReset = function() {
            resetConnection === null || resetConnection === void 0 ? void 0 : resetConnection.unsubscribe();
            resetConnection = undefined;
        };
        var reset = function() {
            cancelReset();
            connection = subject = undefined;
            hasCompleted = hasErrored = false;
        };
        var resetAndUnsubscribe = function() {
            var conn = connection;
            reset();
            conn === null || conn === void 0 ? void 0 : conn.unsubscribe();
        };
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$lift$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["operate"])(function(source, subscriber) {
            refCount++;
            if (!hasErrored && !hasCompleted) {
                cancelReset();
            }
            var dest = subject = subject !== null && subject !== void 0 ? subject : connector();
            subscriber.add(function() {
                refCount--;
                if (refCount === 0 && !hasErrored && !hasCompleted) {
                    resetConnection = handleReset(resetAndUnsubscribe, resetOnRefCountZero);
                }
            });
            dest.subscribe(subscriber);
            if (!connection && refCount > 0) {
                connection = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$Subscriber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeSubscriber"]({
                    next: function(value) {
                        return dest.next(value);
                    },
                    error: function(err) {
                        hasErrored = true;
                        cancelReset();
                        resetConnection = handleReset(reset, resetOnError, err);
                        dest.error(err);
                    },
                    complete: function() {
                        hasCompleted = true;
                        cancelReset();
                        resetConnection = handleReset(reset, resetOnComplete);
                        dest.complete();
                    }
                });
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$observable$2f$innerFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["innerFrom"])(source).subscribe(connection);
            }
        })(wrapperSource);
    };
}
function handleReset(reset, on) {
    var args = [];
    for(var _i = 2; _i < arguments.length; _i++){
        args[_i - 2] = arguments[_i];
    }
    if (on === true) {
        reset();
        return;
    }
    if (on === false) {
        return;
    }
    var onSubscriber = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$Subscriber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeSubscriber"]({
        next: function() {
            onSubscriber.unsubscribe();
            reset();
        }
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$observable$2f$innerFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["innerFrom"])(on.apply(void 0, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__spreadArray"])([], (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__read"])(args)))).subscribe(onSubscriber);
} //# sourceMappingURL=share.js.map
}),
"[project]/frontend/node_modules/rxjs/dist/esm5/internal/operators/shareReplay.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "shareReplay",
    ()=>shareReplay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$ReplaySubject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/ReplaySubject.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$share$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/operators/share.js [app-client] (ecmascript)");
;
;
function shareReplay(configOrBufferSize, windowTime, scheduler) {
    var _a, _b, _c;
    var bufferSize;
    var refCount = false;
    if (configOrBufferSize && typeof configOrBufferSize === 'object') {
        _a = configOrBufferSize.bufferSize, bufferSize = _a === void 0 ? Infinity : _a, _b = configOrBufferSize.windowTime, windowTime = _b === void 0 ? Infinity : _b, _c = configOrBufferSize.refCount, refCount = _c === void 0 ? false : _c, scheduler = configOrBufferSize.scheduler;
    } else {
        bufferSize = configOrBufferSize !== null && configOrBufferSize !== void 0 ? configOrBufferSize : Infinity;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$share$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["share"])({
        connector: function() {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$ReplaySubject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReplaySubject"](bufferSize, windowTime, scheduler);
        },
        resetOnError: true,
        resetOnComplete: false,
        resetOnRefCountZero: refCount
    });
} //# sourceMappingURL=shareReplay.js.map
}),
"[project]/frontend/node_modules/rxjs/dist/esm5/internal/operators/catchError.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "catchError",
    ()=>catchError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$observable$2f$innerFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$OperatorSubscriber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$lift$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/lift.js [app-client] (ecmascript)");
;
;
;
function catchError(selector) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$lift$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["operate"])(function(source, subscriber) {
        var innerSub = null;
        var syncUnsub = false;
        var handledResult;
        innerSub = source.subscribe((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$OperatorSubscriber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createOperatorSubscriber"])(subscriber, undefined, undefined, function(err) {
            handledResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$observable$2f$innerFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["innerFrom"])(selector(err, catchError(selector)(source)));
            if (innerSub) {
                innerSub.unsubscribe();
                innerSub = null;
                handledResult.subscribe(subscriber);
            } else {
                syncUnsub = true;
            }
        }));
        if (syncUnsub) {
            innerSub.unsubscribe();
            innerSub = null;
            handledResult.subscribe(subscriber);
        }
    });
} //# sourceMappingURL=catchError.js.map
}),
"[project]/frontend/node_modules/rxjs/dist/esm5/internal/operators/mergeAll.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mergeAll",
    ()=>mergeAll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$mergeMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$identity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/identity.js [app-client] (ecmascript)");
;
;
function mergeAll(concurrent) {
    if (concurrent === void 0) {
        concurrent = Infinity;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$mergeMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeMap"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$identity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identity"], concurrent);
} //# sourceMappingURL=mergeAll.js.map
}),
"[project]/frontend/node_modules/rxjs/dist/esm5/internal/operators/concatAll.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "concatAll",
    ()=>concatAll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$mergeAll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/operators/mergeAll.js [app-client] (ecmascript)");
;
function concatAll() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$mergeAll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeAll"])(1);
} //# sourceMappingURL=concatAll.js.map
}),
"[project]/frontend/node_modules/rxjs/dist/esm5/internal/observable/concat.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "concat",
    ()=>concat
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$concatAll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/operators/concatAll.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$args$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/args.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$observable$2f$from$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/observable/from.js [app-client] (ecmascript)");
;
;
;
function concat() {
    var args = [];
    for(var _i = 0; _i < arguments.length; _i++){
        args[_i] = arguments[_i];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$concatAll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["concatAll"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$observable$2f$from$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["from"])(args, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$args$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["popScheduler"])(args)));
} //# sourceMappingURL=concat.js.map
}),
"[project]/frontend/node_modules/rxjs/dist/esm5/internal/observable/throwError.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "throwError",
    ()=>throwError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$Observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/Observable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$isFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/isFunction.js [app-client] (ecmascript)");
;
;
function throwError(errorOrErrorFactory, scheduler) {
    var errorFactory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$isFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(errorOrErrorFactory) ? errorOrErrorFactory : function() {
        return errorOrErrorFactory;
    };
    var init = function(subscriber) {
        return subscriber.error(errorFactory());
    };
    return new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$Observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"](scheduler ? function(subscriber) {
        return scheduler.schedule(init, 0, subscriber);
    } : init);
} //# sourceMappingURL=throwError.js.map
}),
"[project]/frontend/node_modules/rxjs/dist/esm5/internal/scheduler/Action.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Action",
    ()=>Action
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$Subscription$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/Subscription.js [app-client] (ecmascript)");
;
;
var Action = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(Action, _super);
    function Action(scheduler, work) {
        return _super.call(this) || this;
    }
    Action.prototype.schedule = function(state, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        return this;
    };
    return Action;
}(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$Subscription$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Subscription"]);
;
 //# sourceMappingURL=Action.js.map
}),
"[project]/frontend/node_modules/rxjs/dist/esm5/internal/scheduler/intervalProvider.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "intervalProvider",
    ()=>intervalProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript)");
;
var intervalProvider = {
    setInterval: function(handler, timeout) {
        var args = [];
        for(var _i = 2; _i < arguments.length; _i++){
            args[_i - 2] = arguments[_i];
        }
        var delegate = intervalProvider.delegate;
        if (delegate === null || delegate === void 0 ? void 0 : delegate.setInterval) {
            return delegate.setInterval.apply(delegate, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__spreadArray"])([
                handler,
                timeout
            ], (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__read"])(args)));
        }
        return setInterval.apply(void 0, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__spreadArray"])([
            handler,
            timeout
        ], (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__read"])(args)));
    },
    clearInterval: function(handle) {
        var delegate = intervalProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearInterval) || clearInterval)(handle);
    },
    delegate: undefined
}; //# sourceMappingURL=intervalProvider.js.map
}),
"[project]/frontend/node_modules/rxjs/dist/esm5/internal/scheduler/AsyncAction.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AsyncAction",
    ()=>AsyncAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$scheduler$2f$Action$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/scheduler/Action.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$scheduler$2f$intervalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/scheduler/intervalProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$arrRemove$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/arrRemove.js [app-client] (ecmascript)");
;
;
;
;
var AsyncAction = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(AsyncAction, _super);
    function AsyncAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        _this.pending = false;
        return _this;
    }
    AsyncAction.prototype.schedule = function(state, delay) {
        var _a;
        if (delay === void 0) {
            delay = 0;
        }
        if (this.closed) {
            return this;
        }
        this.state = state;
        var id = this.id;
        var scheduler = this.scheduler;
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, delay);
        }
        this.pending = true;
        this.delay = delay;
        this.id = (_a = this.id) !== null && _a !== void 0 ? _a : this.requestAsyncId(scheduler, this.id, delay);
        return this;
    };
    AsyncAction.prototype.requestAsyncId = function(scheduler, _id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$scheduler$2f$intervalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["intervalProvider"].setInterval(scheduler.flush.bind(scheduler, this), delay);
    };
    AsyncAction.prototype.recycleAsyncId = function(_scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if (delay != null && this.delay === delay && this.pending === false) {
            return id;
        }
        if (id != null) {
            __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$scheduler$2f$intervalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["intervalProvider"].clearInterval(id);
        }
        return undefined;
    };
    AsyncAction.prototype.execute = function(state, delay) {
        if (this.closed) {
            return new Error('executing a cancelled action');
        }
        this.pending = false;
        var error = this._execute(state, delay);
        if (error) {
            return error;
        } else if (this.pending === false && this.id != null) {
            this.id = this.recycleAsyncId(this.scheduler, this.id, null);
        }
    };
    AsyncAction.prototype._execute = function(state, _delay) {
        var errored = false;
        var errorValue;
        try {
            this.work(state);
        } catch (e) {
            errored = true;
            errorValue = e ? e : new Error('Scheduled action threw falsy error');
        }
        if (errored) {
            this.unsubscribe();
            return errorValue;
        }
    };
    AsyncAction.prototype.unsubscribe = function() {
        if (!this.closed) {
            var _a = this, id = _a.id, scheduler = _a.scheduler;
            var actions = scheduler.actions;
            this.work = this.state = this.scheduler = null;
            this.pending = false;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$arrRemove$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["arrRemove"])(actions, this);
            if (id != null) {
                this.id = this.recycleAsyncId(scheduler, id, null);
            }
            this.delay = null;
            _super.prototype.unsubscribe.call(this);
        }
    };
    return AsyncAction;
}(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$scheduler$2f$Action$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Action"]);
;
 //# sourceMappingURL=AsyncAction.js.map
}),
"[project]/frontend/node_modules/rxjs/dist/esm5/internal/Scheduler.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Scheduler",
    ()=>Scheduler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$scheduler$2f$dateTimestampProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/scheduler/dateTimestampProvider.js [app-client] (ecmascript)");
;
var Scheduler = function() {
    function Scheduler(schedulerActionCtor, now) {
        if (now === void 0) {
            now = Scheduler.now;
        }
        this.schedulerActionCtor = schedulerActionCtor;
        this.now = now;
    }
    Scheduler.prototype.schedule = function(work, delay, state) {
        if (delay === void 0) {
            delay = 0;
        }
        return new this.schedulerActionCtor(this, work).schedule(state, delay);
    };
    Scheduler.now = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$scheduler$2f$dateTimestampProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dateTimestampProvider"].now;
    return Scheduler;
}();
;
 //# sourceMappingURL=Scheduler.js.map
}),
"[project]/frontend/node_modules/rxjs/dist/esm5/internal/scheduler/AsyncScheduler.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AsyncScheduler",
    ()=>AsyncScheduler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$Scheduler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/Scheduler.js [app-client] (ecmascript)");
;
;
var AsyncScheduler = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(AsyncScheduler, _super);
    function AsyncScheduler(SchedulerAction, now) {
        if (now === void 0) {
            now = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$Scheduler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scheduler"].now;
        }
        var _this = _super.call(this, SchedulerAction, now) || this;
        _this.actions = [];
        _this._active = false;
        return _this;
    }
    AsyncScheduler.prototype.flush = function(action) {
        var actions = this.actions;
        if (this._active) {
            actions.push(action);
            return;
        }
        var error;
        this._active = true;
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        }while (action = actions.shift())
        this._active = false;
        if (error) {
            while(action = actions.shift()){
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AsyncScheduler;
}(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$Scheduler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scheduler"]);
;
 //# sourceMappingURL=AsyncScheduler.js.map
}),
"[project]/frontend/node_modules/rxjs/dist/esm5/internal/scheduler/async.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "async",
    ()=>async,
    "asyncScheduler",
    ()=>asyncScheduler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$scheduler$2f$AsyncAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/scheduler/AsyncAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$scheduler$2f$AsyncScheduler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/scheduler/AsyncScheduler.js [app-client] (ecmascript)");
;
;
var asyncScheduler = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$scheduler$2f$AsyncScheduler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AsyncScheduler"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$scheduler$2f$AsyncAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AsyncAction"]);
var async = asyncScheduler; //# sourceMappingURL=async.js.map
}),
"[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/isDate.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isValidDate",
    ()=>isValidDate
]);
function isValidDate(value) {
    return value instanceof Date && !isNaN(value);
} //# sourceMappingURL=isDate.js.map
}),
"[project]/frontend/node_modules/rxjs/dist/esm5/internal/observable/timer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "timer",
    ()=>timer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$Observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/Observable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$scheduler$2f$async$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/scheduler/async.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$isScheduler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/isScheduler.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$isDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/isDate.js [app-client] (ecmascript)");
;
;
;
;
function timer(dueTime, intervalOrScheduler, scheduler) {
    if (dueTime === void 0) {
        dueTime = 0;
    }
    if (scheduler === void 0) {
        scheduler = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$scheduler$2f$async$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["async"];
    }
    var intervalDuration = -1;
    if (intervalOrScheduler != null) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$isScheduler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isScheduler"])(intervalOrScheduler)) {
            scheduler = intervalOrScheduler;
        } else {
            intervalDuration = intervalOrScheduler;
        }
    }
    return new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$Observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"](function(subscriber) {
        var due = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$isDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidDate"])(dueTime) ? +dueTime - scheduler.now() : dueTime;
        if (due < 0) {
            due = 0;
        }
        var n = 0;
        return scheduler.schedule(function() {
            if (!subscriber.closed) {
                subscriber.next(n++);
                if (0 <= intervalDuration) {
                    this.schedule(undefined, intervalDuration);
                } else {
                    subscriber.complete();
                }
            }
        }, due);
    });
} //# sourceMappingURL=timer.js.map
}),
"[project]/frontend/node_modules/rxjs/dist/esm5/internal/operators/tap.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "tap",
    ()=>tap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$isFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/isFunction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$lift$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/lift.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$OperatorSubscriber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$identity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/identity.js [app-client] (ecmascript)");
;
;
;
;
function tap(observerOrNext, error, complete) {
    var tapObserver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$isFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(observerOrNext) || error || complete ? {
        next: observerOrNext,
        error: error,
        complete: complete
    } : observerOrNext;
    return tapObserver ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$lift$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["operate"])(function(source, subscriber) {
        var _a;
        (_a = tapObserver.subscribe) === null || _a === void 0 ? void 0 : _a.call(tapObserver);
        var isUnsub = true;
        source.subscribe((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$OperatorSubscriber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createOperatorSubscriber"])(subscriber, function(value) {
            var _a;
            (_a = tapObserver.next) === null || _a === void 0 ? void 0 : _a.call(tapObserver, value);
            subscriber.next(value);
        }, function() {
            var _a;
            isUnsub = false;
            (_a = tapObserver.complete) === null || _a === void 0 ? void 0 : _a.call(tapObserver);
            subscriber.complete();
        }, function(err) {
            var _a;
            isUnsub = false;
            (_a = tapObserver.error) === null || _a === void 0 ? void 0 : _a.call(tapObserver, err);
            subscriber.error(err);
        }, function() {
            var _a, _b;
            if (isUnsub) {
                (_a = tapObserver.unsubscribe) === null || _a === void 0 ? void 0 : _a.call(tapObserver);
            }
            (_b = tapObserver.finalize) === null || _b === void 0 ? void 0 : _b.call(tapObserver);
        }));
    }) : __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$identity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identity"];
} //# sourceMappingURL=tap.js.map
}),
"[project]/frontend/node_modules/rxjs/dist/esm5/internal/operators/finalize.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "finalize",
    ()=>finalize
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$lift$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/lift.js [app-client] (ecmascript)");
;
function finalize(callback) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$lift$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["operate"])(function(source, subscriber) {
        try {
            source.subscribe(subscriber);
        } finally{
            subscriber.add(callback);
        }
    });
} //# sourceMappingURL=finalize.js.map
}),
"[project]/frontend/node_modules/rxjs/dist/esm5/internal/observable/empty.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EMPTY",
    ()=>EMPTY,
    "empty",
    ()=>empty
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$Observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/Observable.js [app-client] (ecmascript)");
;
var EMPTY = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$Observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"](function(subscriber) {
    return subscriber.complete();
});
function empty(scheduler) {
    return scheduler ? emptyScheduled(scheduler) : EMPTY;
}
function emptyScheduled(scheduler) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$Observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"](function(subscriber) {
        return scheduler.schedule(function() {
            return subscriber.complete();
        });
    });
} //# sourceMappingURL=empty.js.map
}),
"[project]/frontend/node_modules/rxjs/dist/esm5/internal/observable/merge.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "merge",
    ()=>merge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$mergeAll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/operators/mergeAll.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$observable$2f$innerFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$observable$2f$empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/observable/empty.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$args$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/args.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$observable$2f$from$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/observable/from.js [app-client] (ecmascript)");
;
;
;
;
;
function merge() {
    var args = [];
    for(var _i = 0; _i < arguments.length; _i++){
        args[_i] = arguments[_i];
    }
    var scheduler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$args$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["popScheduler"])(args);
    var concurrent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$args$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["popNumber"])(args, Infinity);
    var sources = args;
    return !sources.length ? __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$observable$2f$empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EMPTY"] : sources.length === 1 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$observable$2f$innerFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["innerFrom"])(sources[0]) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$mergeAll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeAll"])(concurrent)((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$observable$2f$from$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["from"])(sources, scheduler));
} //# sourceMappingURL=merge.js.map
}),
"[project]/frontend/node_modules/rxjs/dist/esm5/internal/firstValueFrom.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "firstValueFrom",
    ()=>firstValueFrom
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$EmptyError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/EmptyError.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$Subscriber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/Subscriber.js [app-client] (ecmascript)");
;
;
function firstValueFrom(source, config) {
    var hasConfig = typeof config === 'object';
    return new Promise(function(resolve, reject) {
        var subscriber = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$Subscriber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeSubscriber"]({
            next: function(value) {
                resolve(value);
                subscriber.unsubscribe();
            },
            error: reject,
            complete: function() {
                if (hasConfig) {
                    resolve(config.defaultValue);
                } else {
                    reject(new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$EmptyError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmptyError"]());
                }
            }
        });
        source.subscribe(subscriber);
    });
} //# sourceMappingURL=firstValueFrom.js.map
}),
"[project]/frontend/node_modules/@sanity/client/dist/_chunks-es/stegaClean.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "C",
    ()=>C,
    "isRecord",
    ()=>isRecord,
    "stegaClean",
    ()=>stegaClean,
    "vercelStegaCleanAll",
    ()=>vercelStegaCleanAll
]);
function isRecord(value) {
    return typeof value == "object" && value !== null && !Array.isArray(value);
}
var s = {
    0: 8203,
    1: 8204,
    2: 8205,
    3: 8290,
    4: 8291,
    5: 8288,
    6: 65279,
    7: 8289,
    8: 119155,
    9: 119156,
    a: 119157,
    b: 119158,
    c: 119159,
    d: 119160,
    e: 119161,
    f: 119162
}, c = {
    0: 8203,
    1: 8204,
    2: 8205,
    3: 65279
}, u = new Array(4).fill(String.fromCodePoint(c[0])).join("");
function E(t) {
    let e = JSON.stringify(t);
    return "".concat(u).concat(Array.from(e).map((r)=>{
        let n = r.charCodeAt(0);
        if (n > 255) throw new Error("Only ASCII edit info can be encoded. Error attempting to encode ".concat(e, " on character ").concat(r, " (").concat(n, ")"));
        return Array.from(n.toString(4).padStart(4, "0")).map((o)=>String.fromCodePoint(c[o])).join("");
    }).join(""));
}
function I(t) {
    return !Number.isNaN(Number(t)) || /[a-z]/i.test(t) && !/\d+(?:[-:\/]\d+){2}(?:T\d+(?:[-:\/]\d+){1,2}(\.\d+)?Z?)?/.test(t) ? !1 : !!Date.parse(t);
}
function T(t) {
    try {
        new URL(t, t.startsWith("/") ? "https://acme.com" : void 0);
    } catch (e) {
        return !1;
    }
    return !0;
}
function C(t, e) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "auto";
    return r === !0 || r === "auto" && (I(t) || T(t)) ? t : "".concat(t).concat(E(e));
}
Object.fromEntries(Object.entries(c).map((t)=>t.reverse()));
Object.fromEntries(Object.entries(s).map((t)=>t.reverse()));
var S = "".concat(Object.values(s).map((t)=>"\\u{".concat(t.toString(16), "}")).join("")), f = new RegExp("[".concat(S, "]{4,}"), "gu");
function _(t) {
    var e;
    return {
        cleaned: t.replace(f, ""),
        encoded: ((e = t.match(f)) == null ? void 0 : e[0]) || ""
    };
}
function O(t) {
    return t && JSON.parse(_(JSON.stringify(t)).cleaned);
}
function stegaClean(result) {
    return O(result);
}
const vercelStegaCleanAll = stegaClean;
;
 //# sourceMappingURL=stegaClean.js.map
}),
"[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/argsArgArrayOrObject.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "argsArgArrayOrObject",
    ()=>argsArgArrayOrObject
]);
var isArray = Array.isArray;
var getPrototypeOf = Object.getPrototypeOf, objectProto = Object.prototype, getKeys = Object.keys;
function argsArgArrayOrObject(args) {
    if (args.length === 1) {
        var first_1 = args[0];
        if (isArray(first_1)) {
            return {
                args: first_1,
                keys: null
            };
        }
        if (isPOJO(first_1)) {
            var keys = getKeys(first_1);
            return {
                args: keys.map(function(key) {
                    return first_1[key];
                }),
                keys: keys
            };
        }
    }
    return {
        args: args,
        keys: null
    };
}
function isPOJO(obj) {
    return obj && typeof obj === 'object' && getPrototypeOf(obj) === objectProto;
} //# sourceMappingURL=argsArgArrayOrObject.js.map
}),
"[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/mapOneOrManyArgs.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mapOneOrManyArgs",
    ()=>mapOneOrManyArgs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/operators/map.js [app-client] (ecmascript)");
;
;
var isArray = Array.isArray;
function callOrApply(fn, args) {
    return isArray(args) ? fn.apply(void 0, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__spreadArray"])([], (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__read"])(args))) : fn(args);
}
function mapOneOrManyArgs(fn) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["map"])(function(args) {
        return callOrApply(fn, args);
    });
} //# sourceMappingURL=mapOneOrManyArgs.js.map
}),
"[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/createObject.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createObject",
    ()=>createObject
]);
function createObject(keys, values) {
    return keys.reduce(function(result, key, i) {
        return result[key] = values[i], result;
    }, {});
} //# sourceMappingURL=createObject.js.map
}),
"[project]/frontend/node_modules/rxjs/dist/esm5/internal/observable/combineLatest.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "combineLatest",
    ()=>combineLatest,
    "combineLatestInit",
    ()=>combineLatestInit
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$Observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/Observable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$argsArgArrayOrObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/argsArgArrayOrObject.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$observable$2f$from$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/observable/from.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$identity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/identity.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$mapOneOrManyArgs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/mapOneOrManyArgs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$args$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/args.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$createObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/createObject.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$OperatorSubscriber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$executeSchedule$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/executeSchedule.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
function combineLatest() {
    var args = [];
    for(var _i = 0; _i < arguments.length; _i++){
        args[_i] = arguments[_i];
    }
    var scheduler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$args$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["popScheduler"])(args);
    var resultSelector = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$args$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["popResultSelector"])(args);
    var _a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$argsArgArrayOrObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["argsArgArrayOrObject"])(args), observables = _a.args, keys = _a.keys;
    if (observables.length === 0) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$observable$2f$from$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["from"])([], scheduler);
    }
    var result = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$Observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"](combineLatestInit(observables, scheduler, keys ? function(values) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$createObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createObject"])(keys, values);
    } : __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$identity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identity"]));
    return resultSelector ? result.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$mapOneOrManyArgs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapOneOrManyArgs"])(resultSelector)) : result;
}
function combineLatestInit(observables, scheduler, valueTransform) {
    if (valueTransform === void 0) {
        valueTransform = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$identity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identity"];
    }
    return function(subscriber) {
        maybeSchedule(scheduler, function() {
            var length = observables.length;
            var values = new Array(length);
            var active = length;
            var remainingFirstValues = length;
            var _loop_1 = function(i) {
                maybeSchedule(scheduler, function() {
                    var source = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$observable$2f$from$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["from"])(observables[i], scheduler);
                    var hasFirstValue = false;
                    source.subscribe((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$OperatorSubscriber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createOperatorSubscriber"])(subscriber, function(value) {
                        values[i] = value;
                        if (!hasFirstValue) {
                            hasFirstValue = true;
                            remainingFirstValues--;
                        }
                        if (!remainingFirstValues) {
                            subscriber.next(valueTransform(values.slice()));
                        }
                    }, function() {
                        if (!--active) {
                            subscriber.complete();
                        }
                    }));
                }, subscriber);
            };
            for(var i = 0; i < length; i++){
                _loop_1(i);
            }
        }, subscriber);
    };
}
function maybeSchedule(scheduler, execute, subscription) {
    if (scheduler) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$executeSchedule$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["executeSchedule"])(subscription, scheduler, execute);
    } else {
        execute();
    }
} //# sourceMappingURL=combineLatest.js.map
}),
"[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/argsOrArgArray.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "argsOrArgArray",
    ()=>argsOrArgArray
]);
var isArray = Array.isArray;
function argsOrArgArray(args) {
    return args.length === 1 && isArray(args[0]) ? args[0] : args;
} //# sourceMappingURL=argsOrArgArray.js.map
}),
"[project]/frontend/node_modules/rxjs/dist/esm5/internal/operators/combineLatest.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "combineLatest",
    ()=>combineLatest
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$observable$2f$combineLatest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/observable/combineLatest.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$lift$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/lift.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$argsOrArgArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/argsOrArgArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$mapOneOrManyArgs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/mapOneOrManyArgs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$pipe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/pipe.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$args$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/args.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
function combineLatest() {
    var args = [];
    for(var _i = 0; _i < arguments.length; _i++){
        args[_i] = arguments[_i];
    }
    var resultSelector = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$args$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["popResultSelector"])(args);
    return resultSelector ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$pipe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(combineLatest.apply(void 0, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__spreadArray"])([], (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__read"])(args))), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$mapOneOrManyArgs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapOneOrManyArgs"])(resultSelector)) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$lift$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["operate"])(function(source, subscriber) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$observable$2f$combineLatest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineLatestInit"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__spreadArray"])([
            source
        ], (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__read"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$argsOrArgArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["argsOrArgArray"])(args))))(subscriber);
    });
} //# sourceMappingURL=combineLatest.js.map
}),
"[project]/frontend/node_modules/rxjs/dist/esm5/internal/operators/combineLatestWith.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "combineLatestWith",
    ()=>combineLatestWith
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$combineLatest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/operators/combineLatest.js [app-client] (ecmascript)");
;
;
function combineLatestWith() {
    var otherSources = [];
    for(var _i = 0; _i < arguments.length; _i++){
        otherSources[_i] = arguments[_i];
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$combineLatest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineLatest"].apply(void 0, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__spreadArray"])([], (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__read"])(otherSources)));
} //# sourceMappingURL=combineLatestWith.js.map
}),
"[project]/frontend/node_modules/rxjs/dist/esm5/internal/operators/filter.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "filter",
    ()=>filter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$lift$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/lift.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$OperatorSubscriber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js [app-client] (ecmascript)");
;
;
function filter(predicate, thisArg) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$lift$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["operate"])(function(source, subscriber) {
        var index = 0;
        source.subscribe((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$OperatorSubscriber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createOperatorSubscriber"])(subscriber, function(value) {
            return predicate.call(thisArg, value, index++) && subscriber.next(value);
        }));
    });
} //# sourceMappingURL=filter.js.map
}),
"[project]/frontend/node_modules/@sanity/client/dist/_chunks-es/isRecord.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isRecord",
    ()=>isRecord
]);
function isRecord(value) {
    return typeof value == "object" && value !== null && !Array.isArray(value);
}
;
 //# sourceMappingURL=isRecord.js.map
}),
"[project]/frontend/node_modules/@sanity/client/dist/_chunks-es/resolveEditInfo.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DRAFTS_FOLDER",
    ()=>DRAFTS_FOLDER,
    "VERSION_FOLDER",
    ()=>VERSION_FOLDER,
    "createEditUrl",
    ()=>createEditUrl,
    "get",
    ()=>get,
    "getDraftId",
    ()=>getDraftId,
    "getPublishedId",
    ()=>getPublishedId,
    "getVersionFromId",
    ()=>getVersionFromId,
    "getVersionId",
    ()=>getVersionId,
    "isDraftId",
    ()=>isDraftId,
    "isPublishedId",
    ()=>isPublishedId,
    "isVersionId",
    ()=>isVersionId,
    "jsonPath",
    ()=>jsonPath,
    "jsonPathToStudioPath",
    ()=>jsonPathToStudioPath,
    "parseJsonPath",
    ()=>parseJsonPath,
    "reKeySegment",
    ()=>reKeySegment,
    "resolveEditInfo",
    ()=>resolveEditInfo,
    "resolveMapping",
    ()=>resolveMapping,
    "resolveStudioBaseRoute",
    ()=>resolveStudioBaseRoute,
    "studioPath",
    ()=>studioPath,
    "studioPathToJsonPath",
    ()=>studioPathToJsonPath,
    "toString",
    ()=>toString,
    "walkMap",
    ()=>walkMap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$_chunks$2d$es$2f$isRecord$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@sanity/client/dist/_chunks-es/isRecord.js [app-client] (ecmascript)");
;
const rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, reKeySegment = /_key\s*==\s*['"](.*)['"]/, reIndexTuple = /^\d*:\d*$/;
function isIndexSegment(segment) {
    return typeof segment == "number" || typeof segment == "string" && /^\[\d+\]$/.test(segment);
}
function isKeySegment(segment) {
    return typeof segment == "string" ? reKeySegment.test(segment.trim()) : typeof segment == "object" && "_key" in segment;
}
function isIndexTuple(segment) {
    if (typeof segment == "string" && reIndexTuple.test(segment)) return !0;
    if (!Array.isArray(segment) || segment.length !== 2) return !1;
    const [from, to] = segment;
    return (typeof from == "number" || from === "") && (typeof to == "number" || to === "");
}
function get(obj, path, defaultVal) {
    const select = typeof path == "string" ? fromString(path) : path;
    if (!Array.isArray(select)) throw new Error("Path must be an array or a string");
    let acc = obj;
    for(let i = 0; i < select.length; i++){
        const segment = select[i];
        if (isIndexSegment(segment)) {
            if (!Array.isArray(acc)) return defaultVal;
            acc = acc[segment];
        }
        if (isKeySegment(segment)) {
            if (!Array.isArray(acc)) return defaultVal;
            acc = acc.find((item)=>item._key === segment._key);
        }
        if (typeof segment == "string" && (acc = typeof acc == "object" && acc !== null ? acc[segment] : void 0), typeof acc > "u") return defaultVal;
    }
    return acc;
}
function toString(path) {
    if (!Array.isArray(path)) throw new Error("Path is not an array");
    return path.reduce((target, segment, i)=>{
        const segmentType = typeof segment;
        if (segmentType === "number") return "".concat(target, "[").concat(segment, "]");
        if (segmentType === "string") return "".concat(target).concat(i === 0 ? "" : ".").concat(segment);
        if (isKeySegment(segment) && segment._key) return "".concat(target, '[_key=="').concat(segment._key, '"]');
        if (Array.isArray(segment)) {
            const [from, to] = segment;
            return "".concat(target, "[").concat(from, ":").concat(to, "]");
        }
        throw new Error("Unsupported path segment `".concat(JSON.stringify(segment), "`"));
    }, "");
}
function fromString(path) {
    if (typeof path != "string") throw new Error("Path is not a string");
    const segments = path.match(rePropName);
    if (!segments) throw new Error("Invalid path string");
    return segments.map(parsePathSegment);
}
function parsePathSegment(segment) {
    return isIndexSegment(segment) ? parseIndexSegment(segment) : isKeySegment(segment) ? parseKeySegment(segment) : isIndexTuple(segment) ? parseIndexTupleSegment(segment) : segment;
}
function parseIndexSegment(segment) {
    return Number(segment.replace(/[^\d]/g, ""));
}
function parseKeySegment(segment) {
    return {
        _key: segment.match(reKeySegment)[1]
    };
}
function parseIndexTupleSegment(segment) {
    const [from, to] = segment.split(":").map((seg)=>seg === "" ? seg : Number(seg));
    return [
        from,
        to
    ];
}
var studioPath = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    fromString,
    get,
    isIndexSegment,
    isIndexTuple,
    isKeySegment,
    reKeySegment,
    toString
});
const DRAFTS_FOLDER = "drafts", VERSION_FOLDER = "versions", PATH_SEPARATOR = ".", DRAFTS_PREFIX = "".concat(DRAFTS_FOLDER).concat(PATH_SEPARATOR), VERSION_PREFIX = "".concat(VERSION_FOLDER).concat(PATH_SEPARATOR);
function isDraftId(id) {
    return id.startsWith(DRAFTS_PREFIX);
}
function isVersionId(id) {
    return id.startsWith(VERSION_PREFIX);
}
function isPublishedId(id) {
    return !isDraftId(id) && !isVersionId(id);
}
function getDraftId(id) {
    if (isVersionId(id)) {
        const publishedId = getPublishedId(id);
        return DRAFTS_PREFIX + publishedId;
    }
    return isDraftId(id) ? id : DRAFTS_PREFIX + id;
}
function getVersionId(id, version) {
    if (version === "drafts" || version === "published") throw new Error('Version can not be "published" or "drafts"');
    return "".concat(VERSION_PREFIX).concat(version).concat(PATH_SEPARATOR).concat(getPublishedId(id));
}
function getVersionFromId(id) {
    if (!isVersionId(id)) return;
    const [_versionPrefix, versionId, ..._publishedId] = id.split(PATH_SEPARATOR);
    return versionId;
}
function getPublishedId(id) {
    return isVersionId(id) ? id.split(PATH_SEPARATOR).slice(2).join(PATH_SEPARATOR) : isDraftId(id) ? id.slice(DRAFTS_PREFIX.length) : id;
}
const ESCAPE = {
    "\f": "\\f",
    "\n": "\\n",
    "\r": "\\r",
    "	": "\\t",
    "'": "\\'",
    "\\": "\\\\"
}, UNESCAPE = {
    "\\f": "\f",
    "\\n": "\n",
    "\\r": "\r",
    "\\t": "	",
    "\\'": "'",
    "\\\\": "\\"
};
function jsonPath(path) {
    return "$".concat(path.map((segment)=>typeof segment == "string" ? "['".concat(segment.replace(/[\f\n\r\t'\\]/g, (match)=>ESCAPE[match]), "']") : typeof segment == "number" ? "[".concat(segment, "]") : segment._key !== "" ? "[?(@._key=='".concat(segment._key.replace(/['\\]/g, (match)=>ESCAPE[match]), "')]") : "[".concat(segment._index, "]")).join(""));
}
function parseJsonPath(path) {
    const parsed = [], parseRe = /\['(.*?)'\]|\[(\d+)\]|\[\?\(@\._key=='(.*?)'\)\]/g;
    let match;
    for(; (match = parseRe.exec(path)) !== null;){
        if (match[1] !== void 0) {
            const key = match[1].replace(/\\(\\|f|n|r|t|')/g, (m)=>UNESCAPE[m]);
            parsed.push(key);
            continue;
        }
        if (match[2] !== void 0) {
            parsed.push(parseInt(match[2], 10));
            continue;
        }
        if (match[3] !== void 0) {
            const _key = match[3].replace(/\\(\\')/g, (m)=>UNESCAPE[m]);
            parsed.push({
                _key,
                _index: -1
            });
            continue;
        }
    }
    return parsed;
}
function jsonPathToStudioPath(path) {
    return path.map((segment)=>{
        if (typeof segment == "string" || typeof segment == "number") return segment;
        if (segment._key !== "") return {
            _key: segment._key
        };
        if (segment._index !== -1) return segment._index;
        throw new Error("invalid segment:".concat(JSON.stringify(segment)));
    });
}
function studioPathToJsonPath(path) {
    return (typeof path == "string" ? fromString(path) : path).map((segment)=>{
        if (typeof segment == "string" || typeof segment == "number") return segment;
        if (Array.isArray(segment)) throw new Error("IndexTuple segments aren't supported:".concat(JSON.stringify(segment)));
        if (isContentSourceMapParsedPathKeyedSegment(segment)) return segment;
        if (segment._key) return {
            _key: segment._key,
            _index: -1
        };
        throw new Error("invalid segment:".concat(JSON.stringify(segment)));
    });
}
function isContentSourceMapParsedPathKeyedSegment(segment) {
    return typeof segment == "object" && "_key" in segment && "_index" in segment;
}
function jsonPathToMappingPath(path) {
    return path.map((segment)=>{
        if (typeof segment == "string" || typeof segment == "number") return segment;
        if (segment._index !== -1) return segment._index;
        throw new Error("invalid segment:".concat(JSON.stringify(segment)));
    });
}
function resolveMapping(resultPath, csm) {
    if (!(csm === null || csm === void 0 ? void 0 : csm.mappings)) return;
    const resultMappingPath = jsonPath(jsonPathToMappingPath(resultPath));
    if (csm.mappings[resultMappingPath] !== void 0) return {
        mapping: csm.mappings[resultMappingPath],
        matchedPath: resultMappingPath,
        pathSuffix: ""
    };
    const mappings = Object.entries(csm.mappings).filter((param)=>{
        let [key] = param;
        return resultMappingPath.startsWith(key);
    }).sort((param, param1)=>{
        let [key1] = param, [key2] = param1;
        return key2.length - key1.length;
    });
    if (mappings.length == 0) return;
    const [matchedPath, mapping] = mappings[0], pathSuffix = resultMappingPath.substring(matchedPath.length);
    return {
        mapping,
        matchedPath,
        pathSuffix
    };
}
function isArray(value) {
    return value !== null && Array.isArray(value);
}
function walkMap(value, mappingFn) {
    let path = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    if (isArray(value)) return value.map((v, idx)=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$_chunks$2d$es$2f$isRecord$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRecord"])(v)) {
            const _key = v._key;
            if (typeof _key == "string") return walkMap(v, mappingFn, path.concat({
                _key,
                _index: idx
            }));
        }
        return walkMap(v, mappingFn, path.concat(idx));
    });
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$_chunks$2d$es$2f$isRecord$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRecord"])(value)) {
        if (value._type === "block" || value._type === "span") {
            const result = {
                ...value
            };
            return value._type === "block" ? result.children = walkMap(value.children, mappingFn, path.concat("children")) : value._type === "span" && (result.text = walkMap(value.text, mappingFn, path.concat("text"))), result;
        }
        return Object.fromEntries(Object.entries(value).map((param)=>{
            let [k, v] = param;
            return [
                k,
                walkMap(v, mappingFn, path.concat(k))
            ];
        }));
    }
    return mappingFn(value, path);
}
function createEditUrl(options) {
    const { baseUrl, workspace: _workspace = "default", tool: _tool = "default", id: _id, type, path, projectId, dataset } = options;
    if (!baseUrl) throw new Error("baseUrl is required");
    if (!path) throw new Error("path is required");
    if (!_id) throw new Error("id is required");
    if (baseUrl !== "/" && baseUrl.endsWith("/")) throw new Error("baseUrl must not end with a slash");
    const workspace = _workspace === "default" ? void 0 : _workspace, tool = _tool === "default" ? void 0 : _tool, id = getPublishedId(_id), stringifiedPath = Array.isArray(path) ? toString(jsonPathToStudioPath(path)) : path, searchParams = new URLSearchParams({
        baseUrl,
        id,
        type,
        path: stringifiedPath
    });
    if (workspace && searchParams.set("workspace", workspace), tool && searchParams.set("tool", tool), projectId && searchParams.set("projectId", projectId), dataset && searchParams.set("dataset", dataset), isPublishedId(_id)) searchParams.set("perspective", "published");
    else if (isVersionId(_id)) {
        const versionId = getVersionFromId(_id);
        searchParams.set("perspective", versionId);
    }
    const segments = [
        baseUrl === "/" ? "" : baseUrl
    ];
    workspace && segments.push(workspace);
    const routerParams = [
        "mode=presentation",
        "id=".concat(id),
        "type=".concat(type),
        "path=".concat(encodeURIComponent(stringifiedPath))
    ];
    return tool && routerParams.push("tool=".concat(tool)), segments.push("intent", "edit", "".concat(routerParams.join(";"), "?").concat(searchParams)), segments.join("/");
}
function resolveEditInfo(options) {
    const { resultSourceMap: csm, resultPath } = options, { mapping, pathSuffix } = resolveMapping(resultPath, csm) || {};
    if (!mapping || mapping.source.type === "literal" || mapping.source.type === "unknown") return;
    const sourceDoc = csm.documents[mapping.source.document], sourcePath = csm.paths[mapping.source.path];
    if (sourceDoc && sourcePath) {
        const { baseUrl, workspace, tool } = resolveStudioBaseRoute(typeof options.studioUrl == "function" ? options.studioUrl(sourceDoc) : options.studioUrl);
        if (!baseUrl) return;
        const { _id, _type, _projectId, _dataset } = sourceDoc;
        return {
            baseUrl,
            workspace,
            tool,
            id: _id,
            type: _type,
            path: parseJsonPath(sourcePath + pathSuffix),
            projectId: _projectId,
            dataset: _dataset
        };
    }
}
function resolveStudioBaseRoute(studioUrl) {
    let baseUrl = typeof studioUrl == "string" ? studioUrl : studioUrl.baseUrl;
    return baseUrl !== "/" && (baseUrl = baseUrl.replace(/\/$/, "")), typeof studioUrl == "string" ? {
        baseUrl
    } : {
        ...studioUrl,
        baseUrl
    };
}
;
 //# sourceMappingURL=resolveEditInfo.js.map
}),
"[project]/frontend/node_modules/nanoid/url-alphabet/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "urlAlphabet",
    ()=>urlAlphabet
]);
let urlAlphabet = 'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict';
;
}),
"[project]/frontend/node_modules/nanoid/index.browser.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "customAlphabet",
    ()=>customAlphabet,
    "customRandom",
    ()=>customRandom,
    "nanoid",
    ()=>nanoid,
    "random",
    ()=>random
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$nanoid$2f$url$2d$alphabet$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/nanoid/url-alphabet/index.js [app-client] (ecmascript)");
;
let random = (bytes)=>crypto.getRandomValues(new Uint8Array(bytes));
let customRandom = (alphabet, defaultSize, getRandom)=>{
    let mask = (2 << Math.log(alphabet.length - 1) / Math.LN2) - 1;
    let step = -~(1.6 * mask * defaultSize / alphabet.length);
    return function() {
        let size = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : defaultSize;
        let id = '';
        while(true){
            let bytes = getRandom(step);
            let j = step | 0;
            while(j--){
                id += alphabet[bytes[j] & mask] || '';
                if (id.length === size) return id;
            }
        }
    };
};
let customAlphabet = function(alphabet) {
    let size = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 21;
    return customRandom(alphabet, size, random);
};
let nanoid = function() {
    let size = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 21;
    return crypto.getRandomValues(new Uint8Array(size)).reduce((id, byte)=>{
        byte &= 63;
        if (byte < 36) {
            id += byte.toString(36);
        } else if (byte < 62) {
            id += (byte - 26).toString(36).toUpperCase();
        } else if (byte > 62) {
            id += '-';
        } else {
            id += '_';
        }
        return id;
    }, '');
};
;
}),
"[project]/frontend/node_modules/@sanity/client/dist/index.browser.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BasePatch",
    ()=>BasePatch,
    "BaseTransaction",
    ()=>BaseTransaction,
    "ChannelError",
    ()=>ChannelError,
    "ClientError",
    ()=>ClientError,
    "ConnectionFailedError",
    ()=>ConnectionFailedError,
    "CorsOriginError",
    ()=>CorsOriginError,
    "DisconnectError",
    ()=>DisconnectError,
    "EXPERIMENTAL_API_WARNING",
    ()=>EXPERIMENTAL_API_WARNING,
    "MessageError",
    ()=>MessageError,
    "MessageParseError",
    ()=>MessageParseError,
    "ObservablePatch",
    ()=>ObservablePatch,
    "ObservableSanityClient",
    ()=>ObservableSanityClient,
    "ObservableTransaction",
    ()=>ObservableTransaction,
    "Patch",
    ()=>Patch,
    "SanityClient",
    ()=>SanityClient,
    "ServerError",
    ()=>ServerError,
    "Transaction",
    ()=>Transaction,
    "connectEventSource",
    ()=>connectEventSource,
    "createClient",
    ()=>createClient,
    "default",
    ()=>deprecatedCreateClient,
    "formatQueryParseError",
    ()=>formatQueryParseError,
    "isHttpError",
    ()=>isHttpError,
    "isQueryParseError",
    ()=>isQueryParseError,
    "requester",
    ()=>requester,
    "validateApiPerspective",
    ()=>validateApiPerspective
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_class_private_field_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_class_private_field_init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_class_private_field_set.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$get$2d$it$2f$dist$2f$index$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/get-it/dist/index.browser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$get$2d$it$2f$dist$2f$middleware$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/get-it/dist/middleware.browser.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$Observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/Observable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$observable$2f$defer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/observable/defer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$observable$2f$of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/observable/of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$isObservable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/util/isObservable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$mergeMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$observable$2f$from$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/observable/from.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$lastValueFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/lastValueFrom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$shareReplay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/operators/shareReplay.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$catchError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/operators/catchError.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$observable$2f$concat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/observable/concat.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$observable$2f$throwError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/observable/throwError.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$observable$2f$timer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/observable/timer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$tap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/operators/tap.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$finalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/operators/finalize.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$share$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/operators/share.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$observable$2f$merge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/observable/merge.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$observable$2f$empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/observable/empty.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/operators/map.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$firstValueFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/firstValueFrom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$_chunks$2d$es$2f$stegaClean$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@sanity/client/dist/_chunks-es/stegaClean.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$combineLatestWith$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/operators/combineLatestWith.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$filter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/rxjs/dist/esm5/internal/operators/filter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$_chunks$2d$es$2f$resolveEditInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@sanity/client/dist/_chunks-es/resolveEditInfo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$nanoid$2f$index$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/nanoid/index.browser.js [app-client] (ecmascript) <locals>");
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
const NEWLINE = /\r\n|[\n\r\u2028\u2029]/;
function codeFrame(query, location2, message) {
    const lines = query.split(NEWLINE), loc = {
        start: columnToLine(location2.start, lines),
        end: location2.end ? columnToLine(location2.end, lines) : void 0
    }, { start, end, markerLines } = getMarkerLines(loc, lines), numberMaxWidth = "".concat(end).length;
    return query.split(NEWLINE, end).slice(start, end).map((line, index)=>{
        const number = start + 1 + index, gutter = " ".concat(" ".concat(number).slice(-numberMaxWidth), " |"), hasMarker = markerLines[number], lastMarkerLine = !markerLines[number + 1];
        if (!hasMarker) return " ".concat(gutter).concat(line.length > 0 ? " ".concat(line) : "");
        let markerLine = "";
        if (Array.isArray(hasMarker)) {
            const markerSpacing = line.slice(0, Math.max(hasMarker[0] - 1, 0)).replace(/[^\t]/g, " "), numberOfMarkers = hasMarker[1] || 1;
            markerLine = [
                "\n ",
                gutter.replace(/\d/g, " "),
                " ",
                markerSpacing,
                "^".repeat(numberOfMarkers)
            ].join(""), lastMarkerLine && message && (markerLine += " " + message);
        }
        return [
            ">",
            gutter,
            line.length > 0 ? " ".concat(line) : "",
            markerLine
        ].join("");
    }).join("\n");
}
function getMarkerLines(loc, source) {
    var _startLoc_line, _startLoc_column;
    const startLoc = {
        ...loc.start
    }, endLoc = {
        ...startLoc,
        ...loc.end
    }, linesAbove = 2, linesBelow = 3, startLine = (_startLoc_line = startLoc.line) !== null && _startLoc_line !== void 0 ? _startLoc_line : -1, startColumn = (_startLoc_column = startLoc.column) !== null && _startLoc_column !== void 0 ? _startLoc_column : 0, endLine = endLoc.line, endColumn = endLoc.column;
    let start = Math.max(startLine - (linesAbove + 1), 0), end = Math.min(source.length, endLine + linesBelow);
    startLine === -1 && (start = 0), endLine === -1 && (end = source.length);
    const lineDiff = endLine - startLine, markerLines = {};
    if (lineDiff) for(let i = 0; i <= lineDiff; i++){
        const lineNumber = i + startLine;
        if (!startColumn) markerLines[lineNumber] = !0;
        else if (i === 0) {
            const sourceLength = source[lineNumber - 1].length;
            markerLines[lineNumber] = [
                startColumn,
                sourceLength - startColumn + 1
            ];
        } else if (i === lineDiff) markerLines[lineNumber] = [
            0,
            endColumn
        ];
        else {
            const sourceLength = source[lineNumber - i].length;
            markerLines[lineNumber] = [
                0,
                sourceLength
            ];
        }
    }
    else startColumn === endColumn ? startColumn ? markerLines[startLine] = [
        startColumn,
        0
    ] : markerLines[startLine] = !0 : markerLines[startLine] = [
        startColumn,
        endColumn - startColumn
    ];
    return {
        start,
        end,
        markerLines
    };
}
function columnToLine(column, lines) {
    var _lines_;
    let offset = 0;
    for(let i = 0; i < lines.length; i++){
        const lineLength = lines[i].length + 1;
        if (offset + lineLength > column) return {
            line: i + 1,
            // 1-based line
            column: column - offset
        };
        offset += lineLength;
    }
    var _lines__length;
    return {
        line: lines.length,
        column: (_lines__length = (_lines_ = lines[lines.length - 1]) === null || _lines_ === void 0 ? void 0 : _lines_.length) !== null && _lines__length !== void 0 ? _lines__length : 0
    };
}
const MAX_ITEMS_IN_ERROR_MESSAGE = 5;
function isHttpError(error) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$_chunks$2d$es$2f$stegaClean$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRecord"])(error)) return !1;
    const response = error.response;
    return !(typeof error.statusCode != "number" || typeof error.message != "string" || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$_chunks$2d$es$2f$stegaClean$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRecord"])(response) || typeof response.body > "u" || typeof response.url != "string" || typeof response.method != "string" || typeof response.headers != "object" || typeof response.statusCode != "number");
}
class ClientError extends Error {
    constructor(res, context){
        const props = extractErrorProps(res, context);
        super(props.message), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "response", void 0), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "statusCode", 400), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "responseBody", void 0), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "details", void 0), Object.assign(this, props);
    }
}
class ServerError extends Error {
    constructor(res){
        const props = extractErrorProps(res);
        super(props.message), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "response", void 0), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "statusCode", 500), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "responseBody", void 0), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "details", void 0), Object.assign(this, props);
    }
}
function extractErrorProps(res, context) {
    const body = res.body, props = {
        response: res,
        statusCode: res.statusCode,
        responseBody: stringifyBody(body, res),
        message: "",
        details: void 0
    };
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$_chunks$2d$es$2f$stegaClean$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRecord"])(body)) return props.message = httpErrorMessage(res, body), props;
    const error = body.error;
    if (typeof error == "string" && typeof body.message == "string") return props.message = "".concat(error, " - ").concat(body.message), props;
    if (typeof error != "object" || error === null) return typeof error == "string" ? props.message = error : typeof body.message == "string" ? props.message = body.message : props.message = httpErrorMessage(res, body), props;
    if (isMutationError(error) || isActionError(error)) {
        const allItems = error.items || [], items = allItems.slice(0, MAX_ITEMS_IN_ERROR_MESSAGE).map((item)=>{
            var _item_error;
            return (_item_error = item.error) === null || _item_error === void 0 ? void 0 : _item_error.description;
        }).filter(Boolean);
        let itemsStr = items.length ? ":\n- ".concat(items.join("\n- ")) : "";
        return allItems.length > MAX_ITEMS_IN_ERROR_MESSAGE && (itemsStr += "\n...and ".concat(allItems.length - MAX_ITEMS_IN_ERROR_MESSAGE, " more")), props.message = "".concat(error.description).concat(itemsStr), props.details = body.error, props;
    }
    if (isQueryParseError(error)) {
        var _context_options_query, _context_options;
        const tag = context === null || context === void 0 ? void 0 : (_context_options = context.options) === null || _context_options === void 0 ? void 0 : (_context_options_query = _context_options.query) === null || _context_options_query === void 0 ? void 0 : _context_options_query.tag;
        return props.message = formatQueryParseError(error, tag), props.details = body.error, props;
    }
    return "description" in error && typeof error.description == "string" ? (props.message = error.description, props.details = error, props) : (props.message = httpErrorMessage(res, body), props);
}
function isMutationError(error) {
    return "type" in error && error.type === "mutationError" && "description" in error && typeof error.description == "string";
}
function isActionError(error) {
    return "type" in error && error.type === "actionError" && "description" in error && typeof error.description == "string";
}
function isQueryParseError(error) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$_chunks$2d$es$2f$stegaClean$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRecord"])(error) && error.type === "queryParseError" && typeof error.query == "string" && typeof error.start == "number" && typeof error.end == "number";
}
function formatQueryParseError(error, tag) {
    const { query, start, end, description } = error;
    if (!query || typeof start > "u") return "GROQ query parse error: ".concat(description);
    const withTag = tag ? "\n\nTag: ".concat(tag) : "";
    return "GROQ query parse error:\n".concat(codeFrame(query, {
        start,
        end
    }, description)).concat(withTag);
}
function httpErrorMessage(res, body) {
    const details = typeof body == "string" ? " (".concat(sliceWithEllipsis(body, 100), ")") : "", statusMessage = res.statusMessage ? " ".concat(res.statusMessage) : "";
    return "".concat(res.method, "-request to ").concat(res.url, " resulted in HTTP ").concat(res.statusCode).concat(statusMessage).concat(details);
}
function stringifyBody(body, res) {
    return (res.headers["content-type"] || "").toLowerCase().indexOf("application/json") !== -1 ? JSON.stringify(body, null, 2) : body;
}
function sliceWithEllipsis(str, max) {
    return str.length > max ? "".concat(str.slice(0, max), "…") : str;
}
class CorsOriginError extends Error {
    constructor({ projectId: projectId2 }){
        super("CorsOriginError"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "projectId", void 0), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "addOriginUrl", void 0), this.name = "CorsOriginError", this.projectId = projectId2;
        const url = new URL("https://sanity.io/manage/project/".concat(projectId2, "/api"));
        if (typeof location < "u") {
            const { origin } = location;
            url.searchParams.set("cors", "add"), url.searchParams.set("origin", origin), this.addOriginUrl = url, this.message = "The current origin is not allowed to connect to the Live Content API. Add it here: ".concat(url);
        } else this.message = "The current origin is not allowed to connect to the Live Content API. Change your configuration here: ".concat(url);
    }
}
const httpError = {
    onResponse: (res, context)=>{
        if (res.statusCode >= 500) throw new ServerError(res);
        if (res.statusCode >= 400) throw new ClientError(res, context);
        return res;
    }
};
function printWarnings() {
    let config = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const seen = {}, shouldIgnoreWarning = (message)=>config.ignoreWarnings === void 0 ? !1 : (Array.isArray(config.ignoreWarnings) ? config.ignoreWarnings : [
            config.ignoreWarnings
        ]).some((pattern)=>typeof pattern == "string" ? message.includes(pattern) : pattern instanceof RegExp ? pattern.test(message) : !1);
    return {
        onResponse: (res)=>{
            const warn = res.headers["x-sanity-warning"], warnings = Array.isArray(warn) ? warn : [
                warn
            ];
            for (const msg of warnings)!msg || seen[msg] || shouldIgnoreWarning(msg) || (seen[msg] = !0, console.warn(msg));
            return res;
        }
    };
}
function defineHttpRequest(envMiddleware2) {
    let config = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$get$2d$it$2f$dist$2f$index$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getIt"])([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$get$2d$it$2f$dist$2f$middleware$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["retry"])({
            shouldRetry
        }),
        ...envMiddleware2,
        printWarnings(config),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$get$2d$it$2f$dist$2f$middleware$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsonRequest"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$get$2d$it$2f$dist$2f$middleware$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsonResponse"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$get$2d$it$2f$dist$2f$middleware$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["progress"])(),
        httpError,
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$get$2d$it$2f$dist$2f$middleware$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["observable"])({
            implementation: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$Observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]
        })
    ]);
}
function shouldRetry(err, attempt, options) {
    if (options.maxRetries === 0) return !1;
    const isSafe = options.method === "GET" || options.method === "HEAD", isQuery2 = (options.uri || options.url).startsWith("/data/query"), isRetriableResponse = err.response && (err.response.statusCode === 429 || err.response.statusCode === 502 || err.response.statusCode === 503);
    return (isSafe || isQuery2) && isRetriableResponse ? !0 : __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$get$2d$it$2f$dist$2f$middleware$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["retry"].shouldRetry(err, attempt, options);
}
const BASE_URL = "https://www.sanity.io/help/";
function generateHelpUrl(slug) {
    return BASE_URL + slug;
}
const VALID_ASSET_TYPES = [
    "image",
    "file"
], VALID_INSERT_LOCATIONS = [
    "before",
    "after",
    "replace"
], dataset = (name)=>{
    if (!/^(~[a-z0-9]{1}[-\w]{0,63}|[a-z0-9]{1}[-\w]{0,63})$/.test(name)) throw new Error("Datasets can only contain lowercase characters, numbers, underscores and dashes, and start with tilde, and be maximum 64 characters");
}, projectId = (id)=>{
    if (!/^[-a-z0-9]+$/i.test(id)) throw new Error("`projectId` can only contain only a-z, 0-9 and dashes");
}, validateAssetType = (type)=>{
    if (VALID_ASSET_TYPES.indexOf(type) === -1) throw new Error("Invalid asset type: ".concat(type, ". Must be one of ").concat(VALID_ASSET_TYPES.join(", ")));
}, validateObject = (op, val)=>{
    if (val === null || typeof val != "object" || Array.isArray(val)) throw new Error("".concat(op, "() takes an object of properties"));
}, validateDocumentId = (op, id)=>{
    if (typeof id != "string" || !/^[a-z0-9_][a-z0-9_.-]{0,127}$/i.test(id) || id.includes("..")) throw new Error("".concat(op, '(): "').concat(id, '" is not a valid document ID'));
}, requireDocumentId = (op, doc)=>{
    if (!doc._id) throw new Error("".concat(op, '() requires that the document contains an ID ("_id" property)'));
    validateDocumentId(op, doc._id);
}, validateDocumentType = (op, type)=>{
    if (typeof type != "string") throw new Error("`".concat(op, "()`: `").concat(type, "` is not a valid document type"));
}, requireDocumentType = (op, doc)=>{
    if (!doc._type) throw new Error("`".concat(op, "()` requires that the document contains a type (`_type` property)"));
    validateDocumentType(op, doc._type);
}, validateVersionIdMatch = (builtVersionId, document)=>{
    if (document._id && document._id !== builtVersionId) throw new Error("The provided document ID (`".concat(document._id, "`) does not match the generated version ID (`").concat(builtVersionId, "`)"));
}, validateInsert = (at, selector, items)=>{
    const signature = "insert(at, selector, items)";
    if (VALID_INSERT_LOCATIONS.indexOf(at) === -1) {
        const valid = VALID_INSERT_LOCATIONS.map((loc)=>'"'.concat(loc, '"')).join(", ");
        throw new Error("".concat(signature, ' takes an "at"-argument which is one of: ').concat(valid));
    }
    if (typeof selector != "string") throw new Error("".concat(signature, ' takes a "selector"-argument which must be a string'));
    if (!Array.isArray(items)) throw new Error("".concat(signature, ' takes an "items"-argument which must be an array'));
}, hasDataset = (config)=>{
    if (!config.dataset) throw new Error("`dataset` must be provided to perform queries");
    return config.dataset || "";
}, requestTag = (tag)=>{
    if (typeof tag != "string" || !/^[a-z0-9._-]{1,75}$/i.test(tag)) throw new Error("Tag can only contain alphanumeric characters, underscores, dashes and dots, and be between one and 75 characters long.");
    return tag;
}, resourceConfig = (config)=>{
    if (!config["~experimental_resource"]) throw new Error("`resource` must be provided to perform resource queries");
    const { type, id } = config["~experimental_resource"];
    switch(type){
        case "dataset":
            {
                if (id.split(".").length !== 2) throw new Error('Dataset resource ID must be in the format "project.dataset"');
                return;
            }
        case "dashboard":
        case "media-library":
        case "canvas":
            return;
        default:
            throw new Error("Unsupported resource type: ".concat(type.toString()));
    }
}, resourceGuard = (service, config)=>{
    if (config["~experimental_resource"]) throw new Error("`".concat(service, "` does not support resource-based operations"));
}, EXPERIMENTAL_API_WARNING = "This is an experimental API version";
function once(fn) {
    let didCall = !1, returnValue;
    return function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        return didCall || (returnValue = fn(...args), didCall = !0), returnValue;
    };
}
const createWarningPrinter = (message)=>// eslint-disable-next-line no-console
    once(function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        return console.warn(message.join(" "), ...args);
    }), printCdnAndWithCredentialsWarning = createWarningPrinter([
    "Because you set `withCredentials` to true, we will override your `useCdn`",
    "setting to be false since (cookie-based) credentials are never set on the CDN"
]), printCdnWarning = createWarningPrinter([
    "Since you haven't set a value for `useCdn`, we will deliver content using our",
    "global, edge-cached API-CDN. If you wish to have content delivered faster, set",
    "`useCdn: false` to use the Live API. Note: You may incur higher costs using the live API."
]), printCdnPreviewDraftsWarning = createWarningPrinter([
    "The Sanity client is configured with the `perspective` set to `drafts` or `previewDrafts`, which doesn't support the API-CDN.",
    "The Live API will be used instead. Set `useCdn: false` in your configuration to hide this warning."
]), printPreviewDraftsDeprecationWarning = createWarningPrinter([
    "The `previewDrafts` perspective has been renamed to  `drafts` and will be removed in a future API version"
]), printBrowserTokenWarning = createWarningPrinter([
    "You have configured Sanity client to use a token in the browser. This may cause unintentional security issues.",
    "See ".concat(generateHelpUrl("js-client-browser-token"), " for more information and how to hide this warning.")
]), printCredentialedTokenWarning = createWarningPrinter([
    "You have configured Sanity client to use a token, but also provided `withCredentials: true`.",
    "This is no longer supported - only token will be used - remove `withCredentials: true`."
]), printNoApiVersionSpecifiedWarning = createWarningPrinter([
    "Using the Sanity client without specifying an API version is deprecated.",
    "See ".concat(generateHelpUrl("js-client-api-version"))
]), printNoDefaultExport = createWarningPrinter([
    "The default export of @sanity/client has been deprecated. Use the named export `createClient` instead."
]), printCreateVersionWithBaseIdWarning = createWarningPrinter([
    "You have called `createVersion()` with a defined `document`. The recommended approach is to provide a `baseId` and `releaseId` instead."
]), defaultCdnHost = "apicdn.sanity.io", defaultConfig = {
    apiHost: "https://api.sanity.io",
    apiVersion: "1",
    useProjectHostname: !0,
    stega: {
        enabled: !1
    }
}, LOCALHOSTS = [
    "localhost",
    "127.0.0.1",
    "0.0.0.0"
], isLocal = (host)=>LOCALHOSTS.indexOf(host) !== -1;
function validateApiVersion(apiVersion) {
    if (apiVersion === "1" || apiVersion === "X") return;
    const apiDate = new Date(apiVersion);
    if (!(/^\d{4}-\d{2}-\d{2}$/.test(apiVersion) && apiDate instanceof Date && apiDate.getTime() > 0)) throw new Error("Invalid API version string, expected `1` or date in format `YYYY-MM-DD`");
}
function validateApiPerspective(perspective) {
    if (Array.isArray(perspective) && perspective.length > 1 && perspective.includes("raw")) throw new TypeError('Invalid API perspective value: "raw". The raw-perspective can not be combined with other perspectives');
}
const initConfig = (config, prevConfig)=>{
    const specifiedConfig = {
        ...prevConfig,
        ...config,
        stega: {
            ...typeof prevConfig.stega == "boolean" ? {
                enabled: prevConfig.stega
            } : prevConfig.stega || defaultConfig.stega,
            ...typeof config.stega == "boolean" ? {
                enabled: config.stega
            } : config.stega || {}
        }
    };
    specifiedConfig.apiVersion || printNoApiVersionSpecifiedWarning();
    const newConfig = {
        ...defaultConfig,
        ...specifiedConfig
    }, projectBased = newConfig.useProjectHostname && !newConfig["~experimental_resource"];
    if (typeof Promise > "u") {
        const helpUrl = generateHelpUrl("js-client-promise-polyfill");
        throw new Error("No native Promise-implementation found, polyfill needed - see ".concat(helpUrl));
    }
    if (projectBased && !newConfig.projectId) throw new Error("Configuration must contain `projectId`");
    if (newConfig["~experimental_resource"] && resourceConfig(newConfig), typeof newConfig.perspective < "u" && validateApiPerspective(newConfig.perspective), "encodeSourceMap" in newConfig) throw new Error("It looks like you're using options meant for '@sanity/preview-kit/client'. 'encodeSourceMap' is not supported in '@sanity/client'. Did you mean 'stega.enabled'?");
    if ("encodeSourceMapAtPath" in newConfig) throw new Error("It looks like you're using options meant for '@sanity/preview-kit/client'. 'encodeSourceMapAtPath' is not supported in '@sanity/client'. Did you mean 'stega.filter'?");
    if (typeof newConfig.stega.enabled != "boolean") throw new Error("stega.enabled must be a boolean, received ".concat(newConfig.stega.enabled));
    if (newConfig.stega.enabled && newConfig.stega.studioUrl === void 0) throw new Error("stega.studioUrl must be defined when stega.enabled is true");
    if (newConfig.stega.enabled && typeof newConfig.stega.studioUrl != "string" && typeof newConfig.stega.studioUrl != "function") throw new Error("stega.studioUrl must be a string or a function, received ".concat(newConfig.stega.studioUrl));
    const isBrowser = typeof window < "u" && window.location && window.location.hostname, isLocalhost = isBrowser && isLocal(window.location.hostname), hasToken = !!newConfig.token;
    newConfig.withCredentials && hasToken && (printCredentialedTokenWarning(), newConfig.withCredentials = !1), isBrowser && isLocalhost && hasToken && newConfig.ignoreBrowserTokenWarning !== !0 ? printBrowserTokenWarning() : typeof newConfig.useCdn > "u" && printCdnWarning(), projectBased && projectId(newConfig.projectId), newConfig.dataset && dataset(newConfig.dataset), "requestTagPrefix" in newConfig && (newConfig.requestTagPrefix = newConfig.requestTagPrefix ? requestTag(newConfig.requestTagPrefix).replace(/\.+$/, "") : void 0), newConfig.apiVersion = "".concat(newConfig.apiVersion).replace(/^v/, ""), newConfig.isDefaultApi = newConfig.apiHost === defaultConfig.apiHost, newConfig.useCdn === !0 && newConfig.withCredentials && printCdnAndWithCredentialsWarning(), newConfig.useCdn = newConfig.useCdn !== !1 && !newConfig.withCredentials, validateApiVersion(newConfig.apiVersion);
    const hostParts = newConfig.apiHost.split("://", 2), protocol = hostParts[0], host = hostParts[1], cdnHost = newConfig.isDefaultApi ? defaultCdnHost : host;
    return projectBased ? (newConfig.url = "".concat(protocol, "://").concat(newConfig.projectId, ".").concat(host, "/v").concat(newConfig.apiVersion), newConfig.cdnUrl = "".concat(protocol, "://").concat(newConfig.projectId, ".").concat(cdnHost, "/v").concat(newConfig.apiVersion)) : (newConfig.url = "".concat(newConfig.apiHost, "/v").concat(newConfig.apiVersion), newConfig.cdnUrl = newConfig.url), newConfig;
};
class ConnectionFailedError extends Error {
    constructor(...args){
        super(...args), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "name", "ConnectionFailedError");
    }
}
class DisconnectError extends Error {
    constructor(message, reason, options = {}){
        super(message, options), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "name", "DisconnectError"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "reason", void 0), this.reason = reason;
    }
}
class ChannelError extends Error {
    constructor(message, data){
        super(message), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "name", "ChannelError"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "data", void 0), this.data = data;
    }
}
class MessageError extends Error {
    constructor(message, data, options = {}){
        super(message, options), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "name", "MessageError"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "data", void 0), this.data = data;
    }
}
class MessageParseError extends Error {
    constructor(...args){
        super(...args), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "name", "MessageParseError");
    }
}
const REQUIRED_EVENTS = [
    "channelError",
    "disconnect"
];
function connectEventSource(initEventSource, events) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$observable$2f$defer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defer"])(()=>{
        const es = initEventSource();
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$isObservable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isObservable"])(es) ? es : (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$observable$2f$of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["of"])(es);
    }).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$mergeMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeMap"])((es)=>connectWithESInstance(es, events)));
}
function connectWithESInstance(es, events) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$Observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]((observer)=>{
        const emitOpen = events.includes("open"), emitReconnect = events.includes("reconnect");
        function onError(evt) {
            if ("data" in evt) {
                const [parseError, event] = parseEvent(evt);
                observer.error(parseError ? new MessageParseError("Unable to parse EventSource error message", {
                    cause: event
                }) : new MessageError((event === null || event === void 0 ? void 0 : event.data).message, event));
                return;
            }
            es.readyState === es.CLOSED ? observer.error(new ConnectionFailedError("EventSource connection failed")) : emitReconnect && observer.next({
                type: "reconnect"
            });
        }
        function onOpen() {
            observer.next({
                type: "open"
            });
        }
        function onMessage(message) {
            const [parseError, event] = parseEvent(message);
            if (parseError) {
                observer.error(new MessageParseError("Unable to parse EventSource message", {
                    cause: parseError
                }));
                return;
            }
            if (message.type === "channelError") {
                const tag = new URL(es.url).searchParams.get("tag");
                observer.error(new ChannelError(extractErrorMessage(event === null || event === void 0 ? void 0 : event.data, tag), event.data));
                return;
            }
            if (message.type === "disconnect") {
                var _event_data;
                observer.error(new DisconnectError("Server disconnected client: ".concat(((_event_data = event.data) === null || _event_data === void 0 ? void 0 : _event_data.reason) || "unknown error")));
                return;
            }
            observer.next({
                type: message.type,
                id: message.lastEventId,
                ...event.data ? {
                    data: event.data
                } : {}
            });
        }
        es.addEventListener("error", onError), emitOpen && es.addEventListener("open", onOpen);
        const cleanedEvents = [
            .../* @__PURE__ */ new Set([
                ...REQUIRED_EVENTS,
                ...events
            ])
        ].filter((type)=>type !== "error" && type !== "open" && type !== "reconnect");
        return cleanedEvents.forEach((type)=>es.addEventListener(type, onMessage)), ()=>{
            es.removeEventListener("error", onError), emitOpen && es.removeEventListener("open", onOpen), cleanedEvents.forEach((type)=>es.removeEventListener(type, onMessage)), es.close();
        };
    });
}
function parseEvent(message) {
    try {
        const data = typeof message.data == "string" && JSON.parse(message.data);
        return [
            null,
            {
                type: message.type,
                id: message.lastEventId,
                ...isEmptyObject(data) ? {} : {
                    data
                }
            }
        ];
    } catch (err) {
        return [
            err,
            null
        ];
    }
}
function extractErrorMessage(err, tag) {
    const error = err.error;
    return error ? isQueryParseError(error) ? formatQueryParseError(error, tag) : error.description ? error.description : typeof error == "string" ? error : JSON.stringify(error, null, 2) : err.message || "Unknown listener error";
}
function isEmptyObject(data) {
    for(const _ in data)return !1;
    return !0;
}
function getSelection(sel) {
    if (typeof sel == "string") return {
        id: sel
    };
    if (Array.isArray(sel)) return {
        query: "*[_id in $ids]",
        params: {
            ids: sel
        }
    };
    if (typeof sel == "object" && sel !== null && "query" in sel && typeof sel.query == "string") return "params" in sel && typeof sel.params == "object" && sel.params !== null ? {
        query: sel.query,
        params: sel.params
    } : {
        query: sel.query
    };
    const selectionOpts = [
        "* Document ID (<docId>)",
        "* Array of document IDs",
        "* Object containing `query`"
    ].join("\n");
    throw new Error("Unknown selection - must be one of:\n\n".concat(selectionOpts));
}
class BasePatch {
    /**
   * Sets the given attributes to the document. Does NOT merge objects.
   * The operation is added to the current patch, ready to be commited by `commit()`
   *
   * @param attrs - Attributes to set. To set a deep attribute, use JSONMatch, eg: \{"nested.prop": "value"\}
   */ set(attrs) {
        return this._assign("set", attrs);
    }
    /**
   * Sets the given attributes to the document if they are not currently set. Does NOT merge objects.
   * The operation is added to the current patch, ready to be commited by `commit()`
   *
   * @param attrs - Attributes to set. To set a deep attribute, use JSONMatch, eg: \{"nested.prop": "value"\}
   */ setIfMissing(attrs) {
        return this._assign("setIfMissing", attrs);
    }
    /**
   * Performs a "diff-match-patch" operation on the string attributes provided.
   * The operation is added to the current patch, ready to be commited by `commit()`
   *
   * @param attrs - Attributes to perform operation on. To set a deep attribute, use JSONMatch, eg: \{"nested.prop": "dmp"\}
   */ diffMatchPatch(attrs) {
        return validateObject("diffMatchPatch", attrs), this._assign("diffMatchPatch", attrs);
    }
    /**
   * Unsets the attribute paths provided.
   * The operation is added to the current patch, ready to be commited by `commit()`
   *
   * @param attrs - Attribute paths to unset.
   */ unset(attrs) {
        if (!Array.isArray(attrs)) throw new Error("unset(attrs) takes an array of attributes to unset, non-array given");
        return this.operations = Object.assign({}, this.operations, {
            unset: attrs
        }), this;
    }
    /**
   * Increment a numeric value. Each entry in the argument is either an attribute or a JSON path. The value may be a positive or negative integer or floating-point value. The operation will fail if target value is not a numeric value, or doesn't exist.
   *
   * @param attrs - Object of attribute paths to increment, values representing the number to increment by.
   */ inc(attrs) {
        return this._assign("inc", attrs);
    }
    /**
   * Decrement a numeric value. Each entry in the argument is either an attribute or a JSON path. The value may be a positive or negative integer or floating-point value. The operation will fail if target value is not a numeric value, or doesn't exist.
   *
   * @param attrs - Object of attribute paths to decrement, values representing the number to decrement by.
   */ dec(attrs) {
        return this._assign("dec", attrs);
    }
    /**
   * Provides methods for modifying arrays, by inserting, appending and replacing elements via a JSONPath expression.
   *
   * @param at - Location to insert at, relative to the given selector, or 'replace' the matched path
   * @param selector - JSONPath expression, eg `comments[-1]` or `blocks[_key=="abc123"]`
   * @param items - Array of items to insert/replace
   */ insert(at, selector, items) {
        return validateInsert(at, selector, items), this._assign("insert", {
            [at]: selector,
            items
        });
    }
    /**
   * Append the given items to the array at the given JSONPath
   *
   * @param selector - Attribute/path to append to, eg `comments` or `person.hobbies`
   * @param items - Array of items to append to the array
   */ append(selector, items) {
        return this.insert("after", "".concat(selector, "[-1]"), items);
    }
    /**
   * Prepend the given items to the array at the given JSONPath
   *
   * @param selector - Attribute/path to prepend to, eg `comments` or `person.hobbies`
   * @param items - Array of items to prepend to the array
   */ prepend(selector, items) {
        return this.insert("before", "".concat(selector, "[0]"), items);
    }
    /**
   * Change the contents of an array by removing existing elements and/or adding new elements.
   *
   * @param selector - Attribute or JSONPath expression for array
   * @param start - Index at which to start changing the array (with origin 0). If greater than the length of the array, actual starting index will be set to the length of the array. If negative, will begin that many elements from the end of the array (with origin -1) and will be set to 0 if absolute value is greater than the length of the array.x
   * @param deleteCount - An integer indicating the number of old array elements to remove.
   * @param items - The elements to add to the array, beginning at the start index. If you don't specify any elements, splice() will only remove elements from the array.
   */ splice(selector, start, deleteCount, items) {
        const delAll = typeof deleteCount > "u" || deleteCount === -1, startIndex = start < 0 ? start - 1 : start, delCount = delAll ? -1 : Math.max(0, start + deleteCount), delRange = startIndex < 0 && delCount >= 0 ? "" : delCount, rangeSelector = "".concat(selector, "[").concat(startIndex, ":").concat(delRange, "]");
        return this.insert("replace", rangeSelector, items || []);
    }
    /**
   * Adds a revision clause, preventing the document from being patched if the `_rev` property does not match the given value
   *
   * @param rev - Revision to lock the patch to
   */ ifRevisionId(rev) {
        return this.operations.ifRevisionID = rev, this;
    }
    /**
   * Return a plain JSON representation of the patch
   */ serialize() {
        return {
            ...getSelection(this.selection),
            ...this.operations
        };
    }
    /**
   * Return a plain JSON representation of the patch
   */ toJSON() {
        return this.serialize();
    }
    /**
   * Clears the patch of all operations
   */ reset() {
        return this.operations = {}, this;
    }
    _assign(op, props) {
        let merge2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
        return validateObject(op, props), this.operations = Object.assign({}, this.operations, {
            [op]: Object.assign({}, merge2 && this.operations[op] || {}, props)
        }), this;
    }
    _set(op, props) {
        return this._assign(op, props, !1);
    }
    constructor(selection, operations = {}){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "selection", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "operations", void 0);
        this.selection = selection, this.operations = operations;
    }
}
var _client = /*#__PURE__*/ new WeakMap();
class ObservablePatch extends BasePatch {
    /**
   * Clones the patch
   */ clone() {
        return new ObservablePatch(this.selection, {
            ...this.operations
        }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client));
    }
    commit(options) {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client)) throw new Error("No `client` passed to patch, either provide one or pass the patch to a clients `mutate()` method");
        const returnFirst = typeof this.selection == "string", opts = Object.assign({
            returnFirst,
            returnDocuments: !0
        }, options);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client).mutate({
            patch: this.serialize()
        }, opts);
    }
    constructor(selection, operations, client){
        super(selection, operations), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client, {
            writable: true,
            value: void 0
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client, client);
    }
}
var _client1 = /*#__PURE__*/ new WeakMap();
class Patch extends BasePatch {
    /**
   * Clones the patch
   */ clone() {
        return new Patch(this.selection, {
            ...this.operations
        }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client1));
    }
    commit(options) {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client1)) throw new Error("No `client` passed to patch, either provide one or pass the patch to a clients `mutate()` method");
        const returnFirst = typeof this.selection == "string", opts = Object.assign({
            returnFirst,
            returnDocuments: !0
        }, options);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client1).mutate({
            patch: this.serialize()
        }, opts);
    }
    constructor(selection, operations, client){
        super(selection, operations), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client1, {
            writable: true,
            value: void 0
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client1, client);
    }
}
const defaultMutateOptions = {
    returnDocuments: !1
};
class BaseTransaction {
    /**
   * Creates a new Sanity document. If `_id` is provided and already exists, the mutation will fail. If no `_id` is given, one will automatically be generated by the database.
   * The operation is added to the current transaction, ready to be commited by `commit()`
   *
   * @param doc - Document to create. Requires a `_type` property.
   */ create(doc) {
        return validateObject("create", doc), this._add({
            create: doc
        });
    }
    /**
   * Creates a new Sanity document. If a document with the same `_id` already exists, the create operation will be ignored.
   * The operation is added to the current transaction, ready to be commited by `commit()`
   *
   * @param doc - Document to create if it does not already exist. Requires `_id` and `_type` properties.
   */ createIfNotExists(doc) {
        const op = "createIfNotExists";
        return validateObject(op, doc), requireDocumentId(op, doc), this._add({
            [op]: doc
        });
    }
    /**
   * Creates a new Sanity document, or replaces an existing one if the same `_id` is already used.
   * The operation is added to the current transaction, ready to be commited by `commit()`
   *
   * @param doc - Document to create or replace. Requires `_id` and `_type` properties.
   */ createOrReplace(doc) {
        const op = "createOrReplace";
        return validateObject(op, doc), requireDocumentId(op, doc), this._add({
            [op]: doc
        });
    }
    /**
   * Deletes the document with the given document ID
   * The operation is added to the current transaction, ready to be commited by `commit()`
   *
   * @param documentId - Document ID to delete
   */ delete(documentId) {
        return validateDocumentId("delete", documentId), this._add({
            delete: {
                id: documentId
            }
        });
    }
    transactionId(id) {
        return id ? (this.trxId = id, this) : this.trxId;
    }
    /**
   * Return a plain JSON representation of the transaction
   */ serialize() {
        return [
            ...this.operations
        ];
    }
    /**
   * Return a plain JSON representation of the transaction
   */ toJSON() {
        return this.serialize();
    }
    /**
   * Clears the transaction of all operations
   */ reset() {
        return this.operations = [], this;
    }
    _add(mut) {
        return this.operations.push(mut), this;
    }
    constructor(operations = [], transactionId){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "operations", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "trxId", void 0);
        this.operations = operations, this.trxId = transactionId;
    }
}
var _client2 = /*#__PURE__*/ new WeakMap();
class Transaction extends BaseTransaction {
    /**
   * Clones the transaction
   */ clone() {
        return new Transaction([
            ...this.operations
        ], (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client2), this.trxId);
    }
    commit(options) {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client2)) throw new Error("No `client` passed to transaction, either provide one or pass the transaction to a clients `mutate()` method");
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client2).mutate(this.serialize(), Object.assign({
            transactionId: this.trxId
        }, defaultMutateOptions, options || {}));
    }
    patch(patchOrDocumentId, patchOps) {
        const isBuilder = typeof patchOps == "function", isPatch = typeof patchOrDocumentId != "string" && patchOrDocumentId instanceof Patch, isMutationSelection = typeof patchOrDocumentId == "object" && ("query" in patchOrDocumentId || "id" in patchOrDocumentId);
        if (isPatch) return this._add({
            patch: patchOrDocumentId.serialize()
        });
        if (isBuilder) {
            const patch = patchOps(new Patch(patchOrDocumentId, {}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client2)));
            if (!(patch instanceof Patch)) throw new Error("function passed to `patch()` must return the patch");
            return this._add({
                patch: patch.serialize()
            });
        }
        if (isMutationSelection) {
            const patch = new Patch(patchOrDocumentId, patchOps || {}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client2));
            return this._add({
                patch: patch.serialize()
            });
        }
        return this._add({
            patch: {
                id: patchOrDocumentId,
                ...patchOps
            }
        });
    }
    constructor(operations, client, transactionId){
        super(operations, transactionId), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client2, {
            writable: true,
            value: void 0
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client2, client);
    }
}
var _client3 = /*#__PURE__*/ new WeakMap();
class ObservableTransaction extends BaseTransaction {
    /**
   * Clones the transaction
   */ clone() {
        return new ObservableTransaction([
            ...this.operations
        ], (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client3), this.trxId);
    }
    commit(options) {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client3)) throw new Error("No `client` passed to transaction, either provide one or pass the transaction to a clients `mutate()` method");
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client3).mutate(this.serialize(), Object.assign({
            transactionId: this.trxId
        }, defaultMutateOptions, options || {}));
    }
    patch(patchOrDocumentId, patchOps) {
        const isBuilder = typeof patchOps == "function";
        if (typeof patchOrDocumentId != "string" && patchOrDocumentId instanceof ObservablePatch) return this._add({
            patch: patchOrDocumentId.serialize()
        });
        if (isBuilder) {
            const patch = patchOps(new ObservablePatch(patchOrDocumentId, {}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client3)));
            if (!(patch instanceof ObservablePatch)) throw new Error("function passed to `patch()` must return the patch");
            return this._add({
                patch: patch.serialize()
            });
        }
        return this._add({
            patch: {
                id: patchOrDocumentId,
                ...patchOps
            }
        });
    }
    constructor(operations, client, transactionId){
        super(operations, transactionId), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client3, {
            writable: true,
            value: void 0
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client3, client);
    }
}
const projectHeader = "X-Sanity-Project-ID";
function requestOptions(config) {
    let overrides = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const headers = {};
    config.headers && Object.assign(headers, config.headers);
    const token = overrides.token || config.token;
    token && (headers.Authorization = "Bearer ".concat(token)), !overrides.useGlobalApi && !config.useProjectHostname && config.projectId && (headers[projectHeader] = config.projectId);
    const withCredentials = !!(typeof overrides.withCredentials > "u" ? config.withCredentials : overrides.withCredentials), timeout = typeof overrides.timeout > "u" ? config.timeout : overrides.timeout;
    return Object.assign({}, overrides, {
        headers: Object.assign({}, headers, overrides.headers || {}),
        timeout: typeof timeout > "u" ? 5 * 60 * 1e3 : timeout,
        proxy: overrides.proxy || config.proxy,
        json: !0,
        withCredentials,
        fetch: typeof overrides.fetch == "object" && typeof config.fetch == "object" ? {
            ...config.fetch,
            ...overrides.fetch
        } : overrides.fetch || config.fetch
    });
}
const encodeQueryString = (param)=>{
    let { query, params = {}, options = {} } = param;
    const searchParams = new URLSearchParams(), { tag, includeMutations, returnQuery, ...opts } = options;
    tag && searchParams.append("tag", tag), searchParams.append("query", query);
    for (const [key, value] of Object.entries(params))value !== void 0 && searchParams.append("$".concat(key), JSON.stringify(value));
    for (const [key, value] of Object.entries(opts))value && searchParams.append(key, "".concat(value));
    return returnQuery === !1 && searchParams.append("returnQuery", "false"), includeMutations === !1 && searchParams.append("includeMutations", "false"), "?".concat(searchParams);
}, excludeFalsey = (param, defValue)=>param === !1 ? void 0 : typeof param > "u" ? defValue : param, getMutationQuery = function() {
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return {
        dryRun: options.dryRun,
        returnIds: !0,
        returnDocuments: excludeFalsey(options.returnDocuments, !0),
        visibility: options.visibility || "sync",
        autoGenerateArrayKeys: options.autoGenerateArrayKeys,
        skipCrossDatasetReferenceValidation: options.skipCrossDatasetReferenceValidation
    };
}, isResponse = (event)=>event.type === "response", getBody = (event)=>event.body, indexBy = (docs, attr)=>docs.reduce((indexed, doc)=>(indexed[attr(doc)] = doc, indexed), /* @__PURE__ */ Object.create(null)), getQuerySizeLimit = 11264;
function _fetch(client, httpRequest, _stega, query) {
    let _params = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {}, options = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {};
    const stega = "stega" in options ? {
        ..._stega || {},
        ...typeof options.stega == "boolean" ? {
            enabled: options.stega
        } : options.stega || {}
    } : _stega, params = stega.enabled ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$_chunks$2d$es$2f$stegaClean$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stegaClean"])(_params) : _params, mapResponse = options.filterResponse === !1 ? (res)=>res : (res)=>res.result, { cache, next, ...opts } = {
        // Opt out of setting a `signal` on an internal `fetch` if one isn't provided.
        // This is necessary in React Server Components to avoid opting out of Request Memoization.
        useAbortSignal: typeof options.signal < "u",
        // Set `resultSourceMap' when stega is enabled, as it's required for encoding.
        resultSourceMap: stega.enabled ? "withKeyArraySelector" : options.resultSourceMap,
        ...options,
        // Default to not returning the query, unless `filterResponse` is `false`,
        // or `returnQuery` is explicitly set. `true` is the default in Content Lake, so skip if truthy
        returnQuery: options.filterResponse === !1 && options.returnQuery !== !1
    }, reqOpts = typeof cache < "u" || typeof next < "u" ? {
        ...opts,
        fetch: {
            cache,
            next
        }
    } : opts, $request = _dataRequest(client, httpRequest, "query", {
        query,
        params
    }, reqOpts);
    return stega.enabled ? $request.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$combineLatestWith$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineLatestWith"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$observable$2f$from$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["from"])(__turbopack_context__.A("[project]/frontend/node_modules/@sanity/client/dist/_chunks-es/stegaEncodeSourceMap.js [app-client] (ecmascript, async loader)").then(function(n) {
        return n.stegaEncodeSourceMap$1;
    }).then((param)=>{
        let { stegaEncodeSourceMap } = param;
        return stegaEncodeSourceMap;
    }))), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["map"])((param)=>{
        let [res, stegaEncodeSourceMap] = param;
        const result = stegaEncodeSourceMap(res.result, res.resultSourceMap, stega);
        return mapResponse({
            ...res,
            result
        });
    })) : $request.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["map"])(mapResponse));
}
function _getDocument(client, httpRequest, id) {
    let opts = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const docId = (()=>{
        if (!opts.releaseId) return id;
        const versionId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$_chunks$2d$es$2f$resolveEditInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getVersionFromId"])(id);
        if (!versionId) {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$_chunks$2d$es$2f$resolveEditInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDraftId"])(id)) throw new Error("The document ID (`".concat(id, "`) is a draft, but `options.releaseId` is set as `").concat(opts.releaseId, "`"));
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$_chunks$2d$es$2f$resolveEditInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getVersionId"])(id, opts.releaseId);
        }
        if (versionId !== opts.releaseId) throw new Error("The document ID (`".concat(id, "`) is already a version of `").concat(versionId, "` release, but this does not match the provided `options.releaseId` (`").concat(opts.releaseId, "`)"));
        return id;
    })(), options = {
        uri: _getDataUrl(client, "doc", docId),
        json: !0,
        tag: opts.tag,
        signal: opts.signal
    };
    return _requestObservable(client, httpRequest, options).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$filter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filter"])(isResponse), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["map"])((event)=>event.body.documents && event.body.documents[0]));
}
function _getDocuments(client, httpRequest, ids) {
    let opts = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const options = {
        uri: _getDataUrl(client, "doc", ids.join(",")),
        json: !0,
        tag: opts.tag,
        signal: opts.signal
    };
    return _requestObservable(client, httpRequest, options).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$filter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filter"])(isResponse), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["map"])((event)=>{
        const indexed = indexBy(event.body.documents || [], (doc)=>doc._id);
        return ids.map((id)=>indexed[id] || null);
    }));
}
function _getReleaseDocuments(client, httpRequest, releaseId) {
    let opts = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return _dataRequest(client, httpRequest, "query", {
        query: "*[sanity::partOfRelease($releaseId)]",
        params: {
            releaseId
        }
    }, opts);
}
function _createIfNotExists(client, httpRequest, doc, options) {
    return requireDocumentId("createIfNotExists", doc), _create(client, httpRequest, doc, "createIfNotExists", options);
}
function _createOrReplace(client, httpRequest, doc, options) {
    return requireDocumentId("createOrReplace", doc), _create(client, httpRequest, doc, "createOrReplace", options);
}
function _createVersion(client, httpRequest, doc, publishedId, options) {
    return requireDocumentId("createVersion", doc), requireDocumentType("createVersion", doc), printCreateVersionWithBaseIdWarning(), _action(client, httpRequest, {
        actionType: "sanity.action.document.version.create",
        publishedId,
        document: doc
    }, options);
}
function _createVersionFromBase(client, httpRequest, publishedId, baseId, releaseId, ifBaseRevisionId, options) {
    if (!baseId) throw new Error("`createVersion()` requires `baseId` when no `document` is provided");
    if (!publishedId) throw new Error("`createVersion()` requires `publishedId` when `baseId` is provided");
    validateDocumentId("createVersion", baseId), validateDocumentId("createVersion", publishedId);
    const createVersionAction = {
        actionType: "sanity.action.document.version.create",
        publishedId,
        baseId,
        versionId: releaseId ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$_chunks$2d$es$2f$resolveEditInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getVersionId"])(publishedId, releaseId) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$_chunks$2d$es$2f$resolveEditInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDraftId"])(publishedId),
        ifBaseRevisionId
    };
    return _action(client, httpRequest, createVersionAction, options);
}
function _delete(client, httpRequest, selection, options) {
    return _dataRequest(client, httpRequest, "mutate", {
        mutations: [
            {
                delete: getSelection(selection)
            }
        ]
    }, options);
}
function _discardVersion(client, httpRequest, versionId) {
    let purge = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1, options = arguments.length > 4 ? arguments[4] : void 0;
    return _action(client, httpRequest, {
        actionType: "sanity.action.document.version.discard",
        versionId,
        purge
    }, options);
}
function _replaceVersion(client, httpRequest, doc, options) {
    return requireDocumentId("replaceVersion", doc), requireDocumentType("replaceVersion", doc), _action(client, httpRequest, {
        actionType: "sanity.action.document.version.replace",
        document: doc
    }, options);
}
function _unpublishVersion(client, httpRequest, versionId, publishedId, options) {
    return _action(client, httpRequest, {
        actionType: "sanity.action.document.version.unpublish",
        versionId,
        publishedId
    }, options);
}
function _mutate(client, httpRequest, mutations, options) {
    let mut;
    mutations instanceof Patch || mutations instanceof ObservablePatch ? mut = {
        patch: mutations.serialize()
    } : mutations instanceof Transaction || mutations instanceof ObservableTransaction ? mut = mutations.serialize() : mut = mutations;
    const muts = Array.isArray(mut) ? mut : [
        mut
    ], transactionId = options && options.transactionId || void 0;
    return _dataRequest(client, httpRequest, "mutate", {
        mutations: muts,
        transactionId
    }, options);
}
function _action(client, httpRequest, actions, options) {
    const acts = Array.isArray(actions) ? actions : [
        actions
    ], transactionId = options && options.transactionId || void 0, skipCrossDatasetReferenceValidation = options && options.skipCrossDatasetReferenceValidation || void 0, dryRun = options && options.dryRun || void 0;
    return _dataRequest(client, httpRequest, "actions", {
        actions: acts,
        transactionId,
        skipCrossDatasetReferenceValidation,
        dryRun
    }, options);
}
function _dataRequest(client, httpRequest, endpoint, body) {
    let options = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {};
    const isMutation = endpoint === "mutate", isAction = endpoint === "actions", isQuery2 = endpoint === "query", strQuery = isMutation || isAction ? "" : encodeQueryString(body), useGet = !isMutation && !isAction && strQuery.length < getQuerySizeLimit, stringQuery = useGet ? strQuery : "", returnFirst = options.returnFirst, { timeout, token, tag, headers, returnQuery, lastLiveEventId, cacheMode } = options, uri = _getDataUrl(client, endpoint, stringQuery), reqOptions = {
        method: useGet ? "GET" : "POST",
        uri,
        json: !0,
        body: useGet ? void 0 : body,
        query: isMutation && getMutationQuery(options),
        timeout,
        headers,
        token,
        tag,
        returnQuery,
        perspective: options.perspective,
        resultSourceMap: options.resultSourceMap,
        lastLiveEventId: Array.isArray(lastLiveEventId) ? lastLiveEventId[0] : lastLiveEventId,
        cacheMode,
        canUseCdn: isQuery2,
        signal: options.signal,
        fetch: options.fetch,
        useAbortSignal: options.useAbortSignal,
        useCdn: options.useCdn
    };
    return _requestObservable(client, httpRequest, reqOptions).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$filter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filter"])(isResponse), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["map"])(getBody), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["map"])((res)=>{
        if (!isMutation) return res;
        const results = res.results || [];
        if (options.returnDocuments) return returnFirst ? results[0] && results[0].document : results.map((mut)=>mut.document);
        const key = returnFirst ? "documentId" : "documentIds", ids = returnFirst ? results[0] && results[0].id : results.map((mut)=>mut.id);
        return {
            transactionId: res.transactionId,
            results,
            [key]: ids
        };
    }));
}
function _create(client, httpRequest, doc, op) {
    let options = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {};
    const mutation = {
        [op]: doc
    }, opts = Object.assign({
        returnFirst: !0,
        returnDocuments: !0
    }, options);
    return _dataRequest(client, httpRequest, "mutate", {
        mutations: [
            mutation
        ]
    }, opts);
}
const hasDataConfig = (client)=>client.config().dataset !== void 0 && client.config().projectId !== void 0 || client.config()["~experimental_resource"] !== void 0, isQuery = (client, uri)=>hasDataConfig(client) && uri.startsWith(_getDataUrl(client, "query")), isMutate = (client, uri)=>hasDataConfig(client) && uri.startsWith(_getDataUrl(client, "mutate")), isDoc = (client, uri)=>hasDataConfig(client) && uri.startsWith(_getDataUrl(client, "doc", "")), isListener = (client, uri)=>hasDataConfig(client) && uri.startsWith(_getDataUrl(client, "listen")), isHistory = (client, uri)=>hasDataConfig(client) && uri.startsWith(_getDataUrl(client, "history", "")), isData = (client, uri)=>uri.startsWith("/data/") || isQuery(client, uri) || isMutate(client, uri) || isDoc(client, uri) || isListener(client, uri) || isHistory(client, uri);
function _requestObservable(client, httpRequest, options) {
    const uri = options.url || options.uri, config = client.config(), canUseCdn = typeof options.canUseCdn > "u" ? [
        "GET",
        "HEAD"
    ].indexOf(options.method || "GET") >= 0 && isData(client, uri) : options.canUseCdn;
    var _options_useCdn;
    let useCdn = ((_options_useCdn = options.useCdn) !== null && _options_useCdn !== void 0 ? _options_useCdn : config.useCdn) && canUseCdn;
    const tag = options.tag && config.requestTagPrefix ? [
        config.requestTagPrefix,
        options.tag
    ].join(".") : options.tag || config.requestTagPrefix;
    if (tag && options.tag !== null && (options.query = {
        tag: requestTag(tag),
        ...options.query
    }), [
        "GET",
        "HEAD",
        "POST"
    ].indexOf(options.method || "GET") >= 0 && isQuery(client, uri)) {
        var _options_resultSourceMap;
        const resultSourceMap = (_options_resultSourceMap = options.resultSourceMap) !== null && _options_resultSourceMap !== void 0 ? _options_resultSourceMap : config.resultSourceMap;
        resultSourceMap !== void 0 && resultSourceMap !== !1 && (options.query = {
            resultSourceMap,
            ...options.query
        });
        const perspectiveOption = options.perspective || config.perspective;
        typeof perspectiveOption < "u" && (perspectiveOption === "previewDrafts" && printPreviewDraftsDeprecationWarning(), validateApiPerspective(perspectiveOption), options.query = {
            perspective: Array.isArray(perspectiveOption) ? perspectiveOption.join(",") : perspectiveOption,
            ...options.query
        }, (Array.isArray(perspectiveOption) && perspectiveOption.length > 0 || // previewDrafts was renamed to drafts, but keep for backwards compat
        perspectiveOption === "previewDrafts" || perspectiveOption === "drafts") && useCdn && (useCdn = !1, printCdnPreviewDraftsWarning())), options.lastLiveEventId && (options.query = {
            ...options.query,
            lastLiveEventId: options.lastLiveEventId
        }), options.returnQuery === !1 && (options.query = {
            returnQuery: "false",
            ...options.query
        }), useCdn && options.cacheMode == "noStale" && (options.query = {
            cacheMode: "noStale",
            ...options.query
        });
    }
    const reqOptions = requestOptions(config, Object.assign({}, options, {
        url: _getUrl(client, uri, useCdn)
    })), request = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$Observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]((subscriber)=>httpRequest(reqOptions, config.requester).subscribe(subscriber));
    return options.signal ? request.pipe(_withAbortSignal(options.signal)) : request;
}
function _request(client, httpRequest, options) {
    return _requestObservable(client, httpRequest, options).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$filter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filter"])((event)=>event.type === "response"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["map"])((event)=>event.body));
}
function _getDataUrl(client, operation, path) {
    const config = client.config();
    if (config["~experimental_resource"]) {
        resourceConfig(config);
        const resourceBase = resourceDataBase(config), uri2 = path !== void 0 ? "".concat(operation, "/").concat(path) : operation;
        return "".concat(resourceBase, "/").concat(uri2).replace(/\/($|\?)/, "$1");
    }
    const catalog = hasDataset(config), baseUri = "/".concat(operation, "/").concat(catalog);
    return "/data".concat(path !== void 0 ? "".concat(baseUri, "/").concat(path) : baseUri).replace(/\/($|\?)/, "$1");
}
function _getUrl(client, uri) {
    let canUseCdn = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
    const { url, cdnUrl } = client.config();
    return "".concat(canUseCdn ? cdnUrl : url, "/").concat(uri.replace(/^\//, ""));
}
function _withAbortSignal(signal) {
    return (input)=>new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$Observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]((observer)=>{
            const abort = ()=>observer.error(_createAbortError(signal));
            if (signal && signal.aborted) {
                abort();
                return;
            }
            const subscription = input.subscribe(observer);
            return signal.addEventListener("abort", abort), ()=>{
                signal.removeEventListener("abort", abort), subscription.unsubscribe();
            };
        });
}
const isDomExceptionSupported = !!globalThis.DOMException;
function _createAbortError(signal) {
    var _signal_reason;
    if (isDomExceptionSupported) return new DOMException((_signal_reason = signal === null || signal === void 0 ? void 0 : signal.reason) !== null && _signal_reason !== void 0 ? _signal_reason : "The operation was aborted.", "AbortError");
    var _signal_reason1;
    const error = new Error((_signal_reason1 = signal === null || signal === void 0 ? void 0 : signal.reason) !== null && _signal_reason1 !== void 0 ? _signal_reason1 : "The operation was aborted.");
    return error.name = "AbortError", error;
}
const resourceDataBase = (config)=>{
    if (!config["~experimental_resource"]) throw new Error("`resource` must be provided to perform resource queries");
    const { type, id } = config["~experimental_resource"];
    switch(type){
        case "dataset":
            {
                const segments = id.split(".");
                if (segments.length !== 2) throw new Error('Dataset ID must be in the format "project.dataset"');
                return "/projects/".concat(segments[0], "/datasets/").concat(segments[1]);
            }
        case "canvas":
            return "/canvases/".concat(id);
        case "media-library":
            return "/media-libraries/".concat(id);
        case "dashboard":
            return "/dashboards/".concat(id);
        default:
            throw new Error("Unsupported resource type: ".concat(type.toString()));
    }
};
function _generate(client, httpRequest, request) {
    const dataset2 = hasDataset(client.config());
    return _request(client, httpRequest, {
        method: "POST",
        uri: "/agent/action/generate/".concat(dataset2),
        body: request
    });
}
function _patch(client, httpRequest, request) {
    const dataset2 = hasDataset(client.config());
    return _request(client, httpRequest, {
        method: "POST",
        uri: "/agent/action/patch/".concat(dataset2),
        body: request
    });
}
function _prompt(client, httpRequest, request) {
    const dataset2 = hasDataset(client.config());
    return _request(client, httpRequest, {
        method: "POST",
        uri: "/agent/action/prompt/".concat(dataset2),
        body: request
    });
}
function _transform(client, httpRequest, request) {
    const dataset2 = hasDataset(client.config());
    return _request(client, httpRequest, {
        method: "POST",
        uri: "/agent/action/transform/".concat(dataset2),
        body: request
    });
}
function _translate(client, httpRequest, request) {
    const dataset2 = hasDataset(client.config());
    return _request(client, httpRequest, {
        method: "POST",
        uri: "/agent/action/translate/".concat(dataset2),
        body: request
    });
}
var _client4 = /*#__PURE__*/ new WeakMap(), _httpRequest = /*#__PURE__*/ new WeakMap();
class ObservableAgentsActionClient {
    /**
   * Run an instruction to generate content in a target document.
   * @param request - instruction request
   */ generate(request) {
        return _generate((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client4), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest), request);
    }
    /**
   * Transform a target document based on a source.
   * @param request - translation request
   */ transform(request) {
        return _transform((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client4), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest), request);
    }
    /**
   * Translate a target document based on a source.
   * @param request - translation request
   */ translate(request) {
        return _translate((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client4), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest), request);
    }
    constructor(client, httpRequest){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client4, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client4, client), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest, httpRequest);
    }
}
var _client5 = /*#__PURE__*/ new WeakMap(), _httpRequest1 = /*#__PURE__*/ new WeakMap();
class AgentActionsClient {
    /**
   * Run an instruction to generate content in a target document.
   * @param request - instruction request
   */ generate(request) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$lastValueFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lastValueFrom"])(_generate((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client5), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest1), request));
    }
    /**
   * Transform a target document based on a source.
   * @param request - translation request
   */ transform(request) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$lastValueFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lastValueFrom"])(_transform((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client5), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest1), request));
    }
    /**
   * Translate a target document based on a source.
   * @param request - translation request
   */ translate(request) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$lastValueFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lastValueFrom"])(_translate((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client5), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest1), request));
    }
    /**
   * Run a raw instruction and return the result either as text or json
   * @param request - prompt request
   */ prompt(request) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$lastValueFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lastValueFrom"])(_prompt((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client5), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest1), request));
    }
    /**
   * Patch a document using a schema aware API.
   * Does not use an LLM, but uses the schema to ensure paths and values matches the schema.
   * @param request - instruction request
   */ patch(request) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$lastValueFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lastValueFrom"])(_patch((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client5), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest1), request));
    }
    constructor(client, httpRequest){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client5, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest1, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client5, client), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest1, httpRequest);
    }
}
var _client6 = /*#__PURE__*/ new WeakMap(), _httpRequest2 = /*#__PURE__*/ new WeakMap();
class ObservableAssetsClient {
    upload(assetType, body, options) {
        return _upload((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client6), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest2), assetType, body, options);
    }
    constructor(client, httpRequest){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client6, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest2, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client6, client), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest2, httpRequest);
    }
}
var _client7 = /*#__PURE__*/ new WeakMap(), _httpRequest3 = /*#__PURE__*/ new WeakMap();
class AssetsClient {
    upload(assetType, body, options) {
        const observable2 = _upload((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client7), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest3), assetType, body, options);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$lastValueFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lastValueFrom"])(observable2.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$filter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filter"])((event)=>event.type === "response"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["map"])((event)=>event.body.document)));
    }
    constructor(client, httpRequest){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client7, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest3, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client7, client), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest3, httpRequest);
    }
}
function _upload(client, httpRequest, assetType, body) {
    let opts = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {};
    validateAssetType(assetType);
    let meta = opts.extract || void 0;
    meta && !meta.length && (meta = [
        "none"
    ]);
    const config = client.config(), options = optionsFromFile(opts, body), { tag, label, title, description, creditLine, filename, source } = options, query = {
        label,
        title,
        description,
        filename,
        meta,
        creditLine
    };
    return source && (query.sourceId = source.id, query.sourceName = source.name, query.sourceUrl = source.url), _requestObservable(client, httpRequest, {
        tag,
        method: "POST",
        timeout: options.timeout || 0,
        uri: buildAssetUploadUrl(config, assetType),
        headers: options.contentType ? {
            "Content-Type": options.contentType
        } : {},
        query,
        body
    });
}
function buildAssetUploadUrl(config, assetType) {
    const assetTypeEndpoint = assetType === "image" ? "images" : "files";
    if (config["~experimental_resource"]) {
        const { type, id } = config["~experimental_resource"];
        switch(type){
            case "dataset":
                throw new Error("Assets are not supported for dataset resources, yet. Configure the client with `{projectId: <projectId>, dataset: <datasetId>}` instead.");
            case "canvas":
                return "/canvases/".concat(id, "/assets/").concat(assetTypeEndpoint);
            case "media-library":
                return "/media-libraries/".concat(id, "/upload");
            case "dashboard":
                return "/dashboards/".concat(id, "/assets/").concat(assetTypeEndpoint);
            default:
                throw new Error("Unsupported resource type: ".concat(type.toString()));
        }
    }
    const dataset2 = hasDataset(config);
    return "assets/".concat(assetTypeEndpoint, "/").concat(dataset2);
}
function optionsFromFile(opts, file) {
    return typeof File > "u" || !(file instanceof File) ? opts : Object.assign({
        filename: opts.preserveFilename === !1 ? void 0 : file.name,
        contentType: file.type
    }, opts);
}
var defaults = (obj, defaults2)=>Object.keys(defaults2).concat(Object.keys(obj)).reduce((target, prop)=>(target[prop] = typeof obj[prop] > "u" ? defaults2[prop] : obj[prop], target), {});
const pick = (obj, props)=>props.reduce((selection, prop)=>(typeof obj[prop] > "u" || (selection[prop] = obj[prop]), selection), {}), eventSourcePolyfill = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$observable$2f$defer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defer"])(()=>__turbopack_context__.A("[project]/frontend/node_modules/@sanity/eventsource/browser.js [app-client] (ecmascript, async loader)")).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["map"])((param)=>{
    let { default: EventSource2 } = param;
    return EventSource2;
}), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$shareReplay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shareReplay"])(1));
function reconnectOnConnectionFailure() {
    return function(source) {
        return source.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$catchError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["catchError"])((err, caught)=>err instanceof ConnectionFailedError ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$observable$2f$concat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["concat"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$observable$2f$of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["of"])({
                type: "reconnect"
            }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$observable$2f$timer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timer"])(1e3).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$mergeMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeMap"])(()=>caught))) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$observable$2f$throwError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["throwError"])(()=>err)));
    };
}
const MAX_URL_LENGTH = 14800, possibleOptions = [
    "includePreviousRevision",
    "includeResult",
    "includeMutations",
    "includeAllVersions",
    "visibility",
    "effectFormat",
    "tag"
], defaultOptions = {
    includeResult: !0
};
function _listen(query, params) {
    let opts = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const { url, token, withCredentials, requestTagPrefix, headers: configHeaders } = this.config(), tag = opts.tag && requestTagPrefix ? [
        requestTagPrefix,
        opts.tag
    ].join(".") : opts.tag, options = {
        ...defaults(opts, defaultOptions),
        tag
    }, listenOpts = pick(options, possibleOptions), qs = encodeQueryString({
        query,
        params,
        options: {
            tag,
            ...listenOpts
        }
    }), uri = "".concat(url).concat(_getDataUrl(this, "listen", qs));
    if (uri.length > MAX_URL_LENGTH) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$observable$2f$throwError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["throwError"])(()=>new Error("Query too large for listener"));
    const listenFor = options.events ? options.events : [
        "mutation"
    ], esOptions = {};
    return withCredentials && (esOptions.withCredentials = !0), (token || configHeaders) && (esOptions.headers = {}, token && (esOptions.headers.Authorization = "Bearer ".concat(token)), configHeaders && Object.assign(esOptions.headers, configHeaders)), connectEventSource(()=>// use polyfill if there is no global EventSource or if we need to set headers
        (typeof EventSource > "u" || esOptions.headers ? eventSourcePolyfill : (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$observable$2f$of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["of"])(EventSource)).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["map"])((EventSource2)=>new EventSource2(uri, esOptions))), listenFor).pipe(reconnectOnConnectionFailure(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$filter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filter"])((event)=>listenFor.includes(event.type)), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["map"])((event)=>({
            type: event.type,
            ..."data" in event ? event.data : {}
        })));
}
function shareReplayLatest(configOrPredicate, config) {
    return _shareReplayLatest(typeof configOrPredicate == "function" ? {
        predicate: configOrPredicate,
        ...config
    } : configOrPredicate);
}
function _shareReplayLatest(config) {
    return (source)=>{
        let latest, emitted = !1;
        const { predicate, ...shareConfig } = config, wrapped = source.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$tap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tap"])((value)=>{
            config.predicate(value) && (emitted = !0, latest = value);
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$finalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["finalize"])(()=>{
            emitted = !1, latest = void 0;
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$share$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["share"])(shareConfig)), emitLatest = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$Observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]((subscriber)=>{
            emitted && subscriber.next(// this cast is safe because of the emitted check which asserts that we got T from the source
            latest), subscriber.complete();
        });
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$observable$2f$merge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["merge"])(wrapped, emitLatest);
    };
}
const requiredApiVersion = "2021-03-25";
var _client8 = /*#__PURE__*/ new WeakMap();
class LiveClient {
    /**
   * Requires `apiVersion` to be `2021-03-25` or later.
   */ events() {
        let { includeDrafts = !1, tag: _tag } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        resourceGuard("live", (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client8).config());
        const { projectId: projectId2, apiVersion: _apiVersion, token, withCredentials, requestTagPrefix, headers: configHeaders } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client8).config(), apiVersion = _apiVersion.replace(/^v/, "");
        if (apiVersion !== "X" && apiVersion < requiredApiVersion) throw new Error("The live events API requires API version ".concat(requiredApiVersion, " or later. The current API version is ").concat(apiVersion, ". Please update your API version to use this feature."));
        if (includeDrafts && !token && !withCredentials) throw new Error("The live events API requires a token or withCredentials when 'includeDrafts: true'. Please update your client configuration. The token should have the lowest possible access role.");
        const path = _getDataUrl((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client8), "live/events"), url = new URL((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client8).getUrl(path, !1)), tag = _tag && requestTagPrefix ? [
            requestTagPrefix,
            _tag
        ].join(".") : _tag;
        tag && url.searchParams.set("tag", tag), includeDrafts && url.searchParams.set("includeDrafts", "true");
        const esOptions = {};
        includeDrafts && withCredentials && (esOptions.withCredentials = !0), (includeDrafts && token || configHeaders) && (esOptions.headers = {}, includeDrafts && token && (esOptions.headers.Authorization = "Bearer ".concat(token)), configHeaders && Object.assign(esOptions.headers, configHeaders));
        const key = "".concat(url.href, "::").concat(JSON.stringify(esOptions)), existing = eventsCache.get(key);
        if (existing) return existing;
        const events = connectEventSource(()=>// use polyfill if there is no global EventSource or if we need to set headers
            (typeof EventSource > "u" || esOptions.headers ? eventSourcePolyfill : (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$observable$2f$of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["of"])(EventSource)).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["map"])((EventSource2)=>new EventSource2(url.href, esOptions))), [
            "message",
            "restart",
            "welcome",
            "reconnect",
            "goaway"
        ]).pipe(reconnectOnConnectionFailure(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["map"])((event)=>{
            if (event.type === "message") {
                const { data, ...rest } = event;
                return {
                    ...rest,
                    tags: data.tags
                };
            }
            return event;
        })), checkCors = fetchObservable(url, {
            method: "OPTIONS",
            mode: "cors",
            credentials: esOptions.withCredentials ? "include" : "omit",
            headers: esOptions.headers
        }).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$mergeMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeMap"])(()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$observable$2f$empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EMPTY"]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$catchError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["catchError"])(()=>{
            throw new CorsOriginError({
                projectId: projectId2
            });
        })), observable2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$observable$2f$concat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["concat"])(checkCors, events).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$finalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["finalize"])(()=>eventsCache.delete(key)), shareReplayLatest({
            predicate: (event)=>event.type === "welcome"
        }));
        return eventsCache.set(key, observable2), observable2;
    }
    constructor(client){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client8, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client8, client);
    }
}
function fetchObservable(url, init) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$Observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]((observer)=>{
        const controller = new AbortController(), signal = controller.signal;
        return fetch(url, {
            ...init,
            signal: controller.signal
        }).then((response)=>{
            observer.next(response), observer.complete();
        }, (err)=>{
            signal.aborted || observer.error(err);
        }), ()=>controller.abort();
    });
}
const eventsCache = /* @__PURE__ */ new Map();
var _client9 = /*#__PURE__*/ new WeakMap(), _httpRequest4 = /*#__PURE__*/ new WeakMap();
class ObservableDatasetsClient {
    /**
   * Create a new dataset with the given name
   *
   * @param name - Name of the dataset to create
   * @param options - Options for the dataset
   */ create(name, options) {
        return _modify((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client9), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest4), "PUT", name, options);
    }
    /**
   * Edit a dataset with the given name
   *
   * @param name - Name of the dataset to edit
   * @param options - New options for the dataset
   */ edit(name, options) {
        return _modify((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client9), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest4), "PATCH", name, options);
    }
    /**
   * Delete a dataset with the given name
   *
   * @param name - Name of the dataset to delete
   */ delete(name) {
        return _modify((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client9), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest4), "DELETE", name);
    }
    /**
   * Fetch a list of datasets for the configured project
   */ list() {
        return _request((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client9), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest4), {
            uri: "/datasets",
            tag: null
        });
    }
    constructor(client, httpRequest){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client9, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest4, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client9, client), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest4, httpRequest);
    }
}
var _client10 = /*#__PURE__*/ new WeakMap(), _httpRequest5 = /*#__PURE__*/ new WeakMap();
class DatasetsClient {
    /**
   * Create a new dataset with the given name
   *
   * @param name - Name of the dataset to create
   * @param options - Options for the dataset
   */ create(name, options) {
        return resourceGuard("dataset", (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client10).config()), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$lastValueFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lastValueFrom"])(_modify((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client10), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest5), "PUT", name, options));
    }
    /**
   * Edit a dataset with the given name
   *
   * @param name - Name of the dataset to edit
   * @param options - New options for the dataset
   */ edit(name, options) {
        return resourceGuard("dataset", (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client10).config()), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$lastValueFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lastValueFrom"])(_modify((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client10), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest5), "PATCH", name, options));
    }
    /**
   * Delete a dataset with the given name
   *
   * @param name - Name of the dataset to delete
   */ delete(name) {
        return resourceGuard("dataset", (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client10).config()), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$lastValueFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lastValueFrom"])(_modify((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client10), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest5), "DELETE", name));
    }
    /**
   * Fetch a list of datasets for the configured project
   */ list() {
        return resourceGuard("dataset", (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client10).config()), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$lastValueFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lastValueFrom"])(_request((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client10), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest5), {
            uri: "/datasets",
            tag: null
        }));
    }
    constructor(client, httpRequest){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client10, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest5, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client10, client), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest5, httpRequest);
    }
}
function _modify(client, httpRequest, method, name, options) {
    return resourceGuard("dataset", client.config()), dataset(name), _request(client, httpRequest, {
        method,
        uri: "/datasets/".concat(name),
        body: options,
        tag: null
    });
}
var _client11 = /*#__PURE__*/ new WeakMap(), _httpRequest6 = /*#__PURE__*/ new WeakMap();
class ObservableProjectsClient {
    list(options) {
        resourceGuard("projects", (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client11).config());
        const uri = (options === null || options === void 0 ? void 0 : options.includeMembers) === !1 ? "/projects?includeMembers=false" : "/projects";
        return _request((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client11), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest6), {
            uri
        });
    }
    /**
   * Fetch a project by project ID
   *
   * @param projectId - ID of the project to fetch
   */ getById(projectId2) {
        return resourceGuard("projects", (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client11).config()), _request((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client11), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest6), {
            uri: "/projects/".concat(projectId2)
        });
    }
    constructor(client, httpRequest){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client11, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest6, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client11, client), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest6, httpRequest);
    }
}
var _client12 = /*#__PURE__*/ new WeakMap(), _httpRequest7 = /*#__PURE__*/ new WeakMap();
class ProjectsClient {
    list(options) {
        resourceGuard("projects", (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client12).config());
        const uri = (options === null || options === void 0 ? void 0 : options.includeMembers) === !1 ? "/projects?includeMembers=false" : "/projects";
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$lastValueFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lastValueFrom"])(_request((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client12), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest7), {
            uri
        }));
    }
    /**
   * Fetch a project by project ID
   *
   * @param projectId - ID of the project to fetch
   */ getById(projectId2) {
        return resourceGuard("projects", (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client12).config()), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$lastValueFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lastValueFrom"])(_request((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client12), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest7), {
            uri: "/projects/".concat(projectId2)
        }));
    }
    constructor(client, httpRequest){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client12, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest7, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client12, client), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest7, httpRequest);
    }
}
const generateReleaseId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$nanoid$2f$index$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["customAlphabet"])("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", 8), getDocumentVersionId = (publishedId, releaseId)=>releaseId ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$_chunks$2d$es$2f$resolveEditInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getVersionId"])(publishedId, releaseId) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$_chunks$2d$es$2f$resolveEditInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDraftId"])(publishedId);
function deriveDocumentVersionId(op, param) {
    let { releaseId, publishedId, document } = param;
    if (publishedId && document._id) {
        const versionId = getDocumentVersionId(publishedId, releaseId);
        return validateVersionIdMatch(versionId, document), versionId;
    }
    if (document._id) {
        const isDraft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$_chunks$2d$es$2f$resolveEditInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDraftId"])(document._id), isVersion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$_chunks$2d$es$2f$resolveEditInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isVersionId"])(document._id);
        if (!isDraft && !isVersion) throw new Error("`".concat(op, "()` requires a document with an `_id` that is a version or draft ID"));
        if (releaseId) {
            if (isDraft) throw new Error("`".concat(op, "()` was called with a document ID (`").concat(document._id, "`) that is a draft ID, but a release ID (`").concat(releaseId, "`) was also provided."));
            const builtVersionId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$_chunks$2d$es$2f$resolveEditInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getVersionFromId"])(document._id);
            if (builtVersionId !== releaseId) throw new Error("`".concat(op, "()` was called with a document ID (`").concat(document._id, "`) that is a version ID, but the release ID (`").concat(releaseId, "`) does not match the document's version ID (`").concat(builtVersionId, "`)."));
        }
        return document._id;
    }
    if (publishedId) return getDocumentVersionId(publishedId, releaseId);
    throw new Error("`".concat(op, "()` requires either a publishedId or a document with an `_id`"));
}
const getArgs = (releaseOrOptions, maybeOptions)=>{
    if (typeof releaseOrOptions == "object" && releaseOrOptions !== null && ("releaseId" in releaseOrOptions || "metadata" in releaseOrOptions)) {
        const { releaseId = generateReleaseId(), metadata = {} } = releaseOrOptions;
        return [
            releaseId,
            metadata,
            maybeOptions
        ];
    }
    return [
        generateReleaseId(),
        {},
        releaseOrOptions
    ];
}, createRelease = (releaseOrOptions, maybeOptions)=>{
    const [releaseId, metadata, options] = getArgs(releaseOrOptions, maybeOptions), finalMetadata = {
        ...metadata,
        releaseType: metadata.releaseType || "undecided"
    };
    return {
        action: {
            actionType: "sanity.action.release.create",
            releaseId,
            metadata: finalMetadata
        },
        options
    };
};
var _client13 = /*#__PURE__*/ new WeakMap(), _httpRequest8 = /*#__PURE__*/ new WeakMap();
class ObservableReleasesClient {
    /**
   * @public
   *
   * Retrieve a release by id.
   *
   * @category Releases
   *
   * @param params - Release action parameters:
   *   - `releaseId` - The id of the release to retrieve.
   * @param options - Additional query options including abort signal and query tag.
   * @returns An observable that resolves to the release document {@link ReleaseDocument}.
   *
   * @example Retrieving a release by id
   * ```ts
   * client.observable.releases.get({releaseId: 'my-release'}).pipe(
   *   tap((release) => console.log(release)),
   *   // {
   *   //   _id: '_.releases.my-release',
   *   //   name: 'my-release'
   *   //   _type: 'system.release',
   *   //   metadata: {releaseType: 'asap'},
   *   //   _createdAt: '2021-01-01T00:00:00.000Z',
   *   //   ...
   *   // }
   * ).subscribe()
   * ```
   */ get(param, options) {
        let { releaseId } = param;
        return _getDocument((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client13), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest8), "_.releases.".concat(releaseId), options);
    }
    create(releaseOrOptions, maybeOptions) {
        const { action, options } = createRelease(releaseOrOptions, maybeOptions), { releaseId, metadata } = action;
        return _action((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client13), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest8), action, options).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["map"])((actionResult)=>({
                ...actionResult,
                releaseId,
                metadata
            })));
    }
    /**
   * @public
   *
   * Edits an existing release, updating the metadata.
   *
   * @category Releases
   *
   * @param params - Release action parameters:
   *   - `releaseId` - The id of the release to edit.
   *   - `patch` - The patch operation to apply on the release metadata {@link PatchMutationOperation}.
   * @param options - Additional action options.
   * @returns An observable that resolves to the `transactionId`.
   */ edit(param, options) {
        let { releaseId, patch } = param;
        const editAction = {
            actionType: "sanity.action.release.edit",
            releaseId,
            patch
        };
        return _action((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client13), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest8), editAction, options);
    }
    /**
   * @public
   *
   * Publishes all documents in a release at once. For larger releases the effect of the publish
   * will be visible immediately when querying but the removal of the `versions.<releasesId>.*`
   * documents and creation of the corresponding published documents with the new content may
   * take some time.
   *
   * During this period both the source and target documents are locked and cannot be
   * modified through any other means.
   *
   * @category Releases
   *
   * @param params - Release action parameters:
   *   - `releaseId` - The id of the release to publish.
   * @param options - Additional action options.
   * @returns An observable that resolves to the `transactionId`.
   */ publish(param, options) {
        let { releaseId } = param;
        const publishAction = {
            actionType: "sanity.action.release.publish",
            releaseId
        };
        return _action((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client13), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest8), publishAction, options);
    }
    /**
   * @public
   *
   * An archive action removes an active release. The documents that comprise the release
   * are deleted and therefore no longer queryable.
   *
   * While the documents remain in retention the last version can still be accessed using document history endpoint.
   *
   * @category Releases
   *
   * @param params - Release action parameters:
   *   - `releaseId` - The id of the release to archive.
   * @param options - Additional action options.
   * @returns An observable that resolves to the `transactionId`.
   */ archive(param, options) {
        let { releaseId } = param;
        const archiveAction = {
            actionType: "sanity.action.release.archive",
            releaseId
        };
        return _action((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client13), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest8), archiveAction, options);
    }
    /**
   * @public
   *
   * An unarchive action restores an archived release and all documents
   * with the content they had just prior to archiving.
   *
   * @category Releases
   *
   * @param params - Release action parameters:
   *   - `releaseId` - The id of the release to unarchive.
   * @param options - Additional action options.
   * @returns An observable that resolves to the `transactionId`.
   */ unarchive(param, options) {
        let { releaseId } = param;
        const unarchiveAction = {
            actionType: "sanity.action.release.unarchive",
            releaseId
        };
        return _action((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client13), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest8), unarchiveAction, options);
    }
    /**
   * @public
   *
   * A schedule action queues a release for publishing at the given future time.
   * The release is locked such that no documents in the release can be modified and
   * no documents that it references can be deleted as this would make the publish fail.
   * At the given time, the same logic as for the publish action is triggered.
   *
   * @category Releases
   *
   * @param params - Release action parameters:
   *   - `releaseId` - The id of the release to schedule.
   *   - `publishAt` - The serialised date and time to publish the release. If the `publishAt` is in the past, the release will be published immediately.
   * @param options - Additional action options.
   * @returns An observable that resolves to the `transactionId`.
   */ schedule(param, options) {
        let { releaseId, publishAt } = param;
        const scheduleAction = {
            actionType: "sanity.action.release.schedule",
            releaseId,
            publishAt
        };
        return _action((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client13), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest8), scheduleAction, options);
    }
    /**
   * @public
   *
   * An unschedule action stops a release from being published.
   * The documents in the release are considered unlocked and can be edited again.
   * This may fail if another release is scheduled to be published after this one and
   * has a reference to a document created by this one.
   *
   * @category Releases
   *
   * @param params - Release action parameters:
   *   - `releaseId` - The id of the release to unschedule.
   * @param options - Additional action options.
   * @returns An observable that resolves to the `transactionId`.
   */ unschedule(param, options) {
        let { releaseId } = param;
        const unscheduleAction = {
            actionType: "sanity.action.release.unschedule",
            releaseId
        };
        return _action((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client13), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest8), unscheduleAction, options);
    }
    /**
   * @public
   *
   * A delete action removes a published or archived release.
   * The backing system document will be removed from the dataset.
   *
   * @category Releases
   *
   * @param params - Release action parameters:
   *   - `releaseId` - The id of the release to delete.
   * @param options - Additional action options.
   * @returns An observable that resolves to the `transactionId`.
   */ delete(param, options) {
        let { releaseId } = param;
        const deleteAction = {
            actionType: "sanity.action.release.delete",
            releaseId
        };
        return _action((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client13), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest8), deleteAction, options);
    }
    /**
   * @public
   *
   * Fetch the documents in a release by release id.
   *
   * @category Releases
   *
   * @param params - Release action parameters:
   *   - `releaseId` - The id of the release to fetch documents for.
   * @param options - Additional mutation options {@link BaseMutationOptions}.
   * @returns An observable that resolves to the documents in the release.
   */ fetchDocuments(param, options) {
        let { releaseId } = param;
        return _getReleaseDocuments((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client13), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest8), releaseId, options);
    }
    constructor(client, httpRequest){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client13, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest8, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client13, client), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest8, httpRequest);
    }
}
var _client14 = /*#__PURE__*/ new WeakMap(), _httpRequest9 = /*#__PURE__*/ new WeakMap();
class ReleasesClient {
    /**
   * @public
   *
   * Retrieve a release by id.
   *
   * @category Releases
   *
   * @param params - Release action parameters:
   *   - `releaseId` - The id of the release to retrieve.
   * @param options - Additional query options including abort signal and query tag.
   * @returns A promise that resolves to the release document {@link ReleaseDocument}.
   *
   * @example Retrieving a release by id
   * ```ts
   * const release = await client.releases.get({releaseId: 'my-release'})
   * console.log(release)
   * // {
   * //   _id: '_.releases.my-release',
   * //   name: 'my-release'
   * //   _type: 'system.release',
   * //   metadata: {releaseType: 'asap'},
   * //   _createdAt: '2021-01-01T00:00:00.000Z',
   * //   ...
   * // }
   * ```
   */ get(param, options) {
        let { releaseId } = param;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$lastValueFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lastValueFrom"])(_getDocument((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client14), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest9), "_.releases.".concat(releaseId), options));
    }
    async create(releaseOrOptions, maybeOptions) {
        const { action, options } = createRelease(releaseOrOptions, maybeOptions), { releaseId, metadata } = action;
        return {
            ...await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$lastValueFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lastValueFrom"])(_action((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client14), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest9), action, options)),
            releaseId,
            metadata
        };
    }
    /**
   * @public
   *
   * Edits an existing release, updating the metadata.
   *
   * @category Releases
   *
   * @param params - Release action parameters:
   *   - `releaseId` - The id of the release to edit.
   *   - `patch` - The patch operation to apply on the release metadata {@link PatchMutationOperation}.
   * @param options - Additional action options.
   * @returns A promise that resolves to the `transactionId`.
   */ edit(param, options) {
        let { releaseId, patch } = param;
        const editAction = {
            actionType: "sanity.action.release.edit",
            releaseId,
            patch
        };
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$lastValueFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lastValueFrom"])(_action((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client14), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest9), editAction, options));
    }
    /**
   * @public
   *
   * Publishes all documents in a release at once. For larger releases the effect of the publish
   * will be visible immediately when querying but the removal of the `versions.<releasesId>.*`
   * documents and creation of the corresponding published documents with the new content may
   * take some time.
   *
   * During this period both the source and target documents are locked and cannot be
   * modified through any other means.
   *
   * @category Releases
   *
   * @param params - Release action parameters:
   *   - `releaseId` - The id of the release to publish.
   * @param options - Additional action options.
   * @returns A promise that resolves to the `transactionId`.
   */ publish(param, options) {
        let { releaseId } = param;
        const publishAction = {
            actionType: "sanity.action.release.publish",
            releaseId
        };
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$lastValueFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lastValueFrom"])(_action((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client14), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest9), publishAction, options));
    }
    /**
   * @public
   *
   * An archive action removes an active release. The documents that comprise the release
   * are deleted and therefore no longer queryable.
   *
   * While the documents remain in retention the last version can still be accessed using document history endpoint.
   *
   * @category Releases
   *
   * @param params - Release action parameters:
   *   - `releaseId` - The id of the release to archive.
   * @param options - Additional action options.
   * @returns A promise that resolves to the `transactionId`.
   */ archive(param, options) {
        let { releaseId } = param;
        const archiveAction = {
            actionType: "sanity.action.release.archive",
            releaseId
        };
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$lastValueFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lastValueFrom"])(_action((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client14), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest9), archiveAction, options));
    }
    /**
   * @public
   *
   * An unarchive action restores an archived release and all documents
   * with the content they had just prior to archiving.
   *
   * @category Releases
   *
   * @param params - Release action parameters:
   *   - `releaseId` - The id of the release to unarchive.
   * @param options - Additional action options.
   * @returns A promise that resolves to the `transactionId`.
   */ unarchive(param, options) {
        let { releaseId } = param;
        const unarchiveAction = {
            actionType: "sanity.action.release.unarchive",
            releaseId
        };
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$lastValueFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lastValueFrom"])(_action((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client14), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest9), unarchiveAction, options));
    }
    /**
   * @public
   *
   * A schedule action queues a release for publishing at the given future time.
   * The release is locked such that no documents in the release can be modified and
   * no documents that it references can be deleted as this would make the publish fail.
   * At the given time, the same logic as for the publish action is triggered.
   *
   * @category Releases
   *
   * @param params - Release action parameters:
   *   - `releaseId` - The id of the release to schedule.
   *   - `publishAt` - The serialised date and time to publish the release. If the `publishAt` is in the past, the release will be published immediately.
   * @param options - Additional action options.
   * @returns A promise that resolves to the `transactionId`.
   */ schedule(param, options) {
        let { releaseId, publishAt } = param;
        const scheduleAction = {
            actionType: "sanity.action.release.schedule",
            releaseId,
            publishAt
        };
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$lastValueFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lastValueFrom"])(_action((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client14), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest9), scheduleAction, options));
    }
    /**
   * @public
   *
   * An unschedule action stops a release from being published.
   * The documents in the release are considered unlocked and can be edited again.
   * This may fail if another release is scheduled to be published after this one and
   * has a reference to a document created by this one.
   *
   * @category Releases
   *
   * @param params - Release action parameters:
   *   - `releaseId` - The id of the release to unschedule.
   * @param options - Additional action options.
   * @returns A promise that resolves to the `transactionId`.
   */ unschedule(param, options) {
        let { releaseId } = param;
        const unscheduleAction = {
            actionType: "sanity.action.release.unschedule",
            releaseId
        };
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$lastValueFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lastValueFrom"])(_action((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client14), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest9), unscheduleAction, options));
    }
    /**
   * @public
   *
   * A delete action removes a published or archived release.
   * The backing system document will be removed from the dataset.
   *
   * @category Releases
   *
   * @param params - Release action parameters:
   *   - `releaseId` - The id of the release to delete.
   * @param options - Additional action options.
   * @returns A promise that resolves to the `transactionId`.
   */ delete(param, options) {
        let { releaseId } = param;
        const deleteAction = {
            actionType: "sanity.action.release.delete",
            releaseId
        };
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$lastValueFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lastValueFrom"])(_action((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client14), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest9), deleteAction, options));
    }
    /**
   * @public
   *
   * Fetch the documents in a release by release id.
   *
   * @category Releases
   *
   * @param params - Release action parameters:
   *   - `releaseId` - The id of the release to fetch documents for.
   * @param options - Additional mutation options {@link BaseMutationOptions}.
   * @returns A promise that resolves to the documents in the release.
   */ fetchDocuments(param, options) {
        let { releaseId } = param;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$lastValueFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lastValueFrom"])(_getReleaseDocuments((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client14), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest9), releaseId, options));
    }
    constructor(client, httpRequest){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client14, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest9, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client14, client), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest9, httpRequest);
    }
}
var _client15 = /*#__PURE__*/ new WeakMap(), _httpRequest10 = /*#__PURE__*/ new WeakMap();
class ObservableUsersClient {
    /**
   * Fetch a user by user ID
   *
   * @param id - User ID of the user to fetch. If `me` is provided, a minimal response including the users role is returned.
   */ getById(id) {
        return _request((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client15), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest10), {
            uri: "/users/".concat(id)
        });
    }
    constructor(client, httpRequest){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client15, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest10, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client15, client), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest10, httpRequest);
    }
}
var _client16 = /*#__PURE__*/ new WeakMap(), _httpRequest11 = /*#__PURE__*/ new WeakMap();
class UsersClient {
    /**
   * Fetch a user by user ID
   *
   * @param id - User ID of the user to fetch. If `me` is provided, a minimal response including the users role is returned.
   */ getById(id) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$lastValueFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lastValueFrom"])(_request((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client16), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest11), {
            uri: "/users/".concat(id)
        }));
    }
    constructor(client, httpRequest){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client16, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest11, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client16, client), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest11, httpRequest);
    }
}
var /**
   * Private properties
   */ _clientConfig = /*#__PURE__*/ new WeakMap(), _httpRequest12 = /*#__PURE__*/ new WeakMap();
class ObservableSanityClient {
    /**
   * Clone the client - returns a new instance
   */ clone() {
        return new ObservableSanityClient((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest12), this.config());
    }
    config(newConfig) {
        if (newConfig === void 0) return {
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _clientConfig)
        };
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _clientConfig) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _clientConfig).allowReconfigure === !1) throw new Error("Existing client instance cannot be reconfigured - use `withConfig(newConfig)` to return a new client");
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _clientConfig, initConfig(newConfig, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _clientConfig) || {})), this;
    }
    /**
   * Clone the client with a new (partial) configuration.
   *
   * @param newConfig - New client configuration properties, shallowly merged with existing configuration
   */ withConfig(newConfig) {
        const thisConfig = this.config();
        return new ObservableSanityClient((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest12), {
            ...thisConfig,
            ...newConfig,
            stega: {
                ...thisConfig.stega || {},
                ...typeof (newConfig === null || newConfig === void 0 ? void 0 : newConfig.stega) == "boolean" ? {
                    enabled: newConfig.stega
                } : (newConfig === null || newConfig === void 0 ? void 0 : newConfig.stega) || {}
            }
        });
    }
    fetch(query, params, options) {
        return _fetch(this, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest12), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _clientConfig).stega, query, params, options);
    }
    /**
   * Fetch a single document with the given ID.
   *
   * @param id - Document ID to fetch
   * @param options - Request options
   */ getDocument(id, options) {
        return _getDocument(this, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest12), id, options);
    }
    /**
   * Fetch multiple documents in one request.
   * Should be used sparingly - performing a query is usually a better option.
   * The order/position of documents is preserved based on the original array of IDs.
   * If any of the documents are missing, they will be replaced by a `null` entry in the returned array
   *
   * @param ids - Document IDs to fetch
   * @param options - Request options
   */ getDocuments(ids, options) {
        return _getDocuments(this, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest12), ids, options);
    }
    create(document, options) {
        return _create(this, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest12), document, "create", options);
    }
    createIfNotExists(document, options) {
        return _createIfNotExists(this, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest12), document, options);
    }
    createOrReplace(document, options) {
        return _createOrReplace(this, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest12), document, options);
    }
    createVersion(param, options) {
        let { document, publishedId, releaseId, baseId, ifBaseRevisionId } = param;
        if (!document) return _createVersionFromBase(this, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest12), publishedId, baseId, releaseId, ifBaseRevisionId, options);
        const documentVersionId = deriveDocumentVersionId("createVersion", {
            document,
            publishedId,
            releaseId
        }), documentVersion = {
            ...document,
            _id: documentVersionId
        }, versionPublishedId = publishedId || (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$_chunks$2d$es$2f$resolveEditInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPublishedId"])(document._id);
        return _createVersion(this, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest12), documentVersion, versionPublishedId, options);
    }
    delete(selection, options) {
        return _delete(this, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest12), selection, options);
    }
    /**
   * @public
   *
   * Deletes the draft or release version of a document.
   *
   * @remarks
   * * Discarding a version with no `releaseId` will discard the draft version of the published document.
   * * If the draft or release version does not exist, any error will throw.
   *
   * @param params - Version action parameters:
   *   - `releaseId` - The ID of the release to discard the document from.
   *   - `publishedId` - The published ID of the document to discard.
   * @param purge - if `true` the document history is also discarded.
   * @param options - Additional action options.
   * @returns an observable that resolves to the `transactionId`.
   *
   * @example Discarding a release version of a document
   * ```ts
   * client.observable.discardVersion({publishedId: 'myDocument', releaseId: 'myRelease'})
   * // The document with the ID `versions.myRelease.myDocument` will be discarded.
   * ```
   *
   * @example Discarding a draft version of a document
   * ```ts
   * client.observable.discardVersion({publishedId: 'myDocument'})
   * // The document with the ID `drafts.myDocument` will be discarded.
   * ```
   */ discardVersion(param, purge, options) {
        let { releaseId, publishedId } = param;
        const documentVersionId = getDocumentVersionId(publishedId, releaseId);
        return _discardVersion(this, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest12), documentVersionId, purge, options);
    }
    replaceVersion(param, options) {
        let { document, publishedId, releaseId } = param;
        const documentVersionId = deriveDocumentVersionId("replaceVersion", {
            document,
            publishedId,
            releaseId
        }), documentVersion = {
            ...document,
            _id: documentVersionId
        };
        return _replaceVersion(this, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest12), documentVersion, options);
    }
    /**
   * @public
   *
   * Used to indicate when a document within a release should be unpublished when
   * the release is run.
   *
   * @remarks
   * * If the published document does not exist, an error will be thrown.
   *
   * @param params - Version action parameters:
   *   - `releaseId` - The ID of the release to unpublish the document from.
   *   - `publishedId` - The published ID of the document to unpublish.
   * @param options - Additional action options.
   * @returns an observable that resolves to the `transactionId`.
   *
   * @example Unpublishing a release version of a published document
   * ```ts
   * client.observable.unpublishVersion({publishedId: 'myDocument', releaseId: 'myRelease'})
   * // The document with the ID `versions.myRelease.myDocument` will be unpublished. when `myRelease` is run.
   * ```
   */ unpublishVersion(param, options) {
        let { releaseId, publishedId } = param;
        const versionId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$_chunks$2d$es$2f$resolveEditInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getVersionId"])(publishedId, releaseId);
        return _unpublishVersion(this, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest12), versionId, publishedId, options);
    }
    mutate(operations, options) {
        return _mutate(this, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest12), operations, options);
    }
    /**
   * Create a new buildable patch of operations to perform
   *
   * @param selection - Document ID, an array of document IDs, or an object with `query` and optional `params`, defining which document(s) to patch
   * @param operations - Optional object of patch operations to initialize the patch instance with
   * @returns Patch instance - call `.commit()` to perform the operations defined
   */ patch(selection, operations) {
        return new ObservablePatch(selection, operations, this);
    }
    /**
   * Create a new transaction of mutations
   *
   * @param operations - Optional array of mutation operations to initialize the transaction instance with
   */ transaction(operations) {
        return new ObservableTransaction(operations, this);
    }
    /**
   * Perform action operations against the configured dataset
   *
   * @param operations - Action operation(s) to execute
   * @param options - Action options
   */ action(operations, options) {
        return _action(this, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest12), operations, options);
    }
    /**
   * Perform an HTTP request against the Sanity API
   *
   * @param options - Request options
   */ request(options) {
        return _request(this, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest12), options);
    }
    /**
   * Get a Sanity API URL for the URI provided
   *
   * @param uri - URI/path to build URL for
   * @param canUseCdn - Whether or not to allow using the API CDN for this route
   */ getUrl(uri, canUseCdn) {
        return _getUrl(this, uri, canUseCdn);
    }
    /**
   * Get a Sanity API URL for the data operation and path provided
   *
   * @param operation - Data operation (eg `query`, `mutate`, `listen` or similar)
   * @param path - Path to append after the operation
   */ getDataUrl(operation, path) {
        return _getDataUrl(this, operation, path);
    }
    constructor(httpRequest, config = defaultConfig){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "assets", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "datasets", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "live", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "projects", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "users", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "agent", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "releases", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _clientConfig, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest12, {
            writable: true,
            value: void 0
        });
        /**
   * Instance properties
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "listen", _listen);
        this.config(config), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest12, httpRequest), this.assets = new ObservableAssetsClient(this, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest12)), this.datasets = new ObservableDatasetsClient(this, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest12)), this.live = new LiveClient(this), this.projects = new ObservableProjectsClient(this, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest12)), this.users = new ObservableUsersClient(this, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest12)), this.agent = {
            action: new ObservableAgentsActionClient(this, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest12))
        }, this.releases = new ObservableReleasesClient(this, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest12));
    }
}
var /**
   * Private properties
   */ _clientConfig1 = /*#__PURE__*/ new WeakMap(), _httpRequest13 = /*#__PURE__*/ new WeakMap();
class SanityClient {
    /**
   * Clone the client - returns a new instance
   */ clone() {
        return new SanityClient((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest13), this.config());
    }
    config(newConfig) {
        if (newConfig === void 0) return {
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _clientConfig1)
        };
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _clientConfig1) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _clientConfig1).allowReconfigure === !1) throw new Error("Existing client instance cannot be reconfigured - use `withConfig(newConfig)` to return a new client");
        return this.observable && this.observable.config(newConfig), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _clientConfig1, initConfig(newConfig, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _clientConfig1) || {})), this;
    }
    /**
   * Clone the client with a new (partial) configuration.
   *
   * @param newConfig - New client configuration properties, shallowly merged with existing configuration
   */ withConfig(newConfig) {
        const thisConfig = this.config();
        return new SanityClient((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest13), {
            ...thisConfig,
            ...newConfig,
            stega: {
                ...thisConfig.stega || {},
                ...typeof (newConfig === null || newConfig === void 0 ? void 0 : newConfig.stega) == "boolean" ? {
                    enabled: newConfig.stega
                } : (newConfig === null || newConfig === void 0 ? void 0 : newConfig.stega) || {}
            }
        });
    }
    fetch(query, params, options) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$lastValueFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lastValueFrom"])(_fetch(this, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest13), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _clientConfig1).stega, query, params, options));
    }
    /**
   * Fetch a single document with the given ID.
   *
   * @param id - Document ID to fetch
   * @param options - Request options
   */ getDocument(id, options) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$lastValueFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lastValueFrom"])(_getDocument(this, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest13), id, options));
    }
    /**
   * Fetch multiple documents in one request.
   * Should be used sparingly - performing a query is usually a better option.
   * The order/position of documents is preserved based on the original array of IDs.
   * If any of the documents are missing, they will be replaced by a `null` entry in the returned array
   *
   * @param ids - Document IDs to fetch
   * @param options - Request options
   */ getDocuments(ids, options) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$lastValueFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lastValueFrom"])(_getDocuments(this, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest13), ids, options));
    }
    create(document, options) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$lastValueFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lastValueFrom"])(_create(this, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest13), document, "create", options));
    }
    createIfNotExists(document, options) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$lastValueFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lastValueFrom"])(_createIfNotExists(this, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest13), document, options));
    }
    createOrReplace(document, options) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$lastValueFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lastValueFrom"])(_createOrReplace(this, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest13), document, options));
    }
    createVersion(param, options) {
        let { document, publishedId, releaseId, baseId, ifBaseRevisionId } = param;
        if (!document) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$firstValueFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["firstValueFrom"])(_createVersionFromBase(this, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest13), publishedId, baseId, releaseId, ifBaseRevisionId, options));
        const documentVersionId = deriveDocumentVersionId("createVersion", {
            document,
            publishedId,
            releaseId
        }), documentVersion = {
            ...document,
            _id: documentVersionId
        }, versionPublishedId = publishedId || (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$_chunks$2d$es$2f$resolveEditInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPublishedId"])(document._id);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$firstValueFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["firstValueFrom"])(_createVersion(this, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest13), documentVersion, versionPublishedId, options));
    }
    delete(selection, options) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$lastValueFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lastValueFrom"])(_delete(this, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest13), selection, options));
    }
    /**
   * @public
   *
   * Deletes the draft or release version of a document.
   *
   * @remarks
   * * Discarding a version with no `releaseId` will discard the draft version of the published document.
   * * If the draft or release version does not exist, any error will throw.
   *
   * @param params - Version action parameters:
   *   - `releaseId` - The ID of the release to discard the document from.
   *   - `publishedId` - The published ID of the document to discard.
   * @param purge - if `true` the document history is also discarded.
   * @param options - Additional action options.
   * @returns a promise that resolves to the `transactionId`.
   *
   * @example Discarding a release version of a document
   * ```ts
   * client.discardVersion({publishedId: 'myDocument', releaseId: 'myRelease'})
   * // The document with the ID `versions.myRelease.myDocument` will be discarded.
   * ```
   *
   * @example Discarding a draft version of a document
   * ```ts
   * client.discardVersion({publishedId: 'myDocument'})
   * // The document with the ID `drafts.myDocument` will be discarded.
   * ```
   */ discardVersion(param, purge, options) {
        let { releaseId, publishedId } = param;
        const documentVersionId = getDocumentVersionId(publishedId, releaseId);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$lastValueFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lastValueFrom"])(_discardVersion(this, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest13), documentVersionId, purge, options));
    }
    replaceVersion(param, options) {
        let { document, publishedId, releaseId } = param;
        const documentVersionId = deriveDocumentVersionId("replaceVersion", {
            document,
            publishedId,
            releaseId
        }), documentVersion = {
            ...document,
            _id: documentVersionId
        };
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$firstValueFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["firstValueFrom"])(_replaceVersion(this, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest13), documentVersion, options));
    }
    /**
   * @public
   *
   * Used to indicate when a document within a release should be unpublished when
   * the release is run.
   *
   * @remarks
   * * If the published document does not exist, an error will be thrown.
   *
   * @param params - Version action parameters:
   *   - `releaseId` - The ID of the release to unpublish the document from.
   *   - `publishedId` - The published ID of the document to unpublish.
   * @param options - Additional action options.
   * @returns a promise that resolves to the `transactionId`.
   *
   * @example Unpublishing a release version of a published document
   * ```ts
   * await client.unpublishVersion({publishedId: 'myDocument', releaseId: 'myRelease'})
   * // The document with the ID `versions.myRelease.myDocument` will be unpublished. when `myRelease` is run.
   * ```
   */ unpublishVersion(param, options) {
        let { releaseId, publishedId } = param;
        const versionId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$_chunks$2d$es$2f$resolveEditInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getVersionId"])(publishedId, releaseId);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$lastValueFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lastValueFrom"])(_unpublishVersion(this, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest13), versionId, publishedId, options));
    }
    mutate(operations, options) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$lastValueFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lastValueFrom"])(_mutate(this, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest13), operations, options));
    }
    /**
   * Create a new buildable patch of operations to perform
   *
   * @param selection - Document ID, an array of document IDs, or an object with `query` and optional `params`, defining which document(s) to patch
   * @param operations - Optional object of patch operations to initialize the patch instance with
   * @returns Patch instance - call `.commit()` to perform the operations defined
   */ patch(documentId, operations) {
        return new Patch(documentId, operations, this);
    }
    /**
   * Create a new transaction of mutations
   *
   * @param operations - Optional array of mutation operations to initialize the transaction instance with
   */ transaction(operations) {
        return new Transaction(operations, this);
    }
    /**
   * Perform action operations against the configured dataset
   * Returns a promise that resolves to the transaction result
   *
   * @param operations - Action operation(s) to execute
   * @param options - Action options
   */ action(operations, options) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$lastValueFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lastValueFrom"])(_action(this, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest13), operations, options));
    }
    /**
   * Perform a request against the Sanity API
   * NOTE: Only use this for Sanity API endpoints, not for your own APIs!
   *
   * @param options - Request options
   * @returns Promise resolving to the response body
   */ request(options) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$lastValueFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lastValueFrom"])(_request(this, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest13), options));
    }
    /**
   * Perform an HTTP request a `/data` sub-endpoint
   * NOTE: Considered internal, thus marked as deprecated. Use `request` instead.
   *
   * @deprecated - Use `request()` or your own HTTP library instead
   * @param endpoint - Endpoint to hit (mutate, query etc)
   * @param body - Request body
   * @param options - Request options
   * @internal
   */ dataRequest(endpoint, body, options) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$lastValueFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lastValueFrom"])(_dataRequest(this, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest13), endpoint, body, options));
    }
    /**
   * Get a Sanity API URL for the URI provided
   *
   * @param uri - URI/path to build URL for
   * @param canUseCdn - Whether or not to allow using the API CDN for this route
   */ getUrl(uri, canUseCdn) {
        return _getUrl(this, uri, canUseCdn);
    }
    /**
   * Get a Sanity API URL for the data operation and path provided
   *
   * @param operation - Data operation (eg `query`, `mutate`, `listen` or similar)
   * @param path - Path to append after the operation
   */ getDataUrl(operation, path) {
        return _getDataUrl(this, operation, path);
    }
    constructor(httpRequest, config = defaultConfig){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "assets", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "datasets", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "live", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "projects", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "users", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "agent", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "releases", void 0);
        /**
   * Observable version of the Sanity client, with the same configuration as the promise-based one
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "observable", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _clientConfig1, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest13, {
            writable: true,
            value: void 0
        });
        /**
   * Instance properties
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "listen", _listen);
        this.config(config), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest13, httpRequest), this.assets = new AssetsClient(this, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest13)), this.datasets = new DatasetsClient(this, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest13)), this.live = new LiveClient(this), this.projects = new ProjectsClient(this, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest13)), this.users = new UsersClient(this, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest13)), this.agent = {
            action: new AgentActionsClient(this, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest13))
        }, this.releases = new ReleasesClient(this, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _httpRequest13)), this.observable = new ObservableSanityClient(httpRequest, config);
    }
}
function defineCreateClientExports(envMiddleware2, ClassConstructor) {
    return {
        requester: defineHttpRequest(envMiddleware2),
        createClient: (config)=>{
            const clientRequester = defineHttpRequest(envMiddleware2, {
                ignoreWarnings: config.ignoreWarnings
            });
            return new ClassConstructor((options, requester2)=>(requester2 || clientRequester)({
                    maxRedirects: 0,
                    maxRetries: config.maxRetries,
                    retryDelay: config.retryDelay,
                    ...options
                }), config);
        }
    };
}
function defineDeprecatedCreateClient(createClient2) {
    return function(config) {
        return printNoDefaultExport(), createClient2(config);
    };
}
var envMiddleware = [];
const exp = defineCreateClientExports(envMiddleware, SanityClient), requester = exp.requester, createClient = exp.createClient, deprecatedCreateClient = defineDeprecatedCreateClient(createClient);
;
 //# sourceMappingURL=index.browser.js.map
}),
"[project]/frontend/node_modules/@sanity/image-url/lib/browser/image-url.umd.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

(function(global, factory) {
    ("TURBOPACK compile-time truthy", 1) ? module.exports = factory() : "TURBOPACK unreachable";
})(/*TURBOPACK member replacement*/ __turbopack_context__.e, function() {
    function _extends() {
        _extends = Object.assign || function(target) {
            for(var i = 1; i < arguments.length; i++){
                var source = arguments[i];
                for(var key in source){
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key];
                    }
                }
            }
            return target;
        };
        return _extends.apply(this, arguments);
    }
    function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
    }
    function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;
        for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
        return arr2;
    }
    function _createForOfIteratorHelperLoose(o, allowArrayLike) {
        var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
        if (it) return (it = it.call(o)).next.bind(it);
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            return function() {
                if (i >= o.length) return {
                    done: true
                };
                return {
                    done: false,
                    value: o[i++]
                };
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var example = 'image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg';
    function parseAssetId(ref) {
        var _ref$split = ref.split('-'), id = _ref$split[1], dimensionString = _ref$split[2], format = _ref$split[3];
        if (!id || !dimensionString || !format) {
            throw new Error("Malformed asset _ref '" + ref + "'. Expected an id like \"" + example + "\".");
        }
        var _dimensionString$spli = dimensionString.split('x'), imgWidthStr = _dimensionString$spli[0], imgHeightStr = _dimensionString$spli[1];
        var width = +imgWidthStr;
        var height = +imgHeightStr;
        var isValidAssetId = isFinite(width) && isFinite(height);
        if (!isValidAssetId) {
            throw new Error("Malformed asset _ref '" + ref + "'. Expected an id like \"" + example + "\".");
        }
        return {
            id: id,
            width: width,
            height: height,
            format: format
        };
    }
    var isRef = function isRef(src) {
        var source = src;
        return source ? typeof source._ref === 'string' : false;
    };
    var isAsset = function isAsset(src) {
        var source = src;
        return source ? typeof source._id === 'string' : false;
    };
    var isAssetStub = function isAssetStub(src) {
        var source = src;
        return source && source.asset ? typeof source.asset.url === 'string' : false;
    };
    // Convert an asset-id, asset or image to an image record suitable for processing
    // eslint-disable-next-line complexity
    function parseSource(source) {
        if (!source) {
            return null;
        }
        var image;
        if (typeof source === 'string' && isUrl(source)) {
            // Someone passed an existing image url?
            image = {
                asset: {
                    _ref: urlToId(source)
                }
            };
        } else if (typeof source === 'string') {
            // Just an asset id
            image = {
                asset: {
                    _ref: source
                }
            };
        } else if (isRef(source)) {
            // We just got passed an asset directly
            image = {
                asset: source
            };
        } else if (isAsset(source)) {
            // If we were passed an image asset document
            image = {
                asset: {
                    _ref: source._id || ''
                }
            };
        } else if (isAssetStub(source)) {
            // If we were passed a partial asset (`url`, but no `_id`)
            image = {
                asset: {
                    _ref: urlToId(source.asset.url)
                }
            };
        } else if (typeof source.asset === 'object') {
            // Probably an actual image with materialized asset
            image = _extends({}, source);
        } else {
            // We got something that does not look like an image, or it is an image
            // that currently isn't sporting an asset.
            return null;
        }
        var img = source;
        if (img.crop) {
            image.crop = img.crop;
        }
        if (img.hotspot) {
            image.hotspot = img.hotspot;
        }
        return applyDefaults(image);
    }
    function isUrl(url) {
        return /^https?:\/\//.test("" + url);
    }
    function urlToId(url) {
        var parts = url.split('/').slice(-1);
        return ("image-" + parts[0]).replace(/\.([a-z]+)$/, '-$1');
    }
    // Mock crop and hotspot if image lacks it
    function applyDefaults(image) {
        if (image.crop && image.hotspot) {
            return image;
        }
        // We need to pad in default values for crop or hotspot
        var result = _extends({}, image);
        if (!result.crop) {
            result.crop = {
                left: 0,
                top: 0,
                bottom: 0,
                right: 0
            };
        }
        if (!result.hotspot) {
            result.hotspot = {
                x: 0.5,
                y: 0.5,
                height: 1.0,
                width: 1.0
            };
        }
        return result;
    }
    var SPEC_NAME_TO_URL_NAME_MAPPINGS = [
        [
            'width',
            'w'
        ],
        [
            'height',
            'h'
        ],
        [
            'format',
            'fm'
        ],
        [
            'download',
            'dl'
        ],
        [
            'blur',
            'blur'
        ],
        [
            'sharpen',
            'sharp'
        ],
        [
            'invert',
            'invert'
        ],
        [
            'orientation',
            'or'
        ],
        [
            'minHeight',
            'min-h'
        ],
        [
            'maxHeight',
            'max-h'
        ],
        [
            'minWidth',
            'min-w'
        ],
        [
            'maxWidth',
            'max-w'
        ],
        [
            'quality',
            'q'
        ],
        [
            'fit',
            'fit'
        ],
        [
            'crop',
            'crop'
        ],
        [
            'saturation',
            'sat'
        ],
        [
            'auto',
            'auto'
        ],
        [
            'dpr',
            'dpr'
        ],
        [
            'pad',
            'pad'
        ],
        [
            'frame',
            'frame'
        ]
    ];
    function urlForImage(options) {
        var spec = _extends({}, options || {});
        var source = spec.source;
        delete spec.source;
        var image = parseSource(source);
        if (!image) {
            throw new Error("Unable to resolve image URL from source (" + JSON.stringify(source) + ")");
        }
        var id = image.asset._ref || image.asset._id || '';
        var asset = parseAssetId(id);
        // Compute crop rect in terms of pixel coordinates in the raw source image
        var cropLeft = Math.round(image.crop.left * asset.width);
        var cropTop = Math.round(image.crop.top * asset.height);
        var crop = {
            left: cropLeft,
            top: cropTop,
            width: Math.round(asset.width - image.crop.right * asset.width - cropLeft),
            height: Math.round(asset.height - image.crop.bottom * asset.height - cropTop)
        };
        // Compute hot spot rect in terms of pixel coordinates
        var hotSpotVerticalRadius = image.hotspot.height * asset.height / 2;
        var hotSpotHorizontalRadius = image.hotspot.width * asset.width / 2;
        var hotSpotCenterX = image.hotspot.x * asset.width;
        var hotSpotCenterY = image.hotspot.y * asset.height;
        var hotspot = {
            left: hotSpotCenterX - hotSpotHorizontalRadius,
            top: hotSpotCenterY - hotSpotVerticalRadius,
            right: hotSpotCenterX + hotSpotHorizontalRadius,
            bottom: hotSpotCenterY + hotSpotVerticalRadius
        };
        // If irrelevant, or if we are requested to: don't perform crop/fit based on
        // the crop/hotspot.
        if (!(spec.rect || spec.focalPoint || spec.ignoreImageParams || spec.crop)) {
            spec = _extends({}, spec, fit({
                crop: crop,
                hotspot: hotspot
            }, spec));
        }
        return specToImageUrl(_extends({}, spec, {
            asset: asset
        }));
    }
    // eslint-disable-next-line complexity
    function specToImageUrl(spec) {
        var cdnUrl = (spec.baseUrl || 'https://cdn.sanity.io').replace(/\/+$/, '');
        var vanityStub = spec.vanityName ? "/" + spec.vanityName : '';
        var filename = spec.asset.id + "-" + spec.asset.width + "x" + spec.asset.height + "." + spec.asset.format + vanityStub;
        var baseUrl = cdnUrl + "/images/" + spec.projectId + "/" + spec.dataset + "/" + filename;
        var params = [];
        if (spec.rect) {
            // Only bother url with a crop if it actually crops anything
            var _spec$rect = spec.rect, left = _spec$rect.left, top = _spec$rect.top, width = _spec$rect.width, height = _spec$rect.height;
            var isEffectiveCrop = left !== 0 || top !== 0 || height !== spec.asset.height || width !== spec.asset.width;
            if (isEffectiveCrop) {
                params.push("rect=" + left + "," + top + "," + width + "," + height);
            }
        }
        if (spec.bg) {
            params.push("bg=" + spec.bg);
        }
        if (spec.focalPoint) {
            params.push("fp-x=" + spec.focalPoint.x);
            params.push("fp-y=" + spec.focalPoint.y);
        }
        var flip = [
            spec.flipHorizontal && 'h',
            spec.flipVertical && 'v'
        ].filter(Boolean).join('');
        if (flip) {
            params.push("flip=" + flip);
        }
        // Map from spec name to url param name, and allow using the actual param name as an alternative
        SPEC_NAME_TO_URL_NAME_MAPPINGS.forEach(function(mapping) {
            var specName = mapping[0], param = mapping[1];
            if (typeof spec[specName] !== 'undefined') {
                params.push(param + "=" + encodeURIComponent(spec[specName]));
            } else if (typeof spec[param] !== 'undefined') {
                params.push(param + "=" + encodeURIComponent(spec[param]));
            }
        });
        if (params.length === 0) {
            return baseUrl;
        }
        return baseUrl + "?" + params.join('&');
    }
    function fit(source, spec) {
        var cropRect;
        var imgWidth = spec.width;
        var imgHeight = spec.height;
        // If we are not constraining the aspect ratio, we'll just use the whole crop
        if (!(imgWidth && imgHeight)) {
            return {
                width: imgWidth,
                height: imgHeight,
                rect: source.crop
            };
        }
        var crop = source.crop;
        var hotspot = source.hotspot;
        // If we are here, that means aspect ratio is locked and fitting will be a bit harder
        var desiredAspectRatio = imgWidth / imgHeight;
        var cropAspectRatio = crop.width / crop.height;
        if (cropAspectRatio > desiredAspectRatio) {
            // The crop is wider than the desired aspect ratio. That means we are cutting from the sides
            var height = Math.round(crop.height);
            var width = Math.round(height * desiredAspectRatio);
            var top = Math.max(0, Math.round(crop.top));
            // Center output horizontally over hotspot
            var hotspotXCenter = Math.round((hotspot.right - hotspot.left) / 2 + hotspot.left);
            var left = Math.max(0, Math.round(hotspotXCenter - width / 2));
            // Keep output within crop
            if (left < crop.left) {
                left = crop.left;
            } else if (left + width > crop.left + crop.width) {
                left = crop.left + crop.width - width;
            }
            cropRect = {
                left: left,
                top: top,
                width: width,
                height: height
            };
        } else {
            // The crop is taller than the desired ratio, we are cutting from top and bottom
            var _width = crop.width;
            var _height = Math.round(_width / desiredAspectRatio);
            var _left = Math.max(0, Math.round(crop.left));
            // Center output vertically over hotspot
            var hotspotYCenter = Math.round((hotspot.bottom - hotspot.top) / 2 + hotspot.top);
            var _top = Math.max(0, Math.round(hotspotYCenter - _height / 2));
            // Keep output rect within crop
            if (_top < crop.top) {
                _top = crop.top;
            } else if (_top + _height > crop.top + crop.height) {
                _top = crop.top + crop.height - _height;
            }
            cropRect = {
                left: _left,
                top: _top,
                width: _width,
                height: _height
            };
        }
        return {
            width: imgWidth,
            height: imgHeight,
            rect: cropRect
        };
    }
    var validFits = [
        'clip',
        'crop',
        'fill',
        'fillmax',
        'max',
        'scale',
        'min'
    ];
    var validCrops = [
        'top',
        'bottom',
        'left',
        'right',
        'center',
        'focalpoint',
        'entropy'
    ];
    var validAutoModes = [
        'format'
    ];
    function isSanityModernClientLike(client) {
        return client && 'config' in client ? typeof client.config === 'function' : false;
    }
    function isSanityClientLike(client) {
        return client && 'clientConfig' in client ? typeof client.clientConfig === 'object' : false;
    }
    function rewriteSpecName(key) {
        var specs = SPEC_NAME_TO_URL_NAME_MAPPINGS;
        for(var _iterator = _createForOfIteratorHelperLoose(specs), _step; !(_step = _iterator()).done;){
            var entry = _step.value;
            var specName = entry[0], param = entry[1];
            if (key === specName || key === param) {
                return specName;
            }
        }
        return key;
    }
    function urlBuilder(options) {
        // Did we get a modernish client?
        if (isSanityModernClientLike(options)) {
            // Inherit config from client
            var _options$config = options.config(), apiUrl = _options$config.apiHost, projectId = _options$config.projectId, dataset = _options$config.dataset;
            var apiHost = apiUrl || 'https://api.sanity.io';
            return new ImageUrlBuilder(null, {
                baseUrl: apiHost.replace(/^https:\/\/api\./, 'https://cdn.'),
                projectId: projectId,
                dataset: dataset
            });
        }
        // Did we get a SanityClient?
        if (isSanityClientLike(options)) {
            // Inherit config from client
            var _options$clientConfig = options.clientConfig, _apiUrl = _options$clientConfig.apiHost, _projectId = _options$clientConfig.projectId, _dataset = _options$clientConfig.dataset;
            var _apiHost = _apiUrl || 'https://api.sanity.io';
            return new ImageUrlBuilder(null, {
                baseUrl: _apiHost.replace(/^https:\/\/api\./, 'https://cdn.'),
                projectId: _projectId,
                dataset: _dataset
            });
        }
        // Or just accept the options as given
        return new ImageUrlBuilder(null, options || {});
    }
    var ImageUrlBuilder = /*#__PURE__*/ function() {
        function ImageUrlBuilder(parent, options) {
            this.options = void 0;
            this.options = parent ? _extends({}, parent.options || {}, options || {}) // Merge parent options
             : _extends({}, options || {}); // Copy options
        }
        var _proto = ImageUrlBuilder.prototype;
        _proto.withOptions = function withOptions(options) {
            var baseUrl = options.baseUrl || this.options.baseUrl;
            var newOptions = {
                baseUrl: baseUrl
            };
            for(var key in options){
                if (options.hasOwnProperty(key)) {
                    var specKey = rewriteSpecName(key);
                    newOptions[specKey] = options[key];
                }
            }
            return new ImageUrlBuilder(this, _extends({
                baseUrl: baseUrl
            }, newOptions));
        };
        _proto.image = function image(source) {
            return this.withOptions({
                source: source
            });
        };
        _proto.dataset = function dataset(_dataset2) {
            return this.withOptions({
                dataset: _dataset2
            });
        };
        _proto.projectId = function projectId(_projectId2) {
            return this.withOptions({
                projectId: _projectId2
            });
        };
        _proto.bg = function bg(_bg) {
            return this.withOptions({
                bg: _bg
            });
        };
        _proto.dpr = function dpr(_dpr) {
            // A DPR of 1 is the default - so only include it if we have a different value
            return this.withOptions(_dpr && _dpr !== 1 ? {
                dpr: _dpr
            } : {});
        };
        _proto.width = function width(_width) {
            return this.withOptions({
                width: _width
            });
        };
        _proto.height = function height(_height) {
            return this.withOptions({
                height: _height
            });
        };
        _proto.focalPoint = function focalPoint(x, y) {
            return this.withOptions({
                focalPoint: {
                    x: x,
                    y: y
                }
            });
        };
        _proto.maxWidth = function maxWidth(_maxWidth) {
            return this.withOptions({
                maxWidth: _maxWidth
            });
        };
        _proto.minWidth = function minWidth(_minWidth) {
            return this.withOptions({
                minWidth: _minWidth
            });
        };
        _proto.maxHeight = function maxHeight(_maxHeight) {
            return this.withOptions({
                maxHeight: _maxHeight
            });
        };
        _proto.minHeight = function minHeight(_minHeight) {
            return this.withOptions({
                minHeight: _minHeight
            });
        };
        _proto.size = function size(width, height) {
            return this.withOptions({
                width: width,
                height: height
            });
        };
        _proto.blur = function blur(_blur) {
            return this.withOptions({
                blur: _blur
            });
        };
        _proto.sharpen = function sharpen(_sharpen) {
            return this.withOptions({
                sharpen: _sharpen
            });
        };
        _proto.rect = function rect(left, top, width, height) {
            return this.withOptions({
                rect: {
                    left: left,
                    top: top,
                    width: width,
                    height: height
                }
            });
        };
        _proto.format = function format(_format) {
            return this.withOptions({
                format: _format
            });
        };
        _proto.invert = function invert(_invert) {
            return this.withOptions({
                invert: _invert
            });
        };
        _proto.orientation = function orientation(_orientation) {
            return this.withOptions({
                orientation: _orientation
            });
        };
        _proto.quality = function quality(_quality) {
            return this.withOptions({
                quality: _quality
            });
        };
        _proto.forceDownload = function forceDownload(download) {
            return this.withOptions({
                download: download
            });
        };
        _proto.flipHorizontal = function flipHorizontal() {
            return this.withOptions({
                flipHorizontal: true
            });
        };
        _proto.flipVertical = function flipVertical() {
            return this.withOptions({
                flipVertical: true
            });
        };
        _proto.ignoreImageParams = function ignoreImageParams() {
            return this.withOptions({
                ignoreImageParams: true
            });
        };
        _proto.fit = function fit(value) {
            if (validFits.indexOf(value) === -1) {
                throw new Error("Invalid fit mode \"" + value + "\"");
            }
            return this.withOptions({
                fit: value
            });
        };
        _proto.crop = function crop(value) {
            if (validCrops.indexOf(value) === -1) {
                throw new Error("Invalid crop mode \"" + value + "\"");
            }
            return this.withOptions({
                crop: value
            });
        };
        _proto.saturation = function saturation(_saturation) {
            return this.withOptions({
                saturation: _saturation
            });
        };
        _proto.auto = function auto(value) {
            if (validAutoModes.indexOf(value) === -1) {
                throw new Error("Invalid auto mode \"" + value + "\"");
            }
            return this.withOptions({
                auto: value
            });
        };
        _proto.pad = function pad(_pad) {
            return this.withOptions({
                pad: _pad
            });
        };
        _proto.vanityName = function vanityName(value) {
            return this.withOptions({
                vanityName: value
            });
        };
        _proto.frame = function frame(_frame) {
            if (_frame !== 1) {
                throw new Error("Invalid frame value \"" + _frame + "\"");
            }
            return this.withOptions({
                frame: _frame
            });
        };
        _proto.url = function url() {
            return urlForImage(this.options);
        };
        _proto.toString = function toString() {
            return this.url();
        };
        return ImageUrlBuilder;
    }();
    return urlBuilder;
}); //# sourceMappingURL=image-url.umd.js.map
}),
]);

//# sourceMappingURL=9e883_3b1b5580._.js.map