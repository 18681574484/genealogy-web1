<template>
    <div class="list">
        <div class="h">
            <span class="more">更多</span>
            <span class="tit">家族头条</span>
        </div>
        <Card class="b" v-if="info.id">
            <router-link tag="div" :to="'detail?type=records&id='+info.id" class="img" :style="info.newsUploadFiles.length ? api.imgBG(info.newsUploadFiles[0].filePath): ''">
                <div class="tit">{{info.newsText}}</div>
            </router-link>
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
            list: [],
            info: {}
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
                .get(this.api.province.base + this.apiList[e].apiUrl, {
                    pageSize: 1})
                .then(res => {
                    if (res.code == 200) {
                        this.apiData[e] = res.data;
                        this.list = res.data.records;
                        if (this.list.length) {
                            this.info = this.list[0];
                            console.log(this.info);
                        }
                    }
                });
        }
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
            cursor: pointer;
            width: 540px;
            height: 360px;
            position: relative;
            background: #fff no-repeat center / cover;
        }
        .tit {
            position: absolute;
            z-index: 1;
            bottom: 0;
            right: 0;
            width: 100%;
            line-height: 40px;
            height: 40px;
            overflow: hidden;
            background: rgba(0, 0, 0, 0.6);
            color: #fff;
            padding: 0 16px;
        }
    }
}
</style>