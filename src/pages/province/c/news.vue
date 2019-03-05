<template>
    <div class="list">
        <div class="h">
            <span class="tit" v-for="(v,i) in menu" :key="i" :class="menucurr == i ? 'curr' : ''" @click="chgMenu(i)">{{v}}</span>
        </div>
        <div class="b">
            <router-link class="item" tag="div" :to="'detail?type=records&id='+v.id" v-for="(v,i) in list" :key="i">
                <div class="img"></div>
                <div class="obj">
                    <div class="tit">{{v.newsTitle}}</div>
                    <div class="intro">{{v.newsText}}</div>
                    <div class="more">查看详情</div>
                </div>
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            menu: ["联谊会发布", "个人发布"],
            menucurr: 0,
            apiData: {
                index_fan_news_sodality_recommend: {},
                index_fan_news_recommend: {}
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
        this.getApiData("index_fan_news_sodality_recommend");
        this.getApiData("index_fan_news_person_recommend");
    },
    methods: {
        getApiData(e) {
            this.api
                .get(this.api.province.base + this.apiList[e].apiUrl, {
                    pageSize: 6
                })
                .then(res => {
                    if (res.code == 200) {
                        this.apiData[e] = res.data;
                        this.chgMenu(this.menucurr);
                    }
                });
        },
        chgMenu(i) {
            let keys = Object.keys(this.apiData);
            this.list = [];
            this.menucurr = i;
            this.list = this.apiData[keys[i]].records;
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
            &.curr {
                background: $color;
                color: #fff;
            }
        }
    }
    .b {
        height: 400px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .item {
            overflow: hidden;
            white-space: nowrap;
            cursor: pointer;
            .img {
                float: left;
                margin-right: 12px;
                height: 90px;
                width: 120px;
                background: whitesmoke no-repeat center / cover;
            }
            .obj {
                line-height: 24px;
                overflow: hidden;
                .tit {
                    height: 24px;
                    overflow: hidden;
                    color: $color;
                    font-size: 14px;
                }
                .intro {
                    font-size: 12px;
                    white-space: normal;
                    @include text-multiLine-ellipsis(2, 24px);
                    color: #999;
                }
                .more {
                    line-height: 16px;
                    color: $color;
                    font-size: 12px;
                }
            }
        }
    }
}
</style>