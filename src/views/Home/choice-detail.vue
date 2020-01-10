<template>
  <div class="choice">
    <NavBack :title="title" />
    <div class="choice-head">
      <div class="choice-content">
        <div class="choice-img">
          <img :src="secondList.contentImg" alt />
          <van-button color="#F54B4B" class="choice-btn" size="mini">特惠</van-button>
        </div>
        <div class="choice-info">
          <div class="info-choice">
            <div class="info-img">
              <img :src="secondList.headimgurl" alt />
            </div>
            <div class="info-center">
              <div>
                <span class="info-tea">{{ secondList.teacher }}</span>
                <span class="info-title">{{ secondList.title }}</span>
              </div>
              <div class="info-foot">
                {{secondList.num}}已报名
                <span class="info-price">课程售价:￥{{secondList.price}}课时</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="choice-center">
      <div class="choice-left">
        <span>课程介绍</span>
        <span class="project-icon">
          <van-icon :name="showValue ? 'arrow-up': 'arrow-down'" @click="showClick"></van-icon>
        </span>
      </div>
      <div class="choice-right" @click="extendClick">
        <div class="choice-raduis">
          <img src="../../../public/static/rmb.png" alt />
        </div>
        <div class="choice-card">参与推广</div>
      </div>
    </div>
    <div
      class="choice-rich"
      v-show="!showValue"
    >维护ID娃互动我爱玩活动我爱玩活动奥委会冬奥会冬阿瓦单位 爱我的hiOA活动爱我滴华味亨到 我的蓝on挖了电脑懒得按第六课爱我领导asnclkhala 啊我看得见阿里觉得拉大家懒得</div>
    <div class="choice-arrange">
      <div class="arrange-head">
        <span>课时安排</span>
        <span class="project-icon">
          <van-icon name="arrow-down"></van-icon>
        </span>
      </div>
      <div class="arrange-content">
        <div class="arrange-top">
          <span>授课教室</span>
          <span>授课时间</span>
          <span>授课老师</span>
        </div>
        <div class="arrange-resume">
          <div class="arrange-map" v-for="info in arrangeList" :key="info.id">
            <span>{{info.school}}</span>
            <span>
              <span>{{info.day}}</span>
              <span>{{info.time}}</span>
            </span>
            <span>{{info.teacher}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="choice-foot">没有更多内容了~</div>
    <div class="choice-fixed">
      <span>￥1500</span>
      <span @click="confirmClick">立即报名</span>
    </div>
  </div>
</template>

<script>
import NavBack from "@components/NavBack";
import headimgurl from "../../../public/static/author.png";
import contentImg from "../../../public/static/img1.png";

export default {
  components: {
    NavBack
  },
  data() {
    return {
      title: "知仁兰亭课堂-课程详情",
      showValue: false,
      secondList: {
        teacher: "范闲",
        title: "《硬笔楷书偏旁部首全解析》",
        num: "10",
        price: "10/5",
        headimgurl: headimgurl,
        contentImg: contentImg
      },
      arrangeList: [
        {
          id: 1,
          school: "明德校区",
          day: "2019-12-11",
          time: "14: 00",
          teacher: "范闲"
        },
        {
          id: 2,
          school: "明德校区",
          day: "2019-12-11",
          time: "14: 00",
          teacher: "范闲"
        }
      ]
    };
  },
  methods: {
    showClick() {
      this.showValue = !this.showValue;
    },
    extendClick() {
      this.$router.push({ path: `/mineExtend1` });
    },
    confirmClick() {
      let id = 1;
      let type = 2;
      this.$router.push({
        path: "/confirmOrder",
        query: { id: `${id}`, type: `${type}` }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.choice {
  .choice-head {
    margin: 0.625rem 0.875rem;
    border-radius: 0.25rem;
    .choice-content {
      background: #f2f2f2;
      border-radius: 0.25rem;
      .choice-img {
        width: 21.625rem;
        height: 9.0625rem;
        position: relative;
        img {
          width: 100%;
          height: 100%;
          border-radius: 0.25rem;
        }
        .choice-btn {
          position: absolute;
          top: 0;
          left: 0;
          width: 2.75rem;
          height: 1.5rem;
          font-size: 15px;
        }
      }
      .choice-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1.375rem 0.6875rem 1.25rem 1.3125rem;
        .info-choice {
          display: flex;
          align-items: center;
          .info-img {
            width: 1.875rem;
            height: 1.875rem;
            padding-right: 0.5rem;
            img {
              width: 100%;
              height: 100%;
              border-radius: 50%;
            }
          }
          .info-center {
            color: #7c7c7c;
            font-size: 12px;
            .info-foot {
              font-size: 9px;
              margin-top: 0.625rem;
              .info-price {
                margin-left: 1.25rem;
              }
            }
            .info-tea {
              color: #000;
              font-weight: 900;
            }
            .info-title {
              margin-left: 0.1875rem;
            }
          }
        }
      }
    }
  }
  .choice-center {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1.875rem 0 0.875rem 0.90625rem;
    .choice-left {
      font-size: 18px;
      font-weight: 900;
      color: rgba(12, 12, 12, 1);
      display: flex;
      align-items: center;
      .project-icon {
        background-color: #000;
        border-radius: 50%;
        width: 1.125rem;
        height: 1.125rem;
        text-align: center;
        line-height: 0.925rem;
        color: #fff;
        margin-left: 0.3125rem;
        .van-icon {
          font-size: 12px;
          font-weight: 900;
        }
      }
    }
    .choice-right {
      width: 5.1875rem;
      height: 1.6875rem;
      background: #b2b2b2;
      border-top-left-radius: 0.5rem;
      border-bottom-left-radius: 0.5rem;
      color: #fff;
      display: flex;
      align-items: center;
      .choice-raduis {
        width: 0.9375rem;
        height: 0.9375rem;
        margin: 0.3125rem 0.40625rem 0.5rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .choice-card {
        font-size: 12px;
      }
    }
  }
  .choice-rich {
    margin: 0 1.21875rem 2.375rem 1.28125rem;
  }
  .choice-arrange {
    margin-bottom: 3.5rem;
    .arrange-head {
      display: flex;
      margin: 0 0 1.25rem 0.90625rem;
      font-weight: 900;
      font-size: 18px;
      align-items: center;
      .project-icon {
        background-color: #000;
        border-radius: 50%;
        width: 1.125rem;
        height: 1.125rem;
        text-align: center;
        line-height: 0.925rem;
        color: #fff;
        margin-left: 0.3125rem;
        .van-icon {
          font-size: 12px;
          font-weight: 900;
        }
      }
    }
    .arrange-content {
      width: 21.5625rem;
      margin: 0 auto;
      .arrange-top {
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 0.0625rem 0.25rem 0 rgba(0, 0, 0, 0.26);
        text-align: center;
        padding: 0.8125rem 0 0.75rem;
        span {
          color: #53adff;
          font-size: 15px;
          font-weight: 900;
          opacity: 0.8;
          width: 6.25rem;
          display: inline-block;
          text-align: center;
        }
      }
      .arrange-resume {
        background: #edf0f5;
        width: 21.5625rem;
        .arrange-map {
          border-bottom: 1px solid #cccccc;
          text-align: center;
          padding: 0.9375rem 0 1.25rem;
          &:last-child {
            border-bottom: none;
          }
          span {
            color: #7c7c7c;
            font-size: 15px;
            font-weight: 900;
            opacity: 0.8;
            width: 6.25rem;
            display: inline-block;
            text-align: center;
          }
        }
      }
    }
  }
  .choice-foot {
    text-align: center;
    color: #7c7c7c;
    font-size: 10px;
    font-weight: 900;
    margin-bottom: 3.25rem;
  }
  .choice-fixed {
    position: fixed;
    bottom: 0;
    z-index: 999;
    width: 100%;
    span {
      width: 50%;
      display: inline-block;
      &:nth-child(1) {
        background: #fff;
        color: #f54b4b;
        font-size: 24px;
        font-weight: 900;
        text-align: center;
        height: 4.1875rem;
        line-height: 4.1875rem;
      }
      &:nth-child(2) {
        background: #fc612b;
        color: #fff;
        font-size: 24px;
        font-weight: 900;
        text-align: center;
        height: 4.1875rem;
        line-height: 4.1875rem;
      }
    }
  }
}
</style>
