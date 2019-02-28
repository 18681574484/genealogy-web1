<template>
    <div>
        <Title/>
        <Slider :isLoading="isLoading"/>
        <TopRss/>
        <Finance :isLoading="isLoading"/>
        <Flgure :isLoading="isLoading"/>
        <Menus/>
        <Newslist :isLoading="isLoading"/>
    </div>
</template>

<script>
import Navbar from "_c/navbar/nav_county.vue";
import Tabbar from "_c/tabbar/tabbar.vue";
import Slider from "./slider.vue";
import Title from "./title.vue";
import Menus from "./menus.vue";
import Notice from "./notice.vue";
import TopRss from "../list/toprss.vue";
import Finance from "./finance.vue";
import Flgure from "./flgure.vue";
import Newslist from "./newslist.vue";
export default {
    name: "Home",
    components: {
        Navbar,
        Tabbar,
        Slider,
        Title,
        Menus,
        Notice,
        Finance,
        TopRss,
        Flgure,
        Newslist,
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