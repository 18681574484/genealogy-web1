<template>
    <div class="pages">
        <Navbar title="注册"/>
        <div class="main">
            <van-cell-group>
                <van-field v-model="family" label="姓氏" placeholder="请输入姓氏" clearable @blur="remoteMethod"/>
                <van-cell title="地区" :value="region" @click="showRegion = true" is-link></van-cell>
                <van-field :maxlength="11" v-model="form.mobile" type="tel" label="手机号" placeholder="请输入手机号" clearable/>
                <van-field :maxlength="20" v-model="form.password" type="password" label="密码" placeholder="请输入密码" clearable/>
                <van-field :maxlength="20" v-model="form.repassword" type="password" label="确认密码" placeholder="请再次输入密码" clearable/>
                <van-field :maxlength="6" v-model="form.sms" type="tel" center clearable label="验证码" placeholder="请输入短信验证码">
                    <van-button slot="button" size="small" @click="toSendSms">{{looptext}}</van-button>
                </van-field>
            </van-cell-group>
            <div class="actions">
                <div class="btn" @click="toSubmit">注册</div>
            </div>
        </div>
        <van-popup v-model="showRegion" position="bottom">
            <van-area :area-list="areaList" @confirm="checkRegion"/>
        </van-popup>
    </div>
</template>
<script>
import Navbar from "_c/navbar/navbar.vue";
import Area from "@/libs/area.js";
export default {
    name: "Page",
    components: {
        Navbar
    },
    data() {
        return {
            form: {
                mobile: "",
                sms: "",
                password: "",
                repassword: "",
                familyCode: ""
            },
            region: "选择",
            family: "",
            showRegion: false,
            areaList: Area,
            looptime: 60,
            looptext: "获取验证码",
            loop: null
        };
    },
    mounted: function() {},
    methods: {
        toSendSms() {
            if (!this.api.isMobile(this.form.mobile)) {
                this.$toast("请输入正确的手机号");
                return;
            }
            this.api
                .post(this.api.county.base + this.api.county.regcode, {
                    mobilePhone: this.form.mobile
                })
                .then(res => {
                    if (res.code == 200) {
                        this.loopData();
                    }
                });
        },
        loopData() {
            clearInterval(this.loop);
            if (this.looptime > 1) {
                this.looptime--;
                this.looptext = this.looptime + "'";
                this.loop = setTimeout(() => {
                    this.loopData();
                }, 1000);
            } else {
                this.looptime = 60;
                this.looptext = "获取验证码";
            }
        },
        remoteMethod(e) {
            if (!this.family) {
                return;
            }
            let toast = this.$toast.loading({
                mask: true,
                message: "姓氏校验中",
                duration: 0
            });
            this.api
                .get(this.api.user.base + this.api.user.firstname, {
                    value: this.family
                })
                .then(res => {
                    if (res.code == 200) {
                        let list = res.data;
                        if (list.length) {
                            list.forEach(v => {
                                if (v.value == this.family) {
                                    this.form.familyCode = v.id;
                                    toast.clear();
                                }
                            });
                        } else {
                            this.family = "";
                            this.$toast("未能检索到该姓氏");
                        }
                    } else {
                        this.family = "";
                        this.$toast(res.msg);
                    }
                });
        },
        checkRegion(e) {
            if (e.length) {
                this.form.regionCode = e[e.length - 1].code;
                this.region = e[e.length - 1].name;
                this.showRegion = false;
            }
        },
        toSubmit() {
            if (!this.api.isMobile(this.form.mobile)) {
                this.$toast("请输入正确的手机号");
                return;
            }
            if (!this.form.password) {
                this.$toast("请输入密码");
                return;
            }
            if (this.form.password != this.form.repassword) {
                this.$toast("两次密码不一致");
                return;
            }
            if (!this.family && !this.form.familyCode) {
                this.$toast("请输入姓氏");
                return;
            }
            this.api
                .post(this.api.county.base + this.api.county.reg, {
                    mobilePhone: this.form.mobile,
                    verificationCode: this.form.sms,
                    password: this.form.password,
                    familyCode: this.form.familyCode,
                    regionCode: this.form.regionCode
                })
                .then(res => {
                    if (res.code == 200) {
                        this.$toast("注册成功");
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