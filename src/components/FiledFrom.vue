<template>
  <div class="mine">
    <van-cell-group>
      <van-field 
        v-model="name" 
        placeholder="请填写姓名" 
        label="收货人"
        />
      <van-field 
        v-model="tel" 
        placeholder="请填写联系电话" 
        label="联系电话"
      />
      <van-field 
        v-model="city" 
        placeholder="请选择省、市、区  >" 
        label="配送地址"
        readonly
        @click="cityClick"
        />
        <van-action-sheet v-model="cityShow">
          <van-area 
            :area-list="AreaList" 
            @cancel="cancelClick" 
            @confirm="confirmClick" 
            :columns-placeholder="['请选择', '请选择', '请选择']"
          />
        </van-action-sheet>
      <van-field 
        v-model="addressDetail" 
        type="textarea"
        placeholder="请填写详细地址(街道、楼牌号等)" 
        />
        <van-cell title="设为默认地址">
          <template slot="right-icon">
            <van-switch v-model="isDefault" size="24px" />
          </template>
        </van-cell>
        <van-button type="danger" @click="submitClick" class="foot-btn">保存</van-button>
    </van-cell-group>
  </div>
</template>

<script>
import AreaList from '@utils/city'

  export default {
    data() {
      return {
        AreaList,
        name:'',
        tel: '',
        city:'',
        addressDetail: '',
        isDefault: '',
        cityShow: false,
      }
    },
    methods: {
      submitClick() {

      },
      cityClick() {
        this.cityShow = true
      },
      confirmClick(e) {
        console.log(e)
        let tmpCity = `${e[0].name}/${e[1].name}/${e[2].name}`
        this.city = tmpCity
        this.cityShow = false
      },
      cancelClick() {
        this.cityShow = false
      }
    },
  }
</script>

<style lang="less">
.mine {
    background: #EDF0F5;
    .van-cell-group {
      background: #EDF0F5;
      .van-cell {
          margin-top: 10px;
          position: static;
          .van-switch--on {
              background-color: #FC612B
          }
      }
      .van-address-edit-detail {
          .van-field__label {
              display: none;
          }
      }
      .foot-btn {
        position: fixed;
        bottom: 0;
        width: 100%;
        padding: 0;
      }
      .van-button--danger {
        background-color: #FC612B;
        border: 1px solid #FC612B
      }
    }
}

</style>