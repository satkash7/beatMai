import { f as __nuxt_component_0 } from "../server.mjs";
import { useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { a as aosMixin } from "./aos-DgaNNj1M.js";
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
import "aos";
const __default__ = {
  name: "user-component",
  mixins: [aosMixin],
  data() {
    return {
      year: `${(/* @__PURE__ */ new Date()).toLocaleString("en-us", { year: "numeric" })}`,
      isLoading: true,
      opportunities: [],
      blogs: [],
      user: {}
    };
  },
  async mounted() {
    if (typeof sessionStorage === "undefined" || !sessionStorage.getItem("token")) {
      this.$router.push("/u");
      return;
    }
    await this.loadUserData();
  },
  methods: {
    async loadUserData() {
      try {
        const response = await this.$axios.get("/user/mydetails");
        this.user = response.data.user;
        this.blogs = response.data.blogs || [];
        this.opportunities = response.data.opportunities || [];
        this.isLoading = false;
        console.log("response data:", response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        this.isLoading = false;
      }
    },
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
      this.$router.push({ path: `/blogs/${blog.blogRoute}` });
    },
    showSingleOpportunity(opportunity) {
      this.$router.push({ path: `/opportunities/${opportunity.blogRoute}` });
    },
    editItem(category, route) {
      this.$router.push({ path: `/edit?category=${category}&route=${route}` });
    },
    async deleteItem(category, blogId) {
      if (confirm("Voulez vous vraiment supprimer cette publication ?")) {
        try {
          const response = await this.$axios.delete(`/${category}/delete/${blogId}`);
          if (response.data.status_code == 200) {
            this.blogs = this.blogs.filter((blog) => blog.id !== blogId);
            this.opportunities = this.opportunities.filter((o) => o.id !== blogId);
            alert("Votre publication a été supprimée avec succès.");
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
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_client_only = __nuxt_component_0;
      _push(ssrRenderComponent(_component_client_only, _attrs, {}, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-Cvt8qmJl.js.map
