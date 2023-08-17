import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "/Volumes/T7/Git/test-cc-main/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}