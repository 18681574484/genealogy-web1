<template>
    <div class="page-user" style="padding-top:32px;">
        <Topbar/>
        <NavBar/>
        <Usergrid/>
        <router-view/>
        <FootBar/>
    </div>
</template>
<script>
import { Topbar, Usergrid, NavBar, FootBar } from "./c";
export default {
    components: {
        Topbar,
        Usergrid,
        NavBar,
        FootBar
    },
    data() {
        return {};
    },
    computed: {},
    mounted: function() {},
    methods: {},
    beforeCreate() {}
};
</script>

<style lang="scss">
@import "@/assets/css/var.scss";
.page-user {
    background: whitesmoke;
    .suc {
        padding: 16px 0;

        & + .suc {
            padding-top: 0;
        }

        .grid {
            background: #fff;
        }

        .h {
            font-size: 16px;
            line-height: 48px;
            padding: 0 16px;

            .tit {
                border-bottom: 1px solid #eee;
            }

            .more {
                float: right;
                font-size: 12px;
                cursor: pointer;
                display: block;
                &.link {
                    color: $color;
                }
            }
        }

        .b {
            display: flex;
            padding: 16px;
            justify-content: space-between;

            .item {
                width: 19%;

                .img {
                    height: 120px;
                    width: 100%;
                    background: whitesmoke no-repeat center / cover;
                }

                .obj {
                    white-space: nowrap;
                    line-height: 24px;

                    .total {
                        float: right;
                        color: #999;
                        font-size: 12px;
                    }

                    .tit {
                        overflow: hidden;
                    }
                }
            }
        }
    }
}
</style>
