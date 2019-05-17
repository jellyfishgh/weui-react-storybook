import React from 'react'
import classnames from 'classnames'

import Tab from './Tab'

const Navbar = ({ index = 0, onChange, items, children }) => {
  return (
    <Tab>
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
      <div className="weui-tab__panel">{children}</div>
    </Tab>
  )
}

export default Navbar
