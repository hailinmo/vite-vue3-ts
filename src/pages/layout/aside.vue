<template>
  <n-menu
    v-model:value="activeKey"
    :collapsed="collapsed"
    :collapsed-width="64"
    :collapsed-icon-size="22"
    :options="menuOptions"
    @update:value="handleClick"
  />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { menuRoutes } from '@/router/index'
import { useRouter, useRoute } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import type { MenuOption } from 'naive-ui'
export default defineComponent({
  props: {
    collapsed: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const activeKey = ref<string>('home')
    const router = useRouter()
    const route = useRoute()

    activeKey.value = route.name?.toString() || 'home'

    const handleClick = (key: string) => {
      activeKey.value = key
      router.push({ name: key })
    }

    const formatMenu = (routes: RouteRecordRaw[]): Array<MenuOption> => {
      return routes.map((route) => {
        const children = route.children
        const item: MenuOption = {
          label: route.meta?.title as string,
          key: route.name as string,
        }
        if (children && children.length) {
          item.children = formatMenu(children)
        }
        return item
      })
    }

    const menuOptions = formatMenu(menuRoutes)

    return {
      activeKey,
      menuOptions,
      handleClick,
    }
  },
})
</script>

<style scoped></style>
