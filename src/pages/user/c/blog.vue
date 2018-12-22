<template>
    <div class="grid">
        <div class="h">
            <router-link class="more" to="note">更多</router-link>
            <div class="tit">最新文章</div>
        </div>
        <div class="b">
            <div class="title">{{info.title}}</div>
            <div class="text">{{info.content}}</div>
        </div>
    </div>
</template>
<script>
export default {
    components: {},
    data() {
        return {
            info: {}
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
                    pageSize: 1,
                    pageNo: 1
                })
                .then(res => {
                    if (res.code == 200) {
                        if (res.data.records.length) {
                            this.info = res.data.records[0];
                        }
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
        padding: 8px 16px;
        .title {
            line-height: 32px;
            font-size: 16px;
        }
        .text {
            color: #666;
            padding: 8px 0;
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

                .name {
                    font-size: 16px;
                }

                .intro {
                    color: #666;
                }

                .tag {
                    overflow: hidden;
                    color: #666;

                    i {
                        color: #999;
                        margin-left: 16px;
                    }

                    .appreciate {
                        float: right;
                    }

                    .mark {
                        float: right;
                    }
                }
            }
        }
    }
}
</style>
