import React, { Fragment } from 'react'

import Page from '@/components/Page'
import Cells from '@/components/WeUI/Cells'
import Cell from '@/components/WeUI/Cell'
import SwipedButton from '@/components/WeUI/SwipedButton'

const List = () => (
  <Page title="List" desc="列表">
    <Cells title="带说明的列表项">
      <Cell bd="标题文字" ft="说明文字" />
      <Cell
        bd={() => <Cell bd="标题文字" ft="说明文字" />}
        ft={() => <SwipedButton>删除</SwipedButton>}
        swiped
      />
      <Cell
        bd={() => <Cell bd="标题文字" ft="说明文字" />}
        ft={({ reset }) => (
          <Fragment>
            {['primary', 'default', 'warn'].map(type => (
              <SwipedButton
                type={type}
                key={type}
                onClick={() => {
                  console.log(type)
                  reset && reset()
                }}
              >
                {type}
              </SwipedButton>
            ))}
          </Fragment>
        )}
        swiped
      />
    </Cells>
    <Cells title="带图标、说明的列表项">
      <Cell
        hd={() => <img src={require('./icon.png')} alt="icon" />}
        bd="标题文字"
        ft="说明文字"
      />
    </Cells>
    <Cells title="带跳转的列表项">
      <Cell access bd="cell standard" />
    </Cells>
    <Cells title="带说明、跳转的列表项">
      <Cell access bd="cell standard" ft="说明文字" />
    </Cells>
    <Cells title="带图标、说明、跳转的列表项">
      <Cell
        hd={() => <img src={require('./icon.png')} alt="icon" />}
        access
        bd="cell standard"
        ft="说明文字"
      />
    </Cells>
  </Page>
)

export default List
