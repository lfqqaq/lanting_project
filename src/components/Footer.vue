<template>
  <div>
    <van-tabbar v-model="active" route active-color="#000" inactive-color="#999999">
      <van-tabbar-item to="/">
        <span>首页</span>
        <img slot="icon" slot-scope="props" :src="props.active ? icon.active : icon.inactive" />
      </van-tabbar-item>
      <van-tabbar-item to="/course">
        <span>我的课程</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? icon.courseActive : icon.courseInactive"
        />
      </van-tabbar-item>
      <van-tabbar-item to="/mine">
        <span>个人中心</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? icon.mineActive : icon.mineInactive"
        />
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import activeImg from "../../public/static/home_hover.png";
import inactiveImg from "../../public/static/home.png";
import courseActiveImg from "../../public/static/course_hover.png";
import courseInactiveImg from "../../public/static/course.png";
import mineActiveImg from "../../public/static/mine_hover.png";
import mineInactiveImg from "../../public/static/mine.png";

import { test } from "@api/api";
export default {
  data() {
    return {
      active: 0,
      icon: {
        active: activeImg,
        inactive: inactiveImg,
        courseActive: courseActiveImg,
        courseInactive: courseInactiveImg,
        mineActive: mineActiveImg,
        mineInactive: mineInactiveImg
      }
    };
  },
  created() {},
  methods: {}
};
</script>

<style lang="less" scoped>
</style>
