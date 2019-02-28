<template>
    <div class="pages">
        <div class="navbar">
            <van-nav-bar title="联谊会" fixed>
                <small slot="right" v-if="$route.query.fm" @click="chgFm">查看{{fm ? '全部':title}}</small>
            </van-nav-bar>
        </div>
        <div class="main" v-if="this.list.county.length">
            <van-tabs v-model="active">
                <van-tab title="县级联谊会">
                    <van-cell-group>
                        <van-cell class="item" :value="api.formatArea(v.regionCode) + ' | '+ v.familyName" @click="link(v,1)" v-for="(v,i) in list.county" :key="i">
                            <div slot="title">
                                <div class="brand" :style="api.imgBG(v.url)"></div>
                                <span>{{v.name}}</span>
                            </div>
                        </van-cell>
                    </van-cell-group>
                </van-tab>
                <van-tab title="省级联谊会">
                    <van-cell-group>
                        <van-cell class="item" :value="api.formatArea(v.regionCode) + ' | '+ v.familyName" @click="link(v,2)" v-for="(v,i) in list.province" :key="i">
                            <div slot="title">
                                <div class="brand" :style="api.imgBG(v.url)"></div>
                                <span>{{v.name}}</span>
                            </div>
                        </van-cell>
                    </van-cell-group>
                </van-tab>
            </van-tabs>
        </div>
    </div>
</template>

<script>
import { pca, pcaa } from "area-data";
export default {
    name: "Page",
    data() {
        return {
            title: "",
            active: this.$route.query.act || 0,
            fm: null,
            list: {
                county: [],
                province: []
            }
        };
    },
    computed: {},
    mounted: function() {
        if (this.$route.query.fm) {
            this.fm = this.$route.query.fm;
        }
        if (this.$route.query.code) {
            if (this.$route.query.type == "c") {
                this.$store.commit("updateCountyId", this.$route.query.code);
            } else if (this.$route.query.type == "p") {
                this.$store.commit("updateProvinceId", this.$route.query.code);
            }
            this.$router.replace("home");
        } else {
            this.getList();
        }
    },
    methods: {
        getList() {
            this.api
                .post(this.api.county.base + this.api.county.site_list, {
                    siteType: "fan",
                    familyCode: this.fm || ""
                })
                .then(res => {
                    if (res.code == 200) {
                        this.list.county = res.data;
                        if (
                            this.list.county.length &&
                            this.list.county[0].familyCode ==
                                this.$route.query.fm
                        ) {
                            this.title = this.list.county[0].familyName + "氏";
                        }
                    }
                });
            this.api
                .post(this.api.county.base + this.api.county.site_list, {
                    siteType: "pro",
                    familyCode: this.fm || ""
                })
                .then(res => {
                    if (res.code == 200) {
                        this.list.province = res.data;
                    }
                });
        },
        link(e, t) {
            switch (t) {
                case 1:
                    this.$store.commit("updateCountyId", e.id);
                    break;
                case 2:
                    this.$store.commit("updateProvinceId", e.id);
                    break;
            }
            this.$router.push("/home");
        },
        chgFm() {
            this.fm = this.fm ? null : this.$route.query.fm;
            this.getList();
        }
    }
};
</script>
<style lang="less" scoped>
.van-cell {
    font-size: 0.24rem;
}
.brand {
    float: left;
    height: 0.48rem;
    width: 0.48rem;
    background: no-repeat center / cover;
    border-radius: 100%;
    margin-right: 0.2rem;
}
</style>
