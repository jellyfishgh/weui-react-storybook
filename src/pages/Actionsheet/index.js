import React, { useState } from 'react'

import Page from '@/components/Page'
import Button from '@/components/WeUI/Button'

import { step, createList } from '@/utils/arr'
import { actionsheet } from '@/utils/reminder'

const items = createList(step(5).map(item => [`示例菜单${item}`, item]))

const showActionsheet = (android, cb) =>
  actionsheet({
    items,
    android
  })
    .then(value => {
      console.log(value)
      cb && cb(value)
    })
    .catch(() => {
      console.log('cancel')
    })

const ActionsheetPage = () => {
  const [v, setV] = useState('')
  return (
    <Page title="ActionSheet" desc="弹出式菜单" spacing ftbt>
      <div>当前选择：{v}</div>
      <Button onClick={() => showActionsheet(false, setV)}>
        iOS Actionsheet
      </Button>
      <Button onClick={() => showActionsheet(true, setV)}>
        Android Actionsheet
      </Button>
      <Button onClick={() => showActionsheet(undefined, setV)}>
        Actionsheet detected by UA
      </Button>
    </Page>
  )
}

export default ActionsheetPage
