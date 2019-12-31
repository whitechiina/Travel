<template>
    <div class="header">
        <div class="header-left">
            <div class="iconfont back-icon">&#xe892;</div>
        </div>
        <router-link to="/city"  class="header-input">
            <div>
                <span class="iconfont">&#xe60c;</span>请输入城市/景点/游玩主题
            </div>
        </router-link>
        <router-link to="/city">
            <div class="header-right">
                {{this.city}}<span class="iconfont arrow-icon">&#xe64a;</span>
            </div>
        </router-link>
    </div>
</template>

<script>
import { mapState} from 'vuex';
export default {
    name: 'HomeHeader',
    computed:{
        ...mapState(['city'])
    }
}
</script>

<style lang="stylus" scoped>
    @import './style/Header.styl';
</style>
