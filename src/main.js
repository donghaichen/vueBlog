import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 自定义
import fun from "./comnon/function.js";
import Marked from "marked";
import config from "./config";
import request from "./comnon/aixos";
import apiSetting from "./comnon/apiSetting.js";

Vue.prototype.fun = fun;
Vue.prototype.config = config;
Vue.prototype.marked = Marked;
Vue.prototype.request = request;
Vue.prototype.apiSetting = apiSetting;

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
