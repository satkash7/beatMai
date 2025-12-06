exports.ids = [4];
exports.modules = {

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/default.526b6e3.jpg";

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/landing/Blog.vue?vue&type=template&id=5470de9d
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('client-only', [_c('div', {
    staticClass: "max-w-[520px] xl:max-w-[580px] bg-white shadow-md rounded-lg overflow-hidden transition-transform duration-500 hover:scale-105 hover:shadow-xl ml-7 mr-7 mt-10 mb-10",
    on: {
      "click": _vm.handleClick
    }
  }, [_vm.blog.imageUrl != null && _vm.blog.imageUrl != '' ? _c('img', {
    staticClass: "w-full h-48 object-cover rounded-t-lg transition-opacity duration-500 ease-in-out hover:opacity-80",
    attrs: {
      "src": _vm.blog.imageUrl
    }
  }) : _c('img', {
    staticClass: "w-full h-48 object-cover rounded-t-lg transition-opacity duration-500 ease-in-out hover:opacity-80",
    attrs: {
      "src": __webpack_require__(83)
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "text-container max-w-[385px] mx-auto"
  }, [_c('h4', {
    staticClass: "text-xl text-neutral-800 font-semibold hover:text-blue-500 transition duration-300"
  }, [_vm._v(_vm._s(_vm.blog.blogTitle))]), _vm._v(" "), _c('p', {
    staticClass: "text-sm text-gray-700 leading-relaxed"
  }, [_vm._v("\n          " + _vm._s(_vm.blog.blogCaption) + "\n        ")])])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/landing/Blog.vue?vue&type=template&id=5470de9d

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/landing/Blog.vue?vue&type=script&lang=js
/* harmony default export */ var Blogvue_type_script_lang_js = ({
  name: 'LandingBlog',
  props: {
    blog: {
      type: Object,
      required: true
    }
  },
  methods: {
    handleClick() {
      this.$emit('open-blog', this.blog);
    }
  }
});
// CONCATENATED MODULE: ./components/landing/Blog.vue?vue&type=script&lang=js
 /* harmony default export */ var landing_Blogvue_type_script_lang_js = (Blogvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/landing/Blog.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  landing_Blogvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "5de25a95"
  
)

/* harmony default export */ var Blog = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=landing-blog.js.map