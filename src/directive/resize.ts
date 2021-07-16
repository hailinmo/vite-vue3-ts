import { App } from 'vue'
import { addListener, removeListener } from 'resize-detector'
export default (app: App) => {
  app.directive('resize', {
    mounted(el, binding) {
      const { value } = binding
      if (typeof value === 'function') {
        addListener(el, binding.value)
      }
    },
    beforeUnmount(el, binding) {
      removeListener(el, binding.value)
    },
  })
}
