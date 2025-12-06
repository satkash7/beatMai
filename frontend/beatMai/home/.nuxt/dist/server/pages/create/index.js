exports.ids = [16];
exports.modules = {

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(116);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("7a84732e", content, true, context)
};

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_9f21790e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(100);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_9f21790e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_9f21790e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_9f21790e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_9f21790e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@media (min-width:1024px){#sample[data-v-9f21790e]{width:100%}}.modal-overlay[data-v-9f21790e]{align-items:center;background-color:rgba(0,0,0,.5);display:flex;height:100%;justify-content:center;left:0;position:fixed;top:0;width:100%;z-index:999}.modal-content[data-v-9f21790e]{background-color:#fff;border-radius:10px;max-width:500px;padding:20px;width:80%}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/create/index.vue?vue&type=template&id=9f21790e&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('client-only', [_c('div', {
    staticClass: "w-full container mx-auto px-6"
  }, [_c('section', {
    staticClass: "bg-partner relative max-w-full sm:mx-6 my-0 shadow sm:rounded-2xl overflow-hidden"
  }, [_c('div', {
    staticClass: "w-full px-8 sm:px-0 py-0 flex flex-col justify-end space-y-4"
  }, [_c('br'), _c('br'), _c('br'), _c('br'), _c('br'), _c('br'), _vm._v(" "), _c('h2', {
    staticClass: "text-2xl text-neutral-800 font-semibold text-center"
  }, [_c('span', {
    staticClass: "text-header-gradient-big"
  }, [_vm._v(_vm._s(_vm.title))])]), _vm._v(" "), _vm.isModalOpen ? _c('div', {
    staticClass: "modal-overlay"
  }, [_c('div', {
    staticClass: "modal-content"
  }, [_c('h3', [_vm._v("Inserer une image au milieu du contenu")]), _vm._v(" "), _c('input', {
    staticClass: "border p-2 rounded-md",
    attrs: {
      "type": "file"
    },
    on: {
      "change": _vm.handleImageUpload
    }
  }), _vm._v(" "), _vm.successMessage ? _c('div', {
    staticClass: "bg-green-200 text-green-800 py-4 px-8 rounded my-6 text-center"
  }, [_c('p', {
    domProps: {
      "innerHTML": _vm._s(_vm.successMessage)
    }
  })]) : _vm._e(), _vm._v(" "), _vm.errorMessage ? _c('div', {
    staticClass: "bg-red-200 text-green-800 py-4 px-8 rounded my-6 text-center"
  }, [_c('p', {
    domProps: {
      "innerHTML": _vm._s(_vm.errorMessage)
    }
  })]) : _vm._e(), _vm._v(" "), _vm.imagePreview ? _c('div', {
    staticClass: "mt-4"
  }, [_c('img', {
    staticClass: "w-32 h-32 object-cover rounded-md",
    attrs: {
      "src": _vm.imagePreview,
      "alt": "Preview"
    }
  })]) : _vm._e(), _vm._v(" "), _c('button', {
    staticClass: "bg-blue-500 text-white px-4 py-2 rounded-md mt-4",
    on: {
      "click": _vm.submitImage
    }
  }, [_vm._v("Charger l'image")]), _vm._v(" "), _c('button', {
    staticClass: "bg-red-500 text-white px-4 py-2 rounded-md mt-2",
    on: {
      "click": _vm.closeImageUploadModal
    }
  }, [_vm._v("Annuler")])])]) : _vm._e(), _vm._v(" "), _c('form', {
    staticClass: "w-full max-w-6xl ml-6",
    on: {
      "submit": function ($event) {
        $event.preventDefault();
        return _vm.submitAndPublish.apply(null, arguments);
      }
    }
  }, [_c('div', {
    staticClass: "mb-8"
  }, [_c('label', {
    staticClass: "block text-md font-medium text-blue-700",
    attrs: {
      "for": "titleInput"
    }
  }, [_vm._v("\n            Titre de votre publication")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.titleColumn,
      expression: "titleColumn"
    }],
    staticClass: "mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md",
    attrs: {
      "id": "titleInput",
      "type": "text",
      "placeholder": "Enter le titre..."
    },
    domProps: {
      "value": _vm.titleColumn
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.titleColumn = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "mb-8"
  }, [_c('label', {
    staticClass: "block text-md font-medium text-blue-700",
    attrs: {
      "for": "imageInput"
    }
  }, [_vm._v("\n              Photo de couverture de votre publication\n            ")]), _vm._v(" "), _c('input', {
    staticClass: "mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md",
    attrs: {
      "id": "imageInput",
      "type": "file",
      "placeholder": "Enter the title here..."
    },
    on: {
      "change": _vm.handleFileChange
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "mb-8"
  }, [_c('label', {
    staticClass: "block text-md font-medium text-blue-700",
    attrs: {
      "for": "descriptionTextarea"
    }
  }, [_vm._v("\n                Ajoutez un petit texte d'accroche (caption)... "), _c('small', [_vm._v("["), _c('span', {
    staticClass: "text-sm text-gray-600 mt-2"
  }, [_vm._v(_vm._s(_vm.captionColumn.length) + " / 200 ")]), _vm._v("]")])]), _vm._v(" "), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.captionColumn,
      expression: "captionColumn"
    }],
    staticClass: "mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md",
    attrs: {
      "id": "descriptionTextarea",
      "rows": "3",
      "placeholder": "caption..."
    },
    domProps: {
      "value": _vm.captionColumn
    },
    on: {
      "input": [function ($event) {
        if ($event.target.composing) return;
        _vm.captionColumn = $event.target.value;
      }, _vm.limitCaptionLength]
    }
  }), _vm._v(" "), _c('p')]), _vm._v(" "), _c('div', {
    staticClass: "mb-8"
  }, [_c('label', {
    staticClass: "block text-md font-medium text-blue-700",
    attrs: {
      "for": "categorySelect"
    }
  }, [_vm._v("Catégorie")]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.categoryColumn,
      expression: "categoryColumn"
    }],
    staticClass: "mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md",
    attrs: {
      "id": "categorySelect"
    },
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.categoryColumn = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "",
      "disabled": "",
      "selected": ""
    }
  }, [_vm._v("Selectionner une catégorie...")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Actualité"
    }
  }, [_vm._v("Actualité")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Projet"
    }
  }, [_vm._v("Projet")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Evenement"
    }
  }, [_vm._v("Evenement")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Opportunité ou Offre d'emploi"
    }
  }, [_vm._v("Opportunité ou Offre d'emploi")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Autre"
    }
  }, [_vm._v("Autre")])])]), _vm._v(" "), _c('div', {
    staticClass: "mb-8"
  }, [_c('label', {
    staticClass: "block text-md font-medium text-blue-700",
    attrs: {
      "for": "editor"
    }
  }, [_vm._v("Contenu de la publication")]), _vm._v(" "), _c('div', {
    staticClass: "mb-8"
  }, [_c('small', [_vm._v("\n                Si vous voulez uploader des images,\n                "), _c('a', {
    staticClass: "text-blue-900",
    attrs: {
      "href": "#"
    },
    on: {
      "click": _vm.openImageUploadModal
    }
  }, [_vm._v("Cliquez ici")])]), _vm._v(" "), _c('client-only', {
    attrs: {
      "placeholder": "loading..."
    }
  }, [_c('main', {
    attrs: {
      "id": "sample"
    }
  }, [_c('tinymce', {
    attrs: {
      "id": "editor",
      "other_options": _vm.options
    },
    model: {
      value: _vm.dataColumn,
      callback: function ($$v) {
        _vm.dataColumn = $$v;
      },
      expression: "dataColumn"
    }
  })], 1)])], 1)]), _vm._v(" "), _vm.loading ? _c('div', {
    staticClass: "bg-blue-500 text-white px-4 py-2 rounded-md mb-4 flex justify-center items-center"
  }, [_c('svg', {
    staticClass: "animate-spin h-5 w-5 mr-3",
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
      "d": "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 4.418 3.582 8 8 8v-4c-2.291 0-4.417-.784-6.087-2.209l2.122-2.122zM20 12a8 8 0 01-8 8v4c4.418 0 8-3.582 8-8h-4zm-6.209 2.791A7.963 7.963 0 0116 12h4c0 4.418-3.582 8-8 8v-4c2.209 0 4.417-.784 6.087-2.209l-2.122-2.122z"
    }
  })]), _vm._v("\n              Loading...\n            ")]) : _vm._e(), _vm._v(" "), _vm.success ? _c('div', {
    staticClass: "bg-green-400 text-white px-4 py-2 rounded-md mb-4"
  }, [_vm._v("\n              Votre publication a été actualisé avec succès. \n              Vous pouvez le "), _c('a', {
    staticClass: "text-blue",
    attrs: {
      "href": _vm.publicPost == false ? '/blogs/' + _vm.routeColumn : '/opportunities/' + _vm.routeColumn
    }
  }, [_c('b', [_vm._v("voir ici ")])])]) : _vm._e(), _vm._v(" "), _vm.failure ? _c('div', {
    staticClass: "bg-red-400 text-white px-4 py-2 rounded-md mb-4"
  }, [_vm._v("\n              Something unexpected happened, Please check your embedded media or file type and size and try again later. Avoid videos/large images inside the text\n            ")]) : _vm._e(), _vm._v(" "), _vm.titleAction == 'blog' ? _c('div', {
    staticClass: "mb-8"
  }, [_c('label', {
    staticClass: "flex items-center space-x-2"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.publicPost,
      expression: "publicPost"
    }],
    staticClass: "w-4 h-4",
    attrs: {
      "type": "checkbox"
    },
    domProps: {
      "checked": Array.isArray(_vm.publicPost) ? _vm._i(_vm.publicPost, null) > -1 : _vm.publicPost
    },
    on: {
      "change": function ($event) {
        var $$a = _vm.publicPost,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && (_vm.publicPost = $$a.concat([$$v]));
          } else {
            $$i > -1 && (_vm.publicPost = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.publicPost = $$c;
        }
      }
    }
  }), _vm._v(" "), _c('h3', [_vm._v("Cochez s'il s'agit d'une opportunité ou Offre d'emploi")])])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "flex justify-center"
  }, [_c('BaseButton', {
    staticClass: "px-10 py-4 bg-inherit text-gradient border border-[#4A8FF6] text-base",
    attrs: {
      "type": "submit"
    }
  }, [_c('b', [_vm._v("Enregistrer et publier ")])])], 1)])])])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/create/index.vue?vue&type=template&id=9f21790e&scoped=true

