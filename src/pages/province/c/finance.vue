<template>
    <div class="finance" v-if="info">
        <div class="r" @click="toPay">
            <img src="@/assets/images/solid.png">
            <div class="txt">捐助</div>
        </div>
        <div class="l">
            <div class="tit">公益基金</div>
            <div class="label">总金额</div>
            <div class="count">
                <small>￥</small>
                <span>{{info.remain}}</span>
            </div>
        </div>
        <van-popup v-model="active" position="bottom">
            <Wxpay :type="2"/>
        </van-popup>
    </div>
</template>

<script>
import Wxpay from "_c/wxpay/wxpay.vue";
export default {
    props: {
        isLoading: {
            type: Boolean
        }
    },
    components: {
        Wxpay
    },
    data() {
        return {
            active: false,
            info: null
        };
    },
    watch: {
        isLoading: function(curVal, oldVal) {
            if (curVal) {
                this.getApiData("index_fund_1");
            }
        }
    },
    computed: {
        apiList() {
            return this.$store.state.apiList;
        }
    },
    mounted: function() {
        this.getApiData("index_fund_1");
    },
    methods: {
        getApiData(e) {
            this.api
                .get(this.api.province.base + this.apiList[e].apiUrl, {})
                .then(res => {
                    if (res.code == 200) {
                        this.info = res.data;
                    }
                });
        },
        toPay() {
            this.active = true;
        }
    }
};
</script>
<style lang="less" scoped>
.finance {
    position: relative;
    width: 7.1rem;
    height: 2.5rem;
    margin: 0.1rem auto;
    border-radius: 0.1rem;
    background: url(../../../assets/images/bg_banlance.png) no-repeat center / cover;
    padding: 0.3rem 0.8rem;
    box-sizing: border-box;
    color: #fff;
    white-space: nowrap;
    .l {
        overflow: hidden;
        .tit {
            font-size: 0.36rem;
            line-height: 2;
        }
        .label {
            font-size: 0.24rem;
            line-height: 2;
        }
        .count {
            font-size: 0.5rem;
            font-weight: 600;
        }
    }
    .r {
        padding: 0.3rem 0;
        float: right;
        text-align: center;
        font-size: 0.24rem;
        img {
            width: 0.9rem;
            height: 0.9rem;
        }
    }
}
</style>
