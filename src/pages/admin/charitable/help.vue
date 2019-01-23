<template>
    <div>
        <Charitable :url="url" v-if="url.length" :menu="menucurr.menuType" :type="menucurr.showId"/>
    </div>
</template>

<script>
import Charitable from "./c/charitable-help";
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
                    if (res.code == 200) {
                        this.menu = res.data;
                        this.chgMenu(3);
                    } else {
                    }
                });
        },
        chgMenu(e) {
            this.menucurr = this.menu[e];
            if (!this.menucurr) {
                this.$Modal.info({
                    title: "提示",
                    content: "发生数据错误，请联系管理员"
                });
                return;
            }
            this.url = this.api.adminUrl(
                this.menucurr.apiAdminUrl,
                this.admin.step
            );
            console.log(this.url)
        }
    }
};
</script>