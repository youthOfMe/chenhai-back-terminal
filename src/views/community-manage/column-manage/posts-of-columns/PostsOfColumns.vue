<template>
  <div>
    <el-card>
      <el-form style="display: flex; justify-content: space-between; height: 2vw">
        <el-form-item label="帖子名">
          <el-input placeholder="请输入帖子关键信息搜索"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button slot="append" style="margin-left: 5px">搜索帖子</el-button>
          <el-button slot="append" style="margin-left: 5px" @click="addContent">添加帖子</el-button>
          <el-button slot="append" style="margin-left: 5px">重置帖子</el-button>
          <el-button slot="append" style="margin-left: 5px">删除帖子</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <el-card style="margin-top: 5px">
      <el-table
        :data="Data"
        element-loading-text="拼命加载中"
        v-loading="loading"
        style="width: 100%"
      >
        <el-table-column type="selection" fixed></el-table-column>
        <el-table-column type="index" label="序号" width="100" fixed></el-table-column>
        <el-table-column prop="id" label="发帖数" width="150"></el-table-column>
        <el-table-column prop="id" label="点赞数" width="150"></el-table-column>
        <el-table-column prop="id" label="收藏数" width="150"></el-table-column>
        <el-table-column prop="id" label="转发数" width="150"></el-table-column>
        <el-table-column fixed="right" label="操作" width="260">
          <template #default="{ row }">
            <div class="dialog-footer">
              <el-button icon="Edit" style="width: 4vw" size="small" @click="editContent">
                编辑
              </el-button>
              <el-button icon="Delete" style="width: 4vw; margin-right: 1vw" size="small">
                删除
              </el-button>
              <el-button
                type="primary"
                style="width: 4vw; margin-right: 1vw"
                size="small"
                @click="morePostInfo"
              >
                更多
              </el-button>
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
    <el-dialog v-model="addVisible" title="&nbsp;&nbsp;新增用户" width="500">
      <div>
        <el-form
          :model="addRuleForm"
          label-width="70px"
          style="margin-top: 2vw; margin-left: 3vw; width: 45vw"
          ref="addRuleForm"
        >
          <el-col :span="12">
            <el-form-item label="ID" prop="name">
              <el-input v-model="addRuleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="用户名" prop="start">
              <el-input v-model="addRuleForm.sort"></el-input>
            </el-form-item>
            <el-form-item label="账号" prop="start">
              <el-input v-model="addRuleForm.sort"></el-input>
            </el-form-item>
            <el-form-item label="手机号" prop="start">
              <el-input v-model="addRuleForm.sort"></el-input>
            </el-form-item>
            <el-form-item label="用户状态" prop="start">
              <el-input v-model="addRuleForm.sort"></el-input>
            </el-form-item>
            <el-form-item label="用户签名" prop="start">
              <el-input v-model="addRuleForm.sort"></el-input>
            </el-form-item>
            <el-form-item label="头像" prop="start">
              <el-upload
                action="https://jsonplaceholder.typicode.com/posts/"
                list-type="picture-card"
              >
                <i class="el-icon-plus"></i>
              </el-upload>
            </el-form-item>
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

    <el-dialog v-model="editVisible" title="&nbsp;&nbsp;编辑用户" width="500">
      <div>
        <el-form
          :model="addRuleForm"
          label-width="70px"
          style="margin-top: 2vw; margin-left: 3vw; width: 45vw"
          ref="addRuleForm"
        >
          <el-col :span="12">
            <el-form-item label="ID" prop="name">
              <el-input v-model="addRuleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="用户名" prop="start">
              <el-input v-model="addRuleForm.sort"></el-input>
            </el-form-item>
            <el-form-item label="账号" prop="start">
              <el-input v-model="addRuleForm.sort"></el-input>
            </el-form-item>
            <el-form-item label="手机号" prop="start">
              <el-input v-model="addRuleForm.sort"></el-input>
            </el-form-item>
            <el-form-item label="用户状态" prop="start">
              <el-input v-model="addRuleForm.sort"></el-input>
            </el-form-item>
            <el-form-item label="用户签名" prop="start">
              <el-input v-model="addRuleForm.sort"></el-input>
            </el-form-item>
            <el-form-item label="头像" prop="start">
              <el-upload
                action="https://jsonplaceholder.typicode.com/posts/"
                list-type="picture-card"
              >
                <i class="el-icon-plus"></i>
              </el-upload>
            </el-form-item>
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
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/store'

import { ref, onMounted } from 'vue'
import { post } from '@/utils/http'

import { useRouter } from 'vue-router'
const router = useRouter()

const checkedCities = ref(['Shanghai', 'Beijing'])
const cities = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']

// 获取用户信息
const userStore = useUserStore()
const { userInfo } = storeToRefs(userStore)

const dialogVisible = ref(false)
const addVisible = ref(false)
const editVisible = ref(false)
// 添加用户
const addContent = () => {
  addVisible.value = true
}

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
  sort: '',
})
// 编辑用户
const editRuleForm = ref({
  name: '',
  sort: '',
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
// 跳转
const morePostInfo = () => {
  router.push({
    path: '',
  })
}
//保存信息
const save = () => {}
</script>
