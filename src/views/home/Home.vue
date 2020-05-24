<template>
  <div class="home">
    <Header></Header>
    <div class="swiper-pdtop">
      <Swiper :swiperList="data.swiperList"></Swiper>
    </div>
    <home-icons :iconList="data.iconList"></home-icons>
    <RecomMend :recommendList="data.recommendList"></RecomMend>
    <weekendList :weekendList="data.weekendList"></weekendList>
  </div>
</template>

<script>
import Header from './components/Header'
import Swiper from '@/components/Swiper'
import HomeIcons from './components/Icons'
import RecomMend from './components/Recommend'
import weekendList from './components/WeekendList'
import http from '@/http/http'
import { reactive, onMounted } from 'vue'

export default {
  components: {
    Header,
    Swiper,
    HomeIcons,
    RecomMend,
    weekendList
  },
  setup() {
    /*
	 	建议: 如果你要给一个对象设置为响应式数据 使用reactive语法传递一个对象进去
		如果你是一个基本数据类型或者一个单独的数组数据可以使用 ref(0) ref([]) API特性
		使用ref定义的响应式数据, 不要忘记 在js逻辑里.value使用,但是模板上不用掉value

		注意: composition-api代码的思想是: 把一个功能的data数据和逻辑处理放在了一起管理(封装到一个函数中)，
		不像我们之前使用Vue2.x版本那样了。(把当前组件的所有data数据全部放在一起)
	 */
    /* 这个就是抽离的一组data和逻辑到一个函数中 */
    const { data } = useCityLogic()
    // 暴露给模板
    return {
      data
    }

    // 封装获取数据
    function useCityLogic() {
      const data = reactive({
        swiperList: [],
        iconList: [],
        recommendList: [],
        weekendList: []
      })
      async function getIndexData() {
        const result = await http.get('/api/index.json')
        const {
          swiperList,
          iconList,
          recommendList,
          weekendList
        } = result.data.data

        data.swiperList = swiperList
        data.iconList = iconList
        data.recommendList = recommendList
        data.weekendList = weekendList
      }

      // 生命周期Mounted
      onMounted(() => {
        getIndexData()
      })

      return {
        data
      }
    }
  }
}
</script>

<style scoped lang="less">
.home {
  padding-bottom: 1rem;
}

.swiper-pdtop {
  padding-top: 0.7rem;
}
</style>
