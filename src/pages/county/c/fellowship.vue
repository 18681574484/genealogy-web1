<template>
    <div class="fellowship">
        <div class="h">联谊堂概况</div>
        <div class="b">
            <van-swipe :show-indicators="false" class="slider">
                <van-swipe-item v-for="v in list" :key="v.id">
                    <router-link :to="'fellowship?id='+v.id" class="img" tag="div">
                        <div class="obj">
                            <p>堂：{{v.rootGroup}}</p>
                            <p>始迁祖：{{v.rootPerson}}</p>
                            <p>负责人：{{v.leader}}</p>
                            <p>电话：{{v.leaderPhone}}</p>
                        </div>
                    </router-link>
                </van-swipe-item>
            </van-swipe>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        isLoading: {
            type: Boolean
        }
    },
    data() {
        return {
            list: []
        };
    },
    watch: {
        isLoading: function(curVal, oldVal) {
            if (curVal) {
                this.getApiData("index_fan_summary");
            }
        }
    },
    computed: {
        apiList() {
            return this.$store.state.apiList;
        }
    },
    mounted: function() {
        this.getApiData("index_fan_summary");
    },
    methods: {
        getApiData(e) {
            this.api
                .get(this.api.county.base + this.apiList[e].apiUrl, {})
                .then(res => {
                    if (res.code == 200) {
                        this.list = res.data.records;
                    }
                });
        }
    }
};
</script>
<style lang="less" scoped>
.fellowship {
    text-align: center;
    overflow: hidden;
    .h {
        line-height: 1rem;
        font-size: 0.32rem;
    }
    .b {
        width: 4.8rem;
        height: 2.5rem;
        margin: 0 auto;
        .van-swipe {
            height: 2.4rem;
            overflow: unset;
        }
        .img {
            position: relative;
            width: 95%;
            height: 100%;
            background: url(../img/fellowship.png) no-repeat center / cover;
            border-radius: 0.1rem;
            display: block;
            .obj {
                padding: 0.2rem 0.3rem;
                text-align: left;
                color: #fff;
                line-height: 0.5rem;
                font-size: 0.26rem;
            }
        }
    }
}
</style>
