<template>
  <div class="confirm-order">
    <NavBack :title="title" />
    <div class="confirm-order--head">
      <span class="confirm-line">|</span> 订单确认
    </div>
    <div class="confirm-order--content">
      <div class="confirm-info">
        <div>用户名称：{{userInfo.name}}</div>
        <div>联系电话：{{userInfo.phone}}</div>
      </div>
      <div class="confirm-info confrim-second">
        <div class="confirm-info--left">
          <img :src="userInfo.img" alt />
        </div>
        <div class="confirm-info--right">
          <div class="confirm-info--title">{{userInfo.title}}</div>
          <div>￥{{userInfo.price}}/10课时</div>
        </div>
      </div>
    </div>
    <div class="confirm-order--footer">
      <!-- 授课教室-->
      <van-cell
        :value="school"
        is-link
        :arrow-direction="classRoom ?'down': '' "
        @click="classRoom = !classRoom"
      >
        <template slot="title">
          <div class="class-room--img">
            <img src="../../../public/static/map.png" alt />
          </div>
          <span class="custom-title">授课教室</span>
        </template>
      </van-cell>
      <van-action-sheet v-model="classRoom">
        <div
          v-for="info in classList"
          :key="info.id"
          @click="classClick(info.name)"
          class="class-content"
        >{{info.name}}</div>
      </van-action-sheet>
      <!-- 授课老师-->
      <van-cell
        :value="name"
        is-link
        :arrow-direction="teacherValue ?'down': '' "
        @click="teacherValue = !teacherValue"
      >
        <template slot="title">
          <div class="teacher-img">
            <img src="../../../public/static/person.png" alt />
          </div>
          <span class="custom-title custom-teacher">授课老师</span>
        </template>
      </van-cell>
      <van-action-sheet v-model="teacherValue">
        <div
          v-for="item in teacherList"
          :key="item.id"
          @click="teacherClick(item.name)"
          class="class-content"
        >{{item.name}}</div>
      </van-action-sheet>
      <!-- 收货信息-->
      <van-cell
        :value="information.name + information.city"
        is-link
        :arrow-direction="informationShow ?'down': '' "
        @click="informationShow = !informationShow"
        v-show="confirm.type == 1"
      >
        <template slot="title">
          <div class="class-room--img">
            <van-icon name="comment-circle" size="22" />
          </div>
          <span class="custom-title">收货信息</span>
        </template>
      </van-cell>
      <van-action-sheet v-model="informationShow">
        <div
          v-for="info in infoList"
          :key="info.id"
          @click="infoClick(info)"
          class="class-content"
        >{{info.name}},{{info.tel}} ,{{info.city}}</div>
      </van-action-sheet>
      <!-- 余额抵扣-->
      <div>
        <van-cell :value="'剩余余额：'+userInfo.balanceSurplus">
          <template slot="title">
            <van-icon name="gold-coin" size="22" />
            <span class="custom-title custom-balance">余额抵扣</span>
          </template>
        </van-cell>
        <van-field
          v-model="balanceValue"
          type="number"
          placeholder="请输入要抵扣的余额"
          @input="balanceClick"
          @blur="balanceBlur"
          :error-message="balanceError ? '抵扣金额不能大于自己本身余额': ''"
        />
      </div>
    </div>
    <div class="confirm-order--fixed">
      <span v-if="userInfo.finalPrice ==''">￥{{userInfo.price}}</span>
      <span v-else>￥{{userInfo.finalPrice}}</span>
      <span @click="payClick">立即支付</span>
    </div>
    <Busines />
  </div>
</template>

<script>
import Busines from "@components/Busines";
import NavBack from "@components/NavBack";

