<template>
  <div class="home-top">
    <div class="home-drodown">
      <van-dropdown-menu>
        <van-dropdown-item v-model="listSelect" :options="listOptions" @change="listChange" />
      </van-dropdown-menu>
    </div>
    <div class="home-search">
      <van-search
        placeholder="搜索课程/教材/课件名称"
        v-model="listValue"
        :clearable="false"
        shape="round"
        width="14.125rem"
        @click="onFocus"
        readonly
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listSelect: 0,
      listValue: "",
      listOptions: [
        { text: "习字", value: 0 },
        { text: "特惠体验课程", value: 1 },
        { text: "精选课程", value: 2 },
        { text: "教辅&课件", value: 3 }
      ]
    };
  },
  created() {
    let listRouter = this.$route.name;
    switch (listRouter) {
      case "choice":
        this.listSelect = 1;
        break;
      case "odds":
        this.listSelect = 2;
        break;
      case "ware":
        this.listSelect = 3;
        break;
      default:
        this.listSelect = 0;
        break;
    }
  },
  methods: {
    listChange(e) {
      switch (e) {
        case 2:
          this.$router.push("/odds"); // 精选课程
          break;
        case 1:
          this.$router.push("/choice"); // 特惠体验页面
          break;
        case 3:
          this.$router.push("/ware"); // 课件
          break;
        default:
          this.$router.push("/");
          break;
      }
    },
    onFocus() {
      this.$router.push({ path: "/search" });
    }
  }
};
</script>

<style lang="less" scoped>
.home-top {
  display: flex;
  justify-content: space-between;
  .home-drodown {
    font-weight: 900;
    margin-left: 0.3125rem;
    .van-dropdown-menu::after {
      border: none;
    }
  }
  .home-search {
    width: 14.125rem;
  }
}
</style>
