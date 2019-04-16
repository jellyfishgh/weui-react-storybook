import React from 'react'

import Page from '@/components/Page'
import Msg from '@/components/WeUI/Msg'

import store from './store'

const Result = props => (
  <Page title="结果页" hd={null} ft={null}>
    <Msg {...props} />
  </Page>
)

export default () => <Result {...store.result} />