import contentImg from "../../../public/static/img1.png";
export default {
  components: {
    Busines,
    NavBack
  },
  data() {
    return {
      confirm: {},
      payState: {
        state: "1"
      },
      title: "知仁兰亭课堂-订单确认",
      userInfo: {
        name: "hello",
        phone: "1333333333",
        img: contentImg,
        title: "《硬笔楷书偏旁部首全解析》",
        price: "1500",
        balanceSurplus: 200,
        finalPrice: ""
      },
      classRoom: false, // 授课教室弹出
      teacherValue: false, // 授课教师弹出
      informationShow: false, //收货信息弹出
      balanceError: false, // 余额错误提示
      school: "", // 绑定教室
      name: "", // 绑定老师
      balanceValue: "", // 绑定余额
      information: {
        // 绑定收货信息
        name: "",
        city: ""
      },
      classList: [
        {
          id: 1,
          name: "明德校区"
        },
        {
          id: 2,
          name: "微信校区"
        }
      ],
      teacherList: [
        {
          id: 1,
          name: "胡德"
        },
        {
          id: 2,
          name: "勒布朗"
        }
      ],
      infoList: [
        {
          id: 1,
          name: "收货人名称",
          tel: "收货人手机号",
          city: "收货人地址"
        },
        {
          id: 2,
          name: "名称",
          tel: "手机号",
          city: "地址"
        }
      ]
    };
  },
  created() {
    this.confirm = this.$route.query;
  },
  methods: {
    teacherClick(e) {
      this.name = e;
      this.teacherValue = false;
    },
    classClick(e) {
      this.school = e;
      this.classRoom = false;
    },
    infoClick(e) {
      console.log(e);
      this.information.name = e.name;
      this.information.city = e.city;
      this.informationShow = false;
    },
    // 输入要抵扣的余额
    balanceClick(e) {
      this.balanceValue = e;
    },
    // 输入框失焦
    balanceBlur() {
      if (!this.balanceValue) {
        this.userInfo.finalPrice = this.userInfo.price;
        return false;
      }
      if (this.balanceValue > this.userInfo.balanceSurplus) {
        this.balanceError = true;
        this.userInfo.finalPrice = this.userInfo.price;
      } else {
        this.balanceError = false;
        this.userInfo.finalPrice =
          parseInt(this.userInfo.price) - parseInt(this.balanceValue);
      }
    },
    // 去支付页面
    payClick() {
      let id = 1;
      let type = this.payState.state;
      this.$router.push({
        path: "/payDetail",
        query: { id: `${id}`, type: `${type}` }
      });
    }
  },
  mounted() {}
};
</script>

<style lang="less">
.confirm-order {
  .confirm-order--head {
    margin: 0.625rem 0 1.3125rem 0.90625rem;
    font-size: 18px;
    color: #000;
    font-weight: 900;
    .confirm-line {
      color: #53adff;
    }
  }
  .confirm-order--content {
    margin: 0 0.9375rem;
    .confirm-info {
      background: rgba(255, 255, 255, 1);
      box-shadow: 0px 0px 0.3125rem 0px rgba(0, 0, 0, 0.2);
      border-radius: 0.625rem;
      padding: 18px 0 17.5px 35px;
      font-size: 15px;
      color: #000;
      font-weight: 900;
      div:nth-child(2) {
        margin-top: 0.625rem;
      }
    }
    .confrim-second {
      display: flex;
      margin-top: 1.3125rem;
      .confirm-info--left {
        width: 7.8125rem;
        height: 4.6875rem;
        box-shadow: 0px 1px 0.25rem 0px rgba(0, 0, 0, 0.26);
        border-radius: 0.25rem;
        img {
          border-radius: 0.25rem;
          width: 100%;
          height: 100%;
        }
      }
      .confirm-info--right {
        margin-left: 1.15625rem;
        font-size: 12px;
        div:nth-child(2) {
          color: #f54b4b;
        }
        .confirm-info--title {
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-line-clamp: 1; //在第几行显示...
          display: -webkit-box;
          -webkit-box-orient: vertical;
        }
      }
    }
  }
  .confirm-order--footer {
    margin: 2.4375rem 1.5rem;
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
      .teacher-img {
        width: 1.09375rem;
        height: 1.3125rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .custom-title {
      font-size: 1rem;
      margin-left: 0.84375rem;
      font-weight: 900;
    }
    .custom-teacher {
      margin-left: 0.625rem;
    }
    .custom-balance {
      margin-left: 0.3125rem;
    }
  }
  .confirm-order--fixed {
    position: fixed;
    bottom: 0;
    width: 100%;
    font-size: 24px;
    font-weight: 900;
    span:nth-child(1) {
      width: 50%;
      height: 4.1875rem;
      line-height: 4.1875rem;
      background: #fff;
      color: #f54b4b;
      display: inline-block;
      text-align: center;
    }
    span:nth-child(2) {
      width: 50%;
      height: 4.1875rem;
      line-height: 4.1875rem;
      background: #fc612b;
      color: #fff;
      display: inline-block;
      text-align: center;
    }
  }
  .class-content {
    padding: 0.625rem 0.625rem;
    text-align: center;
    &:first-child {
      padding-top: 1.875rem;
    }
    &:last-child {
      padding-bottom: 1.875rem;
    }
  }
}
</style>
