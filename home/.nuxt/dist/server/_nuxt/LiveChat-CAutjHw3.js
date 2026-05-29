import { _ as _export_sfc, f as __nuxt_component_0 } from "../server.mjs";
import { useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
const _sfc_main = {
  name: "LiveChat",
  data() {
    return {
      isOpen: false,
      step: "choose",
      selectedChannel: null,
      message: "",
      subject: "",
      whatsappNumber: "243995277023",
      emailAddress: "direction@beatexpertise.com"
    };
  },
  methods: {
    selectChannel(channel) {
      this.selectedChannel = channel;
      this.step = "message";
      this.message = "";
      this.subject = "";
    },
    sendMessage() {
      if (!this.message.trim()) return;
      if (this.selectedChannel === "whatsapp") {
        const encodedMessage = encodeURIComponent(this.message);
        (void 0).open(`https://wa.me/${this.whatsappNumber}?text=${encodedMessage}`, "_blank", "noopener,noreferrer");
      } else {
        const encodedSubject = encodeURIComponent(this.subject || "Contact depuis le site BEAT Expertise");
        const encodedBody = encodeURIComponent(this.message);
        (void 0).location.href = `mailto:${this.emailAddress}?subject=${encodedSubject}&body=${encodedBody}`;
      }
      this.message = "";
      this.subject = "";
      this.step = "choose";
      this.isOpen = false;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ClientOnly = __nuxt_component_0;
  _push(ssrRenderComponent(_component_ClientOnly, _attrs, {}, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/LiveChat.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-6f177170"]]);
export {
  __nuxt_component_2 as _
};
//# sourceMappingURL=LiveChat-CAutjHw3.js.map
