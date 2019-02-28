<template>
    <div class="pages">
        <Navbar title="日志">
            <small slot="right">
                <router-link tag="span" to="/add/blog">发日志</router-link>
            </small>
        </Navbar>
        <div class="main">
            <van-notice-bar v-if="list.length" mode="closeable">提示：长按日志可删除。</van-notice-bar>
            <van-list v-model="loading" :finished="finished" @load="onLoad" :offset="50" class="list">
                <None v-if="!list.length && isload"/>
                <div class="item" v-for="(v,i) in list" :key="i" @touchstart="onDel(v)" @touchend="clearLoop(v)">
                    <div class="img link" :style="api.imgBG(v.newsFaceUrl)" @click="link(v.id)"></div>
                    <div class="obj" @click="link(v.id)">
                        <div class="tit">{{v.title}}</div>
                        <div class="tag">
                            <van-tag color="#d2211b" mark size="medium">个人日志</van-tag>
                            <span>{{api.maxcount(v.commentCount)}}评论</span>
                            <span>{{api.maxcount(v.visitNum)}}浏览</span>
                        </div>
                    </div>
                </div>
            </van-list>
        </div>
    </div>
</template>
<script>
import Navbar from "_c/navbar/navbar.vue";
export default {
    name: "Page",
    components: {
        Navbar
    },
    data() {
        return {
            list: [],
            total: 0,
            page: 1,
            isload: false,
            loading: false,
            finished: false,
            Loop: null
        };
    },
    computed: {},
    mounted: function() {},
    methods: {
        onLoad() {
            setTimeout(() => {
                this.getList();
            }, 500);
        },
        getList() {
            this.api
                .post(this.api.user.base + this.api.user.rizhi_list, {
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
                    this.isload = true;
                });
        },
        onDel(e) {
            clearInterval(this.Loop);
            this.Loop = setTimeout(() => {
                this.$dialog
                    .confirm({
                        title: "提示",
                        message: "确定删除这篇日志？"
                    })
                    .then(() => {
                        this.api
                            .post(
                                this.api.user.base + this.api.user.rizhi_del,
                                {
                                    id: e.id
                                }
                            )
                            .then(res => {
                                this.list = [];
                                this.total = 0;
                                this.page = 1;
                                this.finished = false;
                                this.getList();
                            });
                    })
                    .catch(() => {});
            }, 1000);
        },
        clearLoop() {
            clearInterval(this.Loop);
        },
        link(e) {
            this.$router.push("/user/blogdetail?id=" + e);
        }
    }
};
</script>

<style lang="less" scoped>
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
                margin-top: 0.4rem;
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
