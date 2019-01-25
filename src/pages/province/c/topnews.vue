<template>
    <div class="list">
        <div class="h">
            <span class="more">更多</span>
            <span class="tit">家族头条</span>
        </div>
        <Card class="b">
            <div class="img">
                <div class="tit">标题标题</div>
            </div>
        </Card>
    </div>
</template>
<script>
export default {
    data() {
        return {
            apiData: {
                index_family_record1: {}
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
        this.getApiData("index_family_record1");
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
    }
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/var.scss";

.list {
    height: 480px;
    .h {
        height: 48px;
        line-height: 48px;
        .tit {
            font-size: 14px;
            padding: 8px 16px;
            border-radius: 4px;
            cursor: pointer;
            background: $color;
            color: #fff;
        }
        .more {
            float: right;
            font-size: 12px;
        }
    }
    .b {
        .img {
            width: 540px;
            height: 360px;
            position: relative;
            background: #fff no-repeat center;
        }
        .tit {
            position: absolute;
            z-index: 1;
            bottom: 0;
            right: 0;
            width: 100%;
            line-height: 40px;
            height: 40px;
            background: rgba(0, 0, 0, 0.6);
            color: #fff;
            padding: 0 16px;
        }
    }
}
</style>