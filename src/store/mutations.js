const mutations = {
    updateUser(state, obj) {
        localStorage.user = JSON.stringify(obj)
        state.user = obj
    },
}
export default mutations