<template>
  <div class="mine-order">
    <van-tabs v-model="activeName" color="#F54B4B" @change="orderChange">
      <van-tab title="待付款" :name="1"></van-tab>
      <van-tab title="进行中" :name="2"></van-tab>
      <van-tab title="已完成" :name="3"></van-tab>
      <van-tab title="全部订单" :name="4"></van-tab>
    </van-tabs>
    <div class="mine-order--center">
      <div class="mine-nodata" v-if="orderList.length == 0">
        <div class="nodata-img">
          <img src="../../../public/static/nodata.png" alt="">
        </div>
        <div class="nodata-title">没有你的订单</div>
        <van-button to="/" class="nodata-btn">去首页</van-button>
      </div>
      <div class="mine-order--content" v-for="item in orderList" :key="item.id" v-else>
        <div class="mine-order--head">
          <div><van-icon name="clock-o" /><span>{{item.time}}</span></div>
          <div class="mine-order--period" v-if="item.status == 2">学习中  共{{item.period}}课时</div>
          <div class="mine-order--period" v-else-if="item.status == 0">等待您的付款</div>
          <div class="mine-order--period" v-else-if="item.status == 1">运送中</div>
          <div class="mine-order--period" v-else-if="item.status == 3">订单已取消</div>
          <div class="mine-order--period" v-else>已学完</div>
        </div>
        <div class="mine-order--status">
            <div class="mine-order--commodity">
              <img :src="item.commodityImg" alt="">
            </div>
            <div class="mine-order--right">
              <div class="mine-order--title">{{item.title}}</div>
              <div class="mine-order--prices">课程价格：￥{{item.prices}}</div>
              <div class="mine-order--btn">
                <div class="mine-btn--left">
                  <van-button class="btn-small" color="#3BB7F3" size="mini" v-if="item.status == 4" @click="recordClick">作业记录</van-button>
                  <van-button class="btn-small" color="#3BB7F3" size="mini" v-else-if="item.status == 2"  @click="clockClick">作业打卡</van-button>
                  <van-button class="btn-small" size="mini" v-else-if="item.status == 0" @click="cancelClick">取消订单</van-button>
                </div>
                <div class="small-right">
                  <van-button class="btn-small" color="#F54B4B" size="mini" v-if="item.status == 2 || item.status == 4" @click="lookClick">查看课程表</van-button>
                  <van-button class="btn-small" color="#F54B4B" size="mini" v-else-if="item.status == 0" @click="paymentClick">去支付</van-button>
                  <van-button class="btn-small" size="mini" v-else-if="item.status == 3" @click="deleteClick">删除订单</van-button>
                  <van-button class="btn-small" color="#F54B4B" size="mini" @click="logisticsClick" v-else>查看物流</van-button>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeName: 1,
        orderList: [
          {
            id:1,
            time: '2020-01-01  15:30',
            status: 2, // 0 待付款；   1 运送中 ；2  学习中； 4 已学完； 3 订单已取消 
            commodityImg: '', // 商品图片
            title: '课程标题',
            prices: 20,
            period: 10,
          },
          {
            id:2,
            time: '2020-01-01  15:30',
            status: 1, // 0 待付款；   1 运送中 ；2  学习中； 4 已学完； 3 订单已取消 
            commodityImg: '', // 商品图片
            title: '课程标题',
            prices: 20,
            period: 10,
          },
        ]
      }
    },
    methods: {
      // 切换卡切换
      orderChange() {

      },
      // 作业记录 
      recordClick() {

      },
      // 作业打卡
      clockClick() {

      },
      // 取消订单
      cancelClick() {

      },
      // 查看课程表
      lookClick() {

      },
      // 去支付
      paymentClick() {

      },
      // 删除订单
      deleteClick() {

      },  
      // 查看物流
      logisticsClick() {

      }
    },
  }
</script>

<style lang="less">
.mine-order {
  .van-tab--active {
    color: #F54B4B
  }
  .mine-order--center {
    .mine-nodata {
      text-align: center;
      .nodata-img {
        width: 8.625rem;
        height: 10.0625rem;
        margin: 8.8125rem  auto;
        margin-bottom: 0;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .nodata-title {
        margin: 1.25rem 0 1.125rem;
        color:rgba(129,129,129,1);
        font-size:15px;
      }
      .nodata-btn {
        width:55px;
        height:22px;
        background:rgba(252,97,43,1);
        border-radius:9px;
        padding: .3125rem .5625rem .3125rem;
        font-size: 10px;
        line-height: 0;
        color: #fff;
      }
    }
    .mine-order--content {
      border: 1px solid #f2f2f2;
      border-radius: 4px;
      margin: 20px 15px 0; 
      .mine-order--head {
        display: flex;
        justify-content: space-between;
        font-size: 10px;
        padding: .5rem .4375rem .625rem .3125rem;
        span {
          margin-left: 5px;
        }
        .mine-order--period {
          color: #F54D4D
        }
      }
      .mine-order--status {
        display: flex;
        .mine-order--commodity {
          width: 7.8125rem;
          height: 4.6875rem;
          background: #F54B4B;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .mine-order--right {
          margin-left: 8px;
          .mine-order--title {
            font-size: 14px;
            font-weight: 900;
            //防止字体溢出
          }
          .mine-order--prices {
            font-size: 10px;
            color:rgba(129,129,129,1);
            padding: .4375rem 0 .5rem;
          }
          .mine-order--btn {
            display: flex;
            justify-content: center;
            width: 210px;
            .btn-small {
              width: 100px;
              height: 22px;
              padding: 0;
              line-height: 0;
              border-radius: 9px;
            }
            .small-right {
              margin: 0 .4375rem 0 10px;
              margin-left: auto;
            }
          }
        }
      }
    }
  }
}

</style>