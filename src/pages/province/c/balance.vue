<template>
    <div class="grid">
        <div class="l">
            <div class="h kt">
                <router-link to="/More" class="more">查看更多</router-link>
                <span class="tit">账本公开栏</span>
            </div>
            <div class="b">
                <Card class="item" v-for="v in 4" :key="v">
                    <div class="img"></div>
                    <div class="date">
                        <div class="day">05/01</div>
                        <div class="year">2018</div>
                    </div>
                    <div class="obj">
                        <div class="tit">标题</div>
                        <div class="txt">描述</div>
                    </div>
                </Card>
            </div>
        </div>
        <div class="r">
            <div class="h kt">
                <router-link to="/p/Charity" class="more">查看更多</router-link>
                <span class="tit">捐款名人</span>
            </div>
            <div class="total">
                <div class="txt">
                    公益基金总金额：
                    <span>789012.00</span>元
                </div>
            </div>
            <Row class="b" :gutter="16">
                <i-col :span="8" v-for="v in 6" :key="v">
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
    </div>
</template>
<script>
export default {
    data() {
        return {};
    },
    computed: {
        apiList() {
            return this.$store.state.province.apiList;
        }
    },
    mounted: function() {},
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
.grid {
    display: flex;
    justify-content: space-between;
    padding: 32px 0;
    .r {
        width: 48%;
    }
    .l {
        width: 48%;
        .item {
            margin: 16px 0;
            border-radius: 4px;
            white-space: nowrap;
            overflow: hidden;
            .img {
                height: 64px;
                width: 64px;
                background: whitesmoke;
                float: left;
                margin-right: 16px;
            }
            .date {
                float: right;
                background-color: $colorp;
                color: #fff;
                text-align: center;
                height: 48px;
                width: 48px;
                margin: 8px 0 8px 16px;
                padding: 8px 0;
                line-height: 16px;
                .year {
                    font-size: 16px;
                }
            }
            .obj {
                overflow: hidden;
                .tit {
                    height: 24px;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    line-height: 24px;
                }
                .txt {
                    white-space: normal;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    line-height: 20px;
                    height: 40px;
                    color: #999;
                }
            }
        }
    }
    .r {
        .total {
            text-align: center;
            font-size: 16px;
            padding-right: 64px;
            background: url(./img/icon-help.png) no-repeat 90% center / auto
                48px;
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
    .h {
        height: 48px;
        line-height: 48px;
        font-size: 20px;
        .more {
            float: right;
            font-size: 12px;
        }
    }
}
</style>