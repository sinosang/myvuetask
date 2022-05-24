
<template>
  <div class="title">出入货物记录</div>
      <div class="title">没弄完</div>
  <div class="leftcontent">
        <div>store:{{$store.getters.userId}}</div>
</div>
</template>

<style>
.title{
  font-size:22px;
  font-weight:bold;
  color: #545c64;
  background-color: white;
}
.leftcontent{
  float:left;
  width:50%;
  height:650px;
  background-color: whitesmoke;
}
.rightcontent{
  float:left;
  width:50%;
  height:650px;
  background-color: aqua;
}
</style>