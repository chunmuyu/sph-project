import {reqGetCode,reqUserRegister,reqUserLogin,reqUserInfo,reqLogout} from "@/api";
import {getToken, setToken,removeToken} from "@/utils/token";

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
    },
    CLEAR(state){
        state.token = ''
        state.userInfo = {}
        removeToken()
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
            return 'ok'
        }else{
            return Promise.reject(new Error('faile'))
        }
    },

    async userLogout({commit}){
        let res = await reqLogout()
        console.log(res)
        if(res.code==200) {
            commit("CLEAR")
            return 'ok'
        }else {
            return Promise.reject(new Error('fail'))
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