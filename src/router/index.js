import Vue from 'vue'
import Router from 'vue-router'
import Indexs from '@/components/views/index.vue'
import Home from '@/components/centre/home.vue'
import HomeCentre from '@/components/centre/homeCentre.vue'
import HomeList from '@/components/centre/homeList.vue'
import county from '@/components/centre/county.vue'
import personnel from '@/components/centre/personnel.vue'
import video from '@/components/centre/video.vue'
import announcement from '@/components/centre/announcement.vue'
import culture from '@/components/centre/culture.vue'

import celebrity from '@/components/centre/celebrity.vue'
import branch from '@/components/centre/branch.vue'
import industry from '@/components/centre/industry.vue'


import faction from '@/components/centre/faction.vue'
import characterDeatils from '@/components/centre/characterDetails.vue'
import characterElite from '@/components/centre/characterElite.vue'
import characterIntroduction from '@/components/centre/characterIntroduction.vue'
import countyLevel from '@/components/centre/countyLevel.vue'





Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      // 首页
      path: '/home',
      component: Home
    },
    {
      path: '/home',
      component: Indexs,
        children:[
          {
            path:'/HomeList',
            component: HomeList
          },
          // 视频
          {
            path:'/video',
            component: video
          },
          {
            path: '/chatting',
            component: county
          },
          {
            path: '/add',
            component: personnel
          }, 
          {
            path: '/personal',
            component: branch
          },
          {
            path: '/announcement',
            component: announcement
          },
          {
            path: '/culture',
            component: culture
          },   
          {
            path: '/branch',
            component: branch
          },
          {
            path: '/personnel',
            component: personnel
          }, 
          {
            path: '/industry',
            component: industry
          }

        ]
    },
    {
      path: '/faction',
      component: faction
    },
    {
      path: '/characterDeatils',
      component: characterDeatils
    },
    {
      path: '/characterElite',
      component: characterElite
    },
    {
      path: '/characterIntroduction',
      component: characterIntroduction
    },
    {
      path: '/countyLevel',
      component: countyLevel
    }

 
 
   
  ]
})
