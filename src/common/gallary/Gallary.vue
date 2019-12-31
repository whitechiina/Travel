<template>
    <div class="container" @click="handleGallaryClick">
        <div class="wrapper">
            <swiper :options="swiperOptions">
                <!-- slides -->
                <swiper-slide v-for="(item, index) in imgs" :key="index">
                    <img class="gallary-img" :src="item">
                </swiper-slide>
                <!-- Optional controls -->
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
export default {
    name: "CommonGallary",
    props: {
        imgs: {
            type: Array,
            default (){
                return []
            }
        }
    },
    data(){
        return{
            swiperOptions: {
                pagination: '.swiper-pagination',
                paginationType: 'fraction',
                observeParents: true,
                observer: true
            }
        }
    },
    methods: {
        handleGallaryClick(){
            this.$emit('close')
        }
    },
}
</script>

<style lang="stylus" scoped>
@import './Gallary.styl';
</style>
