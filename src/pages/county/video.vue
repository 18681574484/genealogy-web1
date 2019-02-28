<template>
    <div class="pages">
        <Tabbar :active="3"></Tabbar>
        <div class="main">
            <Videouser :url="url" tag="个人视频"/>
        </div>
    </div>
</template>
<script>
import Tabbar from "_c/tabbar/tabbar.vue";
import Videolist from "./list/video-list.vue";
import Videouser from "./list/video-user.vue";
export default {
    name: "Page",
    components: {
        Tabbar,
        Videolist,
        Videouser
    },
    data() {
        return {
            active: 1,
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
                    menuId: 6
                })
                .then(res => {
                    if (res.code == 200) {
                        let list = res.data;
                        this.menu = list.filter((v, i) => {
                            return i > 1;
                        });
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