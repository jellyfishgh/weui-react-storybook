import React from 'react'

import classnames from 'classnames'

const Badge = ({ style, className, dot, children }) => (
  <span
    style={style}
    className={classnames('weui-badge', className, {
      'weui-badge_dot': dot
    })}
  >
    {children}
  </span>
)

export default Badge
