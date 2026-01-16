exports.ids = [18,2];
exports.modules = {

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bg1.832e952.jpg";

/***/ }),

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Comm.6eeafe1.jpg";

/***/ }),

/***/ 108:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(127);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("15e36e7c", content, true, context)
};

/***/ }),

/***/ 113:
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
  "18888332"
  
)

/* harmony default export */ var AiTrend = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2a52c059_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(108);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2a52c059_prod_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2a52c059_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2a52c059_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2a52c059_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ":root{--primary:#1a56db;--primary-dark:#1e429f;--secondary:#0e9f6e;--dark:#1f2937;--light:#f9fafb;--gray:#6b7280;--light-gray:#f3f4f6;--border:#e5e7eb}body{background-color:#fff;color:#374151;line-height:1.6}body,h1,h2,h3,h4,h5,h6{font-family:\"Inter\",sans-serif}h1,h2,h3,h4,h5,h6{color:#1f2937;color:var(--dark);font-weight:600;margin-bottom:1rem}.section-container{padding:60px 0}.section-title{font-size:1.875rem;font-weight:600;margin-bottom:40px;padding-bottom:15px;position:relative;text-align:center}.section-title:after{background:#1a56db;background:var(--primary);border-radius:2px;bottom:0;content:\"\";height:3px;left:50%;position:absolute;transform:translateX(-50%);width:60px}.text-header-gradient{background:linear-gradient(90deg,#1a56db,#0e9f6e);background:linear-gradient(to right,var(--primary),var(--secondary));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}.team-section{background-color:#f3f4f6;background-color:var(--light-gray);border:1px solid #e5e7eb;border:1px solid var(--border);border-radius:12px;margin:40px 0;padding:40px;text-align:center}.team-description{color:#6b7280;color:var(--gray);font-size:1.1rem;line-height:1.8;margin:0 auto;max-width:800px}.fade-in{animation:fadeIn 1s ease-out}.delay-0{animation-delay:.1s}.delay-1{animation-delay:.2s}.delay-2{animation-delay:.3s}@keyframes fadeIn{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@media (max-width:768px){.section-title{font-size:1.5rem}.team-section{padding:20px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=2a52c059
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('client-only', [_c('div', {
    staticClass: "w-full container mx-auto px-6"
  }, [_c('div', {
    staticClass: "w-full"
  }, [_c('section', {
    staticClass: "section-container",
    attrs: {
      "id": "mission"
    }
  }, [_c('div', {
    staticClass: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mx-auto"
  }, _vm._l(_vm.services.slice(0, 7), function (service, index) {
    return _c('LandingAiTrend', {
      key: service.id,
      class: ['fade-in', 'delay-' + index],
      attrs: {
        "img": service.imageUrl,
        "title": service.name,
        "description": service.descriptions,
        "link": service.link,
        "small": true
      }
    });
  }), 1)]), _vm._v(" "), _c('section', {
    staticClass: "section-container",
    attrs: {
      "id": "domaines"
    }
  }, [_c('h2', {
    staticClass: "section-title"
  }, [_vm._v("Nos "), _c('span', {
    staticClass: "text-header-gradient"
  }, [_vm._v("domaines d'intervention")])]), _vm._v(" "), _c('div', {
    staticClass: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto"
  }, _vm._l(_vm.projects.slice(0, 7), function (project, index) {
    return _c('LandingAiTrend', {
      key: project.id,
      class: ['fade-in', 'delay-' + index % 3],
      attrs: {
        "img": project.imageUrl,
        "title": project.name,
        "description": project.descriptions,
        "link": project.link
      }
    });
  }), 1)]), _vm._v(" "), _c('section', {
    staticClass: "section-container",
    attrs: {
      "id": "team"
    }
  }, [_c('h2', {
    staticClass: "section-title"
  }, [_vm._v("Notre "), _c('span', {
    staticClass: "text-header-gradient"
  }, [_vm._v("équipe")])]), _vm._v(" "), _c('div', {
    staticClass: "team-section fade-in"
  }, [_c('p', {
    staticClass: "team-description"
  }, [_vm._v("\n            Elle est composée d'experts certifiés et qualifiés dans nos domaines d'intervention. Sa grande passion est d'apporter des solutions concrètes aux problèmes locaux grâce à son accompagnement technique. Les membres de l'équipe du BEAT travaillent ensemble pour offrir des services de qualité et obtenir un résultat durable.\n          ")])])])])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=2a52c059

// EXTERNAL MODULE: ./mixins/aos.js
var aos = __webpack_require__(11);

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
      }, {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
      }]
    };
  },
  async mounted() {
    this.services = [{
      id: 1,
      name: "Notre mission",
      imageUrl: __webpack_require__(36),
      descriptions: "Fournir un accompagnement technique personnalisé, aux entreprises, organisations et/ou individus, pour les aider à mieux rendre les services leur sollicités, grâce à des solutions techniques innovantes, pour le développement économique et social de la RDC",
      link: "#"
    }, {
      id: 2,
      name: "Notre Vision",
      imageUrl: __webpack_require__(38),
      descriptions: "Nous accompagnons les personnes, entreprises, organisations, services étatiques dans la poursuite de leurs objectifs stratégiques grâce à un service innovant et co-produit afin de contribuer au développement durable de la RDC.",
      link: "#"
    }];
    this.projects = [{
      id: 1,
      name: "Entrepreneuriat et innovation sociale",
      imageUrl: __webpack_require__(97),
      descriptions: "Soutenir les communautés touchées par des catastrophes dans leurs processus de relèvement et renforcer leur résilience face aux crises futures. Nous accompagnons la planification, la mise en œuvre et le suivi d’initiatives locales d'entrepreneuriat et innovation sociales pour restaurer les conditions de vie, renforcer la capacité d’adaptation et favoriser un développement durable après les catastrophes.",
      link: "#"
    }, {
      id: 2,
      name: "Gestion de l'environnement et protection des personnes",
      imageUrl: __webpack_require__(98),
      descriptions: "Évaluation de l'impact environnemental des projets et des affaires; Proposition des pratiques écologiques; Coaching et mentorat sur la gestion sensible à l'environnement;",
      link: "#"
    }, {
      id: 3,
      name: "Réduction des risques de catastrophes",
      imageUrl: __webpack_require__(99),
      descriptions: "Modélisation de la surveillance des aléas; Accompagnement des organisations dans la gestion sensible aux risques; Proposition des méthodes innovantes de gestion et de la protection de l'environnement; Formation sur la gestion des risques de catastrophes et des urgences; Développement des outils d'analyse de vulnérabilité des enjeux et risques de catastrophes; Élaboration des modules de gestion des risques adaptés aux besoins;",
      link: "#"
    }, {
      id: 4,
      name: "Innovation et technologie",
      imageUrl: __webpack_require__(100),
      descriptions: "Nous concevons et déployons des solutions technologiques innovantes, en mettant l’accent sur le design thinking, promotion de l’utilisation éthique de l’intelligence artificielle, Conception et développement de sites web, d’applications numériques et de solutions de gestion de bases de données innovantes, adaptées aux besoins des organisations, avec une approche orientée performance, sécurité et durabilité.",
      link: "/projects"
    }, {
      id: 5,
      name: "Renforcement des capacités, Communication pour le changement de comportement",
      imageUrl: __webpack_require__(101),
      descriptions: "Développement des modules adaptés aux besoins des divers groupes, Accompagnement des groupes et des personnes à développer des plans visant le changement des comportements, Coaching et mentorat dans la motivation des groupes",
      link: "#"
    }, {
      id: 6,
      name: "Accompagnement dans la collecte et analyse des données",
      imageUrl: __webpack_require__(36),
      descriptions: "Accompagnement technique des entreprises dans la collecte et l'analyse des données qualitatives et quantitatives pour une prise de décision stratégique.",
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



function injectStyles (context) {
  
  var style0 = __webpack_require__(126)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "a160516e"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {LandingAiTrend: __webpack_require__(113).default})


/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/entre.b774b3c.jpg";

/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/gestionEnv.0fc4133.jpg";

/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/reduc.12c07dd.jpg";

/***/ })

};;
//# sourceMappingURL=index.js.map