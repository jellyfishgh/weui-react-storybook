import React from 'react'
import classnames from 'classnames'

import Tab from '@/components/WeUI/Tab'

const Navbar = ({ index = 0, onChange, items, children }) => {
  return (
    <Tab
      prefix={() => (
        <div className="weui-navbar">
          {items.map((item, key) => (
            <div
              key={key}
              className={classnames('weui-navbar__item', {
                'weui-bar__item_on': key === index
              })}
              onClick={() => onChange(key)}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    >
      {children}
    </Tab>
  )
}

export default Navbar
