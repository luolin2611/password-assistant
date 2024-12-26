<template>
  <div class="login">
    <div class="login-header">
      <van-image
        round
        width="80px"
        height="80px"
        src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
      />
      <h2>密码助手</h2>
    </div>

    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="formData.username"
          name="username"
          label="用户名"
          placeholder="请输入用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="formData.password"
          type="password"
          name="password"
          label="密码"
          placeholder="请输入密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
      </van-cell-group>

      <div class="submit-button">
        <van-button block type="primary" native-type="submit">
          登录
        </van-button>
      </div>
    </van-form>

    <div class="bottom-actions">
      <span @click="router.push('/register')">注册账号</span>
      <span @click="router.push('/forgot-password')">忘记密码</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { showToast } from 'vant'

const router = useRouter()

const formData = reactive({
  username: '',
  password: ''
})

const onSubmit = () => {
  // 这里应该实现登录逻辑
  showToast('登录成功')
  localStorage.setItem('isLoggedIn', 'true')
  router.replace('/')
}
</script>

<style lang="less" scoped>
.login {
  min-height: 100vh;
  background: #fff;
  padding: 60px 16px;

  .login-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 40px;

    h2 {
      margin-top: 16px;
      color: #323233;
      font-size: 24px;
    }
  }

  .submit-button {
    margin: 24px 16px;
  }

  .bottom-actions {
    display: flex;
    justify-content: space-between;
    padding: 0 32px;
    margin-top: 16px;
    
    span {
      color: #1989fa;
      font-size: 14px;
      cursor: pointer;
    }
  }
}
</style> 