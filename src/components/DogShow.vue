<!--
 * @Author: your name
 * @Date: 2021-01-03 20:22:28
 * @LastEditTime: 2021-01-03 20:34:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3-ts\src\components\DogShow.vue
-->
<!--  -->
<template>
  <div class="content">
    <img :src="result && result.message" alt />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import axios from "axios";
export default defineComponent({
  name: "DogShow",
  components: {},
  async setup() {
    const rawData = await axios.get(
      "https://dog.ceo/api/breed/affenpinscher/images/random1"
    );
    return {
      result: rawData.data
    };
  }
});
</script>

<style lang='less' scoped>
</style>
