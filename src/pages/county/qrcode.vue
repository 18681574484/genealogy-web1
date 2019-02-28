<template>
    <div class="pages">
        <Navbar title="二维码"></Navbar>
        <div class="main" v-if="info.id">
            <qrcode :text="'http://yhtpw.com/mobile/#/base?type=c&code='+info.siteId" style="margin:1rem auto;"/>
            <div class="tips" style="text-align:center;font-size:.32rem">{{info.siteName}}</div>
        </div>
    </div>
</template>
<script>
import Navbar from "_c/navbar/navbar.vue";
import qrcode from "_c/qrcode";
export default {
    name: "Page",
    components: {
        qrcode,
        Navbar
    },
    data() {
        return {
            info: {}
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
                .get(this.api.county.base + this.apiList[e].apiUrl, {
                    pageSize: 1
                })
                .then(res => {
                    if (res.code == 200) {
                        this.info = res.data;
                        this.title = res.data.siteName;
                        document.title = this.title;
                    }
                });
        },
        toFlow() {
            this.$toast("暂未开放");
        }
    }
};
</script>