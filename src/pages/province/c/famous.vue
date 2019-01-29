<template>
    <div class="list">
        <div class="h">
            <span class="tit" v-for="(v,i) in menu" :key="i" :class="menucurr == i ? 'curr' : ''" @click="chgMenu(i)">{{v}}</span>
        </div>
        <div class="b">
            <router-link class="item" tag="div" :to="'detail?type=records&id='+v.id" v-for="(v,i) in list" :key="i">
                <div class="img" :style="api.imgBG(v.picFileSrc)"></div>
                <div class="obj">
                    <div class="tit">{{v.personName}}</div>
                    <div class="intro">{{v.personSummary}}</div>
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
            menu: ["祖先", "名人", "精英"],
            menucurr: 0,
            apiData: {
                index_family_person_1: {},
                index_family_person_2: {},
                index_family_person_3: {}
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
        this.getApiData("index_family_person_1");
        this.getApiData("index_family_person_2");
        this.getApiData("index_family_person_3");
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
    width: 100%;
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
        min-height: 400px;
        display: flex;
        flex-wrap: wrap;
        flex: 2;
        .item {
            justify-content: space-between;
            width: 49%;
            overflow: hidden;
            white-space: nowrap;
            padding: 8px 0;
            cursor: pointer;
            &:nth-child(2n + 1) {
                margin-right: 2%;
            }
            .img {
                float: left;
                margin-right: 12px;
                height: 120px;
                width: 90px;
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
                    height: 72px;
                    font-size: 12px;
                    line-height: 24px;
                    white-space: normal;
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