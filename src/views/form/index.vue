<template>
  <div>
    <n-card>
      <n-form>
        <n-form-item
          label="飞机场的"
          :validation-status="inputValidationStatus"
          :feedback="inputFeedback"
        >
          <n-input v-model:value="inputValue" clearable />
        </n-form-item>
        <n-form-item
          label="飞机场的"
          :validation-status="inputNumberValidationStatus"
          :feedback="inputNumberFeedback"
        >
          <n-input-number v-model:value="inputNumberValue" />
        </n-form-item>
        <n-form-item
          label="飞机场的"
          :validation-status="selectValidationStatus"
          :feedback="selectFeedback"
        >
          <n-select
            v-model:value="selectValue"
            :options="selectOptions"
            clearable
          />
        </n-form-item>
      </n-form>
    </n-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    function createStatus(value: string) {
      switch (value) {
        case '10: 30':
          return undefined
        case '10: 29':
          return 'warning'
        default:
          return 'error'
      }
    }

    function createFeedback(value: string) {
      switch (value) {
        case '10: 30':
          return '十点半的飞机已经到了'
        case '10: 29':
          return '虽然差不多了，请把时间调到 10: 30'
        default:
          return '请把时间调到 10: 30'
      }
    }
    return {
      createStatus,
      createFeedback,
    }
  },
})
</script>

<style scoped></style>
