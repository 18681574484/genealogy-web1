<template>
    <div>
        <div class="h">找回密码</div>

        <Form :model="form" :label-width="80" class="b">
            <FormItem label="手机号">
                <Input v-model="form.mobile" placeholder="输入手机号" clearable :maxlength="11" @keyup.enter.native="toSubmit"/>
            </FormItem>
            <FormItem label="验证码">
                <Row>
                    <i-col span="11">
                        <Input v-model="form.sms" placeholder="输入验证码" clearable :maxlength="6" @keyup.enter.native="toSubmit"/>
                    </i-col>
                    <i-col span="2">&nbsp;</i-col>
                    <i-col span="11">
                        <Button type="primary" @click="toSendSms">{{looptext}}</Button>
                    </i-col>
                </Row>
            </FormItem>
            <FormItem label="密码">
                <Input v-model="form.password" type="password" placeholder="输入密码" clearable :maxlength="20" @keyup.enter.native="toSubmit"/>
            </FormItem>
            <FormItem label="确认密码">
                <Input v-model="form.repassword" type="password" placeholder="再次输入密码" clearable :maxlength="20" @keyup.enter.native="toSubmit"/>
            </FormItem>
            <FormItem>
                <Button type="primary" @click="toSubmit">提交</Button>
            </FormItem>
        </Form>
        <div class="f">
            <div class="r">
                <a @click="$emit('urlToLogin')">返回登录</a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "AuthReg",
    data() {
        return {
            form: {
                mobile: "",
                sms: "",
                password: "",
                repassword: "",
            },
            looptime: 60,
            looptext: "获取验证码",
            loop: null,
        };
    },
    mounted: function() {},
    methods: {
        toSendSms() {
            if (!this.api.isMobile(this.form.mobile)) {
                this.$Message.error("请输入正确的手机号");
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
        toSubmit() {
            if (!this.api.isMobile(this.form.mobile)) {
                this.$Message.error("请输入正确的手机号");
                return;
            }
            if (!this.form.password) {
                this.$Message.error("请输入密码");
                return;
            }
            if (this.form.password != this.form.repassword) {
                this.$Message.error("两次密码不一致");
                return;
            }
            this.api
                .post(this.api.county.base + this.api.county.foget, {
                    mobilePhone: this.form.mobile,
                    verificationCode: this.form.sms,
                    password: this.form.password,
                })
                .then(res => {
                    if (res.code == 200) {
                        this.$Message.success("修改成功，请重新登录");
                        this.$store.commit("updateUser", res.data);
                        this.$emit("urlToLogin", true);
                    } else {
                        this.$Message.error(res.msg);
                    }
                });
        }
    }
};
</script>