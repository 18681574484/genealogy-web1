import api from '@/libs/api.js'

function resetUser(store, obj) {
    if (localStorage.user) {
        store.commit('updateUser', JSON.parse(localStorage.user))
    }
}

function getCountyApi(store, obj) {
    store.commit('setApiList', null)
    api.get(api.rootUrl("site_home", store.state.step), {
        siteId: store.state.county_id,
    }).then(res => {
        store.commit('setApiList', res.data.index_show)
    })
}

function getProvinceApi(store, obj) {
    store.commit('setApiList', null)
    api.get(api.rootUrl("site_home", store.state.step), {
        siteId: store.state.province_id,
    }).then(res => {
        store.commit('setApiList', res.data.index_show)
    })
}
export default {
    resetUser,
    getCountyApi,
    getProvinceApi,
}