<template>
    <div>
        <Form :label-width="80">
            <FormItem label="头像">
                <Upload class="upload" :action="api.admin.base + api.admin.upload_img" name="file" :show-upload-list="false" :on-success="handleSuccess" :format="['jpg','jpeg','png']">
                    <Button type="dashed">
                        <div class="img" :style="api.imgBG(user.picSrc)" v-if="user.picSrc"></div>
                        <Icon type="ios-camera" size="40" color="#ccc" v-else></Icon>
                    </Button>
                </Upload>
            </FormItem>
            <FormItem label="昵称">
                <Input placeholder="昵称" v-model="user.nickName" @keyup.enter.native="toSubmit"/>
            </FormItem>
            <FormItem label="真实姓名">
                <Input placeholder="行不更名 坐不改姓" v-model="user.realName" @keyup.enter.native="toSubmit"/>
            </FormItem>
            <!-- <FormItem label="英文名">
                <Input placeholder="英文名" v-model="user.englishName" @keyup.enter.native="toSubmit"/>
            </FormItem>
            <FormItem label="国籍">
                <Input placeholder="国籍" :maxlength="8" v-model="user.nation" @keyup.enter.native="toSubmit"/>
            </FormItem>
            <FormItem label="出生地">
                <Input placeholder="出生地" :maxlength="8" v-model="user.birthplace" @keyup.enter.native="toSubmit"/>
            </FormItem>
            <FormItem label="职业">
                <Input placeholder="职业" :maxlength="8" v-model="user.job" @keyup.enter.native="toSubmit"/>
            </FormItem>
            <FormItem label="现居">
                <Input placeholder="现居" :maxlength="8" v-model="user.presentAddress" @keyup.enter.native="toSubmit"/>
            </FormItem>
            <FormItem label="故居">
                <Input placeholder="故居" :maxlength="8" v-model="user.oldAddress" @keyup.enter.native="toSubmit"/>
            </FormItem>
            <FormItem label="现居古城">
                <Input placeholder="现居古城" :maxlength="8" v-model="user.alias" @keyup.enter.native="toSubmit"/>
            </FormItem>
            <FormItem label="历代">
                <Input placeholder="历代" :maxlength="4" v-model="user.lidai" @keyup.enter.native="toSubmit"/>
            </FormItem>
            <FormItem label="近世">
                <Input placeholder="近世" :maxlength="4" v-model="user.jinshi" @keyup.enter.native="toSubmit"/>
            </FormItem>
            <FormItem label="老派">
                <Input placeholder="老派" :maxlength="8" v-model="user.laopai" @keyup.enter.native="toSubmit"/>
            </FormItem>
            <FormItem label="新派">
                <Input placeholder="新派" :maxlength="8" v-model="user.xinpai" @keyup.enter.native="toSubmit"/>
            </FormItem>
            <FormItem label="统派">
                <Input placeholder="统派" :maxlength="8" v-model="user.tongpai" @keyup.enter.native="toSubmit"/>
            </FormItem> -->
            <FormItem>
                <Button type="primary" @click="toSubmit">保存</Button>
            </FormItem>
        </Form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            user: []
        };
    },
    mounted: function() {
        this.user = [];
        this.user = this.$store.state.user;
    },
    methods: {
        handleSuccess(res, file) {
            if (res.code == 200) {
                this.user.picSrc = res.data.file_path;
            }
        },
        toSubmit() {
            this.api
                .post(this.api.user.base + this.api.user.update, {
                    nickName: this.user.nickName,
                    realName: this.user.realName,
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
                        this.$Message.success("修改成功");
                        this.$store.commit("updateUser", res.data);
                        this.$emit("closedialog", true);
                    } else {
                        this.$Message.error(res.msg);
                    }
                });
        }
    }
};
</script>
<style lang="scss" scoped>
.upload {
    button {
        width: 122px;
        height: 122px;
        padding: 0;
        .img {
            width: 120px;
            height: 120px;
            padding: 0;
            background: no-repeat center / cover;
        }
    }
}
</style>