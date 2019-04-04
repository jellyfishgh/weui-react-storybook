import React from 'react'

import { renderEle } from '@/utils/ele'

const AgreeBox = ({ value, onChange, txt }) => {
  const id = `agreebox_${Date.now()}_${Math.random()}`
  return (
    <label className="weui-agree" htmlFor={id}>
      <input
        id={id}
        type="checkbox"
        className="weui-agree__checkbox"
        checked={!!value}
        onChange={() => onChange(!value)}
      />
      <span className="weui-agree__text">{renderEle(txt)}</span>
    </label>
  )
}
export default AgreeBox
