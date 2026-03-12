import { b as __nuxt_component_1$1, s as setInterval, _ as __nuxt_component_0$1, a as __nuxt_component_1$2 } from "./Footer-CE-b5O4y.js";
import { mergeProps, useSSRContext, withCtx, createTextVNode, createVNode, ref, computed } from "vue";
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderList, ssrRenderClass, ssrRenderStyle, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc, g as useRoute, u as useRouter } from "../server.mjs";
import { h as heroPic1, a as heroPic2 } from "./pic2-Cv3MgNUH.js";
import "./aos-DgaNNj1M.js";
import "aos";
import "/Applications/XAMPP/xamppfiles/htdocs/beatMai/home/node_modules/hookable/dist/index.mjs";
import "/Applications/XAMPP/xamppfiles/htdocs/beatMai/home/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Applications/XAMPP/xamppfiles/htdocs/beatMai/home/node_modules/unctx/dist/index.mjs";
import "/Applications/XAMPP/xamppfiles/htdocs/beatMai/home/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Applications/XAMPP/xamppfiles/htdocs/beatMai/home/node_modules/defu/dist/defu.mjs";
import "/Applications/XAMPP/xamppfiles/htdocs/beatMai/home/node_modules/ufo/dist/index.mjs";
import "/Applications/XAMPP/xamppfiles/htdocs/beatMai/home/node_modules/klona/dist/index.mjs";
import "/Applications/XAMPP/xamppfiles/htdocs/beatMai/home/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs";
import "/Applications/XAMPP/xamppfiles/htdocs/beatMai/home/node_modules/destr/dist/index.mjs";
import "/Applications/XAMPP/xamppfiles/htdocs/beatMai/home/node_modules/ohash/dist/index.mjs";
import "/Applications/XAMPP/xamppfiles/htdocs/beatMai/home/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main$2 = {
  name: "BaseSection",
  inheritAttrs: false
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative max-w-screen-xl px-4 sm:px-8 mx-auto grid grid-cols-12 gap-x-6 overflow-hidden" }, _ctx.$attrs, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/Section.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const heroAa = "" + __buildAssetsURL("aa.Ba4dAoOH.jpeg");
const heroCc = "" + __buildAssetsURL("cc.CD2rCWK8.jpeg");
const _sfc_main$1 = {
  name: "BaseHeader",
  data() {
    return {
      currentSlide: 0,
      autoplayInterval: null,
      heroImages: [heroPic1, heroPic2, heroAa, heroCc]
    };
  },
  mounted() {
    this.startAutoplay();
  },
  beforeUnmount() {
    this.stopAutoplay();
  },
  methods: {
    startAutoplay() {
      this.autoplayInterval = setInterval();
    },
    stopAutoplay() {
      if (this.autoplayInterval) {
        clearInterval(this.autoplayInterval);
      }
    },
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.heroImages.length;
    },
    prevSlide() {
      this.currentSlide = this.currentSlide === 0 ? this.heroImages.length - 1 : this.currentSlide - 1;
    },
    goToSlide(index) {
      this.currentSlide = index;
      this.stopAutoplay();
      this.startAutoplay();
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_BaseSection = __nuxt_component_0;
  const _component_base_button = __nuxt_component_1$1;
  _push(`<section${ssrRenderAttrs(mergeProps({
    id: "hero",
    class: "hero-carousel desktop w-full pb-24 relative overflow-hidden"
  }, _attrs))} data-v-aa670063><div class="hero-backgrounds" data-v-aa670063><!--[-->`);
  ssrRenderList($data.heroImages, (image, index) => {
    _push(`<div class="${ssrRenderClass([{ "active": $data.currentSlide === index }, "hero-bg-image"])}" style="${ssrRenderStyle({ backgroundImage: `url(${image})` })}" data-v-aa670063></div>`);
  });
  _push(`<!--]--></div><div class="absolute inset-0 bg-black bg-opacity-40 dark:bg-opacity-60 z-10" data-v-aa670063></div>`);
  _push(ssrRenderComponent(_component_BaseSection, { class: "nospace relative z-20" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="col-span-12 lg:col-span-8 mt-12 xl:mt-10 space-y-4 sm:space-y-6 px-6 text-center sm:text-left nospace" data-v-aa670063${_scopeId}><h1 class="text-[2.5rem] sm:text-5xl xl:text-6xl font-bold leading-tight sm:pr-8 xl:pr-10 mobile" style="${ssrRenderStyle({ "color": "white" })}" data-v-aa670063${_scopeId}><br data-v-aa670063${_scopeId}><br data-v-aa670063${_scopeId}> Bienvenu au &quot;Bureau d&#39;Expertise et Accompagnement Technique&quot; BEAT </h1><p class="text-white extramobile" data-v-aa670063${_scopeId}> BEAT est un bureau d&#39;expertise et accompagnement technique basé à Goma, en République Démocratique du Congo, dédié à offrir des solutions innovantes et un soutien spécialisé. </p><div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-2" data-v-aa670063${_scopeId}><a href="#contact" data-v-aa670063${_scopeId}>`);
        _push2(ssrRenderComponent(_component_base_button, { class: "px-2 xl:px-4 py-3 mt-0 bg-inherit text-white border border-[#0c66ee] smallbtn hover:bg-blue-600 transition-all duration-300" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Entrez en contact avec nous pour savoir plus `);
            } else {
              return [
                createTextVNode(" Entrez en contact avec nous pour savoir plus ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</a></div></div>`);
      } else {
        return [
          createVNode("div", { class: "col-span-12 lg:col-span-8 mt-12 xl:mt-10 space-y-4 sm:space-y-6 px-6 text-center sm:text-left nospace" }, [
            createVNode("h1", {
              class: "text-[2.5rem] sm:text-5xl xl:text-6xl font-bold leading-tight sm:pr-8 xl:pr-10 mobile",
              style: { "color": "white" }
            }, [
              createVNode("br"),
              createVNode("br"),
              createTextVNode(` Bienvenu au "Bureau d'Expertise et Accompagnement Technique" BEAT `)
            ]),
            createVNode("p", { class: "text-white extramobile" }, " BEAT est un bureau d'expertise et accompagnement technique basé à Goma, en République Démocratique du Congo, dédié à offrir des solutions innovantes et un soutien spécialisé. "),
            createVNode("div", { class: "flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-2" }, [
              createVNode("a", { href: "#contact" }, [
                createVNode(_component_base_button, { class: "px-2 xl:px-4 py-3 mt-0 bg-inherit text-white border border-[#0c66ee] smallbtn hover:bg-blue-600 transition-all duration-300" }, {
                  default: withCtx(() => [
                    createTextVNode(" Entrez en contact avec nous pour savoir plus ")
                  ]),
                  _: 1
                })
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="hero-navigation z-30" data-v-aa670063><button class="nav-arrow nav-arrow-left" aria-label="Image précédente" data-v-aa670063><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-aa670063><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" data-v-aa670063></path></svg></button><button class="nav-arrow nav-arrow-right" aria-label="Image suivante" data-v-aa670063><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-aa670063><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" data-v-aa670063></path></svg></button></div><div class="hero-indicators z-30" data-v-aa670063><!--[-->`);
  ssrRenderList($data.heroImages, (image, index) => {
    _push(`<button class="${ssrRenderClass([{ "active": $data.currentSlide === index }, "indicator"])}"${ssrRenderAttr("aria-label", `Aller à l'image ${index + 1}`)} data-v-aa670063></button>`);
  });
  _push(`<!--]--></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/Header.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-aa670063"]]);
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const router = useRouter();
    const isLoading = ref(false);
    const isHomepage = computed(() => route.path === "/");
    router.beforeEach((to, from) => {
      if (to.path !== from.path) {
        isLoading.value = true;
      }
    });
    router.afterEach(() => {
      isLoading.value = false;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseNavbar = __nuxt_component_0$1;
      const _component_BaseHeader = __nuxt_component_1;
      const _component_BaseFooter = __nuxt_component_1$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen font-sans antialiased relative bg-white dark:bg-dark-bg transition-colors duration-300" }, _attrs))}><div class="relative">`);
      if (isLoading.value) {
        _push(`<div class="fixed inset-0 bg-white dark:bg-dark-bg bg-opacity-90 dark:bg-opacity-90 flex flex-col justify-center items-center z-50 transition-opacity duration-300"><div class="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500 mb-4"></div><p class="text-gray-600 dark:text-gray-300">Chargement en cours...</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_BaseNavbar, null, null, _parent));
      if (isHomepage.value) {
        _push(ssrRenderComponent(_component_BaseHeader, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<main class="text-neutral-800 dark:text-dark-text transition-colors duration-300">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main>`);
      _push(ssrRenderComponent(_component_BaseFooter, { "is-homepage": isHomepage.value }, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=default-BdskdNMa.js.map
