import React from 'react'

import Page from '@/components/Page'
import Button from '@/components/WeUI/Button'

import { toast, loading, stopLoading } from '@/utils/reminder'

const Toast = () => (
  <Page title="Toast" desc="弹出式提示" spacing ftbt>
    <Button
      onClick={() => {
        toast({
          msg: 'Hello Success Toast',
          icon: true
        })
      }}
    >
      Success Toast
    </Button>
    <Button onClick={() => toast('Hello Txt Toast')}>Txt Toast</Button>
    <Button
      onClick={() => {
        loading()
        window.setTimeout(stopLoading, 1500)
      }}
    >
      Loading
    </Button>
  </Page>
)

export default Toast
