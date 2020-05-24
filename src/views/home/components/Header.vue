<template>
  <div class="home-header">
    <div class="home-icon iconfont icon-jiantou2"></div>
    <div class="home-input">
      <span class="input-icon iconfont icon-sousuo"></span>
      <input class="input-text" type="text" placeholder="输入城市/景点/游玩主题" />
    </div>
    <div class="home-city" @click="$router.push('/city')">
      <span class="mr5">{{ city ? city : '选择城市'}}</span>
      <span class="icon-size iconfont icon-iconfontjiantou"></span>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import location from '@/utils/location.js'

export default {
  setup() {
    const city = ref('上海')
    // 获取地理位置 如果store中有用户选择的城市，就用用户的, 否则获取最新的地理位置
    location(function(getCity) {
      let localCity = localStorage.getItem('location')
      if (localCity) {
        localCity = JSON.parse(localCity).city
        city.value = localCity
      } else {
        city.value = getCity
      }
    })

    return {
      city
    }
  }
}
</script>

<style scoped lang="less">
.home-header {
  width: 100%;
  height: 0.7rem;
  display: flex;
  align-items: center;
  background-color: @base;
  position: fixed;
  top: 0;
  z-index: 100;
  .home-icon {
    width: 0.7rem;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color: #fff;
  }
  .home-input {
    flex: 1;
    position: relative;
  }
  .home-input .input-icon {
    position: absolute;
    left: 0.1rem;
    top: 50%;
    transform: translateY(-50%);
  }

  .home-input .input-text {
    width: 100%;
    height: 0.55rem;
    background-color: #fff;
    border-radius: 0.05rem;
    font-size: 12px;
    padding-left: 0.55rem;
  }

  .home-city {
    min-width: 1.2rem;
    padding: 0 0.1rem;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    color: #fff;
    white-space: nowrap;
  }

  .icon-size {
    font-size: 12px;
  }
}
</style>
