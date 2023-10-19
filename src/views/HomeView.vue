
<template>
  <div class="common-layout">
    <el-container>
      <!-- 头部导航栏 -->
      <el-header class="header"><MyNavigation /></el-header>
      <!-- 中间内容 -->
      <el-main>
        <router-view></router-view>
      </el-main>
      <!-- 底部内容 -->
      <el-footer class="SetFooter">
        <div class="FooterMain">
          <el-row>
            <el-col :span="3">
              比亚迪汽车
              <div class="FooterList">
                <ul>
                  <li>
                    <el-link :underline="false">
                        <el-icon :size="15">
                          <i-ep-ArrowRight></i-ep-ArrowRight>
                        </el-icon>
                      下载用户手册
                    </el-link>
                  </li>
                  <li>
                    <el-link :underline="false">
                      <el-icon :size="15">
                        <i-ep-ArrowRight></i-ep-ArrowRight>
                      </el-icon>
                      经销商查询
                    </el-link>
                  </li>
                  <li>
                    <el-link :underline="false">
                      <el-icon :size="15">
                        <i-ep-ArrowRight></i-ep-ArrowRight>
                      </el-icon>
                      服务点店查询
                    </el-link>
                  </li>
                  <li>
                    <el-link :underline="false">
                        <el-icon :size="15">
                          <i-ep-ArrowRight></i-ep-ArrowRight>
                        </el-icon>
                      充电桩查询
                    </el-link>
                  </li>
                </ul>
              </div>
            </el-col>
            <el-col :span="3">
              帮助中心
              <div class="FooterList">
                <ul>
                  <li>
                    <el-link :underline="false">
                        <el-icon :size="15">
                          <i-ep-ArrowRight></i-ep-ArrowRight>
                        </el-icon>
                      订购流程
                    </el-link>
                  </li>
                  <li>
                    <el-link :underline="false">
                      <el-icon :size="15">
                        <i-ep-ArrowRight></i-ep-ArrowRight>
                      </el-icon>
                      买家须知
                    </el-link>
                  </li>
                  <li>
                    <el-link :underline="false">
                      <el-icon :size="15">
                        <i-ep-ArrowRight></i-ep-ArrowRight>
                      </el-icon>
                      交易条款
                    </el-link>
                  </li>
                  <li>
                    <el-link :underline="false">
                        <el-icon :size="15">
                          <i-ep-ArrowRight></i-ep-ArrowRight>
                        </el-icon>
                      关于订单
                    </el-link>
                  </li>
                </ul>
              </div>
            </el-col>
            <el-col :span="3">
              更多
              <div class="FooterList">
                <ul>
                  <li>
                    <el-link :underline="false">
                        <el-icon :size="15">
                          <i-ep-ArrowRight></i-ep-ArrowRight>
                        </el-icon>
                      加入比亚迪
                    </el-link>
                  </li>
                  <li>
                    <el-link :underline="false">
                      <el-icon :size="15">
                        <i-ep-ArrowRight></i-ep-ArrowRight>
                      </el-icon>
                      经销商加盟
                    </el-link>
                  </li>
                  <li>
                    <el-link :underline="false">
                      <el-icon :size="15">
                        <i-ep-ArrowRight></i-ep-ArrowRight>
                      </el-icon>
                      大客户业务
                    </el-link>
                  </li>
                  <li>
                  </li>
                </ul>
              </div>
            </el-col>
            <el-col :span="6">
              关注与联系
              <div class="Phone_number" >
                <ul>
                  <li>客户服务热线</li>
                  <li>4008-303-666</li>
                  <li>销售服务时间</li>
                  <li>08:00-22:00</li>
                </ul>
              </div>
            </el-col>
            <el-col :span="9" class="code-wrap">
                <img src="https://www.bydauto.com.cn/pc/_nuxt/img/android.46c1bf9.png" class="image"/>
                <img src="https://www.bydauto.com.cn/pc/_nuxt/img/android.46c1bf9.png" class="image"/>
                <img src="https://www.bydauto.com.cn/pc/_nuxt/img/android.064a540.png" class="image"/>
                <img src="https://www.bydauto.com.cn/pc/_nuxt/img/android.064a540.png" class="image"/>
            </el-col>
          </el-row>
        </div>
        
        <div class="FooterButton">
          <p>仰望汽车 | 腾势汽车 | 比亚迪商用车 | 比亚迪对公 | 比亚迪汽金网站 | 弗迪租赁 | 开发者站 | APP下载 | 漏洞安全响应中心 | 隐私条款 | 联系我们</p>
          <p>版权所有©比亚迪股份有限公司     粤ICP备10216027号   营业执照</p>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>


<script setup>


</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.header {
  top: 0%;
  height: 57px;
  padding: 0;
  margin: 0;
  z-index: 99;
}
.common-layout {
  position: relative;
}



.SetFooter {
  position: relative;
  background: #222;
  height: 600px;
  color: white;
}
.FooterMain {
  position: absolute;
  width: 80%;
  height: 50%;
  padding-left: 15%;
  top: 20%;
}

.code-wrap :nth-child(n) {
  width: 25%;
  margin-left: 10%;
  padding-top: 5%;
}

.FooterList ul{
  list-style: none;
  padding-top: 10%;
  
}

.FooterList ul li{
  list-style: none;
  font-size: 15px;
  padding-top: 10%;
}
.el-link {
  color: hsla(0,0%,100%,.7);
}
.el-link :hover {
  color: white;
}

.Phone_number {
  list-style: none;
  font-size: 15px;
  padding-top: 10%;
  color: hsla(0,0%,100%,.7);
}
.Phone_number ul{
  list-style: none;
}
.Phone_number ul li{
  padding-top: 5px;
}

.FooterButton {
  position: absolute;
  width: 100%;
  height: 18%;
  bottom: 0;
  background: #111;
  text-align: center;
  line-height: 50px;
  font-size: 10px;
  color: hsla(0,0%,100%,.5);
}
</style>