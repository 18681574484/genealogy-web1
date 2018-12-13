<template>
    <div class="user">
        <Dropdown @on-click="handleClick">
            <div class="img" :style="api.imgBG(user.picSrc)" :title="user.nickName"></div>
            {{user.nickName}}
            <Icon type="ios-arrow-down"></Icon>
            <DropdownMenu slot="list">
                <DropdownItem name="/u">个人中心</DropdownItem>
                <DropdownItem name="backDefault">回到前台</DropdownItem>
                <DropdownItem name="/">返回首页</DropdownItem>
                <DropdownItem name="logout" divided>退出登录</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    </div>
</template>

<script>
export default {
    name: "User",
    props: {
        userAvator: {
            type: String,
            default: ""
        }
    },
    computed: {
        user() {
            return this.$store.state.user;
        },
        admin() {
            return this.$store.state.admin;
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
                            this.$router.replace("/");
                        }
                    });
                    break;
                case "resetPsw":
                    this.isreset = true;
                    break;
                case "backDefault":
                    console.log(this.admin.step);
                    switch (this.admin.step) {
                        case 1:
                            this.$store.commit("updateCountyId", this.admin.id);
                            this.$router.push("/c");
                            break;
                        case 2:
                            this.$store.commit(
                                "updateProvinceId",
                                this.admin.id
                            );
                            this.$router.push("/p");
                            break;
                        default:
                            this.$router.push("/");
                            break;
                    }
                    break;
                default:
                    this.$router.push(e);
                    break;
            }
        }
    }
};
</script>
<style lang="scss" scoped>
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
        }
    }
    .img {
        float: left;
        margin-right: 8px;
        height: 24px;
        width: 24px;
        background: no-repeat center / cover;
        margin-top: 20px;
        border-radius: 100%;
    }
    .obj {
        overflow: hidden;
    }
}
</style>
