<template>
    <router-view v-if="apiList && this.$route.path != '/'"></router-view>
</template>

<script>
export default {
    computed: {
        apiList() {
            return this.$store.state.apiList;
        }
    },
};
</script>