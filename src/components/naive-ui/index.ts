import { App } from 'vue'

import {
  NDataTable,
  NButton,
  NLayout,
  NLayoutHeader,
  NLayoutSider,
  NLayoutContent,
  NLayoutFooter,
  NMenu,
  NConfigProvider,
  NSpace,
  NIcon,
  NCard,
  NGrid,
  NGi,
  NSkeleton,
  NTabs,
  NTabPane,
  NDatePicker,
  NDropdown,
  NRadio,
  NRadioButton,
  NRadioGroup,
  NResult,
} from 'naive-ui'

const components = [
  NDataTable,
  NButton,
  NLayout,
  NLayoutHeader,
  NLayoutSider,
  NLayoutContent,
  NLayoutFooter,
  NMenu,
  NConfigProvider,
  NSpace,
  NIcon,
  NCard,
  NGrid,
  NGi,
  NSkeleton,
  NTabs,
  NTabPane,
  NDatePicker,
  NDropdown,
  NRadio,
  NRadioButton,
  NRadioGroup,
  NResult,
]

export default (app: App<Element>) => {
  console.log('注册UI组件')
  components.forEach((item) => {
    app.component(`N${item.name}`, item)
  })
}
