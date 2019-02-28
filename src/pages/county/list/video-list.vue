<template>
    <van-list v-model="loading" :finished="finished" @load="onLoad" :offset="50" class="list">
        <None v-if="!list.length && isload"/>
        <div class="item" v-for="v in list" :key="v.id">
            <div class="tit">{{v.title}}</div>
            <div class="img" :style="v.fanNewsUploadFile.length ? api.imgBG(v.fanNewsUploadFile[0].filePath) : ''">
                <img src="http://iph.href.lu/80x45">
                <div class="hover" @click="toShow(v.fanUploadVedioList[0].filePath)">
                    <van-icon class-prefix="icon" name="videofill" color="#ccc" size="1rem"/>
                </div>
            </div>
            <div class="obj">
                <div class="tag">
                    <van-tag color="#d2211b" mark size="medium">视频</van-tag>
                    <span class="date">{{dayjs(v.updateTime.replace("+0000", "Z")).format("YYYY-MM-DD")}}</span>
                    <span>0 次播放</span>
                </div>
            </div>
        </div>
        <van-popup v-model="show" position="top" @click-overlay="curr = ''">
            <video ref="video" width="100%" controls controlslist="nofullscreen nodownload noremote footbar" autoplay v-if="curr">
                <source :src="api.imgurl(curr)" type="video/mp4">
            </video>
        </van-popup>
    </van-list>
</template>
<script>
export default {
    props: ["url", "tag"],
    data() {
        return {
            show: false,
            curr: "",
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
                    siteId: this.$store.state.county_id,
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
        toShow(e) {
            this.curr = e;
            this.show = true;
        }
    }
};
</script>
<style lang="less" scoped>
.list {
    .item {
        padding: 0.2rem 0.3rem;
        overflow: hidden;
        border-bottom: 1px solid #eee;
        .tit {
            height: 0.6rem;
            line-height: 0.6rem;
            font-size: 0.32rem;
            overflow: hidden;
            white-space: nowrap;
            width: 100%;
            text-overflow: ellipsis;
        }
        .img {
            position: relative;
            background: no-repeat center / cover;
            img {
                width: 100%;
                display: block;
                visibility: hidden;
            }
            .hover {
                position: absolute;
                z-index: 1;
                top: 0;
                right: 0;
                height: 100%;
                width: 100%;
                display: flex;
                justify-content: center;
                flex-direction: column;
                text-align: center;
                background: rgba(0, 0, 0, 0.4);
                cursor: pointer;
                color: #fff;
            }
        }
        .obj {
            line-height: 0.6rem;
            .tag {
                color: #999;
                font-size: 0.24rem;
                span {
                    margin-right: 0.2rem;
                }
            }
        }
    }
}
</style>
