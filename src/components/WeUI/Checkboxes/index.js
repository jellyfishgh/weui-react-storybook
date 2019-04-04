import React, { Fragment } from 'react'

import Cell from '@/components/WeUI/Cell'

const Checkboxes = ({ list, value, onChange }) => (
  <Fragment>
    {list.map(item => (
      <Cell
        key={item.value}
        bd={item.label}
        onClick={() => {
          let newValue = value || []
          newValue = [...newValue]
          if (newValue.includes(item.value)) {
            newValue = newValue.filter(v => v !== item.value)
          } else {
            newValue.push(item.value)
          }
          onChange(newValue)
        }}
        ft={() => (
          <Fragment>
            <input
              type="checkbox"
              className="weui-check"
              readOnly
              checked={value && value.includes(item.value)}
            />
            <span className="weui-icon-checked" />
          </Fragment>
        )}
      />
    ))}
  </Fragment>
)

export default Checkboxes
