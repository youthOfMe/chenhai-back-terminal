import xhRequest from '@/service'
import { AxiosHeaders } from 'axios'

/**
 * 分页获取官方商品数据
 * @param commodityPageDTO
 * @returns
 */
export function getCommodityPage(commodityPageDTO: any) {
  return xhRequest.get<any>({
    headers: new AxiosHeaders(),
    url: '/admin/dish/page',
    params: commodityPageDTO,
  })
}
