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
"[project]/frontend/node_modules/react-icons/lib/iconsManifest.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports.IconsManifest = [
    {
        "id": "ci",
        "name": "Circum Icons",
        "projectUrl": "https://circumicons.com/",
        "license": "MPL-2.0 license",
        "licenseUrl": "https://github.com/Klarr-Agency/Circum-Icons/blob/main/LICENSE"
    },
    {
        "id": "fa",
        "name": "Font Awesome 5",
        "projectUrl": "https://fontawesome.com/",
        "license": "CC BY 4.0 License",
        "licenseUrl": "https://creativecommons.org/licenses/by/4.0/"
    },
    {
        "id": "fa6",
        "name": "Font Awesome 6",
        "projectUrl": "https://fontawesome.com/",
        "license": "CC BY 4.0 License",
        "licenseUrl": "https://creativecommons.org/licenses/by/4.0/"
    },
    {
        "id": "io",
        "name": "Ionicons 4",
        "projectUrl": "https://ionicons.com/",
        "license": "MIT",
        "licenseUrl": "https://github.com/ionic-team/ionicons/blob/master/LICENSE"
    },
    {
        "id": "io5",
        "name": "Ionicons 5",
        "projectUrl": "https://ionicons.com/",
        "license": "MIT",
        "licenseUrl": "https://github.com/ionic-team/ionicons/blob/master/LICENSE"
    },
    {
        "id": "md",
        "name": "Material Design icons",
        "projectUrl": "http://google.github.io/material-design-icons/",
        "license": "Apache License Version 2.0",
        "licenseUrl": "https://github.com/google/material-design-icons/blob/master/LICENSE"
    },
    {
        "id": "ti",
        "name": "Typicons",
        "projectUrl": "http://s-ings.com/typicons/",
        "license": "CC BY-SA 3.0",
        "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/"
    },
    {
        "id": "go",
        "name": "Github Octicons icons",
        "projectUrl": "https://octicons.github.com/",
        "license": "MIT",
        "licenseUrl": "https://github.com/primer/octicons/blob/master/LICENSE"
    },
    {
        "id": "fi",
        "name": "Feather",
        "projectUrl": "https://feathericons.com/",
        "license": "MIT",
        "licenseUrl": "https://github.com/feathericons/feather/blob/master/LICENSE"
    },
    {
        "id": "lu",
        "name": "Lucide",
        "projectUrl": "https://lucide.dev/",
        "license": "ISC",
        "licenseUrl": "https://github.com/lucide-icons/lucide/blob/main/LICENSE"
    },
    {
        "id": "gi",
        "name": "Game Icons",
        "projectUrl": "https://game-icons.net/",
        "license": "CC BY 3.0",
        "licenseUrl": "https://creativecommons.org/licenses/by/3.0/"
    },
    {
        "id": "wi",
        "name": "Weather Icons",
        "projectUrl": "https://erikflowers.github.io/weather-icons/",
        "license": "SIL OFL 1.1",
        "licenseUrl": "http://scripts.sil.org/OFL"
    },
    {
        "id": "di",
        "name": "Devicons",
        "projectUrl": "https://vorillaz.github.io/devicons/",
        "license": "MIT",
        "licenseUrl": "https://opensource.org/licenses/MIT"
    },
    {
        "id": "ai",
        "name": "Ant Design Icons",
        "projectUrl": "https://github.com/ant-design/ant-design-icons",
        "license": "MIT",
        "licenseUrl": "https://opensource.org/licenses/MIT"
    },
    {
        "id": "bs",
        "name": "Bootstrap Icons",
        "projectUrl": "https://github.com/twbs/icons",
        "license": "MIT",
        "licenseUrl": "https://opensource.org/licenses/MIT"
    },
    {
        "id": "ri",
        "name": "Remix Icon",
        "projectUrl": "https://github.com/Remix-Design/RemixIcon",
        "license": "Apache License Version 2.0",
        "licenseUrl": "http://www.apache.org/licenses/"
    },
    {
        "id": "fc",
        "name": "Flat Color Icons",
        "projectUrl": "https://github.com/icons8/flat-color-icons",
        "license": "MIT",
        "licenseUrl": "https://opensource.org/licenses/MIT"
    },
    {
        "id": "gr",
        "name": "Grommet-Icons",
        "projectUrl": "https://github.com/grommet/grommet-icons",
        "license": "Apache License Version 2.0",
        "licenseUrl": "http://www.apache.org/licenses/"
    },
    {
        "id": "hi",
        "name": "Heroicons",
        "projectUrl": "https://github.com/tailwindlabs/heroicons",
        "license": "MIT",
        "licenseUrl": "https://opensource.org/licenses/MIT"
    },
    {
        "id": "hi2",
        "name": "Heroicons 2",
        "projectUrl": "https://github.com/tailwindlabs/heroicons",
        "license": "MIT",
        "licenseUrl": "https://opensource.org/licenses/MIT"
    },
    {
        "id": "si",
        "name": "Simple Icons",
        "projectUrl": "https://simpleicons.org/",
        "license": "CC0 1.0 Universal",
        "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/"
    },
    {
        "id": "sl",
        "name": "Simple Line Icons",
        "projectUrl": "https://thesabbir.github.io/simple-line-icons/",
        "license": "MIT",
        "licenseUrl": "https://opensource.org/licenses/MIT"
    },
    {
        "id": "im",
        "name": "IcoMoon Free",
        "projectUrl": "https://github.com/Keyamoon/IcoMoon-Free",
        "license": "CC BY 4.0 License",
        "licenseUrl": "https://github.com/Keyamoon/IcoMoon-Free/blob/master/License.txt"
    },
    {
        "id": "bi",
        "name": "BoxIcons",
        "projectUrl": "https://github.com/atisawd/boxicons",
        "license": "MIT",
        "licenseUrl": "https://github.com/atisawd/boxicons/blob/master/LICENSE"
    },
    {
        "id": "cg",
        "name": "css.gg",
        "projectUrl": "https://github.com/astrit/css.gg",
        "license": "MIT",
        "licenseUrl": "https://opensource.org/licenses/MIT"
    },
    {
        "id": "vsc",
        "name": "VS Code Icons",
        "projectUrl": "https://github.com/microsoft/vscode-codicons",
        "license": "CC BY 4.0",
        "licenseUrl": "https://creativecommons.org/licenses/by/4.0/"
    },
    {
        "id": "tb",
        "name": "Tabler Icons",
        "projectUrl": "https://github.com/tabler/tabler-icons",
        "license": "MIT",
        "licenseUrl": "https://opensource.org/licenses/MIT"
    },
    {
        "id": "tfi",
        "name": "Themify Icons",
        "projectUrl": "https://github.com/lykmapipo/themify-icons",
        "license": "MIT",
        "licenseUrl": "https://github.com/thecreation/standard-icons/blob/master/modules/themify-icons/LICENSE"
    },
    {
        "id": "rx",
        "name": "Radix Icons",
        "projectUrl": "https://icons.radix-ui.com",
        "license": "MIT",
        "licenseUrl": "https://github.com/radix-ui/icons/blob/master/LICENSE"
    },
    {
        "id": "pi",
        "name": "Phosphor Icons",
        "projectUrl": "https://github.com/phosphor-icons/core",
        "license": "MIT",
        "licenseUrl": "https://github.com/phosphor-icons/core/blob/main/LICENSE"
    },
    {
        "id": "lia",
        "name": "Icons8 Line Awesome",
        "projectUrl": "https://icons8.com/line-awesome",
        "license": "MIT",
        "licenseUrl": "https://github.com/icons8/line-awesome/blob/master/LICENSE.md"
    }
];
}),
"[project]/frontend/node_modules/react-icons/lib/iconContext.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IconContext = exports.DefaultContext = void 0;
var _react = _interopRequireDefault(__turbopack_context__.r("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var DefaultContext = exports.DefaultContext = {
    color: undefined,
    size: undefined,
    className: undefined,
    style: undefined,
    attr: undefined
};
var IconContext = exports.IconContext = _react.default.createContext && /*#__PURE__*/ _react.default.createContext(DefaultContext);
}),
"[project]/frontend/node_modules/react-icons/lib/iconBase.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GenIcon = GenIcon;
exports.IconBase = IconBase;
var _react = _interopRequireDefault(__turbopack_context__.r("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
var _iconContext = __turbopack_context__.r("[project]/frontend/node_modules/react-icons/lib/iconContext.js [app-client] (ecmascript)");
var _excluded = [
    "attr",
    "size",
    "title"
];
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
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
function Tree2Element(tree) {
    return tree && tree.map((node, i)=>/*#__PURE__*/ _react.default.createElement(node.tag, _objectSpread({
            key: i
        }, node.attr), Tree2Element(node.child)));
}
function GenIcon(data) {
    return (props)=>/*#__PURE__*/ _react.default.createElement(IconBase, _extends({
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
        return /*#__PURE__*/ _react.default.createElement("svg", _extends({
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
        }), title && /*#__PURE__*/ _react.default.createElement("title", null, title), props.children);
    };
    return _iconContext.IconContext !== undefined ? /*#__PURE__*/ _react.default.createElement(_iconContext.IconContext.Consumer, null, (conf)=>elem(conf)) : elem(_iconContext.DefaultContext);
}
}),
"[project]/frontend/node_modules/react-icons/lib/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var _iconsManifest = __turbopack_context__.r("[project]/frontend/node_modules/react-icons/lib/iconsManifest.js [app-client] (ecmascript)");
Object.keys(_iconsManifest).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in exports && exports[key] === _iconsManifest[key]) return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
            return _iconsManifest[key];
        }
    });
});
var _iconBase = __turbopack_context__.r("[project]/frontend/node_modules/react-icons/lib/iconBase.js [app-client] (ecmascript)");
Object.keys(_iconBase).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in exports && exports[key] === _iconBase[key]) return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
            return _iconBase[key];
        }
    });
});
var _iconContext = __turbopack_context__.r("[project]/frontend/node_modules/react-icons/lib/iconContext.js [app-client] (ecmascript)");
Object.keys(_iconContext).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in exports && exports[key] === _iconContext[key]) return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
            return _iconContext[key];
        }
    });
});
}),
"[project]/frontend/node_modules/react-icons/fi/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

