<template>
    <div class="sitename">
        <span>{{info.siteName}}</span>
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
                .get(this.api.county.base + this.apiList[e].apiUrl, {})
                .then(res => {
                    if (res.code == 200) {
                        this.info = res.data;
                    }
                });
        }
    }
};
</script>
