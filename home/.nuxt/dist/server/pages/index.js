exports.ids = [18,2];
exports.modules = {

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=1c7fc888
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
      "id": "services"
    }
  }, [_c('h2', {
    staticClass: "text-lg sm:text-xl md:text-2xl text-neutral-800 font-semibold"
  }, [_c('br'), _vm._v(" "), _c('span', {
    staticClass: "text-header-gradient-big"
  }, [_vm._v("Nos domaines d'intervention")])]), _vm._v(" "), _c('div', {
    staticClass: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto"
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
      "id": "projets"
    }
  }, [_c('h2', {
    staticClass: "text-lg sm:text-xl md:text-2xl text-neutral-800 font-semibold"
  }, [_c('br'), _vm._v(" "), _c('span', {
    staticClass: "text-header-gradient-big"
  }, [_vm._v("Nos services")])]), _vm._v(" "), _c('div', {
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
  }), 1)])])])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=1c7fc888

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
      name: "Gestion de l’environnement & protection",
      imageUrl: __webpack_require__(36),
      descriptions: "Évaluations d’impact environnemental, Intégration de pratiques écologiques responsables, Formation en gestion environnementale et sociale",
      link: "/services"
    }, {
      id: 2,
      name: "Accompagnement technique",
      imageUrl: __webpack_require__(37),
      descriptions: "Donnez vie à vos projets environnementaux avec notre accompagnement technique. Recevez des formations et Conseils d’experts pour renforcer la résilience de vos initiatives",
      link: "/services"
    }, {
      id: 3,
      name: "Réduction des risques de catastrophes",
      imageUrl: __webpack_require__(38),
      descriptions: "Prévoir, prévenir et se préparer efficacement. Surveillance et modélisation des aléas, Plans de contingence et continuité d’activité.",
      link: "/services"
    }];
    this.projects = [{
      id: 1,
      name: "Entrepreunariat",
      imageUrl: __webpack_require__(38),
      descriptions: "Accompagnement dans l'élaboration des plans d'affaires, Proposition des méthodes de gestion innovante",
      link: "/projects"
    }, {
      id: 2,
      name: "Gestion de l'environnement et protection des personnes",
      imageUrl: __webpack_require__(39),
      descriptions: "Évaluation de l'impact environnemental des projets et des affaires, Proposition des pratiques écologiques, Coaching et mentorat sur la gestion sensible à l'environnement",
      link: "/projects"
    }, {
      id: 3,
      name: "Réduction des risques de catastrophes",
      imageUrl: __webpack_require__(80),
      descriptions: "Accompagnement des organisations avec des solutions innovantes pour la gestion des risques, la planification de la continuité et la résilience face aux catastrophes.",
      link: "/projects"
    }, {
      id: 4,
      name: "Digitalisation du réseau de Durba avec mWater",
      imageUrl: __webpack_require__(80),
      descriptions: "Accompagnement technique des entreprises avec des solutions innovantes en intelligence artificielle, développement d’applications, suivi en temps réel et optimisation des processus numériques.",
      link: "/projects"
    }, {
      id: 5,
      name: "Communication pour le changement de comportement",
      imageUrl: __webpack_require__(37),
      descriptions: "Développement des modules adaptés aux besoins des divers groupes, Accompagnement des groupes et des personnes à développer des plans visant le changement des comportements, Coaching et mentorat dans la motivation des groupes",
      link: "/projects"
    }, {
      id: 6,
      name: "Accompagnement dans la collecte et analyse des données",
      imageUrl: __webpack_require__(36),
      descriptions: "Accompagnement technique des entreprises dans la collecte et l’analyse des données qualitatives et quantitatives pour une prise de décision stratégique optimisée.",
      link: "/projects"
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
installComponents(component, {LandingAiTrend: __webpack_require__(91).default})


/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/pic6.85b4998.jpg";

/***/ }),

/***/ 91:
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

/***/ })

};;
//# sourceMappingURL=index.js.map