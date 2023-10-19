import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserinfoStore = defineStore('UserInfo' , () => {
    const token = ref({})
    const addtoken = (val) => {
        token.value = val
    }

    const rmtoken = () => {
        token.value = {}
    }

    return {
        token,
        addtoken,
        rmtoken
    }
}, 
{
    persist:true
})