<style scoped>
    .example-box{
        border:1px solid red;
        height: 600px;
        width: 300px;
    }
</style>

<template>
    <div class="index">
        <h2>t-vue-tree 文档</h2>
        <h3>例子：</h3>
        <div class="example-box" ref="containerNode">
            <!--<Ttree ref="demotree"-->
                   <!--:data="treeData"-->
            <!--&gt;</Ttree>-->

            <T_tree ref="demotree"
                  :data="treeData"
                  @onToggle="onToggleHandle"
                  @onCheck="onCheckHandle"
                  @onSelect="onSelectHandle"
            ></T_tree>

            <button @click="getCheckedNodes('checked')">获取checked节点</button>
            <button @click="getCheckedNodes('indeterminated')">获取 半勾选的节点</button>
        </div>
    </div>
</template>
<script>
    import T_tree from 't-vue-tree';

    export default {
        components: {
            T_tree
        },
        data(){
            return {
                treeData:[
                    {
                        title: 'parent 1',
                        expanded: true,
                        checkbox:true,//是否有勾选框,默认false
                        checked:false,//是否勾选该节点，默认false
                        selected:false,//是否选中该节点，默认false
                        custormKey:'ccdf',
                        children: [
                            {
                                title: 'parent 1-1',
                                expanded: true,
                                checkbox:true,//是否有勾选框,默认false
                                checked:false,//是否勾选该节点，默认false
                                custormKey:'ccdf',
                                children: [
                                    {
                                        title: 'leaf 1-1-1',
                                        checkbox:true,//是否有勾选框,默认false
                                        checked:false,//是否勾选该节点，默认false
                                        custormKey:'ccdf',
                                    },
                                    {
                                        title: 'leaf 1-1-2',
                                        checkbox:true,//是否有勾选框,默认false
                                        checked:false,//是否勾选该节点，默认false
                                        custormKey:'ccdf',
                                    }
                                ]
                            },
                            {
                                title: 'parent 1-2',
                                expanded: true,
                                checkbox:true,//是否有勾选框,默认false
                                checked:false,//是否勾选该节点，默认false
                                custormKey:'ccdf',
                                children: [
                                    {
                                        title: 'leaf 1-2-1',
                                        checkbox:true,//是否有勾选框,默认false
                                        checked:false,//是否勾选该节点，默认false
                                        custormKey:'ccdf',
                                        children:[
                                            {
                                                title: 'leaf 1-2-1-1',
                                                checkbox:true,//是否有勾选框,默认false
                                                checked:false,//是否勾选该节点，默认false
                                                custormKey:'mmccf',
                                            },
                                            {
                                                title: 'leaf 1-2-1-2',
                                                checkbox:true,//是否有勾选框,默认false
                                                checked:false,//是否勾选该节点，默认false
                                                custormKey:'mmccf',
                                            },
                                            {
                                                title: 'leaf 1-2-1-3',
                                                checkbox:true,//是否有勾选框,默认false
                                                checked:false,//是否勾选该节点，默认false
                                                custormKey:'mmccf',
                                            }
                                        ]
                                    },
                                    {
                                        title: 'leaf 1-2-1',
                                        checkbox:true,//是否有勾选框,默认false
                                        checked:false,//是否勾选该节点，默认false
                                        custormKey:'ccdf',
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        title: 'parent 2',
                        expanded: false,
                        checkbox:true,//是否有勾选框,默认false
                        checked:true,//是否勾选该节点，默认false
                        children: [
                            {
                                title: 'parent 2-1',
                                checkbox:true,//是否有勾选框,默认false
                                checked:true,//是否勾选该节点，默认false
                                expanded: true,//是否展开该节点
                                selected:true,//是否选中该节点，默认false
                                expandOnClickNode:false,//点击节点时也展开节点，需要expand属性同时为真，默认false
                                children: [
                                    {
                                        title: 'leaf 2-1-1',
                                        checkbox:true,//是否有勾选框,默认false
                                        checked:true,//是否勾选该节点，默认false
                                    },
                                    {
                                        title: 'leaf 2-1-2',
                                        checkbox:true,//是否有勾选框,默认false
                                        checked:true,//是否勾选该节点，默认false
                                    }
                                ]
                            },
                            {
                                title: 'parent 2-2',
                                expanded: true,
                                checkbox:true,//是否有勾选框,默认false
                                checked:true,//是否勾选该节点，默认false
                                children: [
                                    {
                                        title: 'leaf 2-2-1',
                                        checkbox:true,//是否有勾选框,默认false
                                        checked:true,//是否勾选该节点，默认false
                                    },
                                    {
                                        title: 'leaf 2-2-1',
                                        checkbox:true,//是否有勾选框,默认false
                                        checked:true,//是否勾选该节点，默认false
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        },
        methods:{
            onToggleHandle(val){
                console.log('onToggleHandle',val);
            },
            onCheckHandle(val){
                console.log('onCheckHandle',val);
            },
            onSelectHandle(val){
                console.log('onSelectHandle',val);
            },
            /**
             *
             * @param {String} type checked|indeterminated 必須、それに、この二つに限り
             */
            getCheckedNodes(type){
                let that = this;
                if(type === 'checked'|| type ==='indeterminated'){
                    let result =  that.$refs.demotree.getCheckedNodes(type);
                    console.log(result);
                }else{
                    throw "传参值仅为'checked'或者'indeterminated'"
                }
            }
        }
    }
</script>
