import request from '@/utils/request'

export function categoryList(query) {
  return request({
    url: '/category/list',
    method: 'get',
    params: query
  })
}