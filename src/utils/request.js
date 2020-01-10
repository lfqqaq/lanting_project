import axios from 'axios'

const baseUrl = 'http://classroom.tcaizy.cn/';
export const service = axios.create({
  baseURL: baseUrl,
  timeout: 6000,
})

service.interceptors.request.use(config => {
  config.headers['Content-Type'] = "application/x-www-form-urlencoded"
  // config.headers.Authorization = localStorage.getItem('token')
  console.log(config.headers)
  return config
}, error => {
  console.log(error)
  Promise.reject(error)
})

service.interceptors.response.use(response => {
  return response
}, error => {
  if (error.response) {
    switch (error.response.status) {
      case 401:
        localStorage.clear();
        break;
      case 404:
        console.log('Not Found');
        break;
    }
  }
  return Promise.reject(error.response)
})