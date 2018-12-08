<template>
  <el-row>
    <el-col :span="24">
      
      <div @click="switchNav"  class="head-wrap"> 
        <div class="switchNav">
          <icon v-if="this.$store.state.isNav==1" name="angle-double-left"></icon>
          <icon v-else name="angle-double-right"></icon>
        </div> 
        <div class="title">
          Element
        </div>
         
      </div>
    </el-col>
  </el-row>
</template>
<script>
export default {
  data(){
    return{
      isNav:this.$store.state.isNav
    }
  },
  methods:{
    switchNav(){
      if(this.$store.state.isNav==1){
        this.$store.commit('closeNav')
      }else{
        this.$store.commit('openNav')
      }
    }
  }
  
}
</script>

<style scoped>

.head-wrap{
}
.head-wrap>div{
  display: inline-block;
}
.title{
  flex: 1;
}
.switchNav{
  width: 50px;
  margin-left: -20px;
  text-align: center;
}
</style>
