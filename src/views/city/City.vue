<template>
  <div class="city">
    <Header></Header>
    <search-city :cities="data.cities"></search-city>
    <div class="scroll-city">
      <current-city :hotCities="data.hotCities" :cities="data.cities"></current-city>
    </div>
    <Alphabet @on-letter-change="letter"></Alphabet>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import Header from './components/Header'
import CurrentCity from './components/CurrentCity'
import SearchCity from './components/SearchCity'
import Alphabet from './components/Alphabet'
import { onMounted, reactive } from 'vue'
import http from '@/http/http'
export default {
  components: {
    Header,
    SearchCity,
    CurrentCity,
    Alphabet
  },
  setup() {
    // 获取城市数据逻辑
    const { data } = getCityData()
    const { letter } = scrollTarget()

    return {
      data,
      letter
    }

    function getCityData() {
      const data = reactive({
        hotCities: [],
        cities: []
      })

      async function getCityData() {
        const result = await http.get('/api/city.json')
        const { hotCities, cities } = result.data.data
        data.hotCities = hotCities
        data.cities = cities
      }

      onMounted(() => {
        getCityData()
      })

      return {
        data
      }
    }

    function scrollTarget() {
      let scroll
      function letter(letter) {
        const el = document.querySelector(`.${letter}`)
        scroll.scrollToElement(el, 500)
      }
      onMounted(() => {
        const scrollCity = document.querySelector('.scroll-city')
        scroll = new BScroll(scrollCity, {
          click: true
        })
      })

      return {
        letter
      }
    }
  }
}
</script>

<style scoped lang="less">
.scroll-city {
  position: absolute;
  top: 1.4rem;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
}
</style>
