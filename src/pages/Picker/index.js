import React from 'react'

import Page from '@/components/Page'
import Button from '@/components/WeUI/Button'

import { picker } from '@/utils/reminder'
import { step, createList } from '@/utils/arr'

const items = createList(step(100).map(value => [`label${value}`, value]))

const PickerPage = () => (
  <Page title="Toast" desc="弹出式提示" spacing ftbt>
    <Button
      onClick={() => {
        picker({
          items,
          title: '单列Picker'
        })
      }}
    >
      单列 Picker
    </Button>
  </Page>
)

export default PickerPage
