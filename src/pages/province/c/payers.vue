<template>
    <div class="list">
        <div class="h">
            <router-link to="Charity" class="more">查看更多</router-link>
            <span class="tit">捐款名人</span>
        </div>
        <div class="total">
            <div class="txt">
                公益基金总金额：
                <span>789012.00</span>元
            </div>
        </div>
        <Row class="b" :gutter="16">
            <i-col :span="8" v-for="v in list" :key="v">
                <Card class="item">
                    <div class="img"></div>
                    <div class="name">张三</div>
                    <div class="count">
                        捐款
                        <span>1.00</span>元
                    </div>
                    <div class="link">
                        <span>关注</span>
                        <span>点赞</span>
                    </div>
                </Card>
            </i-col>
        </Row>
    </div>
</template>
<script>
export default {
    data() {
        return {
            apiData: {
                index_architecture_pay_in_person_3: {}
            },
            list: []
        };
    },
    computed: {
        apiList() {
            return this.$store.state.province.apiList;
        }
    },
    mounted: function() {
        this.getApiData("index_architecture_pay_in_person_3");
    },
    methods: {
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