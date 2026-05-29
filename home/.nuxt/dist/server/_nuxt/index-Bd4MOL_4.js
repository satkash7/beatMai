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
import "/Applications/XAMPP/xamppfiles/htdocs/beatMai/home/node_modules/@unhead/vue/dist/index.mjs";
import "aos";
const _sfc_main = {
  name: "user-component",
  layout: "user",
  mixins: [aosMixin],
  data() {
    return {
      showLogin: true,
      userRegistred: false,
      loginLogin: "",
      loginPassword: "",
      registerName: "",
      registerEmail: "",
      registerPassword: "",
      formReady: false,
      nextroute: null,
      nextpost: null,
      nextCreator: null,
      successMessage: "",
      errorMessage: "",
      loading: false
    };
  },
  computed: {
    generatedUsername() {
      const normalizedName = this.registerName.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      const username = normalizedName.replace(/\s/g, "");
      return username;
    }
  },
  methods: {
    login() {
      console.log("Logging in with:", this.loginLogin, this.loginPassword);
    },
    register() {
      console.log("Registering with:", this.registerName, this.registerEmail, this.registerPassword);
    },
    toggleForm(formType) {
      this.showLogin = formType === "login";
    },
    validateRegisterForm() {
      this.formReady = true;
      if (this.registerName === "" || this.registerEmail === "" || this.registerPassword === "" || this.registerPassword.length < 8) {
        return false;
      }
      return true;
    },
    async postLogin() {
      try {
        this.loading = true;
        const response = await this.$axios.post("/user/login", {
          login: this.loginLogin,
          password: this.loginPassword
        });
        console.log(response.data);
        const userData = response.data.user;
        const token = response.data.token;
        localStorage.setItem("email", userData.email);
        localStorage.setItem("username", userData.username);
        localStorage.setItem("token", token);
        localStorage.setItem("accesshash", userData.accesshash);
        localStorage.setItem("name", userData.name);
        sessionStorage.setItem("email", userData.email);
        sessionStorage.setItem("username", userData.username);
        sessionStorage.setItem("token", token);
        sessionStorage.setItem("accesshash", userData.accesshash);
        sessionStorage.setItem("name", userData.name);
        (void 0).cookie = `authToken=${token}; path=/; max-age=${60 * 60 * 24 * 30}; SameSite=Lax`;
        this.loading = false;
        if (this.nextroute != null && this.nextpost != null) {
          this.$router.push({ path: `/${this.nextCreator}/${this.nextroute}/${this.nextpost}#comments` });
        } else {
          (void 0).reload();
        }
        console.log("Login successful!", userData);
      } catch (error) {
        this.loading = false;
        this.errorMessage = "Échec de la connexion! Veuillez vérifier vos identifiants.";
        console.log("Login failed:", error);
        setTimeout(() => {
          this.errorMessage = "";
        }, 4e3);
      }
    },
    async postRegister() {
      try {
        this.loading = true;
        const normalizedUsername = this.registerName.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        const username = normalizedUsername.replace(/[^a-zA-Z0-9]/g, "");
        const response = await this.$axios.post("/user/register", {
          email: this.registerEmail,
          name: this.registerName,
          username,
          password: this.registerPassword,
          accesshash: "beat_user"
        });
        if (response.data.status_code == 409) {
          this.loading = false;
          this.errorMessage = response.data.status_message;
          console.log("Account exists !", response.data);
        }
        if (response.data.status_code == 200) {
          const userData = response.data.user;
          this.successMessage = "Inscription réussie! Connectez-vous avec: " + username + " ou " + this.registerEmail;
          this.loading = false;
          console.log("Registration successful!", userData);
        }
        setTimeout(() => {
          this.successMessage = "";
          this.errorMessage = "";
          (void 0).reload();
        }, 1e4);
      } catch (error) {
        this.loading = false;
        this.errorMessage = "Échec de l'inscription! Veuillez réessayer.";
        setTimeout(() => {
          this.errorMessage = "";
        }, 6e3);
        console.log("Registration failed:", error);
      }
    }
  },
  mounted() {
    if (typeof sessionStorage !== "undefined" && sessionStorage.getItem("token")) {
      const username = sessionStorage.getItem("username");
      this.$router.push(`/${username}`);
    }
    const nextParam = this.$route.query.next;
    const routeParam = this.$route.query.route;
    const creatorParam = this.$route.query.creator;
    this.nextroute = nextParam;
    this.nextCreator = creatorParam;
    this.nextpost = routeParam;
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_client_only = __nuxt_component_0;
  _push(ssrRenderComponent(_component_client_only, _attrs, {}, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/u/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-228aaa42"]]);
export {
  index as default
};
//# sourceMappingURL=index-Bd4MOL_4.js.map
