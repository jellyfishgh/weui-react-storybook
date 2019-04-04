import React, { useState } from 'react'

import Page from '@/components/Page'
import Cells from '@/components/WeUI/Cells'
import Cell from '@/components/WeUI/Cell'
import Radios from '@/components/WeUI/Radios'
import Checkboxes from '@/components/WeUI/Checkboxes'

const list = new Array(3)
  .fill(0)
  .map((item, value) => ({ label: `label_${value}`, value }))

const radioKey = 'radio'
const checkboxKey = 'checkbox'

const Inputs = () => {
  const [form, setForm] = useState({})
  const changeForm = form => {
    console.log(form)
    setForm(form)
  }
  return (
    <Page title="Inputs" desc="表单">
      <Cells title="单选列表项" radio>
        <Radios
          list={list}
          value={form[radioKey]}
          onChange={v => changeForm({ ...form, [radioKey]: v })}
        />
        <Cell className="weui-cell_link" bd="添加更多" />
      </Cells>
      <Cells title="复选列表项" checkbox>
        <Checkboxes
          prop={checkboxKey}
          list={list}
          value={form[checkboxKey]}
          onChange={v => changeForm({ ...form, [checkboxKey]: v })}
        />
        <Cell className="weui-cell_link" bd="添加更多" />
      </Cells>
      <Cells title="表单" tips="底部说明文字底部说明文字" />
    </Page>
  )
}

export default Inputs
