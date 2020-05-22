import Vue from 'vue'
import Router from 'vue-router'

import Login from "../views/Login"
import Main from '../views/Main'
import NotFound from '../views/error/NotFound'
import menu_list from  '../views/menu/menu_list'

// 用于嵌套的路由组件
import UserProfile from '../views/user/Profile'
import UserList from '../views/user/List'

Vue.use(Router);


export default new Router({
  mode: 'history',
  routes: [
    {
      // 登录页
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      // 首页
      path: '/main',
      name: 'Main',
      component: Main,

      // 配置嵌套路由
      children: [
        {path: '/user/profile', component: UserProfile},
        {path: '/base/user', component: UserList},
        {path: '/base/menu', component: menu_list},
      ]
    },
    {
      path: '*',
      component: NotFound
    }
  ]
});
