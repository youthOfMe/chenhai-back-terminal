import xhRequest from '@/service'
import { AxiosHeaders } from 'axios'

/**
 * 分页获取用户的数据
 * @param userPageDTO
 * @returns
 */
export function getUserPage(userPageDTO: any) {
  return xhRequest.get<any>({
    headers: new AxiosHeaders(),
    url: '/admin/user/page',
    params: userPageDTO,
  })
}
