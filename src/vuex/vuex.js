import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state = {
  count:1,
  hash:['/'],
  isNav:1
}



const mutations = {
  add() {
    // console.log(this.state)
    state.count++;
  },
  openNav(){//展开导航栏
    state.isNav=1
    console.log('open')
  },
  closeNav(){//关闭导航栏
    state.isNav=0
  },
  reduce(){
    state.count--;
  },
  forward(state,path){
    console.log(JSON.stringify(state))
    state.hash.push(path)
  },
  back(state,path){
    var index=state.hash.indexOf(path)
    var length=state.hash.length
    state.hash.splice(index+1,length+2-index)
    console.log(JSON.stringify(state.hash))
  }
}

export default new Vuex.Store({
  state,mutations

})