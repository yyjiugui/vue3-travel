<template>
  <div class="home">
    <Header></Header>
    <div class="swiper-pdtop">
      <Swiper :swiperList="myswiperList"></Swiper>
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
import { reactive, onMounted, ref } from 'vue'
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
	 	建议: 如果你要给一个对象设置为响应式数据 使用reactive这是 传递一个对象进去
		如果你是一个基本数据类型或者一个单独的数组数据可以使用 ref(0) ref([]) API特性
	 */
    const data = reactive({
      iconList: [],
      recommendList: [],
      weekendList: []
    })
    const myswiperList = ref([])

    async function getIndexData() {
      const result = await http.get('/api/index.json')
      const {
        swiperList,
        iconList,
        recommendList,
        weekendList
      } = result.data.data

      myswiperList.value = swiperList
      data.iconList = iconList
      data.recommendList = recommendList
      data.weekendList = weekendList
    }

    // 生命周期Mounted
    onMounted(() => {
      getIndexData()
    })

    // 暴露给模板
    return {
      data,
      myswiperList
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
