<template>
	<div>foo
    <button id="axios" @click="request">axios</button>
    <button id="link" @click="goout">link</button>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    },
    methods: {
      request () {
        console.log('request')
        // this.$axios.interceptors.request.use(function (config) {
        //   config.headers.common['token_li'] = 'haha'
        //   console.log(config)
        // })

        this.$axios({
          url: 'http://api.console.doc/server/index.php?g=Web&c=Mock&o=simple&projectID=6&uri=www.eoapi.cn/api/demo',
          method: 'post'
        })
        .then(response => {
          console.log('response')
          console.log(response)
          // this.axios.spread()
          // this.$axios.spread(function () {
          //   console.log('spread')
          // })
        })

        // var instance = this.$axios.create({
        //   baseURL: 'http://api.console.doc/server/index.php?g=Web&c=Mock&o=simple&projectID=6&uri=www.eoapi.cn/api/demo',
        //   method: 'post'
        // })
        // instance.defaults.headers.common['fromli'] = 'haha'

        // console.log(this.$axios())
        // this.$axios.headers.common['fromli'] = 'haha'
        // this.$axios().then(response => {
        //   console.log(response)
        // })
        // instance.request()
      },
      goout () {
        console.log('goout')
        console.log(this)
        this.$router.beforeEach((to, from, next) => {
          // console.log(to)
          // console.log(from)
          // console.log(next)
          next({path: '/bar'})
          // next(false)
        })
        this.$router.push('/learnform')
      }
    },
    mounted () {
    }
  }
</script>