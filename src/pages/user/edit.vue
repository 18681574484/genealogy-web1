<template>
    <div class="pages">
        <Navbar title="修改资料"></Navbar>
        <div class="main">
            <van-cell-group>
                <van-cell title="头像">
                    <slot>
                        <van-uploader :after-read="onRead" class="upload">
                            <div class="img" :style="api.imgBG(user.picSrc)" v-if="user.picSrc"></div>
                            <van-icon class-prefix="icon" name="camerarotate" color="#ccc" size=".5rem" v-else/>
                        </van-uploader>
                    </slot>
                </van-cell>
                <van-field v-model="user.nickName" label="昵称" placeholder="请输入昵称" input-align="right" clearable/>
                <van-field v-model="user.realName" label="真实姓名" placeholder="行不更名 坐不改姓" input-align="right" clearable/>
            </van-cell-group>
            <div class="actions">
                <div class="btn" @click="toSubmit">提交</div>
            </div>
        </div>
    </div>
</template>
<script>
import Navbar from "_c/navbar/navbar.vue";
export default {
    name: "Page",
    components: {
        Navbar
    },
    data() {
        return {
            user: {
                nickName: "",
                realName: "",
                summary: "暂无信息",
                picSrc: ""
            }
        };
    },
    computed: {},
    mounted: function() {
        this.user = {};
        this.user = this.$store.state.user;
    },
    methods: {
        onRead(e) {
            this.api
                .upload(
                    this.api.admin.base + this.api.admin.upload_img,
                    {},
                    {
                        key: "file",
                        file: e.file
                    }
                )
                .then(res => {
                    if ((res.code = 200)) {
                        this.user.picSrc = res.data.file_path;
                    } else {
                        this.$toast(res.msg);
                    }
                });
        },
        toSubmit() {
            this.api
                .post(this.api.user.base + this.api.user.update, {
                    nickName: this.user.nickName,
                    realName: this.user.realName,
                    summary: "暂无信息",
                    // englishName: this.user.englishName,
                    // nation: this.user.nation,
                    // birthplace: this.user.birthplace,
                    // job: this.user.job,
                    // presentAddress: this.user.presentAddress,
                    // oldAddress: this.user.oldAddress,
                    // alias: this.user.alias,
                    // lidai: this.user.lidai,
                    // jinshi: this.user.jinshi,
                    // laopai: this.user.laopai,
                    // xinpai: this.user.xinpai,
                    // tongpai: this.user.tongpai,
                    picSrc: this.user.picSrc
                })
                .then(res => {
                    if (res.code == 200) {
                        this.$toast("修改成功");
                        this.$store.commit("updateUser", res.data);
                    } else {
                        this.$Message.error(res.msg);
                    }
                });
        }
    }
};
</script>