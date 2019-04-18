import React, { useState } from 'react'

import Page from '@/components/Page'
import Button from '@/components/WeUI/Button'

import { picker } from '@/utils/reminder'
import { step, createList } from '@/utils/arr'

const items = createList(step(100).map(value => [`label-${value}`, value]))

const PickerPage = () => {
  const [value, setValue] = useState(items[50].value)
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
    </Page>
  )
}
export default PickerPage
