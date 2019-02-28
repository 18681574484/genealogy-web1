<template>
    <div>
        <div class="faction">
            <div class="top">
                <!-- 红色背景 -->
                <div class="bgc"></div>
                  <!-- 头部搜索 -->
                <div class="searchDiv" >
                            <img src="@/assets/images/search.png" alt="">
                            <input type="text" placeholder="炎黄统谱网"  >
                        <img class="searImg" src="@/assets/images/write.png" alt="">
                    </div>
                    <!-- 选择地区 -->
                    <div class="select">
                        <div class="region">
                            <div class="regionLeft"><span>选择地区</span><van-icon name="arrow-down" /></div>
                            <div>
                                <van-icon name="location" />
                                <span>武汉江夏瞎</span>
                            </div>
                            <div class="cloce">关注</div>
                        </div>
                        <div class="selectContent">
                            <h2>字牌总汇</h2>
                            <span>注释</span>
                            <p>【历代】 表示从何祖到到前代</p>
                            <p>【近代】 表示从何基祖到到前前</p>
                            <p>【数字上为近代下为历代】</p>
                        </div>
                    </div>
            </div>
          
            <div class="factionCenter">
              
                    
                    <div class="selectList">
                        <div class="List">
                            <div class="listTop">
                                <h4>地区:关上大鹏村</h4>
                                <h4>祖先:张太公</h4>
                            </div>
                            <div class="listCenter">
                                <ul>
                                    <li v-for="item in zipai" :key="item.id">
                                        <div>
                                            <p>{{item}}</p>
                                            <span>32</span>
                                        </div>
                                        <b>邦</b>
                                    </li>
                                </ul>
                            </div>
                            <img class="make" src="@/assets/images/display.png" alt="">
                            <img class="share" @click="share"  src="@/assets/images/share.png" alt="">
                            <van-popup v-model="show" position="bottom" :overlay="true">
                                <div class="bottom">
                                    <ul class="btnConter">
                                        <li>
                                            <div>
                                                <img src="@/assets/images/wx.png" alt="">
                                                <p>微信好友</p>
                                            </div>
                                            
                                        </li>
                                        <li>
                                            <div>
                                                <img src="@/assets/images/Circle.png" alt="">
                                                <p>朋友圈</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <img src="@/assets/images/QQ@2x.png" alt="">
                                                <p>QQ好友</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <img src="@/assets/images/xl.png" alt="">
                                                <p>新浪微博</p>
                                            </div>
                                        </li>
                                        <li><div></div></li>
                                    </ul>
                                    <button @click="cancel">取消</button>
                                </div>
                            </van-popup>
                        </div>
                    </div>
                     
                    <!-- <div class="selectList">
                        <div class="List">
                            <div class="listTop">
                                <h4>地区:关上大鹏村</h4>
                                <h4>祖先:张太公</h4>
                            </div>
                            <div class="listCenter">
                                <ul>
                                    <li>
                                        <div>
                                            <p>165</p>
                                            <span>32</span>
                                        </div>
                                        <b>邦</b>
                                    </li>
                                    <li>
                                        <div>
                                            <p>165</p>
                                            <span>32</span>
                                        </div>
                                        <b>邦</b>
                                    </li>
                                    <li>
                                        <div>
                                            <p>165</p>
                                            <span>32</span>
                                        </div>
                                        <b>邦</b>
                                    </li>
                                    <li>
                                        <div>
                                            <p>165</p>
                                            <span>32</span>
                                        </div>
                                        <b>邦</b>
                                    </li>
                                    <li>
                                        <div>
                                            <p>165</p>
                                            <span>32</span>
                                        </div>
                                        <b>邦</b>
                                    </li>
                                    <li>
                                        <div>
                                            <p>165</p>
                                            <span>32</span>
                                        </div>
                                        <b>邦</b>
                                    </li>
                                    <li>
                                        <div>
                                            <p>165</p>
                                            <span>32</span>
                                        </div>
                                        <b>邦</b>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <div>
                                            <p>165</p>
                                            <span>32</span>
                                        </div>
                                        <b>邦</b>
                                    </li>
                                    <li>
                                        <div>
                                            <p>165</p>
                                            <span>32</span>
                                        </div>
                                        <b>邦</b>
                                    </li>
                                    <li>
                                        <div>
                                            <p>165</p>
                                            <span>32</span>
                                        </div>
                                        <b>邦</b>
                                    </li>
                                    <li>
                                        <div>
                                            <p>165</p>
                                            <span>32</span>
                                        </div>
                                        <b>邦</b>
                                    </li>
                                    <li>
                                        <div>
                                            <p>165</p>
                                            <span>32</span>
                                        </div>
                                        <b>邦</b>
                                    </li>
                                    <li>
                                        <div>
                                            <p>165</p>
                                            <span>32</span>
                                        </div>
                                        <b>邦</b>
                                    </li>
                                    <li>
                                        <div>
                                            <p>165</p>
                                            <span>32</span>
                                        </div>
                                        <b>邦</b>
                                    </li>
                                </ul>
                            </div>
                            <img class="make" src="@/assets/images/display.png" alt="">
                            <img class="share" @click="share"  src="@/assets/images/share.png" alt="">
                            <van-popup v-model="show" position="bottom" :overlay="true">
                                <div class="bottom">
                                    <ul class="btnConter">
                                        <li>
                                            <div>
                                                <img src="@/assets/images/wx.png" alt="">
                                                <p>微信好友</p>
                                            </div>
                                            
                                        </li>
                                        <li>
                                            <div>
                                                <img src="@/assets/images/Circle.png" alt="">
                                                <p>朋友圈</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <img src="@/assets/images/QQ@2x.png" alt="">
                                                <p>QQ好友</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <img src="@/assets/images/xl.png" alt="">
                                                <p>新浪微博</p>
                                            </div>
                                        </li>
                                        <li><div></div></li>
                                    </ul>
                                    <button @click="cancel">取消</button>
                                </div>
                            </van-popup>
                        </div>
                    </div>
                     
                    <div class="selectList">
                        <div class="List">
                            <div class="listTop">
                                <h4>地区:关上大鹏村</h4>
                                <h4>祖先:张太公</h4>
                            </div>
                            <div class="listCenter">
                                <ul>
                                    <li>
                                        <div>
                                            <p>165</p>
                                            <span>32</span>
                                        </div>
                                        <b>邦</b>
                                    </li>
                                    <li>
                                        <div>
                                            <p>165</p>
                                            <span>32</span>
                                        </div>
                                        <b>邦</b>
                                    </li>
                                    <li>
                                        <div>
                                            <p>165</p>
                                            <span>32</span>
                                        </div>
                                        <b>邦</b>
                                    </li>
                                    <li>
                                        <div>
                                            <p>165</p>
                                            <span>32</span>
                                        </div>
                                        <b>邦</b>
                                    </li>
                                    <li>
                                        <div>
                                            <p>165</p>
                                            <span>32</span>
                                        </div>
                                        <b>邦</b>
                                    </li>
                                    <li>
                                        <div>
                                            <p>165</p>
                                            <span>32</span>
                                        </div>
                                        <b>邦</b>
                                    </li>
                                    <li>
                                        <div>
                                            <p>165</p>
                                            <span>32</span>
                                        </div>
                                        <b>邦</b>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <div>
                                            <p>165</p>
                                            <span>32</span>
                                        </div>
                                        <b>邦</b>
                                    </li>
                                    <li>
                                        <div>
                                            <p>165</p>
                                            <span>32</span>
                                        </div>
                                        <b>邦</b>
                                    </li>
                                    <li>
                                        <div>
                                            <p>165</p>
                                            <span>32</span>
                                        </div>
                                        <b>邦</b>
                                    </li>
                                    <li>
                                        <div>
                                            <p>165</p>
                                            <span>32</span>
                                        </div>
                                        <b>邦</b>
                                    </li>
                                    <li>
                                        <div>
                                            <p>165</p>
                                            <span>32</span>
                                        </div>
                                        <b>邦</b>
                                    </li>
                                    <li>
                                        <div>
                                            <p>165</p>
                                            <span>32</span>
                                        </div>
                                        <b>邦</b>
                                    </li>
                                    <li>
                                        <div>
                                            <p>165</p>
                                            <span>32</span>
                                        </div>
                                        <b>邦</b>
                                    </li>
                                </ul>
                            </div>
                            <img class="make" src="@/assets/images/display.png" alt="">
                            <img class="share" @click="share"  src="@/assets/images/share.png" alt="">
                            <van-popup v-model="show" position="bottom" :overlay="true">
                                <div class="bottom">
                                    <ul class="btnConter">
                                        <li>
                                            <div>
                                                <img src="@/assets/images/wx.png" alt="">
                                                <p>微信好友</p>
                                            </div>
                                            
                                        </li>
                                        <li>
                                            <div>
                                                <img src="@/assets/images/Circle.png" alt="">
                                                <p>朋友圈</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <img src="@/assets/images/QQ@2x.png" alt="">
                                                <p>QQ好友</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <img src="@/assets/images/xl.png" alt="">
                                                <p>新浪微博</p>
                                            </div>
                                        </li>
                                        <li><div></div></li>
                                    </ul>
                                    <button @click="cancel">取消</button>
                                </div>
                            </van-popup>
                        </div>
                    </div> -->

            </div> 
        </div>
        <!-- 底部固定 -->
        <Footer></Footer>
    </div>
