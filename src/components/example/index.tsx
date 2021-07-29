import { defineComponent, ref, onMounted } from 'vue'
import style from './style.module.less'
export default defineComponent({
  setup() {
    const root = ref('')
    const user = ref('zshyng')
    onMounted(() => {
      console.log(root.value)
    })
    // return { root, user }
    return () => (
      <div ref={root}>
        <div class={style.rootColor}>
          <p>tsx测试</p>
          <p class={style.buttonColor}>yance</p>
        </div>
        <div>{user.value}</div>
      </div>
    )
  },
  // render() {
  //   const { user } = this
  //   return (
  //     <div ref="root">
  //       <div class={style.rootColor}>
  //         <p>tsx测试</p>
  //         <p class={style.buttonColor}>yance</p>
  //       </div>
  //       <div>{user}</div>
  //     </div>
  //   )
  // },
})
