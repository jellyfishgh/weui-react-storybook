import React, { useState } from 'react'
import classnames from 'classnames'

import { isAndroid } from '@/utils/ua'

const Actionsheet = ({
  onConfirm,
  onCancel,
  items,
  title = '请选择',
  cancelTxt,
  android = isAndroid()
}) => {
  const [style, setStyle] = useState({})
  const hide = () => setStyle({ display: 'none' })
  const cancelHandler = () => {
    hide()
    onCancel && onCancel()
  }
  if (!cancelTxt) cancelTxt = '取消'
  return (
    <div
      className={classnames('weui-mask', {
        'weui-skin_android': android
      })}
      style={style}
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
                hide()
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
    </div>
  )
}

export default Actionsheet
