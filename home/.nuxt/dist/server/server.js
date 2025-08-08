module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({"1":"components/base-accordion","2":"components/landing-ai-trend","3":"components/landing-aihistory","4":"components/landing-blog","5":"components/landing-comment","6":"components/landing-exchange","7":"components/landing-list-item","8":"components/landing-opportunity","9":"components/landing-search","10":"components/nav-link","11":"pages/admin/index","12":"pages/anonymous/index","13":"pages/apropos/index","14":"pages/blogs/_blogRoute","15":"pages/blogs/index","16":"pages/create/index","17":"pages/edit/index","18":"pages/index","19":"pages/opportunities/_blogRoute","20":"pages/opportunities/index","21":"pages/password-reset/index","22":"pages/profile/admin/index","23":"pages/u/index"}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/_nuxt/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 50);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/LoadingIndicator.vue?vue&type=template&id=756de9ef&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('client-only', [_vm.loading || _vm.loadingError ? _c('div', {
    staticClass: "fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 opacity-75 z-50"
  }, [_vm.loading ? _c('div', {
    staticClass: "loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-24 w-24"
  }) : _vm._e(), _vm._v(" "), _vm.loadingError ? _c('div', {
    staticClass: "text-white"
  }, [_vm._v("Error loading data. Please try again later.")]) : _vm._e()]) : _vm._e()]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/LoadingIndicator.vue?vue&type=template&id=756de9ef&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/LoadingIndicator.vue?vue&type=script&lang=js
/* harmony default export */ var LoadingIndicatorvue_type_script_lang_js = ({
  data() {
    return {
      loading: false,
      loadingError: false
    };
  },
  created() {
    this.$nuxt.$on('routeChangeStart', () => {
      this.loading = true;
      this.loadingError = false; // Reset error state
    });
    this.$nuxt.$on('routeChangeComplete', () => {
      this.loading = false;
      this.loadingError = false;
    });
    this.$nuxt.$on('routeChangeError', () => {
      this.loading = false;
      this.loadingError = true;
    });
  }
});
// CONCATENATED MODULE: ./components/LoadingIndicator.vue?vue&type=script&lang=js
 /* harmony default export */ var components_LoadingIndicatorvue_type_script_lang_js = (LoadingIndicatorvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/LoadingIndicator.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(59)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_LoadingIndicatorvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "756de9ef",
  "0b4e4dea"
  
)

/* harmony default export */ var LoadingIndicator = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(URLSearchParams) {

const n = /[^\0-\x7E]/;
const t = /[\x2E\u3002\uFF0E\uFF61]/g;
const o = {
  overflow: "Overflow Error",
  "not-basic": "Illegal Input",
  "invalid-input": "Invalid Input"
};
const e = Math.floor;
const r = String.fromCharCode;
function s(n2) {
  throw new RangeError(o[n2]);
}
const c = function (n2, t2) {
  return n2 + 22 + 75 * (n2 < 26) - ((t2 != 0) << 5);
};
const u = function (n2, t2, o2) {
  let r2 = 0;
  for (n2 = o2 ? e(n2 / 700) : n2 >> 1, n2 += e(n2 / t2); n2 > 455; r2 += 36) {
    n2 = e(n2 / 35);
  }
  return e(r2 + 36 * n2 / (n2 + 38));
};
function toASCII(o2) {
  return function (n2, o3) {
    const e2 = n2.split("@");
    let r2 = "";
    e2.length > 1 && (r2 = e2[0] + "@", n2 = e2[1]);
    const s2 = function (n3, t2) {
      const o4 = [];
      let e3 = n3.length;
      for (; e3--;) {
        o4[e3] = t2(n3[e3]);
      }
      return o4;
    }((n2 = n2.replace(t, ".")).split("."), o3).join(".");
    return r2 + s2;
  }(o2, function (t2) {
    return n.test(t2) ? "xn--" + function (n2) {
      const t3 = [];
      const o3 = (n2 = function (n3) {
        const t4 = [];
        let o4 = 0;
        const e2 = n3.length;
        for (; o4 < e2;) {
          const r2 = n3.charCodeAt(o4++);
          if (r2 >= 55296 && r2 <= 56319 && o4 < e2) {
            const e3 = n3.charCodeAt(o4++);
            (64512 & e3) == 56320 ? t4.push(((1023 & r2) << 10) + (1023 & e3) + 65536) : (t4.push(r2), o4--);
          } else {
            t4.push(r2);
          }
        }
        return t4;
      }(n2)).length;
      let f = 128;
      let i = 0;
      let l = 72;
      for (const o4 of n2) {
        o4 < 128 && t3.push(r(o4));
      }
      const h = t3.length;
      let p = h;
      for (h && t3.push("-"); p < o3;) {
        let o4 = 2147483647;
        for (const t4 of n2) {
          t4 >= f && t4 < o4 && (o4 = t4);
        }
        const a = p + 1;
        o4 - f > e((2147483647 - i) / a) && s("overflow"), i += (o4 - f) * a, f = o4;
        for (const o5 of n2) {
          if (o5 < f && ++i > 2147483647 && s("overflow"), o5 == f) {
            let n3 = i;
            for (let o6 = 36;; o6 += 36) {
              const s2 = o6 <= l ? 1 : o6 >= l + 26 ? 26 : o6 - l;
              if (n3 < s2) {
                break;
              }
              const u2 = n3 - s2;
              const f2 = 36 - s2;
              t3.push(r(c(s2 + u2 % f2, 0))), n3 = e(u2 / f2);
            }
            t3.push(r(c(n3, 0))), l = u(i, a, p == h), i = 0, ++p;
          }
        }
        ++i, ++f;
      }
      return t3.join("");
    }(t2) : t2;
  });
}
const HASH_RE = /#/g;
const AMPERSAND_RE = /&/g;
const SLASH_RE = /\//g;
const EQUAL_RE = /=/g;
const IM_RE = /\?/g;
const PLUS_RE = /\+/g;
const ENC_CARET_RE = /%5e/gi;
const ENC_BACKTICK_RE = /%60/gi;
const ENC_CURLY_OPEN_RE = /%7b/gi;
const ENC_PIPE_RE = /%7c/gi;
const ENC_CURLY_CLOSE_RE = /%7d/gi;
const ENC_SPACE_RE = /%20/gi;
const ENC_SLASH_RE = /%2f/gi;
const ENC_ENC_SLASH_RE = /%252f/gi;
function encode(text) {
  return encodeURI("" + text).replace(ENC_PIPE_RE, "|");
}
function encodeHash(text) {
  return encode(text).replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}
function encodeQueryValue(input) {
  return encode(typeof input === "string" ? input : JSON.stringify(input)).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CARET_RE, "^").replace(SLASH_RE, "%2F");
}
function encodeQueryKey(text) {
  return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
}
function encodePath(text) {
  return encode(text).replace(HASH_RE, "%23").replace(IM_RE, "%3F").replace(ENC_ENC_SLASH_RE, "%2F").replace(AMPERSAND_RE, "%26").replace(PLUS_RE, "%2B");
}
function encodeParam(text) {
  return encodePath(text).replace(SLASH_RE, "%2F");
}
function decode(text = "") {
  try {
    return decodeURIComponent("" + text);
  } catch {
    return "" + text;
  }
}
function decodePath(text) {
  return decode(text.replace(ENC_SLASH_RE, "%252F"));
}
function decodeQueryKey(text) {
  return decode(text.replace(PLUS_RE, " "));
}
function decodeQueryValue(text) {
  return decode(text.replace(PLUS_RE, " "));
}
function encodeHost(name = "") {
  return toASCII(name);
}
function parseQuery(parametersString = "") {
  const object = {};
  if (parametersString[0] === "?") {
    parametersString = parametersString.slice(1);
  }
  for (const parameter of parametersString.split("&")) {
    const s = parameter.match(/([^=]+)=?(.*)/) || [];
    if (s.length < 2) {
      continue;
    }
    const key = decodeQueryKey(s[1]);
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = decodeQueryValue(s[2] || "");
    if (object[key] === void 0) {
      object[key] = value;
    } else if (Array.isArray(object[key])) {
      object[key].push(value);
    } else {
      object[key] = [object[key], value];
    }
  }
  return object;
}
function encodeQueryItem(key, value) {
  if (typeof value === "number" || typeof value === "boolean") {
    value = String(value);
  }
  if (!value) {
    return encodeQueryKey(key);
  }
  if (Array.isArray(value)) {
    return value.map(_value => `${encodeQueryKey(key)}=${encodeQueryValue(_value)}`).join("&");
  }
  return `${encodeQueryKey(key)}=${encodeQueryValue(value)}`;
}
function stringifyQuery(query) {
  return Object.keys(query).filter(k => query[k] !== void 0).map(k => encodeQueryItem(k, query[k])).filter(Boolean).join("&");
}
const PROTOCOL_STRICT_REGEX = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/;
const PROTOCOL_REGEX = /^[\s\w\0+.-]{2,}:([/\\]{2})?/;
const PROTOCOL_RELATIVE_REGEX = /^([/\\]\s*){2,}[^/\\]/;
const PROTOCOL_SCRIPT_RE = /^[\s\0]*(blob|data|javascript|vbscript):$/i;
const TRAILING_SLASH_RE = /\/$|\/\?|\/#/;
const JOIN_LEADING_SLASH_RE = /^\.?\//;
function isRelative(inputString) {
  return ["./", "../"].some(string_ => inputString.startsWith(string_));
}
function hasProtocol(inputString, opts = {}) {
  if (typeof opts === "boolean") {
    opts = {
      acceptRelative: opts
    };
  }
  if (opts.strict) {
    return PROTOCOL_STRICT_REGEX.test(inputString);
  }
  return PROTOCOL_REGEX.test(inputString) || (opts.acceptRelative ? PROTOCOL_RELATIVE_REGEX.test(inputString) : false);
}
function isScriptProtocol(protocol) {
  return !!protocol && PROTOCOL_SCRIPT_RE.test(protocol);
}
function hasTrailingSlash(input = "", respectQueryAndFragment) {
  if (!respectQueryAndFragment) {
    return input.endsWith("/");
  }
  return TRAILING_SLASH_RE.test(input);
}
function withoutTrailingSlash(input = "", respectQueryAndFragment) {
  if (!respectQueryAndFragment) {
    return (hasTrailingSlash(input) ? input.slice(0, -1) : input) || "/";
  }
  if (!hasTrailingSlash(input, true)) {
    return input || "/";
  }
  let path = input;
  let fragment = "";
  const fragmentIndex = input.indexOf("#");
  if (fragmentIndex >= 0) {
    path = input.slice(0, fragmentIndex);
    fragment = input.slice(fragmentIndex);
  }
  const [s0, ...s] = path.split("?");
  const cleanPath = s0.endsWith("/") ? s0.slice(0, -1) : s0;
  return (cleanPath || "/") + (s.length > 0 ? `?${s.join("?")}` : "") + fragment;
}
function withTrailingSlash(input = "", respectQueryAndFragment) {
  if (!respectQueryAndFragment) {
    return input.endsWith("/") ? input : input + "/";
  }
  if (hasTrailingSlash(input, true)) {
    return input || "/";
  }
  let path = input;
  let fragment = "";
  const fragmentIndex = input.indexOf("#");
  if (fragmentIndex >= 0) {
    path = input.slice(0, fragmentIndex);
    fragment = input.slice(fragmentIndex);
    if (!path) {
      return fragment;
    }
  }
  const [s0, ...s] = path.split("?");
  return s0 + "/" + (s.length > 0 ? `?${s.join("?")}` : "") + fragment;
}
function hasLeadingSlash(input = "") {
  return input.startsWith("/");
}
function withoutLeadingSlash(input = "") {
  return (hasLeadingSlash(input) ? input.slice(1) : input) || "/";
}
function withLeadingSlash(input = "") {
  return hasLeadingSlash(input) ? input : "/" + input;
}
function cleanDoubleSlashes(input = "") {
  return input.split("://").map(string_ => string_.replace(/\/{2,}/g, "/")).join("://");
}
function withBase(input, base) {
  if (isEmptyURL(base) || hasProtocol(input)) {
    return input;
  }
  const _base = withoutTrailingSlash(base);
  if (input.startsWith(_base)) {
    return input;
  }
  return joinURL(_base, input);
}
function withoutBase(input, base) {
  if (isEmptyURL(base)) {
    return input;
  }
  const _base = withoutTrailingSlash(base);
  if (!input.startsWith(_base)) {
    return input;
  }
  const trimmed = input.slice(_base.length);
  return trimmed[0] === "/" ? trimmed : "/" + trimmed;
}
function withQuery(input, query) {
  const parsed = parseURL(input);
  const mergedQuery = {
    ...parseQuery(parsed.search),
    ...query
  };
  parsed.search = stringifyQuery(mergedQuery);
  return stringifyParsedURL(parsed);
}
function getQuery(input) {
  return parseQuery(parseURL(input).search);
}
function isEmptyURL(url) {
  return !url || url === "/";
}
function isNonEmptyURL(url) {
  return url && url !== "/";
}
function joinURL(base, ...input) {
  let url = base || "";
  for (const segment of input.filter(url2 => isNonEmptyURL(url2))) {
    if (url) {
      const _segment = segment.replace(JOIN_LEADING_SLASH_RE, "");
      url = withTrailingSlash(url) + _segment;
    } else {
      url = segment;
    }
  }
  return url;
}
function joinRelativeURL(..._input) {
  var _input2;
  const JOIN_SEGMENT_SPLIT_RE = /\/(?!\/)/;
  const input = _input.filter(Boolean);
  const segments = [];
  let segmentsDepth = 0;
  for (const i of input) {
    if (!i || i === "/") {
      continue;
    }
    for (const [sindex, s] of i.split(JOIN_SEGMENT_SPLIT_RE).entries()) {
      var _segments;
      if (!s || s === ".") {
        continue;
      }
      if (s === "..") {
        if (segments.length === 1 && hasProtocol(segments[0])) {
          continue;
        }
        segments.pop();
        segmentsDepth--;
        continue;
      }
      if (sindex === 1 && (_segments = segments[segments.length - 1]) !== null && _segments !== void 0 && _segments.endsWith(":/")) {
        segments[segments.length - 1] += "/" + s;
        continue;
      }
      segments.push(s);
      segmentsDepth++;
    }
  }
  let url = segments.join("/");
  if (segmentsDepth >= 0) {
    var _input$, _input$2;
    if ((_input$ = input[0]) !== null && _input$ !== void 0 && _input$.startsWith("/") && !url.startsWith("/")) {
      url = "/" + url;
    } else if ((_input$2 = input[0]) !== null && _input$2 !== void 0 && _input$2.startsWith("./") && !url.startsWith("./")) {
      url = "./" + url;
    }
  } else {
    url = "../".repeat(-1 * segmentsDepth) + url;
  }
  if ((_input2 = input[input.length - 1]) !== null && _input2 !== void 0 && _input2.endsWith("/") && !url.endsWith("/")) {
    url += "/";
  }
  return url;
}
function withHttp(input) {
  return withProtocol(input, "http://");
}
function withHttps(input) {
  return withProtocol(input, "https://");
}
function withoutProtocol(input) {
  return withProtocol(input, "");
}
function withProtocol(input, protocol) {
  let match = input.match(PROTOCOL_REGEX);
  if (!match) {
    match = input.match(/^\/{2,}/);
  }
  if (!match) {
    return protocol + input;
  }
  return protocol + input.slice(match[0].length);
}
function normalizeURL(input) {
  const parsed = parseURL(input);
  parsed.pathname = encodePath(decodePath(parsed.pathname));
  parsed.hash = encodeHash(decode(parsed.hash));
  parsed.host = encodeHost(decode(parsed.host));
  parsed.search = stringifyQuery(parseQuery(parsed.search));
  return stringifyParsedURL(parsed);
}
function resolveURL(base = "", ...inputs) {
  if (typeof base !== "string") {
    throw new TypeError(`URL input should be string received ${typeof base} (${base})`);
  }
  const filteredInputs = inputs.filter(input => isNonEmptyURL(input));
  if (filteredInputs.length === 0) {
    return base;
  }
  const url = parseURL(base);
  for (const inputSegment of filteredInputs) {
    const urlSegment = parseURL(inputSegment);
    if (urlSegment.pathname) {
      url.pathname = withTrailingSlash(url.pathname) + withoutLeadingSlash(urlSegment.pathname);
    }
    if (urlSegment.hash && urlSegment.hash !== "#") {
      url.hash = urlSegment.hash;
    }
    if (urlSegment.search && urlSegment.search !== "?") {
      if (url.search && url.search !== "?") {
        const queryString = stringifyQuery({
          ...parseQuery(url.search),
          ...parseQuery(urlSegment.search)
        });
        url.search = queryString.length > 0 ? "?" + queryString : "";
      } else {
        url.search = urlSegment.search;
      }
    }
  }
  return stringifyParsedURL(url);
}
function isSamePath(p1, p2) {
  return decode(withoutTrailingSlash(p1)) === decode(withoutTrailingSlash(p2));
}
function isEqual(a, b, options = {}) {
  if (!options.trailingSlash) {
    a = withTrailingSlash(a);
    b = withTrailingSlash(b);
  }
  if (!options.leadingSlash) {
    a = withLeadingSlash(a);
    b = withLeadingSlash(b);
  }
  if (!options.encoding) {
    a = decode(a);
    b = decode(b);
  }
  return a === b;
}
function withFragment(input, hash) {
  if (!hash || hash === "#") {
    return input;
  }
  const parsed = parseURL(input);
  parsed.hash = hash === "" ? "" : "#" + encodeHash(hash);
  return stringifyParsedURL(parsed);
}
function withoutFragment(input) {
  return stringifyParsedURL({
    ...parseURL(input),
    hash: ""
  });
}
function withoutHost(input) {
  const parsed = parseURL(input);
  return (parsed.pathname || "/") + parsed.search + parsed.hash;
}
const protocolRelative = Symbol.for("ufo:protocolRelative");
function parseURL(input = "", defaultProto) {
  const _specialProtoMatch = input.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);
  if (_specialProtoMatch) {
    const [, _proto, _pathname = ""] = _specialProtoMatch;
    return {
      protocol: _proto.toLowerCase(),
      pathname: _pathname,
      href: _proto + _pathname,
      auth: "",
      host: "",
      search: "",
      hash: ""
    };
  }
  if (!hasProtocol(input, {
    acceptRelative: true
  })) {
    return defaultProto ? parseURL(defaultProto + input) : parsePath(input);
  }
  const [, protocol = "", auth, hostAndPath = ""] = input.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || [];
  let [, host = "", path = ""] = hostAndPath.match(/([^#/?]*)(.*)?/) || [];
  if (protocol === "file:") {
    path = path.replace(/\/(?=[A-Za-z]:)/, "");
  }
  const {
    pathname,
    search,
    hash
  } = parsePath(path);
  return {
    protocol: protocol.toLowerCase(),
    auth: auth ? auth.slice(0, Math.max(0, auth.length - 1)) : "",
    host,
    pathname,
    search,
    hash,
    [protocolRelative]: !protocol
  };
}
function parsePath(input = "") {
  const [pathname = "", search = "", hash = ""] = (input.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
  return {
    pathname,
    search,
    hash
  };
}
function parseAuth(input = "") {
  const [username, password] = input.split(":");
  return {
    username: decode(username),
    password: decode(password)
  };
}
function parseHost(input = "") {
  const [hostname, port] = (input.match(/([^/:]*):?(\d+)?/) || []).splice(1);
  return {
    hostname: decode(hostname),
    port
  };
}
function stringifyParsedURL(parsed) {
  const pathname = parsed.pathname || "";
  const search = parsed.search ? (parsed.search.startsWith("?") ? "" : "?") + parsed.search : "";
  const hash = parsed.hash || "";
  const auth = parsed.auth ? parsed.auth + "@" : "";
  const host = parsed.host || "";
  const proto = parsed.protocol || parsed[protocolRelative] ? (parsed.protocol || "") + "//" : "";
  return proto + auth + host + pathname + search + hash;
}
const FILENAME_STRICT_REGEX = /\/([^/]+\.[^/]+)$/;
const FILENAME_REGEX = /\/([^/]+)$/;
function parseFilename(input = "", {
  strict
}) {
  const {
    pathname
  } = parseURL(input);
  const matches = strict ? pathname.match(FILENAME_STRICT_REGEX) : pathname.match(FILENAME_REGEX);
  return matches ? matches[1] : void 0;
}
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {
  enumerable: true,
  configurable: true,
  writable: true,
  value
}) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
class $URL {
  constructor(input = "") {
    __publicField(this, "protocol");
    __publicField(this, "host");
    __publicField(this, "auth");
    __publicField(this, "pathname");
    __publicField(this, "query", {});
    __publicField(this, "hash");
    if (typeof input !== "string") {
      throw new TypeError(`URL input should be string received ${typeof input} (${input})`);
    }
    const parsed = parseURL(input);
    this.protocol = decode(parsed.protocol);
    this.host = decode(parsed.host);
    this.auth = decode(parsed.auth);
    this.pathname = decodePath(parsed.pathname);
    this.query = parseQuery(parsed.search);
    this.hash = decode(parsed.hash);
  }
  get hostname() {
    return parseHost(this.host).hostname;
  }
  get port() {
    return parseHost(this.host).port || "";
  }
  get username() {
    return parseAuth(this.auth).username;
  }
  get password() {
    return parseAuth(this.auth).password || "";
  }
  get hasProtocol() {
    return this.protocol.length;
  }
  get isAbsolute() {
    return this.hasProtocol || this.pathname[0] === "/";
  }
  get search() {
    const q = stringifyQuery(this.query);
    return q.length > 0 ? "?" + q : "";
  }
  get searchParams() {
    const p = new URLSearchParams();
    for (const name in this.query) {
      const value = this.query[name];
      if (Array.isArray(value)) {
        for (const v of value) {
          p.append(name, v);
        }
      } else {
        p.append(name, typeof value === "string" ? value : JSON.stringify(value));
      }
    }
    return p;
  }
  get origin() {
    return (this.protocol ? this.protocol + "//" : "") + encodeHost(this.host);
  }
  get fullpath() {
    return encodePath(this.pathname) + this.search + encodeHash(this.hash);
  }
  get encodedAuth() {
    if (!this.auth) {
      return "";
    }
    const {
      username,
      password
    } = parseAuth(this.auth);
    return encodeURIComponent(username) + (password ? ":" + encodeURIComponent(password) : "");
  }
  get href() {
    const auth = this.encodedAuth;
    const originWithAuth = (this.protocol ? this.protocol + "//" : "") + (auth ? auth + "@" : "") + encodeHost(this.host);
    return this.hasProtocol && this.isAbsolute ? originWithAuth + this.fullpath : this.fullpath;
  }
  append(url) {
    if (url.hasProtocol) {
      throw new Error("Cannot append a URL with protocol");
    }
    Object.assign(this.query, url.query);
    if (url.pathname) {
      this.pathname = withTrailingSlash(this.pathname) + withoutLeadingSlash(url.pathname);
    }
    if (url.hash) {
      this.hash = url.hash;
    }
  }
  toJSON() {
    return this.href;
  }
  toString() {
    return this.href;
  }
}
function createURL(input) {
  return new $URL(input);
}
exports.$URL = $URL;
exports.cleanDoubleSlashes = cleanDoubleSlashes;
exports.createURL = createURL;
exports.decode = decode;
exports.decodePath = decodePath;
exports.decodeQueryKey = decodeQueryKey;
exports.decodeQueryValue = decodeQueryValue;
exports.encode = encode;
exports.encodeHash = encodeHash;
exports.encodeHost = encodeHost;
exports.encodeParam = encodeParam;
exports.encodePath = encodePath;
exports.encodeQueryItem = encodeQueryItem;
exports.encodeQueryKey = encodeQueryKey;
exports.encodeQueryValue = encodeQueryValue;
exports.getQuery = getQuery;
exports.hasLeadingSlash = hasLeadingSlash;
exports.hasProtocol = hasProtocol;
exports.hasTrailingSlash = hasTrailingSlash;
exports.isEmptyURL = isEmptyURL;
exports.isEqual = isEqual;
exports.isNonEmptyURL = isNonEmptyURL;
exports.isRelative = isRelative;
exports.isSamePath = isSamePath;
exports.isScriptProtocol = isScriptProtocol;
exports.joinRelativeURL = joinRelativeURL;
exports.joinURL = joinURL;
exports.normalizeURL = normalizeURL;
exports.parseAuth = parseAuth;
exports.parseFilename = parseFilename;
exports.parseHost = parseHost;
exports.parsePath = parsePath;
exports.parseQuery = parseQuery;
exports.parseURL = parseURL;
exports.resolveURL = resolveURL;
exports.stringifyParsedURL = stringifyParsedURL;
exports.stringifyQuery = stringifyQuery;
exports.withBase = withBase;
exports.withFragment = withFragment;
exports.withHttp = withHttp;
exports.withHttps = withHttps;
exports.withLeadingSlash = withLeadingSlash;
exports.withProtocol = withProtocol;
exports.withQuery = withQuery;
exports.withTrailingSlash = withTrailingSlash;
exports.withoutBase = withoutBase;
exports.withoutFragment = withoutFragment;
exports.withoutHost = withoutHost;
exports.withoutLeadingSlash = withoutLeadingSlash;
exports.withoutProtocol = withoutProtocol;
exports.withoutTrailingSlash = withoutTrailingSlash;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(18)["URLSearchParams"]))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(URLSearchParams) {

Object.defineProperty(exports, '__esModule', {
  value: true
});
const n = /[^\0-\x7E]/;
const t = /[\x2E\u3002\uFF0E\uFF61]/g;
const o = {
  overflow: "Overflow Error",
  "not-basic": "Illegal Input",
  "invalid-input": "Invalid Input"
};
const e = Math.floor;
const r = String.fromCharCode;
function s(n2) {
  throw new RangeError(o[n2]);
}
const c = function (n2, t2) {
  return n2 + 22 + 75 * (n2 < 26) - ((t2 != 0) << 5);
};
const u = function (n2, t2, o2) {
  let r2 = 0;
  for (n2 = o2 ? e(n2 / 700) : n2 >> 1, n2 += e(n2 / t2); n2 > 455; r2 += 36) {
    n2 = e(n2 / 35);
  }
  return e(r2 + 36 * n2 / (n2 + 38));
};
function toASCII(o2) {
  return function (n2, o3) {
    const e2 = n2.split("@");
    let r2 = "";
    e2.length > 1 && (r2 = e2[0] + "@", n2 = e2[1]);
    const s2 = function (n3, t2) {
      const o4 = [];
      let e3 = n3.length;
      for (; e3--;) {
        o4[e3] = t2(n3[e3]);
      }
      return o4;
    }((n2 = n2.replace(t, ".")).split("."), o3).join(".");
    return r2 + s2;
  }(o2, function (t2) {
    return n.test(t2) ? "xn--" + function (n2) {
      const t3 = [];
      const o3 = (n2 = function (n3) {
        const t4 = [];
        let o4 = 0;
        const e2 = n3.length;
        for (; o4 < e2;) {
          const r2 = n3.charCodeAt(o4++);
          if (r2 >= 55296 && r2 <= 56319 && o4 < e2) {
            const e3 = n3.charCodeAt(o4++);
            (64512 & e3) == 56320 ? t4.push(((1023 & r2) << 10) + (1023 & e3) + 65536) : (t4.push(r2), o4--);
          } else {
            t4.push(r2);
          }
        }
        return t4;
      }(n2)).length;
      let f = 128;
      let i = 0;
      let l = 72;
      for (const o4 of n2) {
        o4 < 128 && t3.push(r(o4));
      }
      const h = t3.length;
      let p = h;
      for (h && t3.push("-"); p < o3;) {
        let o4 = 2147483647;
        for (const t4 of n2) {
          t4 >= f && t4 < o4 && (o4 = t4);
        }
        const a = p + 1;
        o4 - f > e((2147483647 - i) / a) && s("overflow"), i += (o4 - f) * a, f = o4;
        for (const o5 of n2) {
          if (o5 < f && ++i > 2147483647 && s("overflow"), o5 == f) {
            let n3 = i;
            for (let o6 = 36;; o6 += 36) {
              const s2 = o6 <= l ? 1 : o6 >= l + 26 ? 26 : o6 - l;
              if (n3 < s2) {
                break;
              }
              const u2 = n3 - s2;
              const f2 = 36 - s2;
              t3.push(r(c(s2 + u2 % f2, 0))), n3 = e(u2 / f2);
            }
            t3.push(r(c(n3, 0))), l = u(i, a, p == h), i = 0, ++p;
          }
        }
        ++i, ++f;
      }
      return t3.join("");
    }(t2) : t2;
  });
}
const HASH_RE = /#/g;
const AMPERSAND_RE = /&/g;
const SLASH_RE = /\//g;
const EQUAL_RE = /=/g;
const IM_RE = /\?/g;
const PLUS_RE = /\+/g;
const ENC_BRACKET_OPEN_RE = /%5B/gi;
const ENC_BRACKET_CLOSE_RE = /%5D/gi;
const ENC_CARET_RE = /%5E/gi;
const ENC_BACKTICK_RE = /%60/gi;
const ENC_CURLY_OPEN_RE = /%7B/gi;
const ENC_PIPE_RE = /%7C/gi;
const ENC_CURLY_CLOSE_RE = /%7D/gi;
const ENC_SPACE_RE = /%20/gi;
const ENC_SLASH_RE = /%2F/gi;
const ENC_ENC_SLASH_RE = /%252F/gi;
function encode(text) {
  return encodeURI("" + text).replace(ENC_PIPE_RE, "|").replace(ENC_BRACKET_OPEN_RE, "[").replace(ENC_BRACKET_CLOSE_RE, "]");
}
function encodeHash(text) {
  return encode(text).replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}
function encodeQueryValue(text) {
  return encode(text).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}
function encodeQueryKey(text) {
  return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
}
function encodePath(text) {
  return encode(text).replace(HASH_RE, "%23").replace(IM_RE, "%3F").replace(ENC_ENC_SLASH_RE, "%2F").replace(AMPERSAND_RE, "%26").replace(PLUS_RE, "%2B");
}
function encodeParam(text) {
  return encodePath(text).replace(SLASH_RE, "%2F");
}
function decode(text = "") {
  try {
    return decodeURIComponent("" + text);
  } catch (_err) {
    return "" + text;
  }
}
function decodePath(text) {
  return decode(text.replace(ENC_SLASH_RE, "%252F"));
}
function decodeQueryValue(text) {
  return decode(text.replace(PLUS_RE, " "));
}
function encodeHost(name = "") {
  return toASCII(name);
}
function parseQuery(paramsStr = "") {
  const obj = {};
  if (paramsStr[0] === "?") {
    paramsStr = paramsStr.substr(1);
  }
  for (const param of paramsStr.split("&")) {
    const s = param.match(/([^=]+)=?(.*)/) || [];
    if (s.length < 2) {
      continue;
    }
    const key = decode(s[1]);
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = decodeQueryValue(s[2] || "");
    if (obj[key]) {
      if (Array.isArray(obj[key])) {
        obj[key].push(value);
      } else {
        obj[key] = [obj[key], value];
      }
    } else {
      obj[key] = value;
    }
  }
  return obj;
}
function encodeQueryItem(key, val) {
  if (!val) {
    return encodeQueryKey(key);
  }
  if (Array.isArray(val)) {
    return val.map(_val => `${encodeQueryKey(key)}=${encodeQueryValue(_val)}`).join("&");
  }
  return `${encodeQueryKey(key)}=${encodeQueryValue(val)}`;
}
function stringifyQuery(query) {
  return Object.keys(query).map(k => encodeQueryItem(k, query[k])).join("&");
}
class $URL {
  constructor(input = "") {
    this.query = {};
    if (typeof input !== "string") {
      throw new TypeError(`URL input should be string received ${typeof input} (${input})`);
    }
    const parsed = parseURL(input);
    this.protocol = decode(parsed.protocol);
    this.host = decode(parsed.host);
    this.auth = decode(parsed.auth);
    this.pathname = decodePath(parsed.pathname);
    this.query = parseQuery(parsed.search);
    this.hash = decode(parsed.hash);
  }
  get hostname() {
    return parseHost(this.host).hostname;
  }
  get port() {
    return parseHost(this.host).port || "";
  }
  get username() {
    return parseAuth(this.auth).username;
  }
  get password() {
    return parseAuth(this.auth).password || "";
  }
  get hasProtocol() {
    return this.protocol.length;
  }
  get isAbsolute() {
    return this.hasProtocol || this.pathname[0] === "/";
  }
  get search() {
    const q = stringifyQuery(this.query);
    return q.length ? "?" + q : "";
  }
  get searchParams() {
    const p = new URLSearchParams();
    for (const name in this.query) {
      const value = this.query[name];
      if (Array.isArray(value)) {
        value.forEach(v => p.append(name, v));
      } else {
        p.append(name, value || "");
      }
    }
    return p;
  }
  get origin() {
    return (this.protocol ? this.protocol + "//" : "") + encodeHost(this.host);
  }
  get fullpath() {
    return encodePath(this.pathname) + this.search + encodeHash(this.hash);
  }
  get encodedAuth() {
    if (!this.auth) {
      return "";
    }
    const {
      username,
      password
    } = parseAuth(this.auth);
    return encodeURIComponent(username) + (password ? ":" + encodeURIComponent(password) : "");
  }
  get href() {
    const auth = this.encodedAuth;
    const originWithAuth = (this.protocol ? this.protocol + "//" : "") + (auth ? auth + "@" : "") + encodeHost(this.host);
    return this.hasProtocol && this.isAbsolute ? originWithAuth + this.fullpath : this.fullpath;
  }
  append(url) {
    if (url.hasProtocol) {
      throw new Error("Cannot append a URL with protocol");
    }
    Object.assign(this.query, url.query);
    if (url.pathname) {
      this.pathname = withTrailingSlash(this.pathname) + withoutLeadingSlash(url.pathname);
    }
    if (url.hash) {
      this.hash = url.hash;
    }
  }
  toJSON() {
    return this.href;
  }
  toString() {
    return this.href;
  }
}
function isRelative(inputStr) {
  return ["./", "../"].some(str => inputStr.startsWith(str));
}
function hasProtocol(inputStr, acceptProtocolRelative = false) {
  return /^\w+:\/\/.+/.test(inputStr) || acceptProtocolRelative && /^\/\/[^/]+/.test(inputStr);
}
const TRAILING_SLASH_RE = /\/$|\/\?/;
function hasTrailingSlash(input = "", queryParams = false) {
  if (!queryParams) {
    return input.endsWith("/");
  }
  return TRAILING_SLASH_RE.test(input);
}
function withoutTrailingSlash(input = "", queryParams = false) {
  if (!queryParams) {
    return (hasTrailingSlash(input) ? input.slice(0, -1) : input) || "/";
  }
  if (!hasTrailingSlash(input, true)) {
    return input || "/";
  }
  const [s0, ...s] = input.split("?");
  return (s0.slice(0, -1) || "/") + (s.length ? `?${s.join("?")}` : "");
}
function withTrailingSlash(input = "", queryParams = false) {
  if (!queryParams) {
    return input.endsWith("/") ? input : input + "/";
  }
  if (hasTrailingSlash(input, true)) {
    return input || "/";
  }
  const [s0, ...s] = input.split("?");
  return s0 + "/" + (s.length ? `?${s.join("?")}` : "");
}
function hasLeadingSlash(input = "") {
  return input.startsWith("/");
}
function withoutLeadingSlash(input = "") {
  return (hasLeadingSlash(input) ? input.substr(1) : input) || "/";
}
function withLeadingSlash(input = "") {
  return hasLeadingSlash(input) ? input : "/" + input;
}
function cleanDoubleSlashes(input = "") {
  return input.split("://").map(str => str.replace(/\/{2,}/g, "/")).join("://");
}
function withBase(input, base) {
  if (isEmptyURL(base)) {
    return input;
  }
  const _base = withoutTrailingSlash(base);
  if (input.startsWith(_base)) {
    return input;
  }
  return joinURL(_base, input);
}
function withoutBase(input, base) {
  if (isEmptyURL(base)) {
    return input;
  }
  const _base = withoutTrailingSlash(base);
  if (input.startsWith(_base)) {
    return input.substr(_base.length) || "/";
  }
  return input;
}
function withQuery(input, query) {
  const parsed = parseURL(input);
  const mergedQuery = {
    ...parseQuery(parsed.search),
    ...query
  };
  parsed.search = stringifyQuery(mergedQuery);
  return stringifyParsedURL(parsed);
}
function getQuery(input) {
  return parseQuery(parseURL(input).search);
}
function isEmptyURL(url) {
  return !url || url === "/";
}
function isNonEmptyURL(url) {
  return url && url !== "/";
}
function joinURL(base, ...input) {
  let url = base || "";
  for (const i of input.filter(isNonEmptyURL)) {
    url = url ? withTrailingSlash(url) + withoutLeadingSlash(i) : i;
  }
  return url;
}
function createURL(input) {
  return new $URL(input);
}
function normalizeURL(input) {
  return createURL(input).toString();
}
function resolveURL(base, ...input) {
  const url = createURL(base);
  for (const i of input.filter(isNonEmptyURL)) {
    url.append(createURL(i));
  }
  return url.toString();
}
function isSamePath(p1, p2) {
  return decode(withoutTrailingSlash(p1)) === decode(withoutTrailingSlash(p2));
}
function parseURL(input = "", defaultProto) {
  if (!hasProtocol(input, true)) {
    return defaultProto ? parseURL(defaultProto + input) : parsePath(input);
  }
  const [protocol = "", auth, hostAndPath] = (input.replace(/\\/g, "/").match(/([^:/]+:)?\/\/([^/@]+@)?(.*)/) || []).splice(1);
  const [host = "", path = ""] = (hostAndPath.match(/([^/?#]*)(.*)?/) || []).splice(1);
  const {
    pathname,
    search,
    hash
  } = parsePath(path);
  return {
    protocol,
    auth: auth ? auth.substr(0, auth.length - 1) : "",
    host,
    pathname,
    search,
    hash
  };
}
function parsePath(input = "") {
  const [pathname = "", search = "", hash = ""] = (input.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
  return {
    pathname,
    search,
    hash
  };
}
function parseAuth(input = "") {
  const [username, password] = input.split(":");
  return {
    username: decode(username),
    password: decode(password)
  };
}
function parseHost(input = "") {
  const [hostname, port] = (input.match(/([^/]*)(:0-9+)?/) || []).splice(1);
  return {
    hostname: decode(hostname),
    port
  };
}
function stringifyParsedURL(parsed) {
  const fullpath = parsed.pathname + (parsed.search ? (parsed.search.startsWith("?") ? "" : "?") + parsed.search : "") + parsed.hash;
  if (!parsed.protocol) {
    return fullpath;
  }
  return parsed.protocol + "//" + (parsed.auth ? parsed.auth + "@" : "") + parsed.host + fullpath;
}
exports.$URL = $URL;
exports.cleanDoubleSlashes = cleanDoubleSlashes;
exports.createURL = createURL;
exports.decode = decode;
exports.decodePath = decodePath;
exports.decodeQueryValue = decodeQueryValue;
exports.encode = encode;
exports.encodeHash = encodeHash;
exports.encodeHost = encodeHost;
exports.encodeParam = encodeParam;
exports.encodePath = encodePath;
exports.encodeQueryItem = encodeQueryItem;
exports.encodeQueryKey = encodeQueryKey;
exports.encodeQueryValue = encodeQueryValue;
exports.getQuery = getQuery;
exports.hasLeadingSlash = hasLeadingSlash;
exports.hasProtocol = hasProtocol;
exports.hasTrailingSlash = hasTrailingSlash;
exports.isEmptyURL = isEmptyURL;
exports.isNonEmptyURL = isNonEmptyURL;
exports.isRelative = isRelative;
exports.isSamePath = isSamePath;
exports.joinURL = joinURL;
exports.normalizeURL = normalizeURL;
exports.parseAuth = parseAuth;
exports.parseHost = parseHost;
exports.parsePath = parsePath;
exports.parseQuery = parseQuery;
exports.parseURL = parseURL;
exports.resolveURL = resolveURL;
exports.stringifyParsedURL = stringifyParsedURL;
exports.stringifyQuery = stringifyQuery;
exports.withBase = withBase;
exports.withLeadingSlash = withLeadingSlash;
exports.withQuery = withQuery;
exports.withTrailingSlash = withTrailingSlash;
exports.withoutBase = withoutBase;
exports.withoutLeadingSlash = withoutLeadingSlash;
exports.withoutTrailingSlash = withoutTrailingSlash;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(18)["URLSearchParams"]))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesServer; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesServer.js


function addStylesServer (parentId, list, isProduction, context) {
  if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
    context = __VUE_SSR_CONTEXT__
  }
  if (context) {
    if (!context.hasOwnProperty('styles')) {
      Object.defineProperty(context, 'styles', {
        enumerable: true,
        get: function() {
          return renderStyles(context._styles)
        }
      })
      // expose renderStyles for vue-server-renderer (vuejs/#6353)
      context._renderStyles = renderStyles
    }

    var styles = context._styles || (context._styles = {})
    list = listToStyles(parentId, list)
    if (isProduction) {
      addStyleProd(styles, list)
    } else {
      addStyleDev(styles, list)
    }
  }
}

// In production, render as few style tags as possible.
// (mostly because IE9 has a limit on number of style tags)
function addStyleProd (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      // group style tags by media types.
      var id = part.media || 'default'
      var style = styles[id]
      if (style) {
        if (style.ids.indexOf(part.id) < 0) {
          style.ids.push(part.id)
          style.css += '\n' + part.css
        }
      } else {
        styles[id] = {
          ids: [part.id],
          css: part.css,
          media: part.media
        }
      }
    }
  }
}

// In dev we use individual style tag for each module for hot-reload
// and source maps.
function addStyleDev (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      styles[part.id] = {
        ids: [part.id],
        css: part.css,
        media: part.media
      }
    }
  }
}

