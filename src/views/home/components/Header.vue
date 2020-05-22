<template>
  <div class="home-header">
    <div class="home-icon iconfont icon-jiantou2"></div>
    <div class="home-input">
      <span class="input-icon iconfont icon-sousuo"></span>
      <input
        class="input-text"
        type="text"
        placeholder="输入城市/景点/游玩主题"
      />
    </div>
    <div class="home-city">
      <span class="mr5">杭州</span>
      <span class="iconfont icon-iconfontjiantou"></span>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="less">
.home-header {
  width: 100%;
  height: 0.7rem;
  display: flex;
  align-items: center;
  background-color: @base;
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
    width: 1.2rem;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    color: #fff;
  }
}
</style>
