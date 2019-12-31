<template>
    <div class="list" ref="wrapper">
        <div>
        <div class="area">
            <div class="title border-topbottom">当前城市</div>
            <div class="button-list">
                <div class="button-wrapper">
                    <div class="button">
                    {{this.currentCity}}</div>
                </div>
            </div>
        </div>
        <div class="area">
            <div class="title border-topbottom">热门城市</div>
            <div class="button-list">
                <div class="button-wrapper" v-for="item in hotCities" :key="item.id" @click="handleCityClick(item.name)">
                    <div class="button">{{item.name}}</div>
                </div>
            </div>
        </div>
        <div class="area" v-for="(item, index) in cities" :key="index" :ref="index">
            <div class="title border-topbottom">{{index}}</div>
            <div class="item-list">
                <div class="item border-bottom" v-for="(ite, ind) in item" :key="ind"  @click="handleCityClick(ite.name)">{{ite.name}}</div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
    import { mapState,mapMutations } from 'vuex'
    import BScroll from 'better-scroll'
    export default {
        name: 'CityList',
        props: {
            cities: Object,
            hotCities: Array,   
            letter: String
        },
        computed: {
            ...mapState({
                currentCity: 'city'
            })
        },
        methods: {
            handleCityClick(city){
                this.changeCity(city)
                this.$router.push('/')
            },
            ...mapMutations(['changeCity'])
        },
        mounted () {
            this.scroll = new BScroll(this.$refs.wrapper)
        },
        watch: {
            letter () {
                if (this.letter) {
                    const element = this.$refs[this.letter][0]
                    this.scroll.scrollToElement(element)
                }
            }
        }
    }
</script>

<style lang="stylus" scoped>
@import './style/List.styl';
</style>