function renderStyles (styles) {
  var css = ''
  for (var key in styles) {
    var style = styles[key]
    css += '<style data-vue-ssr-id="' + style.ids.join(' ') + '"' +
        (style.media ? ( ' media="' + style.media + '"' ) : '') + '>' +
        style.css + '</style>'
  }
  return css
}


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/base/Navbar.vue?vue&type=template&id=1abd66ad&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('client-only', [_c('nav', {
    key: _vm.userLogged,
    staticClass: "navbar fixed top-0 left-0 w-full z-50 bg-white shadow-md text-neutral-800",
    attrs: {
      "id": "navbar"
    }
  }, [_c('div', {
    staticClass: "flex flex-col max-w-screen-xl px-4 mx-auto lg:items-center lg:justify-between lg:flex-row py-2"
  }, [_c('div', {
    staticClass: "flex flex-col lg:flex-row items-center space-x-4 xl:space-x-8"
  }, [_c('div', {
    staticClass: "w-full flex flex-row items-center justify-between py-6"
  }, [_c('div', {
    staticClass: "logo"
  }, [_c('a', {
    attrs: {
      "href": "/"
    }
  }, [_c('img', {
    staticClass: "w-16 xl:w-24 object-contain h-16",
    attrs: {
      "src": __webpack_require__(19)
    }
  })])])])]), _vm._v(" "), _c('div', {
    staticClass: "lg:flex-row lg:items-center lg:space-x-3 last-buttons last-buttons",
    class: {
      'block': _vm.open,
      'hidden': !_vm.open,
      'lg:flex': true
    }
  }, [ false ? undefined : _vm._e(), _vm._v(" "), _c('a', {
    attrs: {
      "href": "/apropos"
    }
  }, [_c('base-button', {
    staticClass: "px-2 xl:px-4 py-3 mt-2 bg-inherit text-gradient smallbtn"
  }, [_vm._v("\n          A propos de Beat\n          ")])], 1), _vm._v(" "), _c('a', {
    attrs: {
      "href": "/#domaines"
    }
  }, [_c('base-button', {
    staticClass: "px-2 xl:px-4 py-3 mt-2 bg-inherit text-gradient smallbtn"
  }, [_vm._v("\n          Domaines\n          ")])], 1), _vm._v(" "), _c('a', {
    attrs: {
      "href": "/blogs"
    }
  }, [_c('base-button', {
    staticClass: "px-2 xl:px-4 py-3 mt-2 bg-inherit text-gradient smallbtn"
  }, [_vm._v("\n          Actualités\n          ")])], 1), _vm._v(" "), _c('a', {
    attrs: {
      "href": "/#contact"
    }
  }, [_c('base-button', {
    staticClass: "px-2 xl:px-4 py-3 mt-2 bg-inherit text-gradient smallbtn"
  }, [_vm._v("\n          Contact\n          ")])], 1), _vm._v(" "), _c('div', {
    staticClass: "gtranslate_wrapper z-10000"
  }), _vm._v(" "), !_vm.isMobile && _vm.userLogged == true ? _c('base-button', {
    staticClass: "w-6 h-6 mt-2 rounded-full flex items-center justify-center relative smallbtn",
    staticStyle: {
      "background-image": "linear-gradient(to right, #468ef9, #030a3c)",
      "color": "white"
    },
    on: {
      "click": _vm.openModal
    }
  }, [_c('PlusIcon', {
    attrs: {
      "size": 12
    }
  })], 1) : _vm._e(), _vm._v(" "), _c('a', {
    attrs: {
      "href": "/u"
    }
  }, [!_vm.isMobile ? _c('base-button', {
    staticClass: "w-6 h-6 mt-2 rounded-full flex items-center justify-center relative smallbtn",
    staticStyle: {
      "background-image": "linear-gradient(to right, #468ef9, #030a3c)",
      "color": "white"
    }
  }, [_c('AccountIcon', {
    attrs: {
      "size": 12
    }
  }), _vm._v(" "), _vm.userLogged == true ? _c('span', {
    staticClass: "absolute top-0 right-0 w-3 h-3 bg-green-500 border border-white smallbtn rounded-full"
  }) : _vm._e()], 1) : _vm._e()], 1)], 1)]), _vm._v(" "), _vm.showModal ? _c('div', {
    staticClass: "modal"
  }, [_c('div', {
    staticClass: "modal-content"
  }, [_vm.userLogged ? _c('div', [_c('span', {
    staticClass: "close",
    on: {
      "click": _vm.closeModal
    }
  }, [_vm._v("×")]), _vm._v(" "), _c('h4', {
    staticClass: "text-2xl sm:text-xl xl:text-2xl font-bold leading-tight sm:pr-8 xl:pr-10 ml-2 mr-2",
    staticStyle: {
      "color": "#030a3c"
    }
  }, [_vm._v("\n     \n              Bonjour, "), _c('span', {
    staticClass: "text-header-gradient"
  }, [_vm._v(" Commençons!")])]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('a', {
    attrs: {
      "href": "/create?v=blog"
    }
  }, [_c('base-button', {
    staticClass: "px-2 xl:px-4 py-3 mt-2 bg-inherit text-gradient border border-[#0c66ee]"
  }, [_vm._v("\n              Créer et publier un article ou une opportunité\n            ")])], 1), _vm._v(" "), _c('br'), _c('hr'), _vm._v(" "), _c('small', [_vm._v("En cliquant ici, vous serez redirigé vers la page de création d'un article ou d'une opportunité. Vous pouvez également éditer ou supprimer des articles ou opportunités déjà publiés.")])]) : _c('div', [_c('span', {
    staticClass: "close",
    on: {
      "click": _vm.closeModal
    }
  }, [_vm._v("×")]), _vm._v(" "), _c('h4', {
    staticClass: "text-[2.5rem] sm:text-2xl xl:text-2xl font-bold leading-tight sm:pr-8 xl:pr-10",
    staticStyle: {
      "color": "#030a3c"
    },
    attrs: {
      "data-aos-once": "true"
    }
  }, [_vm._v("\n              Voici les recentes publications sur BEAT \n          ")]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('LandingTradingToolImage', {
    staticClass: "hidden sm:block",
    attrs: {
      "showHeader": false
    }
  }), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h4', {
    staticClass: "text-[2.5rem] sm:text-2xl xl:text-2xl font-bold leading-tight sm:pr-8 xl:pr-10",
    staticStyle: {
      "color": "#030a3c"
    },
    attrs: {
      "data-aos-once": "true"
    }
  })], 1)])]) : _vm._e()])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/base/Navbar.vue?vue&type=template&id=1abd66ad&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/base/Navbar.vue?vue&type=script&lang=js
/* harmony default export */ var Navbarvue_type_script_lang_js = ({
  name: 'BaseNavbar',
  data() {
    return {
      open: false,
      dropdownNavbar: false,
      destinationLink: "/blogs",
      destination: "Discover new AI tools",
      user: null,
      validSource: false,
      userLogged: false,
      showModal: false,
      accesshash: "",
      isMobile: window.innerWidth < 1024
    };
  },
  props: {
    from: {
      type: String,
      default: null
    }
  },
  methods: {
    logOut() {
      sessionStorage.removeItem('token');
      sessionStorage.removeItem('username');
      // console.log('Session removed, User logged out');
      this.$router.push({
        path: `/`
      });
    },
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    defineDestination() {
      if (this.from) {
        if (this.from == "blog") {
          this.destination = "Explore useful tips";
          this.destinationLink = "/tips";
          this.validSource = true;
        } else {
          this.destination = "Discover new AI tools";
          this.destinationLink = "/blogs";
        }
      }
    }
  },
  async fetch() {
    // Call the defineDestination method when the component is loaded
    this.defineDestination();
  },
  mounted() {
    window.addEventListener('resize', () => {
      this.isMobile = window.innerWidth < 1024;
    });
    // Initialize GTranslate
    window.gtranslateSettings = {
      default_language: 'fr',
      detect_browser_language: false,
      languages: ["fr", "en", "es", "sw"],
      wrapper_selector: '.gtranslate_wrapper',
      switcher_horizontal_position: 'right',
      switcher_vertical_position: 'top',
      flag_style: '3d',
      alt_flags: {
        en: 'usa'
      },
      flag_size: 24
    };
    // reduce the font size of the div to 10px
    const gtranslateWrapper = document.querySelector('.gtranslate_wrapper');
    if (gtranslateWrapper) {
      // important

      gtranslateWrapper.style.fontSize = '10px'; // Adjust the font size as needed
    }
    const script = document.createElement('script');
    script.src = 'https://cdn.gtranslate.net/widgets/latest/popup.js';
    script.defer = true;
    document.body.appendChild(script);
    if (typeof sessionStorage !== 'undefined' && typeof localStorage !== 'undefined') {
      const token = sessionStorage.getItem('token');
      this.user = sessionStorage.getItem('username');
      this.accesshash = sessionStorage.getItem('accesshash') || localStorage.getItem('accesshash');
      if (token) {
        this.userLogged = true;
        // console.log('user is logged in, show the login icon');
      }
    }
  }
});
// CONCATENATED MODULE: ./components/base/Navbar.vue?vue&type=script&lang=js
 /* harmony default export */ var base_Navbarvue_type_script_lang_js = (Navbarvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/base/Navbar.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(61)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  base_Navbarvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1abd66ad",
  "2adcc926"
  
)

/* harmony default export */ var Navbar = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {BaseButton: __webpack_require__(11).default,LandingTradingToolImage: __webpack_require__(29).default})


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/base/Footer.vue?vue&type=template&id=7ba68644&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('client-only', [_c('footer', {
    staticClass: "max-w-screen-xl px-8 mx-auto mb-0"
  }, [_vm.isHomepage ? _c('section', {
    staticClass: "bg-trading-tools relative max-w-full sm:mx-4 xl:mx-10 my-24 shadow sm:rounded-2xl overflow-hidden"
  }, [_c('div', {
    staticClass: "w-full py-16 flex flex-col items-center"
  }, [_c('h2', {
    staticClass: "text-3xl sm:text-4xl font-semibold text-center",
    attrs: {
      "data-aos": "flip-down"
    }
  }, [_vm._v("\n          Nos actualités les plus recentes\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "relative w-full flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0 px-3 xl:px-10 mt-16 sm:mt-8"
  }, _vm._l(_vm.blogs, function (blog) {
    return _c('LandingStep', {
      key: blog.id,
      attrs: {
        "blog": blog
      },
      on: {
        "open-blog": function ($event) {
          return _vm.showSingleOpportunity(blog);
        }
      }
    });
  }), 1)])]) : _vm._e(), _vm._v(" "), _c('section', {
    staticClass: "partners-grid py-8 bg-white"
  }, [_c('h1', {
    staticClass: "text-center text-4xl mb-6"
  }, [_vm._v("Nos partenaires")]), _vm._v(" "), _c('div', {
    staticClass: "grid grid-cols-2 sm:grid-cols-9 gap-4 px-2 sm:px-4 mx-auto"
  }, _vm._l(_vm.partners, function (partner) {
    return _c('a', {
      key: partner.name,
      attrs: {
        "href": partner.link,
        "target": "_blank",
        "rel": "noopener noreferrer"
      }
    }, [_c('img', {
      staticClass: "h-22 sm:h-28 object-contain rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-lg",
      attrs: {
        "src": partner.logo,
        "alt": partner.name
      }
    })]);
  }), 0)]), _vm._v(" "), _vm.isHomepage ? _c('section', {
    staticClass: "bg-trading-tools relative max-w-full sm:mx-4 my-20 py-16 shadow rounded-2xl overflow-hidden",
    attrs: {
      "id": "contact"
    }
  }, [_c('div', {
    staticClass: "relative max-w-screen-xl px-4 sm:px-2 mx-auto grid grid-cols-12 gap-x-6"
  }, [_c('LandingTradingToolImage', {
    staticClass: "sm:hidden"
  }), _vm._v(" "), _c('div', {
    staticClass: "col-span-12 lg:col-span-6 space-y-8 sm:space-y-6 px-4 sm:px-6 mt-8"
  }, [_c('form', {
    on: {
      "submit": function ($event) {
        $event.preventDefault();
        return _vm.sendMessage.apply(null, arguments);
      }
    }
  }, [_vm.addedRequest ? _c('div', {
    staticClass: "bg-green-500 text-white px-4 py-2 rounded-md mb-4"
  }, [_vm._v("\n              Votre message a été enregistré avec succès, nous allons vous contacter dans les plus brefs délais.\n            ")]) : _vm._e(), _vm._v(" "), _vm.failedRequest ? _c('div', {
    staticClass: "bg-orange-500 text-white px-4 py-2 rounded-md mb-4"
  }, [_vm._v("\n              Une erreur est survénue, veuillez réassayer plustard.\n            ")]) : _vm._e(), _vm._v(" "), _c('h2', {
    staticClass: "text-4xl font-semibold"
  }, [_vm._v("Entrez en contact avec nous.")]), _vm._v(" "), _c('p', {
    staticClass: "text-[0.9rem]"
  }, [_vm._v("Adresse : Goma, Nord-Kivu, RDC"), _c('br'), _vm._v("\n          Phone : +243 995 277 023"), _c('br'), _vm._v("\n          Email : direction@beatexpertise.com"), _c('br')]), _vm._v(" "), _c('br'), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.visitorname,
      expression: "visitorname"
    }],
    staticClass: "w-full px-2 py-4 sm:py-3 rounded-lg sm:rounded-md text-sm focus:outline-none border border-[#AAAAAA] placeholder-[#888]",
    attrs: {
      "type": "text",
      "placeholder": "Votre nom ou organisation"
    },
    domProps: {
      "value": _vm.visitorname
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.visitorname = $event.target.value;
      }
    }
  }), _c('br'), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.visitoremail,
      expression: "visitoremail"
    }],
    staticClass: "w-full mt-2 px-2 py-4 sm:py-3 rounded-lg sm:rounded-md text-sm focus:outline-none border border-[#AAAAAA] placeholder-[#888]",
    attrs: {
      "type": "text",
      "placeholder": "Entrez votre adresse mail *"
    },
    domProps: {
      "value": _vm.visitoremail
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.visitoremail = $event.target.value;
      }
    }
  }), _vm._v(" "), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.visitormessage,
      expression: "visitormessage"
    }],
    staticClass: "w-full px-2 mt-2 py-4 sm:py-3 rounded-lg sm:rounded-md text-sm focus:outline-none border border-[#AAAAAA] placeholder-[#888]",
    attrs: {
      "rows": "3",
      "placeholder": "Votre message ici"
    },
    domProps: {
      "value": _vm.visitormessage
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.visitormessage = $event.target.value;
      }
    }
  }), _c('br'), _vm._v(" "), _c('hr'), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.visitorphone,
      expression: "visitorphone"
    }],
    staticClass: "w-full px-2 py-4 sm:py-3 rounded-lg sm:rounded-md text-sm focus:outline-none border border-[#AAAAAA] placeholder-[#888]",
    attrs: {
      "type": "text",
      "placeholder": "Vous aimeriez qu'on vous appele? Entrez votre numero *"
    },
    domProps: {
      "value": _vm.visitorphone
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.visitorphone = $event.target.value;
      }
    }
  }), _vm._v(" "), _c('br'), _c('br'), _vm._v(" "), _c('div', {
    staticClass: "flex flex-col sm:flex-row"
  }, [_c('BaseButton', {
    staticClass: "px-10 py-4 bg-inherit text-gradient border border-[#4A8FF6] text-base",
    attrs: {
      "type": "submit"
    }
  }, [_vm._v("\n              Envoyer un message\n            ")])], 1)])]), _vm._v(" "), _c('LandingTradingToolImage', {
    staticClass: "hidden sm:block"
  })], 1)]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "relative z-10 flex flex-col sm:flex-row justify-between items-center sm:items-start w-full p-6 space-y-6 sm:space-y-0 sm:space-x-6"
  }, [_c('div', {
    staticClass: "flex flex-col sm:flex-row items-center w-full sm:w-2/4 text-center sm:text-left"
  }, [_c('div', {
    staticClass: "w-full sm:w-4/4"
  }, [_c('span', {
    staticClass: "text-base sm:text-lg text-gray-800"
  }, [_c('a', {
    attrs: {
      "href": "/"
    }
  }, [_c('img', {
    staticClass: "w-28 xl:w-58 object-contain h-28 sm:h-24",
    attrs: {
      "src": __webpack_require__(19),
      "alt": "Beat Expertise Logo"
    }
  })]), _vm._v("\n          BEAT est un bureau d'expertise et accompagnement technique basé à Goma, dédié à offrir des solutions innovantes pour le développement technologique de la région.\n        ")])])]), _vm._v(" "), _c('nav', {
    staticClass: "flex flex-col items-center sm:items-start w-full sm:w-1/4 space-y-2 sm:space-y-3 text-gray-700"
  }, [_c('br'), _vm._v(" "), _c('a', {
    staticClass: "hover:text-blue-600",
    attrs: {
      "href": "/blogs"
    }
  }, [_vm._v("Actualités")]), _vm._v(" "), _c('a', {
    staticClass: "hover:text-blue-600",
    attrs: {
      "href": "/#mission"
    }
  }, [_vm._v("Mission")]), _vm._v(" "), _c('a', {
    staticClass: "hover:text-blue-600",
    attrs: {
      "href": "/#domaines"
    }
  }, [_vm._v("Domaines")]), _vm._v(" "), _c('a', {
    staticClass: "hover:text-blue-600",
    attrs: {
      "href": "/opportunities"
    }
  }, [_vm._v("Offres & Opportunités")]), _vm._v(" "), _c('a', {
    staticClass: "hover:text-blue-600",
    attrs: {
      "href": "/apropos"
    }
  }, [_vm._v("A propos de nous")])]), _vm._v(" "), _c('form', {
    staticClass: "flex flex-col items-center w-full sm:w-1/3 bg-[#FAFAFA] hover:bg-gray-100 hover:shadow-md border border-[#DDDDDD] rounded-md p-4",
    on: {
      "submit": function ($event) {
        $event.preventDefault();
        return _vm.addToUsersList.apply(null, arguments);
      }
    }
  }, [_vm.addedUser ? _c('span', {
    staticClass: "bg-green-500 text-white px-4 py-2 rounded-md mb-2 text-sm sm:text-base"
  }, [_vm._v("Merci d'avoir rejoins notre communauté, vous serez desormais informé de toute nos actualités.")]) : _vm._e(), _vm._v(" "), _vm.userExists ? _c('span', {
    staticClass: "bg-orange-500 text-white px-4 py-2 rounded-md mb-2 text-sm sm:text-base"
  }, [_vm._v("Cette adresse mail est déjà enregistré.")]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "text-center text-gray-700 mb-2 text-sm sm:text-base"
  }, [_c('b', [_vm._v("Rejoindre notre newsletter.")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.email,
      expression: "email"
    }],
    staticClass: "w-full px-3 py-2 rounded-md border border-[#AAAAAA] placeholder-[#888] text-sm sm:text-base",
    attrs: {
      "type": "email",
      "placeholder": "Entrer votre adresse mail"
    },
    domProps: {
      "value": _vm.email
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.email = $event.target.value;
      }
    }
  }), _vm._v(" "), _c('button', {
    staticClass: "px-4 py-2 mt-2 rounded-md text-white hover:shadow-md transition duration-300 w-full sm:w-auto",
    staticStyle: {
      "background-color": "#030a3c"
    },
    attrs: {
      "type": "submit"
    }
  }, [_c('ArrowRightIcon', {
    attrs: {
      "size": 20
    }
  })], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "flex items-center justify-center"
  }, [_c('a', {
    staticClass: "share-button",
    attrs: {
      "href": "https://wa.me/+243995277023",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_c('base-button', {
    staticClass: "w-10 h-10 mt-0 mr-1 ml-1 rounded-full flex items-center justify-center relative",
    staticStyle: {
      "color": "black"
    }
  }, [_c('Whatsapp', {
    attrs: {
      "size": 24
    }
  })], 1)], 1), _vm._v(" "), _c('a', {
    staticClass: "share-button",
    attrs: {
      "href": "https://www.facebook.com/profile.php?id=61578637741320",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_c('base-button', {
    staticClass: "w-10 h-10 mt-0 mr-1 ml-1 rounded-full flex items-center justify-center relative",
    staticStyle: {
      "color": "black"
    }
  }, [_c('Facebook', {
    attrs: {
      "size": 24
    }
  })], 1)], 1), _vm._v(" "), _c('a', {
    staticClass: "share-button",
    attrs: {
      "href": "https://x.com/beatexpertise",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_c('base-button', {
    staticClass: "w-10 h-10 mt-0 mr-1 ml-1 rounded-full flex items-center justify-center relative",
    staticStyle: {
      "color": "black"
    }
  }, [_c('Twitter', {
    attrs: {
      "size": 24
    }
  })], 1)], 1), _vm._v(" "), _c('a', {
    staticClass: "share-button",
    attrs: {
      "href": "mailto:direction@beatexpertise.com",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_c('base-button', {
    staticClass: "w-10 h-10 mt-0 mr-1 ml-1 rounded-full flex items-center justify-center relative",
    staticStyle: {
      "color": "black"
    }
  }, [_c('EmailIcon', {
    attrs: {
      "size": 24
    }
  })], 1)], 1), _vm._v(" "), _c('a', {
    staticClass: "share-button",
    attrs: {
      "href": "https://www.linkedin.com/company/beat-expertise/about/",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_c('base-button', {
    staticClass: "w-10 h-10 mt-0 mr-1 ml-1 rounded-full flex items-center justify-center relative",
    staticStyle: {
      "color": "black"
    }
  }, [_c('Linkedin', {
    attrs: {
      "size": 24
    }
  })], 1)], 1), _vm._v(" "), _c('a', {
    staticClass: "share-button",
    attrs: {
      "href": "https://www.youtube.com/channel/UCcpAAfUJtM_sxZNb9LO94sQ",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_c('base-button', {
    staticClass: "w-10 h-10 mt-0 mr-1 ml-1 rounded-full flex items-center justify-center relative",
    staticStyle: {
      "color": "black"
    }
  }, [_c('Youtube', {
    attrs: {
      "size": 24
    }
  })], 1)], 1)]), _vm._v(" "), _c('div', {
    staticClass: "py-8 sm:py-4 text-center text-sm text-[#666666] hover:text-gray-900",
    staticStyle: {
      "position": "relative",
      "z-index": "1"
    }
  }, [_vm._v("\n      © Copyright " + _vm._s(_vm.year) + " "), _c('a', {
    attrs: {
      "href": "/apropos"
    }
  }, [_vm._v("Beat Expertise. ")]), _vm._v(" Tous droits reservés\n      "), _c('br'), _vm._v(" "), _c('a', {
    staticClass: "mr-1 ml-1 mb-4 hover:text-blue-900",
    attrs: {
      "href": "/apropos"
    }
  }, [_vm._v("A propos de BeatExpertise ")])])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/base/Footer.vue?vue&type=template&id=7ba68644&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/base/Footer.vue?vue&type=script&lang=js
/* harmony default export */ var Footervue_type_script_lang_js = ({
  name: 'BaseFooter',
  props: {
    isHomepage: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      year: `${new Date().toLocaleString('en-us', {
        year: 'numeric'
      })}`,
      blogs: [],
      visitorname: '',
      visitoremail: '',
      visitorphone: '',
      visitormessage: '',
      email: '',
      addedRequest: false,
      addedUser: false,
      userExists: false,
      failedRequest: false,
      partners: [{
        name: "Olame",
        logo: __webpack_require__(38),
        link: "https://olamerdc.org/"
      }, {
        name: "UniGom",
        logo: __webpack_require__(39),
        link: "https://unigom.ac.cd/"
      }, {
        name: "Caritas",
        logo: __webpack_require__(40),
        link: "https://www.caritas.org/"
      }, {
        name: "Australia",
        logo: __webpack_require__(41),
        link: "https://www.caritas.org.au/"
      }, {
        name: "CaritasKindu",
        logo: __webpack_require__(42),
        link: "https://www.caritas.org/"
      }, {
        name: "Cafodd",
        logo: __webpack_require__(43),
        link: "https://cafod.org.uk/"
      }, {
        name: "Start",
        logo: __webpack_require__(44),
        link: "https://startnetwork.org/"
      }, {
        name: "Cajed",
        logo: __webpack_require__(45),
        link: "https://www.cajed.org/"
      }, {
        name: "Hub",
        logo: __webpack_require__(46),
        link: "https://startnetwork.org/network/hubs/democratic-republic-congo-hub"
      }]
    };
  },
  async fetch() {
    try {
      const response = await this.$axios.get('/blog/getall');
      // limit to 4 only 
      this.blogs = response.data.blogs.filter(blog => blog.publicPost == '0').slice(0, 3);
    } catch (error) {
      console.error(error);
    }
  },
  mounted() {
    window.addEventListener('resize', () => {
      this.isMobile = window.innerWidth < 1024;
    });

    // Smartsupp integration
    if (false) {}

    // Load user session if available
    if (typeof sessionStorage !== 'undefined' && typeof localStorage !== 'undefined') {
      const token = sessionStorage.getItem('token');
      this.user = sessionStorage.getItem('username');
      this.accesshash = sessionStorage.getItem('accesshash') || localStorage.getItem('accesshash');
      if (token) {
        this.userLogged = true;
      }
    }
  },
  methods: {
    showSingleBlog(blog) {
      this.$router.push({
        path: `blogs/${blog.blogRoute}`
      });
    },
    async sendMessage() {
      try {
        const response = await this.$axios.post('/visitor/message', {
          visitorname: this.visitorname,
          visitoremail: this.visitoremail,
          visitormessage: this.visitormessage,
          visitorphone: this.visitorphone
        });
        console.log(response);
        if (response.data.status_code === 200) {
          this.addedRequest = true;
        } else {
          this.failedRequest = true;
        }
      } catch (error) {
        console.error(error);
      }
    },
    async addToUsersList() {
      try {
        const response = await this.$axios.post("/user/register", {
          email: this.email,
          accesshash: 'beat_newsletter'
        });
        console.log(response);
        if (response.data.status_code === 200) {
          // console.log('added to the list');
          this.addedUser = true;
        } else {
          // console.log('Failed to save user');
          this.userExists = true;
        }
      } catch (error) {
        console.error(error);
      }
    }
  }
});
// CONCATENATED MODULE: ./components/base/Footer.vue?vue&type=script&lang=js
 /* harmony default export */ var base_Footervue_type_script_lang_js = (Footervue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/base/Footer.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(63)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  base_Footervue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7ba68644",
  "e7aab59e"
  
)

/* harmony default export */ var Footer = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {LandingStep: __webpack_require__(72).default,LandingTradingToolImage: __webpack_require__(29).default,BaseButton: __webpack_require__(11).default,BaseButton: __webpack_require__(11).default})


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("vuex");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/base/Button.vue?vue&type=template&id=675fc770
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('client-only', [_c('button', _vm._g(_vm._b({
    staticClass: "text-sm text-center rounded-full hover:shadow-md hover:shadow-[#0c66ee]/50 transition duration-300"
  }, 'button', _vm.$attrs, false), _vm.$listeners), [_vm._t("default")], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/base/Button.vue?vue&type=template&id=675fc770

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/base/Button.vue?vue&type=script&lang=js
/* harmony default export */ var Buttonvue_type_script_lang_js = ({
  name: 'BaseButton',
  inheritAttrs: false
});
// CONCATENATED MODULE: ./components/base/Button.vue?vue&type=script&lang=js
 /* harmony default export */ var base_Buttonvue_type_script_lang_js = (Buttonvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/base/Button.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  base_Buttonvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4cdd7348"
  
)

/* harmony default export */ var Button = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22);
/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_1__);
// mixins/aos.js


/* harmony default export */ __webpack_exports__["a"] = ({
  mounted() {
    aos__WEBPACK_IMPORTED_MODULE_0___default.a.init({
      disable: 'phone'
    });
  }
});

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("vue-no-ssr");

/***/ }),
/* 14 */,
/* 15 */
/***/ (function(module, exports) {

module.exports = require("vue-client-only");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function isObject(val) {
  return val !== null && typeof val === "object";
}
function _defu(baseObj, defaults, namespace = ".", merger) {
  if (!isObject(defaults)) {
    return _defu(baseObj, {}, namespace, merger);
  }
  const obj = Object.assign({}, defaults);
  for (const key in baseObj) {
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const val = baseObj[key];
    if (val === null || val === void 0) {
      continue;
    }
    if (merger && merger(obj, key, val, namespace)) {
      continue;
    }
    if (Array.isArray(val) && Array.isArray(obj[key])) {
      obj[key] = obj[key].concat(val);
    } else if (isObject(val) && isObject(obj[key])) {
      obj[key] = _defu(val, obj[key], (namespace ? `${namespace}.` : "") + key.toString(), merger);
    } else {
      obj[key] = val;
    }
  }
  return obj;
}
function extend(merger) {
  return (...args) => args.reduce((p, c) => _defu(p, c, "", merger), {});
}
const defu = extend();
defu.fn = extend((obj, key, currentValue, _namespace) => {
  if (typeof obj[key] !== "undefined" && typeof currentValue === "function") {
    obj[key] = currentValue(obj[key]);
    return true;
  }
});
defu.arrayFn = extend((obj, key, currentValue, _namespace) => {
  if (Array.isArray(obj[key]) && typeof currentValue === "function") {
    obj[key] = currentValue(obj[key]);
    return true;
  }
});
defu.extend = extend;
module.exports = defu;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo.e808949.png";

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(53);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("20fe578f", content, true, context)
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(55);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("709683a2", content, true, context)
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(58);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(6).default("c4462414", content, true)

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(60);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("d5ca824a", content, true, context)
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(62);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("71ddc8a4", content, true, context)
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(64);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("6f3b3811", content, true, context)
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(66);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("76570f68", content, true, context)
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(68);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("e6391952", content, true, context)
};

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/landing/TradingToolImage.vue?vue&type=template&id=311be87c
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('client-only', [_c('div', _vm._b({
    staticClass: "col-span-12 lg:col-span-6"
  }, 'div', _vm.$attrs, false), [_c('div', {
    staticClass: "w-full sm:mt-20 xl:mt-0"
  }, [_c('br'), _c('br'), _vm._v(" "), _c('div', {
    staticClass: "flex flex-wrap"
  }, [_c('div', {
    staticClass: "w-full h-64 sm:h-96 rounded-lg overflow-hidden shadow-lg"
  }, [_c('iframe', {
    staticStyle: {
      "border": "0"
    },
    attrs: {
      "width": "100%",
      "height": "100%",
      "loading": "lazy",
      "allowfullscreen": "",
      "referrerpolicy": "no-referrer-when-downgrade",
      "src": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63811.47636251019!2d29.11131532259476!3d-1.6232212809677344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dd092a7268daf5%3A0xd630ab5bd2dd6559!2sULPGL%20(campus%20Moise)%2FGoma!5e0!3m2!1sen!2srw!4v1747604115002!5m2!1sen!2srw"
    }
  })]), _vm._v(" "), _c('br')])])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/landing/TradingToolImage.vue?vue&type=template&id=311be87c

// EXTERNAL MODULE: ./mixins/aos.js
var aos = __webpack_require__(12);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/landing/TradingToolImage.vue?vue&type=script&lang=js

/* harmony default export */ var TradingToolImagevue_type_script_lang_js = ({
  name: 'tools-buttons',
  mixins: [aos["a" /* default */]],
  props: {
    showHeader: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      areas: [{
        name: 'Études et Conseil',
        href: '/services#etudes-conseil'
      }, {
        name: 'Infrastructures d\'eau',
        href: '/services#construction'
      }, {
        name: 'Digitalisation des réseaux d’eau',
        href: '/services#digitalisation'
      }, {
        name: 'Maintenance',
        href: '/services#maintenance'
      }, {
        name: 'Énergie de secours',
        href: '/services#energie-secours'
      }, {
        name: 'Gestion et suivi',
        href: '/services#gestion-eau'
      }, {
        name: 'Optimisation',
        href: '/services#systemes-pompage'
      }, {
        name: 'Formation',
        href: '/services#formation-technique'
      }, {
        name: 'Cartographie',
        href: '/services#cartographie-reseaux'
      }, {
        name: 'Solutions innovantes',
        href: '/services#gestion-durable-eau'
      }, {
        name: 'Partenariats et collaborations stratégiques',
        href: '/services#partenariats-strategiques'
      }]
    };
  }
});
// CONCATENATED MODULE: ./components/landing/TradingToolImage.vue?vue&type=script&lang=js
 /* harmony default export */ var landing_TradingToolImagevue_type_script_lang_js = (TradingToolImagevue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/landing/TradingToolImage.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  landing_TradingToolImagevue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2eff54d2"
  
)

/* harmony default export */ var TradingToolImage = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("node-fetch-native");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("vue-meta");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("aos");

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

const {
  defu,
  createDefu,
  defuFn,
  defuArrayFn
} = __webpack_require__(70);
module.exports = defu;
module.exports.defu = defu;
module.exports.default = defu;
module.exports.createDefu = createDefu;
module.exports.defuFn = defuFn;
module.exports.defuArrayFn = defuArrayFn;

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("vue2-smooth-scroll");

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/pic1.1365900.jpg";

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/pic2.66d73cd.jpg";

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/aa.b73744f.jpeg";

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/olame.98c00d9.jpeg";

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/unigom.f9dc2bc.png";

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/caritasnew.7be7b83.png";

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/australia.7154a9c.jpeg";

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/kindu.9bb3b41.jpeg";

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/cafod.807447b.webp";

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/start.17a8ab3.jpeg";

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/cajed.4257f92.png";

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/hub.9e3b867.png";

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/background.7622a29.png";

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bg-trading-tools.6ec4e83.png";

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/cc.3b7e9c1.jpeg";

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(51);
module.exports = __webpack_require__(71);


/***/ }),
/* 51 */
/***/ (function(module, exports) {

global.installComponents = function (component, components) {
  var options = typeof component.exports === 'function'
    ? component.exports.extendOptions
    : component.options

  if (typeof component.exports === 'function') {
    options.components = component.exports.options.components
  }

  options.components = options.components || {}

  for (var i in components) {
    options.components[i] = options.components[i] || components[i]
  }


  if (options.functional) {
    provideFunctionalComponents(component, options.components)
  }
}

var functionalPatchKey = '_functionalComponents'

function provideFunctionalComponents(component, components) {
  if (component.exports[functionalPatchKey]) {
    return
  }
  component.exports[functionalPatchKey] = true

  var render = component.exports.render
  component.exports.render = function (h, vm) {
    return render(h, Object.assign({}, vm, {
      _c: function (n, a, b) {
        return vm._c(components[n] || n, a, b)
      }
    }))
  }
}


/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_id_5eb69f1c_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_id_5eb69f1c_prod_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_id_5eb69f1c_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_id_5eb69f1c_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_id_5eb69f1c_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".__nuxt-error-page{align-items:center;background:#f7f8fb;color:#47494e;display:flex;flex-direction:column;font-family:sans-serif;font-weight:100!important;justify-content:center;padding:1rem;text-align:center;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;bottom:0;left:0;position:absolute;right:0;top:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{color:#47494e;font-size:1.5rem;margin-bottom:8px;margin-top:15px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;-webkit-text-decoration:none;text-decoration:none}.__nuxt-error-page .logo{bottom:12px;left:12px;position:fixed}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_b64bf7b2_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_b64bf7b2_prod_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_b64bf7b2_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_b64bf7b2_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_b64bf7b2_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".nuxt-progress{background-color:#000;height:2px;left:0;opacity:1;position:fixed;right:0;top:0;transition:width .1s,opacity .4s;width:0;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(57);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(6).default("17bc9ac2", content, true)

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 transparent;--tw-ring-shadow:0 0 transparent;--tw-shadow:0 0 transparent;--tw-shadow-colored:0 0 transparent;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 transparent;--tw-ring-shadow:0 0 transparent;--tw-shadow:0 0 transparent;--tw-shadow-colored:0 0 transparent;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }/*! tailwindcss v3.4.17 | MIT License | https://tailwindcss.com*/*,:after,:before{border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:\"\"}:host,html{line-height:1.5;-webkit-text-size-adjust:100%;font-family:Poppins,sans-serif;font-feature-settings:normal;font-variation-settings:normal;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-tap-highlight-color:transparent}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace;font-feature-settings:normal;font-size:1em;font-variation-settings:normal}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{color:inherit;font-family:inherit;font-feature-settings:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{color:#9ca3af;opacity:1}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]:where(:not([hidden=until-found])){display:none}[multiple],[type=date],[type=datetime-local],[type=email],[type=month],[type=number],[type=password],[type=search],[type=tel],[type=text],[type=time],[type=url],[type=week],select,textarea{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#fff;border-color:#6b7280;border-radius:0;border-width:1px;font-size:1rem;line-height:1.5rem;padding:.5rem .75rem;--tw-shadow:0 0 transparent}[multiple]:focus,[type=date]:focus,[type=datetime-local]:focus,[type=email]:focus,[type=month]:focus,[type=number]:focus,[type=password]:focus,[type=search]:focus,[type=tel]:focus,[type=text]:focus,[type=time]:focus,[type=url]:focus,[type=week]:focus,select:focus,textarea:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:#2563eb;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);border-color:#2563eb;box-shadow:/*!*/ /*!*/ 0 0 0 0 #fff,/*!*/ /*!*/ 0 0 0 1px #2563eb,var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}input::-moz-placeholder,textarea::-moz-placeholder{color:#6b7280;opacity:1}input::placeholder,textarea::placeholder{color:#6b7280;opacity:1}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-date-and-time-value{min-height:1.5em}::-webkit-datetime-edit,::-webkit-datetime-edit-day-field,::-webkit-datetime-edit-hour-field,::-webkit-datetime-edit-meridiem-field,::-webkit-datetime-edit-millisecond-field,::-webkit-datetime-edit-minute-field,::-webkit-datetime-edit-month-field,::-webkit-datetime-edit-second-field,::-webkit-datetime-edit-year-field{padding-bottom:0;padding-top:0}select{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3E%3C/svg%3E\");background-position:right .5rem center;background-repeat:no-repeat;background-size:1.5em 1.5em;padding-right:2.5rem;-webkit-print-color-adjust:exact;color-adjust:exact}[multiple]{background-image:none;background-position:0 0;background-repeat:repeat;background-size:auto auto;background-size:initial;padding-right:.75rem;-webkit-print-color-adjust:initial;color-adjust:initial}[type=checkbox],[type=radio]{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0;-webkit-print-color-adjust:exact;color-adjust:exact;background-color:#fff;background-origin:border-box;border-color:#6b7280;border-width:1px;color:#2563eb;display:inline-block;flex-shrink:0;height:1rem;-webkit-user-select:none;-moz-user-select:none;user-select:none;vertical-align:middle;width:1rem;--tw-shadow:0 0 transparent}[type=checkbox]{border-radius:0}[type=radio]{border-radius:100%}[type=checkbox]:focus,[type=radio]:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);--tw-ring-offset-width:2px;--tw-ring-offset-color:#fff;--tw-ring-color:#2563eb;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:/*!*/ /*!*/ 0 0 0 0 #fff,/*!*/ /*!*/ 0 0 0 4px #2563eb,var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[type=checkbox]:checked,[type=radio]:checked{background-color:currentColor;background-position:50%;background-repeat:no-repeat;background-size:100% 100%;border-color:transparent}[type=checkbox]:checked{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 16 16'%3E%3Cpath d='M12.207 4.793a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L6.5 9.086l4.293-4.293a1 1 0 0 1 1.414 0'/%3E%3C/svg%3E\")}[type=radio]:checked{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 16 16'%3E%3Ccircle cx='8' cy='8' r='3'/%3E%3C/svg%3E\")}[type=checkbox]:checked:focus,[type=checkbox]:checked:hover,[type=radio]:checked:focus,[type=radio]:checked:hover{background-color:currentColor;border-color:transparent}[type=checkbox]:indeterminate{background-color:currentColor;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3E%3Cpath stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3E%3C/svg%3E\");background-position:50%;background-repeat:no-repeat;background-size:100% 100%;border-color:transparent}[type=checkbox]:indeterminate:focus,[type=checkbox]:indeterminate:hover{background-color:currentColor;border-color:transparent}[type=file]{background:transparent none repeat 0 0/auto auto padding-box border-box scroll;background:initial;border-color:inherit;border-radius:0;border-width:0;font-size:inherit;line-height:inherit;padding:0}[type=file]:focus{outline:1px auto -webkit-focus-ring-color}.container{width:100%}@media (min-width:640px){.container{max-width:640px}}@media (min-width:768px){.container{max-width:768px}}@media (min-width:1024px){.container{max-width:1024px}}@media (min-width:1280px){.container{max-width:1280px}}@media (min-width:1536px){.container{max-width:1536px}}.visible{visibility:visible}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.inset-0{bottom:0;left:0;right:0;top:0}.-top-2{top:-.5rem}.left-0{left:0}.left-3{left:.75rem}.right-0{right:0}.right-2{right:.5rem}.right-3{right:.75rem}.top-0{top:0}.top-1\\/2{top:50%}.top-2{top:.5rem}.z-10{z-index:10}.z-50{z-index:50}.col-span-12{grid-column:span 12/span 12}.float-left{float:left}.m-1{margin:.25rem}.m-2{margin:.5rem}.m-8{margin:2rem}.mx-auto{margin-left:auto;margin-right:auto}.my-0{margin-bottom:0;margin-top:0}.my-20{margin-bottom:5rem;margin-top:5rem}.my-24{margin-bottom:6rem;margin-top:6rem}.my-6{margin-bottom:1.5rem;margin-top:1.5rem}.mb-0{margin-bottom:0}.mb-1{margin-bottom:.25rem}.mb-10{margin-bottom:2.5rem}.mb-2{margin-bottom:.5rem}.mb-4{margin-bottom:1rem}.mb-6{margin-bottom:1.5rem}.mb-8{margin-bottom:2rem}.ml-0{margin-left:0}.ml-1{margin-left:.25rem}.ml-2{margin-left:.5rem}.ml-3{margin-left:.75rem}.ml-4{margin-left:1rem}.ml-5{margin-left:1.25rem}.ml-6{margin-left:1.5rem}.ml-7{margin-left:1.75rem}.mr-0{margin-right:0}.mr-1{margin-right:.25rem}.mr-10{margin-right:2.5rem}.mr-2{margin-right:.5rem}.mr-3{margin-right:.75rem}.mr-4{margin-right:1rem}.mr-5{margin-right:1.25rem}.mr-6{margin-right:1.5rem}.mr-7{margin-right:1.75rem}.mt-0{margin-top:0}.mt-1{margin-top:.25rem}.mt-10{margin-top:2.5rem}.mt-12{margin-top:3rem}.mt-16{margin-top:4rem}.mt-2{margin-top:.5rem}.mt-4{margin-top:1rem}.mt-6{margin-top:1.5rem}.mt-8{margin-top:2rem}.block{display:block}.flex{display:flex}.table{display:table}.grid{display:grid}.hidden{display:none}.h-10{height:2.5rem}.h-12{height:3rem}.h-16{height:4rem}.h-24{height:6rem}.h-28{height:7rem}.h-3{height:.75rem}.h-32{height:8rem}.h-4{height:1rem}.h-40{height:10rem}.h-48{height:12rem}.h-5{height:1.25rem}.h-52{height:13rem}.h-6{height:1.5rem}.h-64{height:16rem}.h-72{height:18rem}.h-\\[1000px\\]{height:1000px}.h-\\[125vh\\]{height:125vh}.h-auto{height:auto}.h-full{height:100%}.max-h-0{max-height:0}.max-h-56{max-height:14rem}.max-h-\\[600px\\]{max-height:600px}.min-h-\\[200px\\]{min-height:200px}.min-h-screen{min-height:100vh}.w-1\\/3{width:33.333333%}.w-10{width:2.5rem}.w-16{width:4rem}.w-2\\/3{width:66.666667%}.w-24{width:6rem}.w-28{width:7rem}.w-3{width:.75rem}.w-32{width:8rem}.w-4{width:1rem}.w-48{width:12rem}.w-5{width:1.25rem}.w-6{width:1.5rem}.w-auto{width:auto}.w-full{width:100%}.max-w-2xl{max-width:42rem}.max-w-6xl{max-width:72rem}.max-w-\\[106px\\]{max-width:106px}.max-w-\\[320px\\]{max-width:320px}.max-w-\\[385px\\]{max-width:385px}.max-w-\\[520px\\]{max-width:520px}.max-w-\\[900px\\]{max-width:900px}.max-w-full{max-width:100%}.max-w-md{max-width:28rem}.max-w-screen-xl{max-width:1280px}.flex-1{flex:1 1 0%}.flex-shrink-0{flex-shrink:0}.-translate-y-1\\/2{--tw-translate-y:-50%;transform:translate(var(--tw-translate-x),-50%) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-1\\/2,.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@keyframes spin{to{transform:rotate(1turn)}}.animate-spin{animation:spin 1s linear infinite}.cursor-default{cursor:default}.cursor-not-allowed{cursor:not-allowed}.cursor-pointer{cursor:pointer}.select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}.resize-none{resize:none}.resize{resize:both}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.grid-cols-12{grid-template-columns:repeat(12,minmax(0,1fr))}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.flex-row{flex-direction:row}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-start{align-items:flex-start}.items-center{align-items:center}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-4{gap:1rem}.gap-x-6{-moz-column-gap:1.5rem;column-gap:1.5rem}.space-x-1>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:.25rem;margin-left:calc(.25rem*(1 - var(--tw-space-x-reverse)));margin-right:0;margin-right:calc(.25rem*var(--tw-space-x-reverse))}.space-x-2>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:.5rem;margin-left:calc(.5rem*(1 - var(--tw-space-x-reverse)));margin-right:0;margin-right:calc(.5rem*var(--tw-space-x-reverse))}.space-x-3>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:.75rem;margin-left:calc(.75rem*(1 - var(--tw-space-x-reverse)));margin-right:0;margin-right:calc(.75rem*var(--tw-space-x-reverse))}.space-x-4>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:1rem;margin-left:calc(1rem*(1 - var(--tw-space-x-reverse)));margin-right:0;margin-right:calc(1rem*var(--tw-space-x-reverse))}.space-x-6>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:1.5rem;margin-left:calc(1.5rem*(1 - var(--tw-space-x-reverse)));margin-right:0;margin-right:calc(1.5rem*var(--tw-space-x-reverse))}.space-y-12>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:0;margin-bottom:calc(3rem*var(--tw-space-y-reverse));margin-top:3rem;margin-top:calc(3rem*(1 - var(--tw-space-y-reverse)))}.space-y-2>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:0;margin-bottom:calc(.5rem*var(--tw-space-y-reverse));margin-top:.5rem;margin-top:calc(.5rem*(1 - var(--tw-space-y-reverse)))}.space-y-3>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:0;margin-bottom:calc(.75rem*var(--tw-space-y-reverse));margin-top:.75rem;margin-top:calc(.75rem*(1 - var(--tw-space-y-reverse)))}.space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:0;margin-bottom:calc(1rem*var(--tw-space-y-reverse));margin-top:1rem;margin-top:calc(1rem*(1 - var(--tw-space-y-reverse)))}.space-y-6>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:0;margin-bottom:calc(1.5rem*var(--tw-space-y-reverse));margin-top:1.5rem;margin-top:calc(1.5rem*(1 - var(--tw-space-y-reverse)))}.space-y-8>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:0;margin-bottom:calc(2rem*var(--tw-space-y-reverse));margin-top:2rem;margin-top:calc(2rem*(1 - var(--tw-space-y-reverse)))}.overflow-auto{overflow:auto}.overflow-hidden,.truncate{overflow:hidden}.truncate{text-overflow:ellipsis}.truncate,.whitespace-nowrap{white-space:nowrap}.rounded{border-radius:.25rem}.rounded-2xl{border-radius:1rem}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:.5rem}.rounded-md{border-radius:.375rem}.rounded-xl{border-radius:.75rem}.rounded-t-lg{border-top-left-radius:.5rem;border-top-right-radius:.5rem}.border{border-width:1px}.border-8{border-width:8px}.border-b-2{border-bottom-width:2px}.border-r{border-right-width:1px}.border-t-8{border-top-width:8px}.border-none{border-style:none}.border-\\[\\#0c66ee\\]{--tw-border-opacity:1;border-color:#0c66ee;border-color:rgba(12,102,238,var(--tw-border-opacity,1))}.border-\\[\\#4A8FF6\\]{--tw-border-opacity:1;border-color:#4a8ff6;border-color:rgba(74,143,246,var(--tw-border-opacity,1))}.border-\\[\\#AAAAAA\\]{--tw-border-opacity:1;border-color:#aaa;border-color:rgba(170,170,170,var(--tw-border-opacity,1))}.border-\\[\\#DDDDDD\\]{--tw-border-opacity:1;border-color:#ddd;border-color:rgba(221,221,221,var(--tw-border-opacity,1))}.border-gray-200{--tw-border-opacity:1;border-color:#e5e7eb;border-color:rgba(229,231,235,var(--tw-border-opacity,1))}.border-gray-300{--tw-border-opacity:1;border-color:#d1d5db;border-color:rgba(209,213,219,var(--tw-border-opacity,1))}.border-green-400{--tw-border-opacity:1;border-color:#4ade80;border-color:rgba(74,222,128,var(--tw-border-opacity,1))}.border-white{--tw-border-opacity:1;border-color:#fff;border-color:rgba(255,255,255,var(--tw-border-opacity,1))}.bg-\\[\\#FAFAFA\\]{--tw-bg-opacity:1;background-color:#fafafa;background-color:rgba(250,250,250,var(--tw-bg-opacity,1))}.bg-black{--tw-bg-opacity:1;background-color:#000;background-color:rgba(0,0,0,var(--tw-bg-opacity,1))}.bg-blue-500{--tw-bg-opacity:1;background-color:#3b82f6;background-color:rgba(59,130,246,var(--tw-bg-opacity,1))}.bg-blue-800{--tw-bg-opacity:1;background-color:#1e40af;background-color:rgba(30,64,175,var(--tw-bg-opacity,1))}.bg-gray-100{--tw-bg-opacity:1;background-color:#f3f4f6;background-color:rgba(243,244,246,var(--tw-bg-opacity,1))}.bg-gray-200{--tw-bg-opacity:1;background-color:#e5e7eb;background-color:rgba(229,231,235,var(--tw-bg-opacity,1))}.bg-gray-900{--tw-bg-opacity:1;background-color:#111827;background-color:rgba(17,24,39,var(--tw-bg-opacity,1))}.bg-green-100{--tw-bg-opacity:1;background-color:#dcfce7;background-color:rgba(220,252,231,var(--tw-bg-opacity,1))}.bg-green-200{--tw-bg-opacity:1;background-color:#bbf7d0;background-color:rgba(187,247,208,var(--tw-bg-opacity,1))}.bg-green-400{--tw-bg-opacity:1;background-color:#4ade80;background-color:rgba(74,222,128,var(--tw-bg-opacity,1))}.bg-green-500{--tw-bg-opacity:1;background-color:#22c55e;background-color:rgba(34,197,94,var(--tw-bg-opacity,1))}.bg-inherit{background-color:inherit}.bg-orange-500{--tw-bg-opacity:1;background-color:#f97316;background-color:rgba(249,115,22,var(--tw-bg-opacity,1))}.bg-red-200{--tw-bg-opacity:1;background-color:#fecaca;background-color:rgba(254,202,202,var(--tw-bg-opacity,1))}.bg-red-400{--tw-bg-opacity:1;background-color:#f87171;background-color:rgba(248,113,113,var(--tw-bg-opacity,1))}.bg-red-500{--tw-bg-opacity:1;background-color:#ef4444;background-color:rgba(239,68,68,var(--tw-bg-opacity,1))}.bg-transparent{background-color:transparent}.bg-white{--tw-bg-opacity:1;background-color:#fff;background-color:rgba(255,255,255,var(--tw-bg-opacity,1))}.bg-gradient-to-r{background-image:linear-gradient(to right,var(--tw-gradient-stops))}.from-\\[\\#468ef9\\]{--tw-gradient-from:#468ef9 var(--tw-gradient-from-position);--tw-gradient-to:rgba(70,142,249,0) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to)}.to-\\[\\#030a3c\\]{--tw-gradient-to:#030a3c var(--tw-gradient-to-position)}.object-contain{-o-object-fit:contain;object-fit:contain}.object-cover{-o-object-fit:cover;object-fit:cover}.p-1{padding:.25rem}.p-2{padding:.5rem}.p-3{padding:.75rem}.p-4{padding:1rem}.p-6{padding:1.5rem}.px-10{padding-left:2.5rem;padding-right:2.5rem}.px-2{padding-left:.5rem;padding-right:.5rem}.px-3{padding-left:.75rem;padding-right:.75rem}.px-4{padding-left:1rem;padding-right:1rem}.px-5{padding-left:1.25rem;padding-right:1.25rem}.px-6{padding-left:1.5rem;padding-right:1.5rem}.px-8{padding-left:2rem;padding-right:2rem}.py-0{padding-bottom:0;padding-top:0}.py-1{padding-bottom:.25rem;padding-top:.25rem}.py-16{padding-bottom:4rem;padding-top:4rem}.py-2{padding-bottom:.5rem;padding-top:.5rem}.py-3{padding-bottom:.75rem;padding-top:.75rem}.py-4{padding-bottom:1rem;padding-top:1rem}.py-6{padding-bottom:1.5rem;padding-top:1.5rem}.py-8{padding-bottom:2rem;padding-top:2rem}.py-\\[1\\.35rem\\]{padding-bottom:1.35rem;padding-top:1.35rem}.pb-24{padding-bottom:6rem}.pl-3{padding-left:.75rem}.pr-10{padding-right:2.5rem}.pr-5{padding-right:1.25rem}.text-left{text-align:left}.text-center{text-align:center}.text-right{text-align:right}.font-sans{font-family:Poppins,sans-serif}.text-2xl{font-size:1.5rem;line-height:2rem}.text-3xl{font-size:1.875rem;line-height:2.25rem}.text-4xl{font-size:2.25rem;line-height:2.5rem}.text-\\[0\\.9rem\\]{font-size:.9rem}.text-\\[2\\.5rem\\]{font-size:2.5rem}.text-base{font-size:1rem;line-height:1.5rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-xs{font-size:.75rem;line-height:1rem}.font-bold{font-weight:700}.font-medium{font-weight:500}.font-normal{font-weight:400}.font-semibold{font-weight:600}.lowercase{text-transform:lowercase}.italic{font-style:italic}.leading-relaxed{line-height:1.625}.leading-tight{line-height:1.25}.tracking-wide{letter-spacing:.025em}.text-\\[\\#0c66ee\\]{--tw-text-opacity:1;color:#0c66ee;color:rgba(12,102,238,var(--tw-text-opacity,1))}.text-\\[\\#4A8FF6\\]{--tw-text-opacity:1;color:#4a8ff6;color:rgba(74,143,246,var(--tw-text-opacity,1))}.text-\\[\\#666666\\]{--tw-text-opacity:1;color:#666;color:rgba(102,102,102,var(--tw-text-opacity,1))}.text-blue-600{--tw-text-opacity:1;color:#2563eb;color:rgba(37,99,235,var(--tw-text-opacity,1))}.text-blue-700{--tw-text-opacity:1;color:#1d4ed8;color:rgba(29,78,216,var(--tw-text-opacity,1))}.text-blue-900{--tw-text-opacity:1;color:#1e3a8a;color:rgba(30,58,138,var(--tw-text-opacity,1))}.text-gray-500{--tw-text-opacity:1;color:#6b7280;color:rgba(107,114,128,var(--tw-text-opacity,1))}.text-gray-600{--tw-text-opacity:1;color:#4b5563;color:rgba(75,85,99,var(--tw-text-opacity,1))}.text-gray-700{--tw-text-opacity:1;color:#374151;color:rgba(55,65,81,var(--tw-text-opacity,1))}.text-gray-800{--tw-text-opacity:1;color:#1f2937;color:rgba(31,41,55,var(--tw-text-opacity,1))}.text-gray-900{--tw-text-opacity:1;color:#111827;color:rgba(17,24,39,var(--tw-text-opacity,1))}.text-green-700{--tw-text-opacity:1;color:#15803d;color:rgba(21,128,61,var(--tw-text-opacity,1))}.text-green-800{--tw-text-opacity:1;color:#166534;color:rgba(22,101,52,var(--tw-text-opacity,1))}.text-neutral-500{--tw-text-opacity:1;color:#737373;color:rgba(115,115,115,var(--tw-text-opacity,1))}.text-neutral-700{--tw-text-opacity:1;color:#404040;color:rgba(64,64,64,var(--tw-text-opacity,1))}.text-neutral-800{--tw-text-opacity:1;color:#262626;color:rgba(38,38,38,var(--tw-text-opacity,1))}.text-red-500{--tw-text-opacity:1;color:#ef4444;color:rgba(239,68,68,var(--tw-text-opacity,1))}.text-white{--tw-text-opacity:1;color:#fff;color:rgba(255,255,255,var(--tw-text-opacity,1))}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.placeholder-\\[\\#888\\]::-moz-placeholder{--tw-placeholder-opacity:1;color:#888;color:rgba(136,136,136,var(--tw-placeholder-opacity,1))}.placeholder-\\[\\#888\\]::placeholder{--tw-placeholder-opacity:1;color:#888;color:rgba(136,136,136,var(--tw-placeholder-opacity,1))}.opacity-0{opacity:0}.opacity-25{opacity:.25}.opacity-30{opacity:.3}.opacity-75{opacity:.75}.shadow{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color);box-shadow:0 0 transparent,0 0 transparent,0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color),0 4px 6px -4px var(--tw-shadow-color);box-shadow:0 0 transparent,0 0 transparent,0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1);box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow)}.shadow-md{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color);box-shadow:0 0 transparent,0 0 transparent,0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow)}.shadow-sm{--tw-shadow:0 1px 2px 0 rgba(0,0,0,.05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color);box-shadow:0 0 transparent,0 0 transparent,0 1px 2px 0 rgba(0,0,0,.05);box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow)}.ring-0{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:/*!*/ /*!*/ 0 0 0 0 #fff,var(--tw-ring-shadow),0 0 transparent;box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 transparent)}.ring-1{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:/*!*/ /*!*/ 0 0 0 0 #fff,/*!*/ /*!*/ 0 0 0 1px #2563eb,0 0 transparent;box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 transparent)}.ring-black{--tw-ring-opacity:1;--tw-ring-color:rgba(0,0,0,var(--tw-ring-opacity,1))}.ring-opacity-5{--tw-ring-opacity:0.05}.blur{--tw-blur:blur(8px);filter:blur(8px) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.blur,.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition{transition-duration:.15s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1)}.transition-all{transition-duration:.15s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1)}.transition-opacity{transition-duration:.15s;transition-property:opacity;transition-timing-function:cubic-bezier(.4,0,.2,1)}.transition-transform{transition-duration:.15s;transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-200{transition-duration:.2s}.duration-300{transition-duration:.3s}.duration-500{transition-duration:.5s}.duration-700{transition-duration:.7s}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.ease-linear{transition-timing-function:linear}.transform-fade-down-enter-active,.transform-fade-down-leave-active{--tw-translate-y:0px;transform:translate(var(--tw-translate-x)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));transition-duration:.3s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1)}.transform-fade-down-enter,.transform-fade-down-leave-to{--tw-translate-y:-0.5rem;opacity:0;transform:translate(var(--tw-translate-x),-.5rem) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.paragraph{letter-spacing:.025em;line-height:1.625;--tw-text-opacity:1;color:#374151;color:rgba(55,65,81,var(--tw-text-opacity,1))}input::-webkit-inner-spin-button,input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}input[type=number]{-moz-appearance:textfield}.hover\\:scale-105:hover{--tw-scale-x:1.05;--tw-scale-y:1.05;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(1.05) scaleY(1.05);transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.hover\\:bg-gray-100:hover{--tw-bg-opacity:1;background-color:#f3f4f6;background-color:rgba(243,244,246,var(--tw-bg-opacity,1))}.hover\\:text-blue-500:hover{--tw-text-opacity:1;color:#3b82f6;color:rgba(59,130,246,var(--tw-text-opacity,1))}.hover\\:text-blue-600:hover{--tw-text-opacity:1;color:#2563eb;color:rgba(37,99,235,var(--tw-text-opacity,1))}.hover\\:text-blue-900:hover{--tw-text-opacity:1;color:#1e3a8a;color:rgba(30,58,138,var(--tw-text-opacity,1))}.hover\\:text-gray-900:hover{--tw-text-opacity:1;color:#111827;color:rgba(17,24,39,var(--tw-text-opacity,1))}.hover\\:underline:hover{text-decoration-line:underline}.hover\\:opacity-10:hover{opacity:.1}.hover\\:opacity-80:hover{opacity:.8}.hover\\:shadow-2xl:hover{--tw-shadow:0 25px 50px -12px rgba(0,0,0,.25);--tw-shadow-colored:0 25px 50px -12px var(--tw-shadow-color);box-shadow:0 0 transparent,0 0 transparent,0 25px 50px -12px rgba(0,0,0,.25);box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow)}.hover\\:shadow-lg:hover{--tw-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color),0 4px 6px -4px var(--tw-shadow-color);box-shadow:0 0 transparent,0 0 transparent,0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1);box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow)}.hover\\:shadow-md:hover{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color);box-shadow:0 0 transparent,0 0 transparent,0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow)}.hover\\:shadow-xl:hover{--tw-shadow:0 20px 25px -5px rgba(0,0,0,.1),0 8px 10px -6px rgba(0,0,0,.1);--tw-shadow-colored:0 20px 25px -5px var(--tw-shadow-color),0 8px 10px -6px var(--tw-shadow-color);box-shadow:0 0 transparent,0 0 transparent,0 20px 25px -5px rgba(0,0,0,.1),0 8px 10px -6px rgba(0,0,0,.1);box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow)}.hover\\:shadow-\\[\\#0c66ee\\]\\/50:hover{--tw-shadow-color:rgba(12,102,238,.5);--tw-shadow:var(--tw-shadow-colored)}.focus\\:border-blue-300:focus{--tw-border-opacity:1;border-color:#93c5fd;border-color:rgba(147,197,253,var(--tw-border-opacity,1))}.focus\\:border-indigo-500:focus{--tw-border-opacity:1;border-color:#6366f1;border-color:rgba(99,102,241,var(--tw-border-opacity,1))}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.focus\\:ring:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color)}.focus\\:ring-0:focus,.focus\\:ring:focus{box-shadow:/*!*/ /*!*/ 0 0 0 0 #fff,var(--tw-ring-shadow),0 0 transparent;box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 transparent)}.focus\\:ring-0:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(var(--tw-ring-offset-width)) var(--tw-ring-color)}.focus\\:ring-indigo-500:focus{--tw-ring-opacity:1;--tw-ring-color:rgba(99,102,241,var(--tw-ring-opacity,1))}.group:hover .group-hover\\:opacity-100{opacity:1}@media (min-width:640px){.sm\\:mx-2{margin-left:.5rem;margin-right:.5rem}.sm\\:mx-4{margin-left:1rem;margin-right:1rem}.sm\\:mx-6{margin-left:1.5rem;margin-right:1.5rem}.sm\\:mb-0{margin-bottom:0}.sm\\:mt-20{margin-top:5rem}.sm\\:mt-8{margin-top:2rem}.sm\\:block{display:block}.sm\\:inline{display:inline}.sm\\:hidden{display:none}.sm\\:h-24{height:6rem}.sm\\:h-28{height:7rem}.sm\\:h-96{height:24rem}.sm\\:h-\\[225vh\\]{height:225vh}.sm\\:w-1\\/3{width:33.333333%}.sm\\:w-1\\/4{width:25%}.sm\\:w-2\\/4{width:50%}.sm\\:w-auto{width:auto}.sm\\:max-w-\\[159px\\]{max-width:159px}.sm\\:grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.sm\\:grid-cols-9{grid-template-columns:repeat(9,minmax(0,1fr))}.sm\\:flex-row{flex-direction:row}.sm\\:items-start{align-items:flex-start}.sm\\:items-center{align-items:center}.sm\\:justify-start{justify-content:flex-start}.sm\\:space-x-4>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:1rem;margin-left:calc(1rem*(1 - var(--tw-space-x-reverse)));margin-right:0;margin-right:calc(1rem*var(--tw-space-x-reverse))}.sm\\:space-x-6>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:1.5rem;margin-left:calc(1.5rem*(1 - var(--tw-space-x-reverse)));margin-right:0;margin-right:calc(1.5rem*var(--tw-space-x-reverse))}.sm\\:space-y-0>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:0;margin-bottom:calc(0px*var(--tw-space-y-reverse));margin-top:0;margin-top:calc(0px*(1 - var(--tw-space-y-reverse)))}.sm\\:space-y-3>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:0;margin-bottom:calc(.75rem*var(--tw-space-y-reverse));margin-top:.75rem;margin-top:calc(.75rem*(1 - var(--tw-space-y-reverse)))}.sm\\:space-y-6>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:0;margin-bottom:calc(1.5rem*var(--tw-space-y-reverse));margin-top:1.5rem;margin-top:calc(1.5rem*(1 - var(--tw-space-y-reverse)))}.sm\\:rounded-2xl{border-radius:1rem}.sm\\:rounded-md{border-radius:.375rem}.sm\\:px-0{padding-left:0;padding-right:0}.sm\\:px-2{padding-left:.5rem;padding-right:.5rem}.sm\\:px-4{padding-left:1rem;padding-right:1rem}.sm\\:px-5{padding-left:1.25rem;padding-right:1.25rem}.sm\\:px-6{padding-left:1.5rem;padding-right:1.5rem}.sm\\:px-8{padding-left:2rem;padding-right:2rem}.sm\\:py-3{padding-bottom:.75rem;padding-top:.75rem}.sm\\:py-4{padding-bottom:1rem;padding-top:1rem}.sm\\:pr-8{padding-right:2rem}.sm\\:text-left{text-align:left}.sm\\:text-2xl{font-size:1.5rem;line-height:2rem}.sm\\:text-4xl{font-size:2.25rem;line-height:2.5rem}.sm\\:text-5xl{font-size:3rem;line-height:1}.sm\\:text-base{font-size:1rem;line-height:1.5rem}.sm\\:text-lg{font-size:1.125rem;line-height:1.75rem}.sm\\:text-sm{font-size:.875rem;line-height:1.25rem}.sm\\:text-xl{font-size:1.25rem;line-height:1.75rem}}@media (min-width:768px){.md\\:px-4{padding-left:1rem;padding-right:1rem}.md\\:text-2xl{font-size:1.5rem;line-height:2rem}.md\\:text-4xl{font-size:2.25rem;line-height:2.5rem}}@media (min-width:1024px){.lg\\:col-span-6{grid-column:span 6/span 6}.lg\\:col-span-8{grid-column:span 8/span 8}.lg\\:flex{display:flex}.lg\\:h-\\[125vh\\]{height:125vh}.lg\\:max-w-\\[336px\\]{max-width:336px}.lg\\:grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.lg\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.lg\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.lg\\:flex-row{flex-direction:row}.lg\\:items-center{align-items:center}.lg\\:justify-between{justify-content:space-between}.lg\\:space-x-3>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:.75rem;margin-left:calc(.75rem*(1 - var(--tw-space-x-reverse)));margin-right:0;margin-right:calc(.75rem*var(--tw-space-x-reverse))}.lg\\:space-y-0>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:0;margin-bottom:calc(0px*var(--tw-space-y-reverse));margin-top:0;margin-top:calc(0px*(1 - var(--tw-space-y-reverse)))}}@media (min-width:1280px){.xl\\:mx-10{margin-left:2.5rem;margin-right:2.5rem}.xl\\:mt-0{margin-top:0}.xl\\:mt-10{margin-top:2.5rem}.xl\\:w-24{width:6rem}.xl\\:max-w-\\[380px\\]{max-width:380px}.xl\\:max-w-\\[580px\\]{max-width:580px}.xl\\:space-x-8>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:2rem;margin-left:calc(2rem*(1 - var(--tw-space-x-reverse)));margin-right:0;margin-right:calc(2rem*var(--tw-space-x-reverse))}.xl\\:px-10{padding-left:2.5rem;padding-right:2.5rem}.xl\\:px-4{padding-left:1rem;padding-right:1rem}.xl\\:pr-10{padding-right:2.5rem}.xl\\:text-2xl{font-size:1.5rem;line-height:2rem}.xl\\:text-6xl{font-size:3.75rem;line-height:1}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "[data-aos][data-aos][data-aos-duration=\"50\"],body[data-aos-duration=\"50\"] [data-aos]{transition-duration:50ms}[data-aos][data-aos][data-aos-delay=\"50\"],body[data-aos-delay=\"50\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"50\"].aos-animate,body[data-aos-delay=\"50\"] [data-aos].aos-animate{transition-delay:50ms}[data-aos][data-aos][data-aos-duration=\"100\"],body[data-aos-duration=\"100\"] [data-aos]{transition-duration:.1s}[data-aos][data-aos][data-aos-delay=\"100\"],body[data-aos-delay=\"100\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"100\"].aos-animate,body[data-aos-delay=\"100\"] [data-aos].aos-animate{transition-delay:.1s}[data-aos][data-aos][data-aos-duration=\"150\"],body[data-aos-duration=\"150\"] [data-aos]{transition-duration:.15s}[data-aos][data-aos][data-aos-delay=\"150\"],body[data-aos-delay=\"150\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"150\"].aos-animate,body[data-aos-delay=\"150\"] [data-aos].aos-animate{transition-delay:.15s}[data-aos][data-aos][data-aos-duration=\"200\"],body[data-aos-duration=\"200\"] [data-aos]{transition-duration:.2s}[data-aos][data-aos][data-aos-delay=\"200\"],body[data-aos-delay=\"200\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"200\"].aos-animate,body[data-aos-delay=\"200\"] [data-aos].aos-animate{transition-delay:.2s}[data-aos][data-aos][data-aos-duration=\"250\"],body[data-aos-duration=\"250\"] [data-aos]{transition-duration:.25s}[data-aos][data-aos][data-aos-delay=\"250\"],body[data-aos-delay=\"250\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"250\"].aos-animate,body[data-aos-delay=\"250\"] [data-aos].aos-animate{transition-delay:.25s}[data-aos][data-aos][data-aos-duration=\"300\"],body[data-aos-duration=\"300\"] [data-aos]{transition-duration:.3s}[data-aos][data-aos][data-aos-delay=\"300\"],body[data-aos-delay=\"300\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"300\"].aos-animate,body[data-aos-delay=\"300\"] [data-aos].aos-animate{transition-delay:.3s}[data-aos][data-aos][data-aos-duration=\"350\"],body[data-aos-duration=\"350\"] [data-aos]{transition-duration:.35s}[data-aos][data-aos][data-aos-delay=\"350\"],body[data-aos-delay=\"350\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"350\"].aos-animate,body[data-aos-delay=\"350\"] [data-aos].aos-animate{transition-delay:.35s}[data-aos][data-aos][data-aos-duration=\"400\"],body[data-aos-duration=\"400\"] [data-aos]{transition-duration:.4s}[data-aos][data-aos][data-aos-delay=\"400\"],body[data-aos-delay=\"400\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"400\"].aos-animate,body[data-aos-delay=\"400\"] [data-aos].aos-animate{transition-delay:.4s}[data-aos][data-aos][data-aos-duration=\"450\"],body[data-aos-duration=\"450\"] [data-aos]{transition-duration:.45s}[data-aos][data-aos][data-aos-delay=\"450\"],body[data-aos-delay=\"450\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"450\"].aos-animate,body[data-aos-delay=\"450\"] [data-aos].aos-animate{transition-delay:.45s}[data-aos][data-aos][data-aos-duration=\"500\"],body[data-aos-duration=\"500\"] [data-aos]{transition-duration:.5s}[data-aos][data-aos][data-aos-delay=\"500\"],body[data-aos-delay=\"500\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"500\"].aos-animate,body[data-aos-delay=\"500\"] [data-aos].aos-animate{transition-delay:.5s}[data-aos][data-aos][data-aos-duration=\"550\"],body[data-aos-duration=\"550\"] [data-aos]{transition-duration:.55s}[data-aos][data-aos][data-aos-delay=\"550\"],body[data-aos-delay=\"550\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"550\"].aos-animate,body[data-aos-delay=\"550\"] [data-aos].aos-animate{transition-delay:.55s}[data-aos][data-aos][data-aos-duration=\"600\"],body[data-aos-duration=\"600\"] [data-aos]{transition-duration:.6s}[data-aos][data-aos][data-aos-delay=\"600\"],body[data-aos-delay=\"600\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"600\"].aos-animate,body[data-aos-delay=\"600\"] [data-aos].aos-animate{transition-delay:.6s}[data-aos][data-aos][data-aos-duration=\"650\"],body[data-aos-duration=\"650\"] [data-aos]{transition-duration:.65s}[data-aos][data-aos][data-aos-delay=\"650\"],body[data-aos-delay=\"650\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"650\"].aos-animate,body[data-aos-delay=\"650\"] [data-aos].aos-animate{transition-delay:.65s}[data-aos][data-aos][data-aos-duration=\"700\"],body[data-aos-duration=\"700\"] [data-aos]{transition-duration:.7s}[data-aos][data-aos][data-aos-delay=\"700\"],body[data-aos-delay=\"700\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"700\"].aos-animate,body[data-aos-delay=\"700\"] [data-aos].aos-animate{transition-delay:.7s}[data-aos][data-aos][data-aos-duration=\"750\"],body[data-aos-duration=\"750\"] [data-aos]{transition-duration:.75s}[data-aos][data-aos][data-aos-delay=\"750\"],body[data-aos-delay=\"750\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"750\"].aos-animate,body[data-aos-delay=\"750\"] [data-aos].aos-animate{transition-delay:.75s}[data-aos][data-aos][data-aos-duration=\"800\"],body[data-aos-duration=\"800\"] [data-aos]{transition-duration:.8s}[data-aos][data-aos][data-aos-delay=\"800\"],body[data-aos-delay=\"800\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"800\"].aos-animate,body[data-aos-delay=\"800\"] [data-aos].aos-animate{transition-delay:.8s}[data-aos][data-aos][data-aos-duration=\"850\"],body[data-aos-duration=\"850\"] [data-aos]{transition-duration:.85s}[data-aos][data-aos][data-aos-delay=\"850\"],body[data-aos-delay=\"850\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"850\"].aos-animate,body[data-aos-delay=\"850\"] [data-aos].aos-animate{transition-delay:.85s}[data-aos][data-aos][data-aos-duration=\"900\"],body[data-aos-duration=\"900\"] [data-aos]{transition-duration:.9s}[data-aos][data-aos][data-aos-delay=\"900\"],body[data-aos-delay=\"900\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"900\"].aos-animate,body[data-aos-delay=\"900\"] [data-aos].aos-animate{transition-delay:.9s}[data-aos][data-aos][data-aos-duration=\"950\"],body[data-aos-duration=\"950\"] [data-aos]{transition-duration:.95s}[data-aos][data-aos][data-aos-delay=\"950\"],body[data-aos-delay=\"950\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"950\"].aos-animate,body[data-aos-delay=\"950\"] [data-aos].aos-animate{transition-delay:.95s}[data-aos][data-aos][data-aos-duration=\"1000\"],body[data-aos-duration=\"1000\"] [data-aos]{transition-duration:1s}[data-aos][data-aos][data-aos-delay=\"1000\"],body[data-aos-delay=\"1000\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"1000\"].aos-animate,body[data-aos-delay=\"1000\"] [data-aos].aos-animate{transition-delay:1s}[data-aos][data-aos][data-aos-duration=\"1050\"],body[data-aos-duration=\"1050\"] [data-aos]{transition-duration:1.05s}[data-aos][data-aos][data-aos-delay=\"1050\"],body[data-aos-delay=\"1050\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"1050\"].aos-animate,body[data-aos-delay=\"1050\"] [data-aos].aos-animate{transition-delay:1.05s}[data-aos][data-aos][data-aos-duration=\"1100\"],body[data-aos-duration=\"1100\"] [data-aos]{transition-duration:1.1s}[data-aos][data-aos][data-aos-delay=\"1100\"],body[data-aos-delay=\"1100\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"1100\"].aos-animate,body[data-aos-delay=\"1100\"] [data-aos].aos-animate{transition-delay:1.1s}[data-aos][data-aos][data-aos-duration=\"1150\"],body[data-aos-duration=\"1150\"] [data-aos]{transition-duration:1.15s}[data-aos][data-aos][data-aos-delay=\"1150\"],body[data-aos-delay=\"1150\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"1150\"].aos-animate,body[data-aos-delay=\"1150\"] [data-aos].aos-animate{transition-delay:1.15s}[data-aos][data-aos][data-aos-duration=\"1200\"],body[data-aos-duration=\"1200\"] [data-aos]{transition-duration:1.2s}[data-aos][data-aos][data-aos-delay=\"1200\"],body[data-aos-delay=\"1200\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"1200\"].aos-animate,body[data-aos-delay=\"1200\"] [data-aos].aos-animate{transition-delay:1.2s}[data-aos][data-aos][data-aos-duration=\"1250\"],body[data-aos-duration=\"1250\"] [data-aos]{transition-duration:1.25s}[data-aos][data-aos][data-aos-delay=\"1250\"],body[data-aos-delay=\"1250\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"1250\"].aos-animate,body[data-aos-delay=\"1250\"] [data-aos].aos-animate{transition-delay:1.25s}[data-aos][data-aos][data-aos-duration=\"1300\"],body[data-aos-duration=\"1300\"] [data-aos]{transition-duration:1.3s}[data-aos][data-aos][data-aos-delay=\"1300\"],body[data-aos-delay=\"1300\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"1300\"].aos-animate,body[data-aos-delay=\"1300\"] [data-aos].aos-animate{transition-delay:1.3s}[data-aos][data-aos][data-aos-duration=\"1350\"],body[data-aos-duration=\"1350\"] [data-aos]{transition-duration:1.35s}[data-aos][data-aos][data-aos-delay=\"1350\"],body[data-aos-delay=\"1350\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"1350\"].aos-animate,body[data-aos-delay=\"1350\"] [data-aos].aos-animate{transition-delay:1.35s}[data-aos][data-aos][data-aos-duration=\"1400\"],body[data-aos-duration=\"1400\"] [data-aos]{transition-duration:1.4s}[data-aos][data-aos][data-aos-delay=\"1400\"],body[data-aos-delay=\"1400\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"1400\"].aos-animate,body[data-aos-delay=\"1400\"] [data-aos].aos-animate{transition-delay:1.4s}[data-aos][data-aos][data-aos-duration=\"1450\"],body[data-aos-duration=\"1450\"] [data-aos]{transition-duration:1.45s}[data-aos][data-aos][data-aos-delay=\"1450\"],body[data-aos-delay=\"1450\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"1450\"].aos-animate,body[data-aos-delay=\"1450\"] [data-aos].aos-animate{transition-delay:1.45s}[data-aos][data-aos][data-aos-duration=\"1500\"],body[data-aos-duration=\"1500\"] [data-aos]{transition-duration:1.5s}[data-aos][data-aos][data-aos-delay=\"1500\"],body[data-aos-delay=\"1500\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"1500\"].aos-animate,body[data-aos-delay=\"1500\"] [data-aos].aos-animate{transition-delay:1.5s}[data-aos][data-aos][data-aos-duration=\"1550\"],body[data-aos-duration=\"1550\"] [data-aos]{transition-duration:1.55s}[data-aos][data-aos][data-aos-delay=\"1550\"],body[data-aos-delay=\"1550\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"1550\"].aos-animate,body[data-aos-delay=\"1550\"] [data-aos].aos-animate{transition-delay:1.55s}[data-aos][data-aos][data-aos-duration=\"1600\"],body[data-aos-duration=\"1600\"] [data-aos]{transition-duration:1.6s}[data-aos][data-aos][data-aos-delay=\"1600\"],body[data-aos-delay=\"1600\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"1600\"].aos-animate,body[data-aos-delay=\"1600\"] [data-aos].aos-animate{transition-delay:1.6s}[data-aos][data-aos][data-aos-duration=\"1650\"],body[data-aos-duration=\"1650\"] [data-aos]{transition-duration:1.65s}[data-aos][data-aos][data-aos-delay=\"1650\"],body[data-aos-delay=\"1650\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"1650\"].aos-animate,body[data-aos-delay=\"1650\"] [data-aos].aos-animate{transition-delay:1.65s}[data-aos][data-aos][data-aos-duration=\"1700\"],body[data-aos-duration=\"1700\"] [data-aos]{transition-duration:1.7s}[data-aos][data-aos][data-aos-delay=\"1700\"],body[data-aos-delay=\"1700\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"1700\"].aos-animate,body[data-aos-delay=\"1700\"] [data-aos].aos-animate{transition-delay:1.7s}[data-aos][data-aos][data-aos-duration=\"1750\"],body[data-aos-duration=\"1750\"] [data-aos]{transition-duration:1.75s}[data-aos][data-aos][data-aos-delay=\"1750\"],body[data-aos-delay=\"1750\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"1750\"].aos-animate,body[data-aos-delay=\"1750\"] [data-aos].aos-animate{transition-delay:1.75s}[data-aos][data-aos][data-aos-duration=\"1800\"],body[data-aos-duration=\"1800\"] [data-aos]{transition-duration:1.8s}[data-aos][data-aos][data-aos-delay=\"1800\"],body[data-aos-delay=\"1800\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"1800\"].aos-animate,body[data-aos-delay=\"1800\"] [data-aos].aos-animate{transition-delay:1.8s}[data-aos][data-aos][data-aos-duration=\"1850\"],body[data-aos-duration=\"1850\"] [data-aos]{transition-duration:1.85s}[data-aos][data-aos][data-aos-delay=\"1850\"],body[data-aos-delay=\"1850\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"1850\"].aos-animate,body[data-aos-delay=\"1850\"] [data-aos].aos-animate{transition-delay:1.85s}[data-aos][data-aos][data-aos-duration=\"1900\"],body[data-aos-duration=\"1900\"] [data-aos]{transition-duration:1.9s}[data-aos][data-aos][data-aos-delay=\"1900\"],body[data-aos-delay=\"1900\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"1900\"].aos-animate,body[data-aos-delay=\"1900\"] [data-aos].aos-animate{transition-delay:1.9s}[data-aos][data-aos][data-aos-duration=\"1950\"],body[data-aos-duration=\"1950\"] [data-aos]{transition-duration:1.95s}[data-aos][data-aos][data-aos-delay=\"1950\"],body[data-aos-delay=\"1950\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"1950\"].aos-animate,body[data-aos-delay=\"1950\"] [data-aos].aos-animate{transition-delay:1.95s}[data-aos][data-aos][data-aos-duration=\"2000\"],body[data-aos-duration=\"2000\"] [data-aos]{transition-duration:2s}[data-aos][data-aos][data-aos-delay=\"2000\"],body[data-aos-delay=\"2000\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"2000\"].aos-animate,body[data-aos-delay=\"2000\"] [data-aos].aos-animate{transition-delay:2s}[data-aos][data-aos][data-aos-duration=\"2050\"],body[data-aos-duration=\"2050\"] [data-aos]{transition-duration:2.05s}[data-aos][data-aos][data-aos-delay=\"2050\"],body[data-aos-delay=\"2050\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"2050\"].aos-animate,body[data-aos-delay=\"2050\"] [data-aos].aos-animate{transition-delay:2.05s}[data-aos][data-aos][data-aos-duration=\"2100\"],body[data-aos-duration=\"2100\"] [data-aos]{transition-duration:2.1s}[data-aos][data-aos][data-aos-delay=\"2100\"],body[data-aos-delay=\"2100\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"2100\"].aos-animate,body[data-aos-delay=\"2100\"] [data-aos].aos-animate{transition-delay:2.1s}[data-aos][data-aos][data-aos-duration=\"2150\"],body[data-aos-duration=\"2150\"] [data-aos]{transition-duration:2.15s}[data-aos][data-aos][data-aos-delay=\"2150\"],body[data-aos-delay=\"2150\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"2150\"].aos-animate,body[data-aos-delay=\"2150\"] [data-aos].aos-animate{transition-delay:2.15s}[data-aos][data-aos][data-aos-duration=\"2200\"],body[data-aos-duration=\"2200\"] [data-aos]{transition-duration:2.2s}[data-aos][data-aos][data-aos-delay=\"2200\"],body[data-aos-delay=\"2200\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"2200\"].aos-animate,body[data-aos-delay=\"2200\"] [data-aos].aos-animate{transition-delay:2.2s}[data-aos][data-aos][data-aos-duration=\"2250\"],body[data-aos-duration=\"2250\"] [data-aos]{transition-duration:2.25s}[data-aos][data-aos][data-aos-delay=\"2250\"],body[data-aos-delay=\"2250\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"2250\"].aos-animate,body[data-aos-delay=\"2250\"] [data-aos].aos-animate{transition-delay:2.25s}[data-aos][data-aos][data-aos-duration=\"2300\"],body[data-aos-duration=\"2300\"] [data-aos]{transition-duration:2.3s}[data-aos][data-aos][data-aos-delay=\"2300\"],body[data-aos-delay=\"2300\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"2300\"].aos-animate,body[data-aos-delay=\"2300\"] [data-aos].aos-animate{transition-delay:2.3s}[data-aos][data-aos][data-aos-duration=\"2350\"],body[data-aos-duration=\"2350\"] [data-aos]{transition-duration:2.35s}[data-aos][data-aos][data-aos-delay=\"2350\"],body[data-aos-delay=\"2350\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"2350\"].aos-animate,body[data-aos-delay=\"2350\"] [data-aos].aos-animate{transition-delay:2.35s}[data-aos][data-aos][data-aos-duration=\"2400\"],body[data-aos-duration=\"2400\"] [data-aos]{transition-duration:2.4s}[data-aos][data-aos][data-aos-delay=\"2400\"],body[data-aos-delay=\"2400\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"2400\"].aos-animate,body[data-aos-delay=\"2400\"] [data-aos].aos-animate{transition-delay:2.4s}[data-aos][data-aos][data-aos-duration=\"2450\"],body[data-aos-duration=\"2450\"] [data-aos]{transition-duration:2.45s}[data-aos][data-aos][data-aos-delay=\"2450\"],body[data-aos-delay=\"2450\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"2450\"].aos-animate,body[data-aos-delay=\"2450\"] [data-aos].aos-animate{transition-delay:2.45s}[data-aos][data-aos][data-aos-duration=\"2500\"],body[data-aos-duration=\"2500\"] [data-aos]{transition-duration:2.5s}[data-aos][data-aos][data-aos-delay=\"2500\"],body[data-aos-delay=\"2500\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"2500\"].aos-animate,body[data-aos-delay=\"2500\"] [data-aos].aos-animate{transition-delay:2.5s}[data-aos][data-aos][data-aos-duration=\"2550\"],body[data-aos-duration=\"2550\"] [data-aos]{transition-duration:2.55s}[data-aos][data-aos][data-aos-delay=\"2550\"],body[data-aos-delay=\"2550\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"2550\"].aos-animate,body[data-aos-delay=\"2550\"] [data-aos].aos-animate{transition-delay:2.55s}[data-aos][data-aos][data-aos-duration=\"2600\"],body[data-aos-duration=\"2600\"] [data-aos]{transition-duration:2.6s}[data-aos][data-aos][data-aos-delay=\"2600\"],body[data-aos-delay=\"2600\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"2600\"].aos-animate,body[data-aos-delay=\"2600\"] [data-aos].aos-animate{transition-delay:2.6s}[data-aos][data-aos][data-aos-duration=\"2650\"],body[data-aos-duration=\"2650\"] [data-aos]{transition-duration:2.65s}[data-aos][data-aos][data-aos-delay=\"2650\"],body[data-aos-delay=\"2650\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"2650\"].aos-animate,body[data-aos-delay=\"2650\"] [data-aos].aos-animate{transition-delay:2.65s}[data-aos][data-aos][data-aos-duration=\"2700\"],body[data-aos-duration=\"2700\"] [data-aos]{transition-duration:2.7s}[data-aos][data-aos][data-aos-delay=\"2700\"],body[data-aos-delay=\"2700\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"2700\"].aos-animate,body[data-aos-delay=\"2700\"] [data-aos].aos-animate{transition-delay:2.7s}[data-aos][data-aos][data-aos-duration=\"2750\"],body[data-aos-duration=\"2750\"] [data-aos]{transition-duration:2.75s}[data-aos][data-aos][data-aos-delay=\"2750\"],body[data-aos-delay=\"2750\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"2750\"].aos-animate,body[data-aos-delay=\"2750\"] [data-aos].aos-animate{transition-delay:2.75s}[data-aos][data-aos][data-aos-duration=\"2800\"],body[data-aos-duration=\"2800\"] [data-aos]{transition-duration:2.8s}[data-aos][data-aos][data-aos-delay=\"2800\"],body[data-aos-delay=\"2800\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"2800\"].aos-animate,body[data-aos-delay=\"2800\"] [data-aos].aos-animate{transition-delay:2.8s}[data-aos][data-aos][data-aos-duration=\"2850\"],body[data-aos-duration=\"2850\"] [data-aos]{transition-duration:2.85s}[data-aos][data-aos][data-aos-delay=\"2850\"],body[data-aos-delay=\"2850\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"2850\"].aos-animate,body[data-aos-delay=\"2850\"] [data-aos].aos-animate{transition-delay:2.85s}[data-aos][data-aos][data-aos-duration=\"2900\"],body[data-aos-duration=\"2900\"] [data-aos]{transition-duration:2.9s}[data-aos][data-aos][data-aos-delay=\"2900\"],body[data-aos-delay=\"2900\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"2900\"].aos-animate,body[data-aos-delay=\"2900\"] [data-aos].aos-animate{transition-delay:2.9s}[data-aos][data-aos][data-aos-duration=\"2950\"],body[data-aos-duration=\"2950\"] [data-aos]{transition-duration:2.95s}[data-aos][data-aos][data-aos-delay=\"2950\"],body[data-aos-delay=\"2950\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"2950\"].aos-animate,body[data-aos-delay=\"2950\"] [data-aos].aos-animate{transition-delay:2.95s}[data-aos][data-aos][data-aos-duration=\"3000\"],body[data-aos-duration=\"3000\"] [data-aos]{transition-duration:3s}[data-aos][data-aos][data-aos-delay=\"3000\"],body[data-aos-delay=\"3000\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"3000\"].aos-animate,body[data-aos-delay=\"3000\"] [data-aos].aos-animate{transition-delay:3s}[data-aos][data-aos][data-aos-easing=linear],body[data-aos-easing=linear] [data-aos]{transition-timing-function:cubic-bezier(.25,.25,.75,.75)}[data-aos][data-aos][data-aos-easing=ease],body[data-aos-easing=ease] [data-aos]{transition-timing-function:ease}[data-aos][data-aos][data-aos-easing=ease-in],body[data-aos-easing=ease-in] [data-aos]{transition-timing-function:ease-in}[data-aos][data-aos][data-aos-easing=ease-out],body[data-aos-easing=ease-out] [data-aos]{transition-timing-function:ease-out}[data-aos][data-aos][data-aos-easing=ease-in-out],body[data-aos-easing=ease-in-out] [data-aos]{transition-timing-function:ease-in-out}[data-aos][data-aos][data-aos-easing=ease-in-back],body[data-aos-easing=ease-in-back] [data-aos]{transition-timing-function:cubic-bezier(.6,-.28,.735,.045)}[data-aos][data-aos][data-aos-easing=ease-out-back],body[data-aos-easing=ease-out-back] [data-aos]{transition-timing-function:cubic-bezier(.175,.885,.32,1.275)}[data-aos][data-aos][data-aos-easing=ease-in-out-back],body[data-aos-easing=ease-in-out-back] [data-aos]{transition-timing-function:cubic-bezier(.68,-.55,.265,1.55)}[data-aos][data-aos][data-aos-easing=ease-in-sine],body[data-aos-easing=ease-in-sine] [data-aos]{transition-timing-function:cubic-bezier(.47,0,.745,.715)}[data-aos][data-aos][data-aos-easing=ease-out-sine],body[data-aos-easing=ease-out-sine] [data-aos]{transition-timing-function:cubic-bezier(.39,.575,.565,1)}[data-aos][data-aos][data-aos-easing=ease-in-out-sine],body[data-aos-easing=ease-in-out-sine] [data-aos]{transition-timing-function:cubic-bezier(.445,.05,.55,.95)}[data-aos][data-aos][data-aos-easing=ease-in-quad],body[data-aos-easing=ease-in-quad] [data-aos]{transition-timing-function:cubic-bezier(.55,.085,.68,.53)}[data-aos][data-aos][data-aos-easing=ease-out-quad],body[data-aos-easing=ease-out-quad] [data-aos]{transition-timing-function:cubic-bezier(.25,.46,.45,.94)}[data-aos][data-aos][data-aos-easing=ease-in-out-quad],body[data-aos-easing=ease-in-out-quad] [data-aos]{transition-timing-function:cubic-bezier(.455,.03,.515,.955)}[data-aos][data-aos][data-aos-easing=ease-in-cubic],body[data-aos-easing=ease-in-cubic] [data-aos]{transition-timing-function:cubic-bezier(.55,.085,.68,.53)}[data-aos][data-aos][data-aos-easing=ease-out-cubic],body[data-aos-easing=ease-out-cubic] [data-aos]{transition-timing-function:cubic-bezier(.25,.46,.45,.94)}[data-aos][data-aos][data-aos-easing=ease-in-out-cubic],body[data-aos-easing=ease-in-out-cubic] [data-aos]{transition-timing-function:cubic-bezier(.455,.03,.515,.955)}[data-aos][data-aos][data-aos-easing=ease-in-quart],body[data-aos-easing=ease-in-quart] [data-aos]{transition-timing-function:cubic-bezier(.55,.085,.68,.53)}[data-aos][data-aos][data-aos-easing=ease-out-quart],body[data-aos-easing=ease-out-quart] [data-aos]{transition-timing-function:cubic-bezier(.25,.46,.45,.94)}[data-aos][data-aos][data-aos-easing=ease-in-out-quart],body[data-aos-easing=ease-in-out-quart] [data-aos]{transition-timing-function:cubic-bezier(.455,.03,.515,.955)}[data-aos^=fade][data-aos^=fade]{opacity:0;transition-property:opacity,transform}[data-aos^=fade][data-aos^=fade].aos-animate{opacity:1;transform:translateZ(0)}[data-aos=fade-up]{transform:translate3d(0,100px,0)}[data-aos=fade-down]{transform:translate3d(0,-100px,0)}[data-aos=fade-right]{transform:translate3d(-100px,0,0)}[data-aos=fade-left]{transform:translate3d(100px,0,0)}[data-aos=fade-up-right]{transform:translate3d(-100px,100px,0)}[data-aos=fade-up-left]{transform:translate3d(100px,100px,0)}[data-aos=fade-down-right]{transform:translate3d(-100px,-100px,0)}[data-aos=fade-down-left]{transform:translate3d(100px,-100px,0)}[data-aos^=zoom][data-aos^=zoom]{opacity:0;transition-property:opacity,transform}[data-aos^=zoom][data-aos^=zoom].aos-animate{opacity:1;transform:translateZ(0) scale(1)}[data-aos=zoom-in]{transform:scale(.6)}[data-aos=zoom-in-up]{transform:translate3d(0,100px,0) scale(.6)}[data-aos=zoom-in-down]{transform:translate3d(0,-100px,0) scale(.6)}[data-aos=zoom-in-right]{transform:translate3d(-100px,0,0) scale(.6)}[data-aos=zoom-in-left]{transform:translate3d(100px,0,0) scale(.6)}[data-aos=zoom-out]{transform:scale(1.2)}[data-aos=zoom-out-up]{transform:translate3d(0,100px,0) scale(1.2)}[data-aos=zoom-out-down]{transform:translate3d(0,-100px,0) scale(1.2)}[data-aos=zoom-out-right]{transform:translate3d(-100px,0,0) scale(1.2)}[data-aos=zoom-out-left]{transform:translate3d(100px,0,0) scale(1.2)}[data-aos^=slide][data-aos^=slide]{transition-property:transform}[data-aos^=slide][data-aos^=slide].aos-animate{transform:translateZ(0)}[data-aos=slide-up]{transform:translate3d(0,100%,0)}[data-aos=slide-down]{transform:translate3d(0,-100%,0)}[data-aos=slide-right]{transform:translate3d(-100%,0,0)}[data-aos=slide-left]{transform:translate3d(100%,0,0)}[data-aos^=flip][data-aos^=flip]{backface-visibility:hidden;transition-property:transform}[data-aos=flip-left]{transform:perspective(2500px) rotateY(-100deg)}[data-aos=flip-left].aos-animate{transform:perspective(2500px) rotateY(0)}[data-aos=flip-right]{transform:perspective(2500px) rotateY(100deg)}[data-aos=flip-right].aos-animate{transform:perspective(2500px) rotateY(0)}[data-aos=flip-up]{transform:perspective(2500px) rotateX(-100deg)}[data-aos=flip-up].aos-animate{transform:perspective(2500px) rotateX(0)}[data-aos=flip-down]{transform:perspective(2500px) rotateX(100deg)}[data-aos=flip-down].aos-animate{transform:perspective(2500px) rotateX(0)}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingIndicator_vue_vue_type_style_index_0_id_756de9ef_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingIndicator_vue_vue_type_style_index_0_id_756de9ef_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingIndicator_vue_vue_type_style_index_0_id_756de9ef_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingIndicator_vue_vue_type_style_index_0_id_756de9ef_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingIndicator_vue_vue_type_style_index_0_id_756de9ef_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".loader[data-v-756de9ef]{border-left-color:#4a90e2;border-top-color:#4a90e2}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_style_index_0_id_1abd66ad_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_style_index_0_id_1abd66ad_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_style_index_0_id_1abd66ad_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_style_index_0_id_1abd66ad_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_style_index_0_id_1abd66ad_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".gtranslate_wrapper[data-v-1abd66ad]{font-family:inherit;font-size:12px!important}.space-x-3[data-v-1abd66ad]{display:flex;flex-wrap:wrap;justify-content:flex-start;margin-top:2px;padding-left:2px;padding-right:2px}.base-button[data-v-1abd66ad]{padding-left:5px;padding-right:5px}.modal[data-v-1abd66ad]{background-color:rgba(0,0,0,.7);height:100%;left:0;overflow:auto;position:fixed;top:0;width:100%;z-index:100000}.modal-content[data-v-1abd66ad]{background-color:#fefefe;border:1px solid #888;border-radius:12px;margin:10% auto;padding:20px;width:80%}.close[data-v-1abd66ad]{color:#030a3c;float:right;font-size:28px;font-weight:700;margin-top:-10px}.close[data-v-1abd66ad]:focus,.close[data-v-1abd66ad]:hover{color:red;cursor:pointer;-webkit-text-decoration:none;text-decoration:none}.navbar[data-v-1abd66ad]{margin-top:-25px}@media screen and (max-width:640px){.space-x-3 a base-button[data-v-1abd66ad]{font-size:8px;padding:2px 3px;text-align:center}.smallbtn[data-v-1abd66ad]{font-size:12px;padding:2px 4px}.modal-content[data-v-1abd66ad]{padding:10px}.base-button[data-v-1abd66ad]{font-size:6px!important;padding:2px 4px}@media screen and (min-width:640px){.logo[data-v-1abd66ad]{margin-top:-40px}}.last-buttons[data-v-1abd66ad]{display:flex;flex-wrap:wrap;font-size:8px;gap:4px;justify-content:left}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_7ba68644_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_7ba68644_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_7ba68644_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_7ba68644_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_7ba68644_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(26);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(47);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(48);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".text-header-gradient[data-v-7ba68644],.text-header-gradient-big[data-v-7ba68644]{background:#3984f4;background:linear-gradient(169.4deg,#3984f4 -6.01%,#0cd3ff 36.87%,#2f7cf0 78.04%,#0e65e8 103.77%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}.text-header-gradient-big[data-v-7ba68644]{color:#030a3c;font-size:1.5em}.bg-partner[data-v-7ba68644]{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");background-position:50%;background-size:cover}.bg-trading-tools[data-v-7ba68644]{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");background-position:50%;background-size:cover}.max-h-0[data-v-7ba68644]{max-height:0}@keyframes scroll-7ba68644{0%{transform:translateX(0)}to{transform:translateX(-100%)}}.animate-scroll[data-v-7ba68644]{animation:scroll-7ba68644 12s linear;display:flex}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_id_7c3fd51c_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_id_7c3fd51c_prod_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_id_7c3fd51c_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_id_7c3fd51c_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_id_7c3fd51c_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".cover-gradient{background:linear-gradient(169.4deg,rgba(57,132,244,.04) -6.01%,rgba(12,211,255,.04) 36.87%,rgba(47,124,240,.04) 78.04%,rgba(14,101,232,.04) 103.77%)}.cover-gradient-2{background:linear-gradient(169.4deg,rgba(57,132,244,.1) -6.01%,rgba(12,211,255,.1) 36.87%,rgba(47,124,240,.1) 78.04%,rgba(14,101,232,.1) 103.77%)}.bg-blue-gradient,.text-gradient{background:linear-gradient(136.91deg,#468ef9 -12.5%,#0c66ee 107.5%)}.text-gradient{-webkit-background-clip:text;-webkit-text-fill-color:transparent}.slide-enter-active{transition-duration:.3s;transition-timing-function:ease-in}.slide-leave-active{transition-duration:.3s;transition-timing-function:cubic-bezier(0,1,.5,1)}.slide-enter-to,.slide-leave{max-height:100px;overflow:hidden}.slide-enter,.slide-leave-to{max-height:0;overflow:hidden}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_20f0e32c_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_20f0e32c_prod_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_20f0e32c_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_20f0e32c_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_20f0e32c_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(26);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(35);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(36);
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(37);
var ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(49);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".text-header-gradient{background:#226bd7;-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}.text-header-gradient-big{background:#1f6de3;-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;color:#030a3c;font-size:1.5em}.bg-partner,.bg-trading-tools{background-position:50%;background-size:cover}.max-h-0{max-height:0}.modal{background-color:rgba(0,0,0,.7);height:100%;left:0;overflow:auto;position:fixed;top:0;width:100%;z-index:100000}.modal-content{background-color:#dbdbdb;border:1px solid #dbdbdb;border-radius:12px;margin:10% auto;overflow:scroll;padding:20px}.close{color:#030a3c;float:right;font-size:28px;font-weight:700;margin-top:-10px}.close:focus,.close:hover{color:red;cursor:pointer;-webkit-text-decoration:none;text-decoration:none}.fullscreen{color:#095c01;float:right;font-size:16px;font-weight:700;margin-top:-10px}.fullscreen:focus,.fullscreen:hover{color:#0576e0;cursor:pointer;-webkit-text-decoration:none;text-decoration:none}.hero{align-items:center;animation:heroFade 25s infinite;background-blend-mode:multiply;background-color:rgba(14,42,74,.7);background-position:50%;background-size:cover;color:#fff;display:flex;height:100vh;position:relative;z-index:1}.upzone{z-index:100!important}@media screen and (min-width:640px){.desktop{margin-top:-50px}}@keyframes heroFade{0%{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");opacity:1}33%{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");opacity:1}66%{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");opacity:1}to{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");opacity:1}}@media screen and (max-width:640px){.nospace{margin-bottom:0;margin-top:0}.mobile{font-size:26px}.extramobile,.mobile{margin-bottom:0;margin-top:0;padding:2px 4px}.extramobile{font-size:12px}.optional{display:none}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
const state = () => ({
  blogData: null
});
const mutations = {
  setBlogData(state, blogData) {
    state.blogData = blogData;
  }
};

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
function isPlainObject(value) {
  if (value === null || typeof value !== "object") {
    return false;
  }
  const prototype = Object.getPrototypeOf(value);
  if (prototype !== null && prototype !== Object.prototype && Object.getPrototypeOf(prototype) !== null) {
    return false;
  }
  if (Symbol.iterator in value) {
    return false;
  }
  if (Symbol.toStringTag in value) {
    return Object.prototype.toString.call(value) === "[object Module]";
  }
  return true;
}
function _defu(baseObject, defaults, namespace = ".", merger) {
  if (!isPlainObject(defaults)) {
    return _defu(baseObject, {}, namespace, merger);
  }
  const object = Object.assign({}, defaults);
  for (const key in baseObject) {
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = baseObject[key];
    if (value === null || value === void 0) {
      continue;
    }
    if (merger && merger(object, key, value, namespace)) {
      continue;
    }
    if (Array.isArray(value) && Array.isArray(object[key])) {
      object[key] = [...value, ...object[key]];
    } else if (isPlainObject(value) && isPlainObject(object[key])) {
      object[key] = _defu(value, object[key], (namespace ? `${namespace}.` : "") + key.toString(), merger);
    } else {
      object[key] = value;
    }
  }
  return object;
}
function createDefu(merger) {
  return (...arguments_) =>
  // eslint-disable-next-line unicorn/no-array-reduce
  arguments_.reduce((p, c) => _defu(p, c, "", merger), {});
}
const defu = createDefu();
const defuFn = createDefu((object, key, currentValue) => {
  if (object[key] !== void 0 && typeof currentValue === "function") {
    object[key] = currentValue(object[key]);
    return true;
  }
});
const defuArrayFn = createDefu((object, key, currentValue) => {
  if (Array.isArray(object[key]) && typeof currentValue === "function") {
    object[key] = currentValue(object[key]);
    return true;
  }
});
exports.createDefu = createDefu;
exports.default = defu;
exports.defu = defu;
exports.defuArrayFn = defuArrayFn;
exports.defuFn = defuFn;

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// NAMESPACE OBJECT: ./.nuxt/components/index.js
var components_namespaceObject = {};
__webpack_require__.r(components_namespaceObject);
__webpack_require__.d(components_namespaceObject, "LoadingIndicator", function() { return components_LoadingIndicator; });
__webpack_require__.d(components_namespaceObject, "NavLink", function() { return NavLink; });
__webpack_require__.d(components_namespaceObject, "BaseAccordion", function() { return BaseAccordion; });
__webpack_require__.d(components_namespaceObject, "BaseButton", function() { return BaseButton; });
__webpack_require__.d(components_namespaceObject, "BaseFooter", function() { return BaseFooter; });
__webpack_require__.d(components_namespaceObject, "BaseHeader", function() { return BaseHeader; });
__webpack_require__.d(components_namespaceObject, "BaseNavbar", function() { return BaseNavbar; });
__webpack_require__.d(components_namespaceObject, "BaseSection", function() { return BaseSection; });
__webpack_require__.d(components_namespaceObject, "LandingAiTrend", function() { return LandingAiTrend; });
__webpack_require__.d(components_namespaceObject, "LandingAihistory", function() { return LandingAihistory; });
__webpack_require__.d(components_namespaceObject, "LandingBlog", function() { return LandingBlog; });
__webpack_require__.d(components_namespaceObject, "LandingComment", function() { return LandingComment; });
__webpack_require__.d(components_namespaceObject, "LandingExchange", function() { return LandingExchange; });
__webpack_require__.d(components_namespaceObject, "LandingListItem", function() { return LandingListItem; });
__webpack_require__.d(components_namespaceObject, "LandingOpportunity", function() { return LandingOpportunity; });
__webpack_require__.d(components_namespaceObject, "LandingSearch", function() { return LandingSearch; });
__webpack_require__.d(components_namespaceObject, "LandingStep", function() { return LandingStep; });
__webpack_require__.d(components_namespaceObject, "LandingTradingToolImage", function() { return LandingTradingToolImage; });

// NAMESPACE OBJECT: ./node_modules/@nuxt/image/dist/runtime/providers/ipx.js
var ipx_namespaceObject = {};
__webpack_require__.r(ipx_namespaceObject);
__webpack_require__.d(ipx_namespaceObject, "getImage", function() { return ipx_getImage; });
__webpack_require__.d(ipx_namespaceObject, "validateDomains", function() { return validateDomains; });
__webpack_require__.d(ipx_namespaceObject, "supportsAlias", function() { return supportsAlias; });

// NAMESPACE OBJECT: ./node_modules/@nuxt/image/dist/runtime/providers/static.js
var static_namespaceObject = {};
__webpack_require__.r(static_namespaceObject);
__webpack_require__.d(static_namespaceObject, "getImage", function() { return static_getImage; });
__webpack_require__.d(static_namespaceObject, "supportsAlias", function() { return static_supportsAlias; });

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(1);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: ./node_modules/ufo/dist/index.cjs
var dist = __webpack_require__(3);

// EXTERNAL MODULE: external "node-fetch-native"
var external_node_fetch_native_ = __webpack_require__(30);
var external_node_fetch_native_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_native_);

// CONCATENATED MODULE: ./.nuxt/middleware.js
const middleware = {};
/* harmony default export */ var _nuxt_middleware = (middleware);
// CONCATENATED MODULE: ./.nuxt/utils.js



// window.{{globals.loadedCallback}} hook
// Useful for jsdom testing or plugins (https://github.com/tmpvar/jsdom#dealing-with-asynchronous-script-loading)
if (false) {}
function createGetCounter(counterObject, defaultKey = '') {
  return function getCounter(id = defaultKey) {
    if (counterObject[id] === undefined) {
      counterObject[id] = 0;
    }
    return counterObject[id]++;
  };
}
function empty() {}
function globalHandleError(error) {
  if (external_vue_default.a.config.errorHandler) {
    external_vue_default.a.config.errorHandler(error);
  }
}
function interopDefault(promise) {
  return promise.then(m => m.default || m);
}
function hasFetch(vm) {
  return vm.$options && typeof vm.$options.fetch === 'function' && !vm.$options.fetch.length;
}
function purifyData(data) {
  if (true) {
    return data;
  }
  return Object.entries(data).filter(([key, value]) => {
    const valid = !(value instanceof Function) && !(value instanceof Promise);
    if (!valid) {
      console.warn(`${key} is not able to be stringified. This will break in a production environment.`);
    }
    return valid;
  }).reduce((obj, [key, value]) => {
    obj[key] = value;
    return obj;
  }, {});
}
function getChildrenComponentInstancesUsingFetch(vm, instances = []) {
  const children = vm.$children || [];
  for (const child of children) {
    if (child.$fetch) {
      instances.push(child);
    }
    if (child.$children) {
      getChildrenComponentInstancesUsingFetch(child, instances);
    }
  }
  return instances;
}
function applyAsyncData(Component, asyncData) {
  if (
  // For SSR, we once all this function without second param to just apply asyncData
  // Prevent doing this for each SSR request
  !asyncData && Component.options.__hasNuxtData) {
    return;
  }
  const ComponentData = Component.options._originDataFn || Component.options.data || function () {
    return {};
  };
  Component.options._originDataFn = ComponentData;
  Component.options.data = function () {
    const data = ComponentData.call(this, this);
    if (this.$ssrContext) {
      asyncData = this.$ssrContext.asyncData[Component.cid];
    }
    return {
      ...data,
      ...asyncData
    };
  };
  Component.options.__hasNuxtData = true;
  if (Component._Ctor && Component._Ctor.options) {
    Component._Ctor.options.data = Component.options.data;
  }
}
function sanitizeComponent(Component) {
  // If Component already sanitized
  if (Component.options && Component._Ctor === Component) {
    return Component;
  }
  if (!Component.options) {
    Component = external_vue_default.a.extend(Component); // fix issue #6
    Component._Ctor = Component;
  } else {
    Component._Ctor = Component;
    Component.extendOptions = Component.options;
  }
  // If no component name defined, set file path as name, (also fixes #5703)
  if (!Component.options.name && Component.options.__file) {
    Component.options.name = Component.options.__file;
  }
  return Component;
}
function getMatchedComponents(route, matches = false, prop = 'components') {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m[prop]).map(key => {
      matches && matches.push(index);
      return m[prop][key];
    });
  }));
}
function getMatchedComponentsInstances(route, matches = false) {
  return getMatchedComponents(route, matches, 'instances');
}
function flatMapComponents(route, fn) {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m.components).reduce((promises, key) => {
      if (m.components[key]) {
        promises.push(fn(m.components[key], m.instances[key], m, key, index));
      } else {
        delete m.components[key];
      }
      return promises;
    }, []);
  }));
}
function resolveRouteComponents(route, fn) {
  return Promise.all(flatMapComponents(route, async (Component, instance, match, key) => {
    // If component is a function, resolve it
    if (typeof Component === 'function' && !Component.options) {
      try {
        Component = await Component();
      } catch (error) {
        // Handle webpack chunk loading errors
        // This may be due to a new deployment or a network problem
        if (error && error.name === 'ChunkLoadError' && typeof window !== 'undefined' && window.sessionStorage) {
          const timeNow = Date.now();
          try {
            const previousReloadTime = parseInt(window.sessionStorage.getItem('nuxt-reload'));
            // check for previous reload time not to reload infinitely
            if (!previousReloadTime || previousReloadTime + 60000 < timeNow) {
              window.sessionStorage.setItem('nuxt-reload', timeNow);
              window.location.reload(true /* skip cache */);
            }
          } catch {
            // don't throw an error if we have issues reading sessionStorage
          }
        }
        throw error;
      }
    }
    match.components[key] = Component = sanitizeComponent(Component);
    return typeof fn === 'function' ? fn(Component, instance, match, key) : Component;
  }));
}
async function getRouteData(route) {
  if (!route) {
    return;
  }
  // Make sure the components are resolved (code-splitting)
  await resolveRouteComponents(route);
  // Send back a copy of route with meta based on Component definition
  return {
    ...route,
    meta: getMatchedComponents(route).map((Component, index) => {
      return {
        ...Component.options.meta,
        ...(route.matched[index] || {}).meta
      };
    })
  };
}
async function setContext(app, context) {
  // If context not defined, create it
  if (!app.context) {
    app.context = {
      isStatic: false,
      isDev: false,
      isHMR: false,
      app,
      store: app.store,
      payload: context.payload,
      error: context.error,
      base: app.router.options.base,
      env: {
        "baseURL": "https://api.beatexpertise.com/api",
        "storageUrl": "https://api.beatexpertise.com/storage/"
      }
    };
    // Only set once

    if (context.req) {
      app.context.req = context.req;
    }
    if (context.res) {
      app.context.res = context.res;
    }
    if (context.ssrContext) {
      app.context.ssrContext = context.ssrContext;
    }
    app.context.redirect = (status, path, query) => {
      if (!status) {
        return;
      }
      app.context._redirected = true;
      // if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })
      let pathType = typeof path;
      if (typeof status !== 'number' && (pathType === 'undefined' || pathType === 'object')) {
        query = path || {};
        path = status;
        pathType = typeof path;
        status = 302;
      }
      if (pathType === 'object') {
        path = app.router.resolve(path).route.fullPath;
      }
      // "/absolute/route", "./relative/route" or "../relative/route"
      if (/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) {
        app.context.next({
          path,
          query,
          status
        });
      } else {
        path = Object(dist["withQuery"])(path, query);
        if (true) {
          app.context.next({
            path,
            status
          });
        }
        if (false) {}
      }
    };
    if (true) {
      app.context.beforeNuxtRender = fn => context.beforeRenderFns.push(fn);
      app.context.beforeSerialize = fn => context.beforeSerializeFns.push(fn);
    }
    if (false) {}
  }

  // Dynamic keys
  const [currentRouteData, fromRouteData] = await Promise.all([getRouteData(context.route), getRouteData(context.from)]);
  if (context.route) {
    app.context.route = currentRouteData;
  }
  if (context.from) {
    app.context.from = fromRouteData;
  }
  if (context.error) {
    app.context.error = context.error;
  }
  app.context.next = context.next;
  app.context._redirected = false;
  app.context._errored = false;
  app.context.isHMR = false;
  app.context.params = app.context.route.params || {};
  app.context.query = app.context.route.query || {};
}
function middlewareSeries(promises, appContext, renderState) {
  if (!promises.length || appContext._redirected || appContext._errored || renderState && renderState.aborted) {
    return Promise.resolve();
  }
  return promisify(promises[0], appContext).then(() => {
    return middlewareSeries(promises.slice(1), appContext, renderState);
  });
}
function promisify(fn, context) {
  let promise;
  if (fn.length === 2) {
    // fn(context, callback)
    promise = new Promise(resolve => {
      fn(context, function (err, data) {
        if (err) {
          context.error(err);
        }
        data = data || {};
        resolve(data);
      });
    });
  } else {
    promise = fn(context);
  }
  if (promise && promise instanceof Promise && typeof promise.then === 'function') {
    return promise;
  }
  return Promise.resolve(promise);
}

