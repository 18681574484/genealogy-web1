<template>
    <div>
        <Button type="primary" @click="toAdd">开通网站</Button>
        <Table border :columns="columns" :data="list" style="margin:16px 0;"></Table>
        <Page :total="total" @on-change="chgPage" :page-size="8"/>
        <Drawer :mask-closable="false" title="修改" :width="80" v-model="isedit">
            <Form :model="formData" :label-width="80">
                <FormItem label="网站名">
                    <Row :gutter="16">
                        <i-col :span="12">
                            <Input v-model="formData.siteName" placeholder="网站名" :maxlength="10" @keyup.enter.native="toSubmit"/>
                        </i-col>
                        <i-col :span="6">{{formData.siteName ? formData.siteName.length : 0}} / 6</i-col>
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
                    <Input type="textarea" :rows="6" v-model="formData.description" placeholder="祖先描述" style="font-size:12px;" :maxlength="300" @keyup.enter.native="toSubmit"/>
                    {{formData.description ? formData.description.length :0}} / 300
                </FormItem>
                <FormItem label="选择管理员" v-if="false">
                    <Select v-model="formData.role" style="width:200px;margin-right:16px;" @on-change="getSiteInfo">
                        <Option v-for="v in roleList" :value="v.value" :key="v.value" :disabled="v.disabled">{{ v.label }}</Option>
                    </Select>
                </FormItem>
                <FormItem label>
                    <Button type="primary" @click="toSubmit" style="margin-right:16px;">提交</Button>
                    <Button @click="isedit = false">关闭</Button>
                </FormItem>
            </Form>
        </Drawer>
        <Drawer :mask-closable="false" title="开通县级联谊会网站" :width="80" v-model="isadd">
            <Form :model="formAdd" :label-width="80">
                <FormItem label="网站类型">{{data.type=="pro" ? '省级联谊会':'县级联谊会'}}</FormItem>
                <FormItem label="网站名">
                    <Row>
                        <i-col :span="12" style="padding-right:16px">
                            <Input v-model="formAdd.name" placeholder="标题" :maxlength="10" @keyup.enter.native="toCreat"/>
                        </i-col>
                        <i-col :span="6">{{formAdd.name.length}} / 10</i-col>
                    </Row>
                </FormItem>
                <FormItem label="姓氏">
                    <Select v-model="formAdd.familyCode" filterable remote clearable :remote-method="remoteMethod" :loading="loading" placeholder="搜索姓氏">
                        <Option v-for="v in options" :value="v.id" :key="v.id">{{v.value}}</Option>
                    </Select>
                </FormItem>
                <FormItem label="地区" v-if="data.type == 'fan'">
                    <al-cascader v-model="selected" :level="2" style="width:100%" placeholder="请选择地区"/>
                </FormItem>
                <FormItem label="省份" v-else>
                    <al-selector v-model="selected_pro" level="0" placeholder="请选择省份" style="width:80%;display:inline-block"/>
                </FormItem>
                <FormItem label>
                    <Button type="primary" @click="toCreat" style="margin-right:16px;">提交</Button>
                    <Button @click="isadd = false">关闭</Button>
                </FormItem>
            </Form>
        </Drawer>
        <Modal v-model="visible" width="560" :footer-hide="true">
            <dl v-if="curr_model.id" style="fontSize:16px;">
                <dt>pc端网址：</dt>
                <dd>http://yhtpw.com/#/base?type={{data.type == 'fan' ? 'c' :'p'}}&code={{curr_model.id}}</dd>
                <dt>移动端网址：</dt>
                <dd>http://yhtpw.com/mobile/#/base?type={{data.type == 'fan' ? 'c' :'p'}}&code={{curr_model.id}}</dd>
                <dd>
                    <qrcode :text="'http://yhtpw.com/mobile/#/base?type=c&code='+curr_model.id" style="marginTop:32px;"/>
                </dd>
            </dl>
        </Modal>
    </div>
</template>

