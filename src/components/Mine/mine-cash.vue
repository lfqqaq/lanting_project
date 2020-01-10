<template>
  <div class="mine-cash">
    <van-cell-group>
      <van-field
          v-model="money"
          center
          clearable
          label="提现金额"
          placeholder="单次最少提现100"
        >
      </van-field>
      <van-cell title="提现至" class="cash-way" >
        <van-radio-group v-model="cash_way" class="cash-group">
          <van-radio name="1" checked-color="#000" class="cash-wechat" icon-size="14px">
            <van-icon name="wechat" color="#4DBA4A" />
            <span>微信支付</span>
          </van-radio>
          <van-radio name="2" checked-color="#000" icon-size="14px">
            <van-icon name="alipay" color="#00B9F3" />
            <span>支付宝支付</span>
          </van-radio>
        </van-radio-group>
      </van-cell>
      <van-field
        v-model="name"
        center
        clearable
        label="姓名"
        placeholder="请填写您的真实姓名"
      >
      </van-field>
      <van-field
        v-model="account"
        center
        clearable
        label="账号"
        placeholder="请填写支付宝/微信账号"
      >
      </van-field>
    </van-cell-group>
    <div class="cash-foot">单笔支付为100.00-5000.00元，单日提现不超过2000.00元</div>
    <div class="cash-btn">
      <van-button color="#FC612B" round @click="submitClick">确定</van-button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        account: '',
        cash_way: '1',
        name: '',
        money: ''
      }
    },
    methods: {
      submitClick() {
        // 判断提现金额是否小于100 或 大于 5000
        if(this.money < 100 || this.money >=2000 ) {
          console.log('单笔提现不能低于100')
        }
      }
    },
  }
</script>

<style lang="less">
.mine-cash {
  // placeholder 样式往右
  .van-field__control {
    text-align: right;
  }
  .cash-way {
    display: flex;
    align-items: center;
    justify-content: center;
    .van-cell__title {
      flex: 0.3;
    }
    .cash-group {
      display: flex;
      justify-content: flex-end;
      .cash-wechat {
        margin-right: 20px;
      }
      
      .van-radio__label {
        display: flex;
        align-items: center;
      }
    }
}
.cash-foot {
  font-size: 11px;
  color: #999999;
  margin: 15px 0 0 13.5px;
}
.cash-btn {
  margin-top: 40px;
  text-align: center;
  .van-button {
    width:345px;
    height:45px;
  }
}

}
</style>