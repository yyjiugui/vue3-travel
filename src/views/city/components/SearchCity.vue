<template>
  <div class="search-city">
    <div class="search-container">
      <div class="search-input flex-center">
        <input v-model="keywords" class="search-handler" type="text" placeholder="请输入城市名或拼音" />
      </div>
      <div class="search-content" v-show="keywords" ref="search">
        <ul>
          <li
            class="search-result border-bottom"
            v-for="item of list"
            :key="item.name"
          >{{ item.name }}</li>
          <li v-if="!showQuery" class="search-result border-bottom none-city">很抱歉,没有查询到城市</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
/*
 1: 搜索思路: 只要输入框有值就让灰色容器显示 盖住城市列表
		1.1: 如果查询出来城市,显示城市列表。 否则 显示很抱歉元素
*/
import BScroll from 'better-scroll'
export default {
  props: {
    cities: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      keywords: '',
      timerId: null,
      list: []
    }
  },
  watch: {
    keywords() {
      if (this.timerId) {
        clearInterval(this.timerId)
        this.timerId = null
      }
      // 因为是监听的keywords,所有当keywords为空时此时应该结束下面的函数执行
      // 因为indexOf("") 这个api的原因
      if (!this.keywords) {
        this.list = []
        return
      }

      this.timerId = setTimeout(() => {
        const result = []
        for (const key in this.cities) {
          this.cities[key].forEach(city => {
            if (
              city.spell.indexOf(this.keywords) !== -1 ||
              city.name.indexOf(this.keywords) !== -1
            ) {
              result.push(city)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  computed: {
    // 显示查询出来的城市元素
    showQuery() {
      return this.list && this.list.length > 0
    }
  },
  mounted() {
    new BScroll(document.querySelector('.search-content'))
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
  overflow: hidden;
  .search-result {
    background-color: #fff;
    padding: 0.1rem;
    color: #000;
    font-size: 14px;
    line-height: 0.4rem;
  }

  .none-city {
    text-align: center;
    color: #bbb;
    font-size: 14px;
  }
}
</style>
