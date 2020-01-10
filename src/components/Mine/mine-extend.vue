<template>
  <div class="extend">
    <div class="extend-head">
      <div class="head-img">
        <img src="../../../public/static/img.png" alt="">
      </div>
      <span>{{userInfo.name}}</span>
      <span>{{userInfo.num}}星推广员</span>
      <span><van-rate v-model="userInfo.num" readonly :count="userInfo.num" size="14px"/></span>
    </div>
    <div class="extend-center">
      <div class="extend-profit"><span>累计推广收益</span><span>待提现金额</span></div>
      <div class="extend-money">
        <span class="extend-money--head">￥  {{userInfo.extend_money}} <hr/></span>
        <span>￥  {{userInfo.cash_money}}</span>
        <van-button size="mini" plain @click="cashClick">立即提现</van-button>
      </div>
      <div class="extend-rule">
        <div @click="ruleClick"><van-icon name="description" /><span>推广规则说明</span><van-icon name="arrow-down" /></div>
        <div @click="wxQrClick"><van-icon name="qr" /><span>推广微信公众号</span><van-icon name="arrow-down" /></div>
      </div>
    </div>
    <div class="extend-foot">
      <van-tabs v-model="activeName" line-width="0" :border="false">
        <van-tab title="推广课程" :name="1"></van-tab>
        <van-tab title="推广教辅" :name="2"></van-tab>
        <van-tab title="推广订单" :name="3"></van-tab>
      </van-tabs>
      <div class="extend-order" v-for="info in orderList" :key="info.id" v-show="activeName === 3">
        <div class="extend-order--left">
          <div>
            <span>{{info.time}}</span>
            <span class="extend-left--add">推广收益+</span>
          </div>
          <div class="extend-left--foot">
            <span>{{info.user_name}}</span>
            <span> 通过您的分享，购买了 </span>
            <span>{{info.title}}</span>
          </div>
        </div>
        <div class="extend-order--right">
            ￥{{info.num}}
        </div>
      </div>
      <div class="extend-order extend-room" v-show="activeName === 2 || activeName === 1" v-for="(item,index) in orderList" :key="index">
        <div class="extend-course--left">
          <img :src="item.img" alt="">
        </div>
        <div class="extend-course--right">
          <div>{{item.title}}</div>
          <div>价格：￥{{item.num}}</div>
          <div>可得收益：￥{{item.profit}} <van-button color="#F54B4B" size="mini" round @click="extendClick">推广</van-button></div>
        </div>
      </div>
      <div class="extend-more">加载更多记录 <van-icon name="arrow-down" /></div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        userInfo: {
          name: '杨立瑜',
          num: 4,
          extend_money: 2000,
          cash_money: 3000,
        },
        activeName: 1,
        orderList: [
          {
            id: 3,
            time: '2020-01-01  15:30:31',
            user_name: 'share',
            title: '范闲《硬笔楷书偏旁部首全解析》',
            num: 70,
            profit: 2,
            img: ''
          },
          {
            id: 2,
            time: '2020-01-01  15:30:31',
            user_name: 'share',
            title: '范闲《硬笔楷书偏旁部首全解析》',
            num: 30,
            profit: 3,
            img: ''
          }
        ]
      }
    },
    methods: {
      // 推广
      extendClick() {

      },
      // 立即提现
      cashClick() {

      },
      // 推广规则说明
      ruleClick() {

      },
      // 微信公众号二维码
      wxQrClick() {

      }
    },
  }
</script>

