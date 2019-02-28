<template>
    <div class="headerBox">
        <!-- 背景 -->
        <div class="boxBgc"></div>
        <!-- 搜索 -->
        <div class="searchDiv">
            <img class="searImg" src="@/assets/images/logo@2x.png" alt="">

            <div class="inputDiv">
                <img src="@/assets/images/search.png" alt="">
                <input type="text" placeholder="炎黄统谱网"  >
            </div>
        </div>
        <!-- 导入左右滑动模块 -->
        <navigation></navigation>
        <!-- 导入轮播图模块 -->
        <swipe></swipe>
    </div>
</template>

<script>
import navigation from '@/components/Header/navigation.vue'
import swipe from '@/components/swipe/swipe.vue'
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
        navigation,
        swipe
    },
};
</script>

<style scoped lang="less">
.headerBox {
    margin-top: 0.1rem;
    height: 3.9rem;
    width: 100%;
    position: fixed;
    z-index: 9999;
    top: 0;
        .boxBgc {
            height: 2.85rem;
            width: 100%;
            position: fixed;
            top: 0;
            background-color: #D2211B;
            z-index: -1;
        }
        .searchDiv {
            height: 0.6rem;
            width: 100%;
            padding:  0 0.2rem;
            box-sizing: border-box;
            display: flex;
                img {
                    width: 0.56rem;
                    height: 0.56rem;
                    margin-right: 0.2rem;
                }
                .inputDiv {
                    width: 6.3rem;
                    height: 0.6rem;
                    font-size: 0.26rem;
                    position: relative;
                        img {
                            position: absolute;
                            top: 0.19rem;
                            left: 2rem;
                            width: 0.3rem;
                            height: 0.3rem;
                        }
                        input {
                            width: 100%;
                            height: 100%;
                            border: none;
                            border-radius: 0.2rem;
                            background-color:rgba(0, 52, 52, 0.1);
                            text-align: center;
                            color: white;
                        }
                                        
                        input::-webkit-input-placeholder {
                        /* placeholder颜色  */
                        color: white;

                    }
                }
        }
}
</style>
