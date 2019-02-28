<template>
    <van-list v-model="loading" :finished="finished" @load="onLoad" :offset="50" class="list">
        <None v-if="!list.length && isload"/>
        <van-row gutter="15">
            <van-col span="12" v-for="v in list" :key="v.id">
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
                    <div class="site">{{api.formatArea(v.regionCode)}}</div>
                    <div class="date">创建于：{{dayjs(v.createTime.replace("+0000", "Z")).format("YYYY-MM-DD")}}</div>
                </div>
            </van-col>
        </van-row>
        <van-dialog title="需要密码访问" v-model="toPass" show-cancel-button @confirm="toSubmit">
            <van-field v-model="form.password" type="password" label="密码" placeholder="请输入密码"/>
        </van-dialog>
    </van-list>
</template>
<script>
import { pca, pcaa } from "area-data";
export default {
    data() {
        return {
            fileName: "",
            status: 0,
            list: [],
            page: 1,
            total: 0,
            toPass: false,
            curr: {},
            form: {},
            isload: false,
            loading: false,
            finished: false
        };
    },
    watch: {},
    mounted: function() {},
    methods: {
        onLoad() {
            setTimeout(() => {
                this.getList();
            }, 500);
        },
        getList() {
            this.api
                .get(this.api.county.base + this.api.county.genealogy_list, {
                    pageNo: this.page,
                    siteId: this.$store.state.county_id,
                    fileName: this.fileName,
                    status: this.status ? this.status : "",
                    regionCode: this.areacode ? this.areacode : ""
                })
                .then(res => {
                    if (res.code == 200) {
                        this.list = this.list.concat(res.data.records);
                        this.total = res.data.total;
                        this.page++;
                        if (res.data.records.length < 8) {
                            this.finished = true;
                        }
                    } else {
                        this.finished = true;
                    }
                    this.loading = false;
                    this.isload = true;
                });
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
                this.$dialog.alert({
                    title: "提示",
                    message: "发生错误，请联系管理员"
                });
            }
        },
        toSubmit() {
            if (this.curr.password == this.form.password) {
                window.open(this.curr.url, "_blank");
            } else {
                this.$toast("密码错误");
            }
        },
        handleChange(e) {
            this.areacode = e.length ? e[2].code : "";
            this.getList();
        }
    },
    props: ["url"]
};
</script>
<style lang="less" scoped>
.list {
    padding: 0.2rem 0.3rem;
    .item {
        text-align: center;
        margin: 8px 0;
        border-radius: 4px;
        text-align: left;
        font-size: 12px;
        .book {
            position: relative;
            background: #224671;
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
                background: #d2211b;
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
                writing-mode: vertical-rl;
            }
        }
        .name {
            line-height: 32px;
            font-size: 14px;
        }
        .site {
            white-space: nowrap;
            width: 100%;
            height: 0.4rem;
            line-height: 0.4rem;
            text-overflow: ellipsis;
            overflow: hidden;
            color: #999;
        }
        .date {
            color: #999;
        }
    }
}
</style>
