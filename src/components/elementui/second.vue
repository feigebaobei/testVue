<template>
  <div class="eleSecond">
    <h3 v-html="title"></h3>
    <el-row :gutter="20">
      <el-col :span="8" class='marginBottom'>
        <div class="couponCard">
          <div class="couponCardMain">
            <div class="couponCardDescribe">
              <h5>
                <span class="title">品类券</span>
                <span class="icon">icon</span>
              </h5>
              <p class="describe">
                仅可购买限定课程
                <br>
                （特殊商品除外）
              </p>
              <p class="price">
                ￥
                <span>123</span>
              </p>
            </div>
            <p class="fullSubtract">订单满1000元可用</p>
            <p class="time">有效期：2018.5.10-2018.8.10</p>
          </div>
          <div class="circleLeft"></div>
          <div class="circleRight"></div>
          <div class="dashed"></div>
          <div class="couponCardVice">
            <el-button>button text</el-button>
          </div>
        </div>
      </el-col>
      <el-col :span="8" class='marginBottom'>
        <div class="couponCard">
          <div class="couponCardMain">
            <div class="couponCardDescribe">
              <h5>
                <span class="title">品类券</span>
                <span class="icon">icon</span>
              </h5>
              <p class="describe">
                仅可购买限定课程
                <br>
                （特殊商品除外）
              </p>
              <p class="price">
                ￥
                <span>123</span>
              </p>
            </div>
            <p class="fullSubtract">订单满1000元可用</p>
            <p class="time">有效期：2018.5.10-2018.8.10</p>
          </div>
          <div class="circleLeft"></div>
          <div class="circleRight"></div>
          <div class="dashed"></div>
          <div class="couponCardVice">
            <el-button>button text</el-button>
          </div>
        </div>
      </el-col>
      <el-col :span="8" class='marginBottom'>
        <div class="couponCard">
          <div class="couponCardMain">
            <div class="couponCardDescribe">
              <h5>
                <span class="title">品类券</span>
                <span class="icon">icon</span>
              </h5>
              <p class="describe">
                仅可购买限定课程
                <br>
                （特殊商品除外）
              </p>
              <p class="price">
                ￥
                <span>123</span>
              </p>
            </div>
            <p class="fullSubtract">订单满1000元可用</p>
            <p class="time">有效期：2018.5.10-2018.8.10</p>
          </div>
          <div class="circleLeft"></div>
          <div class="circleRight"></div>
          <div class="dashed"></div>
          <div class="couponCardVice">
            <el-button>button text</el-button>
          </div>
        </div>
      </el-col>
      <el-col :span="8" class='marginBottom'>
        <div class="couponCard">
          <div class="couponCardMain">
            <div class="couponCardDescribe">
              <h5>
                <span class="title">品类券</span>
                <span class="icon">icon</span>
              </h5>
              <p class="describe">
                仅可购买限定课程
                <br>
                （特殊商品除外）
              </p>
              <p class="price">
                ￥
                <span>123</span>
              </p>
            </div>
            <p class="fullSubtract">订单满1000元可用</p>
            <p class="time">有效期：2018.5.10-2018.8.10</p>
          </div>
          <div class="circleLeft"></div>
          <div class="circleRight"></div>
          <div class="dashed"></div>
          <div class="couponCardVice">
            <el-button>button text</el-button>
          </div>
        </div>
      </el-col>
      <el-col :span="8" class='marginBottom'>
        <div class="couponCard">
          <div class="couponCardMain">
            <div class="couponCardDescribe">
              <h5>
                <span class="title">品类券</span>
                <span class="icon">icon</span>
              </h5>
              <p class="describe">
                仅可购买限定课程
                <br>
                （特殊商品除外）
              </p>
              <p class="price">
                ￥
                <span>123</span>
              </p>
            </div>
            <p class="fullSubtract">订单满1000元可用</p>
            <p class="time">有效期：2018.5.10-2018.8.10</p>
          </div>
          <div class="circleLeft"></div>
          <div class="circleRight"></div>
          <div class="dashed"></div>
          <div class="couponCardVice">
            <el-button>button text</el-button>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        title: 'second page'
      }
    }
  }
</script>

<style lang="scss">
  .eleSecond {
    border: 1px solid #123;
    padding: 3px;
  }
  .marginBottom {
    margin: 0 0 20px 0;
  }
  .empty {
    clear: both;
  }
  .blue {
    color: #618be5;
  }
  .orange {
    color: #ff8e00;
  }
  .couponCard {
    width: auto;
    position: relative;
    overflow: hidden;
    .couponCardMain {
      width: auto;
      height: 130px;
      border: 1px solid #999;
      border-bottom: 0px;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
      padding: 20px;
      .couponCardDescribe {
        height: 63px;
        h5 {
          margin-top: 0px;
          margin-bottom: 6px;
          font-weight: bold;
          font-size: 14px;
          font-family: 'MicrosoftYaHei'
        }
        .describe {
          color: #999;
          font-size: 12px;
        }
        .price {
          margin-top: -70px;
          font-size: 22px;
          font-family: 'MicrosoftYaHei';
          text-align: right;
          line-height: 50px;
          font-weight: bold;
          span {
            font-size: 50px;
          }
        }
      }
      .fullSubtract {
        text-align: right;
        margin: 0px;
        font-size: 12px;
      }
      .time {
        text-align: right;
        margin: 0px;
        font-size: 12px;
      }
    }
    .circleLeft {
      position: absolute;
      left: -15px;
      top: 115px;
      width: 30px;
      height: 30px;
      border: 1px solid #999;
      border-radius: 50%;
      background-color: #fff;
    }
    .circleRight {
      position: absolute;
      right: -15px;
      top: 115px;
      width: 30px;
      height: 30px;
      border: 1px solid #999;
      border-radius: 50%;
      background-color: #fff;
    }
    .dashed {
      width: auto;
      height: 0px;
      border-top: 1px dashed #999;
    }
    .couponCardVice {
      border: 1px solid #999;
      border-top: 0px;
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;
      text-align: center;
      button {
        margin: 10px auto;
      }
    }
  }
</style>