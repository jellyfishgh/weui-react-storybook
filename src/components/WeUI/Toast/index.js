import React, { useState } from 'react'

import Mask from '@/components/WeUI/Mask'
import { SuccessNoCircle } from '@/components/WeUI/Icon/icons'

const Toast = ({ icon, msg, timeout = 1500 }) => {
  const [hide, setHide] = useState(false)
  if (timeout && icon !== 'loading') {
    window.setTimeout(() => {
      setHide(true)
    }, timeout)
  }
  return (
    <Mask hide={hide} transparent>
      <div className="weui-toast">
        {icon &&
          (icon === 'loading' ? (
            <i className="weui-loading weui-icon_toast" />
          ) : (
            <SuccessNoCircle className="weui-icon_toast" />
          ))}
        <p className="weui-toast__content">{msg}</p>
      </div>
    </Mask>
  )
}
export default Toast
