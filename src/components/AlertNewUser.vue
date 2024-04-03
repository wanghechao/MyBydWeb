<template>
  
    <el-dialog
    v-model="centerDialogVisible"
      title="你好，有一条信息需要你阅读"
      width="500"
      align-center
    >
      <div class="alertext">
        <span>本网站参考比亚迪汽车官网旧版制作<br></span>
        <span>官方网址为：<a href="https://www.bydauto.com.cn/pc/">https://www.bydauto.com.cn/pc/</a><br></span>
        <span>仅供交流学习,如有侵权请联系删除<br></span>
        <span>QQ邮箱:<b>3082578126@qq.com</b></span>
      </div>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="centerDialogVisible = false">取消</el-button>
          <el-button type="primary" @click="centerDialogVisible = false">
            确定
          </el-button>
        </div>
      </template>
    </el-dialog>
  </template>

  <script setup>
  import { ref } from 'vue'

  let centerDialogVisible = ref(true);

  </script>

  <style scoped>
    .alertext{
      font-size: 17px;
    }
  </style>
  