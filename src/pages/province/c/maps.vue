<template>
    <div class="map_card">
        <div class="maps">
            <ChartMap v-if="geojson.type" @resetGeo="resetGeo" :geoname="geoname" :map="geojson" style="height:600px;" text="下级分支"/>
        </div>
        <div class="list">
            <div class="item" v-for="(v,i) in listcurr" :key="i">{{v.siteName}}</div>
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
            let newlist = list.filter
            // for(let i in areas){
            //     if()
            // }
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
                if (a[v] == e) {
                    b = v;
                }
                i++;
            }
            return pcaa[b] || pcaa[a];
            // console.log(procode[b][c]);
            // if (pcaa[this.index_summary.regionCode][procode]) {
            //     return pcaa[b][c];
            // } else {
            //     return pcaa[a][c];
            // }

            // let sitename = pca[86][v];
            // let citys = {};
            // let res = 0;
            // for (let i in allpro) {
            //     if (!allpro[i].indexOf(e)) {
            //         citys = pcaa[i];
            //         res = i;
            //     }
            // }
            // for (let i in citys) {
            //     if (citys[i] == t) {
            //         res = i;
            //     }
            // }
            // return res;
        }
    }
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/var.scss";
.map_card {
    .maps {
        width: 600px;
        height: 600px;
    }
}
</style>
