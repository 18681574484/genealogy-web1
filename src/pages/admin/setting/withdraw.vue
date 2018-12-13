<template>
    <div>
        <Withdraw :url="url" v-if="url.length"/>
    </div>
</template>

<script>
import Withdraw from "./c/withdraw-list";
export default {
    components: {
        Withdraw
    },
    data() {
        return {
            url: this.api.adminUrl(
                "site_withdraw_list",
                this.$store.state.admin.step
            )
        };
    },
    mounted() {},
    methods: {}
};
</script>