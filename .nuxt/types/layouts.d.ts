import { ComputedRef, Ref } from 'vue'
export type LayoutKey = string
declare module "/Volumes/T7/Git/test-cc-main/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}