/*
 * @Author: your name
 * @Date: 2021-01-02 22:07:23
 * @LastEditTime: 2021-01-02 22:10:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3-ts\src\hooks\useMousePosition.ts
 */
import { ref, onMounted, onUnmounted } from 'vue'
function useMousePosition() {
  const x = ref(0)
  const y = ref(0)
  const updateMouse = (e: MouseEvent) => {
    x.value = e.pageX
    y.value = e.pageY
  }
  onMounted(() => {
    console.log('onMounted')
    document.addEventListener('click', updateMouse)
  })
  onUnmounted(() => {
    document.removeEventListener('click', updateMouse)
  })
  return { x, y }
}
export default useMousePosition
