<template>
  <div class="a-scroll">
    <ResizeObserver :on-size="containerResize">
      <div ref="containerRef" class="a-scroll-container" @scroll="handleScroll">
        <div ref="contentRef" class="a-scroll-content">
          <slot></slot>
        </div>
      </div>
      <div ref="yRailRef" class="a-scroll--vertical">
        <div
          :style="{ height: yBarSize, top: yBarTop }"
          class="a-scroll-vertical-bar"
          @mousedown="handleYScrollMouseDown"
        ></div>
      </div>
    </ResizeObserver>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, onMounted } from 'vue'
import ResizeObserver from '../resize-observer/index.vue'
export default defineComponent({
  components: {
    ResizeObserver,
  },
  setup() {
    // dom ref
    const containerRef = ref<HTMLElement | null>(null)
    const contentRef = ref<HTMLElement | null>(null)
    const yRailRef = ref<HTMLElement | null>(null)

    const containerScrollTopRef = ref(0)
    const containerHeightRef = ref(0)
    const contentHeightRef = ref(0)
    const yRailHeightRef = ref(0)

    let yBarPressed = false

    function sync() {
      const { value: container } = containerRef
      const { value: content } = contentRef
      const { value: yRail } = yRailRef
      containerHeightRef.value = container ? container.offsetHeight : 0
      contentHeightRef.value = content ? content.offsetHeight : 0
      yRailHeightRef.value = yRail ? yRail.offsetHeight : 0
    }

    const yBarSizeRef = computed(() => {
      const { value: yRailHeight } = yRailHeightRef
      const { value: contentHeight } = contentHeightRef
      return (yRailHeight / contentHeight) * yRailHeight
    })

    const yBarSizePxRef = computed(() => {
      return `${yBarSizeRef.value}px `
    })

    const yBarTopRef = computed(() => {
      const { value: containerHeight } = containerHeightRef
      const { value: containerScrollTop } = containerScrollTopRef
      const { value: contentHeight } = contentHeightRef
      const { value: yRailSize } = yRailHeightRef
      const { value: yBarSize } = yBarSizeRef

      if (
        containerHeight === null ||
        contentHeight === null ||
        yRailSize === null
      ) {
        return 0
      } else {
        return (
          (containerScrollTop / (contentHeight - containerHeight)) *
          (yRailSize - yBarSize)
        )
      }
    })

    const yBarTopPxRef = computed(() => {
      return `${yBarTopRef.value}px`
    })

    function handleYScrollMouseDown(e: MouseEvent): void {
      e.preventDefault()
      e.stopPropagation()
      yBarPressed = true
      const memoYTop = containerScrollTopRef.value
      const memoMouseY = e.clientY
      function handleYScrollMouseMove(e: MouseEvent): void {
        e.preventDefault()
        e.stopPropagation()
        if (!yBarPressed) return
        const { value: containerHeight } = containerHeightRef
        const { value: contentHeight } = contentHeightRef
        const { value: yBarSize } = yBarSizeRef
        // 移动鼠标，修改内容滚动；
        const dY = e.clientY - memoMouseY
        const dScrollTop =
          (dY * (contentHeight - containerHeight)) /
          (containerHeight - yBarSize)
        const toScrollTopUpperBound = contentHeight - containerHeight
        let toScrollTop = memoYTop + dScrollTop
        toScrollTop = Math.min(toScrollTopUpperBound, toScrollTop)
        toScrollTop = Math.max(toScrollTop, 0)

        const { value: container } = containerRef
        if (container) {
          container.scrollTop = toScrollTop
        }
      }
      function handleYScrollMouseUp(e: MouseEvent): void {
        e.preventDefault()
        e.stopPropagation()
        document.removeEventListener('mousemove', handleYScrollMouseMove)
        document.removeEventListener('mouseup', handleYScrollMouseUp)
        yBarPressed = false
      }
      document.addEventListener('mousemove', handleYScrollMouseMove)
      document.addEventListener('mouseup', handleYScrollMouseUp)
    }

    const observer = new MutationObserver(syncScrollState)
    let counter = 1
    const textNode = document.createTextNode(String(counter))
    observer.observe(textNode, { characterData: true })

    const handleScroll = () => {
      // syncScrollState()
      counter = (counter + 1) % 2
      textNode.data = String(counter)
    }

    function syncScrollState(): void {
      const { value: container } = containerRef
      if (container) {
        containerScrollTopRef.value = container.scrollTop
      }
    }

    function containerResize() {
      sync()
    }

    onMounted(() => {
      sync()
    })

    return {
      containerRef,
      contentRef,
      yRailRef,
      yBarSize: yBarSizePxRef,
      yBarTop: yBarTopPxRef,
      containerResize,
      handleYScrollMouseDown,
      handleScroll,
    }
  },
})
</script>

<style lang="less" scoped>
.a-scroll {
  position: relative;
  height: 100%;
  overflow: hidden;
}
.a-scroll-container {
  height: 100%;
  overflow: scroll;
  scrollbar-width: none; /* firefox */
}
.a-scroll-container::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
.a-scroll--vertical {
  position: absolute;
  right: 0;
  top: 2px;
  bottom: 2px;
  background-color: #afafaf;
  width: 10px;
}
.a-scroll-vertical-bar {
  position: absolute;
  background-color: #636363;
  cursor: pointer;
  right: 0;
  width: 10px;
  border-radius: 2px;
  &:hover {
    background-color: #353535;
  }
}
</style>