// Imported from vue-router
function getLocation(base, mode) {
  if (mode === 'hash') {
    return window.location.hash.replace(/^#\//, '');
  }
  base = decodeURI(base).slice(0, -1); // consideration is base is normalized with trailing slash
  let path = decodeURI(window.location.pathname);
  if (base && path.startsWith(base)) {
    path = path.slice(base.length);
  }
  const fullPath = (path || '/') + window.location.search + window.location.hash;
  return Object(dist["normalizeURL"])(fullPath);
}

// Imported from path-to-regexp

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile(str, options) {
  return tokensToFunction(parse(str, options), options);
}
function getQueryDiff(toQuery, fromQuery) {
  const diff = {};
  const queries = {
    ...toQuery,
    ...fromQuery
  };
  for (const k in queries) {
    if (String(toQuery[k]) !== String(fromQuery[k])) {
      diff[k] = true;
    }
  }
  return diff;
}
function normalizeError(err) {
  let message;
  if (!(err.message || typeof err === 'string')) {
    try {
      message = JSON.stringify(err, null, 2);
    } catch (e) {
      message = `[${err.constructor.name}]`;
    }
  } else {
    message = err.message || err;
  }
  return {
    ...err,
    message,
    statusCode: err.statusCode || err.status || err.response && err.response.status || 500
  };
}

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
const PATH_REGEXP = new RegExp([
// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)',
// Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse(str, options) {
  const tokens = [];
  let key = 0;
  let index = 0;
  let path = '';
  const defaultDelimiter = options && options.delimiter || '/';
  let res;
  while ((res = PATH_REGEXP.exec(str)) != null) {
    const m = res[0];
    const escaped = res[1];
    const offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue;
    }
    const next = str[index];
    const prefix = res[2];
    const name = res[3];
    const capture = res[4];
    const group = res[5];
    const modifier = res[6];
    const asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }
    const partial = prefix != null && next != null && next !== prefix;
    const repeat = modifier === '+' || modifier === '*';
    const optional = modifier === '?' || modifier === '*';
    const delimiter = res[2] || defaultDelimiter;
    const pattern = capture || group;
    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter,
      optional,
      repeat,
      partial,
      asterisk: Boolean(asterisk),
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }
  return tokens;
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty(str, slashAllowed) {
  const re = slashAllowed ? /[?#]/g : /[/?#]/g;
  return encodeURI(str).replace(re, c => {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk(str) {
  return encodeURIComponentPretty(str, true);
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup(group) {
  return group.replace(/([=!:$/()])/g, '\\$1');
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
  // Compile all the tokens into regexps.
  const matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (let i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options));
    }
  }
  return function (obj, opts) {
    let path = '';
    const data = obj || {};
    const options = opts || {};
    const encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;
    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];
      if (typeof token === 'string') {
        path += token;
        continue;
      }
      const value = data[token.name || 'pathMatch'];
      let segment;
      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }
          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }
      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }
        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }
        for (let j = 0; j < value.length; j++) {
          segment = encode(value[j]);
          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }
          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }
        continue;
      }
      segment = token.asterisk ? encodeAsterisk(value) : encode(value);
      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }
      path += token.prefix + segment;
    }
    return path;
  };
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags(options) {
  return options && options.sensitive ? '' : 'i';
}
function addLifecycleHook(vm, hook, fn) {
  if (!vm.$options[hook]) {
    vm.$options[hook] = [];
  }
  if (!vm.$options[hook].includes(fn)) {
    vm.$options[hook].push(fn);
  }
}
const urlJoin = dist["joinURL"];
const stripTrailingSlash = dist["withoutTrailingSlash"];
const isSamePath = dist["isSamePath"];
function setScrollRestoration(newVal) {
  try {
    window.history.scrollRestoration = newVal;
  } catch (e) {}
}
// CONCATENATED MODULE: ./.nuxt/mixins/fetch.server.js


