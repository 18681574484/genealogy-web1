<template>
    <div class="pages">
        <Navbar title="搜索"></Navbar>
        <div class="main">
            <van-search v-model="keywords" placeholder="请输入搜索关键词" show-action @search="onSearch">
                <div slot="action" @click="onSearch">搜索</div>
            </van-search>
        </div>
    </div>
</template>
<script>
import Navbar from "_c/navbar/navbar.vue";
export default {
    name: "Page",
    components: {
        Navbar
    },
    data() {
        return {
            keywords: ""
        };
    },
    mounted: function() {},
    methods: {
        onSearch() {
            this.$toast("暂未开放");
        }
    }
};
</script>