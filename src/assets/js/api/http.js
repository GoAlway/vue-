/**
 * axios 封装
 * 请求拦截，响应拦截，错误统一处理
 */

import axios from 'axios'
import router from '../../../router'
import store from '../../../store'

/**
 * 跳转登陆页
 * 携带当前路由，当完成登陆后调回本页面
 */
const toLogin = _ => {
    router.replace({
        path: '/login',
        query: {
            redirect: router.currentRoute.fullPath
        }
    })
}

/**
 * 请求失败后的统一处理    
 * @params { Number } status 请求失败的状态码
 */
const errorHandle = (status, other)=> {
    // 判断状态码
    switch (status) {
        // 401： 未登录，跳转登陆页
        case 401:
            toLogin()
            break

            // token 过期 
            // 清除token 并跳转登陆页
        case 403:
            localStorage.removeItem('userInfo')
            toLogin()
            break

            // 页面不存在
        case 404:
            console.log('资源未找到')
            break
        default:
            console.log(other)
    }
}

// 创建aixos实例
var instance = axios.create({timeout: 1000 * 12})

// 设置post请求头
instance.defaults.headers.post['Content-type'] = 'application/x-www-form-urlencoded'
/**
 * 请求拦截
 * 每次请求前，如果没有token则添加
 */
instance.interceptors.request.use(
    config => {
        // 根据本地是否有token判断用户是否登陆
        // token可能过期，所以每次请求都需要携带token
        // 后台根据token返回登陆信息，并返回对应的状态码
        // 响应拦截中统一处理
        const token = store.state.UERINFO.TOKEN
        token && (config.headers.Authorization = token)
        return config
    },
    error => {
        Promise.error(error)
    }
)

/**
 * 响应拦截
 */
instance.interceptors.response.use(
    // 请求成功
    res => res.status == 200 ? Promise.resolve(res) : Promise.reject(res),
    

    // 请求失败
    error => {
        const { response } = error
        if(response) {
            errorHandle(response.status, response.data.message)
            return Promise.reject(response)
        } else {
            // 处理断网情况

        }
    }
)

export default instance

