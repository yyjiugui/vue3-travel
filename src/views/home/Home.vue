<template>
  <div class="home">
    <Header></Header>
    <Swiper :swiperList="swiperList"></Swiper>
    <home-icons :iconList="iconList"></home-icons>
    <RecomMend :recommendList="recommendList"></RecomMend>
    <weekendList :weekendList="weekendList"></weekendList>
  </div>
</template>

<script>
import Header from './components/Header'
import Swiper from '@/components/Swiper'
import HomeIcons from './components/Icons'
import RecomMend from './components/Recommend'
import weekendList from './components/WeekendList'
import http from '@/http/http'
export default {
  components: {
    Header,
    Swiper,
    HomeIcons,
    RecomMend,
    weekendList
  },
  data() {
    return {
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  methods: {
    getIndexData() {
      http.get('/api/index.json').then(res => {
        const {
          swiperList,
          iconList,
          recommendList,
          weekendList
        } = res.data.data
        this.swiperList = swiperList
        this.iconList = iconList
        this.recommendList = recommendList
        this.weekendList = weekendList
      })
    }
  },
  created() {
    this.getIndexData()
  }
}
</script>

<style scoped lang="less">
.home {
  padding-bottom: 1rem;
}
</style>
