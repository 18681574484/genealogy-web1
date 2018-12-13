<template>
    <div>
        <Summarys :url="url" v-if="url.length"/>
    </div>
</template>

<script>
import Summarys from "./c/summarys-list";
export default {
    components: {
        Summarys
    },
    data() {
        return {
            url: this.api.adminUrl("summarys_list", 1)
        };
    },
    mounted() {}
};
</script>