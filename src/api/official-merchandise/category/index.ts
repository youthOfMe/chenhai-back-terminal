import xhRequest from '@/service'
import { AxiosHeaders } from 'axios'

/**
 * 分页获取官方商品分类数据
 * @param categoryPageDTO
 * @returns
 */
export function getCategoryPage(categoryPageDTO: any) {
  return xhRequest.get<any>({
    headers: new AxiosHeaders(),
    url: '/admin/category/page',
    params: categoryPageDTO,
  })
}
