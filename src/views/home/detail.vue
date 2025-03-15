<template>
  <div class="password-detail">
    <van-nav-bar
      title="密码详情"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="detail-content">
      <!-- 平台信息 -->
      <van-cell-group inset title="信息" style="margin-bottom: 20px;">
        <van-cell center>
          <template #icon>
            <van-image
              round
              width="48px"
              height="48px"
              :src="passwordData?.imageUrl"
            />
          </template>
          <template #title>
            <div class="platform-info">
              <span class="platform-name">{{ passwordData?.platformName }}</span>
              <span class="platform-desc">{{ passwordData?.description }}</span>
            </div>
          </template>
        </van-cell>
      </van-cell-group>

      <!-- 密码信息 -->
      <van-cell-group inset title="密码" class="group-margin">
        <van-cell>
          <template #value>
            <div class="password-row">
              <span class="password-text">{{ showPassword ? passwordData?.password : '••••••' }}</span>
              <van-icon 
                :name="showPassword ? 'eye' : 'eye-o'"
                @click="togglePassword"
                class="password-icon"
              />
            </div>
          </template>
        </van-cell>
      </van-cell-group>

      <!-- 时间信息 -->
      <van-cell-group inset title="时间" class="group-margin">
        <van-cell title="创建时间" :value="passwordData?.createTime" />
        <van-cell title="更新时间" :value="passwordData?.updateTime" />
      </van-cell-group>

      <div class="action-buttons">
        <van-button type="primary" block @click="handleEdit">编辑</van-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { showDialog, showToast } from 'vant'
import type { Password } from '@/types'

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
  router.push(`/add-password`)
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

<style lang="less" scoped>
.detail-content {
  padding: 16px 0;

  :deep(.van-cell-group__title) {
    padding: 8px 16px;
    color: #969799;
    font-size: 14px;
  }

  .group-margin {
    margin-bottom: 20px;
  }

  :deep(.van-cell) {
    align-items: center;
    padding: 16px;

    .van-cell__value {
      flex: none;
    }
  }

  .platform-info {
    display: flex;
    flex-direction: column;
    margin-left: 12px;
    gap: 4px;

    .platform-name {
      font-size: 16px;
      font-weight: bold;
      color: #323233;
      line-height: 1.2;
    }

    .platform-desc {
      font-size: 12px;
      color: #969799;
      line-height: 1.2;
    }
  }

  .password-row {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 8px;

    .password-text {
      font-family: monospace;
      font-size: 16px;
      color: #323233;
    }

    .password-icon {
      font-size: 20px;
      color: #969799;
      cursor: pointer;
    }
  }

  .action-buttons {
    margin: 24px 16px;
  }
}
</style> 