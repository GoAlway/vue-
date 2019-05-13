import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 样式重置文件
import './assets/css/reset.css'

// 导入api
import api from './assets/js/api/index'
Vue.prototype.$api = api

// 导入工具函数
import tools from './assets/js/tools'
Vue.prototype.$tools = tools

// 引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

Vue.config.productionTip = false


// 刷新store里面的数据丢失。需要在main.js里面重新赋值
var userInfo = {
  token: 123,
  username: '方程源'
}
store.dispatch('commitSave',userInfo)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
