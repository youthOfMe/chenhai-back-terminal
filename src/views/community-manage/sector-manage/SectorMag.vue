<template>
  <div>
    <el-card>
      <el-form style="display: flex; justify-content: space-between; height: 2vw">
        <el-form-item label="板块">
          <el-input placeholder="请输入板块名称进行搜索"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button style="margin-left: 5px">搜索</el-button>
          <el-button style="margin-left: 5px" @click="addContent">添加</el-button>
          <el-button style="margin-left: 5px">重置</el-button>
          <el-button style="margin-left: 5px">删除</el-button>
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
        :header-cell-style="{ 'border-right': '1px solid #EEEEEE' }"
        :cell-style="{ 'border-right': '1px solid #EEEEEE' }"
      >
        <el-table-column type="selection"></el-table-column>
        <el-table-column type="index" min-width="38%" label="序号"></el-table-column>
        <el-table-column
          prop="id"
          min-width="55%"
          label="ID"
          show-overflow-tooltip
        ></el-table-column>
        <el-table-column
          prop="name"
          min-width="58%"
          label="板块名称"
          show-overflow-tooltip
        ></el-table-column>
        <el-table-column
          prop="name"
          min-width="50%"
          label="描述"
          show-overflow-tooltip
        ></el-table-column>
        <el-table-column prop="name" min-width="50%" label="封面" show-overflow-tooltip>
          <img
            src="https://ts3.cn.mm.bing.net/th?id=OIP-C.h9mjwCJcnjlnT8rmwgi16wHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
            style="width: 100%"
          />
        </el-table-column>
        <el-table-column
          prop="date"
          min-width="50%"
          label="创建时间"
          show-overflow-tooltip
        ></el-table-column>
        <el-table-column
          prop="date"
          min-width="50%"
          label="更新时间"
          show-overflow-tooltip
        ></el-table-column>
        <el-table-column
          prop="role"
          min-width="39%"
          label="归属分类"
          show-overflow-tooltip
        ></el-table-column>
        <el-table-column
          prop="name"
          min-width="39%"
          label="推荐"
          show-overflow-tooltip
        ></el-table-column>
        <el-table-column min-width="60%" label="操作">
          <template #default="{ row }">
            <div class="dialog-footer" style="width: 10vw">
              <el-button icon="Edit" style="width: 3vw" size="small" @click="editContent">
                编辑
              </el-button>
              <el-button icon="Delete" style="width: 3vw; margin-right: 1vw" size="small">
                删除
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
    <!-- 添加板块 -->
    <el-dialog
      v-model="addVisible"
      title="&nbsp;&nbsp;新增板块"
      width="500"
      style="margin-top: 10vw"
    >
      <div>
        <el-form :model="addRuleForm" label-width="80px" style="margin-top: 2vw" ref="addRuleForm">
          <el-col :span="12">
            <el-form-item label="板块名称" prop="name">
              <el-input v-model="addRuleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="归属分类" prop="start">
              <el-input v-model="addRuleForm.sort"></el-input>
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
    <!-- 编辑板块 -->
    <el-dialog
      v-model="editVisible"
      title="&nbsp;&nbsp;编辑板块"
      width="500"
      style="margin-top: 10vw"
    >
      <div>
        <el-form
          :model="editRuleForm"
          label-width="80px"
          style="margin-top: 2vw"
          ref="editRuleForm"
        >
          <el-col :span="12">
            <el-form-item label="板块名称" prop="name">
              <el-input v-model="editRuleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="归属分类" prop="start">
              <el-input v-model="editRuleForm.sort"></el-input>
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
import { post } from '@/utils/http'

const dialogVisible = ref(false)
const addVisible = ref(false)
const editVisible = ref(false)
// 添加板块
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
// 添加板块
const addRuleForm = ref({
  name: '',
  sort: '',
})
// 编辑板块
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
//保存信息
const save = () => {}
</script>

<style scoped></style>
