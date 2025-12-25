exports.ids = [21];
exports.modules = {

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/password-reset/index.vue?vue&type=template&id=4282193a
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "container mx-auto px2 py-4"
  }, [_vm._ssrNode("<div class=\"max-w-md mx-auto bg-white p-3 rounded-lg shadow-md\"><h2 class=\"text-xl font-semibold text-center mb-4\">Reset Your Password</h2> " + (_vm.success ? "<div role=\"alert\" class=\"bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative\"><strong class=\"font-bold text-green-700\">Success!</strong> Password reset successful! \n      <hr> <span class=\"block sm:inline\"><a href=\"/u\"><b>Click here to login</b></a></span></div>" : "<!---->") + " " + (_vm.verified ? "<div role=\"alert\" class=\"bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative\"><strong class=\"font-bold text-green-700\">Verification!</strong> <span class=\"block sm:inline\">Please check your inbox/spam folder. Reset code sent to your email. Validity:1h</span></div>" : "<!---->") + " " + (_vm.step == 1 ? "<form><label class=\"block mb-2\">Enter your email</label> <input type=\"email\" required=\"required\"" + _vm._ssrAttr("value", _vm.email) + " class=\"w-full p-2 border rounded\"> <button type=\"submit\" class=\"mt-4 w-full bg-blue-800 text-white p-2 rounded\">Request Password Reset</button></form>" : "<!---->") + " " + (_vm.step == 2 ? "<form><label class=\"block mb-2\">Enter 6-digit code</label> <input type=\"text\" maxlength=\"6\" required=\"required\"" + _vm._ssrAttr("value", _vm.token) + " class=\"w-full p-2 border rounded\"> <button type=\"submit\" class=\"mt-4 w-full bg-blue-800 text-white p-2 rounded\">Verify Code</button></form>" : "<!---->") + " " + (_vm.step == 3 ? "<form><label class=\"block mb-2\">New Password</label> <input type=\"password\" required=\"required\"" + _vm._ssrAttr("value", _vm.password) + " class=\"w-full p-2 border rounded\"> <label class=\"block mb-2 mt-2\">Confirm Password</label> <input type=\"password\" required=\"required\"" + _vm._ssrAttr("value", _vm.confirmPassword) + " class=\"w-full p-2 border rounded\"> <button type=\"submit\" class=\"mt-4 w-full bg-blue-800 text-white p-2 rounded\">Reset Password</button></form>" : "<!---->") + "</div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/password-reset/index.vue?vue&type=template&id=4282193a

// EXTERNAL MODULE: ./mixins/aos.js
var aos = __webpack_require__(11);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/password-reset/index.vue?vue&type=script&lang=js

/* harmony default export */ var password_resetvue_type_script_lang_js = ({
  name: 'reset-component',
  layout: 'user',
  mixins: [aos["a" /* default */]],
  data() {
    return {
      step: 1,
      email: '',
      token: '',
      password: '',
      confirmPassword: '',
      success: false,
      verified: false
    };
  },
  methods: {
    async sendResetRequest() {
      try {
        const response = await this.$axios.post('/user/password/request-reset', {
          email: this.email
        });
        if (response.data.status_code === 200) {
          this.verified = true;
          this.step = 2;
        } else {
          alert('Invalid or unknown email address! Please enter a valid email.');
        }
      } catch (error) {
        console.error('Error sending reset request', error);
      }
    },
    async verifyCode() {
      try {
        const response = await this.$axios.post('/user/password/verify-token', {
          token: this.token,
          email: this.email
        });
        // response 
        if (response.data.status_code === 200) {
          this.step = 3;
        } else if (response.data.status_code === 401) {
          alert('Expired Code! Please enter a valid code.');
          this.step = 1;
        } else {
          alert('Invalid code! Please enter a valid code.');
          this.$router.push('/password-reset');
        }
      } catch (error) {
        console.error('Error sending reset request', error);
      }
    },
    async resetPassword() {
      this.verified = false; // just to remove the message
      if (this.password !== this.confirmPassword) {
        alert('Passwords do not match!');
        return;
      }
      try {
        const response = await this.$axios.post('/user/password/reset', {
          token: this.token,
          email: this.email,
          password: this.password
        });
        if (response.data.status_code === 200) {
          this.success = true;
          // redirect to login after some seconds
          setTimeout(() => {
            this.$router.push('/u');
          }, 7000);
        } else {
          alert('Unexpected error! Please try again.');
        }
      } catch (error) {
        console.error('Error resetting password', error);
      }
    }
  }
});
// CONCATENATED MODULE: ./pages/password-reset/index.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_password_resetvue_type_script_lang_js = (password_resetvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./pages/password-reset/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_password_resetvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "68b423b9"
  
)

/* harmony default export */ var password_reset = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map