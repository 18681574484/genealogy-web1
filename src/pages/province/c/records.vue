<template>
    <div class="list">
        <div class="h">
            <span class="tit">省级公告</span>
        </div>
        <div class="b" v-if="list.length">
            <router-link tag="div" :to="'detail?type=records&id='+list[0].id" class="headline">
                <div class="tit">
                    <span class="flag">【置顶公告】</span>
                    <span>{{list[0].newsTitle}}</span>
                </div>
                <div class="tag">
                    <iconfont name="newshot"/>
                    <span>{{dayjs(list[0].updateTime).format("YYYY-MM-DD")}}</span>
                    <iconfont name="attention"/>
                    <span>{{list[0].visitNum}}</span>
                </div>
                <div class="txt">{{list[0].newsText}}</div>
            </router-link>
            <div class="items">
                <router-link :to="'detail?type=records&id='+v.id" tag="div" class="item" v-for="(v,i) in list" v-show="i > 0" :key="i">{{v.newsTitle}}</router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            apiData: {
                index_family_record2: {}
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
        this.getApiData("index_family_record2");
    },
    methods: {
        getApiData(e) {
            this.api
                .get(this.api.province.base + this.apiList[e].apiUrl, {
                    pageSize: 5
                })
                .then(res => {
                    if (res.code == 200) {
                        this.apiData[e] = res.data;
                        this.list = res.data.records;
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
    .b {
        .headline {
            box-shadow: 0 1px 3px rgba(#000, 0.2);
            padding: 8px 16px;
            border-radius: 4px;
            .tit {
                line-height: 40px;
                font-size: 16px;
                .flag {
                    color: $color;
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
        .items {
            margin-top: 16px;
            .item {
                box-shadow: 0 0px 3px rgba(#000, 0.2);
                padding: 8px 16px;
                border-radius: 4px;
                margin-top: 16px;
            }
        }
    }
}
</style>