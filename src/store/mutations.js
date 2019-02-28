const mutations = {
    updateUser(state, obj) {
        localStorage.user = JSON.stringify(obj)
        state.user = obj
    },
    setApiList(state, obj) {
        state.apiList = obj
    },
    updateCountyId(state, obj) {
        localStorage.county_id = obj
        localStorage.step_id = 1
        state.apiList = null
        state.step = 1
        state.county_id = obj
    },
    updateProvinceId(state, obj) {
        localStorage.province_id = obj
        localStorage.step_id = 2
        state.apiList = null
        state.step = 2
        state.province_id = obj
    },
    updateAdminId(state, obj) {
        localStorage.admin_id = obj.id
        localStorage.step_id = obj.step
    },
}

export default mutations