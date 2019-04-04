import React from 'react'

const Switch = ({ value, onChange, ie }) =>
  ie ? (
    <div className="weui-switch-cp" onClick={() => onChange(!value)}>
      <input
        type="checkbox"
        className="weui-switch-cp__input"
        checked={value}
      />
      <div className="weui-switch-cp__box" />
    </div>
  ) : (
    <input
      type="checkbox"
      className="weui-switch"
      checked={value}
      onChange={() => onChange(!value)}
    />
  )

export default Switch
