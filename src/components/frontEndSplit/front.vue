<template>
  <div>
    <div>
      <h3>页面渲染完后加载数据</h3>
      <p>加载第0个对象</p>
      <p>{{mountedData}}</p>
    </div>
    <div>
      <h3>点击按钮后使用axios加载数据</h3>
      <button v-on:click="axiosData">异步加载数据</button>
      <p>
        <span>age:</span>
        <span>{{data.age}}</span>
        <br>
        <span>color:</span>
        <span>{{data.color}}</span>
        <br>
        <span>name:</span>
        <span>{{data.name}}</span>
      </p>
    </div>
    <div>
      <h3>点击按钮后使用ajax加载数据</h3>
      <button v-on:click="ajaxData">ajax data</button>
    </div>
    <p>{{ajaxdata}}</p>
  </div>
</template>

<script>
  // 使用vue+axios时数据应放在static文件夹里。不可以乱放，也不可以入在自己创建的文件夹内。
  import axios from 'axios'
  import $ from 'jquery'
  export default{
    data () {
      return {
        data: '未加载数据。',
        ajaxdata: 'ajaxdata未加载数据。',
        mountedData: ''
      }
    },
    methods: {
      axiosData: function () {
        axios({
          method: 'get',
          url: '/static/s.json',
          data: {
            firstName: 'fred',
            lastName: 'flintstone'
          }
        }).then(res => {
          // this.data = '234324'
          console.log(res)
          console.log('23')
          console.log(this.data)
          this.data = res.data[2]
        })
      },
      ajaxData: function () {
        this.ajaxdata = $.ajax({
          url: 'http://localhost:8080/static/s.json',
          dataType: 'JSONP'
        })
      }
    },
    computed: {
    },
    mounted () {
      console.log('mounted')
      axios({
        method: 'get',
        url: '/static/s.json'
      }).then(response => {
        this.mountedData = response.data[0]
      })
    }
  }
</script>

<style>
  
</style>