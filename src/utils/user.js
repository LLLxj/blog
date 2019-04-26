import Cookies from 'js-cookie'
const TokenKey = 'b-token'

/**
 * 获取token
 */
export function getToken () {
  // return Number(Cookies.get(TokenKey))
  return Cookies.get(TokenKey)
}
/**
 * 保存token
 */
export function setToken (token) {
  Cookies.set(TokenKey, token)
}


