<template>
    <div class="navbar">
        <div class="item" v-for="(v,i) in menus" :key="i" :class="navcurr == v.code ? 'curr':''" @click="link(v)">
            <span>{{v.name}}</span>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            navcurr: "",
            menus: [
                {
                    url: "user",
                    code: "u_center",
                    name: "个人主页"
                },
                {
                    url: "family",
                    code: "u_family",
                    name: "我的族谱"
                },
                {
                    url: "donate",
                    code: "u_donate",
                    name: "捐款记录"
                }
            ]
        };
    },
    mounted: function() {
        console.log(this.$route.name);
        this.navcurr = this.$route.name;
    },
    methods: {
        link(e) {
            this.navcurr = e.code;
            this.$router.push(e.url);
        }
    }
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/var.scss";
.navbar {
    background: #fff;
    color: $color;
    text-align: center;
    .item {
        cursor: pointer;
        display: inline-block;
        width: 120px;
        line-height: 48px;

        span {
            font-size: 14px;
            display: inline-block;
            border-bottom: 2px solid transparent;
        }

        &.curr {
            span {
                border-bottom: 2px solid $color;
            }
        }
    }
}
</style>
