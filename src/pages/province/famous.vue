<template>
    <div class="pages">
        <Navbar title="家族名人"></Navbar>
        <div class="main">
            <van-tabs v-model="active" @change="onChange">
                <van-tab :title="v.menuName" v-for="(v,i) in menu" :key="i">
                    <div v-if="menucurr && url">
                        <FamousList :url="url" v-if="menucurr && url.length"/>
                    </div>
                </van-tab>
                <van-tab title="组织架构"></van-tab>
            </van-tabs>
        </div>
    </div>
</template>
<script>
import Navbar from "_c/navbar/navbar.vue";
import FamousList from "./list/famous.vue";
export default {
    name: "Page",
    components: {
        Navbar,
        FamousList
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
                    menuId: 5
                })
                .then(res => {
                    if (res.code == 200) {
                        this.menu = res.data;
                        this.chgMenu(this.active);
                    }
                });
        },
        onChange(i) {
            if (!this.menu[i]) {
                this.$router.push("team");
            } else {
                this.chgMenu(i);
            }
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