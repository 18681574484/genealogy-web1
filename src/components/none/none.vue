<template>
    <div class="none">
        <van-icon class-prefix="icon" :name="icon" size="3rem" color="#ccc"/>
        <div class="text">{{text}}</div>
    </div>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            default: "暂无数据"
        },
        icon: {
            type: String,
            default: "coffee"
        }
    },
    data() {
        return {};
    },
    mounted: function() {},
    methods: {}
};
</script>