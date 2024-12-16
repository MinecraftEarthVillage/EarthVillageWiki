import type { NavLink } from '../.vitepress/theme/types'

type NavData = {
  title: string
  items: NavLink[]
}

export const NAV_DATA: NavData[] = [
  {
    title: '常用工具',
    items: [
      {
        icon: 'https://caniuse.com/img/favicon-128.png',
        title: '地图集',
        desc: '可以让你随时查看不同视角地图，还能作为聊天室',
        link: 'https://map.earthvillage.top',
      },
      {
        icon: 'https://tinypng.com/images/apple-touch-icon.png',
        title: '菜单',
        desc: '几乎所有的功能都在里面了',
        link: '/md/菜单/菜单',
      },
      {
        icon: 'https://devtool.tech/logo.svg',
        title: 'MOD全家桶',
        desc: '地球村可用MOD全家桶，解锁所有玩法最好的选择！',
        link: 'https://www.123pan.com/s/WiuUVv-KNG0H.html',
      },
/*       {
        icon: 'https://tool.lu/favicon.ico',
        title: '在线工具',
        desc: '开发人员的工具箱',
        link: 'https://tool.lu',
      }, */
/*       {
        icon: '/icons/json-cn.ico',
        title: 'Json 中文网',
        desc: 'JSON 在线解析及格式化验证',
        link: 'https://www.json.cn',
      }, */
    ],
  },
  {
    title: '交通系统',
    items: [
      {
        icon: '/logo.png',
        title: 'MTR铁路系统',
        desc: '不只是轨道~',
        link: '/md/mtr',
      },
      {
        icon: '/logo.png',
        title: '公路与自由载具',
        desc: '用思维导图的方式总结个人所学知识',
        link: '/md/载具',
      },

    ],
  },
  {
    title: '领主与领地',
    items: [
      {
        icon: 'https://qwerty.fe-mm.com/apple-touch-icon.png',
        title: '王国系统',
        desc: '为团体服务的领地保护与国战系统',
        link: 'https://qwerty.fe-mm.com',
      },
      {
        icon: '/logo.png',
        title: '个人领地',
        desc: '面向个人的领地保护系统',
        link: 'https://netease-music.fe-mm.com',
      },
    ],
  },
]
