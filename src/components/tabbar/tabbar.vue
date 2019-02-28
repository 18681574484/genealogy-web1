<template>
    <div class="tabbar">
        <van-tabbar v-model="curr" fixed>
            <van-tabbar-item v-for="(v,i) in navlist" :key="i" :to="v.url" replace @click="creat(i)">
                <span>{{v.name}}</span>
                <img slot="icon" slot-scope="props" :src="props.active ? v.active : v.normal" :class="v.name?'':'big'">
            </van-tabbar-item>
        </van-tabbar>
        <van-popup v-model="show" position="bottom">
            <div class="creat">
                <van-cell-group>
                    <van-cell to="/add/blog">写日志</van-cell>
                    <van-cell to="/add/note">记录</van-cell>
                    <van-cell to="/user/image">传照片</van-cell>
                    <van-cell to="/add/video">拍视频</van-cell>
                </van-cell-group>
            </div>
        </van-popup>
    </div>
</template>

<script>
export default {
    props: {
        active: Number
    },
    data() {
        return {
            show: false,
            curr: this.active,
            navlist: [
                {
                    name: "首页",
                    url: "/home",
                    normal: require("./img/home.png"),
                    active: require("./img/home_curr.png")
                },
                {
                    name: "聊天",
                    url: "/chat",
                    normal: require("./img/chat.png"),
                    active: require("./img/chat_curr.png")
                },
                {
                    name: "",
                    url: "",
                    normal: require("./img/creat.png"),
                    active: require("./img/creat.png")
                },
                {
                    name: "视频",
                    url: "/videos",
                    normal: require("./img/video.png"),
                    active: require("./img/video_curr.png")
                },
                {
                    name: "我的",
                    url: "/user",
                    normal: require("./img/user.png"),
                    active: require("./img/user_curr.png")
                }
            ]
        };
    },

    mounted: function() {},
    methods: {
        creat(i) {
            if (i != 2) {
                return;
            }
            this.show = !this.show;
        }
    }
};
</script>
<style lang="less" >
.tabbar {
    .van-tabbar {
        height: 1rem;
        .van-tabbar-item {
            font-size: 0.24rem;
        }
        .van-tabbar-item--active {
            color: #d2211b;
        }
        .van-tabbar-item__icon img {
            height: 0.4rem;
            &.big {
                height: 0.6rem;
            }
        }
    }
    .van-popup--bottom {
        bottom: 1rem;
    }
    .van-overlay {
        height: auto;
        bottom: 1rem;
    }
}
</style>
