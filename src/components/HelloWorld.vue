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
  // props: {
  //   title: String,
  // },
  data(){
    return {
      input: '',
    }
  },
  mounted: function ()
  {
    console.log(this.$route.path)
    this.$ajax.get('https://blog.mengniang.tv/' + this.$route.path + '.md')
            .then((response) => {
              this.input = response.data
              // console.log(response)
            }).catch((error) => {
                // 请求已发出，但服务器响应的状态码不在 2xx 范围内
                // console.log(error.response.data)
                console.log(error.response.status)
                // console.log(error.response.headers)
            })
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
