exports.ids = [15,4,9];
exports.modules = {

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(120);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("89a9b684", content, true, context)
};

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6517666c_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(105);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6517666c_prod_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6517666c_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6517666c_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6517666c_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".line-clamp-2{-webkit-line-clamp:2}.line-clamp-2,.line-clamp-3{display:-webkit-box;-webkit-box-orient:vertical;overflow:hidden}.line-clamp-3{-webkit-line-clamp:3}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blogs/index.vue?vue&type=template&id=6517666c
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('client-only', [_c('div', {
    staticClass: "w-full pt-16"
  }, [_c('div', {
    staticClass: "container mx-auto px-4 md:px-6"
  }, [_c('section', {
    staticClass: "text-center py-8 mb-8"
  }, [_c('h1', {
    staticClass: "text-3xl md:text-4xl font-bold text-gray-900 mb-3"
  }, [_c('span', {
    staticClass: "text-blue-600"
  }, [_vm._v("Publications")]), _vm._v(" | Beat Expertise\n        ")]), _vm._v(" "), _c('p', {
    staticClass: "text-gray-600 max-w-2xl mx-auto"
  }, [_vm._v("\n          Découvrez nos articles experts et nos analyses techniques.\n        ")])]), _vm._v(" "), _c('section', {
    staticClass: "mb-10"
  }, [_c('LandingSearch', {
    attrs: {
      "type": "blog"
    }
  })], 1), _vm._v(" "), _c('section', [_vm.blogs.length ? _c('div', {
    staticClass: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
  }, _vm._l(_vm.blogs, function (blogItem) {
    return _c('article', {
      key: blogItem.id,
      staticClass: "bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col"
    }, [_c('div', {
      staticClass: "h-48 overflow-hidden"
    }, [_c('a', {
      staticClass: "block",
      attrs: {
        "href": '/blogs/' + blogItem.blogRoute
      }
    }, [_c('img', {
      staticClass: "w-full h-full object-cover hover:scale-105 transition-transform duration-500",
      attrs: {
        "src": blogItem.imageUrl || '/placeholder-blog.jpg',
        "alt": blogItem.blogTitle
      }
    })])]), _vm._v(" "), _c('div', {
      staticClass: "p-5 flex-grow flex flex-col"
    }, [_c('div', {
      staticClass: "mb-3"
    }, [_c('span', {
      staticClass: "inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold"
    }, [_vm._v("\n                  " + _vm._s(blogItem.blogCategory) + "\n                ")])]), _vm._v(" "), _c('a', {
      staticClass: "block mb-3",
      attrs: {
        "href": '/blogs/' + blogItem.blogRoute
      }
    }, [_c('h3', {
      staticClass: "text-lg font-bold text-gray-900 line-clamp-2 leading-tight hover:text-blue-600 transition-colors"
    }, [_vm._v("\n                  " + _vm._s(blogItem.blogTitle) + "\n                ")])]), _vm._v(" "), _c('p', {
      staticClass: "text-gray-600 mb-4 flex-grow line-clamp-3 text-sm"
    }, [_vm._v("\n                " + _vm._s(_vm.getExcerpt(blogItem.blogCaption || blogItem.blogData)) + "\n              ")]), _vm._v(" "), _c('div', {
      staticClass: "flex items-center justify-between text-xs text-gray-500 mb-4"
    }, [_c('span', [_vm._v(_vm._s(_vm.formatDate(blogItem.creation_date)))]), _vm._v(" "), _c('span', [_vm._v(_vm._s(blogItem.realnames))])]), _vm._v(" "), _c('div', {
      staticClass: "mt-4 pt-3 border-t border-gray-100"
    }, [_c('a', {
      staticClass: "text-blue-600 hover:text-blue-800 font-medium flex items-center justify-center transition-colors duration-300 group",
      attrs: {
        "href": '/blogs/' + blogItem.blogRoute
      }
    }, [_vm._v("\n                  Lire la suite\n                  "), _c('svg', {
      staticClass: "w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300",
      attrs: {
        "fill": "none",
        "stroke": "currentColor",
        "viewBox": "0 0 24 24",
        "xmlns": "http://www.w3.org/2000/svg"
      }
    }, [_c('path', {
      attrs: {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "2",
        "d": "M9 5l7 7-7 7"
      }
    })])])])])]);
  }), 0) : _c('div', {
    staticClass: "text-center py-12"
  }, [_c('svg', {
    staticClass: "h-16 w-16 text-gray-300 mx-auto mb-4",
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "fill": "none",
      "viewBox": "0 0 24 24",
      "stroke": "currentColor"
    }
  }, [_c('path', {
    attrs: {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      "d": "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    }
  })]), _vm._v(" "), _c('h3', {
    staticClass: "text-lg font-semibold text-gray-700 mb-2"
  }, [_vm._v("Aucune publication disponible")]), _vm._v(" "), _c('p', {
    staticClass: "text-gray-500"
  }, [_vm._v("Revenez plus tard pour découvrir nos nouveaux articles.")])])])])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/blogs/index.vue?vue&type=template&id=6517666c

// EXTERNAL MODULE: ./mixins/aos.js
var aos = __webpack_require__(11);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blogs/index.vue?vue&type=script&lang=js

/* harmony default export */ var blogsvue_type_script_lang_js = ({
  name: 'blog-component',
  layout: 'blog',
  mixins: [aos["a" /* default */]],
  data() {
    return {
      year: `${new Date().toLocaleString('fr-fr', {
        year: 'numeric'
      })}`,
      blogs: []
    };
  },
  methods: {
    getExcerpt(content) {
      if (!content) return 'Aucun résumé disponible';

      // Remove HTML tags
      const plainText = content.replace(/<[^>]*>/g, '');

      // Truncate to 120 characters
      return plainText.length > 120 ? plainText.substring(0, 120) + '...' : plainText;
    },
    formatDate(dateString) {
      if (!dateString) return '';
      const date = new Date(dateString);
      return new Intl.DateTimeFormat('fr-FR', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      }).format(date);
    }
  },
  async fetch() {
    try {
      const response = await this.$axios.get('/blog/getall');
      this.blogs = response.data.blogs.filter(blog => blog.publicPost == '0');
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  },
  head() {
    return {
      title: "Beat Expertise | Publications",
      meta: [{
        hid: 'description',
        content: 'BEAT est un bureau d\'expertise et d\'accompagnement technique basé à Goma, en République Démocratique du Congo, dédié à offrir des solutions innovantes et un soutien spécialisé.'
      }, {
        hid: 'keywords',
        name: 'keywords',
        content: 'Beat expertise'
      }, {
        hid: 'robots',
        content: 'index, follow'
      }, {
        hid: 'googlebot',
        content: 'index, follow'
      }, {
        hid: 'bingbot',
        content: 'index, follow'
      }, {
        hid: 'yandex',
        content: 'index, follow'
      },
      // Open Graph (Facebook, LinkedIn, etc.)
      {
        hid: 'og:title',
        property: 'og:title',
        content: "Beat Expertise | Publications"
      }, {
        hid: 'og:description',
        property: 'og:description',
        content: 'BEAT est un bureau d\'expertise et d\'accompagnement technique basé à Goma, en République Démocratique du Congo, dédié à offrir des solutions innovantes et un soutien spécialisé.'
      }, {
        hid: 'og:image',
        property: 'og:image',
        content: "https://storage.everlytools.com/beatexpertise.jpg"
      }, {
        hid: 'og:url',
        property: 'og:url',
        content: "https://beatexpertise.com/blogs"
      }, {
        hid: 'og:locale',
        property: 'og:locale',
        content: 'fr_FR'
      },
      // Primary language
      {
        hid: 'og:locale:alternate',
        property: 'og:locale:alternate',
        content: 'en_GB'
      }, {
        hid: 'og:locale:alternate',
        property: 'og:locale:alternate',
        content: 'zh_CN'
      }, {
        hid: 'og:locale:alternate',
        property: 'og:locale:alternate',
        content: 'hi_IN'
      }, {
        hid: 'og:locale:alternate',
        property: 'og:locale:alternate',
        content: 'es_ES'
      }, {
        hid: 'og:locale:alternate',
        property: 'og:locale:alternate',
        content: 'en_US'
      }, {
        hid: 'og:type',
        property: 'og:type',
        content: 'website'
      },
      // Twitter Meta Tags
      {
        hid: 'twitter:title',
        content: "Beat Expertise | Publications"
      }, {
        hid: 'twitter:description',
        content: 'BEAT est un bureau d\'expertise et d\'accompagnement technique basé à Goma, en République Démocratique du Congo, dédié à offrir des solutions innovantes et un soutien spécialisé.'
      }, {
        hid: 'twitter:image',
        content: "https://storage.everlytools.com/beatexpertise.jpg"
      }, {
        hid: 'twitter:card',
        content: 'summary_large_image'
      }, {
        hid: 'twitter:url',
        content: 'https://beatexpertise.com/blogs'
      }]
    };
  }
});
// CONCATENATED MODULE: ./pages/blogs/index.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_blogsvue_type_script_lang_js = (blogsvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./pages/blogs/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(119)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_blogsvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "6b179c8b"
  
)

/* harmony default export */ var blogs = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {LandingSearch: __webpack_require__(90).default})


/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/opp.2d8e158.jpg";

/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/default.526b6e3.jpg";

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/landing/Blog.vue?vue&type=template&id=f1647522
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('client-only', [_c('div', {
    staticClass: "max-w-[520px] xl:max-w-[580px] bg-white shadow-md rounded-lg overflow-hidden transition-transform duration-500 hover:scale-105 hover:shadow-xl ml-7 mr-7 mt-10 mb-10",
    on: {
      "click": _vm.handleClick
    }
  }, [_vm.opportunity == true ? _c('span', [_c('img', {
    staticClass: "w-full h-48 object-cover rounded-t-lg transition-opacity duration-500 ease-in-out hover:opacity-80",
    attrs: {
      "src": __webpack_require__(86)
    }
  })]) : _c('span', [_vm.blog.imageUrl != null && _vm.blog.imageUrl != '' ? _c('img', {
    staticClass: "w-full h-48 object-cover rounded-t-lg transition-opacity duration-500 ease-in-out hover:opacity-80",
    attrs: {
      "src": _vm.blog.imageUrl
    }
  }) : _c('img', {
    staticClass: "w-full h-48 object-cover rounded-t-lg transition-opacity duration-500 ease-in-out hover:opacity-80",
    attrs: {
      "src": __webpack_require__(87)
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "text-container max-w-[385px] mx-auto"
  }, [_c('h4', {
    staticClass: "text-xl text-neutral-800 font-semibold hover:text-blue-500 transition duration-300"
  }, [_vm._v(_vm._s(_vm.blog.blogTitle))]), _vm._v(" "), _c('p', {
    staticClass: "text-sm text-gray-700 leading-relaxed"
  }, [_vm._v("\n        " + _vm._s(_vm.blog.blogCaption) + "\n      ")])])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/landing/Blog.vue?vue&type=template&id=f1647522

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/landing/Blog.vue?vue&type=script&lang=js
/* harmony default export */ var Blogvue_type_script_lang_js = ({
  name: 'LandingBlog',
  props: {
    blog: {
      type: Object,
      required: true
    },
    opportunity: {
      type: Object,
      required: false
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

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/landing/Search.vue?vue&type=template&id=baa337a0
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('client-only', [_c('div', {
    staticClass: "full ml-6 mr-6 mx-auto justify-left"
  }, [_c('form', {
    on: {
      "submit": function ($event) {
        $event.preventDefault();
        return _vm.runSearch.apply(null, arguments);
      }
    }
  }, [_c('hr'), _c('br'), _vm._v(" "), _c('div', {
    staticClass: "flex items-center justify-between"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.query,
      expression: "query"
    }],
    staticClass: "w-full px-2 py-4 sm:py-3 rounded-lg sm:rounded-md text-sm focus:outline-none border border-[#AAAAAA] placeholder-[#888] mr-2 ml-2 border border-gradient-to-r from-[#468ef9] to-[#030a3c]",
    attrs: {
      "placeholder": _vm.placeholderTitle
    },
    domProps: {
      "value": _vm.query
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.query = $event.target.value;
      }
    }
  }), _vm._v(" "), _c('base-button', {
    staticClass: "h-12 mt-0 bg-gradient-to-r from-[#468ef9] to-[#030a3c] text-white rounded-full flex items-center justify-center relative"
  }, [_vm._v("\n    "), _c('SearchIcon', {
    attrs: {
      "size": 34
    }
  }), _vm._v(" Rechercher   \n\n  ")], 1)], 1), _vm._v(" "), _vm.validsearch == true ? _c('div', {
    staticClass: "flex justify-center items-center text-[#4A8FF6]"
  }, [_c('svg', {
    staticClass: "animate-spin h-5 w-5 text-gray-600 mr-3",
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "fill": "none",
      "viewBox": "0 0 24 24"
    }
  }, [_c('circle', {
    staticClass: "opacity-25",
    attrs: {
      "cx": "12",
      "cy": "12",
      "r": "10",
      "stroke": "currentColor",
      "stroke-width": "4"
    }
  }), _vm._v(" "), _c('path', {
    staticClass: "opacity-75",
    attrs: {
      "fill": "currentColor",
      "d": "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.004 8.004 0 014.01 4.01L2.585 5.436A9.956 9.956 0 002 12c0 5.523 4.477 10 10 10v-4c-3.58 0-6.763-1.926-8.493-5.045z"
    }
  })]), _vm._v(" "), _c('span', [_c('b', [_vm._v("Recherche en cours : " + _vm._s(this.type == 'doc' ? 'documentation' : this.type) + "s ...")])])]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "w-full px-6 sm:px-0 my-0 py-0 flex flex-col items-center justify-center space-y-4 text-center"
  }, [_vm.showSearchResultTitle == true ? _c('h3', {
    staticClass: "text-1xl text-neutral-800 font-semibold"
  }, [_vm._v("\n        Recherche pour : "), _c('span', {
    staticClass: "text-header-gradient-big text-1xl"
  }, [_vm._v(" " + _vm._s(this.query))])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "flex flex-wrap items-center justify-center"
  }, _vm._l(_vm.searchResult, function (blogItem) {
    return _c('LandingBlog', {
      key: blogItem.id,
      attrs: {
        "opportunity": blogItem.type == 'blog' ? false : true,
        "blog": blogItem
      },
      on: {
        "open-blog": function ($event) {
          return _vm.showSingleBlog(blogItem);
        }
      }
    });
  }), 1), _vm._v(" "), _vm.invalidsearch ? _c('div', {
    staticClass: "bg-red-400 text-white px-4 py-2 rounded-md mb-4"
  }, [_vm._v("\n        Aucun résultat trouvé pour votre recherche.\n      ")]) : _vm._e()]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('br'), _c('br'), _vm._v(" "), _c('br'), _c('br')])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/landing/Search.vue?vue&type=template&id=baa337a0

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/landing/Search.vue?vue&type=script&lang=js
/* harmony default export */ var Searchvue_type_script_lang_js = ({
  name: 'LandingSearch',
  props: {
    type: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      query: "",
      invalidsearch: false,
      validsearch: false,
      showSearchResultTitle: false,
      searchResult: [],
      placeholderTitle: this.type == 'doc' ? 'Search by documentations category, title, tool name, technology, etc...' : 'Rechercher une publication ici...'
    };
  },
  methods: {
    async runSearch() {
      this.validsearch = true;
      try {
        const response = await this.$axios.get('/blog/getall?search=' + this.query);
        if (response.data.status_code === 200) {
          this.showSearchResultTitle = true;
          if (this.type == 'blog') {
            // exclude blogs with publicPost == '0'
            this.searchResult = response.data.blogs;
            // this.searchResult = response.data.blogs;
          } else if (this.type == "opportunitie") {
            this.searchResult = response.data.opportunities;
          }

          // console.log("We got something from search result :", JSON.stringify(this.searchResult));

          setTimeout(() => {
            this.validsearch = false;
          }, 100);

          //animate failure in case we didn't find the result or result is invalid or empty
          if (this.searchResult.length === 0) {
            this.invalidsearch = true;
            setTimeout(() => {
              this.invalidsearch = false;
              this.validsearch = false;
            }, 3000);
          }
        } else {
          this.invalidsearch = true;
          setTimeout(() => {
            this.invalidsearch = false;
            this.validsearch = false;
          }, 3000);
        }
      } catch (error) {
        console.error(error);
        this.invalidsearch = true;
        setTimeout(() => {
          this.invalidsearch = false;
          this.validsearch = false;
        }, 3000);
      }
    },
    showSingleBlog(blog) {
      this.$router.push({
        path: `/blogs/${blog.blogRoute}`
      });
    },
    showSingleOpportunity(opportunity) {
      this.$router.push({
        path: `/opportunities/${opportunity.opportunityRoute}`
      });
    }
  }
});
// CONCATENATED MODULE: ./components/landing/Search.vue?vue&type=script&lang=js
 /* harmony default export */ var landing_Searchvue_type_script_lang_js = (Searchvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/landing/Search.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  landing_Searchvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "ea519a4a"
  
)

/* harmony default export */ var Search = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {BaseButton: __webpack_require__(18).default,LandingBlog: __webpack_require__(88).default})


/***/ })

};;
//# sourceMappingURL=index.js.map