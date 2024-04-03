<template>
  <div class="bg"></div>
  <el-affix>
    <el-menu
    :default-active="activeIndex2"
    class="el-menu-demo"
    mode="horizontal"
    background-color="rgba(55,55,55,.5)"
    text-color="#fff"
    :ellipsis="false"
    :router="true"
    @select="handleSelect"
  >
  <el-menu-item index="/" style="width: 200px; margin-left: 20px;">BYD</el-menu-item>
    <el-sub-menu index="1">
      <template #title>全部车型</template>
        <el-menu-item index="/WangCar">王潮</el-menu-item>
        <el-menu-item index="/HaiCar">海洋</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="2">
      <template #title>服务支持</template>
      <el-menu-item>金融服务</el-menu-item>
      <el-menu-item>售后服务</el-menu-item>
      <el-menu-item>官方认证二手车</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="3">
      <template #title>预约试驾</template>
      <el-menu-item>王朝车型试驾</el-menu-item>
      <el-menu-item>海洋车型试驾</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="4">
      <template #title>门店查询</template>
      <el-menu-item>王朝经销商</el-menu-item>
      <el-menu-item>海洋经销商</el-menu-item>
      <el-menu-item>门店查询</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="5">
      <template #title>品牌中心</template>
      <el-menu-item>俩个不止</el-menu-item>
      <el-menu-item>四大领先</el-menu-item>
      <el-menu-item>链接共建</el-menu-item>
      <el-menu-item>一路向前</el-menu-item>
    </el-sub-menu>
    <el-menu-item>集团网站</el-menu-item>

    <div class="flex-grow" />
    <el-menu-item @click="SearchShow = !SearchShow">
      <el-icon>
        <i-ep-search />
      </el-icon>
      搜索
    </el-menu-item>
    <el-sub-menu index="/user" expand-close-icon="false" expand-open-icon="false"  v-if="UserInfo.token.userId">
      <template #title>
        <el-icon>
          <i-ep-user />
        </el-icon>
        {{UserInfo.token.userId}}
      </template>
      <el-menu-item>收藏</el-menu-item>
      <el-menu-item>订单</el-menu-item>
      <el-menu-item>个人中心</el-menu-item>
      <el-menu-item @click="UserInfo.rmtoken()">退出登录</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="/login" v-else>
      <el-icon>
        <i-ep-user />
      </el-icon>
      登录/注册
    </el-menu-item>
    <el-sub-menu index="9" expand-close-icon="false" expand-open-icon="false" popper-class="mySelect">
      <template #title>
        <i-ep-Expand />
      </template>
      <el-menu-item>全国活动</el-menu-item>
      <el-menu-item>我的朋友</el-menu-item>
      <el-menu-item>新闻资讯</el-menu-item>
      <el-menu-item>品牌互动</el-menu-item>
    </el-sub-menu>
    
    <el-menu-item>
      <el-icon>
        <i-ep-LocationInformation />
      </el-icon>
      选择地区
    </el-menu-item>
  </el-menu>
  <MySeachVue v-if="SearchShow" />
  </el-affix>
</template>

<script setup>
import {useUserinfoStore} from '@/stores'
import { ref } from 'vue'
import MySeachVue from './MySeach.vue'
const UserInfo = useUserinfoStore()
const SearchShow = ref(false)

</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.bg {
  position: absolute;
  width: 100%;
  height: 4.3%;
  background-color: #373737;
}
.el-menu--horizontal.el-menu {
  border: 0;
}
.el-menu-demo {
  position: relative;
  width: 100%;
  
}
.flex-grow {
  flex-grow: 1;
}
.mySelect {
  width: 100px;
}
</style>