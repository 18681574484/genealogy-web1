<template>
    <div class="pages"></div>
</template>

<script>
export default {
    name: "Page",
    data() {
        return {};
    },
    beforeCreate() {
        switch (this.$store.state.step) {
            case 1:
                this.$router.replace("/c");
                break;
            case 2:
                this.$router.replace("/p");
                break;
        }
    }
};
</script>