<template>
  <div class="cash-finish">
    <div class="finish-img">
      <img src="../../../public/static/cash_finish.png" alt="">
    </div>
    <div>提现申请已提交，等待人工审核</div>
    <div>2019-12-23 15:11:28</div>
    <div>预计到账时间: 12月25日前</div>
    <div class="finish-btn">
      <van-button color="#FC612B" round>完成</van-button>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="less" scoped>
.cash-finish {
  text-align: center;
  div:nth-child(2) {
    font-size: 16px;
    color: #000;
    margin-top: 34px;
  }
  div:nth-child(3) {
    font-size: 12px;
    color: #666666;
    margin:  10.5px  0 12.5px;
  }
  div:nth-child(4) {
    font-size: 12px;
    color: #666666;
  }
  .finish-img {
    width: 113.5px;
    height: 96px;
    margin: auto;
    margin-top: 70.5px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .finish-btn {
    margin-top: 59.5px;
    .van-button {
      width:230px;
      height:50px;
    }
  }
  
}
</style>