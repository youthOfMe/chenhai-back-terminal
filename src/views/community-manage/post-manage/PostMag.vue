<template>
  <div>
    <el-card>
      <el-form style="display: flex; justify-content: space-between; height: 2vw">
        <el-form-item label="帖子">
          <el-input placeholder="请输入帖子名进行搜索"></el-input>
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
        :data="postList"
        element-loading-text="拼命加载中"
        v-loading="loading"
        style="width: 100%"
        border
        :header-cell-style="{ 'border-right': '1px solid #EEEEEE' }"
        :cell-style="{ 'border-right': '1px solid #EEEEEE' }"
      >
        <el-table-column type="selection" fixed></el-table-column>
        <el-table-column type="index" width="60" label="序号" fixed></el-table-column>
        <el-table-column prop="id" width="110" label="ID" show-overflow-tooltip></el-table-column>
        <el-table-column prop="name" width="110" label="帖子名称"></el-table-column>
        <el-table-column prop="name" width="110" label="帖子内容"></el-table-column>
        <el-table-column prop="name" width="110" label="点赞量"></el-table-column>
        <el-table-column prop="name" width="110" label="评论数"></el-table-column>
        <el-table-column prop="name" width="110" label="转发量"></el-table-column>
        <el-table-column prop="name" width="110" label="封面" show-overflow-tooltip>
          <img
            src="https://ts3.cn.mm.bing.net/th?id=OIP-C.h9mjwCJcnjlnT8rmwgi16wHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
            style="width: 100%"
          />
        </el-table-column>
        <el-table-column
          prop="name"
          width="110"
          label="标签"
          show-overflow-tooltip
        ></el-table-column>
        <el-table-column
          prop="name"
          width="110"
          label="图片标签"
          show-overflow-tooltip
        ></el-table-column>
        <el-table-column
          prop="name"
          width="110"
          label="专栏"
          show-overflow-tooltip
        ></el-table-column>
        <el-table-column prop="date" width="110" label="创建时间"></el-table-column>
        <el-table-column prop="date" width="110" label="更新时间"></el-table-column>
        <el-table-column prop="name" width="110" label="头像" show-overflow-tooltip>
          <img
            src="https://ts3.cn.mm.bing.net/th?id=OIP-C.h9mjwCJcnjlnT8rmwgi16wHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
            style="width: 100%"
          />
        </el-table-column>
        <el-table-column prop="name" width="110" label="名称"></el-table-column>
        <el-table-column prop="name" width="110" label="图片" show-overflow-tooltip>
          <img
            src="https://ts3.cn.mm.bing.net/th?id=OIP-C.h9mjwCJcnjlnT8rmwgi16wHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
            style="width: 100%"
          />
        </el-table-column>
        <el-table-column prop="role" width="110" label="活动状态"></el-table-column>
        <el-table-column prop="role" width="110" label="专栏名称"></el-table-column>
        <el-table-column prop="name" width="110" label="推荐"></el-table-column>
        <el-table-column width="150" label="操作" fixed="right">
          <template #default="{ row }">
            <div class="dialog-footer" style="width: 10vw">
              <el-button icon="Edit" style="width: 4vw" size="small" @click="editContent">
                编辑
              </el-button>
              <el-button icon="Delete" style="margin-right: 1vw; width: 4vw" size="small">
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
    <!-- 添加帖子 -->
    <el-dialog
      v-model="addVisible"
      title="&nbsp;&nbsp;新增帖子"
      width="500"
      style="margin-top: 10vw"
    >
      <div>
        <el-form :model="addRuleForm" label-width="80px" style="margin-top: 2vw" ref="addRuleForm">
          <el-col :span="12">
            <el-form-item label="帖子名称" prop="name">
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
    <!-- 编辑帖子 -->

    <el-dialog
      v-model="editVisible"
      title="&nbsp;&nbsp;编辑帖子"
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
            <el-form-item label="帖子名称" prop="name">
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
import { getPostPage } from '@/api'
import { post } from '@/utils/http'

const dialogVisible = ref(false)
const addVisible = ref(false)
const editVisible = ref(false)
// 添加帖子
const addContent = () => {
  addVisible.value = true
}

const editContent = () => {
  editVisible.value = true
}

const postList = ref()
const total = ref(0)
const select = ref()
select.value = []
const params = ref({
  page: 1,
  pageSize: 10,
  keyword: '',
})
const loading = ref(false)
// 添加帖子
const addRuleForm = ref({
  name: '',
  sort: '',
})
// 编辑帖子
const editRuleForm = ref({
  name: '',
  sort: '',
})

onMounted(() => {
  loadData()
})
async function loadData() {
  loading.value = true
  const res = await getPostPage()
  postList.value = res.data
  // total.value = res.data.total
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
