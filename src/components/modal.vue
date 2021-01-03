<!--
 * @Author: your name
 * @Date: 2021-01-03 15:31:38
 * @LastEditTime: 2021-01-03 20:05:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3-ts\src\components\modal.vue
-->
<!--  -->
<template>
  <teleport to="#modal">
    <div class="modal" v-if="isOpen">
      我是弹窗
      <slot>i am modal</slot>
      <button @click="buttonClick">关掉它</button>
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Modal",
  components: {},
  props: {
    isOpen: Boolean,
    emits: {
      "close-modal": (payload: any) => {
        return payload.type === "close";
      }
    }
  },
  data() {
    return {};
  },
  setup(props, context) {
    console.log(context);
    const buttonClick = () => {
      context.emit("close-modal", {
        type: "hello"
      });
    };
    return { buttonClick };
  },
  beforeMount() {},
  methods: {}
});
</script>

<style lang='less' scoped>
.modal {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  height: 150px;
  width: 150px;
  border: 1px solid red;
  padding: 20px;
}
</style>
