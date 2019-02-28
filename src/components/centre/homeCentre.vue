<template>
    <div class="homeCenter">
         <!-- 背景 -->
         <div class="homeList">
         </div>
         <div class="region">
             <div class="regionLeft"><span>选择地区</span><van-icon name="arrow-down" /></div>
             <div><van-icon name="location" /><span>武汉江夏</span></div>
             <div class="cloce">关注</div>
         </div>
         <h2>湖北省咸宁市崇阳县张氏联谊会</h2>

         <!-- 轮播图 -->
        <van-swipe :autoplay="3000" indicator-color="white">
            <van-swipe-item>1</van-swipe-item>
            <van-swipe-item>2</van-swipe-item>
            <van-swipe-item>3</van-swipe-item>
            <van-swipe-item>4</van-swipe-item>
        </van-swipe>

        <div class="center-box">
            <div class="notice">
                <div class="noticeSogin">
                    <div>顶 置<span>公</span> 告</div>
                    <h4>崇阳联谊会在某地召开崇阳联谊会在某地召开</h4>
                </div>
                <p>所谓图腾，就是原始时代的人们把某种动物，植物或非生物等当作自己的亲属，祖先或者保护神。相信他们有一种超自然力，会保护自己，并且还可以获得他们的力量和技能。在原始人的眼里，图腾实际是一个被人格化崇拜的对象</p>
            </div>
            <div class="fellowship">
                <h3>联谊概况</h3>
                
                <div class="home-swiper">
                    <img src="@/assets/images/goose.png" alt="">
                </div>

                <div class="cpf">
                    <h2>公益基金</h2>
                    <span>总金额</span>
                    <img src="@/assets/images/solid.png" alt="">

                    <div class="cpfBottom">
                        <span class="bottomRight">￥888888.58</span>
                        <span class="sss">专注</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header/Header.vue'
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
        Header
    },
};
</script>

<style scoped lang="less">
    ::-webkit-scrollbar {
    display: none;/*隐藏滚轮*/
    }
    img {
        vertical-align:top
    }
    .homeCenter {
        flex: 1;
        width: 100%;
        padding:  0 0.2rem 5.3rem 0.2rem;
        box-sizing: border-box;
        // background-color: pink;
        // position: relative;
        position: absolute;
        top: 1.85rem;
        bottom: 0.97rem;
        color: #ffffff;
        text-align: center;
            .center-box {
                width: 100%;
                height: 100%;
                overflow: hidden;
                overflow-y: auto;
                overflow-x: hidden; 
            }
            .homeList {
                height: 3.9rem;
                width: 100%;
                background-color: #D2211B;
                position: absolute;
                top: -1.85rem;
                left: 0;
                z-index: -1;
            }
            .region {
                display: flex;
                font-size: 0.26rem;
                justify-content: space-between;
                    .cloce {
                        width: 0.9rem;
                        height: 0.4rem;
                        border: 0.01rem solid  #ffffff;
                        border-radius: 0.5rem;
                    }
                    /deep/.van-icon {
                        top: 0.06rem;
                    }
                    span {
                        margin:  0 0.05rem;
                    }
            }
            h2 {
                font-size: 0.32rem;
            }
            /deep/.van-swipe {
                height: 4rem;
                border-radius: 0.2rem;
                .van-swipe-item {
                    background-color: pink;
                }

                 // 标记点父元素
                .van-swipe__indicators {
                    // 标记点子元素
                    .van-swipe__indicator{
                        width: 0.12rem;
                        height: 0.12rem;
                        background-color: #999999 !important;
                    }
                    .van-swipe__indicator--active {
                        opacity: none;
                        background-color: #D2211B !important;
                    }
                    .van-swipe__indicator {
                        opacity: none;
                    }
                    
                }
            }
            .notice {
                width: 7.1rem;
                height: 3.92rem;
                border-radius: 0.2rem;
                margin-top: 0.2rem;
                margin-bottom: 0.35rem;
                padding: 0.2rem 0.35rem 0;
                box-sizing: border-box;
                box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.3);
                    .noticeSogin {
                        height: 1.1rem;
                        width: 100%;
                        // display: flex;
                        font-size: 0.32rem;
                        text-align: left;
                        margin-bottom: 0.4rem;
                            div {
                                height: 1.1rem;
                                width: 1.1rem;
                                border-right: 0.01rem solid #ccc;
                                padding: 0 0.06rem;
                                box-sizing: border-box;
                                letter-spacing: 0.01rem;
                                float: left;
                                margin-right: 0.3rem;
                                color: #010101;
                                font-weight: bolder;
                                    span {
                                        color: #D2211B;
                                    }
                            }
                            h4 {
                                display: inline;
                                color: #333333;
                            }
                           
                    }
                    p {
                        color: #767676;
                        font-size: 0.26rem;
                        margin: 0;
                        text-align: left;
                    }
            }
            .fellowship {
                color: #010101;
                font-size: 0.32rem;
                    .home-swiper {
                       
                       img {
                           width: 3.95rem;
                           height: 2.35rem;
                       }
                    }
                    .cpf {
                        width: 7.1rem;
                        height: 2.5rem;
                        border-radius: 0.2rem;
                        background-size: cover;
                        background-image:url(../../assets/images/cpf.png);
                        background-repeat:no-repeat;
                        background-position:center;
                        position: relative;
                        padding: 0.4rem 0.7rem 0;
                        box-sizing: border-box;
                        color: #fff;
                        text-align: left;

                            h2 {
                                font-size: 0.32rem;
                                margin: 0;
                            }
                            span {
                                font-size: 0.22rem;
                            }
                            img {
                                width: 0.9rem;
                                height: 0.9rem;
                                position: absolute;
                                right: 0.72rem;
                                top: 0.52rem;
                            }
                            .cpfBottom {
                                margin-top: 0.2rem;
                                .bottomRight {
                                    font-size: 0.45rem;
                                }
                                .sss {
                                    position: absolute;
                                    right: 0.9rem;
                                    bottom: 0.52rem;
                                }
                            }
                    }
            }
            
    }
</style>
