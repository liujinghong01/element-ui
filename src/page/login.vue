<template>
    <div class="content">
        <div class="box">
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="账号">
                    <el-input placeholder="请输入账号" v-model="form.code" clearable></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input placeholder="请输入密码" v-model="form.password" type="password" clearable></el-input>
                </el-form-item>
            </el-form>
            <el-button @click.native='login' style="width:200px" type="primary">登录</el-button>
        </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        form:{
            code: '',
            password:'',
        }
      }
    },
    methods:{
        login(){
            this.$store.commit('login')
            this.$router.push({ path: '/BasicLayout'})
        }
    }
  }
</script>
<style>
 .content{
     width: 100%;
     height: 100%;
     background: url(../static/bg.jpg) no-repeat center center;
     background-size: auto 100% ;
     display: flex;
     justify-content: center;
     align-items: center;
 }
 .content>div.box{
     width: 400px;
     background: #fff;
     padding:50px;
     border-radius: 10px;
     text-align: center;
 }
</style>
