import React from 'react'
import classnames from 'classnames'

// type:primary,default,warn
const Button = ({
  type = 'default',
  loading,
  disabled,
  plain,
  mini,
  onClick,
  children
}) => (
  <button
    className={classnames(
      'weui-btn',
      [
        plain ? `weui-btn_plain-${type}` : `weui-btn_${type}`,
        disabled
          ? plain
            ? 'weui-btn_plain-disabled'
            : 'weui-btn_disabled'
          : ''
      ],
      {
        'weui-btn_loading': loading,
        'weui-btn_mini': mini
      }
    )}
    onClick={e => !loading && !disabled && onClick(e)}
  >
    {loading && <i className="weui-loading" />}
    {children}
  </button>
)

export default Button
