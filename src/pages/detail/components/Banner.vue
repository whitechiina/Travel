<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img" :src="bannerImg">
            <div class="banner-info">
                <div class="banner-title">
                    {{this.sightName}}
                </div>
                <div class="banner-number">
                    <span class="iconfont">
                        &#xe612;
                    </span>{{this.gallaryImgs.length}}
                </div>
            </div>
        </div>
        <fade-animation>
        <common-gallary :imgs="gallaryImgs" v-show="showGallary" @close="handleGallaryCity"></common-gallary>
        </fade-animation>
    </div>  
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
import FadeAnimation from 'common/fade/FadeAnimation'
export default {
    name: 'DetailBanner',
    props:{
        sightName: String,
        bannerImg: String,
        gallaryImgs: Array
    },
    data() {
        return {
            showGallary: false
        }
    },
    methods: {
        handleBannerClick(){
            this.showGallary = true
        },
        handleGallaryCity(){
            this.showGallary = false
        }
    },
    components:{
        CommonGallary,
        FadeAnimation
    }
}
</script>

<style lang="stylus" scoped>
@import './style/Banner.styl';
</style>