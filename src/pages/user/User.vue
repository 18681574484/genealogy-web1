<template>
    <div class="main">
        <div class="inner">
            <Row :gutter="16">
                <i-col :span="12">
                    <News/>
                </i-col>
                <i-col :span="12">
                    <Shuoshuo/>
                </i-col>
            </Row>
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
