import axios from 'axios'
import store from '../store/store'
import { message } from 'ant-design-vue'
if (process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = 'http://119.3.25.70:8080/easylab_lease/'
} else if (process.env.NODE_ENV === 'production') {
  axios.defaults.baseURL = window.location.origin + '/easylab_lease/'
}

// 响应拦截器
axios.interceptors.response.use(response => {
  if (response.status === 200) {
    // store.state.loadding = true;
    console.log(response.data, '这个返回的值')
    if (response.data.code === 511) {
      // 未授权调取授权接口

      message.error('This is an error message')
    } else if (response.data.code === 600) {
      // 未登录跳转登录页
      console.log('未登录')
    } else {
      return Promise.resolve(response)
    }
  } else {
    message.destroy()
    message.error('网络连接异常,请稍后再试')
    store.commit('loadding', false)
    return Promise.reject(response)
  }
}, error => {
  store.commit('loadding', false)// 在这里对返回的数据进行处理
  // 我们可以在这里对异常状态作统一处理
  if (error.response.status) {
    // 处理请求失败的情况
    // 对不同返回码对相应处理   404在这里
    message.destroy()
    message.error('网络连接异常,请稍后再试')
    // 消除各种cookie

    return Promise.reject(error.response)
  }
})

// get 请求
// export function httpGet({
//   url,
//   params = {}
// }) {
//   return new Promise((resolve, reject) => {
//     axios.get(url, {
//       params
//     }).then((res) => {
//       resolve(res.data)
//     }).catch(err => {
//       reject(err)
//     })
//   })
// }
/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function httpGet (url, option) {
  return new Promise((resolve, reject) => {
    if (option) {
      store.commit('loadding', true)
    }
    axios.get(url).then(res => {
      store.commit('loadding', false)
      resolve(res.data)
    }).catch(err => {
      reject(err.data)
    })
  })
}

// post请求
// export function httpPost({
//   url,
//   data = {},
//   params = {}
// }) {
//   return new Promise((resolve, reject) => {
//     axios({
//       url,
//       method: 'post',
//       // transformRequest: [function (data) {
//       //   let ret = ''
//       //   for (let it in data) {
//       //     ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
//       //   }
//       //   return ret
//       // }],
//       // 发送的数据
//       data,
//       // url参数
//       params

//     }).then(res => {
//       resolve(res.data)
//     }).catch(error => {
//       reject(error.data.message)
//     })
//   })
// }
/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function httpPost (url, params, option) {
  return new Promise((resolve, reject) => {
    if (option) {
      store.commit('loadding', true)
    }
    axios.post(url, params)
      .then(res => {
        store.commit('loadding', false)
        resolve(res.data)
      })
      .catch(err => {
        reject(err.data)
      })
  })
}
