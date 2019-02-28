<template>
    <div class="pages">
        <Navbar title="家族公告"></Navbar>
        <div class="main">
            <TopNews/>
            <van-list v-model="loading" :finished="finished" @load="onLoad" :offset="50" class="list">
                <None v-if="!list.length && isload"/>
                <router-link :to="'detail?type=records&id='+v.id" class="item" v-for="(v,i) in list" :key="i" v-if="i">
                    <div class="obj">
                        <div class="tit">
                            <van-tag color="#d2211b" mark size="medium">公告</van-tag>
                            {{v.newsTitle}}
                        </div>
                        <div class="tag">
                            <span>{{api.maxcount(v.commentCount)}}评论</span>
                            <span>{{api.maxcount(v.visitNum)}}浏览</span>
                            <span>{{dayjs(v.createTime.replace("+0000", "Z")).format('YYYY-MM-DD HH:mm')}}</span>
                        </div>
                    </div>
                </router-link>
            </van-list>
        </div>
    </div>
</template>

<script>
import Navbar from "_c/navbar/navbar.vue";
import TopNews from "./list/topnews.vue";
export default {
    name: "Page",
    components: {
        Navbar,
        TopNews
    },
    data() {
        return {
            curr: 0,
            list: [],
            total: 0,
            page: 0,
            isload: false,
            loading: false,
            finished: false
        };
    },
    computed: {
        apiList() {
            return this.$store.state.apiList;
        }
    },
    mounted: function() {},
    methods: {
        onLoad() {
            setTimeout(() => {
                this.getApiData("index_family_record2");
            }, 500);
        },
        getApiData(e) {
            this.api
                .get(this.api.county.base + this.apiList[e].apiUrl, {
                    pageSize: this.page
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
