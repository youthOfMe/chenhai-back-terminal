<template>
  <div>
    <div class="head-message my-card">
      <el-form label="公告" style="display: flex; justify-content: space-between; height: 2vw">
        <el-button type="primary">编辑公告</el-button>
      </el-form>
    </div>
    <div style="display: flex; justify-content: space-between; margin-top: 1vw">
      <el-col :span="6" style="margin-right: 5px; border-radius: 15px">
        <el-card shadow="never" class="one" style="border-radius: 15px">
          <p>商品买卖区</p>
          <el-divider content-position="left">Rabindranath Tagore</el-divider>
          <img style="width: 10w; height: 10vw; margin-top: 10px" src="/public/logo.png" />
          <el-card
            v-for="(item, index) in list1"
            :key="index"
            style="margin-top: 10px"
            shadow="never"
          >
            <el-divider>{{ item.title }}</el-divider>
            <p>{{ item.content }}</p>
          </el-card>

          <i class="el-icon-tickets ico"></i>
          <div style="clear: both"></div>
        </el-card>
      </el-col>
      <el-col :span="6" style="margin-right: 5px; border-radius: 15px">
        <el-card shadow="always" class="two" style="border-radius: 15px">
          <p>2区</p>
          <el-divider content-position="left">Rabindranath Tagore</el-divider>
          <img style="width: 10w; height: 10vw; margin-top: 10px" src="/public/logo.png" />
          <el-card v-for="(item, index) in list2" :key="index" style="margin-top: 10px">
            <el-divider>{{ item.title }}</el-divider>
            <p>{{ item.content }}</p>
          </el-card>

          <i class="el-icon-tickets ico"></i>
          <div style="clear: both"></div>
        </el-card>
      </el-col>
      <el-col :span="6" style="margin-right: 5px">
        <el-card shadow="always" class="three" style="border-radius: 15px">
          <p>3区</p>
          <el-divider content-position="left">Rabindranath Tagore</el-divider>
          <img style="width: 10w; height: 10vw; margin-top: 10px" src="/public/logo.png" />

          <el-card v-for="(item, index) in list3" :key="index" style="margin-top: 10px">
            <el-divider>{{ item.title }}</el-divider>
            <p>{{ item.content }}</p>
          </el-card>

          <i class="el-icon-tickets ico"></i>
          <div style="clear: both"></div>
        </el-card>
      </el-col>
      <el-col :span="6" style="margin-right: 5px">
        <el-card shadow="always" class="four" style="border-radius: 15px">
          <p>4区</p>
          <el-divider content-position="left">Rabindranath Tagore</el-divider>
          <img style="width: 10w; height: 10vw; margin-top: 10px" src="/public/logo.png" />
          <el-card v-for="(item, index) in list4" :key="index" style="margin-top: 10px">
            <el-divider>{{ item.title }}</el-divider>
            <p>{{ item.content }}</p>
          </el-card>

          <i class="el-icon-tickets ico"></i>
          <div style="clear: both"></div>
        </el-card>
      </el-col>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { post } from '@/utils/http'

const list1 = ref([
  {
    title: '卡片1',
    content:
      '容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。 采用Flex布局的元素，称为Flex容器（flex container），简称”容器”。它的所有子元素自动成为容器成员，称为Flex项目（flex item）。 注：设为Flex布局以后，子元素的float、clear和vertical-align属性将失效。',
  },
  { title: '卡片2', content: '这是卡片2的内容' },
  {
    title: '卡片3',
    content: '这是卡片2的内容 jkhjfgbefjdkbsdhjbbfdofgyuewg好像记得你副本位于东部',
  },
])
const list2 = ref([
  {
    title: '卡片1',
    content:
      '弹性布局简化了网页布局的开发过程，提供了更灵活、响应式的布局方式。它适用于各种屏幕尺寸和设备类型，并能够快速适应不同的布局需求。',
  },
  {
    title: '卡片2',
    content:
      '主轴与交叉轴：弹性容器具有主轴（main axis）和交叉轴（cross axis）。默认情况下，主轴是水平方向，交叉轴是垂直方向。弹性容器：通过将父元素的display属性设置为flex或inline-flex来创建弹性容器。 子元素的弹性项目：弹性容器中的每个子元素都成为弹性项目。子元素可以指定各自在主轴和交叉轴上的大小、顺序以及对齐方式等。',
  },
])
const list3 = ref([
  {
    title: '卡片1',
    content: '：弹性容器具有主轴（main axis）和交叉轴（cross axis）。默认情况下，主轴是水平方向',
  },
  {
    title: '卡片2',
    content:
      '主轴与交叉轴：弹性容器具有主轴（main axis）和交叉轴（cross axis）。默认情况下，主轴是水平方向，交叉轴是垂直方向。弹性容器：通过将父元素的display属性设置为flex或inline-flex来创建弹性容器。 子元素的弹性项目：弹性容器中的每个子元素都成为弹性项目。子元素可以指定各自在主轴和交叉轴上的大小、顺序以及对齐方式等。打击啦v车身宽度和v复活节我的v从不回家v和v立刻就会v才能换个天赋v',
  },
])
const list4 = ref([
  {
    title: '卡片1',
    content:
      '弹性布局简化了网页布局的开发过程，提供了更灵活、响应式的布局方式。它适用于各种屏幕尺寸和设备类型，并能够快速适应不同的布局需求。',
  },
  { title: '卡片2', content: '这是卡片2的内容' },
])
</script>

<style scoped lang="scss">
.my-card {
  background-color: #fff;
  border-radius: 15px;
  box-sizing: border-box;
  padding: 15px;
  /* border: 1px solid #333; */
}
</style>
