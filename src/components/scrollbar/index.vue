<template>
  <div
    class="a-scroll"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <ResizeObserver :on-size="containerResize">
      <div ref="containerRef" class="a-scroll-container" @scroll="handleScroll">
        <div ref="contentRef" class="a-scroll-content">
          <slot></slot>
        </div>
      </div>
      <div ref="yRailRef" class="a-scroll--vertical">
        <div
          v-if="isShowYBarRef"
          :style="verticalStyle"
          class="a-scroll-vertical-bar"
          @mousedown="handleYScrollMouseDown"
        ></div>
      </div>
    </ResizeObserver>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
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

    const isShowYBarRef = ref<boolean>(false)

    let yBarPressed = false

    const contentHeight = computed(() => {
      const { value: content } = contentRef
      return content ? content.offsetHeight : 0
    })
    const yRailHeightRef = computed(() => {
      const { value: yRail } = yRailRef
      return yRail ? yRail.offsetHeight : 0
    })

    const verticalStyle = ref({
      width: '5px',
      height: '0px',
      top: '0px',
    })

    const handleMouseEnter = () => {
      showYBar()
    }

    const handleMouseLeave = () => {
      hideYBar()
    }

    function showYBar() {
      isShowYBarRef.value = true
    }

    function hideYBar() {
      isShowYBarRef.value = false
    }

    function handleYScrollMouseDown(e: MouseEvent): void {
      e.preventDefault()
      e.stopPropagation()
      yBarPressed = true
      document.addEventListener('mousemove', handleYScrollMouseMove)
      document.addEventListener('mouseup', handleYScrollMouseUp)
    }

    function handleYScrollMouseMove(e: MouseEvent): void {
      e.preventDefault()
      e.stopPropagation()
      if (!yBarPressed) return
    }
    function handleYScrollMouseUp(e: MouseEvent): void {
      e.preventDefault()
      e.stopPropagation()
      document.removeEventListener('mousemove', handleYScrollMouseMove)
      document.removeEventListener('mouseup', handleYScrollMouseUp)
      yBarPressed = false
    }

    const handleScroll = () => {
      syncScrollState()
    }

    function syncScrollState(): void {
      const scrollTop = containerRef.value?.scrollTop || 0
      const height =
        (yRailHeightRef.value / contentHeight.value) * yRailHeightRef.value
      verticalStyle.value = {
        width: '5px',
        height: `${Math.min(yRailHeightRef.value, height)}px`,
        top: `${(scrollTop / contentHeight.value) * yRailHeightRef.value}px`,
      }
    }
    function containerResize() {
      console.log('resize')
    }

    return {
      containerRef,
      contentRef,
      yRailRef,
      containerResize,
      handleMouseEnter,
      handleMouseLeave,
      handleYScrollMouseDown,
      handleScroll,
      isShowYBarRef,
      verticalStyle,
    }
  },
})
</script>

<style scoped>
.a-scroll {
  position: relative;
  height: 100%;
  overflow: hidden;
}
.a-scroll-container {
  height: 100%;
  overflow: scroll;
  scrollbar-width: none;
}
.a-scroll-container::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
.a-scroll--vertical {
  position: absolute;
  right: 4px;
  top: 2px;
  bottom: 2px;
}
.a-scroll-vertical-bar {
  position: absolute;
  background-color: black;
  cursor: pointer;
}
</style>
