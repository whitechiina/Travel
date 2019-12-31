<template>
    <div class="alphabet">
      <ul class="list">
        <li 
        class="item" 
        @touchstart.prevent="handleTouchStart" 
        @touchmove="handleTouchMove" 
        @touchend="handleTouchEnd"
        @click="letterChange" 
        v-for="item in letters" 
        :key="item" 
        :ref="item">
        {{item}}
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  methods: {
    letterChange (e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const startY = this.startY
          const touchY = e.touches[0].clientY - 82 - 31
          const index = Math.floor((touchY - startY) / 24)
          this.$emit('change', this.letters[index])
        }, 0.5)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
@import './style/Alphabet.styl';
</style>