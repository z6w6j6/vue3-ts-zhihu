/*
 * @Author: your name
 * @Date: 2021-01-02 22:18:45
 * @LastEditTime: 2021-01-03 14:14:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3-ts\src\hooks\useUrlloader.ts
 */
import { ref } from 'vue'
import axios from 'axios'
function useUrlloader<T>(url: string) {
  const result = ref<T | null>(null)
  const loading = ref(true)
  const loaded = ref(false)
  const error = ref(null)
  axios.get(url).then((res) => {
    loading.value = false
    loaded.value = true
    result.value = res.data
  }).catch(e => {
    error.value = e
    loading.value = false
  })
  return {
    result,
    loading,
    loaded,
    error
  }
}
export default useUrlloader
