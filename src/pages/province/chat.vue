<template>
    <div class="pages">
        <div class="navbar">
            <van-nav-bar title="聊天" fixed></van-nav-bar>
        </div>
        <Tabbar :active="1"></Tabbar>
        <div class="main">
            <None icon="commandfill" text="暂未开放"/>
        </div>
    </div>
</template>
<script>
import Tabbar from "_c/tabbar/tabbar.vue";
export default {
    name: "Page",
    components: {
        Tabbar
    },
    data() {
        return {};
    },
    mounted: function() {},
    methods: {}
};
</script>
<style lang="less" scoped>
.main {
    padding-top: 2rem;
    text-align: center;
    .tips {
        font-size: 0.32rem;
        color: #999;
        line-height: 3;
    }
}
</style>
