import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    
    UERINFO: { // 用户信息
      TOKEN: '12321312',
      LOGINNAME: '',
    },


    menuList: [ // 菜单数据
      {
        title: '项目管理',
        name: '/projectManage',
        icon: '',
        children: []
      },
      {
        title: '报告管理',
        name: '/reportManage',
        icon: '',
        children: []
      },
      {
        title: '市场部研发',
        name: '/marketSearch',
        children: [{
            title: '市场板块',
            name: '/budget',
            icon: '',
            children: [{
                title: '预算表',
                icon: '',
                name: '/budget'
              },
              {
                title: '实际支出台账表',
                icon: '',
                name: '/actualCost'
              },
              {
                title: '结算表',
                icon: '',
                name: '/closeAmount'
              },
            ]
          },
          {
            title: '技术板块',
            icon: '',
            name: 'programmeTpl',
            children: [{
                title: '方案模板管理',
                icon: '',
                name: '/programmeTpl'
              },
              {
                title: '报告模板管理',
                icon: '',
                name: '/reportTpl'
              },
            ]
          }
        ]
      },
      {
        title: '项目管理部',
        name: '/manInfoManage',
        icon: '',
        children: [{
            title: '人员信息库管理',
            name: '/manInfoManage',
            icon: '',
            children: []
          },
          {
            title: '设备信息库管理',
            name: '/deviceInfoManage',
            icon: '',
            children: []
          }
        ]
      },
      {
        title: '系统设置',
        name: '/manager',
        icon: '',
        children: [{
            title: '管理员管理',
            name: '/manager',
            icon: '',
            children: []
          },
          {
            title: '角色管理',
            name: '/rolemanager',
            icon: '',
            children: []
          },
          {
            title: '用户管理',
            name: '/usermanager',
            icon: '',
            children: []
          },
          {
            title: '消息管理',
            name: '/message',
            icon: '',
            children: []
          },
          {
            title: '系统操作日志管理',
            name: '/syslogs',
            icon: '',
            children: []
          }
        ]
      }
    ]


  },
  mutations: {
    saveUserInfo(state,userInfo) {
      state.UERINFO.TOKEN = userInfo.token,
      state.UERINFO.LOGINNAME = userInfo.username
    }
  },
  actions: {
    commitSave(context, userInfo) {
      context.commit('saveUserInfo',userInfo)
    }
  }
})