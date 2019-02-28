
<template>
    <div class="pages"></div>
</template>

<script>
export default {
    name: "Page",
    data() {
        return {};
    },
    computed: {
        step() {
            return this.$store.state.step;
        }
    },
    mounted: function() {
        switch (this.step) {
            case 1:
                this.$router.replace("/c/chat");
                break;
            case 2:
                this.$router.replace("/p/chat");
                break;
        }
    },
    methods: {}
};
</script>