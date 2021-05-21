import { App } from 'vue'

import DatePicker from 'ant-design-vue/lib/date-picker'
// import 'ant-design-vue/lib/date-picker/style/css'

import Layout from 'ant-design-vue/lib/layout'
import Sider from 'ant-design-vue/lib/slider'
// import 'ant-design-vue/lib/layout/style'

const components = [DatePicker, Layout, Sider]

export default (app: App<Element>) => {
  components.forEach((item) => {
    app.use(item)
  })
}