async function serverPrefetch() {
  if (!this._fetchOnServer) {
    return;
  }

  // Call and await on $fetch
  try {
    await this.$options.fetch.call(this);
  } catch (err) {
    if (false) {}
    this.$fetchState.error = normalizeError(err);
  }
  this.$fetchState.pending = false;

  // Define an ssrKey for hydration
  this._fetchKey = this._fetchKey || this.$ssrContext.fetchCounters['']++;

  // Add data-fetch-key on parent element of Component
  const attrs = this.$vnode.data.attrs = this.$vnode.data.attrs || {};
  attrs['data-fetch-key'] = this._fetchKey;

  // Add to ssrContext for window.__NUXT__.fetch

  this.$ssrContext.nuxt.fetch[this._fetchKey] = this.$fetchState.error ? {
    _error: this.$fetchState.error
  } : purifyData(this._data);
}
/* harmony default export */ var fetch_server = ({
  created() {
    if (!hasFetch(this)) {
      return;
    }
    if (typeof this.$options.fetchOnServer === 'function') {
      this._fetchOnServer = this.$options.fetchOnServer.call(this) !== false;
    } else {
      this._fetchOnServer = this.$options.fetchOnServer !== false;
    }
    const defaultKey = this.$options._scopeId || this.$options.name || '';
    const getCounter = createGetCounter(this.$ssrContext.fetchCounters, defaultKey);
    if (typeof this.$options.fetchKey === 'function') {
      this._fetchKey = this.$options.fetchKey.call(this, getCounter);
    } else {
      const key = 'string' === typeof this.$options.fetchKey ? this.$options.fetchKey : defaultKey;
      this._fetchKey = key ? key + ':' + getCounter(key) : String(getCounter(key));
    }

    // Added for remove vue undefined warning while ssr
    this.$fetch = () => {}; // issue #8043
    external_vue_default.a.util.defineReactive(this, '$fetchState', {
      pending: true,
      error: null,
      timestamp: Date.now()
    });
    addLifecycleHook(this, 'serverPrefetch', serverPrefetch);
  }
});
// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(9);
var external_vuex_default = /*#__PURE__*/__webpack_require__.n(external_vuex_);

