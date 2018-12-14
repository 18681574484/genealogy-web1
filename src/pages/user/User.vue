<template>
    <div class="main">
        <div class="cards">
            <div class="inner">
                <News/>
                <Shuoshuo/>
            </div>
        </div>
        <div class="inner">
            <Videos/>
            <Images/>
        </div>
    </div>
</template>
<script>
import News from "./c/CentreNews.vue";
import Shuoshuo from "./c/CentreShuoshuo.vue";
import Images from "./c/CentreImages.vue";
import Videos from "./c/CentreVideos.vue";
export default {
    components: {
        Shuoshuo,
        Images,
        Videos,
        News
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
.cards {
    padding: 16px 0 0;
    background-color: whitesmoke;

    .inner {
        display: flex;
        justify-content: space-between;
    }
}
</style>
