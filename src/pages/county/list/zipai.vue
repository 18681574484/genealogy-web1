<template>
    <van-list v-model="loading" :finished="finished" @load="onLoad" :offset="50" class="list">
        <div class="tips">
            <div class="tit">字派注释</div>
            <p>历代表示始祖至当前代</p>
            <p>近世表示开基祖至当前世</p>
            <p>数字上为历代，下为近世</p>
        </div>
        <None v-if="!list.length && isload"/>
        <div class="item" v-for="v in list" :key="v.id">
            <div class="tit">
                <span v-if="v.ziapiLocation">地域：{{v.ziapiLocation}}</span>
                <span v-if="v.ancestorsName">祖先：{{v.ancestorsName}}</span>
            </div>
            <div class="intro" :style="v.isshow ? 'height:auto':'height:2rem'">
                <div class="itm" v-for="(itm,idx) in formatZipai(v.zipaiTxt)" :key="idx">
                    <div class="red tag">{{itm[0]}}</div>
                    <div class="blue tag">{{itm[1]}}</div>
                    <span>{{itm[2]}}</span>
                </div>
            </div>
            <div class="tag" @click="v.isshow = !v.isshow">{{v.isshow ? "收起":"展开"}}</div>
        </div>
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
                        let list = res.data.records;
                        list.forEach(v => {
                            v.isshow = 0;
                        });
                        this.list = this.list.concat(list);
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
        formatZipai(e) {
            let list = e ? e.split(";") : [];
            let obj = [];
            if (list.length) {
                obj = list.map(v => {
                    return v.split("|");
                });
            }
            return obj;
        }
    },
    props: ["url"]
};
</script>

<style lang="less" scoped>
.tips {
    padding: 0.2rem 0.3rem;
    font-size: 0.24rem;
    margin: 0.2rem 0.3rem;
    line-height: 2;
    color: #666;
    border-radius: 0.1rem;
    box-shadow: 0 1px 3px rgba(#000, 0.2);
}
.list {
    .item {
        white-space: nowrap;
        padding: 0.2rem 0.3rem;
        border-bottom: 1px solid #ddd;
        border-radius: 8px;
        .tit {
            span {
                margin-right: 16px;
            }
        }
        .intro {
            overflow: hidden;
            white-space: normal;
            padding: 0.2rem 0;

            .itm {
                position: relative;
                text-align: center;
                float: left;
                margin-left: 0.3rem;
                margin-bottom: 0.1rem;
                width: 1rem;
                height: 1rem;
                font-size: 0.32rem;
                line-height: 1rem;
                font-weight: 700;
                background: url(../../../assets/images/icon-fontbg.png) no-repeat center / 100%
                    100%;
                .tag {
                    font-size: 0.2rem;
                    line-height: 0.4rem;
                }

                .red {
                    position: absolute;
                    right: 85%;
                    top: 0.05rem;
                    color: Red;
                }

                .blue {
                    position: absolute;
                    right: 85%;
                    bottom: 0.05rem;
                    color: blue;
                }
            }
        }
        .tag {
            font-size: 0.24rem;
            color: #d2211b;
            text-align: right;
        }
    }
}
</style>
