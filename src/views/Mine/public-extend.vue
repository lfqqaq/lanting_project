<template>
  <div>
    <NavBack :title="title" />
    <div class="public">
      <div id="imageWrapper" v-show="firstFlag">
        <div :class="publicExtend ? 'public-next' : 'public-extend'">
          <img :src="publicExtend ? publicNext : publicImg" alt />
          <div :class="publicExtend ? 'next-qrcode' : 'public-qrcode'">
            <img src="../../../public/static/qrcode.png" alt />
          </div>
          <div :class="publicExtend ? 'public-yellow': 'public-copy'">© 2020 版权所有 知仁兰亭课堂</div>
        </div>
      </div>
      <img :src="dataURL" alt v-show="!firstFlag" class="qrcode-img" id="resource_chart" />
      <div class="change-bill">
        <span class="change-radius" @click="changeBill">
          <van-icon name="replay" />切换海报样式
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import NavBack from "@components/NavBack";

import html2canvas from "html2canvas";
import publicImg from "../../../public/static/public_img.png";
import publicNext from "../../../public/static/public_next.png";
export default {
  components: {
    NavBack
  },
  data() {
    return {
      title: "知仁兰亭课堂-推广公众号",
      publicExtend: false,
      firstFlag: true,
      dataURL: "",
      publicImg,
      publicNext
    };
  },
  mounted() {
    this.canvasChange();
  },
  methods: {
    changeBill() {
      this.firstFlag = !this.firstFlag;
      this.publicExtend = !this.publicExtend;
      this.$nextTick(() => {
        this.canvasChange();
      });
    },
    canvasChange() {
      let shareContent = document.querySelector("#imageWrapper");
      html2canvas(shareContent, {
        useCORS: true,
        backgroundColor: null,
        x: shareContent.getBoundingClientRect().left + 36, // 绘制的dom元素相对于视口的位置，由于获取的位置比原本往前偏离的所以要加上，你需要根据自己的视图去计算
        y: shareContent.getBoundingClientRect().top - 20,
        width: shareContent.offsetWidth - 73, // 因为多出的需要剪裁掉，
        height: shareContent.offsetHeight + 20,
        logging: false
      }).then(canvas => {
        let imgUrl = canvas.toDataURL("image/png");
        this.dataURL = imgUrl;
        this.firstFlag = false;
      });
    }
  }
};
</script>

<style lang="less" scoped>
.public {
  background: radial-gradient(
    circle,
    rgba(59, 60, 61, 1),
    rgba(95, 96, 97, 1),
    rgba(56, 57, 58, 1)
  );
  padding: 9px 0;
  .public-extend {
    width: 300px;
    height: 534px;
    position: relative;
    margin: auto;
    overflow: visible !important;
    img {
      width: 100%;
      height: 100%;
    }
    .public-qrcode {
      width: 90.5px;
      height: 90.5px;
      position: absolute;
      top: 326.5px;
      left: 104px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .public-copy {
      text-align: center;
      font-size: 12px;
      position: absolute;
      top: 426px + 83px;
      left: 64px;
    }
  }
  .public-next {
    width: 300px;
    height: 534px;
    margin: 39px auto;
    position: relative;
    overflow: visible !important;
    img {
      width: 100%;
      height: 100%;
    }
    .next-qrcode {
      width: 90.8px;
      height: 90.8px;
      position: absolute;
      top: 266px;
      left: 106px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .public-yellow {
      text-align: center;
      position: absolute;
      top: 366px + 103px;
      font-size: 12px;
      color: #dbad68;
      left: 64px;
    }
  }

  .change-bill {
    text-align: center;
    padding: 20px;
    .change-radius {
      border-radius: 8px;
      background: rgba(252, 97, 43, 1);
      width: 168px;
      height: 34px;
      text-align: center;
      line-height: 34px;
      color: #fff;
      padding: 7.5px 17px;
    }
  }
  .qrcode-img {
    width: 300px;
    height: 534px;
    display: flex;
    margin: auto;
  }
}
</style>
