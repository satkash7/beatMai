exports.ids = [5];
exports.modules = {

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(80);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("a7e6f06e", content, true, context)
};

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Comment_vue_vue_type_style_index_0_id_5acf55af_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Comment_vue_vue_type_style_index_0_id_5acf55af_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Comment_vue_vue_type_style_index_0_id_5acf55af_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Comment_vue_vue_type_style_index_0_id_5acf55af_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Comment_vue_vue_type_style_index_0_id_5acf55af_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".modal[data-v-5acf55af]{background-color:rgba(0,0,0,.7);height:100%;left:0;overflow:auto;position:fixed;top:0;width:100%;z-index:100000}.modal-content[data-v-5acf55af]{background-color:#fefefe;border:1px solid #888;border-radius:12px;margin:10% auto;padding:20px;width:60%}.close[data-v-5acf55af]{color:#030a3c;float:right;font-size:28px;font-weight:700;margin-top:-10px}.close[data-v-5acf55af]:focus,.close[data-v-5acf55af]:hover{color:red;cursor:pointer;-webkit-text-decoration:none;text-decoration:none}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/landing/Comment.vue?vue&type=template&id=5acf55af&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('client-only', [_c('div', {
    staticClass: "full ml-6 mr-6 mx-auto justify-left"
  }, [_c('hr'), _vm._v(" "), _vm._l(_vm.comments, function (comment) {
    return _c('div', {
      key: comment.id,
      staticClass: "mx-auto justify-left bg-white shadow-lg rounded-lg overflow-hidden"
    }, [_c('div', {
      staticClass: "px-6 py-4 bg-gray-100 flex items-center"
    }, [_c('router-link', {
      staticClass: "w-6 h-6 mr-2 flex items-center justify-center overflow-hidden rounded-full bg-gray-200",
      attrs: {
        "to": '#'
      }
    }, [comment.ownerUrl ? _c('img', {
      staticClass: "w-full h-full object-cover",
      attrs: {
        "src": comment.ownerUrl,
        "alt": "Profile Picture"
      }
    }) : _c('base-button', {
      staticClass: "w-6 h-6 bg-gradient-to-r from-[#468ef9] to-[#030a3c] text-white rounded-full flex items-center justify-center"
    }, [_c('AccountIcon', {
      attrs: {
        "size": 14
      }
    })], 1)], 1), _vm._v(" "), _c('b', {
      staticClass: "mr-1"
    }, [_c('router-link', {
      staticClass: "text-blue-600 hover:underline",
      attrs: {
        "to": '#'
      }
    }, [_vm._v("\n      " + _vm._s(comment.commentOwner) + "\n    ")])], 1), _vm._v(" \n  | " + _vm._s(comment.creation_date) + "\n")], 1), _vm._v(" "), _c('div', {
      staticClass: "px-6 py-4"
    }, [_c('p', {
      staticClass: "text-gray-700"
    }, [_vm._v("\n          " + _vm._s(comment.commentData) + "\n        ")])]), _vm._v(" "), _c('br')]);
  }), _vm._v(" "), _c('br'), _vm._v(" "), _c('hr'), _vm._v(" "), _c('form', {
    on: {
      "submit": function ($event) {
        $event.preventDefault();
        return _vm.prePostComment.apply(null, arguments);
      }
    }
  }, [_c('hr'), _c('br'), _vm._v(" "), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.vData,
      expression: "vData"
    }],
    staticClass: "w-full px-2 py-4 sm:py-3 rounded-lg sm:rounded-md text-sm focus:outline-none border border-[#AAAAAA] placeholder-[#888]",
    attrs: {
      "rows": "3",
      "placeholder": "Votre commentaire ici!"
    },
    domProps: {
      "value": _vm.vData
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.vData = $event.target.value;
      }
    }
  }), _c('br'), _vm._v(" "), _c('div', {
    staticClass: "flex flex-col sm:flex-row"
  }, [_c('BaseButton', {
    staticClass: "px-10 py-4 bg-inherit text-gradient border border-[#4A8FF6] text-base",
    attrs: {
      "type": "submit"
    }
  }, [_c('b', [_vm._v("Poster un commentaire")])])], 1)]), _vm._v(" "), _vm.showModal ? _c('div', {
    staticClass: "modal"
  }, [_c('div', {
    staticClass: "modal-content"
  }, [_c('span', {
    staticClass: "close",
    on: {
      "click": _vm.closeModal
    }
  }, [_vm._v("×")]), _vm._v(" "), _vm.userLoggedIn == false && _vm.selected == false ? _c('div', [_c('base-button', {
    staticClass: "px-8 xl:px-10 py-3 mt-2 bg-inherit text-gradient border border-[#0c66ee]",
    on: {
      "click": _vm.postAnonymously
    }
  }, [_vm._v("\n              Poster mon commentaire\n          ")]), _vm._v(" "), _c('br'), _vm._v(" "), _vm.textCopiedToClipBoard == true || _vm.readytoRedirect == true ? _c('div', {
    staticClass: "flex bg-green-400 text-white mt-2 mb-2 px-4 py-2 rounded-md mb-4"
  }, [_c('base-button', {
    staticClass: "w-6 h-6 mt-0 mr-1 bg-gradient-to-r from-[#468ef9] to-[#030a3c] text-white rounded-full flex items-center justify-center relative"
  }, [_c('AccountIcon', {
    attrs: {
      "size": 14
    }
  })], 1), _vm._v(" "), _c('span', [_vm._v("\n              We saved your comment, We'll post it when you log in. redirecting...\n            ")])], 1) : _vm._e()], 1) : _vm._e(), _vm._v(" "), _vm.selected || _vm.userLoggedIn == true ? _c('form', {
    attrs: {
      "id": "comments"
    },
    on: {
      "submit": function ($event) {
        $event.preventDefault();
        return _vm.postComment.apply(null, arguments);
      }
    }
  }, [_c('h2', {
    staticClass: "text-2xl font-semibold"
  }, [_vm._v("Publier un Commentaire "), _c('span', {
    staticClass: "text-header-gradient"
  })]), _vm._v(" "), _vm.addedRequest ? _c('div', {
    staticClass: "bg-green-400 text-white px-4 py-2 rounded-md mb-4"
  }, [_vm._v("\n            Votre commentaire a été enregistré avec succès.\n          ")]) : _vm._e(), _vm._v(" "), _vm.failedRequest ? _c('div', {
    staticClass: "bg-red-400 text-white px-4 py-2 rounded-md mb-4"
  }, [_vm._v("\n            Something unexpected happened, Please try again later.\n          ")]) : _vm._e(), _vm._v(" "), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.vData,
      expression: "vData"
    }],
    staticClass: "w-full px-2 py-4 sm:py-3 rounded-lg sm:rounded-md text-sm focus:outline-none border border-[#AAAAAA] placeholder-[#888]",
    attrs: {
      "rows": "3",
      "placeholder": "Votre commentaire ici!"
    },
    domProps: {
      "value": _vm.vData
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.vData = $event.target.value;
      }
    }
  }), _c('br'), _vm._v(" "), _c('div', {
    staticClass: "flex flex-col sm:flex-row"
  }, [_c('BaseButton', {
    staticClass: "px-10 py-4 bg-inherit text-gradient border border-[#4A8FF6] text-base",
    attrs: {
      "type": "submit"
    }
  }, [_vm._v("\n              Publier ce commentaire\n            ")])], 1)]) : _vm._e()])]) : _vm._e()], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/landing/Comment.vue?vue&type=template&id=5acf55af&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/landing/Comment.vue?vue&type=script&lang=js
