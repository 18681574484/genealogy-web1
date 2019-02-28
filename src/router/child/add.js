export default [{
    path: '/add/blog',
    meta: {
        title: '发日志',
        keepAlive: false
    },
    component: () => import('@/pages/creat/blog'),
}, {
    path: '/add/note',
    meta: {
        title: '写说说',
        keepAlive: false
    },
    component: () => import('@/pages/creat/note'),
}, {
    path: '/add/video',
    meta: {
        title: '发视频',
        keepAlive: false
    },
    component: () => import('@/pages/creat/video'),
}]