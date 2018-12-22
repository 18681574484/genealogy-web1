export default [{
        path: 'home',
        name: 'c_home',
        meta: {
            title: "首页"
        },
        component: () => import('@/pages/county/home/home')
    }, {
        path: 'culture',
        name: 'c_culture',
        meta: {
            title: "家族文化"
        },
        component: () => import('@/pages/county/culture')
    }, {
        path: 'charity',
        name: 'c_charity',
        meta: {
            title: "慈善公益"
        },
        component: () => import('@/pages/county/charity')
    }, {
        path: 'industry',
        name: 'c_industry',
        meta: {
            title: "家族产业"
        },
        component: () => import('@/pages/county/industry')
    }, {
        path: 'famous',
        name: 'c_famous',
        meta: {
            title: "家族名人"
        },
        component: () => import('@/pages/county/famous')
    }, {
        path: 'ancestors',
        name: 'c_ancestors',
        meta: {
            title: "祖先分支"
        },
        component: () => import('@/pages/county/ancestors')
    }, {
        path: 'record',
        name: 'c_record',
        meta: {
            title: "记录家族"
        },
        component: () => import('@/pages/county/record')
    },
    {
        path: "genealogy",
        name: "c_genealogy",
        meta: {
            title: "统谱编修"
        },
        component: () => import('@/pages/county/genealogy')
    },
    {
        path: 'detail',
        name: 'c_detail',
        meta: {
            title: "文章详情"
        },
        component: () => import('@/pages/county/detail')
    }
]