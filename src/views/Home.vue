<template>
    <div :style="{height:(screenHeight)+'px'}" id="maindiv">
        <van-nav-bar
            title="标题"
            left-text="返回"
            right-text="按钮"
            left-arrow
            />
        <!-- <van-address-edit
            :area-list="AreaList"
            show-set-default
            :detail-rows="3"
            :search-result="searchResult"
            :area-columns-placeholder="['请选择', '请选择', '请选择']"
            @save="onSave"
            @change-detail="onChangeDetail"
        /> -->
        <FiledFrom />
    </div>
</template>

<script>
import {test} from '@api/api'
import AreaList from '@utils/city'
import confirmOrder from '@components/confirm-order'
import FiledFrom from '../components/Mine/public-extend'

    export default {
        components: {
            confirmOrder,
            FiledFrom
        },
        data() {
            return {
                AreaList,
                searchResult: [],
                screenHeight: document.documentElement.clientHeight,
            }
        },
        mounted() {
            var _this = this
            window.onresize = function () { // 定义窗口大小变更通知事件
                _this.screenHeight = document.documentElement.clientHeight// 窗口高度
            }
        },
        watch: {
            // 监听屏幕高度变化
            'screenHeight': function (val) {
                var oIframe = document.getElementById('maindiv')
                oIframe.style.height = (Number(val) - 40) + 'px'
            }

        },
        created() {
        },
        methods: {
            onSave(e) {
                console.log(e)
            },
            onChangeDetail() {

            },
        },
    }
</script>

<style lang="less">


</style>