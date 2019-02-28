<template>
    <div class="navigation">
        <van-tabs v-model="active">
            <van-tab title="关注"></van-tab>
            <van-tab title="全国张氏"></van-tab>
            <van-tab title="省级张氏"></van-tab>
            <van-tab title="崇阳张氏"></van-tab>
            <van-tab title="标签 1"> </van-tab>
            <van-tab title="标签 2"> </van-tab>
            <van-tab title="标签 3"> </van-tab>
            <van-tab title="标签 4"> </van-tab>
        </van-tabs>
        <van-icon name="wap-nav" />
        
    </div>
</template>

<script>
export default {
    props: {

    },
    data() {
        return {
            active:1
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

    },
};
</script>

<style  lang="less" >
    .navigation {
        margin-top: 0.38rem;
        position: relative;
        overflow: hidden;
        height: 0.88rem;
        width: 100%;
        font-size: 0.32rem;
        padding: 0 0.2rem;
        box-sizing: border-box;
        // 下划线元素
        .van-tabs__line {
            background: none;
        }
        // 父元素
        .van-tabs__nav--line {
          background: none;   
        }
        // 每一个内容的标签
        .van-tab {
            background: none;
            font-size: 0.32rem;
            color: white;
        }
        .van-hairline--top-bottom::after {
            border: none;
        }
        .van-tab--active {
            color: #FBBB0E !important;
            
        }
        .van-icon {
            left: 6.7rem;
            top: -0.45rem;
            color: white;
        } 
    }
</style>
