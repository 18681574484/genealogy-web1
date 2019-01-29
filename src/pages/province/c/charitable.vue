<template>
    <div class="list">
        <div class="h">
            <span class="tit" v-for="(v,i) in menu" :key="i" :class="menucurr == i ? 'curr' : ''" @click="chgMenu(i)">{{v}}</span>
        </div>
        <div class="b">
            <router-link tag="div" :to="'detail?type=charity&id='+v.id" class="item" v-for="v in list" :key="v.id">
                <div class="img" :style="v.newsUploadFileList.length ? api.imgBG(v.newsUploadFileList[0].filePath):''"></div>
                <div class="date">
                    <div class="year">{{dayjs(v.updateTime).format("YYYY")}}</div>
                    <div class="day">{{dayjs(v.updateTime).format("MM-DD")}}</div>
                </div>
                <div class="obj">
                    <div class="tit">{{v.newsTitle}}</div>
                    <div class="txt">{{v.newsText}}</div>
                </div>
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            menu: ["账本支出", "财务收益"],
            menucurr: 0,
            apiData: {
                index_architecture_pay_in: {},
                index_charity_pay_out: {}
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
        this.getApiData("index_architecture_pay_in");
        this.getApiData("index_charity_pay_out");
    },
    methods: {
        getApiData(e) {
            this.api
                .get(this.api.province.base + this.apiList[e].apiUrl, {})
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
    height: 480px;
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
        .item {
            padding: 8px;
            border-bottom: 1px solid #eee;
            white-space: nowrap;
            cursor: pointer;
            overflow: hidden;
            .img {
                height: 64px;
                width: 64px;
                float: left;
                margin-right: 12px;
                background: whitesmoke no-repeat center / cover;
                border-radius: 4px;
            }
            .date {
                float: right;
                background-color: $colorp;
                text-align: center;
                height: 64px;
                width: 64px;
                margin-left: 12px;
                padding: 8px 0;
                border-radius: 4px;
                line-height: 24px;
                font-size: 16px;
                color: #fff;
                .year {
                    font-size: 18px;
                    font-weight: 300;
                    opacity: 0.6;
                    line-height: 24px;
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
                    @include text-multiLine-ellipsis(2, 20px);
                    color: #999;
                }
            }
        }
    }
}
</style>