import { requestCategoryList, requestGetBannerList } from '@/api'

const state = {
  categoryList: [], // 三级菜单数据
  bannerList: [], // 轮播图数据
}

const actions = {
  async categoryList({ commit }) {
    let result = await requestCategoryList()
    if (result.code === 200) {
      commit('CATEGORYLIST', result.data)
    }
  },
  async getBannerList({ commit }) {
    let result = await requestGetBannerList()
    console.log(result)
    if (result.code === 200) {
      commit('GETBANNERLIST', result.data)
    }
  },
}

const mutations = {
  CATEGORYLIST(state, categoryList) {
    state.categoryList = categoryList
  },
  GETBANNERLIST(state, getBannerList) {
    state.getBannerList = getBannerList
  },
}

const getters = {}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
}
