<template>
  <div class="password-detail">
    <van-nav-bar
      title="密码详情"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="detail-content">
      <van-cell-group inset>
        <van-cell>
          <template #icon>
            <van-image
              round
              width="40px"
              height="40px"
              :src="passwordData?.imageUrl"
            />
          </template>
          <template #title>
            <span class="platform-name">{{ passwordData?.platformName }}</span>
          </template>
        </van-cell>

        <van-cell title="密码">
          <template #value>
            <div class="password-row">
              <span>{{ showPassword ? passwordData?.password : '••••••' }}</span>
              <van-icon 
                :name="showPassword ? 'eye' : 'eye-o'"
                @click="togglePassword"
              />
            </div>
          </template>
        </van-cell>

        <van-cell title="描述" :value="passwordData?.description" />
        <van-cell title="创建时间" :value="passwordData?.createTime" />
        <van-cell title="更新时间" :value="passwordData?.updateTime" />
      </van-cell-group>

      <div class="action-buttons">
        <van-button type="primary" block @click="handleEdit">编辑</van-button>
        <van-button type="danger" block @click="handleDelete">删除</van-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { showDialog, showToast } from 'vant'
import { Password } from '../types/password'

const router = useRouter()
const route = useRoute()
const passwordData = ref<Password>()
const showPassword = ref(false)

onMounted(() => {
  // 这里应该从实际的数据存储中获取数据
  // 现在使用模拟数据
  passwordData.value = {
    id: route.params.id as string,
    platformName: 'GitHub',
    password: '123456',
    description: 'GitHub账号密码',
    updateTime: '2024-03-20',
    createTime: '2024-03-20',
    imageUrl: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',
    isTop: false
  }
})

const togglePassword = () => {
  showPassword.value = !showPassword.value
  if (showPassword.value && passwordData.value) {
    navigator.clipboard.writeText(passwordData.value.password)
    showToast('密码已复制到剪贴板')
  }
}

const handleEdit = () => {
  router.push(`/edit-password/${route.params.id}`)
}

const handleDelete = () => {
  showDialog({
    title: '确认删除',
    message: '确定要删除这条密码记录吗？',
    showCancelButton: true,
  }).then((action) => {
    if (action === 'confirm') {
      // 实现删除逻辑
      showToast('删除成功')
      router.back()
    }
  })
}

const onClickLeft = () => {
  router.back()
}
</script>

<style scoped>
.detail-content {
  padding: 16px;
}

.platform-name {
  font-size: 16px;
  font-weight: bold;
}

.password-row {
  display: flex;
  align-items: center;
  gap: 8px;
}

.action-buttons {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
</style> 