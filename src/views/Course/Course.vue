<template>
  <div>
    <NavBack :title="title" />
    <div class="course">
      <div class="course-head">
        <div class="course-left">
          <div class="course-img">
            <img :src="userInfo.headimgurl" alt />
          </div>
          <div class="course-info">
            <div class="course-name">{{userInfo.name}}</div>
            <div class="course-school">
              <span>{{userInfo.school}}</span>
              <span>{{userInfo.grade}}</span>
              <span class="course-small" @click="editClick">修改年级></span>
            </div>
          </div>
        </div>
        <div class="course-right">
          <div class="course-raduis">
            <img src="../../../public/static/calendar.png" alt />
          </div>
          <div class="course-card">作业打卡</div>
        </div>
      </div>
      <div class="course-containter">
        <div>
          通知及安排
          <span class="project-icon">
            <van-icon name="arrow-down" />
          </span>
        </div>
        <div>
          亲爱的学员，您已成功报名了
          <span>【硬笔楷书偏旁部首全解析】</span>，记得按时上课哦~
        </div>
        <div>time 2019-10-20</div>
      </div>
      <div class="course-tab">
        <van-tabs v-model="activeName">
          <van-tab title="课程安排" name="plan"></van-tab>
          <van-tab title="已报课程" name="cease"></van-tab>
          <van-tab title="打卡记录" name="clock"></van-tab>
        </van-tabs>
      </div>
      <div class="course-content" v-if="activeName == 'plan'">
        <div class="plan-canlenar--head">
          <div class="course-canlenar--head">
            <van-dropdown-menu :overlay="false">
              <van-dropdown-item v-model="yearValue" :options="yearOption" @change="yearChange" />
              <van-dropdown-item v-model="value" :options="option" @change="dropdownChange" />
            </van-dropdown-menu>
          </div>
          <Calendar
            @choseDay="clickDay"
            @changeMonth="changeDate"
            @isToday="clickToday"
            :markDateMore="arr"
            :sundayStart="true"
            :textTop="topList"
            ref="Calendar"
          ></Calendar>
        </div>
        <div class="plan-foot" v-show="dayValue">
          <div class="plan-head">
            <span>3月15日</span>
            <span>周五</span>
          </div>
          <div class="plan-content">08:00-12:00 硬笔楷书偏旁部首全解析</div>
          <div class="plan-content">14:00-17:00 硬笔楷书偏旁部首全解析</div>
        </div>
        <div class="plan-foot" v-show="!dayValue">今日暂无课程安排</div>
      </div>
      <div class="course-cease" v-if="activeName == 'cease'">
        <div class="coures-cease--content" v-for="item in ceaseList" :key="item.id">
          <div class="course-cease--head">
            <div class="course-cease--left">
              <img :src="item.imgUrl" alt />
            </div>
            <div class="course-cease--right">
              <div>{{item.title}}</div>
              <div>授课老师：{{item.name}}</div>
            </div>
          </div>
          <div class="course-cease--foot">
            <div class="course-foot--left">
              <div>课程剩余节数：{{item.surplusSave}}节/{{item.allSave}}节</div>
              <div>上课地点：{{item.place}}</div>
            </div>
            <div class="course-foot--right">
              <van-button @click="courseClick" color="#53adff" size="small">课程详情</van-button>
            </div>
          </div>
        </div>
      </div>
      <div class="course-clock" v-if="activeName == 'clock' ">
        <div class="course-clock--head">
          |
          <span>打卡及上墙记录</span>
        </div>
        <div class="course-clock--content" v-for="clock in clockList" :key="clock.id">
          <div class="course-clock--left">
            <div>{{clock.time}}</div>
            <div>{{clock.title}}</div>
          </div>
          <div class="course-clock--right">
            <van-button v-if="clock.state == 0" color="#F54B4B" size="small">未提交</van-button>
            <van-button v-else-if="clock.state == 1" color="#FFD044" size="small">已上墙</van-button>
            <van-button color="#53adff" size="small" v-else>已提交</van-button>
          </div>
        </div>
      </div>
      <div class="course-foot">没有更多内容了~</div>
    </div>
    <Busines />
    <Footer />
  </div>
</template>

<script>
import Footer from "@components/Footer";
import Calendar from "vue-calendar-component";
import NavBack from "@components/NavBack";
import Busines from "@components/Busines";

import headimgurl from "../../../public/static/author.png";
import contentImg from "../../../public/static/img1.png";

