export default [{
    path: 'home',
    name: 'p_home',
    meta: {
        title: "首页"
    },
    component: () => import('@/pages/province/home')
}, {
    path: 'culture',
    name: 'p_culture',
    meta: {
        title: "家族文化"
    },
    component: () => import('@/pages/province/culture')
}, {
    path: 'genealogy',
    name: 'p_genealogy',
    meta: {
        title: "数字家谱"
    },
    component: () => import('@/pages/province/genealogy')
}, {
    path: 'famous',
    name: 'p_famous',
    meta: {
        title: "祖先名人"
    },
    component: () => import('@/pages/province/famous')
}, {
    path: 'frame',
    name: 'p_frame',
    meta: {
        title: "组织架构"
    },
    component: () => import('@/pages/province/frame')
}, {
    path: 'ancestors',
    name: 'p_ancestors',
    meta: {
        title: "各地分支"
    },
    component: () => import('@/pages/province/ancestors')
}, {
    path: 'record',
    name: 'p_record',
    meta: {
        title: "记录家族"
    },
    component: () => import('@/pages/province/record')
}, {
    path: 'charity',
    name: 'p_charity',
    meta: {
        title: "慈善公益"
    },
    component: () => import('@/pages/province/charity')
}, {
    path: 'detail',
    name: 'p_detail',
    meta: {
        title: "详情"
    },
    component: () => import('@/pages/province/detail')
}]