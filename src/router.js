import P1 from './views/pages/p1.vue'
import P2 from './views/pages/p2.vue'
import T_TreeDemo from './views/pages/tTreeDemo.vue'

const routers = [
    {path: "/", redirect: '/p1'},
    {path: "/p1", component: P1},
    {path: "/p2", component: P2},
    {path: "/t-tree-demo", component: T_TreeDemo},
];

export default routers;