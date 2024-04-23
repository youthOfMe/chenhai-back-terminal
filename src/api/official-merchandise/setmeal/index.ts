import xhRequest from '@/service'
import { AxiosHeaders } from 'axios'

/**
 * 分页获取官方商品套餐的数据
 * @param setmealPageDTO
 * @returns
 */
export function getSetmealPage(setmealPageDTO: any) {
  return xhRequest.get<any>({
    headers: new AxiosHeaders(),
    url: '/admin/setmeal/page',
    params: setmealPageDTO,
  })
}
