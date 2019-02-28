<template>
    <van-swipe :autoplay="3000" indicator-color="#d2211b" class="slider">
        <van-swipe-item v-for="v in list" :key="v.id">
            <div class="img" :style="api.imgBG(v.picUrl)"></div>
        </van-swipe-item>
    </van-swipe>
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
            list: []
        };
    },
    watch: {
        isLoading: function(curVal, oldVal) {
            if (curVal) {
                this.getApiData("fan_index_slide_pic");
            }
        }
    },
    computed: {
        apiList() {
            return this.$store.state.apiList;
        }
    },
    mounted: function() {
        this.getApiData("fan_index_slide_pic");
    },
    methods: {
        getApiData(e) {
            this.api
                .get(this.api.county.base + this.apiList[e].apiUrl, {
                    classes: 2
                })
                .then(res => {
                    if (res.code == 200) {
                        this.list = res.data;
                    }
                });
        }
    }
};
</script>
<style lang="less" scoped>
.slider {
    margin-top: -0.9rem;
    width: 7.2rem;
    height: 4rem;
    margin-left: auto;
    margin-right: auto;
    border-radius: .1rem;
    .img {
        width: 100%;
        height: 100%;
        display: block;
        background: no-repeat center / cover;
    }
}
</style>