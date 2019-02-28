<template>
    <div class="pages">
        <Navbar title="发视频"></Navbar>
        <div class="main">
            <van-notice-bar mode="closeable">建议：不要上传超过15秒的视频</van-notice-bar>
            <van-cell-group>
                <van-field :maxlength="45" v-model="formData.title" label="标题" placeholder="输入标题" input-align="right" clearable/>
                <van-cell title="预览图">
                    <slot>
                        <van-uploader :after-read="onReadImg" class="upload">
                            <div class="img" :style="api.imgBG(formData.videoPicUrl)" v-if="formData.videoPicUrl"></div>
                            <van-icon class-prefix="icon" name="camerarotate" color="#ccc" size=".5rem" v-else/>
                        </van-uploader>
                    </slot>
                </van-cell>
                <van-cell title="视频">
                    <slot>
                        <van-uploader :after-read="onReadVideo" accept="video/*" multiple>
                            <div v-if="formData.videoUrl">已上传</div>
                            <div v-else>点击上传</div>
                        </van-uploader>
                    </slot>
                </van-cell>
            </van-cell-group>
            <div class="actions">
                <div class="btn" @click="toSubmit">发布</div>
            </div>
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
            formData: {
                title: "",
                videoPicUrl: "",
                videoUrl: ""
            }
        };
    },
    computed: {},
    mounted: function() {},
    methods: {
        onReadImg(e) {
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
                        this.formData.videoPicUrl = res.data.file_path;
                    } else {
                        this.$toast(res.msg);
                    }
                });
        },
        onReadVideo(e) {
            let toast = this.$toast.loading({
                mask: true,
                message: "上传中",
                duration: 0
            });
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
                        toast.clear();
                        this.formData.videoUrl = res.data.file_path;
                    } else {
                        this.$toast(res.msg);
                    }
                });
        },
        toSubmit() {
            if (!this.formData.title) {
                this.$toast("未输入标题");
                return;
            }
            if (!this.formData.videoPicUrl) {
                this.$toast("未选择图片");
                return;
            }
            if (!this.formData.videoUrl) {
                this.$toast("未选择视频");
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
                        this.$toast("添加成功");
                        this.$router.go(-1);
                    } else {
                        this.$toast(res.msg);
                        return;
                    }
                });
        }
    }
};
</script>
