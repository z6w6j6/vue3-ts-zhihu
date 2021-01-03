/*
 * @Author: your name
 * @Date: 2021-01-02 19:48:57
 * @LastEditTime: 2021-01-03 20:43:58
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \vue3-ts\src\main.ts
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 修改移到vue实例上
createApp(App).use(store).use(router).mount('#app')
