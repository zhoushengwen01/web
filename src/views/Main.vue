<template>
  <el-container style="height: 700px">
    <el-header>
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <Dropdown trigger="click" style="margin-right: 50px">
      </Dropdown>
    </el-header>
    <el-container>
      <el-aside>
        <el-menu active-text-color="#ffd04b" text-color="#fff" :default-openeds="['1', m.size]" v-for="m in menulist"
                 :key="m" router>
          <el-submenu :index="m.id">
            <template slot="title"><i class="el-icon-message"></i>{{m.name}}</template>
            <el-menu-item-group v-for="c in m.children" :key="c">
              <el-menu-item :index="c.url">{{c.name}}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <router-view/>
    </el-container>
    <el-footer>
      <span>Copyright © 2019 - 2019 版权所有</span>
    </el-footer>
  </el-container>
</template>

<script>
  import * as cmsApi from '../api/serverApi'

  export default {
    name: "Main",
    data() {
      return {
        menulist: []
      }
    },


    //在html渲染前执行
    created() {
      cmsApi.menu_list().then((res) => {
        this.menulist = res;
      })
    }
  }
</script>

<style scoped>
  .el-header {
    background: #e9eaec;
    color: #333;
    line-height: 60px;
    text-align: right;
    font-size: 12px
  }

  .el-aside {
    background: #464c5b;
  }

  .el-main {
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  .el-footer {
    text-align: center;
  }

  .el-menu {
    background: #464c5b;
  }

  .el-menu-item-group {
    background: #464c5b;
  }

  img {
    width: 40px;
    height: 40px;
    line-height: 40px;
    border-radius: 20px;
    margin-top: 10px;
    /*margin-right: 50px;*/
  }
</style>
