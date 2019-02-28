<template>
    <div class="pages">
        <Navbar></Navbar>
        <Tabbar :active="0"></Tabbar>
        <div class="main">
            <Homepage />
        </div>
    </div>
</template>

<script>
import Navbar from "_c/navbar/nav_province.vue";
import Tabbar from "_c/tabbar/tabbar.vue";
import Homepage from "./c/homepage.vue";
export default {
    name: "Home",
    components: {
        Navbar,
        Tabbar,
        Homepage
    },
    data() {
        return {
            step: this.$store.state.step
        };
    },
    computed: {},
    mounted: function() {},
    methods: {}
};
</script>