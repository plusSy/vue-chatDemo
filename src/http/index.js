import axios from 'axios'
import Vue from 'vue'
import { BaseUrl, AjaxSuccessCode } from '../config/index'

let httpVue = new Vue()

let loading = {}
let LoadingOptions = {
  lock: true,
  text: '加载中...',
  spinner: 'el-icon-loading',
  background: 'rgba(0, 0, 0, 0.2)'
}

// 基础配置
axios.defaults.baseURL = BaseUrl
axios.defaults.headers.post['Content-Type'] = 'application/json'

// 请求拦截器
axios.interceptors.request.use(config => {
  loading = httpVue.$loading(LoadingOptions)
  if (!config.withoutToken) {
    config.headers = { ...config.headers }
  }
  if (config.fileUpload) { // 是否是上传图片
    config.headers = { ...config.headers
    }
  } else {
    if (config.method === 'post') {
      config.data = JSON.stringify(config.data)
    }
  }

  return config
})

// 响应拦截器
axios.interceptors.response.use(res => {
  loading.close()
  let {
    data: {
      code,
      message
    }
  } = res
  if (AjaxSuccessCode.includes(code + '')) {
    // 请求成功
    return res.data
  } else {
    // 请求失败
    httpVue.$alert(message)
    return undefined
  }
})

export default axios
