<template>
    <van-list v-model="loading" :finished="finished" @load="onLoad" :offset="50" class="list">
        <None v-if="!list.length && isload"/>
        <router-link :to="'detail?type=charity&id='+v.id" class="item" v-for="(v,i) in list" :key="i">
            <div class="img" :style="v.newsUploadFileList.length? api.imgBG(v.newsUploadFileList[0].filePath):''"/>
            <div class="obj">
                <div class="tit" v-html="v.newsTitle"></div>
                <div class="tag">
                    <span>{{dayjs(v.createTime.replace("+0000", "Z")).format('YYYY-MM-DD HH:mm')}}</span>
                </div>
            </div>
        </router-link>
    </van-list>
</template>
<script>
export default {
    data() {
        return {
            list: [],
            page: 1,
            total: 0,
            isload: false,
            loading: false,
            finished: false
        };
    },
    watch: {
        url: function(curVal, oldVal) {
            if (curVal != oldVal) {
                this.list = [];
                this.page = 1;
                this.total = 0;
                this.finished = false;
                this.getList();
            }
        }
    },
    mounted: function() {},
    methods: {
        onLoad() {
            setTimeout(() => {
                this.getList();
            }, 500);
        },
        getList() {
            this.api
                .get(this.url, {
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
        chgPage(e) {
            this.page = e;
            this.getList();
        }
    },
    props: ["url"]
};
</script>
<style lang="less" scoped>
.list {
    .item {
        display: block;
        color: #333;
        padding: 0.2rem 0.3rem;
        border-bottom: 1px solid #eee;
        overflow: hidden;
        white-space: nowrap;
        .img {
            width: 1.44rem;
            height: 0.96rem;
            float: left;
            background: whitesmoke no-repeat center / cover;
            margin-right: 0.3rem;
        }
        .obj {
            overflow: hidden;
            .tit {
                overflow: hidden;
                width: 100%;
                height: 0.4rem;
                line-height: 0.4rem;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
            .tag {
                font-size: 0.24rem;
                color: #999;
                line-height: 0.5rem;
            }
        }
    }
}
</style>
