<template>
  <section class="content">
    <article class="markdown-section" id="main">
      <!--<h1>{{ title }}</h1>-->
      <div v-html="content"></div>
    </article>
  </section>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    title: String,
  },
  data(){
    return {
      input: '',
    }
  },
  watch : {
    '$route'()
    {
      this.getPost ()
    }
  },
  methods: {
    getPost: function () {
      let apiUrl = this.config.apiUrl
      this.$ajax.get(apiUrl + this.$route.path + '.md')
              .then((response) => {
                this.input = response.data
              }).catch((error) => {
        console.log(error.response.status)
      })
    }
  },
  mounted: function ()
  {
    this.getPost ()
  },
  computed: {
    content: function () {
      return this.marked(this.input, { sanitize: true })
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
