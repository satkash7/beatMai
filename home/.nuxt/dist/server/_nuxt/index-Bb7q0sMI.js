import { _ as __nuxt_component_0 } from "./Search-CO7_T86G.js";
import { ref, computed, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderClass } from "vue/server-renderer";
import { o as oppImg } from "./opp-DdyB0j_B.js";
import "/Applications/XAMPP/xamppfiles/htdocs/beatMai/home/node_modules/hookable/dist/index.mjs";
import { d as useHead } from "../server.mjs";
import "/Applications/XAMPP/xamppfiles/htdocs/beatMai/home/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Applications/XAMPP/xamppfiles/htdocs/beatMai/home/node_modules/unctx/dist/index.mjs";
import "/Applications/XAMPP/xamppfiles/htdocs/beatMai/home/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Applications/XAMPP/xamppfiles/htdocs/beatMai/home/node_modules/defu/dist/defu.mjs";
import "/Applications/XAMPP/xamppfiles/htdocs/beatMai/home/node_modules/ufo/dist/index.mjs";
import "/Applications/XAMPP/xamppfiles/htdocs/beatMai/home/node_modules/klona/dist/index.mjs";
import "/Applications/XAMPP/xamppfiles/htdocs/beatMai/home/node_modules/@unhead/vue/dist/index.mjs";
const perPage = 12;
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Opportunités & Offres | Beat Expertise - Carrières à Goma, RDC",
      meta: [
        { name: "description", content: "Découvrez les opportunités d'emploi et offres proposées par BEAT Expertise à Goma, RDC. Rejoignez une équipe dynamique et innovante." },
        { name: "keywords", content: "opportunités Beat Expertise, emploi Goma, offres RDC, carrières, recrutement Nord-Kivu, accompagnement des entreprises, accompagnement des entreprises locales, accompagnement des entrepreneurs, accompagnement des organisations, accompagnement des ONG, formation des agents de terrain, renforcement des capacités, développement des compétences, entrepreneuriat congolais, entrepreneuriat des jeunes, entrepreneuriat des femmes, plans d'affaires pour PME, élaboration de plans d'affaires, mentorat professionnel, développement des applications, innovation technologique, suivi en temps réel, formation en entrepreneuriat, autonomisation des femmes, leadership communautaire, gouvernance locale, pensée design, Bureau d'Expertise et d'Accompagnement Technique, cabinet d'expertise à Goma, Goma, RDC, Nord-Kivu, collaboration avec les universités, UNIGOM, Université de Goma, programmes humanitaires, programmes environnementaux, sensibilisation sociale" },
        { name: "robots", content: "index, follow" },
        { property: "og:title", content: "Opportunités | Beat Expertise" },
        { property: "og:description", content: "Offres d'emploi et opportunités chez BEAT Expertise à Goma, RDC." },
        { property: "og:image", content: "https://api.beatexpertise.com/storage/logo.png" },
        { property: "og:url", content: "https://beatexpertise.com/opportunities" },
        { property: "og:type", content: "website" },
        { property: "og:locale", content: "fr_FR" },
        { property: "og:site_name", content: "Beat Expertise" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Opportunités | Beat Expertise" },
        { name: "twitter:description", content: "Rejoignez BEAT Expertise. Découvrez nos offres d'emploi." },
        { name: "twitter:image", content: "https://api.beatexpertise.com/storage/logo.png" }
      ],
      link: [
        { rel: "canonical", href: "https://beatexpertise.com/opportunities" }
      ]
    });
    const blogs = ref([]);
    const loading = ref(true);
    const currentPage = ref(1);
    const paginatedBlogs = computed(() => {
      const start = (currentPage.value - 1) * perPage;
      return blogs.value.slice(start, start + perPage);
    });
    const totalPages = computed(() => Math.ceil(blogs.value.length / perPage));
    function getExcerpt(content) {
      if (!content) return "";
      const plainText = content.replace(/<[^>]*>/g, "");
      return plainText.length > 120 ? plainText.substring(0, 120) + "..." : plainText;
    }
    function getDisplayImage(blogItem) {
      if (!blogItem.imageUrl) return oppImg;
      if (blogItem.imageUrl.toLowerCase().endsWith(".pdf")) return oppImg;
      return blogItem.imageUrl;
    }
    function formatDate(dateString) {
      if (!dateString) return "";
      return new Intl.DateTimeFormat("fr-FR", { day: "numeric", month: "short", year: "numeric" }).format(new Date(dateString));
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LandingSearch = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full pt-16" }, _attrs))}><div class="container mx-auto px-4 md:px-6"><section class="text-center py-8 mb-8"><h1 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-dark-text mb-3"><span class="text-blue-600">Opportunités</span> | Beat Expertise </h1><p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"> Découvrez nos offres et opportunités disponibles. </p></section><section class="mb-10">`);
      _push(ssrRenderComponent(_component_LandingSearch, { type: "blog" }, null, _parent));
      _push(`</section><section>`);
      if (unref(blogs).length) {
        _push(`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"><!--[-->`);
        ssrRenderList(unref(paginatedBlogs), (blogItem) => {
          _push(`<article class="bg-white dark:bg-dark-card rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col border border-gray-200 dark:border-dark-border"><div class="h-48 overflow-hidden"><a${ssrRenderAttr("href", "/opportunities/" + blogItem.blogRoute)} class="block"><img${ssrRenderAttr("src", getDisplayImage(blogItem))}${ssrRenderAttr("alt", blogItem.blogTitle)} class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"></a></div><div class="p-5 flex-grow flex flex-col"><div class="mb-3"><span class="inline-block bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-semibold">${ssrInterpolate(blogItem.blogCategory)}</span></div><a${ssrRenderAttr("href", "/opportunities/" + blogItem.blogRoute)} class="block mb-3"><h3 class="text-lg font-bold text-gray-900 dark:text-dark-text line-clamp-2 leading-tight hover:text-blue-600 dark:hover:text-blue-400 transition-colors">${ssrInterpolate(blogItem.blogTitle)}</h3></a><p class="text-gray-600 dark:text-gray-400 mb-4 flex-grow line-clamp-3 text-sm">${ssrInterpolate(getExcerpt(blogItem.blogCaption || blogItem.blogData))}</p><div class="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-4"><span>${ssrInterpolate(formatDate(blogItem.creation_date))}</span><span>${ssrInterpolate(blogItem.realnames)}</span></div><div class="mt-4 pt-3 border-t border-gray-100 dark:border-dark-border"><a${ssrRenderAttr("href", "/opportunities/" + blogItem.blogRoute)} class="text-blue-600 dark:text-sky-400 hover:text-blue-800 dark:hover:text-sky-300 font-medium flex items-center justify-center transition-colors duration-300 group"> Lire la suite <svg class="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></a></div></div></article>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(totalPages) > 1) {
        _push(`<div class="flex justify-center items-center mt-10 space-x-2"><button${ssrIncludeBooleanAttr(unref(currentPage) === 1) ? " disabled" : ""} class="px-4 py-2 rounded-lg border border-gray-300 dark:border-dark-border text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-card disabled:opacity-40 disabled:cursor-not-allowed transition-colors"> Précédent </button><!--[-->`);
        ssrRenderList(unref(totalPages), (page) => {
          _push(`<button class="${ssrRenderClass([unref(currentPage) === page ? "bg-blue-600 text-white" : "bg-white dark:bg-dark-card text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-dark-border hover:bg-gray-100 dark:hover:bg-dark-surface", "w-10 h-10 rounded-lg font-medium transition-colors"])}">${ssrInterpolate(page)}</button>`);
        });
        _push(`<!--]--><button${ssrIncludeBooleanAttr(unref(currentPage) === unref(totalPages)) ? " disabled" : ""} class="px-4 py-2 rounded-lg border border-gray-300 dark:border-dark-border text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-card disabled:opacity-40 disabled:cursor-not-allowed transition-colors"> Suivant </button></div>`);
      } else {
        _push(`<!---->`);
      }
      if (!unref(loading) && !unref(blogs).length) {
        _push(`<div class="text-center py-12"><h3 class="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">Aucune opportunité disponible</h3><p class="text-gray-500 dark:text-gray-400">Revenez plus tard pour découvrir de nouvelles opportunités.</p></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(loading)) {
        _push(`<div class="flex justify-center py-12"><div class="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</section></div><div class="mb-16"></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/opportunities/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-Bb7q0sMI.js.map
