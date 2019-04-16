import React from 'react'
import classnames from 'classnames'

const Mask = ({ hide, android, onClick, children }) => (
  <div
    className={classnames('weui-mask', {
      hide,
      'weui-skin_android': android
    })}
    onClick={onClick}
  >
    {children}
  </div>
)

export default Mask
