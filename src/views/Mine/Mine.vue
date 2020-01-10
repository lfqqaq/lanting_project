<template>
  <div class="mine">
    <NavBack :title="title" />
    <div class="mine-head">
      <div class="mine-info">
        <div class="mine-left">
          <div class="mine-img">
            <img :src="userInfo.headimgurl" alt />
          </div>
          <div class="mine-head--info">
            <div class="mine-name">
              <span>{{userInfo.name}}</span>
              <span class="mine-small" @click="editClick">修改年级></span>
            </div>

            <div class="mine-school">
              <span>我的星级：</span>
              <van-rate
                v-model="userInfo.rankValue"
                readonly
                :count="userInfo.rankValue"
                size="14px"
              />
            </div>
          </div>
        </div>
        <div class="mine-right" @click="extendClick">
          <div class="mine-raduis">
            <img src="../../../public/static/rmb.png" alt />
          </div>
          <div class="mine-card">我的推广</div>
        </div>
      </div>
      <div class="mine-record">
        <div class="record-head">
          <span class="record-head--line">|</span>
          <span>学习档案</span>
        </div>
        <div class="record-content">
          <div class="record-content--loop" @click="waitPayClick">
            <div class="record-content--img">
              <img src="../../../public/static/wait_pay.png" alt />
              <span class="record-content--circular" v-if="payValue != 0">{{payValue}}</span>
            </div>
            <span class="record-content--title">待付款</span>
          </div>
          <div class="record-content--loop" @click="handClick">
            <div class="record-content--img hand">
              <img src="../../../public/static/hand.png" alt />
              <span class="record-content--circular" v-if="handValue != 0">{{handValue}}</span>
            </div>
            <span class="record-content--title">进行中</span>
          </div>
          <div class="record-content--loop" @click="finishClick">
            <div class="record-content--img finish">
              <img src="../../../public/static/finish.png" alt />
              <span class="record-content--circular" v-if="finishValue != 0">{{finishValue}}</span>
            </div>
            <span class="record-content--title">已完成</span>
          </div>
          <div class="record-content--loop" @click="allClick">
            <div class="record-content--img all">
              <img src="../../../public/static/all.png" alt />
              <span class="record-content--circular" v-if="allValue != 0">{{allValue}}</span>
            </div>
            <span class="record-content--title">全部</span>
          </div>
        </div>
      </div>
      <div class="mine-head--radius"></div>
    </div>
    <div class="mine-content">
      <van-cell @click="addresClick" is-link>
        <template slot="title">
          <div class="class-room--img">
            <img src="../../../public/static/map_hover.png" alt />
          </div>
          <span class="custom-title">我的收货地址</span>
        </template>
      </van-cell>
      <van-cell @click="resultClick" is-link>
        <template slot="title">
          <div class="class-room--img hear">
            <img src="../../../public/static/hear.png" alt />
          </div>
          <span class="custom-title hear-title">联系我的老师</span>
        </template>
      </van-cell>
      <van-cell @click="resultClick" is-link>
        <template slot="title">
          <div class="class-room--img finance">
            <img src="../../../public/static/finance.png" alt />
          </div>
          <span class="custom-title finance-title">财务明细</span>
        </template>
      </van-cell>
      <van-cell @click="resultClick" is-link>
        <template slot="title">
          <div class="class-room--img about">
            <img src="../../../public/static/about.png" alt />
          </div>
          <span class="custom-title about-title">关于知仁兰亭课堂</span>
        </template>
      </van-cell>
    </div>
    <div class="mine-footer">
      <van-button>退出登录</van-button>
    </div>
    <Busines />
    <Footer />
  </div>
</template>

<script>
import Footer from "@components/Footer";
import Busines from "@components/Busines";
import NavBack from "@components/NavBack";

import headimgurl from "../../../public/static/author.png";

export default {
  components: {
    Footer,
    Busines,
    NavBack
  },
  data() {
    return {
      title: "知仁兰亭课堂-个人中心",
      userInfo: {
        name: "hello",
        school: "小学",
        grade: "六年级",
        headimgurl: headimgurl,
        rankValue: 3
      },
      payValue: 1,
      handValue: 2,
      finishValue: 3,
      allValue: 6
    };
  },
  created() {
  },
  methods: {
    editClick() {
      console.log(111);
    },
    resultClick() {},
    // 跳转到我的收货地址列表
    addresClick() {
      this.$router.push({ path: `/addressList` });
    },
    extendClick() {
      this.$router.push({ path: `/mineExtend3` });
    },
    waitPayClick() {
      this.$router.push({ path: `/mineOrder1` });
    },
    handClick() {
      this.$router.push({ path: `/mineOrder2` });
    },
    finishClick() {
      this.$router.push({ path: `/mineOrder3` });
    },
    allClick() {
      this.$router.push({ path: `/mineOrder4` });
    },
  }
};
</script>

