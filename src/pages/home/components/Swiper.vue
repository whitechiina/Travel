<template>
    <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
        <!-- slides -->
        <swiper-slide v-for="(item, index) in list" :key="index">
            <img class="swiper-img" :src="item.imgUrl">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
    </div>
</template>

<script>
    export default {
        name: 'HomeSwiper',
        props: {
            list: Array
        },
        data () {
            return {
                swiperOption: { 
                    pagination: '.swiper-pagination',
                    loop: true
                },
            }
        },
        computed: {
            showSwiper(){
                return this.list.length
            }
        },
    }
</script>

<style lang="stylus" scoped>
    @import './style/Swiper.styl';
</style>