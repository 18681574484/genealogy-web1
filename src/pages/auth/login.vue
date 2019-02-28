<template>
    <div class="pages">
        <div class="navbar">
            <van-nav-bar title="登录" fixed>
                <div slot="left">
                    <small @click="$router.replace('/home')">首页</small>
                </div>
                <div slot="right">
                    <small @click="$router.push('/reg')">注册</small>
                </div>
            </van-nav-bar>
        </div>
        <div class="main">
            <van-cell-group>
                <van-field :maxlength="11" v-model="form.mobile" type="tel" label="手机号" placeholder="请输入手机号" clearable/>
                <van-field :maxlength="20" v-model="form.password" type="password" label="密码" placeholder="请输入密码" clearable/>
            </van-cell-group>
            <div class="actions">
                <div class="btn" @click="toSubmit">登录</div>
                <router-link to="reg" class="btn normal" @click="toSubmit">注册账号</router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Page",
    components: {},
    data() {
        return {
            form: {
                mobile: "",
                password: ""
            }
        };
    },
    mounted: function() {},
    methods: {
        toSubmit() {
            if (!this.api.isMobile(this.form.mobile)) {
                this.$toast("请输入正确的手机号");
                return;
            }
            if (!this.form.password) {
                this.$toast("请输入密码");
                return;
            }
            this.api
                .post(this.api.county.base + this.api.county.login, {
                    userName: this.form.mobile,
                    password: this.form.password
                })
                .then(res => {
                    if (res.code === 200) {
                        this.$store.commit("updateUser", res.data);
                        this.$router.push("/user");
                    } else {
                        this.$toast(res.msg);
                    }
                });
        }
    }
};
</script>