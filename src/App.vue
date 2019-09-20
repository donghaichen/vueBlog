<template>
  <div id="vue" class="animated fadeIn">
    <div id="loading" v-show="isLoading">
      <div class="center">
        <div class="typing_loader">
          <svg width="50px"  height="50px"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="lds-ripple">
          <circle cx="50" cy="50" r="14.0334" fill="none" stroke="#c0f6d2" stroke-width="6">
            <animate attributeName="r" calcMode="spline" values="0;40" keyTimes="0;1" dur="1" keySplines="0 0.2 0.8 1" begin="-0.5s" repeatCount="indefinite"></animate>
            <animate attributeName="opacity" calcMode="spline" values="1;0" keyTimes="0;1" dur="1" keySplines="0.2 0 0.8 1" begin="-0.5s" repeatCount="indefinite"></animate>
          </circle>
          <circle cx="50" cy="50" r="33.5671" fill="none" stroke="#ff7c81" stroke-width="6">
            <animate attributeName="r" calcMode="spline" values="0;40" keyTimes="0;1" dur="1" keySplines="0 0.2 0.8 1" begin="0s" repeatCount="indefinite"></animate>
            <animate attributeName="opacity" calcMode="spline" values="1;0" keyTimes="0;1" dur="1" keySplines="0.2 0 0.8 1" begin="0s" repeatCount="indefinite"></animate>
          </circle>
        </svg>
        </div>
      </div>
    </div>
    <main>
      <button class="sidebar-toggle" @click="greet">
        <div class="sidebar-toggle-button">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
      <aside class="sidebar">
        <div class="search"><div class="input-wrap">
          <input type="search" value="" placeholder="搜索" @keyup.enter="search">
        </div>
        </div>
        <h1 class="app-name"><a @click="gotoPage('home')">首页</a></h1>
        <div class="sidebar-nav">
          <ul>
            <li v-for="(item, index) in sidebar" :key="index">
              <a @click="gotoPage('post', item.href)">{{item.title}}</a>
            </li>
          </ul>
        </div>
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
      sidebar: [],
      title: "",
      isLoading: false
    };
  },
  mounted: function() {
    this.request(this.apiSetting.getSiderbar).then(
      res => {
        this.sidebar = res.data
      })
  },
  methods: {
    search: function()
    {
      alert('开发中 ...')
    },
    gotoPage: function(page, param = '')
    {
      this.isLoading = true
      this.$router.push({ name: page, query: {title: param}})
      if (this.isMobile())
      {
        this.greet()
      }
      setTimeout(() =>{
        this.isLoading = false
      }, 1000)
    },
    isMobile: function() {
      let browser = navigator.userAgent.toLowerCase();
      let phone = /iphone|ipod|ipad|android|mobile|blackberry|webos|incognito|webmate|bada|nokia|lg|ucweb|skyfire|micromessenger/i
      return phone.test(browser)
    },
    greet: function() {
      let ele = document.getElementsByTagName("body")[0]
      let className = ele.className
      className = className.indexOf('close') === -1 ? className + ' close' : className.replace(/close/, '')
      ele.className = className
    }
  }
}
</script>

<style>
@import "//cdn.jsdelivr.net/npm/docsify/lib/themes/vue.css";
@import "//cdn.bootcss.com/animate.css/3.7.0/animate.min.css";
@import "./assets/css/style.css";
</style>
