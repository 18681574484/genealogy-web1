<template>
    <div>
        <Button type="primary" @click="toEdit(0)">添加</Button>
        <Table border :columns="columns" :data="list" style="margin:16px 0;"></Table>
        <Page :total="total" @on-change="chgPage" :page-size="8"/>
        <Drawer :mask-closable="false" :title="formData.id ? '修改':'添加'" width="80%" v-model="isedit">
            <Row :gutter="32">
                <i-col :span="6">
                    <div style="text-align:center">
                        <ButtonGroup shape="circle" style="margin:16px auto;" size="small">
                            <Button @click="stepCurr>0? stepCurr-- :stepCurr =0">
                                <Icon type="ios-arrow-back"></Icon>上一步
                            </Button>
                            <Button @click="stepCurr<3? stepCurr++ :stepCurr =3">下一步
                                <Icon type="ios-arrow-forward"></Icon>
                            </Button>
                        </ButtonGroup>
                    </div>
                    <Steps :current="stepCurr" direction="vertical" style="margin:32px 0;">
                        <Step title="申请人" content="申请求助的基本信息"></Step>
                        <Step title="收款人" content="录入收款人信息"></Step>
                        <Step title="推荐人" content="录入推荐人信息"></Step>
                        <Step title="上传证明" content="录入证明图片"></Step>
                    </Steps>
                    <div>
                        <Button type="primary" @click="toSubmit" long>提交申请</Button>
                        <Button @click="isedit = false" long style="margin-top:16px;">关闭</Button>
                    </div>
                </i-col>
                <i-col :span="18">
                    <Form :model="formData" :label-width="80" v-if="stepCurr == 0">
                        <FormItem label="标题">
                            <Input v-model="formData.title" placeholder="输入申请求助标题" @keyup.enter.native="toSubmit"/>
                        </FormItem>
                        <FormItem label="申请人">
                            <Input v-model="formData.title" placeholder="申请人姓名" @keyup.enter.native="toSubmit"/>
                        </FormItem>
                        <FormItem label="申请金额">
                            <Input v-model="formData.title" placeholder="申请金额" @keyup.enter.native="toSubmit"/>
                        </FormItem>
                        <FormItem label="联系电话">
                            <Input v-model="formData.title" placeholder="申请人联系电话" @keyup.enter.native="toSubmit"/>
                        </FormItem>
                        <FormItem label="联系地址">
                            <Input v-model="formData.title" placeholder="申请人联系地址" @keyup.enter.native="toSubmit"/>
                        </FormItem>
                        <FormItem label="情况简介">
                            <editor ref="editor" @on-change="handleChange" placeholder="申请人贫困情况简介"/>
                        </FormItem>
                    </Form>
                    <Form :model="formData" :label-width="80" v-if="stepCurr == 1">
                        <FormItem label="收款人">
                            <Input v-model="formData.title" placeholder="收款人姓名" @keyup.enter.native="toSubmit"/>
                        </FormItem>
                        <FormItem label="联系电话">
                            <Input v-model="formData.title" placeholder="联系电话" @keyup.enter.native="toSubmit"/>
                        </FormItem>
                        <FormItem label="联系地址">
                            <Input v-model="formData.title" placeholder="联系地址" @keyup.enter.native="toSubmit"/>
                        </FormItem>
                        <FormItem label="身份证">
                            <Input v-model="formData.title" placeholder="身份证" @keyup.enter.native="toSubmit"/>
                        </FormItem>
                        <FormItem label="开户银行">
                            <Input v-model="formData.title" placeholder="开户银行" @keyup.enter.native="toSubmit"/>
                        </FormItem>
                        <FormItem label="银行卡号">
                            <Input v-model="formData.title" placeholder="银行卡号" @keyup.enter.native="toSubmit"/>
                        </FormItem>
                        <FormItem label="确认卡号">
                            <Input v-model="formData.title" placeholder="确认卡号" @keyup.enter.native="toSubmit"/>
                        </FormItem>
                    </Form>
                    <Form :model="formData" :label-width="80" v-if="stepCurr == 2">
                        <FormItem label="推荐人">
                            <Input v-model="formData.title" placeholder="推荐人姓名" @keyup.enter.native="toSubmit"/>
                        </FormItem>
                        <FormItem label="联系电话">
                            <Input v-model="formData.title" placeholder="推荐人联系电话" @keyup.enter.native="toSubmit"/>
                        </FormItem>
                        <FormItem label="联系地址">
                            <Input v-model="formData.title" placeholder="推荐人联系地址" @keyup.enter.native="toSubmit"/>
                        </FormItem>
                        <FormItem label="工作单位">
                            <Input v-model="formData.title" placeholder="推荐人工作单位" @keyup.enter.native="toSubmit"/>
                        </FormItem>
                        <FormItem label="职务">
                            <Input v-model="formData.title" placeholder="推荐人职务" @keyup.enter.native="toSubmit"/>
                        </FormItem>
                    </Form>
                    <Form :model="formData" :label-width="80" v-if="stepCurr == 3">
                    </Form>
                </i-col>
            </Row>
        </Drawer>
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
            isedit: false,
            list: [],
            total: 0,
            page: 1,
            stepCurr: 0,
            formData: {
                id: "",
                newsUploadFileList: []
            },
            fileName: "",
            filePath: "",
            columns: [
                { title: "ID", width: 80, key: "id" },
                {
                    title: " ",
                    width: 64,
                    align: "center",
                    key: "status",
                    render: (h, e) => {
                        if (e.row.status != 2) {
                            return null;
                        }
                        return h("Icon", {
                            props: {
                                type: "ios-filing-outline",
                                size: "20"
                            }
                        });
                    }
                },
                { title: "标题", minWidth: 320, key: "newsTitle" },
                { title: "浏览数", width: 80, key: "visitNum" },
                { title: "支出用途", minWidth: 160, key: "useFor" },
                { title: "支出金额", width: 160, key: "amount" },
                { title: "日期", width: 160, key: "datetime" },
                {
                    title: "操作",
                    key: "action",
                    width: 160,
                    align: "center",
                    render: (h, params) => {
                        return h("div", [
                            h("Button", {
                                props: {
                                    type: "primary",
                                    size: "small",
                                    icon: "ios-create"
                                },
                                style: {
                                    marginRight: "5px"
                                },
                                on: {
                                    click: () => {
                                        this.toEdit(this.list[params.index].id);
                                    }
                                }
                            }),
                            h("Button", {
                                props: {
                                    type: "error",
                                    size: "small",
                                    icon: "md-trash"
                                },
                                on: {
                                    click: () => {
                                        this.remove(params.index);
                                    }
                                }
                            })
                        ]);
                    }
                }
            ]
        };
    },
    computed: {
        admin() {
            return this.$store.state.admin;
        }
    },
    watch: {
        url: function(curVal, oldVal) {
            if (curVal != oldVal) {
                this.getList();
            }
        }
    },
    mounted: function() {
        this.getList();
    },
    methods: {
        getList(e) {
            this.api
                .get(this.url, {
                    pageNo: this.page
                })
                .then(res => {
                    if (res.code == 200) {
                        let list = res.data.records;
                        list.forEach(v => {
                            v.datetime = this.dayjs(v.updateTime).format(
                                "YYYY-MM-DD HH:mm:ss"
                            );
                        });
                        this.list = list;
                        this.total = res.data.total;
                    } else {
                        this.$Message.warning(res.msg);
                        return;
                    }
                });
        },
        chgPage(e) {
            this.page = e;
            this.getList();
        },
        handleChange(html, text) {
            this.formData.newsText = html;
        },
        toEdit(e) {
            this.fileName = "";
            this.filePath = "";
            this.$refs.editor.setHtml("");
            if (!e) {
                this.formData = {
                    id: "",
                    newsUploadFileList: []
                };
                this.isedit = true;
            } else {
                this.api
                    .post(
                        this.api.adminUrl("charity_list_info", this.admin.step),
                        {
                            id: e
                        }
                    )
                    .then(res => {
                        if (res.code == 200) {
                            this.formData = res.data;
                            this.$refs.editor.setHtml(this.formData.newsText);
                            this.isedit = true;
                        } else {
                            this.$Message.error("发生错误");
                        }
                    });
            }
        },
        remove(index) {
            this.$Modal.confirm({
                title: "提示",
                content: "确定删除这个文章？",
                onOk: () => {
                    this.api
                        .post(
                            this.api.adminUrl(
                                "charity_list_del",
                                this.admin.step
                            ),
                            {
                                id: this.list[index].id
                            }
                        )
                        .then(res => {
                            this.list.splice(index, 1);
                            this.getList();
                        });
                }
            });
        },
        handleSuccess(res, file) {
            if (res.code == 200) {
                this.fileName = res.data.file_name;
                this.filePath = res.data.file_path;
            }
        },
        toSubmit() {
            if (!this.formData.newsTitle) {
                this.$Message.error("未输入标题");
                return;
            }
            if (!this.formData.newsText) {
                this.$Message.error("未输入正文");
                return;
            }
            if (!this.formData.useFor) {
                this.$Message.error("未输入支出用途");
                return;
            }
            if (!this.formData.amount) {
                this.$Message.error("未输入支出金额");
                return;
            }
            if (!this.api.isNumber(this.formData.amount * 100)) {
                this.$Message.error("请输入正确的金额");
                return;
            }
            let data = {
                showId: this.type,
                newsTitle: this.formData.newsTitle,
                newsText: this.formData.newsText,
                visitNum: this.formData.visitNum ? this.formData.visitNum : 0,
                amount: this.formData.amount,
                useFor: this.formData.useFor,
                fileName: this.fileName,
                filePath: this.filePath
            };
            if (this.formData.id) {
                data.id = this.formData.id;
            }
            this.api
                .post(
                    this.api.adminUrl("charity_list_edit", this.admin.step),
                    data
                )
                .then(res => {
                    if (res.code === 200) {
                        if (data.id) {
                            this.$Message.success("修改成功");
                        } else {
                            this.$Message.success("添加成功");
                        }
                        this.getList();
                        this.isedit = false;
                    } else {
                        this.$Message.warning(res.msg);
                        return;
                    }
                });
        },
        toDrft() {
            if (!this.formData.newsTitle) {
                this.$Message.error("未输入标题");
                return;
            }
            if (!this.formData.newsText) {
                this.$Message.error("未输入正文");
                return;
            }
            if (!this.formData.useFor) {
                this.$Message.error("未输入支出用途");
                return;
            }
            if (!this.formData.amount) {
                this.$Message.error("未输入支出金额");
                return;
            }
            if (!this.api.isNumber(this.formData.amount * 100)) {
                this.$Message.error("请输入正确的金额");
                return;
            }
            let data = {
                showId: this.type,
                newsTitle: this.formData.newsTitle,
                newsText: this.formData.newsText,
                visitNum: this.formData.visitNum ? this.formData.visitNum : 0,
                amount: this.formData.amount,
                useFor: this.formData.useFor,
                fileName: this.fileName,
                filePath: this.filePath
            };
            if (this.formData.id) {
                data.id = this.formData.id;
            }
            this.api
                .post(
                    this.api.adminUrl("charity_list_drft", this.admin.step),
                    data
                )
                .then(res => {
                    if (res.code === 200) {
                        if (data.id) {
                            this.$Message.success("修改成功");
                        } else {
                            this.$Message.success("添加成功");
                        }
                        this.getList();
                        this.isedit = false;
                    } else {
                        this.$Message.warning(res.msg);
                        return;
                    }
                });
        }
    },
    props: ["url", "menu", "type"]
};
</script>
<style lang="scss" scoped>
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