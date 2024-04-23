<template>
  <div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
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
        :data="userList"
        element-loading-text="拼命加载中"
        v-loading="loading"
        style="width: 100%"
      >
        <el-table-column type="selection" fixed></el-table-column>
        <el-table-column type="index" label="序号" fixed></el-table-column>
        <el-table-column prop="id" label="ID" show-overflow-tooltip></el-table-column>
        <el-table-column label="头像">
          <template #default="scope">
            <img style="width: 100px; height: 100px" :src="scope.row.avatar" />
          </template>
        </el-table-column>
        <el-table-column prop="name" label="用户名"></el-table-column>
        <el-table-column prop="account" label="账号"></el-table-column>
        <!-- <el-table-column prop="phone" label="手机号"></el-table-column> -->

        <el-table-column prop="role" label="用户状态">
          <template #default="scope">
            <el-switch
              v-model="scope.row.status"
              class="ml-2"
              :active-value="0"
              :inactive-value="1"
            />
          </template>
        </el-table-column>
        <el-table-column prop="signature" label="用户签名"></el-table-column>
        <el-table-column prop="createTime" label="创建时间"></el-table-column>
        <el-table-column prop="updateTime" label="更新时间"></el-table-column>
        <el-table-column fixed="right" label="操作" width="330">
          <template #default="{ row }">
            <div class="dialog-footer">
              <el-button icon="Edit" style="width: 4vw" size="small" @click="editContent">
                编辑
              </el-button>
              <el-button icon="Delete" style="margin-right: 1vw; width: 4vw" size="small">
                删除
              </el-button>
              <el-button icon="user" style="width: 4vw" size="small">禁用</el-button>
              <el-button
                type="primary"
                style="margin-right: 1vw; width: 4vw"
                size="small"
                @click="moreInfo"
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
    <el-dialog v-model="addVisible" title="&nbsp;&nbsp;新增用户">
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

    <el-dialog v-model="editVisible" title="&nbsp;&nbsp;编辑用户">
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
import { ref, onMounted } from 'vue'
import { getUserPage } from '@/api'

import { useRouter } from 'vue-router'
const router = useRouter()

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

const userList = ref()
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
  const res = await getUserPage({
    ...params.value,
  })
  userList.value = res.data.records
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
// 跳转至更多信息页面
const moreInfo = () => {
  router.push({
    path: '/user/moreInfo',
  })
}
//保存信息
const save = () => {}
</script>

<style scoped></style>
