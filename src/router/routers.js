import COUNTY from './child/county'
import PROVINCE from './child/province'
import USER from './child/user'
import ADD from './child/add'
export default [{
        path: '/',
        meta: {
            title: '',
            keepAlive: false
        },
        redirect: '/base',
    }, {
        path: '/base',
        meta: {
            title: '联谊会',
            keepAlive: false
        },
        component: () => import('@/pages/basic/base'),
    }, {
        path: '/home',
        meta: {
            title: '统谱网',
            keepAlive: false
        },
        component: () => import('@/pages/basic/home'),
    }, {
        path: '/chat',
        meta: {
            title: '聊天',
            keepAlive: false
        },
        component: () => import('@/pages/basic/chat'),
    }, {
        path: '/videos',
        meta: {
            title: '统谱网',
            keepAlive: false
        },
        component: () => import('@/pages/basic/videos'),
    }, {
        path: '/c',
        redirect: '/c/home',
        component: () => import('@/layouts/county'),
        meta: {
            title: '联谊会',
            keepAlive: false
        },
        children: COUNTY
    }, {
        path: '/p',
        redirect: '/p/home',
        component: () => import('@/layouts/province'),
        meta: {
            title: '联谊会',
            keepAlive: false
        },
        children: PROVINCE
    }, {
        path: '/user',
        meta: {
            title: '个人中心',
            keepAlive: false
        },
        redirect: '/user/center',
        component: () => import('@/layouts/user'),
        children: USER
    }, {
        path: '/add',
        meta: {
            title: '个人中心',
            keepAlive: false
        },
        redirect: '/add/blog',
        component: () => import('@/layouts/user'),
        children: ADD
    }, {
        path: '/login',
        meta: {
            title: '登录',
            keepAlive: false
        },
        component: () => import('@/pages/auth/login'),
    },
    {
        path: '/reg',
        meta: {
            title: '注册',
            keepAlive: false
        },
        component: () => import('@/pages/auth/reg'),
    },
    {
        path: '/find',
        meta: {
            title: '找回密码',
            keepAlive: false
        },
        component: () => import('@/pages/auth/find'),
    },
    {
        path: '*',
        meta: {
            title: '404',
            keepAlive: false
        },
        component: () => import('@/pages/basic/404'),
    }
]