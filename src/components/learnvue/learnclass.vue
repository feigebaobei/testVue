<template>
  <div>
    <h2>learnclass</h2>
    <div class="testclass"></div>
    <hr>
    <div :class="{testclass: isActive}"></div>
    <hr>
    <div :class="{testclass: isActive, 'errorClass': isError}"></div>
    <hr>
    <div :class="classObj"></div>
    <hr>
    <div :class="[class0,class1]"></div>
    <hr>
    <div :class="[{testclass: isActive}, class1]"></div>
    <h2>laernstyle</h2>
    <div :style="{color: activeColor, fontSize: fontSize +'px'}">test word</div>
    <hr>
    <div :style="[baseStyles,overStyle]">test word</div>
    <hr>
    <div :style="{display: ['-webkit-box', '-ms-flexbox', 'flex']}"></div>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        isActive: true,
        isError: true,
        class0: 'testclass',
        // class1: 'errorClass',
        activeColor: 'red',
        fontSize: '28'
      }
    },
    computed: {
      classObj: function () {
        return {
          testclass: true,
          'errorClass': true
        }
      },
      baseStyles: function () {
        return {color: 'red'}
      },
      overStyle: function () {
        return {fontSize: '28px'}
      },
      class1: function () {
        return 'errorClass'
      }
    }
  }
</script>

<style lang="scss">
  .testclass{
    width: 100px;
    height: 100px;
    background: #8e8
  }
  .errorClass {
    border: 2px solid red;
  }
</style>