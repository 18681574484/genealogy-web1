<template>
    <div class="charity">
        <div class="sort">
            <div class="searchbar">
                <Input type="text" placeholder="输入搜索关键词" v-model="fileName" @keyup.enter.native="getList"/>
                <Button class="link">搜索</Button>
            </div>
            <Select v-model="status" style="width:120px;margin-right:8px;" @on-change="getList">
                <Option :value="0">全部</Option>
                <Option :value="1">公开</Option>
                <Option :value="2">密码访问</Option>
            </Select>
        </div>
        <div style="minHeight:450px">
            <Row :gutter="32" class="items">
                <i-col :span="4" v-for="v in list" :key="v.id">
                    <div class="item" @click="openFile(v)">
                        <div class="book">
                            <img src="http://iph.href.lu/300x400">
                            <div class="tit kt">{{v.fileName}}</div>
                            <div class="lines">
                                <div class="line" v-for="n in 5" :key="n"></div>
                            </div>
                            <div class="first kt">{{v.familyName}}</div>
                            <div class="flag">{{v.status == 1 ? '公开':'密码访问'}}</div>
                        </div>
                        <div class="name">{{v.fileName}}</div>
                        <div class="site">区域：{{api.formatArea(v.regionCode)}}</div>
                        <div class="date">创建时间：{{dayjs(v.createTime).format("YYYY-MM-DD")}}</div>
                    </div>
                </i-col>
            </Row>
            <Page :total="total" @on-change="chgPage" :page-size="8" v-if="total"/>
        </div>
        <Modal v-model="toPass" title="输入密码" width="320px" @on-ok="toSubmit">
            <Form :model="form">
                <FormItem>
                    <Input v-model="form.password" type="password" placeholder="输入密码" clearable :maxlength="20" @keyup.enter.native="toSubmit"/>
                </FormItem>
            </Form>
        </Modal>
    </div>
</template>
<script>
import { pca, pcaa } from "area-data";
export default {
    data() {
        return {
            fileName: "",
            status: 0,
            area: [],
            areacode: 0,
            list: [],
            page: 1,
            total: 0,
            toPass: false,
            curr: {},
            form: {}
        };
    },
    computed: {},
    mounted: function() {
        this.getList();
    },
    methods: {
        getList() {
            this.api
                .get(this.api.county.base + this.api.county.genealogy_list, {
                    pageNo: this.page,
                    siteId: this.$store.state.county.id,
                    fileName: this.fileName,
                    status: this.status ? this.status : "",
                    regionCode: this.areacode ? this.areacode : ""
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
        openFile(e) {
            if (e.password) {
                this.curr = e;
                this.toPass = true;
                return;
            }
            if (e.url) {
                window.open(e.url, "_blank");
            } else {
                this.$Message.error("发生错误，请联系管理员");
            }
        },
        toSubmit() {
            if (this.curr.password == this.form.password) {
                window.open(e.url, "_blank");
            } else {
                this.$Message.error("密码错误");
            }
        },
        handleChange(e) {
            this.areacode = e.length ? e[2].code : "";
            this.getList();
        }
    }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/var.scss";
.sort {
    padding: 8px 16px;
    margin: 16px 0;
    overflow: hidden;
    border-radius: 8px;
    background: #eee;
    .searchbar {
        float: right;
        display: flex;
        .link {
            padding: 0 8px;
            line-height: 28px;
            background: $color;
            color: #fff;
            border-radius: 4px;
            margin-left: 4px;
        }
    }
    .item {
        float: left;
        width: 80px;
        text-align: center;
        span {
            cursor: pointer;
            padding: 4px 8px;
        }
        &.label {
            text-align: left;
        }
        &.curr,
        &:hover {
            span {
                background: $color;
                color: #fff;
                border-radius: 4px;
            }
        }
    }
}
.items {
    .item {
        text-align: center;
        margin: 8px 0;
        border-radius: 4px;
        text-align: left;
        font-size: 12px;
        .book {
            position: relative;
            background: #224671 url(../img/cloud.png) no-repeat 20% 90% / 50%
                auto;
            width: 100%;
            border-radius: 4px;
            overflow: hidden;
            color: #fff;
            img {
                width: 100%;
                visibility: hidden;
                overflow: hidden;
            }
            .tit {
                color: #fff;
            }
            .lines {
                position: absolute;
                z-index: 1;
                border-right: 1px solid #aaa;
                top: 0;
                bottom: 0;
                left: 0;
                height: 100%;
                width: 16px;
                .line {
                    height: 20%;
                    width: 16px;
                    & + .line {
                        border-top: 1px solid #aaa;
                    }
                }
            }
            .flag {
                position: absolute;
                z-index: 1;
                top: 0;
                left: 0;
                background: $color;
                width: 64px;
                text-align: center;
                line-height: 24px;
                border-radius: 0 0 16px 0;
            }
            .first {
                position: absolute;
                top: 32px;
                left: 32px;
                font-size: 64px;
                color: rgba(#fff, 0.2);
            }
            .tit {
                position: absolute;
                top: 16px;
                right: 16px;
                width: 24px;
                line-height: 1.5;
                padding: 8px 0;
                font-size: 14px;
                text-align: center;
                border: 1px solid #999;
            }
        }
        .name {
            line-height: 32px;
            font-size: 14px;
        }
        .site {
            color: #999;
        }
        .date {
            color: #999;
        }
    }
}
</style>
