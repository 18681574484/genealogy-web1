<template>
    <div id="appList">
        <div class="centre">
         <div class="centreDiv">
            <span class="newest">最新</span>
            <h5>中国家谱博物馆落户进-2017年度亮相</h5>
            <p>
                法定防守打法发的萨芬萨芬撒十大萨芬撒发的反倒是手法都是是东方时尚发颠倒是非大师傅暗室逢灯法定防守打法发的萨芬萨芬撒十大萨芬撒发的反倒是手法都是是东方时尚发
            </p>
            <div class="centreImg">
                <div class="imgDiv">1</div>
                <div class="imgDiv">2</div>
                <div class="imgDiv">3</div>
            </div>
             <div class="axisCentre">
                 <span>个人产业</span>
                 <van-icon name="location" />
                 <p>湖北省大鹏村腾睿大厦</p>
                 <div class="centreSolid"></div>
             </div>
        </div>
        <div class="centerDiv">
            <div class="centerText">
                <h5>中国家谱博物馆落户进-2017年亮相</h5>
                 <div class="axisCentre">
                 <span>个人产业</span>
                 <van-icon name="location" />
                 <p>湖北省大鹏村腾睿大厦</p>
                 <div class="centreSolid"></div>
             </div>
                
            </div>
            <div class="centerImg">
                34
            </div>
        </div>
        <div class="centerDiv">
            <div class="centerText">
                <h5>中国家谱博物馆落户进-2017年亮相</h5>
                 <div class="axisCentre">
                 <span>个人产业</span>
                 <van-icon name="location" />
                 <p>湖北省大鹏村腾睿大厦</p>
                 <div class="centreSolid"></div>
             </div>
                
            </div>
            <div class="centerImg">
                34
            </div>
        </div>
        <div class="centerDiv">
                <div class="centerText">
                    <h5>中国家谱博物馆落户进-2017年亮相</h5>
                    <div class="axisCentre">
                    <span>个人产业</span>
                    <van-icon name="location" />
                    <p>湖北省大鹏村腾睿大厦</p>
                    <div class="centreSolid"></div>
                </div>
                    
                </div>
                <div class="centerImg">
                    34
                </div>
        </div>
        <div class="centerDiv">
                <div class="centerText">
                    <h5>中国家谱博物馆落户进-2017年亮相</h5>
                    <div class="axisCentre">
                    <span>个人产业</span>
                    <van-icon name="location" />
                    <p>湖北省大鹏村腾睿大厦</p>
                    <div class="centreSolid"></div>
                </div>
                    
                </div>
                <div class="centerImg">
                    34
                </div>
        </div>
        <div class="centerDiv">
                <div class="centerText">
                    <h5>中国家谱博物馆落户进-2017年亮相</h5>
                    <div class="axisCentre">
                    <span>个人产业</span>
                    <van-icon name="location" />
                    <p>湖北省大鹏村腾睿大厦</p>
                    <div class="centreSolid"></div>
                </div>
                    
                </div>
                <div class="centerImg">
                    34
                </div>
        </div>
        <div class="centerDiv">
                <div class="centerText">
                    <h5>中国家谱博物馆落户进-2017年亮相</h5>
                    <div class="axisCentre">
                    <span>个人产业</span>
                    <van-icon name="location" />
                    <p>湖北省大鹏村腾睿大厦</p>
                    <div class="centreSolid"></div>
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
            <div class="gz">+关注</div>
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
            <div class="branch">
                <div>分支后裔</div>
                <div>千支同源</div>
            </div>
            </div>
            <p>周星是中国慈善名人帮第一人，是 《中国慈善家》 杂志年度重量级榜单人物之一。</p>
        </div>
    </div>
    
    </div>
</template>

<script>
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
         this.$store.dispatch("family") 
    },
    mounted() {
        
    },
    watch: {

    },
    methods: {
        dynamic() {
            // 动态
            //  this.api.get(this.api.county.base + "/genogram/fanNewsFamilyRecord/selectRecortPage?showId=10023")
            //  .then( res => {
            //      console.log(res)
            //  })
        }
    },
    components: {
        swipe
    },
};
</script>

