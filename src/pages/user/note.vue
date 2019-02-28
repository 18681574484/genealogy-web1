<template>
    <div class="pages">
        <Navbar title="说说">
            <small slot="right">
                <router-link tag="span" to="/add/note">发说说</router-link>
            </small>
        </Navbar>
        <div class="main">
            <van-notice-bar v-if="list.length" mode="closeable">提示：左滑删除记录。</van-notice-bar>
            <van-list v-model="loading" :finished="finished" @load="onLoad" :offset="50" class="list">
                <None v-if="!list.length && isload"/>
                <van-swipe-cell :right-width="65" v-for="v in list" :key="v.id">
                    <van-cell-group>
                        <van-cell :title="v.content" :label="dayjs(v.createTime.replace('+0000', 'Z')).format('YYYY-MM-DD')"/>
                    </van-cell-group>
                    <span slot="right" class="swipe-del" @click="onDel(v)">删除</span>
                </van-swipe-cell>
            </van-list>
        </div>
    </div>
</template>
<script>
import Navbar from "_c/navbar/navbar.vue";
export default {
    name: "Page",
    components: {
        Navbar
    },
    data() {
        return {
            list: [],
            total: 0,
            page: 1,
            isload: false,
            loading: false,
            finished: false
        };
    },
    computed: {},
    mounted: function() {},
    methods: {
        onLoad() {
            setTimeout(() => {
                this.getList();
            }, 500);
        },
        getList() {
            this.api
                .post(this.api.user.base + this.api.user.shuoshuo_list, {
                    pageNo: this.page
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
        onDel(e) {
            this.$dialog
                .confirm({
                    title: "提示",
                    message: "确定删除这条记录？"
                })
                .then(() => {
                    this.api
                        .post(this.api.user.base + this.api.user.shuoshuo_del, {
                            id: e.id
                        })
                        .then(res => {
                            if ((res.code = 200)) {
                                this.list = [];
                                this.total = 0;
                                this.page = 1;
                                this.finished = false;
                                this.getList();
                            } else {
                                this.$toast(res.msg);
                            }
                        });
                })
                .catch(() => {});
        }
    }
};
</script>
<style lang="less">
.van-swipe-cell__right {
    height: 100%;
    background: darkorange;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 64px;
}
</style>
