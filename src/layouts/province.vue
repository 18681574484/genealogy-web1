<template>
    <router-view v-if="apiList"></router-view>
</template>

<script>
export default {
    computed: {
        apiList() {
            return this.$store.state.apiList;
        }
    },
    beforeCreate() {
        this.$store.dispatch("getProvinceApi");
        this.$store.dispatch("resetUser");
    }
};
</script>