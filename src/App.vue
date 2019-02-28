<template>
    <div id="app">
        <!-- 头部固定搜索组件 -->
        <!-- <HeaderTake></HeaderTake> -->
        <router-view></router-view>
        <Footer></Footer>
    </div>
</template>

<script>
import HeaderTake from "@/components/Header/HeaderTake.vue";
import Footer from "@/components/footer/Footer.vue";
export default {
    name: "App",
    components: {
        Footer,
        HeaderTake
    }
};
</script>

<style scoped lang="less">
#app {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    width: 100%;
    height: 100%;
}
</style>
