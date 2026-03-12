import { _ as _export_sfc, f as __nuxt_component_0 } from "../server.mjs";
import { useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import "/Applications/XAMPP/xamppfiles/htdocs/beatMai/home/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Applications/XAMPP/xamppfiles/htdocs/beatMai/home/node_modules/hookable/dist/index.mjs";
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
const _sfc_main = {
  name: "LandingAnonymous",
  layout: "anonymous",
  mounted() {
    setTimeout(() => {
      this.$router.push("/u");
    }, 4e3);
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_client_only = __nuxt_component_0;
  _push(ssrRenderComponent(_component_client_only, _attrs, {}, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/anonymous/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-2f7d8c59"]]);
export {
  index as default
};
//# sourceMappingURL=index-CuKfph5J.js.map
