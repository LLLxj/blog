import request from '@/utils/request'

export function categoryList(query) {
  return request({
    url: '/category/list',
    method: 'get',
    params: query
  })
}

export function articleList(query) {
  return request({
    url: '/article/list',
    method: 'get',
    params: query
  })
}

// 获取文章详情
export function articleInfo(data) {
  return request({
    url: '/article/info/' + data,
    method: 'get',
  })
}

// 登录
export function login(data) {
  return request({
    url: '/login',
    method: 'post',
    data
  })
}

export function loginInfo(username) {
  return request({
    url: '/getInfo',
    method: 'get',
    params: { username }
  })
}

export function register(data) {
  return request({
    url: '/register',
    method: 'post',
    data
  })
}

export function checkName(data) {
  return request({
    url: '/register/checkName/' + data,
    method: 'get',
  })
}

export function checkTel(data) {
  return request({
    url: '/register/checkTel/' + data,
    method: 'get',
  })
}

// /register/checkName