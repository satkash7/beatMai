import { _ as _export_sfc, f as __nuxt_component_0 } from "../server.mjs";
import { useSSRContext } from "vue";
import "/Applications/XAMPP/xamppfiles/htdocs/beatMai/home/node_modules/hookable/dist/index.mjs";
import { ssrRenderComponent } from "vue/server-renderer";
import "/Applications/XAMPP/xamppfiles/htdocs/beatMai/home/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Applications/XAMPP/xamppfiles/htdocs/beatMai/home/node_modules/unctx/dist/index.mjs";
import "/Applications/XAMPP/xamppfiles/htdocs/beatMai/home/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Applications/XAMPP/xamppfiles/htdocs/beatMai/home/node_modules/defu/dist/defu.mjs";
import "/Applications/XAMPP/xamppfiles/htdocs/beatMai/home/node_modules/ufo/dist/index.mjs";
import "/Applications/XAMPP/xamppfiles/htdocs/beatMai/home/node_modules/klona/dist/index.mjs";
import "/Applications/XAMPP/xamppfiles/htdocs/beatMai/home/node_modules/@unhead/vue/dist/index.mjs";
const __default__ = {
  name: "admin-dashboard",
  data() {
    return {
      isLoading: true,
      user: {},
      blogs: [],
      opportunities: [],
      allComments: [],
      commentsLoading: false,
      commentsLoaded: false,
      activeTab: "articles",
      searchQuery: "",
      showDeleteModal: false,
      deleteLoading: false,
      pendingDeleteId: null,
      pendingDeleteCategory: null,
      toast: { show: false, message: "", type: "success" }
    };
  },
  computed: {
    stats() {
      return {
        articles: this.blogs.length,
        opportunities: this.opportunities.length,
        comments: this.allComments.length,
        total: this.blogs.length + this.opportunities.length
      };
    },
    categoryStats() {
      const allPosts = [...this.blogs, ...this.opportunities];
      const categoryMap = {};
      const colors = ["#3B82F6", "#10B981", "#F59E0B", "#EF4444", "#8B5CF6", "#EC4899"];
      allPosts.forEach((post) => {
        const cat = post.blogCategory || "Non catégorisé";
        categoryMap[cat] = (categoryMap[cat] || 0) + 1;
      });
      const total = allPosts.length || 1;
      return Object.entries(categoryMap).sort((a, b) => b[1] - a[1]).map(([name, count], i) => ({
        name,
        count,
        percentage: Math.round(count / total * 100),
        color: colors[i % colors.length]
      }));
    },
    filteredBlogs() {
      if (!this.searchQuery) return this.blogs;
      const q = this.searchQuery.toLowerCase();
      return this.blogs.filter((b) => (b.blogTitle || "").toLowerCase().includes(q) || (b.blogCaption || "").toLowerCase().includes(q) || (b.blogCategory || "").toLowerCase().includes(q));
    },
    filteredOpportunities() {
      if (!this.searchQuery) return this.opportunities;
      const q = this.searchQuery.toLowerCase();
      return this.opportunities.filter((o) => (o.blogTitle || "").toLowerCase().includes(q) || (o.blogCaption || "").toLowerCase().includes(q));
    },
    filteredComments() {
      if (!this.searchQuery) return this.allComments;
      const q = this.searchQuery.toLowerCase();
      return this.allComments.filter((c) => (c.commentData || "").toLowerCase().includes(q) || (c.commentOwner || "").toLowerCase().includes(q));
    }
  },
  async mounted() {
    if (typeof sessionStorage === "undefined" || !sessionStorage.getItem("token")) {
      this.$router.push("/u");
      return;
    }
    await this.loadDashboardData();
  },
  methods: {
    async loadDashboardData() {
      try {
        const response = await this.$axios.get("/user/mydetails");
        this.user = response.data.user;
        this.blogs = response.data.blogs || [];
        this.opportunities = response.data.opportunities || [];
        this.isLoading = false;
        this.loadAllComments();
      } catch (error) {
        console.error("Error loading dashboard:", error);
        this.isLoading = false;
      }
    },
    async loadAllComments() {
      if (this.commentsLoaded) return;
      this.commentsLoading = true;
      try {
        const allPosts = [...this.blogs, ...this.opportunities];
        const commentPromises = allPosts.map(
          (post) => this.$axios.get("/comment/getall", { params: { type: "blog", id: post.id } }).then((res) => (res.data.comments || []).map((c) => ({ ...c, postTitle: post.blogTitle }))).catch(() => [])
        );
        const results = await Promise.all(commentPromises);
        this.allComments = results.flat().sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        this.commentsLoaded = true;
      } catch (error) {
        console.error("Error loading comments:", error);
      } finally {
        this.commentsLoading = false;
      }
    },
    navigateTo(path) {
      this.$router.push(path);
    },
    viewItem(type, route) {
      this.$router.push(`/${type}/${route}`);
    },
    editItem(category, route) {
      this.$router.push({ path: `/edit?category=${category}&route=${route}` });
    },
    deleteItem(category, id) {
      this.pendingDeleteId = id;
      this.pendingDeleteCategory = category;
      this.showDeleteModal = true;
    },
    async confirmDelete() {
      this.deleteLoading = true;
      try {
        const response = await this.$axios.delete(`/${this.pendingDeleteCategory}/delete/${this.pendingDeleteId}`);
        if (response.data.status_code === 200) {
          this.blogs = this.blogs.filter((b) => b.id !== this.pendingDeleteId);
          this.opportunities = this.opportunities.filter((o) => o.id !== this.pendingDeleteId);
          this.showToast("Publication supprimée avec succès", "success");
        } else {
          this.showToast("Échec de la suppression", "error");
        }
      } catch (error) {
        console.error("Delete failed:", error);
        this.showToast("Erreur lors de la suppression", "error");
      } finally {
        this.deleteLoading = false;
        this.showDeleteModal = false;
      }
    },
    showToast(message, type = "success") {
      this.toast = { show: true, message, type };
      setTimeout(() => {
        this.toast.show = false;
      }, 4e3);
    },
    formatDate(dateStr) {
      if (!dateStr) return "";
      return new Date(dateStr).toLocaleDateString("fr-FR", { day: "numeric", month: "short", year: "numeric" });
    },
    getCategoryColor(category) {
      const colors = { "Actualité": "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400", "Projet": "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400", "Evenement": "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400", "Autre": "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-400" };
      return colors[category] || colors["Autre"];
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
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-efe390d4"]]);
export {
  index as default
};
//# sourceMappingURL=index-DBJ29U2L.js.map
