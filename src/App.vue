<template>
  <div id="app">
    <!-- 对组件进行缓存 -->
    <keep-alive exclude='Detail'>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
