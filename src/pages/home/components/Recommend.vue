<template>
    <div>
        <div class="title">热销推荐</div>
        <ul>
            <router-link tag="li" :to="'/detail/' + item.id" class="item border-bottom" v-for="(item, index) in list" :key="index">
                    <img class="item-img" :src="item.url">
                    <div class="item-info">
                        <p class="item-title">{{item.text}}</p>
                        <p class="item-desc">{{item.add}}</p>
                        <button class="item-btn">查看详情</button>
                    </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
    name:"HomeRecommend",
    props:{
        list: Array
    }
}
</script>

<style lang="stylus" scoped>
@import './style/Recommend.styl'; 
</style>

