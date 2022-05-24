<template>
  <div class="title">工业货品</div>
  <div>
     
  <div class="leftcontent">
    <div class="title" style="  background-color: whitesmoke;">货架</div>

  <el-table :data="filterTableData" 
   @selection-change="handleSelectionChange" border stripe style="width: 100%" max-height="550">
    <el-table-column type="selection" width="55"/>
    <el-table-column  label="Name"  prop="name" />
    <el-table-column align="right">
            <template #header >
        <el-input type="text" v-model="search" size="large" placeholder="商品搜索,输入id"></el-input>
       
      </template>
         <template  #default="scope">
        <el-button size="default" @click.prevent="opennew(scope.$index)" @click="display(scope.row.name)">
         商品详情
        </el-button>
        <el-button size="default" @click.prevent="deleteRow(scope.$index)">
          货品出库
        </el-button>
      </template>
    </el-table-column>
  </el-table>
    <el-button class="mt-4" style="text-align:center;width: 70%" @click.prevent="onAddItem" @click="ageInc">新增货品入库</el-button>
  <el-button @click="clearall()">全部出库</el-button>
   </div>
   <div class="rightcontent">
    <div class="title" style="  background-color: whitesmoke;">货品详情：</div>
     <div>当前货品位置：{{result}}</div>
     <div>当前货品id：{{result2}}</div>
     <div>最新货品id：{{age-1}}</div>
     </div>
     </div>
</template>

<script lang="ts" setup>        //lang="ts" 是作为ts  
import {ref } from 'vue'
const now = new Date()
const age = ref(4)
let result = ref(0)
let result2 = ref(0)
const filterTableData= ref([
  {
   name: '工业用品1',
  },
  {
    name: '工业用品2',
  },
  {
     name: '工业用品3',

  },
])
const ageInc = () => {
  age.value++
}
const copy =(cp:number) => {
   result.value=cp;
}
const opennew = (id:number) => {
   const idname=id+1
   copy(idname)
  console.log("编号"+idname+"用品"+age.value); 
  // console.log(idname)
}
const display=(id:number)=>{
  result2.value=id;
  console.log(result2)
}
const deleteRow = (index: number) => {
  filterTableData.value.splice(index, 1)
}

const onAddItem = () => {
  now.setDate(now.getDate() + 1)//根据当前日期增加
  filterTableData.value.push({
    // name: '商业用品'+age.value,
      name: '工业用品'+age.value,
  })
  console.log(now.getDate());
}
const clearall= ()=>{
 filterTableData.value.splice(0)    
}
</script>

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