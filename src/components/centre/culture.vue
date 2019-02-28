<template>
    <div class="celebrity">
       <van-tabs v-model="active">
            <van-tab title="家族祠堂">
                
                 <div class="centerDiv" v-for="item in cultural.records" :key="item.id">
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
            </van-tab>
            <van-tab title="源流"></van-tab>
            <van-tab title="序"></van-tab>
            <van-tab title="宗规族约"></van-tab>
            <van-tab title="传说典故"> </van-tab>
        </van-tabs>
        <img src="@/assets/images/home_cbb@2x.png" alt="">
    </div>
</template>

<script>
export default {
    props: {

    },
    data() {
        return {
            active:0,
            cultural:[]
        };
    },
    computed: {

    },
    created() {
        this.culturala()
    },
    mounted() {

    },
    watch: {

    },
    methods: {
        culturala() {
            // 家族文化
          this.api.get(this.api.county.base + "/genogram/fanNewsCulture/index/getFamilyIndexCulturePage?siteId=1")
          .then( res =>  {
              console.log(res)
              this.cultural = res.data
          })  
        }
    },
    components: {

    },
};
</script>

<style scoped lang="less">
.celebrity {
    margin-top: 4rem;
    margin-bottom: 1.2rem;
    font-size: 0.24rem;
    overflow: hidden;
    overflow-y: auto;
    overflow-x: hidden;
    position: relative;
        // 右边按钮
        /deep/.van-icon {
            left: 7rem;
            top: 0.5rem;
            color: #666666;
        }
        // 下划线元素
        /deep/.van-tabs__line {
            display: none;
        }
        // 父元素
        /deep/.van-tabs__nav--line {
          background: none;   
        }
        // 每一个内容的标签
        /deep/.van-tab {
            background: none;
            font-size: 0.32rem;
            color:#333333;
        }
        // 内容父元素
        /deep/.van-tabs--line {
            padding-top: 0.8rem;
        }
        /deep/.van-tabs__wrap {
            padding: 0 0.55rem 0 0.2rem;
        }
        /deep/.van-hairline--top-bottom::after {
            border: none;
        }
        /deep/.van-tab--active {
            color: #D2211B !important;
            
        }
        .cultureList {
            width: 100%;
            padding: 0 0.2rem;
            box-sizing: border-box;
            border-bottom: 0.01rem solid #DEDDDD;
            .centerImg {
                width: 2.3rem;
                height: 1.44rem;
                justify-content: flex-end ;
                background: pink;
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
}

</style>

