<template>
  <div>
    <HomeHeader />
    <div class="four-head">
      <div class="four-content" v-for="four in firstList" :key="four.id">
        <div class="four-img">
          <img :src="four.contentImg" alt />
        </div>
        <div class="four-center">
          <div class="four-title">{{four.title}}</div>
          <div class="four-foot">
            <div class="four-price">价格： {{four.price}}元</div>
            <div class="four-btn">
              <van-button round color="#F54B4B">购买</van-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Busines />
    <Footer />
  </div>
</template>

<script>
import Footer from "@components/Footer";
import Busines from "@components/Busines";
import HomeHeader from "@components/HomeHeader";

import headimgurl from "../../../public/static/author.png";
import contentImg from "../../../public/static/img1.png";

export default {
  components: {
    Footer,
    Busines,
    HomeHeader
  },
  data() {
    return {
      firstList: [
        {
          id: 1,
          name: "邢紫宸",
          recommend: "由范若若老师推荐",
          title: "知仁兰亭硬笔书法护眼专用纸",
          price: "20",
          headimgurl: headimgurl,
          contentImg: contentImg
        },
        {
          id: 2,
          name: "邢紫宸",
          recommend: "由范若若老师推荐",
          headimgurl: headimgurl,
          contentImg: contentImg,
          title: "知仁兰亭硬笔书法护眼专用纸",
          price: "20"
        },
        {
          id: 3,
          name: "邢紫宸",
          recommend: "由范若若老师推荐",
          headimgurl: headimgurl,
          contentImg: contentImg,
          title: "知仁兰亭硬笔书法护眼专用纸",
          price: "20"
        },
        {
          id: 4,
          name: "邢紫宸",
          recommend: "由范若若老师推荐",
          headimgurl: headimgurl,
          contentImg: contentImg,
          title: "知仁兰亭硬笔书法护眼专用纸",
          price: "20"
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.four-head {
  display: flex;
  flex-wrap: wrap;
  margin: 0 0.875rem;
  border-radius: 0.25rem;
  border-bottom: 1px solid #f1f1f1;
  .four-content {
    margin-bottom: 1.25rem;
    background-color: #f2f2f2;
    border-radius: 0.25rem;
    &:nth-child(2n-1) {
      margin-right: 2.625rem;
    }
    .four-img {
      width: 9.5rem;
      height: 9.125rem;
      img {
        width: 100%;
        height: 100%;
        border-radius: 0.25rem;
      }
    }
    .four-center {
      padding: 0.625rem 0 0.4375rem 0.375rem;
      .four-title {
        font-size: 10px;
        font-weight: 400;
        color: rgba(0, 0, 0, 1);
      }
      .four-foot {
        font-size: 10px;
        color: rgba(245, 75, 75, 1);
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-right: 1rem;
        padding-top: 0.4375rem;
        .four-btn {
          .van-button--round {
            width: 2.1875rem;
            height: 0.9375rem;
            padding: 0;
            line-height: 0;
            font-size: 10px;
          }
        }
      }
    }
  }
}
</style>
