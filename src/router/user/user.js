export default [{
    path: 'user',
    name: 'u_center',
    meta: {
        title: "个人中心",
        role: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    },
    component: () => import('@/pages/user/User')
}, {
    path: 'family',
    name: 'u_family',
    meta: {
        title: "我的家谱",
        role: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    },
    component: () => import('@/pages/user/Family')
}, {
    path: 'donate',
    name: 'u_donate',
    meta: {
        title: "捐赠记录",
        role: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    },
    component: () => import('@/pages/user/Donate')
}, {
    path: 'note',
    name: 'u_note',
    meta: {
        title: "我的日志",
        role: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    },
    component: () => import('@/pages/user/Note')
}, {
    path: 'msg',
    name: 'u_msg',
    meta: {
        title: "我的消息",
        role: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    },
    component: () => import('@/pages/user/Msg')
}, {
    path: 'video',
    name: 'u_video',
    meta: {
        title: "我的视频",
        role: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    },
    component: () => import('@/pages/user/Video')
}, {
    path: 'image',
    name: 'u_image',
    meta: {
        title: "我的图片",
        role: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    },
    component: () => import('@/pages/user/Image')
}]