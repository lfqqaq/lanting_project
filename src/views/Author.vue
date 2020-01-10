<template>
    <div>
    </div>
</template>

<script>
import { getWxAuth } from '@api/api'
import { getUrlCode } from '@utils/comm'
export default {
  name: 'Author',
  data () {
    return {}
  },
  created () {
    this.getWxUserInfoInit()
  },
  methods: {
    getWxUserInfoInit() {
      let code = getUrlCode('code')
      if(code) {
        getWxAuth({
          code: code
        }).then((res) =>{
          console.log(res)
          // if (res && res.success && res.result) {
          //   localStorage.setItem('wxUserInfo', JSON.stringify(res.result))
          // }
          // let redirectUrl = sessionStorage.getItem('wxRedirectUrl')
          // this.$router.replace(redirectUrl)
        })
      }else {
        this.$router.replace('/')
      }
    }
  }
}
</script>

<style scoped>
</style>