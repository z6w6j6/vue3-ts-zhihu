<!--
 * @Author: your name
 * @Date: 2021-01-02 19:48:57
 * @LastEditTime: 2021-01-03 21:13:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3-ts\src\App.vue
-->
<template>
  <div>
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
      <button @click="openModal">打开弹窗</button>
      <modal :isOpen="modalIsOpen" @close-modal="onModalClose">哇哦</modal>
      <!-- <h1>{{double}}</h1>
      <h1>{{count}}</h1>-->
      {{error}}
      <Suspense>
        <template #default>
          <div>
            <async-show></async-show>
            <dog-show />
          </div>
        </template>
        <template #fallback>
          <h1>loading...</h1>
        </template>
      </Suspense>

      <!-- <ul>
        <li v-for="number in numbers" :key="number">{{number}}</li>
        <li>{{person.name}}</li>
      </ul>
      <button @click="increase">++</button>-->
      <!-- <h1>{{greeting}}</h1>
      <h1>x:{{x}}y:{{y}}</h1>-->
      <!-- <h1 v-if="loading">loading...</h1> -->
      <!-- <img v-if="loaded" :src="result[0].url" />
      <img v-if="test.loaded" :src="test.result.message" alt />-->
      <!-- <button @click="updateGreeting">updateGreeting</button> -->
    </div>
    <router-view />
  </div>
</template>

<script lang='ts'>
import {
  ref,
  computed,
  reactive,
  toRefs,
  onMounted,
  onUnmounted,
  onUpdated,
  onRenderTracked,
  onRenderTriggered,
  watch,
  onErrorCaptured
} from 'vue'
import useMousePosition from './hooks/useMousePosition'
import useUrlloader from './hooks/useUrlloader'
import modal from './components/modal.vue'
import asyncShow from './components/AsyncShow.vue'
import DogShow from './components/DogShow.vue'
interface DataProps {
  count: number;
  double: number;
  increase: () => void;
  numbers: number[];
  person: { name?: string };
}
interface DogObj {
  message: string;
  status: string;
}
interface CatObj {
  id: string;
  url: string;
  width: number;
  height: number;
}
export default {
  name: 'App',
  components: {
    modal,
    asyncShow,
    DogShow
  },
  setup() { // /
    // const count = ref(0)
    // const double = computed(()=>{
    //   return count.value*2
    // })
    // const increase = ()=>{
    //   count.value++
    // }
    const error = ref(null)
    onErrorCaptured((e: any) => {
      error.value = e
      return true // 是否向上传播
    })
    onUpdated(() => {
      console.log('onUpdated')
    })
    // onRenderTracked(event => {
    //   console.log(1, event);
    // });
    onRenderTriggered(event => {
      // console.log(2, event);
    }) // 其中一个是computed对象ComputedRefImpl
    const greeting = ref('')
    const updateGreeting = () => {
      greeting.value += 'ha'
    }

    const data: DataProps = reactive({
      count: 0,
      increase: () => {
        data.count++
      },
      double: computed(() => data.count * 2),
      numbers: [0, 1, 2],
      person: {}
    })
    data.numbers[0] = 5
    data.person.name = 'hhh'
    watch([greeting, () => data.count], (newVal, oldVal) => {
      console.log(newVal, oldVal)
      document.title = 'updated' + greeting.value + data.count
    })
    const { x, y } = useMousePosition()
    // const { result, loaded, loading } = useUrlloader<CatObj[]>(
    //   "https://api.thecatapi.com/v1/images/search?limit=1"
    // );
    // const dogres = useUrlloader<DogObj>(
    //   "https://dog.ceo/api/breed/affenpinscher/images/random"
    // );
    // const dogresult = dogres.result
    // const dogloaded = dogres.loaded
    // const test = reactive({ ...dogres });
    // watch([test, result], () => {
    //   console.log(result.value);
    //   console.log(test.result);
    //   if (test.result) {
    //     console.log(test.result.message);
    //   }
    // });

    const refData = toRefs(data) // 解构响应式对象数据
    const modalIsOpen = ref(false)
    const openModal = () => {
      modalIsOpen.value = true
    }
    const onModalClose = () => {
      modalIsOpen.value = false
    }
    return {
      ...refData,
      greeting,
      updateGreeting,
      x,
      y,
      // result,
      // loaded,
      // loading,
      // test,
      modalIsOpen,
      openModal,
      onModalClose,
      error
      // dogresult,
      // dogloaded
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
