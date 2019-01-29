<template>
    <div class="list">
        <div class="h">
            <router-link to="Charity" class="more">查看更多</router-link>
            <span class="tit">捐款名人</span>
        </div>
        <div class="total">
            <div class="txt" @click="handleTopay = true">
                公益基金总金额：
                <span>{{apiData.index_fund_1.remain}}</span>元
            </div>
        </div>
        <div class="b">
            <div class="item" v-for="(v,i) in apiData.index_architecture_pay_in_person_3.records" :key="i" :style="api.imgBG(v.allUserLogin.picSrc)"></div>
            <router-link class="item more" to="/c/charity?ct=2">···</router-link>
        </div>
        <Modal v-model="handleTopay" width="480px" :footer-hide="true" class="g-pay">
            <topay @reloadApi="reloadApi"/>
        </Modal>
    </div>
</template>
<script>
import topay from "_c/common/topay.vue";
export default {
    components: {
        topay
    },
    data() {
        return {
            apiData: {
                index_architecture_pay_in_person_3: {},
                index_fund_1: {}
            },
            list: [],
            handleTopay: false
        };
    },
    computed: {
        apiList() {
            return this.$store.state.province.apiList;
        }
    },
    mounted: function() {
        this.getApiData("index_architecture_pay_in_person_3");
        this.getApiData("index_fund_1");
    },
    methods: {
        reloadApi() {
            this.getApiData("index_architecture_pay_in_person_3");
            this.getApiData("index_fund_1");
        },
        getApiData(e) {
            this.api
                .get(this.api.province.base + this.apiList[e].apiUrl, {})
                .then(res => {
                    if (res.code == 200) {
                        this.apiData[e] = res.data;
                    }
                });
        }
    }
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/var.scss";
.list {
    .h {
        height: 48px;
        line-height: 48px;
        .tit {
            font-size: 14px;
            padding: 8px 16px;
            border-radius: 4px;
            cursor: pointer;
            background: $color;
            color: #fff;
        }
        .more {
            float: right;
            font-size: 12px;
        }
    }
    .total {
        text-align: center;
        font-size: 16px;
        cursor: pointer;
        padding-right: 64px;
        background: url(../img/icon-help.png) no-repeat 90% center / auto 48px;
        span {
            color: $color;
            font-size: 32px;
            font-weight: 700;
            margin-right: 8px;
        }
    }
    .b {
        .item {
            text-align: center;
            margin: 8px 0;
            border-radius: 4px;
            .img {
                margin-left: auto;
                margin-right: auto;
                height: 64px;
                width: 64px;
                clear: both;
                background: whitesmoke no-repeat center / cover;
                border-radius: 50%;
            }
            .count {
                span {
                    color: $color;
                }
            }
            .link {
                font-size: 12px;
                display: flex;
                justify-content: space-between;
                span {
                    padding: 0 8px;
                    background: $color;
                    color: #fff;
                    border-radius: 4px;
                }
            }
        }
    }
}
</style>