import xhRequest from '@/service'
import { AxiosHeaders } from 'axios'

/**
 * 分页获取员工的数据
 * @param employeeDTO
 * @returns
 */
export function getEmployeePage(employeeDTO: any) {
  return xhRequest.get<any>({
    headers: new AxiosHeaders(),
    url: '/admin/employee/page',
    params: employeeDTO,
  })
}