<script>
import { pca, pcaa } from "area-data";
import qrcode from "_c/qrcode";
export default {
    components: {
        qrcode
    },
    data() {
        return {
            visible: false,
            curr_model: {},
            isadd: false,
            isedit: false,
            list: [],
            total: 0,
            page: 1,
            formAdd: {
                name: ""
            },
            formData: {
                siteName: "",
                description: "",
                totemPicSrc: ""
            },
            selected: [],
            selected_pro: [],
            loading: false,
            options: [],
            columns: [
                { title: "ID", key: "id", width: 80 },
                {
                    title: "徽标",
                    key: "url",
                    width: 72,
                    align: "center",
                    render: (h, e) => {
                        return h("div", {
                            style: {
                                height: "32px",
                                width: "32px",
                                background: "no-repeat center / cover",
                                backgroundImage:
                                    "url(" + this.api.imgurl(e.row.url) + ")"
                            }
                        });
                    }
                },
                { title: "网站名称", key: "name", width: 160 },
                { title: "姓氏", key: "familyName", width: 100 },
                {
                    title: "地区",
                    key: "regionCode",
                    minWidth: 320,
                    render: (h, e) => {
                        if (!e.row.regionCode) {
                            return null;
                        }
                        return h("div", this.api.formatArea(e.row.regionCode));
                    }
                },
                {
                    title: "网站标识码",
                    key: "fanUrlCode",
                    width: 200,
                    render: (h, e) => {
                        return h("div", [
                            e.row.id,
                            h("Button", {
                                props: {
                                    type: "success",
                                    size: "small",
                                    icon: "ios-eye"
                                },
                                style: {
                                    marginLeft: "10px"
                                },
                                on: {
                                    click: () => {
                                        this.curr_model = {};
                                        setTimeout(() => {
                                            this.curr_model = e.row;
                                            this.visible = true;
                                        }, 100);
                                    }
                                }
                            })
                        ]);
                    }
                },
                { title: "状态", key: "status", width: 72 },
                {
                    title: "操作",
                    key: "action",
                    width: 160,
                    align: "center",
                    render: (h, e) => {
                        return h("div", [
                            h("Button", {
                                props: {
                                    type: "success",
                                    size: "small",
                                    icon: "ios-eye"
                                },
                                style: {
                                    marginRight: "5px"
                                },
                                on: {
                                    click: () => {
                                        this.$router.push(
                                            "/?type=c&code=" + e.row.id
                                        );
                                    }
                                }
                            }),
                            h("Button", {
                                props: {
                                    type: "primary",
                                    size: "small",
                                    icon: "ios-create"
                                },
                                on: {
                                    click: () => {
                                        this.toEdit(e.row.id);
                                    }
                                }
                            })
                        ]);
                    }
                }
            ]
        };
    },
    watch: {
        data: function(curVal, oldVal) {
            if (curVal != oldVal) {
                this.getList();
            }
        }
    },
    computed: {
        admin() {
            return this.$store.state.admin;
        }
    },
    mounted: function() {
        this.getList();
    },
    methods: {
        getList(e) {
            this.api
                .post(this.api.admin.base + this.api.admin.site_list, {
                    siteType: this.data.type,
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
        toAdd() {
            this.formAdd = {
                name: ""
            };
            this.isadd = true;
        },
        toEdit(e) {
            let step = 0;
            switch (this.data.type) {
                case "fan":
                    step = 1;
                    break;
                case "pro":
                    step = 2;
                    break;
            }
            if (!e || !step) {
                return;
            }
            this.api
                .post(this.api.adminUrl("site_info", step), {
                    siteId: e
                })
                .then(res => {
                    if (res.code == 200) {
                        this.formData = res.data;
                        this.isedit = true;
                    }
                });
        },
        remoteMethod(e) {
            this.options = [];
            this.loading = true;
            this.api
                .post(
                    this.api.admin.user.base + this.api.admin.user.firstname,
                    {
                        value: e
                    }
                )
                .then(res => {
                    if (res.code == 200) {
                        this.loading = false;
                        this.options = res.data;
                    }
                });
        },
        handleSuccess(res, file) {
            if (res.code == 200) {
                this.formData.totemPicSrc = res.data.file_path;
            }
        },
        toSubmit() {
            let step = 0;
            switch (this.data.type) {
                case "fan":
                    step = 1;
                    break;
                case "pro":
                    step = 2;
                    break;
            }
            if (!this.formData.id || !step) {
                return;
            }
            this.api
                .post(this.api.adminUrl("site_edit", step), {
                    id: this.formData.id,
                    siteName: this.formData.siteName,
                    totemPicSrc: this.formData.totemPicSrc,
                    description: this.formData.description
                })
                .then(res => {
                    if (res.code === 200) {
                        this.$Message.success("修改成功");
                        this.getList();
                        this.isedit = false;
                    } else {
                        this.$Message.error(res.msg);
                    }
                });
        },
        toCreat() {
            if (!this.formAdd.name) {
                this.$Message.error("请输入开通网站的名称");
                return;
            }
            if (!this.formAdd.familyCode) {
                this.$Message.error("请搜索姓氏并选择");
                return;
            }
            let regionCode = 0;
            if (this.data.type == "fan") {
                if (this.selected.length < 2) {
                    this.$Message.error("请选择地区");
                    return;
                }
                regionCode = this.selected[this.selected.length - 1].code;
            } else {
                if (!this.selected_pro.length) {
                    this.$Message.error("请选择地区");
                    return;
                }
                regionCode = this.selected_pro[0].code;
            }
            this.api
                .post(this.api.admin.base + this.api.admin.site_creat, {
                    name: this.formAdd.name,
                    familyCode: this.formAdd.familyCode,
                    regionCode: regionCode,
                    siteType: this.data.type
                })
                .then(res => {
                    if (res.code === 200) {
                        this.$Message.success("网站开通成功");
                        this.getList();
                        this.isadd = false;
                    } else {
                        this.$Message.error(res.msg);
                    }
                });
        }
    },
    props: ["data"]
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