exports.ids = [24];
exports.modules = {

/***/ 108:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(126);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("48e80f72", content, true, context)
};

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3a90793c_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(108);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3a90793c_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3a90793c_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3a90793c_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3a90793c_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".loader[data-v-3a90793c]{animation:spin-3a90793c 1s linear infinite;border:3px solid #f3f3f3;border-radius:50%;border-top-color:#4b5563;height:30px;width:30px}@keyframes spin-3a90793c{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/u/index.vue?vue&type=template&id=3a90793c&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('client-only', [_c('div', {
    staticClass: "w-full min-h-screen flex items-center justify-center bg-gray-50 py-8"
  }, [_c('div', {
    staticClass: "w-full max-w-md mx-4"
  }, [_c('div', {
    staticClass: "bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200"
  }, [_c('div', {
    staticClass: "bg-white p-6 text-center border-b border-gray-200"
  }, [_c('div', {
    staticClass: "flex justify-center mb-4"
  }, [_c('div', {
    staticClass: "w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center border border-gray-300"
  }, [_c('span', {
    staticClass: "text-2xl font-bold text-gray-700"
  }, [_vm._v("B")])])]), _vm._v(" "), _c('h1', {
    staticClass: "text-2xl font-semibold text-gray-800"
  }, [_vm._v("Beat Expertise")]), _vm._v(" "), _c('p', {
    staticClass: "text-gray-600 mt-2"
  }, [_vm._v("Plateforme de connexion")])]), _vm._v(" "), _c('div', {
    staticClass: "p-8"
  }, [_vm.loading ? _c('div', {
    staticClass: "flex justify-center my-4"
  }, [_c('div', {
    staticClass: "loader"
  })]) : _vm._e(), _vm._v(" "), _vm.successMessage && !_vm.loading ? _c('div', {
    staticClass: "bg-green-50 border border-green-200 text-green-700 p-4 rounded mb-6"
  }, [_c('p', {
    domProps: {
      "innerHTML": _vm._s(_vm.successMessage)
    }
  })]) : _vm._e(), _vm._v(" "), _vm.errorMessage && !_vm.loading ? _c('div', {
    staticClass: "bg-red-50 border border-red-200 text-red-700 p-4 rounded mb-6"
  }, [_c('p', {
    domProps: {
      "innerHTML": _vm._s(_vm.errorMessage)
    }
  })]) : _vm._e(), _vm._v(" "), _vm.showLogin && !_vm.loading ? _c('div', [_c('h2', {
    staticClass: "text-xl font-semibold text-gray-800 mb-2 text-center"
  }, [_vm._v("Connexion")]), _vm._v(" "), _c('p', {
    staticClass: "text-gray-600 text-center mb-8"
  }, [_vm._v("Accédez à votre espace personnel")]), _vm._v(" "), _c('form', {
    staticClass: "space-y-6",
    on: {
      "submit": function ($event) {
        $event.preventDefault();
        return _vm.postLogin();
      }
    }
  }, [_c('div', [_c('label', {
    staticClass: "block text-sm font-medium text-gray-700 mb-2",
    attrs: {
      "for": "loginLogin"
    }
  }, [_vm._v("Adresse email")]), _vm._v(" "), _c('div', {
    staticClass: "relative"
  }, [_c('div', {
    staticClass: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
  }, [_c('svg', {
    staticClass: "h-5 w-5 text-gray-400",
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
      "d": "M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
    }
  })])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.loginLogin,
      expression: "loginLogin"
    }],
    staticClass: "w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200",
    attrs: {
      "type": "text",
      "id": "loginLogin",
      "placeholder": "Votre adresse email"
    },
    domProps: {
      "value": _vm.loginLogin
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.loginLogin = $event.target.value;
      }
    }
  })])]), _vm._v(" "), _c('div', [_c('label', {
    staticClass: "block text-sm font-medium text-gray-700 mb-2",
    attrs: {
      "for": "loginPassword"
    }
  }, [_vm._v("Mot de passe")]), _vm._v(" "), _c('div', {
    staticClass: "relative"
  }, [_c('div', {
    staticClass: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
  }, [_c('svg', {
    staticClass: "h-5 w-5 text-gray-400",
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
      "d": "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
    }
  })])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.loginPassword,
      expression: "loginPassword"
    }],
    staticClass: "w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200",
    attrs: {
      "type": "password",
      "id": "loginPassword",
      "placeholder": "Votre mot de passe"
    },
    domProps: {
      "value": _vm.loginPassword
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.loginPassword = $event.target.value;
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "flex items-center justify-between"
  }, [_c('div', {
    staticClass: "flex items-center"
  }, [_c('input', {
    staticClass: "h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300 rounded",
    attrs: {
      "type": "checkbox",
      "id": "acceptance",
      "checked": ""
    }
  }), _vm._v(" "), _c('label', {
    staticClass: "ml-2 block text-sm text-gray-700",
    attrs: {
      "for": "acceptance"
    }
  }, [_vm._v("Conserver ma session")])]), _vm._v(" "), _c('a', {
    staticClass: "text-sm text-blue-500 hover:text-blue-700 transition-colors duration-200",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("\n                  Mot de passe oublié?\n                ")])]), _vm._v(" "), _c('button', {
    staticClass: "w-full py-3 px-4 bg-gray-800 text-white font-medium rounded-md hover:bg-gray-900 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800",
    attrs: {
      "type": "submit"
    }
  }, [_vm._v("\n                Se connecter\n              ")])]), _vm._v(" "), _c('div', {
    staticClass: "mt-6 text-center"
  }, [_c('p', {
    staticClass: "text-gray-600"
  }, [_vm._v("\n                Pas de compte? \n                "), _c('a', {
    staticClass: "font-medium text-blue-500 hover:text-blue-700 transition-colors duration-200",
    attrs: {
      "href": "mailto:info@primetek.africa"
    }
  }, [_vm._v("\n                  Faites une requête\n                ")])])])]) : _c('div', {
    staticClass: "space-y-6"
  }, [_c('h2', {
    staticClass: "text-xl font-semibold text-gray-800 mb-2 text-center"
  }, [_vm._v("Créer un compte")]), _vm._v(" "), _c('p', {
    staticClass: "text-gray-600 text-center mb-8"
  }, [_vm._v("Rejoignez notre plateforme")]), _vm._v(" "), _c('form', {
    on: {
      "submit": function ($event) {
        $event.preventDefault();
        _vm.validateRegisterForm() && _vm.postRegister();
      }
    }
  }, [_c('div', {
    staticClass: "mb-4"
  }, [_c('label', {
    staticClass: "block text-sm font-medium text-gray-700 mb-2",
    attrs: {
      "for": "registerName"
    }
  }, [_vm._v("Votre nom complet")]), _vm._v(" "), _c('div', {
    staticClass: "relative"
  }, [_c('div', {
    staticClass: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
  }, [_c('svg', {
    staticClass: "h-5 w-5 text-gray-400",
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
      "d": "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    }
  })])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.registerName,
      expression: "registerName"
    }],
    staticClass: "w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200",
    attrs: {
      "type": "text",
      "id": "registerName",
      "placeholder": "Votre nom complet"
    },
    domProps: {
      "value": _vm.registerName
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.registerName = $event.target.value;
      }
    }
  })])]), _vm._v(" "), _vm.registerName != '' ? _c('div', {
    staticClass: "mb-4 bg-gray-50 p-3 rounded-md"
  }, [_c('p', {
    staticClass: "text-sm text-gray-700"
  }, [_vm._v("\n                  Votre identifiant sera: \n                  "), _c('span', {
    staticClass: "font-medium text-gray-800"
  }, [_vm._v(_vm._s(_vm.generatedUsername))])])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "mb-4"
  }, [_c('label', {
    staticClass: "block text-sm font-medium text-gray-700 mb-2",
    attrs: {
      "for": "registerEmail"
    }
  }, [_vm._v("Adresse email")]), _vm._v(" "), _c('div', {
    staticClass: "relative"
  }, [_c('div', {
    staticClass: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
  }, [_c('svg', {
    staticClass: "h-5 w-5 text-gray-400",
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
      "d": "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    }
  })])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.registerEmail,
      expression: "registerEmail"
    }],
    staticClass: "w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200",
    attrs: {
      "type": "email",
      "id": "registerEmail",
      "placeholder": "Votre adresse email"
    },
    domProps: {
      "value": _vm.registerEmail
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.registerEmail = $event.target.value;
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "mb-6"
  }, [_c('label', {
    staticClass: "block text-sm font-medium text-gray-700 mb-2",
    attrs: {
      "for": "registerPassword"
    }
  }, [_vm._v("Mot de passe")]), _vm._v(" "), _c('div', {
    staticClass: "relative"
  }, [_c('div', {
    staticClass: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
  }, [_c('svg', {
    staticClass: "h-5 w-5 text-gray-400",
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
      "d": "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
    }
  })])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.registerPassword,
      expression: "registerPassword"
    }],
    staticClass: "w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200",
    attrs: {
      "type": "password",
      "id": "registerPassword",
      "placeholder": "Créez un mot de passe sécurisé"
    },
    domProps: {
      "value": _vm.registerPassword
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.registerPassword = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c('p', {
    staticClass: "text-xs text-gray-500 mt-1"
  }, [_vm._v("Minimum 8 caractères")])]), _vm._v(" "), _vm.formReady && !_vm.validateRegisterForm() ? _c('div', {
    staticClass: "mb-4 bg-red-50 p-3 rounded-md border border-red-200"
  }, [_c('p', {
    staticClass: "text-sm text-red-700"
  }, [_vm._v("Veuillez remplir tous les champs avec des informations valides")])]) : _vm._e(), _vm._v(" "), _c('button', {
    staticClass: "w-full py-3 px-4 bg-gray-800 text-white font-medium rounded-md hover:bg-gray-900 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800",
    attrs: {
      "type": "submit"
    }
  }, [_vm._v("\n                Créer un compte\n              ")])]), _vm._v(" "), _c('div', {
    staticClass: "mt-6 text-center"
  }, [_c('p', {
    staticClass: "text-gray-600"
  }, [_vm._v("\n                Vous avez déjà un compte? \n                "), _c('a', {
    staticClass: "font-medium text-blue-500 hover:text-blue-700 transition-colors duration-200 cursor-pointer",
    on: {
      "click": function ($event) {
        return _vm.toggleForm('login');
      }
    }
  }, [_vm._v("\n                  Connectez-vous\n                ")])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "mt-8 text-center"
  }, [_c('p', {
    staticClass: "text-sm text-gray-500"
  }, [_vm._v("© 2023 Beat Expertise. Tous droits réservés.")])])])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/u/index.vue?vue&type=template&id=3a90793c&scoped=true

