exports.ids = [17];
exports.modules = {

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/edit/index.vue?vue&type=template&id=2a0257b2&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('client-only', [_c('div', {
    staticClass: "w-full container mx-auto px-6"
  }, [_c('section', {
    staticClass: "bg-partner relative max-w-full sm:mx-6 my-0 shadow sm:rounded-2xl overflow-hidden"
  }, [_c('div', {
    staticClass: "w-full px-8 sm:px-0 py-0 flex flex-col justify-end space-y-4"
  }, [_c('h2', {
    staticClass: "text-2xl text-neutral-800 font-semibold text-center"
  }, [_vm._v("\n          Editer: "), _c('span', {
    staticClass: "text-header-gradient-big"
  }, [_vm._v(_vm._s(_vm.titleColumn))])]), _vm._v(" "), _vm.isModalOpen ? _c('div', {
    staticClass: "modal-overlay"
  }, [_c('div', {
    staticClass: "modal-content"
  }, [_c('h3', [_vm._v("Charger la photo")]), _vm._v(" "), _c('input', {
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
  }, [_vm._v("Charger la photo")]), _vm._v(" "), _c('button', {
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
      "placeholder": "Entrer le titre ici..."
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
  })]), _vm._v(" "), _vm.imageColumn ? _c('div', {
    staticClass: "mb-8"
  }, [_c('img', {
    staticClass: "h-52 object-cover rounded-md",
    attrs: {
      "src": _vm.imageColumn
    }
  })]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "mb-8"
  }, [_c('label', {
    staticClass: "block text-md font-medium text-blue-700",
    attrs: {
      "for": "imageInput"
    }
  }, [_vm._v("\n              Cliquer ici pour changer la  photo de votre publication\n            ")]), _vm._v(" "), _c('input', {
    staticClass: "mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md",
    attrs: {
      "id": "imageInput",
      "type": "file",
      "placeholder": "Picture..."
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
  }, [_vm._v("\n                Ajoutez un petit texte d'accroche (caption)...  "), _c('small', [_vm._v("["), _c('span', {
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
      "placeholder": "Your caption here..."
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
  })]), _vm._v(" "), _c('div', {
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
      value: _vm.editorData,
      callback: function ($$v) {
        _vm.editorData = $$v;
      },
      expression: "editorData"
    }
  }), _c('br'), _vm._v(" "), _c('small', {
    staticClass: "text-red"
  }, [_vm._v("Si vous voulez modifier le contenu de votre publication, cliquez sur le bouton ci-dessous")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('button', {
    staticClass: "px-10 py-4 bg-inherit text-gradient border border-[#4A8FF6] text-base",
    class: _vm.alreadyLoaded ? 'cursor-not-allowed text-red-500' : '',
    attrs: {
      "disabled": _vm.alreadyLoaded,
      "type": "button"
    },
    on: {
      "click": _vm.updateEditorContent
    }
  }, [_vm._v("Traiter le contenu de ce post\n                ")])], 1)])], 1)]), _vm._v(" "), _vm.loading ? _c('div', {
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
  }, [_vm._v("\n              Something unexpected happened, Please check your embedded media or file type and size and try again later.\n            ")]) : _vm._e(), _vm._v(" "), _vm.titleAction == 'blog' ? _c('div', {
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
  }), _vm._v(" "), _c('h2', [_vm._v("Ceci est une opportunité")])])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "flex justify-center"
  }, [_c('BaseButton', {
    staticClass: "px-10 py-4 bg-inherit text-gradient border border-[#4A8FF6] text-base",
    attrs: {
      "type": "submit"
    }
  }, [_c('b', [_vm._v("Enregistrer & Publier ")])])], 1)])])])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/edit/index.vue?vue&type=template&id=2a0257b2&scoped=true

// EXTERNAL MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/edit/index.vue?vue&type=script&lang=js
var editvue_type_script_lang_js = __webpack_require__(84);

// CONCATENATED MODULE: ./pages/edit/index.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_editvue_type_script_lang_js = (editvue_type_script_lang_js["a" /* default */]); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./pages/edit/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(96)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_editvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "2a0257b2",
  "0ebe432e"
  
)

/* harmony default export */ var edit = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {BaseButton: __webpack_require__(11).default})


