import xhRequest from '@/service'
import { AxiosHeaders } from 'axios'

/**
 * 用户登录
 * @param data
 * @returns
 */
export function login(data: any) {
  return xhRequest.post<any>({
    headers: new AxiosHeaders(),
    url: '/admin/employee/login',
    data,
  })
}

/**
 * 获取用户信息
 * @returns
 */
export function getUserInfo() {
  return xhRequest.get<any>({
    headers: new AxiosHeaders(),
    url: '/admin/employee/userInfo',
  })
}
