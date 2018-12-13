<template>
    <div>
        <div class="h">
            <div class="tit">精彩说说</div>
        </div>
        <div class="b">
            <div class="item" v-for="v in 6" :key="v">
                <div class="img"></div>
                <div class="obj">
                    <div class="name">李四</div>
                    <div class="intro">描述</div>
                    <div class="tag">
                        <div class="mark">
                            <iconfont name="markfill"/>
                            <span>15</span>
                        </div>
                        <div class="appreciate">
                            <iconfont name="appreciatefill"/>
                            <span>15</span>
                        </div>
                        <div class="date">2018-10-10 16:12</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    components: {},
    data() {
        return {};
    },
    computed: {},
    mounted: function() {},
    methods: {}
};
</script>