<template>
  <div>
    <el-card>
      <el-form style="display: flex; justify-content: space-between; height: 2vw">
        <el-form-item label="用户名">
          <el-input placeholder="请输入用户名进行搜索"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button slot="append" style="margin-left: 5px">搜索用户</el-button>
          <el-button slot="append" style="margin-left: 5px" @click="addContent">添加用户</el-button>
          <el-button slot="append" style="margin-left: 5px">重置用户</el-button>
          <el-button slot="append" style="margin-left: 5px">删除用户</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <el-card style="margin-top: 5px">
      <el-table
        :data="Data"
        element-loading-text="拼命加载中"
        v-loading="loading"
        style="width: 100%"
        border
      >
        <el-table-column type="selection" fixed></el-table-column>
        <el-table-column type="index" label="序号" width="70" fixed></el-table-column>
        <el-table-column prop="id" label="ID" width="100"></el-table-column>
        <el-table-column prop="name" label="网站标题" width="100"></el-table-column>
        <el-table-column prop="name" width="150" label="网站封面" show-overflow-tooltip>
          <img
            src="https://ts3.cn.mm.bing.net/th?id=OIP-C.h9mjwCJcnjlnT8rmwgi16wHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
            style="width: 100%"
          />
        </el-table-column>
        <el-table-column prop="name" label="网站介绍" width="100"></el-table-column>
        <el-table-column prop="role" label=" 网站连接" width="100"></el-table-column>
        <el-table-column prop="date" label="添加时间" width="150"></el-table-column>
        <el-table-column prop="date" label="更新时间" width="150"></el-table-column>
        <el-table-column label="操作" fixed="right">
          <template #default="{ row }">
            <div
              class="dialog-footer"
              style="display: flex; align-items: center; justify-content: center"
            >
              <el-button icon="Edit" style="width: 3vw" size="small" @click="editContent">
                编辑
              </el-button>
              <el-button icon="Delete" style="width: 3vw" size="small">删除</el-button>
            </div>
          </template>
        </el-table-column>
      </el-table>
      <div class="demo-pagination-block">
        <div class="demonstration"></div>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          @selection-change="handleSelectionChange"
          :current-page="params.page"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="params.pageSize"
          :background="true"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
          style="margin-top: 2vw"
        />
      </div>
    </el-card>

    <!-- 添加用户 -->
    <el-dialog
      v-model="addVisible"
      title="&nbsp;&nbsp;新增用户"
      width="500"
      style="margin-top: 10vw"
    >
      <div style="width: 60vw">
        <el-form :model="addRuleForm" label-width="80px" style="margin-top: 2vw" ref="addRuleForm">
          <el-col :span="12">
            <el-form-item label="用户标题" prop="name">
              <el-input v-model="addRuleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="用户描述">
              <el-input v-model="addRuleForm.description"></el-input>
            </el-form-item>
            <el-form-item label="用户规格">
              <el-input v-model="addRuleForm.size"></el-input>
            </el-form-item>
            <el-form-item label="用户价格">
              <el-input v-model="addRuleForm.price"></el-input>
            </el-form-item>
            <el-upload action="#" list-type="picture-card" :auto-upload="false">
              <el-icon><Plus /></el-icon>

              <template #file="{ file }">
                <div>
                  <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
                  <span class="el-upload-list__item-actions">
                    <span
                      class="el-upload-list__item-preview"
                      @click="handlePictureCardPreview(file)"
                    >
                      <el-icon><zoom-in /></el-icon>
                    </span>
                    <span
                      v-if="!disabled"
                      class="el-upload-list__item-delete"
                      @click="handleDownload(file)"
                    >
                      <el-icon><Download /></el-icon>
                    </span>
                    <span
                      v-if="!disabled"
                      class="el-upload-list__item-delete"
                      @click="handleRemove(file)"
                    >
                      <el-icon><Delete /></el-icon>
                    </span>
                  </span>
                </div>
              </template>
            </el-upload>

            <el-dialog v-model="dialogVisiblePic">
              <img w-full :src="dialogImageUrl" alt="Preview Image" />
            </el-dialog>
          </el-col>
        </el-form>
      </div>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="addVisible = false">取消</el-button>
          <el-button type="primary" @click="addVisible = false">确定</el-button>
        </div>
      </template>
    </el-dialog>
    <!-- 编辑用户 -->
    <el-dialog
      v-model="editVisible"
      title="&nbsp;&nbsp;编辑用户"
      width="500"
      style="margin-top: 10vw"
    >
      <div style="width: 60vw">
        <el-form :model="editRuleForm" style="margin-top: 2vw; width: 100%" ref="editRuleForm">
          <el-col :span="12" style="width: 100%">
            <el-form-item label="用户名称" prop="name">
              <el-input v-model="editRuleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="用户描述">
              <el-input v-model="editRuleForm.description"></el-input>
            </el-form-item>
            <el-form-item label="用户规格">
              <el-input v-model="editRuleForm.size"></el-input>
            </el-form-item>
            <el-form-item label="用户价格">
              <el-input v-model="editRuleForm.price"></el-input>
            </el-form-item>
            <el-upload action="#" list-type="picture-card" :auto-upload="false">
              <el-icon><Plus /></el-icon>

              <template #file="{ file }">
                <div>
                  <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
                  <span class="el-upload-list__item-actions">
                    <span
                      class="el-upload-list__item-preview"
                      @click="handlePictureCardPreview(file)"
                    >
                      <el-icon><zoom-in /></el-icon>
                    </span>
                    <span
                      v-if="!disabled"
                      class="el-upload-list__item-delete"
                      @click="handleDownload(file)"
                    >
                      <el-icon><Download /></el-icon>
                    </span>
                    <span
                      v-if="!disabled"
                      class="el-upload-list__item-delete"
                      @click="handleRemove(file)"
                    >
                      <el-icon><Delete /></el-icon>
                    </span>
                  </span>
                </div>
              </template>
            </el-upload>

            <el-dialog v-model="dialogVisiblePic">
              <img w-full :src="dialogImageUrl" alt="Preview Image" />
            </el-dialog>
          </el-col>
        </el-form>
      </div>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="editVisible = false">取消</el-button>
          <el-button type="primary" @click="editVisible = false">确定</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { post } from '@/utils/http'

