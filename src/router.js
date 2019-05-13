import Vue from 'vue'
import Router from 'vue-router'
import Tools from './assets/js/tools'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/login',
      name: 'login',
      component: () => import('./views/login.vue')
    },
    {
      path: '/',
      name: 'menu',
      component: () => import('./views/menu.vue')
    },
    // 未匹配到的路由重定向到首页
    {
      path: "*",
      redirect: "/",
      component: () => import('./views/menu.vue')
    }
  ]
})

// 登陆验证
// router.beforeEach((to, from, next) => {
  
//   var token = Tools.getCookie('userInfo')
//   if (to.name === 'login') {
//     next()
//   } else if (token) {
//     next()
//   } else {
//     next({
//       path: '/login'
//     })
//   }
// })

export default router