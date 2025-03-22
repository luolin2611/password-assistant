import request from '@/utils/request'
import type { ApiResponse, PasswordPageResponse } from '@/types'

// 分页查询密码列表
export function getPasswordPage(params: {
  current: number
  size: number
  platformName?: string
}) {
  return request<ApiResponse<PasswordPageResponse>>({
    url: '/password/page',
    method: 'get',
    params
  })
}

// 添加密码记录
export function addPassword(data: {
  platformName: string
  platformIcon: string
  description: string
  password: string
}) {
  return request<ApiResponse<number>>({
    url: '/password/add',
    method: 'post',
    data
  })
} 