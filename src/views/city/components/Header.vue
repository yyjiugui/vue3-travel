<template>
  <div class="city-header">
    <span
      class="city-icon iconfont icon-jiantou2"
      @click="$router.push('/')"
    ></span>
    城市选择
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="less">
.city-header {
  width: 100%;
  height: 0.7rem;
  background-color: @base;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  color: #fff;
  font-size: 14px;
}

.city-icon {
  position: absolute;
  left: 0.1rem;
  font-size: 20px;
}
</style>
