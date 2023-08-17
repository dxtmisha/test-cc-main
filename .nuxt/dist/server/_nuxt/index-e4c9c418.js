import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { useSSRContext, defineComponent, resolveComponent } from "vue";
import { _ as _export_sfc } from "../server.mjs";
import { _ as _sfc_main$2 } from "./ui-eb120fbc.js";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "vue-router";
import "h3";
import "ufo";
import "devalue";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "defu";
import "destr";
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}>test</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CcTest.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "ShopPage"
  },
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_cc_test = __nuxt_component_0;
      const _component_ui_cc_test = resolveComponent("ui-cc-test");
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-04ed3df4><div class="cc-main" data-v-04ed3df4>Is test Shop!</div>`);
      _push(ssrRenderComponent(_sfc_main$2, { label: "is main" }, null, _parent));
      _push(ssrRenderComponent(_component_cc_test, null, null, _parent));
      _push(ssrRenderComponent(_component_ui_cc_test, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_04ed3df4_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/shop/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-04ed3df4"]]);
export {
  index as default
};
