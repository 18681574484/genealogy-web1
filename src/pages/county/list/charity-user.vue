<template>
    <div class="charity">
        <div class="sort" v-if="list.length">
            <div class="item" @click="chgOrder('time')" :class="ordertype == 'time' ? 'curr':''">
                <span>按时间排序</span>
                <van-icon v-if="ordertype == 'time'" slot="icon" class-prefix="icon" :name="label=='desc' ? 'triangledownfill':'triangleupfill'" size=".24rem" style="margin-left:.1rem;"/>
            </div>
            <div class="item" @click="chgOrder('money')" :class="ordertype == 'money' ? 'curr':''">
                <span>按金额排序</span>
                <van-icon v-if="ordertype == 'money'" slot="icon" class-prefix="icon" :name="label=='desc' ? 'triangledownfill':'triangleupfill'" size=".24rem" style="margin-left:.1rem;"/>
            </div>
        </div>
        <van-list v-model="loading" :finished="finished" @load="onLoad" :offset="50" class="list">
            <div class="item" v-for="(v,i) in list" :key="i">
                <div class="img" :style="api.imgBG(v.allUserLogin.picSrc)"></div>
                <div class="obj">
                    <div class="name">{{v.allUserLogin.nickName}}</div>
                    <div class="tag">
                        <div class="date">{{dayjs(v.fanNewsCharityPayIn.updateTime.replace("+0000", "Z")).format("YYYY-MM-DD HH:mm")}}</div>
                        <div class="count">
                            捐款
                            <span>{{v.fanNewsCharityPayIn.payAmount}}</span>元
                        </div>
                    </div>
                </div>
            </div>
        </van-list>
        <None v-if="!list.length && isload"/>
    </div>
</template>
<script>
export default {
    data() {
        return {
            list: [],
            page: 1,
            total: 0,
            ordertype: "time",
            label: "desc",
            nickName: "",
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
                this.isload = false;
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
            let data = {
                nickName: this.nickName,
                pageNo: this.page
            };
            if (this.ordertype) {
                data.order = this.ordertype;
                data.label = this.label;
            }
            this.api.get(this.url, data).then(res => {
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
        },
        chgOrder(e) {
            if (this.ordertype == e) {
                this.label = this.label == "asc" ? "desc" : "asc";
            } else {
                this.ordertype = e;
            }
            this.list = [];
            this.page = 1;
            this.isload = false;
            this.finished = false;
            this.getList();
        }
    },
    props: ["url"]
};
</script>
<style lang="less" scoped>
.sort {
    display: flex;
    width: 100%;
    flex: 2;
    text-align: center;
    .item {
        width: 50%;
        line-height: 0.8rem;
        height: 0.8rem;
        border-bottom: 1px solid #ddd;
        &.curr {
            color: #d2211b;
        }
    }
}
.list {
    .item {
        border-bottom: 1px solid #eee;
        padding: 0.2rem;
        white-space: nowrap;
        font-size: 0.28rem;
        .img {
            width: 0.8rem;
            height: 0.8rem;
            clear: both;
            background: whitesmoke no-repeat center / cover;
            border-radius: 100%;
            float: left;
            margin-right: 0.3rem;
        }
        .obj {
            height: 0.8rem;
            overflow: hidden;
            line-height: 0.4rem;
            .tag {
                font-size: 0.24rem;
                color: #999;
                .count {
                    color: #2196f3;
                }
                .date {
                    float: right;
                }
            }
        }
    }
}
</style>
