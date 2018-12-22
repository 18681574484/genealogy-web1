<template>
    <div class="usergrid">
        <div class="bg"></div>
        <div class="card">
            <div class="img" :style="api.imgBG(user.picSrc)" @click="isedit = true"></div>
            <div class="obj">
                <div class="name" @click="isedit = true">
                    <span>{{user.nickName}}</span>
                    <iconfont name="writefill"/>
                </div>
                <div class="info" v-if="false">
                    <div class="item">英文名：{{user.englishName}}</div>
                    <div class="item">国籍：{{user.nation}}</div>
                    <div class="item">出生地：{{user.birthplace}}</div>
                    <div class="item">职业：{{user.job}}</div>
                </div>
                <div class="tag" v-if="false">
                    <div class="item">
                        <iconfont name="medalfill"/>
                        <span>诚信值：100</span>
                    </div>
                    <div class="item">
                        <iconfont name="attentionfavorfill"/>
                        <span>关注：0</span>
                    </div>
                    <div class="item">
                        <iconfont name="group_fill"/>
                        <span>粉丝：0</span>
                    </div>
                </div>
                <div class="flag" v-if="false">
                    <div class="item">现居：{{user.presentAddress}}</div>
                    <div class="item">故居：{{user.oldAddress}}</div>
                    <div class="item">现居古城：{{user.alias}}</div>
                </div>
                <div class="flag" v-if="false">
                    <div class="item">历代：{{user.lidai}}</div>
                    <div class="item">近世：{{user.jinshi}}</div>
                    <div class="item">老派：{{user.laopai}}</div>
                    <div class="item">新派：{{user.xinpai}}</div>
                    <div class="item">统派：{{user.tongpai}}</div>
                </div>
                <ButtonGroup style="margin-top:16px;" shape="circle" size="small">
                    <Button to="blog" class="item">
                        <iconfont name="formfill"/>
                        <span>日志</span>
                    </Button>
                    <Button to="image" class="item">
                        <iconfont name="picfill"/>
                        <span>图册</span>
                    </Button>
                    <Button to="video" class="item">
                        <iconfont name="video_fill_light"/>
                        <span>视频</span>
                    </Button>
                    <Button to="note" class="item">
                        <iconfont name="communityfill"/>
                        <span>说说</span>
                    </Button>
                </ButtonGroup>
            </div>
        </div>
        <Modal title="修改资料" v-model="isedit" width="640px" :footer-hide="true">
            <editinfo @closedialog="closedialog"/>
        </Modal>
    </div>
</template>
<script>
import editinfo from "./editinfo.vue";
export default {
    components: {
        editinfo
    },
    data() {
        return {
            isedit: false
        };
    },
    computed: {
        user() {
            return this.$store.state.user;
        }
    },
    mounted: function() {},
    methods: {
        closedialog() {
            this.isedit = false;
        }
    }
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/var.scss";
.usergrid {
    background: #fff;
    margin-bottom: 16px;
    .bg {
        height: 120px;
        background: url(../img/background.png) no-repeat center bottom;
    }
    .card {
        margin-top: -48px;
        padding-bottom: 16px;
        text-align: center;

        .img {
            height: 96px;
            width: 96px;
            background: whitesmoke no-repeat center / cover;
            border-radius: 50%;
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
            margin-left: auto;
            margin-right: auto;
        }

        .name {
            line-height: 40px;
            font-size: 16px;

            span {
                margin-right: 16px;
                display: inline-block;
            }
        }

        .info {
            .item {
                text-align: center;
                display: inline-block;
                padding: 0 16px;
            }
        }

        .tag {
            margin: 16px auto;

            .item {
                display: inline-block;
                margin: 0 8px;
                border: 1px solid #ddd;
                background: whitesmoke;
                width: 120px;
                border-radius: 4px;
                cursor: pointer;
                font-size: 12px;

                &:hover {
                    background: $color;
                    color: #fff;
                    border-color: $color;
                }
            }
        }

        .flag {
            width: 800px;
            text-align: left;
            line-height: 32px;
            margin: 0 auto;
            overflow: hidden;

            .item {
                width: 20%;
                float: left;
            }
        }
    }
}
</style>
