<template>
    <div>
        <Title/>
        <Slider :isLoading="isLoading"/>
        <TopRss/>
        <Fellowship :isLoading="isLoading"/>
        <Finance :isLoading="isLoading"/>
        <Flgure :isLoading="isLoading"/>
        <Menus/>
        <Newslist :isLoading="isLoading" :url="api.county.base + $store.state.apiList['index_family_record1'].apiUrl"/>
        <Newsuser :isLoading="isLoading" :url="api.county.base + $store.state.apiList['index_person_blog'].apiUrl"/>
    </div>
</template>

<script>
import Navbar from "_c/navbar/nav_county.vue";
import Tabbar from "_c/tabbar/tabbar.vue";
import Slider from "./slider.vue";
import Title from "./title.vue";
import Menus from "./menus.vue";
import Notice from "./notice.vue";
import Fellowship from "./fellowship.vue";
import TopRss from "../list/toprss.vue";
import Finance from "./finance.vue";
import Flgure from "./flgure.vue";
import Newslist from "./newslist.vue";
import Newsuser from "./newsuser.vue";
export default {
    name: "Home",
    components: {
        Navbar,
        Tabbar,
        Slider,
        Title,
        Menus,
        Notice,
        Fellowship,
        Finance,
        TopRss,
        Flgure,
        Newslist,
        Newsuser
    },
    data() {
        return {
            isLoading: false
        };
    },
    computed: {},
    mounted: function() {},
    methods: {
        onRefresh() {
            setTimeout(() => {
                this.$toast("刷新成功");
                this.isLoading = false;
            }, 500);
        }
    }
};
</script>