<template>
    <div>
        <div class="home">
            <!-- 背景 -->
            <div class="bgc">
            </div>
        <div class="homeHeader">
            <!-- 搜索 -->
            <div class="searchDiv">
                    <img class="searImg" src="@/assets/images/logo@2x.png" alt="">

                    <div class="inputDiv">
                        <img src="@/assets/images/search.png" alt="">
                        <input type="text" placeholder="炎黄统谱网"  >
                    </div>
            </div>
            <!-- 滑动 -->
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
                <div class="region">
                    <div class="regionLeft"><span>选择地区</span><van-icon name="arrow-down" /></div>
                    <div><van-icon name="location" /><span>武汉江夏</span></div>
                    <div class="cloce">关注</div>
                </div>
        </div>
        <!-- 内容滑动区域 -->
        <div class="content">
            <!-- 背景 -->
            <div class="top-bgc"></div>
            <div class="contentTop">
                    <h2>湖北省咸宁市崇阳县张氏联谊会</h2>
                    <!-- 轮播图 -->
                    <van-swipe :autoplay="3000" indicator-color="white">
                        <van-swipe-item v-for="item in this.$store.state.lunbo" :key="item.id">
                            <div class="div1" :style="api.imgBG(item.picUrl)"></div>
                        </van-swipe-item>
                    </van-swipe>
                    <!-- 置顶公告 -->
                    <div class="notice">
                        <div class="noticeSogin">
                            <div>顶 置<span>公</span> 告</div>
                            <h4>崇阳联谊会在某地召开崇阳联谊会在某地召开</h4>
                            <!-- <h4>{{brief.data.siteName}}</h4> -->
                        </div>
                        <p>所谓图腾，就是原始时代的人们把某种动物，植物或非生物等当作自己的亲属，祖先或者保护神。相信他们有一种超自然力，会保护自己，并且还可以获得他们的力量和技能。在原始人的眼里，图腾实际是一个被人格化崇拜的对象</p>
                        <!-- <p>{{brief.data.description}}</p> -->
                    </div>
                    <!-- 联谊情况 -->
                    <router-link to="/announcement" tag="div" class="fellowship" >
                        <h4>联谊概况</h4>
                        <img src="@/assets/images/goose.png" alt="">
                    </router-link>
                    <div class="count">
                        <router-link  to="/personnel" tag="div" class="cpf" >
                            <h2>公益基金</h2>
                            <span>总金额</span>
                            <img src="@/assets/images/solid.png" alt="">

                            <div class="cpfBottom">
                                <span class="bottomRight">￥{{this.$store.state.fund.remain}}</span>
                                <span class="sss">捐助</span>
                            </div>
                        </router-link>
                        <div class="flgure">
                            <div class="flgureText">
                                <h5>刚刚捐款完亲</h5>
                                <div class="textLeft">
                                    <span>共158人</span>
                                    <van-icon name="arrow" />
                                    <van-icon name="arrow" />
                                </div>
                            </div>
                            <ul class="flgureUl">
                                <li v-for="item in this.$store. state.celebrity.records" :key="item.id">
                                    <!-- <img class="portrait" src="@/assets/images/QQ@2x.png" alt=""> -->
                                    <div class="div1 portrait" :style="api.imgBG(item.allUserLogin.picSrc)"> </div>
                                    <h5>{{item.allUserLogin.nickName}}</h5>
                                    <span>捐助 {{item.allUserLogin.role}}元</span>
                                    <div class="bunText">
                                        <span>+关注</span>
                                        <img src="@/assets/images/praise.png" alt="">
                                        <span>{{item.allUserLogin.status}}</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
            </div>
            <div class="contentBottom">
                <div class="dynamic">
                    <h3>家族<b>动</b>态</h3>
                    <span>2018年11月9日星期五</span> 
                </div>
                    <div class="centerDiv">
                        <div class="centerText">
                            <h5>中国家谱博物馆落户进-2017年亮相</h5>
                            <div class="axisCentre">
                                <span class="xu">序</span>
                                <span>30条评论</span>
                                <span>652124浏览</span>
                            </div>
                            
                        </div>
                        <div class="centerImg">
                            34
                        </div>
                    </div>
                    <div class="slideshow">
                    <ul class="swipeUl">
                        <router-link to="/announcement" tag="li">
                                <img src="@/assets/images/notice.png" alt="">
                                <p>家族公告</p>
                        </router-link>
                        <router-link  to="/HomeList" tag="li">
                                <img src="@/assets/images/dynamic.png" alt="">
                                <p>家族动态</p>
                        </router-link>
                        <router-link to="/personnel" tag="li">
                                <img src="@/assets/images/gold.png" alt="">
                                <p>慈善公积金</p>
                        </router-link>
                        <router-link to="/culture" tag="li">
                                <img src="@/assets/images/book.png" alt="">
                                <p>家族文化</p>
                        </router-link>
                        
                    </ul>
                    <ul class="swipeUl ui-bottom">
                        <router-link to="/" tag="li">
                                <img src="@/assets/images/family.png" alt="">
                                <p>家族产业</p>
                        </router-link>
                        
                        <router-link to="/branch" tag="li">
                                <img src="@/assets/images/person.png" alt="">
                                <p>家族名人</p>
                        </router-link>
                            <router-link to="/branch" tag="li">
                                <img src="@/assets/images/branch.png" alt="">
                                <p>家族分支</p>
                        </router-link>
                        <router-link to="/" tag="li">
                                <img src="@/assets/images/shi@2x.png" alt="">
                                <p>家族视频</p>
                        </router-link>
                         <router-link to="/" tag="li">
                                <img src="@/assets/images/help.png" alt="">
                                <p>家族视频</p>
                        </router-link>
                        
                    </ul>
                    </div>
                    <div class="centerDiv" v-for="item in this.$store.state.dynamic.records" :key="item.id">
                        <div class="centerText">
                            <h5>{{item.newsTitle}}</h5>
                            <div class="axisCentre">
                                <span class="xu">序</span>
                                <span>{{item.status}}条评论</span>
                                <span>{{item.visitNum}}浏览</span>
                            </div>
                            
                        </div>
                        <div class="centerImg">
                            34
                        </div>
                    </div>
                    
                    <div class="titleCenter">
                    <div class="titleTop">
                        <div class="centerLeft">
                        <div class="img">头像</div>
                        <div class="celebrity">
                            <h5>周星</h5>
                                <span>慈善名人</span>
                                <span>125万粉丝关注</span>
                        </div>
                    </div>
                    <div class="pillar">+关注</div>
                    </div>
                    <p>周星是中国慈善名人帮第一人，是 《中国慈善家》 杂志年度重量级榜单人物之一。</p>
                    </div>
                    <div class="videoBox">
                        <h4>中国家谱博物馆落户进-2017年亮相</h4>
                        <div class="videoCenter"></div>
                        <a href="#">视频</a>
                        <span>30条评论</span>
                        <span>652次播放</span>
                        <span>2018-10-11</span>
                    </div>
                    <div class="titleCenter">
                    <div class="titleTop">
                        <div class="centerLeft">
                        <div class="img">头像</div>
                        <div class="celebrity">
                            <h5>周星</h5>
                                <span>慈善名人</span>
                                <span>125万粉丝关注</span>
                        </div>
                    </div>
                    <div class="gz">
                        <div>分支后裔</div>
                        <div>千支同源</div>
                    </div>
                    </div>
                    <p>周星是中国慈善名人帮第一人，是 《中国慈善家》 杂志年度重量级榜单人物之一。</p>
                    </div>
            </div>
            </div>
            </div>
    
        <Footer></Footer>
    </div>
