<template>
    <div>
        <img src="@/assets/img/paygrid.png" style="margin-bottom:16px;width:100%;">
        <Form ref="form" :model="form" :label-width="80">
            <FormItem label="选择金额">
                <RadioGroup v-model="form.num" type="button">
                    <Radio label="1">1元</Radio>
                    <Radio label="5">5元</Radio>
                    <Radio label="15">15元</Radio>
                    <Radio label="50">50元</Radio>
                    <Radio label="100">100元</Radio>
                </RadioGroup>
            </FormItem>
            <FormItem label="捐赠金额">
                <i-input placeholder="填入其它金额" v-model="form.num" :maxlength="5" :number="true" @keyup.enter.native="toSubmit">
                    <div slot="suffix" style="line-height:32px;">元</div>
                </i-input>
            </FormItem>
            <FormItem label="支付平台">
                <RadioGroup v-model="form.paytype" type="button" @on-change="text=''">
                    <Radio :label="0">
                        <iconfont name="alipay"/>
                        <span>支付宝</span>
                    </Radio>
                    <Radio :label="1">
                        <iconfont name="weixinzhifu"/>
                        <span>微信支付</span>
                    </Radio>
                </RadioGroup>
            </FormItem>
            <FormItem label="微信扫一扫" v-if="text">
                <Qrcode :text="text"/>
            </FormItem>
            <FormItem label="是否匿名">
                <i-switch v-model="form.anonymous">
                    <span slot="open">是</span>
                    <span slot="close">否</span>
                </i-switch>
            </FormItem>
            <FormItem>
                <Button type="primary" @click="toSubmit">支付</Button>
            </FormItem>
        </Form>
    </div>
</template>
<script>
import Qrcode from "_c/qrcode";
import { async } from "q";
export default {
    components: {
        Qrcode
    },
    data() {
        return {
            form: {
                num: "",
                anonymous: false,
                paytype: 0
            },
            text: "",
            order_no: "",
            loop: null,
            count: 0
        };
    },
    mounted: function() {},
    methods: {
        loopData() {
            this.api
                .post(this.api.county.base + this.api.county.pay.wxorder, {
                    outTradeNo: this.order_no
                })
                .then(res => {
                    if (res.code == 200) {
                        this.$Modal.success({
                            title: "提示",
                            content: "支付成功"
                        });
                        clearInterval(this.loop);
                        this.count = 0;
                        this.loop = null;
                        this.$emit('reloadApi')
                    } else {
                        this.count++;
                        if (this.count > 50) {
                            clearInterval(this.loop);
                        }
                    }
                });
        },
        toSubmit() {
            this.text = "";
            if (!this.form.num) {
                this.$Message.error("请选择支付金额");
                return;
            }
            if (!this.api.isNumber(this.form.num * 100)) {
                this.$Message.error("请输入正确的金额");
                return;
            }
            clearInterval(this.loop);
            if (this.form.paytype) {
                this.api
                    .post(this.api.county.base + this.api.county.pay.wx, {
                        siteId: this.$store.state.county.id,
                        payAmount: this.form.num,
                        anonymous: this.form.anonymous ? 1 : 0,
                        url: location.href + "?back=pay&"
                    })
                    .then(res => {
                        if (res.code == 200) {
                            this.text = res.data.code_url;
                            this.order_no = res.data.out_trade_no;
                            this.loop = setInterval(() => {
                                this.loopData();
                            }, 3000);
                        }
                    });
            } else {
                this.api
                    .post(this.api.county.base + this.api.county.pay.ali, {
                        siteId: this.$store.state.county.id,
                        payAmount: this.form.num,
                        anonymous: this.form.anonymous ? 1 : 0,
                        url: location.href + "?back=pay&"
                    })
                    .then(res => {
                        if (res.code == 200) {
                            sessionStorage.callback = 1;
                            const div = document.createElement("div");
                            div.innerHTML = res.data;
                            document.body.appendChild(div);
                            document.forms.punchout_form.submit();
                        }
                    });
            }
        }
    }
};
</script>

<style lang="scss" >
@import "@/assets/css/var.scss";
.g-pay {
    .ivu-modal-content {
        background: #fff url(../../../assets/img/paytop.jpg) no-repeat top center / 100% auto;
    }

    .ivu-modal-body {
        padding-top: 108px;
    }
}
</style>