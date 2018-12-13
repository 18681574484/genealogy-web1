<template>
    <div class="topbar">
        <div class="inner">
            <div class="user" v-if="user.token">
                <div class="img" :style="api.imgBG(user.picSrc)" :title="user.nickName"></div>
                <div class="obj">
                    <Dropdown trigger="click" @on-click="handleClick">
                        {{user.nickName}}
                        <Icon type="ios-arrow-down"></Icon>
                        <DropdownMenu slot="list">
                            <DropdownItem name="/u">个人中心</DropdownItem>
                            <DropdownItem name="resetPsw">修改密码</DropdownItem>
                            <DropdownItem name="isMsgBox" divided>我的消息</DropdownItem>
                            <DropdownItem name="admin" v-if="user.role == 1 && user.siteId">联谊会后台管理</DropdownItem>
                            <DropdownItem name="admin" v-if="user.role == 2 && user.siteId">省级后台管理</DropdownItem>
                            <DropdownItem name="admin" v-if="user.role == 3 && user.siteId">全国后台管理</DropdownItem>
                            <DropdownItem name="admin" v-if="user.role == 9">总后台管理</DropdownItem>
                            <DropdownItem name="/" divided>返回首页</DropdownItem>
                            <DropdownItem name="logout" divided>退出登录</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </div>

            <div class="user" v-else>
                <span class="btn login" @click="islogin = true">登录</span>
                <span>|</span>
                <span class="btn reg" @click="isreg = true">注册</span>
            </div>
            <div class="welcome">
                <span>欢迎进入「炎黄统谱网」</span>
                <span style="color:red">平台错误反馈QQ群：130523229</span>
            </div>
        </div>
        <Modal v-model="islogin" width="480px" class="g-auth" :footer-hide="true">
            <loginform @urlToReg="urlToReg" @closedialog="closedialog"/>
        </Modal>
        <Modal v-model="isreg" width="480px" class="g-auth" :footer-hide="true">
            <regform @urlToLogin="urlToLogin" @closedialog="closedialog"/>
        </Modal>
        <Modal v-model="isreset" width="480px" class="g-auth" :footer-hide="true">
            <resetform @closedialog="closedialog"/>
        </Modal>
        <Modal title="消息列表" v-model="isMsgBox" width="640px" :footer-hide="true">
            <msgBox/>
        </Modal>
    </div>
</template>
<script>
import loginform from "./login";
import regform from "./reg";
import resetform from "./reset";
import msgBox from "./msgBox";
export default {
    name: "Topbar",
    components: {
        loginform,
        regform,
        resetform,
        msgBox
    },
    data() {
        return {
            isreg: false,
            islogin: false,
            isreset: false,
            isMsgBox: false
        };
    },
    computed: {
        user() {
            return this.$store.state.user;
        },
        admin() {
            return this.$store.state.admin;
        }
    },
    mounted: function() {
        if (this.$route.query.back && sessionStorage.callback) {
            sessionStorage.removeItem("callback");
        }
    },
    methods: {
        handleClick(e) {
            switch (e) {
                case "isMsgBox":
                    this.isMsgBox = true;
                    break;
                case "logout":
                    this.$Modal.confirm({
                        title: "提示",
                        content: "确定退出账号？",
                        onOk: () => {
                            this.$store.commit("updateUser", []);
                        }
                    });
                    break;
                case "admin":
                    let com_data = {
                        id: this.user.siteId,
                        step: this.user.role
                    };
                    if (this.user.role == 9) {
                        if (!this.$route.matched.length) {
                            return;
                        }
                        switch (this.$route.matched["0"].path) {
                            case "/c":
                                com_data = {
                                    id: this.$store.state.county.id,
                                    step: 1
                                };
                                break;
                            case "/p":
                                com_data = {
                                    id: this.$store.state.province.id,
                                    step: 2
                                };
                                break;
                            default:
                                if (!this.admin.id || !this.admin.step) {
                                    this.$Modal.error({
                                        title: "提示",
                                        content:
                                            "请先返回相应联谊会，再进入管理后台"
                                    });
                                    return;
                                }
                                break;
                        }
                    }
                    this.$store.commit("updateAdminId", com_data);
                    this.$router.push("/a");
                    break;
                case "resetPsw":
                    this.isreset = true;
                    break;
                default:
                    this.$router.push(e);
                    break;
            }
        },
        urlToReg() {
            this.islogin = false;
            setTimeout(() => {
                this.isreg = true;
            }, 300);
        },
        urlToLogin() {
            this.isreg = false;
            setTimeout(() => {
                this.islogin = true;
            }, 300);
        },
        closedialog() {
            this.islogin = false;
            this.isreg = false;
            this.isreset = false;
            this.isMsgBox = false;
        }
    }
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/var.scss";
.topbar {
    position: fixed;
    right: 0;
    width: 100%;
    top: 0;
    z-index: 999;
    background-color: #eee;
    box-shadow: 0 1px 2px rgba(#000, 0.2);
    height: 32px;
    width: 100%;
    line-height: 32px;
    font-size: 12px;
    .user {
        cursor: pointer;
        white-space: nowrap;
        float: right;
        span {
            display: inline-block;
            padding: 0 4px;
            color: #ccc;
            &.btn {
                color: #333;
                &:hover {
                    color: $color;
                }
            }
        }
        .img {
            float: left;
            margin-right: 8px;
            height: 24px;
            width: 24px;
            background: no-repeat center / cover;
            margin-top: 4px;
            border-radius: 100%;
        }
        .obj {
            overflow: hidden;
        }
    }
}
</style>
