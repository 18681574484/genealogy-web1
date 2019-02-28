<template>
    <div class="inner">
        <div class="suc">
            <div class="grid">
                <div class="h">
                    <div class="more link" @click="onAdd">
                        <iconfont name="upload"/>
                        <span>上传</span>
                    </div>
                    <div class="tit">
                        图片
                        <small>[ {{total}} ]</small>
                    </div>
                </div>
                <div class="b" style="minHeight:450px;">
                    <Row :gutter="16">
                        <i-col :xs="12" :sm="6" :md="6" class="item" v-for="v in list" :key="v.id">
                            <div class="img" :style="api.imgBG(v.picUrl)">
                                <img src="http://iph.href.lu/40x30">
                            </div>
                            <div class="obj">
                                <ButtonGroup>
                                    <Button type="primary" @click="curr = v.picUrl;isShow=true">查看</Button>
                                    <Button @click="onDel(v.id)">删除</Button>
                                </ButtonGroup>
                            </div>
                        </i-col>
                    </Row>
                </div>
            </div>
            <Page :total="total" @on-change="chgPage" :page-size="8"/>
        </div>
        <Modal v-model="isShow" title="查看图片" width="640px" :footer-hide="true" style="text-align:center;">
            <img :src="api.imgurl(curr)" style="max-width:100%;">
        </Modal>
        <Modal v-model="isAdd" title="上传图片" width="510px" :footer-hide="true">
            <Form :model="formData" class="b">
                <FormItem>
                    <Upload class="upload" :action="api.admin.base + api.admin.upload_img" name="file" :show-upload-list="false" :on-success="handleSuccess" :format="['jpg','jpeg','png']">
                        <Button type="dashed">
                            <div class="img" :style="api.imgBG(formData.picUrl)" v-if="formData.picUrl"/>
                            <Icon type="ios-camera" size="40" color="#ccc" v-else></Icon>
                        </Button>
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
                .post(this.api.user.base + this.api.user.picture_list, {
                    pageNo: this.page
                })
                .then(res => {
                    if (res.code == 200) {
                        this.list = res.data.records;
                        this.total = res.data.total;
                    }
                });
        },
        chgPage(e) {
            this.page = e;
            this.getList();
        },
        handleSuccess(res, file) {
            if (res.code == 200) {
                this.formData.picUrl = res.data.file_path;
            }
        },
        onAdd(e) {
            this.formData = { picUrl: "" };
            this.isAdd = true;
        },
        onDel(e) {
            this.$Modal.confirm({
                title: "提示",
                content: "确定删除这个图片？",
                onOk: () => {
                    this.api
                        .post(this.api.user.base + this.api.user.picture_del, {
                            id: e
                        })
                        .then(res => {
                            this.getList();
                        });
                }
            });
        },
        toSubmit() {
            if (!this.formData.picUrl) {
                this.$Message.error("未选择图片");
                return;
            }
            this.api
                .post(this.api.user.base + this.api.user.picture_add, {
                    status: 1,
                    picUrl: this.formData.picUrl || ""
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
            }
            .obj {
                padding: 8px 0;
                text-align: center;
            }
        }
    }
}
.upload {
    button {
        width: 482px;
        height: 482px;
        padding: 0;
        .img {
            width: 480px;
            height: 480px;
            padding: 0;
            background: no-repeat center / cover;
        }
    }
}
</style>
