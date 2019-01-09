<template>
    <div>
        <Button type="primary" @click="toEdit(0)">添加</Button>
        <Table border :columns="columns" :data="list" style="margin:16px 0;"></Table>
        <Page :total="total" @on-change="chgPage" :page-size="8"/>
        <Drawer :mask-closable="false" :title="formData.id ? '修改':'添加'" width="50%" v-model="isedit">
            <Form :model="formData" :label-width="80">
                <FormItem label="文件名">
                    <Input v-model="formData.fileName" placeholder="文件名" :maxlength="8"/>
                </FormItem>
                <FormItem label="文件">
                    <Upload :action="api.admin.base + api.admin.upload_img" :data="opat" name="file" :show-upload-list="true" :on-success="uploadFile">
                        <Button type="dashed">上传</Button>
                    </Upload>
                </FormItem>
                <FormItem label="联系人">
                    <Input v-model="formData.contactUser" placeholder="联系人"/>
                </FormItem>
                <FormItem label="姓氏">
                    <Select v-model="formData.familyCode" filterable remote clearable :remote-method="remoteMethod" :loading="loading" placeholder="搜索姓氏">
                        <Option v-for="v in options" :value="v.id" :key="v.id">{{v.value}}</Option>
                    </Select>
                </FormItem>
                <FormItem label="地区">
                    <al-cascader v-model="selected" :level="2" style="width:100%" placeholder="请选择地区"/>
                </FormItem>
                <FormItem label="状态">
                    <RadioGroup v-model="formData.status">
                        <Radio :label="1">
                            <span>公开</span>
                        </Radio>
                        <Radio :label="2">
                            <span>密码访问</span>
                        </Radio>
                    </RadioGroup>
                </FormItem>
                <FormItem label="访问密码" v-if="formData.status == 2">
                    <Input v-model="formData.password" placeholder="访问密码"/>
                </FormItem>
                <FormItem label>
                    <Button type="primary" @click="toSubmit" style="margin-right:16px;">提交</Button>
                    <Button @click="isedit = false">关闭</Button>
                </FormItem>
            </Form>
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
            opat: {
                isGenealogy: 2
            },
            isedit: false,
            list: [],
            total: 0,
            page: 1,
            formData: {},
            selected: [],
            loading: false,
            options: [],
            columns: [
                { title: "ID", width: 80, key: "id" },
                {
                    title: " ",
                    width: 64,
                    align: "center",
                    key: "status",
                    render: (h, e) => {
                        if (e.row.status == 2) {
                            return h("Icon", {
                                props: {
                                    type: "ios-lock",
                                    size: "20",
                                    title: "密码访问"
                                }
                            });
                        }
                        if (e.row.status == 3) {
                            return h("Icon", {
                                props: {
                                    type: "ios-eye-off",
                                    size: "20",
                                    title: "私密"
                                }
                            });
                        }
                        return null;
                    }
                },
                { title: "文件", minWidth: 320, key: "fileName" },
                { title: "联系人", width: 160, key: "contactUser" },
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
                .post(this.api.adminUrl("genealogy_list", this.admin.step), {
                    siteId: this.admin.id,
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
                    }
                });
        },
        chgPage(e) {
            this.page = e;
            this.getList();
        },
        toEdit(e) {
            this.resetSelect(e);
            if (!e) {
                this.formData = {};
                this.isedit = true;
            } else {
                this.api
                    .post(
                        this.api.adminUrl("genealogy_info", this.admin.step),
                        {
                            id: e
                        }
                    )
                    .then(res => {
                        if (res.code == 200) {
                            this.formData = res.data;
                            this.isedit = true;
                        } else {
                            this.$Message.error("发生错误");
                        }
                    });
            }
        },
        remoteMethod(e) {
            this.options = [];
            this.loading = true;
            this.api
                .get(this.api.user.base + this.api.user.firstname, {
                    value: e
                })
                .then(res => {
                    if (res.code == 200) {
                        this.loading = false;
                        this.options = res.data;
                    }
                });
        },
        resetSelect(e) {
            if (e) {
            } else {
            }
        },
        uploadFile(res, file) {
            this.formData.filePath = res.data.file_path;
        },
        remove(index) {
            this.$Modal.confirm({
                title: "提示",
                content: "确定删除这则家谱？",
                onOk: () => {
                    this.api
                        .post(
                            this.api.adminUrl("genealogy_del", this.admin.step),
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
            if (!this.formData.filePath) {
                this.$Message.error("请选择文件");
                return;
            }
            if (!this.formData.fileName) {
                this.$Message.error("请输入文件名");
                return;
            }
            if (!this.formData.contactUser) {
                this.$Message.error("请输入联系人");
                return;
            }
            if (!this.formData.familyCode) {
                this.$Message.error("请搜索姓氏并选择");
                return;
            }
            if (this.selected.length < 2) {
                this.$Message.error("请选择地区");
                return;
            }
            let data = {
                siteId: this.admin.id,
                fileName: this.formData.fileName,
                contactUser: this.formData.contactUser,
                regionCode: this.selected[this.selected.length - 1].code,
                familyCode: this.formData.familyCode,
                status: this.formData.status,
                password: this.formData.password || "",
                filePath: this.formData.filePath,
                isFrom: this.admin.step
            };
            if (this.formData.id) {
                data.id = this.formData.id;
            }
            this.api
                .post(
                    this.api.adminUrl("genealogy_edit", this.admin.step),
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
    }
};
</script>