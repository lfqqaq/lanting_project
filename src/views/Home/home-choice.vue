<template>
  <div>
    <HomeHeader />
    <div class="second-head">
      <div class="second-content" v-for="second in secondList" :key="second.id">
        <div class="second-img">
          <img :src="second.contentImg" alt />
          <van-button color="#F54B4B" class="second-btn" size="mini">特惠</van-button>
        </div>
        <div class="second-info">
          <div class="info-choice">
            <div class="info-img">
              <img :src="second.headimgurl" alt />
            </div>
            <div class="info-center">
              <div>
                <span class="info-tea">{{second.teacher}}</span>
                <span class="info-title">{{second.title}}</span>
              </div>
              <div class="info-foot">
                {{second.num}}已报名
                <span class="info-price">课程售价:￥{{second.price}}课时</span>
              </div>
            </div>
          </div>
          <div class="info-study">
            <van-button round color="#f54b4b" @click="detailClick(second.id)">学习</van-button>
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
      secondList: [
        {
          id: 1,
          teacher: "范闲",
          title: "《硬笔楷书偏旁部首全解析》",
          num: "10",
          price: "10/5",
          headimgurl: headimgurl,
          contentImg: contentImg
        },
        {
          id: 2,
          teacher: "范闲",
          title: "《硬笔楷书偏旁部首全解析》",
          num: "10",
          price: "10/5",
          headimgurl: headimgurl,
          contentImg: contentImg
        }
      ]
    };
  },
  methods: {
    detailClick(id) {
      this.$router.push({ path: `/choiceDetail${id}` });
    }
  }
};
</script>

<style lang="less" scoped>
.second-head {
  margin: 0 0.875rem;
  border-radius: 0.25rem;
  border-bottom: 1px solid #f1f1f1;
  .second-content {
    background: #f2f2f2;
    border-radius: 0.25rem;
    margin-bottom: 1.25rem;
    .second-img {
      width: 21.625rem;
      height: 9.0625rem;
      position: relative;
      img {
        width: 100%;
        height: 100%;
        border-radius: 0.25rem;
      }
      .second-btn {
        position: absolute;
        top: 0;
        left: 0;
        width: 2.75rem;
        height: 1.5rem;
        font-size: 15px;
      }
    }
    .second-info {
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
      .info-study {
        .van-button--round {
          width: 3.125rem;
          height: 1.3125rem;
          line-height: 0;
          padding: 0;
        }
      }
    }
  }
}
</style>
