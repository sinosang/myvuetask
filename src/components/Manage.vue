<template style="height:100%;">
  <el-menu
    :default-active="activeIndex2"
    class="el-menu-demo"
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    @select="handleSelect"
  ><el-menu-item class="interval"></el-menu-item> 
   <el-menu-item index="0" >仓库管理系统</el-menu-item>
   <el-menu-item class="interval"></el-menu-item> 
    <el-menu-item index="1" @click="onSubmit1">仓库面板Home</el-menu-item>
    <el-menu-item class="interval"></el-menu-item> 
    <!-- <router-link :to="{ name: 'Menagement' }"> -->
    <el-menu-item index="2" @click="onSubmit2">后台管理menage</el-menu-item>
      <!-- </router-link > -->
    <el-menu-item class="interval"></el-menu-item> 
     
    <el-menu-item index="3" @click="onSubmit3">返回登录Login</el-menu-item>

  </el-menu>


<div class="menu3">
<div class="title2">后台管理项目</div>
 <el-row>
          <el-col>         
            <el-menu
              default-active="1-1"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b"
            >
              <el-submenu index="1">
                <el-menu-item-group>
                    <el-menu-item class="interval2"></el-menu-item> 
                  <el-menu-item class="el-menu-item" index="1-2"
                  @click="int" >出入库记录</el-menu-item> 
                    <el-menu-item class="interval2"></el-menu-item> 
                  <el-menu-item class="el-menu-item" index="1-3"
                  @click="del" >货品删除</el-menu-item>
                    <el-menu-item class="interval2"></el-menu-item> 
                    <el-menu-item class="interval2"></el-menu-item> 
                    <el-menu-item class="interval2"></el-menu-item> 
                    <el-menu-item class="interval2"></el-menu-item> 
                <el-menu-item class="interval2"></el-menu-item> 
                <el-menu-item class="interval2"></el-menu-item> 
                </el-menu-item-group>
              </el-submenu>
            </el-menu>
          </el-col>
        </el-row>
</div>

<div class="content">
<div class="content2">
 <router-view>
 </router-view>
</div>
  </div>

  </template>

<script>
  export default {
    data() {
     
    },
    methods: {
      onSubmit1() {
       this.$router.push('/home');
      },
        onSubmit2() {
        this.$router.push('/Manage');
      },
        onSubmit3() {
        this.$router.push('/system');
      },
      int(){
        this.$router.push('/input');
      }
     
    }
  }
</script>

<style>
  .content{
    position:relative;
    float:left;
    width:85%;
    height:650px;
  background-color:whitesmoke;
  }
  .content2{
    text-align: center;
  }
.menu2{
position:relative;
float:left;
width:75%;
}
.el-menu-demo{
  margin:0% auto;
   height:20%;
}
.interval{
  width:10%;
}
.interval2{
  height:50px;
}
.menu3{
  position:relative;
  float:left;
  top:15%;
  width:15%;
 
}
.title2{
   position:relative;
    width:100%;
    font-size:22px;
    font-weight: blod;
  text-align:center;  
 line-height:50px; 
 overflow:hidden; 
  background-color:#545c64;
   color:#fff;
}
.el-menu-item{
  font-size: 18px;
text-align: center;
line-height:50px; 
overflow:hidden; 
}

</style>  

