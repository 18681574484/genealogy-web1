<template>
    <div class="main">
        <div class="inner">
            <Record/>
            <Media/>
        </div>
    </div>
</template>
<script>
import Record from "./list/records.vue";
import Media from "./list/media.vue";

export default {
    components: {
        Record,
        Media
    },
    data() {
        return {};
    },
    mounted: function() {},
    methods: {}
};
</script>