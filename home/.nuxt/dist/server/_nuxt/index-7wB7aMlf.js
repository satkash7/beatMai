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
  name: "ProfilePage",
  layout: "user",
  data() {
    return {
      isLoading: true,
      isEditing: false,
      user: {},
      loading: false,
      name: "",
      createdAt: "",
      password: "",
      email: "",
      title: "",
      website: "",
      linkedin: "",
      twitter: "",
      github: "",
      // store the uploaded profile photo 
      photo: null,
      photoUrl: "",
      successMessage: "",
      errorMessage: "",
      showPassword: false,
      bio: "",
      interest: ""
    };
  },
  computed: {
    isOwner() {
      let loggedInUser = sessionStorage.getItem("username");
      if (typeof loggedInUser === "string") {
        loggedInUser = loggedInUser.trim();
        if (loggedInUser === this.user.username) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    }
  },
  async asyncData({ params, app }) {
    try {
      console.log("Fetching user details for username:", params.username);
      let token = typeof sessionStorage !== "undefined" ? sessionStorage.getItem("token") : null;
      let username = typeof sessionStorage !== "undefined" ? sessionStorage.getItem("username") : null;
      const response = await app.$axios.get(`/user/${username}/profile`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (response.data.status_code == 200) {
        const user = response.data.user || {};
        console.log("Profile pic : ", user.photoUrl);
        return {
          user,
          name: user.name || "",
          password: user.password || "",
          email: user.email || "",
          title: user.title || "",
          website: user.website || "",
          linkedin: user.linkedin || "",
          twitter: user.twitter || "",
          github: user.github || "",
          bio: user.bio + "\n" || "",
          interest: user.interest + "\n" || "",
          photoUrl: user.photoUrl || "",
          createdAt: user.created_at ? new Date(user.created_at).toLocaleDateString("fr-FR", { day: "2-digit", month: "short", year: "numeric" }) : "",
          isLoading: false,
          metaTags: {
            title: "Beat Expertise",
            keywords: +"Beat Expertise",
            image: "https://storage.everlytools.com/beatexpertise.jpg",
            url: "https://beatexpertise.com"
          }
        };
      } else {
        return { user: {}, isLoading: false };
      }
    } catch (error) {
      console.error("Error fetching user details:", error);
      return { user: {}, isLoading: false };
    }
  },
  methods: {
    toggleEdit() {
      if (this.isEditing) {
        this.updateProfile();
      } else {
        this.isEditing = true;
      }
    },
    async updateProfile() {
      try {
        console.log("Updating profile...");
        this.isLoading = false;
        let token = typeof sessionStorage !== "undefined" ? sessionStorage.getItem("token") : null;
        let formData = new FormData();
        formData.append("name", this.name);
        formData.append("password", this.password);
        formData.append("email", this.email);
        formData.append("title", this.title);
        formData.append("website", this.website);
        formData.append("linkedin", this.linkedin);
        formData.append("twitter", this.twitter);
        formData.append("github", this.github);
        formData.append("bio", this.bio);
        formData.append("interest", this.interest);
        if (this.photo) {
          formData.append("photo", this.photo);
        }
        const response = await this.$axios.post(`user/${this.$route.params.username}/profile/update`, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data"
            // Required for file upload
          }
        });
        if (response.data.status_code === 200) {
          this.successMessage = "Profile actualisé avec succès !";
          setTimeout(() => (void 0).reload(), 2e3);
        } else {
          this.errorMessage = "Erreur lors de l'actualisation du compte.";
        }
      } catch (error) {
        console.error("Error updating profile:", error);
        this.errorMessage = "Erreur lors de l'actualisation du compte.";
      }
    },
    uploadPhoto(event) {
      if (!this.isEditing) return;
      const file = event.target.files[0];
      if (file && file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = () => {
          this.photoUrl = reader.result;
          this.photo = file;
        };
        reader.readAsDataURL(file);
      } else {
        alert("Veuillez selectionner l'image valide.");
      }
    },
    adjustHeight(refName) {
      this.$nextTick(() => {
        const textarea = this.$refs[refName];
        if (textarea) {
          textarea.style.height = "auto";
          textarea.style.height = textarea.scrollHeight + "px";
        }
      });
    }
  },
  mounted() {
    this.adjustHeight("bioTextarea");
    this.adjustHeight("interestTextarea");
  },
  watch: {
    bio() {
      this.adjustHeight("bioTextarea");
    },
    interest() {
      this.adjustHeight("interestTextarea");
    }
  },
  head() {
    return {
      title: "Beat Expertise",
      meta: [
        { hid: "description", content: "BEAT est un bureau d'expertise et d'accompagnement technique basé à Goma, en République Démocratique du Congo, dédié à offrir des solutions innovantes et un soutien spécialisé." },
        { hid: "keywords", name: "Beat Expertise" },
        { hid: "robots", content: "index, follow" },
        { hid: "googlebot", content: "index, follow" },
        { hid: "bingbot", content: "index, follow" },
        { hid: "yandex", content: "index, follow" },
        // Open Graph (Facebook, LinkedIn, etc.)
        { hid: "og:title", property: "og:title", content: "Beat Expertise" },
        { hid: "og:description", property: "og:description", content: "BEAT est un bureau d'expertise et d'accompagnement technique basé à Goma, en République Démocratique du Congo, dédié à offrir des solutions innovantes et un soutien spécialisé." },
        { hid: "og:image", property: "og:image", content: this.metaTags.image },
        { hid: "og:url", property: "og:url", content: this.metaTags.url },
        { hid: "og:locale", property: "og:locale", content: "fr_FR" },
        // Primary language
        { hid: "og:locale:alternate", property: "og:locale:alternate", content: "en_GB" },
        { hid: "og:locale:alternate", property: "og:locale:alternate", content: "zh_CN" },
        { hid: "og:locale:alternate", property: "og:locale:alternate", content: "hi_IN" },
        { hid: "og:locale:alternate", property: "og:locale:alternate", content: "es_ES" },
        { hid: "og:locale:alternate", property: "og:locale:alternate", content: "en_US" },
        { hid: "og:type", property: "og:type", content: "website" },
        // Twitter Meta Tags
        { hid: "twitter:title", content: "Beat Expertise" },
        { hid: "twitter:description", content: "BEAT est un bureau d'expertise et d'accompagnement technique basé à Goma, en République Démocratique du Congo, dédié à offrir des solutions innovantes et un soutien spécialisé." },
        { hid: "twitter:image", content: this.metaTags.image },
        { hid: "twitter:card", content: "summary_large_image" },
        { hid: "twitter:url", content: this.metaTags.url }
      ]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_client_only = __nuxt_component_0;
  _push(ssrRenderComponent(_component_client_only, _attrs, {}, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/profile/admin/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  index as default
};
//# sourceMappingURL=index-7wB7aMlf.js.map
