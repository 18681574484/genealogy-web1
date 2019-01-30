<template>
    <div class="list">
        <div class="h">
            <span class="tit" v-for="(v,i) in menu" :key="i" :class="v.orderIndex == menucurr.orderIndex ? 'curr' : ''" @click="chgMenu(i)">{{v.menuName}}</span>
        </div>
        <div class="b">
            <router-link class="item" tag="div" :to="'detail?type=famous&id='+v.id" v-for="(v,i) in list" :key="i">
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
            menu: [],
            menucurr: {},
            url: "",
            list: []
        };
    },
    computed: {
        apiList() {
            return this.$store.state.province.apiList;
        }
    },
    mounted: function() {
        this.getNav();
    },
    methods: {
        getNav() {
            this.api
                .get(this.api.province.base + this.api.province.site_menus, {
                    siteId: this.$store.state.province.id,
                    menuId: 7
                })
                .then(res => {
                    if (res.code == 200) {
                        this.menu = res.data;
                        this.chgMenu(0);
                    }
                });
        },
        chgMenu(e) {
            this.list = [];
            this.menucurr = this.menu[e];
            this.getList();
        },
        getList() {
            this.api
                .get(this.api.province.base + this.menucurr.apiUrl, {
                    pageSize: 6
                })
                .then(res => {
                    if (res.code == 200) {
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
            &.curr {
                background: $color;
                color: #fff;
            }
        }
    }
    .b {
        min-height: 400px;
        .item {
            float: left;
            width: 49%;
            overflow: hidden;
            white-space: nowrap;
            padding: 8px 0;
            cursor: pointer;
            .img {
                float: left;
                height: 120px;
                width: 90px;
                background: whitesmoke no-repeat center / cover;
            }
            .obj {
                padding: 0 12px;
                height: 120px;
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
                    @include text-multiLine-ellipsis(3, 24px);
                    color: #999;
                }
                .more {
                    color: $color;
                    font-size: 12px;
                }
            }
        }
    }
}
</style>