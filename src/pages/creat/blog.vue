<template>
    <div class="pages">
        <Navbar title="发日志"></Navbar>
        <div class="main">
            <van-cell-group>
                <van-field :maxlength="45" v-model="formData.title" label="标题" placeholder="输入标题" input-align="right" clearable/>
                <van-cell title="预览图">
                    <slot>
                        <van-uploader :after-read="onRead" class="upload">
                            <div class="img" :style="api.imgBG(formData.newsFaceUrl)" v-if="formData.newsFaceUrl"></div>
                            <van-icon class-prefix="icon" name="camerarotate" color="#ccc" size=".5rem" v-else/>
                        </van-uploader>
                    </slot>
                </van-cell>
            </van-cell-group>
            <Editor ref="editor" @on-change="handleChange" v-model="formData.content"/>
            <div class="actions">
                <div class="btn" @click="toSubmit">发布</div>
            </div>
        </div>
    </div>
</template>
<script>
import Navbar from "_c/navbar/navbar.vue";
import Editor from "_c/editor";
export default {
    name: "Page",
    components: {
        Navbar,
        Editor
    },
    data() {
        return {
            formData: {
                title: "",
                newsFaceUrl: "",
                content: ""
            }
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
                        this.formData.newsFaceUrl = res.data.file_path;
                    } else {
                        this.$toast(res.msg);
                    }
                });
        },
        handleChange(html, text) {
            this.formData.content = html;
        },
        toSubmit() {
            if (!this.formData.title) {
                this.$toast("未输入标题");
                return;
            }
            if (!this.formData.content) {
                this.$toast("未输入正文");
                return;
            }
            this.api
                .post(this.api.user.base + this.api.user.rizhi_add, {
                    status: 1,
                    title: this.formData.title || "",
                    newsFaceUrl: this.formData.newsFaceUrl || "",
                    content: this.formData.content || ""
                })
                .then(res => {
                    if (res.code === 200) {
                        this.$router.go(-1);
                        this.$toast("添加成功");
                    } else {
                        this.$toast(res.msg);
                        return;
                    }
                });
        }
    }
};
</script>
