<template>
    <div class="header">
        城市选择
        <router-link to="./">
            <div class="iconfont header-back">&#xe892;</div>
        </router-link>   
    </div>
</template>

<script>
    export default {
        name: 'CityHeader'
    }
</script>

<style lang="stylus" scoped>
@import './style/Header.styl';
</style>