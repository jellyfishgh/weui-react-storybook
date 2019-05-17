import React, { useState } from 'react'

import Picker from './index'

import { getItemsBetween } from '@/utils/date'

const DatePicker = ({ start, end, value, onConfirm, onCancel }) => {
  const [v, setV] = useState(value.split('/'))
  const [items, setItems] = useState(getItemsBetween(start, end, v))
  const confirmHandler = confirmedValue => {
    onConfirm && onConfirm(confirmedValue.join('/'))
  }
  const onChange = changedValue => {
    // y变换时m需要变化
    if (v[0] !== changedValue[0]) {
      const newV = [...v]
      newV[0] = changedValue[0]
      changedValue[1] = getItemsBetween(start, end, newV)[1][0].value
    }
    // m变换时d需要变化
    if (v[1] !== changedValue[1]) {
      changedValue[2] = getItemsBetween(start, end, changedValue)[2][0].value
    }
    const items = getItemsBetween(start, end, changedValue)
    setV(changedValue)
    setItems(items)
  }
  return (
    <Picker
      title="日期"
      items={items}
      onConfirm={confirmHandler}
      onCancel={onCancel}
      onChange={onChange}
      value={v}
    />
  )
}

export default DatePicker
