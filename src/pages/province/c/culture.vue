<template>
    <div class="list">
        <div class="h">
            <span class="tit" v-for="(v,i) in menu" :key="i" :class="menucurr == i ? 'curr' : ''" @click="chgMenu(i)">{{v}}</span>
        </div>
        <div class="b bb" v-if="menucurr==1">
            <div class="item" v-for="v in list" :key="v.id">
                <div class="tit">
                    <span v-if="v.ziapiLocation">地域：{{v.ziapiLocation}}</span>
                    <span v-if="v.ancestorsName">祖先：{{v.ancestorsName}}</span>
                </div>
                <div class="intro">
                    <div class="itm" v-for="(itm,idx) in formatZipai(v.zipaiTxt)" :key="idx">
                        <div class="red tag">{{itm[0]}}</div>
                        <div class="blue tag">{{itm[1]}}</div>
                        <span>{{itm[2]}}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="b ba" v-else>
            <router-link class="item" tag="div" :to="'detail?type=culture&id='+v.id" v-for="(v,i) in list" :key="i" v-show="i<4">
                <div class="img" :style="v.newsUploadFileList.length ? api.imgBG(v.newsUploadFileList[0].filePath):''"></div>
                <div class="obj">
                    <div class="tit">{{v.newsTitle}}</div>
                    <div class="intro">{{v.newsText}}</div>
                    <div class="more">查看详情</div>
                </div>
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            menu: ["家族祠堂", "字派", "迁徙之源"],
            menucurr: 0,
            apiData: {
                index_family_culture: {},
                index_zipai: {},
                index_family_qianxi: {}
            },
            list: []
        };
    },
    computed: {
        apiList() {
            return this.$store.state.province.apiList;
        }
    },
    mounted: function() {
        this.getApiData("index_family_culture");
        this.getApiData("index_zipai");
        this.getApiData("index_family_qianxi");
    },
    methods: {
        getApiData(e) {
            this.api
                .get(this.api.province.base + this.apiList[e].apiUrl, {
                    pageSize: 6
                })
                .then(res => {
                    if (res.code == 200) {
                        this.apiData[e] = res.data;
                        this.chgMenu(this.menucurr);
                    }
                });
        },
        chgMenu(i) {
            let keys = Object.keys(this.apiData);
            this.list = {};
            this.menucurr = i;
            this.list = this.apiData[keys[i]].records;
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
    }
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/var.scss";

.list {
    width: 100%;
    .h {
        height: 48px;
        line-height: 48px;
        .tit {
            font-size: 14px;
            padding: 8px 16px;
            border-radius: 4px;
            cursor: pointer;
            &.curr {
                background: $color;
                color: #fff;
            }
        }
    }
    .b {
        min-height: 400px;
    }
    .ba {
        display: flex;
        flex-wrap: wrap;
        flex: 2;
        .item {
            justify-content: space-between;
            width: 49%;
            overflow: hidden;
            white-space: nowrap;
            padding: 8px 0;
            cursor: pointer;
            &:nth-child(2n + 1) {
                margin-right: 2%;
            }
            .img {
                float: left;
                margin-right: 12px;
                height: 90px;
                width: 90px;
                background: whitesmoke no-repeat center / cover;
            }
            .obj {
                line-height: 24px;
                overflow: hidden;
                .tit {
                    height: 24px;
                    overflow: hidden;
                    color: $color;
                    font-size: 14px;
                }
                .intro {
                    font-size: 12px;
                    white-space: normal;
                    @include text-multiLine-ellipsis(2, 24px);
                    color: #999;
                }
                .more {
                    line-height: 16px;
                    color: $color;
                    font-size: 12px;
                }
            }
        }
    }
    .bb {
        .item {
            white-space: nowrap;
            padding: 8px 0;
            border-bottom: 1px solid #ddd;
            .tit {
                span {
                    margin-right: 16px;
                }
            }
            .intro {
                overflow: hidden;
                white-space: normal;
                padding: 4px 0;

                .itm {
                    position: relative;
                    text-align: center;
                    float: left;
                    margin-left: 16px;
                    width: 48px;
                    height: 48px;
                    font-size: 16px;
                    line-height: 48px;
                    font-weight: 700;
                    background: url(../img/icon-fontbg.png) no-repeat center /
                        100% 100%;

                    .tag {
                        font-size: 10px;
                        line-height: 20px;
                    }

                    .red {
                        position: absolute;
                        right: 85%;
                        top: 4px;
                        color: $color;
                    }

                    .blue {
                        position: absolute;
                        right: 85%;
                        bottom: 4px;
                        color: blue;
                    }
                }
            }
        }
    }
}
</style>