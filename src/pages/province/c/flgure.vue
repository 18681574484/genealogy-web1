<template>
    <div class="flgure">
        <div class="h">
            <router-link tag="div" :to="'charity?ct=2'" class="more">
                <span>共 {{total}} 人</span>
                <van-icon name="arrow"/>
            </router-link>
            <div class="tit">最新捐款宗亲</div>
        </div>
        <div class="b">
            <div class="item" v-for="(v,i) in list" :key="v.id" v-if="i<3">
                <div class="img" :style="api.imgBG(v.allUserLogin.picSrc)"></div>
                <div class="name">{{v.allUserLogin.nickName}}</div>
                <div class="num">捐助 {{v.proNewsCharityPayIn.payAmount}}元</div>
            </div>
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
            list: [],
            total: 0
        };
    },
    watch: {
        isLoading: function(curVal, oldVal) {
            if (curVal) {
                this.getApiData("index_architecture_pay_in_person_1");
            }
        }
    },
    computed: {
        apiList() {
            return this.$store.state.apiList;
        }
    },
    mounted: function() {
        this.getApiData("index_architecture_pay_in_person_3");
    },
    methods: {
        getApiData(e) {
            this.api
                .get(this.api.province.base + this.apiList[e].apiUrl, {})
                .then(res => {
                    if (res.code == 200) {
                        this.list = res.data.records;
                        this.total = res.data.total;
                    }
                });
        }
    }
};
</script>
<style lang="less" scoped>
.flgure {
    padding: 0.3rem 0;
    .h {
        position: relative;
        white-space: nowrap;
        padding: 0 0.2rem;
        border-bottom: 1px solid #eee;
        line-height: 0.8rem;
        height: 0.8rem;
        .tit {
            font-size: 0.32rem;
        }
        .more {
            float: right;
            color: #999;
            font-size: 0.24rem;
        }
    }
    .b {
        padding: 0.2rem 0;
        display: flex;
        justify-content: space-around;
        .item {
            width: 30%;
            text-align: center;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
            border-radius: 0.1rem;
            padding: 0.5rem 0;
            .img {
                width: 1.2rem;
                height: 1.2rem;
                border-radius: 50%;
                background: no-repeat whitesmoke center / cover;
                margin: 0 auto;
            }
            .name {
                line-height: 2;
                font-size: 0.28rem;
            }
            .num {
                color: #999;
            }
        }
        li:nth-child(3) {
            margin-right: 0;
        }
    }
}
</style>
