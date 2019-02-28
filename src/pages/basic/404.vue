<template>
    <error-content code="404" desc="" :src="src"/>
</template>

<script>
import error404 from "./img/error-404.svg";
import errorContent from "./c/error-content.vue";
export default {
    name: "error_404",
    components: {
        errorContent
    },
    data() {
        return {
            src: error404
        };
    }
};
</script>