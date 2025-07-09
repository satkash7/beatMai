exports.ids = [23];
exports.modules = {

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".fade-enter-active[data-v-6c8a16b5],.fade-leave-active[data-v-6c8a16b5]{transition:opacity .3s}.fade-enter[data-v-6c8a16b5],.fade-leave-to[data-v-6c8a16b5]{opacity:0}.loader[data-v-6c8a16b5]{animation:spin-6c8a16b5 1s linear infinite;border:4px solid #f3f3f3;border-radius:50%;border-top-color:#3498db;height:30px;width:30px}@keyframes spin-6c8a16b5{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}input[type=email][data-v-6c8a16b5],input[type=password][data-v-6c8a16b5],input[type=text][data-v-6c8a16b5]{border:1px solid #ccc;box-sizing:border-box;display:inline-block;margin:8px 0;padding:12px 20px;width:50vh}.google-btn[data-v-6c8a16b5]{display:flex;justify-content:center}@media screen and (max-width:720px){.google-btn[data-v-6c8a16b5]{margin-bottom:16px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/u/index.vue?vue&type=template&id=6c8a16b5&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('client-only', [_c('div', {
    staticClass: "w-full"
  }, [_c('div', {
    staticClass: "w-full container mx-auto px-6"
  }, [_c('section', {
    staticClass: "bg-partner relative max-w-full sm:mx-6 my-0 shadow sm:rounded-2xl overflow-hidden"
  }, [_c('div', {
    staticClass: "w-full bg-partner relative max-w-full sm:mx-6 my-0 shadow sm:rounded-2xl px-8 sm:px-0 my-0 py-0 flex flex-col items-center justify-center space-y-4 text-center"
  }, [_vm.loading ? _c('div', {
    staticClass: "loader my-6"
  }) : _vm._e(), _vm._v(" "), _vm.successMessage && !_vm.loading ? _c('div', {
    staticClass: "bg-green-200 text-green-800 py-4 px-8 rounded my-6 text-center"
  }, [_c('p', {
    domProps: {
      "innerHTML": _vm._s(_vm.successMessage)
    }
  })]) : _vm._e(), _vm._v(" "), _vm.errorMessage && !_vm.loading ? _c('div', {
    staticClass: "bg-red-200 text-green-800 py-4 px-8 rounded my-6 text-center"
  }, [_c('p', {
    domProps: {
      "innerHTML": _vm._s(_vm.errorMessage)
    }
  })]) : _vm._e(), _vm._v("\n  `        "), _vm.showLogin && !_vm.loading ? _c('div', {
    staticClass: "col-span-12 lg:col-span-6 space-y-8 sm:space-y-6 px-4 sm:px-6"
  }, [_vm._v("\n`          "), _vm._v(" "), _c('form', {
    staticClass: "flex flex-col items-center",
    on: {
      "submit": function ($event) {
        $event.preventDefault();
        return _vm.postLogin();
      }
    }
  }, [_c('h2', {
    staticClass: "text-2xl font-semibold mb-4 text-[#4A8FF6]"
  }, [_vm._v("Connexion à votre compte!")]), _vm._v(" "), _c('div', {
    staticClass: "mb-8"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.loginLogin,
      expression: "loginLogin"
    }],
    staticClass: "w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300",
    attrs: {
      "type": "text",
      "placeholder": "Votre adresse mail",
      "id": "loginLogin"
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
  })]), _vm._v(" "), _c('div', {
    staticClass: "mb-8"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.loginPassword,
      expression: "loginPassword"
    }],
    staticClass: "w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300",
    attrs: {
      "type": "password",
      "placeholder": "Votre mot de passe",
      "id": "loginPassword"
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
  })]), _vm._v(" "), _c('div', {
    staticClass: "flex items-center"
  }, [_c('input', {
    staticClass: "mr-2",
    attrs: {
      "type": "checkbox",
      "id": "acceptance",
      "checked": ""
    }
  }), _vm._v(" "), _c('small', {
    attrs: {
      "for": "acceptance"
    }
  }, [_vm._v("Conserver ma session")])]), _vm._v(" "), _c('br'), _vm._v(" "), _c('BaseButton', {
    staticClass: "px-10 py-4 bg-inherit text-gradient justify-center border border-[#4A8FF6] text-base",
    attrs: {
      "type": "submit"
    }
  }, [_vm._v("\n              Connexion\n            ")]), _vm._v(" "), _c('p', {
    staticClass: "mt-4"
  }, [_c('b', [_vm._v("Pas de compte? "), _c('a', {
    staticClass: "cursor-pointer text-[#4A8FF6]",
    attrs: {
      "href": "mailto:info@primetek.africa"
    }
  }, [_vm._v("Faites une requête")])])]), _c('br')], 1)]) : _c('div', {
    staticClass: "col-span-12 lg:col-span-6 space-y-8 sm:space-y-6 px-4 sm:px-6"
  }, [_c('form', {
    on: {
      "submit": function ($event) {
        $event.preventDefault();
        _vm.validateRegisterForm() && _vm.postRegister();
      }
    }
  }, [_c('h2', {
    staticClass: "text-2xl font-semibold mb-4 text-[#4A8FF6]"
  }, [_vm._v("Join, start publishing!")]), _vm._v(" "), _c('label', {
    attrs: {
      "for": "registerName"
    }
  }, [_vm._v("Your Name(s)\n              ")]), _vm._v(" "), _c('div', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.registerName,
      expression: "registerName"
    }],
    staticClass: "w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300",
    attrs: {
      "type": "text",
      "id": "registerName"
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
  })]), _vm._v(" "), _vm.registerName != '' ? _c('div', {
    staticClass: "text-gray-500 text-sm"
  }, [_c('small', [_vm._v("Your username is : "), _c('span', {
    staticClass: "text-1xl font-semibold mb-4 text-[#4A8FF6]"
  }, [_vm._v(_vm._s(_vm.generatedUsername))])])]) : _vm._e(), _vm._v(" "), _c('label', {
    attrs: {
      "for": "registerEmail"
    }
  }, [_vm._v("Adresse mail")]), _vm._v(" "), _c('div', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.registerEmail,
      expression: "registerEmail"
    }],
    staticClass: "w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300",
    attrs: {
      "type": "email",
      "id": "registerEmail"
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
  })]), _vm._v(" "), _c('label', {
    attrs: {
      "for": "registerPassword"
    }
  }, [_vm._v("Mot de passe")]), _vm._v(" "), _c('div', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.registerPassword,
      expression: "registerPassword"
    }],
    staticClass: "w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300",
    attrs: {
      "type": "password",
      "id": "registerPassword"
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
  })]), _vm._v(" "), _c('br'), _vm._v(" "), _vm.formReady == true && !_vm.validateRegisterForm() ? _c('div', [_c('p', {
    staticClass: "text-red-500"
  }, [_vm._v("Please fill valid Name, Email and password (min 8 characters)")])]) : _vm._e(), _vm._v(" "), _c('BaseButton', {
    staticClass: "px-10 py-4 bg-inherit text-gradient justify-center border border-[#4A8FF6] text-base",
    attrs: {
      "type": "submit"
    }
  }, [_vm._v("\n              Register\n            ")]), _vm._v(" "), _c('p', [_vm._v("Already have an account? "), _c('a', {
    staticClass: "cursor-pointer text-[#4A8FF6]",
    on: {
      "click": function ($event) {
        return _vm.toggleForm('login');
      }
    }
  }, [_vm._v("Login")])])], 1)])])])])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/u/index.vue?vue&type=template&id=6c8a16b5&scoped=true

