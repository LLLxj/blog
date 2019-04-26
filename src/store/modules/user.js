import { loginInfo } from '@/api/home'
// import {  removeToken } from '@/utils/auth'

const user = {
  state: {
    name: '',
  },

  mutations: {
    SET_NAME: (state, name) => {
      state.name = name
    }
  },

  actions: {

    // 获取用户信息
    GetInfo({commit, state}) {
      return new Promise((resolve, reject) => {
        loginInfo(state.name).then(response => {
          console.log(response)
          if (!response.data) { // 由于mockjs 不支持自定义状态码只能这样hack
            reject('error')
          }
          const data = response.data
          commit('SET_NAME', data.name)
          // commit('SET_INTRODUCTION', data.introduction)
          resolve(response)
        }).catch(error => {
          console.log('ceshierror')
          reject(error)
        })
      })
    },

  }
}

export default user
