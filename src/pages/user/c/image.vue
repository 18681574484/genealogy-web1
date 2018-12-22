<template>
    <div class="suc">
        <div class="grid">
            <div class="h">
                <router-link class="more" to="image">全部</router-link>
                <div class="tit">图片</div>
            </div>
            <div class="b">
                <Row :gutter="16">
                    <i-col :xs="12" :sm="6" :md="6" class="item" v-for="v in list" :key="v.id">
                        <div class="img" @click="curr=v.picUrl;isShow=true" :style="api.imgBG(v.picUrl)">
                            <img src="http://iph.href.lu/40x30">
                        </div>
                    </i-col>
                </Row>
            </div>
        </div>
        <Modal v-model="isShow" title="查看图片" width="640px" :footer-hide="true" style="text-align:center;">
            <img :src="api.imgurl(curr)" style="max-width:100%;">
        </Modal>
    </div>
</template>
<script>
export default {
    components: {},
    data() {
        return {
            isShow: false,
            list: [],
            total: 0,
            curr: ""
        };
    },
    computed: {},
    mounted: function() {
        this.getList();
    },
    methods: {
        getList() {
            this.api
                .post(this.api.user.base + this.api.user.picture_list, {
                    pageNo: this.page
                })
                .then(res => {
                    if (res.code == 200) {
                        this.list = res.data.records;
                        this.total = res.data.total;
                    } else {
                    }
                });
        },
        toShow(e) {
            this.curr = e;
            this.visible = true;
        }
    }
};
</script>
<style lang="scss" scoped>
.suc {
    margin-top: 16px;
    .b {
        padding: 16px;
        .item {
            margin: 8px 0;
            position: relative;
            .img {
                position: relative;
                width: 100%;
                background: whitesmoke no-repeat center / cover;
                img {
                    width: 100%;
                    visibility: hidden;
                    display: block;
                }
            }
        }
    }
}
</style>
