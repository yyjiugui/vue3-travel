<template>
  <div class="search-city">
    <div class="search-container">
      <div class="search-input flex-center">
        <input
          v-model="text"
          class="search-handler"
          type="text"
          placeholder="请输入城市名或拼音"
        />
      </div>
      <div class="search-content" v-if="false">
        <ul>
          <li class="search-result border-bottom">郑州</li>
          <li class="search-result border-bottom">北京</li>
          <li class="search-result border-bottom">上海</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, customRef } from 'vue'
export default {
  swtup() {
    function useDebouncedRef(value, delay = 200) {
      let timeout
      return customRef((track, trigger) => {
        return {
          get() {
            track()
            return value
          },
          set(newValue) {
            clearTimeout(timeout)
            timeout = setTimeout(() => {
              value = newValue
              trigger()
            }, delay)
          }
        }
      })
    }

    return {
      text: useDebouncedRef('hello')
    }
  }
}
</script>

<style scoped lang="less">
.search-input {
  width: 100%;
  height: 0.7rem;
  background-color: @base;
  padding: 0 0.1rem;

  .search-handler {
    background-color: #fff;
    width: 100%;
    height: 0.55rem;
    border-radius: 0.05rem;
    font-size: 12px;
    color: #8d8c8d;
    padding-left: 0.1rem;
    text-align: center;
  }
}

.search-content {
  position: absolute;
  top: 1.4rem;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #ccc;
  color: #fff;
  z-index: 1000;
  .search-result {
    background-color: #fff;
    padding: 0.1rem;
    color: #000;
    font-size: 14px;
  }
}
</style>
