<template>
  <div class="animatediv">
    <h2>过渡</h2>
    <p>从一种状态转变为另一种状态</p>
    <div class="transitionEx0"></div>
    <h2>animate.css</h2>
    <!-- <div :class="compclass"></div> -->
    <div :class="[testClass,animatedClass,currentAnimate, isInfinite]"></div>
    <div class="animatebox" @click="changeAnimate()">
      <div>
        <input type="checkbox" id="changeInfinite" v-model="checked">
        <label for="changeInfinite">重复播放动画</label>
      </div>
      <button v-for="name in animateName">{{name}}</button>
    </div>
  </div>
</template>

<script>
  import animateName from '../../lib/animate.json'
  import $ from 'jquery'
  // import animatin from '../../assets/style/animate.css'
  require('../../assets/style/animate.css')

  export default {
    data: function () {
      return {
        animateName: animateName,
        testClass: 'testClass',
        animatedClass: 'animated',
        currentAnimate: '',
        // isInfinite: 'infinite',
        checked: true
      }
    },
    computed: {
      compclass: function () {
        return {
          animated: true,
          testClass: true,
          currentAnimate: this.currentAnimate
        }
      },
      isInfinite: function () {
        if (this.checked) {
          return 'infinite'
        } else {
          return ''
        }
      }
    },
    methods: {
      changeAnimate: function () {
        if (event.target.tagName === 'BUTTON') {
          let $dom = $(event.target)
          let value = $dom.text()
          console.log(value)
          this.currentAnimate = value
        } else {
          console.log('1551')
        }
      },
      changeInfinite: function () {
        console.log(this.isInfinite)
      }
    }
  }
</script>
  
<style lang="scss">
  .testClass {
    width: 100px;
    height: 80px;
    background: #e82;
  }
  .transitionEx0
  {
    width:100px;
    height:100px;
    background:red;
    transition-property:width;
    transition-duration:1s;
    transition-timing-function:linear;
    transition-delay:2s;
    /* Safari */
    -webkit-transition-property:width;
    -webkit-transition-duration:1s;
    -webkit-transition-timing-function:linear;
    -webkit-transition-delay:2s;
  }
  .transitionEx0:hover
  {
    width:200px;
  }
  .animatebox {
    margin-top: 15px;
    button {
      margin: 2px 5px;
    }
  }
  // .animatebox > button {
  //   margin: 2px 5px;
  // }
</style>