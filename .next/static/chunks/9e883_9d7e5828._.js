(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/frontend/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        "object" === typeof node && null !== node && node.$$typeof === REACT_ELEMENT_TYPE && node._store && (node._store.validated = 1);
    }
    var React = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/frontend/node_modules/next/dist/shared/lib/router/utils/querystring.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    assign: null,
    searchParamsToUrlQuery: null,
    urlQueryToSearchParams: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    assign: function() {
        return assign;
    },
    searchParamsToUrlQuery: function() {
        return searchParamsToUrlQuery;
    },
    urlQueryToSearchParams: function() {
        return urlQueryToSearchParams;
    }
});
function searchParamsToUrlQuery(searchParams) {
    const query = {};
    for (const [key, value] of searchParams.entries()){
        const existing = query[key];
        if (typeof existing === 'undefined') {
            query[key] = value;
        } else if (Array.isArray(existing)) {
            existing.push(value);
        } else {
            query[key] = [
                existing,
                value
            ];
        }
    }
    return query;
}
function stringifyUrlQueryParam(param) {
    if (typeof param === 'string') {
        return param;
    }
    if (typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
        return String(param);
    } else {
        return '';
    }
}
function urlQueryToSearchParams(query) {
    const searchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(query)){
        if (Array.isArray(value)) {
            for (const item of value){
                searchParams.append(key, stringifyUrlQueryParam(item));
            }
        } else {
            searchParams.set(key, stringifyUrlQueryParam(value));
        }
    }
    return searchParams;
}
function assign(target) {
    for(var _len = arguments.length, searchParamsList = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        searchParamsList[_key - 1] = arguments[_key];
    }
    for (const searchParams of searchParamsList){
        for (const key of searchParams.keys()){
            target.delete(key);
        }
        for (const [key, value] of searchParams.entries()){
            target.append(key, value);
        }
    }
    return target;
} //# sourceMappingURL=querystring.js.map
}),
"[project]/frontend/node_modules/next/dist/shared/lib/router/utils/format-url.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    formatUrl: null,
    formatWithValidation: null,
    urlObjectKeys: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    formatUrl: function() {
        return formatUrl;
    },
    formatWithValidation: function() {
        return formatWithValidation;
    },
    urlObjectKeys: function() {
        return urlObjectKeys;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/frontend/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _querystring = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/frontend/node_modules/next/dist/shared/lib/router/utils/querystring.js [app-client] (ecmascript)"));
const slashedProtocols = /https?|ftp|gopher|file/;
function formatUrl(urlObj) {
    let { auth, hostname } = urlObj;
    let protocol = urlObj.protocol || '';
    let pathname = urlObj.pathname || '';
    let hash = urlObj.hash || '';
    let query = urlObj.query || '';
    let host = false;
    auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';
    if (urlObj.host) {
        host = auth + urlObj.host;
    } else if (hostname) {
        host = auth + (~hostname.indexOf(':') ? "[" + hostname + "]" : hostname);
        if (urlObj.port) {
            host += ':' + urlObj.port;
        }
    }
    if (query && typeof query === 'object') {
        query = String(_querystring.urlQueryToSearchParams(query));
    }
    let search = urlObj.search || query && "?" + query || '';
    if (protocol && !protocol.endsWith(':')) protocol += ':';
    if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
        host = '//' + (host || '');
        if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
    } else if (!host) {
        host = '';
    }
    if (hash && hash[0] !== '#') hash = '#' + hash;
    if (search && search[0] !== '?') search = '?' + search;
    pathname = pathname.replace(/[?#]/g, encodeURIComponent);
    search = search.replace('#', '%23');
    return "" + protocol + host + pathname + search + hash;
}
const urlObjectKeys = [
    'auth',
    'hash',
    'host',
    'hostname',
    'href',
    'path',
    'pathname',
    'port',
    'protocol',
    'query',
    'search',
    'slashes'
];
function formatWithValidation(url) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (url !== null && typeof url === 'object') {
            Object.keys(url).forEach((key)=>{
                if (!urlObjectKeys.includes(key)) {
                    console.warn("Unknown key passed via urlObject into url.format: " + key);
                }
            });
        }
    }
    return formatUrl(url);
} //# sourceMappingURL=format-url.js.map
}),
"[project]/frontend/node_modules/next/dist/client/use-merged-ref.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useMergedRef", {
    enumerable: true,
    get: function() {
        return useMergedRef;
    }
});
const _react = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
function useMergedRef(refA, refB) {
    const cleanupA = (0, _react.useRef)(null);
    const cleanupB = (0, _react.useRef)(null);
    // NOTE: In theory, we could skip the wrapping if only one of the refs is non-null.
    // (this happens often if the user doesn't pass a ref to Link/Form/Image)
    // But this can cause us to leak a cleanup-ref into user code (e.g. via `<Link legacyBehavior>`),
    // and the user might pass that ref into ref-merging library that doesn't support cleanup refs
    // (because it hasn't been updated for React 19)
    // which can then cause things to blow up, because a cleanup-returning ref gets called with `null`.
    // So in practice, it's safer to be defensive and always wrap the ref, even on React 19.
    return (0, _react.useCallback)((current)=>{
        if (current === null) {
            const cleanupFnA = cleanupA.current;
            if (cleanupFnA) {
                cleanupA.current = null;
                cleanupFnA();
            }
            const cleanupFnB = cleanupB.current;
            if (cleanupFnB) {
                cleanupB.current = null;
                cleanupFnB();
            }
        } else {
            if (refA) {
                cleanupA.current = applyRef(refA, current);
            }
            if (refB) {
                cleanupB.current = applyRef(refB, current);
            }
        }
    }, [
        refA,
        refB
    ]);
}
function applyRef(refA, current) {
    if (typeof refA === 'function') {
        const cleanup = refA(current);
        if (typeof cleanup === 'function') {
            return cleanup;
        } else {
            return ()=>refA(null);
        }
    } else {
        refA.current = current;
        return ()=>{
            refA.current = null;
        };
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=use-merged-ref.js.map
}),
"[project]/frontend/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DecodeError: null,
    MiddlewareNotFoundError: null,
    MissingStaticPage: null,
    NormalizeError: null,
    PageNotFoundError: null,
    SP: null,
    ST: null,
    WEB_VITALS: null,
    execOnce: null,
    getDisplayName: null,
    getLocationOrigin: null,
    getURL: null,
    isAbsoluteUrl: null,
    isResSent: null,
    loadGetInitialProps: null,
    normalizeRepeatedSlashes: null,
    stringifyError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DecodeError: function() {
        return DecodeError;
    },
    MiddlewareNotFoundError: function() {
        return MiddlewareNotFoundError;
    },
    MissingStaticPage: function() {
        return MissingStaticPage;
    },
    NormalizeError: function() {
        return NormalizeError;
    },
    PageNotFoundError: function() {
        return PageNotFoundError;
    },
    SP: function() {
        return SP;
    },
    ST: function() {
        return ST;
    },
    WEB_VITALS: function() {
        return WEB_VITALS;
    },
    execOnce: function() {
        return execOnce;
    },
    getDisplayName: function() {
        return getDisplayName;
    },
    getLocationOrigin: function() {
        return getLocationOrigin;
    },
    getURL: function() {
        return getURL;
    },
    isAbsoluteUrl: function() {
        return isAbsoluteUrl;
    },
    isResSent: function() {
        return isResSent;
    },
    loadGetInitialProps: function() {
        return loadGetInitialProps;
    },
    normalizeRepeatedSlashes: function() {
        return normalizeRepeatedSlashes;
    },
    stringifyError: function() {
        return stringifyError;
    }
});
const WEB_VITALS = [
    'CLS',
    'FCP',
    'FID',
    'INP',
    'LCP',
    'TTFB'
];
function execOnce(fn) {
    let used = false;
    let result;
    return function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        if (!used) {
            used = true;
            result = fn(...args);
        }
        return result;
    };
}
// Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
// Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
const ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;
const isAbsoluteUrl = (url)=>ABSOLUTE_URL_REGEX.test(url);
function getLocationOrigin() {
    const { protocol, hostname, port } = window.location;
    return protocol + "//" + hostname + (port ? ':' + port : '');
}
function getURL() {
    const { href } = window.location;
    const origin = getLocationOrigin();
    return href.substring(origin.length);
}
function getDisplayName(Component) {
    return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}
