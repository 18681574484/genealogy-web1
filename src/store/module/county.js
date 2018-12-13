import api from '@/libs/api.js'

function countyHomeApi(store, obj) {
    api.get(api.county.site_home, {
        siteId: store.state.id
    }).then(res => {
        store.commit('setApiList', res.data.index_show)
    })
}
export default {
    state: {
        id: localStorage.county_id * 1 || 1,
        apiList: null, //首页api
    },
    mutations: {
        setApiList(state, obj) {
            state.apiList = obj
        },
        updateCountyId(state, obj) {
            localStorage.county_id = obj
            state.apiList = null
            state.id = obj
        },
    },
    actions: {
        countyHomeApi,
    }
}