export default [{
    path: 'home',
    name: 'n_home',
    meta: {
        title: "首页"
    },
    component: () => import('@/pages/nation/home')
}, {
    path: 'detail',
    name: 'n_detail',
    meta: {
        title: "详情"
    },
    component: () => import('@/pages/nation/detail')
}]