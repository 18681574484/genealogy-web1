<template>
    <div ref="dom" class="charts chart-map"></div>
</template>

<script>
import echarts from "echarts";
import geoJson from "@/libs/geojson.json";
import tdTheme from "./theme.json";
import { on, off } from "@/libs/tools";
echarts.registerTheme("tdTheme", tdTheme);
export default {
    name: "ChartMap",
    props: {
        value: Array,
        text: String,
        subtext: String
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
        echarts.registerMap("china", geoJson);
        this.$nextTick(() => {
            let option = {
                geo: {
                    map: "china"
                },
                backgroundColor: "#f1f2f3",
                series: []
            };
            this.dom = echarts.init(this.$refs.dom, "tdTheme");
            this.dom.setOption(option);
            on(window, "resize", this.resize);
        });
    },
    beforeDestroy() {
        off(window, "resize", this.resize);
    }
};
</script>
