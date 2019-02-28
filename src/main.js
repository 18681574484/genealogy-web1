import Vue from 'vue'
import router from './router/'
import store from './store/'
import App from './App.vue'
import api from './libs/api.js'
import Vant from 'vant';
import 'vant/lib/index.css';
import '@/assets/icon/iconfont.css'
import '@/assets/styles/app.less'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
dayjs.locale('zh-cn')
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)
Vue.use(Vant);
Vue.prototype.api = api
Vue.prototype.dayjs = dayjs
new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');