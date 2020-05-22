<template>
  <div style="width: 100%;height: 100%">

    <el-container>
      <el-header style="text-align: left;background-color: slategrey">
        <el-breadcrumb separator="/" style="margin-top: 25px">
          <el-breadcrumb-item>系统管理</el-breadcrumb-item>
          <el-breadcrumb-item>菜单管理</el-breadcrumb-item>
        </el-breadcrumb>

      </el-header>
      <el-main>

        <div id="add_menu">
          <el-button type="primary" icon="el-icon-plus" @click="dialogFormVisible = true">新增菜单</el-button>
        </div>

        <el-table
          :data="tableData"
          border
          fit
          highlight-current-row
          style="width: 100%;"
        >

          <el-table-column
            prop="name"
            label="名称">
          </el-table-column>
          <el-table-column
            prop="url"
            label="路径"
          >
          </el-table-column>
          <el-table-column
            prop="parentId"
            label="父级id">
          </el-table-column>
          <el-table-column
            prop="sort"
            label="序号">
          </el-table-column>

          <el-table-column
            prop="remark"
            label="附注">
          </el-table-column>

          <el-table-column
            prop="icon"
            label="图标">
          </el-table-column>

          <el-table-column
            align="right">
            <template slot="header" slot-scope="scope">
              <el-input
                v-model="search"
                size="mini"
                placeholder="输入关键字搜索"/>
            </template>
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">Edit
              </el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">Delete
              </el-button>
            </template>
          </el-table-column>

        </el-table>
        <menu_add :addState="dialogFormVisible" :submit="addMenuForm" :user-new="userNew"
                  :add-cancel="editCancel"></menu_add>
      </el-main>

    </el-container>


  </div>
</template>


<script>

  import * as menuApi from '../../api/serverApi'

  import menu_add from './menu_add'


  export default {

    components: {menu_add},
    data() {
      return {
        tableData: [],
        dialogFormVisible: false,
      }
    },

    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      addMenuForm() {
        console.log("11111");
      }
    },
    //在html渲染前执行
    created() {
      menuApi.getMenuList().then((res) => {
        this.tableData = res
      })
    }
  }
</script>

<style scoped>

</style>
