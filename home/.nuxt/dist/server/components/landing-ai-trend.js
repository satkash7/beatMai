exports.ids = [2];
exports.modules = {

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/landing/AiTrend.vue?vue&type=template&id=4d538c12
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('client-only', [_c('div', {
    staticClass: "relative bg-white shadow-lg rounded-lg border border-gray-300 overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
  }, [_c('a', {
    attrs: {
      "href": _vm.link,
      "target": "_blank"
    }
  }, [_c('div', {
    staticClass: "relative"
  }, [_vm.img != null && !_vm.small ? _c('img', {
    staticClass: "rounded-t-lg object-cover transition-opacity duration-500 ease-in-out",
    class: _vm.small ? 'h-40 w-full' : 'h-72 w-full',
    attrs: {
      "src": _vm.img,
      "alt": "Trends"
    }
  }) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "absolute inset-0 bg-black opacity-30 transition-opacity duration-500 hover:opacity-10"
  })]), _vm._v(" "), _c('div', {
    staticClass: "p-4 text-center"
  }, [_c('h3', {
    staticClass: "text-lg font-bold text-gray-800 hover:text-blue-500 transition-all duration-300"
  }, [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c('p', {
    staticClass: "text-gray-600 text-sm"
  }, [_vm._v(_vm._s(_vm.description))])])])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/landing/AiTrend.vue?vue&type=template&id=4d538c12

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/landing/AiTrend.vue?vue&type=script&lang=js
/* harmony default export */ var AiTrendvue_type_script_lang_js = ({
  props: {
    img: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    },
    link: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    small: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      url: ""
    };
  },
  async mounted() {
    this.url = this.$config.storageUrl;
    console.log("image => ", this.url);
  }
});
// CONCATENATED MODULE: ./components/landing/AiTrend.vue?vue&type=script&lang=js
 /* harmony default export */ var landing_AiTrendvue_type_script_lang_js = (AiTrendvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/landing/AiTrend.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  landing_AiTrendvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "28d11ab5"
  
)

/* harmony default export */ var AiTrend = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=landing-ai-trend.js.map