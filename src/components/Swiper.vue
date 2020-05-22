<template>
  <div class="common-swiper">
    <swiper class="swiper-container" ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt="" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  props: {
    swiperList: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination'
        },
        autoplay: true,
        loop: true
      }
    }
  }
}
</script>

<style scoped lang="less">
.common-swiper {
  // 图片未加载过来的时候,使用padding-bottom提前占位 防止页面抖动
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 31.25%;

  .swiper-img {
    width: 100%;
  }
}
</style>
