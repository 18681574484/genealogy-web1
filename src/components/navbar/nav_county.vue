<template>
    <div class="navbar navhome">
        <van-nav-bar fixed>
            <router-link tag="div" slot="title" to="search">
                <div class="searchbar">
                    <van-icon name="search" size=".32rem" color="white"/>
                    <span class="tit">搜索</span>
                </div>
            </router-link>
            <div slot="left">
                <div class="logo" :style="api.imgBG(info.totemPicSrc)"></div>
            </div>
            <router-link to="qrcode" slot="right">
                <span style="border:1px solid;border-radius:.2rem;color:#fff;font-size:.24rem;padding:.05rem .2rem">家族码</span>
            </router-link>
        </van-nav-bar>
        <van-nav-bar fixed class="headtab">
            <div slot="title">
                <van-tabs v-model="active" @change="onchange">
                    <van-tab title="关注" disabled></van-tab>
                    <van-tab :title="'全国'+info.familyName+'氏'" disabled></van-tab>
                    <van-tab :title="'省级'+info.familyName+'氏'"></van-tab>
                    <van-tab :title="'县级'+info.familyName+'氏'"></van-tab>
                    <van-tab :title="'字派'"></van-tab>
                    <van-tab :title="'家谱'"></van-tab>
                </van-tabs>
            </div>
        </van-nav-bar>
        <van-nav-bar fixed>
            <router-link :to="'/base?act=0&fm='+info.familyCode" tag="div" slot="left">
                <span>{{info.regionCode ? api.formatArea(info.regionCode):'地区'}}</span>
                <van-icon name="arrow-down" size=".2rem"/>
            </router-link>
            <div slot="right" @click="toFlow">
                <small>注册宗亲{{info.userNum || 0}}人 &nbsp;</small>
                <span style="border:1px solid;border-radius:.2rem;color:#fff;font-size:.24rem;padding:.05rem .2rem">关注</span>
            </div>
        </van-nav-bar>
    </div>
</template>

<script>
export default {
    props: {},
    data() {
        return {
            active: 3,
            title: "",
            info: {
                totemPicSrc: "",
                familyName: ""
            }
        };
    },
    computed: {
        apiList() {
            return this.$store.state.apiList;
        }
    },
    mounted: function() {
        this.getApiData("index_summary");
    },
    methods: {
        getApiData(e) {
            this.api
                .get(this.api.county.base + this.apiList[e].apiUrl, {
                    pageSize: 1
                })
                .then(res => {
                    if (res.code == 200) {
                        this.info = res.data;
                        this.title = res.data.siteName;
                        document.title = this.title;
                    }
                });
        },
        onchange(e) {
            switch (e) {
                case 1:
                    this.$router.push("/base?act=2&fm=" + this.info.familyCode);
                    break;
                case 2:
                    this.$router.push("/base?act=1&fm=" + this.info.familyCode);
                    break;
                case 3:
                    this.$router.push("/base?act=0&fm=" + this.info.familyCode);
                    break;
                case 4:
                    this.$router.push("culture");
                    break;
                case 5:
                    this.$router.push("genealogy");
                    break;
            }
        },
        toFlow() {
            this.$toast("暂未开放");
        }
    }
};
</script>