export default {
  components: {
    Calendar,
    Footer,
    NavBack,
    Busines
  },
  data() {
    return {
      dayValue: false,
      activeName: "plan",
      userInfo: {
        name: "hello",
        school: "小学",
        grade: "六年级",
        headimgurl: headimgurl
      },
      title: "知仁兰亭课堂-我的课程",
      arr: [
        { date: "2019/12/10", className: "mark1" },
        { date: "2019/12/13", className: "mark1" }
      ],
      topList: ["日", "一", "二", "三", "四", "五", "六"],
      value: 12,
      yearValue: 2019, //'','2019','2018','2017','2016','2015','2014','2013'
      yearOption: [
        { text: "2029", value: 2029 },
        { text: "2028", value: 2028 },
        { text: "2027", value: 2027 },
        { text: "2026", value: 2026 },
        { text: "2025", value: 2025 },
        { text: "2024", value: 2024 },
        { text: "2023", value: 2023 },
        { text: "2022", value: 2022 },
        { text: "2021", value: 2021 },
        { text: "2020", value: 2020 },
        { text: "2019", value: 2019 },
        { text: "2018", value: 2018 },
        { text: "2017", value: 2017 },
        { text: "2016", value: 2016 },
        { text: "2015", value: 2015 },
        { text: "2014", value: 2014 },
        { text: "2013", value: 2013 },
        { text: "2012", value: 2012 },
        { text: "2011", value: 2011 },
        { text: "2010", value: 2010 },
        { text: "2009", value: 2009 }
      ],
      option: [
        { text: "一月", value: 1 },
        { text: "二月", value: 2 },
        { text: "三月", value: 3 },
        { text: "四月", value: 4 },
        { text: "五月", value: 5 },
        { text: "六月", value: 6 },
        { text: "七月", value: 7 },
        { text: "八月", value: 8 },
        { text: "九月", value: 9 },
        { text: "十月", value: 10 },
        { text: "十一月", value: 11 },
        { text: "十二月", value: 12 }
      ],
      ceaseList: [
        {
          id: 1,
          name: "范闲",
          title: "《硬笔楷书偏旁部首全解析》",
          imgUrl: contentImg,
          surplusSave: 8,
          allSave: 10,
          place: "明德校区"
        },
        {
          id: 2,
          name: "范闲",
          title: "《硬笔楷书偏旁部首全解析》",
          imgUrl: contentImg,
          surplusSave: 8,
          allSave: 10,
          place: "明德校区"
        }
      ],
      clockList: [
        {
          id: 1,
          time: "2020-01-01",
          title: "《硬笔楷书偏旁部首全解析》",
          state: 0
        },
        {
          id: 2,
          time: "2020-01-01",
          title: "《硬笔楷书偏旁部首全解析》",
          state: 1
        },
        {
          id: 3,
          time: "2020-01-01",
          title: "《硬笔楷书偏旁部首全解析》",
          state: 2
        }
      ]
    };
  },
  created() {},
  methods: {
    // 选择某天的时候触发
    clickDay(data) {
      console.log("clickDay" + data);
      this.dayValue = true;
    },
    changeDate(data) {
      console.log(data);
      let tmpDate = data.split("/");
      this.yearValue = parseInt(tmpDate[0]);
      this.value = parseInt(tmpDate[1]);
    },
    // 选择当天
    clickToday(data) {
      // console.log(data)
    },
    // 月跳转
    dropdownChange(e) {
      console.log(this.yearValue);
      let yearNum = `${this.yearValue}/${e}/1`;
      let newData = new Date();
      this.$refs.Calendar.ChoseMonth(yearNum, false);
    },
    // 年跳转
    yearChange(e) {
      let yearNum = `${e}/${this.value}/1`;
      this.$refs.Calendar.ChoseMonth(yearNum, false);
    },
    // 修改年级
    editClick() {},
    //课程详情
    courseClick() {}
  }
};
</script>

