<template>
    <div class="main">
        <div class="inner">
            <Row :gutter="16">
                <i-col :span="12">
                    <Blog/>
                </i-col>
                <i-col :span="12">
                    <Note/>
                </i-col>
            </Row>
            <Videos/>
            <Images/>
        </div>
    </div>
</template>
<script>
import Blog from "./c/blog.vue";
import Note from "./c/note.vue";
import Images from "./c/image.vue";
import Videos from "./c/video.vue";
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
