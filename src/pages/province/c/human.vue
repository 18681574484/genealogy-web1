<template>
    <div class="list">
        <div class="h">
            <span class="tit" v-for="(v,i) in menu" :key="i" :class="menucurr == i ? 'curr' : ''" @click="chgMenu(i)">{{v}}</span>
        </div>
        <div class="b"></div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            menu: ["家族长老", "家族栋梁"],
            menucurr: 0,
            apiData: {
                index_architecture_pay_in: {},
                index_charity_pay_out: {}
            },
            list: []
        };
    },
    computed: {
        apiList() {
            return this.$store.state.province.apiList;
        }
    },
    mounted: function() {},
    methods: {
        getApiData(e) {
            this.api
                .get(this.api.province.base + this.apiList[e].apiUrl, {})
                .then(res => {
                    if (res.code == 200) {
                        this.apiData[e] = res.data;
                    }
                });
        },
        chgMenu(i) {
            this.list = [];
            this.menucurr = i;
            this.list = i
                ? this.apiData.index_charity_pay_out
                : this.apiData.index_architecture_pay_in;
        }
    }
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/var.scss";

.list {
    .h {
        height: 48px;
        line-height: 48px;
        .tit {
            font-size: 14px;
            padding: 8px 16px;
            border-radius: 4px;
            cursor: pointer;
            &.curr {
                background: $color;
                color: #fff;
            }
        }
    }
}
</style>