// EXTERNAL MODULE: external "vue-meta"
var external_vue_meta_ = __webpack_require__(31);
var external_vue_meta_default = /*#__PURE__*/__webpack_require__.n(external_vue_meta_);

// EXTERNAL MODULE: external "vue-client-only"
var external_vue_client_only_ = __webpack_require__(15);
var external_vue_client_only_default = /*#__PURE__*/__webpack_require__.n(external_vue_client_only_);

// EXTERNAL MODULE: external "vue-no-ssr"
var external_vue_no_ssr_ = __webpack_require__(13);
var external_vue_no_ssr_default = /*#__PURE__*/__webpack_require__.n(external_vue_no_ssr_);

// EXTERNAL MODULE: external "vue-router"
var external_vue_router_ = __webpack_require__(16);
var external_vue_router_default = /*#__PURE__*/__webpack_require__.n(external_vue_router_);

// CONCATENATED MODULE: ./.nuxt/router.scrollBehavior.js

if (false) {}
function shouldScrollToTop(route) {
  const Pages = getMatchedComponents(route);
  if (Pages.length === 1) {
    const {
      options = {}
    } = Pages[0];
    return options.scrollToTop !== false;
  }
  return Pages.some(({
    options
  }) => options && options.scrollToTop);
}
/* harmony default export */ var router_scrollBehavior = (function (to, from, savedPosition) {
  // If the returned position is falsy or an empty object, will retain current scroll position
  let position = false;
  const isRouteChanged = to !== from;

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition;
  } else if (isRouteChanged && shouldScrollToTop(to)) {
    position = {
      x: 0,
      y: 0
    };
  }
  const nuxt = window.$nuxt;
  if (
  // Initial load (vuejs/vue-router#3199)
  !isRouteChanged ||
  // Route hash changes
  to.path === from.path && to.hash !== from.hash) {
    nuxt.$nextTick(() => nuxt.$emit('triggerScroll'));
  }
  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash;
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1));
        }
        try {
          const el = document.querySelector(hash);
          if (el) {
            var _getComputedStyle$scr;
            // scroll to anchor by returning the selector
            position = {
              selector: hash
            };
            // Respect any scroll-margin-top set in CSS when scrolling to anchor
            const y = Number((_getComputedStyle$scr = getComputedStyle(el)['scroll-margin-top']) === null || _getComputedStyle$scr === void 0 ? void 0 : _getComputedStyle$scr.replace('px', ''));
            if (y) {
              position.offset = {
                y
              };
            }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).');
        }
      }
      resolve(position);
    });
  });
});
// CONCATENATED MODULE: ./.nuxt/router.js





const _e24ced2e = () => interopDefault(__webpack_require__.e(/* import() | pages/admin/index */ 11).then(__webpack_require__.bind(null, 151)));
const _730694f2 = () => interopDefault(__webpack_require__.e(/* import() | pages/anonymous/index */ 12).then(__webpack_require__.bind(null, 152)));
const _22556f42 = () => interopDefault(__webpack_require__.e(/* import() | pages/apropos/index */ 13).then(__webpack_require__.bind(null, 153)));
const _a484feaa = () => interopDefault(__webpack_require__.e(/* import() | pages/blogs/index */ 15).then(__webpack_require__.bind(null, 154)));
const _e7640190 = () => interopDefault(__webpack_require__.e(/* import() | pages/create/index */ 16).then(__webpack_require__.bind(null, 166)));
const _14096706 = () => interopDefault(__webpack_require__.e(/* import() | pages/edit/index */ 17).then(__webpack_require__.bind(null, 167)));
const _70a4534b = () => interopDefault(__webpack_require__.e(/* import() | pages/opportunities/index */ 20).then(__webpack_require__.bind(null, 155)));
const _419ce399 = () => interopDefault(__webpack_require__.e(/* import() | pages/password-reset/index */ 21).then(__webpack_require__.bind(null, 156)));
const _2ff4868f = () => interopDefault(__webpack_require__.e(/* import() | pages/u/index */ 23).then(__webpack_require__.bind(null, 157)));
const _a5a9a3fa = () => interopDefault(__webpack_require__.e(/* import() | pages/profile/admin/index */ 22).then(__webpack_require__.bind(null, 158)));
const _6689592e = () => interopDefault(__webpack_require__.e(/* import() | pages/index */ 18).then(__webpack_require__.bind(null, 159)));
const _31fa9982 = () => interopDefault(__webpack_require__.e(/* import() | pages/blogs/_blogRoute */ 14).then(__webpack_require__.bind(null, 168)));
const _6e96849f = () => interopDefault(__webpack_require__.e(/* import() | pages/opportunities/_blogRoute */ 19).then(__webpack_require__.bind(null, 160)));
const emptyFn = () => {};
external_vue_default.a.use(external_vue_router_default.a);
const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior: router_scrollBehavior,
  routes: [{
    path: "/admin",
    component: _e24ced2e,
    name: "admin"
  }, {
    path: "/anonymous",
    component: _730694f2,
    name: "anonymous"
  }, {
    path: "/apropos",
    component: _22556f42,
    name: "apropos"
  }, {
    path: "/blogs",
    component: _a484feaa,
    name: "blogs"
  }, {
    path: "/create",
    component: _e7640190,
    name: "create"
  }, {
    path: "/edit",
    component: _14096706,
    name: "edit"
  }, {
    path: "/opportunities",
    component: _70a4534b,
    name: "opportunities"
  }, {
    path: "/password-reset",
    component: _419ce399,
    name: "password-reset"
  }, {
    path: "/u",
    component: _2ff4868f,
    name: "u"
  }, {
    path: "/profile/admin",
    component: _a5a9a3fa,
    name: "profile-admin"
  }, {
    path: "/",
    component: _6689592e,
    name: "index"
  }, {
    path: "/blogs/:blogRoute",
    component: _31fa9982,
    name: "blogs-blogRoute"
  }, {
    path: "/opportunities/:blogRoute",
    component: _6e96849f,
    name: "opportunities-blogRoute"
  }],
  fallback: false
};
function createRouter(ssrContext, config) {
  const base = config._app && config._app.basePath || routerOptions.base;
  const router = new external_vue_router_default.a({
    ...routerOptions,
    base
  });

  // TODO: remove in Nuxt 3
  const originalPush = router.push;
  router.push = function push(location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort);
  };
  const resolve = router.resolve.bind(router);
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = Object(dist["normalizeURL"])(to);
    }
    return resolve(to, current, append);
  };
  return router;
}
// CONCATENATED MODULE: ./.nuxt/components/nuxt-child.js
/* harmony default export */ var nuxt_child = ({
  name: 'NuxtChild',
  functional: true,
  props: {
    nuxtChildKey: {
      type: String,
      default: ''
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    }
  },
  render(_, {
    parent,
    data,
    props
  }) {
    const h = parent.$createElement;
    data.nuxtChild = true;
    const _parent = parent;
    const transitions = parent.$nuxt.nuxt.transitions;
    const defaultTransition = parent.$nuxt.nuxt.defaultTransition;
    let depth = 0;
    while (parent) {
      if (parent.$vnode && parent.$vnode.data.nuxtChild) {
        depth++;
      }
      parent = parent.$parent;
    }
    data.nuxtChildDepth = depth;
    const transition = transitions[depth] || defaultTransition;
    const transitionProps = {};
    transitionsKeys.forEach(key => {
      if (typeof transition[key] !== 'undefined') {
        transitionProps[key] = transition[key];
      }
    });
    const listeners = {};
    listenersKeys.forEach(key => {
      if (typeof transition[key] === 'function') {
        listeners[key] = transition[key].bind(_parent);
      }
    });
    if (false) {}

    // make sure that leave is called asynchronous (fix #5703)
    if (transition.css === false) {
      const leave = listeners.leave;

      // only add leave listener when user didnt provide one
      // or when it misses the done argument
      if (!leave || leave.length < 2) {
        listeners.leave = (el, done) => {
          if (leave) {
            leave.call(_parent, el);
          }
          _parent.$nextTick(done);
        };
      }
    }
    let routerView = h('routerView', data);
    if (props.keepAlive) {
      routerView = h('keep-alive', {
        props: props.keepAliveProps
      }, [routerView]);
    }
    return h('transition', {
      props: transitionProps,
      on: listeners
    }, [routerView]);
  }
});
const transitionsKeys = ['name', 'mode', 'appear', 'css', 'type', 'duration', 'enterClass', 'leaveClass', 'appearClass', 'enterActiveClass', 'enterActiveClass', 'leaveActiveClass', 'appearActiveClass', 'enterToClass', 'leaveToClass', 'appearToClass'];
const listenersKeys = ['beforeEnter', 'enter', 'afterEnter', 'enterCancelled', 'beforeLeave', 'leave', 'afterLeave', 'leaveCancelled', 'beforeAppear', 'appear', 'afterAppear', 'appearCancelled'];
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=template&id=5eb69f1c
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "__nuxt-error-page"
  }, [_vm._ssrNode("<div class=\"error\">", "</div>", [_vm._ssrNode("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"90\" height=\"90\" fill=\"#DBE1EC\" viewBox=\"0 0 48 48\"><path d=\"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z\"></path></svg> <div class=\"title\">" + _vm._ssrEscape(_vm._s(_vm.message)) + "</div> "), _vm.statusCode === 404 ? _vm._ssrNode("<p class=\"description\">", "</p>", [typeof _vm.$route === 'undefined' ? _vm._ssrNode("<a href=\"/\" class=\"error-link\">", "</a>") : _c('NuxtLink', {
    staticClass: "error-link",
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Back to the home page")])], 1) : _vm._e(), _vm._ssrNode(" <div class=\"logo\"><a href=\"https://nuxtjs.org\" target=\"_blank\" rel=\"noopener\">Nuxt</a></div>")], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=template&id=5eb69f1c

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js
/* harmony default export */ var nuxt_errorvue_type_script_lang_js = ({
  name: 'NuxtError',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  computed: {
    statusCode() {
      return this.error && this.error.statusCode || 500;
    },
    message() {
      return this.error.message || 'Error';
    }
  },
  head() {
    return {
      title: this.message,
      meta: [{
        name: 'viewport',
        content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0'
      }]
    };
  }
});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js
 /* harmony default export */ var components_nuxt_errorvue_type_script_lang_js = (nuxt_errorvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(52)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_error_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_errorvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "3d699458"
  
)

/* harmony default export */ var nuxt_error = (nuxt_error_component.exports);
// CONCATENATED MODULE: ./.nuxt/components/nuxt.js




/* harmony default export */ var components_nuxt = ({
  name: 'Nuxt',
  components: {
    NuxtChild: nuxt_child,
    NuxtError: nuxt_error
  },
  props: {
    nuxtChildKey: {
      type: String,
      default: undefined
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    },
    name: {
      type: String,
      default: 'default'
    }
  },
  errorCaptured(error) {
    // if we receive and error while showing the NuxtError component
    // capture the error and force an immediate update so we re-render
    // without the NuxtError component
    if (this.displayingNuxtError) {
      this.errorFromNuxtError = error;
      this.$forceUpdate();
    }
  },
  computed: {
    routerViewKey() {
      // If nuxtChildKey prop is given or current route has children
      if (typeof this.nuxtChildKey !== 'undefined' || this.$route.matched.length > 1) {
        return this.nuxtChildKey || compile(this.$route.matched[0].path)(this.$route.params);
      }
      const [matchedRoute] = this.$route.matched;
      if (!matchedRoute) {
        return this.$route.path;
      }
      const Component = matchedRoute.components.default;
      if (Component && Component.options) {
        const {
          options
        } = Component;
        if (options.key) {
          return typeof options.key === 'function' ? options.key(this.$route) : options.key;
        }
      }
      const strict = /\/$/.test(matchedRoute.path);
      return strict ? this.$route.path : this.$route.path.replace(/\/$/, '');
    }
  },
  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$root.$options.nuxt);
  },
  render(h) {
    // if there is no error or
    // error page has not been loaded yet on client
    if (!this.nuxt.err ||  false && false) {
      // Directly return nuxt child
      return h('NuxtChild', {
        key: this.routerViewKey,
        props: this.$props
      });
    }

    // if an error occurred within NuxtError show a simple
    // error message instead to prevent looping
    if (this.errorFromNuxtError) {
      this.$nextTick(() => this.errorFromNuxtError = false);
      return h('div', {}, [h('h2', 'An error occurred while showing the error page'), h('p', 'Unfortunately an error occurred and while showing the error page another error occurred'), h('p', `Error details: ${this.errorFromNuxtError.toString()}`), h('nuxt-link', {
        props: {
          to: '/'
        }
      }, 'Go back to home')]);
    }

    // track if we are showing the NuxtError component
    this.displayingNuxtError = true;
    this.$nextTick(() => this.displayingNuxtError = false);
    return h(nuxt_error, {
      props: {
        error: this.nuxt.err
      }
    });
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js
/* harmony default export */ var nuxt_loadingvue_type_script_lang_js = ({
  name: 'NuxtLoading',
  data() {
    return {
      percent: 0,
      show: false,
      canSucceed: true,
      reversed: false,
      skipTimerCount: 0,
      rtl: false,
      throttle: 200,
      duration: 5000,
      continuous: false
    };
  },
  computed: {
    left() {
      if (!this.continuous && !this.rtl) {
        return false;
      }
      return this.rtl ? this.reversed ? '0px' : 'auto' : !this.reversed ? '0px' : 'auto';
    }
  },
  beforeDestroy() {
    this.clear();
  },
  methods: {
    clear() {
      clearInterval(this._timer);
      clearTimeout(this._throttle);
      clearTimeout(this._hide);
      this._timer = null;
    },
    start() {
      this.clear();
      this.percent = 0;
      this.reversed = false;
      this.skipTimerCount = 0;
      this.canSucceed = true;
      if (this.throttle) {
        this._throttle = setTimeout(() => this.startTimer(), this.throttle);
      } else {
        this.startTimer();
      }
      return this;
    },
    set(num) {
      this.show = true;
      this.canSucceed = true;
      this.percent = Math.min(100, Math.max(0, Math.floor(num)));
      return this;
    },
    get() {
      return this.percent;
    },
    increase(num) {
      this.percent = Math.min(100, Math.floor(this.percent + num));
      return this;
    },
    decrease(num) {
      this.percent = Math.max(0, Math.floor(this.percent - num));
      return this;
    },
    pause() {
      clearInterval(this._timer);
      return this;
    },
    resume() {
      this.startTimer();
      return this;
    },
    finish() {
      this.percent = this.reversed ? 0 : 100;
      this.hide();
      return this;
    },
    hide() {
      this.clear();
      this._hide = setTimeout(() => {
        this.show = false;
        this.$nextTick(() => {
          this.percent = 0;
          this.reversed = false;
        });
      }, 500);
      return this;
    },
    fail(error) {
      this.canSucceed = false;
      return this;
    },
    startTimer() {
      if (!this.show) {
        this.show = true;
      }
      if (typeof this._cut === 'undefined') {
        this._cut = 10000 / Math.floor(this.duration);
      }
      this._timer = setInterval(() => {
        /**
         * When reversing direction skip one timers
         * so 0, 100 are displayed for two iterations
         * also disable css width transitioning
         * which otherwise interferes and shows
         * a jojo effect
         */
        if (this.skipTimerCount > 0) {
          this.skipTimerCount--;
          return;
        }
        if (this.reversed) {
          this.decrease(this._cut);
        } else {
          this.increase(this._cut);
        }
        if (this.continuous) {
          if (this.percent >= 100) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          } else if (this.percent <= 0) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          }
        }
      }, 100);
    }
  },
  render(h) {
    let el = h(false);
    if (this.show) {
      el = h('div', {
        staticClass: 'nuxt-progress',
        class: {
          'nuxt-progress-notransition': this.skipTimerCount > 0,
          'nuxt-progress-failed': !this.canSucceed
        },
        style: {
          width: this.percent + '%',
          left: this.left
        }
      });
    }
    return el;
  }
});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js
 /* harmony default export */ var components_nuxt_loadingvue_type_script_lang_js = (nuxt_loadingvue_type_script_lang_js); 
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue
var nuxt_loading_render, nuxt_loading_staticRenderFns


function nuxt_loading_injectStyles (context) {
  
  var style0 = __webpack_require__(54)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_loading_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_loadingvue_type_script_lang_js,
  nuxt_loading_render,
  nuxt_loading_staticRenderFns,
  false,
  nuxt_loading_injectStyles,
  null,
  "00a648e8"
  
)

/* harmony default export */ var nuxt_loading = (nuxt_loading_component.exports);
// EXTERNAL MODULE: ./assets/css/main.css
var main = __webpack_require__(56);

// EXTERNAL MODULE: ./node_modules/aos/dist/aos.css
var aos = __webpack_require__(22);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/anonymous.vue?vue&type=template&id=c1651894
var anonymousvue_type_template_id_c1651894_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('client-only', [_c('div', {
    staticClass: "min-h-screen font-sans antialiased relative"
  }, [_c('div', {
    staticClass: "relative"
  }, [_c('LoadingIndicator'), _vm._v(" "), _c('BaseNavbar', {
    attrs: {
      "from": "anonymous"
    }
  }), _vm._v(" "), _c('main', {
    staticClass: "text-neutral-800"
  }, [_c('Nuxt')], 1), _vm._v(" "), _c('BaseFooter')], 1)])]);
};
var anonymousvue_type_template_id_c1651894_staticRenderFns = [];

// CONCATENATED MODULE: ./layouts/anonymous.vue?vue&type=template&id=c1651894

// EXTERNAL MODULE: ./components/LoadingIndicator.vue + 4 modules
var LoadingIndicator = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/anonymous.vue?vue&type=script&lang=js

/* harmony default export */ var anonymousvue_type_script_lang_js = ({
  name: 'BlogLayout',
  components: {
    LoadingIndicator: LoadingIndicator["default"]
  },
  $route(to, from) {
    if (to.path !== from.path) {
      this.$nuxt.$emit('routeChange');
    }
  }
});
// CONCATENATED MODULE: ./layouts/anonymous.vue?vue&type=script&lang=js
 /* harmony default export */ var layouts_anonymousvue_type_script_lang_js = (anonymousvue_type_script_lang_js); 
// CONCATENATED MODULE: ./layouts/anonymous.vue





/* normalize component */

var anonymous_component = Object(componentNormalizer["a" /* default */])(
  layouts_anonymousvue_type_script_lang_js,
  anonymousvue_type_template_id_c1651894_render,
  anonymousvue_type_template_id_c1651894_staticRenderFns,
  false,
  null,
  null,
  "133efa86"
  
)

/* harmony default export */ var anonymous = (anonymous_component.exports);

/* nuxt-component-imports */
installComponents(anonymous_component, {LoadingIndicator: __webpack_require__(2).default,BaseNavbar: __webpack_require__(7).default,BaseFooter: __webpack_require__(8).default})

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/blog.vue?vue&type=template&id=454fee6e
var blogvue_type_template_id_454fee6e_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('client-only', [_c('div', {
    staticClass: "min-h-screen font-sans antialiased relative"
  }, [_c('div', {
    staticClass: "relative"
  }, [_c('div', {
    staticClass: "absolute top-0 left-0 w-full h-[125vh] sm:h-[225vh] lg:h-[125vh] cover-gradient-2 sm:cover-gradient"
  }), _vm._v(" "), _c('BaseNavbar', {
    attrs: {
      "from": "blog"
    }
  }), _vm._v(" "), _c('LoadingIndicator'), _vm._v(" "), _c('main', {
    staticClass: "text-neutral-800"
  }, [_c('Nuxt')], 1), _vm._v(" "), _c('BaseFooter')], 1)])]);
};
var blogvue_type_template_id_454fee6e_staticRenderFns = [];

// CONCATENATED MODULE: ./layouts/blog.vue?vue&type=template&id=454fee6e

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/blog.vue?vue&type=script&lang=js

/* harmony default export */ var blogvue_type_script_lang_js = ({
  name: 'CreateLayout',
  components: {
    LoadingIndicator: LoadingIndicator["default"]
  },
  $route(to, from) {
    if (to.path !== from.path) {
      this.$nuxt.$emit('routeChange');
    }
  }
});
// CONCATENATED MODULE: ./layouts/blog.vue?vue&type=script&lang=js
 /* harmony default export */ var layouts_blogvue_type_script_lang_js = (blogvue_type_script_lang_js); 
// CONCATENATED MODULE: ./layouts/blog.vue





/* normalize component */

var blog_component = Object(componentNormalizer["a" /* default */])(
  layouts_blogvue_type_script_lang_js,
  blogvue_type_template_id_454fee6e_render,
  blogvue_type_template_id_454fee6e_staticRenderFns,
  false,
  null,
  null,
  "49c57299"
  
)

/* harmony default export */ var blog = (blog_component.exports);

/* nuxt-component-imports */
installComponents(blog_component, {BaseNavbar: __webpack_require__(7).default,LoadingIndicator: __webpack_require__(2).default,BaseFooter: __webpack_require__(8).default})

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/create.vue?vue&type=template&id=4c426e74
var createvue_type_template_id_4c426e74_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('client-only', [_c('div', {
    staticClass: "min-h-screen font-sans antialiased relative"
  }, [_c('div', {
    staticClass: "relative"
  }, [_c('div', {
    staticClass: "absolute top-0 left-0 w-full h-[125vh] sm:h-[225vh] lg:h-[125vh] cover-gradient-2 sm:cover-gradient"
  }), _vm._v(" "), _c('LoadingIndicator'), _vm._v(" "), _c('BaseNavbar', {
    attrs: {
      "from": "blog"
    }
  }), _vm._v(" "), _c('main', {
    staticClass: "text-neutral-800"
  }, [_c('Nuxt')], 1), _vm._v(" "), _c('BaseFooter')], 1)])]);
};
var createvue_type_template_id_4c426e74_staticRenderFns = [];

// CONCATENATED MODULE: ./layouts/create.vue?vue&type=template&id=4c426e74

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/create.vue?vue&type=script&lang=js

/* harmony default export */ var createvue_type_script_lang_js = ({
  name: 'BlogLayout',
  components: {
    LoadingIndicator: LoadingIndicator["default"]
  },
  $route(to, from) {
    if (to.path !== from.path) {
      this.$nuxt.$emit('routeChange');
    }
  }
});
// CONCATENATED MODULE: ./layouts/create.vue?vue&type=script&lang=js
 /* harmony default export */ var layouts_createvue_type_script_lang_js = (createvue_type_script_lang_js); 
// CONCATENATED MODULE: ./layouts/create.vue





/* normalize component */

var create_component = Object(componentNormalizer["a" /* default */])(
  layouts_createvue_type_script_lang_js,
  createvue_type_template_id_4c426e74_render,
  createvue_type_template_id_4c426e74_staticRenderFns,
  false,
  null,
  null,
  "f36c699a"
  
)

/* harmony default export */ var create = (create_component.exports);

/* nuxt-component-imports */
installComponents(create_component, {LoadingIndicator: __webpack_require__(2).default,BaseNavbar: __webpack_require__(7).default,BaseFooter: __webpack_require__(8).default})

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=template&id=7c3fd51c
var defaultvue_type_template_id_7c3fd51c_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('client-only', [_c('div', {
    staticClass: "min-h-screen font-sans antialiased relative"
  }, [_c('div', {
    staticClass: "relative"
  }, [_c('div', {
    staticClass: "absolute top-0 left-0 w-full h-[125vh] sm:h-[225vh] lg:h-[125vh] cover-gradient-2 sm:cover-gradient"
  }), _vm._v(" "), _c('BaseNavbar'), _vm._v(" "), _c('LoadingIndicator'), _vm._v(" "), _c('BaseHeader'), _vm._v(" "), _c('main', {
    staticClass: "text-neutral-800"
  }, [_c('Nuxt')], 1), _vm._v(" "), _c('BaseFooter', {
    attrs: {
      "is-homepage": true
    }
  })], 1)])]);
};
var defaultvue_type_template_id_7c3fd51c_staticRenderFns = [];

// CONCATENATED MODULE: ./layouts/default.vue?vue&type=template&id=7c3fd51c

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=script&lang=js

/* harmony default export */ var defaultvue_type_script_lang_js = ({
  name: 'DefaultLayout',
  components: {
    LoadingIndicator: LoadingIndicator["default"]
  }
});
// watch routes update
const watch = {
  $route(to, from) {
    if (to.path !== from.path) {
      this.$nuxt.$emit('routeChange');
    }
  }
};
// CONCATENATED MODULE: ./layouts/default.vue?vue&type=script&lang=js
 /* harmony default export */ var layouts_defaultvue_type_script_lang_js = (defaultvue_type_script_lang_js); 
// CONCATENATED MODULE: ./layouts/default.vue



function default_injectStyles (context) {
  
  var style0 = __webpack_require__(65)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var default_component = Object(componentNormalizer["a" /* default */])(
  layouts_defaultvue_type_script_lang_js,
  defaultvue_type_template_id_7c3fd51c_render,
  defaultvue_type_template_id_7c3fd51c_staticRenderFns,
  false,
  default_injectStyles,
  null,
  "48efde9a"
  
)

/* harmony default export */ var layouts_default = (default_component.exports);

/* nuxt-component-imports */
installComponents(default_component, {BaseNavbar: __webpack_require__(7).default,LoadingIndicator: __webpack_require__(2).default,BaseHeader: __webpack_require__(73).default,BaseFooter: __webpack_require__(8).default})

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/doc.vue?vue&type=template&id=7b38ddcc
var docvue_type_template_id_7b38ddcc_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('client-only', [_c('div', {
    staticClass: "min-h-screen font-sans antialiased relative"
  }, [_c('div', {
    staticClass: "relative"
  }, [_c('div', {
    staticClass: "absolute top-0 left-0 w-full h-[125vh] sm:h-[225vh] lg:h-[125vh] cover-gradient-2 sm:cover-gradient"
  }), _vm._v(" "), _c('LoadingIndicator'), _vm._v(" "), _c('BaseNavbar', {
    attrs: {
      "from": "doc"
    }
  }), _vm._v(" "), _c('main', {
    staticClass: "text-neutral-800"
  }, [_c('Nuxt')], 1), _vm._v(" "), _c('BaseFooter')], 1)])]);
};
var docvue_type_template_id_7b38ddcc_staticRenderFns = [];

// CONCATENATED MODULE: ./layouts/doc.vue?vue&type=template&id=7b38ddcc

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/doc.vue?vue&type=script&lang=js

/* harmony default export */ var docvue_type_script_lang_js = ({
  name: 'DocLayout',
  components: {
    LoadingIndicator: LoadingIndicator["default"]
  },
  $route(to, from) {
    if (to.path !== from.path) {
      this.$nuxt.$emit('routeChange');
    }
  }
});
// CONCATENATED MODULE: ./layouts/doc.vue?vue&type=script&lang=js
 /* harmony default export */ var layouts_docvue_type_script_lang_js = (docvue_type_script_lang_js); 
