// 注册请求参数
export interface RegisterParams {
  username: string
  email: string
  verifyCode: string
  password: string
}

// 注册响应
export interface RegisterResponse {
  token: string
  userId: string
}

// 发送验证码响应
export interface SendVerifyCodeResponse {
  message: string
} 