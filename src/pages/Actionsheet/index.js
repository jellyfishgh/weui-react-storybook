import React from 'react'

import Page from '@/components/Page'
import Button from '@/components/WeUI/Button'

import { step, createList } from '@/utils/arr'
import { actionsheet } from '@/utils/reminder'

const items = createList(step(5).map(item => [`示例菜单${item}`, item]))

const showActionsheet = android =>
  actionsheet({
    items,
    android
  })
    .then(value => {
      console.log(value)
    })
    .catch(() => {
      console.log('cancel')
    })

const ActionsheetPage = () => (
  <Page title="ActionSheet" desc="弹出式菜单" spacing ftbt>
    <Button onClick={() => showActionsheet(false)}>iOS Actionsheet</Button>
    <Button onClick={() => showActionsheet(true)}>Android Actionsheet</Button>
    <Button onClick={() => showActionsheet()}>
      Actionsheet detected by UA
    </Button>
  </Page>
)

export default ActionsheetPage