</template>

<script>
import Footer from '@/components/footer/Footer.vue'
export default {
   data() {
       return {
           show: false,
           zipai: []
       }
   },
   created() {
       this.zp()
   },
   methods: {
       share() {
           this.show = true
       },
       cancel () {
           this.show = false
       },
       zp() {
           // 字派
            this.api.get(this.api.county.base + "genogram/fanNewsCulture/index/getCommonalityIndexPage?showId=10010")
            .then( res => {
                var aaa = res.data.split(';')
                console.log()
                // this.zipai = aaa.split(',')
                console.log(this.zipai)
            })
       }
   },
   components:{
       Footer
   }
}
</script>

<style scoped lang="less">
.faction {
    position: relative;     
        .bgc {
            width: 100%;
            height: 3.2rem;
            position: absolute;
            top: 0;
            background-color:#D2211B;
            z-index: -1;
        }
        .top {
            width: 100%;
            height: 5.25rem;
            position: fixed;
            top: 0;
            z-index: 99;
            overflow: hidden;
        }
         // 搜索样式
            .searchDiv {
                width: 100%;
                height: 0.6rem;
                display: flex;
                padding: 0 0.2rem;
                    input {
                        width: 6.32rem;
                        height: 0.6rem;
                        border: none;
                        border-radius: 0.3rem;
                        background-color:rgba(0, 52, 52, 0.1);
                        text-align: center;
                        font-size: 0.24rem;
                        // position: absolute;
                        // right: -0.15rem;
                    }
                    :nth-child(1) { 
                        position: absolute;
                        top: 0.15rem;
                        left:  2.3rem;
                        width: 0.33rem;
                        height: 0.33rem;
                    }
                    :nth-child(3) { 
                        position: absolute;
                        top: 0.1rem;
                        right:  0.2rem;
                        width: 0.4rem;
                        height: 0.4rem;
                    }
                       input::-webkit-input-placeholder {
                        /* placeholder颜色  */
                        color: white;
                    }
                }
            // 选择地区样式
            .select {
                margin-top: 0.54rem;
                .region {
                    display: flex;
                    font-size: 0.26rem;
                    color: #ffffff;
                    justify-content: space-between;
                    margin-bottom: 0.3rem;
                    padding: 0 0.2rem;
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
                .selectContent {
                    width: 7.1rem;
                    height: 3.25rem;
                    margin-left: 0.2rem;
                    box-shadow: 0 0 0.2rem rgba(0, 0, 0, 0.2);
                    border-radius: 0.2rem;
                    background-color: #fff;
                    font-size: 0.26rem;
                    padding: 0.28rem 0 0 0.3rem;
                    box-sizing: border-box;
                        h2 {
                            font-size: 0.3rem;
                            margin: 0 0 0.2rem 0;
                        }
                        span {
                            
                        }
                        p {
                            color:#999999;
                        }
                }
            }
        .factionCenter {
            padding: 5.4rem 0.2rem 1.2rem;
            overflow: hidden;
            height: 100%;
            // 派别样式
            .selectList {
                padding: 0 0 0rem;
                overflow: hidden;
                overflow-y: auto;
                overflow-x: hidden;
                    .List {
                        width: 100%;
                        height: 3.5rem;
                        box-shadow: 0 0 0.2rem rgba(0, 0, 0, 0.2);
                        border-radius: 0.05rem;
                        border-bottom: 0.01rem dashed #C7C7C7;
                        padding-top: 0.3rem;
                        box-sizing: border-box;
                        position: relative;

                            .listTop {
                                display: flex;
                                font-size: 0.28rem;
                                justify-content: space-between;
                                    h4 {
                                        margin-top: 0;
                                    }
                            }
                            .listCenter {
                                    ul {
                                        display: flex;
                                        font-size: 0.16rem;
                                        margin-bottom: 0.3rem;
                                            li {
                                                display: flex;
                                                margin-right: 0.3rem;
                                                    p {
                                                        color: #D2211B;
                                                        margin: 0 0 0.06rem 0;
                                                    }
                                                    b {
                                                        font-size: 0.32rem;
                                                        color: #666666;
                                                        margin: 0.15rem 0 0 0.05rem;
                                                    }
                                                    span {
                                                        color: #0083FE;
                                                    }
                                            }
                                    }
                            }
                            /deep/.van-modal {
                                background-color:rgba(0,0,0,.4);

                               
                            }
                            .bottom {
                                height: 6rem;;
                                padding-top: 0.45rem;
                                background-color: #F7F7F7;
                                box-sizing: border-box;
                                position: relative;
                                 .btnConter {
                                    width: 100%;
                                    li {
                                        font-size: 0.23rem;
                                        float: left;
                                        width: 25%;
                                        display: flex;
                                        justify-content: center;
                                        margin-bottom: 1.35rem;
                                            div {
                                                width: 1.1rem;
                                                height: 1.1rem;
                                                background-color: #fff;
                                                border-radius: 50%;
                                                text-align: center;
                                                    p {
                                                        font-size: 0.22rem;
                                                        color: #666666;
                                                        margin-top: 0.35rem;
                                                    }
                                                    img {
                                                        margin-top: 0.3rem;
                                                    }
                                            }
                                          
                                    }
                                    :nth-child(1) img {
                                        width: 0.52rem;
                                        height: 0.42rem;
                                    }
                                    :nth-child(2) img {
                                        width: 0.54rem;
                                        height: 0.54rem;
                                    }
                                    :nth-child(3) img {
                                        width: 0.46rem;
                                        height: 0.54rem;
                                    }
                                    :nth-child(4) img {
                                        width: 0.50rem;
                                        height: 0.40rem;
                                    }
                                }
                                button {
                                    font-size: 0.32rem;
                                    font-weight: bolder;
                                    color: #333333;
                                    position: absolute;
                                    bottom: 0;
                                    left: 50%;
                                    transform: translateX(-50%);
                                    width: 100%;
                                    height: 0.98rem;
                                    border: none;
                                    background: #fff;
                                    border-top: 0.01rem solid #D7D7D7;
                                }
                            }
                           
                    }
                    .make {
                        width: 0.48rem;
                        height: 0.34rem;
                        position: absolute;
                        bottom: 0.3rem;
                        left: 50%;
                        transform: translateX(-50%);
                    }
                    .share {
                        width: 0.46rem;
                        height: 0.45rem;
                        position: absolute;
                        right: 0.2rem;
                        bottom: 0.3rem;
                    }
            }
        }
}
</style>
