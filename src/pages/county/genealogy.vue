<template>
    <div class="pages">
        <Navbar title="数字家谱"></Navbar>
        <div class="main">
            <Genealogy/>
        </div>
    </div>
</template>
<script>
import Navbar from "_c/navbar/navbar.vue";
import Genealogy from "./list/genealogy.vue";
export default {
    name: "Page",
    components: {
        Navbar,
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