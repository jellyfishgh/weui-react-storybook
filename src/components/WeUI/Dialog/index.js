import React, { useState } from 'react'

import Mask from '@/components/WeUI/Mask'

import { isAndroid } from '@/utils/ua'
import { renderEle, renderDlgBtns } from '@/utils/ele'

const Dialog = ({
  title = '温馨提示',
  msg,
  btns,
  onClick,
  android = isAndroid()
}) => {
  const [hide, setHide] = useState(false)
  return (
    <Mask {...{ hide, android }}>
      <div className="weui-dialog">
        <div className="weui-dialog__hd">
          <strong className="weui-dialog__title">{title}</strong>
        </div>
        <div className="weui-dialog__bd">{renderEle(msg)}</div>
        <div className="weui-dialog__ft">
          {renderDlgBtns(btns, 'weui-dialog__btn', index => {
            setHide(true)
            onClick && onClick(index)
          })}
        </div>
      </div>
    </Mask>
  )
}
export default Dialog
