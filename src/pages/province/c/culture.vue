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
            menu: ["家族祠堂", "字派", "迁徙之源"],
            menucurr: 0,
            apiData: {
                index_family_culture: {},
                index_zipai: {},
                index_family_qianxi: {}
            },
            list: []
        };
    },
    computed: {
        apiList() {
            return this.$store.state.province.apiList;
        }
    },
    mounted: function() {
        this.getApiData("index_family_culture");
        this.getApiData("index_zipai");
        this.getApiData("index_family_qianxi");
    },
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
            let keys = Object.keys(this.apiData);
            this.list = {};
            this.menucurr = i;
            this.list = this.apiData[keys[i]];
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