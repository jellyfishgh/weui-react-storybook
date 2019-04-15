import React, { Fragment } from 'react'

import Page from '@/components/Page'
import Grid from '@/components/WeUI/Grid'

import { step } from '@/utils/arr'

const getItems = count =>
  step(Math.pow(count, 2)).map(item => ({
    label: `Grid${item}`,
    icon: () => (
      <img src={require('@/assets/imgs/icon_tabbar.png')} alt="icon_tabbar" />
    )
  }))

const GridPage = () => (
  <Page title="Grid" desc="九宫格" ftbt>
    {step(6, 1).map(count => (
      <Fragment key={count}>
        <div className="m-s">{count} grid</div>
        <Grid
          count={count}
          onClick={index => console.log(`click ${index}`)}
          items={getItems(count)}
        />
      </Fragment>
    ))}
  </Page>
)

export default GridPage
