<!--
 * @Author: your name
 * @Date: 2021-01-03 20:08:38
 * @LastEditTime: 2021-01-03 20:14:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3-ts\src\components\AsyncShow.vue
-->
<!--  -->
<template>
  <div class="content">
    <h1>{{result}}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AsyncShow",
  setup() {
    return new Promise(resolve => {
      setTimeout(() => {
        return resolve({ result: 111 });
      }, 2000);
    });
  }
});
</script>

<style lang='less' scoped>
</style>
