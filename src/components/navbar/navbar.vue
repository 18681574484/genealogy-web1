<template>
    <div class="navbar">
        <van-nav-bar :title="title" left-arrow @click-left="onClickLeft" fixed>
            <template slot="right">
                <slot name="right"></slot>
            </template>
        </van-nav-bar>
    </div>
</template>

<script>
export default {
    props: {
        title: String
    },
    data() {
        return {};
    },
    computed: {
        apiList() {
            return this.$store.state.apiList;
        }
    },
    mounted: function() {},
    methods: {
        onClickLeft() {
            if (window.history.length <= 1) {
                this.$router.replace({
                    path: "/"
                });
                return false;
            } else {
                this.$router.go(-1);
            }
        }
    }
};
</script>