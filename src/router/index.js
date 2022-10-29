import Vue from 'vue'
import VueRouter from 'vue-router'

// 使用插件
Vue.use(VueRouter)

//引入组件
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'

// let originPush = VueRouter.prototype.push
// console.log(originPush)

// 配置路由
export default new VueRouter({
  routes: [
    {
      path: '/home',
      component: Home,
      meta: { show: true },
    },
    {
      path: '/login',
      component: Login,
      meta: { show: false },
    },
    {
      path: '/register',
      component: Register,
      meta: { show: false },
    },
    {
      name: 'search',
      path: '/search/:keyword?',
      // path: '/search/:keyword?'
      component: Search,
      meta: { show: true },
    },
    //重定向
    {
      path: '*',
      redirect: '/home',
    },
  ],
})
