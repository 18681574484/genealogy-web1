import Manager from '@/layouts/manager'
export default [{
        path: 'home',
        redirect: 'home/home',
        component: Manager,
        meta: {
            icon: 'ios-home',
            title: '管理后台',
            role: [1, 2, 3, 4, 5, 6, 9],
            type: [1, 2, 3]
        },
        children: [{
            path: '/a/home/home',
            name: 'home',
            meta: {
                title: '控制台',
                icon: 'md-home',
                role: [1, 2, 3, 4, 5, 6, 9],
                type: [1, 2, 3]
            },
            component: () => import('@/pages/admin/home/home')
        }]
    },
    {
        path: 'setting',
        name: 'admin_setting',
        redirect: 'setting/setting',
        component: Manager,
        meta: {
            icon: 'ios-settings',
            title: '运营',
            role: [1, 2, 3, 4, 5, 6, 9],
            type: [1, 2, 3]
        },
        children: [{
            path: 'addsite',
            name: 'addsite',
            meta: {
                icon: 'md-add-circle',
                title: '开通网站',
                role: [9],
                type: [1, 2, 3]
            },
            component: () => import('@/pages/admin/setting/addsite')
        }, {
            path: 'setting',
            name: 'setting',
            meta: {
                icon: 'md-settings',
                title: '网站设置',
                role: [1, 2, 3, 9],
                type: [1, 2, 3]
            },
            component: () => import('@/pages/admin/setting/setting')
        }, {
            path: 'summarys',
            name: 'summarys',
            meta: {
                icon: 'ios-analytics',
                title: '联谊会概况设置',
                role: [1, 2, 3, 9],
                type: [1]
            },
            component: () => import('@/pages/admin/setting/summarys')
        }, {
            path: 'withdraw',
            name: 'withdraw',
            meta: {
                icon: 'ios-clock-outline',
                title: '提现',
                role: [1, 2, 3, 9],
                type: [1, 2, 3]
            },
            component: () => import('@/pages/admin/setting/withdraw')
        }, {
            path: 'feeds',
            name: 'feeds',
            meta: {
                icon: 'md-text',
                title: '寻根留言',
                role: [1, 2, 3, 9],
                type: [1, 2, 3]
            },
            component: () => import('@/pages/admin/setting/feeds')
        }, {
            path: 'list',
            name: 'list',
            meta: {
                icon: 'ios-ionic',
                title: '内容审核',
                role: [1, 2, 3, 9],
                type: [1, 2, 3]
            },
            component: () => import('@/pages/admin/setting/list')
        }, {
            path: 'slider',
            name: 'slider',
            meta: {
                icon: 'ios-images',
                title: '轮播图',
                role: [1, 2, 3, 9],
                type: [1, 2, 3]
            },
            component: () => import('@/pages/admin/setting/slider')
        }, {
            path: 'links',
            name: 'links',
            meta: {
                icon: 'ios-infinite',
                title: '最铁盟友',
                role: [1, 2, 3, 9],
                type: [1, 2, 3]
            },
            component: () => import('@/pages/admin/setting/links')
        }]
    },
    {
        path: 'culture',
        name: '_culture',
        redirect: '/culture/list',
        component: Manager,
        meta: {
            icon: 'md-bookmarks',
            title: '家族文化',
            role: [1, 2, 3, 9],
            type: [1, 2, 3]
        },

        children: [{
            path: 'list',
            name: 'culture-list',
            meta: {
                icon: 'md-book',
                title: '全部文章',
                role: [1, 2, 3, 9],
                type: [1, 2, 3]
            },
            component: () => import('@/pages/admin/culture/list')
        }, {
            path: 'type',
            name: 'culture-type',
            meta: {
                icon: 'ios-build',
                title: '类别设置',
                role: [1, 2, 3, 9],
                type: [1, 2, 3]
            },
            component: () => import('@/pages/admin/culture/type')
        }]
    },
    {
        path: 'charitable',
        name: '_charitable',
        redirect: '/charitable/in',
        component: Manager,
        meta: {
            icon: 'ios-heart',
            title: '慈善公益',
            role: [1, 2, 3, 9],
            type: [1, 2, 3]
        },

        children: [{
            path: 'in',
            name: 'charitable-in',
            meta: {
                icon: 'md-albums',
                title: '财务收益',
                role: [1, 2, 3, 9],
                type: [1, 2, 3]
            },
            component: () => import('@/pages/admin/charitable/in')
        }, {
            path: 'out',
            name: 'charitable-out',
            meta: {
                icon: 'ios-infinite',
                title: '财务支出',
                role: [1, 2, 3, 9],
                type: [1, 2, 3]
            },
            component: () => import('@/pages/admin/charitable/out')
        }, {
            path: 'outline',
            name: 'outline',
            meta: {
                icon: 'ios-rose',
                title: '捐款名录',
                role: [1, 2, 3, 9],
                type: [1, 2, 3]
            },
            component: () => import('@/pages/admin/charitable/outline')
        }, {
            path: 'help',
            name: 'charitable-help',
            meta: {
                icon: 'ios-leaf',
                title: '慈善帮扶',
                role: [1, 2, 3, 9],
                type: [1, 2, 3]
            },
            component: () => import('@/pages/admin/charitable/help')
        }]
    },
    {
        path: 'industry',
        name: '_industry',
        redirect: '/industry/list',
        component: Manager,
        meta: {
            icon: 'md-pie',
            title: '家族产业',
            role: [1, 9],
            type: [1]
        },

        children: [{
            path: 'public',
            name: 'industry-public',
            meta: {
                icon: 'ios-aperture',
                title: '家族产业',
                role: [1, 9],
                type: [1]
            },
            component: () => import('@/pages/admin/industry/public')
        }, {
            path: 'personal',
            name: 'industry-personal',
            meta: {
                icon: 'md-aperture',
                title: '个人产业',
                role: [1, 9],
                type: [1]
            },
            component: () => import('@/pages/admin/industry/personal')
        }]
    },
    {
        path: 'notable',
        name: '_notable',
        redirect: '/notable/list',
        component: Manager,
        meta: {
            icon: 'ios-people',
            title: '家族名人',
            role: [1, 2, 3, 9],
            type: [1, 2, 3]
        },

        children: [{
            path: 'list',
            name: 'notable-list',
            meta: {
                icon: 'md-star-half',
                title: '家族名人',
                role: [1, 2, 3, 9],
                type: [1, 2, 3]
            },
            component: () => import('@/pages/admin/notable/list')
        }, {
            path: 'net',
            name: 'notable-net',
            meta: {
                icon: 'md-git-network',
                title: '组织架构',
                role: [1, 2, 3, 9],
                type: [1, 2, 3]
            },
            component: () => import('@/pages/admin/notable/net')
        }, {
            path: 'type',
            name: 'notable-type',
            meta: {
                icon: 'ios-git-network',
                title: '类别设置',
                hideInMenu: true,
                role: [1, 2, 3, 9],
                type: [1, 2, 3]
            },
            component: () => import('@/pages/admin/notable/type')
        }]
    },
    {
        path: 'genealogy',
        name: '_genealogy',
        redirect: '/genealogy/list',
        component: Manager,
        meta: {
            icon: 'ios-brush',
            title: '家谱',
            role: [1, 2, 3, 9],
            type: [1, 2, 3]
        },

        children: [{
            path: 'list',
            name: 'genealogy-list',
            meta: {
                icon: 'md-attach',
                title: '电子家谱',
                role: [1, 2, 3, 9],
                type: [1, 2, 3]
            },
            component: () => import('@/pages/admin/genealogy/list')
        }]
    },
    {
        path: 'record',
        name: '_record',
        redirect: '/record/list',
        component: Manager,
        meta: {
            icon: 'md-ribbon',
            title: '记录家族',
            role: [1, 2, 3, 9],
            type: [1, 2, 3]
        },
        children: [{
            path: 'notice',
            name: 'notice',
            meta: {
                icon: 'ios-bookmarks-outline',
                title: '网站公告',
                role: [1, 2, 3, 9],
                type: [1, 2, 3]
            },
            component: () => import('@/pages/admin/record/notice')
        }, {
            path: 'rss',
            name: 'rss',
            meta: {
                icon: 'logo-rss',
                title: '家族动态',
                role: [1, 2, 3, 9],
                type: [1, 2, 3]
            },
            component: () => import('@/pages/admin/record/rss')
        }, {
            path: 'video',
            name: 'video',
            meta: {
                icon: 'md-videocam',
                title: '家族视频',
                role: [1, 2, 3, 9],
                type: [1, 2, 3]
            },
            component: () => import('@/pages/admin/record/video')
        }, {
            path: 'topnews',
            name: 'topnews',
            meta: {
                icon: 'md-megaphone',
                title: '家族头条',
                role: [2, 3, 9],
                type: [2, 3]
            },
            component: () => import('@/pages/admin/record/topnews')
        }]
    },
    {
        path: 'users',
        name: '_users',
        redirect: '/users/list',
        component: Manager,
        meta: {
            icon: 'md-people',
            title: '用户管理',
            role: [1, 2, 3, 9],
            type: [1, 2, 3]
        },

        children: [{
            path: 'alluser',
            name: 'users-list',
            meta: {
                icon: 'ios-people-outline',
                title: '全部用户',
                role: [9],
                type: [1, 2, 3]
            },
            component: () => import('@/pages/admin/users/alluser')
        }, {
            path: 'manager',
            name: 'users-manager',
            meta: {
                icon: 'md-paw',
                title: '管理员',
                role: [1, 2, 3, 9],
                type: [1, 2, 3]
            },
            component: () => import('@/pages/admin/users/manager')
        }, {
            path: 'log',
            name: 'log',
            meta: {
                icon: 'md-code',
                title: '管理员日志',
                role: [9],
                type: [1, 2, 3]
            },
            component: () => import('@/pages/admin/users/log')
        }]
    },
    {
        path: 'help',
        name: '_help',
        redirect: '/help/help',
        component: Manager,
        meta: {
            icon: 'logo-buffer',
            title: '帮助',
            role: [9],
            type: [3]
        },
        children: [{
            path: 'help',
            name: 'help',
            meta: {
                icon: 'md-help-circle',
                title: '帮助',
                role: [9],
                type: [3]
            },
            component: () => import('@/pages/admin/home/help')
        }]
    }
]