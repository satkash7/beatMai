exports.ids = [22];
exports.modules = {

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/profile/admin/index.vue?vue&type=template&id=491b6f74
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('client-only', [_c('div', {
    staticClass: "w-full container mx-auto px-6"
  }, [_c('section', {
    staticClass: "bg-partner relative max-w-full sm:mx-6 my-0 shadow sm:rounded-2xl overflow-hidden p-6"
  }, [_vm.isLoading ? _c('div', {
    staticClass: "w-full flex flex-col items-center justify-center text-center"
  }, [_c('p', [_vm._v("Loading...")])]) : _vm._e(), _vm._v(" "), _c('br'), _c('br'), _c('br'), _c('br'), _c('br'), _c('br'), _vm._v(" "), _vm.successMessage && !_vm.loading ? _c('div', {
    staticClass: "bg-green-200 text-green-800 py-4 px-8 rounded my-6 text-center"
  }, [_c('p', {
    domProps: {
      "innerHTML": _vm._s(_vm.successMessage)
    }
  })]) : _vm._e(), _vm._v(" "), _vm.errorMessage && !_vm.loading ? _c('div', {
    staticClass: "bg-red-200 text-green-800 py-4 px-8 rounded my-6 text-center"
  }, [_c('p', {
    domProps: {
      "innerHTML": _vm._s(_vm.errorMessage)
    }
  })]) : _c('div', {
    staticClass: "w-full flex flex-col items-center justify-center space-y-6"
  }, [_c('div', {
    staticClass: "flex space-x-2"
  }, [_vm.isOwner ? _c('button', {
    staticClass: "px-4 py-2 bg-blue-500 text-white rounded",
    on: {
      "click": _vm.toggleEdit
    }
  }, [_vm._v("\n            " + _vm._s(_vm.isEditing ? 'Mettre à jour' : 'Modifier le profile ') + "\n          ")]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "w-full max-w-2xl bg-white shadow-lg rounded-lg p-6 flex"
  }, [_c('div', {
    staticClass: "w-1/3 flex flex-col items-center"
  }, [_c('label', {
    staticClass: "cursor-pointer",
    attrs: {
      "for": "photoUpload"
    }
  }, [_c('div', {
    staticClass: "w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden"
  }, [_vm.photoUrl ? _c('img', {
    staticClass: "w-full h-full object-cover",
    attrs: {
      "src": _vm.photoUrl,
      "alt": "Profile Picture"
    }
  }) : _c('span', {
    staticClass: "text-gray-500"
  }, [_vm._v("Photo")])])]), _vm._v(" "), _c('input', {
    staticClass: "hidden",
    attrs: {
      "id": "photoUpload",
      "type": "file",
      "disabled": !_vm.isEditing,
      "accept": "image/*"
    },
    on: {
      "change": _vm.uploadPhoto
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "w-2/3 space-y-3"
  }, [_c('div', {
    staticClass: "relative"
  }, [_c('label', {
    staticClass: "absolute text-gray-500 text-sm px-2 bg-white -top-2 left-3"
  }, [_vm._v("Noms")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.name,
      expression: "name"
    }],
    staticClass: "border rounded-lg p-3 w-full",
    attrs: {
      "disabled": !_vm.isEditing
    },
    domProps: {
      "value": _vm.name
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.name = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "relative"
  }, [_c('label', {
    staticClass: "absolute text-gray-500 text-sm px-2 bg-white -top-2 left-3"
  }, [_vm._v("Email")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.email,
      expression: "email"
    }],
    staticClass: "border rounded-lg p-3 w-full",
    attrs: {
      "disabled": !_vm.isEditing
    },
    domProps: {
      "value": _vm.email
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.email = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "relative"
  }, [_c('label', {
    staticClass: "absolute text-gray-500 text-sm px-2 bg-white -top-2 left-3"
  }, [_vm._v("Titre")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.title,
      expression: "title"
    }],
    staticClass: "border rounded-lg p-3 w-full",
    attrs: {
      "disabled": !_vm.isEditing
    },
    domProps: {
      "value": _vm.title
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.title = $event.target.value;
      }
    }
  })]), _vm._v(" "), _vm.isOwner ? _c('div', {
    staticClass: "relative"
  }, [_c('label', {
    staticClass: "absolute text-gray-500 text-sm px-2 bg-white -top-2 left-3"
  }, [_vm._v("\n                Votre mot de passe "), _c('small', [_vm._v("(Only visible to you)")])]), _vm._v(" "), (_vm.showPassword ? 'text' : 'password') === 'checkbox' ? _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.password,
      expression: "password"
    }],
    staticClass: "border rounded-lg p-3 w-full bg-gray-100",
    attrs: {
      "disabled": !_vm.isEditing,
      "type": "checkbox"
    },
    domProps: {
      "checked": Array.isArray(_vm.password) ? _vm._i(_vm.password, null) > -1 : _vm.password
    },
    on: {
      "change": function ($event) {
        var $$a = _vm.password,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && (_vm.password = $$a.concat([$$v]));
          } else {
            $$i > -1 && (_vm.password = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.password = $$c;
        }
      }
    }
  }) : (_vm.showPassword ? 'text' : 'password') === 'radio' ? _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.password,
      expression: "password"
    }],
    staticClass: "border rounded-lg p-3 w-full bg-gray-100",
    attrs: {
      "disabled": !_vm.isEditing,
      "type": "radio"
    },
    domProps: {
      "checked": _vm._q(_vm.password, null)
    },
    on: {
      "change": function ($event) {
        _vm.password = null;
      }
    }
  }) : _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.password,
      expression: "password"
    }],
    staticClass: "border rounded-lg p-3 w-full bg-gray-100",
    attrs: {
      "disabled": !_vm.isEditing,
      "type": _vm.showPassword ? 'text' : 'password'
    },
    domProps: {
      "value": _vm.password
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.password = $event.target.value;
      }
    }
  }), _vm._v(" "), _c('button', {
    staticClass: "absolute right-3 top-1/2 transform -translate-y-1/2",
    attrs: {
      "type": "button"
    },
    on: {
      "click": function ($event) {
        _vm.showPassword = !_vm.showPassword;
      }
    }
  }, [_vm.showPassword ? _c('svg', {
    staticClass: "h-5 w-5 text-gray-500",
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "viewBox": "0 0 20 20",
      "fill": "currentColor"
    }
  }, [_c('path', {
    attrs: {
      "d": "M10 3C4.477 3 0 10 0 10s4.477 7 10 7 10-7 10-7-4.477-7-10-7zm0 12a5 5 0 110-10 5 5 0 010 10zM10 7a3 3 0 100 6 3 3 0 000-6z"
    }
  })]) : _c('svg', {
    staticClass: "h-5 w-5 text-gray-500",
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "viewBox": "0 0 20 20",
      "fill": "currentColor"
    }
  }, [_c('path', {
    attrs: {
      "fill-rule": "evenodd",
      "d": "M10 5a5 5 0 00-4.546 2.915A8.004 8.004 0 002 10c1.73 2.91 5.028 5 8 5s6.27-2.09 8-5a8.004 8.004 0 00-3.454-2.085A5 5 0 0010 5zM10 3a7 7 0 017 7c0 1.13-.35 2.52-1.182 3.78-.776 1.182-2.01 2.22-3.818 2.22s-3.042-1.038-3.818-2.22C3.35 12.52 3 11.13 3 10a7 7 0 017-7z",
      "clip-rule": "evenodd"
    }
  })])])]) : _vm._e()])]), _vm._v("\n        " + _vm._s(_vm.name) + " - Actif depuis : " + _vm._s(_vm.createdAt) + "\n        "), _c('div', {
    staticClass: "w-full max-w-2xl bg-white shadow-lg rounded-lg p-6 space-y-4"
  }, [_c('div', {
    staticClass: "relative"
  }, [_c('label', {
    staticClass: "absolute text-gray-500 text-sm px-2 bg-white -top-2 left-3"
  }, [_vm._v("Siteweb")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.website,
      expression: "website"
    }],
    staticClass: "border rounded-lg p-3 w-full",
    attrs: {
      "disabled": !_vm.isEditing
    },
    domProps: {
      "value": _vm.website
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.website = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "relative"
  }, [_c('label', {
    staticClass: "absolute text-gray-500 text-sm px-2 bg-white -top-2 left-3"
  }, [_vm._v("LinkedIn")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.linkedin,
      expression: "linkedin"
    }],
    staticClass: "border rounded-lg p-3 w-full",
    attrs: {
      "disabled": !_vm.isEditing
    },
    domProps: {
      "value": _vm.linkedin
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.linkedin = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "relative"
  }, [_c('label', {
    staticClass: "absolute text-gray-500 text-sm px-2 bg-white -top-2 left-3"
  }, [_vm._v("GitHub")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.github,
      expression: "github"
    }],
    staticClass: "border rounded-lg p-3 w-full",
    attrs: {
      "disabled": !_vm.isEditing
    },
    domProps: {
      "value": _vm.github
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.github = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "relative"
  }, [_c('label', {
    staticClass: "absolute text-gray-500 text-sm px-2 bg-white -top-2 left-3"
  }, [_vm._v("Twitter")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.twitter,
      expression: "twitter"
    }],
    staticClass: "border rounded-lg p-3 w-full",
    attrs: {
      "disabled": !_vm.isEditing
    },
    domProps: {
      "value": _vm.twitter
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.twitter = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "relative"
  }, [_c('label', {
    staticClass: "absolute text-gray-500 text-sm px-2 bg-white -top-2 left-3"
  }, [_vm._v("Bio")]), _vm._v(" "), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.bio,
      expression: "bio"
    }],
    ref: "bioTextarea",
    staticClass: "border rounded-lg p-3 w-full resize-none overflow-hidden min-h-[200px]",
    attrs: {
      "disabled": !_vm.isEditing
    },
    domProps: {
      "value": _vm.bio
    },
    on: {
      "input": [function ($event) {
        if ($event.target.composing) return;
        _vm.bio = $event.target.value;
      }, function ($event) {
        return _vm.adjustHeight('bioTextarea');
      }]
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "relative mt-4"
  }, [_c('label', {
    staticClass: "absolute text-gray-500 text-sm px-2 bg-white -top-2 left-3"
  }, [_vm._v("Activité")]), _vm._v(" "), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.interest,
      expression: "interest"
    }],
    ref: "interestTextarea",
    staticClass: "border rounded-lg p-3 w-full resize-none overflow-hidden min-h-[200px]",
    attrs: {
      "disabled": !_vm.isEditing
    },
    domProps: {
      "value": _vm.interest
    },
    on: {
      "input": [function ($event) {
        if ($event.target.composing) return;
        _vm.interest = $event.target.value;
      }, function ($event) {
        return _vm.adjustHeight('interestTextarea');
      }]
    }
  })])])])])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/profile/admin/index.vue?vue&type=template&id=491b6f74

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/profile/admin/index.vue?vue&type=script&lang=js
/* harmony default export */ var adminvue_type_script_lang_js = ({
  name: 'ProfilePage',
  layout: 'user',
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
      let loggedInUser = sessionStorage.getItem('username');
      if (typeof loggedInUser === 'string') {
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
  async asyncData({
    params,
    app
  }) {
    try {
      console.log("Fetching user details for username:", params.username);
      let token = typeof sessionStorage !== 'undefined' ? sessionStorage.getItem('token') : null;
      let username = typeof sessionStorage !== 'undefined' ? sessionStorage.getItem('username') : null;
      const response = await app.$axios.get(`/user/${username}/profile`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      if (response.data.status_code == 200) {
        const user = response.data.user || {}; // Ensure user is always an object
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
          bio: user.bio + "\n" || false,
          interest: user.interest + "\n" || false,
          photoUrl: user.photoUrl || "",
          createdAt: user.created_at ? new Date(user.created_at).toLocaleDateString('fr-FR', {
            day: '2-digit',
            month: 'short',
            year: 'numeric'
          }) : "",
          isLoading: false,
          metaTags: {
            title: "Beat Expertise",
            keywords: +'Beat Expertise',
            image: "https://storage.everlytools.com/beatexpertise.jpg",
            url: "https://beatexpertise.com"
          }
        };
      } else {
        return {
          user: {},
          isLoading: false
        }; // Ensure user is an object
      }
    } catch (error) {
      console.error("Error fetching user details:", error);
      return {
        user: {},
        isLoading: false
      }; // Return an empty object instead of null
    }
  },
  methods: {
    toggleEdit() {
      if (this.isEditing) {
        this.updateProfile(); // Call the API only when clicking "Save"
      } else {
        this.isEditing = true; // Switch to edit mode
      }
    },
    async updateProfile() {
      try {
        console.log("Updating profile...");
        this.isLoading = false;
        let token = typeof sessionStorage !== 'undefined' ? sessionStorage.getItem('token') : null;

        // Create FormData
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
        // Append photo only if a new one is selected
        if (this.photo) {
          formData.append("photo", this.photo);
        }
        const response = await this.$axios.post(`user/${this.$route.params.username}/profile/update`, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data" // Required for file upload
          }
        });
        if (response.data.status_code === 200) {
          this.successMessage = "Profile actualisé avec succès !";
          setTimeout(() => location.reload(), 2000);
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
          this.photoUrl = reader.result; // Set Base64 image preview
          this.photo = file; // Store the file
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
          textarea.style.height = "auto"; // Reset height to auto
          textarea.style.height = textarea.scrollHeight + "px"; // Set new height
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
      meta: [{
        hid: 'description',
        content: 'BEAT est un bureau d\'expertise et d\'accompagnement technique basé à Goma, en République Démocratique du Congo, dédié à offrir des solutions innovantes et un soutien spécialisé.'
      }, {
        hid: 'keywords',
        name: 'Beat Expertise'
      }, {
        hid: 'robots',
        content: 'index, follow'
      }, {
        hid: 'googlebot',
        content: 'index, follow'
      }, {
        hid: 'bingbot',
        content: 'index, follow'
      }, {
        hid: 'yandex',
        content: 'index, follow'
      },
      // Open Graph (Facebook, LinkedIn, etc.)
      {
        hid: 'og:title',
        property: 'og:title',
        content: "Beat Expertise"
      }, {
        hid: 'og:description',
        property: 'og:description',
        content: 'BEAT est un bureau d\'expertise et d\'accompagnement technique basé à Goma, en République Démocratique du Congo, dédié à offrir des solutions innovantes et un soutien spécialisé.'
      }, {
        hid: 'og:image',
        property: 'og:image',
        content: this.metaTags.image
      }, {
        hid: 'og:url',
        property: 'og:url',
        content: this.metaTags.url
      }, {
        hid: 'og:locale',
        property: 'og:locale',
        content: 'fr_FR'
      },
      // Primary language
      {
        hid: 'og:locale:alternate',
        property: 'og:locale:alternate',
        content: 'en_GB'
      }, {
        hid: 'og:locale:alternate',
        property: 'og:locale:alternate',
        content: 'zh_CN'
      }, {
        hid: 'og:locale:alternate',
        property: 'og:locale:alternate',
        content: 'hi_IN'
      }, {
        hid: 'og:locale:alternate',
        property: 'og:locale:alternate',
        content: 'es_ES'
      }, {
        hid: 'og:locale:alternate',
        property: 'og:locale:alternate',
        content: 'en_US'
      }, {
        hid: 'og:type',
        property: 'og:type',
        content: 'website'
      },
      // Twitter Meta Tags
      {
        hid: 'twitter:title',
        content: "Beat Expertise"
      }, {
        hid: 'twitter:description',
        content: 'BEAT est un bureau d\'expertise et d\'accompagnement technique basé à Goma, en République Démocratique du Congo, dédié à offrir des solutions innovantes et un soutien spécialisé.'
      }, {
        hid: 'twitter:image',
        content: this.metaTags.image
      }, {
        hid: 'twitter:card',
        content: 'summary_large_image'
      }, {
        hid: 'twitter:url',
        content: this.metaTags.url
      }]
    };
  }
});
// CONCATENATED MODULE: ./pages/profile/admin/index.vue?vue&type=script&lang=js
 /* harmony default export */ var profile_adminvue_type_script_lang_js = (adminvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./pages/profile/admin/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  profile_adminvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "641b69e3"
  
)

/* harmony default export */ var admin = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map