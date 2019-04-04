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