<template>
    <div class="list">
        <div class="h">
            <span class="tit">省级公告</span>
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
</style>