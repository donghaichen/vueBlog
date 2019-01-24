import Vue from "vue";
import Router from "vue-router";
import About from "./views/About";
import Post from "./views/Post";
Vue.use(Router);
const NotFound = {
  template: "404 not found"
};

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: About,
      meta: {
        title: "About"
      }
    },
    {
      path: "/posts/:title",
      name: "post",
      component: Post,
      meta: {
        title: "Post"
      }
    },
    {
      path: "*",
      component: NotFound,
      meta: {
        title: "找不到页面"
      }
    }
  ]
});
