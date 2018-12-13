<template>
    <div class="swiper-container slider">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(v,i) in list" :key="i" @click="linkSlider(v)">
                <img :src="api.imgurl(v.URL)" :alt="v.Title">
            </div>
        </div>
    </div>
</template>
<script>
import Swiper from "swiper";
export default {
    name: "slider",
    data() {
        return {
            swiper: null
        };
    },
    mounted: function() {
        this.swiper = new Swiper(".swiper-container", {
            autoplay: true,
            slidesPerView: 1.5,
            spaceBetween: 16
        });
    },
    methods: {
        linkSlider(e) {}
    },
    beforeDestroy() {
        this.swiper.destroy(false);
    },
    props: ["list"]
};
</script>
<style lang="scss" scoped>
.slider {
    height: 100%;
    width: 100%;
}
</style>
