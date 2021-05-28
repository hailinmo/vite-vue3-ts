import { App } from 'vue'

import DatePicker from 'ant-design-vue/lib/date-picker'
import Layout from 'ant-design-vue/lib/layout'
import Sider from 'ant-design-vue/lib/slider'

const components = [DatePicker, Layout, Sider]

export default (app: App<Element>) => {
  components.forEach((item) => {
    app.use(item)
  })
}
