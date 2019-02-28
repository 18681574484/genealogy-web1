<template>
    <div class="main">
        <div class="inner">
            <div class="suc">
                <div class="grid">
                    <div class="h">
                        <div class="tit">捐款记录</div>
                    </div>
                    <div class="b" style="min-height:450px;">
                        <div class="item" v-for="v in list" :key="v.id">
                            <div class="number itm">{{v.orderId}}</div>
                            <div class="type itm">
                                {{dayjs(v.payTime).format(
                                "YYYY-MM-DD HH:mm:ss"
                                ) + '通过' + v.payChannel + v.payAmount + '元'}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Page :total="total" @on-change="chgPage" :page-size="8"/>
        </div>
    </div>
</template>
<script>
export default {
    components: {},
    data() {
        return {
            list: [],
            total: 0,
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
                .post(this.api.user.base + this.api.user.pay_list, {
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
        chgPage(e) {
            this.page = e;
            this.getList();
        },
    }
};
</script>
<style lang="scss" scoped>
.b {
    .item {
        padding: 16px;
        white-space: nowrap;
        overflow: hidden;
        font-size: 14px;
        border-bottom: 1px solid #eee;
        .itm {
            float: left;
            padding: 0 8px;
            margin-right: 16px;
        }
    }
}
</style>
