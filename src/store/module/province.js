import api from '@/libs/api.js'

function provinceHomeApi(store, obj) {
    if(!localStorage.province_id){
        location.href = '/';
    }
    api.get(api.province.site_home, {
        siteId: store.state.id
    }).then(res => {
        store.commit('updateProvinceApi', res.data.index_show)
    })
}
export default {
    state: {
        id: localStorage.province_id * 1,
        apiList: null, //首页api
    },
    mutations: {
        updateProvinceApi(state, obj) {
            state.apiList = obj
        },
        updateProvinceId(state, obj) {
            localStorage.province_id = obj
            state.apiList = null
            state.id = obj
        },
    },
    actions: {
        provinceHomeApi,
    }
}