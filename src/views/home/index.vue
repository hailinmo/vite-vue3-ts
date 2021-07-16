<template>
  <div>
    <n-grid x-gap="12" :cols="4" class="mb-4">
      <n-gi>
        <n-card size="small">
          <n-skeleton text :repeat="6" />
        </n-card>
      </n-gi>
      <n-gi>
        <n-card size="small">
          <n-skeleton text :repeat="6" />
        </n-card>
      </n-gi>
      <n-gi>
        <n-card size="small">
          <n-skeleton text :repeat="6" />
        </n-card>
      </n-gi>
      <n-gi>
        <n-card size="small">
          <n-skeleton text :repeat="6" />
        </n-card>
      </n-gi>
    </n-grid>
    <n-card content-style="padding: 0;" class="mb-4">
      <n-tabs
        type="line"
        size="large"
        :tabs-padding="20"
        pane-style="padding: 20px;box-sizing:border-box"
      >
        <n-tab-pane name="wenti" tab="Wenti">
          <n-skeleton text :repeat="6" />
        </n-tab-pane>
        <n-tab-pane name="morax" tab="Morax">
          <n-skeleton text :repeat="6" />
        </n-tab-pane>
        <n-tab-pane name="jayhou" tab="Jayhou">
          <n-skeleton text :repeat="6" />
        </n-tab-pane>
        <template #suffix>
          <div class="mr-4">
            <n-date-picker
              v-model:value="range"
              type="datetimerange"
              clearable
            />
          </div>
        </template>
      </n-tabs>
    </n-card>
    <n-grid x-gap="12" :cols="2" class="mb-4">
      <n-gi>
        <n-card size="small" segmented header-style="height:52px">
          <template #header> #header </template>
          <template #header-extra>
            <n-dropdown
              trigger="hover"
              :options="options"
              @select="handleSelect"
            >
              <n-button text>
                <template #icon>
                  <n-icon>
                    <MoreHorizOutlined />
                  </n-icon>
                </template>
              </n-button>
            </n-dropdown>
          </template>
          <n-skeleton text :repeat="6" />
        </n-card>
      </n-gi>
      <n-gi>
        <n-card size="small" segmented header-style="height:52px">
          <template #header> #header </template>
          <template #header-extra>
            <n-radio-group
              v-model:value="radioValue"
              name="radiobuttongroup1"
              size="small"
            >
              <n-radio-button
                v-for="song in songs"
                :key="song.value"
                :value="song.value"
              >
                {{ song.label }}
              </n-radio-button>
            </n-radio-group>
          </template>
          <n-skeleton text :repeat="6" />
        </n-card>
      </n-gi>
    </n-grid>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { MoreHorizOutlined } from '@vicons/material'
export default defineComponent({
  components: {
    MoreHorizOutlined,
  },
  setup() {
    const range = ref<number[]>([
      Number(new Date()) - 1000 * 60 * 10,
      Number(new Date()),
    ])

    const options = [
      {
        label: 'AA',
        key: 1,
      },
      {
        label: 'BB',
        key: 2,
      },
    ]

    const handleSelect = (key: number) => {
      console.log(key)
    }

    const songs = [
      { label: 'AA', value: 1 },
      { label: 'BB', value: 2 },
      { label: 'CC', value: 3 },
    ]
    const radioValue = ref<number | null>(1)

    return {
      range,
      options,
      handleSelect,
      songs,
      radioValue,
    }
  },
})
</script>

<style scoped></style>