function isResSent(res) {
    return res.finished || res.headersSent;
}
function normalizeRepeatedSlashes(url) {
    const urlParts = url.split('?');
    const urlNoQuery = urlParts[0];
    return urlNoQuery // first we replace any non-encoded backslashes with forward
    // then normalize repeated forward slashes
    .replace(/\\/g, '/').replace(/\/\/+/g, '/') + (urlParts[1] ? "?" + urlParts.slice(1).join('?') : '');
}
async function loadGetInitialProps(App, ctx) {
    if ("TURBOPACK compile-time truthy", 1) {
        var _App_prototype;
        if ((_App_prototype = App.prototype) == null ? void 0 : _App_prototype.getInitialProps) {
            const message = '"' + getDisplayName(App) + '.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.';
            throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
                value: "E394",
                enumerable: false,
                configurable: true
            });
        }
    }
    // when called from _app `ctx` is nested in `ctx`
    const res = ctx.res || ctx.ctx && ctx.ctx.res;
    if (!App.getInitialProps) {
        if (ctx.ctx && ctx.Component) {
            // @ts-ignore pageProps default
            return {
                pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
            };
        }
        return {};
    }
    const props = await App.getInitialProps(ctx);
    if (res && isResSent(res)) {
        return props;
    }
    if (!props) {
        const message = '"' + getDisplayName(App) + '.getInitialProps()" should resolve to an object. But found "' + props + '" instead.';
        throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: false,
            configurable: true
        });
    }
    if ("TURBOPACK compile-time truthy", 1) {
        if (Object.keys(props).length === 0 && !ctx.ctx) {
            console.warn("" + getDisplayName(App) + " returned an empty object from `getInitialProps`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps");
        }
    }
    return props;
}
const SP = typeof performance !== 'undefined';
const ST = SP && [
    'mark',
    'measure',
    'getEntriesByName'
].every((method)=>typeof performance[method] === 'function');
class DecodeError extends Error {
}
class NormalizeError extends Error {
}
class PageNotFoundError extends Error {
    constructor(page){
        super();
        this.code = 'ENOENT';
        this.name = 'PageNotFoundError';
        this.message = "Cannot find module for page: " + page;
    }
}
class MissingStaticPage extends Error {
    constructor(page, message){
        super();
        this.message = "Failed to load static file for page: " + page + " " + message;
    }
}
class MiddlewareNotFoundError extends Error {
    constructor(){
        super();
        this.code = 'ENOENT';
        this.message = "Cannot find the middleware module";
    }
}
function stringifyError(error) {
    return JSON.stringify({
        message: error.message,
        stack: error.stack
    });
} //# sourceMappingURL=utils.js.map
}),
"[project]/frontend/node_modules/next/dist/shared/lib/router/utils/is-local-url.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isLocalURL", {
    enumerable: true,
    get: function() {
        return isLocalURL;
    }
});
const _utils = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)");
const _hasbasepath = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/client/has-base-path.js [app-client] (ecmascript)");
function isLocalURL(url) {
    // prevent a hydration mismatch on href for url with anchor refs
    if (!(0, _utils.isAbsoluteUrl)(url)) return true;
    try {
        // absolute urls can be local if they are on the same origin
        const locationOrigin = (0, _utils.getLocationOrigin)();
        const resolved = new URL(url, locationOrigin);
        return resolved.origin === locationOrigin && (0, _hasbasepath.hasBasePath)(resolved.pathname);
    } catch (_) {
        return false;
    }
} //# sourceMappingURL=is-local-url.js.map
}),
"[project]/frontend/node_modules/next/dist/shared/lib/utils/error-once.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "errorOnce", {
    enumerable: true,
    get: function() {
        return errorOnce;
    }
});
let errorOnce = (_)=>{};
if ("TURBOPACK compile-time truthy", 1) {
    const errors = new Set();
    errorOnce = (msg)=>{
        if (!errors.has(msg)) {
            console.error(msg);
        }
        errors.add(msg);
    };
} //# sourceMappingURL=error-once.js.map
}),
"[project]/frontend/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    useLinkStatus: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    /**
 * A React component that extends the HTML `<a>` element to provide
 * [prefetching](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#2-prefetching)
 * and client-side navigation. This is the primary way to navigate between routes in Next.js.
 *
 * @remarks
 * - Prefetching is only enabled in production.
 *
 * @see https://nextjs.org/docs/app/api-reference/components/link
 */ default: function() {
        return LinkComponent;
    },
    useLinkStatus: function() {
        return useLinkStatus;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/frontend/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _formaturl = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/shared/lib/router/utils/format-url.js [app-client] (ecmascript)");
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
const _usemergedref = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/client/use-merged-ref.js [app-client] (ecmascript)");
const _utils = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)");
const _addbasepath = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/client/add-base-path.js [app-client] (ecmascript)");
const _warnonce = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/shared/lib/utils/warn-once.js [app-client] (ecmascript)");
const _links = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/client/components/links.js [app-client] (ecmascript)");
const _islocalurl = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/shared/lib/router/utils/is-local-url.js [app-client] (ecmascript)");
const _approuterinstance = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/client/components/app-router-instance.js [app-client] (ecmascript)");
const _erroronce = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/shared/lib/utils/error-once.js [app-client] (ecmascript)");
const _segmentcache = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/client/components/segment-cache.js [app-client] (ecmascript)");
function isModifiedEvent(event) {
    const eventTarget = event.currentTarget;
    const target = eventTarget.getAttribute('target');
    return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
    event.nativeEvent && event.nativeEvent.which === 2;
}
function linkClicked(e, href, as, linkInstanceRef, replace, scroll, onNavigate) {
    const { nodeName } = e.currentTarget;
    // anchors inside an svg have a lowercase nodeName
    const isAnchorNodeName = nodeName.toUpperCase() === 'A';
    if (isAnchorNodeName && isModifiedEvent(e) || e.currentTarget.hasAttribute('download')) {
        // ignore click for browser’s default behavior
        return;
    }
    if (!(0, _islocalurl.isLocalURL)(href)) {
        if (replace) {
            // browser default behavior does not replace the history state
            // so we need to do it manually
            e.preventDefault();
            location.replace(href);
        }
        // ignore click for browser’s default behavior
        return;
    }
    e.preventDefault();
    if (onNavigate) {
        let isDefaultPrevented = false;
        onNavigate({
            preventDefault: ()=>{
                isDefaultPrevented = true;
            }
        });
        if (isDefaultPrevented) {
            return;
        }
    }
    _react.default.startTransition(()=>{
        (0, _approuterinstance.dispatchNavigateAction)(as || href, replace ? 'replace' : 'push', scroll != null ? scroll : true, linkInstanceRef.current);
    });
}
function formatStringOrUrl(urlObjOrString) {
    if (typeof urlObjOrString === 'string') {
        return urlObjOrString;
    }
    return (0, _formaturl.formatUrl)(urlObjOrString);
}
function LinkComponent(props) {
    const [linkStatus, setOptimisticLinkStatus] = (0, _react.useOptimistic)(_links.IDLE_LINK_STATUS);
    let children;
    const linkInstanceRef = (0, _react.useRef)(null);
    const { href: hrefProp, as: asProp, children: childrenProp, prefetch: prefetchProp = null, passHref, replace, shallow, scroll, onClick, onMouseEnter: onMouseEnterProp, onTouchStart: onTouchStartProp, legacyBehavior = false, onNavigate, ref: forwardedRef, unstable_dynamicOnHover, ...restProps } = props;
    children = childrenProp;
    if (legacyBehavior && (typeof children === 'string' || typeof children === 'number')) {
        children = /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
            children: children
        });
    }
    const router = _react.default.useContext(_approutercontextsharedruntime.AppRouterContext);
    const prefetchEnabled = prefetchProp !== false;
    const fetchStrategy = prefetchProp !== false ? getFetchStrategyFromPrefetchProp(prefetchProp) : _segmentcache.FetchStrategy.PPR;
    if ("TURBOPACK compile-time truthy", 1) {
        function createPropError(args) {
            return Object.defineProperty(new Error("Failed prop type: The prop `" + args.key + "` expects a " + args.expected + " in `<Link>`, but got `" + args.actual + "` instead." + (typeof window !== 'undefined' ? "\nOpen your browser's console to view the Component stack trace." : '')), "__NEXT_ERROR_CODE", {
                value: "E319",
                enumerable: false,
                configurable: true
            });
        }
        // TypeScript trick for type-guarding:
        const requiredPropsGuard = {
            href: true
        };
        const requiredProps = Object.keys(requiredPropsGuard);
        requiredProps.forEach((key)=>{
            if (key === 'href') {
                if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
                    throw createPropError({
                        key,
                        expected: '`string` or `object`',
                        actual: props[key] === null ? 'null' : typeof props[key]
                    });
                }
            } else {
                // TypeScript trick for type-guarding:
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                const _ = key;
            }
        });
        // TypeScript trick for type-guarding:
        const optionalPropsGuard = {
            as: true,
            replace: true,
            scroll: true,
            shallow: true,
            passHref: true,
            prefetch: true,
            unstable_dynamicOnHover: true,
            onClick: true,
            onMouseEnter: true,
            onTouchStart: true,
            legacyBehavior: true,
            onNavigate: true
        };
        const optionalProps = Object.keys(optionalPropsGuard);
        optionalProps.forEach((key)=>{
            const valType = typeof props[key];
            if (key === 'as') {
                if (props[key] && valType !== 'string' && valType !== 'object') {
                    throw createPropError({
                        key,
                        expected: '`string` or `object`',
                        actual: valType
                    });
                }
            } else if (key === 'onClick' || key === 'onMouseEnter' || key === 'onTouchStart' || key === 'onNavigate') {
                if (props[key] && valType !== 'function') {
                    throw createPropError({
                        key,
                        expected: '`function`',
                        actual: valType
                    });
                }
            } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'legacyBehavior' || key === 'unstable_dynamicOnHover') {
                if (props[key] != null && valType !== 'boolean') {
                    throw createPropError({
                        key,
                        expected: '`boolean`',
                        actual: valType
                    });
                }
            } else if (key === 'prefetch') {
                if (props[key] != null && valType !== 'boolean' && props[key] !== 'auto' && props[key] !== 'unstable_forceStale') {
                    throw createPropError({
                        key,
                        expected: '`boolean | "auto" | "unstable_forceStale"`',
                        actual: valType
                    });
                }
            } else {
                // TypeScript trick for type-guarding:
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                const _ = key;
            }
        });
    }
    if ("TURBOPACK compile-time truthy", 1) {
        if (props.locale) {
            (0, _warnonce.warnOnce)('The `locale` prop is not supported in `next/link` while using the `app` router. Read more about app router internalization: https://nextjs.org/docs/app/building-your-application/routing/internationalization');
        }
        if (!asProp) {
            let href;
            if (typeof hrefProp === 'string') {
                href = hrefProp;
            } else if (typeof hrefProp === 'object' && typeof hrefProp.pathname === 'string') {
                href = hrefProp.pathname;
            }
            if (href) {
                const hasDynamicSegment = href.split('/').some((segment)=>segment.startsWith('[') && segment.endsWith(']'));
                if (hasDynamicSegment) {
                    throw Object.defineProperty(new Error("Dynamic href `" + href + "` found in <Link> while using the `/app` router, this is not supported. Read more: https://nextjs.org/docs/messages/app-dir-dynamic-href"), "__NEXT_ERROR_CODE", {
                        value: "E267",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
        }
    }
    const { href, as } = _react.default.useMemo({
        "LinkComponent.useMemo": ()=>{
            const resolvedHref = formatStringOrUrl(hrefProp);
            return {
                href: resolvedHref,
                as: asProp ? formatStringOrUrl(asProp) : resolvedHref
            };
        }
    }["LinkComponent.useMemo"], [
        hrefProp,
        asProp
    ]);
    // This will return the first child, if multiple are provided it will throw an error
    let child;
    if (legacyBehavior) {
        if ("TURBOPACK compile-time truthy", 1) {
            if (onClick) {
                console.warn('"onClick" was passed to <Link> with `href` of `' + hrefProp + '` but "legacyBehavior" was set. The legacy behavior requires onClick be set on the child of next/link');
            }
            if (onMouseEnterProp) {
                console.warn('"onMouseEnter" was passed to <Link> with `href` of `' + hrefProp + '` but "legacyBehavior" was set. The legacy behavior requires onMouseEnter be set on the child of next/link');
            }
            try {
                child = _react.default.Children.only(children);
            } catch (err) {
                if (!children) {
                    throw Object.defineProperty(new Error("No children were passed to <Link> with `href` of `" + hrefProp + "` but one child is required https://nextjs.org/docs/messages/link-no-children"), "__NEXT_ERROR_CODE", {
                        value: "E320",
                        enumerable: false,
                        configurable: true
                    });
                }
                throw Object.defineProperty(new Error("Multiple children were passed to <Link> with `href` of `" + hrefProp + "` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children" + (typeof window !== 'undefined' ? " \nOpen your browser's console to view the Component stack trace." : '')), "__NEXT_ERROR_CODE", {
                    value: "E266",
                    enumerable: false,
                    configurable: true
                });
            }
        } else //TURBOPACK unreachable
        ;
    } else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ((children == null ? void 0 : children.type) === 'a') {
                throw Object.defineProperty(new Error('Invalid <Link> with <a> child. Please remove <a> or use <Link legacyBehavior>.\nLearn more: https://nextjs.org/docs/messages/invalid-new-link-with-extra-anchor'), "__NEXT_ERROR_CODE", {
                    value: "E209",
                    enumerable: false,
                    configurable: true
                });
            }
        }
    }
    const childRef = legacyBehavior ? child && typeof child === 'object' && child.ref : forwardedRef;
    // Use a callback ref to attach an IntersectionObserver to the anchor tag on
    // mount. In the future we will also use this to keep track of all the
    // currently mounted <Link> instances, e.g. so we can re-prefetch them after
    // a revalidation or refresh.
    const observeLinkVisibilityOnMount = _react.default.useCallback({
        "LinkComponent.useCallback[observeLinkVisibilityOnMount]": (element)=>{
            if (router !== null) {
                linkInstanceRef.current = (0, _links.mountLinkInstance)(element, href, router, fetchStrategy, prefetchEnabled, setOptimisticLinkStatus);
            }
            return ({
                "LinkComponent.useCallback[observeLinkVisibilityOnMount]": ()=>{
                    if (linkInstanceRef.current) {
                        (0, _links.unmountLinkForCurrentNavigation)(linkInstanceRef.current);
                        linkInstanceRef.current = null;
                    }
                    (0, _links.unmountPrefetchableInstance)(element);
                }
            })["LinkComponent.useCallback[observeLinkVisibilityOnMount]"];
        }
    }["LinkComponent.useCallback[observeLinkVisibilityOnMount]"], [
        prefetchEnabled,
        href,
        router,
        fetchStrategy,
        setOptimisticLinkStatus
    ]);
    const mergedRef = (0, _usemergedref.useMergedRef)(observeLinkVisibilityOnMount, childRef);
    const childProps = {
        ref: mergedRef,
        onClick (e) {
            if ("TURBOPACK compile-time truthy", 1) {
                if (!e) {
                    throw Object.defineProperty(new Error('Component rendered inside next/link has to pass click event to "onClick" prop.'), "__NEXT_ERROR_CODE", {
                        value: "E312",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
            if (!legacyBehavior && typeof onClick === 'function') {
                onClick(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onClick === 'function') {
                child.props.onClick(e);
            }
            if (!router) {
                return;
            }
            if (e.defaultPrevented) {
                return;
            }
            linkClicked(e, href, as, linkInstanceRef, replace, scroll, onNavigate);
        },
        onMouseEnter (e) {
            if (!legacyBehavior && typeof onMouseEnterProp === 'function') {
                onMouseEnterProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onMouseEnter === 'function') {
                child.props.onMouseEnter(e);
            }
            if (!router) {
                return;
            }
            if ("TURBOPACK compile-time truthy", 1) {
                return;
            }
            //TURBOPACK unreachable
            ;
            const upgradeToDynamicPrefetch = undefined;
        },
        onTouchStart: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : function onTouchStart(e) {
            if (!legacyBehavior && typeof onTouchStartProp === 'function') {
                onTouchStartProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onTouchStart === 'function') {
                child.props.onTouchStart(e);
            }
            if (!router) {
                return;
            }
            if (!prefetchEnabled) {
                return;
            }
            const upgradeToDynamicPrefetch = unstable_dynamicOnHover === true;
            (0, _links.onNavigationIntent)(e.currentTarget, upgradeToDynamicPrefetch);
        }
    };
    // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user.
    // If the url is absolute, we can bypass the logic to prepend the basePath.
    if ((0, _utils.isAbsoluteUrl)(as)) {
        childProps.href = as;
    } else if (!legacyBehavior || passHref || child.type === 'a' && !('href' in child.props)) {
        childProps.href = (0, _addbasepath.addBasePath)(as);
    }
    let link;
    if (legacyBehavior) {
        if ("TURBOPACK compile-time truthy", 1) {
            (0, _erroronce.errorOnce)('`legacyBehavior` is deprecated and will be removed in a future ' + 'release. A codemod is available to upgrade your components:\n\n' + 'npx @next/codemod@latest new-link .\n\n' + 'Learn more: https://nextjs.org/docs/app/building-your-application/upgrading/codemods#remove-a-tags-from-link-components');
        }
        link = /*#__PURE__*/ _react.default.cloneElement(child, childProps);
    } else {
        link = /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
            ...restProps,
            ...childProps,
            children: children
        });
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(LinkStatusContext.Provider, {
        value: linkStatus,
        children: link
    });
}
const LinkStatusContext = /*#__PURE__*/ (0, _react.createContext)(_links.IDLE_LINK_STATUS);
const useLinkStatus = ()=>{
    return (0, _react.useContext)(LinkStatusContext);
};
function getFetchStrategyFromPrefetchProp(prefetchProp) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        return prefetchProp === null || prefetchProp === 'auto' ? _segmentcache.FetchStrategy.PPR : // (although invalid values should've been filtered out by prop validation in dev)
        _segmentcache.FetchStrategy.Full;
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=link.js.map
}),
"[project]/frontend/node_modules/react-icons/lib/iconContext.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DefaultContext",
    ()=>DefaultContext,
    "IconContext",
    ()=>IconContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var DefaultContext = {
    color: undefined,
    size: undefined,
    className: undefined,
    style: undefined,
    attr: undefined
};
var IconContext = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createContext && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createContext(DefaultContext);
}),
"[project]/frontend/node_modules/react-icons/lib/iconBase.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GenIcon",
    ()=>GenIcon,
    "IconBase",
    ()=>IconBase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-icons/lib/iconContext.mjs [app-client] (ecmascript)");
var _excluded = [
    "attr",
    "size",
    "title"
];
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
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    for(var key in source){
        if (Object.prototype.hasOwnProperty.call(source, key)) {
            if (excluded.indexOf(key) >= 0) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _extends() {
    _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable";
    return _extends.apply(this, arguments);
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
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != typeof i) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
;
;
function Tree2Element(tree) {
    return tree && tree.map((node, i)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(node.tag, _objectSpread({
            key: i
        }, node.attr), Tree2Element(node.child)));
}
function GenIcon(data) {
    return (props)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(IconBase, _extends({
            attr: _objectSpread({}, data.attr)
        }, props), Tree2Element(data.child));
}
function IconBase(props) {
    var elem = (conf)=>{
        var { attr, size, title } = props, svgProps = _objectWithoutProperties(props, _excluded);
        var computedSize = size || conf.size || "1em";
        var className;
        if (conf.className) className = conf.className;
        if (props.className) className = (className ? className + " " : "") + props.className;
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("svg", _extends({
            stroke: "currentColor",
            fill: "currentColor",
            strokeWidth: "0"
        }, conf.attr, attr, svgProps, {
            className: className,
            style: _objectSpread(_objectSpread({
                color: props.color || conf.color
            }, conf.style), props.style),
            height: computedSize,
            width: computedSize,
            xmlns: "http://www.w3.org/2000/svg"
        }), title && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("title", null, title), props.children);
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconContext"] !== undefined ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconContext"].Consumer, null, (conf)=>elem(conf)) : elem(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DefaultContext"]);
}
}),
"[project]/frontend/node_modules/react-icons/fi/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// THIS FILE IS AUTO GENERATED
__turbopack_context__.s([
    "FiActivity",
    ()=>FiActivity,
    "FiAirplay",
    ()=>FiAirplay,
    "FiAlertCircle",
    ()=>FiAlertCircle,
    "FiAlertOctagon",
    ()=>FiAlertOctagon,
    "FiAlertTriangle",
    ()=>FiAlertTriangle,
    "FiAlignCenter",
    ()=>FiAlignCenter,
    "FiAlignJustify",
    ()=>FiAlignJustify,
    "FiAlignLeft",
    ()=>FiAlignLeft,
    "FiAlignRight",
    ()=>FiAlignRight,
    "FiAnchor",
    ()=>FiAnchor,
    "FiAperture",
    ()=>FiAperture,
    "FiArchive",
    ()=>FiArchive,
    "FiArrowDown",
    ()=>FiArrowDown,
    "FiArrowDownCircle",
    ()=>FiArrowDownCircle,
    "FiArrowDownLeft",
    ()=>FiArrowDownLeft,
    "FiArrowDownRight",
    ()=>FiArrowDownRight,
    "FiArrowLeft",
    ()=>FiArrowLeft,
    "FiArrowLeftCircle",
    ()=>FiArrowLeftCircle,
    "FiArrowRight",
    ()=>FiArrowRight,
    "FiArrowRightCircle",
    ()=>FiArrowRightCircle,
    "FiArrowUp",
    ()=>FiArrowUp,
    "FiArrowUpCircle",
    ()=>FiArrowUpCircle,
    "FiArrowUpLeft",
    ()=>FiArrowUpLeft,
    "FiArrowUpRight",
    ()=>FiArrowUpRight,
    "FiAtSign",
    ()=>FiAtSign,
    "FiAward",
    ()=>FiAward,
    "FiBarChart",
    ()=>FiBarChart,
    "FiBarChart2",
    ()=>FiBarChart2,
    "FiBattery",
    ()=>FiBattery,
    "FiBatteryCharging",
    ()=>FiBatteryCharging,
    "FiBell",
    ()=>FiBell,
    "FiBellOff",
    ()=>FiBellOff,
    "FiBluetooth",
    ()=>FiBluetooth,
    "FiBold",
    ()=>FiBold,
    "FiBook",
    ()=>FiBook,
    "FiBookOpen",
    ()=>FiBookOpen,
    "FiBookmark",
    ()=>FiBookmark,
    "FiBox",
    ()=>FiBox,
    "FiBriefcase",
    ()=>FiBriefcase,
    "FiCalendar",
    ()=>FiCalendar,
    "FiCamera",
    ()=>FiCamera,
    "FiCameraOff",
    ()=>FiCameraOff,
    "FiCast",
    ()=>FiCast,
    "FiCheck",
    ()=>FiCheck,
    "FiCheckCircle",
    ()=>FiCheckCircle,
    "FiCheckSquare",
    ()=>FiCheckSquare,
    "FiChevronDown",
    ()=>FiChevronDown,
    "FiChevronLeft",
    ()=>FiChevronLeft,
    "FiChevronRight",
    ()=>FiChevronRight,
    "FiChevronUp",
    ()=>FiChevronUp,
    "FiChevronsDown",
    ()=>FiChevronsDown,
    "FiChevronsLeft",
    ()=>FiChevronsLeft,
    "FiChevronsRight",
    ()=>FiChevronsRight,
    "FiChevronsUp",
    ()=>FiChevronsUp,
    "FiChrome",
    ()=>FiChrome,
    "FiCircle",
    ()=>FiCircle,
    "FiClipboard",
    ()=>FiClipboard,
    "FiClock",
    ()=>FiClock,
    "FiCloud",
    ()=>FiCloud,
    "FiCloudDrizzle",
    ()=>FiCloudDrizzle,
    "FiCloudLightning",
    ()=>FiCloudLightning,
    "FiCloudOff",
    ()=>FiCloudOff,
    "FiCloudRain",
    ()=>FiCloudRain,
    "FiCloudSnow",
    ()=>FiCloudSnow,
    "FiCode",
    ()=>FiCode,
    "FiCodepen",
    ()=>FiCodepen,
    "FiCodesandbox",
    ()=>FiCodesandbox,
    "FiCoffee",
    ()=>FiCoffee,
    "FiColumns",
    ()=>FiColumns,
    "FiCommand",
    ()=>FiCommand,
    "FiCompass",
    ()=>FiCompass,
    "FiCopy",
    ()=>FiCopy,
    "FiCornerDownLeft",
    ()=>FiCornerDownLeft,
    "FiCornerDownRight",
    ()=>FiCornerDownRight,
    "FiCornerLeftDown",
    ()=>FiCornerLeftDown,
    "FiCornerLeftUp",
    ()=>FiCornerLeftUp,
    "FiCornerRightDown",
    ()=>FiCornerRightDown,
    "FiCornerRightUp",
    ()=>FiCornerRightUp,
    "FiCornerUpLeft",
    ()=>FiCornerUpLeft,
    "FiCornerUpRight",
    ()=>FiCornerUpRight,
    "FiCpu",
    ()=>FiCpu,
    "FiCreditCard",
    ()=>FiCreditCard,
    "FiCrop",
    ()=>FiCrop,
    "FiCrosshair",
    ()=>FiCrosshair,
    "FiDatabase",
    ()=>FiDatabase,
    "FiDelete",
    ()=>FiDelete,
    "FiDisc",
    ()=>FiDisc,
    "FiDivide",
    ()=>FiDivide,
    "FiDivideCircle",
    ()=>FiDivideCircle,
    "FiDivideSquare",
    ()=>FiDivideSquare,
    "FiDollarSign",
    ()=>FiDollarSign,
    "FiDownload",
    ()=>FiDownload,
    "FiDownloadCloud",
    ()=>FiDownloadCloud,
    "FiDribbble",
    ()=>FiDribbble,
    "FiDroplet",
    ()=>FiDroplet,
    "FiEdit",
    ()=>FiEdit,
    "FiEdit2",
    ()=>FiEdit2,
    "FiEdit3",
    ()=>FiEdit3,
    "FiExternalLink",
    ()=>FiExternalLink,
    "FiEye",
    ()=>FiEye,
    "FiEyeOff",
    ()=>FiEyeOff,
    "FiFacebook",
    ()=>FiFacebook,
    "FiFastForward",
    ()=>FiFastForward,
    "FiFeather",
    ()=>FiFeather,
    "FiFigma",
    ()=>FiFigma,
    "FiFile",
    ()=>FiFile,
    "FiFileMinus",
    ()=>FiFileMinus,
    "FiFilePlus",
    ()=>FiFilePlus,
    "FiFileText",
    ()=>FiFileText,
    "FiFilm",
    ()=>FiFilm,
    "FiFilter",
    ()=>FiFilter,
    "FiFlag",
    ()=>FiFlag,
    "FiFolder",
    ()=>FiFolder,
    "FiFolderMinus",
    ()=>FiFolderMinus,
    "FiFolderPlus",
    ()=>FiFolderPlus,
    "FiFramer",
    ()=>FiFramer,
    "FiFrown",
    ()=>FiFrown,
    "FiGift",
    ()=>FiGift,
    "FiGitBranch",
    ()=>FiGitBranch,
    "FiGitCommit",
    ()=>FiGitCommit,
    "FiGitMerge",
    ()=>FiGitMerge,
    "FiGitPullRequest",
    ()=>FiGitPullRequest,
    "FiGithub",
    ()=>FiGithub,
    "FiGitlab",
    ()=>FiGitlab,
    "FiGlobe",
    ()=>FiGlobe,
    "FiGrid",
    ()=>FiGrid,
    "FiHardDrive",
    ()=>FiHardDrive,
    "FiHash",
    ()=>FiHash,
    "FiHeadphones",
    ()=>FiHeadphones,
    "FiHeart",
    ()=>FiHeart,
    "FiHelpCircle",
    ()=>FiHelpCircle,
    "FiHexagon",
    ()=>FiHexagon,
    "FiHome",
    ()=>FiHome,
    "FiImage",
    ()=>FiImage,
    "FiInbox",
    ()=>FiInbox,
    "FiInfo",
    ()=>FiInfo,
    "FiInstagram",
    ()=>FiInstagram,
    "FiItalic",
    ()=>FiItalic,
    "FiKey",
    ()=>FiKey,
    "FiLayers",
    ()=>FiLayers,
    "FiLayout",
    ()=>FiLayout,
    "FiLifeBuoy",
    ()=>FiLifeBuoy,
    "FiLink",
    ()=>FiLink,
    "FiLink2",
    ()=>FiLink2,
    "FiLinkedin",
    ()=>FiLinkedin,
    "FiList",
    ()=>FiList,
    "FiLoader",
    ()=>FiLoader,
    "FiLock",
    ()=>FiLock,
    "FiLogIn",
    ()=>FiLogIn,
    "FiLogOut",
    ()=>FiLogOut,
    "FiMail",
    ()=>FiMail,
    "FiMap",
    ()=>FiMap,
    "FiMapPin",
    ()=>FiMapPin,
    "FiMaximize",
    ()=>FiMaximize,
    "FiMaximize2",
    ()=>FiMaximize2,
    "FiMeh",
    ()=>FiMeh,
    "FiMenu",
    ()=>FiMenu,
    "FiMessageCircle",
    ()=>FiMessageCircle,
    "FiMessageSquare",
    ()=>FiMessageSquare,
    "FiMic",
    ()=>FiMic,
    "FiMicOff",
    ()=>FiMicOff,
    "FiMinimize",
    ()=>FiMinimize,
    "FiMinimize2",
    ()=>FiMinimize2,
    "FiMinus",
    ()=>FiMinus,
    "FiMinusCircle",
    ()=>FiMinusCircle,
    "FiMinusSquare",
    ()=>FiMinusSquare,
    "FiMonitor",
    ()=>FiMonitor,
    "FiMoon",
    ()=>FiMoon,
    "FiMoreHorizontal",
    ()=>FiMoreHorizontal,
    "FiMoreVertical",
    ()=>FiMoreVertical,
    "FiMousePointer",
    ()=>FiMousePointer,
    "FiMove",
    ()=>FiMove,
    "FiMusic",
    ()=>FiMusic,
    "FiNavigation",
    ()=>FiNavigation,
    "FiNavigation2",
    ()=>FiNavigation2,
    "FiOctagon",
    ()=>FiOctagon,
    "FiPackage",
    ()=>FiPackage,
    "FiPaperclip",
    ()=>FiPaperclip,
    "FiPause",
    ()=>FiPause,
    "FiPauseCircle",
    ()=>FiPauseCircle,
    "FiPenTool",
    ()=>FiPenTool,
    "FiPercent",
    ()=>FiPercent,
    "FiPhone",
    ()=>FiPhone,
    "FiPhoneCall",
    ()=>FiPhoneCall,
    "FiPhoneForwarded",
    ()=>FiPhoneForwarded,
    "FiPhoneIncoming",
    ()=>FiPhoneIncoming,
    "FiPhoneMissed",
    ()=>FiPhoneMissed,
    "FiPhoneOff",
    ()=>FiPhoneOff,
    "FiPhoneOutgoing",
    ()=>FiPhoneOutgoing,
    "FiPieChart",
    ()=>FiPieChart,
    "FiPlay",
    ()=>FiPlay,
    "FiPlayCircle",
    ()=>FiPlayCircle,
    "FiPlus",
    ()=>FiPlus,
    "FiPlusCircle",
    ()=>FiPlusCircle,
    "FiPlusSquare",
    ()=>FiPlusSquare,
    "FiPocket",
    ()=>FiPocket,
    "FiPower",
    ()=>FiPower,
    "FiPrinter",
    ()=>FiPrinter,
    "FiRadio",
    ()=>FiRadio,
    "FiRefreshCcw",
    ()=>FiRefreshCcw,
    "FiRefreshCw",
    ()=>FiRefreshCw,
    "FiRepeat",
    ()=>FiRepeat,
    "FiRewind",
    ()=>FiRewind,
    "FiRotateCcw",
    ()=>FiRotateCcw,
    "FiRotateCw",
    ()=>FiRotateCw,
    "FiRss",
    ()=>FiRss,
    "FiSave",
    ()=>FiSave,
    "FiScissors",
    ()=>FiScissors,
    "FiSearch",
    ()=>FiSearch,
    "FiSend",
    ()=>FiSend,
    "FiServer",
    ()=>FiServer,
    "FiSettings",
    ()=>FiSettings,
    "FiShare",
    ()=>FiShare,
    "FiShare2",
    ()=>FiShare2,
    "FiShield",
    ()=>FiShield,
    "FiShieldOff",
    ()=>FiShieldOff,
    "FiShoppingBag",
    ()=>FiShoppingBag,
    "FiShoppingCart",
    ()=>FiShoppingCart,
    "FiShuffle",
    ()=>FiShuffle,
    "FiSidebar",
    ()=>FiSidebar,
    "FiSkipBack",
    ()=>FiSkipBack,
    "FiSkipForward",
    ()=>FiSkipForward,
    "FiSlack",
    ()=>FiSlack,
    "FiSlash",
    ()=>FiSlash,
    "FiSliders",
    ()=>FiSliders,
    "FiSmartphone",
    ()=>FiSmartphone,
    "FiSmile",
    ()=>FiSmile,
    "FiSpeaker",
    ()=>FiSpeaker,
    "FiSquare",
    ()=>FiSquare,
    "FiStar",
    ()=>FiStar,
    "FiStopCircle",
    ()=>FiStopCircle,
    "FiSun",
    ()=>FiSun,
    "FiSunrise",
    ()=>FiSunrise,
    "FiSunset",
    ()=>FiSunset,
    "FiTable",
    ()=>FiTable,
    "FiTablet",
    ()=>FiTablet,
    "FiTag",
    ()=>FiTag,
    "FiTarget",
    ()=>FiTarget,
    "FiTerminal",
    ()=>FiTerminal,
    "FiThermometer",
    ()=>FiThermometer,
    "FiThumbsDown",
    ()=>FiThumbsDown,
    "FiThumbsUp",
    ()=>FiThumbsUp,
    "FiToggleLeft",
    ()=>FiToggleLeft,
    "FiToggleRight",
    ()=>FiToggleRight,
    "FiTool",
    ()=>FiTool,
    "FiTrash",
    ()=>FiTrash,
    "FiTrash2",
    ()=>FiTrash2,
    "FiTrello",
    ()=>FiTrello,
    "FiTrendingDown",
    ()=>FiTrendingDown,
    "FiTrendingUp",
    ()=>FiTrendingUp,
    "FiTriangle",
    ()=>FiTriangle,
    "FiTruck",
    ()=>FiTruck,
    "FiTv",
    ()=>FiTv,
    "FiTwitch",
    ()=>FiTwitch,
    "FiTwitter",
    ()=>FiTwitter,
    "FiType",
    ()=>FiType,
    "FiUmbrella",
    ()=>FiUmbrella,
    "FiUnderline",
    ()=>FiUnderline,
    "FiUnlock",
    ()=>FiUnlock,
    "FiUpload",
    ()=>FiUpload,
    "FiUploadCloud",
    ()=>FiUploadCloud,
    "FiUser",
    ()=>FiUser,
    "FiUserCheck",
    ()=>FiUserCheck,
    "FiUserMinus",
    ()=>FiUserMinus,
    "FiUserPlus",
    ()=>FiUserPlus,
    "FiUserX",
    ()=>FiUserX,
    "FiUsers",
    ()=>FiUsers,
    "FiVideo",
    ()=>FiVideo,
    "FiVideoOff",
    ()=>FiVideoOff,
    "FiVoicemail",
    ()=>FiVoicemail,
    "FiVolume",
    ()=>FiVolume,
    "FiVolume1",
    ()=>FiVolume1,
    "FiVolume2",
    ()=>FiVolume2,
    "FiVolumeX",
    ()=>FiVolumeX,
    "FiWatch",
    ()=>FiWatch,
    "FiWifi",
    ()=>FiWifi,
    "FiWifiOff",
    ()=>FiWifiOff,
    "FiWind",
    ()=>FiWind,
    "FiX",
    ()=>FiX,
    "FiXCircle",
    ()=>FiXCircle,
    "FiXOctagon",
    ()=>FiXOctagon,
    "FiXSquare",
    ()=>FiXSquare,
    "FiYoutube",
    ()=>FiYoutube,
    "FiZap",
    ()=>FiZap,
    "FiZapOff",
    ()=>FiZapOff,
    "FiZoomIn",
    ()=>FiZoomIn,
    "FiZoomOut",
    ()=>FiZoomOut
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-icons/lib/iconBase.mjs [app-client] (ecmascript)");
;
function FiActivity(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polyline",
                "attr": {
                    "points": "22 12 18 12 15 21 9 3 6 12 2 12"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiAirplay(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"
                },
                "child": []
            },
            {
                "tag": "polygon",
                "attr": {
                    "points": "12 15 17 21 7 21 12 15"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiAlertCircle(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "circle",
                "attr": {
                    "cx": "12",
                    "cy": "12",
                    "r": "10"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "8",
                    "x2": "12",
                    "y2": "12"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "16",
                    "x2": "12.01",
                    "y2": "16"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiAlertOctagon(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polygon",
                "attr": {
                    "points": "7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "8",
                    "x2": "12",
                    "y2": "12"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "16",
                    "x2": "12.01",
                    "y2": "16"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiAlertTriangle(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "9",
                    "x2": "12",
                    "y2": "13"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "17",
                    "x2": "12.01",
                    "y2": "17"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiAlignCenter(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "line",
                "attr": {
                    "x1": "18",
                    "y1": "10",
                    "x2": "6",
                    "y2": "10"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "21",
                    "y1": "6",
                    "x2": "3",
                    "y2": "6"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "21",
                    "y1": "14",
                    "x2": "3",
                    "y2": "14"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "18",
                    "y1": "18",
                    "x2": "6",
                    "y2": "18"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiAlignJustify(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "line",
                "attr": {
                    "x1": "21",
                    "y1": "10",
                    "x2": "3",
                    "y2": "10"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "21",
                    "y1": "6",
                    "x2": "3",
                    "y2": "6"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "21",
                    "y1": "14",
                    "x2": "3",
                    "y2": "14"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "21",
                    "y1": "18",
                    "x2": "3",
                    "y2": "18"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiAlignLeft(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "line",
                "attr": {
                    "x1": "17",
                    "y1": "10",
                    "x2": "3",
                    "y2": "10"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "21",
                    "y1": "6",
                    "x2": "3",
                    "y2": "6"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "21",
                    "y1": "14",
                    "x2": "3",
                    "y2": "14"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "17",
                    "y1": "18",
                    "x2": "3",
                    "y2": "18"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiAlignRight(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "line",
                "attr": {
                    "x1": "21",
                    "y1": "10",
                    "x2": "7",
                    "y2": "10"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "21",
                    "y1": "6",
                    "x2": "3",
                    "y2": "6"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "21",
                    "y1": "14",
                    "x2": "3",
                    "y2": "14"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "21",
                    "y1": "18",
                    "x2": "7",
                    "y2": "18"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiAnchor(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "circle",
                "attr": {
                    "cx": "12",
                    "cy": "5",
                    "r": "3"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "22",
                    "x2": "12",
                    "y2": "8"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M5 12H2a10 10 0 0 0 20 0h-3"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiAperture(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "circle",
                "attr": {
                    "cx": "12",
                    "cy": "12",
                    "r": "10"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "14.31",
                    "y1": "8",
                    "x2": "20.05",
                    "y2": "17.94"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "9.69",
                    "y1": "8",
                    "x2": "21.17",
                    "y2": "8"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "7.38",
                    "y1": "12",
                    "x2": "13.12",
                    "y2": "2.06"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "9.69",
                    "y1": "16",
                    "x2": "3.95",
                    "y2": "6.06"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "14.31",
                    "y1": "16",
                    "x2": "2.83",
                    "y2": "16"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "16.62",
                    "y1": "12",
                    "x2": "10.88",
                    "y2": "21.94"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiArchive(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polyline",
                "attr": {
                    "points": "21 8 21 21 3 21 3 8"
                },
                "child": []
            },
            {
                "tag": "rect",
                "attr": {
                    "x": "1",
                    "y": "3",
                    "width": "22",
                    "height": "5"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "10",
                    "y1": "12",
                    "x2": "14",
                    "y2": "12"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiArrowDownCircle(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "circle",
                "attr": {
                    "cx": "12",
                    "cy": "12",
                    "r": "10"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "8 12 12 16 16 12"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "8",
                    "x2": "12",
                    "y2": "16"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiArrowDownLeft(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "line",
                "attr": {
                    "x1": "17",
                    "y1": "7",
                    "x2": "7",
                    "y2": "17"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "17 17 7 17 7 7"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiArrowDownRight(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "line",
                "attr": {
                    "x1": "7",
                    "y1": "7",
                    "x2": "17",
                    "y2": "17"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "17 7 17 17 7 17"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiArrowDown(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "5",
                    "x2": "12",
                    "y2": "19"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "19 12 12 19 5 12"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiArrowLeftCircle(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "circle",
                "attr": {
                    "cx": "12",
                    "cy": "12",
                    "r": "10"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "12 8 8 12 12 16"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "16",
                    "y1": "12",
                    "x2": "8",
                    "y2": "12"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiArrowLeft(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "line",
                "attr": {
                    "x1": "19",
                    "y1": "12",
                    "x2": "5",
                    "y2": "12"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "12 19 5 12 12 5"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiArrowRightCircle(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "circle",
                "attr": {
                    "cx": "12",
                    "cy": "12",
                    "r": "10"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "12 16 16 12 12 8"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "8",
                    "y1": "12",
                    "x2": "16",
                    "y2": "12"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiArrowRight(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "line",
                "attr": {
                    "x1": "5",
                    "y1": "12",
                    "x2": "19",
                    "y2": "12"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "12 5 19 12 12 19"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiArrowUpCircle(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "circle",
                "attr": {
                    "cx": "12",
                    "cy": "12",
                    "r": "10"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "16 12 12 8 8 12"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "16",
                    "x2": "12",
                    "y2": "8"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiArrowUpLeft(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "line",
                "attr": {
                    "x1": "17",
                    "y1": "17",
                    "x2": "7",
                    "y2": "7"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "7 17 7 7 17 7"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiArrowUpRight(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "line",
                "attr": {
                    "x1": "7",
                    "y1": "17",
                    "x2": "17",
                    "y2": "7"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "7 7 17 7 17 17"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiArrowUp(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "19",
                    "x2": "12",
                    "y2": "5"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "5 12 12 5 19 12"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiAtSign(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "circle",
                "attr": {
                    "cx": "12",
                    "cy": "12",
                    "r": "4"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiAward(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "circle",
                "attr": {
                    "cx": "12",
                    "cy": "8",
                    "r": "7"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "8.21 13.89 7 23 12 20 17 23 15.79 13.88"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiBarChart2(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "line",
                "attr": {
                    "x1": "18",
                    "y1": "20",
                    "x2": "18",
                    "y2": "10"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "20",
                    "x2": "12",
                    "y2": "4"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "6",
                    "y1": "20",
                    "x2": "6",
                    "y2": "14"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiBarChart(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "20",
                    "x2": "12",
                    "y2": "10"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "18",
                    "y1": "20",
                    "x2": "18",
                    "y2": "4"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "6",
                    "y1": "20",
                    "x2": "6",
                    "y2": "16"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiBatteryCharging(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "23",
                    "y1": "13",
                    "x2": "23",
                    "y2": "11"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "11 6 7 12 13 12 9 18"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiBattery(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "rect",
                "attr": {
                    "x": "1",
                    "y": "6",
                    "width": "18",
                    "height": "12",
                    "rx": "2",
                    "ry": "2"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "23",
                    "y1": "13",
                    "x2": "23",
                    "y2": "11"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiBellOff(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M13.73 21a2 2 0 0 1-3.46 0"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M18.63 13A17.89 17.89 0 0 1 18 8"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M18 8a6 6 0 0 0-9.33-5"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "1",
                    "y1": "1",
                    "x2": "23",
                    "y2": "23"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiBell(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M13.73 21a2 2 0 0 1-3.46 0"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiBluetooth(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polyline",
                "attr": {
                    "points": "6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiBold(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiBookOpen(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiBook(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M4 19.5A2.5 2.5 0 0 1 6.5 17H20"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiBookmark(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiBox(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "3.27 6.96 12 12.01 20.73 6.96"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "22.08",
                    "x2": "12",
                    "y2": "12"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiBriefcase(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "rect",
                "attr": {
                    "x": "2",
                    "y": "7",
                    "width": "20",
                    "height": "14",
                    "rx": "2",
                    "ry": "2"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiCalendar(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "rect",
                "attr": {
                    "x": "3",
                    "y": "4",
                    "width": "18",
                    "height": "18",
                    "rx": "2",
                    "ry": "2"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "16",
                    "y1": "2",
                    "x2": "16",
                    "y2": "6"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "8",
                    "y1": "2",
                    "x2": "8",
                    "y2": "6"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "3",
                    "y1": "10",
                    "x2": "21",
                    "y2": "10"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiCameraOff(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "line",
                "attr": {
                    "x1": "1",
                    "y1": "1",
                    "x2": "23",
                    "y2": "23"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiCamera(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"
                },
                "child": []
            },
            {
                "tag": "circle",
                "attr": {
                    "cx": "12",
                    "cy": "13",
                    "r": "4"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiCast(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "2",
                    "y1": "20",
                    "x2": "2.01",
                    "y2": "20"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiCheckCircle(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M22 11.08V12a10 10 0 1 1-5.93-9.14"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "22 4 12 14.01 9 11.01"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiCheckSquare(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polyline",
                "attr": {
                    "points": "9 11 12 14 22 4"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiCheck(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polyline",
                "attr": {
                    "points": "20 6 9 17 4 12"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiChevronDown(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polyline",
                "attr": {
                    "points": "6 9 12 15 18 9"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiChevronLeft(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polyline",
                "attr": {
                    "points": "15 18 9 12 15 6"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiChevronRight(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polyline",
                "attr": {
                    "points": "9 18 15 12 9 6"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiChevronUp(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polyline",
                "attr": {
                    "points": "18 15 12 9 6 15"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiChevronsDown(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polyline",
                "attr": {
                    "points": "7 13 12 18 17 13"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "7 6 12 11 17 6"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiChevronsLeft(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polyline",
                "attr": {
                    "points": "11 17 6 12 11 7"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "18 17 13 12 18 7"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiChevronsRight(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polyline",
                "attr": {
                    "points": "13 17 18 12 13 7"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "6 17 11 12 6 7"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiChevronsUp(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polyline",
                "attr": {
                    "points": "17 11 12 6 7 11"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "17 18 12 13 7 18"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiChrome(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "circle",
                "attr": {
                    "cx": "12",
                    "cy": "12",
                    "r": "10"
                },
                "child": []
            },
            {
                "tag": "circle",
                "attr": {
                    "cx": "12",
                    "cy": "12",
                    "r": "4"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "21.17",
                    "y1": "8",
                    "x2": "12",
                    "y2": "8"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "3.95",
                    "y1": "6.06",
                    "x2": "8.54",
                    "y2": "14"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "10.88",
                    "y1": "21.94",
                    "x2": "15.46",
                    "y2": "14"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiCircle(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "circle",
                "attr": {
                    "cx": "12",
                    "cy": "12",
                    "r": "10"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiClipboard(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
                },
                "child": []
            },
            {
                "tag": "rect",
                "attr": {
                    "x": "8",
                    "y": "2",
                    "width": "8",
                    "height": "4",
                    "rx": "1",
                    "ry": "1"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiClock(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "circle",
                "attr": {
                    "cx": "12",
                    "cy": "12",
                    "r": "10"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "12 6 12 12 16 14"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiCloudDrizzle(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "line",
                "attr": {
                    "x1": "8",
                    "y1": "19",
                    "x2": "8",
                    "y2": "21"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "8",
                    "y1": "13",
                    "x2": "8",
                    "y2": "15"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "16",
                    "y1": "19",
                    "x2": "16",
                    "y2": "21"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "16",
                    "y1": "13",
                    "x2": "16",
                    "y2": "15"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "21",
                    "x2": "12",
                    "y2": "23"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "15",
                    "x2": "12",
                    "y2": "17"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiCloudLightning(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "13 11 9 17 15 17 11 23"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiCloudOff(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "1",
                    "y1": "1",
                    "x2": "23",
                    "y2": "23"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiCloudRain(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "line",
                "attr": {
                    "x1": "16",
                    "y1": "13",
                    "x2": "16",
                    "y2": "21"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "8",
                    "y1": "13",
                    "x2": "8",
                    "y2": "21"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "15",
                    "x2": "12",
                    "y2": "23"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiCloudSnow(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "8",
                    "y1": "16",
                    "x2": "8.01",
                    "y2": "16"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "8",
                    "y1": "20",
                    "x2": "8.01",
                    "y2": "20"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "18",
                    "x2": "12.01",
                    "y2": "18"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "22",
                    "x2": "12.01",
                    "y2": "22"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "16",
                    "y1": "16",
                    "x2": "16.01",
                    "y2": "16"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "16",
                    "y1": "20",
                    "x2": "16.01",
                    "y2": "20"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiCloud(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiCode(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polyline",
                "attr": {
                    "points": "16 18 22 12 16 6"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "8 6 2 12 8 18"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiCodepen(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polygon",
                "attr": {
                    "points": "12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "22",
                    "x2": "12",
                    "y2": "15.5"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "22 8.5 12 15.5 2 8.5"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "2 15.5 12 8.5 22 15.5"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "2",
                    "x2": "12",
                    "y2": "8.5"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiCodesandbox(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "7.5 4.21 12 6.81 16.5 4.21"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "7.5 19.79 7.5 14.6 3 12"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "21 12 16.5 14.6 16.5 19.79"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "3.27 6.96 12 12.01 20.73 6.96"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "22.08",
                    "x2": "12",
                    "y2": "12"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiCoffee(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M18 8h1a4 4 0 0 1 0 8h-1"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "6",
                    "y1": "1",
                    "x2": "6",
                    "y2": "4"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "10",
                    "y1": "1",
                    "x2": "10",
                    "y2": "4"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "14",
                    "y1": "1",
                    "x2": "14",
                    "y2": "4"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiColumns(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiCommand(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiCompass(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "circle",
                "attr": {
                    "cx": "12",
                    "cy": "12",
                    "r": "10"
                },
                "child": []
            },
            {
                "tag": "polygon",
                "attr": {
                    "points": "16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiCopy(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "rect",
                "attr": {
                    "x": "9",
                    "y": "9",
                    "width": "13",
                    "height": "13",
                    "rx": "2",
                    "ry": "2"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiCornerDownLeft(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polyline",
                "attr": {
                    "points": "9 10 4 15 9 20"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M20 4v7a4 4 0 0 1-4 4H4"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiCornerDownRight(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polyline",
                "attr": {
                    "points": "15 10 20 15 15 20"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M4 4v7a4 4 0 0 0 4 4h12"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiCornerLeftDown(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polyline",
                "attr": {
                    "points": "14 15 9 20 4 15"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M20 4h-7a4 4 0 0 0-4 4v12"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiCornerLeftUp(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polyline",
                "attr": {
                    "points": "14 9 9 4 4 9"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M20 20h-7a4 4 0 0 1-4-4V4"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiCornerRightDown(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polyline",
                "attr": {
                    "points": "10 15 15 20 20 15"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M4 4h7a4 4 0 0 1 4 4v12"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiCornerRightUp(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polyline",
                "attr": {
                    "points": "10 9 15 4 20 9"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M4 20h7a4 4 0 0 0 4-4V4"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiCornerUpLeft(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polyline",
                "attr": {
                    "points": "9 14 4 9 9 4"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M20 20v-7a4 4 0 0 0-4-4H4"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiCornerUpRight(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polyline",
                "attr": {
                    "points": "15 14 20 9 15 4"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M4 20v-7a4 4 0 0 1 4-4h12"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiCpu(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "rect",
                "attr": {
                    "x": "4",
                    "y": "4",
                    "width": "16",
                    "height": "16",
                    "rx": "2",
                    "ry": "2"
                },
                "child": []
            },
            {
                "tag": "rect",
                "attr": {
                    "x": "9",
                    "y": "9",
                    "width": "6",
                    "height": "6"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "9",
                    "y1": "1",
                    "x2": "9",
                    "y2": "4"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "15",
                    "y1": "1",
                    "x2": "15",
                    "y2": "4"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "9",
                    "y1": "20",
                    "x2": "9",
                    "y2": "23"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "15",
                    "y1": "20",
                    "x2": "15",
                    "y2": "23"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "20",
                    "y1": "9",
                    "x2": "23",
                    "y2": "9"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "20",
                    "y1": "14",
                    "x2": "23",
                    "y2": "14"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "1",
                    "y1": "9",
                    "x2": "4",
                    "y2": "9"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "1",
                    "y1": "14",
                    "x2": "4",
                    "y2": "14"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiCreditCard(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "rect",
                "attr": {
                    "x": "1",
                    "y": "4",
                    "width": "22",
                    "height": "16",
                    "rx": "2",
                    "ry": "2"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "1",
                    "y1": "10",
                    "x2": "23",
                    "y2": "10"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiCrop(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M6.13 1L6 16a2 2 0 0 0 2 2h15"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M1 6.13L16 6a2 2 0 0 1 2 2v15"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiCrosshair(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "circle",
                "attr": {
                    "cx": "12",
                    "cy": "12",
                    "r": "10"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "22",
                    "y1": "12",
                    "x2": "18",
                    "y2": "12"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "6",
                    "y1": "12",
                    "x2": "2",
                    "y2": "12"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "6",
                    "x2": "12",
                    "y2": "2"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "22",
                    "x2": "12",
                    "y2": "18"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiDatabase(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "ellipse",
                "attr": {
                    "cx": "12",
                    "cy": "5",
                    "rx": "9",
                    "ry": "3"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiDelete(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "18",
                    "y1": "9",
                    "x2": "12",
                    "y2": "15"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "9",
                    "x2": "18",
                    "y2": "15"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiDisc(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "circle",
                "attr": {
                    "cx": "12",
                    "cy": "12",
                    "r": "10"
                },
                "child": []
            },
            {
                "tag": "circle",
                "attr": {
                    "cx": "12",
                    "cy": "12",
                    "r": "3"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiDivideCircle(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "line",
                "attr": {
                    "x1": "8",
                    "y1": "12",
                    "x2": "16",
                    "y2": "12"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "16",
                    "x2": "12",
                    "y2": "16"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "8",
                    "x2": "12",
                    "y2": "8"
                },
                "child": []
            },
            {
                "tag": "circle",
                "attr": {
                    "cx": "12",
                    "cy": "12",
                    "r": "10"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiDivideSquare(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "rect",
                "attr": {
                    "x": "3",
                    "y": "3",
                    "width": "18",
                    "height": "18",
                    "rx": "2",
                    "ry": "2"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "8",
                    "y1": "12",
                    "x2": "16",
                    "y2": "12"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "16",
                    "x2": "12",
                    "y2": "16"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "8",
                    "x2": "12",
                    "y2": "8"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiDivide(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "circle",
                "attr": {
                    "cx": "12",
                    "cy": "6",
                    "r": "2"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "5",
                    "y1": "12",
                    "x2": "19",
                    "y2": "12"
                },
                "child": []
            },
            {
                "tag": "circle",
                "attr": {
                    "cx": "12",
                    "cy": "18",
                    "r": "2"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiDollarSign(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "1",
                    "x2": "12",
                    "y2": "23"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiDownloadCloud(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polyline",
                "attr": {
                    "points": "8 17 12 21 16 17"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "12",
                    "x2": "12",
                    "y2": "21"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiDownload(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "7 10 12 15 17 10"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "15",
                    "x2": "12",
                    "y2": "3"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiDribbble(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "circle",
                "attr": {
                    "cx": "12",
                    "cy": "12",
                    "r": "10"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiDroplet(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiEdit2(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiEdit3(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M12 20h9"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiEdit(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiExternalLink(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "15 3 21 3 21 9"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "10",
                    "y1": "14",
                    "x2": "21",
                    "y2": "3"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiEyeOff(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "1",
                    "y1": "1",
                    "x2": "23",
                    "y2": "23"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiEye(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                },
                "child": []
            },
            {
                "tag": "circle",
                "attr": {
                    "cx": "12",
                    "cy": "12",
                    "r": "3"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiFacebook(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiFastForward(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polygon",
                "attr": {
                    "points": "13 19 22 12 13 5 13 19"
                },
                "child": []
            },
            {
                "tag": "polygon",
                "attr": {
                    "points": "2 19 11 12 2 5 2 19"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiFeather(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "16",
                    "y1": "8",
                    "x2": "2",
                    "y2": "22"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "17.5",
                    "y1": "15",
                    "x2": "9",
                    "y2": "15"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiFigma(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiFileMinus(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "14 2 14 8 20 8"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "9",
                    "y1": "15",
                    "x2": "15",
                    "y2": "15"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiFilePlus(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "14 2 14 8 20 8"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "18",
                    "x2": "12",
                    "y2": "12"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "9",
                    "y1": "15",
                    "x2": "15",
                    "y2": "15"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiFileText(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "14 2 14 8 20 8"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "16",
                    "y1": "13",
                    "x2": "8",
                    "y2": "13"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "16",
                    "y1": "17",
                    "x2": "8",
                    "y2": "17"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "10 9 9 9 8 9"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiFile(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "13 2 13 9 20 9"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiFilm(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "rect",
                "attr": {
                    "x": "2",
                    "y": "2",
                    "width": "20",
                    "height": "20",
                    "rx": "2.18",
                    "ry": "2.18"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "7",
                    "y1": "2",
                    "x2": "7",
                    "y2": "22"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "17",
                    "y1": "2",
                    "x2": "17",
                    "y2": "22"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "2",
                    "y1": "12",
                    "x2": "22",
                    "y2": "12"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "2",
                    "y1": "7",
                    "x2": "7",
                    "y2": "7"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "2",
                    "y1": "17",
                    "x2": "7",
                    "y2": "17"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "17",
                    "y1": "17",
                    "x2": "22",
                    "y2": "17"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "17",
                    "y1": "7",
                    "x2": "22",
                    "y2": "7"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiFilter(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polygon",
                "attr": {
                    "points": "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiFlag(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "4",
                    "y1": "22",
                    "x2": "4",
                    "y2": "15"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiFolderMinus(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "9",
                    "y1": "14",
                    "x2": "15",
                    "y2": "14"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiFolderPlus(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "11",
                    "x2": "12",
                    "y2": "17"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "9",
                    "y1": "14",
                    "x2": "15",
                    "y2": "14"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiFolder(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiFramer(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiFrown(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "circle",
                "attr": {
                    "cx": "12",
                    "cy": "12",
                    "r": "10"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M16 16s-1.5-2-4-2-4 2-4 2"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "9",
                    "y1": "9",
                    "x2": "9.01",
                    "y2": "9"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "15",
                    "y1": "9",
                    "x2": "15.01",
                    "y2": "9"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiGift(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polyline",
                "attr": {
                    "points": "20 12 20 22 4 22 4 12"
                },
                "child": []
            },
            {
                "tag": "rect",
                "attr": {
                    "x": "2",
                    "y": "7",
                    "width": "20",
                    "height": "5"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "22",
                    "x2": "12",
                    "y2": "7"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiGitBranch(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "line",
                "attr": {
                    "x1": "6",
                    "y1": "3",
                    "x2": "6",
                    "y2": "15"
                },
                "child": []
            },
            {
                "tag": "circle",
                "attr": {
                    "cx": "18",
                    "cy": "6",
                    "r": "3"
                },
                "child": []
            },
            {
                "tag": "circle",
                "attr": {
                    "cx": "6",
                    "cy": "18",
                    "r": "3"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M18 9a9 9 0 0 1-9 9"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiGitCommit(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "circle",
                "attr": {
                    "cx": "12",
                    "cy": "12",
                    "r": "4"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "1.05",
                    "y1": "12",
                    "x2": "7",
                    "y2": "12"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "17.01",
                    "y1": "12",
                    "x2": "22.96",
                    "y2": "12"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiGitMerge(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "circle",
                "attr": {
                    "cx": "18",
                    "cy": "18",
                    "r": "3"
                },
                "child": []
            },
            {
                "tag": "circle",
                "attr": {
                    "cx": "6",
                    "cy": "6",
                    "r": "3"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M6 21V9a9 9 0 0 0 9 9"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiGitPullRequest(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "circle",
                "attr": {
                    "cx": "18",
                    "cy": "18",
                    "r": "3"
                },
                "child": []
            },
            {
                "tag": "circle",
                "attr": {
                    "cx": "6",
                    "cy": "6",
                    "r": "3"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M13 6h3a2 2 0 0 1 2 2v7"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "6",
                    "y1": "9",
                    "x2": "6",
                    "y2": "21"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiGithub(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiGitlab(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiGlobe(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "circle",
                "attr": {
                    "cx": "12",
                    "cy": "12",
                    "r": "10"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "2",
                    "y1": "12",
                    "x2": "22",
                    "y2": "12"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiGrid(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "rect",
                "attr": {
                    "x": "3",
                    "y": "3",
                    "width": "7",
                    "height": "7"
                },
                "child": []
            },
            {
                "tag": "rect",
                "attr": {
                    "x": "14",
                    "y": "3",
                    "width": "7",
                    "height": "7"
                },
                "child": []
            },
            {
                "tag": "rect",
                "attr": {
                    "x": "14",
                    "y": "14",
                    "width": "7",
                    "height": "7"
                },
                "child": []
            },
            {
                "tag": "rect",
                "attr": {
                    "x": "3",
                    "y": "14",
                    "width": "7",
                    "height": "7"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiHardDrive(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "line",
                "attr": {
                    "x1": "22",
                    "y1": "12",
                    "x2": "2",
                    "y2": "12"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "6",
                    "y1": "16",
                    "x2": "6.01",
                    "y2": "16"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "10",
                    "y1": "16",
                    "x2": "10.01",
                    "y2": "16"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiHash(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "line",
                "attr": {
                    "x1": "4",
                    "y1": "9",
                    "x2": "20",
                    "y2": "9"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "4",
                    "y1": "15",
                    "x2": "20",
                    "y2": "15"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "10",
                    "y1": "3",
                    "x2": "8",
                    "y2": "21"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "16",
                    "y1": "3",
                    "x2": "14",
                    "y2": "21"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiHeadphones(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M3 18v-6a9 9 0 0 1 18 0v6"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiHeart(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiHelpCircle(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "circle",
                "attr": {
                    "cx": "12",
                    "cy": "12",
                    "r": "10"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "17",
                    "x2": "12.01",
                    "y2": "17"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiHexagon(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiHome(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "9 22 9 12 15 12 15 22"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiImage(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "rect",
                "attr": {
                    "x": "3",
                    "y": "3",
                    "width": "18",
                    "height": "18",
                    "rx": "2",
                    "ry": "2"
                },
                "child": []
            },
            {
                "tag": "circle",
                "attr": {
                    "cx": "8.5",
                    "cy": "8.5",
                    "r": "1.5"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "21 15 16 10 5 21"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiInbox(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polyline",
                "attr": {
                    "points": "22 12 16 12 14 15 10 15 8 12 2 12"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiInfo(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "circle",
                "attr": {
                    "cx": "12",
                    "cy": "12",
                    "r": "10"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "16",
                    "x2": "12",
                    "y2": "12"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "8",
                    "x2": "12.01",
                    "y2": "8"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiInstagram(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "rect",
                "attr": {
                    "x": "2",
                    "y": "2",
                    "width": "20",
                    "height": "20",
                    "rx": "5",
                    "ry": "5"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "17.5",
                    "y1": "6.5",
                    "x2": "17.51",
                    "y2": "6.5"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiItalic(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "line",
                "attr": {
                    "x1": "19",
                    "y1": "4",
                    "x2": "10",
                    "y2": "4"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "14",
                    "y1": "20",
                    "x2": "5",
                    "y2": "20"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "15",
                    "y1": "4",
                    "x2": "9",
                    "y2": "20"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiKey(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiLayers(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polygon",
                "attr": {
                    "points": "12 2 2 7 12 12 22 7 12 2"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "2 17 12 22 22 17"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "2 12 12 17 22 12"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiLayout(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "rect",
                "attr": {
                    "x": "3",
                    "y": "3",
                    "width": "18",
                    "height": "18",
                    "rx": "2",
                    "ry": "2"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "3",
                    "y1": "9",
                    "x2": "21",
                    "y2": "9"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "9",
                    "y1": "21",
                    "x2": "9",
                    "y2": "9"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiLifeBuoy(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "circle",
                "attr": {
                    "cx": "12",
                    "cy": "12",
                    "r": "10"
                },
                "child": []
            },
            {
                "tag": "circle",
                "attr": {
                    "cx": "12",
                    "cy": "12",
                    "r": "4"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "4.93",
                    "y1": "4.93",
                    "x2": "9.17",
                    "y2": "9.17"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "14.83",
                    "y1": "14.83",
                    "x2": "19.07",
                    "y2": "19.07"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "14.83",
                    "y1": "9.17",
                    "x2": "19.07",
                    "y2": "4.93"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "14.83",
                    "y1": "9.17",
                    "x2": "18.36",
                    "y2": "5.64"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "4.93",
                    "y1": "19.07",
                    "x2": "9.17",
                    "y2": "14.83"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiLink2(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "8",
                    "y1": "12",
                    "x2": "16",
                    "y2": "12"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiLink(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiLinkedin(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                },
                "child": []
            },
            {
                "tag": "rect",
                "attr": {
                    "x": "2",
                    "y": "9",
                    "width": "4",
                    "height": "12"
                },
                "child": []
            },
            {
                "tag": "circle",
                "attr": {
                    "cx": "4",
                    "cy": "4",
                    "r": "2"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiList(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "line",
                "attr": {
                    "x1": "8",
                    "y1": "6",
                    "x2": "21",
                    "y2": "6"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "8",
                    "y1": "12",
                    "x2": "21",
                    "y2": "12"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "8",
                    "y1": "18",
                    "x2": "21",
                    "y2": "18"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "3",
                    "y1": "6",
                    "x2": "3.01",
                    "y2": "6"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "3",
                    "y1": "12",
                    "x2": "3.01",
                    "y2": "12"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "3",
                    "y1": "18",
                    "x2": "3.01",
                    "y2": "18"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiLoader(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "2",
                    "x2": "12",
                    "y2": "6"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "18",
                    "x2": "12",
                    "y2": "22"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "4.93",
                    "y1": "4.93",
                    "x2": "7.76",
                    "y2": "7.76"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "16.24",
                    "y1": "16.24",
                    "x2": "19.07",
                    "y2": "19.07"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "2",
                    "y1": "12",
                    "x2": "6",
                    "y2": "12"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "18",
                    "y1": "12",
                    "x2": "22",
                    "y2": "12"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "4.93",
                    "y1": "19.07",
                    "x2": "7.76",
                    "y2": "16.24"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "16.24",
                    "y1": "7.76",
                    "x2": "19.07",
                    "y2": "4.93"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiLock(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "rect",
                "attr": {
                    "x": "3",
                    "y": "11",
                    "width": "18",
                    "height": "11",
                    "rx": "2",
                    "ry": "2"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M7 11V7a5 5 0 0 1 10 0v4"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiLogIn(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "10 17 15 12 10 7"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "15",
                    "y1": "12",
                    "x2": "3",
                    "y2": "12"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiLogOut(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "16 17 21 12 16 7"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "21",
                    "y1": "12",
                    "x2": "9",
                    "y2": "12"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiMail(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "22,6 12,13 2,6"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiMapPin(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
                },
                "child": []
            },
            {
                "tag": "circle",
                "attr": {
                    "cx": "12",
                    "cy": "10",
                    "r": "3"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiMap(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polygon",
                "attr": {
                    "points": "1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "8",
                    "y1": "2",
                    "x2": "8",
                    "y2": "18"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "16",
                    "y1": "6",
                    "x2": "16",
                    "y2": "22"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiMaximize2(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polyline",
                "attr": {
                    "points": "15 3 21 3 21 9"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "9 21 3 21 3 15"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "21",
                    "y1": "3",
                    "x2": "14",
                    "y2": "10"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "3",
                    "y1": "21",
                    "x2": "10",
                    "y2": "14"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiMaximize(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiMeh(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "circle",
                "attr": {
                    "cx": "12",
                    "cy": "12",
                    "r": "10"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "8",
                    "y1": "15",
                    "x2": "16",
                    "y2": "15"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "9",
                    "y1": "9",
                    "x2": "9.01",
                    "y2": "9"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "15",
                    "y1": "9",
                    "x2": "15.01",
                    "y2": "9"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiMenu(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "line",
                "attr": {
                    "x1": "3",
                    "y1": "12",
                    "x2": "21",
                    "y2": "12"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "3",
                    "y1": "6",
                    "x2": "21",
                    "y2": "6"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "3",
                    "y1": "18",
                    "x2": "21",
                    "y2": "18"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiMessageCircle(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiMessageSquare(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiMicOff(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "line",
                "attr": {
                    "x1": "1",
                    "y1": "1",
                    "x2": "23",
                    "y2": "23"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "19",
                    "x2": "12",
                    "y2": "23"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "8",
                    "y1": "23",
                    "x2": "16",
                    "y2": "23"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiMic(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M19 10v2a7 7 0 0 1-14 0v-2"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "19",
                    "x2": "12",
                    "y2": "23"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "8",
                    "y1": "23",
                    "x2": "16",
                    "y2": "23"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiMinimize2(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polyline",
                "attr": {
                    "points": "4 14 10 14 10 20"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "20 10 14 10 14 4"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "14",
                    "y1": "10",
                    "x2": "21",
                    "y2": "3"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "3",
                    "y1": "21",
                    "x2": "10",
                    "y2": "14"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiMinimize(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiMinusCircle(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "circle",
                "attr": {
                    "cx": "12",
                    "cy": "12",
                    "r": "10"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "8",
                    "y1": "12",
                    "x2": "16",
                    "y2": "12"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiMinusSquare(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "rect",
                "attr": {
                    "x": "3",
                    "y": "3",
                    "width": "18",
                    "height": "18",
                    "rx": "2",
                    "ry": "2"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "8",
                    "y1": "12",
                    "x2": "16",
                    "y2": "12"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiMinus(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "line",
                "attr": {
                    "x1": "5",
                    "y1": "12",
                    "x2": "19",
                    "y2": "12"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiMonitor(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "rect",
                "attr": {
                    "x": "2",
                    "y": "3",
                    "width": "20",
                    "height": "14",
                    "rx": "2",
                    "ry": "2"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "8",
                    "y1": "21",
                    "x2": "16",
                    "y2": "21"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "17",
                    "x2": "12",
                    "y2": "21"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiMoon(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiMoreHorizontal(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "circle",
                "attr": {
                    "cx": "12",
                    "cy": "12",
                    "r": "1"
                },
                "child": []
            },
            {
                "tag": "circle",
                "attr": {
                    "cx": "19",
                    "cy": "12",
                    "r": "1"
                },
                "child": []
            },
            {
                "tag": "circle",
                "attr": {
                    "cx": "5",
                    "cy": "12",
                    "r": "1"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiMoreVertical(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "circle",
                "attr": {
                    "cx": "12",
                    "cy": "12",
                    "r": "1"
                },
                "child": []
            },
            {
                "tag": "circle",
                "attr": {
                    "cx": "12",
                    "cy": "5",
                    "r": "1"
                },
                "child": []
            },
            {
                "tag": "circle",
                "attr": {
                    "cx": "12",
                    "cy": "19",
                    "r": "1"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiMousePointer(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M13 13l6 6"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiMove(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polyline",
                "attr": {
                    "points": "5 9 2 12 5 15"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "9 5 12 2 15 5"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "15 19 12 22 9 19"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "19 9 22 12 19 15"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "2",
                    "y1": "12",
                    "x2": "22",
                    "y2": "12"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "2",
                    "x2": "12",
                    "y2": "22"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiMusic(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M9 18V5l12-2v13"
                },
                "child": []
            },
            {
                "tag": "circle",
                "attr": {
                    "cx": "6",
                    "cy": "18",
                    "r": "3"
                },
                "child": []
            },
            {
                "tag": "circle",
                "attr": {
                    "cx": "18",
                    "cy": "16",
                    "r": "3"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiNavigation2(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polygon",
                "attr": {
                    "points": "12 2 19 21 12 17 5 21 12 2"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiNavigation(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polygon",
                "attr": {
                    "points": "3 11 22 2 13 21 11 13 3 11"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiOctagon(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polygon",
                "attr": {
                    "points": "7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiPackage(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "line",
                "attr": {
                    "x1": "16.5",
                    "y1": "9.4",
                    "x2": "7.5",
                    "y2": "4.21"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "3.27 6.96 12 12.01 20.73 6.96"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "22.08",
                    "x2": "12",
                    "y2": "12"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiPaperclip(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiPauseCircle(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "circle",
                "attr": {
                    "cx": "12",
                    "cy": "12",
                    "r": "10"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "10",
                    "y1": "15",
                    "x2": "10",
                    "y2": "9"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "14",
                    "y1": "15",
                    "x2": "14",
                    "y2": "9"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiPause(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "rect",
                "attr": {
                    "x": "6",
                    "y": "4",
                    "width": "4",
                    "height": "16"
                },
                "child": []
            },
            {
                "tag": "rect",
                "attr": {
                    "x": "14",
                    "y": "4",
                    "width": "4",
                    "height": "16"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiPenTool(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M12 19l7-7 3 3-7 7-3-3z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M2 2l7.586 7.586"
                },
                "child": []
            },
            {
                "tag": "circle",
                "attr": {
                    "cx": "11",
                    "cy": "11",
                    "r": "2"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiPercent(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "line",
                "attr": {
                    "x1": "19",
                    "y1": "5",
                    "x2": "5",
                    "y2": "19"
                },
                "child": []
            },
            {
                "tag": "circle",
                "attr": {
                    "cx": "6.5",
                    "cy": "6.5",
                    "r": "2.5"
                },
                "child": []
            },
            {
                "tag": "circle",
                "attr": {
                    "cx": "17.5",
                    "cy": "17.5",
                    "r": "2.5"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiPhoneCall(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiPhoneForwarded(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polyline",
                "attr": {
                    "points": "19 1 23 5 19 9"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "15",
                    "y1": "5",
                    "x2": "23",
                    "y2": "5"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiPhoneIncoming(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polyline",
                "attr": {
                    "points": "16 2 16 8 22 8"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "23",
                    "y1": "1",
                    "x2": "16",
                    "y2": "8"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiPhoneMissed(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "line",
                "attr": {
                    "x1": "23",
                    "y1": "1",
                    "x2": "17",
                    "y2": "7"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "17",
                    "y1": "1",
                    "x2": "23",
                    "y2": "7"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiPhoneOff(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "23",
                    "y1": "1",
                    "x2": "1",
                    "y2": "23"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiPhoneOutgoing(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polyline",
                "attr": {
                    "points": "23 7 23 1 17 1"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "16",
                    "y1": "8",
                    "x2": "23",
                    "y2": "1"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiPhone(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiPieChart(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M21.21 15.89A10 10 0 1 1 8 2.83"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M22 12A10 10 0 0 0 12 2v10z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiPlayCircle(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "circle",
                "attr": {
                    "cx": "12",
                    "cy": "12",
                    "r": "10"
                },
                "child": []
            },
            {
                "tag": "polygon",
                "attr": {
                    "points": "10 8 16 12 10 16 10 8"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiPlay(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polygon",
                "attr": {
                    "points": "5 3 19 12 5 21 5 3"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiPlusCircle(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "circle",
                "attr": {
                    "cx": "12",
                    "cy": "12",
                    "r": "10"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "8",
                    "x2": "12",
                    "y2": "16"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "8",
                    "y1": "12",
                    "x2": "16",
                    "y2": "12"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiPlusSquare(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "rect",
                "attr": {
                    "x": "3",
                    "y": "3",
                    "width": "18",
                    "height": "18",
                    "rx": "2",
                    "ry": "2"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "8",
                    "x2": "12",
                    "y2": "16"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "8",
                    "y1": "12",
                    "x2": "16",
                    "y2": "12"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiPlus(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "5",
                    "x2": "12",
                    "y2": "19"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "5",
                    "y1": "12",
                    "x2": "19",
                    "y2": "12"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiPocket(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "8 10 12 14 16 10"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiPower(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M18.36 6.64a9 9 0 1 1-12.73 0"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "2",
                    "x2": "12",
                    "y2": "12"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiPrinter(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polyline",
                "attr": {
                    "points": "6 9 6 2 18 2 18 9"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"
                },
                "child": []
            },
            {
                "tag": "rect",
                "attr": {
                    "x": "6",
                    "y": "14",
                    "width": "12",
                    "height": "8"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiRadio(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "circle",
                "attr": {
                    "cx": "12",
                    "cy": "12",
                    "r": "2"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiRefreshCcw(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polyline",
                "attr": {
                    "points": "1 4 1 10 7 10"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "23 20 23 14 17 14"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiRefreshCw(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polyline",
                "attr": {
                    "points": "23 4 23 10 17 10"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "1 20 1 14 7 14"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiRepeat(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polyline",
                "attr": {
                    "points": "17 1 21 5 17 9"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M3 11V9a4 4 0 0 1 4-4h14"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "7 23 3 19 7 15"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M21 13v2a4 4 0 0 1-4 4H3"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiRewind(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polygon",
                "attr": {
                    "points": "11 19 2 12 11 5 11 19"
                },
                "child": []
            },
            {
                "tag": "polygon",
                "attr": {
                    "points": "22 19 13 12 22 5 22 19"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiRotateCcw(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polyline",
                "attr": {
                    "points": "1 4 1 10 7 10"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M3.51 15a9 9 0 1 0 2.13-9.36L1 10"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiRotateCw(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polyline",
                "attr": {
                    "points": "23 4 23 10 17 10"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M20.49 15a9 9 0 1 1-2.12-9.36L23 10"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiRss(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M4 11a9 9 0 0 1 9 9"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M4 4a16 16 0 0 1 16 16"
                },
                "child": []
            },
            {
                "tag": "circle",
                "attr": {
                    "cx": "5",
                    "cy": "19",
                    "r": "1"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiSave(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "17 21 17 13 7 13 7 21"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "7 3 7 8 15 8"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiScissors(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "circle",
                "attr": {
                    "cx": "6",
                    "cy": "6",
                    "r": "3"
                },
                "child": []
            },
            {
                "tag": "circle",
                "attr": {
                    "cx": "6",
                    "cy": "18",
                    "r": "3"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "20",
                    "y1": "4",
                    "x2": "8.12",
                    "y2": "15.88"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "14.47",
                    "y1": "14.48",
                    "x2": "20",
                    "y2": "20"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "8.12",
                    "y1": "8.12",
                    "x2": "12",
                    "y2": "12"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiSearch(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "circle",
                "attr": {
                    "cx": "11",
                    "cy": "11",
                    "r": "8"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "21",
                    "y1": "21",
                    "x2": "16.65",
                    "y2": "16.65"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiSend(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "line",
                "attr": {
                    "x1": "22",
                    "y1": "2",
                    "x2": "11",
                    "y2": "13"
                },
                "child": []
            },
            {
                "tag": "polygon",
                "attr": {
                    "points": "22 2 15 22 11 13 2 9 22 2"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiServer(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "rect",
                "attr": {
                    "x": "2",
                    "y": "2",
                    "width": "20",
                    "height": "8",
                    "rx": "2",
                    "ry": "2"
                },
                "child": []
            },
            {
                "tag": "rect",
                "attr": {
                    "x": "2",
                    "y": "14",
                    "width": "20",
                    "height": "8",
                    "rx": "2",
                    "ry": "2"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "6",
                    "y1": "6",
                    "x2": "6.01",
                    "y2": "6"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "6",
                    "y1": "18",
                    "x2": "6.01",
                    "y2": "18"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiSettings(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "circle",
                "attr": {
                    "cx": "12",
                    "cy": "12",
                    "r": "3"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiShare2(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "circle",
                "attr": {
                    "cx": "18",
                    "cy": "5",
                    "r": "3"
                },
                "child": []
            },
            {
                "tag": "circle",
                "attr": {
                    "cx": "6",
                    "cy": "12",
                    "r": "3"
                },
                "child": []
            },
            {
                "tag": "circle",
                "attr": {
                    "cx": "18",
                    "cy": "19",
                    "r": "3"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "8.59",
                    "y1": "13.51",
                    "x2": "15.42",
                    "y2": "17.49"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "15.41",
                    "y1": "6.51",
                    "x2": "8.59",
                    "y2": "10.49"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiShare(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "16 6 12 2 8 6"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "2",
                    "x2": "12",
                    "y2": "15"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiShieldOff(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "1",
                    "y1": "1",
                    "x2": "23",
                    "y2": "23"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiShield(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiShoppingBag(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "3",
                    "y1": "6",
                    "x2": "21",
                    "y2": "6"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M16 10a4 4 0 0 1-8 0"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiShoppingCart(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "circle",
                "attr": {
                    "cx": "9",
                    "cy": "21",
                    "r": "1"
                },
                "child": []
            },
            {
                "tag": "circle",
                "attr": {
                    "cx": "20",
                    "cy": "21",
                    "r": "1"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiShuffle(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polyline",
                "attr": {
                    "points": "16 3 21 3 21 8"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "4",
                    "y1": "20",
                    "x2": "21",
                    "y2": "3"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "21 16 21 21 16 21"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "15",
                    "y1": "15",
                    "x2": "21",
                    "y2": "21"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "4",
                    "y1": "4",
                    "x2": "9",
                    "y2": "9"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiSidebar(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "rect",
                "attr": {
                    "x": "3",
                    "y": "3",
                    "width": "18",
                    "height": "18",
                    "rx": "2",
                    "ry": "2"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "9",
                    "y1": "3",
                    "x2": "9",
                    "y2": "21"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiSkipBack(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polygon",
                "attr": {
                    "points": "19 20 9 12 19 4 19 20"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "5",
                    "y1": "19",
                    "x2": "5",
                    "y2": "5"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiSkipForward(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polygon",
                "attr": {
                    "points": "5 4 15 12 5 20 5 4"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "19",
                    "y1": "5",
                    "x2": "19",
                    "y2": "19"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiSlack(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiSlash(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "circle",
                "attr": {
                    "cx": "12",
                    "cy": "12",
                    "r": "10"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "4.93",
                    "y1": "4.93",
                    "x2": "19.07",
                    "y2": "19.07"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiSliders(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "line",
                "attr": {
                    "x1": "4",
                    "y1": "21",
                    "x2": "4",
                    "y2": "14"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "4",
                    "y1": "10",
                    "x2": "4",
                    "y2": "3"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "21",
                    "x2": "12",
                    "y2": "12"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "8",
                    "x2": "12",
                    "y2": "3"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "20",
                    "y1": "21",
                    "x2": "20",
                    "y2": "16"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "20",
                    "y1": "12",
                    "x2": "20",
                    "y2": "3"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "1",
                    "y1": "14",
                    "x2": "7",
                    "y2": "14"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "9",
                    "y1": "8",
                    "x2": "15",
                    "y2": "8"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "17",
                    "y1": "16",
                    "x2": "23",
                    "y2": "16"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiSmartphone(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "rect",
                "attr": {
                    "x": "5",
                    "y": "2",
                    "width": "14",
                    "height": "20",
                    "rx": "2",
                    "ry": "2"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "18",
                    "x2": "12.01",
                    "y2": "18"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiSmile(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "circle",
                "attr": {
                    "cx": "12",
                    "cy": "12",
                    "r": "10"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M8 14s1.5 2 4 2 4-2 4-2"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "9",
                    "y1": "9",
                    "x2": "9.01",
                    "y2": "9"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "15",
                    "y1": "9",
                    "x2": "15.01",
                    "y2": "9"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiSpeaker(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "rect",
                "attr": {
                    "x": "4",
                    "y": "2",
                    "width": "16",
                    "height": "20",
                    "rx": "2",
                    "ry": "2"
                },
                "child": []
            },
            {
                "tag": "circle",
                "attr": {
                    "cx": "12",
                    "cy": "14",
                    "r": "4"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "6",
                    "x2": "12.01",
                    "y2": "6"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiSquare(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "rect",
                "attr": {
                    "x": "3",
                    "y": "3",
                    "width": "18",
                    "height": "18",
                    "rx": "2",
                    "ry": "2"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiStar(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polygon",
                "attr": {
                    "points": "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiStopCircle(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "circle",
                "attr": {
                    "cx": "12",
                    "cy": "12",
                    "r": "10"
                },
                "child": []
            },
            {
                "tag": "rect",
                "attr": {
                    "x": "9",
                    "y": "9",
                    "width": "6",
                    "height": "6"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiSun(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "circle",
                "attr": {
                    "cx": "12",
                    "cy": "12",
                    "r": "5"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "1",
                    "x2": "12",
                    "y2": "3"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "21",
                    "x2": "12",
                    "y2": "23"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "4.22",
                    "y1": "4.22",
                    "x2": "5.64",
                    "y2": "5.64"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "18.36",
                    "y1": "18.36",
                    "x2": "19.78",
                    "y2": "19.78"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "1",
                    "y1": "12",
                    "x2": "3",
                    "y2": "12"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "21",
                    "y1": "12",
                    "x2": "23",
                    "y2": "12"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "4.22",
                    "y1": "19.78",
                    "x2": "5.64",
                    "y2": "18.36"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "18.36",
                    "y1": "5.64",
                    "x2": "19.78",
                    "y2": "4.22"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiSunrise(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M17 18a5 5 0 0 0-10 0"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "2",
                    "x2": "12",
                    "y2": "9"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "4.22",
                    "y1": "10.22",
                    "x2": "5.64",
                    "y2": "11.64"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "1",
                    "y1": "18",
                    "x2": "3",
                    "y2": "18"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "21",
                    "y1": "18",
                    "x2": "23",
                    "y2": "18"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "18.36",
                    "y1": "11.64",
                    "x2": "19.78",
                    "y2": "10.22"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "23",
                    "y1": "22",
                    "x2": "1",
                    "y2": "22"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "8 6 12 2 16 6"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiSunset(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M17 18a5 5 0 0 0-10 0"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "9",
                    "x2": "12",
                    "y2": "2"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "4.22",
                    "y1": "10.22",
                    "x2": "5.64",
                    "y2": "11.64"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "1",
                    "y1": "18",
                    "x2": "3",
                    "y2": "18"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "21",
                    "y1": "18",
                    "x2": "23",
                    "y2": "18"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "18.36",
                    "y1": "11.64",
                    "x2": "19.78",
                    "y2": "10.22"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "23",
                    "y1": "22",
                    "x2": "1",
                    "y2": "22"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "16 5 12 9 8 5"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiTable(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiTablet(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "rect",
                "attr": {
                    "x": "4",
                    "y": "2",
                    "width": "16",
                    "height": "20",
                    "rx": "2",
                    "ry": "2"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "18",
                    "x2": "12.01",
                    "y2": "18"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiTag(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "7",
                    "y1": "7",
                    "x2": "7.01",
                    "y2": "7"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiTarget(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "circle",
                "attr": {
                    "cx": "12",
                    "cy": "12",
                    "r": "10"
                },
                "child": []
            },
            {
                "tag": "circle",
                "attr": {
                    "cx": "12",
                    "cy": "12",
                    "r": "6"
                },
                "child": []
            },
            {
                "tag": "circle",
                "attr": {
                    "cx": "12",
                    "cy": "12",
                    "r": "2"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiTerminal(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polyline",
                "attr": {
                    "points": "4 17 10 11 4 5"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "19",
                    "x2": "20",
                    "y2": "19"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiThermometer(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiThumbsDown(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiThumbsUp(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiToggleLeft(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "rect",
                "attr": {
                    "x": "1",
                    "y": "5",
                    "width": "22",
                    "height": "14",
                    "rx": "7",
                    "ry": "7"
                },
                "child": []
            },
            {
                "tag": "circle",
                "attr": {
                    "cx": "8",
                    "cy": "12",
                    "r": "3"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiToggleRight(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "rect",
                "attr": {
                    "x": "1",
                    "y": "5",
                    "width": "22",
                    "height": "14",
                    "rx": "7",
                    "ry": "7"
                },
                "child": []
            },
            {
                "tag": "circle",
                "attr": {
                    "cx": "16",
                    "cy": "12",
                    "r": "3"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiTool(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiTrash2(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polyline",
                "attr": {
                    "points": "3 6 5 6 21 6"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "10",
                    "y1": "11",
                    "x2": "10",
                    "y2": "17"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "14",
                    "y1": "11",
                    "x2": "14",
                    "y2": "17"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiTrash(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polyline",
                "attr": {
                    "points": "3 6 5 6 21 6"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiTrello(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "rect",
                "attr": {
                    "x": "3",
                    "y": "3",
                    "width": "18",
                    "height": "18",
                    "rx": "2",
                    "ry": "2"
                },
                "child": []
            },
            {
                "tag": "rect",
                "attr": {
                    "x": "7",
                    "y": "7",
                    "width": "3",
                    "height": "9"
                },
                "child": []
            },
            {
                "tag": "rect",
                "attr": {
                    "x": "14",
                    "y": "7",
                    "width": "3",
                    "height": "5"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiTrendingDown(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polyline",
                "attr": {
                    "points": "23 18 13.5 8.5 8.5 13.5 1 6"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "17 18 23 18 23 12"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiTrendingUp(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polyline",
                "attr": {
                    "points": "23 6 13.5 15.5 8.5 10.5 1 18"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "17 6 23 6 23 12"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiTriangle(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiTruck(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "rect",
                "attr": {
                    "x": "1",
                    "y": "3",
                    "width": "15",
                    "height": "13"
                },
                "child": []
            },
            {
                "tag": "polygon",
                "attr": {
                    "points": "16 8 20 8 23 11 23 16 16 16 16 8"
                },
                "child": []
            },
            {
                "tag": "circle",
                "attr": {
                    "cx": "5.5",
                    "cy": "18.5",
                    "r": "2.5"
                },
                "child": []
            },
            {
                "tag": "circle",
                "attr": {
                    "cx": "18.5",
                    "cy": "18.5",
                    "r": "2.5"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiTv(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "rect",
                "attr": {
                    "x": "2",
                    "y": "7",
                    "width": "20",
                    "height": "15",
                    "rx": "2",
                    "ry": "2"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "17 2 12 7 7 2"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiTwitch(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiTwitter(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiType(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polyline",
                "attr": {
                    "points": "4 7 4 4 20 4 20 7"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "9",
                    "y1": "20",
                    "x2": "15",
                    "y2": "20"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "4",
                    "x2": "12",
                    "y2": "20"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiUmbrella(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiUnderline(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "4",
                    "y1": "21",
                    "x2": "20",
                    "y2": "21"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiUnlock(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "rect",
                "attr": {
                    "x": "3",
                    "y": "11",
                    "width": "18",
                    "height": "11",
                    "rx": "2",
                    "ry": "2"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M7 11V7a5 5 0 0 1 9.9-1"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiUploadCloud(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polyline",
                "attr": {
                    "points": "16 16 12 12 8 16"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "12",
                    "x2": "12",
                    "y2": "21"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "16 16 12 12 8 16"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiUpload(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "17 8 12 3 7 8"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "3",
                    "x2": "12",
                    "y2": "15"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiUserCheck(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
                },
                "child": []
            },
            {
                "tag": "circle",
                "attr": {
                    "cx": "8.5",
                    "cy": "7",
                    "r": "4"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "17 11 19 13 23 9"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiUserMinus(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
                },
                "child": []
            },
            {
                "tag": "circle",
                "attr": {
                    "cx": "8.5",
                    "cy": "7",
                    "r": "4"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "23",
                    "y1": "11",
                    "x2": "17",
                    "y2": "11"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiUserPlus(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
                },
                "child": []
            },
            {
                "tag": "circle",
                "attr": {
                    "cx": "8.5",
                    "cy": "7",
                    "r": "4"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "20",
                    "y1": "8",
                    "x2": "20",
                    "y2": "14"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "23",
                    "y1": "11",
                    "x2": "17",
                    "y2": "11"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiUserX(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
                },
                "child": []
            },
            {
                "tag": "circle",
                "attr": {
                    "cx": "8.5",
                    "cy": "7",
                    "r": "4"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "18",
                    "y1": "8",
                    "x2": "23",
                    "y2": "13"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "23",
                    "y1": "8",
                    "x2": "18",
                    "y2": "13"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiUser(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                },
                "child": []
            },
            {
                "tag": "circle",
                "attr": {
                    "cx": "12",
                    "cy": "7",
                    "r": "4"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiUsers(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
                },
                "child": []
            },
            {
                "tag": "circle",
                "attr": {
                    "cx": "9",
                    "cy": "7",
                    "r": "4"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M23 21v-2a4 4 0 0 0-3-3.87"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M16 3.13a4 4 0 0 1 0 7.75"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiVideoOff(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "1",
                    "y1": "1",
                    "x2": "23",
                    "y2": "23"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiVideo(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polygon",
                "attr": {
                    "points": "23 7 16 12 23 17 23 7"
                },
                "child": []
            },
            {
                "tag": "rect",
                "attr": {
                    "x": "1",
                    "y": "5",
                    "width": "15",
                    "height": "14",
                    "rx": "2",
                    "ry": "2"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiVoicemail(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "circle",
                "attr": {
                    "cx": "5.5",
                    "cy": "11.5",
                    "r": "4.5"
                },
                "child": []
            },
            {
                "tag": "circle",
                "attr": {
                    "cx": "18.5",
                    "cy": "11.5",
                    "r": "4.5"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "5.5",
                    "y1": "16",
                    "x2": "18.5",
                    "y2": "16"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiVolume1(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polygon",
                "attr": {
                    "points": "11 5 6 9 2 9 2 15 6 15 11 19 11 5"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M15.54 8.46a5 5 0 0 1 0 7.07"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiVolume2(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polygon",
                "attr": {
                    "points": "11 5 6 9 2 9 2 15 6 15 11 19 11 5"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiVolumeX(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polygon",
                "attr": {
                    "points": "11 5 6 9 2 9 2 15 6 15 11 19 11 5"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "23",
                    "y1": "9",
                    "x2": "17",
                    "y2": "15"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "17",
                    "y1": "9",
                    "x2": "23",
                    "y2": "15"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiVolume(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polygon",
                "attr": {
                    "points": "11 5 6 9 2 9 2 15 6 15 11 19 11 5"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiWatch(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "circle",
                "attr": {
                    "cx": "12",
                    "cy": "12",
                    "r": "7"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "12 9 12 12 13.5 13.5"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiWifiOff(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "line",
                "attr": {
                    "x1": "1",
                    "y1": "1",
                    "x2": "23",
                    "y2": "23"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M16.72 11.06A10.94 10.94 0 0 1 19 12.55"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M5 12.55a10.94 10.94 0 0 1 5.17-2.39"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M10.71 5.05A16 16 0 0 1 22.58 9"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M1.42 9a15.91 15.91 0 0 1 4.7-2.88"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M8.53 16.11a6 6 0 0 1 6.95 0"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "20",
                    "x2": "12.01",
                    "y2": "20"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiWifi(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M5 12.55a11 11 0 0 1 14.08 0"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M1.42 9a16 16 0 0 1 21.16 0"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M8.53 16.11a6 6 0 0 1 6.95 0"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "12",
                    "y1": "20",
                    "x2": "12.01",
                    "y2": "20"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiWind(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiXCircle(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "circle",
                "attr": {
                    "cx": "12",
                    "cy": "12",
                    "r": "10"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "15",
                    "y1": "9",
                    "x2": "9",
                    "y2": "15"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "9",
                    "y1": "9",
                    "x2": "15",
                    "y2": "15"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiXOctagon(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polygon",
                "attr": {
                    "points": "7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "15",
                    "y1": "9",
                    "x2": "9",
                    "y2": "15"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "9",
                    "y1": "9",
                    "x2": "15",
                    "y2": "15"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiXSquare(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "rect",
                "attr": {
                    "x": "3",
                    "y": "3",
                    "width": "18",
                    "height": "18",
                    "rx": "2",
                    "ry": "2"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "9",
                    "y1": "9",
                    "x2": "15",
                    "y2": "15"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "15",
                    "y1": "9",
                    "x2": "9",
                    "y2": "15"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiX(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "line",
                "attr": {
                    "x1": "18",
                    "y1": "6",
                    "x2": "6",
                    "y2": "18"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "6",
                    "y1": "6",
                    "x2": "18",
                    "y2": "18"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiYoutube(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"
                },
                "child": []
            },
            {
                "tag": "polygon",
                "attr": {
                    "points": "9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiZapOff(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polyline",
                "attr": {
                    "points": "12.41 6.75 13 2 10.57 4.92"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "18.57 12.91 21 10 15.66 10"
                },
                "child": []
            },
            {
                "tag": "polyline",
                "attr": {
                    "points": "8 8 3 14 12 14 11 22 16 16"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "1",
                    "y1": "1",
                    "x2": "23",
                    "y2": "23"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiZap(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "polygon",
                "attr": {
                    "points": "13 2 3 14 12 14 11 22 21 10 12 10 13 2"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiZoomIn(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "circle",
                "attr": {
                    "cx": "11",
                    "cy": "11",
                    "r": "8"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "21",
                    "y1": "21",
                    "x2": "16.65",
                    "y2": "16.65"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "11",
                    "y1": "8",
                    "x2": "11",
                    "y2": "14"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "8",
                    "y1": "11",
                    "x2": "14",
                    "y2": "11"
                },
                "child": []
            }
        ]
    })(props);
}
;
function FiZoomOut(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 24 24",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "2",
            "strokeLinecap": "round",
            "strokeLinejoin": "round"
        },
        "child": [
            {
                "tag": "circle",
                "attr": {
                    "cx": "11",
                    "cy": "11",
                    "r": "8"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "21",
                    "y1": "21",
                    "x2": "16.65",
                    "y2": "16.65"
                },
                "child": []
            },
            {
                "tag": "line",
                "attr": {
                    "x1": "8",
                    "y1": "11",
                    "x2": "14",
                    "y2": "11"
                },
                "child": []
            }
        ]
    })(props);
}
;
}),
"[project]/frontend/node_modules/react-icons/hi/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// THIS FILE IS AUTO GENERATED
__turbopack_context__.s([
    "HiAcademicCap",
    ()=>HiAcademicCap,
    "HiAdjustments",
    ()=>HiAdjustments,
    "HiAnnotation",
    ()=>HiAnnotation,
    "HiArchive",
    ()=>HiArchive,
    "HiArrowCircleDown",
    ()=>HiArrowCircleDown,
    "HiArrowCircleLeft",
    ()=>HiArrowCircleLeft,
    "HiArrowCircleRight",
    ()=>HiArrowCircleRight,
    "HiArrowCircleUp",
    ()=>HiArrowCircleUp,
    "HiArrowDown",
    ()=>HiArrowDown,
    "HiArrowLeft",
    ()=>HiArrowLeft,
    "HiArrowNarrowDown",
    ()=>HiArrowNarrowDown,
    "HiArrowNarrowLeft",
    ()=>HiArrowNarrowLeft,
    "HiArrowNarrowRight",
    ()=>HiArrowNarrowRight,
    "HiArrowNarrowUp",
    ()=>HiArrowNarrowUp,
    "HiArrowRight",
    ()=>HiArrowRight,
    "HiArrowSmDown",
    ()=>HiArrowSmDown,
    "HiArrowSmLeft",
    ()=>HiArrowSmLeft,
    "HiArrowSmRight",
    ()=>HiArrowSmRight,
    "HiArrowSmUp",
    ()=>HiArrowSmUp,
    "HiArrowUp",
    ()=>HiArrowUp,
    "HiArrowsExpand",
    ()=>HiArrowsExpand,
    "HiAtSymbol",
    ()=>HiAtSymbol,
    "HiBackspace",
    ()=>HiBackspace,
    "HiBadgeCheck",
    ()=>HiBadgeCheck,
    "HiBan",
    ()=>HiBan,
    "HiBeaker",
    ()=>HiBeaker,
    "HiBell",
    ()=>HiBell,
    "HiBookOpen",
    ()=>HiBookOpen,
    "HiBookmark",
    ()=>HiBookmark,
    "HiBookmarkAlt",
    ()=>HiBookmarkAlt,
    "HiBriefcase",
    ()=>HiBriefcase,
    "HiCake",
    ()=>HiCake,
    "HiCalculator",
    ()=>HiCalculator,
    "HiCalendar",
    ()=>HiCalendar,
    "HiCamera",
    ()=>HiCamera,
    "HiCash",
    ()=>HiCash,
    "HiChartBar",
    ()=>HiChartBar,
    "HiChartPie",
    ()=>HiChartPie,
    "HiChartSquareBar",
    ()=>HiChartSquareBar,
    "HiChat",
    ()=>HiChat,
    "HiChatAlt",
    ()=>HiChatAlt,
    "HiChatAlt2",
    ()=>HiChatAlt2,
    "HiCheck",
    ()=>HiCheck,
    "HiCheckCircle",
    ()=>HiCheckCircle,
    "HiChevronDoubleDown",
    ()=>HiChevronDoubleDown,
    "HiChevronDoubleLeft",
    ()=>HiChevronDoubleLeft,
    "HiChevronDoubleRight",
    ()=>HiChevronDoubleRight,
    "HiChevronDoubleUp",
    ()=>HiChevronDoubleUp,
    "HiChevronDown",
    ()=>HiChevronDown,
    "HiChevronLeft",
    ()=>HiChevronLeft,
    "HiChevronRight",
    ()=>HiChevronRight,
    "HiChevronUp",
    ()=>HiChevronUp,
    "HiChip",
    ()=>HiChip,
    "HiClipboard",
    ()=>HiClipboard,
    "HiClipboardCheck",
    ()=>HiClipboardCheck,
    "HiClipboardCopy",
    ()=>HiClipboardCopy,
    "HiClipboardList",
    ()=>HiClipboardList,
    "HiClock",
    ()=>HiClock,
    "HiCloud",
    ()=>HiCloud,
    "HiCloudDownload",
    ()=>HiCloudDownload,
    "HiCloudUpload",
    ()=>HiCloudUpload,
    "HiCode",
    ()=>HiCode,
    "HiCog",
    ()=>HiCog,
    "HiCollection",
    ()=>HiCollection,
    "HiColorSwatch",
    ()=>HiColorSwatch,
    "HiCreditCard",
    ()=>HiCreditCard,
    "HiCube",
    ()=>HiCube,
    "HiCubeTransparent",
    ()=>HiCubeTransparent,
    "HiCurrencyBangladeshi",
    ()=>HiCurrencyBangladeshi,
    "HiCurrencyDollar",
    ()=>HiCurrencyDollar,
    "HiCurrencyEuro",
    ()=>HiCurrencyEuro,
    "HiCurrencyPound",
    ()=>HiCurrencyPound,
    "HiCurrencyRupee",
    ()=>HiCurrencyRupee,
    "HiCurrencyYen",
    ()=>HiCurrencyYen,
    "HiCursorClick",
    ()=>HiCursorClick,
    "HiDatabase",
    ()=>HiDatabase,
    "HiDesktopComputer",
    ()=>HiDesktopComputer,
    "HiDeviceMobile",
    ()=>HiDeviceMobile,
    "HiDeviceTablet",
    ()=>HiDeviceTablet,
    "HiDocument",
    ()=>HiDocument,
    "HiDocumentAdd",
    ()=>HiDocumentAdd,
    "HiDocumentDownload",
    ()=>HiDocumentDownload,
    "HiDocumentDuplicate",
    ()=>HiDocumentDuplicate,
    "HiDocumentRemove",
    ()=>HiDocumentRemove,
    "HiDocumentReport",
    ()=>HiDocumentReport,
    "HiDocumentSearch",
    ()=>HiDocumentSearch,
    "HiDocumentText",
    ()=>HiDocumentText,
    "HiDotsCircleHorizontal",
    ()=>HiDotsCircleHorizontal,
    "HiDotsHorizontal",
    ()=>HiDotsHorizontal,
    "HiDotsVertical",
    ()=>HiDotsVertical,
    "HiDownload",
    ()=>HiDownload,
    "HiDuplicate",
    ()=>HiDuplicate,
    "HiEmojiHappy",
    ()=>HiEmojiHappy,
    "HiEmojiSad",
    ()=>HiEmojiSad,
    "HiExclamation",
    ()=>HiExclamation,
    "HiExclamationCircle",
    ()=>HiExclamationCircle,
    "HiExternalLink",
    ()=>HiExternalLink,
    "HiEye",
    ()=>HiEye,
    "HiEyeOff",
    ()=>HiEyeOff,
    "HiFastForward",
    ()=>HiFastForward,
    "HiFilm",
    ()=>HiFilm,
    "HiFilter",
    ()=>HiFilter,
    "HiFingerPrint",
    ()=>HiFingerPrint,
    "HiFire",
    ()=>HiFire,
    "HiFlag",
    ()=>HiFlag,
    "HiFolder",
    ()=>HiFolder,
    "HiFolderAdd",
    ()=>HiFolderAdd,
    "HiFolderDownload",
    ()=>HiFolderDownload,
    "HiFolderOpen",
    ()=>HiFolderOpen,
    "HiFolderRemove",
    ()=>HiFolderRemove,
    "HiGift",
    ()=>HiGift,
    "HiGlobe",
    ()=>HiGlobe,
    "HiGlobeAlt",
    ()=>HiGlobeAlt,
    "HiHand",
    ()=>HiHand,
    "HiHashtag",
    ()=>HiHashtag,
    "HiHeart",
    ()=>HiHeart,
    "HiHome",
    ()=>HiHome,
    "HiIdentification",
    ()=>HiIdentification,
    "HiInbox",
    ()=>HiInbox,
    "HiInboxIn",
    ()=>HiInboxIn,
    "HiInformationCircle",
    ()=>HiInformationCircle,
    "HiKey",
    ()=>HiKey,
    "HiLibrary",
    ()=>HiLibrary,
    "HiLightBulb",
    ()=>HiLightBulb,
    "HiLightningBolt",
    ()=>HiLightningBolt,
    "HiLink",
    ()=>HiLink,
    "HiLocationMarker",
    ()=>HiLocationMarker,
    "HiLockClosed",
    ()=>HiLockClosed,
    "HiLockOpen",
    ()=>HiLockOpen,
    "HiLogin",
    ()=>HiLogin,
    "HiLogout",
    ()=>HiLogout,
    "HiMail",
    ()=>HiMail,
    "HiMailOpen",
    ()=>HiMailOpen,
    "HiMap",
    ()=>HiMap,
    "HiMenu",
    ()=>HiMenu,
    "HiMenuAlt1",
    ()=>HiMenuAlt1,
    "HiMenuAlt2",
    ()=>HiMenuAlt2,
    "HiMenuAlt3",
    ()=>HiMenuAlt3,
    "HiMenuAlt4",
    ()=>HiMenuAlt4,
    "HiMicrophone",
    ()=>HiMicrophone,
    "HiMinus",
    ()=>HiMinus,
    "HiMinusCircle",
    ()=>HiMinusCircle,
    "HiMinusSm",
    ()=>HiMinusSm,
    "HiMoon",
    ()=>HiMoon,
    "HiMusicNote",
    ()=>HiMusicNote,
    "HiNewspaper",
    ()=>HiNewspaper,
    "HiOfficeBuilding",
    ()=>HiOfficeBuilding,
    "HiOutlineAcademicCap",
    ()=>HiOutlineAcademicCap,
    "HiOutlineAdjustments",
    ()=>HiOutlineAdjustments,
    "HiOutlineAnnotation",
    ()=>HiOutlineAnnotation,
    "HiOutlineArchive",
    ()=>HiOutlineArchive,
    "HiOutlineArrowCircleDown",
    ()=>HiOutlineArrowCircleDown,
    "HiOutlineArrowCircleLeft",
    ()=>HiOutlineArrowCircleLeft,
    "HiOutlineArrowCircleRight",
    ()=>HiOutlineArrowCircleRight,
    "HiOutlineArrowCircleUp",
    ()=>HiOutlineArrowCircleUp,
    "HiOutlineArrowDown",
    ()=>HiOutlineArrowDown,
    "HiOutlineArrowLeft",
    ()=>HiOutlineArrowLeft,
    "HiOutlineArrowNarrowDown",
    ()=>HiOutlineArrowNarrowDown,
    "HiOutlineArrowNarrowLeft",
    ()=>HiOutlineArrowNarrowLeft,
    "HiOutlineArrowNarrowRight",
    ()=>HiOutlineArrowNarrowRight,
    "HiOutlineArrowNarrowUp",
    ()=>HiOutlineArrowNarrowUp,
    "HiOutlineArrowRight",
    ()=>HiOutlineArrowRight,
    "HiOutlineArrowSmDown",
    ()=>HiOutlineArrowSmDown,
    "HiOutlineArrowSmLeft",
    ()=>HiOutlineArrowSmLeft,
    "HiOutlineArrowSmRight",
    ()=>HiOutlineArrowSmRight,
    "HiOutlineArrowSmUp",
    ()=>HiOutlineArrowSmUp,
    "HiOutlineArrowUp",
    ()=>HiOutlineArrowUp,
    "HiOutlineArrowsExpand",
    ()=>HiOutlineArrowsExpand,
    "HiOutlineAtSymbol",
    ()=>HiOutlineAtSymbol,
    "HiOutlineBackspace",
    ()=>HiOutlineBackspace,
    "HiOutlineBadgeCheck",
    ()=>HiOutlineBadgeCheck,
    "HiOutlineBan",
    ()=>HiOutlineBan,
    "HiOutlineBeaker",
    ()=>HiOutlineBeaker,
    "HiOutlineBell",
    ()=>HiOutlineBell,
    "HiOutlineBookOpen",
    ()=>HiOutlineBookOpen,
    "HiOutlineBookmark",
    ()=>HiOutlineBookmark,
    "HiOutlineBookmarkAlt",
    ()=>HiOutlineBookmarkAlt,
    "HiOutlineBriefcase",
    ()=>HiOutlineBriefcase,
    "HiOutlineCake",
    ()=>HiOutlineCake,
    "HiOutlineCalculator",
    ()=>HiOutlineCalculator,
    "HiOutlineCalendar",
    ()=>HiOutlineCalendar,
    "HiOutlineCamera",
    ()=>HiOutlineCamera,
    "HiOutlineCash",
    ()=>HiOutlineCash,
    "HiOutlineChartBar",
    ()=>HiOutlineChartBar,
    "HiOutlineChartPie",
    ()=>HiOutlineChartPie,
    "HiOutlineChartSquareBar",
    ()=>HiOutlineChartSquareBar,
    "HiOutlineChat",
    ()=>HiOutlineChat,
    "HiOutlineChatAlt",
    ()=>HiOutlineChatAlt,
    "HiOutlineChatAlt2",
    ()=>HiOutlineChatAlt2,
    "HiOutlineCheck",
    ()=>HiOutlineCheck,
    "HiOutlineCheckCircle",
    ()=>HiOutlineCheckCircle,
    "HiOutlineChevronDoubleDown",
    ()=>HiOutlineChevronDoubleDown,
    "HiOutlineChevronDoubleLeft",
    ()=>HiOutlineChevronDoubleLeft,
    "HiOutlineChevronDoubleRight",
    ()=>HiOutlineChevronDoubleRight,
    "HiOutlineChevronDoubleUp",
    ()=>HiOutlineChevronDoubleUp,
    "HiOutlineChevronDown",
    ()=>HiOutlineChevronDown,
    "HiOutlineChevronLeft",
    ()=>HiOutlineChevronLeft,
    "HiOutlineChevronRight",
    ()=>HiOutlineChevronRight,
    "HiOutlineChevronUp",
    ()=>HiOutlineChevronUp,
    "HiOutlineChip",
    ()=>HiOutlineChip,
    "HiOutlineClipboard",
    ()=>HiOutlineClipboard,
    "HiOutlineClipboardCheck",
    ()=>HiOutlineClipboardCheck,
    "HiOutlineClipboardCopy",
    ()=>HiOutlineClipboardCopy,
    "HiOutlineClipboardList",
    ()=>HiOutlineClipboardList,
    "HiOutlineClock",
    ()=>HiOutlineClock,
    "HiOutlineCloud",
    ()=>HiOutlineCloud,
    "HiOutlineCloudDownload",
    ()=>HiOutlineCloudDownload,
    "HiOutlineCloudUpload",
    ()=>HiOutlineCloudUpload,
    "HiOutlineCode",
    ()=>HiOutlineCode,
    "HiOutlineCog",
    ()=>HiOutlineCog,
    "HiOutlineCollection",
    ()=>HiOutlineCollection,
    "HiOutlineColorSwatch",
    ()=>HiOutlineColorSwatch,
    "HiOutlineCreditCard",
    ()=>HiOutlineCreditCard,
    "HiOutlineCube",
    ()=>HiOutlineCube,
    "HiOutlineCubeTransparent",
    ()=>HiOutlineCubeTransparent,
    "HiOutlineCurrencyBangladeshi",
    ()=>HiOutlineCurrencyBangladeshi,
    "HiOutlineCurrencyDollar",
    ()=>HiOutlineCurrencyDollar,
    "HiOutlineCurrencyEuro",
    ()=>HiOutlineCurrencyEuro,
    "HiOutlineCurrencyPound",
    ()=>HiOutlineCurrencyPound,
    "HiOutlineCurrencyRupee",
    ()=>HiOutlineCurrencyRupee,
    "HiOutlineCurrencyYen",
    ()=>HiOutlineCurrencyYen,
    "HiOutlineCursorClick",
    ()=>HiOutlineCursorClick,
    "HiOutlineDatabase",
    ()=>HiOutlineDatabase,
    "HiOutlineDesktopComputer",
    ()=>HiOutlineDesktopComputer,
    "HiOutlineDeviceMobile",
    ()=>HiOutlineDeviceMobile,
    "HiOutlineDeviceTablet",
    ()=>HiOutlineDeviceTablet,
    "HiOutlineDocument",
    ()=>HiOutlineDocument,
    "HiOutlineDocumentAdd",
    ()=>HiOutlineDocumentAdd,
    "HiOutlineDocumentDownload",
    ()=>HiOutlineDocumentDownload,
    "HiOutlineDocumentDuplicate",
    ()=>HiOutlineDocumentDuplicate,
    "HiOutlineDocumentRemove",
    ()=>HiOutlineDocumentRemove,
    "HiOutlineDocumentReport",
    ()=>HiOutlineDocumentReport,
    "HiOutlineDocumentSearch",
    ()=>HiOutlineDocumentSearch,
    "HiOutlineDocumentText",
    ()=>HiOutlineDocumentText,
    "HiOutlineDotsCircleHorizontal",
    ()=>HiOutlineDotsCircleHorizontal,
    "HiOutlineDotsHorizontal",
    ()=>HiOutlineDotsHorizontal,
    "HiOutlineDotsVertical",
    ()=>HiOutlineDotsVertical,
    "HiOutlineDownload",
    ()=>HiOutlineDownload,
    "HiOutlineDuplicate",
    ()=>HiOutlineDuplicate,
    "HiOutlineEmojiHappy",
    ()=>HiOutlineEmojiHappy,
    "HiOutlineEmojiSad",
    ()=>HiOutlineEmojiSad,
    "HiOutlineExclamation",
    ()=>HiOutlineExclamation,
    "HiOutlineExclamationCircle",
    ()=>HiOutlineExclamationCircle,
    "HiOutlineExternalLink",
    ()=>HiOutlineExternalLink,
    "HiOutlineEye",
    ()=>HiOutlineEye,
    "HiOutlineEyeOff",
    ()=>HiOutlineEyeOff,
    "HiOutlineFastForward",
    ()=>HiOutlineFastForward,
    "HiOutlineFilm",
    ()=>HiOutlineFilm,
    "HiOutlineFilter",
    ()=>HiOutlineFilter,
    "HiOutlineFingerPrint",
    ()=>HiOutlineFingerPrint,
    "HiOutlineFire",
    ()=>HiOutlineFire,
    "HiOutlineFlag",
    ()=>HiOutlineFlag,
    "HiOutlineFolder",
    ()=>HiOutlineFolder,
    "HiOutlineFolderAdd",
    ()=>HiOutlineFolderAdd,
    "HiOutlineFolderDownload",
    ()=>HiOutlineFolderDownload,
    "HiOutlineFolderOpen",
    ()=>HiOutlineFolderOpen,
    "HiOutlineFolderRemove",
    ()=>HiOutlineFolderRemove,
    "HiOutlineGift",
    ()=>HiOutlineGift,
    "HiOutlineGlobe",
    ()=>HiOutlineGlobe,
    "HiOutlineGlobeAlt",
    ()=>HiOutlineGlobeAlt,
    "HiOutlineHand",
    ()=>HiOutlineHand,
    "HiOutlineHashtag",
    ()=>HiOutlineHashtag,
    "HiOutlineHeart",
    ()=>HiOutlineHeart,
    "HiOutlineHome",
    ()=>HiOutlineHome,
    "HiOutlineIdentification",
    ()=>HiOutlineIdentification,
    "HiOutlineInbox",
    ()=>HiOutlineInbox,
    "HiOutlineInboxIn",
    ()=>HiOutlineInboxIn,
    "HiOutlineInformationCircle",
    ()=>HiOutlineInformationCircle,
    "HiOutlineKey",
    ()=>HiOutlineKey,
    "HiOutlineLibrary",
    ()=>HiOutlineLibrary,
    "HiOutlineLightBulb",
    ()=>HiOutlineLightBulb,
    "HiOutlineLightningBolt",
    ()=>HiOutlineLightningBolt,
    "HiOutlineLink",
    ()=>HiOutlineLink,
    "HiOutlineLocationMarker",
    ()=>HiOutlineLocationMarker,
    "HiOutlineLockClosed",
    ()=>HiOutlineLockClosed,
    "HiOutlineLockOpen",
    ()=>HiOutlineLockOpen,
    "HiOutlineLogin",
    ()=>HiOutlineLogin,
    "HiOutlineLogout",
    ()=>HiOutlineLogout,
    "HiOutlineMail",
    ()=>HiOutlineMail,
    "HiOutlineMailOpen",
    ()=>HiOutlineMailOpen,
    "HiOutlineMap",
    ()=>HiOutlineMap,
    "HiOutlineMenu",
    ()=>HiOutlineMenu,
    "HiOutlineMenuAlt1",
    ()=>HiOutlineMenuAlt1,
    "HiOutlineMenuAlt2",
    ()=>HiOutlineMenuAlt2,
    "HiOutlineMenuAlt3",
    ()=>HiOutlineMenuAlt3,
    "HiOutlineMenuAlt4",
    ()=>HiOutlineMenuAlt4,
    "HiOutlineMicrophone",
    ()=>HiOutlineMicrophone,
    "HiOutlineMinus",
    ()=>HiOutlineMinus,
    "HiOutlineMinusCircle",
    ()=>HiOutlineMinusCircle,
    "HiOutlineMinusSm",
    ()=>HiOutlineMinusSm,
    "HiOutlineMoon",
    ()=>HiOutlineMoon,
    "HiOutlineMusicNote",
    ()=>HiOutlineMusicNote,
    "HiOutlineNewspaper",
    ()=>HiOutlineNewspaper,
    "HiOutlineOfficeBuilding",
    ()=>HiOutlineOfficeBuilding,
    "HiOutlinePaperAirplane",
    ()=>HiOutlinePaperAirplane,
    "HiOutlinePaperClip",
    ()=>HiOutlinePaperClip,
    "HiOutlinePause",
    ()=>HiOutlinePause,
    "HiOutlinePencil",
    ()=>HiOutlinePencil,
    "HiOutlinePencilAlt",
    ()=>HiOutlinePencilAlt,
    "HiOutlinePhone",
    ()=>HiOutlinePhone,
    "HiOutlinePhoneIncoming",
    ()=>HiOutlinePhoneIncoming,
    "HiOutlinePhoneMissedCall",
    ()=>HiOutlinePhoneMissedCall,
    "HiOutlinePhoneOutgoing",
    ()=>HiOutlinePhoneOutgoing,
    "HiOutlinePhotograph",
    ()=>HiOutlinePhotograph,
    "HiOutlinePlay",
    ()=>HiOutlinePlay,
    "HiOutlinePlus",
    ()=>HiOutlinePlus,
    "HiOutlinePlusCircle",
    ()=>HiOutlinePlusCircle,
    "HiOutlinePlusSm",
    ()=>HiOutlinePlusSm,
    "HiOutlinePresentationChartBar",
    ()=>HiOutlinePresentationChartBar,
    "HiOutlinePresentationChartLine",
    ()=>HiOutlinePresentationChartLine,
    "HiOutlinePrinter",
    ()=>HiOutlinePrinter,
    "HiOutlinePuzzle",
    ()=>HiOutlinePuzzle,
    "HiOutlineQrcode",
    ()=>HiOutlineQrcode,
    "HiOutlineQuestionMarkCircle",
    ()=>HiOutlineQuestionMarkCircle,
    "HiOutlineReceiptRefund",
    ()=>HiOutlineReceiptRefund,
    "HiOutlineReceiptTax",
    ()=>HiOutlineReceiptTax,
    "HiOutlineRefresh",
    ()=>HiOutlineRefresh,
    "HiOutlineReply",
    ()=>HiOutlineReply,
    "HiOutlineRewind",
    ()=>HiOutlineRewind,
    "HiOutlineRss",
    ()=>HiOutlineRss,
    "HiOutlineSave",
    ()=>HiOutlineSave,
    "HiOutlineSaveAs",
    ()=>HiOutlineSaveAs,
    "HiOutlineScale",
    ()=>HiOutlineScale,
    "HiOutlineScissors",
    ()=>HiOutlineScissors,
    "HiOutlineSearch",
    ()=>HiOutlineSearch,
    "HiOutlineSearchCircle",
    ()=>HiOutlineSearchCircle,
    "HiOutlineSelector",
    ()=>HiOutlineSelector,
    "HiOutlineServer",
    ()=>HiOutlineServer,
    "HiOutlineShare",
    ()=>HiOutlineShare,
    "HiOutlineShieldCheck",
    ()=>HiOutlineShieldCheck,
    "HiOutlineShieldExclamation",
    ()=>HiOutlineShieldExclamation,
    "HiOutlineShoppingBag",
    ()=>HiOutlineShoppingBag,
    "HiOutlineShoppingCart",
    ()=>HiOutlineShoppingCart,
    "HiOutlineSortAscending",
    ()=>HiOutlineSortAscending,
    "HiOutlineSortDescending",
    ()=>HiOutlineSortDescending,
    "HiOutlineSparkles",
    ()=>HiOutlineSparkles,
    "HiOutlineSpeakerphone",
    ()=>HiOutlineSpeakerphone,
    "HiOutlineStar",
    ()=>HiOutlineStar,
    "HiOutlineStatusOffline",
    ()=>HiOutlineStatusOffline,
    "HiOutlineStatusOnline",
    ()=>HiOutlineStatusOnline,
    "HiOutlineStop",
    ()=>HiOutlineStop,
    "HiOutlineSun",
    ()=>HiOutlineSun,
    "HiOutlineSupport",
    ()=>HiOutlineSupport,
    "HiOutlineSwitchHorizontal",
    ()=>HiOutlineSwitchHorizontal,
    "HiOutlineSwitchVertical",
    ()=>HiOutlineSwitchVertical,
    "HiOutlineTable",
    ()=>HiOutlineTable,
    "HiOutlineTag",
    ()=>HiOutlineTag,
    "HiOutlineTemplate",
    ()=>HiOutlineTemplate,
    "HiOutlineTerminal",
    ()=>HiOutlineTerminal,
    "HiOutlineThumbDown",
    ()=>HiOutlineThumbDown,
    "HiOutlineThumbUp",
    ()=>HiOutlineThumbUp,
    "HiOutlineTicket",
    ()=>HiOutlineTicket,
    "HiOutlineTranslate",
    ()=>HiOutlineTranslate,
    "HiOutlineTrash",
    ()=>HiOutlineTrash,
    "HiOutlineTrendingDown",
    ()=>HiOutlineTrendingDown,
    "HiOutlineTrendingUp",
    ()=>HiOutlineTrendingUp,
    "HiOutlineTruck",
    ()=>HiOutlineTruck,
    "HiOutlineUpload",
    ()=>HiOutlineUpload,
    "HiOutlineUser",
    ()=>HiOutlineUser,
    "HiOutlineUserAdd",
    ()=>HiOutlineUserAdd,
    "HiOutlineUserCircle",
    ()=>HiOutlineUserCircle,
    "HiOutlineUserGroup",
    ()=>HiOutlineUserGroup,
    "HiOutlineUserRemove",
    ()=>HiOutlineUserRemove,
    "HiOutlineUsers",
    ()=>HiOutlineUsers,
    "HiOutlineVariable",
    ()=>HiOutlineVariable,
    "HiOutlineVideoCamera",
    ()=>HiOutlineVideoCamera,
    "HiOutlineViewBoards",
    ()=>HiOutlineViewBoards,
    "HiOutlineViewGrid",
    ()=>HiOutlineViewGrid,
    "HiOutlineViewGridAdd",
    ()=>HiOutlineViewGridAdd,
    "HiOutlineViewList",
    ()=>HiOutlineViewList,
    "HiOutlineVolumeOff",
    ()=>HiOutlineVolumeOff,
    "HiOutlineVolumeUp",
    ()=>HiOutlineVolumeUp,
    "HiOutlineWifi",
    ()=>HiOutlineWifi,
    "HiOutlineX",
    ()=>HiOutlineX,
    "HiOutlineXCircle",
    ()=>HiOutlineXCircle,
    "HiOutlineZoomIn",
    ()=>HiOutlineZoomIn,
    "HiOutlineZoomOut",
    ()=>HiOutlineZoomOut,
    "HiPaperAirplane",
    ()=>HiPaperAirplane,
    "HiPaperClip",
    ()=>HiPaperClip,
    "HiPause",
    ()=>HiPause,
    "HiPencil",
    ()=>HiPencil,
    "HiPencilAlt",
    ()=>HiPencilAlt,
    "HiPhone",
    ()=>HiPhone,
    "HiPhoneIncoming",
    ()=>HiPhoneIncoming,
    "HiPhoneMissedCall",
    ()=>HiPhoneMissedCall,
    "HiPhoneOutgoing",
    ()=>HiPhoneOutgoing,
    "HiPhotograph",
    ()=>HiPhotograph,
    "HiPlay",
    ()=>HiPlay,
    "HiPlus",
    ()=>HiPlus,
    "HiPlusCircle",
    ()=>HiPlusCircle,
    "HiPlusSm",
    ()=>HiPlusSm,
    "HiPresentationChartBar",
    ()=>HiPresentationChartBar,
    "HiPresentationChartLine",
    ()=>HiPresentationChartLine,
    "HiPrinter",
    ()=>HiPrinter,
    "HiPuzzle",
    ()=>HiPuzzle,
    "HiQrcode",
    ()=>HiQrcode,
    "HiQuestionMarkCircle",
    ()=>HiQuestionMarkCircle,
    "HiReceiptRefund",
    ()=>HiReceiptRefund,
    "HiReceiptTax",
    ()=>HiReceiptTax,
    "HiRefresh",
    ()=>HiRefresh,
    "HiReply",
    ()=>HiReply,
    "HiRewind",
    ()=>HiRewind,
    "HiRss",
    ()=>HiRss,
    "HiSave",
    ()=>HiSave,
    "HiSaveAs",
    ()=>HiSaveAs,
    "HiScale",
    ()=>HiScale,
    "HiScissors",
    ()=>HiScissors,
    "HiSearch",
    ()=>HiSearch,
    "HiSearchCircle",
    ()=>HiSearchCircle,
    "HiSelector",
    ()=>HiSelector,
    "HiServer",
    ()=>HiServer,
    "HiShare",
    ()=>HiShare,
    "HiShieldCheck",
    ()=>HiShieldCheck,
    "HiShieldExclamation",
    ()=>HiShieldExclamation,
    "HiShoppingBag",
    ()=>HiShoppingBag,
    "HiShoppingCart",
    ()=>HiShoppingCart,
    "HiSortAscending",
    ()=>HiSortAscending,
    "HiSortDescending",
    ()=>HiSortDescending,
    "HiSparkles",
    ()=>HiSparkles,
    "HiSpeakerphone",
    ()=>HiSpeakerphone,
    "HiStar",
    ()=>HiStar,
    "HiStatusOffline",
    ()=>HiStatusOffline,
    "HiStatusOnline",
    ()=>HiStatusOnline,
    "HiStop",
    ()=>HiStop,
    "HiSun",
    ()=>HiSun,
    "HiSupport",
    ()=>HiSupport,
    "HiSwitchHorizontal",
    ()=>HiSwitchHorizontal,
    "HiSwitchVertical",
    ()=>HiSwitchVertical,
    "HiTable",
    ()=>HiTable,
    "HiTag",
    ()=>HiTag,
    "HiTemplate",
    ()=>HiTemplate,
    "HiTerminal",
    ()=>HiTerminal,
    "HiThumbDown",
    ()=>HiThumbDown,
    "HiThumbUp",
    ()=>HiThumbUp,
    "HiTicket",
    ()=>HiTicket,
    "HiTranslate",
    ()=>HiTranslate,
    "HiTrash",
    ()=>HiTrash,
    "HiTrendingDown",
    ()=>HiTrendingDown,
    "HiTrendingUp",
    ()=>HiTrendingUp,
    "HiTruck",
    ()=>HiTruck,
    "HiUpload",
    ()=>HiUpload,
    "HiUser",
    ()=>HiUser,
    "HiUserAdd",
    ()=>HiUserAdd,
    "HiUserCircle",
    ()=>HiUserCircle,
    "HiUserGroup",
    ()=>HiUserGroup,
    "HiUserRemove",
    ()=>HiUserRemove,
    "HiUsers",
    ()=>HiUsers,
    "HiVariable",
    ()=>HiVariable,
    "HiVideoCamera",
    ()=>HiVideoCamera,
    "HiViewBoards",
    ()=>HiViewBoards,
    "HiViewGrid",
    ()=>HiViewGrid,
    "HiViewGridAdd",
    ()=>HiViewGridAdd,
    "HiViewList",
    ()=>HiViewList,
    "HiVolumeOff",
    ()=>HiVolumeOff,
    "HiVolumeUp",
    ()=>HiVolumeUp,
    "HiWifi",
    ()=>HiWifi,
    "HiX",
    ()=>HiX,
    "HiXCircle",
    ()=>HiXCircle,
    "HiZoomIn",
    ()=>HiZoomIn,
    "HiZoomOut",
    ()=>HiZoomOut
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-icons/lib/iconBase.mjs [app-client] (ecmascript)");
;
function HiAcademicCap(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiAdjustments(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiAnnotation(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiArchive(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M4 3a2 2 0 100 4h12a2 2 0 100-4H4z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiArrowCircleDown(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiArrowCircleLeft(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiArrowCircleRight(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiArrowCircleUp(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiArrowDown(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiArrowLeft(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiArrowNarrowDown(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiArrowNarrowLeft(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiArrowNarrowRight(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiArrowNarrowUp(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiArrowRight(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiArrowSmDown(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiArrowSmLeft(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiArrowSmRight(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiArrowSmUp(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiArrowUp(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiArrowsExpand(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 110-2h4a1 1 0 011 1v4a1 1 0 11-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 112 0v1.586l2.293-2.293a1 1 0 011.414 1.414L6.414 15H8a1 1 0 110 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 110-2h1.586l-2.293-2.293a1 1 0 011.414-1.414L15 13.586V12a1 1 0 011-1z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiAtSymbol(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiBackspace(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M6.707 4.879A3 3 0 018.828 4H15a3 3 0 013 3v6a3 3 0 01-3 3H8.828a3 3 0 01-2.12-.879l-4.415-4.414a1 1 0 010-1.414l4.414-4.414zm4 2.414a1 1 0 00-1.414 1.414L10.586 10l-1.293 1.293a1 1 0 101.414 1.414L12 11.414l1.293 1.293a1 1 0 001.414-1.414L13.414 10l1.293-1.293a1 1 0 00-1.414-1.414L12 8.586l-1.293-1.293z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiBadgeCheck(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiBan(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiBeaker(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiBell(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiBookOpen(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiBookmarkAlt(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm11 1H6v8l4-2 4 2V6z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiBookmark(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiBriefcase(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z",
                    "clipRule": "evenodd"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiCake(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M6 3a1 1 0 011-1h.01a1 1 0 010 2H7a1 1 0 01-1-1zm2 3a1 1 0 00-2 0v1a2 2 0 00-2 2v1a2 2 0 00-2 2v.683a3.7 3.7 0 011.055.485 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0A3.7 3.7 0 0118 12.683V12a2 2 0 00-2-2V9a2 2 0 00-2-2V6a1 1 0 10-2 0v1h-1V6a1 1 0 10-2 0v1H8V6zm10 8.868a3.704 3.704 0 01-4.055-.036 1.704 1.704 0 00-1.89 0 3.704 3.704 0 01-4.11 0 1.704 1.704 0 00-1.89 0A3.704 3.704 0 012 14.868V17a1 1 0 001 1h14a1 1 0 001-1v-2.132zM9 3a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm3 0a1 1 0 011-1h.01a1 1 0 110 2H13a1 1 0 01-1-1z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiCalculator(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 1a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm4-4a1 1 0 100 2h.01a1 1 0 100-2H13zM9 9a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zM7 8a1 1 0 000 2h.01a1 1 0 000-2H7z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiCalendar(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiCamera(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiCash(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiChartBar(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiChartPie(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiChartSquareBar(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm9 4a1 1 0 10-2 0v6a1 1 0 102 0V7zm-3 2a1 1 0 10-2 0v4a1 1 0 102 0V9zm-3 3a1 1 0 10-2 0v1a1 1 0 102 0v-1z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiChatAlt2(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiChatAlt(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiChat(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiCheckCircle(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiCheck(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiChevronDoubleDown(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiChevronDoubleLeft(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiChevronDoubleRight(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                    "clipRule": "evenodd"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiChevronDoubleUp(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M4.293 15.707a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414 0zm0-6a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 5.414 5.707 9.707a1 1 0 01-1.414 0z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiChevronDown(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiChevronLeft(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiChevronRight(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiChevronUp(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiChip(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M13 7H7v6h6V7z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiClipboardCheck(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiClipboardCopy(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M8 2a1 1 0 000 2h2a1 1 0 100-2H8z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 110 2h-2v-2z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiClipboardList(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiClipboard(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiClock(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiCloudDownload(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5zm9 3.5H9V8a1 1 0 012 0v5z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiCloudUpload(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M9 13h2v5a1 1 0 11-2 0v-5z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiCloud(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiCode(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiCog(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiCollection(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiColorSwatch(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiCreditCard(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiCubeTransparent(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiCube(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiCurrencyBangladeshi(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M10 18a8 8 0 100-16 8 8 0 000 16zM7 4a1 1 0 000 2 1 1 0 011 1v1H7a1 1 0 000 2h1v3a3 3 0 106 0v-1a1 1 0 10-2 0v1a1 1 0 11-2 0v-3h3a1 1 0 100-2h-3V7a3 3 0 00-3-3z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiCurrencyDollar(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiCurrencyEuro(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M10 18a8 8 0 100-16 8 8 0 000 16zM8.736 6.979C9.208 6.193 9.696 6 10 6c.304 0 .792.193 1.264.979a1 1 0 001.715-1.029C12.279 4.784 11.232 4 10 4s-2.279.784-2.979 1.95c-.285.475-.507 1-.67 1.55H6a1 1 0 000 2h.013a9.358 9.358 0 000 1H6a1 1 0 100 2h.351c.163.55.385 1.075.67 1.55C7.721 15.216 8.768 16 10 16s2.279-.784 2.979-1.95a1 1 0 10-1.715-1.029c-.472.786-.96.979-1.264.979-.304 0-.792-.193-1.264-.979a4.265 4.265 0 01-.264-.521H10a1 1 0 100-2H8.017a7.36 7.36 0 010-1H10a1 1 0 100-2H8.472c.08-.185.167-.36.264-.521z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiCurrencyPound(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M10 18a8 8 0 100-16 8 8 0 000 16zm1-14a3 3 0 00-3 3v2H7a1 1 0 000 2h1v1a1 1 0 01-1 1 1 1 0 100 2h6a1 1 0 100-2H9.83c.11-.313.17-.65.17-1v-1h1a1 1 0 100-2h-1V7a1 1 0 112 0 1 1 0 102 0 3 3 0 00-3-3z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiCurrencyRupee(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M10 18a8 8 0 100-16 8 8 0 000 16zM7 5a1 1 0 100 2h1a2 2 0 011.732 1H7a1 1 0 100 2h2.732A2 2 0 018 11H7a1 1 0 00-.707 1.707l3 3a1 1 0 001.414-1.414l-1.483-1.484A4.008 4.008 0 0011.874 10H13a1 1 0 100-2h-1.126a3.976 3.976 0 00-.41-1H13a1 1 0 100-2H7z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiCurrencyYen(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M10 18a8 8 0 100-16 8 8 0 000 16zM7.858 5.485a1 1 0 00-1.715 1.03L7.633 9H7a1 1 0 100 2h1.834l.166.277V12H7a1 1 0 100 2h2v1a1 1 0 102 0v-1h2a1 1 0 100-2h-2v-.723l.166-.277H13a1 1 0 100-2h-.634l1.492-2.486a1 1 0 10-1.716-1.029L10.034 9h-.068L7.858 5.485z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiCursorClick(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiDatabase(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiDesktopComputer(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiDeviceMobile(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiDeviceTablet(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm4 14a1 1 0 100-2 1 1 0 000 2z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiDocumentAdd(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V8z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiDocumentDownload(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiDocumentDuplicate(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiDocumentRemove(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm1 8a1 1 0 100 2h6a1 1 0 100-2H7z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiDocumentReport(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiDocumentSearch(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2h-1.528A6 6 0 004 9.528V4z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M8 10a4 4 0 00-3.446 6.032l-1.261 1.26a1 1 0 101.414 1.415l1.261-1.261A4 4 0 108 10zm-2 4a2 2 0 114 0 2 2 0 01-4 0z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiDocumentText(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiDocument(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiDotsCircleHorizontal(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M10 18a8 8 0 100-16 8 8 0 000 16zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiDotsHorizontal(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiDotsVertical(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiDownload(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiDuplicate(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiEmojiHappy(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiEmojiSad(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-7.536 5.879a1 1 0 001.415 0 3 3 0 014.242 0 1 1 0 001.415-1.415 5 5 0 00-7.072 0 1 1 0 000 1.415z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiExclamationCircle(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiExclamation(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiExternalLink(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiEyeOff(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z",
                    "clipRule": "evenodd"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiEye(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M10 12a2 2 0 100-4 2 2 0 000 4z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiFastForward(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M4.555 5.168A1 1 0 003 6v8a1 1 0 001.555.832L10 11.202V14a1 1 0 001.555.832l6-4a1 1 0 000-1.664l-6-4A1 1 0 0010 6v2.798l-5.445-3.63z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiFilm(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm3 2h6v4H7V5zm8 8v2h1v-2h-1zm-2-2H7v4h6v-4zm2 0h1V9h-1v2zm1-4V5h-1v2h1zM5 5v2H4V5h1zm0 4H4v2h1V9zm-1 4h1v2H4v-2z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiFilter(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiFingerPrint(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M6.625 2.655A9 9 0 0119 11a1 1 0 11-2 0 7 7 0 00-9.625-6.492 1 1 0 11-.75-1.853zM4.662 4.959A1 1 0 014.75 6.37 6.97 6.97 0 003 11a1 1 0 11-2 0 8.97 8.97 0 012.25-5.953 1 1 0 011.412-.088z",
                    "clipRule": "evenodd"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M5 11a5 5 0 1110 0 1 1 0 11-2 0 3 3 0 10-6 0c0 1.677-.345 3.276-.968 4.729a1 1 0 11-1.838-.789A9.964 9.964 0 005 11zm8.921 2.012a1 1 0 01.831 1.145 19.86 19.86 0 01-.545 2.436 1 1 0 11-1.92-.558c.207-.713.371-1.445.49-2.192a1 1 0 011.144-.83z",
                    "clipRule": "evenodd"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M10 10a1 1 0 011 1c0 2.236-.46 4.368-1.29 6.304a1 1 0 01-1.838-.789A13.952 13.952 0 009 11a1 1 0 011-1z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiFire(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiFlag(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiFolderAdd(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-5L9 4H4zm7 5a1 1 0 10-2 0v1H8a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V9z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiFolderDownload(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-5L9 4H4zm7 5a1 1 0 10-2 0v1.586l-.293-.293a1 1 0 10-1.414 1.414l2 2 .002.002a.997.997 0 001.41 0l.002-.002 2-2a1 1 0 00-1.414-1.414l-.293.293V9z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiFolderOpen(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z",
                    "clipRule": "evenodd"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiFolderRemove(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-5L9 4H4zm4 6a1 1 0 100 2h4a1 1 0 100-2H8z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiFolder(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiGift(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z",
                    "clipRule": "evenodd"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiGlobeAlt(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiGlobe(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiHand(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M9 3a1 1 0 012 0v5.5a.5.5 0 001 0V4a1 1 0 112 0v4.5a.5.5 0 001 0V6a1 1 0 112 0v5a7 7 0 11-14 0V9a1 1 0 012 0v2.5a.5.5 0 001 0V4a1 1 0 012 0v4.5a.5.5 0 001 0V3z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiHashtag(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M9.243 3.03a1 1 0 01.727 1.213L9.53 6h2.94l.56-2.243a1 1 0 111.94.486L14.53 6H17a1 1 0 110 2h-2.97l-1 4H15a1 1 0 110 2h-2.47l-.56 2.242a1 1 0 11-1.94-.485L10.47 14H7.53l-.56 2.242a1 1 0 11-1.94-.485L5.47 14H3a1 1 0 110-2h2.97l1-4H5a1 1 0 110-2h2.47l.56-2.243a1 1 0 011.213-.727zM9.03 8l-1 4h2.938l1-4H9.031z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiHeart(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiHome(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiIdentification(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiInboxIn(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiInbox(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiInformationCircle(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiKey(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiLibrary(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M10.496 2.132a1 1 0 00-.992 0l-7 4A1 1 0 003 8v7a1 1 0 100 2h14a1 1 0 100-2V8a1 1 0 00.496-1.868l-7-4zM6 9a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1zm3 1a1 1 0 012 0v3a1 1 0 11-2 0v-3zm5-1a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiLightBulb(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiLightningBolt(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiLink(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiLocationMarker(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiLockClosed(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiLockOpen(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiLogin(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiLogout(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiMailOpen(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M2.94 6.412A2 2 0 002 8.108V16a2 2 0 002 2h12a2 2 0 002-2V8.108a2 2 0 00-.94-1.696l-6-3.75a2 2 0 00-2.12 0l-6 3.75zm2.615 2.423a1 1 0 10-1.11 1.664l5 3.333a1 1 0 001.11 0l5-3.333a1 1 0 00-1.11-1.664L10 11.798 5.555 8.835z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiMail(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiMap(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiMenuAlt1(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiMenuAlt2(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiMenuAlt3(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiMenuAlt4(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiMenu(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiMicrophone(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiMinusCircle(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiMinusSm(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiMinus(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiMoon(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiMusicNote(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiNewspaper(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z",
                    "clipRule": "evenodd"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOfficeBuilding(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiPaperAirplane(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiPaperClip(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiPause(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiPencilAlt(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiPencil(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiPhoneIncoming(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M14.414 7l3.293-3.293a1 1 0 00-1.414-1.414L13 5.586V4a1 1 0 10-2 0v4.003a.996.996 0 00.617.921A.997.997 0 0012 9h4a1 1 0 100-2h-1.586z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiPhoneMissedCall(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M16.707 3.293a1 1 0 010 1.414L15.414 6l1.293 1.293a1 1 0 01-1.414 1.414L14 7.414l-1.293 1.293a1 1 0 11-1.414-1.414L12.586 6l-1.293-1.293a1 1 0 011.414-1.414L14 4.586l1.293-1.293a1 1 0 011.414 0z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiPhoneOutgoing(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M17.924 2.617a.997.997 0 00-.215-.322l-.004-.004A.997.997 0 0017 2h-4a1 1 0 100 2h1.586l-3.293 3.293a1 1 0 001.414 1.414L16 5.414V7a1 1 0 102 0V3a.997.997 0 00-.076-.383z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiPhone(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiPhotograph(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiPlay(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiPlusCircle(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiPlusSm(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiPlus(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiPresentationChartBar(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11 4a1 1 0 10-2 0v4a1 1 0 102 0V7zm-3 1a1 1 0 10-2 0v3a1 1 0 102 0V8zM8 9a1 1 0 00-2 0v2a1 1 0 102 0V9z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiPresentationChartLine(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiPrinter(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiPuzzle(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiQrcode(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M3 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm2 2V5h1v1H5zM3 13a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3zm2 2v-1h1v1H5zM13 3a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1V4a1 1 0 00-1-1h-3zm1 2v1h1V5h-1z",
                    "clipRule": "evenodd"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M11 4a1 1 0 10-2 0v1a1 1 0 002 0V4zM10 7a1 1 0 011 1v1h2a1 1 0 110 2h-3a1 1 0 01-1-1V8a1 1 0 011-1zM16 9a1 1 0 100 2 1 1 0 000-2zM9 13a1 1 0 011-1h1a1 1 0 110 2v2a1 1 0 11-2 0v-3zM7 11a1 1 0 100-2H4a1 1 0 100 2h3zM17 13a1 1 0 01-1 1h-2a1 1 0 110-2h2a1 1 0 011 1zM16 17a1 1 0 100-2h-3a1 1 0 100 2h3z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiQuestionMarkCircle(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiReceiptRefund(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm4.707 3.707a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L8.414 9H10a3 3 0 013 3v1a1 1 0 102 0v-1a5 5 0 00-5-5H8.414l1.293-1.293z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiReceiptTax(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm2.5 3a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm6.207.293a1 1 0 00-1.414 0l-6 6a1 1 0 101.414 1.414l6-6a1 1 0 000-1.414zM12.5 10a1.5 1.5 0 100 3 1.5 1.5 0 000-3z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiRefresh(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiReply(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiRewind(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M8.445 14.832A1 1 0 0010 14v-2.798l5.445 3.63A1 1 0 0017 14V6a1 1 0 00-1.555-.832L10 8.798V6a1 1 0 00-1.555-.832l-6 4a1 1 0 000 1.664l6 4z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiRss(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M5 3a1 1 0 000 2c5.523 0 10 4.477 10 10a1 1 0 102 0C17 8.373 11.627 3 5 3z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M4 9a1 1 0 011-1 7 7 0 017 7 1 1 0 11-2 0 5 5 0 00-5-5 1 1 0 01-1-1zM3 15a2 2 0 114 0 2 2 0 01-4 0z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiSaveAs(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M9.707 7.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L13 8.586V5h3a2 2 0 012 2v5a2 2 0 01-2 2H8a2 2 0 01-2-2V7a2 2 0 012-2h3v3.586L9.707 7.293zM11 3a1 1 0 112 0v2h-2V3z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M4 9a2 2 0 00-2 2v5a2 2 0 002 2h8a2 2 0 002-2H4V9z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiSave(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M7.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V6h5a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h5v5.586l-1.293-1.293zM9 4a1 1 0 012 0v2H9V4z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiScale(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1zm-5 8.274l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L5 10.274zm10 0l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L15 10.274z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiScissors(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M5.5 2a3.5 3.5 0 101.665 6.58L8.585 10l-1.42 1.42a3.5 3.5 0 101.414 1.414l8.128-8.127a1 1 0 00-1.414-1.414L10 8.586l-1.42-1.42A3.5 3.5 0 005.5 2zM4 5.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 9a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z",
                    "clipRule": "evenodd"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M12.828 11.414a1 1 0 00-1.414 1.414l3.879 3.88a1 1 0 001.414-1.415l-3.879-3.879z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiSearchCircle(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M9 9a2 2 0 114 0 2 2 0 01-4 0z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a4 4 0 00-3.446 6.032l-2.261 2.26a1 1 0 101.414 1.415l2.261-2.261A4 4 0 1011 5z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiSearch(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiSelector(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiServer(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiShare(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiShieldCheck(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiShieldExclamation(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiShoppingBag(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiShoppingCart(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiSortAscending(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h5a1 1 0 000-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM13 16a1 1 0 102 0v-5.586l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 101.414 1.414L13 10.414V16z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiSortDescending(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h7a1 1 0 100-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiSparkles(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiSpeakerphone(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiStar(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiStatusOffline(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M3.707 2.293a1 1 0 00-1.414 1.414l6.921 6.922c.05.062.105.118.168.167l6.91 6.911a1 1 0 001.415-1.414l-.675-.675a9.001 9.001 0 00-.668-11.982A1 1 0 1014.95 5.05a7.002 7.002 0 01.657 9.143l-1.435-1.435a5.002 5.002 0 00-.636-6.294A1 1 0 0012.12 7.88c.924.923 1.12 2.3.587 3.415l-1.992-1.992a.922.922 0 00-.018-.018l-6.99-6.991zM3.238 8.187a1 1 0 00-1.933-.516c-.8 3-.025 6.336 2.331 8.693a1 1 0 001.414-1.415 6.997 6.997 0 01-1.812-6.762zM7.4 11.5a1 1 0 10-1.73 1c.214.371.48.72.795 1.035a1 1 0 001.414-1.414c-.191-.191-.35-.4-.478-.622z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiStatusOnline(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M5.05 3.636a1 1 0 010 1.414 7 7 0 000 9.9 1 1 0 11-1.414 1.414 9 9 0 010-12.728 1 1 0 011.414 0zm9.9 0a1 1 0 011.414 0 9 9 0 010 12.728 1 1 0 11-1.414-1.414 7 7 0 000-9.9 1 1 0 010-1.414zM7.879 6.464a1 1 0 010 1.414 3 3 0 000 4.243 1 1 0 11-1.415 1.414 5 5 0 010-7.07 1 1 0 011.415 0zm4.242 0a1 1 0 011.415 0 5 5 0 010 7.072 1 1 0 01-1.415-1.415 3 3 0 000-4.242 1 1 0 010-1.415zM10 9a1 1 0 011 1v.01a1 1 0 11-2 0V10a1 1 0 011-1z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiStop(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiSun(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiSupport(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiSwitchHorizontal(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M8 5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L13.586 5H8zM12 15a1 1 0 100-2H6.414l1.293-1.293a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L6.414 15H12z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiSwitchVertical(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M5 12a1 1 0 102 0V6.414l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L5 6.414V12zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiTable(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiTag(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiTemplate(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiTerminal(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiThumbDown(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiThumbUp(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiTicket(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M2 6a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 100 4v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2a2 2 0 100-4V6z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiTranslate(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.578a18.87 18.87 0 01-1.724 4.78c.29.354.596.696.914 1.026a1 1 0 11-1.44 1.389c-.188-.196-.373-.396-.554-.6a19.098 19.098 0 01-3.107 3.567 1 1 0 01-1.334-1.49 17.087 17.087 0 003.13-3.733 18.992 18.992 0 01-1.487-2.494 1 1 0 111.79-.89c.234.47.489.928.764 1.372.417-.934.752-1.913.997-2.927H3a1 1 0 110-2h3V3a1 1 0 011-1zm6 6a1 1 0 01.894.553l2.991 5.982a.869.869 0 01.02.037l.99 1.98a1 1 0 11-1.79.895L15.383 16h-4.764l-.724 1.447a1 1 0 11-1.788-.894l.99-1.98.019-.038 2.99-5.982A1 1 0 0113 8zm-1.382 6h2.764L13 11.236 11.618 14z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiTrash(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiTrendingDown(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiTrendingUp(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiTruck(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiUpload(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiUserAdd(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiUserCircle(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiUserGroup(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiUserRemove(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M11 6a3 3 0 11-6 0 3 3 0 016 0zM14 17a6 6 0 00-12 0h12zM13 8a1 1 0 100 2h4a1 1 0 100-2h-4z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiUser(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiUsers(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiVariable(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M4.649 3.084A1 1 0 015.163 4.4 13.95 13.95 0 004 10c0 1.993.416 3.886 1.164 5.6a1 1 0 01-1.832.8A15.95 15.95 0 012 10c0-2.274.475-4.44 1.332-6.4a1 1 0 011.317-.516zM12.96 7a3 3 0 00-2.342 1.126l-.328.41-.111-.279A2 2 0 008.323 7H8a1 1 0 000 2h.323l.532 1.33-1.035 1.295a1 1 0 01-.781.375H7a1 1 0 100 2h.039a3 3 0 002.342-1.126l.328-.41.111.279A2 2 0 0011.677 14H12a1 1 0 100-2h-.323l-.532-1.33 1.035-1.295A1 1 0 0112.961 9H13a1 1 0 100-2h-.039zm1.874-2.6a1 1 0 011.833-.8A15.95 15.95 0 0118 10c0 2.274-.475 4.44-1.332 6.4a1 1 0 11-1.832-.8A13.949 13.949 0 0016 10c0-1.993-.416-3.886-1.165-5.6z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiVideoCamera(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiViewBoards(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M2 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V4zM8 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H9a1 1 0 01-1-1V4zM15 3a1 1 0 00-1 1v12a1 1 0 001 1h2a1 1 0 001-1V4a1 1 0 00-1-1h-2z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiViewGridAdd(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiViewGrid(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiViewList(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiVolumeOff(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiVolumeUp(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiWifi(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.077 13.308-5.077 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0 1 1 0 01-1.414 1.414zM12.12 13.88a3 3 0 00-4.242 0 1 1 0 01-1.415-1.415 5 5 0 017.072 0 1 1 0 01-1.415 1.415zM9 16a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiXCircle(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiX(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiZoomIn(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M5 8a1 1 0 011-1h1V6a1 1 0 012 0v1h1a1 1 0 110 2H9v1a1 1 0 11-2 0V9H6a1 1 0 01-1-1z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8zm6-4a4 4 0 100 8 4 4 0 000-8z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiZoomOut(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "viewBox": "0 0 20 20",
            "fill": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",
                    "clipRule": "evenodd"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "fillRule": "evenodd",
                    "d": "M5 8a1 1 0 011-1h4a1 1 0 110 2H6a1 1 0 01-1-1z",
                    "clipRule": "evenodd"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineAcademicCap(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M12 14l9-5-9-5-9 5 9 5z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineAdjustments(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineAnnotation(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineArchive(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineArrowCircleDown(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineArrowCircleLeft(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineArrowCircleRight(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineArrowCircleUp(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineArrowDown(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M19 14l-7 7m0 0l-7-7m7 7V3"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineArrowLeft(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M10 19l-7-7m0 0l7-7m-7 7h18"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineArrowNarrowDown(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M16 17l-4 4m0 0l-4-4m4 4V3"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineArrowNarrowLeft(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M7 16l-4-4m0 0l4-4m-4 4h18"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineArrowNarrowRight(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M17 8l4 4m0 0l-4 4m4-4H3"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineArrowNarrowUp(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M8 7l4-4m0 0l4 4m-4-4v18"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineArrowRight(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M14 5l7 7m0 0l-7 7m7-7H3"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineArrowSmDown(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M17 13l-5 5m0 0l-5-5m5 5V6"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineArrowSmLeft(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M11 17l-5-5m0 0l5-5m-5 5h12"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineArrowSmRight(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M13 7l5 5m0 0l-5 5m5-5H6"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineArrowSmUp(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M7 11l5-5m0 0l5 5m-5-5v12"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineArrowUp(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M5 10l7-7m0 0l7 7m-7-7v18"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineArrowsExpand(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineAtSymbol(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineBackspace(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineBadgeCheck(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineBan(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineBeaker(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineBell(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineBookOpen(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineBookmarkAlt(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineBookmark(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineBriefcase(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineCake(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineCalculator(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineCalendar(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineCamera(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineCash(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineChartBar(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineChartPie(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineChartSquareBar(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineChatAlt2(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineChatAlt(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineChat(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineCheckCircle(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineCheck(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M5 13l4 4L19 7"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineChevronDoubleDown(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M19 13l-7 7-7-7m14-8l-7 7-7-7"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineChevronDoubleLeft(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M11 19l-7-7 7-7m8 14l-7-7 7-7"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineChevronDoubleRight(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M13 5l7 7-7 7M5 5l7 7-7 7"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineChevronDoubleUp(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M5 11l7-7 7 7M5 19l7-7 7 7"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineChevronDown(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M19 9l-7 7-7-7"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineChevronLeft(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M15 19l-7-7 7-7"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineChevronRight(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M9 5l7 7-7 7"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineChevronUp(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M5 15l7-7 7 7"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineChip(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineClipboardCheck(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineClipboardCopy(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineClipboardList(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineClipboard(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineClock(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineCloudDownload(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineCloudUpload(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineCloud(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineCode(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineCog(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineCollection(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineColorSwatch(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineCreditCard(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineCubeTransparent(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineCube(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineCurrencyBangladeshi(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M11 11V9a2 2 0 00-2-2m2 4v4a2 2 0 104 0v-1m-4-3H9m2 0h4m6 1a9 9 0 11-18 0 9 9 0 0118 0z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineCurrencyDollar(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineCurrencyEuro(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M14.121 15.536c-1.171 1.952-3.07 1.952-4.242 0-1.172-1.953-1.172-5.119 0-7.072 1.171-1.952 3.07-1.952 4.242 0M8 10.5h4m-4 3h4m9-1.5a9 9 0 11-18 0 9 9 0 0118 0z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineCurrencyPound(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M15 9a2 2 0 10-4 0v5a2 2 0 01-2 2h6m-6-4h4m8 0a9 9 0 11-18 0 9 9 0 0118 0z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineCurrencyRupee(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineCurrencyYen(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M9 8l3 5m0 0l3-5m-3 5v4m-3-5h6m-6 3h6m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineCursorClick(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineDatabase(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineDesktopComputer(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineDeviceMobile(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineDeviceTablet(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineDocumentAdd(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineDocumentDownload(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineDocumentDuplicate(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineDocumentRemove(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M9 13h6m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineDocumentReport(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineDocumentSearch(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineDocumentText(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineDocument(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineDotsCircleHorizontal(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineDotsHorizontal(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineDotsVertical(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineDownload(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineDuplicate(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineEmojiHappy(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineEmojiSad(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineExclamationCircle(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineExclamation(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineExternalLink(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineEyeOff(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineEye(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineFastForward(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineFilm(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineFilter(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineFingerPrint(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineFire(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineFlag(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineFolderAdd(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineFolderDownload(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineFolderOpen(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineFolderRemove(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M9 13h6M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineFolder(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineGift(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineGlobeAlt(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineGlobe(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineHand(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineHashtag(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineHeart(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineHome(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineIdentification(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineInboxIn(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineInbox(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineInformationCircle(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineKey(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineLibrary(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineLightBulb(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineLightningBolt(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M13 10V3L4 14h7v7l9-11h-7z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineLink(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineLocationMarker(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineLockClosed(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineLockOpen(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineLogin(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineLogout(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineMailOpen(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineMail(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineMap(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineMenuAlt1(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M4 6h16M4 12h8m-8 6h16"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineMenuAlt2(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M4 6h16M4 12h16M4 18h7"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineMenuAlt3(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M4 6h16M4 12h16m-7 6h7"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineMenuAlt4(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M4 8h16M4 16h16"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineMenu(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M4 6h16M4 12h16M4 18h16"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineMicrophone(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineMinusCircle(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineMinusSm(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M18 12H6"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineMinus(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M20 12H4"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineMoon(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineMusicNote(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineNewspaper(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineOfficeBuilding(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlinePaperAirplane(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlinePaperClip(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlinePause(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlinePencilAlt(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlinePencil(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlinePhoneIncoming(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlinePhoneMissedCall(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlinePhoneOutgoing(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M16 3h5m0 0v5m0-5l-6 6M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlinePhone(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlinePhotograph(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlinePlay(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlinePlusCircle(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlinePlusSm(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M12 6v6m0 0v6m0-6h6m-6 0H6"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlinePlus(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M12 4v16m8-8H4"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlinePresentationChartBar(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlinePresentationChartLine(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlinePrinter(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlinePuzzle(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineQrcode(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineQuestionMarkCircle(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineReceiptRefund(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineReceiptTax(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineRefresh(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineReply(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineRewind(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.333 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineRss(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M6 5c7.18 0 13 5.82 13 13M6 11a7 7 0 017 7m-6 0a1 1 0 11-2 0 1 1 0 012 0z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineSaveAs(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M17 16v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-7a2 2 0 012-2h2m3-4H9a2 2 0 00-2 2v7a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-1m-1 4l-3 3m0 0l-3-3m3 3V3"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineSave(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineScale(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineScissors(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineSearchCircle(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineSearch(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineSelector(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M8 9l4-4 4 4m0 6l-4 4-4-4"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineServer(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineShare(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineShieldCheck(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineShieldExclamation(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineShoppingBag(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineShoppingCart(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineSortAscending(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineSortDescending(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineSparkles(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineSpeakerphone(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineStar(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineStatusOffline(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3m8.293 8.293l1.414 1.414"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineStatusOnline(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineStop(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineSun(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineSupport(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineSwitchHorizontal(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineSwitchVertical(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineTable(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineTag(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineTemplate(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineTerminal(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineThumbDown(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineThumbUp(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineTicket(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineTranslate(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineTrash(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineTrendingDown(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineTrendingUp(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineTruck(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "d": "M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineUpload(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineUserAdd(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineUserCircle(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineUserGroup(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineUserRemove(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M13 7a4 4 0 11-8 0 4 4 0 018 0zM9 14a6 6 0 00-6 6v1h12v-1a6 6 0 00-6-6zM21 12h-6"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineUser(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineUsers(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineVariable(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M4.871 4A17.926 17.926 0 003 12c0 2.874.673 5.59 1.871 8m14.13 0a17.926 17.926 0 001.87-8c0-2.874-.673-5.59-1.87-8M9 9h1.246a1 1 0 01.961.725l1.586 5.55a1 1 0 00.961.725H15m1-7h-.08a2 2 0 00-1.519.698L9.6 15.302A2 2 0 018.08 16H8"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineVideoCamera(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineViewBoards(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineViewGridAdd(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineViewGrid(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineViewList(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M4 6h16M4 10h16M4 14h16M4 18h16"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineVolumeOff(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z",
                    "clipRule": "evenodd"
                },
                "child": []
            },
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineVolumeUp(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineWifi(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineXCircle(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineX(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M6 18L18 6M6 6l12 12"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineZoomIn(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                },
                "child": []
            }
        ]
    })(props);
}
;
function HiOutlineZoomOut(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenIcon"])({
        "tag": "svg",
        "attr": {
            "fill": "none",
            "viewBox": "0 0 24 24",
            "strokeWidth": "2",
            "stroke": "currentColor",
            "aria-hidden": "true"
        },
        "child": [
            {
                "tag": "path",
                "attr": {
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round",
                    "d": "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7"
                },
                "child": []
            }
        ]
    })(props);
}
;
}),
]);

//# sourceMappingURL=9e883_9d7e5828._.js.map