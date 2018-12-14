<template>
    <div class="main">
        <div class="inner">
            <Breadcrumb>
                <BreadcrumbItem to="/u">首页</BreadcrumbItem>
                <BreadcrumbItem>详情</BreadcrumbItem>
            </Breadcrumb>
        </div>
        <div class="inner">
            <div class="detail" v-if="isload">
                <div class="h">
                    <div class="tit" v-html="info.title"></div>
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
                    <div class="content" v-html="info.content"></div>
                </div>
            </div>
            <Spin size="large" fix v-else></Spin>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            info: {},
            isload: false
        };
    },
    computed: {},
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

            p {
                margin-bottom: 1em;
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
                line-height: 40px;

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
                height: 64px;
                width: 64px;
                background: whitesmoke no-repeat center / cover;
                border-radius: 50%;
            }

            .obj {
                overflow: hidden;

                .user {
                    line-height: 32px;

                    .name {
                        color: $color;
                    }

                    i {
                        margin: 8px;
                        color: orange;
                    }

                    .date {
                        color: #999;
                    }
                }

                .text {
                    white-space: normal;
                }

                .tag {
                    color: #999;

                    .itm {
                        margin-right: 16px;
                        display: inline-block;
                    }
                }
            }
        }
    }
}
</style>
