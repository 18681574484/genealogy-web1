<template>
    <div class="main">
        <div class="adlinks">
            <img src="./img/culture.png">
        </div>
        <div class="inner">
            <div class="maps" style="height:700px;">
                <ChartMap v-if="geojson.type" @resetGeo="resetGeo" :geoname="geoname" :map="geojson" style="height:600px;" text="下级分支"/>
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
import { ChartMap } from "_c/charts";
import { async } from "q";
export default {
    components: {
        ChartMap
    },
    data() {
        return {
            geojson: {},
            geoname: "湖北",
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
            }
        };
    },
    computed: {
        apiList() {
            return this.$store.state.province.apiList;
        }
    },
    mounted: function() {
        this.getApiData("index_subordinate");
        this.geojson = this.cityMap[this.geoname];
    },
    methods: {
        resetGeo(e) {
            this.geoname = e;
            this.$Message.success("查看" + e + "联谊会");
            // this.geojson = this.cityMap[e];
        },
        getApiData(e) {
            this.api
                .get(this.api.province.base + this.apiList[e].apiUrl, {
                    pageSize: 6
                })
                .then(res => {
                    if (res.code == 200) {
                    }
                });
        }
    }
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/var.scss";
</style>
