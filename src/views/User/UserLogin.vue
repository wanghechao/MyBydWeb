<script setup>
import { ref } from "vue";
import { GetGraphicCaptcha, getMegCode, UserLogin } from '@/api/UserInfo.js'
import {useUserinfoStore} from '@/stores'
import { useRouter } from 'vue-router'
const UserInfo = useUserinfoStore()
const router = useRouter()

  // 获取图形验证码
  const GetImg = async () => {
    let res = await GetGraphicCaptcha()
    form.value.getimg = res.data.base64
    form.value.captchaKey = res.data.key
  }
  GetImg()
  // 表单值
  const form = ref({
    mobile:'',
    imgPw:'',
    mesPw:'',
    getimg:'',
    captchaKey:''
  })
  const isReadArticle = ref(false)

  const rules = ref({
    mobile:[{required: true , message: '请输入手机号' , trigger: 'blur'} , {min: 11 , max:11 , message:'请输入11位手机号' , trigger:'blur'}],
    imgPw:[{required: true , message: '请输入图形验证码' , trigger: 'blur'}],
    mesPw:[{required: true , message: '请输入手机验证码' , trigger: 'blur'}]
  })

  // 发送短信倒计时
  const sendmeg = ref({
    startTime: 5,
    endTime: 5,
    TimeSecond: null
  })

  // 发送短信功能
  const sendmegfn = async () => {
    const res = await getMegCode(form.value.imgPw , form.value.captchaKey , form.value.mobile)
    if(res.status === 200) {
      ElMessage.success('短信发送成功' + res.message)

      sendmeg.value.TimeSecond = setInterval(() => {
        sendmeg.value.startTime--
        if(sendmeg.value.startTime === 0 ) {
          clearInterval(sendmeg.value.TimeSecond)
          sendmeg.value.TimeSecond = null
          sendmeg.value.startTime = sendmeg.value.endTime
        }
        
      } , 1000)
    }
  }

  // 登录功能
  const UserLoginFn = async () => {
    
    if(isReadArticle.value) {
      const res = await UserLogin(form.value.mobile , form.value.mesPw)
      UserInfo.addtoken(res.data)
      ElMessage.success('登录成功')
      router.push('/')
    } else {
      ElMessage.warning('请勾选阅读隐私条款')
    }
    
  }
</script>

<template>
  <div class="login">
    <img src="https://www.bydauto.com.cn/pc/_nuxt/img/loginbg.43e9111.png" alt="" class="bg_img">
    <div class="login_form">
      <img src="https://www.bydauto.com.cn/pc/_nuxt/img/frombg.b271dc0.png" alt="" class="login_left_img">
      <!-- 表单组件 -->
      <div class="formModel">
        <div class="form_title">手机验证码登录</div>

        <div class="form">
          <el-form :rules="rules" :model="form">
            <el-form-item prop="mobile">
              <el-input size="small" placeholder="请输入手机号" v-model="form.mobile">
                <template #prefix> 
                  <i-ep-iphone></i-ep-iphone>
                </template>
              </el-input>
            </el-form-item>
            <el-form-item prop="imgPw">
              <el-input size="small" placeholder="请输入图形验证码" v-model="form.imgPw" />
                <div class="tuimg" @click="GetImg">
                  <img :src="form.getimg" alt="">
                </div>
            </el-form-item>
            <el-form-item prop="mesPw">
              <el-input size="small" placeholder="请输入短信验证码" v-model="form.mesPw">
                <template #prefix> 
                  <i-ep-message></i-ep-message>
                </template>
              </el-input>
              <div class="sentmeg">
                <el-button
                size="small"
                :key="danger"
                :type="danger"
                link
                @click="sendmegfn"
                :disabled = sendmeg.TimeSecond
                >{{sendmeg.startTime === sendmeg.endTime ? '发送短信' : sendmeg.startTime + '秒后点击' }}</el-button>
              </div>
            </el-form-item>
            <el-form-item>
                  <el-checkbox size="small" label="我已经阅读并同意隐私条款" style="border-bottom: 1px solid black;" v-model="isReadArticle"/>
            </el-form-item>
                  <el-form-item>
                    <el-button color="#990015" size="small" style="width: 100%;" @click="UserLoginFn">
                      登录
                    </el-button>
                  </el-form-item>
          </el-form>
          
        </div>
        
      </div>
    </div>
  </div>
</template>

<style scoped>
.login {
  width: 100%;
  height: 100%;
}

.bg_img {
  width: 100%;
  display: block;
  height: 100%;
}



.login_form {
  position: absolute;
  display: flex;
  right: 15%;
  top: 12%;
  width: 33%;
  height: 25%;
  border: 1px solid white;
  z-index: 10;
  overflow: hidden;
}

.login_left_img {
  width: 65%;
  height: 100%;
}

.formModel {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: white;
}

.form_title {
  position: absolute;
  top: 15%;
  left: 30%;
  font-size: 15px;
  font-weight: 300;
}

.form {
  position: absolute;
  top: 30%;
  left: 10%;
  height:30%;
  width: 80%;
}

.tuimg {
  position: absolute;
  right: 0;
  height: 100%;
  width: 50%;
  object-fit: contain;
  z-index: 6;
}

.tuimg img {
  width: 100%;
  height: 100%;
}

.sentmeg {
  position: absolute;
  display: flex;
  text-align: center;
  align-items: center;
  right: 5%;
  height: 100%;
}
</style>