import React from 'react'

import Page from '@/components/Page'
import Button from '@/components/WeUI/Button'

import { alert, confirm } from '@/utils/reminder'

const showDialog = (android, isConfirm) => {
  if (isConfirm)
    confirm({
      msg: 'confirm',
      android
    })
      .then(() => {
        console.log('confirm')
      })
      .catch(() => {
        console.log('cancel')
      })
  else
    alert({
      msg: 'alert',
      android
    }).then(() => {
      console.log('alert')
    })
}

const DialogPage = () => (
  <Page title="Dialog" desc="弹出式菜单" spacing ftbt>
    <Button onClick={() => showDialog(false)}>iOS Alert</Button>
    <Button onClick={() => showDialog(true)}>Android Alert</Button>
    <Button onClick={() => showDialog()}>Alert detected by UA</Button>
    <Button onClick={() => alert(() => <h1>alert</h1>)}>Alert Rich Text</Button>
    <Button onClick={() => showDialog(false, true)}>iOS Confirm</Button>
    <Button onClick={() => showDialog(true, true)}>Android Confirm</Button>
    <Button onClick={() => showDialog(undefined, true)}>
      Confirm detected by UA
    </Button>
    <Button
      onClick={() =>
        confirm(() => (
          <Button
            type="primary"
            onClick={() => console.log('click confirm content')}
          >
            confirm msg
          </Button>
        ))
      }
    >
      Confirm Rich Text
    </Button>
  </Page>
)

export default DialogPage
