import React, { useState } from 'react'

import ALink from '@/components/ALink'
import Mask from '@/components/WeUI/Mask'

import PickerGroup from './PickerGroup'

import { getIndex } from '@/utils/arr'

const Picker = ({
  items,
  title,
  value = [],
  onChange,
  onConfirm,
  onCancel
}) => {
  const [hide, setHide] = useState(false)
  const [index, setIndex] = useState(
    items.map((group, index) =>
      getIndex(value[index], group, (item, v) => item.value === v, 0)
    )
  )
  const cancelHandler = () => {
    setHide(true)
    onCancel && onCancel()
  }
  const confirmHandler = () => {
    setHide(true)
    onConfirm &&
      onConfirm(
        items.map((group, groupIndex) => group[index[groupIndex]].value)
      )
  }
  return (
    <Mask className={`weui-animate-fade-${hide ? 'out' : 'in'}`} {...{ hide }}>
      <div className={`weui-picker weui-animate-slide-${hide ? 'down' : 'up'}`}>
        <div className="weui-picker__hd">
          <ALink className="weui-picker__action" onClick={cancelHandler}>
            取消
          </ALink>
          {title && <div className="txt-info txt-center">{title}</div>}
          <ALink className="weui-picker__action" onClick={confirmHandler}>
            确定
          </ALink>
        </div>
        <div className="weui-picker__bd">
          {items.map((group, groupIndex) => (
            <PickerGroup
              key={groupIndex}
              items={group}
              index={index[groupIndex]}
              onChange={selectedIndex => {
                const newIndex = [...index]
                newIndex[groupIndex] = selectedIndex
                setIndex(newIndex)
                onChange && onChange(newIndex)
              }}
            />
          ))}
        </div>
      </div>
    </Mask>
  )
}

export default Picker
