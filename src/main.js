import Vue from 'vue'
import App from './App.vue'

// 注册全局组件
import TypeNav from '@/components/TypeNav'
Vue.component(TypeNav.name, TypeNav)

// 引入路由
import router from '@/router'

// 引入仓库
import store from '@/store'

// 引入mock
import '@/mock/mockServe'

// 引入swiper
import 'swiper/css/swiper.css'
new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount('#app')
