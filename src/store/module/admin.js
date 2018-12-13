import {
    getBreadCrumbList,
    setTagNavListInLocalstorage,
    getMenuByRouter,
    getTagNavListFromLocalstorage,
    getHomeRoute,
    getNextRoute,
    routeHasExist,
    routeEqual,
    getRouteTitleHandled
} from '@/libs/util'
import router from '@/router'
import routersAdmin from '@/router/admin/admin'

const closePage = (state, route) => {
    const nextRoute = getNextRoute(state.tagNavList, route)
    state.tagNavList = state.tagNavList.filter(item => {
        return !routeEqual(item, route)
    })
    router.push(nextRoute)
}

export default {
    state: {
        id: localStorage.admin_id * 1 || 0,
        step: localStorage.step_id * 1 || 0,
        breadCrumbList: [],
        tagNavList: [],
        homeRoute: getHomeRoute(routersAdmin, "home"),
    },
    getters: {
        menuList: (state, getters, rootState) => getMenuByRouter(routersAdmin, rootState.user.access)
    },
    mutations: {
        updateAdminId(state, obj) {
            localStorage.admin_id = obj.id
            localStorage.step_id = obj.step
            state.id = obj.id
            state.step = obj.step
        },
        setBreadCrumb(state, route) {
            state.breadCrumbList = getBreadCrumbList(route, state.homeRoute)
        },
        setTagNavList(state, list) {
            let tagList = []
            if (list) {
                tagList = [...list]
            } else tagList = getTagNavListFromLocalstorage() || []
            if (tagList[0] && tagList[0].name !== "home") tagList.shift()
            let homeTagIndex = tagList.findIndex(item => item.name === "home")
            if (homeTagIndex > 0) {
                let homeTag = tagList.splice(homeTagIndex, 1)[0]
                tagList.unshift(homeTag)
            }
            state.tagNavList = tagList
            setTagNavListInLocalstorage([...tagList])
        },
        closeTag(state, route) {
            let tag = state.tagNavList.filter(item => routeEqual(item, route))
            route = tag[0] ? tag[0] : null
            if (!route) return
            closePage(state, route)
        },
        addTag(state, {
            route,
            type = 'unshift'
        }) {
            let router = getRouteTitleHandled(route)
            if (!routeHasExist(state.tagNavList, router)) {
                if (type === 'push') state.tagNavList.push(router)
                else {
                    if (router.name === "home") state.tagNavList.unshift(router)
                    else state.tagNavList.splice(1, 0, router)
                }
                setTagNavListInLocalstorage([...state.tagNavList])
            }
        },
    },
    actions: {}
}