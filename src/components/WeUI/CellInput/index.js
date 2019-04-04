import React from 'react'

import classnames from 'classnames'

import Cell from '@/components/WeUI/Cell'
import Input from '@/components/WeUI/Input'

const CellInput = ({
  cellClass,
  label,
  value,
  onChange,
  onInput,
  inputOptions,
  ft,
  err
}) => (
  <Cell
    className={classnames(cellClass, { 'weui-cell_warn': err })}
    hd={() => <label className="weui-label">{label}</label>}
    bd={() => <Input {...{ value, onChange, onInput, ...inputOptions }} />}
    ft={ft || (err ? () => <i className="weui-icon-warn" /> : null)}
  />
)

export default CellInput
