<template>
    <div class="pages">
        <Navbar title="家族视频"></Navbar>
        <div class="main">
            <Videolist :url="url" tag="家族视频"/>
        </div>
    </div>
</template>
<script> 
import Navbar from "_c/navbar/navbar.vue";
import Videolist from "./list/video-list.vue";
import Videouser from "./list/video-user.vue";
export default {
    name: "Page",
    components: {
        Navbar,
        Videolist,
        Videouser
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
                    ? this.api.province.base + this.menucurr.apiUrl
                    : "";
            }, 300);
        }
    }
};
</script>