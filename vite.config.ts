import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
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
  },
  plugins: [vue()],
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
