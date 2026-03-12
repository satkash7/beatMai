import { _ as __nuxt_component_0 } from "./Search-CO7_T86G.js";
import { mergeProps, useSSRContext, ref, unref } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { _ as _export_sfc, u as useRouter, d as useHead } from "../server.mjs";
import "/Applications/XAMPP/xamppfiles/htdocs/beatMai/home/node_modules/hookable/dist/index.mjs";
import "/Applications/XAMPP/xamppfiles/htdocs/beatMai/home/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Applications/XAMPP/xamppfiles/htdocs/beatMai/home/node_modules/unctx/dist/index.mjs";
import "/Applications/XAMPP/xamppfiles/htdocs/beatMai/home/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Applications/XAMPP/xamppfiles/htdocs/beatMai/home/node_modules/defu/dist/defu.mjs";
import "/Applications/XAMPP/xamppfiles/htdocs/beatMai/home/node_modules/ufo/dist/index.mjs";
import "/Applications/XAMPP/xamppfiles/htdocs/beatMai/home/node_modules/klona/dist/index.mjs";
import "/Applications/XAMPP/xamppfiles/htdocs/beatMai/home/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main$1 = {
  name: "LandingBlog",
  props: {
    blog: {
      type: Object,
      required: true
    },
    opportunity: {
      type: Object,
      required: false
    }
  },
  methods: {
    handleClick() {
      this.$emit("open-blog", this.blog);
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-[520px] xl:max-w-[580px] bg-white dark:bg-dark-card shadow-md rounded-lg overflow-hidden transition-transform duration-500 hover:scale-105 hover:shadow-xl ml-7 mr-7 mt-10 mb-10 border border-transparent dark:border-dark-border" }, _attrs))}>`);
  if ($props.opportunity == true) {
    _push(`<span><img${ssrRenderAttr("src", _ctx.oppImg)} class="w-full h-48 object-cover rounded-t-lg transition-opacity duration-500 ease-in-out hover:opacity-80"></span>`);
  } else {
    _push(`<span>`);
    if ($props.blog.imageUrl != null && $props.blog.imageUrl != "") {
      _push(`<img${ssrRenderAttr("src", $props.blog.imageUrl)} class="w-full h-48 object-cover rounded-t-lg transition-opacity duration-500 ease-in-out hover:opacity-80">`);
    } else {
      _push(`<img${ssrRenderAttr("src", _ctx.defaultImg)} class="w-full h-48 object-cover rounded-t-lg transition-opacity duration-500 ease-in-out hover:opacity-80">`);
    }
    _push(`</span>`);
  }
  _push(`<div class="text-container max-w-[385px] mx-auto"><h4 class="text-xl text-neutral-800 dark:text-dark-text font-semibold hover:text-blue-500 transition duration-300">${ssrInterpolate($props.blog.blogTitle)}</h4><p class="text-sm text-gray-700 dark:text-gray-400 leading-relaxed">${ssrInterpolate($props.blog.blogCaption)}</p></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/Blog.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    useHead({
      title: "Publications | Beat Expertise",
      meta: [
        { name: "description", content: "Découvrez les publications et articles de BEAT Expertise." },
        { property: "og:title", content: "Publications | Beat Expertise" },
        { property: "og:image", content: "https://api.beatexpertise.com/storage/logo.png" },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" }
      ]
    });
    const blogs = ref([]);
    const loading = ref(true);
    function showSingleBlog(blog) {
      router.push("/blogs/" + blog.blogRoute);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LandingSearch = __nuxt_component_0;
      const _component_LandingBlog = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full" }, _attrs))}><div class="container mx-auto px-6 pt-16"><section class="max-w-full my-0"><h6 class="ml-4 font-bold leading-tight sm:pr-8 xl:pr-10 text-gray-900 dark:text-dark-text"> Publications </h6>`);
      _push(ssrRenderComponent(_component_LandingSearch, { type: "blog" }, null, _parent));
      _push(`<div class="w-full px-8 sm:px-0 my-0 py-0 flex flex-col items-center justify-center space-y-4 text-center"><h2 class="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 dark:text-dark-text"><span class="text-blue-600">Publications</span> | Beat Expertise </h2>`);
      if (unref(blogs).length) {
        _push(`<div class="flex flex-wrap items-center justify-center"><!--[-->`);
        ssrRenderList(unref(blogs), (blogItem) => {
          _push(ssrRenderComponent(_component_LandingBlog, {
            key: blogItem.id,
            blog: blogItem,
            onOpenBlog: ($event) => showSingleBlog(blogItem)
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
      } else if (!unref(loading)) {
        _push(`<div class="py-12"><p class="text-gray-500 dark:text-gray-400">Aucune publication disponible.</p></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(loading)) {
        _push(`<div class="py-12"><div class="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></section></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projet/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-CE8QIyJw.js.map
