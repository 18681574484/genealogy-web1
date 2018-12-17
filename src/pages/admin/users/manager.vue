<template>
    <div>
        <UserList :url="url" v-if="url.length"/>
    </div>
</template>

<script>
import UserList from "./c/list";
export default {
    components: {
        UserList
    },
    data() {
        return {
            menu: [],
            menucurr: {},
            url: ""
        };
    },
    mounted() {
        this.url = this.api.admin.user.base + this.api.admin.user.list_role;
    },
    methods: {}
};
</script>