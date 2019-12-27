import axios from 'axios'

const baseUrl = 'api/';
export const service = axios.create({
  baseURL: baseUrl,
  timeout: 6000,
  // headers: {
  //   'Content-Type': 'application/x-www-form-urlencoded'
  // }
})

service.interceptors.request.use(config => {
  config.headers['Content-Type'] = "text/plain"
  return config
},error => {
  console.log(error)
  Promise.reject(error)
})

service.interceptors.response.use(response => {
  return response
},error=> {
  if(error.response) {
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