// CONCATENATED MODULE: ./layouts/doc.vue





/* normalize component */

var doc_component = Object(componentNormalizer["a" /* default */])(
  layouts_docvue_type_script_lang_js,
  docvue_type_template_id_7b38ddcc_render,
  docvue_type_template_id_7b38ddcc_staticRenderFns,
  false,
  null,
  null,
  "dcdafade"
  
)

/* harmony default export */ var doc = (doc_component.exports);

/* nuxt-component-imports */
installComponents(doc_component, {LoadingIndicator: __webpack_require__(2).default,BaseNavbar: __webpack_require__(7).default,BaseFooter: __webpack_require__(8).default})

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/tips.vue?vue&type=template&id=15ce82f2
var tipsvue_type_template_id_15ce82f2_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('client-only', [_c('div', {
    staticClass: "min-h-screen font-sans antialiased relative"
  }, [_c('div', {
    staticClass: "relative"
  }, [_c('div', {
    staticClass: "absolute top-0 left-0 w-full h-[125vh] sm:h-[225vh] lg:h-[125vh] cover-gradient-2 sm:cover-gradient"
  }), _vm._v(" "), _c('BaseNavbar', {
    attrs: {
      "from": "tip"
    }
  }), _vm._v(" "), _c('LoadingIndicator'), _vm._v(" "), _c('main', {
    staticClass: "text-neutral-800"
  }, [_c('Nuxt')], 1), _vm._v(" "), _c('BaseFooter')], 1)])]);
};
var tipsvue_type_template_id_15ce82f2_staticRenderFns = [];

// CONCATENATED MODULE: ./layouts/tips.vue?vue&type=template&id=15ce82f2

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/tips.vue?vue&type=script&lang=js

/* harmony default export */ var tipsvue_type_script_lang_js = ({
  name: 'TipsLayout',
  components: {
    LoadingIndicator: LoadingIndicator["default"]
  },
  $route(to, from) {
    if (to.path !== from.path) {
      this.$nuxt.$emit('routeChange');
    }
  }
});
// CONCATENATED MODULE: ./layouts/tips.vue?vue&type=script&lang=js
 /* harmony default export */ var layouts_tipsvue_type_script_lang_js = (tipsvue_type_script_lang_js); 
// CONCATENATED MODULE: ./layouts/tips.vue





/* normalize component */

var tips_component = Object(componentNormalizer["a" /* default */])(
  layouts_tipsvue_type_script_lang_js,
  tipsvue_type_template_id_15ce82f2_render,
  tipsvue_type_template_id_15ce82f2_staticRenderFns,
  false,
  null,
  null,
  "097449a2"
  
)

/* harmony default export */ var tips = (tips_component.exports);

/* nuxt-component-imports */
installComponents(tips_component, {BaseNavbar: __webpack_require__(7).default,LoadingIndicator: __webpack_require__(2).default,BaseFooter: __webpack_require__(8).default})

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/trend.vue?vue&type=template&id=a4e7a316
var trendvue_type_template_id_a4e7a316_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('client-only', [_c('div', {
    staticClass: "min-h-screen font-sans antialiased relative"
  }, [_c('div', {
    staticClass: "relative"
  }, [_c('div', {
    staticClass: "absolute top-0 left-0 w-full h-[125vh] sm:h-[225vh] lg:h-[125vh] cover-gradient-2 sm:cover-gradient"
  }), _vm._v(" "), _c('LoadingIndicator'), _vm._v(" "), _c('BaseNavbar', {
    attrs: {
      "from": "trend"
    }
  }), _vm._v(" "), _c('main', {
    staticClass: "text-neutral-800"
  }, [_c('Nuxt')], 1), _vm._v(" "), _c('BaseFooter')], 1)])]);
};
var trendvue_type_template_id_a4e7a316_staticRenderFns = [];

// CONCATENATED MODULE: ./layouts/trend.vue?vue&type=template&id=a4e7a316

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/trend.vue?vue&type=script&lang=js

/* harmony default export */ var trendvue_type_script_lang_js = ({
  name: 'TrendLayout',
  components: {
    LoadingIndicator: LoadingIndicator["default"]
  },
  $route(to, from) {
    if (to.path !== from.path) {
      this.$nuxt.$emit('routeChange');
    }
  }
});
// CONCATENATED MODULE: ./layouts/trend.vue?vue&type=script&lang=js
 /* harmony default export */ var layouts_trendvue_type_script_lang_js = (trendvue_type_script_lang_js); 
// CONCATENATED MODULE: ./layouts/trend.vue





/* normalize component */

var trend_component = Object(componentNormalizer["a" /* default */])(
  layouts_trendvue_type_script_lang_js,
  trendvue_type_template_id_a4e7a316_render,
  trendvue_type_template_id_a4e7a316_staticRenderFns,
  false,
  null,
  null,
  "6e68cf94"
  
)

/* harmony default export */ var trend = (trend_component.exports);

/* nuxt-component-imports */
installComponents(trend_component, {LoadingIndicator: __webpack_require__(2).default,BaseNavbar: __webpack_require__(7).default,BaseFooter: __webpack_require__(8).default})

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/user.vue?vue&type=template&id=0560b748
var uservue_type_template_id_0560b748_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('client-only', [_c('div', {
    staticClass: "min-h-screen font-sans antialiased relative"
  }, [_c('div', {
    staticClass: "relative"
  }, [_c('LoadingIndicator'), _vm._v(" "), _c('BaseNavbar', {
    attrs: {
      "from": "user"
    }
  }), _vm._v(" "), _c('main', {
    staticClass: "text-neutral-800"
  }, [_c('Nuxt')], 1), _vm._v(" "), _c('BaseFooter')], 1)])]);
};
var uservue_type_template_id_0560b748_staticRenderFns = [];

// CONCATENATED MODULE: ./layouts/user.vue?vue&type=template&id=0560b748

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/user.vue?vue&type=script&lang=js

/* harmony default export */ var uservue_type_script_lang_js = ({
  name: 'BlogLayout',
  components: {
    LoadingIndicator: LoadingIndicator["default"]
  },
  $route(to, from) {
    if (to.path !== from.path) {
      this.$nuxt.$emit('routeChange');
    }
  }
});
// CONCATENATED MODULE: ./layouts/user.vue?vue&type=script&lang=js
 /* harmony default export */ var layouts_uservue_type_script_lang_js = (uservue_type_script_lang_js); 
// CONCATENATED MODULE: ./layouts/user.vue





/* normalize component */

var user_component = Object(componentNormalizer["a" /* default */])(
  layouts_uservue_type_script_lang_js,
  uservue_type_template_id_0560b748_render,
  uservue_type_template_id_0560b748_staticRenderFns,
  false,
  null,
  null,
  "6151f242"
  
)

/* harmony default export */ var user = (user_component.exports);

/* nuxt-component-imports */
installComponents(user_component, {LoadingIndicator: __webpack_require__(2).default,BaseNavbar: __webpack_require__(7).default,BaseFooter: __webpack_require__(8).default})

// CONCATENATED MODULE: ./.nuxt/App.js















const layouts = {
  "_anonymous": sanitizeComponent(anonymous),
  "_blog": sanitizeComponent(blog),
  "_create": sanitizeComponent(create),
  "_default": sanitizeComponent(layouts_default),
  "_doc": sanitizeComponent(doc),
  "_tips": sanitizeComponent(tips),
  "_trend": sanitizeComponent(trend),
  "_user": sanitizeComponent(user)
};
/* harmony default export */ var App = ({
  render(h, props) {
    const loadingEl = h('NuxtLoading', {
      ref: 'loading'
    });
    const layoutEl = h(this.layout || 'nuxt');
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [layoutEl]);
    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll');
          });
        }
      }
    }, [templateEl]);
    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [loadingEl, transitionEl]);
  },
  data: () => ({
    isOnline: true,
    layout: null,
    layoutName: '',
    nbFetching: 0
  }),
  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$options.nuxt);
  },
  created() {
    // Add this.$nuxt in child instances
    this.$root.$options.$nuxt = this;
    if (false) {}
    // Add $nuxt.error()
    this.error = this.nuxt.error;
    // Add $nuxt.context
    this.context = this.$options.context;
  },
  async mounted() {
    this.$loading = this.$refs.loading;
  },
  watch: {
    'nuxt.err': 'errorChanged'
  },
  computed: {
    isOffline() {
      return !this.isOnline;
    },
    isFetching() {
      return this.nbFetching > 0;
    }
  },
  methods: {
    refreshOnlineStatus() {
      if (false) {}
    },
    async refresh() {
      const pages = getMatchedComponentsInstances(this.$route);
      if (!pages.length) {
        return;
      }
      this.$loading.start();
      const promises = pages.map(async page => {
        let p = [];

        // Old fetch
        if (page.$options.fetch && page.$options.fetch.length) {
          p.push(promisify(page.$options.fetch, this.context));
        }
        if (page.$options.asyncData) {
          p.push(promisify(page.$options.asyncData, this.context).then(newData => {
            for (const key in newData) {
              external_vue_default.a.set(page.$data, key, newData[key]);
            }
          }));
        }

        // Wait for asyncData & old fetch to finish
        await Promise.all(p);
        // Cleanup refs
        p = [];
        if (page.$fetch) {
          p.push(page.$fetch());
        }
        // Get all component instance to call $fetch
        for (const component of getChildrenComponentInstancesUsingFetch(page.$vnode.componentInstance)) {
          p.push(component.$fetch());
        }
        return Promise.all(p);
      });
      try {
        await Promise.all(promises);
      } catch (error) {
        this.$loading.fail(error);
        globalHandleError(error);
        this.error(error);
      }
      this.$loading.finish();
    },
    errorChanged() {
      if (this.nuxt.err) {
        if (this.$loading) {
          if (this.$loading.fail) {
            this.$loading.fail(this.nuxt.err);
          }
          if (this.$loading.finish) {
            this.$loading.finish();
          }
        }
        let errorLayout = (nuxt_error.options || nuxt_error).layout;
        if (typeof errorLayout === 'function') {
          errorLayout = errorLayout(this.context);
        }
        this.nuxt.errPageReady = true;
        this.setLayout(errorLayout);
      }
    },
    setLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }
      this.layoutName = layout;
      this.layout = layouts['_' + layout];
      return this.layout;
    },
    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }
      return Promise.resolve(layouts['_' + layout]);
    }
  },
  components: {
    NuxtLoading: nuxt_loading
  }
});
// CONCATENATED MODULE: ./.nuxt/store.js


external_vue_default.a.use(external_vuex_default.a);
let store_store = {};
(function updateModules() {
  store_store = normalizeRoot(__webpack_require__(69), 'store/index.js');

  // If store is an exported method = classic mode (deprecated)

  // Enforce store modules
  store_store.modules = store_store.modules || {};

  // If the environment supports hot reloading...
})();

// createStore
const createStore = store_store instanceof Function ? store_store : () => {
  return new external_vuex_default.a.Store(Object.assign({
    strict: "production" !== 'production'
  }, store_store));
};
function normalizeRoot(moduleData, filePath) {
  moduleData = moduleData.default || moduleData;
  if (moduleData.commit) {
    throw new Error(`[nuxt] ${filePath} should export a method that returns a Vuex instance.`);
  }
  if (typeof moduleData !== 'function') {
    // Avoid TypeError: setting a property that has only a getter when overwriting top level keys
    moduleData = Object.assign({}, moduleData);
  }
  return normalizeModule(moduleData, filePath);
}
function normalizeModule(moduleData, filePath) {
  if (moduleData.state && typeof moduleData.state !== 'function') {
    console.warn(`'state' should be a method that returns an object in ${filePath}`);
    const state = Object.assign({}, moduleData.state);
    // Avoid TypeError: setting a property that has only a getter when overwriting top level keys
    moduleData = Object.assign({}, moduleData, {
      state: () => state
    });
  }
  return moduleData;
}
// CONCATENATED MODULE: ./.nuxt/components/index.js
const components_LoadingIndicator = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 2)).then(c => wrapFunctional(c.default || c));
const NavLink = () => __webpack_require__.e(/* import() | components/nav-link */ 10).then(__webpack_require__.bind(null, 161)).then(c => wrapFunctional(c.default || c));
const BaseAccordion = () => __webpack_require__.e(/* import() | components/base-accordion */ 1).then(__webpack_require__.bind(null, 162)).then(c => wrapFunctional(c.default || c));
const BaseButton = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 11)).then(c => wrapFunctional(c.default || c));
const BaseFooter = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 8)).then(c => wrapFunctional(c.default || c));
const BaseHeader = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 73)).then(c => wrapFunctional(c.default || c));
const BaseNavbar = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 7)).then(c => wrapFunctional(c.default || c));
const BaseSection = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 74)).then(c => wrapFunctional(c.default || c));
const LandingAiTrend = () => __webpack_require__.e(/* import() | components/landing-ai-trend */ 2).then(__webpack_require__.bind(null, 102)).then(c => wrapFunctional(c.default || c));
const LandingAihistory = () => __webpack_require__.e(/* import() | components/landing-aihistory */ 3).then(__webpack_require__.bind(null, 163)).then(c => wrapFunctional(c.default || c));
const LandingBlog = () => __webpack_require__.e(/* import() | components/landing-blog */ 4).then(__webpack_require__.bind(null, 81)).then(c => wrapFunctional(c.default || c));
const LandingComment = () => __webpack_require__.e(/* import() | components/landing-comment */ 5).then(__webpack_require__.bind(null, 87)).then(c => wrapFunctional(c.default || c));
const LandingExchange = () => __webpack_require__.e(/* import() | components/landing-exchange */ 6).then(__webpack_require__.bind(null, 164)).then(c => wrapFunctional(c.default || c));
const LandingListItem = () => __webpack_require__.e(/* import() | components/landing-list-item */ 7).then(__webpack_require__.bind(null, 165)).then(c => wrapFunctional(c.default || c));
const LandingOpportunity = () => __webpack_require__.e(/* import() | components/landing-opportunity */ 8).then(__webpack_require__.bind(null, 83)).then(c => wrapFunctional(c.default || c));
const LandingSearch = () => __webpack_require__.e(/* import() | components/landing-search */ 9).then(__webpack_require__.bind(null, 86)).then(c => wrapFunctional(c.default || c));
const LandingStep = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 72)).then(c => wrapFunctional(c.default || c));
const LandingTradingToolImage = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 29)).then(c => wrapFunctional(c.default || c));

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options;
  }
  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {});
  return {
    render(h) {
      const attrs = {};
      const props = {};
      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key];
        } else {
          attrs[key] = this.$attrs[key];
        }
      }
      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots
      }, this.$slots.default);
    }
  };
}
// CONCATENATED MODULE: ./.nuxt/components/plugin.js


for (const name in components_namespaceObject) {
  external_vue_default.a.component(name, components_namespaceObject[name]);
  external_vue_default.a.component('Lazy' + name, components_namespaceObject[name]);
}
// EXTERNAL MODULE: ./node_modules/@nuxt/image/node_modules/defu/dist/defu.cjs
var defu = __webpack_require__(17);
var defu_default = /*#__PURE__*/__webpack_require__.n(defu);

