import { ssrRenderAttrs, ssrRenderComponent } from 'file:///Volumes/T7/Git/test-cc-main/node_modules/vue/server-renderer/index.mjs';
import { useSSRContext, defineComponent, resolveComponent } from 'file:///Volumes/T7/Git/test-cc-main/node_modules/vue/index.mjs';
import { _ as _export_sfc } from '../server.mjs';
import { _ as _sfc_main$2 } from './ui-eb120fbc.mjs';
import 'file:///Volumes/T7/Git/test-cc-main/node_modules/ofetch/dist/node.mjs';
import 'file:///Volumes/T7/Git/test-cc-main/node_modules/hookable/dist/index.mjs';
import 'file:///Volumes/T7/Git/test-cc-main/node_modules/unctx/dist/index.mjs';
import 'file:///Volumes/T7/Git/test-cc-main/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Volumes/T7/Git/test-cc-main/node_modules/h3/dist/index.mjs';
import 'file:///Volumes/T7/Git/test-cc-main/node_modules/ufo/dist/index.mjs';
import 'file:///Volumes/T7/Git/test-cc-main/node_modules/@unhead/ssr/dist/index.mjs';
import 'file:///Volumes/T7/Git/test-cc-main/node_modules/unhead/dist/index.mjs';
import 'file:///Volumes/T7/Git/test-cc-main/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Volumes/T7/Git/test-cc-main/node_modules/defu/dist/defu.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///Volumes/T7/Git/test-cc-main/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file:///Volumes/T7/Git/test-cc-main/node_modules/destr/dist/index.mjs';
import 'file:///Volumes/T7/Git/test-cc-main/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Volumes/T7/Git/test-cc-main/node_modules/scule/dist/index.mjs';
import 'file:///Volumes/T7/Git/test-cc-main/node_modules/klona/dist/index.mjs';
import 'file:///Volumes/T7/Git/test-cc-main/node_modules/ohash/dist/index.mjs';
import 'file:///Volumes/T7/Git/test-cc-main/node_modules/unstorage/dist/index.mjs';
import 'file:///Volumes/T7/Git/test-cc-main/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Volumes/T7/Git/test-cc-main/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Volumes/T7/Git/test-cc-main/node_modules/pathe/dist/index.mjs';

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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/shop/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-04ed3df4"]]);

export { index as default };
//# sourceMappingURL=index-e4c9c418.mjs.map
