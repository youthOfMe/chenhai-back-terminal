import xhRequest from '@/service'
import { AxiosHeaders } from 'axios'

/**
 * 获取一级分类目录
 * @returns
 */
export function getCommunityCategoryPage() {
  return xhRequest.get<any>({
    headers: new AxiosHeaders(),
    url: '/admin/community/category/parentList',
  })
}
