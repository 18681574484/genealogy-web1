<template>
    <div class="sitename">
        <div class="tit">{{info.siteName}}</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            info: {
                siteName: ""
            }
        };
    },
    computed: {
        apiList() {
            return this.$store.state.apiList;
        }
    },
    mounted: function() {
        this.getApiData("index_summary");
    },
    methods: {
        getApiData(e) {
            this.api
                .get(this.api.province.base + this.apiList[e].apiUrl, {})
                .then(res => {
                    if (res.code == 200) {
                        this.info = res.data;
                    }
                });
        }
    }
};
</script>
<style lang="less" scoped>
.sitename {
    background: #d2211b;
    height: 70px;
    position: relative;
    .tit {
        background: url("../../../assets/images/titlebg.png") no-repeat;
        background-position: center;
        background-size: auto 80%;
        font-size: 14px;
        line-height: 50px;
        height: 50px;
        color: #e3c793;
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        z-index: 2;
    }
}
</style>
