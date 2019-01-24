<template>
    <section class="content">
        <article class="markdown-section" id="main">
            <div v-html="content"></div>
        </article>
    </section>
</template>

<script>
export default {
  name: "about",
  data: function() {
    return {
      input: ""
    };
  },
  watch: {
    "$route"() {
      this.getPost();
    }
  },
  methods: {
    getPost: function() {
      this.request(this.apiSetting.getReadeMe).then(
        res => {
          this.input = res.data;
        },
        error => {
          this.input = error.status;
          console.log(error);
        }
      );
    }
  },
  mounted: function() {
    this.getPost();
  },
  computed: {
    content: function() {
      return this.fun.emoji(this.marked(this.input, { sanitize: true }))
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
img[src*="#avatar"] {
  width: 200px;
}
</style>
