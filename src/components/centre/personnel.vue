<template>
    <div class="personnel">
        <div class="cpf">
            <h2>公益基金</h2>
            <span>总金额</span>
            <img src="@/assets/images/solid.png" alt="">

            <div class="cpfBottom">
                <span class="bottomRight">￥888888.58</span>
                <span class="sss">捐助</span>
            </div>
        </div>

        <div class="listPre">
            <!-- 右边人数 -->
            <span class="van-ri">共1212人</span>            
            <van-tabs @click="onClick">
                <van-tab title="时间">
                    <div class="flgure">
                        <div class="lf">
                            <div class="img">头像</div>
                            <div class="lfText">
                                <div class="textTop">
                                    <h5>周星</h5>
                                    <img src="@/assets/images/praise.png" alt="">
                                    <span>12</span>
                                </div>
                                <span>捐助1000元</span>
                            </div>
                        </div>
                        <div class="rg">+关注</div>
                    </div>
                      <div class="flgure">
                        <div class="lf">
                            <div class="img">头像</div>
                            <div class="lfText">
                                <div class="textTop">
                                    <h5>周星</h5>
                                    <img src="@/assets/images/praise.png" alt="">
                                    <span>12</span>
                                </div>
                                <span>捐助1000元</span>
                            </div>
                        </div>
                        <div class="rg">+关注</div>
                    </div>
                      <div class="flgure">
                        <div class="lf">
                            <div class="img">头像</div>
                            <div class="lfText">
                                <div class="textTop">
                                    <h5>周星</h5>
                                    <img src="@/assets/images/praise.png" alt="">
                                    <span>12</span>
                                </div>
                                <span>捐助1000元</span>
                            </div>
                        </div>
                        <div class="rg">+关注</div>
                    </div>
                      <div class="flgure">
                        <div class="lf">
                            <div class="img">头像</div>
                            <div class="lfText">
                                <div class="textTop">
                                    <h5>周星</h5>
                                    <img src="@/assets/images/praise.png" alt="">
                                    <span>12</span>
                                </div>
                                <span>捐助1000元</span>
                            </div>
                        </div>
                        <div class="rg">+关注</div>
                    </div>
                      <div class="flgure">
                        <div class="lf">
                            <div class="img">头像</div>
                            <div class="lfText">
                                <div class="textTop">
                                    <h5>周星</h5>
                                    <img src="@/assets/images/praise.png" alt="">
                                    <span>12</span>
                                </div>
                                <span>捐助1000元</span>
                            </div>
                        </div>
                        <div class="rg">+关注</div>
                    </div>
                      <div class="flgure">
                        <div class="lf">
                            <div class="img">头像</div>
                            <div class="lfText">
                                <div class="textTop">
                                    <h5>周星</h5>
                                    <img src="@/assets/images/praise.png" alt="">
                                    <span>12</span>
                                </div>
                                <span>捐助1000元</span>
                            </div>
                        </div>
                        <div class="rg">+关注</div>
                    </div>
                      <div class="flgure">
                        <div class="lf">
                            <div class="img">头像</div>
                            <div class="lfText">
                                <div class="textTop">
                                    <h5>周星</h5>
                                    <img src="@/assets/images/praise.png" alt="">
                                    <span>12</span>
                                </div>
                                <span>捐助1000元</span>
                            </div>
                        </div>
                        <div class="rg">+关注</div>
                    </div>
                </van-tab>
                <van-tab title="金额">
                      <div class="flgure">
                        <div class="lf">
                            <div class="img">头像</div>
                            <div class="lfText">
                                <div class="textTop">
                                    <h5>周星</h5>
                                    <img src="@/assets/images/praise.png" alt="">
                                    <span>12</span>
                                </div>
                                <span>捐助1000元</span>
                            </div>
                        </div>
                        <div class="rg">+关注</div>
                    </div>
                </van-tab>
            </van-tabs>
        </div>
    </div>
</template>

<script>
export default {
    props: {

    },
    data() {
        return {
            active: 1,
            expenditureList: []
        };
    },
    computed: {

    },
    created() {
       this.expenditure()
    },
    mounted() {

    },
    watch: {

    },
    methods: {
        onClick(index, title) {
            this.$toast(title);
        },
         expenditure() {
             // 收益公开栏
             this.api.get(this.api.county.base + "/genogram/fanNewsCharity/index/getFanNewsCharityOutPage?showId=117")
             .then( res => {
                 console.log(res)
                 this.expenditureList = res.data
             })
        }
    },
    components: {

    },
};
</script>

<style scoped lang="less">
.personnel {
    margin-top: 4.2rem;
    margin-bottom: 1.2rem;
    font-size: 0.24rem;
    overflow: hidden;
    overflow-y: auto;
    overflow-x: hidden;
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
            margin-left: 0.2rem;
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
    .listPre {
        margin-top: 0.3rem;
        position: relative;
        .van-ri {
            position: absolute;
            top: 0.1rem;
            right: 0.2rem;
            color: #999999;
            font-size: 0.22rem;
            z-index: 999;
        }
        // 父元素
        /deep/ .van-tabs--line {
            padding: 0.78rem 0 0 0;
            box-sizing: border-box;
        }
        /deep/ .van-tabs--line .van-tabs__wrap {
            height: 0.78rem;
            padding: 0 0.2rem;
            border-top: none;
            border-bottom: 0.01rem solid #D3D2D2;
        }
        /deep/.van-hairline--top-bottom::after {
            border: none;
        }
        /deep/.van-tabs__line {
            left: -0.16rem;
            background: #D2211B;
            width: 0.78rem !important;
            height: 0.02rem;
        }
        /deep/.van-tab {
            color: #000000;
            flex: none;
            font-size: 0.26rem;
        }
        /deep/ .van-tab--active {
            color: #D2211B;
        }
        /deep/ .van-ellipsis {
            width: 0.78rem !important;
        }
        .flgure {
            padding: 0 0.2rem;
            height: 1.3rem;
            margin-top: 0.3rem;
            border-bottom: 0.01rem solid #D3D2D2;
            display: flex;
            justify-content: space-between;
                .lf {
                    display: flex;
                        .img {
                            width: 1rem;
                            height: 1rem;
                            border-radius: 50%;
                            background-color: pink;
                            text-align: center;
                            line-height: 1rem;
                            color: #fff;
                        }
                        .lfText {
                            margin-left: 0.2rem;

                                .textTop {
                                    margin-bottom: 0.15rem;
                                    padding-top: 0.17rem;
                                        h5 {
                                            margin: 0;
                                            display: inline;
                                            font-size: 0.27rem;
                                            margin-right: 0.3rem;
                                        }
                                        img {
                                            width: 0.31rem;
                                            height: 0.3rem;
                                        }
                                        span {
                                            font-size: 0.16rem;
                                            color: #999999;
                                        }
                                }
                                span {
                                    font-size: 0.22rem;
                                    color: #0066FF;
                                }
                        }
                }
                .rg {
                    height: 0.52rem;
                    width: 1.26rem;
                    border: 0.01rem solid #D2211B;
                    border-radius: 0.2rem;
                    text-align: center;
                    color: #D2211B;
                    font-size: 0.26rem;
                    line-height: 0.52rem;
                }
        }
    }
}
</style>
