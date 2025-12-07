<template>
      <el-menu
       active-text-color="#ffd04b"
        background-color="#545c64"
        class="aside-container"
        default-active="2"
        text-color="#fff"
        @open="handleOpen"
        @close="handleClose"
      >
        <p class="logo-lg">陪诊服务后台</p>
        <!-- 菜单组件 -->
        <tree-menu></tree-menu>
      </el-menu>
</template>

<script setup>
import TreeMenu from './TreeMenu.vue'
const handleOpen = () => {}
const handleClose = () => {}
</script>

<style lang="less" scoped>
.aside-container{
    height: 100%;
    .logo-lg{
        width: 100%;
        text-align: center;
        font-size: 22px;
        line-height: 60px;
        height: 50px;
        color: white;
    }
}
</style>