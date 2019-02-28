export default [{
    path: '/p/home',
    meta: {
        title: '首页',
        keepAlive: false
    },
    component: () => import('@/pages/province/home'),
}, {
    path: '/p/search',
    meta: {
        title: '搜索',
        keepAlive: false
    },
    component: () => import('@/pages/province/search'),
}, {
    path: '/p/qrcode',
    meta: {
        title: '二维码',
        keepAlive: false
    },
    component: () => import('@/pages/province/qrcode'),
}, {
    path: '/p/records',
    meta: {
        title: '家族动态',
        keepAlive: false
    },
    component: () => import('@/pages/province/records'),
}, {
    path: '/p/notice',
    meta: {
        title: '家族公告',
        keepAlive: false
    },
    component: () => import('@/pages/province/notice'),
}, {
    path: '/p/charity',
    meta: {
        title: '慈善公益',
        keepAlive: false
    },
    component: () => import('@/pages/province/charity'),
}, {
    path: '/p/culture',
    meta: {
        title: '家族文化',
        keepAlive: false
    },
    component: () => import('@/pages/province/culture'),
}, {
    path: '/p/industry',
    meta: {
        title: '家族产业',
        keepAlive: false
    },
    component: () => import('@/pages/province/industry'),
}, {
    path: '/p/ancestors',
    meta: {
        title: '祖先分支',
        keepAlive: false
    },
    component: () => import('@/pages/province/ancestors'),
}, {
    path: '/p/genealogy',
    meta: {
        title: '数字家谱',
        keepAlive: false
    },
    component: () => import('@/pages/province/genealogy'),
}, {
    path: '/p/fellowship',
    meta: {
        title: '联谊堂',
        keepAlive: false
    },
    component: () => import('@/pages/province/fellowship'),
}, {
    path: '/p/famous',
    meta: {
        title: '家族名人',
        keepAlive: false
    },
    component: () => import('@/pages/province/famous'),
}, {
    path: '/p/team',
    meta: {
        title: '组织架构',
        keepAlive: false
    },
    component: () => import('@/pages/province/team'),
}, {
    path: '/p/detail',
    meta: {
        title: '详情',
        keepAlive: false
    },
    component: () => import('@/pages/province/detail'),
}, {
    path: '/p/comments',
    meta: {
        title: '评论',
        keepAlive: false
    },
    component: () => import('@/pages/province/comments'),
}, {
    path: '/p/videos',
    meta: {
        title: '视频',
        keepAlive: false
    },
    component: () => import('@/pages/province/video'),
}, {
    path: '/p/video_fm',
    meta: {
        title: '家族视频',
        keepAlive: false
    },
    component: () => import('@/pages/province/video_fm'),
}, {
    path: '/p/help',
    meta: {
        title: '慈善帮扶',
        keepAlive: false
    },
    component: () => import('@/pages/province/help'),
}, {
    path: '/p/chat',
    meta: {
        title: '聊天',
        keepAlive: false
    },
    component: () => import('@/pages/province/chat'),
}]