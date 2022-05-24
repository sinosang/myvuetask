
<template>

<div class="mid">
 <el-form :inline="true" class="formlabel"> 
  <div style="
   position:relative;
   left:40%;
   font-weight: bold;
 font-size: 30px;">Login</div>
   <div style="margin: 5%" />
  <el-form-item label="账户" class="user">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="密码" class="pass">
    <el-input type="password" v-model="form.pwd"></el-input>
  </el-form-item>

  
    <el-button type="primary" 
    class="loginbtn" @click="onSubmit">登录</el-button>

    <el-button class="addbtn" @click="delet">取消</el-button>

</el-form>
</div>
  <router-view></router-view>
</template>


<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          pwd:''
        }
      }
    },
    methods: {
      onSubmit() {
        this.$router.push('/home');
        console.log('submit!');
      },
      delet(){
        location.reload();
      }
    }
  }
</script>

<style>

.formlabel{
  position:relative;
  margin: 0% auto;
  width:50%;
 top:150px;
 height:300px;
 border-radius: 10%;
  background-color: whitesmoke;
}
.mid{
  position:relative;
  margin: 0% auto;
  width:60%;
}
.user{
  position:relative;
 
  top:10%;
  width:90%;
}
.pass{
  position:relative;
 
  top:15%;
  width:90%;
}
.loginbtn{
  position:absolute;
  
  bottom:20%;
left:20%;
  
}
.addbtn{
  position:absolute;
  bottom:20%;
 right:20%;
 

}

</style>



