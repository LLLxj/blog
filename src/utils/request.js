import axios from 'axios'
import { Message } from 'element-ui'
import Vue from 'vue'
import { getToken } from '@/utils/user'

// 创建axios实例
const service = axios.create({
  // baseURL: 'http://localhost:5000',
  // baseURL: '112.74.162.61:5000',
  baseURL: process.env.BASE_API, // api的base_url
  // baseURL: '127.0.0.1',
  timeout: 15000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(config => {
  // console.log(config)
  // console.log(Vue.cookie.get('l-token'))
  // config.headers['L-Token'] = Vue.cookie.get('l-token')
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

service.adornUrl = (actionName) => {
  // 非生产环境 && 开启代理, 接口前缀统一使用[/proxyApi/]前缀做代理拦截!
  return  process.env.BASE_API + actionName
}

// // respone拦截器
// service.interceptors.response.use(
//   response => response,
//   response => {
//   /**
//   * code为非20000是抛错 可结合自己业务进行修改
//   */
//     const res = response.data
//     console.log(res)
//     if (res.code !== 20000) {
//       Message({
//         message: res.message,
//         type: 'error',
//         duration: 5 * 1000
//       })

//       // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
//       if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
//         MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
//           confirmButtonText: '重新登录',
//           cancelButtonText: '取消',
//           type: 'warning'
//         }).then(() => {
//           store.dispatch('FedLogOut').then(() => {
//             location.reload()// 为了重新实例化vue-router对象 避免bug
//           })
//         })
//       }
//       return Promise.reject('error')
//     } else {
//       return response.data
//     }
//   },
//   error => {
//     console.log('err' + error)// for debug
//     Message({
//       message: error.message,
//       type: 'error',
//       duration: 5 * 1000
//     })
//     return Promise.reject(error)
//   }
// )

export default service
