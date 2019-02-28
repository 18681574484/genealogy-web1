export default [{
    path: '/c/home',
    meta: {
        title: '首页',
        keepAlive: false
    },
    component: () => import('@/pages/county/home'),
}, {
    path: '/c/search',
    meta: {
        title: '搜索',
        keepAlive: false
    },
    component: () => import('@/pages/county/search'),
}, {
    path: '/c/qrcode',
    meta: {
        title: '二维码',
        keepAlive: false
    },
    component: () => import('@/pages/county/qrcode'),
}, {
    path: '/c/records',
    meta: {
        title: '家族动态',
        keepAlive: false
    },
    component: () => import('@/pages/county/records'),
}, {
    path: '/c/notice',
    meta: {
        title: '家族公告',
        keepAlive: false
    },
    component: () => import('@/pages/county/notice'),
}, {
    path: '/c/charity',
    meta: {
        title: '慈善公益',
        keepAlive: false
    },
    component: () => import('@/pages/county/charity'),
}, {
    path: '/c/culture',
    meta: {
        title: '家族文化',
        keepAlive: false
    },
    component: () => import('@/pages/county/culture'),
}, {
    path: '/c/industry',
    meta: {
        title: '家族产业',
        keepAlive: false
    },
    component: () => import('@/pages/county/industry'),
}, {
    path: '/c/ancestors',
    meta: {
        title: '祖先分支',
        keepAlive: false
    },
    component: () => import('@/pages/county/ancestors'),
}, {
    path: '/c/genealogy',
    meta: {
        title: '数字家谱',
        keepAlive: false
    },
    component: () => import('@/pages/county/genealogy'),
}, {
    path: '/c/fellowship',
    meta: {
        title: '联谊堂',
        keepAlive: false
    },
    component: () => import('@/pages/county/fellowship'),
}, {
    path: '/c/famous',
    meta: {
        title: '家族名人',
        keepAlive: false
    },
    component: () => import('@/pages/county/famous'),
}, {
    path: '/c/team',
    meta: {
        title: '组织架构',
        keepAlive: false
    },
    component: () => import('@/pages/county/team'),
}, {
    path: '/c/detail',
    meta: {
        title: '详情',
        keepAlive: false
    },
    component: () => import('@/pages/county/detail'),
}, {
    path: '/c/comments',
    meta: {
        title: '评论',
        keepAlive: false
    },
    component: () => import('@/pages/county/comments'),
}, {
    path: '/c/videos',
    meta: {
        title: '视频',
        keepAlive: false
    },
    component: () => import('@/pages/county/video'),
}, {
    path: '/c/video_fm',
    meta: {
        title: '家族视频',
        keepAlive: false
    },
    component: () => import('@/pages/county/video_fm'),
}, {
    path: '/c/help',
    meta: {
        title: '慈善帮扶',
        keepAlive: false
    },
    component: () => import('@/pages/county/help'),
}, {
    path: '/c/chat',
    meta: {
        title: '聊天',
        keepAlive: false
    },
    component: () => import('@/pages/county/chat'),
}]