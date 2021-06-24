<template>
  <n-config-provider
    :locale="locale"
    :date-locale="dateLocale"
    :theme="theme"
    class="h-full"
  >
    <router-view />
  </n-config-provider>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useConfig from '@/uses/use-config'
export default defineComponent({
  name: 'App',
  setup() {
    const { dateLocale, locale, theme } = useConfig()
    return {
      dateLocale,
      locale,
      theme,
    }
  },
})
</script>

<style>
#app {
  height: 100%;
}
</style>
