<style scoped lang="less">
    @import 'styles/common.less';
</style>
<template>
    <div>
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        data () {
            return {}
        },
        mounted () {
            console.log('app.vue');
        },
        beforeDestroy () {

        },
        methods: {

        }
    }
</script>
