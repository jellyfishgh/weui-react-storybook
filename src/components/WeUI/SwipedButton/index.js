import React from 'react'
import classnames from 'classnames'

const SwipedButton = ({ children, onClick, style, type = 'warn' }) => (
  <a
    href="void(0);"
    style={style}
    className={classnames('weui-swiped-btn', `weui-swiped-btn_${type}`)}
    onClick={e => {
      e.preventDefault()
      onClick && onClick()
    }}
  >
    {children}
  </a>
)

export default SwipedButton
