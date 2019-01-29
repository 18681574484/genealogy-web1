<template>
    <div class="list">
        <div class="h">
            <span class="tit" v-for="(v,i) in menu" :key="i" :class="v.orderIndex == menucurr.orderIndex ? 'curr':''" @click="chgMenu(i)" v-show="v.menuType == 'family_record_file'">{{v.menuName}}</span>
        </div>
        <div class="b">
            <VideoCard :url="url" v-if="menucurr.menuName=='家族视频'"/>
        </div>
    </div>
</template>
<script>
import VideoCard from "./video-list.vue";
export default {
    components: {
        VideoCard
    },
    data() {
        return {
            menu: [],
            menucurr: {},
            url: "",
            list: []
        };
    },
    mounted: function() {
        this.getNav();
    },
    methods: {
        getNav() {
            this.api
                .get(this.api.province.base + this.api.province.site_menus, {
                    siteId: this.$store.state.province.id,
                    menuId: 6
                })
                .then(res => {
                    if (res.code == 200) {
                        this.menu = res.data;
                        this.chgMenu(2);
                    }
                });
        },
        chgMenu(e) {
            this.url = [];
            this.menucurr = this.menu[e];
            this.url = this.api.province.base + this.menucurr.apiUrl;
        }
    }
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/var.scss";
.list {
    padding: 16px 0;
    min-height:450px;
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
