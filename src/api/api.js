import { service } from '@utils/request'

const api = { 
  consutAdd: 'WisdomEra/insterConsut',
  bannerList: 'WisdomEra/allPicture',
  test: 'sms/verify-code'
}

/*
  图片列表获取
*/
export function bannerList(params) {
  return service({
    url: api.bannerList,
    method: 'get',
    params: params
  })
}
/*
  提交需求
*/
export function consutAdd(params) {
  return service({
    url: api.consutAdd,
    method: 'post',
    params: params
  })
}

/*
  提交需求
*/
export function test(params) {
  return service({
    url: api.test,
    method: 'post',
    data: params
  })
}


