<template>
  <div id="app">
    <el-container v-if="$store.state.islogin==1">
       <el-aside   :class="this.$store.state.isNav==1?'active':''" >
          <navmenu></navmenu>
        </el-aside>
      <el-container>
        <el-header class="header">
          <vheader />
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
    <el-container v-else >
        <el-main style="padding:0px">
          <router-view></router-view>
        </el-main>
      </el-container>
  </div>
</template>
<script>
import NavMenu from '@/components/NavMenu'
import Header from '@/components/Header'

export default {
  name: 'app',
  components: {
    'navmenu': NavMenu,
    'vheader': Header
  },
  data(){
    return {
      
    }
  },
  mounted: function () {
       if(this.$store.state.islogin==0){
         this.$router.push({ path: '/login', query: { plan: 'private' }})
       }else{
         this.$router.push({ path: '/BasicLayout'})
       }
  }
}
</script>

<style>
html,body,#app,.el-container{
  width: 100%;
  height: 100%;
}
.el-menu-item.is-active{
  background: #fff
}
.header {
  background-color: #409EFF;
  color: #fff;
  line-height: 60px;
}
.el-aside{
  background-color: cadetblue
}
</style>