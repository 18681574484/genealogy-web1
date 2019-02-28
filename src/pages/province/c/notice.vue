<template>
    <van-notice-bar :text="info.newsTitle" mode="link" @click="onLink" v-if="info"/>
</template>

<script>
export default {
    props: {
        isLoading: {
            type: Boolean
        }
    },
    data() {
        return {
            info: null
        };
    },
    watch: {
        isLoading: function(curVal, oldVal) {
            if (curVal) {
                this.getApiData("index_family_record2");
            }
        }
    },
    computed: {
        apiList() {
            return this.$store.state.apiList;
        }
    },
    mounted: function() {
        this.getApiData("index_family_record2");
    },
    methods: {
        getApiData(e) {
            this.api
                .get(this.api.province.base + this.apiList[e].apiUrl, {
                    pageSize: 1
                })
                .then(res => {
                    if (res.code == 200) {
                        this.info = res.data.records[0];
                    }
                });
        },
        onLink(e) {
            this.$router.push("detail?type=records&id=" + this.info.id);
        }
    }
};
</script>