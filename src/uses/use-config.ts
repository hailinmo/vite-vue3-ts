import { provide, reactive, ref, watch } from 'vue'
import { zhCN, dateZhCN, NDateLocale, NLocale, darkTheme } from 'naive-ui'
import { BuiltInGlobalTheme } from 'naive-ui/lib/themes/interface'

export interface IConfig {
  locale: string | null
  theme: null | 'dark'
  changeTheme: () => void
  changeLang: () => void
}

function useConfig() {
  const dateLocale = ref<NDateLocale | null>(dateZhCN)
  const locale = ref<NLocale | null>(zhCN)
  const theme = ref<BuiltInGlobalTheme | null>(null)

  const config = reactive<IConfig>({
    locale: 'CN',
    theme: null,
    changeTheme: () => {
      config.theme = config.theme ? null : 'dark'
    },
    changeLang: () => {
      config.locale = config.locale ? null : 'CN'
    },
  })

  watch(
    () => config.theme,
    () => {
      if (config.theme) {
        theme.value = darkTheme
      } else {
        theme.value = null
      }
    }
  )

  watch(
    () => config.locale,
    () => {
      if (config.locale === 'CN') {
        dateLocale.value = dateZhCN
        locale.value = zhCN
      } else {
        dateLocale.value = null
        locale.value = null
      }
    }
  )

  provide('config', config)

  return {
    dateLocale,
    locale,
    theme,
  }
}

export default useConfig
