import { _ as _export_sfc, f as __nuxt_component_0$1 } from "../server.mjs";
import { useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
const _sfc_main = {
  name: "LandingSearch",
  props: {
    type: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      query: "",
      invalidsearch: false,
      validsearch: false,
      showSearchResultTitle: false,
      searchResult: [],
      placeholderTitle: this.type == "doc" ? "Search by documentations category, title, tool name, technology, etc..." : "Rechercher une publication ici..."
    };
  },
  methods: {
    async runSearch() {
      this.validsearch = true;
      try {
        const response = await this.$axios.get("/blog/getall?search=" + this.query);
        if (response.data.status_code === 200) {
          this.showSearchResultTitle = true;
          if (this.type == "blog") {
            this.searchResult = response.data.blogs;
          } else if (this.type == "opportunitie") {
            this.searchResult = response.data.opportunities;
          }
          setTimeout(() => {
            this.validsearch = false;
          }, 100);
          if (this.searchResult.length === 0) {
            this.invalidsearch = true;
            setTimeout(() => {
              this.invalidsearch = false;
              this.validsearch = false;
            }, 3e3);
          }
        } else {
          this.invalidsearch = true;
          setTimeout(() => {
            this.invalidsearch = false;
            this.validsearch = false;
          }, 3e3);
        }
      } catch (error) {
        console.error(error);
        this.invalidsearch = true;
        setTimeout(() => {
          this.invalidsearch = false;
          this.validsearch = false;
        }, 3e3);
      }
    },
    showSingleBlog(blog) {
      this.$router.push({ path: `/blogs/${blog.blogRoute}` });
    },
    showSingleOpportunity(opportunity) {
      this.$router.push({ path: `/opportunities/${opportunity.opportunityRoute}` });
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_client_only = __nuxt_component_0$1;
  _push(ssrRenderComponent(_component_client_only, _attrs, {}, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/Search.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __nuxt_component_0 as _
};
//# sourceMappingURL=Search-CO7_T86G.js.map
