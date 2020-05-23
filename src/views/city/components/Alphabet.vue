<template>
  <div class="alphabet-container flex-center">
    <div class="alphabet-line">
      <ul @touchstart="handlerStart" @touchmove="handlerMove" id="ul-alp-box">
        <li class="alphabet-item" v-for="item of alphabet" :key="item">
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, ref } from 'vue'
import { getOffset } from '@/utils/docOffset.js'
export default {
  setup() {
    // 计算出字母表顶部到文档顶部的距离
    let uloffTop = ref(0)
    let timerId = ref(null)
    let startTime = ref(new Date().getTime())
    // 计算出大写字母表
    const alphabet = computed(() => {
      const _arrs = []
      for (let i = 0; i < 26; i++) {
        _arrs.push(String.fromCharCode(65 + i))
      }
      return _arrs
    })

    // 手指在字母表上按下 获取当前字母
    function handlerStart(e) {
      const alp = e.target.innerHTML
      if (alp) {
        this.$emit('on-letter-change', alp)
      }
    }

    // 手指在字母表上移动
    function handlerMove(e) {
      let currentTime = new Date().getTime()
      if (currentTime - startTime.value > 100) {
        touchMove(e)
        startTime.value = currentTime
      }
    }

    function touchMove(e) {
      const clientY = e.targetTouches[0].clientY
      const ids = Math.ceil((clientY - uloffTop) / 15)
      let currentAlp = alphabet.value[ids - 1]
    }

    onMounted(() => {
      uloffTop = getOffset(document.querySelector('#ul-alp-box'))['Y']
    })

    return {
      alphabet,
      handlerStart,
      handlerMove
    }
  }
}
</script>

<style scoped lang="less">
.alphabet-container {
  position: fixed;
  top: 0;
  right: 0rem;
  bottom: 0;
  width: 0.4rem;
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
  .alphabet-item {
    width: 0.3rem;
    height: 0.3rem;
    color: @base;
    text-align: center;
    line-height: 0.3rem;
    font-size: 12px;
  }
}
</style>
