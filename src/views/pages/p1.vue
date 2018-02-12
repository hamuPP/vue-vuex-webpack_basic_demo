<style scoped>
    .demo1 {
        border: 1px solid mediumpurple;
        width: 200px;
        height: 300px;
    }
</style>

<template>
    <div class="index">

        <p>p1</p>
        <div class="demo1">
            <Msg :data="myData"></Msg>
        </div>
        <div>
            <div class="marquee-wrap" style="width: 100px;">
                <Marquee content="33333" class="two"  :showtwo="false"></Marquee>
            </div>
        </div>
    </div>
</template>
<script>
    import Msg from 'npm-study-hamupp';
    import Marquee from 'vue-marquee-ho';

//    import Css from 'vue-marquee-ho/dist/vue-marquee.min.css'

    export default {
        components: {
            Msg,
            Marquee
        },
        data(){
            return {
                myData: {
                    name: '天天',
                    country: 'china'
                }
            }
        }
    }
</script>
