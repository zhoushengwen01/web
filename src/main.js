import Vue from 'vue'
import VueRouter from 'vue-router'
import router from './router'

//导入vuex
import Vuex from 'vuex'
import store from './store'

// 导入 ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import App from './App'


router.beforeEach((to, form, next) => {
  let isLogin = sessionStorage.getItem("userState");

  if (to.path == '/logout') {
    sessionStorage.removeItem("userState")
    next({path: '/login'});
  } else if (to.path == '/login') {
    if (isLogin != null && isLogin.length > 0) {
      next({path: '/main'});
    }
  } else if (isLogin == null || isLogin.length == 0) {
    isLogin = null;
    next({path: '/login'});
  }
  next();
});

// 安装路由
Vue.use(VueRouter);

// 安装 ElementUI
Vue.use(ElementUI);
//安装vuex
Vue.use(Vuex);


new Vue({
  el: '#app',
  // 启用路由
  //启用store
  store,

  router,
  // 启用 ElementUI
  render: h => h(App)


});