// EXTERNAL MODULE: ./mixins/aos.js
var aos = __webpack_require__(11);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/u/index.vue?vue&type=script&lang=js

/* harmony default export */ var uvue_type_script_lang_js = ({
  name: 'user-component',
  layout: 'user',
  mixins: [aos["a" /* default */]],
  data() {
    return {
      showLogin: true,
      userRegistred: false,
      loginLogin: '',
      loginPassword: '',
      registerName: '',
      registerEmail: '',
      registerPassword: '',
      formReady: false,
      nextroute: null,
      nextpost: null,
      nextCreator: null,
      successMessage: '',
      errorMessage: '',
      loading: false
    };
  },
  computed: {
    generatedUsername() {
      const normalizedName = this.registerName.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      const username = normalizedName.replace(/\s/g, "");
      return username;
    }
  },
  methods: {
    login() {
      console.log('Logging in with:', this.loginLogin, this.loginPassword);
    },
    register() {
      console.log('Registering with:', this.registerName, this.registerEmail, this.registerPassword);
    },
    toggleForm(formType) {
      this.showLogin = formType === 'login';
    },
    validateRegisterForm() {
      this.formReady = true;
      if (this.registerName === '' || this.registerEmail === '' || this.registerPassword === '' || this.registerPassword.length < 8) {
        return false;
      }
      return true;
    },
    async postLogin() {
      try {
        this.loading = true;
        const response = await this.$axios.post('/user/login', {
          login: this.loginLogin,
          password: this.loginPassword
        });
        console.log(response.data);
        const userData = response.data.user;
        const token = response.data.token;
        localStorage.setItem('email', response.data.user.email);
        localStorage.setItem('username', response.data.user.username);
        localStorage.setItem('token', token);
        localStorage.setItem('accesshash', response.data.user.accesshash);
        localStorage.setItem('name', response.data.user.name);
        sessionStorage.setItem('email', response.data.user.email);
        sessionStorage.setItem('username', response.data.user.username);
        sessionStorage.setItem('token', token);
        sessionStorage.setItem('accesshash', response.data.user.accesshash);
        sessionStorage.setItem('name', response.data.user.name);
        this.loading = false;
        if (this.nextroute != null && this.nextpost != null) {
          this.$router.push({
            path: `/${this.nextCreator}` + `/${this.nextroute}` + "/" + `${this.nextpost}` + '#comments'
          });
        } else {
          location.reload();
        }
        console.log('Login successful!', userData);
      } catch (error) {
        this.loading = false;
        this.errorMessage = 'Échec de la connexion! Veuillez vérifier vos identifiants.';
        console.log('Login failed:', error);
        setTimeout(() => {
          this.errorMessage = '';
        }, 4000);
      }
    },
    async postRegister() {
      try {
        this.loading = true;
        const normalizedUsername = this.registerName.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        const username = normalizedUsername.replace(/[^a-zA-Z0-9]/g, "");
        const response = await this.$axios.post('/user/register', {
          email: this.registerEmail,
          name: this.registerName,
          username: username,
          password: this.registerPassword,
          accesshash: 'beat_user'
        });
        if (response.data.status_code == 409) {
          this.loading = false;
          this.errorMessage = response.data.status_message;
          console.log('Account exists !', response.data);
        }
        if (response.data.status_code == 200) {
          const userData = response.data.user;
          this.successMessage = 'Inscription réussie! Connectez-vous avec: ' + username + ' ou ' + this.registerEmail;
          this.loading = false;
          console.log('Registration successful!', userData);
        }
        setTimeout(() => {
          this.successMessage = '';
          this.errorMessage = '';
          location.reload();
        }, 10000);
      } catch (error) {
        this.loading = false;
        this.errorMessage = 'Échec de l\'inscription! Veuillez réessayer.';
        setTimeout(() => {
          this.errorMessage = '';
        }, 6000);
        console.log('Registration failed:', error);
      }
    }
  },
  mounted() {
    if (typeof sessionStorage !== 'undefined' && sessionStorage.getItem('token')) {
      const username = sessionStorage.getItem('username');
      this.$router.push(`/${username}`);
    }
    const nextParam = this.$route.query.next;
    const routeParam = this.$route.query.route;
    const creatorParam = this.$route.query.creator;
    this.nextroute = nextParam;
    this.nextCreator = creatorParam;
    this.nextpost = routeParam;
  }
});
// CONCATENATED MODULE: ./pages/u/index.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_uvue_type_script_lang_js = (uvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./pages/u/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(125)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_uvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3a90793c",
  "8110db22"
  
)

/* harmony default export */ var u = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map