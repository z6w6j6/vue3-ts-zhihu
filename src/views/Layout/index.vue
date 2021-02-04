<template>
    <div>
    <el-container>
        <el-header>
           <i class="el-icon-picture-outline-round"></i> 新系统
        </el-header>
        <el-container>
            <el-aside width="200px">
                <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
                    <el-submenu index="1">
                        <template #title>
                        <i class="el-icon-location"></i>
                        <span>导航一</span>
                        </template>
                        <el-menu-item-group>
                        <template #title>分组一</template>
                        <el-menu-item index="1-1">选项1</el-menu-item>
                        <el-menu-item index="1-2">选项2</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="分组2">
                        <el-menu-item index="1-3">选项3</el-menu-item>
                        </el-menu-item-group>
                        <el-submenu index="1-4">
                        <template #title>选项4</template>
                        <el-menu-item index="1-4-1">选项1</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                    <el-menu-item index="2">
                        <i class="el-icon-menu"></i>
                        <template #title>导航二</template>
                    </el-menu-item>
                    <el-menu-item index="3" disabled>
                        <i class="el-icon-document"></i>
                        <template #title>导航三</template>
                    </el-menu-item>
                    <el-menu-item index="4">
                        <i class="el-icon-setting"></i>
                        <template #title>导航四</template>
                    </el-menu-item>
                </el-menu>
            </el-aside>
            <el-container>
                <el-main>
                   我就是内容，新年发大财哦
                </el-main>
               <el-footer>技术支持----zhanwj</el-footer>
            </el-container>
        </el-container>
    </el-container>
    </div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {

    }
  },
  created() {

  },
  mounted() {

  },
  methods: {

  }
}
</script>

<style scoped lang="less">

</style>
