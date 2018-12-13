<template>
    <div class="famous">
        <div class="inner">
            <div class="h">
                <div class="cn">组织架构</div>
                <Divider class="en">Famous</Divider>
            </div>
            <Tabs class="b" value="0" :animated="false" @on-click="handleClick">
                <TabPane :label="v" :name="i+''" v-for="(v,i) in keys" :key="i"></TabPane>
            </Tabs>
            <div class="card">
                <FamSlider :list="currlist" v-if="currlist.length"/>
            </div>
        </div>
    </div>
</template>
<script>
import FamSlider from "./slider";
export default {
    components: {
        FamSlider
    },
    data() {
        return {
            index_architecture: {},
            keys: [],
            list: [],
            currlist: []
        };
    },
    computed: {
        apiList() {
            return this.$store.state.county.apiList;
        }
    },
    mounted: function() {
        this.get_index_architecture();
    },
    methods: {
        get_index_architecture() {
            this.api
                .get(
                    this.api.county.base +
                        this.apiList.index_architecture.apiUrl,
                    {}
                )
                .then(res => {
                    if (res.code == 200) {
                        let list = res.data;
                        this.index_architecture = list;
                        this.keys = Object.keys(list);
                        this.list = Object.values(list);
                        this.currlist = this.list[0];
                    }
                });
        },
        handleClick(e) {
            e = parseInt(e);
            this.currlist = this.list[e];
        },
        formatname(e) {
            return JSON.parse(e);
        }
    }
};
</script>
<style lang="scss">
@import "@/assets/css/var.scss";
.famous {
    .nav-text {
        text-align: center;
        float: none;
    }
    .ivu-tabs-nav .ivu-tabs-tab {
        line-height: 32px;
    }
    .ivu-tabs-ink-bar {
        display: none;
    }
    padding: 32px 0;
    min-height: 700px;
    .h {
        text-align: center;
        padding: 32px 0;
        .cn {
            font-size: 24px;
        }
        .en {
            font-weight: 300;
        }
    }
    .card {
        width: 100%;
        height: 450px;
        padding: 32px 0;
    }
}
</style>
