<template>
  <div>
    <el-card shadow="always">
      <div class="top-title">
        <span>黑色经典</span>
        <el-button type="primary" @click="editTitle" style="margin-top: 1vw" plain>
          更改店铺名称
        </el-button>
      </div>
    </el-card>
    <el-card style="margin-top: 1vw">
      <div class="carousel">
        <div style="text-align: center; padding: 1vw 2vw; position: relative; overflow: hidden">
          <el-carousel height="35vw">
            <el-carousel-item v-for="item in imageUrl" :key="item">
              <img
                :src="item.url"
                alt=""
                @click="changeCarousel"
                style="width: 100%; height: 100%"
              />
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </el-card>

    <el-card style="margin-top: 1vw">
      <el-form style="display: flex; justify-content: space-between; height: 2vw">
        <el-form-item label="公告名">
          <el-input placeholder="请输入公告名进行搜索"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button slot="append" style="margin-left: 5px">搜索公告</el-button>
          <el-button slot="append" style="margin-left: 5px">添加公告</el-button>
          <el-button slot="append" style="margin-left: 5px">重置公告</el-button>
          <el-button slot="append" style="margin-left: 5px">删除公告</el-button>
        </el-form-item>
      </el-form>
    </el-card>

    <el-card style="margin-top: 1vw">
      <el-table
        :data="Data"
        element-loading-text="拼命加载中"
        v-loading="loading"
        style="width: 100%"
      >
        <el-table-column type="selection" fixed></el-table-column>
        <el-table-column type="index" label="序号" fixed></el-table-column>
        <el-table-column prop="id" label="公告ID" width="100"></el-table-column>
        <el-table-column prop="name" label="标题" width="100"></el-table-column>
        <el-table-column prop="name" label="内容" width="100"></el-table-column>
        <el-table-column prop="id" label="发布人" width="100"></el-table-column>
        <el-table-column prop="date" label="持续时间" width="150"></el-table-column>
        <el-table-column prop="date" label="发布时间" width="150"></el-table-column>
        <el-table-column prop="date" label="更新时间" width="150"></el-table-column>
        <el-table-column prop="role" label="创建者" width="100"></el-table-column>
        <el-table-column prop="role" label="更新者" width="100"></el-table-column>
        <el-table-column label="操作" fixed="right" width="150">
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

    <!-- 更改轮播图 -->
    <el-dialog
      v-model="changeVisible"
      title="&nbsp;&nbsp;更改轮播图"
      width="500"
      style="margin-top: 10vw"
    >
      <div style="width: 60vw">
        <el-form label-width="80px" style="margin-top: 2vw">
          <el-col :span="12">
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
          <el-button @click="changeVisible = false">取消</el-button>
          <el-button type="primary" @click="changeVisible = false">确定</el-button>
        </div>
      </template>
    </el-dialog>
    <!-- 更改店铺名称 -->
    <el-dialog v-model="editVisible" width="500" style="margin-top: 10vw">
      <div style="width: 60vw">
        <el-form :model="editRuleForm" style="margin-top: 2vw; width: 100%" ref="editRuleForm">
          <el-col :span="12" style="width: 100%">
            <el-form-item prop="name">
              <el-input v-model="editRuleForm.name" placeholder="请输入新的店铺名"></el-input>
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

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { post } from '@/utils/http'

// 上传图片
import { Delete, Download, Plus, ZoomIn } from '@element-plus/icons-vue'
import type { UploadFile } from 'element-plus'

const changeVisible = ref(false)
const editVisible = ref(false)
const input = ref('')
// 轮播图
const imageUrl = [
  {
    url: 'https://pic1.zhimg.com/v2-1ca4d7c2c94f02d8b049b7645fae288d_r.jpg',
  },
  {
    url: 'https://ts1.cn.mm.bing.net/th/id/R-C.c2f6165e1acf6b986a20e8b676f13bdd?rik=Dm%2bD%2fgeM4oqgBw&riu=http%3a%2f%2fwww.quazero.com%2fuploads%2fallimg%2f140303%2f1-140303215045.jpg&ehk=sdIsCQj%2bvjKfUs%2fDw%2fZekILroLb1ALwbKghApSPIq4U%3d&risl=&pid=ImgRaw&r=0',
  },
  {
    url: 'https://ts1.cn.mm.bing.net/th/id/R-C.b7d86f694b0c0e08fde610685b682e4c?rik=DMoesjOanCbjgA&riu=http%3a%2f%2fpic.bizhi360.com%2fbbpic%2f53%2f4653.jpg&ehk=6rJJj81MmBC7y9hUUyUQjg%2bcP14CDK64VTMct15wcy0%3d&risl=&pid=ImgRaw&r=0',
  },
]
// 添加公告
const changeCarousel = () => {
  changeVisible.value = true
}

// 编辑公告
const editTitle = () => {
  editVisible.value = true
}

// 编辑公告
const editRuleForm = ref({
  name: '',
})

// table
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

// 分页
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
}

const handleDownload = (file: UploadFile) => {
  console.log(file)
}
</script>

<style scoped>
.top-title {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 4vw;
  font-family: '楷体';
  height: auto;
}
.carousel {
  width: 100%;
  height: auto;
  margin-bottom: 2vw;
  justify-content: center;
  display: flex;
  flex-direction: column;
}
</style>
