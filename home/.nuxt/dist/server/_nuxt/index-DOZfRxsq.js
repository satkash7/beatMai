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
  name: "create-component",
  mixins: [aosMixin],
  data() {
    return {
      loading: false,
      request: "",
      accesshash: "",
      success: false,
      failure: false,
      title: "Editing",
      titleAction: "",
      userLogged: true,
      publicPost: false,
      isModalOpen: false,
      imagePreview: null,
      uploadImage: null,
      successMessage: "",
      errorMessage: "",
      titleColumn: "",
      captionColumn: "",
      routeColumn: "",
      categoryColumn: "",
      dataColumn: "",
      imageColumn: null,
      imageUrlText: "",
      coverMode: "file",
      creatorColumn: "",
      creator: ""
    };
  },
  methods: {
    limitCaptionLength() {
      if (this.captionColumn.length > 200) {
        this.captionColumn = this.captionColumn.substring(0, 200);
      }
    },
    openImageUploadModal() {
      this.isModalOpen = true;
    },
    closeImageUploadModal() {
      this.isModalOpen = false;
    },
    handleImageUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.imagePreview = URL.createObjectURL(file);
        this.uploadImage = file;
      }
    },
    async submitImage() {
      try {
        console.log("Uploading image...");
        this.isLoading = false;
        let token = typeof sessionStorage !== "undefined" ? sessionStorage.getItem("token") : null;
        let username = typeof sessionStorage !== "undefined" ? sessionStorage.getItem("username") : null;
        let formData = new FormData();
        if (this.uploadImage) {
          formData.append("photo", this.uploadImage);
          const response = await this.$axios.post(`user/${username}/uploads`, formData, {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "multipart/form-data"
            }
          });
          if (response.data.status_code == 200) {
            this.successMessage = "L'image a été chargée avec succès, utilisez ce lien pour insérer l'Image : " + response.data.url;
          } else {
            this.errorMessage = "Impossible de charger l'image! vérifiez la taille et le format du fichier.";
          }
        }
      } catch (error) {
        console.error("Error uploading image :", error);
        this.errorMessage = "Image/file upload failed! Please try again.";
      }
    },
    handleFileChange(event) {
      const file = event.target.files[0];
      this.imageColumn = file;
    },
    getSourceAction() {
      const action = this.$route.query.v;
      this.titleAction = action;
      if (action == "blog") {
        this.title = "Créer et publier une publication / opportunité";
        this.request = "/blog/store";
      }
    },
    async submitAndPublish() {
      this.loading = true;
      const storedBarrierDetails = sessionStorage.getItem("token");
      this.routeColumn = this.titleColumn.normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim().toLowerCase().replace(/[^\w\s-]/g, "").replace(/^-+|-+$/g, "").replace(/\s+/g, "-").replace(/-+/g, "-");
      const formData = new FormData();
      formData.append("blogTitle", this.titleColumn || "");
      formData.append("blogCaption", this.captionColumn || "");
      formData.append("blogRoute", this.routeColumn || "");
      formData.append("blogCategory", this.categoryColumn || "");
      formData.append("blogData", this.dataColumn || "");
      formData.append("publicPost", this.publicPost === true ? 1 : 0);
      if (this.coverMode === "url" && this.imageUrlText) {
        formData.append("imageUrl", this.imageUrlText);
        formData.append("imageIsUrl", "1");
      } else {
        formData.append("imageUrl", this.imageColumn || "");
      }
      formData.append("creator", this.creator || "");
      const response = await this.$axios.post("/blog/store", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${storedBarrierDetails}`
        }
      });
      if (response.data.status_code === 200) {
        this.success = true;
      } else {
        this.failure = true;
      }
      this.loading = false;
    }
  },
  mounted() {
    this.creator = typeof sessionStorage !== "undefined" ? sessionStorage.getItem("username") : "";
    this.getSourceAction();
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/create/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-DOZfRxsq.js.map
