<template>
    <div class="grid">
        <div class="h">
            <router-link class="more" to="note">更多</router-link>
            <div class="tit">精彩说说</div>
        </div>
        <div class="b">
            <div class="item" v-for="v in list" :key="v.id">
                <div class="obj">
                    <div class="intro">{{v.content}}</div>
                    <div class="tag">
                        <span class="date">{{dayjs(v.createTime).format("YYYY-MM-DD")}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    components: {},
    data() {
        return {
            list: [],
            total: 0
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
        }
    }
};
</script>
<style lang="scss" scoped>
.grid {
    height: 400px;
    .b {
        overflow-y: auto;
        height: 360px;
        .text {
            padding: 16px;
        }

        .item {
            padding: 8px 16px;
            border-bottom: 1px dashed #eee;
            .obj {
                overflow: hidden;

                .tag {
                    overflow: hidden;
                    color: #999;
                }
            }
        }
    }
}
</style>
