export default  {
    increment ({ commit }) {
        commit('homeArr')
        commit('bulletin')
      },
    bulletin ({ commit }) {
        commit('bulletin')
    },
    account ({ commit }) {
        commit('expenditure')
    },
    family ({ commit }) {
        commit('familyIndustry')
    }
}