<template>
  <div class="user-profile">
    <el-tabs type="border-card">
      <el-tab-pane label="基本信息" class="base-info">
        <div class="head">
          <div class="left">
            <el-progress class="process" type="dashboard" :percentage="80">
              <template #default="{ percentage }">
                <img :src="userInfo.avatar" alt="" />
              </template>
            </el-progress>
            <div class="last">LV.5</div>
            <div class="name">{{ userInfo.name }}</div>
            <div class="signature">{{ userInfo.signature }}</div>
          </div>
          <div class="right">
            <el-radio-group v-model="size">
              <el-radio value="large">Large</el-radio>
              <el-radio value="default">Default</el-radio>
              <el-radio value="small">Small</el-radio>
            </el-radio-group>

            <el-descriptions title="基本信息" direction="vertical" :column="4" :size="size" border>
              <el-descriptions-item label="用户名">{{ userInfo.name }}</el-descriptions-item>
              <el-descriptions-item label="账号">{{ userInfo.account }}</el-descriptions-item>
              <el-descriptions-item label="手机号" :span="2">
                {{ userInfo.phone }}
              </el-descriptions-item>
              <el-descriptions-item label="用户状态">
                <el-tag size="small">{{ userInfo.status ? '管理员' : '普通用户' }}</el-tag>
              </el-descriptions-item>
              <el-descriptions-item label="用户标签">
                <el-tag size="small">{{ userInfo.status ? '管理员' : '普通用户' }}</el-tag>
              </el-descriptions-item>
              <el-descriptions-item label="用户签名">
                {{ userInfo.signature }}
              </el-descriptions-item>
            </el-descriptions>
          </div>
        </div>
        <div class="center-content">
          <el-descriptions title="更多信息" direction="vertical" :column="4" :size="size" border>
            <el-descriptions-item label="头像">
              <img
                style="width: 8vw; height: 5vw"
                src="https://ts3.cn.mm.bing.net/th?id=OIP-C.h9mjwCJcnjlnT8rmwgi16wHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
              />
            </el-descriptions-item>
            <el-descriptions-item label="背景图片">
              <img
                style="width: 8vw; height: 5vw"
                src="https://ts3.cn.mm.bing.net/th?id=OIP-C.h9mjwCJcnjlnT8rmwgi16wHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
              />
            </el-descriptions-item>
            <el-descriptions-item
              label="性别"
              style="display: flex; justify-content: center; align-items: center"
            >
              <span>男</span>
            </el-descriptions-item>
            <el-descriptions-item label="账号密码">456987Adds</el-descriptions-item>
            <el-descriptions-item label="创建时间">12：11</el-descriptions-item>
            <el-descriptions-item label="更新时间">12：11</el-descriptions-item>
            <el-descriptions-item label="星海币">8888</el-descriptions-item>
            <el-descriptions-item label="人民币">8888</el-descriptions-item>
            <el-descriptions-item label="专栏">四季</el-descriptions-item>
            <el-descriptions-item label="点赞数">8888</el-descriptions-item>
            <el-descriptions-item label="IP地址">济宁</el-descriptions-item>
            <el-descriptions-item label="状态">在线</el-descriptions-item>
            <el-descriptions-item label="勋章">在线</el-descriptions-item>
            <el-descriptions-item label="等级">18级</el-descriptions-item>
            <el-descriptions-item label="最后上线时间">12：11</el-descriptions-item>
            <el-descriptions-item label="注册日期">12：11</el-descriptions-item>
            <el-descriptions-item label="经验值">8888</el-descriptions-item>
            <el-descriptions-item label="已经加入">8888天</el-descriptions-item>
            <el-descriptions-item label="活跃状态">活跃</el-descriptions-item>
            <el-descriptions-item label="标签">高手</el-descriptions-item>
            <el-descriptions-item label="签名">不以物喜，不以己悲</el-descriptions-item>
          </el-descriptions>
        </div>
        <div class="content">
          <el-form
            ref="ruleFormRef"
            :model="ruleForm"
            status-icon
            :rules="rules"
            label-width="auto"
            class="demo-ruleForm"
          >
            <el-form-item label="用户名" prop="pass">
              <el-input type="password" autocomplete="off" />
            </el-form-item>
            <el-form-item label="账号" prop="checkPass">
              <el-input type="password" autocomplete="off" />
            </el-form-item>
            <el-form-item label="密码" prop="age">
              <el-input />
            </el-form-item>
            <el-form-item label="手机号" prop="age">
              <el-input />
            </el-form-item>
            <el-form-item label="签名" prop="age">
              <el-input />
            </el-form-item>
            <el-form-item label="标签" prop="age">
              <el-checkbox-group v-model="checkedCities" :min="1" :max="2">
                <el-checkbox v-for="city in cities" :key="city" :label="city" :value="city">
                  {{ city }}
                </el-checkbox>
              </el-checkbox-group>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm(ruleFormRef)">Submit</el-button>
              <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-tab-pane>
      <el-tab-pane label="社区信息">
        <div>
          <el-card>
            <el-form style="display: flex; justify-content: space-between">
              <el-form-item label="帖子名">
                <el-input placeholder="请输入帖子关键信息搜索"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button slot="append" style="margin-left: 5px">搜索帖子</el-button>
                <el-button slot="append" style="margin-left: 5px" @click="addContent">
                  添加帖子
                </el-button>
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

        <div class="post-list">
          <el-row :gutter="20" class="web-list">
            <el-col :span="4" class="web-item" v-for="i in 6" :key="i">
              <el-card>
                <template #header>怎样学习前端？</template>
                <img
                  src="https://ts1.cn.mm.bing.net/th?id=OIP-C.bRg_6DV5feS2moGHuB4RSQHaEG&w=335&h=186&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                  style="width: 100%"
                />
              </el-card>
            </el-col>
          </el-row>
        </div>
      </el-tab-pane>
      <el-tab-pane label="订单信息">订单信息</el-tab-pane>
      <el-tab-pane label="程序接单信息">程序接单信息</el-tab-pane>
      <el-tab-pane label="学习信息">学习信息</el-tab-pane>
    </el-tabs>
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
    path: '/user/morePostInfo',
  })
}
//保存信息
const save = () => {}
</script>

<style scoped lang="scss">
.post-list {
  margin-top: 10px;
  margin-bottom: 10px;
  .web-item {
    margin-bottom: 10px !important;
  }
}
.user-profile {
  .base-info {
    padding-top: 10px;
    .head {
      display: flex;
      .left {
        position: relative;
        display: flex;
        flex: 0 1 25%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 200px;
        .last {
          position: absolute;
          top: -10px;

          /* left: ; */
        }
        img {
          width: 100px;
          height: 100px;
          border-radius: 50%;
        }
        .name {
          margin-top: 10px;
          font-size: 20px;
          font-weight: 600;
        }
        .signature {
          margin-top: 10px;
          font-size: 14px;
          color: #cccccc;
        }
      }
      .right {
        flex: 1;
      }
    }
    .content {
      margin-top: 20px;
    }
  }
}
</style>
