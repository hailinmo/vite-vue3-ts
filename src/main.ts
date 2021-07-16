import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import naiveui from '@/components/naive-ui'

import resize from '@/directive/resize'

import './styles/index.less'
import './styles/tailwind.css'

const app = createApp(App)

resize(app)

app.use(naiveui)
app.use(router)
app.mount('#app')
