<template>
    <div class="pages">
        <Navbar title="家族头条"></Navbar>
        <div class="main">
            <TopNews :url="url" v-if="url"/>
        </div>
    </div>
</template>

<script>
import Navbar from "_c/navbar/navbar.vue";
import TopNews from "./list/topnews.vue";
export default {
    name: "Page",
    components: {
        Navbar,
        TopNews
    },
    data() {
        return {
            active: 4,
            menu: [],
            menucurr: {},
            url: ""
        };
    },
    mounted: function() {
        this.getNav();
    },
    methods: {
        getNav() {
            this.api
                .get(this.api.province.base + this.api.province.site_menus, {
                    siteId: this.$store.state.province_id,
                    menuId: 6
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