import { service } from '@utils/request'

const api = {
  auth: 'auth/login',
  test: 'sms/verify-code'
}

/*
  登录获取
*/
export function getWxAuth(data) {
  return service({
    url: api.auth,
    method: 'post',
    data: data
  });
}

/*
  提交需求
*/
export function getUserInfo(params) {
  return service({
    url: api.test,
    method: 'post',
    data: params
  })
}
