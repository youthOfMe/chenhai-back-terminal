<template>
  <div class="more-post-info">
    <el-card class="top-card">
      <span class="title">2024版完整版web前端学习路线图（超详细自学路线）</span>
      <div class="top-card">
        <div style="text-align: center; padding: 1vw 2vw; position: relative; overflow: hidden">
          <el-carousel height="35vw">
            <el-carousel-item v-for="item in imageUrl" :key="item">
              <img :src="item.url" alt="" style="width: 100%; height: 100%" />
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
      <span class="small-title">前端核心基础入门</span>
      <p>
        下面的视频是专门为零基础前端学习者准备的入门学习指南，一点基础没有也可以直接看！你将从零开始学习网页端页面搭建，毫不费力掌握前端开发的初级核心基础。
      </p>
      <span class="small-title">1、HTML5+CSS3入门-必须拿捏它</span>
      <p>
        本系列课程从概念到具体基础知识点全程干货满满，为前端小白入门找到了很好的学习抓手，可以作为前端开发学习“梦开始的地方”，老师深入浅出的讲解和动画视频解析并用真实的案例巩固知识，学练结合，打好基础，不怕学不会！
      </p>
      <span class="small-title">2、HTML+CSS pc端项目实战</span>
      <p>
        本课程讲的是HTML+css
        pc端项目实战，通过讲解拉勾网得首页、登录页等，学完即可进一步学会应用HTML+CSS，掌握页面布局和标签、属性等的使用，让你从小白进化为真正的网页美化师。
      </p>
      <div class="bottom-content">
        <el-icon size="25px" style="color: black; width: 5vw"><Pointer /></el-icon>
        <span>111</span>
        <el-icon size="25px" style="color: black; width: 5vw"><Star /></el-icon>
        <span>888</span>
        <el-icon size="25px" style="color: black; width: 5vw"><Share /></el-icon>
        <span>666</span>
        <el-icon size="25px" style="color: black; width: 5vw"><ChatLineSquare /></el-icon>
        <pan>789</pan>
      </div>
    </el-card>
    <el-card style="width: 100%; height: auto">
      <div class="post-content">
        <div>
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
        </div>
        <el-input
          v-model="input"
          style="width: 60vw; margin-left: 2vw"
          placeholder="请输入您要发送的评论"
          clearable
        />
        <el-button type="primary" plain style="margin-left: 3vw; height: 3vw">发送评论</el-button>
      </div>
      <el-divider />
      <div class="contents">
        <div>
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
        </div>
        <div style="margin-left: 2vw">
          <div style="color: black">
            <span style="color: #f4495d">璐璐璐</span>
            <span>:okokokok</span>
          </div>
          <div style="color: gray; margin-top: 1vw">
            <span>24-4-21</span>
            <span>10:08</span>
            <span>来自山东</span>
          </div>
        </div>
        <div style="margin-left: 52vw; margin-top: 2vw">
          <el-icon size="15px" style="color: black; width: 2vw"><Share /></el-icon>
          <el-icon size="15px" style="color: black; width: 2vw"><ChatLineSquare /></el-icon>
          <el-icon size="15px" style="color: black; width: 2vw"><Pointer /></el-icon>
        </div>
      </div>
      <el-divider />
      <div class="contents">
        <div>
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
        </div>
        <div style="margin-left: 2vw">
          <div style="color: black">
            <span style="color: #f4495d">璐璐璐</span>
            <span>:okokokok</span>
          </div>
          <div style="color: gray; margin-top: 1vw">
            <span>24-4-21</span>
            <span>10:08</span>
            <span>来自山东</span>
          </div>
        </div>
        <div style="margin-left: 52vw; margin-top: 2vw">
          <el-icon size="15px" style="color: black; width: 2vw"><Share /></el-icon>
          <el-icon size="15px" style="color: black; width: 2vw"><ChatLineSquare /></el-icon>
          <el-icon size="15px" style="color: black; width: 2vw"><Pointer /></el-icon>
        </div>
      </div>
      <el-divider />
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const input = ref('')
const imageUrl = [
  {
    url: 'https://ts2.cn.mm.bing.net/th?id=OIP-C.JofCq-ymc6jITTE6EXWTYQHaDI&w=350&h=147&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
  },
  {
    url: 'https://ts4.cn.mm.bing.net/th?id=OIP-C.Xr3efwEHZJ_xyNy44KnqgAHaD-&w=341&h=183&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
  },
  {
    url: 'https://ts4.cn.mm.bing.net/th?id=OIP-C.VFS_qLxvznXwvwTcx0FwFgHaCq&w=350&h=125&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
  },
]
</script>

<style scoped>
.more-post-info {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.top-card {
  width: 100%;
  height: auto;
  margin-bottom: 2vw;
  justify-content: center;
  display: flex;
  flex-direction: column;
}
.title {
  font-size: 2vw;
  font-weight: 600;
  margin-left: 2vw;
}
.small-title {
  font-size: 2vw;
  font-weight: 500;
  margin: 1vw;
}
.bottom-content {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin-top: 5vw;
  margin-right: 20px;
}
p {
  font-size: 1vw;
  margin: 1vw;
}
.post-content {
  display: flex;
  flex-direction: row;
}
.contents {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 1vw;
}
img {
  background-size: 100% 100%;
}
</style>
