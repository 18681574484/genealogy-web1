<template>
    <div class="page" v-if="$store.state.province.apiList">
        <Topbar/>
        <NavBar/>
        <router-view/>
        <FootBar type="province"/>
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
    mounted: function() {},
    methods: {},
    beforeCreate() {
        this.$store.dispatch("provinceHomeApi");
    }
};
</script>