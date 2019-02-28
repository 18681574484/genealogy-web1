import api from '../config/api'
import state from './state'
export default {
    
    homeArr() {
        api.get( "http://192.168.2.179:8090/genogram/fanIndex/index/getFanIndexSlidePicList?siteId=100")
        .then( res => {
            // 轮播图
            state.lunbo = res.data
            console.log(state.lunbo)
            return api.get("http://192.168.2.179:8090/genogram/fanNewsFamilyRecord/selectRecortPage?showId=123")
        })
        .then( res => {
            // 家族动态
            state.dynamic = res.data
            return api.get("http://192.168.2.179:8090/genogram/fanNewsCharity/index/getPayUser?order=time&label=desc&pageSize=4&showId=10018")
        })
        .then( res => {
            // 捐款名人
            state.celebrity = res.data
            return api.get("http://192.168.2.179:8090/genogram/fanNewsCharity/index/getFanIndexFund?siteId=100")
        })
        .then( res => {
            // 公益基金
            state.fund = res.data
            // console.log(res)     
        })
    },
    bulletin() {
        api.get("http://192.168.2.179:8090//genogram/fanNewsFamilyRecord/selectRecortPage?showId=10024")
        .then( res => {
            // 县级公告
            state.announcement = res.data
            return api.get("http://192.168.2.179:8090//genogram/fanIndex/index/getFanIndexInfo?siteId=100")
        })
        .then( res => {
            // 简介
            state.brief = res.data
            // console.log( state.brief)
        })
    },
    expenditure() {
        api.get("http://192.168.2.179:8090//genogram/fanNewsCharity/index/getFanNewsCharityOutPage?showId=10016")
        .then( res => {
            // 慈善公益
            state.wasteBook = res.data
        })
    },
    familyIndustry () {
        // api.get("http://192.168.2.179:8090/genogram/fanMenu/getTitlesByMenuId?siteId=100&menuId=4")
        api.get("http://192.168.2.179:8090/genogram/fanMenu/getIndexMenuBySiteId?siteId=10")
        .then( res => {
            // 家族资产
            state.property = res.data
            console.log( state.property )
        })
    },
    video () {

    }
}