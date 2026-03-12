import { a as aosMixin } from "./aos-DgaNNj1M.js";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "aos";
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
  name: "reset-component",
  layout: "user",
  mixins: [aosMixin],
  data() {
    return {
      step: 1,
      email: "",
      token: "",
      password: "",
      confirmPassword: "",
      success: false,
      verified: false
    };
  },
  methods: {
    async sendResetRequest() {
      try {
        const response = await this.$axios.post("/user/password/request-reset", { email: this.email });
        if (response.data.status_code === 200) {
          this.verified = true;
          this.step = 2;
        } else {
          alert("Invalid or unknown email address! Please enter a valid email.");
        }
      } catch (error) {
        console.error("Error sending reset request", error);
      }
    },
    async verifyCode() {
      try {
        const response = await this.$axios.post("/user/password/verify-token", { token: this.token, email: this.email });
        if (response.data.status_code === 200) {
          this.step = 3;
        } else if (response.data.status_code === 401) {
          alert("Expired Code! Please enter a valid code.");
          this.step = 1;
        } else {
          alert("Invalid code! Please enter a valid code.");
          this.$router.push("/password-reset");
        }
      } catch (error) {
        console.error("Error sending reset request", error);
      }
    },
    async resetPassword() {
      this.verified = false;
      if (this.password !== this.confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
      try {
        const response = await this.$axios.post("/user/password/reset", {
          token: this.token,
          email: this.email,
          password: this.password
        });
        if (response.data.status_code === 200) {
          this.success = true;
          setTimeout(() => {
            this.$router.push("/u");
          }, 7e3);
        } else {
          alert("Unexpected error! Please try again.");
        }
      } catch (error) {
        console.error("Error resetting password", error);
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto px2 py-4" }, _attrs))}><div class="max-w-md mx-auto bg-white p-3 rounded-lg shadow-md"><h2 class="text-xl font-semibold text-center mb-4">Reset Your Password</h2>`);
  if ($data.success) {
    _push(`<div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert"><strong class="font-bold text-green-700">Success!</strong> Password reset successful! <hr><span class="block sm:inline"><a href="/u"><b>Click here to login</b></a></span></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.verified) {
    _push(`<div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert"><strong class="font-bold text-green-700">Verification!</strong><span class="block sm:inline">Please check your inbox/spam folder. Reset code sent to your email. Validity:1h</span></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.step == 1) {
    _push(`<form><label class="block mb-2">Enter your email</label><input${ssrRenderAttr("value", $data.email)} type="email" required class="w-full p-2 border rounded"><button type="submit" class="mt-4 w-full bg-blue-800 text-white p-2 rounded">Request Password Reset</button></form>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.step == 2) {
    _push(`<form><label class="block mb-2">Enter 6-digit code</label><input${ssrRenderAttr("value", $data.token)} type="text" maxlength="6" required class="w-full p-2 border rounded"><button type="submit" class="mt-4 w-full bg-blue-800 text-white p-2 rounded">Verify Code</button></form>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.step == 3) {
    _push(`<form><label class="block mb-2">New Password</label><input${ssrRenderAttr("value", $data.password)} type="password" required class="w-full p-2 border rounded"><label class="block mb-2 mt-2">Confirm Password</label><input${ssrRenderAttr("value", $data.confirmPassword)} type="password" required class="w-full p-2 border rounded"><button type="submit" class="mt-4 w-full bg-blue-800 text-white p-2 rounded">Reset Password</button></form>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/password-reset/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  index as default
};
//# sourceMappingURL=index-BWq6Zn9T.js.map
