<template>
  <div id="vue" class="animated fadeIn">
    <div id="loading" v-if="isLoading">
      <div class="center">
        <div class="typing_loader"></div>
      </div>
    </div>
    <main>
      <button class="sidebar-toggle" v-on:click="greet">
        <div class="sidebar-toggle-button">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
      <aside class="sidebar">
        <div class="search"><div class="input-wrap">
          <input type="search" value="" placeholder="搜索">
        </div>
        </div>
        <h1 class="app-name animated shake"><router-link to="/">首页</router-link></h1>
        <div class="sidebar-nav" v-html="bindContent"></div>
      </aside>
      <router-view/>
    </main>
  </div>
</template>

<script>
export default {
  name: "vue",
  data: function() {
    return {
      sidebar: "",
      title: "",
      isLoading: false
    };
  },
  mounted: function() {
    this.request(this.apiSetting.getSiderbar).then(
      res => {
        this.sidebar = res.data;
      },
      error => {
        this.sidebar = error.status;
        console.log(error);
      })
  },
  methods: {
    greet: function() {
      var close = "close";
      var ele = document.getElementsByTagName("body")[0];
      if (ele.className.match(new RegExp("(\\s|^)" + close + "(\\s|$)"))) {
        var reg = new RegExp("(\\s|^)" + close + "(\\s|$)");
        ele.className = ele.className.replace(reg, " ");
      }else
      {
        ele.className += " close";
      }
    }
  },
  computed: {
    bindContent: function() {
      return this.marked(this.sidebar, { sanitize: true });
    }
  }
};
</script>

<style>
@import "//cdn.jsdelivr.net/npm/docsify/lib/themes/vue.css";
@import "//cdn.bootcss.com/animate.css/3.7.0/animate.min.css";
@import "./assets/css/style.css";
</style>
