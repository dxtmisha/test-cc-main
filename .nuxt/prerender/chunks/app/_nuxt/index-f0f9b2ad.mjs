import { useSSRContext, defineComponent } from 'file:///Volumes/T7/Git/test-cc-main/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'file:///Volumes/T7/Git/test-cc-main/node_modules/vue/server-renderer/index.mjs';
import { _ as _sfc_main$1 } from './ui-eb120fbc.mjs';
import { _ as _export_sfc } from '../server.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-4fb49649><div class="cc-main" data-v-4fb49649>Is test Main!</div>`);
      _push(ssrRenderComponent(_sfc_main$1, { label: "is main" }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4fb49649"]]);

export { index as default };
//# sourceMappingURL=index-f0f9b2ad.mjs.map
