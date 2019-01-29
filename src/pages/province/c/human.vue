<template>
    <div class="list">
        <div class="h">
            <span class="tit" v-for="(v,i) in menu" :key="i" :class="v.orderIndex == menucurr.orderIndex ? 'curr' : ''" @click="chgMenu(i)">{{v.menuName}}</span>
        </div>
        <div class="b"></div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            menu: [],
            menucurr: {},
            url: "",
            list: []
        };
    },
    computed: {
        apiList() {
            return this.$store.state.province.apiList;
        }
    },
    mounted: function() {
        this.getNav();
    },
    methods: {
        getNav() {
            this.api
                .get(this.api.province.base + this.api.province.site_menus, {
                    siteId: this.$store.state.province.id,
                    menuId: 7
                })
                .then(res => {
                    if (res.code == 200) {
                        this.menu = res.data;
                        this.chgMenu(0);
                    }
                });
        },
        chgMenu(e) {
            this.url = "";
            this.menucurr = this.menu[e];
            this.url = this.api.province.base + this.menucurr.apiUrl;
            this.getList();
        },
        getList() {
            this.api.get(this.url, {}).then(res => {
                if (res.code == 200) {
                    this.list = res.data.records;
                }
            });
        }
    }
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/var.scss";

.list {
    .h {
        height: 48px;
        line-height: 48px;
        .tit {
            font-size: 14px;
            padding: 8px 16px;
            border-radius: 4px;
            cursor: pointer;
            &.curr {
                background: $color;
                color: #fff;
            }
        }
    }
}
</style>