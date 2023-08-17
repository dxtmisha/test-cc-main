// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/testMain/'
  },
  devtools: { enabled: true },
  vite: {
    build: {
      sourcemap: false,
      rollupOptions: {
        output: {
          manualChunks: function manualChunks(id, info) {
            if (id.match('node_modules/ui/')) {
              return 'ui';
            }
          }
        }
      }
    }
  }
})
