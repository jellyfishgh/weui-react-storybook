import React, { useState } from 'react'

import Tab from '@/components/WeUI/Tab'
import Item from './Item'

const Tabbar = ({ items, children, onChange, defaultIndex = 0 }) => {
  const [index, setIndex] = useState(defaultIndex)
  const postfix = () => (
    <div className="weui-tabbar">
      {items.map((item, key) => (
        <Item
          {...item}
          active={key === index}
          key={key}
          onClick={() => {
            setIndex(key)
            onChange && onChange(key)
          }}
        />
      ))}
    </div>
  )
  return <Tab postfix={postfix}>{children}</Tab>
}

export default Tabbar
