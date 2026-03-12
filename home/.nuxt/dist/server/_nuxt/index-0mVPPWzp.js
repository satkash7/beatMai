import { _ as __nuxt_component_0 } from "./Search-CO7_T86G.js";
import { ref, computed, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderClass } from "vue/server-renderer";
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
import "/Applications/XAMPP/xamppfiles/htdocs/beatMai/home/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs";
import "/Applications/XAMPP/xamppfiles/htdocs/beatMai/home/node_modules/destr/dist/index.mjs";
import "/Applications/XAMPP/xamppfiles/htdocs/beatMai/home/node_modules/ohash/dist/index.mjs";
import "/Applications/XAMPP/xamppfiles/htdocs/beatMai/home/node_modules/@unhead/vue/dist/index.mjs";
const defaultImg = "" + __buildAssetsURL("default.BprB1lYJ.jpg");
const perPage = 12;
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Publications & Articles | Beat Expertise - Analyses et Réflexions",
      meta: [
        { name: "description", content: "Découvrez les publications, articles et analyses de BEAT Expertise. Actualités, réflexions et ressources sur le développement technique en RDC." },
        { name: "keywords", content: "publications Beat Expertise, articles, analyses, actualités, Bureau d'expertise et d'accompagnement technique, Goma, RDC, Nord-Kivu, catastrophes naturelles, catastrophes naturelles en RDC, catastrophes naturelles en Afrique, inondations pluviales, inondations en RDC, inondations à Goma, inondations à Kinshasa, inondations à Kindu, inondations au Maniema, protection de l'environnement, gestion durable de l'environnement, développement durable, objectifs de développement durable, renforcement des capacités, innovation technologique, intelligence artificielle, utilisation éthique de l'IA, éruption volcanique Nyiragongo, volcan Nyamulagira, OVG, gestion des risques, gestion des catastrophes, prévention des catastrophes, réduction des risques de catastrophes, changement climatique, adaptation au changement climatique, risques climatiques, CAFOD, CARITAS, CAJED, Centre OLAME, UNIGOM, entrepreneuriat, autonomisation des femmes, résilience communautaire, résilience climatique, exploitation minière, impact environnemental, sensibilisation communautaire, plaidoyer humanitaire, défis humanitaires, surveillance volcanique, gaz du lac Kivu, glissements de terrain, pluies torrentielles, cartographie des inondations, actions anticipatoires, protection civile, déplacés internes, guerre au Nord-Kivu, région des Grands Lacs" },
        { name: "robots", content: "index, follow" },
        { property: "og:title", content: "Publications | Beat Expertise" },
        { property: "og:description", content: "Articles, analyses et réflexions de BEAT Expertise sur le développement technique en RDC." },
        { property: "og:image", content: "https://api.beatexpertise.com/storage/logo.png" },
        { property: "og:url", content: "https://beatexpertise.com/blogs" },
        { property: "og:type", content: "website" },
        { property: "og:locale", content: "fr_FR" },
        { property: "og:site_name", content: "Beat Expertise" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Publications | Beat Expertise" },
        { name: "twitter:description", content: "Découvrez nos articles et analyses sur le développement technique." },
        { name: "twitter:image", content: "https://api.beatexpertise.com/storage/logo.png" }
      ],
      link: [
        { rel: "canonical", href: "https://beatexpertise.com/blogs" }
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
    function formatDate(dateString) {
      if (!dateString) return "";
      return new Intl.DateTimeFormat("fr-FR", { day: "numeric", month: "short", year: "numeric" }).format(new Date(dateString));
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LandingSearch = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full pt-16" }, _attrs))}><div class="container mx-auto px-4 md:px-6"><section class="text-center py-8 mb-8"><h1 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-dark-text mb-3"> Nos <span class="text-blue-600">Publications</span></h1><p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"> Découvrez nos articles, analyses et réflexions. </p></section><section class="mb-10">`);
      _push(ssrRenderComponent(_component_LandingSearch, { type: "blog" }, null, _parent));
      _push(`</section><section>`);
      if (unref(blogs).length) {
        _push(`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"><!--[-->`);
        ssrRenderList(unref(paginatedBlogs), (blogItem) => {
          _push(`<article class="bg-white dark:bg-dark-card rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col border border-gray-200 dark:border-dark-border"><div class="h-48 overflow-hidden"><a${ssrRenderAttr("href", "/blogs/" + blogItem.blogRoute)} class="block"><img${ssrRenderAttr("src", blogItem.imageUrl || unref(defaultImg))}${ssrRenderAttr("alt", blogItem.blogTitle)} class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"></a></div><div class="p-5 flex-grow flex flex-col"><div class="mb-3"><span class="inline-block bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-semibold">${ssrInterpolate(blogItem.blogCategory)}</span></div><a${ssrRenderAttr("href", "/blogs/" + blogItem.blogRoute)} class="block mb-3"><h3 class="text-lg font-bold text-gray-900 dark:text-dark-text line-clamp-2 leading-tight hover:text-blue-600 dark:hover:text-blue-400 transition-colors">${ssrInterpolate(blogItem.blogTitle)}</h3></a><p class="text-gray-600 dark:text-gray-400 mb-4 flex-grow line-clamp-3 text-sm">${ssrInterpolate(getExcerpt(blogItem.blogCaption || blogItem.blogData))}</p><div class="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-4"><span>${ssrInterpolate(formatDate(blogItem.creation_date))}</span><span>${ssrInterpolate(blogItem.realnames)}</span></div><div class="mt-4 pt-3 border-t border-gray-100 dark:border-dark-border"><a${ssrRenderAttr("href", "/blogs/" + blogItem.blogRoute)} class="text-blue-600 dark:text-sky-400 hover:text-blue-800 dark:hover:text-sky-300 font-medium flex items-center justify-center transition-colors duration-300 group"> Lire la suite <svg class="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></a></div></div></article>`);
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
        _push(`<div class="text-center py-12"><h3 class="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">Aucune publication disponible</h3><p class="text-gray-500 dark:text-gray-400">Revenez plus tard pour découvrir de nouveaux articles.</p></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(loading)) {
        _push(`<div class="flex justify-center py-12"><div class="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</section></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blogs/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-0mVPPWzp.js.map
