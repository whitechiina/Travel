import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
    state,
    mutations,
    // 【getters】是store的计算属性。
    // getters: {
    //     doubleCity (state){
    //         return state.city + '' + state.city
    //     }
    // }
})

// try catch 的用途
// 在程序逻辑中，需要在易出现问题的逻辑代码片段上，加持try-catch方法。
// 这样做可以抛出错误，但是不会影响整个程序运转。

// try {
// 	// 你的逻辑代码片段
// } catch (e) {
// 	// 错误处理代码片段
// }