<template>
    <div class="main">
        <div class="adlinks">
            <img src="./img/charity.png">
        </div>
        <div class="inner">
            <div class="h">
                <div class="cn">慈善公益</div>
                <Divider class="en">Charitable</Divider>
            </div>
            <div class="menus">
                <span class="menu" v-for="(v,i) in menu" :key="i" :class="v.orderIndex == menucurr.orderIndex ? 'curr':''" v-html="v.menuName" @click="chgMenu(i)"></span>
            </div>
            <div class="grid" style="minHeight:450px;">
                <div v-if="menucurr && url">
                    <CharityList :url="url" v-if="menucurr.menuType == 'charity_news'"/>
                    <CharityUser :url="url" v-else-if="menucurr.menuType == 'charity_person'"/>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import CharityList from "./list/charity-list";
import CharityUser from "./list/charity-user";
export default {
    name: "Charity",
    components: {
        CharityList,
        CharityUser,
    },
    computed: {
        apiList() {
            return this.$store.state.province.apiList;
        }
    },
    data() {
        return {
            menu: [],
            menucurr: {},
            url: "",
            ct: 0,
        };
    },
    mounted: function() {
        if (this.$route.query.ct) {
            this.ct = this.$route.query.ct;
        }
        this.getNav();
    },
    methods: {
        getNav() {
            this.api
                .get(this.api.province.base + this.api.province.site_menus, {
                    siteId: this.$store.state.province.id,
                    menuId: 3
                })
                .then(res => {
                    if (res.code == 200) {
                        this.menu = res.data;
                        this.chgMenu(this.ct);
                    }
                });
        },
        chgMenu(e) {
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
<style lang="scss" scoped>
@import "@/assets/css/var.scss";
.h {
    text-align: center;
    padding: 32px 0;
    .cn {
        font-size: 24px;
    }
    .en {
        font-weight: 300;
    }
}
.menus {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 0 16px;
    .menu {
        padding: 0 16px;
        margin: 0 4px;
        cursor: pointer;
        line-height: 32px;
        &.curr,
        &:hover {
            background: $color;
            color: #fff;
            border-radius: 16px;
        }
    }
}
</style>
