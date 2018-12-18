<template>
    <div class="main">
        <Banner/>
        <div class="adlinks">
            <img src="./img/adlinkb.png">
        </div>
        <div class="sid">
            <div class="inner">
                <ChartMap style="height:640px;width:100%"/>
            </div>
        </div>
    </div>
</template>
<script>
import { ChartMap } from "_c/charts";
import Banner from "./c/banner.vue";
export default {
    name: "Home",
    components: {
        Banner,
        ChartMap
    },
    data() {
        return {
            apiData: {}
        };
    },
    computed: {},
    mounted: function() {
    },
    methods: {
    }
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/var.scss";
.sid {
    background: url(./img/mapbg.jpg) no-repeat center;
    .inner {
        overflow: hidden;
    }
}
</style>
