<template>
    <div>
        <div class="tabs">
            <Tabs @on-click="chgMenu">
                <TabPane :label="v.menuName" :name="i+''" v-for="(v,i) in menu" :key="i"></TabPane>
            </Tabs>
        </div>
        <Zipailist :url="url" v-if="url.length && menucurr.menuType == 'culture_zipai'" :menu="menucurr.menuType" :type="menucurr.showId"/>
        <Newslist :url="url" v-if="url.length && menucurr.menuType == 'culture_news'" :menu="menucurr.menuType" :type="menucurr.showId"/>
    </div>
</template>

<script>
import Zipailist from "./c/zipai-list";
import Newslist from "./c/news-list";
export default {
    components: {
        Zipailist,
        Newslist
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
                    menuId: 2
                })
                .then(res => {
                    this.menu = res.data;
                    this.chgMenu(0);
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