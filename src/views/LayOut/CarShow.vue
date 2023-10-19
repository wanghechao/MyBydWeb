<template>
    <div class="main">
          <el-row>
            <el-col :span="12"><img src="https://emall.bydauto.com.cn/uploads/lunBoImg/1687768566320031.png" alt="王朝" style="width: 100%;"></el-col>
            <el-col :span="12"><img src="https://emall.bydauto.com.cn/uploads/lunBoImg/1692956983586467.png" alt="海洋" style="width: 100%;"></el-col>
          </el-row>
          <div class="SetCarPosition"> 
            <el-row>
              <el-col :span="12">
                <router-link to="/WangCar">
                  <img src="https://emall.bydauto.com.cn/uploads/lunBoImg/1687768566285745.png" alt="王朝" style="width: 100%;" class="CarAnima">
                </router-link>
              </el-col>
              <el-col :span="12">
                <router-link to="/HaiCar">
                  <img src="https://emall.bydauto.com.cn/uploads/lunBoImg/1692958481146541.png" alt="海洋" style="width: 100%;" class="CarAnima">
                </router-link>
              </el-col>
            </el-row>
          </div>
          
    </div>
</template>

<script setup>
</script>

<style scoped>
.main {
  position: relative;
  top: 0;
  width: 100%;
}

.SetCarPosition {
  position: absolute;
  top: 0;
}

.CarAnima {
  animation: caranima 2s;
}

@keyframes caranima {
  0% {
    transform: translate(0 , -100px) scale(0);
  }
  100% {
    transform: translate(0) scale(1);
  }
}

</style>