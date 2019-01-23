<template>
    <div class="main">
        <div class="adlinks">
            <img src="./img/detail.jpg">
        </div>
        <div class="inner">
            <Breadcrumb>
                <BreadcrumbItem to="/c">首页</BreadcrumbItem>
                <BreadcrumbItem>详情</BreadcrumbItem>
            </Breadcrumb>
        </div>
        <div class="inner">
            <div class="detail" v-if="isload">
                <div class="h">
                    <div class="tit" v-html="info.newsTitle || info.personName"></div>
                    <div class="tag">
                        <div class="item">
                            <span>时间：</span>
                            <span>{{dayjs(info.createTime).format('YYYY年MM月DD日 HH:mm:ss')}}</span>
                        </div>
                        <div class="item" v-if="info.createUserName">
                            <span>作者：</span>
                            <span>{{info.createUserName}}</span>
                        </div>
                        <div class="item" v-if="info.visitNum">
                            <span>浏览：</span>
                            <span>{{info.visitNum}}</span>
                        </div>
                    </div>
                </div>
                <div class="b">
                    <div class="content" v-html="info.newsText || info.personSummary"></div>
                </div>
                <div class="f">
                    <div class="share" v-show="false">
                        <span>分享到：</span>
                        <iconfont name="weibo"/>
                    </div>
                    <div class="link">
                        <span>赏</span>
                    </div>
                    <div class="total">
                        <span>收到打赏</span>
                        <span class="num">0</span>
                        <span>次</span>
                    </div>
                </div>
            </div>
            <Spin size="large" fix v-else></Spin>
            <div class="feedback">
                <div class="h" v-if="user">
                    <div class="img" :style="api.imgBG(user.picSrc)"></div>
                    <div class="obj">
                        <div class="user">
                            <div class="count">{{comment.length}}/140</div>
                            <span>{{user.nickName}}</span>
                            <iconfont name="crownfill"/>
                        </div>
                        <div class="textarea">
                            <Input v-model="comment" type="textarea" :rows="4" placeholder="发表评论..."/>
                        </div>
                        <Button type="primary" @click="sendComment">评论</Button>
                    </div>
                </div>
                <div class="h" v-else>
                    <div class="img"></div>
                    <div class="obj">
                        <div class="textarea">
                            <Input disabled type="textarea" :rows="4" placeholder="评论请先登录"/>
                        </div>
                    </div>
                </div>
                <div class="b">
                    <div class="item" v-for="v in list" :key="v.id">
                        <div class="img" :style="api.imgBG(v.picSrc)"></div>
                        <div class="obj">
                            <div class="name">
                                <span class="time">{{dayjs(v.createTime).format('YYYY年MM月DD日 HH:mm')}}</span>
                                <span>{{v.nickName}}</span>
                            </div>
                            <div class="txt">{{v.content}}</div>
                            <div class="feeds">
                                <div class="textarea" v-if="v.ready">
                                    <Input v-model="v.comment" type="textarea" :rows="4" placeholder="发表评论..."/>
                                </div>
                                <Button type="primary" size="small" v-if="v.ready" @click="sendReply(v)">回复</Button>
                                <span @click="v.ready = false" v-if="v.ready" style="margin-left:8px;">收起</span>
                                <span @click="toReply(v)" v-else>回复</span>
                            </div>
                            <div class="replays" v-if="v.next.length">
                                <div class="row" v-for="row in v.next" :key="row.id">
                                    <div class="name">{{row.nickName}}:</div>
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
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            url: "",
            info: {},
            id: this.$route.query.id,
            comment: "",
            entity: "",
            comment: "",
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
        apiList() {
            return this.$store.state.county.apiList;
        },
        user() {
            return this.$store.state.user;
        }
    },
    mounted: function() {
        this.resetUrl();
        this.getInfo();
        this.getList();
    },
    methods: {
        resetUrl() {
            this.url =
                this.api.county.base +
                this.api.county.detail[this.$route.query.type];
            switch (this.$route.query.type) {
                case "culture":
                    this.entity = "FanNewsCultureNews";
                    this.navcurr = 2;
                    break;
                case "charity":
                    this.entity = "FanNewsCharityOut";
                    this.navcurr = 3;
                    break;
                case "industry":
                    this.entity = "FanNewsIndustry";
                    this.navcurr = 4;
                    break;
                case "famous":
                    this.entity = "FanNewsFamousPerson";
                    this.navcurr = 5;
                    break;
                case "records":
                    this.entity = "FanNewsFamilyRecord";
                    this.navcurr = 6;
                    break;
            }
        },
        getInfo() {
            this.api
                .get(this.url, {
                    id: this.id
                })
                .then(res => {
                    this.isload = true;
                    if (res.code == 200) {
                        this.info = res.data;
                    }
                });
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
                            res.data.records.forEach(v => {
                                v.ready = false;
                                v.comment = "";
                            });
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
            if (!this.comment) {
                this.$Message.error("未输入评论");
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
                        this.info.commentCount++;
                    } else {
                        this.$Message.error(res.msg);
                    }
                });
        },
        toReply(e) {
            let list = this.list;
            list.forEach(v => {
                if (e.id == v.id) {
                    v.ready = true;
                    v.comment = "";
                }
            });
            this.list = list;
        },
        sendReply(e) {
            console.log(e);
            this.api
                .post(
                    this.api.county.base + this.api.county.comments_feeds,
                    {
                        commentId: e.id,
                        content: e.comment,
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
                    this.comment = "";
                    this.reply = "";
                    this.list = [];
                    this.page = 1;
                    this.total = 0;
                    this.finished = false;
                    this.getList();
                });
        }
    }
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/var.scss";
.ivu-breadcrumb {
    padding: 8px 16px;
}
.detail {
    background: #fff;
    padding: 16px;
    border-radius: 4px;
    margin-bottom: 32px;
    box-shadow: 0 1px 3px rgba(#000, 0.1);

    .h {
        text-align: center;

        .tit {
            padding: 16px;
            font-size: 24px;
            color: $color;
        }

        .tag {
            .item {
                color: #999;
                display: inline-block;
                padding: 0 16px;
            }
        }
    }

    .b {
        padding: 32px;
        .intro {
            background: whitesmoke;
            padding: 8px 16px;
        }

        .content {
            display: block;
            padding: 32px 0;
            min-height: 450px;
            line-height: 2;
            font-size: 16px;
            text-indent: 2em;
            p {
                margin-bottom: 2em;
            }
            iframe {
                width: 100%;
                height: auto;
            }
        }
    }

    .f {
        position: relative;
        text-align: center;

        .share {
            position: absolute;
            right: 0;
            top: 0;
            bottom: 0;
            margin: auto;
            line-height: 64px;

            i {
                font-size: 24px;
            }
        }

        .link {
            span {
                display: inline-block;
                height: 64px;
                width: 64px;
                line-height: 64px;
                font-size: 32px;
                color: #fff;
                background: $color;
                border-radius: 50%;
            }
        }

        .total {
            color: #999;
            line-height: 64px;

            .num {
                margin: 0 8px;
                color: $color;
            }
        }
    }
}

.feedback {
    background: #fff;
    border-radius: 8px;
    padding: 16px;
    margin-bottom: 32px;

    .h {
        white-space: nowrap;
        overflow: hidden;

        .img {
            margin-right: 16px;
            float: left;
            height: 64px;
            width: 64px;
            background: whitesmoke no-repeat center / cover;
            border-radius: 50%;
        }

        .obj {
            overflow: hidden;

            .user {
                line-height: 24px;
                span {
                    margin-right: 16px;
                }

                i {
                    color: orange;
                }

                .count {
                    float: right;
                    color: #999;
                    font-size: 12px;
                }
            }

            .textarea {
                padding: 16px 0;
                textarea {
                    border: 1px solid #ddd;
                    width: 100%;
                    border-radius: 8px;
                }
            }
        }
    }

    .b {
        overflow: hidden;
        padding: 16px;

        .item {
            border-bottom: 1px solid #eee;
            overflow: hidden;
            white-space: nowrap;
            padding: 8px 16px;

            .img {
                margin-right: 16px;
                float: left;
                height: 48px;
                width: 48px;
                background: whitesmoke no-repeat center / cover;
                border-radius: 50%;
            }

            .obj {
                overflow: hidden;
                font-size: 12px;
                .name {
                    line-height: 24px;
                    color: $color;
                }
                .time {
                    float: right;
                    color: #999;
                }

                .txt {
                    white-space: normal;
                }

                .feeds {
                    color: #999;
                    .textarea {
                        margin: 8px 0;
                    }
                    .itm {
                        margin-right: 16px;
                        display: inline-block;
                    }
                }
            }
            .replays {
                font-size: 12px;
                background: #f1f1f1;
                margin: 8px 0;
                padding: 8px 16px;
                border-radius: 8px;
                .row {
                    line-height: 24px;
                    overflow: hidden;
                    white-space: nowrap;
                    .name {
                        overflow: hidden;
                        text-overflow: ellipsis;
                        width: 60px;
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
}
</style>
