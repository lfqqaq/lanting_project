<template>
  <div class="pay">
    <NavBack :title="confirm.type == 0 ? titleSuccess : titleFail" />
    <div class="pay-state" v-if="confirm.type == 0">
      <div class="pay-img">
        <img src="../../../public/static/pay_success.png" alt />
      </div>
      <span>支付成功</span>
    </div>
    <div class="pay-state" v-else>
      <div class="pay-img">
        <img src="../../../public/static/pay_fail.png" alt />
      </div>
      <span>支付失败</span>
    </div>
    <div class="pay-course">
      <van-button color="#FC612B" @click="courseClick">查看我的课程</van-button>
      <van-button color="#FC612B" plain @click="homeClick">返回课堂首页</van-button>
    </div>
    <Busines />
  </div>
</template>

<script>
import NavBack from "@components/NavBack";
import Busines from "@components/Busines";

export default {
  components: {
    NavBack,
    Busines
  },
  data() {
    return {
      titleSuccess: "知仁兰亭课堂-支付成功",
      titleFail: "知仁兰亭课堂-支付失败",
      confirm: {}
    };
  },
  created() {
    this.confirm = this.$route.query;
  },
  methods: {
    // 我的课程
    courseClick() {
      this.$router.push({ path: `/course` });
    },
    // 返回首页
    homeClick() {
      this.$router.push({ path: "/" });
    }
  }
};
</script>

<style lang="less">
.pay {
  .pay-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 4.25rem auto;
    margin-bottom: 2.5rem;
    .pay-img {
      width: 6.40625rem;
      height: 6.40625rem;
    }
    img {
      width: 100%;
      height: 100%;
    }
    span {
      font-size: 22px;
      font-family: PingFangSC;
      color: rgba(0, 0, 0, 1);
      margin-top: 1.15625rem;
    }
  }
  .pay-course {
    text-align: center;
    border-bottom: 1px solid #f1f1f1;
    margin: 0 0.46875rem;
    padding-bottom: 4.125rem;
    .van-button {
      width: 250px;
      height: 50px;
      border-radius: 4px;
    }
    .van-button--plain {
      margin-top: 20px;
      color: #000 !important;
    }
  }
}
</style>
