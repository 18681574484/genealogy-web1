export default [{
    path: 'user',
    name: 'u_center',
    meta: {
        title: "个人中心",
        role: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    },
    component: () => import('@/pages/user/user')
}, {
    path: 'family',
    name: 'u_family',
    meta: {
        title: "我的家谱",
        role: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    },
    component: () => import('@/pages/user/family')
}, {
    path: 'donate',
    name: 'u_donate',
    meta: {
        title: "捐赠记录",
        role: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    },
    component: () => import('@/pages/user/donate')
}, {
    path: 'blog',
    name: 'u_note',
    meta: {
        title: "我的日志",
        role: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    },
    component: () => import('@/pages/user/blog')
}, {
    path: 'detail',
    name: 'u_detail',
    meta: {
        title: "日志详情",
        role: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    },
    component: () => import('@/pages/user/detail')
}, {
    path: 'note',
    name: 'u_msg',
    meta: {
        title: "我的说说",
        role: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    },
    component: () => import('@/pages/user/note')
}, {
    path: 'video',
    name: 'u_video',
    meta: {
        title: "我的视频",
        role: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    },
    component: () => import('@/pages/user/video')
}, {
    path: 'image',
    name: 'u_image',
    meta: {
        title: "我的图册",
        role: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    },
    component: () => import('@/pages/user/image')
}]