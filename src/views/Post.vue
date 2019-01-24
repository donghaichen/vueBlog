<template>
  <section class="content" id="content">
    <article class="markdown-section" id="main">
      <div v-html="content"></div>
      <div id="comments"></div>
    </article>
  </section>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    title: String
  },
  data: function() {
    return {
      input: "",
      editor: ""
    };
  },
  watch: {
    $route() {
      this.getPost();
    }
  },
  methods: {
    getPost: function() {
      this.apiSetting.getPost.url = this.$route.path + ".md";
      this.path = this.$route.path + ".md";
      this.request(this.apiSetting.getPost).then(
        res => {
          var url = this.config.github.blob + this.$route.path + ".md";
          var editHtml = "\n- - -";
          editHtml += "\n[:memo: Edit on Github](" + url + ")\n";
          editHtml += "- - -";
          this.input = res.data + editHtml;
          var title = res.data.match(/#\s[^\r\n]+/)[0].replace(/#+/g, "");
          document.title = title + "_" + this.config.title;
        },
        error => {
          this.input = error.status;
          console.log(error);
        }
      );
      this.valine();
    },
    valine: function() {
      var config = this.config.valine;
      const Valine = require("valine");
      if (typeof window !== "undefined") {
        window.AV = require("leancloud-storage")
      }
      new Valine({
        el: "#comments" ,
        appId: config.appId,
        appKey: config.appKey,
        notify: false,
        verify: false,
        avatar: "mm",
        placeholder: config.placeholder,
        path: this.$route.path + ".md",
        meta: ["nick", "link"]
      });
    }
  },
  mounted: function() {
    this.getPost();
  },
  computed: {
    content: function() {
      return this.fun.emoji(this.marked(this.input, { sanitize: true }));
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
