<template>
  <div>
    <NavBack :title="title" />
    <form action="/">
      <van-search
        v-model="value"
        placeholder="请输入搜索关键词"
        show-action
        @search="onSearch"
        @cancel="onCancel"
        shape="round"
        :autofocus="true"
      />
    </form>
    <div class="second-head">
      <div v-if="secondList.length === 0" class="second-none">
        <div>
          <img src="../../../public/static/none.png" alt />
        </div>
      </div>
      <div class="second-content" v-for="third in secondList" :key="third.id" v-else>
        <div class="second-img">
          <img :src="third.contentImg" alt />
        </div>
        <div class="second-info">
          <div class="info-choice">
            <div class="info-img">
              <img :src="third.headimgurl" alt />
            </div>
            <div class="info-center">
              <div>
                <span class="info-tea">{{third.teacher}}</span>
                <span class="info-title">{{third.title}}</span>
              </div>
              <div class="info-foot">
                {{third.num}}已报名
                <span class="info-price">课程售价:￥{{third.price}}课时</span>
              </div>
            </div>
          </div>
          <div class="info-study">
            <van-button round color="#f54b4b">学习</van-button>
          </div>
        </div>
      </div>
      <div class="none-more" v-show="secondList.length!==0">没有更多内容了~</div>
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
      value: "",
      title: "知仁兰亭课堂-搜索",
      secondList: [
        // {
        //   id: 1,
        //   teacher: "范闲",
        //   title: "《硬笔楷书偏旁部首全解析》",
        //   num: "10",
        //   price: "10/5",
        //   headimgurl: headimgurl,
        //   contentImg: contentImg
        // },
        // {
        //   id: 2,
        //   teacher: "范闲",
        //   title: "《硬笔楷书偏旁部首全解析》",
        //   num: "10",
        //   price: "10/5",
        //   headimgurl: headimgurl,
        //   contentImg: contentImg
        // }
      ]
    };
  },
  methods: {
    onSearch() {},
    onCancel() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="less" scoped>
.second-head {
  margin: 0 0.875rem;
  border-radius: 0.25rem;
  .second-none {
    width: 10.4375rem;
    height: 7.1875rem;
    margin: 12.5rem auto;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .none-more {
    font-size: 10px;
    font-weight: 400;
    color: rgba(124, 124, 124, 1);
    text-align: center;
  }
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
