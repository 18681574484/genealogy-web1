<template>
    <div>
        <Form :model="formData" :label-width="80">
            <FormItem label="平台名称">
                <Row :gutter="16">
                    <i-col :span="12">
                        <Input v-model="formData.siteName" placeholder="网站名" :maxlength="10" @keyup.enter.native="toSubmit"/>
                    </i-col>
                    <i-col :span="6">{{formData.siteName ? formData.siteName.length : 0}} / 10</i-col>
                </Row>
            </FormItem>
            <FormItem label="徽标">
                <Upload class="upload" :action="api.admin.base + api.admin.upload_img" name="file" :show-upload-list="false" :on-success="handleSuccess" :format="['jpg','jpeg','png']">
                    <Button type="dashed">
                        <div class="img" :style="api.imgBG(formData.totemPicSrc)" v-if="formData.totemPicSrc"/>
                        <Icon type="ios-camera" size="40" color="#ccc" v-else></Icon>
                    </Button>
                </Upload>
            </FormItem>
            <FormItem label="祖先描述">
                <Input type="textarea" :rows="6" v-model="formData.description" placeholder="祖先描述" style="font-size:12px;" :maxlength="1000" @keyup.enter.native="toSubmit"/>
                {{formData.description?formData.description.length:0}} / 1000
            </FormItem>
            <FormItem label>
                <Button type="primary" @click="toSubmit" style="margin-right:16px;">提交</Button>
                <Button @click="isedit = false">关闭</Button>
            </FormItem>
        </Form>
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            formData: {
                siteName: "",
                description: "",
                totemPicSrc: ""
            }
        };
    },
    computed: {
        admin() {
            return this.$store.state.admin;
        }
    },
    mounted() {
        this.getInfo();
    },
    methods: {
        getInfo() {
            this.api
                .post(this.api.adminUrl("site_info", this.admin.step), {
                    siteId: this.admin.id
                })
                .then(res => {
                    if (res.code == 200) {
                        this.formData = res.data;
                    }
                });
        },
        handleSuccess(res, file) {
            if (res.code == 200) {
                this.formData.totemPicSrc = res.data.file_path;
            }
        },
        toSubmit() {
            if (!this.formData.siteId) {
                return;
            }
            this.api
                .post(this.api.adminUrl("site_edit", this.admin.step), {
                    id: this.formData.id,
                    siteName: this.formData.siteName || "",
                    totemPicSrc: this.formData.totemPicSrc || "",
                    description: this.formData.description || ""
                })
                .then(res => {
                    if (res.code === 200) {
                        this.$Message.success("修改成功");
                        this.getInfo();
                    }
                });
        }
    }
};
</script>

<style lang="scss" scoped>
.upload {
    button {
        width: 162px;
        height: 162px;
        padding: 0;
        .img {
            width: 160px;
            height: 160px;
            padding: 0;
            background: no-repeat center / cover;
        }
    }
}
</style>