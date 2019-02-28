<template>
    <div class="pages">
        <Navbar title="慈善公益"></Navbar>
        <div class="main">
            <van-tabs v-model="active" @change="onChange">
                <van-tab :title="v.menuName" v-for="(v,i) in menu" :key="i" v-show="i < 3">
                    <div v-if="menucurr && url">
                        <CharityList :url="url" v-if="menucurr.menuType == 'charity_news'"/>
                        <CharityUser :url="url" v-else-if="menucurr.menuType == 'charity_person'"/>
                        <!-- <CharityHelp :url="url" v-else-if="menucurr.menuType == 'charity_help'"/> -->
                    </div>
                </van-tab>
            </van-tabs>
        </div>
    </div>
</template>
<script>
import CharityList from "./list/charity-list";
import CharityUser from "./list/charity-user";
import CharityHelp from "./list/charity-help";
import Navbar from "_c/navbar/navbar.vue";
export default {
    name: "Page",
    components: {
        Navbar,
        CharityList,
        CharityUser,
        CharityHelp
    },
    data() {
        return {
            active: 0,
            menu: [],
            menucurr: {},
            url: "",
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
                .get(this.api.county.base + this.api.county.site_menus, {
                    siteId: this.$store.state.county_id,
                    menuId: 3
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
                    ? this.api.county.base + this.menucurr.apiUrl
                    : "";
            }, 300);
        }
    }
};
</script>