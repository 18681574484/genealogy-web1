<template>
    <div class="list">
        <Table border :columns="columns" :data="list"></Table>
        <Page :total="total" @on-change="chgPage" :page-size="8"/>
    </div>
</template>

<script>
export default {
    data() {
        return {
            columns: [
                { title: "ID", width: 80, key: "id" },
                { title: "姓名", width: 80, key: "name" },
                { title: "电话", width: 160, key: "phone" },
                { title: "问题", minWidth: 320, key: "content" },
                {
                    title: "日期",
                    width: 160,
                    key: "createTime",
                    render: (h, e) => {
                        return h(
                            "div",
                            this.dayjs(e.row.createTime).format(
                                "YYYY-MM-DD HH:mm:ss"
                            )
                        );
                    }
                }
            ],
            list: [],
            total: 0,
            page: 1
        };
    },
    computed: {
        admin() {
            return this.$store.state.admin;
        }
    },
    mounted() {
        this.getMessage();
    },
    methods: {
        getMessage() {
            this.api
                .get(this.api.adminUrl("site_feeds", this.admin.step), {
                    site_id: this.admin.id,
                    source_type: 1,
                    pageNo: this.page,
                    pageSize: 8
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
        }
    }
};
</script>
