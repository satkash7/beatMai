import { _ as _export_sfc, f as __nuxt_component_0 } from "../server.mjs";
import { defineAsyncComponent, useSSRContext } from "vue";
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
  components: {
    tinymce: defineAsyncComponent(() => import("@tinymce/tinymce-vue"))
  },
  data() {
    return {
      loading: false,
      editorLoaded: false,
      request: "",
      accesshash: "",
      success: false,
      failure: false,
      title: "Editing",
      titleAction: "",
      userLogged: true,
      publicPost: true,
      coverUrl: null,
      isModalOpen: false,
      imagePreview: null,
      uploadImage: null,
      successMessage: "",
      errorMessage: "",
      titleColumn: "",
      captionColumn: "",
      routeColumn: "",
      categoryColumn: "",
      dataColumn: "default initial content!",
      imageColumn: null,
      creatorColumn: "",
      alreadyLoaded: false,
      creator: "",
      oldTitle: "",
      oldCaption: "",
      oldRoute: "",
      oldCategory: "",
      oldData: "",
      oldCover: null,
      oldDocTechnology: "",
      oldDocTechVersion: "",
      id: 0,
      editorData: "",
      newCover: null,
      docTechnology: "",
      docTechVersion: "",
      options: {
        plugins: [
          "advlist autolink lists link image charmap print preview hr anchor pagebreak",
          "searchreplace wordcount visualblocks visualchars code fullscreen",
          "insertdatetime media nonbreaking save table contextmenu directionality",
          "template paste textcolor colorpicker textpattern imagetools toc help emoticons hr codesample"
        ],
        toolbar: "undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help"
        // language_url: '/path-to-your-language-file.js', // Optional: Set the language file URL
      }
    };
  },
  mounted() {
    this.editorLoaded = true;
    this.creator = typeof sessionStorage !== "undefined" ? sessionStorage.getItem("username") : "";
    this.loadEditData();
  },
  methods: {
    async loadEditData() {
      try {
        console.log("Loading article to edit");
        const category = this.$route.query.category;
        const postRoute = this.$route.query.route;
        const response = await this.$axios.get(`/${category}/getall?route=${postRoute}`);
        if (response.data.status_code === 200) {
          const post = response.data[category][0];
          this.id = post.id || 0;
          this.titleColumn = post.blogTitle || post.tipTitle || post.docTitle || post.trendTitle || "";
          this.captionColumn = post.blogCaption || post.tipCaption || post.docCaption || post.trendCaption || "";
          this.routeColumn = post.blogRoute || post.tipRoute || post.docRoute || post.trendRoute || "";
          this.categoryColumn = post.blogCategory || post.tipCategory || post.docCategory || post.trendCategory || "";
          this.dataColumn = post.blogData || post.tipData || post.docData || post.trendData || "";
          this.imageColumn = post.imageUrl || null;
          if (category == "blog") {
            this.publicPost = post.publicPost == "1" ? true : false;
            console.log("public or not : ", post.publicPost);
          }
          this.titleAction = category;
          this.docTechnology = post.docTechnology || "";
          this.docTechVersion = post.docTechVersion || "";
          this.oldRoute = this.routeColumn;
          this.oldTitle = this.titleColumn;
          this.oldCaption = this.captionColumn;
          this.oldCategory = this.categoryColumn;
          this.oldData = this.dataColumn;
          this.oldCover = this.imageColumn;
          this.oldDocTechnology = this.docTechnology;
          this.oldDocTechVersion = this.docTechVersion;
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    limitCaptionLength() {
      if (this.captionColumn.length > 200) {
        this.captionColumn = this.captionColumn.substring(0, 200);
      }
    },
    updateEditorContent() {
      this.editorData = this.editorData === "" ? this.dataColumn : this.editorData + "<br>" + this.dataColumn;
      this.alreadyLoaded = true;
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
    handleFileChange(event) {
      const file = event.target.files[0];
      this.newCover = file;
      this.imageColumn = URL.createObjectURL(file);
    },
    async submitImage() {
      try {
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
            this.successMessage = "Image uploaded successfully! Use the below url to insert the image : " + response.data.url;
          } else {
            this.errorMessage = "Image/file uploaded! Please try again.";
          }
        }
      } catch (error) {
        console.error("Error uploading image :", error);
        this.errorMessage = "Image/file upload failed! Please try again.";
      }
    },
    async submitAndPublish() {
      try {
        this.loading = true;
        const storedBarrierDetails = sessionStorage.getItem("token");
        this.routeColumn = this.oldTitle == this.titleColumn ? this.oldRoute : this.titleColumn.normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim().toLowerCase().replace(/[^\w\s-]/g, "").replace(/^-+|-+$/g, "").replace(/\s+/g, "-").replace(/-+/g, "-");
        const formData = new FormData();
        if (this.titleAction == "blog") {
          formData.append("blogTitle", this.titleColumn == this.oldTitle ? "skip" : this.titleColumn);
          formData.append("blogCaption", this.captionColumn == this.oldCaption ? "skip" : this.captionColumn);
          formData.append("blogRoute", this.routeColumn == this.oldRoute ? "skip" : this.routeColumn);
          formData.append("blogCategory", this.categoryColumn == this.oldCategory ? "skip" : this.categoryColumn);
          formData.append("blogData", this.editorData == this.oldData || this.editorData == "" ? "skip" : this.editorData);
          formData.append("publicPost", this.publicPost == true ? 1 : 0);
        } else if (this.titleAction == "tip") {
          formData.append("tipTitle", this.titleColumn == this.oldTitle ? "skip" : this.titleColumn);
          formData.append("tipCaption", this.captionColumn == this.oldCaption ? "skip" : this.captionColumn);
          formData.append("tipRoute", this.routeColumn == this.oldRoute ? "skip" : this.routeColumn);
          formData.append("tipCategory", this.categoryColumn == this.oldCategory ? "skip" : this.categoryColumn);
          formData.append("tipData", this.editorData == this.oldData || this.editorData == "" ? "skip" : this.editorData);
        } else if (this.titleAction == "doc") {
          formData.append("docTitle", this.titleColumn == this.oldTitle ? "skip" : this.titleColumn);
          formData.append("docCaption", this.captionColumn == this.oldCaption ? "skip" : this.captionColumn);
          formData.append("docRoute", this.routeColumn == this.oldRoute ? "skip" : this.routeColumn);
          formData.append("docCategory", this.categoryColumn == this.oldCategory ? "skip" : this.categoryColumn);
          formData.append("docData", this.editorData == this.oldData || this.editorData == "" ? "skip" : this.editorData);
          formData.append("docTechnology", this.docTechnology == this.oldDocTechnology ? "skip" : this.docTechnology);
          formData.append("docTechVersion", this.docTechVersion == this.oldDocTechVersion ? "skip" : this.docTechVersion);
        } else if (this.titleAction == "trend") {
          formData.append("trendTitle", this.titleColumn == this.oldTitle ? "skip" : this.titleColumn);
          formData.append("trendCaption", this.captionColumn == this.oldCaption ? "skip" : this.captionColumn);
          formData.append("trendRoute", this.routeColumn == this.oldRoute ? "skip" : this.routeColumn);
          formData.append("trendCategory", this.categoryColumn == this.oldCategory ? "skip" : this.categoryColumn);
          formData.append("trendData", this.editorData == this.oldData || this.editorData == "" ? "skip" : this.editorData);
        }
        formData.append("imageUrl", this.newCover == null ? "skip" : this.newCover);
        const response = await this.$axios.post(`/${this.titleAction}/edit/${this.id}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${storedBarrierDetails}`
          }
        });
        console.log("response :", JSON.stringify(response));
        if (response.data.status_code === 200) {
          this.success = true;
        } else {
          this.failure = true;
        }
      } catch (error) {
        this.loading = false;
        console.error(error);
      } finally {
        this.loading = false;
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/edit/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-de41392f"]]);
export {
  index as default
};
//# sourceMappingURL=index-gDA2SMaN.js.map
