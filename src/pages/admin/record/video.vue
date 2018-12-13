<template>
    <div>
        <Videolist :url="url" v-if="url.length" :menu="menucurr.menuType" :type="menucurr.showId"/>
    </div>
</template>

<script>
import Videolist from "./c/video-list";
export default {
    components: {
        Videolist
    },
    data() {
        return {
            menu: [],
            menucurr: {},
            url: ""
        };
    },
    computed: {
        admin() {
            return this.$store.state.admin;
        }
    },
    mounted() {
        this.getMenu();
    },
    methods: {
        getMenu() {
            this.api
                .get(this.api.adminUrl("site_menus", this.admin.step), {
                    siteId: this.admin.id,
                    menuId: 6
                })
                .then(res => {
                    this.menu = res.data;
                    this.chgMenu(2);
                });
        },
        chgMenu(e) {
            this.menucurr = this.menu[e];
            this.url = this.api.adminUrl(
                this.menucurr.apiAdminUrl,
                this.admin.step
            );
        }
    }
};
</script>