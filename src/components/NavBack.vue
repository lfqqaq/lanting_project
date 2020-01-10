<template>
  <div>
    <van-nav-bar
      :left-text="title"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <van-icon name="ellipsis" slot="right" />
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  props: ["title"],
  data() {
    return {};
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {}
  }
};
</script>

<style lang="less">
.van-nav-bar {
  background: #f2f2f2;
  .van-icon,
  .van-nav-bar__text {
    color: #000;
    font-weight: 900;
  }
}
</style>
