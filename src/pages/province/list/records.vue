<template>
    <div class="list">
        <div class="h">
            <span class="tit" v-for="(v,i) in menu" :key="i" :class="v.orderIndex == menucurr.orderIndex ? 'curr':''" v-html="v.menuName" @click="chgMenu(i)" v-show="v.menuType != 'family_record_file'"></span>
        </div>
        <div class="b">
            <router-link class="item" tag="div" :to="'detail?type=records&id='+v.id" v-for="(v,i) in list" :key="i">
                <div class="img" v-if="menucurr.menuCode != 'index_family_record2'" :style="v.newsUploadFiles.length ? api.imgBG(v.newsUploadFiles[0].filePath):''"></div>
                <div class="obj">
                    <div class="tit">{{v.newsTitle}}</div>
                    <div class="intro">{{v.newsText}}</div>
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
    mounted: function() {
        this.getNav();
    },
    methods: {
        getNav() {
            this.api
                .get(this.api.province.base + this.api.province.site_menus, {
                    siteId: this.$store.state.province.id,
                    menuId: 6
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
                .get(this.api.province.base + this.menucurr.apiUrl, {})
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
    padding: 16px 0;
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
                height: 90px;
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
                    height: 48px;
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
