<template>
    <div class="pages">
        <Navbar title="照片">
            <small slot="right">
                <van-uploader :after-read="onRead">传照片</van-uploader>
            </small>
        </Navbar>
        <div class="main">
            <None v-if="!list.length && isload"/>
            <van-notice-bar v-if="list.length" mode="closeable">提示：长按图片可删除。</van-notice-bar>
            <van-list v-model="loading" :finished="finished" @load="onLoad" :offset="50" class="list">
                <van-row gutter="15">
                    <van-col span="12" class="item" v-for="v in list" :key="v.id">
                        <div class="img" :style="api.imgBG(v.picUrl)" @click="onShow(v.picUrl)" @touchstart="onDel(v)" @touchend="clearLoop(v)">
                            <img src="http://iph.href.lu/40x30">
                        </div>
                    </van-col>
                </van-row>
            </van-list>
        </div>
    </div>
</template>
<script>
import { ImagePreview } from "vant";
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
        onRead(e) {
            this.api
                .upload(
                    this.api.admin.base + this.api.admin.upload_img,
                    {},
                    {
                        key: "file",
                        file: e.file
                    }
                )
                .then(res => {
                    if ((res.code = 200)) {
                        this.api
                            .post(
                                this.api.user.base + this.api.user.picture_add,
                                {
                                    status: 1,
                                    picUrl: res.data.file_path
                                }
                            )
                            .then(res => {
                                if (res.code === 200) {
                                    this.$toast("添加成功");
                                    this.list = [];
                                    this.total = 0;
                                    this.page = 1;
                                    this.finished = false;
                                    this.getList();
                                } else {
                                    this.$toast(res.msg);
                                    return;
                                }
                            });
                    } else {
                        this.$toast(res.msg);
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
                .post(this.api.user.base + this.api.user.picture_list, {
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
                        message: "确定删除这个图片？"
                    })
                    .then(() => {
                        this.api
                            .post(
                                this.api.user.base + this.api.user.picture_del,
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
        onShow(e) {
            ImagePreview([this.api.imgurl(e)]);
        }
    }
};
</script>
<style lang="less" scoped>
.list {
    padding: 0.2rem 0.3rem;
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
        }
        .obj {
            padding: 8px 0;
            text-align: center;
        }
    }
}
</style>
