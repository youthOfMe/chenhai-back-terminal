<template>
  <div>
    <el-card>
      <el-row :gutter="20" class="web-list" @click="cardInfo">
        <el-col :span="4" class="web-item" v-for="i in 5" :key="i">
          <el-card>
            <template #header>Yummy hamburger</template>
            <img
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              style="width: 100%"
            />
          </el-card>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
// import { reqDocumentList } from '@/api/protest/document/index.js'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()

// 获取项目用例列表
const documentList = ref([])
const pagination = ref({
  total: 0,
  page: 1,
  size: 15,
})
// 跳转至卡片具体信息页面
const cardInfo = () => {
  router.push({
    path: '/learnResourceMag/cardContent',
  })
}
</script>

<style lang="scss" scoped>
.web-list {
  .web-item {
    img {
      width: 100%;
      height: 200px;
    }
  }
}
</style>
