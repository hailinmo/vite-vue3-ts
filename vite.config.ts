import { resolve } from 'path'
import styleImport from 'vite-plugin-style-import'
import vue from '@vitejs/plugin-vue'

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
  plugins: [
    vue(),
    styleImport({
      libs: [
        {
          libraryName: 'ant-design-vue',
          esModule: true,
          resolveStyle: (name) => {
            return `ant-design-vue/es/${name}/style/index`
          },
        },
        {
          libraryName: 'antd',
          esModule: true,
          resolveStyle: (name) => {
            return `antd/es/${name}/style/index`
          },
        },
        {
          libraryName: 'vant',
          esModule: true,
          resolveStyle: (name) => {
            return `vant/es/${name}/style`
          },
        },
        {
          libraryName: 'element-plus',
          resolveStyle: (name) => {
            return `element-plus/lib/theme-chalk/${name}.css`
          },
          resolveComponent: (name) => {
            return `element-plus/lib/${name}`
          },
        },
      ],
    }),
  ],
}

export default config