/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(URL) {/* harmony import */ var _mixins_aos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'create-component',
  layout: 'create',
  mixins: [_mixins_aos__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]],
  components: {
    tinymce: () => {
      if (typeof window !== "undefined") {
        return Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, 69, 7));
      }
    }
  },
  data() {
    return {
      editorLoaded: false,
      request: "",
      accesshash: "",
      success: false,
      failure: false,
      title: "Editing",
      titleAction: "",
      userLogged: true,
      publicPost: true,
      coverUrl: null,
      isModalOpen: false,
      imagePreview: null,
      uploadImage: null,
      successMessage: "",
      errorMessage: "",
      titleColumn: "",
      captionColumn: "",
      routeColumn: "",
      categoryColumn: "",
      dataColumn: "default initial content!",
      imageColumn: null,
      creatorColumn: "",
      alreadyLoaded: false,
      creator: sessionStorage.getItem('username'),
      oldTitle: "",
      oldCaption: "",
      oldRoute: "",
      oldCategory: "",
      oldData: "",
      oldCover: null,
      oldDocTechnology: "",
      oldDocTechVersion: "",
      id: 0,
      editorData: "",
      newCover: null,
      docTechnology: "",
      docTechVersion: "",
      options: {
        plugins: ['advlist autolink lists link image charmap print preview hr anchor pagebreak', 'searchreplace wordcount visualblocks visualchars code fullscreen', 'insertdatetime media nonbreaking save table contextmenu directionality', 'template paste textcolor colorpicker textpattern imagetools toc help emoticons hr codesample'],
        toolbar: 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help'
        // language_url: '/path-to-your-language-file.js', // Optional: Set the language file URL
      }
    };
  },
  mounted() {
    this.editorLoaded = true;
  },
  async fetch() {
    try {
      console.log('Loading article to edit');
      const category = this.$route.query.category;
      const postRoute = this.$route.query.route;
      const response = await this.$axios.get(`/${category}/getall?route=${postRoute}`);
      if (response.data.status_code === 200) {
        const post = response.data[category][0];
        this.id = post.id || 0;
        this.titleColumn = post.blogTitle || post.tipTitle || post.docTitle || post.trendTitle || "";
        this.captionColumn = post.blogCaption || post.tipCaption || post.docCaption || post.trendCaption || "";
        this.routeColumn = post.blogRoute || post.tipRoute || post.docRoute || post.trendRoute || "";
        this.categoryColumn = post.blogCategory || post.tipCategory || post.docCategory || post.trendCategory || "";
        this.dataColumn = post.blogData || post.tipData || post.docData || post.trendData || "";
        this.imageColumn = post.imageUrl || null;
        if (category == 'blog') {
          this.publicPost = post.publicPost == '1' ? true : false;
          console.log('public or not : ', post.publicPost);
        }
        this.titleAction = category;
        this.docTechnology = post.docTechnology || "";
        this.docTechVersion = post.docTechVersion || "";
        this.oldRoute = this.routeColumn;
        this.oldTitle = this.titleColumn;
        this.oldCaption = this.captionColumn;
        this.oldCategory = this.categoryColumn;
        this.oldData = this.dataColumn;
        this.oldCover = this.imageColumn;
        this.oldDocTechnology = this.docTechnology;
        this.oldDocTechVersion = this.docTechVersion;
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  },
  // watch what the user is typing and always update to this.editordata column
  watch: {
    editorData: function (val) {
      this.editorData = val;
    }
  },
  methods: {
    limitCaptionLength() {
      if (this.captionColumn.length > 200) {
        this.captionColumn = this.captionColumn.substring(0, 200);
      }
    },
    updateEditorContent() {
      this.editorData = this.editorData === "" ? this.dataColumn : this.editorData + "<br>" + this.dataColumn;
      this.alreadyLoaded = true;
    },
    openImageUploadModal() {
      this.isModalOpen = true;
    },
    closeImageUploadModal() {
      this.isModalOpen = false;
    },
    handleImageUpload(event) {
      // this is for the image upload inside the editor
      const file = event.target.files[0];
      if (file) {
        this.imagePreview = URL.createObjectURL(file);
        this.uploadImage = file;
      }
    },
    handleFileChange(event) {
      // this is fot the update
      const file = event.target.files[0];
      this.newCover = file;

      // update displayed image
      this.imageColumn = URL.createObjectURL(file);
    },
    async submitImage() {
      try {
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
            this.successMessage = "Image uploaded successfully! Use the below url to insert the image : " + response.data.url;
          } else {
            this.errorMessage = "Image/file uploaded! Please try again.";
          }
        }
      } catch (error) {
        console.error("Error uploading image :", error);
        this.errorMessage = "Image/file upload failed! Please try again.";
      }
    },
    async submitAndPublish() {
      try {
        this.loading = true;
        const storedBarrierDetails = sessionStorage.getItem('token');

        //perform sanitization on the route only if it has changed
        this.routeColumn = this.oldTitle == this.titleColumn ? this.oldRoute : this.titleColumn.normalize("NFD") // Normalize Unicode characters
        .replace(/[\u0300-\u036f]/g, "") // Remove diacritics
        .trim() // Remove leading and trailing whitespace
        .toLowerCase() // Convert to lowercase
        .replace(/[^\w\s-]/g, "") // Remove symbols except word characters, spaces, and hyphens
        .replace(/^-+|-+$/g, "") // Remove leading or trailing hyphens
        .replace(/\s+/g, "-") // Replace spaces with a single hyphen
        .replace(/-+/g, "-"); // Collapse multiple hyphens into one

        const formData = new FormData();
        if (this.titleAction == "blog") {
          formData.append('blogTitle', this.titleColumn == this.oldTitle ? "skip" : this.titleColumn);
          formData.append('blogCaption', this.captionColumn == this.oldCaption ? "skip" : this.captionColumn);
          formData.append('blogRoute', this.routeColumn == this.oldRoute ? "skip" : this.routeColumn);
          formData.append('blogCategory', this.categoryColumn == this.oldCategory ? "skip" : this.categoryColumn);
          formData.append('blogData', this.editorData == this.oldData || this.editorData == "" ? "skip" : this.editorData); // because this.editorData is the loaded data and updated 
          formData.append('publicPost', this.publicPost == true ? 1 : 0);
        } else if (this.titleAction == "tip") {
          formData.append('tipTitle', this.titleColumn == this.oldTitle ? "skip" : this.titleColumn);
          formData.append('tipCaption', this.captionColumn == this.oldCaption ? "skip" : this.captionColumn);
          formData.append('tipRoute', this.routeColumn == this.oldRoute ? "skip" : this.routeColumn);
          formData.append('tipCategory', this.categoryColumn == this.oldCategory ? "skip" : this.categoryColumn);
          formData.append('tipData', this.editorData == this.oldData || this.editorData == "" ? "skip" : this.editorData); // because this.editorData is the loaded data and updated 
        } else if (this.titleAction == "doc") {
          formData.append('docTitle', this.titleColumn == this.oldTitle ? "skip" : this.titleColumn);
          formData.append('docCaption', this.captionColumn == this.oldCaption ? "skip" : this.captionColumn);
          formData.append('docRoute', this.routeColumn == this.oldRoute ? "skip" : this.routeColumn);
          formData.append('docCategory', this.categoryColumn == this.oldCategory ? "skip" : this.categoryColumn);
          formData.append('docData', this.editorData == this.oldData || this.editorData == "" ? "skip" : this.editorData); // because this.editorData is the loaded data and updated 

          formData.append('docTechnology', this.docTechnology == this.oldDocTechnology ? "skip" : this.docTechnology);
          formData.append('docTechVersion', this.docTechVersion == this.oldDocTechVersion ? "skip" : this.docTechVersion);
        } else if (this.titleAction == "trend") {
          formData.append('trendTitle', this.titleColumn == this.oldTitle ? "skip" : this.titleColumn);
          formData.append('trendCaption', this.captionColumn == this.oldCaption ? "skip" : this.captionColumn);
          formData.append('trendRoute', this.routeColumn == this.oldRoute ? "skip" : this.routeColumn);
          formData.append('trendCategory', this.categoryColumn == this.oldCategory ? "skip" : this.categoryColumn);
          formData.append('trendData', this.editorData == this.oldData || this.editorData == "" ? "skip" : this.editorData); // because this.editorData is the loaded data and updated 
        }
        formData.append('imageUrl', this.newCover == null ? "skip" : this.newCover);
        const response = await this.$axios.post(`/${this.titleAction}/edit/${this.id}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${storedBarrierDetails}`
          }
        });
        console.log("response :", JSON.stringify(response));
        if (response.data.status_code === 200) {
          this.success = true;
        } else {
          this.failure = true;
        }
      } catch (error) {
        this.loading = false;
        console.error(error);
      } finally {
        this.loading = false;
      }
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(18)["URL"]))

/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(97);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("79d7c612", content, true, context)
};

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2a0257b2_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2a0257b2_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2a0257b2_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2a0257b2_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2a0257b2_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@media (min-width:1024px){#sample[data-v-2a0257b2]{width:100%}}.modal-overlay[data-v-2a0257b2]{align-items:center;background-color:rgba(0,0,0,.5);display:flex;height:100%;justify-content:center;left:0;position:fixed;top:0;width:100%;z-index:999}.modal-content[data-v-2a0257b2]{background-color:#fff;border-radius:10px;max-width:500px;padding:20px;width:80%}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=index.js.map