<style scoped lang="less">
::-webkit-scrollbar {
display: none;/*隐藏滚轮*/
}
#appList {
    // position: relative;
    // display: flex;
    // margin-top: 0.45rem;
    // margin-bottom: 1.2rem;
    // font-size: 0.24rem;
    // overflow: hidden;
    // overflow-y: auto;
    // overflow-x: hidden;
    .homeList {
        height: 2.85rem;
        width: 100%;
        background-color: red;
        position: absolute;
        top: -1.85rem;
        left: 0;
    }
    .appBox {
        flex: 1;
        padding-top: 2rem;
        background-color: pink;
    }
    .centre {
        padding: 4.2rem 0.2rem 0.98rem 0.2rem;
        flex: 1;
        box-sizing:border-box;
        overflow: hidden;
        font-size: 0.16rem;
        position: relative;
        overflow-y: auto;
        overflow-x: hidden; 
        h5 {
            font-size: 0.32rem;
            font-weight: 500;
            margin: 0 0.1rem 0 0;
        }
/deep/ .van-icon-location::before {
            width: 0.44rem;
            height: 0.44rem;
            color: #AFAFAF;
            font-size: 0.29rem;
        }
        .centerDiv {
            position: relative;
            height: 1.67rem;
            display: flex;
            margin-top: 0.25rem;
            .centerText {
                flex: 1;
                .axisCentre {
                    margin-top: 0.2rem;
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
        .centreDiv {
            width: 100%;
            height: 4.67rem;
            position: relative;
            text-align: center;
                .newest {
                    position: absolute;
                    width: 0.8rem;
                    height: 0.42rem;
                    background: #D2211B;
                    top: 0;
                    left: 0;
                    border-radius: 0.1rem;
                    color: white;
                    font-size: 0.22rem;
                    line-height: 0.42rem;
                }
                p {
                    text-align: left;
                    color: #767676;
                    font-size: 0.26rem;
                    margin: 0.3rem 0 0 0;
                    letter-spacing: 0.02rem;
                }
                .centreImg {
                    display: flex;
                    overflow: hidden;
                    .imgDiv {
                        width: 2.3rem;
                        height: 1.45rem;
                        background-color: #D2211B;
                        margin: 0.28rem 0 0.22rem 0.1rem;
                       
                    }
                    :nth-child(1) {
                            margin-left: 0;
                        }
                    
                }
               
        }
         .axisCentre {
                    width: 100%;
                    height: 0.55rem;
                    position: relative;
                    display: flex;
                    span {
                        display: inline-block;
                        height: 0.3rem;
                        width: 0.9rem;
                        font-size: 0.12rem;
                        border: 0.01rem solid #D2211B; 
                        border-radius: 0.03rem;
                        margin-right: 0.28rem;
                        color: #D2211B;
                    }
                    /deep/ .van-icon-location::before { 
                        margin-top: 0.02rem;
                     }
                    p {
                        margin: 0;
                        color: #AFAFAF;
                    }
                    .centreSolid {
                        position: absolute;
                        width: 200%;
                        height: 0.02rem;
                        background: #DEDDDD;
                        bottom: 0;
                        left: -0.33rem
                    }
                }
    }
    // 关注人物样式
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
            margin-top: 0.26rem;
            border-bottom: 0.01rem solid #DEDDDD;
                .titleTop {
                        display: flex;
                        justify-content: space-between;
                }
                p {
                    font-size: 0.24rem;
                    color: #333333;
                }
        }

        .gz {
            width: 1.7rem;
            height: 0.55rem;
            border-radius: 0.3rem;
            font-size: 0.24rem;
            color: white;
            text-align: center;
            line-height: 0.55rem;
            background-color: #D2211B;
        }
        // 视频播放样式
        .videoBox {
            font-size: 0.2rem;
            // padding: 0 0.2rem; 
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

        // 人物分支样式
        .branch {
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
  
</style>
