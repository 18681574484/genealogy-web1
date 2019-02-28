<template>
    <div class="notice" @click="link" v-if="info.id">
        <div class="h">
            <div class="l">
                <div>置</div>
                <div>顶</div>
                <div>公</div>
                <div>告</div>
            </div>
            <div class="r">{{info.newsTitle}}</div>
        </div>
        <div class="b" v-html="info.newsText"></div>
    </div>
</template>

<script>
export default {
    props: {},
    data() {
        return {
            info: {}
        };
    },
    computed: {
        apiList() {
            return this.$store.state.apiList;
        }
    },
    mounted: function() {
        this.getApiData("index_family_record2");
    },
    methods: {
        getApiData(e) {
            this.api
                .get(this.api.province.base + this.apiList[e].apiUrl, {
                    pageSize: 1
                })
                .then(res => {
                    if (res.code == 200) {
                        this.info = res.data.records[0];
                    }
                });
        },
        link() {
            this.$router.push("detail?type=records&id=" + this.info.id);
        }
    }
};
</script>
<style lang="less" scoped>
.notice {
    border-radius: 0.1rem;
    padding: 0.2rem;
    margin: 0.2rem;
    box-sizing: border-box;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
    .h {
        position: relative;
        white-space: nowrap;
        padding: 0 0.2rem;
        height: 1rem;
        padding-left: .8rem;
        .l {
            position: absolute;
            top: -0.2rem;
            left: -0.2rem;
            float: left;
            white-space: normal;
            width: 1rem;
            height: 1.2rem;
            font-size: 0.2rem;
            line-height: 1.2;
            color: #e3c793;
            font-weight: 600;
            text-align: center;
            letter-spacing: 0.05rem;
            background: url("../../../assets/images/toprssbg.png") no-repeat
                center / auto 100%;
        }
        .r {
            overflow: hidden;
            padding-left: 0.2rem;
            white-space: normal;
            font-size: 0.32rem;
            height: 3;
            display: -webkit-box;
            text-overflow: ellipsis;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }
    }
    .b {
        font-size: 0.25rem;
        line-height: 0.4rem;
        height: 1.95rem;
        color: #666;
        overflow: hidden;
        display: -webkit-box;
        text-overflow: ellipsis;
        -webkit-line-clamp: 5;
        -webkit-box-orient: vertical;
        margin-top: 0.2rem;
    }
}
</style>
