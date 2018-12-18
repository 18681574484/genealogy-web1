<template>
    <div class="slider">
        <Carousel loop>
            <CarouselItem v-for="v in list" :key="v.id">
                <div class="img" :style="api.imgBG(v.picUrl)"></div>
            </CarouselItem>
        </Carousel>
    </div>
</template>
<script>
export default {
    name: "slider",
    data() {
        return {
            list: []
        };
    },
    computed: {
        apiList() {
            return this.$store.state.province.apiList;
        }
    },
    mounted: function() {
        this.getApiData("fan_index_slide_pic");
    },
    methods: {
        getApiData(e) {
            this.api
                .get(this.api.province.base + this.apiList[e].apiUrl, {})
                .then(res => {
                    if (res.code == 200) {
                        this.list = res.data;
                    }
                });
        }
    }
};
</script>
<style lang="scss" scoped>
.slider {
    height: 450px;
    width: 100%;
    .img {
        position: relative;
        overflow: hidden;
        height: 450px;
        background: no-repeat center;
    }
}
</style>