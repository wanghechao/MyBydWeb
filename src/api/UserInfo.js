import request from '@/utils/request.js'

export const GetGraphicCaptcha = () => request.get('/captcha/image')

// 获取手机短信
export const getMegCode = (captchaCode , captchaKey , mobile) => request.post('/captcha/sendSmsCaptcha' , {
    form:{
        captchaCode,
        captchaKey,
        mobile
    }
})

export const UserLogin = (mobile , smsCode) => request.post('/passport/login' , {
    form: {
        mobile,
        smsCode,
        isParty:false,
        partyData:{}
    }
})