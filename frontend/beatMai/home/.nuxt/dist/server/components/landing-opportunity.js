exports.ids = [8];
exports.modules = {

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/landing/Opportunity.vue?vue&type=template&id=5466865f
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('client-only', [_c('div', {
    staticClass: "border p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 m-2"
  }, [_c('h3', {
    staticClass: "text-xl font-semibold text-neutral-800 hover:text-blue-500 transition duration-300 cursor-pointer text-center mb-1",
    on: {
      "click": _vm.handleClick
    }
  }, [_c('b', [_vm._v(_vm._s(_vm.opportunity.title))])]), _vm._v(" "), _c('div', {
    staticClass: "flex items-center space-x-6"
  }, [_c('div', {
    staticClass: "w-48 flex-shrink-0"
  }, [_vm.opportunity.imageUrl && _vm.opportunity.imageUrl !== '' ? _c('img', {
    staticClass: "w-full rounded-lg transition duration-300 transform hover:scale-105 cursor-pointer",
    attrs: {
      "src": __webpack_require__(86),
      "alt": _vm.opportunity.title
    },
    on: {
      "click": _vm.handleClick
    }
  }) : _c('img', {
    staticClass: "w-full rounded-lg transition duration-300 transform hover:scale-105 cursor-pointer",
    attrs: {
      "src": __webpack_require__(86),
      "alt": _vm.opportunity.title
    },
    on: {
      "click": _vm.handleClick
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "text-left flex-1"
  }, [_c('p', {
    staticClass: "text-sm text-gray-600 mt-1"
  }, [_vm._v("\n           " + _vm._s(_vm.opportunity.opportunityCaption) + "\n        ")])])])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/landing/Opportunity.vue?vue&type=template&id=5466865f

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/landing/Opportunity.vue?vue&type=script&lang=js
/* harmony default export */ var Opportunityvue_type_script_lang_js = ({
  name: 'LandingOpportunity',
  props: {
    opportunity: {
      type: Object,
      required: true
    }
  },
  methods: {
    handleClick() {
      this.$emit('open-opportunity', this.opportunity);
    }
  }
});
// CONCATENATED MODULE: ./components/landing/Opportunity.vue?vue&type=script&lang=js
 /* harmony default export */ var landing_Opportunityvue_type_script_lang_js = (Opportunityvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/landing/Opportunity.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  landing_Opportunityvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4d96b230"
  
)

/* harmony default export */ var Opportunity = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/opp.2d8e158.jpg";

/***/ })

};;
//# sourceMappingURL=landing-opportunity.js.map