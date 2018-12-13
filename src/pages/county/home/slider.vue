<template>
    <div class="swiper-container slider">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(v,i) in list" :key="i" @click="linkSlider(v)">
                <div class="item">
                    <div class="img" :style="v.picFileSrc? api.imgBG(v.picFileSrc):''" :alt="v.personName"/>
                    <div class="obj">
                        <div class="tit">{{v.personName}}</div>
                        <div class="tag">{{v.personTag || '-'}}</div>
                        <div class="intro">{{v.personSummary}}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="swiper-pagination"></div>
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
            initialSlide: 0,
            observer: true,
            observeParents: true,
            slidesPerView: 3.5,
            pagination: {
                el: ".swiper-pagination",
                clickable: true
            }
        });
    },
    methods: {
        linkSlider(e) {}
    },
    destroyed() {
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
.item {
    width: 320px;
    padding: 16px;
    padding-top: 64px;
    white-space: nowrap;
    position: relative;
    .img {
        position: absolute;
        border-radius: 100%;
        height: 128px;
        width: 128px;
        top: 0;
        left: 50%;
        margin-left: -70px;
        border: 6px solid #fff;
        background: whitesmoke no-repeat center / cover;
    }

    .obj {
        overflow: hidden;
        color: #fff;
        padding: 80px 16px 32px;
        background: #000 url(../img/bg-famous.png) no-repeat center / cover;
        box-shadow: 0 2px 5px rgba(#000, 0.5);
        border-radius: 32px 1px 32px 1px;
        .tit {
            text-align: center;
            font-size: 16px;
            overflow: hidden;
            height: 32px;
            text-overflow: ellipsis;
        }
        .tag {
            text-align: center;
            font-size: 14px;
            overflow: hidden;
            height: 24px;
            text-overflow: ellipsis;
            position: relative;
            &:after {
                content: "";
                position: absolute;
                left: 45%;
                right: 45%;
                bottom: 0;
                height: 2px;
            }
        }
        .intro {
            white-space: normal;
            height: 96px;
            font-size: 12px;
            line-height: 24px;
            overflow: hidden;
        }
    }
}
</style>
