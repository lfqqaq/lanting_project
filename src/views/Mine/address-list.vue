<template>
  <div :style="{height:(screenHeight)+'px'}" id="maindiv" class="addres-list">
    <NavBack :title="title" />
    <div v-show="userInfo.length == 0" class="no-address">
      <img src="../../../public/static/no_address.png" alt />
      <span>您还没有收货地址哦~</span>
    </div>
    <div
      class="address-content"
      v-for="item in userInfo"
      :key="item.id"
      v-show="userInfo.length !== 0"
    >
      <div class="address-content--head">
        <div>{{item.name}}</div>
        <div class="address-tel">{{item.tel}}</div>
      </div>
      <div class="address-content--city">{{item.city}}</div>
      <div class="address-content--foot">
        <div class="address-content--left">
          <van-radio-group v-model="defaultValue" @change="defaultChange">
            <van-radio
              :name="item.default"
              shape="square"
              checked-color="#FC612B"
              icon-size="12px"
            >默认地址</van-radio>
          </van-radio-group>
        </div>
        <div class="address-content--right">
          <div class="address-content--edit" @click="editClick">
            <div class="address-content--img">
              <img src="../../../public/static/edit.png" alt />
            </div>
            <span>编辑</span>
          </div>
          <div class="address-content--edit">
            <div class="address-content--img deleted">
              <img src="../../../public/static/del.png" alt />
            </div>
            <span>删除</span>
          </div>
        </div>
      </div>
    </div>
    <van-button color="#fc612b" @click="addClick" class="foot-btn">新增收货地址</van-button>
  </div>
</template>

<script>
import NavBack from "@components/NavBack";

export default {
  components: {
    NavBack
  },
  data() {
    return {
      title: "知仁兰亭课堂-收货地址管理",
      userInfo: [
        // {
        //   id: 1,
        //   name: "杨晓",
        //   tel: "1333333333",
        //   city: "安徽省瑶海区琅琊山路蓝鲸国际大厦",
        //   default: 1
        // },
        // {
        //   id: 2,
        //   name: "杨晓",
        //   tel: "1333333333",
        //   city: "安徽省瑶海区琅琊山路蓝鲸国际大厦",
        //   default: 0
        // }
      ],
      defaultValue: 1,
      screenHeight: document.documentElement.clientHeight
    };
  },
  methods: {
    defaultChange(e) {
      console.log(e);
    },
    editClick() {
      this.$router.push({ path: `/addressAdd:0` });
    },
    addClick() {
      this.$router.push({ path: `/addressAdd:1` });
    }
  },
  mounted() {
    var _this = this;
    window.onresize = function() {
      // 定义窗口大小变更通知事件
      _this.screenHeight = document.documentElement.clientHeight; // 窗口高度
    };
  },
  watch: {
    // 监听屏幕高度变化
    screenHeight: function(val) {
      var oIframe = document.getElementById("maindiv");
      oIframe.style.height = Number(val) - 40 + "px";
    }
  }
};
</script>

<style lang="less">
.addres-list {
  background: #edf0f5;
  .no-address {
    width: 14.78125rem;
    height: 12.125rem;
    margin: auto;
    margin-top: 12.5rem;
    text-align: center;
    font-size: 15px;
    color: rgba(153, 153, 153, 1);
    img {
      width: 100%;
      height: 100%;
    }
  }
  .address-content {
    background: #fff;
    margin-top: 0.65625rem;
    .address-content--head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.75rem 1.5625rem;
      font-size: 14px;
      color: #3c3c3c;
      font-weight: 900;
      .address-tel {
        font-size: 11px;
        font-weight: 400;
      }
    }
    .address-content--city {
      margin: 0 1.5625rem;
      border-bottom: 1px solid #d7d7d7;
      padding-bottom: 0.75rem;
    }
    .address-content--foot {
      padding: 0.875rem 1.5625rem;
      display: flex;
      justify-content: space-between;
      .address-content--left {
        color: #7c7c7c;
        font-size: 0.625rem;
      }
      .address-content--right {
        display: flex;
        font-size: 0.625rem;
        color: #3c3c3c;
        .address-content--edit {
          display: flex;
          align-items: center;
          &:last-child {
            margin-left: 1.75rem;
          }
          .address-content--img {
            width: 0.75rem;
            height: 0.75rem;
            margin-right: 0.4375rem;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .deleted {
            width: 0.625rem;
            height: 0.75rem;
          }
        }
      }
    }
  }
  .foot-btn {
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 0;
  }
}
</style>
