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
      <el-tab-pane label="社区信息">社区信息</el-tab-pane>
      <el-tab-pane label="订单信息">订单信息</el-tab-pane>
      <el-tab-pane label="程序接单信息">程序接单信息</el-tab-pane>
      <el-tab-pane label="学习信息">学习信息</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/store'
import { ref } from 'vue'

const checkedCities = ref(['Shanghai', 'Beijing'])
const cities = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']

// 获取用户信息
const userStore = useUserStore()
const { userInfo } = storeToRefs(userStore)
</script>

<style scoped lang="scss">
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
