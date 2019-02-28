<template>
    <div class="searchDiv">
        <img class="searImg" src="@/assets/images/logo@2x.png" alt="">

         <div class="inputDiv">
             <img src="@/assets/images/search.png" alt="">
             <input type="text" placeholder="炎黄统谱网"  >
         </div>
    </div>
</template>

<script>
export default {
    props: {

    },
    data() {
        return {
            value:'',
        };
    },
    computed: {

    },
    created() {

    },
    mounted() {

    },
    watch: {

    },
    methods: {
        onSearch() {

        },
        onCancel() {

        }
    },
    components: {

    },
};
</script>

<style scoped lang="less">
   .searchDiv {
       width: 100%;
       height: 0.6rem;
       position: fixed;
       top: 0;
    //    padding-left: 0.55rem;
       box-sizing:border-box;
        overflow: hidden;
        .searImg {
            transform: scale(0.5);
            position: absolute;
            left:  -0.2rem;
            top: -0.2rem;

        }
        .inputDiv {
            position: absolute;
            // padding: 0 0.22rem;
            box-sizing:border-box;
            right: 0.2rem;
            top: 0;
            img {
                position: absolute;
                top: 0.15rem;
                left:  -4.235rem;
                width: 0.33rem;
                height: 0.33rem;
            }
            input {
                width: 6.32rem;
                height: 0.6rem;
                border: none;
                border-radius: 0.2rem;
                background-color:rgba(0, 52, 52, 0.1);
                text-align: center;
                color: white;
                font-size: 0.24rem;
                position: absolute;
                right: -0.15rem;
            }
        }
        
        input::-webkit-input-placeholder {
          /* placeholder颜色  */
          color: white;

      }
        
   }
</style>
