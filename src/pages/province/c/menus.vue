<template>
    <div class="menus">
        <div class="row">
            <router-link to="notice" class="item">
                <img src="../img/notice.png" alt>
                <p>家族公告</p>
            </router-link>
            <router-link to="records" class="item">
                <img src="../img/dynamic.png" alt>
                <p>家族动态</p>
            </router-link>
            <router-link to="charity" class="item">
                <img src="../img/charity.png" alt>
                <p>慈善公益</p>
            </router-link>
            <router-link to="culture" class="item">
                <img src="../img/culture.png" alt>
                <p>家族文化</p>
            </router-link>
            <router-link to="video_fm" class="item">
                <img src="../img/video.png" alt>
                <p>家族视频</p>
            </router-link>
        </div>
        <div class="row">
            <router-link to="industry" class="item">
                <img src="../img/industry.png" alt>
                <p>家族产业</p>
            </router-link>
            <router-link to="famous" class="item">
                <img src="../img/famous.png" alt>
                <p>家族名人</p>
            </router-link>
            <router-link to="ancestors" class="item">
                <img src="../img/ancestors.png" alt>
                <p>祖先分支</p>
            </router-link>
            <router-link to="help" class="item">
                <img src="../img/help.png" alt>
                <p>慈善帮扶</p>
            </router-link>
            <router-link to="genealogy" class="item">
                <img src="../img/genealogy.png" alt>
                <p>数字家谱</p>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="less">
.menus {
    padding: 0.2rem 0;
    margin: 0.2rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    border-radius: 0.1rem;
    .row {
        display: flex;
        text-align: center;
        flex: 5;
    }
    .item {
        width: 20%;
        color: #333;
        font-size: 0.24rem;
        padding-bottom: 0.1rem;
        img {
            width: 50%;
        }
    }
}
</style>
