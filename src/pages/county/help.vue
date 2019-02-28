<template>
    <div class="pages">
        <Navbar title="慈善帮扶"></Navbar>
        <div class="main">
            <None icon="newfill" text="暂未开放"/>
        </div>
    </div>
</template>
<script>
import Navbar from "_c/navbar/navbar.vue";
export default {
    name: "Page",
    components: {
        Navbar
    },
    data() {
        return {};
    },
    mounted: function() {},
    methods: {}
};
</script>