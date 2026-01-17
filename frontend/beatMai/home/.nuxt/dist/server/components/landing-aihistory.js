exports.ids = [3];
exports.modules = {

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/landing/Aihistory.vue?vue&type=template&id=60debb1e
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('client-only', [_c('div', _vm._b({
    staticClass: "col-span-12 lg:col-span-6"
  }, 'div', _vm.$attrs, false), [_c('div', {
    staticClass: "w-full sm:mt-20 xl:mt-0"
  }, [_c('br'), _vm._v(" "), _c('div', {
    staticClass: "flex flex-wrap"
  }, _vm._l(_vm.questions, function (question) {
    return _c('a', {
      key: question.id,
      on: {
        "click": function ($event) {
          return _vm.sendQuestionToMainComponent(question);
        }
      }
    }, [_c('BaseButton', {
      staticClass: "max-w-full px-6 m-1 py-4 bg-inherit text-gradient border border-[#0c66ee] flex items-center justify-center"
    }, [_c('span', {
      staticClass: "whitespace-no-wrap"
    }, [_vm._v(" " + _vm._s(question.question.substring(0, 100)) + " ...")])])], 1);
  }), 0)])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/landing/Aihistory.vue?vue&type=template&id=60debb1e

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/landing/Aihistory.vue?vue&type=script&lang=js
/* harmony default export */ var Aihistoryvue_type_script_lang_js = ({
  name: 'LandingAihistory',
  props: {
    type: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      questions: []
    };
  },
  methods: {
    sendQuestionToMainComponent(question) {
      // Emit an event with the question and answer data
      this.$emit('questionClicked', {
        question: question.question,
        answer: question.answer
      });
    }
  },
  async mounted() {
    // Fetch data from the API endpoint
    await this.$axios.get('/everly/questions').then(response => {
      this.questions = response.data.questions;
      //console.log("questions ===========> ");
      //console.log("Response:", JSON.stringify(response));
    }).catch(error => {
      console.error('Could not fetch the questions =========>:', error);
    });
  }
});
// CONCATENATED MODULE: ./components/landing/Aihistory.vue?vue&type=script&lang=js
 /* harmony default export */ var landing_Aihistoryvue_type_script_lang_js = (Aihistoryvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/landing/Aihistory.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  landing_Aihistoryvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "68baff89"
  
)

/* harmony default export */ var Aihistory = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {BaseButton: __webpack_require__(18).default})


/***/ })

};;
//# sourceMappingURL=landing-aihistory.js.map