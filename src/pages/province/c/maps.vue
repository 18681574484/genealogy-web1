<template>
    <div class="map_card">
        <div class="maps">
            <ChartMap v-if="geojson.type" @resetGeo="resetGeo" :geoname="geoname" :map="geojson" style="height:600px;" text="下级分支"/>
        </div>
        <div class="list">
            <div class="h">
                <div class="more" @click="listcurr = list">查看全部</div>
                <span class="tit curr">下级联谊会</span>
                <small>({{index_summary.familyName}}氏)</small>
            </div>
            <div class="b">
                <div class="item" v-for="(v,i) in listcurr" :key="i" @click="link(v)">
                    <div class="img" :style="api.imgBG(v.totemPicSrc)"></div>
                    <div class="obj">{{v.name}}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {
    world,
    china,
    anhui,
    aomen,
    beijing,
    chongqing,
    fujian,
    gansu,
    guangdong,
    guangxi,
    guizhou,
    hainan,
    hebei,
    heilongjiang,
    henan,
    hubei,
    hunan,
    jiangsu,
    jiangxi,
    jilin,
    liaoning,
    neimenggu,
    ningxia,
    qinghai,
    shangdong,
    shanghai,
    shangxi,
    shanxi,
    sichuan,
    tianjin,
    xianggang,
    xinjiang,
    xizang,
    yunnan,
    zhejiang
} from "@/assets/map";
import { pca, pcaa } from "area-data";
import { ChartMap } from "_c/charts";
export default {
    name: "maps",
    components: {
        ChartMap
    },
    data() {
        return {
            geojson: {},
            geoname: "",
            cityMap: {
                中国: china,
                上海: shanghai,
                河北: hebei,
                山西: shangxi,
                内蒙古: neimenggu,
                辽宁: liaoning,
                吉林: jilin,
                黑龙江: heilongjiang,
                江苏: jiangsu,
                浙江: zhejiang,
                安徽: anhui,
                福建: fujian,
                江西: jiangxi,
                山东: shangdong,
                河南: henan,
                湖北: hubei,
                湖南: hunan,
                广东: guangdong,
                广西: guangxi,
                海南: hainan,
                四川: sichuan,
                贵州: guizhou,
                云南: yunnan,
                西藏: xizang,
                陕西: shanxi,
                甘肃: gansu,
                青海: qinghai,
                宁夏: ningxia,
                新疆: xinjiang,
                北京: beijing,
                天津: tianjin,
                重庆: chongqing,
                香港: xianggang,
                澳门: aomen
            },
            list: [],
            listcurr: [],
            index_summary: {},
            regionCode: ""
        };
    },
    computed: {
        apiList() {
            return this.$store.state.province.apiList;
        }
    },
    mounted: function() {
        this.get_index_summary();
        this.getList();
    },
    methods: {
        resetGeo(e) {
            this.listcurr = [];
            let list = this.list;
            if (!list.length) {
                this.listcurr = [];
                return;
            }
            let areas = this.formatMap(e);
            console.log(areas);
            let newlist = list.filter(v => {
                console.log(this.api.oneOf(v.regionCode, areas));
                return this.api.oneOf(v.regionCode, areas);
            });
            this.listcurr = newlist || [];
        },
        get_index_summary() {
            this.api
                .get(
                    this.api.province.base + this.apiList.index_summary.apiUrl,
                    {}
                )
                .then(res => {
                    if (res.code == 200) {
                        this.index_summary = res.data;
                        this.regionCode =
                            pca[86][
                                parseInt(Number(res.data.regionCode) * 0.0001) *
                                    10000
                            ];
                        this.geoname = this.formatGeoname(res.data.regionCode);
                        this.geojson = this.cityMap[this.geoname];
                    }
                });
        },
        getList() {
            this.api
                .get(
                    this.api.province.base +
                        this.apiList["index_subordinate"].apiUrl,
                    {}
                )
                .then(res => {
                    if (res.code == 200) {
                        this.list = res.data;
                        this.listcurr = res.data;
                    }
                });
        },
        formatGeoname(v) {
            let sitename = pca[86][v];
            console.log(sitename);
            let res = "";
            for (let i in this.cityMap) {
                if (!sitename.indexOf(i)) {
                    res = i;
                }
            }
            return res;
        },
        formatMap(e) {
            let a = this.index_summary.regionCode; //省
            let b = 0; //市
            let c = 0; //县
            let i = 0;
            let citys = pcaa[a];
            for (let v in citys) {
                if (!i) {
                    b = v;
                }
                if (pcaa[a][v] == e) {
                    b = v;
                }
                i++;
            }
            let res = pcaa[b] || pcaa[a];
            return Object.keys(res);
        },
        link(e) {
            this.$store.commit("updateCountyId", e.id);
            this.$router.replace("/c");
        }
    }
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/var.scss";
.map_card {
    display: flex;
    justify-content: space-between;
    .maps {
        width: 600px;
        height: 600px;
    }
}
.list {
    border: 1px solid #eee;
    box-shadow: 1px 1px 3px rgba(#000, 0.2);
    width: 40%;
    margin: 16px;
    height: 600px;
    overflow: hidden;
    .h {
        padding: 0 16px;
        height: 48px;
        line-height: 48px;
        box-shadow: 0 1px 3px rgba(#000, 0.1);
        .tit {
            font-size: 14px;
            padding: 8px 16px;
            border-radius: 4px;
            cursor: pointer;
            background: $color;
            color: #fff;
            margin-right: 8px;
        }
        .more {
            float: right;
            cursor: pointer;
        }
    }
    .b {
        height: 550px;
        overflow-y: auto;
        .item {
            line-height: 32px;
            padding: 8px 16px;
            border-bottom: 1px solid #eee;
            display: flex;
            clear: both;
            .img {
                height: 32px;
                width: 32px;
                background: no-repeat center / cover;
                border-radius: 50%;
                margin-right: 16px;
            }
            .obj {
                font-size: 13px;
            }
            &:hover {
                background: whitesmoke;
                cursor: pointer;
            }
        }
    }
}
</style>
