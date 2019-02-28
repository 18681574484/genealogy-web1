<template>
    <div class="pages">
        <Navbar title="家族文化"></Navbar>
        <div class="main">
            <van-tabs v-model="active" @change="onChange">
                <van-tab :title="v.menuName" v-for="(v,i) in menu" :key="i">
                    <div v-if="menucurr && url">
                        <ZipaiList :url="url" v-if="menucurr.menuType == 'culture_zipai'"/>
                        <Culture :url="url" :tag="v.menuName" v-else-if="menucurr.menuType == 'culture_news'"/>
                    </div>
                </van-tab>
            </van-tabs>
        </div>
    </div>
</template>
<script>
import Navbar from "_c/navbar/navbar.vue";
import Culture from "./list/culture.vue";
import ZipaiList from "./list/zipai.vue";
export default {
    name: "Page",
    components: {
        Navbar,
        Culture,
        ZipaiList
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
                .get(this.api.county.base + this.api.county.site_menus, {
                    siteId: this.$store.state.county_id,
                    menuId: 2
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