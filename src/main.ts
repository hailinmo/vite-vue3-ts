import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'

// import antVue from './components/ant-vue/index'

import Antd from 'ant-design-vue'
if (import.meta.env.DEV) {
  import('ant-design-vue/dist/antd.css')
}

import './styles/index.less'
import './styles/tailwind.css'

const app = createApp(App)

// antVue(app) // ant组件注册

app.use(Antd)
app.use(router)
app.mount('#app')
