import React from 'react'

import Page from '@/components/Page'
import Progress from '@/components/WeUI/Progress'
import BtnArea from '@/components/WeUI/BtnArea'
import Button from '@/components/WeUI/Button'

const ProgressPage = () => (
  <Page title="Progress" desc="进度条" ftbt spacing>
    <Progress />
    <br />
    <Progress precent="50" onCancel={() => console.log('cancel')} />
    <br />
    <Progress precent={80} />
    <BtnArea>
      <Button type="primary">上传</Button>
    </BtnArea>
  </Page>
)

export default ProgressPage
