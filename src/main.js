import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import env from './env'

//mock开关
const mock =false;
if (mock) {
  require('./mock/api')
}
//根据前端的跨域方式做调整  eg./a/: /api/a/b => /a/b
axios.defaults.baseURL = '/api'; 
axios.defaults.timeout=8000;

//根据不同的环境变量获取不同的请求地址
axios.defaults.baseURL = env.baseURL; 
/***
 * 接口错误拦截代码
 */
axios.interceptors.response.use(function(response){
  let res = response.data;
  if (res.status == 0) {
    return res.data;
  }else if (res.status == 10) { //未登录
    window.location.href = '/#/login'
  }else{
    alert(res.msg);
  }
})

Vue.use(VueAxios,axios)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
