import { reqGoodsInfo } from "@/api"

const state = {
    // categoryList:[],
    goodInfo:{},
}

const mutations = {
    GETGOODINFO(state,goodInfo){
        state.goodInfo = goodInfo
    },
}

const actions = {
    async getGoodInfo({commit},skuId){
        let res = await reqGoodsInfo(skuId)
        if(res.code==200){
            commit("GETGOODINFO",res.data)
        }
    },
}

const getters = {
    categoryView(state){
        return state.goodInfo.categoryView||{}
    },
    skuInfo(state){
        return state.goodInfo.skuInfo||{}
    },
    spuSaleAttrList(state){
        return state.goodInfo.spuSaleAttrList||{}
    },
}

export default{
    state,
    mutations,
    actions,
    getters
}