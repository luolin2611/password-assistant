<template>
  <div class="add-password">
    <van-nav-bar title="添加密码" left-text="返回" left-arrow @click-left="onClickLeft" />
    <div class="form-content">
      <van-form @submit="onSubmit">
        <!-- 平台信息分组 -->
        <van-cell-group inset title="平台信息" style="margin-bottom: 20px;">
          <van-field v-model="formData.platformName" name="platformName" label="名称" placeholder="请输入平台名称"
            :rules="[{ required: true, message: '请填写平台名称' }]" />

          <van-field name="uploader" label="图标">
            <template #input>
              <van-uploader v-model="formData.imageFile" :max-count="1" :after-read="afterRead" />
            </template>
          </van-field>

          <van-field v-model="formData.description" name="description" label="描述" type="textarea" placeholder="请输入描述信息"
            :rules="[{ required: true, message: '请填写描述信息' }]" rows="3" autosize />
        </van-cell-group>

        <!-- 密码信息分组 -->
        <van-cell-group inset title="密码信息">
          <van-field v-model="formData.password" name="password" label="密码" placeholder="请输入密码"
            :type="showPassword ? 'text' : 'password'" :rules="[{ required: true, message: '请填写密码' }]">
            <template #right-icon>
              <van-icon :name="showPassword ? 'eye' : 'eye-o'" @click="togglePassword" />
            </template>
          </van-field>
        </van-cell-group>

        <div class="submit-button">
          <van-button block type="primary" native-type="submit">
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
import { addPassword } from '@/api/password'
import { uploadFile } from '@/api/common'

const router = useRouter()
const showPassword = ref(false)

const formData = reactive({
  platformName: '',
  password: '',
  description: '',
  imageFile: [] as UploaderFileListItem[],
  platformIcon: ''
})

const togglePassword = () => {
  showPassword.value = !showPassword.value
}

const afterRead = async (file: UploaderFileListItem) => {
  try {
    if (!file.file) {
      showToast('文件无效')
      return
    }

    // 将文件对象转换为 File 对象
    const fileObj = new File([file.file], file.file.name, { type: file.file.type })
    const res = await uploadFile(fileObj)
    if (res.url) {
      formData.platformIcon = res.url
      showToast('上传成功')
    } else {
      showToast(res.data.message || '上传失败')
    }
  } catch (error) {
    showToast('上传失败')
  }
}

const onSubmit = async () => {
  if (!formData.platformIcon) {
    showToast('请上传平台图标')
    return
  }

  const res = await addPassword({
    platformName: formData.platformName,
    platformIcon: formData.platformIcon,
    description: formData.description,
    password: formData.password
  })
  if (res) {
    showToast('添加成功')
    router.back()
  }
}

const onClickLeft = () => {
  router.back()
}
</script>

<style lang="less" scoped>
.form-content {
  padding: 10px 0;

  :deep(.van-cell-group__title) {
    padding: 8px 16px;
    color: #969799;
    font-size: 14px;
  }

  .password-group {
    margin-top: 12px;
  }

  .submit-button {
    margin: 24px 16px;
  }
}

:deep(.van-field__right-icon) {
  padding: 0 8px;
  cursor: pointer;
}

:deep(.van-uploader) {
  .van-uploader__wrapper {
    padding: 4px 0;
  }
}
</style>