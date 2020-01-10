<template>
  <div class="home">
    <div class="home-head">
      <HomeHeader />
      <div class="home-swipe">
        <van-swipe :autoplay="3000" indicator-color="#fff">
          <van-swipe-item v-for="(image, index) in images" :key="index">
            <img v-lazy="image" width="100%" />
          </van-swipe-item>
        </van-swipe>
      </div>
      <div class="home-list">
        <div v-for="item in listIcon" :key="item.id" class="list-img">
          <img :src="item.img" alt width="100%" />
          <span class="list-title">{{item.title}}</span>
        </div>
      </div>
    </div>
    <div class="home-center">
      <div class="center-first">
        <div class="public-head">
          <div class="public-title">作业表彰墙</div>
          <div class="public-more" @click="moreClick(1)">
            更多
            <van-icon name="arrow" color="#fff" class="public-right" />
          </div>
        </div>
        <div class="first-head">
          <div class="first-content" v-for="first in firstList" :key="first.id">
            <div class="first-img">
              <img :src="first.contentImg" alt />
            </div>
            <div class="first-info">
              <div class="info-img">
                <img :src="first.headimgurl" alt />
              </div>
              <div class="info-name">
                <div>{{first.name}}</div>
                <div class="info-rec">{{first.recommend}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="center-second">
        <div class="public-head">
          <div class="public-title">特惠体验课程</div>
          <div class="public-more" @click="moreClick(2)">
            更多
            <van-icon name="arrow" color="#fff" class="public-right" />
          </div>
        </div>
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
                <van-button round color="#f54b4b" @click="detailClick(1,second.id)">学习</van-button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="center-third">
        <div class="public-head">
          <div class="public-title">精选课程</div>
          <div class="public-more" @click="moreClick(3)">
            更多
            <van-icon name="arrow" color="#fff" class="public-right" />
          </div>
        </div>
        <div class="second-head">
          <div class="second-content" v-for="third in secondList" :key="third.id">
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
                <van-button round color="#f54b4b" @click="detailClick(2,third.id)">学习</van-button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="center-four">
        <div class="public-head">
          <div class="public-title">教辅&课件</div>
          <div class="public-more" @click="moreClick(4)">
            更多
            <van-icon name="arrow" color="#fff" class="public-right" />
          </div>
        </div>
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
                  <van-button round color="#F54B4B" @click="buyClick(four.id)">购买</van-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="center-fif">
        <div class="public-head">
          <div class="public-title">名师团队</div>
          <div class="public-more" @click="moreClick(5)">
            更多
            <van-icon name="arrow" color="#fff" class="public-right" />
          </div>
        </div>
        <div class="fif-head">
          <div class="fif-content" v-for="info in fifList" :key="info.id">
            <div class="fif-img">
              <img :src="info.img" alt />
            </div>
            <div class="fif-name">{{info.name}}</div>
            <div class="fif-num">教授课程{{info.num}}个</div>
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

import imgUrl from "../../../public/static/img.png";
import choiceImg from "../../../public/static/choice.png";
import freeImg from "../../../public/static/free.png";
import materialImg from "../../../public/static/material.png";
import teacherImg from "../../../public/static/teacher.png";
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
      images: [imgUrl, imgUrl],
      listIcon: [
        {
          id: 1,
          title: "精选课程",
          img: choiceImg
        },
        {
          id: 2,
          title: "免费试学",
          img: freeImg
        },
        {
          id: 3,
          title: "教材课件",
          img: materialImg
        },
        {
          id: 4,
          title: "名师团队",
          img: teacherImg
        }
      ],
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
      ],
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
      ],
      fifList: [
        {
          id: 1,
          num: "3",
          name: "范若若",
          img: headimgurl
        },
        {
          id: 2,
          num: "3",
          name: "范若若",
          img: headimgurl
        },
        {
          id: 3,
          num: "3",
          name: "范若若",
          img: headimgurl
        },
        {
          id: 4,
          num: "3",
          name: "范若若",
          img: headimgurl
        },
        {
          id: 5,
          num: "3",
          name: "范若若",
          img: headimgurl
        },
        {
          id: 6,
          num: "3",
          name: "范若若",
          img: headimgurl
        },
        {
          id: 7,
          num: "3",
          name: "范若若",
          img: headimgurl
        },
        {
          id: 8,
          num: "3",
          name: "范若若",
          img: headimgurl
        }
      ]
    };
  },
  methods: {
    moreClick(type) {
      switch (type) {
        case 1:
          console.log("作业表彰墙");
          break;
        case 2:
          this.$router.push("/choice");
          break;
        case 3:
          this.$router.push("/odds");
          break;
        case 4:
          this.$router.push("/ware");
          break;
        default:
          console.log("名师团队");
          break;
      }
    },
    detailClick(type, id) {
      if (type == 1) {
        this.$router.push({ path: `/choiceDetail${id}` });
      } else {
        this.$router.push({ path: `/choiceDetail${id}` });
      }
    },
    buyClick(id) {
      this.$router.push({ path: `/wareDetail${id}` });
    }
  }
};
</script>

