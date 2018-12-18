<template>
    <div class="grid">
        <div class="l">
            <div class="h">
                <span class="more">更多</span>
                <span class="tit">家族头条</span>
            </div>
            <Card class="b">
                <div class="img">
                    <div class="tit">标题标题</div>
                </div>
            </Card>
        </div>
        <div class="r">
            <div class="h">
                <div class="tit">省级公告</div>
            </div>
            <Card class="b" dis-hover>
                <Card class="headline">
                    <div class="tit">
                        <span class="flag">【置顶公告】</span>
                        <span>标题</span>
                    </div>
                    <div class="tag">
                        <iconfont name="newshot"/>
                        <span>2018-10-10</span>
                        <iconfont name="attention"/>
                        <span>150</span>
                    </div>
                    <div class="txt">描述描述</div>
                </Card>
                <Card class="item" v-for="v in 3" :key="v">省级公告标题</Card>
            </Card>
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
    .l {
        width: 570px;
        .b {
            .img {
                width: 540px;
                height: 360px;
                position: relative;
                background: #fff no-repeat center;
            }
            .tit {
                position: absolute;
                z-index: 1;
                bottom: 0;
                right: 0;
                width: 100%;
                line-height: 40px;
                height: 40px;
                background: rgba(0, 0, 0, 0.6);
                color: #fff;
                padding: 0 16px;
            }
        }
    }
    .r {
        width: 48%;
        .headline {
            .tit {
                line-height: 40px;
                font-size: 16px;
                .flag {
                    color: $colorp;
                    font-size: 20px;
                }
            }
            .tag {
                font-size: 12px;
                color: #999;
                span {
                    margin-right: 16px;
                }
            }
            .txt {
                height: 50px;
                line-height: 25px;
                overflow: hidden;
                white-space: normal;
                color: #999;
                display: block;
            }
        }
        .item {
            margin-top: 8px;
        }
    }
    .h {
        height: 48px;
        line-height: 48px;
        font-size: 20px;
        .more {
            float: right;
            font-size: 14px;
        }
    }
    .b {
        background-color: whitesmoke;
    }
}
</style>