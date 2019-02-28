<template>
    <div class="pages">
        <Tabbar :active="4"></Tabbar>
        <div class="main" v-if="user">
            <router-link tag="div" to="edit" class="h">
                <div class="img" :style="api.imgBG(user.picSrc)"></div>
                <div class="obj">
                    <div class="name">{{user.nickName}}</div>
                    <div class="tag">
                        <span>0 关注</span>
                        <span>0 粉丝</span>
                    </div>
                </div>
            </router-link>
            <div class="b">
                <van-cell-group>
                    <van-cell title="我的日志" to="/user/blog" is-link>
                        <van-icon slot="icon" class-prefix="icon" name="writefill" color="#999" style="margin-right:.1rem;"/>
                    </van-cell>
                    <van-cell title="我的说说" to="/user/note" is-link>
                        <van-icon slot="icon" class-prefix="icon" name="messagefill" color="#999" style="margin-right:.1rem;"/>
                    </van-cell>
                    <van-cell title="我的照片" to="/user/image" is-link>
                        <van-icon slot="icon" class-prefix="icon" name="picfill" color="#999" style="margin-right:.1rem;"/>
                    </van-cell>
                    <van-cell title="我的视频" to="/user/video" is-link>
                        <van-icon slot="icon" class-prefix="icon" name="videofill" color="#999" style="margin-right:.1rem;"/>
                    </van-cell>
                </van-cell-group>
                <van-cell-group style="border-top:.2rem solid #eee;">
                    <van-cell title="联谊会后台管理" @click="handelClick(user.siteId,1)" v-if="user.role == 1 && user.siteId">
                        <van-icon slot="icon" class-prefix="icon" name="repairfill" color="#999" style="margin-right:.1rem;"/>
                    </van-cell>
                    <van-cell title="省级后台管理" @click="handelClick(user.siteId,2)" v-if="user.role == 2 && user.siteId">
                        <van-icon slot="icon" class-prefix="icon" name="repairfill" color="#999" style="margin-right:.1rem;"/>
                    </van-cell>
                    <van-cell title="全国后台管理" @click="handelClick(user.siteId,3)" v-if="user.role == 3 && user.siteId">
                        <van-icon slot="icon" class-prefix="icon" name="repairfill" color="#999" style="margin-right:.1rem;"/>
                    </van-cell>
                    <van-cell title="总后台管理" @click="handelClick($store.state.county_id,1)" v-if="user.role == 9">
                        <van-icon slot="icon" class-prefix="icon" name="repairfill" color="#999" style="margin-right:.1rem;"/>
                    </van-cell>
                    <van-cell title="退出登录" @click="logout" is-link>
                        <van-icon slot="icon" class-prefix="icon" name="exit" color="#999" style="margin-right:.1rem;"/>
                    </van-cell>
                </van-cell-group>
            </div>
        </div>
    </div>
</template>
<script>
import Navbar from "_c/navbar/navbar.vue";
import Tabbar from "_c/tabbar/tabbar.vue";
export default {
    name: "Page",
    components: {
        Navbar,
        Tabbar
    },
    computed: {
        user() {
            return this.$store.state.user;
        }
    },
    data() {
        return {};
    },
    beforeCreate() {
        this.$store.dispatch("resetUser");
    },
    mounted: function() {
        if (!this.user.token) {
            this.$router.replace("/login");
        }
    },
    methods: {
        logout() {
            this.$dialog
                .confirm({
                    title: "提示",
                    message: "确定退出账号？"
                })
                .then(() => {
                    this.$store.commit("updateUser", []);
                    this.$router.replace("home");
                })
                .catch(() => {});
        },
        handelClick(site, step) {
            let com_data = {
                id: site,
                step: step
            };
            this.$store.commit("updateAdminId", com_data);
            window.open("http://" + location.host + "/#/a", "_blank");
        }
    }
};
</script>
<style lang="less" scoped>
.h {
    overflow: hidden;
    white-space: nowrap;
    display: block;
    padding: 0.8rem 0.3rem;
    background: #d2211b;
    color: #fff;
    .img {
        float: left;
        margin-right: 0.3rem;
        height: 1.2rem;
        width: 1.2rem;
        border-radius: 50%;
        background: no-repeat center / cover;
    }
    .obj {
        overflow: hidden;
        .name {
            line-height: 0.5rem;
            font-size: 0.32rem;
        }
        .tag {
            font-size: 0.24rem;
            line-height: 0.5rem;
            span {
                margin-right: 0.3rem;
            }
        }
    }
}
</style>
