import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from "./router/index";
import './utils/rem'
import { service } from './utils/request';
import animate from 'animate.css'


Vue.config.productionTip = false
Vue.prototype.$service = service
Vue.use(animate)


new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
