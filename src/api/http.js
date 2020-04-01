/**
 * 网络请求封装
 */
import axios from 'axios'
import Vue from 'vue'

const http = axios.create({
    baseURL: "http://10.0.0.10:3000/web/api",//bendi
    //  baseURL: "http://localhost:3000/admin/api" //
})

// 添加请求拦截器
http.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    if (localStorage.token) {
        config.headers.Authorization = 'Bearer ' + (localStorage.token); //附加上token Bearer+空格+token
    }
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});
//响应拦截器
http.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    if (error) {
        alert(error.response.data.msg)
        // Vue.prototype.$message({
        //     type: "error",
        //     message: error.response.data.msg
        // })
        // if (error.response.status == 401) {
        //     router.push('/login')
        // }
    }
    return Promise.reject(error)
})
export default http;