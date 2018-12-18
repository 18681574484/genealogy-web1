<template>
    <div class="main">
        <div class="adlinks">
            <img src="./img/culture.png">
        </div>
        <div class="inner">
            <div class="sia">
                <div class="h kt">
                    <div class="tit">各地分支</div>
                </div>
                <div class="b">
                    <ChartMap style="height:640px;width:100%"/>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { ChartMap } from "_c/charts";
export default {
    components: {
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
.sia {
    padding: 16px 0;
    .h {
        height: 48px;
        line-height: 48px;
        padding-left: 32px;
        font-size: 20px;
    }
}
</style>
