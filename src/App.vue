<template>
  <div id="vue">
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
      <h1 class="app-name"><router-link to="/">首页</router-link></h1>
      <div class="sidebar-nav" v-html="bindContent"></div>
    </aside>
      <router-view/>
      </main>
  </div>
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
    let apiUrl = this.config.apiUrl
    this.$ajax.get(apiUrl + '_sidebar.md')
            .then((response) => {
              this.sidebar = response.data
            }).catch((error) => {
      console.log(error.response.status);
    }),
    this.$ajax.get(this.config.apiUrl +'README.md')
            .then((response) => {
              this.cover = response.data
            }).catch((error) => {
      console.log(error.response.status);
    })
  },
  methods: {
    greet: function () {
      var close = 'close';
      var ele = document.getElementsByTagName('body')[0];
      if ( ele.className.match(new RegExp("(\\s|^)" + close + "(\\s|$)"))) {
        var reg = new RegExp("(\\s|^)" + close + "(\\s|$)");
        ele.className = ele.className.replace(reg, " ");
      }else
      {
        ele.className += ' close'
      }
    }
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
:root{--theme-color: #bad0f7;}
</style>
