<template>
    <div ref="dom" class="charts chart-map"></div>
</template>

<script>
import echarts from "echarts";
import tdTheme from "./theme.json";
import { on, off } from "@/libs/tools";
echarts.registerTheme("tdTheme", tdTheme);
export default {
    name: "ChartMap",
    props: {
        value: Array,
        text: String,
        subtext: String,
        map: Object,
        geoname: String
    },
    data() {
        return {
            dom: null
        };
    },
    methods: {
        resize() {
            this.dom.resize();
        }
    },
    mounted() {
        this.$nextTick(() => {
            echarts.registerMap(this.geoname, this.map);
            let option = {
                title: {
                    text: this.geoname,
                    left: "20%",
                    top: 90,
                    textStyle: {}
                },
                tooltip: {},
                geo: {
                    type: "map",
                    map: this.geoname,
                    label: {
                        show: true,
                        position: ["50%", "50%"]
                    },
                    itemStyle: {
                        areaColor: "#fff"
                    }
                },
                series: []
            };
            this.dom = echarts.init(this.$refs.dom, "tdTheme");
            this.dom.on("click", e => {
                console.log(e);
                this.$emit("resetGeo", e.name);
            });
            this.dom.setOption(option);
            on(window, "resize", this.resize);
            console.log(echarts);
        });
    },
    beforeDestroy() {
        off(window, "resize", this.resize);
    }
};
</script>

<style lang="scss">
.charts {
    height: 700px;
}
</style>
