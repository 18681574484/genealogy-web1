<template>
    <div class="inner">
        <div class="suc">
            <div class="grid">
                <div class="h">
                    <div class="more link" @click="isAdd = true;formData.picUrl=''">
                        <iconfont name="upload"/>
                        <span>上传</span>
                    </div>
                    <div class="tit">视频</div>
                </div>
                <div class="b" style="min-height:450px;">
                    <Row :gutter="16">
                        <i-col :xs="12" :sm="6" :md="6" class="item" v-for="v in list" :key="v.id">
                            <div class="img" :style="api.imgBG(v.videoPicUrl)">
                                <img src="http://iph.href.lu/80x45">
                                <div class="hover" @click="toShow(v.videoUrl)">
                                    <Icon type="ios-videocam"/>
                                </div>
                            </div>
                            <div class="obj">
                                <div class="tit">{{v.title}}</div>
                                <div class="tag">
                                    <span class="date">{{dayjs(v.updateTime).format("YYYY-MM-DD")}}</span>
                                    <span>0 次播放</span>
                                </div>
                                <div class="tag">
                                    <span style="float:right;" @click="onDel(v.id)">删除</span>
                                </div>
                            </div>
                        </i-col>
                    </Row>
                </div>
            </div>
            <Page :total="total" @on-change="chgPage" :page-size="8"/>
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
        <Modal v-model="isAdd" title="上传图片" width="510px" :footer-hide="true">
            <Form :model="formData" :label-width="80">
                <FormItem label="标题">
                    <Input v-model="formData.title" placeholder="输入标题" clearable :maxlength="11" @keyup.enter.native="toSubmit"/>
                </FormItem>
                <FormItem label="缩略图">
                    <Upload class="upload" :action="api.admin.base + api.admin.upload_img" name="file" :show-upload-list="false" :on-success="handleSuccess" :format="['jpg','jpeg','png']">
                        <Button type="dashed">
                            <div class="img" :style="api.imgBG(formData.videoPicUrl)" v-if="formData.videoPicUrl"/>
                            <Icon type="ios-camera" size="40" color="#ccc" v-else></Icon>
                        </Button>
                    </Upload>
                </FormItem>
                <FormItem label="视频文件">
                    <Upload :action="api.admin.base + api.admin.upload_img" name="file" :show-upload-list="true" :on-success="uploadVideo">
                        <Button type="dashed">上传</Button>
                    </Upload>
                </FormItem>
                <FormItem>
                    <Button type="primary" @click="toSubmit" style="margin-right:16px;">提交</Button>
                    <Button @click="isAdd = false">关闭</Button>
                </FormItem>
            </Form>
        </Modal>
    </div>
</template>
<script>
export default {
    components: {},
    data() {
        return {
            visible: false,
            isAdd: false,
            isShow: false,
            list: [],
            total: 0,
            page: 1,
            formData: {
                picUrl: ""
            },
            curr: ""
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
        chgPage(e) {
            this.page = e;
            this.getList();
        },
        handleSuccess(res, file) {
            if (res.code == 200) {
                this.formData.videoPicUrl = res.data.file_path;
            }
        },
        uploadVideo(res, file) {
            if (res.code == 200) {
                this.formData.videoUrl = res.data.file_path;
            }
        },
        onDel(e) {
            this.$Modal.confirm({
                title: "提示",
                content: "确定删除这个视频？",
                onOk: () => {
                    this.api
                        .post(this.api.user.base + this.api.user.video_del, {
                            id: e
                        })
                        .then(res => {
                            this.getList();
                        });
                }
            });
        },
        toSubmit() {
            if (!this.formData.title) {
                this.$Message.error("未输入标题");
                return;
            }
            if (!this.formData.videoPicUrl) {
                this.$Message.error("未选择图片");
                return;
            }
            if (!this.formData.videoUrl) {
                this.$Message.error("未选择视频");
                return;
            }
            this.api
                .post(this.api.user.base + this.api.user.video_add, {
                    status: 1,
                    title: this.formData.title || "",
                    videoPicUrl: this.formData.videoPicUrl || "",
                    videoUrl: this.formData.videoUrl || ""
                })
                .then(res => {
                    if (res.code === 200) {
                        this.$Message.success("添加成功");
                        this.getList();
                        this.isAdd = false;
                    } else {
                        this.$Message.warning(res.msg);
                        return;
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
.upload {
    button {
        width: 162px;
        height: 92px;
        padding: 0;
        .img {
            width: 160px;
            height: 90px;
            padding: 0;
            background: no-repeat center / cover;
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
