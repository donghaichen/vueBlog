<template>
  <section class="content" id="content">
    <article class="markdown-section" id="main">
      <div v-html="content"></div>
      <div id="gitalk-container"></div>
    </article>
  </section>
</template>

<script>
import "gitalk/dist/gitalk.css";
import Gitalk from "gitalk";

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
      this.request(this.apiSetting.getPost).then(
        res => {
          var url = this.config.github.blob + this.$route.path + ".md";
          var editHtml = "- - -";
          editHtml += "\n[:memo: Edit on Github](" + url + ")\n";
          editHtml += "- - -";
          this.input = res.data + editHtml;
          var title = res.data.match(/#\s[^\r\n]+/)[0].replace(/#+/g, "");
          console.log(title);
          document.title = title + "_" + this.config.title;
        },
        error => {
          this.input = error.status;
          console.log(error);
        }
      );
    },
    gitalk: function() {
      var config = this.config;
      var github = config.github;
      const gitalk = new Gitalk({
        clientID: github.clientID,
        clientSecret: github.clientSecret,
        repo: github.repo,
        owner: github.owner,
        admin: [github.owner],
        id: this.$route.path + ".md",
        labels: [github.owner],
        distractionFreeMode: false
      });
      gitalk.render("gitalk-container");
    }
  },
  mounted: function() {
    this.getPost();
    this.gitalk();
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
