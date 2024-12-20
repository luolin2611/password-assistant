<template>
  <div class="home">
    <!-- 搜索区域 -->
    <div class="search-section">
      <van-search
        v-model="searchText"
        placeholder="搜索平台名称"
        shape="round"
      />
      <van-button 
        type="primary" 
        size="small"
        round
        @click="onSearch"
      >
        搜索
      </van-button>
    </div>

    <!-- 密码列表 -->
    <div class="password-list">
      <van-swipe-cell
        v-for="item in passwordList"
        :key="item.id"
        :before-close="beforeClose"
      >
        <van-cell>
          <template #default>
            <div class="password-item">
              <!-- 左侧内容 -->
              <div class="item-left">
                <van-image
                  round
                  width="40px"
                  height="40px"
                  :src="item.imageUrl"
                />
                <div class="item-info">
                  <div class="platform-name">{{ item.platformName }}</div>
                  <div class="description">{{ item.description }}</div>
                </div>
              </div>
              
              <!-- 右侧内容 -->
              <div class="item-right">
                <div class="update-time">{{ item.updateTime }}</div>
                <div class="password-section">
                  <span 
                    class="password" 
                    @click="copyPassword(item)"
                  >
                    {{ showPasswordMap[item.id] ? item.password : '••••••' }}
                  </span>
                  <van-icon 
                    :name="showPasswordMap[item.id] ? 'eye' : 'eye-o'"
                    @click.stop="togglePasswordVisibility(item.id)"
                  />
                </div>
              </div>
            </div>
          </template>
        </van-cell>

        <!-- 左滑操作按钮 -->
        <template #right>
          <van-button 
            square 
            type="primary" 
            text="置顶"
            @click="toggleTop(item.id)"
          />
          <van-button 
            square 
            type="danger" 
            text="删除"
            @click="deletePassword(item.id)"
          />
        </template>
      </van-swipe-cell>
    </div>

    <!-- 新增按钮 -->
    <van-floating-bubble
      icon="plus"
      @click="goToAdd"
      axis="xy"
      magnetic="x"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { Password } from '../types/password'
import { showToast } from 'vant'

const router = useRouter()
const searchText = ref('')
const passwordList = ref<Password[]>([])
const showPasswordMap = reactive<Record<string, boolean>>({})

// 添加测试数据
onMounted(() => {
  passwordList.value = [
    {
      id: '1',
      platformName: 'GitHub',
      password: '123456',
      description: 'GitHub账号密码',
      updateTime: '2024-03-20',
      createTime: '2024-03-20',
      imageUrl: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',
      isTop: false
    },
    {
      id: '2',
      platformName: 'Google',
      password: 'abc123',
      description: 'Google账号密码',
      updateTime: '2024-03-19',
      createTime: '2024-03-19',
      imageUrl: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',
      isTop: true
    },
    {
      id: '2',
      platformName: 'Google',
      password: 'abc123',
      description: 'Google账号密码',
      updateTime: '2024-03-19',
      createTime: '2024-03-19',
      imageUrl: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',
      isTop: true
    },
    {
      id: '2',
      platformName: 'Google',
      password: 'abc123',
      description: 'Google账号密码',
      updateTime: '2024-03-19',
      createTime: '2024-03-19',
      imageUrl: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',
      isTop: true
    },
    {
      id: '2',
      platformName: 'Google',
      password: 'abc123',
      description: 'Google账号密码',
      updateTime: '2024-03-19',
      createTime: '2024-03-19',
      imageUrl: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',
      isTop: true
    },
    {
      id: '2',
      platformName: 'Google',
      password: 'abc123',
      description: 'Google账号密码',
      updateTime: '2024-03-19',
      createTime: '2024-03-19',
      imageUrl: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',
      isTop: true
    },
    {
      id: '2',
      platformName: 'Google',
      password: 'abc123',
      description: 'Google账号密码',
      updateTime: '2024-03-19',
      createTime: '2024-03-19',
      imageUrl: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',
      isTop: true
    },
    {
      id: '2',
      platformName: 'Google',
      password: 'abc123',
      description: 'Google账号密码',
      updateTime: '2024-03-19',
      createTime: '2024-03-19',
      imageUrl: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',
      isTop: true
    }
  ]
})

const togglePasswordVisibility = (id: string) => {
  showPasswordMap[id] = !showPasswordMap[id]
}

const copyPassword = (item: Password) => {
  navigator.clipboard.writeText(item.password)
  showToast('密码已复制到剪贴板')
}

const onSearch = () => {
  // 实现搜索逻辑
  showToast('搜索功能开发中')
}

const viewDetail = (id: string) => {
  router.push(`/password-detail/${id}`)
}

const toggleTop = (id: string) => {
  const index = passwordList.value.findIndex(item => item.id === id)
  if (index !== -1) {
    passwordList.value[index].isTop = !passwordList.value[index].isTop
    showToast('操作成功')
  }
}

const deletePassword = (id: string) => {
  const index = passwordList.value.findIndex(item => item.id === id)
  if (index !== -1) {
    passwordList.value.splice(index, 1)
    showToast('删除成功')
  }
}

const goToAdd = () => {
  router.push('/add-password')
}

const beforeClose = ({ position, instance }) => {
  switch (position) {
    case 'right':
      instance.close()
      break
    default:
      instance.close()
  }
}
</script>

<style scoped>
.home {
  padding: 16px;
  min-height: 100vh;
  background: #f7f8fa;
}

.search-section {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
}

:deep(.van-search) {
  flex: 1;
  padding: 0;
  background: transparent;
}

.password-list {
  margin-bottom: 100px;
}

.password-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.item-left {
  display: flex;
  align-items: center;
  gap: 12px;
}

.item-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.platform-name {
  font-size: 16px;
  font-weight: bold;
  color: #323233;
}

.description {
  font-size: 12px;
  color: #969799;
}

.item-right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
}

.update-time {
  font-size: 12px;
  color: #969799;
}

.password-section {
  display: flex;
  align-items: center;
  gap: 8px;
}

.password {
  font-family: monospace;
  color: #666;
  cursor: pointer;
}

:deep(.van-floating-bubble) {
  --van-floating-bubble-size: 60px;
  right: 20px;
  bottom: 140px;
}
</style> 