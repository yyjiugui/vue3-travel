<template>
  <div>
    <div class="current-city">
      <p class="current-header border">当前城市</p>
      <div class="current-content">
        <p class="current-address border">阿坝</p>
      </div>
    </div>
    <div class="hot-city">
      <p class="hot-header border">热门城市</p>
      <div class="hot-content">
        <p class="hot-address border" v-for="item of hotCities" :key="item.id">
          {{ item.name }}
        </p>
      </div>
    </div>
    <div class="city-list">
      <div v-for="(value, key) in cities" :key="key" :class="key">
        <div class="city-title border">
          {{ key }}
        </div>
        <div class="city-content border-bottom">
          <ul>
            <li v-for="item of value" :key="item.id" class="content-item">
              {{ item.name }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
export default {
  props: {
    hotCities: {
      type: Array,
      default: () => []
    },
    cities: {
      type: Array,
      default: () => []
    }
  },
  setup(props) {
    const hotCities = computed(() => props.hotCities)
    const cities = computed(() => props.cities)
    return {
      hotCities,
      cities
    }
  }
}
</script>

<style scoped lang="less">
.current-header {
  width: 100%;
  height: 0.65rem;
  line-height: 0.65rem;
  background-color: #f1eff1;
  color: #555;
  font-size: 14px;
  padding-left: 0.1rem;
}

.current-content {
  width: 100%;
  height: 0.7rem;
  background-color: #fff;
  padding-left: 0.1rem;
  display: flex;
  align-items: center;
  .current-address {
    width: 2rem;
    height: 0.5rem;
    line-height: 0.5rem;
    color: #555;
    font-size: 14px;
    font-weight: 600;
    border-radius: 0.05rem;
    text-align: center;
  }
}

.hot-header {
  width: 100%;
  height: 0.65rem;
  line-height: 0.65rem;
  background-color: #f1eff1;
  color: #555;
  font-size: 14px;
  padding-left: 0.1rem;
}

.hot-content {
  width: 100%;
  padding-left: 0.1rem;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 0.2rem;
  justify-content: space-around;
  .hot-address {
    width: 30%;
    height: 0.5rem;
    line-height: 0.5rem;
    color: #555;
    font-size: 14px;
    font-weight: 500;
    border-radius: 0.05rem;
    text-align: center;
    border-radius: 0.05rem;
    margin-bottom: 0.2rem;
  }
}

.city-title {
  width: 100%;
  height: 0.65rem;
  line-height: 0.65rem;
  background-color: #f1eff1;
  color: #555;
  font-size: 14px;
  padding-left: 0.1rem;
}

.content-item {
  padding: 0.2rem 0.1rem;
  background-color: #fff;
  font-size: 14px;
}
</style>