// EXTERNAL MODULE: ./mixins/aos.js
var aos = __webpack_require__(12);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/u/index.vue?vue&type=script&lang=js

// import VueSanitize from "vue-sanitize";
// import { ref, onMounted, onUpdated } from 'vue';

/* harmony default export */ var uvue_type_script_lang_js = ({
  name: 'user-component',
  layout: 'user',
  mixins: [aos["a" /* default */]],
  setup() {},
  data() {
    return {
      showLogin: true,
      // Flag to toggle between login and register
      userRegistred: false,
      // Login form data
      loginLogin: '',
      loginPassword: '',
      // Register form data
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
      // Apply your username generation logic here
      const normalizedName = this.registerName.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      const username = normalizedName.replace(/\s/g, "");
      return username;
    }
  },
  methods: {
    // sanitizeMessage(message) {
    //   return VueSanitize.sanitize(message);
    // },

    login() {
      console.log('Logging in with:', this.loginLogin, this.loginPassword);
    },
    register() {
      // Handle register logic
      console.log('Registering with:', this.registerName, this.registerEmail, this.registerPassword);
    },
    toggleForm(formType) {
      this.showLogin = formType === 'login';
    },
    validateRegisterForm() {
      this.formReady = true;
      if (this.registerName === '' || this.registerEmail === '' || this.registerPassword === '' || this.registerPassword.length < 8) {
        // Display an error message or visually indicate missing fields
        return false;
      }
      return true; // Allow form submission
    },
    async postLogin() {
      try {
        this.loading = true;
        // Make an Axios post request to the login endpoint
        const response = await this.$axios.post('/user/login', {
          login: this.loginLogin,
          password: this.loginPassword
        });
        console.log(response.data);
        // Assuming the response contains user data, update your state or take further actions
        const userData = response.data.user;
        const token = response.data.token;
        localStorage.setItem('email', response.data.user.email);
        localStorage.setItem('username', response.data.user.username);
        localStorage.setItem('token', token);
        localStorage.setItem('accesshash', response.data.user.accesshash);
        localStorage.setItem('name', response.data.user.name);

        // store it in session as well
        sessionStorage.setItem('email', response.data.user.email);
        sessionStorage.setItem('username', response.data.user.username);
        sessionStorage.setItem('token', token);
        sessionStorage.setItem('accesshash', response.data.user.accesshash);
        sessionStorage.setItem('name', response.data.user.name);
        // Example: Redirect to the user's profile page
        this.loading = false;
        if (this.nextroute != null && this.nextpost != null) {
          this.$router.push({
            path: `/${this.nextCreator}` + `/${this.nextroute}` + "/" + `${this.nextpost}` + '#comments'
          });
        } else {
          // this.$router.push({ path: `/${userData.username}` });
          location.reload();
        }
        console.log('Login successful!', userData);
        console.log('token: ', sessionStorage.getItem('token'));
      } catch (error) {
        // Handle login failure
        // Handle login failure
        this.loading = false;
        this.errorMessage = 'Login failed! Please try again.';
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
        // Remove spaces
        const username = normalizedUsername.replace(/[^a-zA-Z0-9]/g, "");

        // Make an Axios post request to the login endpoint
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
          // Assuming the response contains user data, update your state or take further actions
          const userData = response.data.user;
          // Show success message
          this.successMessage = 'Registration successful! Please login with: ' + username + ' or ' + this.registerEmail + ' to start publishing.';
          // Hide message after 3 seconds and reload the page
          this.loading = false;
          console.log('Registration successful!', userData);
        }
        setTimeout(() => {
          this.successMessage = '';
          this.errorMessage = '';
          location.reload();
        }, 10000);
      } catch (error) {
        // Handle login failure
        this.loading = false;
        this.errorMessage = 'Registration failed! Please try again.';
        setTimeout(() => {
          this.errorMessage = '';
        }, 6000);
        console.log('Registration failed:', error);
      }
    }
  },
  onSuccess(response) {
    // Handle the successful authentication response here
    // For example, send the response token to your backend for verification
    this.$axios.post('/social-login', {
      provider: 'google_jwt',
      token: response.credential
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
      this.$auth.setUserToken(response.data.token);
      this.$emit('loggedIn');
    }).catch(err => {
      console.log({
        err
      });
    });
  },
  onError(error) {
    // Handle any errors that occur during the sign-in process
    console.error('Google Sign-In Error:', error);
  },
  mounted() {
    if (typeof sessionStorage !== 'undefined' && sessionStorage.getItem('token')) {
      // Redirect the user to the appropriate page
      const username = sessionStorage.getItem('username');
      this.$router.push(`/${username}`);
    }
    // i need to get the current value of ?next= and route=
    const nextParam = this.$route.query.next;
    const routeParam = this.$route.query.route;
    const creatorParam = this.$route.query.creator;

    // Assign the retrieved values to data properties
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
  
  var style0 = __webpack_require__(99)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_uvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6c8a16b5",
  "40bffbe8"
  
)

/* harmony default export */ var u = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {BaseButton: __webpack_require__(11).default})


/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(100);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("263557e9", content, true, context)
};

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6c8a16b5_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6c8a16b5_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6c8a16b5_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6c8a16b5_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6c8a16b5_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

};;
//# sourceMappingURL=index.js.map