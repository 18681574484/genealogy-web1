<template>
    <div>
        <van-list v-model="loading" :finished="finished" @load="onLoad" :offset="50" class="list">
            <router-link :to="'/user/blogdetail?type=records&id='+v.id" class="item" v-for="(v,i) in list" :key="i">
                <div class="img" :style=" api.imgBG(v.newsFaceUrl)"/>
                <div class="obj">
                    <div class="tit">{{v.title}}</div>
                    <div class="tag">
                        <van-tag color="#d2211b" plain size="medium">宗亲日志</van-tag>
                        <span>{{api.maxcount(v.commentCount)}}评论</span>
                        <span>{{api.maxcount(v.visitNum)}}浏览</span>
                    </div>
                </div>
            </router-link>
        </van-list>
    </div>
</template>
<script>
export default {
    props: ["url", "isLoading"],
    data() {
        return {
            list: [],
            page: 1,
            total: 0,
            isload: false,
            loading: false,
            finished: false
        };
    },
    watch: {
        url: function(curVal, oldVal) {
            if (curVal != oldVal) {
                this.list = [];
                this.page = 1;
                this.total = 0;
                this.finished = false;
                this.getList();
            }
        }
    },
    mounted: function() {},
    methods: {
        onLoad() {
            setTimeout(() => {
                this.getList();
            }, 500);
        },
        getList() {
            this.api
                .get(this.url, {
                    pageNo: this.page
                })
                .then(res => {
                    if (res.code == 200) {
                        this.list = this.list.concat(res.data.records);
                        this.total = res.data.total;
                        this.page++;
                        if (res.data.records.length < 8) {
                            this.finished = true;
                        }
                    } else {
                        this.finished = true;
                    }
                    this.loading = false;
                });
        },
        chgPage(e) {
            this.page = e;
            this.getList();
        }
    }
};
</script>
<style lang="less" scoped>
.info {
    border-top: 0.2rem solid #eee;
    border-bottom: 1px solid #eee;
    overflow: hidden;
    white-space: nowrap;
    padding: 0 0.2rem;
    line-height: 1rem;
    .l {
        float: left;
        white-space: normal;
        width: 2rem;
        font-size: 0.4rem;
        border-right: 1px solid #eee;
        letter-spacing: 0.05rem;
        .curr {
            color: #d2211b;
        }
    }
    .r {
        overflow: hidden;
        padding-left: 0.4rem;
        white-space: normal;
        height: 3;
        span {
            font-size: 0.24rem;
            margin-right: 0.2rem;
        }
    }
}
.list {
    .item {
        display: block;
        padding: 0.2rem 0.3rem;
        border-bottom: 1px solid #eee;
        overflow: hidden;
        white-space: nowrap;
        .img {
            width: 2rem;
            height: 1.5rem;
            float: right;
            background: whitesmoke no-repeat center / cover;
            margin-left: 0.3rem;
        }
        .obj {
            height: 1.5rem;
            overflow: hidden;
            .tit {
                color: #333;
                width: 100%;
                height: 0.8rem;
                line-height: 0.4rem;
                overflow: hidden;
                display: -webkit-box;
                text-overflow: ellipsis;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                white-space: normal;
            }
            .tag {
                margin-top: 0.24rem;
                font-size: 0.24rem;
                color: #999;
                line-height: 0.4rem;
                span {
                    margin-right: 0.2rem;
                }
            }
        }
    }
}
</style>
