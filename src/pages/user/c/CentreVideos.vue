<template>
    <div class="suc">
        <div class="grid">
            <div class="h">
                <div class="more">全部</div>
                <div class="tit">视频</div>
            </div>
            <div class="b">
                <div class="item" v-for="v in 5" :key="v">
                    <div class="img"></div>
                    <div class="obj">
                        <div class="total">
                            <iconfont name="recordfill"/>
                            <span>150</span>
                        </div>
                        <div class="tit">张氏祖堂</div>
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