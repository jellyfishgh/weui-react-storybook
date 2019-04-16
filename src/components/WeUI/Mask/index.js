import React from 'react'
import classnames from 'classnames'

const Mask = ({ transparent, hide, android, onClick, children }) => (
  <div
    className={classnames(transparent ? 'weui-mask_transparent' : 'weui-mask', {
      hide,
      'weui-skin_android': android
    })}
    onClick={onClick}
  >
    {children}
  </div>
)

export default Mask
