/*
 * @Author: zhuyu 
 * @Date: 2018-01-15 16:13:53 
 * @Last Modified by: zhuyu
 * @Last Modified time: 2018-01-15 16:17:51
 */
/**
 * vuex状态管理
 * 放至状态树钱需添加到state中
 * 只能通过mutations中的方法来修改state中的值,修改方式如this.$store.commit('addCount',5)
 */


import Vue from 'vue'
import Vuex from   'vuex'
Vue.use(Vuex)



export default new Vuex.Store({
  state: {
    count:'1'
  },
  mutations:{
    addCount(state,payload){
      state.count = payload
    }
  }
})