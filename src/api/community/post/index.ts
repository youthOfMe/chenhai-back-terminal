import xhRequest from '@/service'
import { AxiosHeaders } from 'axios'

/**
 * 分页获取社区帖子数据
 * @returns
 */
export function getPostPage() {
  return xhRequest.get<any>({
    headers: new AxiosHeaders(),
    url: '/admin/community/post/list',
  })
}
