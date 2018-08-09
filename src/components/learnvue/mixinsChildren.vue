<template>
  <div class="mixinChildren">
    <h2>mixinChildren</h2>
    <p>{{color}}</p>
  </div>
</template>

<script>
  export default {
    props: ['color'],
    data: function () {
      return {
      }
    },
    computed: {},
    created: function () {
      let timeout2 = function (ms) {
        return new Promise((resolve, reject) => {
          setTimeout(resolve, ms, 'done')
          // setTimeout(reject, ms, 'done')
          resolve(1)
          // reject(2)
          // if (ms < 30) {
          //   resolve(true)
          // } else {
          //   reject(false)
          // }
        })
      }
      timeout2(3000).then(
        (value) => {
          console.log(value)
        },
        (value) => {
          console.log(value)
        }
      )
    }
  }
</script>