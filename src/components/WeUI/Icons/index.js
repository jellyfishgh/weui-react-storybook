import React from 'react'

import classnames from 'classnames'

const Icon = ({ name, className, style }) => (
  <i className={classnames(`weui-icon-${name}`, className)} style={style} />
)

export default Icon