/* harmony default export */ var Commentvue_type_script_lang_js = ({
  name: 'LandingBlog',
  props: {
    type: {
      type: String,
      default: null
    },
    id: {
      required: true,
      type: Number,
      default: null
    },
    route: {
      required: true,
      type: String,
      default: null
    },
    creator: {
      required: true,
      type: String,
      default: null
    }
  },
  data() {
    return {
      textCopiedToClipBoard: false,
      readytoRedirect: false,
      userLoggedIn: null,
      addedRequest: false,
      failedRequest: false,
      commentOwner: "",
      commentType: "",
      commentTypeId: "",
      commentData: "",
      commentHidden: "0",
      showModal: false,
      selected: false,
      vData: "",
      fallbackLink: "",
      commentSaved: false,
      comments: []
    };
  },
  async mounted() {
    // Fetch data from the API endpoint
    this.userLoggedIn = sessionStorage.getItem('username') ? true : false;
    await this.$axios.get('/comment/getall?type=' + this.type + '&id=' + this.id).then(response => {
      this.comments = response.data.comments;
      console.log("comments =================> ");
      console.log("Response:", JSON.stringify(response));
    }).catch(error => {
      console.error('Could not fetch the comments ==============>:', error);
    });
  },
  updated() {
    this.$nextTick(() => {
      if (window.location.hash === '#comments') {
        window.scrollTo(0, document.body.scrollHeight);
        // check if we have saved in the  local storage a value for comment
        this.vData = localStorage.getItem('commentdata');
        if (this.vData && this.vData != "" && this.vData != undefined && this.vData != 'undefined' && this.vData != null && this.commentSaved == false) {
          this.prePostComment();
          this.postComment(true);
        }
      }
    });
  },
  methods: {
    postAnonymously() {
      this.selected = true;
    },
    loginthenPost() {
      this.copyToClipboard(this.vData);
      this.readytoRedirect = false;
      setTimeout(() => {
        this.textCopiedToClipBoard = false;
      }, 100);
      this.readytoRedirect = true;
      setTimeout(() => {
        this.readytoRedirect = false;
        localStorage.setItem('commentdata', this.vData); // Save user comment in browser before continuing.
        // localStorage.setItem('type', this.type);
        // localStorage.setItem('id', this.id);

        if (this.type == "doc") {
          this.fallbackLink = "documentations&route=" + this.route + '&creator=' + this.creator;
        } else {
          this.fallbackLink = this.type + "s&route=" + this.route + '&creator=' + this.creator;
        }
        this.$router.push("/u?next=" + this.fallbackLink);
      }, 4000);
    },
    copyToClipboard(text) {
      // Use the Clipboard API to copy text to the clipboard
      navigator.clipboard.writeText(text).then(() => {
        console.log('Text copied to clipboard:', text);
        this.textCopiedToClipBoard = true;
      }).catch(error => {
        console.error('Error copying to clipboard:', error);
      });
    },
    prePostComment() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    async postComment(fromredirect = false) {
      try {
        this.commentOwner = sessionStorage.getItem('username') ? sessionStorage.getItem('username') : "anonymous";
        const response = await this.$axios.post('/comment/add', {
          commentOwner: this.commentOwner,
          // to be checked in backend
          commentType: this.type,
          commentTypeId: this.id,
          commentData: this.vData,
          commentHidden: this.commentHidden
        });
        console.log("Response:", JSON.stringify(response));
        if (response.data.status_code === 200) {
          this.addedRequest = true;
          this.commentSaved = true;
          localStorage.removeItem('commentdata');
          // Hide success message after 3 seconds
          setTimeout(() => {
            this.addedRequest = false;
            this.commentData = "";
            this.vData = "";
            this.showModal = false;
            if (fromredirect != true) {
              if (this.type == "doc") {
                this.$router.push('/' + this.creator + "/documentations/" + this.route + "#comments");
              } else {
                this.$router.push('/' + this.creator + "/" + this.type + "s/" + this.route + "#comments");
              }
              location.reload();
            } else {
              // do not send user again to #comments to avoid issues.
              if (this.type == "doc") {
                this.$router.push('/' + this.creator + "/documentations/" + this.route);
              } else {
                this.$router.push('/' + this.creator + "/" + this.type + "s/" + this.route);
              }
              location.reload();
            }
          }, 4000);
        } else {
          this.failedRequest = true;
          setTimeout(() => {
            this.addedRequest = false;
          }, 3000);
        }
      } catch (error) {
        console.error(error);
        this.failedRequest = true;
        setTimeout(() => {
          this.addedRequest = false;
        }, 3000);
      }
    }
  }
});
// CONCATENATED MODULE: ./components/landing/Comment.vue?vue&type=script&lang=js
 /* harmony default export */ var landing_Commentvue_type_script_lang_js = (Commentvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/landing/Comment.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(79)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  landing_Commentvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5acf55af",
  "ff04d482"
  
)

/* harmony default export */ var Comment = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {BaseButton: __webpack_require__(11).default,BaseButton: __webpack_require__(11).default})


/***/ })

};;
//# sourceMappingURL=landing-comment.js.map