import { useRouter } from 'vue-router'
const router = useRouter()

// 上传图片
import { Delete, Download, Plus, ZoomIn } from '@element-plus/icons-vue'
import type { UploadFile } from 'element-plus'

const dialogVisible = ref(false)
const addVisible = ref(false)
const editVisible = ref(false)
// 添加用户
const addContent = () => {
  addVisible.value = true
}
// 编辑用户
const editContent = () => {
  editVisible.value = true
}

let Data = ref()
const total = ref(0)
const select = ref()
select.value = []
const params = ref({
  page: 1,
  pageSize: 10,
  keyword: '',
})
const loading = ref(false)
// 添加用户
const addRuleForm = ref({
  name: '',
  description: '',
  size: '',
  price: '',
})
// 编辑用户
const editRuleForm = ref({
  name: '',
  description: '',
  size: '',
  price: '',
})

onMounted(() => {
  loadData()
})
async function loadData() {
  loading.value = true
  const res = await post('/user', params.value) //获取员工信息
  Data.value = res.data.list
  total.value = res.data.total
  loading.value = false
}
function handleSizeChange(pageSize: number) {
  params.value.pageSize = pageSize
  loadData()
}

function handleCurrentChange(page: number) {
  params.value.page = page
  loadData()
}
//勾选的数据
function handleSelectionChange(selection: any) {
  select.value = selection
}
//保存信息
const save = () => {}

const dialogImageUrl = ref('')
const dialogVisiblePic = ref(false)
const disabled = ref(false)

const handleRemove = (file: UploadFile) => {
  console.log(file)
}

const handlePictureCardPreview = (file: UploadFile) => {
  dialogImageUrl.value = file.url!
  dialogVisible.value = true
}

const handleDownload = (file: UploadFile) => {
  console.log(file)
}
</script>

<style scoped></style>
