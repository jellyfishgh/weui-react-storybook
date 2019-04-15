import React from 'react'
import classnames from 'classnames'

import ALink from '@/components/ALink'

const SwipedButton = ({ children, onClick, style, type = 'warn' }) => (
  <ALink
    style={style}
    className={classnames('weui-swiped-btn', `weui-swiped-btn_${type}`)}
    onClick={onClick}
  >
    {children}
  </ALink>
)

export default SwipedButton
