<template>
    <div class="profile">
      <van-cell-group inset>
        <van-cell>
          <template #icon>
            <van-image
              round
              width="60px"
              height="60px"
              :src="userInfo.avatar"
            />
          </template>
          <template #title>
            <div class="username">{{ userInfo.username }}</div>
          </template>
        </van-cell>
  
        <van-cell title="密码记录数" :value="userInfo.passwordCount + '条'" />
        <van-cell title="创建时间" :value="userInfo.createTime" />
      </van-cell-group>
  
      <div class="logout-button">
        <van-button 
          type="danger" 
          block 
          @click="handleLogout"
        >
          退出登录
        </van-button>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue'
  
  const userInfo = ref({
    avatar: '默认头像URL',
    username: '用户名',
    passwordCount: 0,
    createTime: '2024-03-20'
  })
  
  const handleLogout = () => {
    // 实现退出登录逻辑
  }
  </script>
  
  <style scoped>
  .profile {
    padding: 20px;
  }
  
  .username {
    font-size: 18px;
    font-weight: bold;
    margin-left: 10px;
  }
  
  .logout-button {
    margin-top: 20px;
    padding: 0 16px;
  }
  </style> 