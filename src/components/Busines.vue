<template>
  <div class="busines">
    <div class="busines-head">
      <router-link to="/">
        <span>课堂首页｜</span>
      </router-link>
      <router-link to="/mine">
        <span>个人中心｜</span>
      </router-link>
      <span>关注我们｜</span>
      <span>意见反馈</span>
    </div>
    <div class="busines-all">© 知仁兰亭课堂版权所有</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.busines {
  text-align: center;
  margin-bottom: 6rem;
  padding-top: 2rem;
  .busines-head {
    font-size: 12px;
    font-weight: 400;
    color: rgba(124, 124, 124, 1);
    line-height: 1.375rem;
    a {
      color: rgba(124, 124, 124, 1);
    }
  }
  .busines-all {
    font-size: 12px;
    font-weight: 400;
    color: rgba(124, 124, 124, 1);
    line-height: 1.375rem;
    margin-top: 1.09375rem;
  }
}
</style>
