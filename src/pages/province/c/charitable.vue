<template>
    <div class="list">
        <div class="h">
            <span class="tit" v-for="(v,i) in menu" :key="i" :class="menucurr == i ? 'curr' : ''" @click="chgMenu(i)">{{v}}</span>
        </div>
        <div class="b">
            <div class="item" v-for="v in list" :key="v.id">
                <div class="img"></div>
                <div class="date">
                    <div class="day">05/01</div>
                    <div class="year">2018</div>
                </div>
                <div class="obj">
                    <div class="tit">标题</div>
                    <div class="txt">描述</div>
                </div>
            </div>
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
                index_charity_pay_out: {},
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
                    }
                });
        },
        chgMenu(i) {
            let keys = Object.keys(this.apiData);
            this.list = [];
            this.menucurr = i;
            this.list = this.apiData[keys[i]];
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
}
</style>