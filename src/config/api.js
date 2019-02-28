import axios from 'axios'
import rem from './rem'
import urls from './urls'
const api = {
    imghost: urls.imghost,
    county: {
        base: urls.main.county,
        site_home: urls.main.county + 'genogram/fanMenu/getIndexMenuBySiteId', //首页api
        site_menus: 'genogram/fanMenu/getTitlesByMenuId', //导航栏
        site_list: 'genogram/sysSite/person/getSysSite', //网站列表
        site_feeds: 'genogram/allMessageBoard/addMessage', //留言板
        detail: {
            culture: 'genogram/fanNewsCulture/getFamilyCultureDetail', //家族文化
            charity: 'genogram/fanNewsCharity/getFanNewsCharityDetail', //慈善公益详情
            industry: 'genogram/fanNewsIndustry/getFamilyIndustryDetail', //家族产业详情
            famous: 'genogram/fanNewsFamous/getFamilyFamilyDetail', //家族名人
            family_record: 'genogram/fanNewsFamilyRecord/getFamilyRecordDetail', //家族动态
        },
        ancestor_list: '/genogram/proNewsAncestor/getFamousAncestorPage', //祖先名人列表
        ancestor_info: '/genogram/proNewsAncestor/getFamousAncestorDetails', //祖先名人详情
        genealogy_list: '/genogram/fanNewsUploadTreeFile/getFanNewsUploadTreeFileList', //家谱列表
        genealogy_info: '/genogram/fanNewsUploadTreeFile/getFanNewsUploadTreeFile', //家谱详情
    },
    user: {
        base: urls.main.user,
        login: 'genogram/userLogin/login', //登录
        reg: 'genogram/userLogin/signIn', //注册
        reset: 'genogram/userLogin/updatePassword', //修改密码
        info: 'genogram/userLogin/getUserLogin', //用户信息
        update: 'genogram/userLogin/updatePerson', //修改用户资料
        firstname: 'genogram/userLogin/getAllFamily', //姓氏列表
        pay: {
            ali: 'genogram/pay/aLiPay', //支付宝支付
            wx: 'genogram/pay/weChatPay', //微信支付
        }
    },
    post: function (url, data) {
        return new Promise((resolve, reject) => {
            axios.post(url, params).then(res => {
                // console.log(res.data)
                if (res.data.code == 401) {
                    alert(res.data.msg)
                    history.go(-1)
                    return;
                } else {
                    resolve(res.data);
                }
            })
        })
    },
    get: function (url, data) {
        return new Promise((resolve, reject) => {
            axios.get(url, {
                params: data
            }).then(res => {
                // console.log(res.data)
                if (res.data.code == 401) {
                    alert(res.data.msg)
                    history.go(-1)
                    return;
                } else {
                    resolve(res.data);
                }
            }).catch(err => {
                reject(err)
            })
        })
    },
    imgurl: function (e) {
        if (!e) {
            return '';
        }
        return e.indexOf('http') > -1 ? e : this.imghost + e;
    },
    imgBG: function (e) {
        return 'backgroundImage:url(' + this.imgurl(e) + ')';
    },
   
}
export default api;