import axios from 'axios'
import {
    pca,
    pcaa
} from "area-data";
import urls from './urls'
const api = {
    imghost: urls.imghost,
    county: {
        base: urls.main.county,
        site_home: urls.main.county + 'genogram/fanMenu/getIndexMenuBySiteId', //首页api
        site_menus: 'genogram/fanMenu/getTitlesByMenuId', //导航栏
        site_reg: '/genogram/sysSite/person/getSysSiteByCode', //查询站点
        site_list: 'genogram/sysSite/person/getSysSite', //网站列表
        site_feeds: 'genogram/allMessageBoard/addMessage', //留言板
        detail: {
            culture: 'genogram/fanNewsCulture/getFamilyCultureDetail', //家族文化
            charity: 'genogram/fanNewsCharity/getFanNewsCharityDetail', //慈善公益详情
            charitable: 'genogram/fanSysCharitableDeclare/getFamilyStructureDetails', //慈善帮扶详情
            industry: 'genogram/fanNewsIndustry/getFamilyIndustryDetail', //家族产业详情
            famous: 'genogram/fanNewsFamous/getFamilyFamilyDetail', //家族名人
            records: 'genogram/fanNewsFamilyRecord/getFamilyRecordDetail', //家族动态
        },
        login: 'genogram/userLogin/login', //登录
        reg: 'genogram/userLogin/signIn', //注册
        reset: 'genogram/userLogin/updatePassword', //修改密码
        regcode: 'genogram/userLogin/sendVerificationCode', //注册验证码

        charitable_list: 'genogram/fanSysCharitableDeclare/getSysCharitableDeclare', //慈善帮扶
        pay: {
            ali: 'genogram/pay/aLiPay', //支付宝支付
            wx: 'genogram/pay/weChatPay', //微信支付
            wxorder: 'genogram/pay/getFanNewsCharityPayIn', //微信支付订单校验
            wechat: 'genogram/pay/orders', //微信公众号支付
            getAuth: 'genogram/pay/GO', //获得授权
        },
        ancestor_list: 'genogram/proNewsAncestor/getFamousAncestorPage', //祖先名人列表
        ancestor_info: 'genogram/proNewsAncestor/getFamousAncestorDetails', //祖先名人详情
        genealogy_list: 'genogram/fanNewsUploadTreeFile/getFanNewsUploadTreeFileList', //家谱列表
        genealogy_info: 'genogram/fanNewsUploadTreeFile/getFanNewsUploadTreeFile', //家谱详情
        comments_list: 'genogram/allUserComments/getAllUserComments', //评论列表
        comments_add: 'genogram/allUserComments/addAllUserComments', //添加评论
        comments_feeds: '/genogram/allUserComments/addAllUserReply', //回复
    },
    province: {
        base: urls.main.province,
        site_home: urls.main.province + 'genogram/proMenu/getIndexMenuBySiteId', //首页api
        site_menus: 'genogram/proMenu/getTitlesByMenuId', //导航栏
        site_feeds: 'genogram/allMessageBoard/addMessage', //留言板
        detail: {
            culture: 'genogram/proNewsCulture/getFamilyCultureDetail', //家族文化
            charity: 'genogram/proNewsCharity/getNewsDetail', //慈善公益详情
            famous: 'genogram/proNewsFamous/getFamilyPersionDetail', //家族名人
            records: 'genogram/proNewsFamilyRecord/getProFamilyRecord', //家族动态
        },
        charitable_list: 'genogram/fanSysCharitableDeclare/getSysCharitableDeclare', //慈善帮扶
        charitable_info: 'genogram/fanSysCharitableDeclare/getFamilyStructureDetails', //慈善帮扶详情
        pay: {
            ali: 'genogram/pay/aLiPay', //支付宝支付
            wx: 'genogram/pay/weChatPay', //微信支付
            wxorder: 'genogram/pay/getFanNewsCharityPayIn', //微信支付订单校验
        },
        ancestor_list: 'genogram/proNewsAncestor/getFamousAncestorPage', //祖先名人列表
        ancestor_info: 'genogram/proNewsAncestor/getFamousAncestorDetails', //祖先名人详情
        genealogy_list: 'genogram/proNewsUploadTreeFile/getProNewsUploadTreeFileList', //家谱列表
        genealogy_info: 'genogram/proNewsUploadTreeFile/getProNewsUploadTreeFile', //家谱详情
        comments_list: 'genogram/allUserComments/getAllUserComments', //评论列表
        comments_add: 'genogram/allUserComments/addAllUserComments', //添加评论
        comments_feeds: '/genogram/allUserComments/addAllUserReply', //回复
    },
    user: {
        base: urls.main.user,
        firstname: 'genogram/userLogin/getAllFamily', //姓氏列表
        info: 'genogram/user/getAllUserReg', //用户信息
        update: 'genogram/user/updatePersonVo', //修改用户资料
        pay_list: 'genogram/user/getPayInList', //捐款记录

        shuoshuo_list: 'genogram/user/getAllUserSaysList', //说说列表
        shuoshuo_add: 'genogram/user/insertAllUserSays', //发布
        shuoshuo_info: 'genogram/user/getAllUserSays', //详情
        shuoshuo_del: 'genogram/user/deleteAllUserSays', //删除

        picture_list: 'genogram/user/getAllUserPicsList', //图片
        picture_add: 'genogram/user/insertOrUpdateAllUserPics', //发表图片
        picture_info: 'genogram/user/getAllUserPics', //详情
        picture_del: 'genogram/user/deleteAllUserPics', //删除图片

        rizhi_list: 'genogram/user/getAllUserNewsInfoList', //日志
        rizhi_add: 'genogram/user/insertAllUserNewsInfo', //发布
        rizhi_info: 'genogram/user/getAllUserNewsInfo', //详情
        rizhi_del: 'genogram/user/deleteAllUserNewsInfo', //删除

        video_list: '/genogram/user/getAllUserVideosList', //视频
        video_add: 'genogram/user/insertAllUserVideos', //发布
        video_info: '/genogram/user/getAllUserVideos', //详情
        video_del: 'genogram/user/deleteAllUserVideos', //删除
    },
    admin: {
        base: urls.admin.county,
        upload_img: 'fan/uploadFastdfs', //图片上传
        site_list: 'genogram/admin/person/getSysSite', //网站列表
        site_creat: 'genogram/admin/sysSite/insertSysSite', //开通网站
        user: {
            base: urls.admin.county,
            firstname: 'genogram/admin/sysSite/getAllFamily', //姓氏列表
            list: 'genogram/admin/person/getUserLoginList', //用户列表
            list_role: 'genogram/admin/person/getUserLoginRoleList', //管理员列表
            info: 'genogram/admin/person/getUserLogin', //用户信息
            edit: 'genogram/admin/person/updatePerson', //用户修改
        },
        province: {
            base: urls.admin.province,
            site_info: 'genogram/admin/proIndex/getIndexInfo', //网站信息--后台
            site_edit: 'genogram/admin/proIndex/insertOrUpdateIndexInfo', //网站信息--修改
            site_feeds: 'genogram/admin/allMessageBoard/selectMessage', //留言板
            site_menus: 'genogram/admin/proMenu/getTitlesByMenuId', //栏目api
            site_menus_add: 'genogram/admin/proMenu/addTitles', //类别添加
            site_menus_edit: 'genogram/admin/proMenu/updateTitlesById', //类别修改
            site_menus_del: 'genogram/admin/proMenu/delTitlesById', //类别删除
            site_withdraw_list: 'genogram/admin/proNewsCharity/getFanIndexFundDrowing', //提现记录
            site_withdraw: 'genogram/admin/proNewsCharity/insertProIndexFundDrowing', //线上提现
            site_outline: 'genogram/admin/proNewsCharity/insertProNewsCharityPayIn', //线下捐款
            site_finance: 'genogram/admin/proNewsCharity/getProIndexFund', //当前资金
            slider_list: 'genogram/admin/proIndex/index/getProIndexSlidePic', //轮播图
            slider_edit: 'genogram/admin/proIndex/insertOrUpdateProIndexSlidePic', //轮播图修改
            slider_del: 'genogram/admin/proIndex/deleteProIndexSlidePic', //轮播图删除
            culture_zipai_info: 'genogram/admin/proNewsCulture/getZiPaiDetail', //字派详情
            culture_zipai_edit: 'genogram/admin/proNewsCulture/addOrUpdateZiPai', //字派添加
            culture_zipai_del: 'genogram/admin/proNewsCulture/deleteZipaiById', //字派删除
            culture_news_info: 'genogram/admin/proNewsCulture/getFamilyCultureDetail', //家族文化详情
            culture_news_edit: 'genogram/admin/proNewsCulture/addOrUpdateCulture', //家族文化添加
            culture_news_drft: 'genogram/admin/proNewsCulture/addOrUpdateCultureDrft', //家族文化草稿
            culture_news_del: 'genogram/admin/proNewsCulture/deleteCulturById', //家族文化删除
            charity_list_info: 'genogram/admin/proNewsCharity/getNewsDetail', //财务收支详情
            charity_list_edit: 'genogram/admin/proNewsCharity/insertOrUpdateProNewsCharityOut', //财务收支增加
            charity_list_drft: 'genogram/admin/proNewsCharity/insertOrUpdateProNewsCharityOutDrft', //财务收支草稿
            charity_list_del: 'genogram/admin/proNewsCharity/deleteProNewsCharityOut', //财务收支删除

            genealogy_list: 'genogram/admin/proNewsUploadTreeFile/getProNewsUploadTreeFileList', //电子家谱列表
            genealogy_info: 'genogram/admin/proNewsUploadTreeFile/getProNewsUploadTreeFile', //电子家谱详情
            genealogy_edit: '/genogram/admin/proNewsUploadTreeFile/updateProNewsUploadTreeFile', //电子家谱修改
            genealogy_del: 'genogram/admin/proNewsUploadTreeFile/deleteProNewsUploadTreeFile', //电子家谱删除
            famous_list: 'genogram/admin/proNewsFamous/getFamilyPersonPage', //家族名人列表
            famous_info: 'genogram/admin/proNewsFamous/getFamilyPersonDetail', //家族名人详情
            famous_edit: 'genogram/admin/proNewsFamous/addOrUpdatePerson', //家族名人修改
            famous_drft: 'genogram/admin/proNewsFamous/addOrUpdatePersonDrft', //家族名人草稿
            famous_del: 'genogram/admin/proNewsFamous/deletePersonById', //家族名人删除

            record_list: 'genogram/admin/proNewsFamilyRecord/selectRecort', //记录家族列表
            record_info: 'genogram/admin/proNewsFamilyRecord/getProFamilyRecordDetail', //记录家族详情
            record_edit: 'genogram/admin/proNewsFamilyRecord/addOrUpdateRecord', //记录家族修改
            record_drft: 'genogram/admin/proNewsFamilyRecord/addOrUpdateRecordDrft', //记录家族草稿
            record_del: 'genogram/admin/proNewsFamilyRecord/deleteProRecordById', //记录家族删除
            media_list: 'genogram/admin/proNewsFamilyRecord/selectRecortVedioPage', //官方视频
            media_info: 'genogram/admin/proNewsFamilyRecord/getFamilyRecordVedioDetail', //信息
            media_edit: 'genogram/admin/proNewsFamilyRecord/addOrUpdateVedioRecord', //修改
            media_del: 'genogram/admin/proNewsFamilyRecord/deleteRecordVedioById', //删除
        },
        county: {
            base: urls.admin.county,
            site_info: 'genogram/admin/fanIndex/getFanIndexInfo', //网站信息--后台
            site_edit: 'genogram/admin/fanIndex/insertOrUpdateFanIndexInfo', //网站信息--修改
            site_feeds: 'genogram/admin/allMessageBoard/selectMessage', //留言板
            site_menus: 'genogram/admin/fanMenu/getTitlesByMenuId', //栏目api
            site_menus_add: 'genogram/admin/fanMenu/addTitles', //类别添加
            site_menus_edit: 'genogram/admin/fanMenu/updateTitlesById', //类别修改
            site_menus_del: 'genogram/admin/fanMenu/delTitlesById', //类别删除
            site_withdraw_list: 'genogram/admin/fanNewsCharity/getFanIndexFundDrowing', //提现记录
            site_withdraw: 'genogram/admin/fanNewsCharity/insertFanIndexFundDrowing', //线上提现
            site_outline: 'genogram/admin/fanNewsCharity/insertFanNewsCharityPayIn', //线下捐款
            site_finance: 'genogram/admin/fanNewsCharity/getFanIndexFund', //当前资金
            slider_list: 'genogram/admin/fanIndex/getFanIndexSlidePicList', //轮播图
            slider_edit: 'genogram/admin/fanIndex/insertOrUpdateFanIndexSlidePic', //轮播图修改
            slider_del: 'genogram/admin/fanIndex/deleteFanIndexSlidePic', //轮播图删除
            summarys_list: 'genogram/admin/fanIndex/getFanIndexFamilySummarysPage', //联谊会列表
            summarys_info: 'genogram/admin/fanIndex/getFanIndexFamilySummarys', //联谊会详情
            summarys_edit: 'genogram/admin/fanIndex/insertOrUpdateFanIndexFamilySummarys', //联谊会新增修改
            summarys_drft: 'genogram/admin/fanIndex/insertOrUpdateFanIndexFamilySummarysDrft', //联谊会草稿
            summarys_del: 'genogram/admin/fanIndex/deleteFanIndexFamilySummarys', //联谊会删除
            culture_zipai_info: 'genogram/admin/fanNewsCulture/getZiPaiDetail', //字派详情
            culture_zipai_edit: 'genogram/admin/fanNewsCulture/addOrUpdateZiPai', //字派添加
            culture_zipai_del: 'genogram/admin/fanNewsCulture/deleteZipaiById', //字派删除
            culture_news_info: 'genogram/admin/fanNewsCulture/getFamilyCultureDetail', //家族文化详情
            culture_news_edit: 'genogram/admin/fanNewsCulture/addOrUpdateCulture', //家族文化添加
            culture_news_drft: 'genogram/admin/fanNewsCulture/addOrUpdateCultureDrft', //家族文化草稿
            culture_news_del: 'genogram/admin/fanNewsCulture/deleteCulturById', //家族文化删除

            charity_list_info: 'genogram/admin/fanNewsCharity/getFanNewsCharityDetail', //财务收支详情
            charity_list_edit: 'genogram/admin/fanNewsCharity/insertOrUpdateFanNewsCharityOut', //财务收支增加
            charity_list_drft: 'genogram/admin/fanNewsCharity/insertOrUpdateFanNewsCharityOutDrft', //财务收支草稿
            charity_list_del: 'genogram/admin/fanNewsCharity/deleteFanNewsCharityOut', //财务收支删除

            charity_help_info: 'genogram/admin/fanSysCharitableDeclare/getFamilyStructureDetails', //慈善帮扶列表
            charity_help_edit: 'genogram/admin/fanSysCharitableDeclare/addCharityAssist', //慈善帮扶添加
            charity_help_drft: 'genogram/admin/fanSysCharitableDeclare/draftCharityAssist', //慈善帮扶草稿
            charity_help_del: 'genogram/admin/fanSysCharitableDeclare/deleteSysCharitableDeclare', //慈善帮扶删除
            charity_help_back: 'genogram/admin/fanSysCharitableDeclare/addCharityAssistFeedback', //慈善帮扶反馈

            industry_info: 'genogram/admin/fanNewsIndustry/getFamilyIndustryDetail', //家族产业详情
            industry_edit: 'genogram/admin/fanNewsIndustry/addOrUpdateIndustry', //家族产业添加
            industry_drft: 'genogram/admin/fanNewsIndustry/addOrUpdateIndustryDrft', //家族产业草稿
            industry_del: 'genogram/admin/fanNewsIndustry/deleteIndustryById', //家族产业删除

            genealogy_list: 'genogram/admin/fanNewsUploadTreeFile/getFanNewsUploadTreeFileList', //电子家谱列表
            genealogy_info: 'genogram/admin/fanNewsUploadTreeFile/getFanNewsUploadTreeFile', //电子家谱详情
            genealogy_edit: 'genogram/admin/fanNewsUploadTreeFile/uploadFanNewsUploadTreeFile', //电子家谱列表
            genealogy_del: 'genogram/admin/fanNewsUploadTreeFile/deleteFanNewsUploadTreeFile', //电子家谱删除

            famous_list: 'genogram/admin/fanNewsFamous/getFamilyPersonPage', //家族名人列表
            famous_info: 'genogram/admin/fanNewsFamous/getFamilyPersonDetail', //家族名人详情
            famous_edit: 'genogram/admin/fanNewsFamous/addOrUpdatePerson', //家族名人修改
            famous_drft: 'genogram/admin/fanNewsFamous/addOrUpdatePersonDrft', //家族名人草稿
            famous_del: 'genogram/admin/fanNewsFamous/deletePersonById', //家族名人删除
            record_list: 'genogram/admin/fanNewsFamilyRecord/selectRecort', //记录家族列表
            record_info: 'genogram/admin/fanNewsFamilyRecord/getFamilyRecord', //记录家族详情
            record_edit: 'genogram/admin/fanNewsFamilyRecord/addOrUpdateRecord', //记录家族修改
            record_drft: 'genogram/admin/fanNewsFamilyRecord/addOrUpdateRecordDrft', //记录家族草稿
            record_del: 'genogram/admin/fanNewsFamilyRecord/deleteRecordById', //记录家族删除
            media_list: 'genogram/admin/fanNewsFamilyRecord/selectRecortVedioPage', //官方视频
            media_info: 'genogram/admin/fanNewsFamilyRecord/getFamilyRecordVedioDetail', //信息
            media_edit: 'genogram/admin/fanNewsFamilyRecord/addOrUpdateVedioRecord', //修改
            media_del: 'genogram/admin/fanNewsFamilyRecord/deleteRecordVedioById', //删除列表
        },
    },
    adminUrl: function (e, i) {
        let type = ['users', 'county', 'province']
        return e.indexOf('/') > -1 ? this.admin[type[i]].base + e : this.admin[type[i]].base + this.admin[type[i]][e];
    },
    post: function (url, data, type) {
        if (!data.pageNo) {
            data.pageNo = 1
        }
        if (!data.pageSize) {
            data.pageSize = 8
        }
        if (!data.token && localStorage.user) {
            data.token = JSON.parse(localStorage.user).token
        }
        let params = null;
        if (type) {
            params = data;
        } else {
            params = new URLSearchParams();
            for (let v in data) {
                params.append(v, data[v]);
            }
        }
        return new Promise((resolve, reject) => {
            axios.post(url, params).then(res => {
                console.log(res.data)
                if (res.data.code == 401) {
                    alert(res.data.msg)
                    history.go(-1)
                    return;
                } else if (res.data.code == 99) {
                    this.getAuth();
                } else {
                    resolve(res.data);
                }
            })
        })
    },
    get: function (url, data) {
        if (!data.pageNo) {
            data.pageNo = 1
        }
        if (!data.pageSize) {
            data.pageSize = 8
        }
        if (!data.token && localStorage.user) {
            data.token = JSON.parse(localStorage.user).token
        }
        return new Promise((resolve, reject) => {
            axios.get(url, {
                params: data
            }).then(res => {
                console.log(res.data)
                if (res.data.code == 401) {
                    alert(res.data.msg)
                    history.go(-1)
                    return;
                } else if (res.data.code == 99) {
                    this.getAuth();
                } else {
                    resolve(res.data);
                }
            }).catch(err => {
                reject(err)
            })
        })
    },
    upload: function (url, data, files) {
        let params = new FormData();
        params.append(files['key'], files['file']);
        for (let v in data) {
            params.append(v, data[v]);
        }
        let config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
        return new Promise((resolve, reject) => {
            axios.post(url, params, config).then(res => {
                console.log(res.data)
                resolve(res.data);
            })
        })
    },
    getAuth: function () {
        this.get(
                this.county.base +
                this.county.pay.getAuth, {}
            )
            .then(e => {
                location.href = e.data;
            });
    },
    getUrlParam: function (name, old_url = window.location.search) {
        var new_url = encodeURI(old_url);
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = new_url.substr(1).match(reg);
        if (r != null) {
            return unescape(r[2]);
        } else {
            return null;
        }
    },
    isMobile: function (phone) {
        if (!(/^1[3456789]\d{9}$/.test(phone))) {
            return false;
        } else {
            return true;
        }
    },
    isNumber: function (e) {
        if (!(/^\d+$/).test(e)) {
            return false;
        } else {
            return true;
        }
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
    oneOf: (value, validList) => {
        for (let i = 0; i < validList.length; i++) {
            if (value === validList[i]) {
                return true
            }
        }
        return false
    },
    formatArea: (e) => {
        if (!e) {
            return;
        }
        let a = parseInt(Number(e) * 0.0001) * 10000;
        let b = parseInt(Number(e) * 0.01) * 100;
        let c = Number(e);
        if (c == a) {
            return pca[86][a];
        }
        if (pcaa[b]) {
            return pca[86][a] + "·" + pcaa[b][c];
        } else {
            return pca[86][a] + "·" + pcaa[a][c];
        }
    },
    maxcount(e) {
        if (!e) {
            return 0;
        }
        return e > 9999 ? 9999 : e
    },
    toPagedown() {
        document.getElementsByClassName('page')[0].scrollTop = document.getElementsByClassName('page')[0].scrollHeight
        setTimeout(() => {
            document.getElementsByClassName('page')[0].scrollTop = document.getElementsByClassName('page')[0].scrollHeight
        }, 500);
    },
    regConfig: function () {
        api.get('jssdk', {
            'url': window.location.href
        }).then(res => {
            if (res.success) {
                this.initjsconf(res.data.AppId, res.data.Signature, res.data.NonceStr, res.data.Timestamp);
            }
        })
    },
    initjsconf: function (appId, signature, nonceStr, timestamp) {
        wx.config({
            debug: false,
            appId: appId,
            timestamp: timestamp,
            nonceStr: nonceStr,
            signature: signature,
            jsApiList: ["hideOptionMenu", "showMenuItems", 'onMenuShareTimeline', 'onMenuShareAppMessage',
                'onMenuShareQQ', 'onMenuShareWeibo', 'hideMenuItems', 'showMenuItems',
                'hideAllNonBaseMenuItem', 'showAllNonBaseMenuItem', 'chooseImage', 'previewImage',
                'uploadImage', 'downloadImage', 'getNetworkType', 'openLocation', 'getLocation',
                'hideOptionMenu', 'showOptionMenu', 'closeWindow', 'scanQRCode', 'chooseWXPay',
                'openProductSpecificView', 'addCard', 'chooseCard', 'openCard'
            ]
        });
    },
    onBridgeReady: function (data, url) {
        if (typeof WeixinJSBridge == "undefined") {
            if (document.addEventListener) {
                document.addEventListener('WeixinJSBridgeReady', this.onBridgeReady, false);
            } else if (document.attachEvent) {
                document.attachEvent('WeixinJSBridgeReady', this.onBridgeReady);
                document.attachEvent('onWeixinJSBridgeReady', this.onBridgeReady);
            }
        } else {
            this.onBridge(data, url);
        }
    },
    onBridge: function (data, url) {
        WeixinJSBridge.invoke('getBrandWCPayRequest', data, function (res) {
            if (res.err_msg == "get_brand_wcpay_request:ok") {
                if (!url) {
                    location.reload();
                } else {
                    location.href = url
                }
            }
        });
    },
    chooseImage: function () {
        return new Promise((resolve, reject) => {
            wx.ready(() => {
                wx.chooseImage({
                    count: 1,
                    sizeType: ['compressed'],
                    sourceType: ['album', 'camera'],
                    success: suc => {
                        resolve(suc);
                    },
                    fail: err => {
                        reject(err);
                    }
                });
            })
        })
    },
    uploadImage: function (e) {
        return new Promise((resolve, reject) => {
            wx.uploadImage({
                localId: e,
                isShowProgressTips: 1,
                success: suc => {
                    resolve(suc);
                },
                fail: err => {
                    reject(err);
                }
            });
        })
    },
    //画布转图片
    convertCanvasToImage(canvas) {
        let image = new Image();
        image.src = canvas.toDataURL("image/png");
        return image.src;
    },
    //base64转文件
    convertBase64UrlToBlob(urlData) {
        var bytes = window.atob(urlData.split(',')[1]);
        var ab = new ArrayBuffer(bytes.length);
        var ia = new Uint8Array(ab);
        for (var i = 0; i < bytes.length; i++) {
            ia[i] = bytes.charCodeAt(i);
        }
        return new Blob([ab], {
            type: 'image/png'
        });
    },
}
export default api;