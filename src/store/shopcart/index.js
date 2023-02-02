import {reqCartList,reqDeleteCartById,reqUpdateCheckedById} from "@/api";

const state = {
    cartList:[]
}

const mutations = {
    GETCARTLIST(state,cartList){
        state.cartList = cartList
    }
}

const actions = {
    async getCartList({commit}){
        let res = await reqCartList()
        if(res.code==200){
            commit("GETCARTLIST",res.data)
        }
    },
    async deleteCartListBySkuId({commit},skuId){
        let res = await reqDeleteCartById(skuId)
        if(res.code==200){
            return 'ok'
        }else{
            return Promise.reject(new Error('faile'))
        }
    },
    async updateCheckedById({commit}, {skuId,isChecked}){
        let res = await reqUpdateCheckedById(skuId,isChecked)
        if(res.code==200){
            return 'ok'
        }else{
            return Promise.reject(new Error('faile'))
        }
    },
}

const getters = {
    cartList(state){
        return state.cartList[0]||{}
    },

}

export default{
    state,
    mutations,
    actions,
    getters
}