<style lang="less" scoped>
.extend {
  .extend-head {
    display: flex;
    align-items: center;
    padding: .75rem 0 1.28125rem .9375rem;
    span:nth-child(2) {
      font-size: 18px;
      color: #000;
      margin-left: 10px;
    }
    span:nth-child(3) {
      font-size: 12px;
      color: #fff;
      width:4.0625rem;
      height:1.25rem;
      background:rgba(245,75,75,1);
      border-radius:.5rem;
      text-align: center;
      line-height: 1.25rem;
      margin: 0 .625rem;
    }
    .head-img {
      width: 2.09375rem;
      height: 2.09375rem;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%
      }
    }
    
  }
  .extend-center {
    width:21.5625rem;
    background:linear-gradient(0deg,rgba(254,220,69,1) 0%,rgba(251,112,153,1) 100%);
    border-radius:.3125rem;
    margin: 0 auto;
    .extend-profit {
      padding: 15.5px 0 2.5px 15px;
      span:nth-child(1) {
        width: 141px;
        display: inline-block;
        font-size: 10px;
        color: #fff;
      }
      span:nth-child(2) {
        display: inline-block;
        color: #fff;
        font-size: 10px;
      }
    }
    .extend-money {
      font-size: 24px;
      display: flex;
      align-items: center;
      color: #fff;
      margin: 0 8px 2.5px 10px;
      border-bottom: 1px solid rgba(255,255,255,1);
      .extend-money--head {
        width: 121px;
        display: flex;
        align-items: center;
        hr {
          width: 1px;
          height: 50px;
          background:rgba(237,240,245,1);
          border: none;
          margin: 0;
          margin-left: 30px;
          margin-bottom: 13px;
        }
      }
      span:nth-child(2) {
        padding: 0 13px 0 18px;
      }
      .van-button--plain {
        background: none;
        border:1px solid rgba(255,255,255,1);
        font-size: 10px;
        color: #fff;
      }
    }
    .extend-rule {
      padding: 21px 0;
      color: #fff;
      font-size: 12px;
      display: flex;
      justify-content: center;
      div {
        height: 12.5px;
        line-height: 12.5px;
        display: flex;
        align-items: center;
        span {
          margin: 0 6px;
        }
      }
      div:nth-child(2) {
        margin-left: 41px;
      }
    }
  }
  .extend-foot {
    margin-top: 20px;
    .van-tab {
      color:#7C7C7C;
    }
    .van-tab--active {
      color: #000;
    }
    .extend-order {
      background:rgba(255,255,255,1);
      box-shadow:0px 1px 2px 0px rgba(0, 0, 0, 0.08);
      display: flex;
      justify-content: space-between;
      margin: 10px 15px 0;
      border-radius: 4px;
      .extend-order--left {
        padding: 12.5px 0 12px 18px;
        font-size:12px;
        color:rgba(124,124,124,1);
        .extend-left--add {
          color:#F54B4B;
          margin-left: 35px;
        }
        .extend-left--foot {
          font-size: 10px;
          margin-top: 17px;
          span:nth-child(1),span:nth-child(3) {
            color:#22D1E8;
          }
        }
      }
      .extend-order--right {
        margin: 17.5px 0;
        background: #FFD044;
        width:44px;
        height:25px;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
        color: #fff;
        text-align: center;
        line-height: 25px;
      }
    }
    .extend-room {
      justify-content: flex-start;
      .extend-course--left {
        width: 150px;
        height: auto;
        background: #000;
        border-radius: 4px;
        img {
            width: 100%;
            height: 100%;
          }
      }
      .extend-course--right {
        padding-left: 15px;
        font-size: 12px;
        border-radius: 4px;
        box-shadow:0px 1px 2px 0px rgba(0, 0, 0, 0.08);
        div:nth-child(1) {
          padding-top: 15px;
        }
        div:nth-child(2) {
          padding: 8px 0 10px;
          color: #7C7C7C;
          font-size: 10px;
        }
        div:nth-child(3) {
          padding-bottom: 15px;
          display: flex;
          padding-right: 8px;
          color: #F54B4B;
          justify-content: space-between;
        }
      } 
    }
    .extend-more {
      text-align: center;
      font-size: 10px;
      color: #000;
      margin-top: 37px;
    }
  }
}
</style>