<template>
    <div class="main">
        <div class="inner">
            <div class="suc">
                <div class="grid">
                    <div class="h">
                        <div class="more link" @click="onAdd">
                            <iconfont name="edit"/>
                            <span>发布</span>
                        </div>
                        <div class="tit">说说</div>
                    </div>
                    <div class="b" style="min-height:450px;">
                        <div class="item" v-for="v in list" :key="v.id">
                            <div class="obj">
                                <div class="intro">{{v.content}}</div>
                                <div class="tag">
                                    <span class="link" style="float:right" @click="onDel(v.id)">删除</span>
                                    <span class="date">{{dayjs(v.createTime).format("YYYY-MM-DD")}}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Page :total="total" @on-change="chgPage" :page-size="8"/>
        </div>
        <Modal v-model="isAdd" title="说点什么" width="640px" :footer-hide="true">
            <Form :model="formData">
                <FormItem>
                    <Input type="textarea" v-model="formData.content" placeholder="输入标题" clearable :maxlength="140" :rows="8" @keyup.enter.native="toSubmit"/>
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
            list: [],
            total: 0,
            formData: {},
            page: 1
        };
    },
    computed: {},
    mounted: function() {
        this.getList();
    },
    methods: {
        getList() {
            this.api
                .post(this.api.user.base + this.api.user.shuoshuo_list, {
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
        onDel(e) {
            this.$Modal.confirm({
                title: "提示",
                content: "确定删除这个图片？",
                onOk: () => {
                    this.api
                        .post(this.api.user.base + this.api.user.shuoshuo_del, {
                            id: e
                        })
                        .then(res => {
                            this.getList();
                        });
                }
            });
        },
        onAdd(e) {
            this.formData = {};
            this.isAdd = true;
        },
        toSubmit() {
            if (!this.formData.content) {
                this.$Message.error("未输入内容");
                return;
            }
            this.api
                .post(this.api.user.base + this.api.user.shuoshuo_add, {
                    status: 1,
                    content: this.formData.content || ""
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
        chgPage(e) {
            this.page = e;
            this.getList();
        }
    }
};
</script>
<style lang="scss" scoped>
.b {
    .item {
        white-space: nowrap;
        overflow: hidden;
        padding: 8px 16px;
        border-bottom: 1px solid #eee;
        .obj {
            .name {
                font-size: 16px;
                overflow: hidden;
                width: 100%;
                text-overflow: ellipsis;
            }

            .intro {
                white-space: normal;
                font-size: 14px;
                line-height: 32px;
                color: #666;
            }

            .tag {
                overflow: hidden;
                color: #666;
            }
        }
    }
}
</style>
