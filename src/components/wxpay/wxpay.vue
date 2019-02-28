<template>
    <div class="dialog">
        <div class="hd">功德捐助</div>
        <div class="bd">
            <div class="items">
                <div class="item" :class="v == form.num ? 'on' : ''" v-for="(v,i) in types" :key="i" @click="form.num = v">
                    <div class="label">
                        <span>{{v}}</span>
                        <small>元</small>
                    </div>
                </div>
            </div>
            <van-cell-group>
                <van-field :maxlength="5" v-model="form.num" type="number" label="捐赠金额" input-align="right" placeholder="填入其它金额" clearable/>
                <van-cell title="是否匿名">
                    <slot>
                        <van-switch v-model="form.anonymous" size="24px"/>
                    </slot>
                </van-cell>
            </van-cell-group>
        </div>
        <div class="actions">
            <div class="btn" @click="toSubmit">支付</div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        type: Number
    },
    data() {
        return {
            form: {
                num: 5,
                anonymous: false
            },
            types: [1, 5, 20, 50, 100, 200]
        };
    },
    computed: {},
    mounted: function() {},
    methods: {
        toSubmit() {
            this.text = "";
            if (!this.form.num) {
                this.$toast("请选择支付金额");
                return;
            }
            if (!this.api.isNumber(this.form.num * 100)) {
                this.$toast("请输入正确的金额");
                return;
            }
            let siteid = 1;
            switch (this.type) {
                case 1:
                    siteid = this.$store.state.county_id;
                    break;
                case 2:
                    siteid = this.$store.state.province_id;
                    break;
            }
            this.api
                .post(this.api.county.base + this.api.county.pay.wechat, {
                    siteId: siteid,
                    payAmount: this.form.num,
                    anonymous: this.form.anonymous ? 1 : 0,
                    url: location.href,
                    type: this.type
                })
                .then(res => {
                    if (res.code == 200) {
                        this.api.onBridgeReady(res.data);
                    } else if (res.code == 201) {
                        this.$dialog
                            .confirm({
                                title: "提示",
                                message: res.msg,
                                confirmButtonText: "去登录"
                            })
                            .then(() => {
                                this.$router.push("/login");
                            })
                            .catch(() => {});
                    } else {
                        this.$toast(res.msg);
                    }
                });
        }
    }
};
</script>
<style lang="less">
.dialog {
    color: #333;
    .hd {
        line-height: 1rem;
        height: 1rem;
        text-align: center;
        font-size: 0.32rem;
        font-weight: 500;
        border-bottom: 1px solid #eee;
    }
    .items {
        padding: 0.2rem 0.3rem;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .item {
            width: 25%;
            text-align: center;
            padding: 0.2rem;
            .label {
                line-height: 0.64rem;
                border: 1px solid #eee;
                border-radius: 0.1rem;
            }
            &.on {
                .label {
                    border-color: #d2211b;
                    background: #d2211b;
                    color: #fff;
                }
            }
        }
    }
}
</style>
