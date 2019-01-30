<template>
    <div class="main">
        <Banner/>
        <div class="inner">
            <div class="card">
                <div class="card_item">
                    <Charitable/>
                </div>
                <div class="card_item">
                    <Payers/>
                </div>
            </div>
        </div>
        <div class="adlinks">
            <img src="./img/adlinkb.png">
        </div>
        <div class="inner">
            <div class="card">
                <div class="card_item">
                    <Topnews/>
                </div>
                <div class="card_item">
                    <Records/>
                </div>
            </div>
        </div>
        <div class="adlinks">
            <img src="./img/adlinkb.png">
        </div>
        <div class="inner">
            <div class="card">
                <div class="card_item">
                    <News/>
                </div>
                <div class="card_item">
                    <Human/>
                </div>
            </div>
        </div>
        <div class="inner">
            <div class="children"></div>
        </div>
        <div class="inner">
            <div class="card">
                <Culture/>
            </div>
            <div class="card">
                <Famous/>
            </div>
        </div>
        <Friends/>
    </div>
</template>
<script>
import Banner from "./c/banner.vue";
import Charitable from "./c/charitable.vue";
import Payers from "./c/payers.vue";
import Topnews from "./c/topnews.vue";
import Records from "./c/records.vue";
import Human from "./c/human.vue";
import News from "./c/news.vue";
import Famous from "./c/famous.vue";
import Culture from "./c/culture.vue";
import Friends from "./c/friends.vue";

export default {
    name: "Home",
    components: {
        Banner,
        Charitable,
        Payers,
        Topnews,
        Records,
        Human,
        News,
        Famous,
        Friends,
        Culture,
    },
    data() {
        return {};
    },
    computed: {},
    mounted: function() {},
    methods: {}
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/var.scss";
.sid {
    background: url(./img/mapbg.jpg) no-repeat center;
    .inner {
        overflow: hidden;
    }
}
.card {
    width: 100%;
    display: flex;
    justify-content: space-between;
    .card_item {
        padding: 8px 0;
        width: 560px;
    }
}
</style>

