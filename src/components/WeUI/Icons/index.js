import React from 'react'

import classnames from 'classnames'

const Icon = ({ name, msg, className, style }) => (
  <i
    className={classnames(
      `weui-icon-${name}`,
      { 'weui-icon_msg': msg },
      className
    )}
    style={style}
  />
)

export default Icon
