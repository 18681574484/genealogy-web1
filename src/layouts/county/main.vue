<template>
    <div class="page" v-if="$store.state.county.apiList">
        <Topbar/>
        <NavBar/>
        <router-view/>
        <FootBar type="county"/>
    </div>
</template>
<script>
import { Topbar, NavBar, FootBar } from "./c";
export default {
    components: {
        Topbar,
        NavBar,
        FootBar
    },
    data() {
        return {};
    },
    computed: {},
    mounted: function() {
        if (
            /iphone|ios|android|ipod/i.test(navigator.userAgent.toLowerCase())
        ) {
            location.href = "/mobile/";
        }
    },
    methods: {},
    beforeCreate() {
        this.$store.dispatch("countyHomeApi");
    }
};
</script>