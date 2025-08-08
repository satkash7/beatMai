exports.ids = [18,2];
exports.modules = {

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/landing/AiTrend.vue?vue&type=template&id=4d538c12
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('client-only', [_c('div', {
    staticClass: "relative bg-white shadow-lg rounded-lg border border-gray-300 overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
  }, [_c('a', {
    attrs: {
      "href": _vm.link,
      "target": "_blank"
    }
  }, [_c('div', {
    staticClass: "relative"
  }, [_vm.img != null && !_vm.small ? _c('img', {
    staticClass: "rounded-t-lg object-cover transition-opacity duration-500 ease-in-out",
    class: _vm.small ? 'h-40 w-full' : 'h-72 w-full',
    attrs: {
      "src": _vm.img,
      "alt": "Trends"
    }
  }) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "absolute inset-0 bg-black opacity-30 transition-opacity duration-500 hover:opacity-10"
  })]), _vm._v(" "), _c('div', {
    staticClass: "p-4 text-center"
  }, [_c('h3', {
    staticClass: "text-lg font-bold text-gray-800 hover:text-blue-500 transition-all duration-300"
  }, [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c('p', {
    staticClass: "text-gray-600 text-sm"
  }, [_vm._v(_vm._s(_vm.description))])])])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/landing/AiTrend.vue?vue&type=template&id=4d538c12

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/landing/AiTrend.vue?vue&type=script&lang=js
/* harmony default export */ var AiTrendvue_type_script_lang_js = ({
  props: {
    img: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    },
    link: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    small: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      url: ""
    };
  },
  async mounted() {
    this.url = this.$config.storageUrl;
    console.log("image => ", this.url);
  }
});
// CONCATENATED MODULE: ./components/landing/AiTrend.vue?vue&type=script&lang=js
 /* harmony default export */ var landing_AiTrendvue_type_script_lang_js = (AiTrendvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/landing/AiTrend.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  landing_AiTrendvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "28d11ab5"
  
)

/* harmony default export */ var AiTrend = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=242a9b5e
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('client-only', [_c('div', {
    staticClass: "w-full container mx-auto px-6"
  }, [_c('div', {
    staticClass: "w-full"
  }, [_c('section', {
    staticClass: "bg-partner relative max-w-full sm:mx-6 my-0 shadow sm:rounded-2xl overflow-hidden"
  }, [_c('div', {
    staticClass: "w-full px-6 sm:px-0 my-0 py-0 flex flex-col items-center justify-center space-y-4 text-center",
    attrs: {
      "id": "mission"
    }
  }, [_c('h2', {
    staticClass: "text-lg sm:text-xl md:text-2xl text-neutral-800 font-semibold"
  }, [_c('br')]), _vm._v(" "), _c('div', {
    staticClass: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mx-auto"
  }, _vm._l(_vm.services.slice(0, 7), function (service) {
    return _c('LandingAiTrend', {
      key: service.id,
      attrs: {
        "img": service.imageUrl,
        "title": service.name,
        "description": service.descriptions,
        "link": service.link,
        "small": true
      }
    });
  }), 1)]), _vm._v(" "), _c('div', {
    staticClass: "w-full px-6 sm:px-0 my-0 py-0 flex flex-col items-center justify-center space-y-4 text-center",
    attrs: {
      "id": "domaines"
    }
  }, [_c('h2', {
    staticClass: "text-lg sm:text-xl md:text-2xl text-neutral-800 font-semibold"
  }, [_c('br'), _vm._v(" "), _c('span', {
    staticClass: "text-header-gradient-big"
  }, [_vm._v("Nos domaines d'intervention ")])]), _vm._v(" "), _c('div', {
    staticClass: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto"
  }, _vm._l(_vm.projects.slice(0, 7), function (project) {
    return _c('LandingAiTrend', {
      key: project.id,
      attrs: {
        "img": project.imageUrl,
        "title": project.name,
        "description": project.descriptions,
        "link": project.link
      }
    });
  }), 1)]), _vm._v(" "), _c('div', {
    staticClass: "w-full px-6 sm:px-0 my-0 py-0 flex flex-col items-center justify-center space-y-4 text-center",
    attrs: {
      "id": "domaines"
    }
  }, [_c('h2', {
    staticClass: "text-lg sm:text-xl md:text-2xl text-neutral-800 font-semibold"
  }, [_c('br'), _vm._v(" "), _c('span', {
    staticClass: "text-header-gradient-big"
  }, [_vm._v("Notre équipe ")])]), _vm._v(" "), _c('div', {
    staticClass: "grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-4 mx-auto"
  }, [_c('br'), _vm._v("\n          Elle est composée d'experts certfiés et qualifiés dans nos domaines d'intervention. Sa grande passion est d'apporter des solutions concrètes aux problèmes locaux grace à son accompagnement technique. Les membres de l''équipe du BEAT travaillent ensemble pour offrir des services de qualité et obtenir un résultat durable. \n           \n        ")])])])])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=242a9b5e

// EXTERNAL MODULE: ./mixins/aos.js
var aos = __webpack_require__(12);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js

/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js = ({
  name: 'IndexPage',
  mixins: [aos["a" /* default */]],
  data() {
    return {
      year: `${new Date().toLocaleString('en-us', {
        year: 'numeric'
      })}`,
      services: [],
      projects: []
    };
  },
  head() {
    return {
      title: "BUREAU D'EXPERTISE ET ACCOMPAGNEMENT TECHNIQUE",
      meta: [{
        hid: 'description',
        content: 'BEAT est un bureau d\'expertise et d\'accompagnement technique basé à Goma, en République Démocratique du Congo, dédié à offrir des solutions innovantes et un soutien spécialisé.'
      }, {
        hid: 'keywords',
        name: 'Beat Expertise'
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
        content: 'BUREAU D\'EXPERTISE ET ACCOMPAGNEMENT TECHNIQUE'
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
        content: 'https://beatexpertise.com'
      }, {
        hid: 'og:locale',
        property: 'og:locale',
        content: 'en_US'
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
        content: 'fr_FR'
      }, {
        hid: 'og:locale:alternate',
        property: 'og:locale:alternate',
        content: 'ar_AE'
      }, {
        hid: 'og:locale:alternate',
        property: 'og:locale:alternate',
        content: 'bn_BD'
      }, {
        hid: 'og:locale:alternate',
        property: 'og:locale:alternate',
        content: 'pt_PT'
      }, {
        hid: 'og:locale:alternate',
        property: 'og:locale:alternate',
        content: 'ru_RU'
      }, {
        hid: 'og:locale:alternate',
        property: 'og:locale:alternate',
        content: 'ja_JP'
      }, {
        hid: 'og:type',
        property: 'og:type',
        content: 'website'
      },
      // Twitter Meta Tags
      {
        hid: 'twitter:title',
        content: 'BUREAU D\'EXPERTISE ET ACCOMPAGNEMENT TECHNIQUE'
      }, {
        hid: 'twitter:description',
        content: 'BEAT est un bureau d\'expertise et d\'accompagnement technique basé à Goma, en République Démocratique du Congo, dédié à offrir des solutions innovantes et un soutien spécialisé.'
      }, {
        hid: 'twitter:image',
        content: "https://storage.everlytools.com/beatexpertise.jpg"
      }, {
        hid: 'twitter:url',
        content: "https://beatexpertise.com"
      }, {
        hid: 'twitter:card',
        content: 'summary_large_image'
      }, {
        hid: 'twitter:site',
        content: '@beatexpertise'
      }, {
        hid: 'twitter:creator',
        content: '@beatexpertise'
      }],
      link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: 'favicon.ico'
      }]
    };
  },
  async mounted() {
    this.services = [{
      id: 1,
      name: "Notre mission",
      imageUrl: __webpack_require__(35),
      descriptions: "Founir un accompagnement technique personalisé, aux entreprises, organisations et/ou individus, pour les aider à mieux rendre les services leur sollicités, grace à des solutions techniques innovantes, pour developpement économique et social de la RDC",
      link: "#"
    }, {
      id: 2,
      name: "Notre approche",
      imageUrl: __webpack_require__(36),
      descriptions: "Transformer les défis en opportunité à travers la puissance de ta technologie et fournir des solutions techniques innovantes grace à un accompagnement personnalisé, en vue du developpement économique de la RDC",
      link: "#"
    }];
    this.projects = [{
      id: 1,
      name: "Entrepreunariat",
      imageUrl: __webpack_require__(90),
      descriptions: "Accompagnement dans l'élaboration des plans d'affaires; Proposition des méthodes de gestion innovante des entreprises; Appui à l'élaboration de plan de continuité des affaires; Accompagnement dans l'élaboration des stratégies et plans de sécurité et de communication des organisations et/ou entreprises",
      link: "#"
    }, {
      id: 2,
      name: "Gestion de l'environnement et protection des personnes",
      imageUrl: __webpack_require__(91),
      descriptions: "Evaluation de l'imapct environnemental des projets et des affaires; Proposition des pratiques écologiques; Coaching et mentorat sur la gestion sensible à l'environnement;",
      link: "#"
    }, {
      id: 3,
      name: "Réduction des risques de catastrophes",
      imageUrl: __webpack_require__(92),
      descriptions: "Modélisation de la surveillance des aléas; Accompagnement des organisations dans la gestion sensible aux risques; Proposition des méthodes innovantes de gestion et de la protection de l'environnement; Formation sur la gestion des risques de catastrophes et des urgences; Développement des outils d'analyse de vulnérabilité des enjeux et risques de catastrophes; Elaboration des modules de gestion des risques adaptés aux besoins;",
      link: "#"
    }, {
      id: 4,
      name: "Innovation et technologie",
      imageUrl: __webpack_require__(93),
      descriptions: "Accompagnement dans la pensée design; Accompagnement dans l'utilisation éthique de l'Intelligence Artificielle; Développement des applications dans divers domaines;",
      link: "/projects"
    }, {
      id: 5,
      name: "Renforcement des capacités, Communication pour le changement de comportement",
      imageUrl: __webpack_require__(37),
      descriptions: "Développement des modules adaptés aux besoins des divers groupes, Accompagnement des groupes et des personnes à développer des plans visant le changement des comportements, Coaching et mentorat dans la motivation des groupes",
      link: "#"
    }, {
      id: 6,
      name: "Accompagnement dans la collecte et analyse des données",
      imageUrl: __webpack_require__(35),
      descriptions: "Accompagnement technique des entreprises dans la collecte et l’analyse des données qualitatives et quantitatives pour une prise de décision stratégique.",
      link: "#"
    }];
  },
  methods: {
    // Add any methods you need here
  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js
 /* harmony default export */ var pagesvue_type_script_lang_js = (lib_vue_loader_options_pagesvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./pages/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "c9ccebb4"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {LandingAiTrend: __webpack_require__(102).default})


/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/dd.a5bd521.jpeg";

/***/ }),

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/catas.bd12bed.png";

/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bb.8ca4328.jpeg";

/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bg1.832e952.jpg";

/***/ })

};;
//# sourceMappingURL=index.js.map