// EXTERNAL MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/create/index.vue?vue&type=script&lang=js
var createvue_type_script_lang_js = __webpack_require__(91);

// CONCATENATED MODULE: ./pages/create/index.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_createvue_type_script_lang_js = (createvue_type_script_lang_js["a" /* default */]); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./pages/create/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(115)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_createvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "9f21790e",
  "7a375f58"
  
)

/* harmony default export */ var create = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {BaseButton: __webpack_require__(18).default})


/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(URL) {/* harmony import */ var _mixins_aos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'create-component',
  layout: 'create',
  mixins: [_mixins_aos__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]],
  components: {
    tinymce: () => {
      if (typeof window !== "undefined") {
        return Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, 78, 7));
      }
    }
  },
  data() {
    return {
      request: "",
      accesshash: "",
      success: false,
      failure: false,
      title: "Editing",
      titleAction: "",
      userLogged: true,
      publicPost: false,
      isModalOpen: false,
      imagePreview: null,
      uploadImage: null,
      successMessage: "",
      errorMessage: "",
      titleColumn: "",
      captionColumn: "",
      routeColumn: "",
      categoryColumn: "",
      dataColumn: "",
      imageColumn: null,
      creatorColumn: "",
      creator: sessionStorage.getItem('username'),
      titleColumn_: "",
      captionColumn_: "",
      routeColumn_: "",
      categoryColumn_: "",
      dataColumn_: "",
      imageColumn_: "",
      creatorColumn_: "",
      toolName: "",
      toolDescriptions: "",
      toolLink: "",
      toolImage: null,
      toolCategory: "",
      toolValidation: "0",
      toolEmail: "",
      docTechnology: "",
      docTechVersion: "",
      options: {
        plugins: ['advlist autolink lists link image charmap print preview hr anchor pagebreak', 'searchreplace wordcount visualblocks visualchars code fullscreen', 'insertdatetime media nonbreaking save table contextmenu directionality', 'template paste textcolor colorpicker textpattern imagetools toc help emoticons hr codesample'],
        toolbar: 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | media | help',
        // Ensure media plugin is configured properly
        media_live_embeds: true,
        // Allows embedded videos to play live
        media_filter_html: false,
        // Disables XSS sanitization for video embeds

        // Optional: Language file URL
        // language_url: '/path-to-your-language-file.js',

        // Add valid elements to allow iframe and video tags
        valid_elements: '*[*]',
        // Allows all elements and attributes
        extended_valid_elements: 'iframe[src|width|height|frameborder|allow|allowfullscreen],video[src|controls],source[src|type]'
      }
    };
  },
  methods: {
    limitCaptionLength() {
      if (this.captionColumn.length > 200) {
        this.captionColumn = this.captionColumn.substring(0, 200);
      }
    },
    openImageUploadModal() {
      this.isModalOpen = true;
    },
    closeImageUploadModal() {
      this.isModalOpen = false;
    },
    handleImageUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.imagePreview = URL.createObjectURL(file);
        this.uploadImage = file;
      }
    },
    async submitImage() {
      try {
        console.log("Uploading image...");
        this.isLoading = false;
        let token = typeof sessionStorage !== 'undefined' ? sessionStorage.getItem('token') : null;
        let username = typeof sessionStorage !== 'undefined' ? sessionStorage.getItem('username') : null;
        // Create FormData
        let formData = new FormData();
        if (this.uploadImage) {
          formData.append("photo", this.uploadImage);
          const response = await this.$axios.post(`user/${username}/uploads`, formData, {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "multipart/form-data"
            }
          });
          if (response.data.status_code == 200) {
            this.successMessage = "L'image a été chargée avec succès, utilisez ce lien pour insérer l'Image : " + response.data.url;
          } else {
            this.errorMessage = "Impossible de charger l'image! vérifiez la taille et le format du fichier.";
          }
        }
      } catch (error) {
        console.error("Error uploading image :", error);
        this.errorMessage = "Image/file upload failed! Please try again.";
      }
    },
    updateDataColumn(content) {
      this.dataColumn = content;
    },
    handleFileChange(event) {
      const file = event.target.files[0];
      this.imageColumn = file;
    },
    handleLogoFileChange(event) {
      const file = event.target.files[0];
      this.toolImage = file;
    },
    getSourceAction() {
      const action = this.$route.query.v;
      this.titleAction = action;
      console.log("titleaction :", this.titleAction);
      console.log(action);
      if (action == "blog") {
        this.title = "Créer et publier une publication / opportunité";
        this.request = "/blog/store";
      }
    },
    async submitAndPublish() {
      this.loading = true;
      const storedBarrierDetails = sessionStorage.getItem('token');
      this.routeColumn = this.titleColumn.normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim().toLowerCase().replace(/[^\w\s-]/g, "").replace(/^-+|-+$/g, "").replace(/\s+/g, "-").replace(/-+/g, "-");
      const formData = new FormData();
      formData.append('blogTitle', this.titleColumn || '');
      formData.append('blogCaption', this.captionColumn || '');
      formData.append('blogRoute', this.routeColumn || '');
      formData.append('blogCategory', this.categoryColumn || '');
      formData.append('blogData', this.dataColumn || '');
      formData.append('publicPost', this.publicPost === true ? 1 : 0);
      formData.append('imageUrl', this.imageColumn || '');
      formData.append('creator', this.creator || '');
      const response = await this.$axios.post('/blog/store', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${storedBarrierDetails}`
        }
      });
      console.log("Response:", JSON.stringify(response.data));
      if (response.data.status_code === 200) {
        this.success = true;
      } else {
        this.failure = true;
      }
      this.loading = false;
    },
    async saveNewTool() {
      try {
        this.loading = true;
        console.log('we tryna submit something');
        const storedBarrierDetails = sessionStorage.getItem('token');
        console.log("token : ", storedBarrierDetails);
        const formData = new FormData();
        formData.append('name', this.toolName);
        formData.append('descriptions', this.toolDescriptions);
        formData.append('link', this.toolLink);
        formData.append('ownerEmail', this.toolEmail);
        formData.append('imageUrl', this.toolImage);
        formData.append('category', this.toolCategory);
        formData.append('validated', this.toolValidation);
        const response = await this.$axios.post(this.request, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${storedBarrierDetails}`
          }
        });
        console.log("Response:", JSON.stringify(response.data));
        if (response.data.status_code === 200) {
          this.success = true;
        } else {
          this.failure = true;
        }
      } catch (error) {
        console.error(error);
      } finally {
        this.loading = false;
      }
    }
  },
  async fetch() {
    // Call the definetitle method when the component is loaded
    this.getSourceAction();
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(37)["URL"]))

/***/ })

};;
//# sourceMappingURL=index.js.map