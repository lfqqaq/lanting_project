<template>
  <div class="confirm-order">
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
          <img src="" alt="">
        </div>
        <div class="confirm-info--right">
          <div class="confirm-info--title">{{userInfo.title}}</div>
          <div>￥{{userInfo.price}}/10课时</div>
        </div>
      </div>
    </div>
    <div class="confirm-order--footer" >
      <van-cell :value="school" is-link :arrow-direction="classRoom ?'down': '' " @click="classRoom = !classRoom">
        <template slot="title">
          <div class="class-room--img">
            <img src="" alt="">
          </div>
          <span class="custom-title">授课教室</span>
        </template>
      </van-cell>
      <van-action-sheet v-model="classRoom">
        <div v-for="info in classList" :key="info.id" @click="classClick(info.name)" class="class-content">
          {{info.name}}
        </div>
      </van-action-sheet>
      <van-cell :value="name" is-link :arrow-direction="teacherValue ?'down': '' " @click="teacherValue = !teacherValue">
        <template slot="title">
          <div class="teacher-img">
            <img src="" alt="">
          </div>
          <span class="custom-title custom-teacher">授课老师</span>
        </template>
      </van-cell>
      <van-action-sheet v-model="teacherValue">
        <div v-for="item in teacherList" :key="item.id" @click="teacherClick(item.name)" class="class-content">
          {{item.name}}
        </div>
      </van-action-sheet>
    </div>
    <div class="confirm-order--fixed">
      <span>￥{{userInfo.price}}</span>
      <span>立即支付</span>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        userInfo:{
          name: 'hello',
          phone: '1333333333',
          img: '',
          title:'《硬笔楷书偏旁部首全解析》',
          price: '1500'
        },
        classRoom: false,
        teacherValue: false,
        school: '',
        name: '',
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
            name: '胡德'
          },
          {
            id: 2,
            name: '勒布朗'
          }
        ]
      }
    },
    methods: {
      teacherClick(e) {
        this.name = e
        this.teacherValue = false
      },
      classClick(e) {
        this.school = e
        this.classRoom = false
      }
    },
    mounted() {
      
    },
  }
</script>

<style lang="less">
.confirm-order {
  .confirm-order--head {
    margin: 10px 0 21px 14.5px;
    font-size: 18px;
    color: #000;
    font-weight: 900;
    .confirm-line {
      color: #53ADFF;
    }
  }
  .confirm-order--content {
    margin: 0 15px;
    .confirm-info {
      background:rgba(255,255,255,1);
      box-shadow:0px 0px 5px 0px rgba(0, 0, 0, 0.2);
      border-radius:10px;
      padding: 18px 0 17.5px 35px;
      font-size: 15px;
      color: #000;
      font-weight: 900;
      div:nth-child(2) {
        margin-top: 10px;
      }
    }
    .confrim-second {
      display: flex;
      margin-top: 21px;
      .confirm-info--left {
        width:125px;
        height:75px;
        background: #000;
        img {
          border-radius: 4px;
          width: 100%;
          height: 100%;
        }
      }
      .confirm-info--right {
        margin-left: 18.5px;
        font-size: 12px;
        div:nth-child(2) {
          color: #F54B4B;
        }
        .confirm-info--title {
          overflow:hidden;
          text-overflow: ellipsis;
          -webkit-line-clamp: 1;//在第几行显示...
          display: -webkit-box;
          -webkit-box-orient: vertical;
        }
      }
    }
  }
  .confirm-order--footer {
    margin: 39px 24px;  
    .van-cell__title {
      display: flex;
      align-items: center;
      .class-room--img {
        width: 14px;
        height: 21px;
        background: #000;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .teacher-img  {
        width: 17.5px;
        height: 21px;
        background: #000;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .custom-title {
      font-size: 16px;
      margin-left: 13.5px;
      font-weight: 900;
    }
    .custom-teacher {
      margin-left: 10px
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
      height: 67px;
      line-height: 67px;
      background: #fff;
      color: #F54B4B;
      display: inline-block;
      text-align: center;
    }
    span:nth-child(2) {
      width: 50%;
      height: 67px;
      line-height: 67px;
      background: #FC612B;
      color: #fff;
      display: inline-block;
      text-align: center;
    }
  }
  .class-content {
    padding: 10px 10px;
    text-align: center;
    &:first-child {
      padding-top: 30px
    }
  }
}
</style>