// EXTERNAL MODULE: ./node_modules/@nuxt/image/node_modules/ufo/dist/index.cjs
var ufo_dist = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/@nuxt/image/dist/runtime/utils/meta.js
async function imageMeta(ctx, url) {
  const cache = getCache(ctx);
  const cacheKey = "image:meta:" + url;
  if (cache.has(cacheKey)) {
    return cache.get(cacheKey);
  }
  const meta = await _imageMeta(url).catch(err => {
    console.error("Failed to get image meta for " + url, err + "");
    return {
      width: 0,
      height: 0,
      ratio: 0
    };
  });
  cache.set(cacheKey, meta);
  return meta;
}
async function _imageMeta(url) {
  if (true) {
    const imageMeta2 = await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, 79, 7)).then(r => r.default || r);
    const data = await fetch(url).then(res => res.buffer());
    const metadata = imageMeta2(data);
    if (!metadata) {
      throw new Error(`No metadata could be extracted from the image \`${url}\`.`);
    }
    const {
      width,
      height
    } = metadata;
    const meta = {
      width,
      height,
      ratio: width && height ? width / height : void 0
    };
    return meta;
  }
  if (typeof Image === "undefined") {
    throw new TypeError("Image not supported");
  }
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const meta = {
        width: img.width,
        height: img.height,
        ratio: img.width / img.height
      };
      resolve(meta);
    };
    img.onerror = err => reject(err);
    img.src = url;
  });
}
function getCache(ctx) {
  if (!ctx.nuxtContext.cache) {
    if (ctx.nuxtContext.ssrContext && ctx.nuxtContext.ssrContext.cache) {
      ctx.nuxtContext.cache = ctx.nuxtContext.ssrContext.cache;
    } else {
      const _cache = {};
      ctx.nuxtContext.cache = {
        get: id => _cache[id],
        set: (id, value) => {
          _cache[id] = value;
        },
        has: id => typeof _cache[id] !== "undefined"
      };
    }
  }
  return ctx.nuxtContext.cache;
}
// CONCATENATED MODULE: ./node_modules/@nuxt/image/dist/runtime/utils/index.js
function imageFetch(url) {
  return fetch(cleanDoubleSlashes(url));
}
function getInt(x) {
  if (typeof x === "number") {
    return x;
  }
  if (typeof x === "string") {
    return parseInt(x, 10);
  }
  return void 0;
}
function getFileExtension(url = "") {
  const extension = url.split(/[?#]/).shift().split("/").pop().split(".").pop();
  return extension;
}
function cleanDoubleSlashes(path = "") {
  return path.replace(/(https?:\/\/)|(\/)+/g, "$1$2");
}
function createMapper(map) {
  return key => {
    return key ? map[key] || key : map.missingValue;
  };
}
function createOperationsGenerator({
  formatter,
  keyMap,
  joinWith = "/",
  valueMap
} = {}) {
  if (!formatter) {
    formatter = (key, value) => `${key}=${value}`;
  }
  if (keyMap && typeof keyMap !== "function") {
    keyMap = createMapper(keyMap);
  }
  const map = valueMap || {};
  Object.keys(map).forEach(valueKey => {
    if (typeof map[valueKey] !== "function") {
      map[valueKey] = createMapper(map[valueKey]);
    }
  });
  return (modifiers = {}) => {
    const operations = Object.entries(modifiers).filter(([_, value]) => typeof value !== "undefined").map(([key, value]) => {
      const mapper = map[key];
      if (typeof mapper === "function") {
        value = mapper(modifiers[key]);
      }
      key = typeof keyMap === "function" ? keyMap(key) : key;
      return formatter(key, value);
    });
    return operations.join(joinWith);
  };
}
function renderAttributesToString(attributes = {}) {
  return Object.entries(attributes).map(([key, value]) => value ? `${key}="${value}"` : "").filter(Boolean).join(" ");
}
function renderTag(tag, attrs, contents) {
  const html = `<${tag} ${renderAttributesToString(attrs)}>`;
  if (!contents) {
    return html;
  }
  return html + contents + `</${tag}>`;
}
function generateAlt(src = "") {
  return src.split(/[?#]/).shift().split("/").pop().split(".").shift();
}
function parseSize(input = "") {
  if (typeof input === "number") {
    return input;
  }
  if (typeof input === "string") {
    if (input.replace("px", "").match(/^\d+$/g)) {
      return parseInt(input, 10);
    }
  }
}
// CONCATENATED MODULE: ./node_modules/@nuxt/image/dist/runtime/image.js





function createImage(globalOptions, nuxtContext) {
  const staticImageManifest =  false ? undefined : {};
  const ctx = {
    options: globalOptions,
    nuxtContext
  };
  const getImage = function (input, options = {}) {
    const image = resolveImage(ctx, input, options);
    if (image.isStatic) {
      handleStaticImage(image, input);
    }
    return image;
  };
  const $img = function $img2(input, modifiers = {}, options = {}) {
    return getImage(input, {
      ...options,
      modifiers: defu_default()(modifiers, options.modifiers || {})
    }).url;
  };
  function handleStaticImage(image, input) {
    if (false) { var _ssrState$data, _ssrContext$image; } else if (true) {
      image.url = input;
    }
  }
  for (const presetName in globalOptions.presets) {
    $img[presetName] = (source, modifiers, options) => $img(source, modifiers, {
      ...globalOptions.presets[presetName],
      ...options
    });
  }
  $img.options = globalOptions;
  $img.getImage = getImage;
  $img.getMeta = (input, options) => getMeta(ctx, input, options);
  $img.getSizes = (input, options) => getSizes(ctx, input, options);
  ctx.$img = $img;
  return $img;
}
async function getMeta(ctx, input, options) {
  const image = resolveImage(ctx, input, {
    ...options
  });
  if (typeof image.getMeta === "function") {
    return await image.getMeta();
  } else {
    return await imageMeta(ctx, image.url);
  }
}
function resolveImage(ctx, input, options) {
  var _options$modifiers, _options$modifiers2;
  if (typeof input !== "string" || input === "") {
    throw new TypeError(`input must be a string (received ${typeof input}: ${JSON.stringify(input)})`);
  }
  if (input.startsWith("data:")) {
    return {
      url: input
    };
  }
  const {
    provider,
    defaults
  } = getProvider(ctx, options.provider || ctx.options.provider);
  const preset = getPreset(ctx, options.preset);
  input = Object(ufo_dist["hasProtocol"])(input) ? input : Object(ufo_dist["withLeadingSlash"])(input);
  if (!provider.supportsAlias) {
    for (const base in ctx.options.alias) {
      if (input.startsWith(base)) {
        input = Object(ufo_dist["joinURL"])(ctx.options.alias[base], input.substr(base.length));
      }
    }
  }
  if (provider.validateDomains && Object(ufo_dist["hasProtocol"])(input)) {
    const inputHost = Object(ufo_dist["parseURL"])(input).host;
    if (!ctx.options.domains.find(d => d === inputHost)) {
      return {
        url: input
      };
    }
  }
  const _options = defu_default()(options, preset, defaults);
  _options.modifiers = {
    ..._options.modifiers
  };
  const expectedFormat = _options.modifiers.format;
  if ((_options$modifiers = _options.modifiers) !== null && _options$modifiers !== void 0 && _options$modifiers.width) {
    _options.modifiers.width = parseSize(_options.modifiers.width);
  }
  if ((_options$modifiers2 = _options.modifiers) !== null && _options$modifiers2 !== void 0 && _options$modifiers2.height) {
    _options.modifiers.height = parseSize(_options.modifiers.height);
  }
  const image = provider.getImage(input, _options, ctx);
  image.format = image.format || expectedFormat || "";
  return image;
}
function getProvider(ctx, name) {
  const provider = ctx.options.providers[name];
  if (!provider) {
    throw new Error("Unknown provider: " + name);
  }
  return provider;
}
function getPreset(ctx, name) {
  if (!name) {
    return {};
  }
  if (!ctx.options.presets[name]) {
    throw new Error("Unknown preset: " + name);
  }
  return ctx.options.presets[name];
}
function getSizes(ctx, input, opts) {
  var _opts$modifiers, _opts$modifiers2;
  const width = parseSize((_opts$modifiers = opts.modifiers) === null || _opts$modifiers === void 0 ? void 0 : _opts$modifiers.width);
  const height = parseSize((_opts$modifiers2 = opts.modifiers) === null || _opts$modifiers2 === void 0 ? void 0 : _opts$modifiers2.height);
  const hwRatio = width && height ? height / width : 0;
  const variants = [];
  const sizes = {};
  if (typeof opts.sizes === "string") {
    for (const entry of opts.sizes.split(/[\s,]+/).filter(e => e)) {
      const s = entry.split(":");
      if (s.length !== 2) {
        continue;
      }
      sizes[s[0].trim()] = s[1].trim();
    }
  } else {
    Object.assign(sizes, opts.sizes);
  }
  for (const key in sizes) {
    const screenMaxWidth = ctx.options.screens && ctx.options.screens[key] || parseInt(key);
    let size = String(sizes[key]);
    const isFluid = size.endsWith("vw");
    if (!isFluid && /^\d+$/.test(size)) {
      size = size + "px";
    }
    if (!isFluid && !size.endsWith("px")) {
      continue;
    }
    let _cWidth = parseInt(size);
    if (!screenMaxWidth || !_cWidth) {
      continue;
    }
    if (isFluid) {
      _cWidth = Math.round(_cWidth / 100 * screenMaxWidth);
    }
    const _cHeight = hwRatio ? Math.round(_cWidth * hwRatio) : height;
    variants.push({
      width: _cWidth,
      size,
      screenMaxWidth,
      media: `(max-width: ${screenMaxWidth}px)`,
      src: ctx.$img(input, {
        ...opts.modifiers,
        width: _cWidth,
        height: _cHeight
      }, opts)
    });
  }
  variants.sort((v1, v2) => v1.screenMaxWidth - v2.screenMaxWidth);
  const defaultVar = variants[variants.length - 1];
  if (defaultVar) {
    defaultVar.media = "";
  }
  return {
    sizes: variants.map(v => `${v.media ? v.media + " " : ""}${v.size}`).join(", "),
    srcset: variants.map(v => `${v.src} ${v.width}w`).join(", "),
    src: defaultVar === null || defaultVar === void 0 ? void 0 : defaultVar.src
  };
}
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@nuxt/image/dist/runtime/components/nuxt-img.vue?vue&type=template&id=356cdf12
var nuxt_imgvue_type_template_id_356cdf12_render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('img', _vm._g(_vm._b({
    key: _vm.nSrc,
    attrs: {
      "src": _vm.nSrc
    }
  }, 'img', _vm.nAttrs, false), _vm.$listeners), []);
};
var nuxt_imgvue_type_template_id_356cdf12_staticRenderFns = [];

// CONCATENATED MODULE: ./node_modules/@nuxt/image/dist/runtime/components/image.mixin.js

const defineMixin = opts => opts;
const imageMixin = defineMixin({
  props: {
    src: {
      type: String,
      required: true
    },
    format: {
      type: String,
      default: void 0
    },
    quality: {
      type: [Number, String],
      default: void 0
    },
    background: {
      type: String,
      default: void 0
    },
    fit: {
      type: String,
      default: void 0
    },
    modifiers: {
      type: Object,
      default: void 0
    },
    preset: {
      type: String,
      default: void 0
    },
    provider: {
      type: String,
      default: void 0
    },
    sizes: {
      type: [Object, String],
      default: void 0
    },
    preload: {
      type: Boolean,
      default: void 0
    },
    width: {
      type: [String, Number],
      default: void 0
    },
    height: {
      type: [String, Number],
      default: void 0
    },
    alt: {
      type: String,
      default: void 0
    },
    referrerpolicy: {
      type: String,
      default: void 0
    },
    usemap: {
      type: String,
      default: void 0
    },
    longdesc: {
      type: String,
      default: void 0
    },
    ismap: {
      type: Boolean,
      default: void 0
    },
    crossorigin: {
      type: [Boolean, String],
      default: void 0,
      validator: val => ["anonymous", "use-credentials", "", true, false].includes(val)
    },
    loading: {
      type: String,
      default: void 0
    },
    decoding: {
      type: String,
      default: void 0,
      validator: val => ["async", "auto", "sync"].includes(val)
    }
  },
  computed: {
    nImgAttrs() {
      return {
        width: parseSize(this.width),
        height: parseSize(this.height),
        alt: this.alt,
        referrerpolicy: this.referrerpolicy,
        usemap: this.usemap,
        longdesc: this.longdesc,
        ismap: this.ismap,
        crossorigin: this.crossorigin === true ? "anonymous" : this.crossorigin || void 0,
        loading: this.loading,
        decoding: this.decoding
      };
    },
    nModifiers() {
      return {
        ...this.modifiers,
        width: parseSize(this.width),
        height: parseSize(this.height),
        format: this.format,
        quality: this.quality,
        background: this.background,
        fit: this.fit
      };
    },
    nOptions() {
      return {
        provider: this.provider,
        preset: this.preset
      };
    }
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@nuxt/image/dist/runtime/components/nuxt-img.vue?vue&type=script&lang=js


const defineComponent = opts => opts;
/* harmony default export */ var nuxt_imgvue_type_script_lang_js = (defineComponent({
  name: "NuxtImg",
  mixins: [imageMixin],
  head() {
    if (this.preload === true) {
      return {
        link: [{
          rel: "preload",
          as: "image",
          href: this.nSrc
        }]
      };
    }
  },
  computed: {
    nAttrs() {
      const attrs = this.nImgAttrs;
      if (this.sizes) {
        const {
          sizes,
          srcset
        } = this.nSizes;
        attrs.sizes = sizes;
        attrs.srcset = srcset;
      }
      return attrs;
    },
    nSrc() {
      return this.sizes ? this.nSizes.src : this.$img(this.src, this.nModifiers, this.nOptions);
    },
    nSizes() {
      return this.$img.getSizes(this.src, {
        ...this.nOptions,
        sizes: this.sizes,
        modifiers: {
          ...this.nModifiers,
          width: parseSize(this.width),
          height: parseSize(this.height)
        }
      });
    }
  },
  created() {
    if (false) {}
  }
}));
// CONCATENATED MODULE: ./node_modules/@nuxt/image/dist/runtime/components/nuxt-img.vue?vue&type=script&lang=js
 /* harmony default export */ var components_nuxt_imgvue_type_script_lang_js = (nuxt_imgvue_type_script_lang_js); 
// CONCATENATED MODULE: ./node_modules/@nuxt/image/dist/runtime/components/nuxt-img.vue





/* normalize component */

var nuxt_img_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_imgvue_type_script_lang_js,
  nuxt_imgvue_type_template_id_356cdf12_render,
  nuxt_imgvue_type_template_id_356cdf12_staticRenderFns,
  false,
  null,
  null,
  "0a3e0714"
  
)

/* harmony default export */ var nuxt_img = (nuxt_img_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@nuxt/image/dist/runtime/components/nuxt-picture.vue?vue&type=template&id=88bec26c
var nuxt_picturevue_type_template_id_88bec26c_render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('picture', {
    key: _vm.nSources[0].src
  }, [_vm._ssrNode((_vm.nSources[1] ? "<source" + _vm._ssrAttr("type", _vm.nSources[1].type) + _vm._ssrAttr("srcset", _vm.nSources[1].srcset) + _vm._ssrAttr("sizes", _vm.nSources[1].sizes) + ">" : "<!---->") + " <img" + _vm._ssrAttr("src", _vm.nSources[0].src) + _vm._ssrAttr("srcset", _vm.nSources[0].srcset) + _vm._ssrAttr("sizes", _vm.nSources[0].sizes) + _vm._ssrAttrs({
    ..._vm.nImgAttrs,
    ..._vm.imgAttrs
  }) + ">")]);
};
var nuxt_picturevue_type_template_id_88bec26c_staticRenderFns = [];

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@nuxt/image/dist/runtime/components/nuxt-picture.vue?vue&type=script&lang=js


const nuxt_picturevue_type_script_lang_js_defineComponent = opts => opts;
/* harmony default export */ var nuxt_picturevue_type_script_lang_js = (nuxt_picturevue_type_script_lang_js_defineComponent({
  name: "NuxtPicture",
  mixins: [imageMixin],
  props: {
    legacyFormat: {
      type: String,
      default: null
    },
    imgAttrs: {
      type: Object,
      default: null
    }
  },
  head() {
    if (this.preload === true) {
      const srcKey = typeof this.nSources[1] !== "undefined" ? 1 : 0;
      const link = {
        rel: "preload",
        as: "image",
        imagesrcset: this.nSources[srcKey].srcset
      };
      if (typeof this.nSources[srcKey].sizes !== "undefined") {
        link.imagesizes = this.nSources[srcKey].sizes;
      }
      return {
        link: [link]
      };
    }
  },
  computed: {
    isTransparent() {
      return ["png", "webp", "gif"].includes(this.originalFormat);
    },
    originalFormat() {
      return getFileExtension(this.src);
    },
    nFormat() {
      if (this.format) {
        return this.format;
      }
      if (this.originalFormat === "svg") {
        return "svg";
      }
      return "webp";
    },
    nLegacyFormat() {
      if (this.legacyFormat) {
        return this.legacyFormat;
      }
      const formats = {
        webp: this.isTransparent ? "png" : "jpeg",
        svg: "png"
      };
      return formats[this.nFormat] || this.originalFormat;
    },
    nSources() {
      if (this.nFormat === "svg") {
        return [{
          srcset: this.src
        }];
      }
      const formats = this.nLegacyFormat !== this.nFormat ? [this.nLegacyFormat, this.nFormat] : [this.nFormat];
      const sources = formats.map(format => {
        const {
          srcset,
          sizes,
          src
        } = this.$img.getSizes(this.src, {
          ...this.nOptions,
          sizes: this.sizes || this.$img.options.screens,
          modifiers: {
            ...this.nModifiers,
            format
          }
        });
        return {
          src,
          type: `image/${format}`,
          sizes,
          srcset
        };
      });
      return sources;
    }
  },
  created() {
    if (false) {}
  }
}));
// CONCATENATED MODULE: ./node_modules/@nuxt/image/dist/runtime/components/nuxt-picture.vue?vue&type=script&lang=js
 /* harmony default export */ var components_nuxt_picturevue_type_script_lang_js = (nuxt_picturevue_type_script_lang_js); 
// CONCATENATED MODULE: ./node_modules/@nuxt/image/dist/runtime/components/nuxt-picture.vue





/* normalize component */

var nuxt_picture_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_picturevue_type_script_lang_js,
  nuxt_picturevue_type_template_id_88bec26c_render,
  nuxt_picturevue_type_template_id_88bec26c_staticRenderFns,
  false,
  null,
  null,
  "e3a1329e"
  
)

/* harmony default export */ var nuxt_picture = (nuxt_picture_component.exports);
// CONCATENATED MODULE: ./node_modules/@nuxt/image/dist/runtime/providers/ipx.js


const operationsGenerator = createOperationsGenerator({
  keyMap: {
    format: "f",
    fit: "fit",
    width: "w",
    height: "h",
    resize: "s",
    quality: "q",
    background: "b"
  },
  joinWith: ",",
  formatter: (key, val) => Object(ufo_dist["encodeParam"])(key) + "_" + Object(ufo_dist["encodeParam"])(val)
});
const ipx_getImage = (src, {
  modifiers = {},
  baseURL = "/_ipx"
} = {}, {
  nuxtContext: {
    base: nuxtBase = "/"
  } = {}
}) => {
  if (modifiers.width && modifiers.height) {
    modifiers.resize = `${modifiers.width}x${modifiers.height}`;
    delete modifiers.width;
    delete modifiers.height;
  }
  const params = operationsGenerator(modifiers) || "_";
  return {
    url: Object(ufo_dist["joinURL"])(nuxtBase, baseURL, params, Object(ufo_dist["encodePath"])(src))
  };
};
const validateDomains = true;
const supportsAlias = true;
// CONCATENATED MODULE: ./node_modules/@nuxt/image/dist/runtime/providers/static.js

const static_getImage = (src, options, ctx) => ({
  ...ipx_getImage(src, options, ctx),
  isStatic: true
});
const static_supportsAlias = true;
// CONCATENATED MODULE: ./.nuxt/image.js






const imageOptions = {
  "screens": {
    "xs": 320,
    "sm": 640,
    "md": 768,
    "lg": 1024,
    "xl": 1280,
    "xxl": 1536,
    "2xl": 1536
  },
  "presets": {
    "default": {
      "loading": "lazy",
      "format": "auto",
      "quality": 50,
      "placeholder": "blur"
    }
  },
  "provider": "ipx",
  "domains": ["*"],
  "alias": {}
};
imageOptions.providers = {
  ['static']: {
    provider: static_namespaceObject,
    defaults: {}
  },
  ['ipx']: {
    provider: ipx_namespaceObject,
    defaults: {}
  }
};
external_vue_default.a.component(nuxt_img.name, nuxt_img);
external_vue_default.a.component(nuxt_picture.name, nuxt_picture);
external_vue_default.a.component('NImg', nuxt_img);
external_vue_default.a.component('NPicture', nuxt_picture);
/* harmony default export */ var _nuxt_image = (function (nuxtContext, inject) {
  const $img = createImage(imageOptions, nuxtContext);
  if (false) {}
  inject('img', $img);
});
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(10);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: ./node_modules/defu/lib/defu.cjs
var lib_defu = __webpack_require__(33);
var lib_defu_default = /*#__PURE__*/__webpack_require__.n(lib_defu);

// CONCATENATED MODULE: ./.nuxt/axios.js



// Axios.prototype cannot be modified
const axiosExtra = {
  setBaseURL(baseURL) {
    this.defaults.baseURL = baseURL;
  },
  setHeader(name, value, scopes = 'common') {
    for (const scope of Array.isArray(scopes) ? scopes : [scopes]) {
      if (!value) {
        delete this.defaults.headers[scope][name];
        continue;
      }
      this.defaults.headers[scope][name] = value;
    }
  },
  setToken(token, type, scopes = 'common') {
    const value = !token ? null : (type ? type + ' ' : '') + token;
    this.setHeader('Authorization', value, scopes);
  },
  onRequest(fn) {
    this.interceptors.request.use(config => fn(config) || config);
  },
  onResponse(fn) {
    this.interceptors.response.use(response => fn(response) || response);
  },
  onRequestError(fn) {
    this.interceptors.request.use(undefined, error => fn(error) || Promise.reject(error));
  },
  onResponseError(fn) {
    this.interceptors.response.use(undefined, error => fn(error) || Promise.reject(error));
  },
  onError(fn) {
    this.onRequestError(fn);
    this.onResponseError(fn);
  },
  create(options) {
    return createAxiosInstance(lib_defu_default()(options, this.defaults));
  }
};

// Request helpers ($get, $post, ...)
for (const method of ['request', 'delete', 'get', 'head', 'options', 'post', 'put', 'patch']) {
  axiosExtra['$' + method] = function () {
    return this[method].apply(this, arguments).then(res => res && res.data);
  };
}
const extendAxiosInstance = axios => {
  for (const key in axiosExtra) {
    axios[key] = axiosExtra[key].bind(axios);
  }
};
const createAxiosInstance = axiosOptions => {
  // Create new axios instance
  const axios = external_axios_default.a.create(axiosOptions);
  axios.CancelToken = external_axios_default.a.CancelToken;
  axios.isCancel = external_axios_default.a.isCancel;

  // Extend axios proto
  extendAxiosInstance(axios);

  // Intercept to apply default headers
  axios.onRequest(config => {
    config.headers = {
      ...axios.defaults.headers.common,
      ...config.headers
    };
  });

  // Setup interceptors

  setupProgress(axios);
  return axios;
};
const setupProgress = axios => {
  if (true) {
    return;
  }

  // A noop loading inteterface for when $nuxt is not yet ready
  const noopLoading = {
    finish: () => {},
    start: () => {},
    fail: () => {},
    set: () => {}
  };
  const $loading = () => {
    const $nuxt = typeof window !== 'undefined' && window['$nuxt'];
    return $nuxt && $nuxt.$loading && $nuxt.$loading.set ? $nuxt.$loading : noopLoading;
  };
  let currentRequests = 0;
  axios.onRequest(config => {
    if (config && config.progress === false) {
      return;
    }
    currentRequests++;
  });
  axios.onResponse(response => {
    if (response && response.config && response.config.progress === false) {
      return;
    }
    currentRequests--;
    if (currentRequests <= 0) {
      currentRequests = 0;
      $loading().finish();
    }
  });
  axios.onError(error => {
    if (error && error.config && error.config.progress === false) {
      return;
    }
    currentRequests--;
    if (external_axios_default.a.isCancel(error)) {
      if (currentRequests <= 0) {
        currentRequests = 0;
        $loading().finish();
      }
      return;
    }
    $loading().fail();
    $loading().finish();
  });
  const onProgress = e => {
    if (!currentRequests || !e.total) {
      return;
    }
    const progress = e.loaded * 100 / (e.total * currentRequests);
    $loading().set(Math.min(100, progress));
  };
  axios.defaults.onUploadProgress = onProgress;
  axios.defaults.onDownloadProgress = onProgress;
};
/* harmony default export */ var _nuxt_axios = ((ctx, inject) => {
  // runtimeConfig
  const runtimeConfig = ctx.$config && ctx.$config.axios || {};
  // baseURL
  const baseURL =  false ? undefined : runtimeConfig.baseURL || runtimeConfig.baseUrl || process.env._AXIOS_BASE_URL_ || 'https://api.beatexpertise.com/api';

  // Create fresh objects for all default header scopes
  // Axios creates only one which is shared across SSR requests!
  // https://github.com/mzabriskie/axios/blob/master/lib/defaults.js
  const headers = {
    "common": {
      "Accept": "application/json, text/plain, */*"
    },
    "delete": {},
    "get": {},
    "head": {},
    "post": {},
    "put": {},
    "patch": {}
  };
  const axiosOptions = {
    baseURL,
    headers
  };

  // Proxy SSR request headers headers
  if ( true && ctx.req && ctx.req.headers) {
    const reqHeaders = {
      ...ctx.req.headers
    };
    for (const h of ["accept", "cf-connecting-ip", "cf-ray", "content-length", "content-md5", "content-type", "host", "x-forwarded-host", "x-forwarded-port", "x-forwarded-proto"]) {
      delete reqHeaders[h];
    }
    axiosOptions.headers.common = {
      ...reqHeaders,
      ...axiosOptions.headers.common
    };
  }
  if (true) {
    // Don't accept brotli encoding because Node can't parse it
    axiosOptions.headers.common['accept-encoding'] = 'gzip, deflate';
  }
  const axios = createAxiosInstance(axiosOptions);

  // Inject axios to the context as $axios
  ctx.$axios = axios;
  inject('axios', axios);
});
// EXTERNAL MODULE: external "vue2-smooth-scroll"
var external_vue2_smooth_scroll_ = __webpack_require__(34);
var external_vue2_smooth_scroll_default = /*#__PURE__*/__webpack_require__.n(external_vue2_smooth_scroll_);

// CONCATENATED MODULE: ./plugins/smooth-scroll.js


external_vue_default.a.use(external_vue2_smooth_scroll_default.a);
/* harmony default export */ var smooth_scroll = ({});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-material-design-icons/ChevronDown.vue?vue&type=template&id=ec7aad58
var ChevronDownvue_type_template_id_ec7aad58_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('span', _vm._b({
    staticClass: "material-design-icon chevron-down-icon",
    attrs: {
      "aria-hidden": _vm.title ? null : 'true',
      "aria-label": _vm.title,
      "role": "img"
    },
    on: {
      "click": function ($event) {
        return _vm.$emit('click', $event);
      }
    }
  }, 'span', _vm.$attrs, false), [_vm._ssrNode("<svg" + _vm._ssrAttr("fill", _vm.fillColor) + _vm._ssrAttr("width", _vm.size) + _vm._ssrAttr("height", _vm.size) + " viewBox=\"0 0 24 24\" class=\"material-design-icon__svg\"><path d=\"M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z\">" + (_vm.title ? "<title>" + _vm._ssrEscape(_vm._s(_vm.title)) + "</title>" : "<!---->") + "</path></svg>")]);
};
var ChevronDownvue_type_template_id_ec7aad58_staticRenderFns = [];

// CONCATENATED MODULE: ./node_modules/vue-material-design-icons/ChevronDown.vue?vue&type=template&id=ec7aad58

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-material-design-icons/ChevronDown.vue?vue&type=script&lang=js
/* harmony default export */ var ChevronDownvue_type_script_lang_js = ({
  name: "ChevronDownIcon",
  emits: ['click'],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-material-design-icons/ChevronDown.vue?vue&type=script&lang=js
 /* harmony default export */ var vue_material_design_icons_ChevronDownvue_type_script_lang_js = (ChevronDownvue_type_script_lang_js); 
// CONCATENATED MODULE: ./node_modules/vue-material-design-icons/ChevronDown.vue





/* normalize component */

var ChevronDown_component = Object(componentNormalizer["a" /* default */])(
  vue_material_design_icons_ChevronDownvue_type_script_lang_js,
  ChevronDownvue_type_template_id_ec7aad58_render,
  ChevronDownvue_type_template_id_ec7aad58_staticRenderFns,
  false,
  null,
  null,
  "0c100c38"
  
)

/* harmony default export */ var ChevronDown = (ChevronDown_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-material-design-icons/ChevronUp.vue?vue&type=template&id=3a5cfa88
var ChevronUpvue_type_template_id_3a5cfa88_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('span', _vm._b({
    staticClass: "material-design-icon chevron-up-icon",
    attrs: {
      "aria-hidden": _vm.title ? null : 'true',
      "aria-label": _vm.title,
      "role": "img"
    },
    on: {
      "click": function ($event) {
        return _vm.$emit('click', $event);
      }
    }
  }, 'span', _vm.$attrs, false), [_vm._ssrNode("<svg" + _vm._ssrAttr("fill", _vm.fillColor) + _vm._ssrAttr("width", _vm.size) + _vm._ssrAttr("height", _vm.size) + " viewBox=\"0 0 24 24\" class=\"material-design-icon__svg\"><path d=\"M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z\">" + (_vm.title ? "<title>" + _vm._ssrEscape(_vm._s(_vm.title)) + "</title>" : "<!---->") + "</path></svg>")]);
};
var ChevronUpvue_type_template_id_3a5cfa88_staticRenderFns = [];

// CONCATENATED MODULE: ./node_modules/vue-material-design-icons/ChevronUp.vue?vue&type=template&id=3a5cfa88

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-material-design-icons/ChevronUp.vue?vue&type=script&lang=js
/* harmony default export */ var ChevronUpvue_type_script_lang_js = ({
  name: "ChevronUpIcon",
  emits: ['click'],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-material-design-icons/ChevronUp.vue?vue&type=script&lang=js
 /* harmony default export */ var vue_material_design_icons_ChevronUpvue_type_script_lang_js = (ChevronUpvue_type_script_lang_js); 
// CONCATENATED MODULE: ./node_modules/vue-material-design-icons/ChevronUp.vue





/* normalize component */

var ChevronUp_component = Object(componentNormalizer["a" /* default */])(
  vue_material_design_icons_ChevronUpvue_type_script_lang_js,
  ChevronUpvue_type_template_id_3a5cfa88_render,
  ChevronUpvue_type_template_id_3a5cfa88_staticRenderFns,
  false,
  null,
  null,
  "f65bbc46"
  
)

/* harmony default export */ var ChevronUp = (ChevronUp_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-material-design-icons/ChevronRight.vue?vue&type=template&id=569d73aa
var ChevronRightvue_type_template_id_569d73aa_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('span', _vm._b({
    staticClass: "material-design-icon chevron-right-icon",
    attrs: {
      "aria-hidden": _vm.title ? null : 'true',
      "aria-label": _vm.title,
      "role": "img"
    },
    on: {
      "click": function ($event) {
        return _vm.$emit('click', $event);
      }
    }
  }, 'span', _vm.$attrs, false), [_vm._ssrNode("<svg" + _vm._ssrAttr("fill", _vm.fillColor) + _vm._ssrAttr("width", _vm.size) + _vm._ssrAttr("height", _vm.size) + " viewBox=\"0 0 24 24\" class=\"material-design-icon__svg\"><path d=\"M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z\">" + (_vm.title ? "<title>" + _vm._ssrEscape(_vm._s(_vm.title)) + "</title>" : "<!---->") + "</path></svg>")]);
};
var ChevronRightvue_type_template_id_569d73aa_staticRenderFns = [];

// CONCATENATED MODULE: ./node_modules/vue-material-design-icons/ChevronRight.vue?vue&type=template&id=569d73aa

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-material-design-icons/ChevronRight.vue?vue&type=script&lang=js
/* harmony default export */ var ChevronRightvue_type_script_lang_js = ({
  name: "ChevronRightIcon",
  emits: ['click'],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-material-design-icons/ChevronRight.vue?vue&type=script&lang=js
 /* harmony default export */ var vue_material_design_icons_ChevronRightvue_type_script_lang_js = (ChevronRightvue_type_script_lang_js); 
// CONCATENATED MODULE: ./node_modules/vue-material-design-icons/ChevronRight.vue





/* normalize component */

var ChevronRight_component = Object(componentNormalizer["a" /* default */])(
  vue_material_design_icons_ChevronRightvue_type_script_lang_js,
  ChevronRightvue_type_template_id_569d73aa_render,
  ChevronRightvue_type_template_id_569d73aa_staticRenderFns,
  false,
  null,
  null,
  "c6d18f6c"
  
)

/* harmony default export */ var ChevronRight = (ChevronRight_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-material-design-icons/PlusThick.vue?vue&type=template&id=9f167876
var PlusThickvue_type_template_id_9f167876_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('span', _vm._b({
    staticClass: "material-design-icon plus-thick-icon",
    attrs: {
      "aria-hidden": _vm.title ? null : 'true',
      "aria-label": _vm.title,
      "role": "img"
    },
    on: {
      "click": function ($event) {
        return _vm.$emit('click', $event);
      }
    }
  }, 'span', _vm.$attrs, false), [_vm._ssrNode("<svg" + _vm._ssrAttr("fill", _vm.fillColor) + _vm._ssrAttr("width", _vm.size) + _vm._ssrAttr("height", _vm.size) + " viewBox=\"0 0 24 24\" class=\"material-design-icon__svg\"><path d=\"M20 14H14V20H10V14H4V10H10V4H14V10H20V14Z\">" + (_vm.title ? "<title>" + _vm._ssrEscape(_vm._s(_vm.title)) + "</title>" : "<!---->") + "</path></svg>")]);
};
var PlusThickvue_type_template_id_9f167876_staticRenderFns = [];

// CONCATENATED MODULE: ./node_modules/vue-material-design-icons/PlusThick.vue?vue&type=template&id=9f167876

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-material-design-icons/PlusThick.vue?vue&type=script&lang=js
/* harmony default export */ var PlusThickvue_type_script_lang_js = ({
  name: "PlusThickIcon",
  emits: ['click'],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-material-design-icons/PlusThick.vue?vue&type=script&lang=js
 /* harmony default export */ var vue_material_design_icons_PlusThickvue_type_script_lang_js = (PlusThickvue_type_script_lang_js); 
// CONCATENATED MODULE: ./node_modules/vue-material-design-icons/PlusThick.vue





/* normalize component */

var PlusThick_component = Object(componentNormalizer["a" /* default */])(
  vue_material_design_icons_PlusThickvue_type_script_lang_js,
  PlusThickvue_type_template_id_9f167876_render,
  PlusThickvue_type_template_id_9f167876_staticRenderFns,
  false,
  null,
  null,
  "099fe34a"
  
)

/* harmony default export */ var PlusThick = (PlusThick_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-material-design-icons/MinusThick.vue?vue&type=template&id=0e67ec64
var MinusThickvue_type_template_id_0e67ec64_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('span', _vm._b({
    staticClass: "material-design-icon minus-thick-icon",
    attrs: {
      "aria-hidden": _vm.title ? null : 'true',
      "aria-label": _vm.title,
      "role": "img"
    },
    on: {
      "click": function ($event) {
        return _vm.$emit('click', $event);
      }
    }
  }, 'span', _vm.$attrs, false), [_vm._ssrNode("<svg" + _vm._ssrAttr("fill", _vm.fillColor) + _vm._ssrAttr("width", _vm.size) + _vm._ssrAttr("height", _vm.size) + " viewBox=\"0 0 24 24\" class=\"material-design-icon__svg\"><path d=\"M20 14H4V10H20\">" + (_vm.title ? "<title>" + _vm._ssrEscape(_vm._s(_vm.title)) + "</title>" : "<!---->") + "</path></svg>")]);
};
var MinusThickvue_type_template_id_0e67ec64_staticRenderFns = [];

// CONCATENATED MODULE: ./node_modules/vue-material-design-icons/MinusThick.vue?vue&type=template&id=0e67ec64

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-material-design-icons/MinusThick.vue?vue&type=script&lang=js
/* harmony default export */ var MinusThickvue_type_script_lang_js = ({
  name: "MinusThickIcon",
  emits: ['click'],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-material-design-icons/MinusThick.vue?vue&type=script&lang=js
 /* harmony default export */ var vue_material_design_icons_MinusThickvue_type_script_lang_js = (MinusThickvue_type_script_lang_js); 
// CONCATENATED MODULE: ./node_modules/vue-material-design-icons/MinusThick.vue





/* normalize component */

var MinusThick_component = Object(componentNormalizer["a" /* default */])(
  vue_material_design_icons_MinusThickvue_type_script_lang_js,
  MinusThickvue_type_template_id_0e67ec64_render,
  MinusThickvue_type_template_id_0e67ec64_staticRenderFns,
  false,
  null,
  null,
  "77cc52f6"
  
)

/* harmony default export */ var MinusThick = (MinusThick_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-material-design-icons/ArrowUp.vue?vue&type=template&id=94c28324
var ArrowUpvue_type_template_id_94c28324_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('span', _vm._b({
    staticClass: "material-design-icon arrow-up-icon",
    attrs: {
      "aria-hidden": _vm.title ? null : 'true',
      "aria-label": _vm.title,
      "role": "img"
    },
    on: {
      "click": function ($event) {
        return _vm.$emit('click', $event);
      }
    }
  }, 'span', _vm.$attrs, false), [_vm._ssrNode("<svg" + _vm._ssrAttr("fill", _vm.fillColor) + _vm._ssrAttr("width", _vm.size) + _vm._ssrAttr("height", _vm.size) + " viewBox=\"0 0 24 24\" class=\"material-design-icon__svg\"><path d=\"M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z\">" + (_vm.title ? "<title>" + _vm._ssrEscape(_vm._s(_vm.title)) + "</title>" : "<!---->") + "</path></svg>")]);
};
var ArrowUpvue_type_template_id_94c28324_staticRenderFns = [];

// CONCATENATED MODULE: ./node_modules/vue-material-design-icons/ArrowUp.vue?vue&type=template&id=94c28324

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-material-design-icons/ArrowUp.vue?vue&type=script&lang=js
/* harmony default export */ var ArrowUpvue_type_script_lang_js = ({
  name: "ArrowUpIcon",
  emits: ['click'],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-material-design-icons/ArrowUp.vue?vue&type=script&lang=js
 /* harmony default export */ var vue_material_design_icons_ArrowUpvue_type_script_lang_js = (ArrowUpvue_type_script_lang_js); 
// CONCATENATED MODULE: ./node_modules/vue-material-design-icons/ArrowUp.vue





/* normalize component */

var ArrowUp_component = Object(componentNormalizer["a" /* default */])(
  vue_material_design_icons_ArrowUpvue_type_script_lang_js,
  ArrowUpvue_type_template_id_94c28324_render,
  ArrowUpvue_type_template_id_94c28324_staticRenderFns,
  false,
  null,
  null,
  "0a7aaceb"
  
)

/* harmony default export */ var ArrowUp = (ArrowUp_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-material-design-icons/ArrowRight.vue?vue&type=template&id=1456144e
var ArrowRightvue_type_template_id_1456144e_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('span', _vm._b({
    staticClass: "material-design-icon arrow-right-icon",
    attrs: {
      "aria-hidden": _vm.title ? null : 'true',
      "aria-label": _vm.title,
      "role": "img"
    },
    on: {
      "click": function ($event) {
        return _vm.$emit('click', $event);
      }
    }
  }, 'span', _vm.$attrs, false), [_vm._ssrNode("<svg" + _vm._ssrAttr("fill", _vm.fillColor) + _vm._ssrAttr("width", _vm.size) + _vm._ssrAttr("height", _vm.size) + " viewBox=\"0 0 24 24\" class=\"material-design-icon__svg\"><path d=\"M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z\">" + (_vm.title ? "<title>" + _vm._ssrEscape(_vm._s(_vm.title)) + "</title>" : "<!---->") + "</path></svg>")]);
};
var ArrowRightvue_type_template_id_1456144e_staticRenderFns = [];

// CONCATENATED MODULE: ./node_modules/vue-material-design-icons/ArrowRight.vue?vue&type=template&id=1456144e

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-material-design-icons/ArrowRight.vue?vue&type=script&lang=js
/* harmony default export */ var ArrowRightvue_type_script_lang_js = ({
  name: "ArrowRightIcon",
  emits: ['click'],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-material-design-icons/ArrowRight.vue?vue&type=script&lang=js
 /* harmony default export */ var vue_material_design_icons_ArrowRightvue_type_script_lang_js = (ArrowRightvue_type_script_lang_js); 
// CONCATENATED MODULE: ./node_modules/vue-material-design-icons/ArrowRight.vue





/* normalize component */

var ArrowRight_component = Object(componentNormalizer["a" /* default */])(
  vue_material_design_icons_ArrowRightvue_type_script_lang_js,
  ArrowRightvue_type_template_id_1456144e_render,
  ArrowRightvue_type_template_id_1456144e_staticRenderFns,
  false,
  null,
  null,
  "d5b5ab08"
  
)

/* harmony default export */ var ArrowRight = (ArrowRight_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-material-design-icons/CheckCircle.vue?vue&type=template&id=60d94ca3
var CheckCirclevue_type_template_id_60d94ca3_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('span', _vm._b({
    staticClass: "material-design-icon check-circle-icon",
    attrs: {
      "aria-hidden": _vm.title ? null : 'true',
      "aria-label": _vm.title,
      "role": "img"
    },
    on: {
      "click": function ($event) {
        return _vm.$emit('click', $event);
      }
    }
  }, 'span', _vm.$attrs, false), [_vm._ssrNode("<svg" + _vm._ssrAttr("fill", _vm.fillColor) + _vm._ssrAttr("width", _vm.size) + _vm._ssrAttr("height", _vm.size) + " viewBox=\"0 0 24 24\" class=\"material-design-icon__svg\"><path d=\"M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z\">" + (_vm.title ? "<title>" + _vm._ssrEscape(_vm._s(_vm.title)) + "</title>" : "<!---->") + "</path></svg>")]);
};
var CheckCirclevue_type_template_id_60d94ca3_staticRenderFns = [];

// CONCATENATED MODULE: ./node_modules/vue-material-design-icons/CheckCircle.vue?vue&type=template&id=60d94ca3

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-material-design-icons/CheckCircle.vue?vue&type=script&lang=js
/* harmony default export */ var CheckCirclevue_type_script_lang_js = ({
  name: "CheckCircleIcon",
  emits: ['click'],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-material-design-icons/CheckCircle.vue?vue&type=script&lang=js
 /* harmony default export */ var vue_material_design_icons_CheckCirclevue_type_script_lang_js = (CheckCirclevue_type_script_lang_js); 
// CONCATENATED MODULE: ./node_modules/vue-material-design-icons/CheckCircle.vue





/* normalize component */

var CheckCircle_component = Object(componentNormalizer["a" /* default */])(
  vue_material_design_icons_CheckCirclevue_type_script_lang_js,
  CheckCirclevue_type_template_id_60d94ca3_render,
  CheckCirclevue_type_template_id_60d94ca3_staticRenderFns,
  false,
  null,
  null,
  "e00d4a42"
  
)

/* harmony default export */ var CheckCircle = (CheckCircle_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-material-design-icons/Segment.vue?vue&type=template&id=122aa6c0
var Segmentvue_type_template_id_122aa6c0_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('span', _vm._b({
    staticClass: "material-design-icon segment-icon",
    attrs: {
      "aria-hidden": _vm.title ? null : 'true',
      "aria-label": _vm.title,
      "role": "img"
    },
    on: {
      "click": function ($event) {
        return _vm.$emit('click', $event);
      }
    }
  }, 'span', _vm.$attrs, false), [_vm._ssrNode("<svg" + _vm._ssrAttr("fill", _vm.fillColor) + _vm._ssrAttr("width", _vm.size) + _vm._ssrAttr("height", _vm.size) + " viewBox=\"0 0 24 24\" class=\"material-design-icon__svg\"><path d=\"M21,8H3V6H21M9,13H21V11H9M9,18H21V16H9\">" + (_vm.title ? "<title>" + _vm._ssrEscape(_vm._s(_vm.title)) + "</title>" : "<!---->") + "</path></svg>")]);
};
var Segmentvue_type_template_id_122aa6c0_staticRenderFns = [];

// CONCATENATED MODULE: ./node_modules/vue-material-design-icons/Segment.vue?vue&type=template&id=122aa6c0

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-material-design-icons/Segment.vue?vue&type=script&lang=js
/* harmony default export */ var Segmentvue_type_script_lang_js = ({
  name: "SegmentIcon",
  emits: ['click'],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-material-design-icons/Segment.vue?vue&type=script&lang=js
 /* harmony default export */ var vue_material_design_icons_Segmentvue_type_script_lang_js = (Segmentvue_type_script_lang_js); 
// CONCATENATED MODULE: ./node_modules/vue-material-design-icons/Segment.vue





/* normalize component */

var Segment_component = Object(componentNormalizer["a" /* default */])(
  vue_material_design_icons_Segmentvue_type_script_lang_js,
  Segmentvue_type_template_id_122aa6c0_render,
  Segmentvue_type_template_id_122aa6c0_staticRenderFns,
  false,
  null,
  null,
  "5ed2bc1a"
  
)

/* harmony default export */ var Segment = (Segment_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-material-design-icons/Close.vue?vue&type=template&id=55ecc995
var Closevue_type_template_id_55ecc995_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('span', _vm._b({
    staticClass: "material-design-icon close-icon",
    attrs: {
      "aria-hidden": _vm.title ? null : 'true',
      "aria-label": _vm.title,
      "role": "img"
    },
    on: {
      "click": function ($event) {
        return _vm.$emit('click', $event);
      }
    }
  }, 'span', _vm.$attrs, false), [_vm._ssrNode("<svg" + _vm._ssrAttr("fill", _vm.fillColor) + _vm._ssrAttr("width", _vm.size) + _vm._ssrAttr("height", _vm.size) + " viewBox=\"0 0 24 24\" class=\"material-design-icon__svg\"><path d=\"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z\">" + (_vm.title ? "<title>" + _vm._ssrEscape(_vm._s(_vm.title)) + "</title>" : "<!---->") + "</path></svg>")]);
};
var Closevue_type_template_id_55ecc995_staticRenderFns = [];

// CONCATENATED MODULE: ./node_modules/vue-material-design-icons/Close.vue?vue&type=template&id=55ecc995

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-material-design-icons/Close.vue?vue&type=script&lang=js
/* harmony default export */ var Closevue_type_script_lang_js = ({
  name: "CloseIcon",
  emits: ['click'],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-material-design-icons/Close.vue?vue&type=script&lang=js
 /* harmony default export */ var vue_material_design_icons_Closevue_type_script_lang_js = (Closevue_type_script_lang_js); 
// CONCATENATED MODULE: ./node_modules/vue-material-design-icons/Close.vue





/* normalize component */

var Close_component = Object(componentNormalizer["a" /* default */])(
  vue_material_design_icons_Closevue_type_script_lang_js,
  Closevue_type_template_id_55ecc995_render,
  Closevue_type_template_id_55ecc995_staticRenderFns,
  false,
  null,
  null,
  "73f08fc2"
  
)

/* harmony default export */ var Close = (Close_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-material-design-icons/Account.vue?vue&type=template&id=9e9343b4
var Accountvue_type_template_id_9e9343b4_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('span', _vm._b({
    staticClass: "material-design-icon account-icon",
    attrs: {
      "aria-hidden": _vm.title ? null : 'true',
      "aria-label": _vm.title,
      "role": "img"
    },
    on: {
      "click": function ($event) {
        return _vm.$emit('click', $event);
      }
    }
  }, 'span', _vm.$attrs, false), [_vm._ssrNode("<svg" + _vm._ssrAttr("fill", _vm.fillColor) + _vm._ssrAttr("width", _vm.size) + _vm._ssrAttr("height", _vm.size) + " viewBox=\"0 0 24 24\" class=\"material-design-icon__svg\"><path d=\"M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z\">" + (_vm.title ? "<title>" + _vm._ssrEscape(_vm._s(_vm.title)) + "</title>" : "<!---->") + "</path></svg>")]);
};
var Accountvue_type_template_id_9e9343b4_staticRenderFns = [];

// CONCATENATED MODULE: ./node_modules/vue-material-design-icons/Account.vue?vue&type=template&id=9e9343b4

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-material-design-icons/Account.vue?vue&type=script&lang=js
/* harmony default export */ var Accountvue_type_script_lang_js = ({
  name: "AccountIcon",
  emits: ['click'],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-material-design-icons/Account.vue?vue&type=script&lang=js
 /* harmony default export */ var vue_material_design_icons_Accountvue_type_script_lang_js = (Accountvue_type_script_lang_js); 
// CONCATENATED MODULE: ./node_modules/vue-material-design-icons/Account.vue





/* normalize component */

var Account_component = Object(componentNormalizer["a" /* default */])(
  vue_material_design_icons_Accountvue_type_script_lang_js,
  Accountvue_type_template_id_9e9343b4_render,
  Accountvue_type_template_id_9e9343b4_staticRenderFns,
  false,
  null,
  null,
  "6980cbd8"
  
)

/* harmony default export */ var Account = (Account_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-material-design-icons/Plus.vue?vue&type=template&id=055261ec
var Plusvue_type_template_id_055261ec_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('span', _vm._b({
    staticClass: "material-design-icon plus-icon",
    attrs: {
      "aria-hidden": _vm.title ? null : 'true',
      "aria-label": _vm.title,
      "role": "img"
    },
    on: {
      "click": function ($event) {
        return _vm.$emit('click', $event);
      }
    }
  }, 'span', _vm.$attrs, false), [_vm._ssrNode("<svg" + _vm._ssrAttr("fill", _vm.fillColor) + _vm._ssrAttr("width", _vm.size) + _vm._ssrAttr("height", _vm.size) + " viewBox=\"0 0 24 24\" class=\"material-design-icon__svg\"><path d=\"M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z\">" + (_vm.title ? "<title>" + _vm._ssrEscape(_vm._s(_vm.title)) + "</title>" : "<!---->") + "</path></svg>")]);
};
var Plusvue_type_template_id_055261ec_staticRenderFns = [];

// CONCATENATED MODULE: ./node_modules/vue-material-design-icons/Plus.vue?vue&type=template&id=055261ec

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-material-design-icons/Plus.vue?vue&type=script&lang=js
/* harmony default export */ var Plusvue_type_script_lang_js = ({
  name: "PlusIcon",
  emits: ['click'],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-material-design-icons/Plus.vue?vue&type=script&lang=js
 /* harmony default export */ var vue_material_design_icons_Plusvue_type_script_lang_js = (Plusvue_type_script_lang_js); 
// CONCATENATED MODULE: ./node_modules/vue-material-design-icons/Plus.vue





/* normalize component */

var Plus_component = Object(componentNormalizer["a" /* default */])(
  vue_material_design_icons_Plusvue_type_script_lang_js,
  Plusvue_type_template_id_055261ec_render,
  Plusvue_type_template_id_055261ec_staticRenderFns,
  false,
  null,
  null,
  "5f39d1c3"
  
)

/* harmony default export */ var Plus = (Plus_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-material-design-icons/Eye.vue?vue&type=template&id=4ae2345c
var Eyevue_type_template_id_4ae2345c_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('span', _vm._b({
    staticClass: "material-design-icon eye-icon",
    attrs: {
      "aria-hidden": _vm.title ? null : 'true',
      "aria-label": _vm.title,
      "role": "img"
    },
    on: {
      "click": function ($event) {
        return _vm.$emit('click', $event);
      }
    }
  }, 'span', _vm.$attrs, false), [_vm._ssrNode("<svg" + _vm._ssrAttr("fill", _vm.fillColor) + _vm._ssrAttr("width", _vm.size) + _vm._ssrAttr("height", _vm.size) + " viewBox=\"0 0 24 24\" class=\"material-design-icon__svg\"><path d=\"M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z\">" + (_vm.title ? "<title>" + _vm._ssrEscape(_vm._s(_vm.title)) + "</title>" : "<!---->") + "</path></svg>")]);
};
var Eyevue_type_template_id_4ae2345c_staticRenderFns = [];

// CONCATENATED MODULE: ./node_modules/vue-material-design-icons/Eye.vue?vue&type=template&id=4ae2345c

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-material-design-icons/Eye.vue?vue&type=script&lang=js
/* harmony default export */ var Eyevue_type_script_lang_js = ({
  name: "EyeIcon",
  emits: ['click'],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-material-design-icons/Eye.vue?vue&type=script&lang=js
 /* harmony default export */ var vue_material_design_icons_Eyevue_type_script_lang_js = (Eyevue_type_script_lang_js); 
// CONCATENATED MODULE: ./node_modules/vue-material-design-icons/Eye.vue





/* normalize component */

var Eye_component = Object(componentNormalizer["a" /* default */])(
  vue_material_design_icons_Eyevue_type_script_lang_js,
  Eyevue_type_template_id_4ae2345c_render,
  Eyevue_type_template_id_4ae2345c_staticRenderFns,
  false,
  null,
  null,
  "67023798"
  
)

/* harmony default export */ var Eye = (Eye_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-material-design-icons/Instagram.vue?vue&type=template&id=a138a040
var Instagramvue_type_template_id_a138a040_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('span', _vm._b({
    staticClass: "material-design-icon instagram-icon",
    attrs: {
      "aria-hidden": _vm.title ? null : 'true',
      "aria-label": _vm.title,
      "role": "img"
    },
    on: {
      "click": function ($event) {
        return _vm.$emit('click', $event);
      }
    }
  }, 'span', _vm.$attrs, false), [_vm._ssrNode("<svg" + _vm._ssrAttr("fill", _vm.fillColor) + _vm._ssrAttr("width", _vm.size) + _vm._ssrAttr("height", _vm.size) + " viewBox=\"0 0 24 24\" class=\"material-design-icon__svg\"><path d=\"M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z\">" + (_vm.title ? "<title>" + _vm._ssrEscape(_vm._s(_vm.title)) + "</title>" : "<!---->") + "</path></svg>")]);
};
var Instagramvue_type_template_id_a138a040_staticRenderFns = [];

// CONCATENATED MODULE: ./node_modules/vue-material-design-icons/Instagram.vue?vue&type=template&id=a138a040

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-material-design-icons/Instagram.vue?vue&type=script&lang=js
/* harmony default export */ var Instagramvue_type_script_lang_js = ({
  name: "InstagramIcon",
  emits: ['click'],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-material-design-icons/Instagram.vue?vue&type=script&lang=js
 /* harmony default export */ var vue_material_design_icons_Instagramvue_type_script_lang_js = (Instagramvue_type_script_lang_js); 
// CONCATENATED MODULE: ./node_modules/vue-material-design-icons/Instagram.vue





/* normalize component */

var Instagram_component = Object(componentNormalizer["a" /* default */])(
  vue_material_design_icons_Instagramvue_type_script_lang_js,
  Instagramvue_type_template_id_a138a040_render,
  Instagramvue_type_template_id_a138a040_staticRenderFns,
  false,
  null,
  null,
  "56511559"
  
)

/* harmony default export */ var Instagram = (Instagram_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-material-design-icons/Whatsapp.vue?vue&type=template&id=60e2a83c
var Whatsappvue_type_template_id_60e2a83c_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('span', _vm._b({
    staticClass: "material-design-icon whatsapp-icon",
    attrs: {
      "aria-hidden": _vm.title ? null : 'true',
      "aria-label": _vm.title,
      "role": "img"
    },
    on: {
      "click": function ($event) {
        return _vm.$emit('click', $event);
      }
    }
  }, 'span', _vm.$attrs, false), [_vm._ssrNode("<svg" + _vm._ssrAttr("fill", _vm.fillColor) + _vm._ssrAttr("width", _vm.size) + _vm._ssrAttr("height", _vm.size) + " viewBox=\"0 0 24 24\" class=\"material-design-icon__svg\"><path d=\"M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7 8.5 7 9.71C7 10.93 7.89 12.1 8 12.27C8.14 12.44 9.76 14.94 12.25 16C12.84 16.27 13.3 16.42 13.66 16.53C14.25 16.72 14.79 16.69 15.22 16.63C15.7 16.56 16.68 16.03 16.89 15.45C17.1 14.87 17.1 14.38 17.04 14.27C16.97 14.17 16.81 14.11 16.56 14C16.31 13.86 15.09 13.26 14.87 13.18C14.64 13.1 14.5 13.06 14.31 13.3C14.15 13.55 13.67 14.11 13.53 14.27C13.38 14.44 13.24 14.46 13 14.34C12.74 14.21 11.94 13.95 11 13.11C10.26 12.45 9.77 11.64 9.62 11.39C9.5 11.15 9.61 11 9.73 10.89C9.84 10.78 10 10.6 10.1 10.45C10.23 10.31 10.27 10.2 10.35 10.04C10.43 9.87 10.39 9.73 10.33 9.61C10.27 9.5 9.77 8.26 9.56 7.77C9.36 7.29 9.16 7.35 9 7.34C8.86 7.34 8.7 7.33 8.53 7.33Z\">" + (_vm.title ? "<title>" + _vm._ssrEscape(_vm._s(_vm.title)) + "</title>" : "<!---->") + "</path></svg>")]);
};
var Whatsappvue_type_template_id_60e2a83c_staticRenderFns = [];

// CONCATENATED MODULE: ./node_modules/vue-material-design-icons/Whatsapp.vue?vue&type=template&id=60e2a83c

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-material-design-icons/Whatsapp.vue?vue&type=script&lang=js
/* harmony default export */ var Whatsappvue_type_script_lang_js = ({
  name: "WhatsappIcon",
  emits: ['click'],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-material-design-icons/Whatsapp.vue?vue&type=script&lang=js
 /* harmony default export */ var vue_material_design_icons_Whatsappvue_type_script_lang_js = (Whatsappvue_type_script_lang_js); 
// CONCATENATED MODULE: ./node_modules/vue-material-design-icons/Whatsapp.vue





/* normalize component */

var Whatsapp_component = Object(componentNormalizer["a" /* default */])(
  vue_material_design_icons_Whatsappvue_type_script_lang_js,
  Whatsappvue_type_template_id_60e2a83c_render,
  Whatsappvue_type_template_id_60e2a83c_staticRenderFns,
  false,
  null,
  null,
  "af257d8a"
  
)

/* harmony default export */ var Whatsapp = (Whatsapp_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-material-design-icons/Facebook.vue?vue&type=template&id=698671f3
var Facebookvue_type_template_id_698671f3_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('span', _vm._b({
    staticClass: "material-design-icon facebook-icon",
    attrs: {
      "aria-hidden": _vm.title ? null : 'true',
      "aria-label": _vm.title,
      "role": "img"
    },
    on: {
      "click": function ($event) {
        return _vm.$emit('click', $event);
      }
    }
  }, 'span', _vm.$attrs, false), [_vm._ssrNode("<svg" + _vm._ssrAttr("fill", _vm.fillColor) + _vm._ssrAttr("width", _vm.size) + _vm._ssrAttr("height", _vm.size) + " viewBox=\"0 0 24 24\" class=\"material-design-icon__svg\"><path d=\"M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z\">" + (_vm.title ? "<title>" + _vm._ssrEscape(_vm._s(_vm.title)) + "</title>" : "<!---->") + "</path></svg>")]);
};
var Facebookvue_type_template_id_698671f3_staticRenderFns = [];

// CONCATENATED MODULE: ./node_modules/vue-material-design-icons/Facebook.vue?vue&type=template&id=698671f3

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-material-design-icons/Facebook.vue?vue&type=script&lang=js
/* harmony default export */ var Facebookvue_type_script_lang_js = ({
  name: "FacebookIcon",
  emits: ['click'],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-material-design-icons/Facebook.vue?vue&type=script&lang=js
 /* harmony default export */ var vue_material_design_icons_Facebookvue_type_script_lang_js = (Facebookvue_type_script_lang_js); 
// CONCATENATED MODULE: ./node_modules/vue-material-design-icons/Facebook.vue





/* normalize component */

var Facebook_component = Object(componentNormalizer["a" /* default */])(
  vue_material_design_icons_Facebookvue_type_script_lang_js,
  Facebookvue_type_template_id_698671f3_render,
  Facebookvue_type_template_id_698671f3_staticRenderFns,
  false,
  null,
  null,
  "4898b86f"
  
)

/* harmony default export */ var Facebook = (Facebook_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-material-design-icons/Twitter.vue?vue&type=template&id=98d3104c
var Twittervue_type_template_id_98d3104c_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('span', _vm._b({
    staticClass: "material-design-icon twitter-icon",
    attrs: {
      "aria-hidden": _vm.title ? null : 'true',
      "aria-label": _vm.title,
      "role": "img"
    },
    on: {
      "click": function ($event) {
        return _vm.$emit('click', $event);
      }
    }
  }, 'span', _vm.$attrs, false), [_vm._ssrNode("<svg" + _vm._ssrAttr("fill", _vm.fillColor) + _vm._ssrAttr("width", _vm.size) + _vm._ssrAttr("height", _vm.size) + " viewBox=\"0 0 24 24\" class=\"material-design-icon__svg\"><path d=\"M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z\">" + (_vm.title ? "<title>" + _vm._ssrEscape(_vm._s(_vm.title)) + "</title>" : "<!---->") + "</path></svg>")]);
};
var Twittervue_type_template_id_98d3104c_staticRenderFns = [];

// CONCATENATED MODULE: ./node_modules/vue-material-design-icons/Twitter.vue?vue&type=template&id=98d3104c

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-material-design-icons/Twitter.vue?vue&type=script&lang=js
/* harmony default export */ var Twittervue_type_script_lang_js = ({
  name: "TwitterIcon",
  emits: ['click'],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-material-design-icons/Twitter.vue?vue&type=script&lang=js
 /* harmony default export */ var vue_material_design_icons_Twittervue_type_script_lang_js = (Twittervue_type_script_lang_js); 
// CONCATENATED MODULE: ./node_modules/vue-material-design-icons/Twitter.vue





/* normalize component */

var Twitter_component = Object(componentNormalizer["a" /* default */])(
  vue_material_design_icons_Twittervue_type_script_lang_js,
  Twittervue_type_template_id_98d3104c_render,
  Twittervue_type_template_id_98d3104c_staticRenderFns,
  false,
  null,
  null,
  "2a98275a"
  
)

/* harmony default export */ var Twitter = (Twitter_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-material-design-icons/Linkedin.vue?vue&type=template&id=7d43bda0
var Linkedinvue_type_template_id_7d43bda0_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('span', _vm._b({
    staticClass: "material-design-icon linkedin-icon",
    attrs: {
      "aria-hidden": _vm.title ? null : 'true',
      "aria-label": _vm.title,
      "role": "img"
    },
    on: {
      "click": function ($event) {
        return _vm.$emit('click', $event);
      }
    }
  }, 'span', _vm.$attrs, false), [_vm._ssrNode("<svg" + _vm._ssrAttr("fill", _vm.fillColor) + _vm._ssrAttr("width", _vm.size) + _vm._ssrAttr("height", _vm.size) + " viewBox=\"0 0 24 24\" class=\"material-design-icon__svg\"><path d=\"M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z\">" + (_vm.title ? "<title>" + _vm._ssrEscape(_vm._s(_vm.title)) + "</title>" : "<!---->") + "</path></svg>")]);
};
var Linkedinvue_type_template_id_7d43bda0_staticRenderFns = [];

// CONCATENATED MODULE: ./node_modules/vue-material-design-icons/Linkedin.vue?vue&type=template&id=7d43bda0

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-material-design-icons/Linkedin.vue?vue&type=script&lang=js
/* harmony default export */ var Linkedinvue_type_script_lang_js = ({
  name: "LinkedinIcon",
  emits: ['click'],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-material-design-icons/Linkedin.vue?vue&type=script&lang=js
 /* harmony default export */ var vue_material_design_icons_Linkedinvue_type_script_lang_js = (Linkedinvue_type_script_lang_js); 
// CONCATENATED MODULE: ./node_modules/vue-material-design-icons/Linkedin.vue





/* normalize component */

var Linkedin_component = Object(componentNormalizer["a" /* default */])(
  vue_material_design_icons_Linkedinvue_type_script_lang_js,
  Linkedinvue_type_template_id_7d43bda0_render,
  Linkedinvue_type_template_id_7d43bda0_staticRenderFns,
  false,
  null,
  null,
  "03525ab2"
  
)

/* harmony default export */ var Linkedin = (Linkedin_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-material-design-icons/Robot.vue?vue&type=template&id=0a75abad
var Robotvue_type_template_id_0a75abad_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('span', _vm._b({
    staticClass: "material-design-icon robot-icon",
    attrs: {
      "aria-hidden": _vm.title ? null : 'true',
      "aria-label": _vm.title,
      "role": "img"
    },
    on: {
      "click": function ($event) {
        return _vm.$emit('click', $event);
      }
    }
  }, 'span', _vm.$attrs, false), [_vm._ssrNode("<svg" + _vm._ssrAttr("fill", _vm.fillColor) + _vm._ssrAttr("width", _vm.size) + _vm._ssrAttr("height", _vm.size) + " viewBox=\"0 0 24 24\" class=\"material-design-icon__svg\"><path d=\"M12,2A2,2 0 0,1 14,4C14,4.74 13.6,5.39 13,5.73V7H14A7,7 0 0,1 21,14H22A1,1 0 0,1 23,15V18A1,1 0 0,1 22,19H21V20A2,2 0 0,1 19,22H5A2,2 0 0,1 3,20V19H2A1,1 0 0,1 1,18V15A1,1 0 0,1 2,14H3A7,7 0 0,1 10,7H11V5.73C10.4,5.39 10,4.74 10,4A2,2 0 0,1 12,2M7.5,13A2.5,2.5 0 0,0 5,15.5A2.5,2.5 0 0,0 7.5,18A2.5,2.5 0 0,0 10,15.5A2.5,2.5 0 0,0 7.5,13M16.5,13A2.5,2.5 0 0,0 14,15.5A2.5,2.5 0 0,0 16.5,18A2.5,2.5 0 0,0 19,15.5A2.5,2.5 0 0,0 16.5,13Z\">" + (_vm.title ? "<title>" + _vm._ssrEscape(_vm._s(_vm.title)) + "</title>" : "<!---->") + "</path></svg>")]);
};
var Robotvue_type_template_id_0a75abad_staticRenderFns = [];

// CONCATENATED MODULE: ./node_modules/vue-material-design-icons/Robot.vue?vue&type=template&id=0a75abad

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-material-design-icons/Robot.vue?vue&type=script&lang=js
/* harmony default export */ var Robotvue_type_script_lang_js = ({
  name: "RobotIcon",
  emits: ['click'],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-material-design-icons/Robot.vue?vue&type=script&lang=js
 /* harmony default export */ var vue_material_design_icons_Robotvue_type_script_lang_js = (Robotvue_type_script_lang_js); 
// CONCATENATED MODULE: ./node_modules/vue-material-design-icons/Robot.vue





/* normalize component */

var Robot_component = Object(componentNormalizer["a" /* default */])(
  vue_material_design_icons_Robotvue_type_script_lang_js,
  Robotvue_type_template_id_0a75abad_render,
  Robotvue_type_template_id_0a75abad_staticRenderFns,
  false,
  null,
  null,
  "100688de"
  
)

/* harmony default export */ var Robot = (Robot_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-material-design-icons/Magnify.vue?vue&type=template&id=194dfb2a
var Magnifyvue_type_template_id_194dfb2a_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('span', _vm._b({
    staticClass: "material-design-icon magnify-icon",
    attrs: {
      "aria-hidden": _vm.title ? null : 'true',
      "aria-label": _vm.title,
      "role": "img"
    },
    on: {
      "click": function ($event) {
        return _vm.$emit('click', $event);
      }
    }
  }, 'span', _vm.$attrs, false), [_vm._ssrNode("<svg" + _vm._ssrAttr("fill", _vm.fillColor) + _vm._ssrAttr("width", _vm.size) + _vm._ssrAttr("height", _vm.size) + " viewBox=\"0 0 24 24\" class=\"material-design-icon__svg\"><path d=\"M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z\">" + (_vm.title ? "<title>" + _vm._ssrEscape(_vm._s(_vm.title)) + "</title>" : "<!---->") + "</path></svg>")]);
};
var Magnifyvue_type_template_id_194dfb2a_staticRenderFns = [];

// CONCATENATED MODULE: ./node_modules/vue-material-design-icons/Magnify.vue?vue&type=template&id=194dfb2a

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-material-design-icons/Magnify.vue?vue&type=script&lang=js
/* harmony default export */ var Magnifyvue_type_script_lang_js = ({
  name: "MagnifyIcon",
  emits: ['click'],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-material-design-icons/Magnify.vue?vue&type=script&lang=js
 /* harmony default export */ var vue_material_design_icons_Magnifyvue_type_script_lang_js = (Magnifyvue_type_script_lang_js); 
// CONCATENATED MODULE: ./node_modules/vue-material-design-icons/Magnify.vue





/* normalize component */

var Magnify_component = Object(componentNormalizer["a" /* default */])(
  vue_material_design_icons_Magnifyvue_type_script_lang_js,
  Magnifyvue_type_template_id_194dfb2a_render,
  Magnifyvue_type_template_id_194dfb2a_staticRenderFns,
  false,
  null,
  null,
  "3e6a9188"
  
)

/* harmony default export */ var Magnify = (Magnify_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-material-design-icons/TrashCan.vue?vue&type=template&id=042816e0
var TrashCanvue_type_template_id_042816e0_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('span', _vm._b({
    staticClass: "material-design-icon trash-can-icon",
    attrs: {
      "aria-hidden": _vm.title ? null : 'true',
      "aria-label": _vm.title,
      "role": "img"
    },
    on: {
      "click": function ($event) {
        return _vm.$emit('click', $event);
      }
    }
  }, 'span', _vm.$attrs, false), [_vm._ssrNode("<svg" + _vm._ssrAttr("fill", _vm.fillColor) + _vm._ssrAttr("width", _vm.size) + _vm._ssrAttr("height", _vm.size) + " viewBox=\"0 0 24 24\" class=\"material-design-icon__svg\"><path d=\"M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M9,8H11V17H9V8M13,8H15V17H13V8Z\">" + (_vm.title ? "<title>" + _vm._ssrEscape(_vm._s(_vm.title)) + "</title>" : "<!---->") + "</path></svg>")]);
};
var TrashCanvue_type_template_id_042816e0_staticRenderFns = [];

// CONCATENATED MODULE: ./node_modules/vue-material-design-icons/TrashCan.vue?vue&type=template&id=042816e0

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-material-design-icons/TrashCan.vue?vue&type=script&lang=js
/* harmony default export */ var TrashCanvue_type_script_lang_js = ({
  name: "TrashCanIcon",
  emits: ['click'],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-material-design-icons/TrashCan.vue?vue&type=script&lang=js
 /* harmony default export */ var vue_material_design_icons_TrashCanvue_type_script_lang_js = (TrashCanvue_type_script_lang_js); 
// CONCATENATED MODULE: ./node_modules/vue-material-design-icons/TrashCan.vue





/* normalize component */

var TrashCan_component = Object(componentNormalizer["a" /* default */])(
  vue_material_design_icons_TrashCanvue_type_script_lang_js,
  TrashCanvue_type_template_id_042816e0_render,
  TrashCanvue_type_template_id_042816e0_staticRenderFns,
  false,
  null,
  null,
  "0aa61e21"
  
)

/* harmony default export */ var TrashCan = (TrashCan_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-material-design-icons/Pencil.vue?vue&type=template&id=7adfde2b
var Pencilvue_type_template_id_7adfde2b_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('span', _vm._b({
    staticClass: "material-design-icon pencil-icon",
    attrs: {
      "aria-hidden": _vm.title ? null : 'true',
      "aria-label": _vm.title,
      "role": "img"
    },
    on: {
      "click": function ($event) {
        return _vm.$emit('click', $event);
      }
    }
  }, 'span', _vm.$attrs, false), [_vm._ssrNode("<svg" + _vm._ssrAttr("fill", _vm.fillColor) + _vm._ssrAttr("width", _vm.size) + _vm._ssrAttr("height", _vm.size) + " viewBox=\"0 0 24 24\" class=\"material-design-icon__svg\"><path d=\"M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z\">" + (_vm.title ? "<title>" + _vm._ssrEscape(_vm._s(_vm.title)) + "</title>" : "<!---->") + "</path></svg>")]);
};
var Pencilvue_type_template_id_7adfde2b_staticRenderFns = [];

// CONCATENATED MODULE: ./node_modules/vue-material-design-icons/Pencil.vue?vue&type=template&id=7adfde2b

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-material-design-icons/Pencil.vue?vue&type=script&lang=js
/* harmony default export */ var Pencilvue_type_script_lang_js = ({
  name: "PencilIcon",
  emits: ['click'],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-material-design-icons/Pencil.vue?vue&type=script&lang=js
 /* harmony default export */ var vue_material_design_icons_Pencilvue_type_script_lang_js = (Pencilvue_type_script_lang_js); 
// CONCATENATED MODULE: ./node_modules/vue-material-design-icons/Pencil.vue





/* normalize component */

var Pencil_component = Object(componentNormalizer["a" /* default */])(
  vue_material_design_icons_Pencilvue_type_script_lang_js,
  Pencilvue_type_template_id_7adfde2b_render,
  Pencilvue_type_template_id_7adfde2b_staticRenderFns,
  false,
  null,
  null,
  "aebb0114"
  
)

/* harmony default export */ var Pencil = (Pencil_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-material-design-icons/Email.vue?vue&type=template&id=7dd7f6aa
var Emailvue_type_template_id_7dd7f6aa_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('span', _vm._b({
    staticClass: "material-design-icon email-icon",
    attrs: {
      "aria-hidden": _vm.title ? null : 'true',
      "aria-label": _vm.title,
      "role": "img"
    },
    on: {
      "click": function ($event) {
        return _vm.$emit('click', $event);
      }
    }
  }, 'span', _vm.$attrs, false), [_vm._ssrNode("<svg" + _vm._ssrAttr("fill", _vm.fillColor) + _vm._ssrAttr("width", _vm.size) + _vm._ssrAttr("height", _vm.size) + " viewBox=\"0 0 24 24\" class=\"material-design-icon__svg\"><path d=\"M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z\">" + (_vm.title ? "<title>" + _vm._ssrEscape(_vm._s(_vm.title)) + "</title>" : "<!---->") + "</path></svg>")]);
};
var Emailvue_type_template_id_7dd7f6aa_staticRenderFns = [];

// CONCATENATED MODULE: ./node_modules/vue-material-design-icons/Email.vue?vue&type=template&id=7dd7f6aa

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-material-design-icons/Email.vue?vue&type=script&lang=js
/* harmony default export */ var Emailvue_type_script_lang_js = ({
  name: "EmailIcon",
  emits: ['click'],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-material-design-icons/Email.vue?vue&type=script&lang=js
 /* harmony default export */ var vue_material_design_icons_Emailvue_type_script_lang_js = (Emailvue_type_script_lang_js); 
// CONCATENATED MODULE: ./node_modules/vue-material-design-icons/Email.vue





/* normalize component */

var Email_component = Object(componentNormalizer["a" /* default */])(
  vue_material_design_icons_Emailvue_type_script_lang_js,
  Emailvue_type_template_id_7dd7f6aa_render,
  Emailvue_type_template_id_7dd7f6aa_staticRenderFns,
  false,
  null,
  null,
  "612cb3c3"
  
)

/* harmony default export */ var Email = (Email_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-material-design-icons/YouTube.vue?vue&type=template&id=3eb23852
var YouTubevue_type_template_id_3eb23852_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('span', _vm._b({
    staticClass: "material-design-icon youtube-icon",
    attrs: {
      "aria-hidden": _vm.title ? null : 'true',
      "aria-label": _vm.title,
      "role": "img"
    },
    on: {
      "click": function ($event) {
        return _vm.$emit('click', $event);
      }
    }
  }, 'span', _vm.$attrs, false), [_vm._ssrNode("<svg" + _vm._ssrAttr("fill", _vm.fillColor) + _vm._ssrAttr("width", _vm.size) + _vm._ssrAttr("height", _vm.size) + " viewBox=\"0 0 24 24\" class=\"material-design-icon__svg\"><path d=\"M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z\">" + (_vm.title ? "<title>" + _vm._ssrEscape(_vm._s(_vm.title)) + "</title>" : "<!---->") + "</path></svg>")]);
};
var YouTubevue_type_template_id_3eb23852_staticRenderFns = [];

// CONCATENATED MODULE: ./node_modules/vue-material-design-icons/YouTube.vue?vue&type=template&id=3eb23852

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-material-design-icons/YouTube.vue?vue&type=script&lang=js
/* harmony default export */ var YouTubevue_type_script_lang_js = ({
  name: "YoutubeIcon",
  emits: ['click'],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-material-design-icons/YouTube.vue?vue&type=script&lang=js
 /* harmony default export */ var vue_material_design_icons_YouTubevue_type_script_lang_js = (YouTubevue_type_script_lang_js); 
// CONCATENATED MODULE: ./node_modules/vue-material-design-icons/YouTube.vue





/* normalize component */

var YouTube_component = Object(componentNormalizer["a" /* default */])(
  vue_material_design_icons_YouTubevue_type_script_lang_js,
  YouTubevue_type_template_id_3eb23852_render,
  YouTubevue_type_template_id_3eb23852_staticRenderFns,
  false,
  null,
  null,
  "d23797ac"
  
)

/* harmony default export */ var YouTube = (YouTube_component.exports);
// CONCATENATED MODULE: ./plugins/mdi.js

























const components = {
  ChevronDownIcon: ChevronDown,
  ChevronUpIcon: ChevronUp,
  ChevronRightIcon: ChevronRight,
  PlusThickIcon: PlusThick,
  MinusThickIcon: MinusThick,
  ArrowUpIcon: ArrowUp,
  ArrowRightIcon: ArrowRight,
  CheckCircleIcon: CheckCircle,
  SegmentIcon: Segment,
  CloseIcon: Close,
  AccountIcon: Account,
  PlusIcon: Plus,
  TrashCanIcon: TrashCan,
  AiIcon: Eye,
  PencilIcon: Pencil,
  Instagram: Instagram,
  Twitter: Twitter,
  Facebook: Facebook,
  Whatsapp: Whatsapp,
  Linkedin: Linkedin,
  Robot: Robot,
  Youtube: YouTube,
  SearchIcon: Magnify,
  EmailIcon: Email
};
Object.entries(components).forEach(([name, component]) => {
  external_vue_default.a.component(name, component);
});
// CONCATENATED MODULE: ./.nuxt/index.js













/* Plugins */

 // Source: ./components/plugin.js (mode: 'all')
 // Source: ./image.js (mode: 'all')
 // Source: ./axios.js (mode: 'all')
 // Source: ../plugins/smooth-scroll.js (mode: 'all')
 // Source: ../plugins/mdi.js (mode: 'all')

// Component: <ClientOnly>
external_vue_default.a.component(external_vue_client_only_default.a.name, external_vue_client_only_default.a);

// TODO: Remove in Nuxt 3: <NoSsr>
external_vue_default.a.component(external_vue_no_ssr_default.a.name, {
  ...external_vue_no_ssr_default.a,
  render(h, ctx) {
    if (false) {}
    return external_vue_no_ssr_default.a.render(h, ctx);
  }
});

// Component: <NuxtChild>
external_vue_default.a.component(nuxt_child.name, nuxt_child);
external_vue_default.a.component('NChild', nuxt_child);

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
external_vue_default.a.component(components_nuxt.name, components_nuxt);
Object.defineProperty(external_vue_default.a.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root ? this.$root.$options.$nuxt : null;
    if (false) {}
    return globalNuxt;
  },
  configurable: true
});
external_vue_default.a.use(external_vue_meta_default.a, {
  "keyName": "head",
  "attribute": "data-n-head",
  "ssrAttribute": "data-n-head-ssr",
  "tagIDKeyName": "hid"
});
const defaultTransition = {
  "name": "page",
  "mode": "out-in",
  "appear": false,
  "appearClass": "appear",
  "appearActiveClass": "appear-active",
  "appearToClass": "appear-to"
};
const originalRegisterModule = external_vuex_default.a.Store.prototype.registerModule;
function registerModule(path, rawModule, options = {}) {
  const preserveState =  false && (false);
  return originalRegisterModule.call(this, path, rawModule, {
    preserveState,
    ...options
  });
}
async function createApp(ssrContext, config = {}) {
  const store = createStore(ssrContext);
  const router = await createRouter(ssrContext, config, {
    store
  });

  // Add this.$router into store actions/mutations
  store.$router = router;

  // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141
  store.registerModule = registerModule;

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {
      "title": "Beat Expertise",
      "meta": [{
        "charset": "utf-8"
      }, {
        "hid": "viewport",
        "name": "viewport",
        "content": "width=device-width, initial-scale=1"
      }],
      "htmlAttrs": {
        "lang": "en"
      },
      "script": [{
        "hid": "smartsupp-chat",
        "innerHTML": "\n          var _smartsupp = _smartsupp || {};\n          _smartsupp.key = '397e838a791a5461fc16ba17caad84ac66ac1a16';\n          window.smartsupp||(function(d) {\n            var s,c,o=smartsupp=function(){ o._.push(arguments)};\n            o._=[];\n            s=d.getElementsByTagName('script')[0];\n            c=d.createElement('script');\n            c.type='text\u002Fjavascript';\n            c.charset='utf-8';\n            c.async=true;\n            c.src='https:\u002F\u002Fwww.smartsuppchat.com\u002Floader.js?';\n            s.parentNode.insertBefore(c,s);\n          })(document);\n        ",
        "type": "text\u002Fjavascript",
        "charset": "utf-8"
      }],
      "link": [{
        "rel": "icon",
        "type": "image\u002Fx-icon",
        "href": "favicon.ico"
      }, {
        "rel": "stylesheet",
        "href": "https:\u002F\u002Ffonts.googleapis.com\u002Fcss2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
      }],
      "style": []
    },
    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions(transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions];
        }
        transitions = transitions.map(transition => {
          if (!transition) {
            transition = defaultTransition;
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, {
              name: transition
            });
          } else {
            transition = Object.assign({}, defaultTransition, transition);
          }
          return transition;
        });
        this.$options.nuxt.transitions = transitions;
        return transitions;
      },
      err: null,
      errPageReady: false,
      dateErr: null,
      error(err) {
        err = err || null;
        app.context._errored = Boolean(err);
        err = err ? normalizeError(err) : null;
        let nuxt = app.nuxt; // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt;
        }
        nuxt.dateErr = Date.now();
        nuxt.err = err;
        nuxt.errPageReady = false;
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err;
        }
        return err;
      }
    },
    ...App
  };

  // Make app available into store via this.app
  store.app = app;
  const next = ssrContext ? ssrContext.next : location => app.router.push(location);
  // Resolve route
  let route;
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route;
  } else {
    const path = getLocation(router.options.base, router.options.mode);
    route = router.resolve(path).route;
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    beforeSerializeFns: ssrContext ? ssrContext.beforeSerializeFns : undefined,
    ssrContext
  });
  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided');
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`);
    }
    key = '$' + key;
    // Add into app
    app[key] = value;
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value;
    }

    // Add into store
    store[key] = app[key];

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__';
    if (external_vue_default.a[installKey]) {
      return;
    }
    external_vue_default.a[installKey] = true;
    // Call Vue.use() to install the plugin into vm
    external_vue_default.a.use(() => {
      if (!Object.prototype.hasOwnProperty.call(external_vue_default.a.prototype, key)) {
        Object.defineProperty(external_vue_default.a.prototype, key, {
          get() {
            return this.$root.$options[key];
          }
        });
      }
    });
  }

  // Inject runtime config as $config
  inject('config', config);
  if (false) {}

  // Add enablePreview(previewData = {}) in context for plugins
  if (false) {}
  // Plugin execution

  if (typeof /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }
  if (typeof _nuxt_image === 'function') {
    await _nuxt_image(app.context, inject);
  }
  if (typeof _nuxt_axios === 'function') {
    await _nuxt_axios(app.context, inject);
  }
  if (typeof smooth_scroll === 'function') {
    await smooth_scroll(app.context, inject);
  }
  if (typeof /* Cannot get final name for export "default" in "./plugins/mdi.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./plugins/mdi.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  // Lock enablePreview in context
  if (false) {}

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (false) {}
    router.replace(app.context.route.fullPath, resolve, err => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err);
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve();

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if ( true && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath;
        }
        app.context.route = await getRouteData(to);
        app.context.params = to.params || {};
        app.context.query = to.query || {};
        unregister();
        resolve();
      });
    });
  });
  return {
    store,
    app,
    router
  };
}

// CONCATENATED MODULE: ./.nuxt/components/nuxt-link.server.js

/* harmony default export */ var nuxt_link_server = ({
  name: 'NuxtLink',
  extends: external_vue_default.a.component('RouterLink'),
  props: {
    prefetch: {
      type: Boolean,
      default: true
    },
    noPrefetch: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./.nuxt/server.js







 // should be included after ./index.js

// Update serverPrefetch strategy
external_vue_default.a.config.optionMergeStrategies.serverPrefetch = external_vue_default.a.config.optionMergeStrategies.created;

// Fetch mixin
if (!external_vue_default.a.__nuxt__fetch__mixin__) {
  external_vue_default.a.mixin(fetch_server);
  external_vue_default.a.__nuxt__fetch__mixin__ = true;
}

// Component: <NuxtLink>
external_vue_default.a.component(nuxt_link_server.name, nuxt_link_server);
external_vue_default.a.component('NLink', nuxt_link_server);
if (!global.fetch) {
  global.fetch = external_node_fetch_native_default.a;
}
const noopApp = () => new external_vue_default.a({
  render: h => h('div', {
    domProps: {
      id: '__nuxt'
    }
  })
});
const createNext = ssrContext => opts => {
  // If static target, render on client-side
  ssrContext.redirected = opts;
  if (ssrContext.target === 'static' || !ssrContext.res) {
    ssrContext.nuxt.serverRendered = false;
    return;
  }
  let fullPath = Object(dist["withQuery"])(opts.path, opts.query);
  const $config = ssrContext.nuxt.config || {};
  const routerBase = $config._app && $config._app.basePath || '/';
  if (!fullPath.startsWith('http') && routerBase !== '/' && !fullPath.startsWith(routerBase)) {
    fullPath = Object(dist["joinURL"])(routerBase, fullPath);
  }
  // Avoid loop redirect
  if (decodeURI(fullPath) === decodeURI(ssrContext.url)) {
    ssrContext.redirected = false;
    return;
  }
  ssrContext.res.writeHead(opts.status, {
    Location: Object(dist["normalizeURL"])(fullPath)
  });
  ssrContext.res.end();
};

// This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.
/* harmony default export */ var server = __webpack_exports__["default"] = (async ssrContext => {
  // Create ssrContext.next for simulate next() of beforeEach() when wanted to redirect
  ssrContext.redirected = false;
  ssrContext.next = createNext(ssrContext);
  // Used for beforeNuxtRender({ Components, nuxtState })
  ssrContext.beforeRenderFns = [];
  // for beforeSerialize(nuxtState)
  ssrContext.beforeSerializeFns = [];
  // Nuxt object (window.{{globals.context}}, defaults to window.__NUXT__)
  ssrContext.nuxt = {
    layout: 'default',
    data: [],
    fetch: {},
    error: null,
    state: null,
    serverRendered: true,
    routePath: ''
  };
  ssrContext.fetchCounters = {};

  // Remove query from url is static target

  // Public runtime config
  ssrContext.nuxt.config = ssrContext.runtimeConfig.public;
  if (ssrContext.nuxt.config._app) {
    __webpack_require__.p = Object(dist["joinURL"])(ssrContext.nuxt.config._app.cdnURL, ssrContext.nuxt.config._app.assetsPath);
  }
  // Create the app definition and the instance (created for each request)
  const {
    app,
    router,
    store
  } = await createApp(ssrContext, ssrContext.runtimeConfig.private);
  const _app = new external_vue_default.a(app);
  // Add ssr route path to nuxt context so we can account for page navigation between ssr and csr
  ssrContext.nuxt.routePath = app.context.route.path;

  // Add meta infos (used in renderer.js)
  ssrContext.meta = _app.$meta();

  // Keep asyncData for each matched component in ssrContext (used in app/utils.js via this.$ssrContext)
  ssrContext.asyncData = {};
  const beforeRender = async () => {
    // Call beforeNuxtRender() methods
    await Promise.all(ssrContext.beforeRenderFns.map(fn => promisify(fn, {
      Components,
      nuxtState: ssrContext.nuxt
    })));
    ssrContext.rendered = () => {
      // Call beforeSerialize() hooks
      ssrContext.beforeSerializeFns.forEach(fn => fn(ssrContext.nuxt));

      // Add the state from the vuex store
      ssrContext.nuxt.state = store.state;
    };
  };
  const renderErrorPage = async () => {
    // Don't server-render the page in static target
    if (ssrContext.target === 'static') {
      ssrContext.nuxt.serverRendered = false;
    }

    // Load layout for error page
    const layout = (nuxt_error.options || nuxt_error).layout;
    const errLayout = typeof layout === 'function' ? layout.call(nuxt_error, app.context) : layout;
    ssrContext.nuxt.layout = errLayout || 'default';
    await _app.loadLayout(errLayout);
    _app.setLayout(errLayout);
    await beforeRender();
    return _app;
  };
  const render404Page = () => {
    app.context.error({
      statusCode: 404,
      path: ssrContext.url,
      message: 'This page could not be found'
    });
    return renderErrorPage();
  };

  // Components are already resolved by setContext -> getRouteData (app/utils.js)
  const Components = getMatchedComponents(app.context.route);

  /*
  ** Dispatch store nuxtServerInit
  */
  if (store._actions && store._actions.nuxtServerInit) {
    try {
      await store.dispatch('nuxtServerInit', app.context);
    } catch (err) {
      console.debug('Error occurred when calling nuxtServerInit: ', err.message);
      throw err;
    }
  }
  // ...If there is a redirect or an error, stop the process
  if (ssrContext.redirected) {
    return noopApp();
  }
  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  /*
  ** Call global middleware (nuxt.config.js)
  */
  let midd = [];
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }
    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }
    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context);
  // ...If there is a redirect or an error, stop the process
  if (ssrContext.redirected) {
    return noopApp();
  }
  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  /*
  ** Set layout
  */
  let layout = Components.length ? Components[0].options.layout : nuxt_error.layout;
  if (typeof layout === 'function') {
    layout = layout(app.context);
  }
  await _app.loadLayout(layout);
  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  layout = _app.setLayout(layout);
  ssrContext.nuxt.layout = _app.layoutName;

  /*
  ** Call middleware (layout + pages)
  */
  midd = [];
  layout = sanitizeComponent(layout);
  if (layout.options.middleware) {
    midd = midd.concat(layout.options.middleware);
  }
  Components.forEach(Component => {
    if (Component.options.middleware) {
      midd = midd.concat(Component.options.middleware);
    }
  });
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }
    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }
    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context);
  // ...If there is a redirect or an error, stop the process
  if (ssrContext.redirected) {
    return noopApp();
  }
  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  /*
  ** Call .validate()
  */
  let isValid = true;
  try {
    for (const Component of Components) {
      if (typeof Component.options.validate !== 'function') {
        continue;
      }
      isValid = await Component.options.validate(app.context);
      if (!isValid) {
        break;
      }
    }
  } catch (validationError) {
    // ...If .validate() threw an error
    app.context.error({
      statusCode: validationError.statusCode || '500',
      message: validationError.message
    });
    return renderErrorPage();
  }

  // ...If .validate() returned false
  if (!isValid) {
    // Render a 404 error page
    return render404Page();
  }

  // If no Components found, returns 404
  if (!Components.length) {
    return render404Page();
  }

  // Call asyncData & fetch hooks on components matched by the route.
  const asyncDatas = await Promise.all(Components.map(Component => {
    const promises = [];

    // Call asyncData(context)
    if (Component.options.asyncData && typeof Component.options.asyncData === 'function') {
      const promise = promisify(Component.options.asyncData, app.context).then(asyncDataResult => {
        ssrContext.asyncData[Component.cid] = asyncDataResult;
        applyAsyncData(Component);
        return asyncDataResult;
      });
      promises.push(promise);
    } else {
      promises.push(null);
    }

    // Call fetch(context)
    if (Component.options.fetch && Component.options.fetch.length) {
      promises.push(Component.options.fetch(app.context));
    } else {
      promises.push(null);
    }
    return Promise.all(promises);
  }));

  // datas are the first row of each
  ssrContext.nuxt.data = asyncDatas.map(r => r[0] || {});

  // ...If there is a redirect or an error, stop the process
  if (ssrContext.redirected) {
    return noopApp();
  }
  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  // Call beforeNuxtRender methods & add store state
  await beforeRender();
  return _app;
});

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/landing/Step.vue?vue&type=template&id=6d3162dc
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('client-only', [_c('div', {
    staticClass: "max-w-[320px] xl:max-w-[380px] bg-white shadow-md rounded-lg overflow-hidden transition-transform duration-500 hover:scale-105 hover:shadow-xl ml-5 mr-5"
  }, [_c('a', {
    staticClass: "block",
    attrs: {
      "href": '/blogs/' + _vm.blog.blogRoute
    }
  }, [_c('div', {
    staticClass: "relative"
  }, [_c('img', {
    staticClass: "w-full h-48 object-cover rounded-t-lg transition-opacity duration-500 ease-in-out hover:opacity-80",
    attrs: {
      "src": _vm.blog.imageUrl,
      "alt": _vm.blog.blogTitle
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "p-4 text-center"
  }, [_c('h3', {
    staticClass: "text-lg font-bold text-gray-800 hover:text-blue-500 transition-all duration-300"
  }, [_vm._v("\n          " + _vm._s(_vm.blog.blogTitle) + "\n        ")]), _vm._v(" "), _c('p', {
    staticClass: "text-sm text-gray-600 mt-2 leading-relaxed"
  }, [_vm._v("\n          " + _vm._s(_vm.blog.blogCaption) + "\n        ")])])])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/landing/Step.vue?vue&type=template&id=6d3162dc

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/landing/Step.vue?vue&type=script&lang=js
/* harmony default export */ var Stepvue_type_script_lang_js = ({
  name: 'LandingStep',
  props: {
    blog: {
      type: Object,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./components/landing/Step.vue?vue&type=script&lang=js
 /* harmony default export */ var landing_Stepvue_type_script_lang_js = (Stepvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/landing/Step.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  landing_Stepvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6261dc1c"
  
)

/* harmony default export */ var Step = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/base/Header.vue?vue&type=template&id=20f0e32c
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('client-only', [_c('section', {
    staticClass: "hero desktop w-full pb-24",
    attrs: {
      "id": "hero"
    }
  }, [_c('BaseSection', {
    staticClass: "nospace"
  }, [_c('div', {
    staticClass: "col-span-12 lg:col-span-8 mt-12 xl:mt-10 space-y-4 sm:space-y-6 px-6 text-center sm:text-left nospace"
  }, [_c('h1', {
    staticClass: "text-[2.5rem] sm:text-5xl xl:text-6xl font-bold leading-tight sm:pr-8 xl:pr-10 mobile",
    staticStyle: {
      "color": "white"
    },
    attrs: {
      "data-aos-once": "true"
    }
  }, [_c('br'), _c('br'), _c('br'), _c('br'), _c('br'), _c('br'), _vm._v("\n        Bienvenu au \"Bureau d'Expertise et Accompagnement Technique\" BEAT\n        ")]), _vm._v(" "), _c('p', {
    staticClass: "text-white extramobile",
    attrs: {
      "data-aos-once": "true",
      "data-aos-delay": "300"
    }
  }, [_vm._v("\n          BEAT est un bureau d'expertise et accompagnement technique basé à Goma, en République Démocratique du Congo, dédié à offrir des solutions innovantes et un soutien spécialisé.\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-2",
    attrs: {
      "data-aos-once": "true",
      "data-aos-delay": "700"
    }
  }, [_c('a', {
    attrs: {
      "href": "#contact"
    }
  }, [_c('base-button', {
    staticClass: "px-2 xl:px-4 py-3 mt-2 bg-inherit border border-[#0c66ee] smallbtn"
  }, [_vm._v("\n          Entrez en contact avec nous pour savoir plus\n          ")])], 1)])])])], 1)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/base/Header.vue?vue&type=template&id=20f0e32c

// EXTERNAL MODULE: ./mixins/aos.js
var aos = __webpack_require__(12);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/base/Header.vue?vue&type=script&lang=js

/* harmony default export */ var Headervue_type_script_lang_js = ({
  name: 'header-component',
  mixins: [aos["a" /* default */]],
  data() {
    return {
      selected: 0,
      dropdownConcurency: false,
      dropdownCrypto: false,
      typedText: "",
      typeaheadPhrases: ["Hey"],
      currentPhraseIndex: 0,
      typeaheadInterval: null,
      typeaheadPlaceholder: "",
      deleteInterval: null,
      showModal: false,
      userQuestion: '',
      userAnswer: ''
    };
  },
  methods: {
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
      this.typedText = "";
      this.userQuestion = "";
      this.userAnswer = "";
    }
  }
});
// CONCATENATED MODULE: ./components/base/Header.vue?vue&type=script&lang=js
 /* harmony default export */ var base_Headervue_type_script_lang_js = (Headervue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/base/Header.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(67)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  base_Headervue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "a545edba"
  
)

/* harmony default export */ var Header = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {BaseButton: __webpack_require__(11).default,BaseSection: __webpack_require__(74).default})


/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/base/Section.vue?vue&type=template&id=09ab4f3b
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('client-only', [_c('div', _vm._b({
    staticClass: "relative max-w-screen-xl px-4 sm:px-8 mx-auto grid grid-cols-12 gap-x-6 overflow-hidden"
  }, 'div', _vm.$attrs, false), [_vm._t("default")], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/base/Section.vue?vue&type=template&id=09ab4f3b

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/base/Section.vue?vue&type=script&lang=js
/* harmony default export */ var Sectionvue_type_script_lang_js = ({
  name: 'BaseSection'
});
// CONCATENATED MODULE: ./components/base/Section.vue?vue&type=script&lang=js
 /* harmony default export */ var base_Sectionvue_type_script_lang_js = (Sectionvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/base/Section.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  base_Sectionvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "46d9f782"
  
)

/* harmony default export */ var Section = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = require("vue-tinymce-editor");

/***/ }),
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */
/***/ (function(module, exports) {

module.exports = require("image-meta");

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map