<template>
    <div class="inner">
        <Row :gutter="32" class="grid">
            <i-col :span="12">
                <div class="h kt">
                    <span class="more">更多</span>
                    <div class="tit">资讯</div>
                </div>
                <div class="b">
                    <div class="item curr">联谊会发布</div>
                    <div class="item">个人发布</div>
                </div>
                <div class="f">
                    <div class="item" v-for="v in 4" :key="v">
                        <div class="img"></div>
                        <div class="obj">
                            <div class="tit">标题</div>
                            <div class="txt">扼要</div>
                        </div>
                    </div>
                </div>
            </i-col>
            <i-col :span="12">
                <div class="h kt">
                    <span class="more">更多</span>
                    <div class="tit">人物</div>
                </div>
                <div class="b">
                    <div class="item curr">家族长老</div>
                    <div class="item">家族栋梁</div>
                </div>
                <div class="f">
                    <div class="item" v-for="v in 4" :key="v">
                        <div class="img"></div>
                        <div class="obj">
                            <div class="tit">标题</div>
                            <div class="tag">教授</div>
                            <div class="txt">扼要</div>
                        </div>
                    </div>
                </div>
            </i-col>
        </Row>
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
    padding: 16px 0;
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
        overflow: hidden;
        border-bottom: 1px solid #ddd;
        .item {
            float: left;
            width: 120px;
            line-height: 32px;
            text-align: center;
            cursor: pointer;
            &.curr,
            &:hover {
                background: $colorp;
                color: #fff;
            }
        }
    }
    .f {
        .item {
            padding: 8px 0;
            white-space: nowrap;
            overflow: hidden;
            .img {
                width: 90px;
                height: 90px;
                float: left;
                margin-right: 16px;
                background: whitesmoke no-repeat center / cover;
            }
            .obj {
                overflow: hidden;
                height: 90px;
                .tit {
                    line-height: 32px;
                    font-size: 16px;
                    color: $colorp;
                }
                .txt {
                    margin-top: 10px;
                    line-height: 16px;
                    color: #999;
                    white-space: normal;
                    height: 80px;
                    overflow: hidden;
                }
            }
        }
    }
    .ivu-col:nth-child(2) .f .img {
        width: 120px;
    }
}
</style>