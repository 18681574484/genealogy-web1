<template>
    <div class="pages">
        <Navbar title="详情"></Navbar>
        <div class="tabbar">
            <van-tabbar fixed>
                <van-tabbar-item>
                    <van-search v-model="comment" placeholder="……" show-action @search="sendComment" style="width:7.5rem">
                        <div slot="left-icon"></div>
                        <div slot="action" @click="sendComment">评论</div>
                    </van-search>
                </van-tabbar-item>
            </van-tabbar>
        </div>
        <div class="main">
            <div class="h">
                <div class="tit" v-html="info.title"></div>
                <div class="tag">
                    <div class="item" v-if="info.createTime">
                        <span>时间：</span>
                        <span>{{dayjs(info.createTime.replace("+0000", "Z")).format('YYYY年MM月DD日 HH:mm')}}</span>
                    </div>
                    <div class="item" v-if="info.nickName">
                        <span>作者：</span>
                        <span>{{info.nickName}}</span>
                    </div>
                    <div class="item" v-if="info.visitNum">
                        <span>浏览：</span>
                        <span>{{info.visitNum}}</span>
                    </div>
                </div>
            </div>
            <div class="b">
                <div class="content" v-html="info.content"></div>
            </div>
            <van-list v-model="loading" :finished="finished" @load="onLoad" :offset="50" class="list">
                <div class="item" v-for="v in list" :key="v.id">
                    <div class="img" :style="api.imgBG(v.picSrc)"></div>
                    <div class="obj">
                        <div class="name">{{v.nickName}}</div>
                        <div class="time">{{dayjs(v.createTime.replace("+0000", "Z")).fromNow()}}</div>
                        <div class="txt">{{v.content}}</div>
                        <div class="feeds">
                            <span @click="toReply(v)">回复</span>
                        </div>
                    </div>
                    <div class="replays" v-if="v.next.length">
                        <div class="row" v-for="row in v.next" :key="row.id">
                            <div class="name">{{row.nickName}}</div>
                            <div class="obj">
                                <div class="txt">{{row.content}}</div>
                                <div class="tags" v-if="false">
                                    <span class="time">{{dayjs(row.createTime.replace("+0000", "Z")).fromNow()}}</span>
                                    <span class="feeds" @click="toReplyAnd(v)">回复</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </van-list>

            <van-popup v-model="isfeed" position="bottom">
                <van-search v-model="reply" placeholder="……" show-action @search="sendComment" style="width:7.5rem">
                    <div slot="left-icon"></div>
                    <div slot="action" @click="sendReply">回复</div>
                </van-search>
            </van-popup>
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
            url: "",
            info: {},
            id: this.$route.query.id,
            entity: "AllUserNewsInfo",
            comment: "",
            isfeed: false,
            curr_feed: {},
            reply: "",
            list: [],
            page: 1,
            total: 0,
            isload: false,
            loading: false,
            finished: false
        };
    },
    computed: {
        user() {
            return this.$store.state.user;
        }
    },
    mounted: function() {
        this.getInfo();
    },
    methods: {
        getInfo() {
            this.api
                .post(this.api.user.base + this.api.user.rizhi_info, {
                    id: this.$route.query.id
                })
                .then(res => {
                    this.isload = true;
                    if (res.code == 200) {
                        this.info = res.data;
                    }
                });
        },
        onLoad() {
            setTimeout(() => {
                this.getList();
            }, 500);
        },
        getList() {
            this.api
                .post(this.api.county.base + this.api.county.comments_list, {
                    topicId: parseInt(this.id),
                    entityName: this.entity,
                    pageNo: this.page
                })
                .then(res => {
                    if (res.code == 200) {
                        if (res.data.records) {
                            this.list = this.list.concat(res.data.records);
                            this.total = res.data.total;
                            this.page++;
                        } else {
                            this.finished = true;
                        }
                    } else {
                        this.finished = true;
                    }
                    this.loading = false;
                    this.isload = true;
                });
        },
        sendComment() {
            if (!this.user) {
                this.$dialog
                    .confirm({
                        title: "提示",
                        message: "请先登录",
                        confirmButtonText: "去登录"
                    })
                    .then(() => {
                        this.$router.push("login");
                    })
                    .catch(() => {});
                return;
            }
            if (!this.comment) {
                this.$toast("未输入评论内容");
                return;
            }
            this.api
                .post(
                    this.api.county.base + this.api.county.comments_add,
                    {
                        createUser: 0,
                        content: this.comment,
                        entityName: this.entity,
                        formUserId: this.user.id,
                        praiseNum: 0,
                        status: 1,
                        topicId: this.id,
                        createUser: this.user.id,
                        updateUser: this.user.id
                    },
                    1
                )
                .then(res => {
                    if (res.code == 200) {
                        this.comment = "";
                        this.list = [];
                        this.page = 1;
                        this.total = 0;
                        this.finished = false;
                        this.getList();
                        this.$toast("评论已提交");
                        this.info.commentCount++;
                    } else {
                        this.$toast(res.msg);
                    }
                });
        },
        toReply(e) {
            this.curr_feed = e;
            this.isfeed = true;
        },
        sendReply() {
            if (!this.user) {
                this.$dialog
                    .confirm({
                        title: "提示",
                        message: "请先登录",
                        confirmButtonText: "去登录"
                    })
                    .then(() => {
                        this.$router.push("login");
                    })
                    .catch(() => {});
                return;
            }
            if (!this.reply) {
                this.$toast("未输入回复内容");
                return;
            }
            this.api
                .post(
                    this.api.county.base + this.api.county.comments_feeds,
                    {
                        commentId: this.curr_feed.id,
                        content: this.reply,
                        createUser: this.user.id,
                        formUserId: this.user.id,
                        id: 0,
                        praiseCount: 0,
                        replyId: 0,
                        replyType: 1,
                        status: 0,
                        updateUser: this.user.id
                    },
                    1
                )
                .then(res => {
                    this.curr_feed = {};
                    this.comment = "";
                    this.reply = "";
                    this.list = [];
                    this.page = 1;
                    this.total = 0;
                    this.finished = false;
                    this.getList();
                    this.$toast("回复已提交");
                });
        },
        toReplyAnd(e) {}
    }
};
</script>
<style lang="less" scoped>
.h {
    padding: 0.3rem 0;
    border-bottom: 1px solid #eee;
    .tit {
        padding: 0 0.1rem;
        font-size: 0.36rem;
    }

    .tag {
        font-size: 0.24rem;
        .item {
            color: #999;
            display: inline-block;
            padding: 0 0.1rem;
        }
    }
}

