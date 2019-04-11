import React from 'react'

import Page from '@/components/Page'
import Grid from '@/components/WeUI/Grid'

import { step } from '@/utils/arr'

const GridPage = () => (
  <Page title="Grid" desc="九宫格" ftbt>
    <Grid
      onClick={index => console.log(`click ${index}`)}
      items={step(9).map((item, index) => ({
        label: `Grid${index}`,
        icon: () => (
          <img
            src={require('@/assets/imgs/icon_tabbar.png')}
            alt="icon_tabbar"
          />
        )
      }))}
    />
  </Page>
)

export default GridPage
