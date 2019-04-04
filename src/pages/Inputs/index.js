import React, { useState } from 'react'

import classnames from 'classnames'

import Page from '@/components/Page'
import Cells from '@/components/WeUI/Cells'
import Cell from '@/components/WeUI/Cell'
import Radios from '@/components/WeUI/Radios'
import Checkboxes from '@/components/WeUI/Checkboxes'
import CellInput from '@/components/WeUI/CellInput'

import { list, radioKey, checkboxKey, inputList } from './config'

const Inputs = () => {
  const [form, setForm] = useState({})
  const changeForm = (prop, value) => {
    console.log(prop, value)
    const newForm = { ...form, [prop]: value }
    setForm(newForm)
  }
  const inputForm = (prop, value) => {
    console.log(prop, value)
    form[prop] = value
  }
  return (
    <Page title="Inputs" desc="表单">
      <Cells title="单选列表项" radio>
        <Radios
          list={list}
          value={form[radioKey]}
          onChange={v => changeForm(radioKey, v)}
        />
        <Cell className="weui-cell_link" bd="添加更多" />
      </Cells>
      <Cells title="复选列表项" checkbox>
        <Checkboxes
          prop={checkboxKey}
          list={list}
          value={form[checkboxKey]}
          onChange={v => changeForm(checkboxKey, v)}
        />
        <Cell className="weui-cell_link" bd="添加更多" />
      </Cells>
      <Cells title="表单" tips="底部说明文字底部说明文字">
        {inputList.map(([label, prop, inputOptions, ft]) => (
          <CellInput
            key={prop}
            value={form[prop]}
            {...{
              label,
              inputOptions: {
                ...inputOptions,
                placeholder: ['datetime-local', 'date'].includes(
                  inputOptions.type
                )
                  ? undefined
                  : `请输入${label}`
              },
              ft
            }}
            cellClass={classnames({ 'weui-cell_vcode': ft })}
            onChange={e => inputForm(prop, e.target.value)}
          />
        ))}
      </Cells>
      <Cells title="表单报错">
        <CellInput
          err
          label="卡号"
          inputOptions={{
            placeholder: '请输入卡号'
          }}
          onChange={e => inputForm('card', e.target.value)}
        />
      </Cells>
    </Page>
  )
}

export default Inputs
