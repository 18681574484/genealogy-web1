<template>
   <div class="context">
        <!-- 置顶公告 -->
        <div class="card-1">
            <div class="header">
                <div class="header-left">
                置顶
                <i class="red">公</i>告
                </div>
                <span></span>
                <div class="header-right">崇阳联谊在某地召开崇阳联谊在某地召开</div>
            </div>
            <div class="card-box">所谓图腾，就是原始时代的人们把某种动物，植物或非生物等当作自己的亲属，祖先或者保护神。相信他们有一种超自然力，会保护自己，并且还可以获得他们的力量和技能。在原始人的眼里，图腾实际是一个被人格化崇拜的对象</div>
        </div>
         <!-- 联谊概况 -->
        <div class="card-1 card-2" >
            <div class="header-2">联谊概况</div>
            <div class="card-box card-box2">
                <div class="box-left">
                <p>堂: 清河堂</p>
                <p>始迁祖: 太史公</p>
                <p>负责人: 周星</p>
                <p>电话: 12222222222</p>
                <p>
                    <img src="@/assets/images/赞@3x.png" alt class="left-img">
                    <span>586</span>
                    <img src="@/assets/images/爱心-(2)@3x.png" alt class="right-img">
                    <span>586</span>
                </p>
                </div>
                <div class="box-right">
                <img src="@/assets/images/图层-2440-拷贝@2x.png">
                </div>
            </div>
        </div>
        <!-- 简介 -->
        <div class="card-1 card-3">
            <div class="header-2">简介</div>
            <div class="card-box" style="display: block;">
                <p>{{this.$store.state.brief.description}}</p>
                <div class="box-left">
                <span>族谱总数:
                    <b style="font-style: normal; color: #d53c38;">4525</b> 人
                </span>
                <p>
                    <span>本族男丁: 525人</span>
                    <span>本族女丁: 525人</span>
                </p>
                <p>
                    <span>最大年龄: 98岁</span>
                    <span>最小年龄: 12个月</span>
                </p>
                </div>
            </div>
        </div>
        <!-- 联谊会公告 -->
        <div class="fellowship">
            <div class="fellowship-header">
                <span>联谊会公告</span>
                <span>中国家谱博物馆落户-2017亮相</span>
            </div>
            <div class="fellowship-box">
                <span>30条评论</span>
                <span>652142浏览</span>
                <span>刚刚</span>
            </div>
        </div>
         <div class="fellowship"  v-for="item in  this.$store.state.announcement.records" :key="item.id">
            <div class="fellowship-header">
                <span>{{item.newsTitle}}</span>
                <span>中国家谱博物馆落户-2017亮相</span>
            </div>
            <div class="fellowship-box">
                <span>{{item.status}}条评论</span>
                <span>{{item.visitNum}}浏览</span>
                <span>刚刚</span>
            </div>
        </div>
         <!-- <div class="fellowship" v-for="item in auct.records" :key="item.id">
            <div class="fellowship-header">
                <span>中国家谱</span>
            </div>
            <div class="fellowship-box">
                <span>{{item.status}}条评论</span>
                <span>{{item.visitNum}}浏览</span>
                <span>刚刚</span>
            </div>
        </div> -->
   </div>
</template>

<script>
export default {
   data() {
       return {
           auct: []
       }
   },
    created() {
        this.$store.dispatch('bulletin')
        this.announcement()
    },
   components: {},
   methods: {
      announcement() {
        //   this.api.get(this.api.county.base + "/genogram/fanIndex/index/getFanIndexInfo?siteId=100")
        //   .then( res => {
        //       console.log(res)
        //       this.auct = res.data
        //   })  
      }
  }
}
</script>

<style scoped lang="less">
.context {
  box-sizing: border-box;
  overflow: hidden;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 4.2rem 0 1.2rem 0; 
  .card-1 {
    padding: 0.2rem 0.3rem;
    box-sizing: border-box;
    box-shadow: 0 0 0.25rem #ccc;
    border-radius: 0.1rem;
    margin: 0 0.2rem;
    .header {
      display: flex;
      font-size: 0.35rem;
      .header-left {
        width: 0.7rem;
        font-weight: 700;
        .red {
          font-style: normal;
          color: #d53c38;
        }
      }
      span {
        background-color: black;
        width: 0.02rem;
        height: 1.1rem;
        margin: 0 0.3rem;
      }
    }
    .header-2 {
      display: flex;
      margin-top: 0.2rem;
      margin-bottom: 0.2rem;
      font-size: 0.35rem;
      font-weight: 700;
      justify-content: center; /* 水平居中 */
      align-items: center; /* 垂直居中 */
    }
    .card-box {
      display: flex;
      margin-top: 0.2rem;
      color: #767676;
      font-size: 0.25rem;
      letter-spacing: 0.02rem;  
        p {
            font-size: 0.24rem;
            letter-spacing: 0.03rem;
        }

        .box-left {
            margin-top: 0.55rem;
            color: black;
            font-size: 0.3rem;
            img {
            margin-right: 0.2rem;
            width: 0.4rem;
            height: 0.4rem;
            }
            span {
            font-size: 0.18rem;
            color: #767676;
            margin-right: 0.5rem;
            margin-top: 0.16rem;
            }
            p {
                display: flex;
                justify-content: space-between;
                margin: 0.2.5rem 0;
                color: #333333;
                font-size: 0.26rem;
            }
      }
      .box-right {
        display: flex;
        align-items: center;
        img {
          margin-left: 0.5rem;
          width: 2rem;
        }
      }
    }
    .card-box2 {
      padding: 0 0.5rem;
      box-sizing: border-box;
    }
  }
  .card-2 {
      margin-top: 0.3rem;
      border-bottom: 0.02rem dashed #ccc;
  }
  // 联谊会
  .fellowship{
    padding: 0.3rem 0.2rem 0;
    border-bottom: 0.02rem solid #DEDDDD;
    .fellowship-header{
      display: flex;
    //   justify-content:space-between;
        span {
            margin-right: 0.2rem;
        }
      span:first-child{
        text-align: center;
        font-size: 0.2rem;
        width: 1.4rem;
        height: 0.45rem;
        line-height: 0.45rem;
        background-color: #D2211B;
        border-radius: 0.08rem;
        color: #fff;
      }
      span:last-child{
        letter-spacing: 0.04rem;
        font-size: 0.35rem;
      }
    }
    .fellowship-box{
      padding: 0.23rem 0;
      color: #767676;
      font-size: 0.2rem;
      span{
        margin-right: 0.15rem;
      }
    }
  }
}
</style>
