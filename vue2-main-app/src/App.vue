<template>
  <div id="app">
    <!-- 菜单 -->
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      @select="handleSelect"
    >
      <el-menu-item index="1">
        <router-link to="/">Home</router-link>
      </el-menu-item>

      <el-menu-item index="2">
        <router-link to="/vue3-micro-app">Vue3-micro-app</router-link>
      </el-menu-item>

      <el-menu-item index="5">
        <router-link to="/react-micro-app">React-micro-app</router-link>
      </el-menu-item>
    </el-menu>

    <!-- 主内容 -->
    <main class="content">
      <!-- 主应用路由视图渲染 -->
      <router-view />

      <!-- 微应用挂载容器 -->
      <div id="micro-content"></div>
    </main>

    <!-- 底部 -->
    <footer>
      <h5>Micro Web Application</h5>
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'App',
  data() {
    return {
      activeIndex: '1',
    }
  },
  methods: {
    handleSelect(activeIndex: string) {
      this.activeIndex = activeIndex
    },
  },
})
</script>

<style lang="less">
.content {
  text-align: center;
}

.el-menu-demo {
  display: flex;
  justify-content: center;
}

footer{
  position: fixed;
  bottom: 0;
  width: 98.5%;
  text-align: center;
  background-color: #545c64;
  color: #fff;
}
h5{
  margin: 10px 0;
}
</style>
