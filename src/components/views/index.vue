<template>
    <div>
        <!-- 头部组件 -->
        <HeaderTake></HeaderTake>
        <!-- 中间组件 -->
        <router-view></router-view>
        <!-- 底部组件 -->
        <!-- <Footer></Footer> -->
    </div>
</template>

<script>
import HeaderTake from '@/components/Header/HeaderTake.vue'
import Footer from '@/components/footer/Footer.vue'


export default {
    props: {

    },
    data() {
        return {

        };
    },
    computed: {

    },
    created() {

    },
    mounted() {

    },
    watch: {

    },
    methods: {

    },
    components: {
      HeaderTake,
      Footer
    },
};
</script>

<style scoped lang="less">

</style>
