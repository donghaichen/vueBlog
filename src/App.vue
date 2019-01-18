<template>
  <div id="vue">
    <div id="nav">
      <router-link to="/">主页</router-link>
      <router-link to="/posts/centos-compiled-installation-php7.3.1">表单</router-link>
      <router-link to="/posts/php-the-right-way">表单</router-link>
    </div>
    <router-view/>
  </div>
    <!--<main>-->
    <!--<aside class="sidebar">-->
      <!--<div class="search"><div class="input-wrap">-->
        <!--<input type="search" value="" placeholder="搜索">-->
      <!--</div>-->
      <!--</div>-->
      <!--<h1 class="app-name"><a class="app-name-link" data-nosearch="" href="/">首页</a></h1>-->
      <!--<div class="sidebar-nav"  v-html="bindContent"></div>-->
      <!--<router-link to="/post/666">VUE</router-link>-->
    <!--</aside>-->
      <!--<router-view/>-->
      <!--</main>-->
  <!--</div>-->
</template>

<script>
export default {
  name: 'vue',
  data(){
    return {
      sidebar: '',
      title: '',
    }
  },
  mounted: function ()
  {
    this.$ajax.get('https://blog.mengniang.tv/_sidebar.md')
            .then((response) => {
              this.sidebar = response.data
            }).catch((error) => {
      // 请求已发出，但服务器响应的状态码不在 2xx 范围内
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    })
  },
  computed: {
    bindContent: function () {
      return this.marked(this.sidebar, { sanitize: true })
    }
  }
}
</script>

<style>
@import "https://cdn.jsdelivr.net/npm/docsify/lib/themes/vue.css";
@import "./assets/css/style.css";
#app {
}
</style>
