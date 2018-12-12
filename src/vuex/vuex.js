import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state = {
  islogin:0,
  isNav:1
}



const mutations = {
  openNav(){//展开导航栏
    state.isNav=1
    console.log('open')
  },
  closeNav(){//关闭导航栏
    state.isNav=0
  },
  login(){
    state.islogin=1
  }
}

export default new Vuex.Store({
  state,mutations

})