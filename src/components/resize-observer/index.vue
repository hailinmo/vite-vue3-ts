<script lang="ts">
import { defineComponent, PropType, renderSlot, warn } from 'vue'
import { addListener, removeListener } from 'resize-detector'
export default defineComponent({
  props: {
    onResize: {
      type: Function as PropType<(e: HTMLElement) => void>,
      default: (e: HTMLElement) => {
        return e
      },
    },
  },
  setup(props) {
    return {
      registered: false,
      onResizeObverser(entry: HTMLElement) {
        const { onResize } = props
        if (onResize !== undefined) onResize(entry)
      },
    }
  },
  mounted() {
    const el = this.$el as HTMLElement | undefined
    if (el === undefined) {
      warn('$el does not exits.')
      return
    }
    if (el.nextElementSibling !== el.nextSibling) {
      // 说明可能不是一个元素节点；
      warn('$el can not be observed (it may be a text node).')
      return
    }
    if (el.nextElementSibling !== null) {
      addListener(this.$el.nextElementSibling, this.onResizeObverser)
      this.registered = true
    }
  },
  beforeUnmount() {
    if (this.registered) {
      removeListener(this.$el.nextElementSibling, this.onResizeObverser)
    }
  },
  render() {
    return renderSlot(this.$slots, 'default')
  },
})
</script>

<style scoped></style>
