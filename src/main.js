// 整个项目的入口文件
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
// 移动端click300秒延迟问题
import fastClick from 'fastclick'
// 轮播图插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

import 'styles/reset.css'
// 解决1px像素边框问题
import './assets/styles/border.css'
// 图标样式
import './assets/styles/iconfont.css'

Vue.config.productionTip = false
fastClick.attach(document.body);
Vue.use(VueAwesomeSwiper  )


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App: App },
  template: '<App/>'
})
