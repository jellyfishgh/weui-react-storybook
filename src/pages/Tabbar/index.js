import React, { useState } from 'react'

import Page from '@/components/Page'
import Tabbar from '@/components/WeUI/Tabbar'

const TabbarPage = () => {
  const [index, setIndex] = useState(0)
  const items = [
    [
      '微信',
      {
        className: 'absolute',
        style: {
          top: '-2px',
          right: '-13px'
        },
        children: 8
      }
    ],
    ['通讯录'],
    [
      '发现',
      {
        dot: true,
        className: 'absolute',
        style: {
          top: 0,
          right: '-6px'
        }
      }
    ],
    ['我']
  ].map(([label, badge]) => ({
    label,
    badge,
    icon: require('@/assets/imgs/icon_tabbar.png')
  }))
  return (
    <Page ft={null} className="full-h" bdClass="full-h">
      <Tabbar items={items} onChange={setIndex} defaultIndex={index}>
        <div className="txt-center p-c-m">{items[index].label}</div>
      </Tabbar>
    </Page>
  )
}

export default TabbarPage
