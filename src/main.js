import Vue from 'vue'
import App from './App.vue'
// 自定义
import axios from 'axios'
import Marked from 'marked'
import router from './router'

// axios.defaults.baseURL = 'https://api.example.com';
// axios.defaults.headers.common['Authorization'] = 'Token';
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

Vue.prototype.$ajax = axios
Vue.prototype.marked = Marked
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
