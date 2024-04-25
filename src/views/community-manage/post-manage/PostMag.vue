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
        <el-table-column prop="postId" label="ID" show-overflow-tooltip></el-table-column>
        <el-table-column prop="title" label="帖子名称" show-overflow-tooltip></el-table-column>
        <el-table-column prop="content" label="帖子内容" show-overflow-tooltip></el-table-column>
        <el-table-column prop="thumb" label="点赞量"></el-table-column>
        <el-table-column prop="commit" label="评论数"></el-table-column>
        <el-table-column prop="share" label="转发量"></el-table-column>
        <el-table-column prop="name" label="封面" show-overflow-tooltip>
          <template #default="scope">
            <img style="width: 100px; height: 100px" :src="scope.row.coverUrl" />
          </template>
        </el-table-column>
        <!-- <el-table-column
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
        ></el-table-column> -->
        <!-- <el-table-column
          prop="columnId"
          width="110"
          label="专栏"
          show-overflow-tooltip
        ></el-table-column> -->
        <el-table-column prop="createdTime" width="110" label="创建时间"></el-table-column>
        <el-table-column prop="updatedTime" width="110" label="更新时间"></el-table-column>
        <el-table-column prop="name" label="名称"></el-table-column>
        <el-table-column prop="name" label="头像" show-overflow-tooltip>
          <template #default="scope">
            <img style="width: 100px; height: 100px" :src="scope.row.avatarUrl" />
          </template>
        </el-table-column>
        <el-table-column prop="name" label="推荐">
          <template #default="scope">
            <el-switch
              v-model="scope.row.recommended"
              class="ml-2"
              :active-value="1"
              :inactive-value="0"
            />
          </template>
        </el-table-column>
        <el-table-column label="操作" fixed="right">
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
