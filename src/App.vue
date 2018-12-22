<template>
    <router-view/>
</template>
<script>
import Vue from "vue";
import Iconfont from "@/components/common/iconfont.vue";
Vue.component("Iconfont", Iconfont);
export default {
    beforeCreate() {
        this.$store.dispatch("resetUser");
    }
};
</script>