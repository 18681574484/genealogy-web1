<template>
    <div class="main">
        <div class="inner">
            <div class="suc">
                <div class="grid">
                    <div class="h">
                        <div class="more link" @click="isAdd = true">
                            <iconfont name="edit"/>
                            <span>写日志</span>
                        </div>
                        <div class="tit">日志</div>
                    </div>
                    <div class="bd" style="min-height:450px;">
                        <div class="item" v-for="v in list" :key="v.id">
                            <div class="img" :style="api.imgBG(v.newsFaceUrl)"></div>
                            <div class="obj">
                                <div class="tit">{{v.title}}</div>
                                <div class="intro">{{v.content}}</div>
                                <div class="tag">
                                    <span class="del" @click="onDel(v.id)">删除</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Page :total="total" @on-change="chgPage" :page-size="6"/>
        </div>
        <Modal v-model="isAdd" title="写日志" width="640px" :footer-hide="true">
            <Form :model="formData">
                <FormItem label="标题">
                    <Input v-model="formData.title" placeholder="输入标题" clearable :maxlength="11" @keyup.enter.native="toSubmit"/>
                </FormItem>
                <div class="t">预览图</div>
                <FormItem>
                    <Upload class="upload" :action="api.admin.base + api.admin.upload_img" name="file" :show-upload-list="false" :on-success="handleSuccess" :format="['jpg','jpeg','png']">
                        <Button type="dashed">
                            <div class="img" :style="api.imgBG(formData.newsFaceUrl)" v-if="formData.newsFaceUrl"/>
                            <Icon type="ios-camera" size="40" color="#ccc" v-else></Icon>
                        </Button>
                    </Upload>
                </FormItem>
                <FormItem>
                    <editor ref="editor" @on-change="handleChange"/>
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
import Editor from "_c/editor";
export default {
    components: {
        Editor
    },
    data() {
        return {
            isAdd: false,
            list: [],
            total: 0,
            page: 1,
            formData: {}
        };
    },
    computed: {},
    mounted: function() {
        this.getList();
    },
    methods: {
        getList() {
            this.api
                .post(this.api.user.base + this.api.user.rizhi_list, {
                    pageSize:6,
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
        handleChange(html, text) {
            this.formData.content = html;
        },
        handleSuccess(res, file) {
            if (res.code == 200) {
                this.formData.newsFaceUrl = res.data.file_path;
            }
        },
        onDel(e) {
            this.$Modal.confirm({
                title: "提示",
                content: "确定删除这个文章？",
                onOk: () => {
                    this.api
                        .post(this.api.user.base + this.api.user.rizhi_del, {
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
            if (!this.formData.content) {
                this.$Message.error("未输入正文");
                return;
            }
            this.api
                .post(this.api.user.base + this.api.user.rizhi_add, {
                    status: 1,
                    title: this.formData.title || '',
                    newsFaceUrl: this.formData.newsFaceUrl || '',
                    content: this.formData.content || ''
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
@import "@/assets/css/var.scss";
.bd {
    .item {
        display: block;
        overflow: hidden;
        white-space: nowrap;
        padding: 16px;
        .img {
            float: left;
            margin-right: 16px;
            height: 120px;
            width: 160px;
            background: whitesmoke no-repeat center / cover;
        }
        .obj {
            height: 120px;
            overflow: hidden;
            .tit {
                font-size: 14px;
                line-height: 32px;
                width: 100%;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            .intro {
                height: 72px;
                line-height: 24px;
                color: #999;
                white-space: normal;
            }
            .tag {
                span {
                    float: right;
                    margin-left: 16px;
                    cursor: pointer;
                    &:hover {
                        color: $color;
                    }
                }
            }
        }
    }
}
.t {
    line-height: 32px;
}
.upload {
    button {
        width: 162px;
        height: 122px;
        padding: 0;
        .img {
            width: 160px;
            height: 120px;
            padding: 0;
            background: no-repeat center / cover;
        }
    }
}
</style>