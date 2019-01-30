<template>
    <div class="charity">
        <div class="sort">
            <div class="searchbar">
                <div class="link">搜索</div>
                <input type="text" placeholder="输入搜索关键词" @keyup.enter="getList" v-model="nickName">
            </div>
            <div class="item label">排序</div>
            <div class="item" @click="chgOrder('time')" :class="ordertype == 'time' ? 'curr':''">
                <span>按时间</span>
            </div>
            <div class="item" @click="chgOrder('money')" :class="ordertype == 'money' ? 'curr':''">
                <span>按金额</span>
            </div>
        </div>
        <Row :gutter="16" class="items">
            <i-col :span="4" v-for="(v,i) in list" :key="i">
                <Card class="item">
                    <div class="img" :style="api.imgBG(v.allUserLogin.picSrc)"></div>
                    <div class="name">{{v.allUserLogin.nickName}}</div>
                    <div class="count">
                        捐款
                        <span>{{v.proNewsCharityPayIn.payAmount}}</span>元
                    </div>
                </Card>
            </i-col>
        </Row>
        <Page :total="total" @on-change="chgPage" :page-size="12"/>
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
            label: "asc",
            nickName: ""
        };
    },
    watch: {
        url: function(curVal, oldVal) {
            if (curVal != oldVal) {
                this.getList();
            }
        }
    },
    mounted: function() {
        this.getList();
    },
    methods: {
        getList() {
            let data = {
                nickName: this.nickName,
                pageNo: this.page,
                pageSize: 12
            };
            if (this.ordertype) {
                data.order = this.ordertype;
                data.label = this.label;
            }
            this.api.get(this.url, data).then(res => {
                if (res.code == 200) {
                    this.list = res.data.records;
                    this.total = res.data.total;
                }
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
            this.getList();
        }
    },
    props: ["url"]
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/var.scss";
.sort {
    padding: 8px 16px;
    margin: 16px 0;
    overflow: hidden;
    background: #eee;
    .searchbar {
        float: right;
        input {
            line-height: 20px;
            padding: 0 8px;
            border: 1px solid #ddd;
            font-size: 12px;
        }
        .link {
            float: right;
            padding: 0 8px;
            background: $color;
            color: #fff;
            border-radius: 4px;
            margin-left: 4px;
        }
    }
    .item {
        float: left;
        width: 80px;
        text-align: center;
        span {
            cursor: pointer;
            padding: 4px 8px;
        }
        &.label {
            text-align: left;
        }
        &.curr,
        &:hover {
            span {
                background: $color;
                color: #fff;
                border-radius: 4px;
            }
        }
    }
}
.items {
    .item {
        text-align: center;
        margin: 8px 0;
        border-radius: 4px;
        .img {
            margin-left: auto;
            margin-right: auto;
            height: 64px;
            width: 64px;
            clear: both;
            background: whitesmoke no-repeat center / cover;
            border-radius: 50%;
        }
        .count {
            span {
                color: $color;
            }
        }
    }
}
</style>
