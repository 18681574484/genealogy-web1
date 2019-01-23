<template>
    <div class="main">
        <Banner/>
        <div class="inner">
            <div class="card">
                <div class="card_item">
                    <Charitable/>
                </div>
                <div class="card_item">
                    <Payers/>
                </div>
            </div>
        </div>
        <div class="adlinks">
            <img src="./img/adlinkb.png">
        </div>
        <div class="inner">
            <div class="card">
                <div class="card_item">
                    <Topnews/>
                </div>
                <div class="card_item">
                    <Records/>
                </div>
            </div>
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
import Charitable from "./c/charitable.vue";
import Payers from "./c/payers.vue";
import Topnews from "./c/topnews.vue";
import Records from "./c/records.vue";
export default {
    name: "Home",
    components: {
        Banner,
        Charitable,
        Payers,
        Topnews,
        Records,
        ChartMap
    },
    data() {
        return {};
    },
    computed: {},
    mounted: function() {},
    methods: {}
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
.card {
    display: flex;
    justify-content: space-between;
    .card_item {
        padding: 8px 0;
        width: 560px;
    }
}
</style>

