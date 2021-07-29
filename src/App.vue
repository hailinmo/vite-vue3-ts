<template>
  <n-config-provider
    :locale="locale"
    :date-locale="dateLocale"
    :theme="theme"
    :theme-overrides="themeOverrides"
    class="h-full"
  >
    <router-view />
  </n-config-provider>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useConfig from '@/uses/useConfig'
import { GlobalThemeOverrides } from 'naive-ui'
export default defineComponent({
  name: 'App',
  setup() {
    const { dateLocale, locale, theme } = useConfig()
    const themeOverrides: GlobalThemeOverrides = {
      common: {
        primaryColor: '#3F7FB7FF',
        primaryColorHover: '#3080BCFF',
        primaryColorPressed: '#21658FFF',
        primaryColorSuppl: '#2280A2FF',
      },
    }
    return {
      dateLocale,
      locale,
      theme,
      themeOverrides,
    }
  },
})
</script>

<style>
#app {
  height: 100%;
}
</style>
