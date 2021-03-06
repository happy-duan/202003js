//这个就是进行二次封装的js
import axios from 'axios'

const http = axios.create({
    baseURL: '',
    transformRequest(data) {
        //data就是post传过来的参数
        let str = '';
        for (let key in data) {
            str += `${key}=${data[key]}&`
        }
        return str;
    },
    //给每一个请求拼接一个随机数，防止走缓存
    params: {
        t: Math.random()
    },
    timeout: 2000, //请求超时时间，如果该请求超过2000ms,那么该请求会停止
})
//请求拦截器和响应拦截器
http.interceptors.request.use(function (config) {
    return config;
}, function (err) {
    return Promise.reject(err)
})

//响应拦截器
http.interceptors.response.use(function (response) {
    return response.data;
}, function (err) {
    return Promise.reject(err)
})
export default http;