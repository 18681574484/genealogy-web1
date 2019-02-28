<template>
    <div class="pages">
        <Navbar title="家族产业链"></Navbar>
        <div class="main">
            <van-tabs v-model="active" @change="onChange">
                <van-tab :title="v.menuName" v-for="(v,i) in menu" :key="i">
                    <div v-if="menucurr && url">
                        <Industry :url="url" v-if="menucurr && url.length"/>
                    </div>
                </van-tab>
            </van-tabs>
        </div>
    </div>
</template>
<script>
import Navbar from "_c/navbar/navbar.vue";
import Industry from "./list/industry.vue";
export default {
    name: "Page",
    components: {
        Navbar,
        Industry
    },
    data() {
        return {
            active: 0,
            menu: [],
            menucurr: {},
            url: ""
        };
    },
    mounted: function() {
        if (this.$route.query.ct) {
            this.active = this.$route.query.ct;
        }
        this.getNav();
    },
    methods: {
        getNav() {
            this.api
                .get(this.api.province.base + this.api.province.site_menus, {
                    siteId: this.$store.state.province_id,
                    menuId: 4
                })
                .then(res => {
                    if (res.code == 200) {
                        this.menu = res.data;
                        this.chgMenu(this.active);
                    }
                });
        },
        onChange(i) {
            this.chgMenu(i);
        },
        chgMenu(e) {
            this.active = e;
            this.url = "";
            this.menucurr = this.menu[e];
            setTimeout(() => {
                this.url = this.menucurr
                    ? this.api.province.base + this.menucurr.apiUrl
                    : "";
            }, 300);
        }
    }
};
</script>