<style lang="less">
.course {
  .course-head {
    width: 23.4375rem;
    height: 5.9375rem;
    background: linear-gradient(
      263deg,
      rgba(254, 220, 69, 1),
      rgba(251, 112, 153, 1)
    );
    display: flex;
    justify-content: space-between;
    align-items: center;
    .course-left {
      display: flex;
      align-items: center;
      margin-left: 0.9375rem;
      .course-img {
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
      .course-info {
        color: #fff;
        .course-name {
          font-size: 18px;
          font-weight: 900;
        }
        .course-school {
          font-size: 14px;
          span:nth-child(2) {
            margin: 0 0.625rem;
          }
          .course-small {
            font-size: 10px;
          }
        }
      }
    }
    .course-right {
      width: 5.1875rem;
      height: 1.6875rem;
      background: #b19a30;
      border-top-left-radius: 0.5rem;
      border-bottom-left-radius: 0.5rem;
      color: #fff;
      display: flex;
      align-items: center;
      .course-raduis {
        width: 0.9375rem;
        height: 1rem;
        margin: 0.3125rem 0.40625rem 0.5rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .course-card {
        font-size: 12px;
      }
    }
  }
  .course-containter {
    font-size: 18px;
    font-weight: 900;
    opacity: 0.8;
    color: #000;
    margin: 1.3125rem 0 2.25rem 0.96875rem;
    div:nth-child(1) {
      display: flex;
      align-items: center;
    }
    div:nth-child(2) {
      font-size: 12px;
      font-weight: 900;
      opacity: 0.9;
      color: #7c7c7c;
      margin-top: 1.21875rem;
    }
    div:nth-child(3) {
      font-size: 12px;
      font-weight: 900;
      opacity: 0.9;
      color: #7c7c7c;
      text-align: right;
      margin-right: 1rem;
    }
    .project-icon {
      background-color: #000;
      border-radius: 50%;
      width: 1.125rem;
      height: 1.125rem;
      text-align: center;
      line-height: 1.125rem;
      color: #fff;
      margin-left: 0.3125rem;
      .van-icon {
        font-size: 12px;
        font-weight: 900;
      }
    }
  }
  .course-content {
    margin: 0 0.96875rem 1.75rem;
    .plan-canlenar--head {
      box-shadow: 0 0.1875rem 0.75rem #f1f1f1;
      .course-canlenar--head {
        margin-top: 0.625rem;
        .van-dropdown-item {
          left: 1rem;
          width: 91%;
        }
      }
      .wh_container {
        height: 18.5rem;
        .wh_content_all {
          background: #fff !important;
          .wh_top_changge {
            display: none !important;
          }
          .wh_content_item {
            color: #000 !important;
            .wh_chose_day {
              background: #edf3fa !important;
              color: #738dfe !important;
              border-radius: 1px !important;
            }
            .wh_isToday {
              background: #5676ff !important;
              color: #fff !important;
              border-radius: 1px !important;
            }
            .wh_other_dayhide {
              background: #f7f8fa;
              color: #d5d5d6 !important;
            }
            .mark1 {
              &::after {
                content: "";
                position: absolute;
                bottom: 0;
                right: 1.25rem;
                width: 0.5rem;
                height: 0.5rem;
                background: #ff0000;
                border-radius: 50%;
              }
            }
          }
        }
      }
    }
    .plan-foot {
      padding: 0.875rem 0 3.3125rem 1.0625rem;
      margin-top: 1.25rem;
      box-shadow: 0 0.1875rem 0.75rem #f1f1f1;
      .plan-head {
        font-size: 15px;
        font-weight: 900;
        color: rgba(0, 0, 0, 1);
      }
      .plan-content {
        color: #7c7c7c;
        font-size: 12px;
        margin-top: 1.1875rem;
        &:last-child {
          margin-top: 0.625rem;
        }
      }
    }
  }
  .course-cease {
    margin: 0.9375rem 0.96875rem 1.75rem;
    .coures-cease--content {
      box-shadow: 0px 1px 0.25rem 0px rgba(0, 0, 0, 0.26);
      border-radius: 0.25rem;
      margin-bottom: 1.5625rem;
      .course-cease--head {
        display: flex;
        align-items: center;
        padding: 0.9375rem 1.375rem;
        border-bottom: 1px solid #f1f1f1;
        .course-cease--left {
          width: 7.8125rem;
          height: 4.6875rem;
          img {
            width: 100%;
            height: 100%;
            border-radius: 0.25rem;
            box-shadow: 0px 1px 0.25rem 0px rgba(0, 0, 0, 0.26);
          }
        }
        .course-cease--right {
          margin-left: 1.0625rem;
          div:nth-child(1) {
            color: #000;
            font-size: 12px;
            font-weight: 900;
          }
          div:nth-child(2) {
            color: #7c7c7c;
            font-size: 10px;
            margin-top: 1.15625rem;
          }
        }
      }
      .course-cease--foot {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.5rem 1.375rem 0.9375rem;
        .course-foot--left {
          color: #7c7c7c;
          font-size: 10px;
          div:nth-child(1) {
            margin-bottom: 0.75rem;
          }
        }
        .course-foot--right {
          .van-button {
            border-radius: 4px;
          }
        }
      }
    }
  }
  .course-clock {
    margin: 0.9375rem 0.96875rem 1.75rem;
    .course-clock--head {
      color: #53adff;
      margin-top: 0.5rem;
      span {
        color: #000;
        font-weight: 900;
      }
    }
    .course-clock--content {
      box-shadow: 0px 1px 0.25rem 0px rgba(0, 0, 0, 0.26);
      padding: 0.5rem 0.9375rem 0.75rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 20px;
      border-radius: 4px;
      .course-clock--left {
        div:nth-child(1) {
          color: #7c7c7c;
          font-size: 10px;
          margin-bottom: 0.625rem;
          margin-left: 0.25rem;
        }
        div:nth-child(2) {
          color: #000;
          font-size: 12px;
          font-weight: 900;
        }
      }
      .course-clock--right {
        .van-button {
          border-radius: 0.25rem;
        }
      }
    }
  }
  .course-foot {
    text-align: center;
    font-size: 12px;
    color: #7c7c7c;
    margin: 2.75rem 0 2.125rem;
  }
}
</style>
