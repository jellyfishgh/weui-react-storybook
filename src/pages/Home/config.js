import { upFirst } from '@/utils/str'

export const desc =
  'WeUI 是一套同微信原生视觉体验一致的基础样式库，由微信官方设计团队为微信内网页和微信小程序量身设计，令用户的使用感知更加统一。'

const createPathItem = path => ({
  path: `/${path}`,
  label: upFirst(path)
})

export const home = createPathItem('home')

export const items = [
  ['表单', 'form', ['buttons', 'inputs', 'list', 'slider', 'uploader']],
  [
    '基础组件',
    'layout',
    [
      'article',
      'badge',
      'flex',
      'footer',
      'gallery',
      'grid',
      'icons',
      'loadmore',
      'panel',
      'preview',
      'progress'
    ]
  ],
  ['操作反馈', 'feedback', ['actionsheet', 'dialog', 'msg', 'picker', 'toast']],
  ['导航相关', 'nav', ['navbar', 'tabbar']],
  ['搜索相关', 'search', ['searchbar']],
  ['层级规范', 'z-index', ['layers']]
].map(([title, icon, items]) => ({
  title,
  icon: `icon_nav_${icon}`,
  items: items.map(createPathItem)
}))
