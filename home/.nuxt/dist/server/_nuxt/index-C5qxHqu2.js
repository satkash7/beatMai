import { _ as _export_sfc, f as __nuxt_component_0 } from "../server.mjs";
import { a as aosMixin } from "./aos-DgaNNj1M.js";
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
import "aos";
const _sfc_main = {
  name: "user-component",
  layout: "user",
  mixins: [aosMixin],
  data() {
    return {
      year: `${(/* @__PURE__ */ new Date()).toLocaleString("en-us", { year: "numeric" })}`,
      isLoading: true,
      opportunities: [],
      blogs: [],
      user: []
    };
  },
  async beforeRouteEnter(to, from, next) {
    const isReload = from.name === null;
    if (isReload) {
      next("/u");
    } else {
      next();
    }
  },
  async asyncData({ app }) {
    try {
      let storedBarrierDetails = null;
      if (typeof sessionStorage !== "undefined") {
        storedBarrierDetails = sessionStorage.getItem("token");
        console.log("token ===========> : ", storedBarrierDetails);
      }
      const response = await app.$axios.get(`/user/mydetails`, {
        headers: {
          Authorization: `Bearer ${storedBarrierDetails}`
        }
      });
      const userdetails = response.data.user;
      const userblogs = response.data.blogs;
      const useropportunities = response.data.opportunities;
      console.log("response data:", response.data);
      return { user: userdetails, opportunities: useropportunities, blogs: userblogs, isLoading: false };
    } catch (error) {
      console.error("Error fetching data:", error);
      return { details: null, isLoading: false };
    }
  },
  methods: {
    // logout 
    logout() {
      if (typeof sessionStorage !== "undefined") {
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("username");
        sessionStorage.removeItem("email");
        sessionStorage.removeItem("name");
        if (typeof localStorage !== "undefined") {
          localStorage.removeItem("token");
          localStorage.removeItem("username");
          localStorage.removeItem("email");
          localStorage.removeItem("name");
        }
        this.$router.push("/u");
      }
    },
    showSingleBlog(blog) {
      this.$router.push({ path: `blogs/${blog.blogRoute}` });
    },
    showSingleOpportunity(opportunity) {
      this.$router.push({ path: `opportunities/${opportunity.blogRoute}` });
    },
    editItem(category, route) {
      this.$router.push({ path: `/edit?category=${category}&route=${route}` });
    },
    async deleteItem(category, blogId) {
      if (confirm("Voulez vous vraiment supprimer cette publication ?")) {
        try {
          let storedBarrierDetails = null;
          if (typeof sessionStorage !== "undefined") {
            storedBarrierDetails = sessionStorage.getItem("token");
          }
          const response = await this.$axios.delete(`/${category}/delete/${blogId}`, {
            headers: {
              Authorization: `Bearer ${storedBarrierDetails}`
            }
          });
          if (response.data.status_code == 200) {
            this.blogs = this.blogs.filter((blog) => blog.id !== blogId);
            alert("Votre publication a été supprimée avec succès.");
            this.$router.go();
          } else {
            alert("Echec lors de la supression de la publication.");
          }
        } catch (error) {
          console.error("Failed to delete the post :", error);
        }
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_client_only = __nuxt_component_0;
  _push(ssrRenderComponent(_component_client_only, _attrs, {}, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  index as default
};
//# sourceMappingURL=index-C5qxHqu2.js.map
