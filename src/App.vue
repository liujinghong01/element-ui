<template>
  <div id="app">
    <el-container>
       <el-aside  :class="this.$store.state.isNav==1?'active':''" >
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