</template>

<script>
import Footer from '@/components/footer/Footer.vue'
export default {
  props: {

    },
    data() {
        return {
            active: 1,
            bulletin:{}  // 公告栏   
        };
    },
    computed: {

    },
    created() {
        this.$store.dispatch('increment')
        this.home()
    },
    mounted() {
        
    },
    watch: {

    },
    methods: {
        
       home() { 

        //    console.log(this.$store.state.lunbo.picUrl)
        //    this.lunbo = this.$store.state.lunbo // 轮播图
        //    this.dynamic = this.$store. state.celebrity // 家族动态

       }

    },
    components: {

    }
}
</script>

<style scoped lang="less">
.home {
    .bgc {
        height: 2.4rem;
        width: 100%;
        background-color: #D2211B;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 99;
    }
    // 轮播图
    .div1 {
        height: 100%;
        height: 100%;
        background: no-repeat center / cover;
    }
    .homeHeader {
        width: 100%;
        position: fixed;
        top: 0;
        z-index: 99;
        .searchDiv {
            width: 100%;
            height: 0.6rem;
            padding: 0 0.2rem;
            box-sizing: border-box;
            overflow: hidden;
            display: flex;
                .searImg {
                    width: 0.56rem;
                    height: 0.56rem;
                }
                .inputDiv {
                    margin-left: 0.2rem;
                    position: relative;
                    img {
                        position: absolute;
                        top: 0.15rem;
                        left:  2.15rem;
                        width: 0.33rem;
                        height: 0.33rem;
                    }
                    input {
                        width: 6.32rem;
                        height: 0.6rem;
                        border: none;
                        border-radius: 0.2rem;
                        background-color:rgba(0, 52, 52, 0.1);
                        text-align: center;
                        font-size: 0.24rem;
                        position: absolute;
                        color: #fff;
                    }
                }
                
                input::-webkit-input-placeholder {
                /* placeholder颜色  */
                color: white;

            }
                
        }
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
            /deep/.van-tabs__line {
                background: none;
            }
            // 父元素
            /deep/.van-tabs__nav--line {
            background: none;   
            }
            // 每一个内容的标签
            /deep/.van-tab {
                background: none;
                font-size: 0.32rem;
                color: white;
            }
            /deep/.van-hairline--top-bottom::after {
                border: none;
            }
            /deep/.van-tab--active {
                color: #FBBB0E !important;
                
            }
            /deep/.van-icon {
                left: 6.7rem;
                top: -0.45rem;
                color: white;
            } 
        }
        .region {
            display: flex;
            font-size: 0.26rem;
            padding: 0 0.2rem;
            box-sizing: border-box;
            color: #fff;
            justify-content: space-between;
                .cloce {
                    width: 0.9rem;
                    height: 0.4rem;
                    border: 0.01rem solid  #ffffff;
                    border-radius: 0.5rem;
                    text-align: center;
                    line-height: 0.4rem;
                }
                /deep/.van-icon {
                    top: 0.06rem;
                }
                span {
                    margin:  0 0.05rem;
                }
            }

    }
    .content {
        padding-top: 2.4rem;
        padding-bottom: 1.2rem;
        font-size: 0.24rem;
        overflow: hidden;
        overflow-y: auto;
        overflow-x: hidden;
             .top-bgc {
                    height: 1.8rem;
                    width: 100%;
                    background-color: #D2211B;
                    position: absolute;
                    z-index: -1;
                }
            .contentTop {
                padding: 0 0.2rem;
                box-sizing: border-box;
                text-align: center;
                 h2 {
                    font-size: 0.32rem;
                    color: #fff;
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
                    font-size: 0.32rem;
                    text-align: center;
                        img {
                            width: 3.95rem;
                            height: 2.35rem;
                        }
                }
                .count {
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
                                    right: 0.96rem;
                                    bottom: 0.52rem;
                                }
                            }
                    }
                     .flgure {
                        height: 3.8rem;
                        width: 100%;
                        box-sizing: border-box;
                        margin-top: 0.55rem;
                        .flgureText {
                                display: flex;
                                position: relative;
                                    h5 {
                                    font-size: 0.32rem;
                                    margin: 0;
                                }
                                .textLeft {
                                    position: absolute;
                                    right: 0;
                                    top: 0.03rem;
                                        span {
                                            color: #ccc;
                                            margin-right: 0.2rem;
                                            letter-spacing:1px;
                                        }
                                        /deep/.van-icon {
                                            color: #767676;
                                            margin-left: -0.22rem;
                                        }
                                }
                        }
                        .flgureUl {
                            margin-top: 0.4rem;
                            display: flex;
                                    li {
                                        width: 33.33%;
                                        height: 3.1rem;
                                        margin-right: 0.1rem;
                                        text-align: center;
                                        padding-top: 0.25rem;
                                        color: #767676;
                                        box-sizing: border-box;
                                        box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.4);
                                            .portrait {
                                                width: 1rem;
                                                height: 1rem;
                                                border-radius: 50%;
                                                vertical-align:top;
                                                margin-left: 0.6rem;
                                            }
                                            h5 {
                                                margin: 0.2rem 0 0.3rem 0;
                                                font-size: 0.26rem;
                                                color: #333333;
                                            }
                                            .bunText {
                                                margin-top: 0.05rem;
                                                    img {
                                                        width: 0.31rem;
                                                        height: 0.31rem;
                                                        margin: 0.1rem 0.01rem -0.03rem 0.3rem;
                                                    }
                                            }
                                    }
                                    li:nth-child(3) {
                                            margin-right: 0;
                                        }
                        }
                    }
                }
            
            
            
            }
            .contentBottom {
                margin-top: 0.38rem;
                    .dynamic {
                        padding: 0 0.2rem;
                        display: flex;
                        text-align: center;
                        align-items: center;
                        h3 {
                            margin: 0 0.25rem 0 0;
                        }
                        b {
                            color: #D2211B;
                        }
                        span {
                            color: #666666;
                            font-size: 0.22rem;
                            margin-top: 0.05rem;
                        }
                    }
                     .centerDiv {
                        position: relative;
                        // height: 1.67rem;
                        padding: 0 0.2rem;
                        border-bottom: 0.01rem solid #DEDDDD;
                        display: flex;
                        margin-top: 0.25rem;
                            h5 {
                                margin: 0 0.2rem 0 0;
                                font-size: 0.32rem;
                            }
                            .centerText {
                                flex: 1;
                                .axisCentre {
                                    margin: 0.2rem 0 0.32rem 0;
                                        :nth-child(1) {
                                            display: inline-block;
                                            color: #D2211Bed;
                                            width: 0.9rem;
                                            height: 0.3rem;
                                            border: 0.01rem solid #D2211B;
                                            text-align: center;
                                            line-height: 0.3rem;
                                            border-radius: 0.05rem;
                                        }
                                        span {
                                            color: #666666;
                                            margin-right: 0.18rem;
                                        }
                                    }
                                }
                            .centerImg {
                                width: 2.3rem;
                                height: 1.44rem;
                                justify-content: flex-end ;
                                background: pink;
                            }
                            .centerHr {
                                width: 200%;
                                border: 0.01rem solid #ccc;
                                position: absolute;
                                left: -0.2rem;
                                bottom: 0;
                            }
                    } 
                    .slideshow {
                        padding: 0 0.2rem;
                        margin-top: 0.3rem;
                        box-sizing: border-box;
                            ul {
                                display: flex;
                                text-align: center;
                                margin-bottom: 0.3rem;
                                img {
                                    width: 0.88rem;
                                    height: 0.88rem;
                                }
                                li {
                                    width: 25%;
                                        p {
                                            margin: 0;
                                            font-weight: bolder;
                                        }
                                }
                            }
                    }
                     .centerLeft {
                        display: flex;
                            .img {
                                width: 1.36rem;
                                height: 1.36rem;
                                border-radius: 50%;
                                background-color: pink;
                                text-align: center;
                                line-height: 1.36rem;
                                color: #fff;
                            }
                            .celebrity {
                                display: flex;
                                flex-direction:  column; 
                                margin: 0 0 0 0.2rem;
                                h5 {
                                    font-size: 0.32rem;
                                    margin: 0.12rem 0 0.15rem 0;
                                }
                                span {
                                    font-size: 0.25rem;
                                    color: #B0B0B0;
                                }
                            }
                        
                    }
     
                    .titleCenter {
                        padding: 0 0.2rem;
                        position: relative;
                        margin: 0.38rem 0 0.26rem 0;
                        border-bottom: 0.01rem solid #DEDDDD;
                            .titleTop {
                                    display: flex;
                                    justify-content: space-between;
                                .rank {
                                    position: absolute;
                                    color: #0066FF;
                                    font-size: 0.26rem;
                                    font-weight: bolder;
                                    left: 2.5rem;
                                    top: 0.16rem;
                                }
                            }
                            p {
                                font-size: 0.24rem;
                                color: #333333;
                            }
                    }
                    .pillar {
                        width: 1.7rem;
                        height: 0.55rem;
                        background-color: #D2211B;
                        border-radius: 0.3rem;
                        font-size: 0.24rem;
                        color: #fff;
                        text-align: center;
                        line-height: 0.55rem;
                    }
                    .videoBox {
                        font-size: 0.2rem;
                        padding: 0 0.2rem; 
                        margin-top: 0.27rem;
                        border-bottom: 0.01rem solid #DEDDDD;
                            h4 {
                                font-size: 0.32rem;
                                font-weight: 500;
                                color: #333333;
                                margin: 0;
                            }
                            .videoCenter {
                                height: 3.55rem;
                                width: 100%;
                                margin-top: 0.25rem;
                                margin-bottom: 0.24rem;
                                background-color: pink;
                            }
                            a {
                                display: inline-block;
                                width: 0.52rem;
                                height: 0.3rem;
                                border: 0.01rem solid #0390FD;
                                color: #0390FD;
                                text-align: center;
                                border-radius: 0.05rem;
                                line-height: 0.3rem;
                                margin-bottom: 0.2rem;
                            }
                            span {
                                color: #A1A1A1;
                                margin-left: 0.17rem;
                            }
                    }
                    .gz {
                        width: 2.7rem;
                        height: 0.55rem;
                        font-size: 0.24rem;
                        color: #D2211B;
                        text-align: center;
                        line-height: 0.55rem;
                        display: flex;
                        justify-content: space-between;
                            div {
                                width: 1.24rem;
                                height: 100%;
                                border-radius: 0.3rem;
                                border: 0.01rem solid #D2211B;
                            }
                    }
            }
           
    }
    .ui-bottom {
        li {
            width: 20%;
        }
    }
 
}
</style>