// THIS FILE IS AUTO GENERATED
var GenIcon = __turbopack_context__.r("[project]/frontend/node_modules/react-icons/lib/index.js [app-client] (ecmascript)").GenIcon;
module.exports.FiActivity = function FiActivity(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiAirplay = function FiAirplay(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiAlertCircle = function FiAlertCircle(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiAlertOctagon = function FiAlertOctagon(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiAlertTriangle = function FiAlertTriangle(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiAlignCenter = function FiAlignCenter(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiAlignJustify = function FiAlignJustify(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiAlignLeft = function FiAlignLeft(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiAlignRight = function FiAlignRight(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiAnchor = function FiAnchor(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiAperture = function FiAperture(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiArchive = function FiArchive(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiArrowDownCircle = function FiArrowDownCircle(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiArrowDownLeft = function FiArrowDownLeft(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiArrowDownRight = function FiArrowDownRight(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiArrowDown = function FiArrowDown(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiArrowLeftCircle = function FiArrowLeftCircle(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiArrowLeft = function FiArrowLeft(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiArrowRightCircle = function FiArrowRightCircle(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiArrowRight = function FiArrowRight(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiArrowUpCircle = function FiArrowUpCircle(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiArrowUpLeft = function FiArrowUpLeft(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiArrowUpRight = function FiArrowUpRight(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiArrowUp = function FiArrowUp(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiAtSign = function FiAtSign(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiAward = function FiAward(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiBarChart2 = function FiBarChart2(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiBarChart = function FiBarChart(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiBatteryCharging = function FiBatteryCharging(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiBattery = function FiBattery(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiBellOff = function FiBellOff(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiBell = function FiBell(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiBluetooth = function FiBluetooth(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiBold = function FiBold(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiBookOpen = function FiBookOpen(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiBook = function FiBook(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiBookmark = function FiBookmark(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiBox = function FiBox(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiBriefcase = function FiBriefcase(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiCalendar = function FiCalendar(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiCameraOff = function FiCameraOff(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiCamera = function FiCamera(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiCast = function FiCast(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiCheckCircle = function FiCheckCircle(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiCheckSquare = function FiCheckSquare(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiCheck = function FiCheck(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiChevronDown = function FiChevronDown(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiChevronLeft = function FiChevronLeft(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiChevronRight = function FiChevronRight(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiChevronUp = function FiChevronUp(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiChevronsDown = function FiChevronsDown(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiChevronsLeft = function FiChevronsLeft(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiChevronsRight = function FiChevronsRight(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiChevronsUp = function FiChevronsUp(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiChrome = function FiChrome(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiCircle = function FiCircle(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiClipboard = function FiClipboard(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiClock = function FiClock(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiCloudDrizzle = function FiCloudDrizzle(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiCloudLightning = function FiCloudLightning(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiCloudOff = function FiCloudOff(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiCloudRain = function FiCloudRain(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiCloudSnow = function FiCloudSnow(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiCloud = function FiCloud(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiCode = function FiCode(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiCodepen = function FiCodepen(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiCodesandbox = function FiCodesandbox(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiCoffee = function FiCoffee(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiColumns = function FiColumns(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiCommand = function FiCommand(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiCompass = function FiCompass(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiCopy = function FiCopy(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiCornerDownLeft = function FiCornerDownLeft(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiCornerDownRight = function FiCornerDownRight(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiCornerLeftDown = function FiCornerLeftDown(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiCornerLeftUp = function FiCornerLeftUp(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiCornerRightDown = function FiCornerRightDown(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiCornerRightUp = function FiCornerRightUp(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiCornerUpLeft = function FiCornerUpLeft(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiCornerUpRight = function FiCornerUpRight(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiCpu = function FiCpu(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiCreditCard = function FiCreditCard(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiCrop = function FiCrop(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiCrosshair = function FiCrosshair(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiDatabase = function FiDatabase(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiDelete = function FiDelete(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiDisc = function FiDisc(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiDivideCircle = function FiDivideCircle(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiDivideSquare = function FiDivideSquare(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiDivide = function FiDivide(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiDollarSign = function FiDollarSign(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiDownloadCloud = function FiDownloadCloud(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiDownload = function FiDownload(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiDribbble = function FiDribbble(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiDroplet = function FiDroplet(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiEdit2 = function FiEdit2(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiEdit3 = function FiEdit3(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiEdit = function FiEdit(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiExternalLink = function FiExternalLink(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiEyeOff = function FiEyeOff(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiEye = function FiEye(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiFacebook = function FiFacebook(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiFastForward = function FiFastForward(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiFeather = function FiFeather(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiFigma = function FiFigma(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiFileMinus = function FiFileMinus(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiFilePlus = function FiFilePlus(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiFileText = function FiFileText(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiFile = function FiFile(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiFilm = function FiFilm(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiFilter = function FiFilter(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiFlag = function FiFlag(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiFolderMinus = function FiFolderMinus(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiFolderPlus = function FiFolderPlus(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiFolder = function FiFolder(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiFramer = function FiFramer(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiFrown = function FiFrown(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiGift = function FiGift(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiGitBranch = function FiGitBranch(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiGitCommit = function FiGitCommit(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiGitMerge = function FiGitMerge(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiGitPullRequest = function FiGitPullRequest(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiGithub = function FiGithub(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiGitlab = function FiGitlab(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiGlobe = function FiGlobe(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiGrid = function FiGrid(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiHardDrive = function FiHardDrive(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiHash = function FiHash(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiHeadphones = function FiHeadphones(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiHeart = function FiHeart(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiHelpCircle = function FiHelpCircle(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiHexagon = function FiHexagon(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiHome = function FiHome(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiImage = function FiImage(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiInbox = function FiInbox(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiInfo = function FiInfo(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiInstagram = function FiInstagram(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiItalic = function FiItalic(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiKey = function FiKey(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiLayers = function FiLayers(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiLayout = function FiLayout(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiLifeBuoy = function FiLifeBuoy(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiLink2 = function FiLink2(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiLink = function FiLink(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiLinkedin = function FiLinkedin(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiList = function FiList(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiLoader = function FiLoader(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiLock = function FiLock(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiLogIn = function FiLogIn(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiLogOut = function FiLogOut(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiMail = function FiMail(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiMapPin = function FiMapPin(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiMap = function FiMap(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiMaximize2 = function FiMaximize2(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiMaximize = function FiMaximize(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiMeh = function FiMeh(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiMenu = function FiMenu(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiMessageCircle = function FiMessageCircle(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiMessageSquare = function FiMessageSquare(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiMicOff = function FiMicOff(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiMic = function FiMic(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiMinimize2 = function FiMinimize2(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiMinimize = function FiMinimize(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiMinusCircle = function FiMinusCircle(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiMinusSquare = function FiMinusSquare(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiMinus = function FiMinus(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiMonitor = function FiMonitor(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiMoon = function FiMoon(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiMoreHorizontal = function FiMoreHorizontal(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiMoreVertical = function FiMoreVertical(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiMousePointer = function FiMousePointer(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiMove = function FiMove(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiMusic = function FiMusic(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiNavigation2 = function FiNavigation2(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiNavigation = function FiNavigation(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiOctagon = function FiOctagon(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiPackage = function FiPackage(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiPaperclip = function FiPaperclip(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiPauseCircle = function FiPauseCircle(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiPause = function FiPause(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiPenTool = function FiPenTool(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiPercent = function FiPercent(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiPhoneCall = function FiPhoneCall(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiPhoneForwarded = function FiPhoneForwarded(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiPhoneIncoming = function FiPhoneIncoming(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiPhoneMissed = function FiPhoneMissed(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiPhoneOff = function FiPhoneOff(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiPhoneOutgoing = function FiPhoneOutgoing(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiPhone = function FiPhone(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiPieChart = function FiPieChart(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiPlayCircle = function FiPlayCircle(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiPlay = function FiPlay(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiPlusCircle = function FiPlusCircle(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiPlusSquare = function FiPlusSquare(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiPlus = function FiPlus(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiPocket = function FiPocket(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiPower = function FiPower(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiPrinter = function FiPrinter(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiRadio = function FiRadio(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiRefreshCcw = function FiRefreshCcw(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiRefreshCw = function FiRefreshCw(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiRepeat = function FiRepeat(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiRewind = function FiRewind(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiRotateCcw = function FiRotateCcw(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiRotateCw = function FiRotateCw(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiRss = function FiRss(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiSave = function FiSave(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiScissors = function FiScissors(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiSearch = function FiSearch(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiSend = function FiSend(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiServer = function FiServer(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiSettings = function FiSettings(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiShare2 = function FiShare2(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiShare = function FiShare(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiShieldOff = function FiShieldOff(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiShield = function FiShield(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiShoppingBag = function FiShoppingBag(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiShoppingCart = function FiShoppingCart(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiShuffle = function FiShuffle(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiSidebar = function FiSidebar(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiSkipBack = function FiSkipBack(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiSkipForward = function FiSkipForward(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiSlack = function FiSlack(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiSlash = function FiSlash(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiSliders = function FiSliders(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiSmartphone = function FiSmartphone(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiSmile = function FiSmile(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiSpeaker = function FiSpeaker(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiSquare = function FiSquare(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiStar = function FiStar(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiStopCircle = function FiStopCircle(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiSun = function FiSun(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiSunrise = function FiSunrise(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiSunset = function FiSunset(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiTable = function FiTable(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiTablet = function FiTablet(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiTag = function FiTag(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiTarget = function FiTarget(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiTerminal = function FiTerminal(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiThermometer = function FiThermometer(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiThumbsDown = function FiThumbsDown(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiThumbsUp = function FiThumbsUp(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiToggleLeft = function FiToggleLeft(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiToggleRight = function FiToggleRight(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiTool = function FiTool(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiTrash2 = function FiTrash2(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiTrash = function FiTrash(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiTrello = function FiTrello(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiTrendingDown = function FiTrendingDown(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiTrendingUp = function FiTrendingUp(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiTriangle = function FiTriangle(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiTruck = function FiTruck(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiTv = function FiTv(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiTwitch = function FiTwitch(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiTwitter = function FiTwitter(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiType = function FiType(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiUmbrella = function FiUmbrella(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiUnderline = function FiUnderline(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiUnlock = function FiUnlock(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiUploadCloud = function FiUploadCloud(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiUpload = function FiUpload(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiUserCheck = function FiUserCheck(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiUserMinus = function FiUserMinus(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiUserPlus = function FiUserPlus(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiUserX = function FiUserX(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiUser = function FiUser(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiUsers = function FiUsers(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiVideoOff = function FiVideoOff(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiVideo = function FiVideo(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiVoicemail = function FiVoicemail(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiVolume1 = function FiVolume1(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiVolume2 = function FiVolume2(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiVolumeX = function FiVolumeX(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiVolume = function FiVolume(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiWatch = function FiWatch(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiWifiOff = function FiWifiOff(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiWifi = function FiWifi(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiWind = function FiWind(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiXCircle = function FiXCircle(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiXOctagon = function FiXOctagon(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiXSquare = function FiXSquare(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiX = function FiX(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiYoutube = function FiYoutube(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiZapOff = function FiZapOff(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiZap = function FiZap(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiZoomIn = function FiZoomIn(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
module.exports.FiZoomOut = function FiZoomOut(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {
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
};
}),
]);

//# sourceMappingURL=9e883_bcff8812._.js.map