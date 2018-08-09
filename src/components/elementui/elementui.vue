<template>
  <div class="elementui">
    <h2>elementui</h2>
    <el-button>sdf</el-button>
    <el-row>
      <el-col :span="23">2345y</el-col>
      <el-col :span="8">8888</el-col>
    </el-row>
    <el-select placeholder='请选择' v-model="value">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
    <hr>
    <el-popover
      placement="top-start"
      title="title"
      width='200'
      trigger="hover"
      content="werty"
    >
      <el-button slot="reference">hover asdf</el-button>
    </el-popover>
    <hr>
    <div class="couponCard">
      <div class="couponCardMain">
        <div class="upCard">
          <h5 class="color">品类券<span>icon</span></h5>
          <p class="describe">仅可购买限定课程</br>
            （特殊商品除外）
          </p>
          <p class="right color">￥<span>12</span></p>
          <div class="empty"></div>
        </div>
        <div class="downCard">
          <p>订单满1000元可用</p>
          <p>有效期：2018.5.10-2018.8.10</p>
        </div>
      </div>
      <div class="couponCardVice">
        <button class="color">去使用</button>
      </div>
    </div>
    <hr>
    <div>
    <left></left>
    <right></right>
    <div class="empty"></div>
    </div>
  </div>
</template>

<script>
// import {ArrayList} from './algorithms.js'
  import left from './left.vue'
  import right from './right.vue'
  export default {
    data () {
      return {
        options: [
          {
            value: 'value0',
            label: 'label0'
          },
          {
            value: 'value1',
            label: 'label1'
          },
          {
            value: 'value2',
            label: 'label2'
          },
          {
            value: 'value3',
            label: 'label3'
          }
        ],
        value: 'value1',
        loadTimer: null
      }
    },
    components: {
      left,
      right
    },
    methods: {
      loadingStart () {
        this.loadTimer = this.$loading({
          lock: true,
          text: 'loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0 , 0, 0.7)'
        })
        // setTimeout(() => {
        //   loading.close()
        // }, 3000)
      },
      loadingEnd () {
        this.loadTimer.close()
      }
    },
    mounted () {
      this.loadingStart()
      setTimeout(() => {
        // console.log(this)
        // this.loadTimer.close()
        this.loadingEnd()
      }, 2000)
    }
  }
</script>

<style lang="scss">
  .couponCard {
    width: 300px;
    height: 180px;
    border: 1px solid #e5e5e5;
    border-radius: 8px;
    font-family: 'MicrosoftYaHei';
    .couponCardMain {
      padding: 20px 20px 0px 20px;
      width: auto;
      height: 130px;
      .upCard {
        height: auto;
        h5 {
          width: 75px;
          margin-bottom: 6px;
          margin-top: 0px;
          font-family: 'MicrosoftYaHei';
          font-size: 14px;
          font-weight: bold;
        }
        .describe {
          width: 120px;
          font-family: 'MicrosoftYaHei';
          float: left;
          font-size: 12px;
          margin: 0px;
          color: #999;
        }
        .right {
          float: right;
          font-size: 33px;
          margin: 0px;
          margin-top: -34px;
          font-weight: bold;
          font-family: 'QanelasSoftDEMO';
          span {
            font-size: 50px;
          }
        }
        .empty {
          clear: both;
        }
      }
      .downCard {
        clear: both;
        margin-top: 6px;
        text-align: right;
        font-size: 12px;
        color: #999;
        p {
          margin: 0px;
        }
      }
    }
    .couponCardVice {
      width: 100%;
      height: 50px;
      border-top: 1px dashed #e5e5e5;
      text-align: center;
      button {
        width: 140px;
        height: 30px;
        margin: 10px auto;
      }
    }
  }
  .empty {
    clear: both;
  }
</style>