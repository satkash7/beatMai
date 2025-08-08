exports.ids = [9,4,8];
exports.modules = {

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/default.526b6e3.jpg";

/***/ }),

/***/ 81:
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
      "src": __webpack_require__(80)
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
  "3464ac1c"
  
)

/* harmony default export */ var Blog = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/landing/Opportunity.vue?vue&type=template&id=d4ff6c3a
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
      "src": _vm.opportunity.imageUrl,
      "alt": _vm.opportunity.title
    },
    on: {
      "click": _vm.handleClick
    }
  }) : _c('img', {
    staticClass: "w-full rounded-lg transition duration-300 transform hover:scale-105 cursor-pointer",
    attrs: {
      "src": __webpack_require__(80),
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

// CONCATENATED MODULE: ./components/landing/Opportunity.vue?vue&type=template&id=d4ff6c3a

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
  "50f1d033"
  
)

/* harmony default export */ var Opportunity = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/landing/Search.vue?vue&type=template&id=3981a0b2
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
  }, [_vm._v(" " + _vm._s(this.query))])]) : _vm._e(), _vm._v(" "), this.type == 'blog' ? _c('div', {
    staticClass: "flex flex-wrap items-center justify-center"
  }, _vm._l(_vm.searchResult, function (blogItem) {
    return _c('LandingBlog', {
      key: blogItem.id,
      attrs: {
        "blog": blogItem
      },
      on: {
        "open-blog": function ($event) {
          return _vm.showSingleBlog(blogItem);
        }
      }
    });
  }), 1) : _vm._e(), _vm._v(" "), this.type == 'opportunitie' ? _c('div', {
    staticClass: "flex flex-wrap items-center justify-center"
  }, _vm._l(_vm.searchResult, function (opportunityItem) {
    return _c('LandingOpportunity', {
      key: opportunityItem.id,
      attrs: {
        "opportunity": opportunityItem
      },
      on: {
        "open-opportunity": function ($event) {
          return _vm.showSingleOpportunity(opportunityItem);
        }
      }
    });
  }), 1) : _vm._e(), _vm._v(" "), _vm.invalidsearch ? _c('div', {
    staticClass: "bg-red-400 text-white px-4 py-2 rounded-md mb-4"
  }, [_vm._v("\n        Aucun résultat trouvé pour votre recherche.\n      ")]) : _vm._e()]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('br'), _c('br'), _vm._v(" "), _c('br'), _c('br')])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/landing/Search.vue?vue&type=template&id=3981a0b2

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
  "75a7c210"
  
)

/* harmony default export */ var Search = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {BaseButton: __webpack_require__(11).default,LandingBlog: __webpack_require__(81).default,LandingOpportunity: __webpack_require__(83).default})


/***/ })

};;
//# sourceMappingURL=landing-search.js.map