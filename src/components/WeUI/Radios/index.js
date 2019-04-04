import React, { Fragment } from 'react'

import Cell from '@/components/WeUI/Cell'

const Radios = ({ list, value, onChange }) => (
  <Fragment>
    {list.map(item => (
      <Cell
        key={item.value}
        bd={item.label}
        onClick={() => item.value !== value && onChange(item.value)}
        ft={() => (
          <Fragment>
            <input
              type="radio"
              className="weui-check"
              checked={value === item.value}
              readOnly
            />
            <span className="weui-icon-checked" />
          </Fragment>
        )}
      />
    ))}
  </Fragment>
)

export default Radios
