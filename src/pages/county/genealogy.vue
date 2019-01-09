<template>
    <div class="main">
        <div class="adlinks">
            <img src="./img/genealogy.jpg">
        </div>
        <div class="inner">
            <div class="h">
                <div class="cn">数字家谱</div>
                <Divider class="en">Genealogy</Divider>
            </div>
            <genealogy/>
        </div>
    </div>
</template>
<script>
import genealogy from "./list/genealogy";
export default {
    components: {
        genealogy
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
.h {
    text-align: center;
    padding: 32px 0;
    .cn {
        font-size: 24px;
    }
    .en {
        font-weight: 300;
    }
}
</style>
