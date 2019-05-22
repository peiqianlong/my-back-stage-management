import Vue from 'vue';
import Router from 'vue-router';
const _import = require('./_import_' + process.env.NODE_ENV);
import Full from '@/containers/Full'
import Full2 from '@/containers/Full2'

import Buttons from '@/views/components/Buttons'

// Views - Pages
import Page404 from '@/views/errorPages/Page404'
import Page500 from '@/views/errorPages/Page500'


/* login */
const Login = _import('login/index');
Vue.use(Router);

export const constantRouterMap = [{
    path: '/login',
    component: Login,
    hidden: true
  },
  {
    path: '/pages',
    redirect: '/pages/p404',
    name: 'Pages',
    component: {
      render(c) {
        return c('router-view')
      }
      // Full,
    },
    children: [{
        path: '404',
        name: 'Page404',
        component: _import('errorPages/Page404')
      },
      {
        path: '500',
        name: 'Page500',
        component: _import('errorPages/Page404')
      },
    ]
  }


]

const routers = new Router({
  mode: 'hash',
  linkActiveClass: 'open active',
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRouterMap
});

routers.beforeEach((to, from, next) => {
  // var storage = window.localStorage;
  // let nowtime = Date.parse(new Date());
  // let time = storage.time
  // let gologin = nowtime - time
  // if (to.path == "/login") {
  //   debugger
  //   next();
  // } else {
  //   debugger
  //   if (storage.tokenlele && gologin < 86400000) {
  //     next()
  //   } else {
  //     next("/login")
  //   }
  // }
  next()
})

export default routers




export const asyncRouterMap = [

  {
    path: '/',
    redirect: '/dashboard',
    name: '首页',
    component: Full,
    hidden: false,
    children: [{
        path: '/dashboard',
        name: '主页',
        icon: 'android-home',
        component: _import('Dashboard')
      },
      {
        path: '/introduction',
        name: '询盘记录',
        icon: 'person-stalker',
        component: _import('Introduction')
      },
      {
        path: '/components',
        name: '我的产品',
        redirect: '/components/buttons',
        icon: 'cube',
        component: {
          render(c) {
            return c('router-view')
          }
        },
        children: [{
            path: 'buttons',
            name: '产品一',
            icon: 'social-youtube',
            component: _import('components/Buttons'),
            hidden: false,
          },
          {
            path: 'hoverbuttons',
            name: '产品二',
            icon: 'wand',
            component: _import('components/HoverButtons')
          },
          {
            path: 'alert',
            name: 'Alert警告提示',
            hidden: true,
            icon: 'alert',
            component: _import('components/Alert')
          },
          {
            path: 'card',
            name: 'Card卡片',
            hidden: true,
            icon: 'ios-browsers-outline',
            component: _import('components/Card')
          },
          {
            path: 'datepicker',
            name: 'DatePicker',
            hidden: true,
            icon: 'ios-calendar-outline',
            component: _import('components/DatePicker')
          },
          {
            path: 'form',
            name: 'Form表单',
            hidden: true,
            icon: 'ios-list-outline',
            component: _import('components/myForm')
          },
          {
            path: 'modal',
            name: 'Modal对话框',
            hidden: true,
            icon: 'ios-chatbubble-outline',
            component: _import('components/Modal')
          },
          {
            path: 'select',
            name: 'Select选择器',
            hidden: true,
            icon: 'ios-arrow-down',
            component: _import('components/Select')
          },
          {
            path: 'spin',
            name: 'Spin加载中',
            hidden: true,
            icon: 'load-d ',
            component: _import('components/Spin')
          },
          {
            path: 'steps',
            name: 'Steps步骤条',
            hidden: true,
            icon: 'ios-checkmark-outline',
            component: _import('components/Steps')
          },
          {
            path: 'timeline',
            name: 'Timeline时间轴',
            hidden: true,
            icon: 'android-more-vertical',
            component: _import('components/Timeline')
          },
          {
            path: 'transfer',
            name: 'Transfer穿梭框',
            hidden: true,
            icon: 'ios-pause-outline',
            component: _import('components/Transfer')
          },
          {
            path: 'timepicker',
            name: 'Timepicker',
            hidden: true,
            icon: 'ios-clock-outline',
            component: _import('components/Timepicker')
          },
          {
            path: 'upload',
            name: 'Upload上传',
            hidden: true,
            icon: 'ios-cloud-upload-outline',
            component: _import('components/Upload')
          },
        ]
      },
      {
        path: '/charts',
        name: '促销活动',
        redirect: '/charts/shopchart',
        icon: 'locked',
        component: {
          render(c) {
            return c('router-view')
          }
        },
        children: [{
            path: 'shopchart',
            name: '促销一',
            icon: 'stats-bars',
            component: _import('charts/ShopChart'),
            hidden: false,
          },
          {
            path: 'radarchart',
            name: '促销二',
            icon: 'arrow-graph-up-right',
            component: _import('charts/RadarChart')
          },
          {
            path: 'cakechart',
            hidden: true,
            name: '蛋糕销量图表',
            icon: 'ios-analytics',
            component: _import('charts/CakeChart')
          }
        ]
      },
      {
        path: '/table',
        name: '统计分析',
        icon: 'pie-graph',
        component: _import('Table'),
        meta: {
          role: ['admin']
        }
      },
      {
        path: '/jsontree',
        name: '采购记录',
        icon: 'ios-cart',
        component: _import('JsonTree')
      },
      {
        path: '/tabledetail/:id',
        name: '筛选配置',
        component: _import('TableDetail'),
        icon: 'funnel'
      },
      {
        path: '/tinymce',
        name: '模板管理',
        icon: "calendar",
        component: _import('Tinymce')
      },
      {
        path: '/markdown',
        name: '设置',
        icon: "gear-a",
        component: _import('Markdown')
      },

    ]
  },

  {
    path: '/home1',
    redirect: '/home1/introduction',
    name: '首页2',
    component: Full2,
    hidden: false,
    children: [{
        path: '/home1/dashboard',
        name: 'Dashboard2',
        icon: 'speedometer',
        component: _import('Dashboard2')
      },
      {
        path: '/home1/introduction',
        name: '介绍2',
        icon: 'thumbsup',
        component: _import('Introduction')
      },

    ]
  },


  {
    path: '*',
    redirect: '/pages/404',
    hidden: true
  }

];