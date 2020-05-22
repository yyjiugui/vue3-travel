<template>
  <div class="weekend-list">
    <div class="home-week-header">
      周末去哪儿
    </div>
    <div class="home-week-container">
      <div v-for="item of weekendList" :key="item.id">
        <div class="home-week-img">
          <img :src="item.imgUrl" alt="" />
        </div>
        <div class="home-content">
          <h3 class="home-week-title">{{ item.title }}</h3>
          <p class="home-week-desc">{{ item.desc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    weekendList: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped lang="less">
.home-week-header {
  width: 100%;
  height: 0.6rem;
  background-color: #edeced;
  padding-left: 0.1rem;
  line-height: 0.6rem;
  font-size: 15px;
  font-weight: 600;
}

.home-week-img {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 31.125%;
}

.home-content {
  height: 0.9rem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 0.05rem;
  font-size: 14px;
  .home-week-title {
    color: #000;
    font-weight: 500;
  }
  .home-week-desc {
    color: #ccc;
  }
}
</style>
