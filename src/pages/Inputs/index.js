import React, { useState } from 'react'

import classnames from 'classnames'

import Page from '@/components/Page'
import Cells from '@/components/WeUI/Cells'
import Cell from '@/components/WeUI/Cell'
import Radios from '@/components/WeUI/Radios'
import Checkboxes from '@/components/WeUI/Checkboxes'
import CellInput from '@/components/WeUI/CellInput'
import Switch from '@/components/WeUI/Switch'
import Input from '@/components/WeUI/Input'
import Textarea from '@/components/WeUI/Textarea'

import { list, radioKey, checkboxKey, switchKey, inputList } from './config'

const Inputs = () => {
  const [form, setForm] = useState({})
  const changeForm = (prop, value) => {
    const newForm = { ...form, [prop]: value }
    console.log(newForm)
    setForm(newForm)
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
            defaultValue={form[prop]}
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
            onBlur={e => changeForm(prop, e.target.value)}
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
          defaultValue={form.card}
          onBlur={e => changeForm('card', e.target.value)}
        />
      </Cells>
      <Cells title="开关">
        <Cell
          bd="标准开关"
          ft={() => (
            <Switch
              value={form[switchKey]}
              onChange={v => changeForm(switchKey, v)}
            />
          )}
        />
        <Cell
          bd="兼容 IE 和 Edge 的开关"
          ft={() => (
            <Switch
              value={form[switchKey]}
              onChange={v => changeForm(switchKey, v)}
            />
          )}
        />
      </Cells>
      <Cells title="文本框">
        <Cell
          bd={() => (
            <Input
              placeholder="请输入文本"
              defaultValue={form.text}
              onBlur={e => changeForm('text', e.target.value)}
            />
          )}
        />
      </Cells>
      <Cells title="文本域">
        <Cell
          bd={() => (
            <Textarea
              placeholder="请输入文本"
              defaultValue={form.textarea}
              maxLength={200}
              onBlur={e => changeForm('textarea', e.target.value)}
            />
          )}
        />
      </Cells>
    </Page>
  )
}

export default Inputs
