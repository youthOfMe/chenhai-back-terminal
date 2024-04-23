import xhRequest from '@/service'
import { AxiosHeaders } from 'axios'

/**
 * 分页获取社区板块数据
 * @returns
 */
export function getCommunityBlockPage() {
  return xhRequest.get<any>({
    headers: new AxiosHeaders(),
    url: '/admin/community/category/list',
  })
}
