<template>
  <div class="home-icons">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="(page, index) of swiperList" :key="index">
        <div class="icons-container">
          <ul class="icons-ulbox flex">
            <li class="icon-item" v-for="item of page" :key="item.id">
              <img class="icon-imgs" :src="item.imgUrl" alt="" />
              <p class="icon-desc">{{ item.desc ? item.desc : '--' }}</p>
            </li>
          </ul>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { computed } from 'vue'
export default {
  props: {
    iconList: {
      type: Array,
      default: () => []
    }
  },
  setup(props) {
    const swiperOptions = {
      autoplay: false,
      loop: false
    }

    const swiperList = computed(() => {
      const pages = []
      props.iconList.forEach((item, index) => {
        const ids = Math.floor(index / 8)
        if (!pages[ids]) {
          pages[ids] = []
        }
        pages[ids].push(item)
      })
      return pages
    })

    return {
      swiperList,
      swiperOptions
    }
  }
}
</script>

<style scoped lang="less">
.home-icons {
  overflow: hidden;
  width: 100%;
  height: 0;
  background-color: #fff;
  padding-bottom: 50%;
}

.home-icons .icons-container {
  background-color: #fff;
  .icons-ulbox {
    flex-wrap: wrap;
    .icon-item {
      width: 25%;
      height: 1.85rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .icon-imgs {
        width: 1.1rem;
        height: 1.1rem;
      }
      .icon-desc {
        font-size: 14px;
        margin-top: 0.2rem;
      }
    }
  }
}
</style>
