import { mergeProps, useSSRContext, resolveComponent, withCtx, createTextVNode, createVNode, resolveDynamicComponent } from "vue";
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrRenderStyle, ssrInterpolate, ssrRenderList, ssrRenderVNode } from "vue/server-renderer";
import { _ as _export_sfc, a as useNuxtApp, f as __nuxt_component_0$2, b as useRuntimeConfig } from "../server.mjs";
import { a as aosMixin } from "./aos-DgaNNj1M.js";
import "/Applications/XAMPP/xamppfiles/htdocs/beatMai/home/node_modules/hookable/dist/index.mjs";
const _sfc_main$c = {
  name: "BaseButton",
  inheritAttrs: false
};
function _sfc_ssrRender$c(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<button${ssrRenderAttrs(mergeProps({ class: "text-sm text-center rounded-full hover:shadow-md hover:shadow-[#0c66ee]/50 transition duration-300" }, _ctx.$attrs, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</button>`);
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/Button.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const __nuxt_component_1$2 = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["ssrRender", _sfc_ssrRender$c]]);
const _sfc_main$b = {
  name: "DarkModeToggle",
  data() {
    return {
      isDark: false
    };
  },
  mounted() {
    const { $darkMode } = useNuxtApp();
    if ($darkMode) {
      this.isDark = $darkMode.isDark;
    }
  },
  methods: {
    toggleDarkMode() {
      const { $darkMode } = useNuxtApp();
      if ($darkMode) {
        $darkMode.toggle();
        this.isDark = $darkMode.isDark;
      }
    }
  }
};
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<button${ssrRenderAttrs(mergeProps({
    class: "p-2 rounded-lg transition-all duration-300 hover:bg-gray-200 dark:hover:bg-dark-surface",
    "aria-label": $data.isDark ? "Activer le mode clair" : "Activer le mode sombre",
    title: $data.isDark ? "Activer le mode clair" : "Activer le mode sombre"
  }, _attrs))} data-v-b49036be>`);
  if (!$data.isDark) {
    _push(`<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-700 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-b49036be><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" data-v-b49036be></path></svg>`);
  } else {
    _push(`<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-b49036be><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" data-v-b49036be></path></svg>`);
  }
  _push(`</button>`);
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/DarkModeToggle.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$b], ["__scopeId", "data-v-b49036be"]]);
const _sfc_main$a = {
  name: "tools-buttons",
  mixins: [aosMixin],
  props: {
    showHeader: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      areas: [
        {
          name: "Études et Conseil",
          href: "/services#etudes-conseil"
        },
        {
          name: "Infrastructures d'eau",
          href: "/services#construction"
        },
        {
          name: "Digitalisation des réseaux d’eau",
          href: "/services#digitalisation"
        },
        {
          name: "Maintenance",
          href: "/services#maintenance"
        },
        {
          name: "Énergie de secours",
          href: "/services#energie-secours"
        },
        {
          name: "Gestion et suivi",
          href: "/services#gestion-eau"
        },
        {
          name: "Optimisation",
          href: "/services#systemes-pompage"
        },
        {
          name: "Formation",
          href: "/services#formation-technique"
        },
        {
          name: "Cartographie",
          href: "/services#cartographie-reseaux"
        },
        {
          name: "Solutions innovantes",
          href: "/services#gestion-durable-eau"
        },
        {
          name: "Partenariats et collaborations stratégiques",
          href: "/services#partenariats-strategiques"
        }
      ]
    };
  }
};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_client_only = __nuxt_component_0$2;
  _push(ssrRenderComponent(_component_client_only, _attrs, {}, _parent));
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/TradingToolImage.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$a]]);
const logoImg = "" + __buildAssetsURL("logo.CJxDoDvR.png");
const _sfc_main$9 = {
  name: "BaseNavbar",
  data() {
    return {
      logoImg,
      open: false,
      dropdownNavbar: false,
      destinationLink: "/blogs",
      destination: "Discover new AI tools",
      user: null,
      validSource: false,
      userLogged: false,
      showModal: false,
      mobileMenuOpen: false,
      accesshash: "",
      isMobile: false
    };
  },
  props: {
    from: {
      type: String,
      default: null
    }
  },
  methods: {
    logOut() {
      if (typeof sessionStorage !== "undefined") {
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("username");
      }
      this.$router.push({ path: "/" });
      this.closeMobileMenu();
    },
    openModal() {
      this.showModal = true;
      this.closeMobileMenu();
    },
    closeModal() {
      this.showModal = false;
    },
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
    },
    closeMobileMenu() {
      this.mobileMenuOpen = false;
    },
    defineDestination() {
      if (this.from) {
        if (this.from === "blog") {
          this.destination = "Explore useful tips";
          this.destinationLink = "/tips";
          this.validSource = true;
        } else {
          this.destination = "Discover new AI tools";
          this.destinationLink = "/blogs";
        }
      }
    }
  },
  mounted() {
    this.defineDestination();
    this.isMobile = (void 0).innerWidth < 1024;
    (void 0).addEventListener("resize", () => {
      this.isMobile = (void 0).innerWidth < 1024;
    });
    (void 0).gtranslateSettings = {
      default_language: "fr",
      detect_browser_language: false,
      languages: ["fr", "en", "es", "sw"],
      wrapper_selector: ".gtranslate_wrapper",
      switcher_horizontal_position: "right",
      switcher_vertical_position: "top",
      flag_style: "3d",
      alt_flags: { en: "usa" },
      flag_size: 24
    };
    const gtranslateWrapper = (void 0).querySelector(".gtranslate_wrapper");
    if (gtranslateWrapper) {
      gtranslateWrapper.style.fontSize = "10px";
    }
    const script = (void 0).createElement("script");
    script.src = "https://cdn.gtranslate.net/widgets/latest/popup.js";
    script.defer = true;
    (void 0).body.appendChild(script);
    if (typeof sessionStorage !== "undefined" && typeof localStorage !== "undefined") {
      const token = sessionStorage.getItem("token");
      this.user = sessionStorage.getItem("username");
      this.accesshash = sessionStorage.getItem("accesshash") || localStorage.getItem("accesshash");
      if (token) {
        this.userLogged = true;
      }
    }
  }
};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_base_button = __nuxt_component_1$2;
  const _component_BaseDarkModeToggle = __nuxt_component_1$1;
  const _component_PlusIcon = resolveComponent("PlusIcon");
  const _component_LandingTradingToolImage = __nuxt_component_2;
  _push(`<nav${ssrRenderAttrs(mergeProps({
    id: "navbar",
    key: $data.userLogged,
    class: "navbar fixed top-0 left-0 w-full z-50 bg-white dark:bg-dark-surface shadow-md text-neutral-800 dark:text-dark-text transition-colors duration-300"
  }, _attrs))} data-v-6682913f><div class="flex flex-col max-w-screen-xl px-2 mx-auto lg:items-center lg:justify-between lg:flex-row py-1 lg:py-2" data-v-6682913f><div class="flex flex-row items-center justify-between w-full py-2 lg:py-4" data-v-6682913f><div class="logo flex items-center" data-v-6682913f><a href="/" data-v-6682913f><img${ssrRenderAttr("src", $data.logoImg)} class="w-12 h-12 lg:w-16 lg:h-16 xl:w-24 xl:h-24 object-contain transition-transform duration-300 hover:scale-105" data-v-6682913f></a></div><div class="hidden lg:flex flex-row items-center justify-center flex-1" data-v-6682913f><div class="flex flex-row items-center space-x-3" data-v-6682913f><a href="/apropos" data-v-6682913f>`);
  _push(ssrRenderComponent(_component_base_button, { class: "px-2 xl:px-4 py-2 bg-inherit text-gradient smallbtn transition-all duration-300 hover:bg-gradient-to-r hover:from-[#468ef9] hover:to-[#030a3c] hover:text-white hover:shadow-md" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` A propos de Beat `);
      } else {
        return [
          createTextVNode(" A propos de Beat ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</a><a href="/#domaines" data-v-6682913f>`);
  _push(ssrRenderComponent(_component_base_button, { class: "px-2 xl:px-4 py-2 bg-inherit text-gradient smallbtn transition-all duration-300 hover:bg-gradient-to-r hover:from-[#468ef9] hover:to-[#030a3c] hover:text-white hover:shadow-md" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Domaines `);
      } else {
        return [
          createTextVNode(" Domaines ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</a><a href="/blogs" data-v-6682913f>`);
  _push(ssrRenderComponent(_component_base_button, { class: "px-2 xl:px-4 py-2 bg-inherit text-gradient smallbtn transition-all duration-300 hover:bg-gradient-to-r hover:from-[#468ef9] hover:to-[#030a3c] hover:text-white hover:shadow-md" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Actualités `);
      } else {
        return [
          createTextVNode(" Actualités ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</a><a href="/#contact" data-v-6682913f>`);
  _push(ssrRenderComponent(_component_base_button, { class: "px-2 xl:px-4 py-2 bg-inherit text-gradient smallbtn transition-all duration-300 hover:bg-gradient-to-r hover:from-[#468ef9] hover:to-[#030a3c] hover:text-white hover:shadow-md" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Contact `);
      } else {
        return [
          createTextVNode(" Contact ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</a></div></div><div class="flex items-center space-x-3" data-v-6682913f>`);
  _push(ssrRenderComponent(_component_BaseDarkModeToggle, { class: "hidden lg:block" }, null, _parent));
  _push(`<div class="gtranslate_wrapper z-10000 hidden lg:block" data-v-6682913f></div>`);
  if (!$data.isMobile && $data.userLogged) {
    _push(ssrRenderComponent(_component_base_button, {
      class: "w-8 h-8 rounded-full flex items-center justify-center relative smallbtn hidden lg:flex transition-transform duration-300 hover:scale-110",
      onClick: $options.openModal,
      style: { "background-image": "linear-gradient(to right, #468ef9, #030a3c)", "color": "white" }
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_PlusIcon, { size: 16 }, null, _parent2, _scopeId));
        } else {
          return [
            createVNode(_component_PlusIcon, { size: 16 })
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`<button class="lg:hidden focus:outline-none p-1 rounded-md transition-colors duration-300 hover:bg-gray-100" data-v-6682913f><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-v-6682913f><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" data-v-6682913f></path></svg></button></div></div>`);
  if ($data.mobileMenuOpen) {
    _push(`<div class="lg:hidden fixed inset-0 z-50 transition-opacity duration-500" data-v-6682913f><div class="${ssrRenderClass([{ "translate-x-0": $data.mobileMenuOpen, "translate-x-full": !$data.mobileMenuOpen }, "absolute right-0 top-0 h-full w-4/5 max-w-sm bg-gradient-to-b from-blue-50 to-white shadow-xl transform transition-transform duration-500 ease-out"])}" data-v-6682913f><div class="p-5 h-full flex flex-col" data-v-6682913f><div class="flex justify-between items-center mb-6 border-b border-blue-100 pb-4" data-v-6682913f><div class="flex items-center" data-v-6682913f><img${ssrRenderAttr("src", $data.logoImg)} class="w-10 h-10 object-contain" data-v-6682913f></div><button class="p-2 rounded-full transition-colors duration-300 hover:bg-blue-100 focus:outline-none" data-v-6682913f><svg class="w-6 h-6 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-v-6682913f><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-v-6682913f></path></svg></button></div><div class="flex-1 space-y-2 overflow-y-auto" data-v-6682913f><a href="/" class="flex items-center py-4 px-5 text-blue-900 rounded-xl transition-all duration-300 hover:bg-blue-500 hover:text-white hover:shadow-lg" data-v-6682913f><svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-v-6682913f><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" data-v-6682913f></path></svg> Accueil </a><a href="/apropos" class="flex items-center py-4 px-5 text-blue-900 rounded-xl transition-all duration-300 hover:bg-blue-500 hover:text-white hover:shadow-lg" data-v-6682913f><svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-v-6682913f><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" data-v-6682913f></path></svg> A propos de Beat </a><a href="/#domaines" class="flex items-center py-4 px-5 text-blue-900 rounded-xl transition-all duration-300 hover:bg-blue-500 hover:text-white hover:shadow-lg" data-v-6682913f><svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-v-6682913f><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" data-v-6682913f></path></svg> Domaines </a><a href="/blogs" class="flex items-center py-4 px-5 text-blue-900 rounded-xl transition-all duration-300 hover:bg-blue-500 hover:text-white hover:shadow-lg" data-v-6682913f><svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-v-6682913f><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" data-v-6682913f></path></svg> Actualités </a><a href="/#contact" class="flex items-center py-4 px-5 text-blue-900 rounded-xl transition-all duration-300 hover:bg-blue-500 hover:text-white hover:shadow-lg" data-v-6682913f><svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-v-6682913f><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" data-v-6682913f></path></svg> Contact </a><div class="flex items-center py-4 px-5 text-blue-900 rounded-xl" data-v-6682913f><svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-v-6682913f><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" data-v-6682913f></path></svg><span class="flex-1" data-v-6682913f>Mode sombre</span>`);
    _push(ssrRenderComponent(_component_BaseDarkModeToggle, null, null, _parent));
    _push(`</div><div class="py-3 px-5 mt-4" data-v-6682913f><div class="gtranslate_wrapper" data-v-6682913f></div></div></div><div class="pt-4 border-t border-blue-100 mt-4" data-v-6682913f>`);
    if ($data.userLogged) {
      _push(ssrRenderComponent(_component_base_button, {
        class: "w-full py-4 px-5 mb-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white text-center rounded-xl transition-all duration-300 hover:from-blue-600 hover:to-blue-800 hover:shadow-lg flex items-center justify-center",
        onClick: $options.openModal
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_PlusIcon, {
              size: 16,
              class: "mr-2"
            }, null, _parent2, _scopeId));
            _push2(` Créer du contenu `);
          } else {
            return [
              createVNode(_component_PlusIcon, {
                size: 16,
                class: "mr-2"
              }),
              createTextVNode(" Créer du contenu ")
            ];
          }
        }),
        _: 1
      }, _parent));
    } else {
      _push(`<!---->`);
    }
    if ($data.userLogged) {
      _push(`<button class="w-full py-3 px-5 text-red-600 border border-red-200 rounded-xl text-center transition-all duration-300 hover:bg-red-50 hover:border-red-300 flex items-center justify-center" data-v-6682913f><svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-v-6682913f><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" data-v-6682913f></path></svg> Se déconnecter </button>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div></div></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
  if ($data.showModal) {
    _push(`<div class="modal" data-v-6682913f><div class="modal-content" data-v-6682913f>`);
    if ($data.userLogged) {
      _push(`<div data-v-6682913f><span class="close transition-colors duration-300 hover:text-red-500" data-v-6682913f>×</span><h4 class="text-2xl sm:text-xl xl:text-2xl font-bold leading-tight sm:pr-8 xl:pr-10 ml-2 mr-2" style="${ssrRenderStyle({ "color": "#030a3c" })}" data-v-6682913f> Bonjour, <span class="text-header-gradient" data-v-6682913f> Commençons!</span></h4><hr data-v-6682913f><a href="/create?v=blog" data-v-6682913f>`);
      _push(ssrRenderComponent(_component_base_button, { class: "px-2 xl:px-4 py-3 mt-2 bg-inherit text-gradient border border-[#0c66ee] rounded-lg transition-all duration-300 hover:bg-[#0c66ee] hover:text-white hover:shadow-md" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Créer et publier un article ou une opportunité `);
          } else {
            return [
              createTextVNode(" Créer et publier un article ou une opportunité ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</a><br data-v-6682913f><hr data-v-6682913f><small data-v-6682913f>En cliquant ici, vous serez redirigé vers la page de création d&#39;un article ou d&#39;une opportunité. Vous pouvez également éditer ou supprimer des articles ou opportunités déjà publiés.</small></div>`);
    } else {
      _push(`<div data-v-6682913f><span class="close transition-colors duration-300 hover:text-red-500" data-v-6682913f>×</span><h4 class="text-[2.5rem] sm:text-2xl xl:text-2xl font-bold leading-tight sm:pr-8 xl:pr-10" style="${ssrRenderStyle({ "color": "#030a3c" })}" data-v-6682913f> Voici les recentes publications sur BEAT </h4><hr data-v-6682913f>`);
      _push(ssrRenderComponent(_component_LandingTradingToolImage, {
        class: "hidden sm:block",
        showHeader: false
      }, null, _parent));
      _push(`<hr data-v-6682913f></div>`);
    }
    _push(`</div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</nav>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/Navbar.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$9], ["__scopeId", "data-v-6682913f"]]);
const _sfc_main$8 = {
  name: "LandingStep",
  props: {
    blog: {
      type: Object,
      required: true
    }
  }
};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full max-w-[380px] mx-auto bg-white dark:bg-dark-card shadow-md rounded-lg overflow-hidden transition-transform duration-500 hover:scale-105 hover:shadow-xl border border-transparent dark:border-dark-border flex flex-col h-full" }, _attrs))}><div class="relative flex-shrink-0"><a${ssrRenderAttr("href", "/blogs/" + $props.blog.blogRoute)} class="block"><img${ssrRenderAttr("src", $props.blog.imageUrl)} class="w-full h-48 object-cover rounded-t-lg transition-opacity duration-500 ease-in-out hover:opacity-80"${ssrRenderAttr("alt", $props.blog.blogTitle)}></a></div><div class="p-4 flex flex-col flex-grow"><a${ssrRenderAttr("href", "/blogs/" + $props.blog.blogRoute)} class="block flex-grow"><h3 class="text-lg font-bold text-gray-800 dark:text-dark-text hover:text-blue-500 transition-all duration-300 mb-3">${ssrInterpolate($props.blog.blogTitle)}</h3><p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-3">${ssrInterpolate($props.blog.blogCaption)}</p></a><div class="mt-auto pt-3 border-t border-gray-100 dark:border-dark-border"><a${ssrRenderAttr("href", "/blogs/" + $props.blog.blogRoute)} class="text-blue-600 hover:text-blue-800 font-medium flex items-center justify-center transition-colors duration-300 group"> Lire la suite <svg class="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></a></div></div></div>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/Step.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$8]]);
const _sfc_main$7 = {
  name: "MapMarkerIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
    "aria-hidden": $props.title ? null : "true",
    "aria-label": $props.title,
    class: "material-design-icon map-marker-icon",
    role: "img"
  }, _attrs))}><svg${ssrRenderAttr("fill", $props.fillColor)} class="material-design-icon__svg"${ssrRenderAttr("width", $props.size)}${ssrRenderAttr("height", $props.size)} viewBox="0 0 24 24"><path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z">`);
  if ($props.title) {
    _push(`<title>${ssrInterpolate($props.title)}</title>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</path></svg></span>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vue-material-design-icons/MapMarker.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const MapPinIcon = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$7]]);
const _sfc_main$6 = {
  name: "PhoneIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
    "aria-hidden": $props.title ? null : "true",
    "aria-label": $props.title,
    class: "material-design-icon phone-icon",
    role: "img"
  }, _attrs))}><svg${ssrRenderAttr("fill", $props.fillColor)} class="material-design-icon__svg"${ssrRenderAttr("width", $props.size)}${ssrRenderAttr("height", $props.size)} viewBox="0 0 24 24"><path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z">`);
  if ($props.title) {
    _push(`<title>${ssrInterpolate($props.title)}</title>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</path></svg></span>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vue-material-design-icons/Phone.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const PhoneIcon = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$5 = {
  name: "SendIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
    "aria-hidden": $props.title ? null : "true",
    "aria-label": $props.title,
    class: "material-design-icon send-icon",
    role: "img"
  }, _attrs))}><svg${ssrRenderAttr("fill", $props.fillColor)} class="material-design-icon__svg"${ssrRenderAttr("width", $props.size)}${ssrRenderAttr("height", $props.size)} viewBox="0 0 24 24"><path d="M2,21L23,12L2,3V10L17,12L2,14V21Z">`);
  if ($props.title) {
    _push(`<title>${ssrInterpolate($props.title)}</title>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</path></svg></span>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vue-material-design-icons/Send.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const SendIcon = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$4 = {
  name: "AlertCircleIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
    "aria-hidden": $props.title ? null : "true",
    "aria-label": $props.title,
    class: "material-design-icon alert-circle-icon",
    role: "img"
  }, _attrs))}><svg${ssrRenderAttr("fill", $props.fillColor)} class="material-design-icon__svg"${ssrRenderAttr("width", $props.size)}${ssrRenderAttr("height", $props.size)} viewBox="0 0 24 24"><path d="M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z">`);
  if ($props.title) {
    _push(`<title>${ssrInterpolate($props.title)}</title>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</path></svg></span>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vue-material-design-icons/AlertCircle.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const AlertCircleIcon = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$3 = {
  name: "ClockOutlineIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
    "aria-hidden": $props.title ? null : "true",
    "aria-label": $props.title,
    class: "material-design-icon clock-outline-icon",
    role: "img"
  }, _attrs))}><svg${ssrRenderAttr("fill", $props.fillColor)} class="material-design-icon__svg"${ssrRenderAttr("width", $props.size)}${ssrRenderAttr("height", $props.size)} viewBox="0 0 24 24"><path d="M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z">`);
  if ($props.title) {
    _push(`<title>${ssrInterpolate($props.title)}</title>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</path></svg></span>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vue-material-design-icons/ClockOutline.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const ClockOutlineIcon = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$2 = {
  name: "PlayIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
    "aria-hidden": $props.title ? null : "true",
    "aria-label": $props.title,
    class: "material-design-icon play-icon",
    role: "img"
  }, _attrs))}><svg${ssrRenderAttr("fill", $props.fillColor)} class="material-design-icon__svg"${ssrRenderAttr("width", $props.size)}${ssrRenderAttr("height", $props.size)} viewBox="0 0 24 24"><path d="M8,5.14V19.14L19,12.14L8,5.14Z">`);
  if ($props.title) {
    _push(`<title>${ssrInterpolate($props.title)}</title>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</path></svg></span>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vue-material-design-icons/Play.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const PlayIcon = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  name: "PauseIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
    "aria-hidden": $props.title ? null : "true",
    "aria-label": $props.title,
    class: "material-design-icon pause-icon",
    role: "img"
  }, _attrs))}><svg${ssrRenderAttr("fill", $props.fillColor)} class="material-design-icon__svg"${ssrRenderAttr("width", $props.size)}${ssrRenderAttr("height", $props.size)} viewBox="0 0 24 24"><path d="M14,19H18V5H14M6,19H10V5H6V19Z">`);
  if ($props.title) {
    _push(`<title>${ssrInterpolate($props.title)}</title>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</path></svg></span>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vue-material-design-icons/Pause.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const PauseIcon = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const logoOlame = "" + __buildAssetsURL("olame.BK4pdhb6.jpeg");
const logoUnigom = "" + __buildAssetsURL("unigom.CCYyNSYJ.png");
const logoEsvUnigom = "" + __buildAssetsURL("esv-unigom.DzdgMlMr.png");
const logoCaritasGoma = "" + __buildAssetsURL("caritasgoma.BzYpPhs3.png");
const logoAustralia = "" + __buildAssetsURL("australia.CyJEOiNQ.jpeg");
const logoKindu = "" + __buildAssetsURL("kindu.MgOTlLUh.jpeg");
const logoCafod = "" + __buildAssetsURL("cafod.CyLf2XDB.jpeg");
const logoStart = "" + __buildAssetsURL("start.DpZ1IVN6.png");
const logoCajed = "" + __buildAssetsURL("cajed.D4Halw7W.png");
const logoHub = "" + __buildAssetsURL("hub.Bnuo-Vfu.png");
const logoStartNetwork = "" + __buildAssetsURL("startnetwork.DZOk-n3b.jpeg");
const logoSocoac = "" + __buildAssetsURL("socoac.D3zu8E-C.jpg");
const logoAnglican = "" + __buildAssetsURL("anglican.Vb9w8iWb.jpg");
const intervalError = "[nuxt] `setInterval` should not be used on the server. Consider wrapping it with an `onNuxtReady`, `onBeforeMount` or `onMounted` lifecycle hook, or ensure you only call it in the browser by checking `false`.";
const setInterval = (() => {
  console.error(intervalError);
});
const _sfc_main = {
  name: "BaseFooter",
  components: {
    MapPinIcon,
    PhoneIcon,
    SendIcon,
    AlertCircleIcon,
    ClockOutlineIcon,
    PlayIcon,
    PauseIcon
  },
  props: {
    isHomepage: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const config = useRuntimeConfig();
    return { baseURL: config.public.baseURL };
  },
  data() {
    return {
      logoImg,
      year: `${(/* @__PURE__ */ new Date()).toLocaleString("en-us", { year: "numeric" })}`,
      blogs: [],
      visitorname: "",
      visitoremail: "",
      visitorphone: "",
      visitormessage: "",
      email: "",
      addedRequest: false,
      addedUser: false,
      userExists: false,
      failedRequest: false,
      partners: [
        { name: "Olame", logo: logoOlame, link: "https://olamerdc.org/" },
        { name: "UniGom", logo: logoUnigom, link: "https://unigom.ac.cd/" },
        { name: "esv.unigom", logo: logoEsvUnigom, link: "https://esv.unigom.ac.cd/" },
        { name: "Caritas Goma", logo: logoCaritasGoma, link: "https://www.caritas.org/" },
        { name: "Australia", logo: logoAustralia, link: "https://www.caritas.org.au/" },
        { name: "CaritasKindu", logo: logoKindu, link: "https://caritasdev.cd/" },
        { name: "Cafodd", logo: logoCafod, link: "https://cafod.org.uk/" },
        { name: "Start", logo: logoStart, link: "https://startnetwork.org/" },
        { name: "Cajed", logo: logoCajed, link: "https://www.cajed.org/" },
        { name: "Hub", logo: logoHub, link: "https://startnetwork.org/network/hubs/democratic-republic-congo-hub" },
        { name: "Start Network", logo: logoStartNetwork, link: "https://startnetwork.org/" },
        { name: "Socoac Asbl", logo: logoSocoac, link: "https://socoacasbl.com/" },
        { name: "Eglise Anglicane du Congo", logo: logoAnglican, link: "https://www.goma.anglican.org/" }
      ],
      socialLinks: [
        { icon: "Whatsapp", link: "https://wa.me/+243995277023" },
        { icon: "Facebook", link: "https://www.facebook.com/profile.php?id=61578637741320" },
        { icon: "Twitter", link: "https://x.com/beatexpertise" },
        { icon: "EmailIcon", link: "mailto:direction@beatexpertise.com" },
        { icon: "Linkedin", link: "https://www.linkedin.com/company/beat-expertise/about/" },
        { icon: "Youtube", link: "https://www.youtube.com/channel/UCcpAAfUJtM_sxZNb9LO94sQ" }
      ],
      scrollInterval: null,
      isScrollingPaused: false,
      scrollDirection: 1,
      currentScrollPosition: 0
    };
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.startAutoScroll();
      }, 1e3);
    });
    this.fetchBlogs();
  },
  beforeUnmount() {
    this.stopAutoScroll();
  },
  methods: {
    async fetchBlogs() {
      try {
        const data = await $fetch(`${this.baseURL}/blog/getall`);
        if (data && data.blogs) {
          this.blogs = data.blogs.filter((blog) => blog.publicPost == "0").sort((a, b) => new Date(b.creation_date) - new Date(a.creation_date)).slice(0, 3);
        }
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      }
    },
    startAutoScroll() {
      this.stopAutoScroll();
      const container = this.$refs.partnersContainer;
      if (!container) return;
      this.scrollInterval = setInterval();
    },
    stopAutoScroll() {
      if (this.scrollInterval) {
        clearInterval(this.scrollInterval);
        this.scrollInterval = null;
      }
    },
    pauseAutoScroll() {
      this.isScrollingPaused = true;
    },
    resumeAutoScroll() {
      this.isScrollingPaused = false;
    },
    showSingleBlog(blog) {
      this.$router.push({ path: `blogs/${blog.blogRoute}` });
    },
    async sendMessage() {
      try {
        const data = await $fetch(`${this.baseURL}/visitor/message`, {
          method: "POST",
          body: {
            visitorname: this.visitorname,
            visitoremail: this.visitoremail,
            visitormessage: this.visitormessage,
            visitorphone: this.visitorphone
          }
        });
        if (data.status_code === 200) {
          this.addedRequest = true;
          this.visitorname = "";
          this.visitoremail = "";
          this.visitormessage = "";
          this.visitorphone = "";
          setTimeout(() => {
            this.addedRequest = false;
          }, 5e3);
        } else {
          this.failedRequest = true;
          setTimeout(() => {
            this.failedRequest = false;
          }, 5e3);
        }
      } catch (error) {
        console.error(error);
        this.failedRequest = true;
        setTimeout(() => {
          this.failedRequest = false;
        }, 5e3);
      }
    },
    async addToUsersList() {
      try {
        const data = await $fetch(`${this.baseURL}/user/register`, {
          method: "POST",
          body: {
            email: this.email,
            accesshash: "beat_newsletter"
          }
        });
        if (data.status_code === 200) {
          this.addedUser = true;
          this.email = "";
          setTimeout(() => {
            this.addedUser = false;
          }, 5e3);
        } else {
          this.userExists = true;
          setTimeout(() => {
            this.userExists = false;
          }, 5e3);
        }
      } catch (error) {
        console.error(error);
        this.userExists = true;
        setTimeout(() => {
          this.userExists = false;
        }, 5e3);
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_LandingStep = __nuxt_component_0;
  const _component_PauseIcon = resolveComponent("PauseIcon");
  const _component_PlayIcon = resolveComponent("PlayIcon");
  const _component_MapPinIcon = resolveComponent("MapPinIcon");
  const _component_PhoneIcon = resolveComponent("PhoneIcon");
  const _component_EmailIcon = resolveComponent("EmailIcon");
  const _component_CheckCircleIcon = resolveComponent("CheckCircleIcon");
  const _component_AlertCircleIcon = resolveComponent("AlertCircleIcon");
  const _component_SendIcon = resolveComponent("SendIcon");
  const _component_ClockOutlineIcon = resolveComponent("ClockOutlineIcon");
  const _component_ArrowRightIcon = resolveComponent("ArrowRightIcon");
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "max-w-screen-xl px-4 md:px-8 mx-auto mb-0" }, _attrs))} data-v-6d90a05b>`);
  if ($props.isHomepage) {
    _push(`<section class="bg-white dark:bg-dark-card relative max-w-full sm:mx-4 xl:mx-10 my-12 md:my-16 shadow-lg rounded-xl overflow-hidden border border-gray-200 dark:border-dark-border" data-v-6d90a05b><div class="w-full py-8 md:py-12 flex flex-col items-center" data-v-6d90a05b><h2 class="text-2xl md:text-3xl font-semibold text-center text-gray-800 dark:text-dark-text mb-6 md:mb-8" data-v-6d90a05b> Nos actualités les plus récentes </h2><div class="relative w-full grid grid-cols-1 lg:grid-cols-3 gap-8 px-4 xl:px-8" data-v-6d90a05b><!--[-->`);
    ssrRenderList($data.blogs, (blog) => {
      _push(ssrRenderComponent(_component_LandingStep, {
        key: blog.id,
        blog,
        onOpenBlog: ($event) => $options.showSingleBlog(blog)
      }, null, _parent));
    });
    _push(`<!--]--></div></div></section>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<section class="partners-section py-10 md:py-14 bg-gray-50 dark:bg-dark-surface" data-v-6d90a05b><div class="max-w-6xl mx-auto text-center" data-v-6d90a05b><h2 class="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-800 mb-8" data-v-6d90a05b> Nos partenaires </h2><div class="relative" data-v-6d90a05b><div class="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-gray-50 dark:from-dark-surface to-transparent z-10" data-v-6d90a05b></div><div class="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-gray-50 dark:from-dark-surface to-transparent z-10" data-v-6d90a05b></div><div class="flex items-center gap-8 overflow-x-auto pb-6 px-4 hide-scrollbar partners-scroll-container" data-v-6d90a05b><!--[-->`);
  ssrRenderList($data.partners, (partner) => {
    _push(`<a${ssrRenderAttr("href", partner.link)} target="_blank" rel="noopener noreferrer" class="partner-logo flex-shrink-0 bg-white dark:bg-dark-card rounded-xl shadow-sm hover:shadow-md transition-all duration-300 px-6 py-4 border border-transparent dark:border-dark-border" data-v-6d90a05b><img${ssrRenderAttr("src", partner.logo)} class="h-16 md:h-20 object-contain mx-auto transition-transform duration-300 hover:scale-105"${ssrRenderAttr("alt", partner.name)} data-v-6d90a05b></a>`);
  });
  _push(`<!--]--></div><div class="md:hidden text-xs text-gray-500 mt-3 flex items-center justify-center gap-2" data-v-6d90a05b>`);
  if ($data.isScrollingPaused) {
    _push(ssrRenderComponent(_component_PauseIcon, {
      size: 14,
      class: "cursor-pointer",
      onClick: $options.resumeAutoScroll
    }, null, _parent));
  } else {
    _push(ssrRenderComponent(_component_PlayIcon, {
      size: 14,
      class: "cursor-pointer",
      onClick: $options.pauseAutoScroll
    }, null, _parent));
  }
  _push(`<span data-v-6d90a05b>Swipe or let it scroll automatically</span></div></div></div></section>`);
  if ($props.isHomepage) {
    _push(`<section id="contact" class="bg-white dark:bg-dark-card relative max-w-full sm:mx-4 my-12 md:my-16 py-8 md:py-12 shadow-lg rounded-xl border border-gray-200 dark:border-dark-border" data-v-6d90a05b><div class="max-w-6xl mx-auto px-4" data-v-6d90a05b><div class="text-center mb-8 md:mb-10" data-v-6d90a05b><h2 class="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-dark-text mb-4" data-v-6d90a05b>Contactez-nous</h2><p class="text-gray-600 dark:text-gray-400 mb-6" data-v-6d90a05b> Nous sommes à votre écoute pour répondre à toutes vos questions </p><div class="flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-8 text-sm md:text-base" data-v-6d90a05b><div class="flex items-center justify-center" data-v-6d90a05b>`);
    _push(ssrRenderComponent(_component_MapPinIcon, {
      size: 18,
      class: "text-blue-600 mr-2"
    }, null, _parent));
    _push(`<span data-v-6d90a05b>Goma, Nord-Kivu, RDC</span></div><div class="flex items-center justify-center" data-v-6d90a05b>`);
    _push(ssrRenderComponent(_component_PhoneIcon, {
      size: 18,
      class: "text-blue-600 mr-2"
    }, null, _parent));
    _push(`<span data-v-6d90a05b>+243 995 277 023</span></div><div class="flex items-center justify-center" data-v-6d90a05b>`);
    _push(ssrRenderComponent(_component_EmailIcon, {
      size: 18,
      class: "text-blue-600 mr-2"
    }, null, _parent));
    _push(`<span data-v-6d90a05b>direction@beatexpertise.com</span></div></div></div><div class="flex flex-col lg:flex-row gap-8" data-v-6d90a05b><form class="lg:w-1/2 max-w-lg mx-auto lg:mx-0 bg-gray-50 dark:bg-dark-surface p-6 md:p-8 rounded-xl" data-v-6d90a05b>`);
    if ($data.addedRequest) {
      _push(`<div class="bg-green-100 text-green-700 px-4 py-3 rounded-md mb-4 flex items-center" data-v-6d90a05b>`);
      _push(ssrRenderComponent(_component_CheckCircleIcon, {
        size: 20,
        class: "mr-2"
      }, null, _parent));
      _push(`<span data-v-6d90a05b>Votre message a été envoyé avec succès. Nous vous contacterons bientôt.</span></div>`);
    } else {
      _push(`<!---->`);
    }
    if ($data.failedRequest) {
      _push(`<div class="bg-orange-100 text-orange-700 px-4 py-3 rounded-md mb-4 flex items-center" data-v-6d90a05b>`);
      _push(ssrRenderComponent(_component_AlertCircleIcon, {
        size: 20,
        class: "mr-2"
      }, null, _parent));
      _push(`<span data-v-6d90a05b>Une erreur est survenue, veuillez réessayer plus tard.</span></div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<div class="space-y-4" data-v-6d90a05b><div data-v-6d90a05b><label class="block text-sm font-medium text-gray-700 mb-1" data-v-6d90a05b>Votre nom ou organisation</label><input type="text" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Votre nom complet"${ssrRenderAttr("value", $data.visitorname)} required data-v-6d90a05b></div><div data-v-6d90a05b><label class="block text-sm font-medium text-gray-700 mb-1" data-v-6d90a05b>Adresse email *</label><input type="email" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="exemple@email.com"${ssrRenderAttr("value", $data.visitoremail)} required data-v-6d90a05b></div><div data-v-6d90a05b><label class="block text-sm font-medium text-gray-700 mb-1" data-v-6d90a05b>Votre message</label><textarea rows="4" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Comment pouvons-nous vous aider ?" required data-v-6d90a05b>${ssrInterpolate($data.visitormessage)}</textarea></div><div data-v-6d90a05b><label class="block text-sm font-medium text-gray-700 mb-1" data-v-6d90a05b>Numéro de téléphone (optionnel)</label><input type="tel" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="+243 XXX XXX XXX"${ssrRenderAttr("value", $data.visitorphone)} data-v-6d90a05b></div><button type="submit" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center" data-v-6d90a05b>`);
    _push(ssrRenderComponent(_component_SendIcon, {
      size: 18,
      class: "mr-2"
    }, null, _parent));
    _push(` Envoyer le message </button></div></form><div class="lg:w-1/2" data-v-6d90a05b><div class="bg-gray-100 rounded-xl overflow-hidden shadow-md h-full" data-v-6d90a05b><div class="p-4 bg-blue-600 text-white" data-v-6d90a05b><h3 class="font-semibold flex items-center" data-v-6d90a05b>`);
    _push(ssrRenderComponent(_component_MapPinIcon, {
      size: 20,
      class: "mr-2"
    }, null, _parent));
    _push(` Localisation de notre bureau </h3><p class="text-sm mt-1" data-v-6d90a05b>Goma, Nord-Kivu, République Démocratique du Congo</p></div><div class="h-80 md:h-96" data-v-6d90a05b><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4085951.67416805!2d26.553710875!3d-1.239759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19da4dce0d5d7c3f%3A0x1e3e5f5f5f5f5f5f!2sGoma%2C%20Nord-Kivu%2C%20R%C3%A9publique%20D%C3%A9mocratique%20du%20Congo!5e0!3m2!1sfr!2sus!4v1633456789012!5m2!1sfr!2sus" width="100%" height="100%" style="${ssrRenderStyle({ "border": "0" })}" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="rounded-b-xl" data-v-6d90a05b></iframe></div><div class="p-4 bg-gray-50 text-center" data-v-6d90a05b><p class="text-sm text-gray-600" data-v-6d90a05b>`);
    _push(ssrRenderComponent(_component_ClockOutlineIcon, {
      size: 16,
      class: "inline mr-1"
    }, null, _parent));
    _push(` Horaires d&#39;ouverture: Lun - Ven, 8h - 17h </p></div></div></div></div></div></section>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="py-8 md:py-10 border-t border-gray-200 dark:border-dark-border" data-v-6d90a05b><div class="flex flex-col md:flex-row justify-between items-start gap-8" data-v-6d90a05b><div class="flex flex-col items-center md:items-start text-center md:text-left max-w-md mx-auto md:mx-0" data-v-6d90a05b><a href="/" class="mb-4" data-v-6d90a05b><img${ssrRenderAttr("src", $data.logoImg)} class="w-28 md:w-32 object-contain" alt="Beat Expertise Logo" data-v-6d90a05b></a><p class="text-gray-600 dark:text-gray-400 text-sm md:text-base" data-v-6d90a05b> BEAT est un bureau d&#39;expertise et accompagnement technique basé à Goma, dédié à offrir des solutions innovantes pour le développement technologique de la région. </p></div><nav class="flex flex-col items-center md:items-start space-y-3 text-gray-700 dark:text-gray-300 mx-auto md:mx-0" data-v-6d90a05b><h3 class="font-semibold text-gray-800 dark:text-dark-text mb-2 text-center md:text-left" data-v-6d90a05b>Navigation</h3><a href="/blogs" class="hover:text-blue-600 transition-colors text-sm md:text-base" data-v-6d90a05b>Actualités</a><a href="/#mission" class="hover:text-blue-600 transition-colors text-sm md:text-base" data-v-6d90a05b>Mission</a><a href="/#domaines" class="hover:text-blue-600 transition-colors text-sm md:text-base" data-v-6d90a05b>Domaines</a><a href="/opportunities" class="hover:text-blue-600 transition-colors text-sm md:text-base" data-v-6d90a05b>Offres &amp; Opportunités</a><a href="/apropos" class="hover:text-blue-600 transition-colors text-sm md:text-base" data-v-6d90a05b>À propos de nous</a></nav><div class="bg-gray-50 dark:bg-dark-surface rounded-lg p-4 md:p-6 max-w-md w-full mx-auto md:mx-0 border border-gray-200 dark:border-dark-border" data-v-6d90a05b><form class="space-y-3" data-v-6d90a05b>`);
  if ($data.addedUser) {
    _push(`<div class="bg-green-100 text-green-700 px-3 py-2 rounded-md text-xs md:text-sm flex items-center" data-v-6d90a05b>`);
    _push(ssrRenderComponent(_component_CheckCircleIcon, {
      size: 16,
      class: "mr-1"
    }, null, _parent));
    _push(`<span data-v-6d90a05b>Merci d&#39;avoir rejoint notre communauté</span></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.userExists) {
    _push(`<div class="bg-orange-100 text-orange-700 px-3 py-2 rounded-md text-xs md:text-sm flex items-center" data-v-6d90a05b>`);
    _push(ssrRenderComponent(_component_AlertCircleIcon, {
      size: 16,
      class: "mr-1"
    }, null, _parent));
    _push(`<span data-v-6d90a05b>Cette adresse mail est déjà enregistrée</span></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<h3 class="font-semibold text-gray-800 dark:text-dark-text text-center text-sm md:text-base" data-v-6d90a05b>Rejoindre notre newsletter</h3><div class="flex" data-v-6d90a05b><input type="email" class="flex-grow px-3 md:px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base" placeholder="Votre adresse email"${ssrRenderAttr("value", $data.email)} required data-v-6d90a05b><button type="submit" class="bg-blue-600 hover:bg-blue-700 text-white px-3 md:px-4 py-2 rounded-r-lg transition-colors duration-300 flex items-center" data-v-6d90a05b>`);
  _push(ssrRenderComponent(_component_ArrowRightIcon, { size: 16 }, null, _parent));
  _push(`</button></div><p class="text-xs text-gray-500 text-center" data-v-6d90a05b>Restez informé de nos dernières actualités</p></form></div></div></div><div class="py-4 md:py-6 border-t border-gray-200 dark:border-dark-border" data-v-6d90a05b><div class="flex flex-col md:flex-row justify-between items-center gap-4" data-v-6d90a05b><div class="flex flex-wrap justify-center gap-2" data-v-6d90a05b><!--[-->`);
  ssrRenderList($data.socialLinks, (social, index) => {
    _push(`<a${ssrRenderAttr("href", social.link)} target="_blank" rel="noopener noreferrer" class="social-icon" data-v-6d90a05b>`);
    ssrRenderVNode(_push, createVNode(resolveDynamicComponent(social.icon), {
      size: 18,
      class: "text-gray-600 hover:text-blue-600 transition-colors"
    }, null), _parent);
    _push(`</a>`);
  });
  _push(`<!--]--></div><div class="text-center text-gray-600 text-sm" data-v-6d90a05b> © ${ssrInterpolate($data.year)} <a href="/apropos" class="hover:text-blue-600 transition-colors" data-v-6d90a05b>Beat Expertise</a>. Tous droits réservés </div></div></div></footer>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/Footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-6d90a05b"]]);
export {
  __nuxt_component_0$1 as _,
  __nuxt_component_1 as a,
  __nuxt_component_1$2 as b,
  setInterval as s
};
//# sourceMappingURL=Footer-Z6VpqaoF.js.map
