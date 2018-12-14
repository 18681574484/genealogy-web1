<template>
    <div class="suc">
        <div class="grid">
            <div class="h">
                <div class="more">全部</div>
                <div class="tit">视频</div>
            </div>
            <div class="b">
                <Row :gutter="16">
                    <i-col :xs="12" :sm="6" :md="4" class="item" v-for="v in list" :key="v.id">
                        <div class="img" :style="api.imgBG(v.videoPicUrl)">
                            <img src="http://iph.href.lu/80x45">
                            <div class="hover" @click="toShow(v.videoPicUrl)">
                                <Icon type="ios-videocam"/>
                            </div>
                        </div>
                        <div class="obj">
                            <div class="tit">{{v.title}}</div>
                            <div class="tag">
                                <span class="date">{{dayjs(v.updateTime).format("YYYY-MM-DD")}}</span>
                                <span>0 次播放</span>
                            </div>
                        </div>
                    </i-col>
                </Row>
            </div>
        </div>
        <div class="modal" v-if="visible">
            <div class="bg" @click="visible = false">
                <div class="close">
                    <iconfont name="close"/>
                </div>
            </div>
            <div class="in">
                <video width="100%" controls controlslist="nofullscreen nodownload noremote footbar" autoplay v-if="curr">
                    <source :src="api.imgurl(curr)" type="video/mp4">
                </video>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    components: {},
    data() {
        return {
            list: [],
            total: 0,
            curr: "",
            visible: false
        };
    },
    computed: {},
    mounted: function() {
        this.getList();
    },
    methods: {
        getList() {
            this.api
                .post(this.api.user.base + this.api.user.video_list, {
                    pageNo: this.page
                })
                .then(res => {
                    if (res.code == 200) {
                        this.list = res.data.records;
                        this.total = res.data.total;
                    } else {
                    }
                });
        },
        toShow(e) {
            this.curr = e;
            this.visible = true;
        }
    }
};
</script>
<style lang="scss" scoped>
.suc {
    margin-top: 16px;
    .b {
        padding: 16px;
        .item {
            margin: 8px 0;
            position: relative;
            .img {
                position: relative;
                width: 100%;
                background: whitesmoke no-repeat center / cover;
                img {
                    width: 100%;
                    visibility: hidden;
                    display: block;
                }
                .hover {
                    position: absolute;
                    top: 0;
                    right: 0;
                    height: 100%;
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    flex-direction: column;
                    text-align: center;
                    background: rgba(0, 0, 0, 0.8);
                    cursor: pointer;
                    color: #fff;
                    font-size: 48px;
                    opacity: 0;
                }
                &:hover {
                    .hover {
                        opacity: 1;
                    }
                }
            }

            .obj {
                .tit {
                    font-size: 14px;
                    height: 32px;
                    line-height: 32px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                .tag {
                    white-space: nowrap;
                    font-size: 12px;
                    color: #999;
                    .date {
                        float: right;
                    }
                }
            }
        }
    }
}
.modal {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 999;
    height: 100%;
    width: 100%;
    .bg {
        position: relative;
        height: 100%;
        width: 100%;
        background: rgba(black, 0.8);
        .close {
            position: absolute;
            z-index: 1;
            cursor: pointer;
            right: 5%;
            top: 5%;
            i {
                font-size: 40px;
                color: #fff;
                opacity: 0.5;
                &:hover {
                    opacity: 1;
                }
            }
        }
    }
    .in {
        position: absolute;
        z-index: 1;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        video {
            min-width: 600px;
            max-width: 90%;
            max-height: 600px;
            min-height: 300px;
        }
    }
}
</style>
