<template>
  <div class="h-full flex items-center header-box justify-between">
    <div>Logo</div>
    <n-space align="center">
      <n-button text @click="changeLang">
        {{ theme.locale ? 'En' : '中文' }}
      </n-button>
      <n-button text @click="changeTheme">
        {{ theme.theme ? '浅色' : '深色' }}
      </n-button>
      <n-button text style="width: 24px">
        <template #icon>
          <n-icon :size="24">
            <PersonCircleOutline />
          </n-icon>
        </template>
      </n-button>
    </n-space>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'
import { PersonCircleOutline } from '@vicons/ionicons5'
import { IConfig } from '@/uses/use-config'
export default defineComponent({
  components: {
    PersonCircleOutline,
  },
  setup() {
    const theme = inject<IConfig>('config') as IConfig
    const changeTheme = () => {
      theme.changeTheme()
    }
    const changeLang = () => {
      theme.changeLang()
    }
    return {
      changeTheme,
      changeLang,
      theme,
    }
  },
})
</script>

<style scoped>
.header-box {
  padding: 0 24px;
}
</style>