<style lang="less">
.home {
  .home-head {
    .home-swipe {
      //   width: 100%;
      margin: 0 0.3125rem;
      .van-swipe__indicators {
        left: 90%;
      }
      .van-swipe__indicator {
        width: 0.375rem;
        height: 0.375rem;
        background-color: #f2f2f2;
        opacity: 0.9;
      }
      .van-swipe__indicator--active {
        width: 0.8125rem;
        height: 0.375rem;
        border-radius: 0.1875rem;
      }
    }
    .home-list {
      display: flex;
      flex-wrap: wrap;
      margin: 1.09375rem 0.75rem;
      border-bottom: 1px solid #f1f1f1;
      padding-bottom: 1.34375rem;
      .list-img {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-right: 1.875rem;
        &:last-child {
          margin-right: 0;
        }
        img {
          width: 3.75rem;
          height: 3.75rem;
        }
        .list-title {
          color: #000;
          font-weight: 900;
          opacity: 0.8;
          margin-top: 0.3125rem;
        }
      }
    }
  }
  .home-center {
    .public-head {
      display: flex;
      justify-content: space-between;
      margin: 1.0625rem 1rem 1.1875rem 0.875rem;
      .public-title {
        font-size: 18px;
        color: #000;
        font-weight: 900;
        opacity: 0.9;
      }
      .public-more {
        font-size: 12px;
        color: #000;
        font-weight: 900;
        display: flex;
        align-items: center;
        .public-right {
          background-color: #000;
          border-radius: 50%;
          margin-left: 0.125rem;
          font-size: 10px;
          padding: 0.0625rem;
        }
      }
    }
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
    .center-first {
      .first-head {
        display: flex;
        flex-wrap: wrap;
        margin: 0 0.875rem;
        border-radius: 0.25rem;
        border-bottom: 1px solid #f1f1f1;
        .first-content {
          margin-bottom: 1.25rem;
          background-color: #f2f2f2;
          border-radius: 0.25rem;
          &:nth-child(2n-1) {
            margin-right: 2.625rem;
          }
          .first-img {
            width: 9.4375rem;
            height: 9.0625rem;
            img {
              width: 100%;
              height: 100%;
              border-radius: 0.25rem;
            }
          }
          .first-info {
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0.625rem 0;
            .info-img {
              width: 1.875rem;
              height: 1.875rem;
              margin-right: 0.5625rem;
              img {
                width: 100%;
                height: 100%;
                border-radius: 50%;
              }
            }
            .info-name {
              font-size: 12px;
              font-weight: 900;
              opacity: 0.9;
              color: rgba(0, 0, 0, 1);
              line-height: 1.375rem;
              .info-rec {
                font-size: 9px;
                font-family: PingFangSC;
                font-weight: 400;
                color: rgba(124, 124, 124, 1);
                line-height: 1.375rem;
              }
            }
          }
        }
      }
    }
    .center-four {
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
    }
    .center-fif {
      .fif-head {
        display: flex;
        flex-wrap: wrap;
        margin: 0 0.875rem;
        border-radius: 0.25rem;
        border-bottom: 1px solid #f1f1f1;
        .fif-content {
          margin-right: 2.22rem;
          margin-bottom: 1.1875rem;
          text-align: center;
          &:nth-child(4n) {
            margin-right: 0;
          }
          .fif-img {
            width: 3.75rem;
            height: 3.5625rem;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .fif-name {
            font-size: 14px;
            color: #000000;
            margin: 0.5rem 0;
          }
          .fif-num {
            font-size: 10px;
            color: #7c7c7c;
          }
        }
      }
    }
  }
}
</style>
