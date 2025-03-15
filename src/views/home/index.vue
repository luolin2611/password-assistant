<template>
    <div class="home">
      <!-- 固定搜索区域 -->
      <div class="search-container">
        <van-cell-group inset>
          <div class="search-section">
            <van-search
              v-model="searchText"
              placeholder="搜索平台名称"
              :background="'transparent'"
              class="custom-search"
            />
            <van-button 
              type="primary" 
              class="search-btn"
              size="small"
              @click="onSearch"
            >
              搜索
            </van-button>
          </div>
        </van-cell-group>
      </div>
  
      <!-- 密码列表 -->
      <div class="content">
        <div class="password-list">
          <van-swipe-cell
            v-for="item in passwordList"
            :key="item.id"
            :before-close="beforeClose"
          >
            <van-cell class="password-cell">
              <template #default>
                <div class="password-item" @click="viewDetail(item.id)">
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
                  <div class="item-right" @click.stop>
                    <div class="password-section">
                      <span 
                        class="password" 
                        @click="copyPassword(item)"
                      >
                        {{ showPasswordMap[item.id] ? item.password : '••••••' }}
                      </span>
                      <van-icon 
                        :name="showPasswordMap[item.id] ? 'eye' : 'eye-o'"
                        @click="togglePasswordVisibility(item.id)"
                      />
                    </div>
                    <div class="update-time">{{ item.updateTime }}</div>
                  </div>
                </div>
              </template>
            </van-cell>
  
            <!-- 左滑操作按钮 -->
            <template #right>
              <div class="swipe-actions">
                <van-button 
                  class="swipe-btn top-btn"
                  @click="toggleTop(item.id)"
                >
                  <van-icon name="star-o" size="20" />
                </van-button>
                <van-button 
                  class="swipe-btn delete-btn"
                  @click="deletePassword(item.id)"
                >
                  <van-icon name="delete-o" size="20" />
                </van-button>
              </div>
            </template>
          </van-swipe-cell>
        </div>
      </div>
  
      <!-- 新增按钮 -->
      <van-floating-bubble
        icon="plus"
        @click="goToAdd"
        axis="xy"
        magnetic="x"
        v-model:offset="bubbleOffset"
      />
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref, onMounted, reactive } from 'vue'
  import { useRouter } from 'vue-router'
  import type { Password } from '@/types'
  import { showToast } from 'vant'
  
  const router = useRouter()
  const searchText = ref('')
  const passwordList = ref<Password[]>([])
  const showPasswordMap = reactive<Record<string, boolean>>({})
  const bubbleOffset = ref({ x: 300, y: 700 });
  
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
  
  const beforeClose = ({ position, instance }: { position: string; instance: any }) => {
    switch (position) {
      case 'right':
        instance.close()
        break
    }
  }
  </script>
  
  <style lang="less" scoped>
  .home {
    min-height: 100vh;
    background: #f7f8fa;
  
    .search-container {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 99;
      background: #f7f8fa;
      padding: 8px;
  
      :deep(.van-cell-group--inset) {
        margin: 0;
        border-radius: 8px;
        overflow: hidden;
        background: #fff;
      }
  
      .search-section {
        display: flex;
        align-items: center;
  
        .custom-search {
          flex: 1;
          background: transparent;
  
          :deep(.van-search__content) {
            background: #f5f5f5;
            border-radius: 4px;
          }
  
          :deep(.van-search) {
            padding: 0;
          }
        }
  
        .search-btn {
          margin-left: 12px;
          height: 36px;
          border-radius: 4px;
          padding: 0 16px;
        }
      }
    }
  
    .content {
      padding: 0 8px;
      padding-top: 76px;
      margin-bottom: 50px;
  
      .password-list {
        margin-bottom: 100px;
  
        .password-item {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          width: 100%;
          cursor: pointer;
  
          .item-left {
            display: flex;
            align-items: flex-start;
            gap: 12px;
  
            .item-info {
              display: flex;
              flex-direction: column;
              gap: 4px;
              padding-top: 2px;
  
              .platform-name {
                font-size: 16px;
                font-weight: bold;
                color: #323233;
                line-height: 1.2;
              }
  
              .description {
                font-size: 12px;
                color: #969799;
                line-height: 1.2;
              }
            }
          }
  
          .item-right {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            gap: 4px;
  
            .update-time {
              font-size: 12px;
              color: #969799;
            }
  
            .password-section {
              display: flex;
              align-items: center;
              gap: 8px;
  
              .password {
                font-family: monospace;
                color: #666;
                cursor: pointer;
              }
  
              .van-icon {
                cursor: pointer;
              }
            }
          }
        }
  
        .password-cell {
          background: #fff;
          border-radius: 8px;
          margin-bottom: 8px;
        }
  
        :deep(.van-swipe-cell__right) {
          height: 100%;
  
          .swipe-actions {
            height: 100%;
            display: flex;
  
            .swipe-btn {
              height: 100%;
              width: 60px;
              display: flex;
              align-items: center;
              justify-content: center;
              border: none;
  
              &.top-btn {
                background: #1989fa;
                color: #fff;
              }
  
              &.delete-btn {
                background: #ee0a24;
                color: #fff;
              }
            }
          }
        }
      }
    }
  
    :deep(.van-floating-bubble) {
      --van-floating-bubble-size: 60px;
      right: 20px;
      bottom: 140px;
    }
  }
  </style> 