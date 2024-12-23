<template>
    <div class="add-password">
      <van-nav-bar
        title="添加密码"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      />
      <div class="form-content">
        <van-form @submit="onSubmit">
          <van-cell-group inset>
            <van-field
              v-model="formData.platformName"
              name="platformName"
              label="平台名称"
              placeholder="请输入平台名称"
              :rules="[{ required: true, message: '请填写平台名称' }]"
            />
            
            <van-field
              v-model="formData.password"
              name="password"
              label="密码"
              placeholder="请输入密码"
              :type="showPassword ? 'text' : 'password'"
              :rules="[{ required: true, message: '请填写密码' }]"
            >
              <template #right-icon>
                <van-icon 
                  :name="showPassword ? 'eye' : 'eye-o'"
                  @click="togglePassword"
                />
              </template>
            </van-field>
  
            <van-field
              v-model="formData.description"
              name="description"
              label="描述"
              type="textarea"
              placeholder="请输入描述信息"
              :rules="[{ required: true, message: '请填写描述信息' }]"
            />
  
            <van-field
              name="uploader"
              label="平台图标"
            >
              <template #input>
                <van-uploader
                  v-model="formData.imageFile"
                  :max-count="1"
                  :after-read="afterRead"
                />
              </template>
            </van-field>
          </van-cell-group>
  
          <div class="submit-button">
            <van-button round block type="primary" native-type="submit">
              保存
            </van-button>
          </div>
        </van-form>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref, reactive } from 'vue'
  import { useRouter } from 'vue-router'
  import { showToast } from 'vant'
  import type { UploaderFileListItem } from 'vant'
  
  const router = useRouter()
  const showPassword = ref(false)
  
  const formData = reactive({
    platformName: '',
    password: '',
    description: '',
    imageFile: [] as UploaderFileListItem[],
    imageUrl: ''
  })
  
  const togglePassword = () => {
    showPassword.value = !showPassword.value
  }
  
  const afterRead = (file: UploaderFileListItem) => {
    // 这里应该实现图片上传逻辑
    // 现在只是简单地将文件URL赋值给imageUrl
    if (file.content) {
      formData.imageUrl = file.content as string
    }
  }
  
  const onSubmit = () => {
    // 这里应该实现保存逻辑
    showToast('添加成功')
    router.back()
  }
  
  const onClickLeft = () => {
    router.back()
  }
  </script>
  
  <style scoped>
  .form-content {
    padding: 16px;
  }
  
  .submit-button {
    margin: 16px;
  }
  </style> 