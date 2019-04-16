import React, { useState } from 'react'
import classnames from 'classnames'

import Mask from '@/components/WeUI/Mask'

import { isAndroid } from '@/utils/ua'

const Actionsheet = ({
  onConfirm,
  onCancel,
  items,
  title = '请选择',
  cancelTxt,
  android = isAndroid()
}) => {
  const [hide, setHide] = useState(false)
  const cancelHandler = () => {
    setHide(true)
    onCancel && onCancel()
  }
  if (!cancelTxt) cancelTxt = '取消'
  return (
    <Mask
      {...{ hide, android }}
      onClick={e => {
        if (android && e.target === e.currentTarget) {
          cancelHandler()
        }
      }}
    >
      <div
        className={classnames('weui-actionsheet', {
          'weui-actionsheet_toggle': !android
        })}
      >
        {!android && title && (
          <div className="weui-actionsheet__title">{title}</div>
        )}
        <div className="weui-actionsheet__menu">
          {items.map(({ label, value }) => (
            <div
              className="weui-actionsheet__cell"
              key={value}
              onClick={() => {
                setHide(true)
                onConfirm && onConfirm(value)
              }}
            >
              {label}
            </div>
          ))}
        </div>
        {!android && (
          <div className="weui-actionsheet__action">
            <div className="weui-actionsheet__cell" onClick={cancelHandler}>
              {cancelTxt}
            </div>
          </div>
        )}
      </div>
    </Mask>
  )
}

export default Actionsheet
