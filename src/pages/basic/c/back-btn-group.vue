<template>
    <div>
        <span class="link" @click="backHome" style="margin-right:.5rem;">返回首页</span>
        <span class="link" @click="backHome">返回上一页({{ second }}s)</span>
    </div>
</template>

<script>
import "./error.less";
export default {
    name: "backBtnGroup",
    data() {
        return {
            second: 3,
            timer: null
        };
    },
    methods: {
        backHome() {
            this.$router.replace({
                name: "home"
            });
        },
        backPrev() {
            this.$router.go(-1);
        }
    },
    mounted() {
        this.timer = setInterval(() => {
            if (this.second === 0) this.backPrev();
            else this.second--;
        }, 1000);
    },
    beforeDestroy() {
        clearInterval(this.timer);
    }
};
</script>
