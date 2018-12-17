<template>
    <div>
        <Charitable :url="url" v-if="url.length" :menu="menucurr.menuType" :type="menucurr.showId"/>
    </div>
</template>

<script>
import Charitable from "./c/charitable-out";
export default {
    components: {
        Charitable
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
                    menuId: 3
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