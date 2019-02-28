<template>
    <div class="pages">
        <Navbar title="说点什么吧"></Navbar>
        <div class="main">
            <van-cell-group>
                <van-field :maxlength="140" type="textarea" v-model="formData.content" placeholder="输入……" rows="6" autosize/>
            </van-cell-group>
            <div class="actions">
                <div class="btn" @click="toSubmit">发布</div>
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
            formData: {
                title: "",
                newsFaceUrl: "",
                content: ""
            }
        };
    },
    computed: {},
    mounted: function() {},
    methods: {
        toSubmit() {
            if (!this.formData.content) {
                this.$toast("未输入正文");
                return;
            }
            if (!this.formData.content) {
                this.$Message.error("未输入内容");
                return;
            }
            this.api
                .post(this.api.user.base + this.api.user.shuoshuo_add, {
                    status: 1,
                    content: this.formData.content || ""
                })
                .then(res => {
                    if (res.code === 200) {
                        this.$router.go(-1);
                        this.$toast("添加成功");
                    } else {
                        this.$toast(res.msg);
                        return;
                    }
                });
        }
    }
};
</script>
