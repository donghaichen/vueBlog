import Vue from 'vue'
import App from './App.vue'
// 自定义
import axios from 'axios'
import Marked from 'marked'
import router from './router'
import config from './config'

Vue.prototype.config = config
Vue.prototype.$ajax = axios
Vue.prototype.marked = Marked
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
