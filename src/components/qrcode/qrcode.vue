<template>
    <div id="qrcode"></div>
</template>
<script>
import QRCode from "qrcodejs2";
import "wangeditor/release/wangEditor.min.css";
import { oneOf } from "@/libs/tools";
export default {
    name: "Editor",
    props: {
        text: {
            type: String,
            default: ""
        }
    },
    mounted() {
        this.$nextTick(function() {
            this.qrcode();
        });
    },
    methods: {
        qrcode() {
            let qrcode = new QRCode("qrcode", {
                width: 300,
                height: 300,
                text: this.text
                // render: 'canvas' // 设置渲染方式（有两种方式 table和canvas，默认是canvas）
                // background: '#f0f'
                // foreground: '#ff0'
            });
            console.log(qrcode);
        }
    }
};
</script>