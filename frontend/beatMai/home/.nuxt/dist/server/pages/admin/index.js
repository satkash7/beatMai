exports.ids = [11,4];
exports.modules = {

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/index.vue?vue&type=template&id=f78dd1c2
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('client-only', [_c('div', {
    staticClass: "w-full container mx-auto px-6"
  }, [_c('section', {
    staticClass: "bg-partner relative max-w-full sm:mx-6 my-0 shadow sm:rounded-2xl overflow-hidden"
  }, [_vm.isLoading ? _c('div', {
    staticClass: "w-full px-6 sm:px-0 py-4 flex flex-col items-center justify-center space-y-4 text-center"
  }, [_c('p', [_vm._v("Loading...")])]) : _c('div', {
    staticClass: "w-full px-6 mr-0 ml-0 sm:px-0 py-0 flex flex-col items-center justify-center space-y-4"
  }, [_c('br'), _c('br'), _c('br'), _c('br'), _c('br'), _c('br'), _vm._v(" "), _c('div', {
    staticClass: "w-full px-8 sm:px-0 my-0 py-0 flex flex-col items-center justify-center space-y-4 text-center"
  }, [_c('div', {
    staticClass: "space-x-3"
  }), _vm._v(" "), _c('div', {
    staticClass: "top-0 right-0 whitespace-nowrap"
  }, [_vm.user.username == 'admin' ? _c('a', {
    staticClass: "px-4 py-2 bg-blue-500 text-white rounded",
    attrs: {
      "href": "/profile/admin"
    }
  }, [_vm._v("Votre profile ( " + _vm._s(_vm.user.username) + ")")]) : _vm._e(), _vm._v(" "), _c('a', {
    staticClass: "px-4 py-2 bg-blue-500 text-red rounded cursor-pointer",
    on: {
      "click": _vm.logout
    }
  }, [_vm._v("Deconnexion")])]), _vm._v(" "), _c('br'), _c('br'), _vm._v(" "), _c('h2', {
    staticClass: "text-lg sm:text-xl md:text-4xl text-neutral-800"
  }, [_c('span', {
    staticClass: "text-header-gradient-big"
  }, [_vm._v("Vos blogs / articles publiés")])]), _vm._v(" "), _vm.blogs && _vm.blogs.length > 0 ? _c('div', {
    staticClass: "flex flex-wrap items-center justify-center"
  }, _vm._l(_vm.blogs, function (blogItem) {
    return _c('div', {
      key: blogItem.id,
      staticClass: "relative group"
    }, [_c('LandingBlog', {
      attrs: {
        "blog": blogItem
      },
      on: {
        "open-blog": function ($event) {
          return _vm.showSingleBlog(blogItem);
        }
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "absolute top-2 right-2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
    }, [_c('button', {
      staticClass: "bg-blue-500 text-white p-1 rounded-full",
      on: {
        "click": function ($event) {
          return _vm.editItem('blog', blogItem.blogRoute);
        }
      }
    }, [_c('PencilIcon', {
      attrs: {
        "size": 20
      }
    })], 1), _vm._v(" "), _c('button', {
      staticClass: "bg-red-500 text-white p-1 rounded-full",
      on: {
        "click": function ($event) {
          return _vm.deleteItem('blog', blogItem.id);
        }
      }
    }, [_c('TrashCanIcon', {
      attrs: {
        "size": 20
      }
    })], 1)])], 1);
  }), 0) : _c('div', {
    staticClass: "flex flex-wrap items-center justify-center"
  }, [_c('div', {
    staticClass: "px-6 py-4 bg-gray-100 flex items-center"
  }, [_vm._v("\n            Pas de post?. Cliquez sur le bouton\n            "), _c('base-button', {
    staticClass: "w-6 h-6 mt-0 mr-1 ml-1 bg-gradient-to-r from-[#468ef9] to-[#030a3c] text-white rounded-full flex items-center justify-center relative"
  }, [_c('PlusIcon', {
    attrs: {
      "size": 14
    }
  })], 1), _vm._v("\n            au dessus.\n          ")], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "w-full px-8 sm:px-0 my-0 py-0 flex flex-col items-center justify-center space-y-4 text-center"
  }, [_c('h2', {
    staticClass: "text-lg sm:text-xl md:text-4xl text-neutral-800"
  }, [_c('span', {
    staticClass: "text-header-gradient-big"
  }, [_vm._v("Vos opportunités publiées")])]), _vm._v(" "), _vm.opportunities && _vm.opportunities.length > 0 ? _c('div', {
    staticClass: "flex flex-wrap items-center justify-center"
  }, _vm._l(_vm.opportunities, function (opportunityItem) {
    return _c('div', {
      key: opportunityItem.id,
      staticClass: "relative group"
    }, [_c('LandingBlog', {
      attrs: {
        "blog": opportunityItem
      },
      on: {
        "open-blog": function ($event) {
          return _vm.showSingleOpportunity(opportunityItem);
        }
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "absolute top-2 right-2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
    }, [_c('button', {
      staticClass: "bg-blue-500 text-white p-1 rounded-full",
      on: {
        "click": function ($event) {
          return _vm.editItem('blog', opportunityItem.blogRoute);
        }
      }
    }, [_c('PencilIcon', {
      attrs: {
        "size": 20
      }
    })], 1), _vm._v(" "), _c('button', {
      staticClass: "bg-red-500 text-white p-1 rounded-full",
      on: {
        "click": function ($event) {
          return _vm.deleteItem('blog', opportunityItem.id);
        }
      }
    }, [_c('TrashCanIcon', {
      attrs: {
        "size": 20
      }
    })], 1)])], 1);
  }), 0) : _c('div', {
    staticClass: "flex flex-wrap items-center justify-center"
  }, [_c('div', {
    staticClass: "px-6 py-4 bg-gray-100 flex items-center"
  }, [_vm._v("\n            Pas de post?. Cliquez sur le bouton\n            "), _c('base-button', {
    staticClass: "w-6 h-6 mt-0 mr-1 ml-1 bg-gradient-to-r from-[#468ef9] to-[#030a3c] text-white rounded-full flex items-center justify-center relative"
  }, [_c('PlusIcon', {
    attrs: {
      "size": 14
    }
  })], 1), _vm._v("\n            au dessus.\n          ")], 1)])])]), _vm._v(" "), _c('br'), _c('br'), _c('br'), _c('br'), _c('br'), _c('br'), _c('br'), _c('br')])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/admin/index.vue?vue&type=template&id=f78dd1c2

// EXTERNAL MODULE: ./mixins/aos.js
var aos = __webpack_require__(11);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/index.vue?vue&type=script&lang=js

/* harmony default export */ var adminvue_type_script_lang_js = ({
  name: 'user-component',
  layout: 'user',
  mixins: [aos["a" /* default */]],
  data() {
    return {
      year: `${new Date().toLocaleString('en-us', {
        year: 'numeric'
      })}`,
      isLoading: true,
      opportunities: [],
      blogs: [],
      user: []
    };
  },
  async beforeRouteEnter(to, from, next) {
    // Check if the page is being reloaded
    const isReload = from.name === null;
    if (isReload) {
      // Redirect to /u if the page is being reloaded
      next('/u');
    } else {
      next();
    }
  },
  async asyncData({
    app
  }) {
    try {
      let storedBarrierDetails = null;
      if (typeof sessionStorage !== 'undefined') {
        storedBarrierDetails = sessionStorage.getItem('token');
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

      // Update loading state to false
      console.log('response data:', response.data);
      return {
        user: userdetails,
        opportunities: useropportunities,
        blogs: userblogs,
        isLoading: false
      };
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle errors if needed
      return {
        details: null,
        isLoading: false
      };
    }
  },
  methods: {
    // logout 
    logout() {
      if (typeof sessionStorage !== 'undefined') {
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('username');
        sessionStorage.removeItem('email');
        sessionStorage.removeItem('name');
        if (typeof localStorage !== 'undefined') {
          localStorage.removeItem('token');
          localStorage.removeItem('username');
          localStorage.removeItem('email');
          localStorage.removeItem('name');
        }
        this.$router.push('/u');
      }
    },
    showSingleBlog(blog) {
      this.$router.push({
        path: `blogs/${blog.blogRoute}`
      });
    },
    showSingleOpportunity(opportunity) {
      this.$router.push({
        path: `opportunities/${opportunity.blogRoute}`
      });
    },
    editItem(category, route) {
      this.$router.push({
        path: `/edit?category=${category}&route=${route}`
      });
    },
    async deleteItem(category, blogId) {
      if (confirm("Voulez vous vraiment supprimer cette publication ?")) {
        try {
          let storedBarrierDetails = null;
          if (typeof sessionStorage !== 'undefined') {
            storedBarrierDetails = sessionStorage.getItem('token');
          }
          const response = await this.$axios.delete(`/${category}/delete/${blogId}`, {
            headers: {
              Authorization: `Bearer ${storedBarrierDetails}`
            }
          });
          if (response.data.status_code == 200) {
            this.blogs = this.blogs.filter(blog => blog.id !== blogId);
            // display alert for success
            alert("Votre publication a été supprimée avec succès.");
            // refresh the page
            this.$router.go();
          } else {
            // display alert for failure
            alert("Echec lors de la supression de la publication.");
          }
        } catch (error) {
          console.error("Failed to delete the post :", error);
        }
      }
    }
  }
});
// CONCATENATED MODULE: ./pages/admin/index.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_adminvue_type_script_lang_js = (adminvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./pages/admin/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_adminvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4c33a549"
  
)

/* harmony default export */ var admin = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {LandingBlog: __webpack_require__(88).default,BaseButton: __webpack_require__(18).default})


/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/opp.2d8e158.jpg";

/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/default.526b6e3.jpg";

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/landing/Blog.vue?vue&type=template&id=f1647522
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('client-only', [_c('div', {
    staticClass: "max-w-[520px] xl:max-w-[580px] bg-white shadow-md rounded-lg overflow-hidden transition-transform duration-500 hover:scale-105 hover:shadow-xl ml-7 mr-7 mt-10 mb-10",
    on: {
      "click": _vm.handleClick
    }
  }, [_vm.opportunity == true ? _c('span', [_c('img', {
    staticClass: "w-full h-48 object-cover rounded-t-lg transition-opacity duration-500 ease-in-out hover:opacity-80",
    attrs: {
      "src": __webpack_require__(86)
    }
  })]) : _c('span', [_vm.blog.imageUrl != null && _vm.blog.imageUrl != '' ? _c('img', {
    staticClass: "w-full h-48 object-cover rounded-t-lg transition-opacity duration-500 ease-in-out hover:opacity-80",
    attrs: {
      "src": _vm.blog.imageUrl
    }
  }) : _c('img', {
    staticClass: "w-full h-48 object-cover rounded-t-lg transition-opacity duration-500 ease-in-out hover:opacity-80",
    attrs: {
      "src": __webpack_require__(87)
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "text-container max-w-[385px] mx-auto"
  }, [_c('h4', {
    staticClass: "text-xl text-neutral-800 font-semibold hover:text-blue-500 transition duration-300"
  }, [_vm._v(_vm._s(_vm.blog.blogTitle))]), _vm._v(" "), _c('p', {
    staticClass: "text-sm text-gray-700 leading-relaxed"
  }, [_vm._v("\n        " + _vm._s(_vm.blog.blogCaption) + "\n      ")])])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/landing/Blog.vue?vue&type=template&id=f1647522

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/landing/Blog.vue?vue&type=script&lang=js
/* harmony default export */ var Blogvue_type_script_lang_js = ({
  name: 'LandingBlog',
  props: {
    blog: {
      type: Object,
      required: true
    },
    opportunity: {
      type: Object,
      required: false
    }
  },
  methods: {
    handleClick() {
      this.$emit('open-blog', this.blog);
    }
  }
});
// CONCATENATED MODULE: ./components/landing/Blog.vue?vue&type=script&lang=js
 /* harmony default export */ var landing_Blogvue_type_script_lang_js = (Blogvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/landing/Blog.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  landing_Blogvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "5de25a95"
  
)

/* harmony default export */ var Blog = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map