<template>
    <div class="navbar">
        <div class="inner">
            <div class="l">
                <div class="item" :class="navcurr == 'home' ?'curr':''" @click="jumpurl('home')">
                    <div class="cn">首页</div>
                    <div class="en">home</div>
                </div>
                <div class="item" v-for="(v,i) in navsData" :key="i" :class="v.menuCode == navcurr ?'curr':''" v-if="i < 3 && v.isWeb" @click="jumpurl(v.menuCode)">
                    <div class="cn">{{v.menuName}}</div>
                    <div class="en">{{v.menuCode}}</div>
                </div>
            </div>
            <div class="c">
                <div class="img" :style="api.imgBG(index_summary.totemPicSrc)"/>
                <div class="txt kt">{{index_summary.siteName}}</div>
                <div class="site">{{api.formatArea(index_summary.regionCode)}}</div>
            </div>
            <div class="r">
                <div class="item" v-for="(v,i) in navsData" :key="i" :class="v.menuCode == navcurr ?'curr':''" v-if="i > 2 && v.isWeb" @click="jumpurl(v.menuCode)">
                    <div class="cn">{{v.menuName}}</div>
                    <div class="en">{{v.menuCode}}</div>
                </div>
            </div>
        </div>
        <BackTop></BackTop>
    </div>
</template>
<script>
import { pca, pcaa } from "area-data";
export default {
    name: "NavBar",
    data() {
        return {
            index_summary: {},
            navcurr: this.$route.name || "home",
            navsData: [],
            regionCode: ""
        };
    },
    computed: {
        apiList() {
            return this.$store.state.county.apiList;
        }
    },
    mounted: function() {
        this.get_index_summary();
        this.getNav();
    },
    methods: {
        get_index_summary() {
            this.api
                .get(
                    this.api.county.base + this.apiList.index_summary.apiUrl,
                    {}
                )
                .then(res => {
                    if (res.code == 200) {
                        this.index_summary = res.data;
                    }
                });
        },
        getNav() {
            this.api
                .get(this.api.county.base + this.api.county.site_menus, {
                    siteId: this.$store.state.county.id,
                    menuId: 1
                })
                .then(res => {
                    this.navsData = res.data;
                });
        },
        jumpurl(e) {
            this.navcurr = e;
            this.$router.push(e);
        }
    }
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/var.scss";
.navbar {
    position: relative;
    margin-top: 32px;
    height: 150px;
    background: #1b1c1d;
    .inner {
        white-space: nowrap;
        position: relative;
    }
    .l {
        float: left;
        .item + .item {
            border-left: 1px solid #ddd;
        }
    }
    .r {
        float: right;
        .item + .item {
            border-left: 1px solid #ddd;
        }
    }
    .c {
        width: 192px;
        height: 180px;
        position: absolute;
        z-index: 99;
        top: 0;
        left: 50%;
        margin-left: -96px;
        background: url(../img/logobg.jpg) no-repeat center / cover;
        text-align: center;
        padding: 16px 0;
        .img {
            height: 80px;
            width: 80px;
            background: no-repeat center / cover;
            margin: 0 auto;
        }
        .txt {
            font-size: 24px;
            color: #fff;
            font-weight: 700;
        }
        .site {
            font-size: 12px;
            color: #fff;
        }
    }
    .item {
        height: 128px;
        width: 120px;
        padding: 0 40px;
        float: left;
        line-height: 48px;
        text-align: center;
        font-size: 16px;
        overflow: hidden;
        cursor: pointer;
        color: #fff;
        .cn {
            float: left;
            padding-top: 32px;
            line-height: 1;
            writing-mode: vertical-lr;
        }
        .en {
            float: right;
            color: #ccc;
            padding-top: 32px;
            font-size: 12px;
            line-height: 1;
            writing-mode: vertical-lr;
            text-transform: capitalize;
        }
        &.curr,
        &:hover {
            background: url(../img/navcurr.png) no-repeat 20% 80%;
        }
    }
}
</style>
