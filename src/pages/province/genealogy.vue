<template>
    <div class="main">
        <div class="inner">
            <div class="sia">
                <div class="h kt">
                    <div class="tit">数字家谱</div>
                </div>
                <Genealogy/>
            </div>
        </div>
    </div>
</template>
<script>
import Genealogy from "./list/genealogy.vue";
export default {
    name: "Home",
    components: {
        Genealogy
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
        background: url("./img/title-dot.png") no-repeat left center;
        font-size: 20px;
    }
}
</style>

