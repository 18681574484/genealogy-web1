<template>
    <div class="page-user" style="padding-top:32px;">
        <Topbar/>
        <NavBar/>
        <Usergrid/>
        <router-view/>
        <FootBar/>
    </div>
</template>
<script>
import { Topbar, Usergrid, NavBar, FootBar } from "./c";
export default {
    components: {
        Topbar,
        Usergrid,
        NavBar,
        FootBar
    },
    data() {
        return {};
    },
    computed: {},
    mounted: function() {},
    methods: {},
    beforeCreate() {}
};
</script>
<style lang="less">
@import "../../assets/theme/iview.less";
</style>
<style lang="scss">
@import "@/assets/css/var.scss";
.page-user {
    background: whitesmoke;
    .h {
        line-height: 40px;
        padding: 0 16px;
        .more {
            float: right;
            color: #999;
        }
        .tit {
            font-size: 16px;
            border-bottom: 1px solid #eee;
        }
    }
    .grid {
        background-color: #fff;
    }
}
</style>
