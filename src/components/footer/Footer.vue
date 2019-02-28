<template>
    <div class="footerDiv">
       <ul class="footUl">
           <router-link to="/home"  tag="li" >
                <img  :src="home" alt="" >
                 <p>首页</p>
           </router-link>
           <router-link to="/chatting" tag="li" >
                <img :src="chat" alt="">
                <p>聊天</p>
           </router-link>
           <router-link to="/add" tag="li" class="add" >
               <img src="@/assets/images/addition.png" alt="">
           </router-link>
           <router-link to="/video" tag="li"> 
                <img :src="video" alt="">
                <p>视频</p>
           </router-link>
           <router-link to="personal" tag="li">
                <img :src="personage" alt="">
                <p>我的</p>
           </router-link>
       </ul>
    </div>
</template>

<script>
export default {
    props: {

    },
    data() {
        return {
            home: require("@/assets/images/home.png"),
            chatting: require("@/assets/images/chat.png"),
            video: require("@/assets/images/video.png"),
            personage: require("@/assets/images/personage.png"),
            chat: require("@/assets/images/chat.png")
        };
    },
    computed: {

    },
    created() {
        this.url()
    },
    mounted() {
        
    },
    watch: {
        "$route": "url"
    },
    methods: {
        url() {
            var urlImg = this.$route.path
            if(urlImg == '/home') {
                this.home = require("@/assets/images/home1.png")
            }else {
                this.home = require("@/assets/images/home.png")
            }
            if(urlImg == '/video') {
                this.video = require("@/assets/images/video1.png")
            }else {
                this.video = require("@/assets/images/video.png")
            }
            if(urlImg == '/personal') {
                this.personage = require("@/assets/images/personage1.png")
            }else{
                this.personage = require("@/assets/images/personage.png")
            }
            if(urlImg == '/chatting') {
                this.chat = require("@/assets/images/chat1.png")
            }else{
                this.chat = require("@/assets/images/chat.png")
            }
            
        }
    },
    components: {

    },
};
</script>

<style scoped lang="less">
    .footerDiv {
        position: fixed;
        bottom: 0;
        left: 0;
        height: 0.97rem;
        width: 100%;
        border-top: 0.01rem solid #ccc;
        padding: 0 0.2rem;
        overflow: hidden;
        box-sizing:border-box;
        z-index: 999;
        background-color: #fff;
        .footUl {
            display: flex;
            li {
                height: 0.97rem;
                width: 1.5rem;
                position: relative;
                img {
                    width: 0.44rem;
                    height: 0.44rem;
                    position: absolute;
                    left: 50%;
                    transform: translateX(-50%);
                    top: 0.1rem;
                }
                p {
                    font-size: 0.18rem;
                    position: absolute;
                    left: 50%;
                    bottom: -0.15rem;
                    transform: translateX(-50%);
                    margin-top: 0.5rem;
                }
            }
            .add {
                flex-grow: 1;
              img {
                    width: 0.69rem;
                    height: 0.69rem;
              }
            }
            
        }
    }
</style>


