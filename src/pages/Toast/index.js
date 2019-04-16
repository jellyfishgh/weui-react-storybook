import React from 'react'

import Page from '@/components/Page'
import Button from '@/components/WeUI/Button'

import { toast, loading } from '@/utils/reminder'

const Toast = () => (
  <Page title="Toast" desc="弹出式提示" spacing ftbt>
    <Button
      onClick={() => {
        toast({
          msg: 'Hello Toast',
          icon: true
        })
      }}
    >
      Toast
    </Button>
    <Button onClick={() => loading()}>Loading</Button>
  </Page>
)

export default Toast