.b {
    .content {
        display: block;
        padding: 0.2rem;
        min-height: 450px;

        p {
            margin-bottom: 1em;
        }
        iframe {
            width: 100%;
            height: auto;
        }
    }
}
.list {
    border-top: 10px solid #eee;
    .item {
        padding: 0.2rem 0.3rem;
        border-bottom: 1px solid #eee;
        white-space: nowrap;
        .img {
            height: 0.96rem;
            width: 0.96rem;
            float: left;
            margin-right: 0.2rem;
            background: whitesmoke no-repeat center / cover;
            border-radius: 100%;
        }
        .obj {
            overflow: hidden;
            white-space: normal;
            font-size: 0.24rem;
            line-height: 1.6;
            .name {
                color: #379be9;
            }
            .time {
                font-size: 0.2rem;
                color: #999;
            }
            .feeds {
                color: #379be9;
                text-align: right;
                padding-right: 0.2rem;
            }
        }
        .replays {
            font-size: 0.24rem;
            background: #f1f1f1;
            margin: 0.1rem 0;
            padding: 0.2rem;
            border-radius: 0.1rem;
            .row {
                line-height: 0.4rem;
                overflow: hidden;
                white-space: nowrap;
                .name {
                    height: 0.48rem;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    width: 1.2rem;
                    float: left;
                    color: #379be9;
                }
                .txt {
                    overflow: hidden;
                    white-space: normal;
                }
                .tags {
                    overflow: hidden;
                    .time {
                        font-size: 0.2rem;
                        color: #999;
                    }
                    .feeds {
                        color: #379be9;
                        float: right;
                    }
                }
            }
        }
    }
}
</style>
