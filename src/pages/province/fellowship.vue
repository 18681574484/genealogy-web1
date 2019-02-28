<template>
    <div class="pages">
        <Navbar :title="title"></Navbar>
        <div class="main">
            <van-cell-group>
                <van-cell title="堂" :value="info.rootGroup"/>
                <van-cell title="始迁祖" :value="info.rootPerson"/>
                <van-cell title="负责人" :value="info.leader"/>
                <van-cell title="负责人电话" :value="info.leaderPhone" v-if="info.leaderPhone" :url="'tel:'+info.leaderPhone"/>
                <van-cell title="总谱人数" value="-"/>
                <van-cell title="本族男丁" value="-"/>
                <van-cell title="本族女丁" value="-"/>
                <van-cell title="最大年龄" value="-"/>
                <van-cell title="最小年龄" value="-"/>
            </van-cell-group>
            <div class="about">
                <div class="h">姓氏简介</div>
                <div class="b">{{about.description}}</div>
            </div>
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
    props: {},
    data() {
        return {
            id: this.$route.query.id,
            title: "联谊堂",
            info: {},
            about: {}
        };
    },
    computed: {
        apiList() {
            return this.$store.state.apiList;
        }
    },
    mounted: function() {
        this.getApiAbout("index_summary");
        this.getApiData("index_fan_summary");
    },
    methods: {
        getApiData(e) {
            this.api
                .get(this.api.province.base + this.apiList[e].apiUrl, {})
                .then(res => {
                    if (res.code == 200) {
                        let list = res.data.records;
                        if (!this.id) {
                            this.info = list[0];
                        } else {
                            list.forEach(v => {
                                if (v.id == this.id) {
                                    this.info = v;
                                }
                            });
                        }
                    }
                });
        },
        getApiAbout(e) {
            this.api
                .get(this.api.province.base + this.apiList[e].apiUrl, {})
                .then(res => {
                    if (res.code == 200) {
                        this.about = res.data;
                    }
                });
        }
    }
};
</script>
<style lang="less" scoped>
.about {
    border-top: 0.2rem solid #eee;
    .h {
        font-size: 0.32rem;
        line-height: 1rem;
        text-align: center;
    }
    .b {
        border-top: 1px solid #eee;
        padding: 0.2rem 0.3rem;
        line-height: 1.5;
    }
}
</style>
