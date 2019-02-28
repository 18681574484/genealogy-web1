<template>
    <div class="pages">
        <Navbar title="视频">
            <small slot="right">
                <router-link tag="span" to="/add/video">发视频</router-link>
            </small>
        </Navbar>
        <div class="main">
            <van-list v-model="loading" :finished="finished" @load="onLoad" :offset="50" class="list">
                <None v-if="!list.length && isload"/>
                <div class="item" v-for="v in list" :key="v.id" @click="toShow(v.videoUrl)" @touchstart="onDel(v)" @touchend="clearLoop(v)">
                    <div class="tit">{{v.title}}</div>
                    <div class="img" :style="api.imgBG(v.videoPicUrl)">
                        <img src="http://iph.href.lu/80x45">
                        <div class="hover">
                            <van-icon class-prefix="icon" name="videofill" color="#ccc" size="1rem"/>
                        </div>
                    </div>
                    <div class="obj">
                        <div class="tag">
                            <van-tag color="#d2211b" mark size="medium">视频</van-tag>
                            <span class="date">{{dayjs(v.updateTime.replace("+0000", "Z")).format("YYYY-MM-DD")}}</span>
                            <span>0 次播放</span>
                        </div>
                    </div>
                </div>
            </van-list>
        </div>
        <van-popup v-model="show" position="top" @click-overlay="curr = ''">
            <video ref="video" width="100%" controls controlslist="nofullscreen nodownload noremote footbar" autoplay v-if="curr">
                <source :src="api.imgurl(curr)" type="video/mp4">
            </video>
        </van-popup>
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
            show: false,
            curr: "",
            list: [],
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
        onDel(e) {
            clearInterval(this.Loop);
            this.Loop = setTimeout(() => {
                this.$dialog
                    .confirm({
                        title: "提示",
                        message: "确定删除这个视频？"
                    })
                    .then(() => {
                        this.api
                            .post(
                                this.api.user.base + this.api.user.video_del,
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
        getList() {
            this.api
                .post(this.api.user.base + this.api.user.video_list, {
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
        toShow(e) {
            this.curr = e;
            this.show = true;
        }
    }
};
</script>
<style lang="less" scoped>
.list {
    .item {
        padding: 0.2rem 0.3rem;
        overflow: hidden;
        border-bottom: 1px solid #eee;
        .tit {
            height: 0.6rem;
            line-height: 0.6rem;
            font-size: 0.32rem;
            overflow: hidden;
            white-space: nowrap;
            width: 100%;
            text-overflow: ellipsis;
        }
        .img {
            position: relative;
            background: no-repeat center / cover;
            img {
                width: 100%;
                display: block;
                visibility: hidden;
            }
            .hover {
                position: absolute;
                z-index: 1;
                top: 0;
                right: 0;
                height: 100%;
                width: 100%;
                display: flex;
                justify-content: center;
                flex-direction: column;
                text-align: center;
                background: rgba(0, 0, 0, 0.4);
                cursor: pointer;
                color: #fff;
            }
        }
        .obj {
            line-height: 0.6rem;
            .tag {
                color: #999;
                font-size: 0.24rem;
                span {
                    margin-right: 0.2rem;
                }
            }
        }
    }
}
</style>
