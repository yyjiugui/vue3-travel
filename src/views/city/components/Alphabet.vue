<template>
  <div class="alphabet-container flex-center">
    <div class="alphabet-line">
      <ul @touchstart="handlerStart" @touchmove="handlerMove" id="ul-alp-box">
        <li class="alphabet-item" v-for="item of alphabet" :key="item">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, ref } from 'vue'
import { getOffset } from '@/utils/docOffset.js'
export default {
  setup(props, context) {
    // 计算出大写字母表
    const { alphabet } = getAlphabet()
    const { handlerStart, handlerMove } = handlerAlphabet()

    return {
      alphabet,
      handlerStart,
      handlerMove
    }

    function getAlphabet() {
      const alphabet = computed(() => {
        const _arrs = []
        for (let i = 0; i < 26; i++) {
          _arrs.push(String.fromCharCode(65 + i))
        }
        return _arrs
      })
      return {
        alphabet
      }
    }

    function handlerAlphabet() {
      // 计算出字母表顶部到文档顶部的距离
      let uloffTop = 0
      const startTime = ref(new Date().getTime())

      // 手指在字母表上按下 获取当前字母
      function handlerStart(e) {
        const alp = e.target.innerHTML
        if (alp) {
          context.emit('on-letter-change', alp)
        }
      }

      // 手指在字母表上移动
      function handlerMove(e) {
        const currentTime = new Date().getTime()
        if (currentTime - startTime.value > 100) {
          touchMove(e)
          startTime.value = currentTime
        }
      }

      function touchMove(e) {
        const clientY = e.targetTouches[0].clientY
        const ids = Math.floor((clientY - uloffTop) / 15)
        const currentAlp = alphabet.value[ids]
        if (currentAlp) {
          context.emit('on-letter-change', currentAlp)
        }
      }

      onMounted(() => {
        uloffTop = getOffset(document.querySelector('#ul-alp-box')).Y
      })

      return {
        handlerStart,
        handlerMove
      }
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
