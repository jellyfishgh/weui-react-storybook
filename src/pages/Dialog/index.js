import React from 'react'

import Page from '@/components/Page'
import Image from '@/components/Image'
import Button from '@/components/WeUI/Button'

import { alert, confirm } from '@/utils/reminder'
import { step } from '@/utils/arr'

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

const title =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquid suscipit assumenda quo officia optio laudantium iste? Architecto dolorem a necessitatibus ut iusto, voluptates ad accusantium vel animi incidunt qui.'

const showLong = show =>
  show({
    title,
    msg: step(10)
      .map(() => title)
      .join('\n'),
    confirmTxt: '确定'
  })

const DialogPage = () => (
  <Page title="Dialog" desc="弹出式菜单" spacing ftbt>
    <Button onClick={() => showDialog(false)}>iOS Alert</Button>
    <Button onClick={() => showDialog(true)}>Android Alert</Button>
    <Button onClick={() => showDialog()}>Alert detected by UA</Button>
    <Button onClick={() => alert(() => <Image name="WeUI.png" />)}>
      Alert Rich Text
    </Button>
    <Button onClick={() => showLong(alert)}>Alert Long Txt</Button>
    <Button onClick={() => showLong(confirm)}>Confirm Long Txt</Button>
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
