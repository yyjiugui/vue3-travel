<template>
  <div class="home-recommend">
    <div class="home-rec-header">
      热销推荐
    </div>
    <div class="rec-container">
      <div class="rec-list flex" v-for="item of recommendList" :key="item.id">
        <div class="rec-left">
          <img :src="item.imgUrl" alt="" />
        </div>
        <div class="rec-right">
          <p class="line-text-one">{{ item.title }}</p>
          <p class="line-text-two">
            {{ item.desc }}
          </p>
          <button class="line-text-three">查看详情</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommendList: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped lang="less">
.home-rec-header {
  width: 100%;
  height: 0.6rem;
  background-color: #edeced;
  padding-left: 0.1rem;
  line-height: 0.6rem;
  font-size: 15px;
  font-weight: 600;
}

.rec-list {
  padding: 0.1rem;
  .rec-left {
    width: 1.5rem;
    background-color: red;
  }
  .rec-right {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-left: 0.1rem;
    font-size: 14px;
    .line-text-one {
      font-weight: 600;
      color: #000;
    }
    .line-text-two {
      margin: 0.1rem 0;
      color: #ccc;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      width: 6rem;
    }
    .line-text-three {
      display: inline-block;
      background-color: #fe8705;
      text-align: center;
      width: 2rem;
      font-size: 12px;
      color: #fff;
      border-radius: 0.04rem;
    }
  }
}
</style>
