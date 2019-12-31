<template>
    <div>
        <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
            <div class="iconfont header-abs-back">&#xe892;</div>
        </router-link>
        <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
            <router-link to="/">
                <div class="iconfont header-fixed-back">&#xe892;</div>
            </router-link>   
            景点详情
        </div>
    </div>  
</template>

<script>
export default {
    name: 'DetailHeader',
    data() {
        return {
            showAbs: true,
            opacityStyle: {
                opacity: 0
            }
        }
    },
    methods: {
    handleScroll () {
        console.log('scroll')
        const top = document.documentElement.scrollTop
        if (top > 60) {
          let opacity = top / 140
          opacity = opacity > 1 ? 1 : opacity
          this.opacityStyle = {
            opacity: opacity
          }
          this.showAbs = false
        } else {
          this.showAbs = true
        }
    }
    },
    // activated() {
    //     window.addEventListener('scroll',this.handleScroll)
    // },
    // deactivated() {
    //     window.removeEventListener('scroll',this.handleScroll)
    // },
    mounted () {
    window.addEventListener('scroll', this.handleScroll)
    },
    unmounted () {
        window.removeEventListener('scroll', this.handleScroll)
    }
}
</script>

<style lang="stylus" scoped>
@import './style/Header.styl';
</style>