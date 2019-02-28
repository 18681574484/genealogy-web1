export default [{
    path: '/user/center',
    meta: {
        title: '个人中心',
        keepAlive: false
    },
    component: () => import('@/pages/user/user'),
}, {
    path: '/user/edit',
    meta: {
        title: '修改资料',
        keepAlive: false
    },
    component: () => import('@/pages/user/edit'),
}, {
    path: '/user/note',
    meta: {
        title: '说说',
        keepAlive: false
    },
    component: () => import('@/pages/user/note'),
}, {
    path: '/user/blog',
    meta: {
        title: '日志',
        keepAlive: false
    },
    component: () => import('@/pages/user/blog'),
}, {
    path: '/user/blogdetail',
    meta: {
        title: '日志详情',
        keepAlive: false
    },
    component: () => import('@/pages/user/detail'),
}, {
    path: '/user/image',
    meta: {
        title: '照片',
        keepAlive: false
    },
    component: () => import('@/pages/user/image'),
}, {
    path: '/user/video',
    meta: {
        title: '视频',
        keepAlive: false
    },
    component: () => import('@/pages/user/video'),
}]