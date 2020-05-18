import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// export default new Vuex.Store({
//   state: {
//   },
//   mutations: {
//   },
//   actions: {
//   },
//   modules: {
//   }
// })
const store = new Vuex.Store({
  // 状态
  state: {
    loadding: false// 全局加载的loading
  },
  // 状态修改方法
  // 使用store.commit()来调用
  mutations: {
    loadding (state, load) {
      state.loadding = load
    }
  }
})
// 导出
export default store
