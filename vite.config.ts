import { resolve } from 'path'
import WindiCSS from 'vite-plugin-windicss'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// import viteExample from './vite-plugin-example'

/**
 * @type {import('vite').UserConfig}
 */
const config = {
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, 'src') }],
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
    modules: {
      localsConvention: 'camelCaseOnly',
    },
  },
  plugins: [vue(), vueJsx(), WindiCSS()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vue: ['vue', 'vue-router'],
          naive: ['naive-ui'],
        },
      },
    },
  },
}

export default config
