const state = {
    county_id: localStorage.county_id ? localStorage.county_id * 1 : 0,
    province_id: localStorage.province_id ? localStorage.province_id * 1 : 0,
    apiList: null,
    user: {},
    step: localStorage.step_id ? localStorage.step_id * 1 : 1,
}
export default state