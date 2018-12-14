<template>
    <div class="grid">
        <div class="h">
            <router-link class="more" to="msg">更多</router-link>
            <div class="tit">精彩说说</div>
        </div>
        <div class="b">
            <div class="item" v-for="v in list" :key="v.id">
                <div class="img" :style="api.imgBG(v.newsFaceUrl)"></div>
                <div class="obj">
                    <div class="name">{{v.title}}</div>
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
                .post(this.api.user.base + this.api.user.rizhi_list, {
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
            white-space: nowrap;
            overflow: hidden;
            padding: 8px 16px;

            .img {
                width: 64px;
                height: 64px;
                float: left;
                margin-right: 16px;
                background: whitesmoke no-repeat center / cover;
                border-radius: 50%;
            }

            .obj {
                overflow: hidden;
                min-height: 64px;
                .name {
                    font-size: 16px;
                    overflow: hidden;
                    width: 100%;
                    text-overflow: ellipsis;
                }

                .intro {
                    white-space: normal;
                    color: #666;
                }

                .tag {
                    overflow: hidden;
                    color: #666;
                }
            }
        }
    }
}
</style>
