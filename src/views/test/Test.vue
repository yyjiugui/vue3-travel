<template>
  <div class="vue-test">
    <div class="test-header">
      Vue组合式API学习
    </div>
    <div class="test-miaoshu">
      一组函数式API，使得我们能够更加灵活的[组合]组件的逻辑。不推荐使用mixins了
    </div>
    <div class="example">
      <button @click="increment">点我哦</button>
      <p>数量 is: {{ state.count }}, 两倍 is: {{ state.double }}</p>
    </div>
  </div>
</template>

<script>
import { reactive, computed } from 'vue'
export default {
  setup() {
    console.log('初始化')
    const state = reactive({
      count: 0,
      double: computed(() => state.count * 2)
    })

    function increment() {
      state.count++
    }

    return {
      state,
      increment
    }
  }
}
</script>

<style scoped lang="less">
.test-header {
  width: 100%;
  height: 0.7rem;
  background-color: @base;
  display: flex;
  align-items: center;
  color: #fff;
  padding-left: 0.2rem;
}

.test-miaoshu {
  padding: 0.1rem;
  color: #fff;
  background-color: @vue;
  font-size: 14px;
  margin-top: 0.1rem;
}
</style>
