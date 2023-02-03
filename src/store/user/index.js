import {reqGetCode,reqUserRegister,reqUserLogin,reqUserInfo} from "@/api";
import {getToken, setToken} from "@/utils/token";

const state = {
    code:'',
    token:getToken(),
    userInfo:{}
}

const mutations = {
    GETCODE(state,code){
        state.code = code
    },
    USERLOGIN(state,data){
        state.token = data
    },
    GETUSERINFO(state,userInfo){
        state.userInfo = userInfo
    }
}

const actions = {
    async getCode({commit},phone){
        let res = await reqGetCode(phone)
        if(res.code==200){
            commit("GETCODE",res.data)
            return 'ok'
        }else {
            return Promise.reject(new Error('faile'))
        }
    },

    async userRegister({commit},data){
        let res = await reqUserRegister(data)
        if(res.code==200){
            return 'ok'
        }else {
            return Promise.reject(new Error('faile'))
        }
    },

    async userLogin({commit},data){
        let res = await reqUserLogin(data)
        if(res.code==200){
            setToken(res.data.token)
            commit('USERLOGIN',res.data.token)
            return 'ok'
        }else {
            return Promise.reject(new Error('faile'))
        }
    },

    async getUserInfo({commit}){
        let res = await reqUserInfo()
        if(res.code==200) {
            commit('GETUSERINFO', res.data)
        }
    },
}

const getters = {

}

export default{
    state,
    mutations,
    actions,
    getters
}