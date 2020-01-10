<template>
  <div class="ware">
    <NavBack :title="title" />
    <div class="ware-head">
      <div class="ware-content">
        <div class="ware-img">
          <img :src="secondList.contentImg" alt />
        </div>
        <div class="ware-info">
          <div class="info-title">{{secondList.title}}</div>
          <div class="info-foot">价格:￥{{secondList.price}}</div>
        </div>
      </div>
    </div>
    <div class="ware-center">
      <div class="ware-left">
        <span>教辅&课件介绍</span>
        <span class="project-icon">
          <van-icon :name="showValue ? 'arrow-up': 'arrow-down'" @click="showClick"></van-icon>
        </span>
      </div>
      <div class="ware-right" @click="extendClick">
        <div class="ware-raduis">
          <img src="../../../public/static/rmb.png" alt />
        </div>
        <div class="ware-card">参与推广</div>
      </div>
    </div>
    <div
      class="ware-rich"
      v-show="!showValue"
    >维护ID娃互动我爱玩活动我爱玩活动奥委会冬奥会冬阿瓦单位 爱我的hiOA活动爱我滴华味亨到 我的蓝on挖了电脑懒得按第六课爱我领导asnclkhala 啊我看得见阿里觉得拉大家懒得</div>
    <div class="ware-foot">没有更多内容了~</div>
    <div class="ware-fixed">
      <span>￥1500</span>
      <span @click="buyClick">立即购买</span>
    </div>
  </div>
</template>

<script>
import NavBack from "@components/NavBack";
import contentImg from "../../../public/static/img1.png";

export default {
  components: {
    NavBack
  },
  data() {
    return {
      title: "知仁兰亭课堂-教辅&课件详情",
      showValue: false,
      secondList: {
        id: 1,
        title: "知仁兰亭硬笔书法护眼专用纸",
        price: "20",
        contentImg: contentImg
      }
    };
  },
  methods: {
    showClick() {
      this.showValue = !this.showValue;
    },
    buyClick() {
      let id = 1;
      let type = 1;
      this.$router.push({
        path: "/confirmOrder",
        query: { id: `${id}`, type: `${type}` }
      });
    },
    extendClick() {
      this.$router.push({ path: `/mineExtend2` });
    }
  }
};
</script>

<style lang="less" scoped>
.ware {
  .ware-head {
    margin: 0.625rem 0.875rem;
    border-radius: 0.25rem;
    .ware-content {
      background: #f2f2f2;
      border-radius: 0.25rem;
      .ware-img {
        width: 21.625rem;
        height: 9.0625rem;
        img {
          width: 100%;
          height: 100%;
          border-radius: 0.25rem;
        }
      }
      .ware-info {
        padding: 1.375rem 0.6875rem 1.25rem 1.3125rem;
        font-size: 12px;
        .info-title {
          color: #000;
          font-weight: 900;
        }
        .info-foot {
          margin-top: 0.625rem;
          color: #f54b4b;
        }
      }
    }
  }
  .ware-center {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1.875rem 0 0.875rem 0.90625rem;
    .ware-left {
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
    .ware-right {
      width: 5.1875rem;
      height: 1.6875rem;
      background: #b2b2b2;
      border-top-left-radius: 0.5rem;
      border-bottom-left-radius: 0.5rem;
      color: #fff;
      display: flex;
      align-items: center;
      .ware-raduis {
        width: 0.9375rem;
        height: 0.9375rem;
        margin: 0.3125rem 0.40625rem 0.5rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .ware-card {
        font-size: 12px;
      }
    }
  }
  .ware-rich {
    margin: 0 1.21875rem 2.375rem 1.28125rem;
  }
  .ware-foot {
    text-align: center;
    color: #7c7c7c;
    font-size: 10px;
    font-weight: 900;
    margin-bottom: 3.25rem;
  }
  .ware-fixed {
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
