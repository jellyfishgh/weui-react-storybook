import React, { useState } from 'react'

import Page from '@/components/Page'
import Button from '@/components/WeUI/Button'

import { picker, datePicker } from '@/utils/reminder'
import { step, createList } from '@/utils/arr'

const items = createList(step(100).map(value => [`label-${value}`, value]))

const PickerPage = () => {
  const [value, setValue] = useState(items[50].value)
  const [date, setDate] = useState('2010/10/10')
  const start = '2000/05/03'
  const end = '2015/10/20'
  return (
    <Page title="Picker" desc="选择器" spacing ftbt>
      <Button
        onClick={() => {
          picker({
            items,
            title: '单列Picker',
            value
          }).then(v => setValue(v))
        }}
      >
        单列 Picker-{value}
      </Button>
      <Button
        onClick={() => {
          datePicker({
            start,
            end,
            value: date
          })
            .then(setDate)
            .catch(() => console.log('cancel date pick'))
        }}
      >
        日期 DatePicker -{date}
      </Button>
    </Page>
  )
}
export default PickerPage
