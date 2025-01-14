import request from '@/utils/request'
import type { RegisterParams, RegisterResponse, SendVerifyCodeResponse } from './types'

// 发送注册邮箱验证码
export function sendVerifyCode(email: string) {
  return request<SendVerifyCodeResponse>({
    url: '/user/send-code',
    method: 'get',
    params: { email }
  })
}

// 注册
export function register(data: RegisterParams) {
  return request<RegisterResponse>({
    url: '/user/register',
    method: 'post',
    data
  })
} 