<style lang="less" scoped>
.mine {
  .mine-head {
    width: 23.4375rem;
    height: 8.75rem;
    position: relative;
    margin-bottom: 2.625rem;
    background: linear-gradient(
      90deg,
      rgba(254, 220, 69, 1) 0%,
      rgba(251, 112, 153, 1) 100%
    );
    .mine-head--radius {
      width: 23.4375rem;
      height: 6.75rem;
      border-radius: 50%;
      position: absolute;
      background: linear-gradient(
        90deg,
        rgba(254, 220, 69, 1) 0%,
        rgba(251, 112, 153, 1) 100%
      );
      bottom: -3.5rem;
      z-index: -999;
    }
    .mine-info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 1.875rem;
      .mine-left {
        display: flex;
        align-items: center;
        margin-left: 0.9375rem;
        .mine-img {
          width: 2.875rem;
          height: 2.875rem;
          border-radius: 50%;
          margin-right: 1.125rem;
          img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
          }
        }
        .mine-head--info {
          color: #fff;
          .mine-name {
            font-size: 18px;
            .mine-small {
              margin-left: 1.28125rem;
              font-size: 10px;
            }
          }
          .mine-school {
            font-size: 14px;
            margin-top: 0.625rem;
          }
        }
      }
      .mine-right {
        width: 5.1875rem;
        height: 1.6875rem;
        background: #af5d5f;
        border-top-left-radius: 0.5rem;
        border-bottom-left-radius: 0.5rem;
        color: #fff;
        display: flex;
        align-items: center;
        .mine-raduis {
          width: 0.9375rem;
          height: 0.9375rem;
          margin: 0.3125rem 0.40625rem 0.5rem;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .mine-card {
          font-size: 12px;
        }
      }
    }
    .mine-record {
      width: 21.5625rem;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0px 0px 0.3125rem 0px rgba(0, 0, 0, 0.2);
      border-radius: 0.625rem;
      margin: 2.1875rem auto;
      .record-head {
        padding: 0.75rem 0 1.25rem 0.59375rem;
        color: #0c0c0c;
        font-weight: 900;
        font-size: 15px;
        .record-head--line {
          color: #53adff;
          margin-right: 0.625rem;
        }
      }
      .record-content {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-around;
        padding-bottom: 0.59375rem;
        .record-content--loop {
          display: flex;
          flex-direction: column;
          align-items: center;
          .record-content--img {
            width: 1.96875rem;
            height: 1.34375rem;
            position: relative;
            .record-content--circular {
              position: absolute;
              top: -0.375rem;
              right: -0.375rem;
              background: #f54b4b;
              width: 0.9375rem;
              height: 0.9375rem;
              line-height: 0.9375rem;
              text-align: center;
              font-size: 12px;
              color: #fff;
              border-radius: 50%;
            }
            img {
              width: 100%;
              height: 100%;
            }
          }
          .finish {
            width: 1.875rem;
            height: 1.625rem;
          }
          .all {
            width: 1.34375rem;
            height: 1.5625rem;
          }
          .hand {
            width: 2.21875rem;
            height: 1.5rem;
          }
          .record-content--title {
            color: #0c0c0c;
            margin-top: 0.625rem;
          }
        }
      }
    }
  }
  .mine-content {
    margin: 8.6875rem 0.9375rem 1.625rem;
    box-shadow: 0px 1px 0.25rem 0px rgba(0, 0, 0, 0.26);
    border-radius: 0.3125rem;
    .van-cell__title {
      display: flex;
      align-items: center;
      .class-room--img {
        width: 0.875rem;
        height: 1.3125rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .hear {
        width: 1.40625rem;
        height: 1.1875rem;
      }
      .finance {
        width: 1.625rem;
        height: 1.3125rem;
      }
      .about {
        width: 1.3125rem;
        height: 1.3125rem;
      }
      .custom-title {
        font-size: 1rem;
        margin-left: 0.8125rem;
      }
      .hear-title {
        margin-left: 0.5625rem;
      }
      .finance-title {
        margin-left: 0.46875rem;
      }
      .about-title {
        margin-left: 0.65625rem;
      }
    }
  }
  .mine-footer {
    text-align: center;
    .van-button--normal {
      width: 15.59375rem;
      height: 3.115625rem;
      font-size: 18px;
      margin: 0 auto;
      background-color: #fc612b;
      border: 1px solid #fc612b;
      color: #fff;
      border-radius: 0.25rem;
    }
  }
}
</style>
